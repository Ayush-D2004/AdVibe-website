import React from 'react';
import { Award, Heart, Target, Users } from 'lucide-react';

function About() {
  const teamMembers = [
    {
      name: 'Ayush Dhoble',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
      bio: 'Former marketing executive with 15+ years of experience in digital advertising.',
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
      bio: 'Tech innovator with a passion for creating scalable solutions.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Partnerships',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
      bio: 'Relationship builder connecting brands with their perfect influencer matches.',
    },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Authenticity',
      description: 'We believe in genuine connections between brands and influencers.',
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'Constantly pushing boundaries in influencer marketing technology.',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building lasting relationships within our vibrant ecosystem.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering outstanding results for all stakeholders.',
    },
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-purple-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
              Our Story
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-purple-100">
              Founded in 2023, AdVibe is revolutionizing how brands and influencers connect, collaborate, and create impactful campaigns together.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900">Our Values</h2>
            <p className="mt-4 text-xl text-gray-500">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="mx-auto h-12 w-12 text-purple-600">
                  <value.icon className="h-full w-full" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">{value.title}</h3>
                <p className="mt-2 text-gray-500">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900">Meet Our Team</h2>
            <p className="mt-4 text-xl text-gray-500">
              The passionate people behind AdVibe
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <div key={member.name} className="text-center">
                <div className="relative">
                  <img
                    className="mx-auto h-64 w-64 rounded-full object-cover"
                    src={member.image}
                    alt={member.name}
                  />
                </div>
                <div className="mt-6">
                  <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-purple-600 font-medium">{member.role}</p>
                  <p className="mt-2 text-gray-500">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why AdVibe */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Why Choose AdVibe</h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
              We're not just another influencer marketing platform. We're a community-driven ecosystem that puts authenticity and results first.
            </p>
          </div>

          <div className="mt-16">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {[
                {
                  title: 'Data-Driven Matching',
                  description: 'Our AI-powered algorithm ensures the perfect brand-influencer fit every time.',
                },
                {
                  title: 'Transparent Analytics',
                  description: 'Real-time insights and reporting that help you make informed decisions.',
                },
                {
                  title: 'Community Focus',
                  description: 'A vibrant ecosystem where meaningful connections flourish.',
                },
                {
                  title: 'End-to-End Support',
                  description: 'Comprehensive campaign management from ideation to execution.',
                },
              ].map((feature) => (
                <div key={feature.title} className="relative">
                  <dt>
                    <p className="text-lg leading-6 font-medium text-gray-900">{feature.title}</p>
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;