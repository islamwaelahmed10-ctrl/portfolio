import { handleCallback } from '../cms-auth/oauth.js';
export const onRequestGet = ({ request, env }) => handleCallback(request, env);
