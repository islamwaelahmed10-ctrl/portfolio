import { handleAuth } from '../cms-auth/oauth.js';
export const onRequestGet = ({ request, env }) => handleAuth(request, env);
