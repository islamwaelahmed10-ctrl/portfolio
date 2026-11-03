// GitHub sign-in for the dashboard at /admin (Sveltia CMS), running as Cloudflare Pages Functions.
// Adapted from Sveltia CMS Authenticator (https://github.com/sveltia/sveltia-cms-auth, MIT), GitHub only.
// Needs these Pages environment variables: GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET (encrypted), ALLOWED_DOMAINS.

const ALLOWED_SCOPES = ['repo', 'public_repo', 'user', 'read:user', 'user:email'];
const DEFAULT_SCOPE = 'public_repo';

const escapeRegExp = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const domainPatterns = (list) =>
  (list ?? '').split(',').map((s) => s.trim()).filter(Boolean)
    .map((s) => `^${escapeRegExp(s).replaceAll('\\*', '.+')}$`);
const serialize = (v) => JSON.stringify(v ?? null).replaceAll('<', '\\u003c');

const scopeFor = (requested) => {
  const scopes = (requested ?? '').split(/[\s,]+/).filter(Boolean);
  return scopes.length && scopes.every((s) => ALLOWED_SCOPES.includes(s)) ? scopes.join(',') : DEFAULT_SCOPE;
};

// Page shown in the sign-in popup; hands the token to the CMS window only if it's on an allowed domain.
const reply = ({ token, error, errorCode, env = {} }) => {
  const state = error ? 'error' : 'success';
  const content = error ? { provider: 'github', error, errorCode } : { provider: 'github', token };
  return new Response(
    `<!doctype html><html><body><script>
(() => {
  const trusted = ${serialize(domainPatterns(env.ALLOWED_DOMAINS))};
  const hasToken = ${serialize(!!token)};
  const ok = (origin) => { try { const { hostname } = new URL(origin); return trusted.some((p) => new RegExp(p).test(hostname)); } catch { return false; } };
  window.addEventListener('message', ({ data, origin }) => {
    if (data !== 'authorizing:github') return;
    if (hasToken && trusted.length && !ok(origin)) return;
    window.opener?.postMessage('authorization:github:${state}:' + ${serialize(JSON.stringify(content))}, origin);
  });
  window.opener?.postMessage('authorizing:github', '*');
})();
</script></body></html>`,
    {
      headers: {
        'Content-Type': 'text/html;charset=UTF-8',
        'Set-Cookie': 'csrf-token=deleted; HttpOnly; Max-Age=0; Path=/; SameSite=Lax; Secure',
      },
    },
  );
};

export const handleAuth = async (request, env) => {
  const { searchParams } = new URL(request.url);
  const provider = searchParams.get('provider');
  const domain = searchParams.get('site_id') ?? '';
  if (provider !== 'github') return reply({ env, error: 'Only GitHub is supported.', errorCode: 'UNSUPPORTED_BACKEND' });
  const patterns = domainPatterns(env.ALLOWED_DOMAINS);
  if (patterns.length && !patterns.some((p) => new RegExp(p).test(domain))) {
    return reply({ env, error: 'Your domain is not allowed to use the authenticator.', errorCode: 'UNSUPPORTED_DOMAIN' });
  }
  if (!env.GITHUB_CLIENT_ID || !env.GITHUB_CLIENT_SECRET) {
    return reply({ env, error: 'OAuth app client ID or secret is not configured.', errorCode: 'MISCONFIGURED_CLIENT' });
  }
  const csrf = crypto.randomUUID().replaceAll('-', '');
  const params = new URLSearchParams({ client_id: env.GITHUB_CLIENT_ID, scope: scopeFor(searchParams.get('scope')), state: csrf });
  return new Response('', {
    status: 302,
    headers: {
      Location: `https://github.com/login/oauth/authorize?${params}`,
      'Set-Cookie': `csrf-token=github_${csrf}; HttpOnly; Path=/; Max-Age=600; SameSite=Lax; Secure`,
    },
  });
};

export const handleCallback = async (request, env) => {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');
  const state = searchParams.get('state');
  const [, csrf] = request.headers.get('Cookie')?.match(/\bcsrf-token=github_([0-9a-f]{32})\b/) ?? [];
  if (!code || !state) return reply({ env, error: 'Failed to receive an authorization code. Please try again.', errorCode: 'AUTH_CODE_REQUEST_FAILED' });
  if (!csrf || state !== csrf) return reply({ env, error: 'Potential CSRF attack detected. Sign-in aborted.', errorCode: 'CSRF_DETECTED' });
  if (!env.GITHUB_CLIENT_ID || !env.GITHUB_CLIENT_SECRET) {
    return reply({ env, error: 'OAuth app client ID or secret is not configured.', errorCode: 'MISCONFIGURED_CLIENT' });
  }
  let res;
  try {
    res = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({ code, client_id: env.GITHUB_CLIENT_ID, client_secret: env.GITHUB_CLIENT_SECRET }),
    });
  } catch {
    return reply({ env, error: 'Failed to request an access token. Please try again.', errorCode: 'TOKEN_REQUEST_FAILED' });
  }
  try {
    const { access_token: token, error } = await res.json();
    return reply({ env, token, error });
  } catch {
    return reply({ env, error: 'GitHub responded with malformed data. Please try again.', errorCode: 'MALFORMED_RESPONSE' });
  }
};
