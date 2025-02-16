import React from 'react';
import { Star, TrendingUp, Users } from 'lucide-react';

function SuccessStories() {
  const stories = [
    {
      brand: 'FitLife Supplements',
      category: 'Health & Wellness',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      challenge: 'Needed to establish credibility and reach fitness enthusiasts authentically.',
      solution: 'Partnered with micro-influencers in the fitness community for authentic product reviews and workout integrations.',
      results: {
        reach: '5M+',
        engagement: '350K+',
        sales: '200%',
        duration: '3 months'
      },
      testimonial: {
        name: 'Sarah Johnson',
        role: 'Marketing Director',
        quote: 'AdVibe helped us connect with authentic voices in the fitness community, resulting in a significant boost in brand credibility and sales.'
      }
    },
    {
      brand: 'GreenEats Meal Prep',
      category: 'Food & Beverage',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      challenge: 'Wanted to expand market presence and highlight sustainable packaging.',
      solution: 'Collaborated with eco-conscious food bloggers and lifestyle influencers for recipe creation and sustainability storytelling.',
      results: {
        reach: '3.5M+',
        engagement: '280K+',
        sales: '150%',
        duration: '4 months'
      },
      testimonial: {
        name: 'Michael Chen',
        role: 'CEO',
        quote: 'The targeted approach and creative freedom we gave influencers resulted in authentic content that really resonated with our audience.'
      }
    },
    {
      brand: 'Urban Style Co.',
      category: 'Fashion',
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      challenge: 'Needed to increase brand awareness among Gen Z consumers.',
      solution: 'Launched a TikTok campaign with fashion influencers creating trendy outfit challenges.',
      results: {
        reach: '8M+',
        engagement: '500K+',
        sales: '300%',
        duration: '2 months'
      },
      testimonial: {
        name: 'Emma Rodriguez',
        role: 'Brand Manager',
        quote: 'The viral potential of our influencer campaign exceeded all expectations, creating a genuine buzz around our brand.'
      }
    }
  ];

  const metrics = [
    {
      icon: Users,
      label: 'Total Reach',
      value: '50M+',
      description: 'Combined audience reach across all campaigns'
    },
    {
      icon: Star,
      label: 'Average ROI',
      value: '250%',
      description: 'Return on investment for our brand partners'
    },
    {
      icon: TrendingUp,
      label: 'Success Rate',
      value: '95%',
      description: 'Campaigns meeting or exceeding goals'
    }
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-purple-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
              Success Stories
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-purple-100">
              Discover how brands are achieving remarkable results through influencer marketing with AdVibe.
            </p>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {metrics.map((metric) => (
              <div key={metric.label} className="text-center">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-purple-100 text-purple-600 mb-4">
                  <metric.icon className="h-8 w-8" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">{metric.value}</h3>
                <p className="text-lg font-semibold text-purple-600">{metric.label}</p>
                <p className="text-gray-500">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {stories.map((story, index) => (
            <div key={story.brand} className={`mb-16 ${index !== stories.length - 1 ? 'pb-16 border-b border-gray-200' : ''}`}>
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={story.image}
                    alt={story.brand}
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div>
                  <div className="mb-6">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">{story.brand}</h2>
                    <p className="text-purple-600 font-medium">{story.category}</p>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Challenge</h3>
                      <p className="text-gray-600">{story.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Solution</h3>
                      <p className="text-gray-600">{story.solution}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-8 sm:grid-cols-4">
                    <div>
                      <p className="text-2xl font-bold text-purple-600">{story.results.reach}</p>
                      <p className="text-sm text-gray-500">Total Reach</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-purple-600">{story.results.engagement}</p>
                      <p className="text-sm text-gray-500">Engagements</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-purple-600">{story.results.sales}</p>
                      <p className="text-sm text-gray-500">Sales Increase</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-purple-600">{story.results.duration}</p>
                      <p className="text-sm text-gray-500">Campaign Duration</p>
                    </div>
                  </div>

                  <blockquote className="border-l-4 border-purple-600 pl-4 italic text-gray-600">
                    "{story.testimonial.quote}"
                    <footer className="mt-2 text-sm">
                      <strong className="text-gray-900">{story.testimonial.name}</strong>
                      <span className="text-gray-500"> — {story.testimonial.role}</span>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-purple-700 rounded-2xl shadow-xl overflow-hidden">
            <div className="px-6 py-12 sm:px-12 sm:py-16 lg:flex lg:items-center lg:justify-between">
              <div>
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  <span className="block">Ready to create your success story?</span>
                  <span className="block text-purple-200">Join AdVibe today.</span>
                </h2>
              </div>
              <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                <div className="inline-flex rounded-md shadow">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-purple-600 bg-white hover:bg-purple-50"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default SuccessStories;