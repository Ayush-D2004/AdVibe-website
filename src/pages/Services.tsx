import React from 'react';
import { BarChart2, Zap, Users, MessageSquare, Target, PieChart } from 'lucide-react';

function Services() {
  const services = [
    {
      icon: Users,
      title: 'Influencer Matching',
      description: 'Our AI-powered algorithm finds the perfect influencers for your brand based on audience demographics, engagement rates, and content quality.',
      features: [
        'Advanced matching algorithms',
        'Detailed influencer profiles',
        'Audience demographics analysis',
        'Performance tracking'
      ]
    },
    {
      icon: Zap,
      title: 'Campaign Management',
      description: 'Streamline your campaign workflow with our comprehensive management tools, from briefing to reporting.',
      features: [
        'Campaign brief templates',
        'Content approval workflow',
        'Real-time communication',
        'Milestone tracking'
      ]
    },
    {
      icon: BarChart2,
      title: 'Analytics & Reporting',
      description: 'Get detailed insights into your campaign performance with our advanced analytics dashboard.',
      features: [
        'Real-time performance metrics',
        'Engagement analysis',
        'ROI tracking',
        'Custom report generation'
      ]
    },
    {
      icon: MessageSquare,
      title: 'Content Strategy',
      description: 'Develop winning content strategies with our expert guidance and creative tools.',
      features: [
        'Content planning tools',
        'Trend analysis',
        'Creative brief templates',
        'Performance optimization'
      ]
    },
    {
      icon: Target,
      title: 'Audience Targeting',
      description: 'Reach your ideal audience with precision targeting and demographic analysis.',
      features: [
        'Demographic insights',
        'Interest-based targeting',
        'Audience overlap analysis',
        'Reach prediction'
      ]
    },
    {
      icon: PieChart,
      title: 'Performance Optimization',
      description: 'Continuously improve your campaigns with data-driven insights and recommendations.',
      features: [
        'A/B testing',
        'Performance benchmarking',
        'Optimization suggestions',
        'Trend analysis'
      ]
    }
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-purple-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
              Our Services
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-purple-100">
              Comprehensive influencer marketing solutions to help your brand grow and succeed in the digital space.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {services.map((service) => (
              <div key={service.title} className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="h-12 w-12 rounded-lg bg-purple-600 text-white flex items-center justify-center">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="ml-4 text-2xl font-bold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-700">
                      <span className="h-2 w-2 bg-purple-600 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-purple-700 rounded-2xl shadow-xl overflow-hidden">
            <div className="px-6 py-12 sm:px-12 sm:py-16 lg:flex lg:items-center lg:justify-between">
              <div>
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  <span className="block">Ready to get started?</span>
                  <span className="block text-purple-200">Let's discuss your campaign needs.</span>
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

export default Services;