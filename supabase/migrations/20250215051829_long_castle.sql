/*
  # Registration System Tables

  1. New Tables
    - `registrations`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `type` (enum: 'business' or 'influencer')
      - `status` (enum: 'pending', 'approved', 'rejected')
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `business_profiles`
      - `id` (uuid, primary key)
      - `registration_id` (uuid, references registrations)
      - `company_name` (text)
      - `company_size` (integer)
      - `website_url` (text)
      - `niches` (text array)
      - `additional_details` (jsonb)
    
    - `influencer_profiles`
      - `id` (uuid, primary key)
      - `registration_id` (uuid, references registrations)
      - `full_name` (text)
      - `social_media_profiles` (jsonb)
      - `niches` (text array)
      - `audience_metrics` (jsonb)

  2. Security
    - Enable RLS on all tables
    - Add policies for user access
*/

-- Create enum types
CREATE TYPE registration_type AS ENUM ('business', 'influencer');
CREATE TYPE registration_status AS ENUM ('pending', 'approved', 'rejected');

-- Create registrations table
CREATE TABLE IF NOT EXISTS registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  type registration_type NOT NULL,
  status registration_status DEFAULT 'pending',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(user_id)
);

-- Create business_profiles table
CREATE TABLE IF NOT EXISTS business_profiles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  registration_id uuid REFERENCES registrations NOT NULL,
  company_name text NOT NULL,
  company_size integer NOT NULL,
  website_url text NOT NULL,
  niches text[] NOT NULL,
  additional_details jsonb DEFAULT '{}'::jsonb,
  UNIQUE(registration_id)
);

-- Create influencer_profiles table
CREATE TABLE IF NOT EXISTS influencer_profiles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  registration_id uuid REFERENCES registrations NOT NULL,
  full_name text NOT NULL,
  social_media_profiles jsonb NOT NULL,
  niches text[] NOT NULL,
  audience_metrics jsonb DEFAULT '{}'::jsonb,
  UNIQUE(registration_id)
);

-- Enable RLS
ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE business_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE influencer_profiles ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view own registration"
  ON registrations
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own registration"
  ON registrations
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view own business profile"
  ON business_profiles
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM registrations
      WHERE registrations.id = business_profiles.registration_id
      AND registrations.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can insert own business profile"
  ON business_profiles
  FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM registrations
      WHERE registrations.id = business_profiles.registration_id
      AND registrations.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can view own influencer profile"
  ON influencer_profiles
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM registrations
      WHERE registrations.id = influencer_profiles.registration_id
      AND registrations.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can insert own influencer profile"
  ON influencer_profiles
  FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM registrations
      WHERE registrations.id = influencer_profiles.registration_id
      AND registrations.user_id = auth.uid()
    )
  );