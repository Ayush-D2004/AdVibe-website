export const OAUTH_CONFIG = {
  google: {
    clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID,
    redirectUrl: `${import.meta.env.VITE_SUPABASE_URL}/auth/v1/callback`
  }
}; 