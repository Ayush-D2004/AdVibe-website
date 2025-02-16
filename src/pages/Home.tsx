import { useState, useEffect } from 'react';
import { ArrowRight, BarChart2, Users, Zap } from 'lucide-react';
import { JoinSection } from '../components/registration/JoinSection';

function Home() {
  // Original smooth scroll functionality
  useEffect(() => {
    const getStartedButton = document.querySelector('.get-started-btn');
    if (getStartedButton) {
      getStartedButton.addEventListener('click', (e) => {
        e.preventDefault();
        const joinSection = document.querySelector('#join-now-section');
        if (joinSection) {
          joinSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  }, []);

  // Add stats animation
  const [stats, setStats] = useState({
    brands: 0,
    influencers: 0,
    campaigns: 0
  });

  useEffect(() => {
    // Animate stats on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateStats();
        }
      });
    });

    const statsSection = document.querySelector('#stats-section');
    if (statsSection) observer.observe(statsSection);

    return () => observer.disconnect();
  }, []);

  const animateStats = () => {
    const targetStats = { brands: 500, influencers: 2000, campaigns: 1500 };
    const duration = 2000; // 2 seconds
    const steps = 50;
    const interval = duration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setStats({
        brands: Math.round((targetStats.brands / steps) * currentStep),
        influencers: Math.round((targetStats.influencers / steps) * currentStep),
        campaigns: Math.round((targetStats.campaigns / steps) * currentStep)
      });

      if (currentStep === steps) clearInterval(timer);
    }, interval);
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="pt-20 lg:pt-24">
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Transform Your Brand with</span>
                <span className="block text-purple-600">Influencer Marketing</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Connect with the perfect influencers, manage campaigns effortlessly, and drive measurable results with AdVibe's comprehensive platform.
              </p>
              <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                <div className="rounded-md shadow">
                  <a
                    href="#join-now-section"
                    className="get-started-btn w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 md:py-4 md:text-lg md:px-10"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </div>
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                  <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-purple-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats-section" className="py-12 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <p className="text-4xl font-bold text-purple-600">{stats.brands}+</p>
              <p className="mt-2 text-gray-600">Brands</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold text-purple-600">{stats.influencers}+</p>
              <p className="mt-2 text-gray-600">Influencers</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold text-purple-600">{stats.campaigns}+</p>
              <p className="mt-2 text-gray-600">Successful Campaigns</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-purple-600 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to succeed
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Our platform provides all the tools you need to run successful influencer marketing campaigns.
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              {[
                {
                  name: 'Smart Matching',
                  description: 'Find the perfect influencers for your brand using our AI-powered matching system.',
                  icon: Users,
                },
                {
                  name: 'Campaign Management',
                  description: 'Manage all your campaigns in one place with our intuitive dashboard.',
                  icon: Zap,
                },
                {
                  name: 'Analytics & Insights',
                  description: 'Track performance and ROI with detailed analytics and reporting.',
                  icon: BarChart2,
                },
              ].map((feature) => (
                <div key={feature.name} className="relative">
                  <div className="absolute h-12 w-12 rounded-md bg-purple-500 text-white flex items-center justify-center">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div className="ml-16">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">{feature.name}</h3>
                    <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <JoinSection />

      {/* CTA Section */}
      <section className="bg-purple-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to dive in?</span>
            <span className="block text-purple-200">Start your journey today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a href="#" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-purple-600 bg-white hover:bg-purple-50">
                Get started
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;