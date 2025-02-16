/*
  # Enable OAuth Providers
  
  1. Changes
    - Create auth.providers table if it doesn't exist
    - Enable OAuth providers (Google, LinkedIn, Facebook, Instagram)
    
  2. Security
    - Table is created in the auth schema
    - Only system-level access is allowed
*/

-- Create providers table if it doesn't exist
CREATE TABLE IF NOT EXISTS auth.providers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  provider_id text NOT NULL UNIQUE,
  enabled boolean NOT NULL DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable OAuth providers
INSERT INTO auth.providers (provider_id, enabled)
VALUES
  ('google', true),
  ('linkedin', true),
  ('facebook', true),
  ('instagram', true)
ON CONFLICT (provider_id) 
DO UPDATE SET 
  enabled = EXCLUDED.enabled,
  updated_at = now();