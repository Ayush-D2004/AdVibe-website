export interface User {
  id: string;
  email: string;
  full_name: string;
  user_type: 'business' | 'influencer';
  created_at: string;
}

export interface BusinessProfile {
  id: string;
  user_id: string;
  company_name: string;
  industry: string;
  website_url?: string;
  company_size?: string;
  location?: string;
  created_at: string;
}

export interface InfluencerProfile {
  id: string;
  user_id: string;
  social_platforms: {
    platform: string;
    handle: string;
  }[];
  follower_count?: number;
  content_niche: string[];
  content_types: string[];
  languages: string[];
  created_at: string;
}

export interface ContactSubmission {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  subject: string;
  message: string;
  created_at: string;
}

export interface DemoRequest {
  id: string;
  full_name: string;
  company: string;
  email: string;
  phone: string;
  goals?: string;
  created_at: string;
} 