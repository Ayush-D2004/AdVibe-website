import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { authService } from '../services/auth';
import { UserUpdateData, UserData } from '../types';

const ProfileSettings = () => {
  const { id } = useParams<{ id: string }>();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Fetch user data
    const fetchUserData = async () => {
      try {
        const response = await authService.getUserById(id);
        setUserData(response.data);
        console.log('User Data:', response.data);
      } catch {
        setError('Failed to fetch user data');
      }
    };

    fetchUserData();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const updatedData: UserUpdateData = {
        email: userData?.email || '',
        full_name: userData?.full_name || '',
        user_type: userData?.user_type || 'business',
        profile_data: userData?.profile_data || (userData?.user_type === 'business' ? {
          company_name: '',
          industry: '',
          website_url: '',
          interests: [],
          collab_types: []
        } : {
          socialPlatforms: [],
          followerCount: '',
          niche: [],
          contentTypes: []
        }),
      };
      await authService.updateUser(id, updatedData);
      alert('Profile updated successfully');
    } catch (err) {
      console.error('Error updating profile:', err);
      setError('Failed to update profile');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!userData) return <div>Loading...</div>;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email</label>
        <input
          type="email"
          value={userData.email || ''}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
      </div>
      <div>
        <label>Full Name</label>
        <input
          type="text"
          value={userData.full_name || ''}
          onChange={(e) => setUserData({ ...userData, full_name: e.target.value })}
        />
      </div>
      {/* Add more fields as necessary */}
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Updating...' : 'Update Profile'}
      </button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default ProfileSettings; 