// import React from 'react';
import { Link } from 'react-router-dom';

export function JoinSection() {
  return (
    <section id="join-now-section" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Join AdVibe Today</h2>
          <p className="mt-4 text-xl text-gray-500">
            Choose your path and start growing with us
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Business Panel */}
          <div className="bg-white p-8 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Join for Business</h3>
              <p className="text-gray-600">
                Leverage influencer marketing to amplify your brand's reach. Tailored campaigns,
                data-driven insights, and strategic influencer matching at your fingertips.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <span className="h-2 w-2 bg-purple-600 rounded-full mr-3"></span>
                  Access to verified influencers
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="h-2 w-2 bg-purple-600 rounded-full mr-3"></span>
                  Campaign management tools
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="h-2 w-2 bg-purple-600 rounded-full mr-3"></span>
                  Performance analytics
                </li>
              </ul>
              <Link
                to="/register/business"
                className="inline-block w-full text-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-colors"
              >
                Register as a Company
              </Link>
            </div>
          </div>

          {/* Influencer Panel */}
          <div className="bg-white p-8 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Join Influencer Community</h3>
              <p className="text-gray-600">
                Monetize your influence, connect with top brands, and join a creative community
                that values your unique voice.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <span className="h-2 w-2 bg-purple-600 rounded-full mr-3"></span>
                  Connect with leading brands
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="h-2 w-2 bg-purple-600 rounded-full mr-3"></span>
                  Competitive compensation
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="h-2 w-2 bg-purple-600 rounded-full mr-3"></span>
                  Creative freedom
                </li>
              </ul>
              <Link
                to="/register/influencer"
                className="inline-block w-full text-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-colors"
              >
                Register as an Influencer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}