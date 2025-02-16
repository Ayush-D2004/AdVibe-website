// import React from 'react';
import { useParams } from 'react-router-dom';
import { RegistrationForm } from '../components/registration/RegistrationForm';

function Register() {
  const { type } = useParams<{ type: 'business' | 'influencer' }>();

  if (!type || !['business', 'influencer'].includes(type)) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Invalid Registration Type</h1>
          <p className="mt-2 text-gray-600">Please select a valid registration type.</p>
        </div>
      </div>
    );
  }

  return (
    <main className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {type === 'business' ? 'Business Registration' : 'Influencer Registration'}
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            {type === 'business'
              ? 'Join AdVibe to connect with influencers and grow your brand'
              : 'Join our community of creators and connect with amazing brands'}
          </p>
        </div>

        <RegistrationForm type={type} />
      </div>
    </main>
  );
}

export default Register;