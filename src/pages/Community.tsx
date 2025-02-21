// import React from 'react';
import { Star, Award, DollarSign, Users, Zap, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

function Community() {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Competitive Compensation',
      description: 'Earn what you deserve with transparent, competitive rates for your influence.'
    },
    {
      icon: Star,
      title: 'Creative Freedom',
      description: 'Express your authentic voice while working with brands that match your values.'
    },
    {
      icon: Users,
      title: 'Networking Opportunities',
      description: 'Connect with fellow creators and brands in our vibrant community.'
    },
    {
      icon: Zap,
      title: 'Growth Resources',
      description: 'Access exclusive training, tools, and resources to grow your influence.'
    },
    {
      icon: Award,
      title: 'Recognition Program',
      description: 'Get rewarded for your success with our tiered influencer program.'
    },
    {
      icon: Heart,
      title: 'Dedicated Support',
      description: '24/7 support from our team to help you succeed in your campaigns.'
    }
  ];

  const testimonials = [
    {
      name: 'Alex Rivera',
      handle: '@alexcreates',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
      quote: 'AdVibe has transformed how I work with brands. The platform makes it easy to find campaigns that align with my values.',
      category: 'Lifestyle Creator'
    },
    {
      name: 'Sarah Chen',
      handle: '@sarahexplores',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
      quote: 'The support and resources provided by AdVibe have helped me grow my audience and create better content.',
      category: 'Travel Influencer'
    },
    {
      name: 'Marcus Johnson',
      handle: '@marcusfitness',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
      quote: 'Being part of the AdVibe community has opened up amazing opportunities and connections.',
      category: 'Fitness Creator'
    }
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-purple-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
              Join Our Creator Community
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-purple-100">
              Connect with brands, grow your influence, and monetize your passion with AdVibe's creator community.
            </p>
            <div className="mt-8">
              <Link
                to="/register/influencer"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-purple-600 bg-white hover:bg-purple-50 md:py-4 md:text-lg md:px-10"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900">Why Join AdVibe</h2>
            <p className="mt-4 text-xl text-gray-500">
              Unlock exclusive benefits and opportunities as part of our community
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-12 w-12 rounded-lg bg-purple-600 text-white flex items-center justify-center mb-4">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900">Creator Success Stories</h2>
            <p className="mt-4 text-xl text-gray-500">
              Hear from creators who've grown with AdVibe
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-white rounded-lg shadow-sm p-8">
                <div className="flex items-center mb-6">
                  <img
                    className="h-12 w-12 rounded-full object-cover"
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-purple-600">{testimonial.handle}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{testimonial.quote}</p>
                <span className="text-sm text-gray-500">{testimonial.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Community;