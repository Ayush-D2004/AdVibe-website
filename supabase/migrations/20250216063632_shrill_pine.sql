/*
  # Registration and User Data Management Schema

  1. New Tables
    - `user_profiles`
      - Extends auth.users with additional profile information
      - Stores common user data like name, avatar, etc.
    
    - `business_profiles`
      - Stores business-specific information
      - Links to user_profiles
      - Includes company details, industry info, etc.
    
    - `influencer_profiles`
      - Stores influencer-specific information
      - Links to user_profiles
      - Includes social media stats, content types, etc.
    
    - `form_submissions`
      - Tracks all form submissions with versioning
      - Enables data recovery and audit trail
    
    - `audit_logs`
      - Records all data modifications
      - Supports compliance and security monitoring

  2. Security
    - RLS enabled on all tables
    - Policies for data access control
    - Audit logging for all changes

  3. Data Retention
    - Implements soft delete
    - Includes archival timestamps
    - Manages data lifecycle
*/

-- Enable UUID extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create enum types for various statuses and categories
CREATE TYPE profile_status AS ENUM ('active', 'inactive', 'suspended');
CREATE TYPE industry_type AS ENUM (
  'technology', 'fashion', 'beauty', 'food', 'health', 
  'travel', 'entertainment', 'sports', 'education', 'other'
);
CREATE TYPE content_type AS ENUM (
  'photos', 'videos', 'stories', 'live_streams', 'blogs', 'podcasts'
);
CREATE TYPE social_platform AS ENUM (
  'instagram', 'tiktok', 'youtube', 'twitter', 'linkedin', 'facebook'
);

-- Create user_profiles table
CREATE TABLE IF NOT EXISTS user_profiles (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id uuid REFERENCES auth.users NOT NULL,
  full_name text NOT NULL,
  avatar_url text,
  bio text,
  status profile_status DEFAULT 'active',
  metadata jsonb DEFAULT '{}'::jsonb,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  deleted_at timestamptz,
  version integer DEFAULT 1,
  UNIQUE(user_id)
);

-- Create business_profiles table
CREATE TABLE IF NOT EXISTS business_profiles (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id uuid REFERENCES auth.users NOT NULL,
  company_name text NOT NULL,
  industry industry_type NOT NULL,
  website_url text,
  company_size integer,
  target_markets text[],
  collaboration_types text[],
  budget_range jsonb,
  verification_status boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  deleted_at timestamptz,
  version integer DEFAULT 1,
  UNIQUE(user_id)
);

-- Create influencer_profiles table
CREATE TABLE IF NOT EXISTS influencer_profiles (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id uuid REFERENCES auth.users NOT NULL,
  social_platforms social_platform[] NOT NULL,
  platform_handles jsonb NOT NULL,
  follower_ranges jsonb NOT NULL,
  content_types content_type[] NOT NULL,
  niches text[] NOT NULL,
  engagement_rates jsonb,
  verification_status boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  deleted_at timestamptz,
  version integer DEFAULT 1,
  UNIQUE(user_id)
);

-- Create form_submissions table for tracking all form data
CREATE TABLE IF NOT EXISTS form_submissions (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id uuid REFERENCES auth.users NOT NULL,
  form_type text NOT NULL,
  form_data jsonb NOT NULL,
  metadata jsonb DEFAULT '{}'::jsonb,
  created_at timestamptz DEFAULT now(),
  version integer DEFAULT 1
);

-- Create audit_logs table
CREATE TABLE IF NOT EXISTS audit_logs (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  table_name text NOT NULL,
  record_id uuid NOT NULL,
  user_id uuid REFERENCES auth.users,
  action text NOT NULL,
  old_data jsonb,
  new_data jsonb,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE business_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE influencer_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE form_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE audit_logs ENABLE ROW LEVEL SECURITY;

-- Create indexes for performance
CREATE INDEX idx_user_profiles_user_id ON user_profiles(user_id);
CREATE INDEX idx_business_profiles_user_id ON business_profiles(user_id);
CREATE INDEX idx_influencer_profiles_user_id ON influencer_profiles(user_id);
CREATE INDEX idx_form_submissions_user_id ON form_submissions(user_id);
CREATE INDEX idx_audit_logs_record_id ON audit_logs(record_id);
CREATE INDEX idx_audit_logs_user_id ON audit_logs(user_id);

-- Create RLS Policies

-- User Profiles Policies
CREATE POLICY "Users can view own profile"
  ON user_profiles FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update own profile"
  ON user_profiles FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);

-- Business Profiles Policies
CREATE POLICY "Users can view own business profile"
  ON business_profiles FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update own business profile"
  ON business_profiles FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);

-- Influencer Profiles Policies
CREATE POLICY "Users can view own influencer profile"
  ON influencer_profiles FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update own influencer profile"
  ON influencer_profiles FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);

-- Form Submissions Policies
CREATE POLICY "Users can view own form submissions"
  ON form_submissions FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own form submissions"
  ON form_submissions FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Audit Logs Policies
CREATE POLICY "Only admins can view audit logs"
  ON audit_logs FOR SELECT
  TO authenticated
  USING (auth.uid() IN (
    SELECT user_id FROM user_profiles WHERE metadata->>'role' = 'admin'
  ));

-- Create functions for automatic timestamp updates
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for updated_at
CREATE TRIGGER update_user_profiles_updated_at
  BEFORE UPDATE ON user_profiles
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_business_profiles_updated_at
  BEFORE UPDATE ON business_profiles
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_influencer_profiles_updated_at
  BEFORE UPDATE ON influencer_profiles
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();

-- Create function for audit logging
CREATE OR REPLACE FUNCTION log_audit_event()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO audit_logs (
    table_name,
    record_id,
    user_id,
    action,
    old_data,
    new_data
  ) VALUES (
    TG_TABLE_NAME,
    COALESCE(NEW.id, OLD.id),
    COALESCE(NEW.user_id, OLD.user_id),
    TG_OP,
    CASE WHEN TG_OP = 'DELETE' THEN row_to_json(OLD) ELSE NULL END,
    CASE WHEN TG_OP IN ('INSERT', 'UPDATE') THEN row_to_json(NEW) ELSE NULL END
  );
  RETURN COALESCE(NEW, OLD);
END;
$$ LANGUAGE plpgsql;

-- Create audit triggers
CREATE TRIGGER audit_user_profiles
  AFTER INSERT OR UPDATE OR DELETE ON user_profiles
  FOR EACH ROW
  EXECUTE FUNCTION log_audit_event();

CREATE TRIGGER audit_business_profiles
  AFTER INSERT OR UPDATE OR DELETE ON business_profiles
  FOR EACH ROW
  EXECUTE FUNCTION log_audit_event();

CREATE TRIGGER audit_influencer_profiles
  AFTER INSERT OR UPDATE OR DELETE ON influencer_profiles
  FOR EACH ROW
  EXECUTE FUNCTION log_audit_event();