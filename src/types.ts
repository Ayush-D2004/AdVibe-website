export interface BusinessFormData {
  company_name: string;
  industry: string;
  website_url?: string;
  interests: string[];
  collab_types: string[];
}

export interface InfluencerFormData {
  socialPlatforms: string[];
  followerCount: string;
  niche: string[];
  contentTypes: string[];
}

export interface UserUpdateData {
  email: string;
  full_name: string;
  user_type: 'business' | 'influencer';
  profile_data: BusinessFormData | InfluencerFormData;
}

export interface UserData {
  id: string; // Assuming you have an ID field
  email: string;
  full_name: string;
  user_type: 'business' | 'influencer';
  profile_data: BusinessFormData | InfluencerFormData; // Adjust as necessary
}