import axios from 'axios';
import { BusinessFormData, InfluencerFormData, UserUpdateData } from '../types'; // Adjust the path as necessary

const API_URL = 'http://localhost:3000/api';

interface UserData {
  full_name: string;
  user_type: 'business' | 'influencer';
  profile_data: BusinessFormData | InfluencerFormData;
  company_name?: string; // Optional for influencers
  industry?: string; // Optional for influencers
  website_url?: string; // Optional for influencers
  interests?: string[]; // Optional for business
  collab_types?: string[]; // Optional for business
  social_platforms?: string[]; // Optional for influencers
  follower_count?: number; // Optional for influencers
  content_niche?: string[]; // Optional for influencers
  content_types?: string[]; // Optional for influencers
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
    return await axios.get(`/api/users/${id}`);
  },

  updateUser: async (id: string, userData: UserUpdateData) => {
    return await axios.put(`/api/users/${id}`, userData);
  },
}; 