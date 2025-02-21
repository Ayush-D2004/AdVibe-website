import React from 'react';
import { Target, BarChart2, Users, Zap, Shield, Trophy } from 'lucide-react';

function BrandSolutions() {
  const solutions = [
    {
      icon: Target,
      title: 'Targeted Reach',
      description: 'Connect with your ideal audience through carefully matched influencers who align with your brand values.'
    },
    {
      icon: BarChart2,
      title: 'Performance Analytics',
      description: 'Track campaign performance with real-time analytics and detailed ROI metrics.'
    },
    {
      icon: Users,
      title: 'Influencer Discovery',
      description: 'Find the perfect content creators using our AI-powered matching algorithm.'
    },
    {
      icon: Zap,
      title: 'Campaign Management',
      description: 'Streamline your campaigns with our comprehensive management tools and workflow automation.'
    },
    {
      icon: Shield,
      title: 'Brand Safety',
      description: 'Ensure your brand integrity with our thorough vetting process and content guidelines.'
    },
    {
      icon: Trophy,
      title: 'Proven Results',
      description: 'Achieve measurable outcomes with our data-driven approach to influencer marketing.'
    }
  ];

  const caseStudies = [
    {
      brand: 'EcoStyle Fashion',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      results: {
        engagement: '250K+',
        reach: '2M+',
        roi: '300%'
      },
      description: 'Sustainable fashion brand achieved record-breaking engagement through targeted micro-influencer campaign.'
    },
    {
      brand: 'HealthyBite Snacks',
      image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      results: {
        engagement: '180K+',
        reach: '1.5M+',
        roi: '250%'
      },
      description: 'Health food startup doubled their market presence through strategic influencer partnerships.'
    }
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-purple-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
              Transform Your Brand's Reach
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-purple-100">
              Leverage the power of influencer marketing to connect with your target audience and drive measurable results.
            </p>
            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-purple-600 bg-white hover:bg-purple-50 md:py-4 md:text-lg md:px-10"
              >
                Schedule a Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900">Solutions for Brands</h2>
            <p className="mt-4 text-xl text-gray-500">
              Comprehensive tools and strategies to elevate your influencer marketing
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution) => (
              <div key={solution.title} className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-12 w-12 rounded-lg bg-purple-600 text-white flex items-center justify-center mb-4">
                  <solution.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{solution.title}</h3>
                <p className="text-gray-600">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900">Success Stories</h2>
            <p className="mt-4 text-xl text-gray-500">
              See how leading brands achieved their marketing goals with AdVibe
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {caseStudies.map((study) => (
              <div key={study.brand} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="h-64 w-full">
                  <img
                    className="h-full w-full object-cover"
                    src={study.image}
                    alt={study.brand}
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{study.brand}</h3>
                  <p className="text-gray-600 mb-6">{study.description}</p>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-purple-600">{study.results.engagement}</p>
                      <p className="text-sm text-gray-500">Engagements</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-purple-600">{study.results.reach}</p>
                      <p className="text-sm text-gray-500">Total Reach</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-purple-600">{study.results.roi}</p>
                      <p className="text-sm text-gray-500">ROI</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Schedule a Demo</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company</label>
                <input
                  type="text"
                  id="company"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Work Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Tell us about your goals</label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                >
                  Request Demo
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

export default BrandSolutions;