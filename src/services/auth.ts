import { BusinessFormData, InfluencerFormData, UserUpdateData } from '../types';

const API_URL = 'http://localhost:3000/api';

interface UserData {
  full_name: string;
  user_type: 'business' | 'influencer';
  profile_data: BusinessFormData | InfluencerFormData;
  company_name?: string;
  industry?: string;
  website_url?: string;
  interests?: string[];
  collab_types?: string[];
  social_platforms?: string[];
  follower_count?: number;
  content_niche?: string[];
  content_types?: string[];
}

export const authService = {
  async signUp(email: string, password: string, userData: UserData) {
    try {
      console.log('Sending registration data:', { email, password, ...userData });
      const response = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          full_name: userData.full_name,
          user_type: userData.user_type,
          profile_data: userData.profile_data
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Registration error:', errorData);
        throw new Error(errorData.error || 'Registration failed');
      }

      const data = await response.json();
      localStorage.setItem('token', data.token);
      return data;
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    }
  },

  async signIn(email: string, password: string) {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    const data = await response.json();
    localStorage.setItem('token', data.token);
    return data;
  },

  async signOut() {
    localStorage.removeItem('token');
  },

  async getCurrentUser() {
    const token = localStorage.getItem('token');
    if (!token) return null;

    // Implement token verification if needed
    return null;
  },

  getUserById: async (id: string) => {
    const response = await fetch(`${API_URL}/users/${id}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch user');
    }
    
    return response.json();
  },

  updateUser: async (id: string, userData: UserUpdateData) => {
    const response = await fetch(`${API_URL}/users/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(userData)
    });

    if (!response.ok) {
      throw new Error('Failed to update user');
    }

    return response.json();
  },
};