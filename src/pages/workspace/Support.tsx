import React from 'react';
import { HelpCircle, MessageSquare, FileText, ExternalLink } from 'lucide-react';

const Support = () => {
  const faqs = [
    {
      question: 'How do I create a new campaign?',
      answer: 'To create a new campaign, go to the Campaigns section and click the "New Campaign" button. Follow the step-by-step wizard to set up your campaign details, budget, and requirements.',
    },
    {
      question: 'How are influencers matched to my brand?',
      answer: 'Our AI-powered algorithm matches influencers based on your brand values, target audience, and campaign requirements. Factors include audience demographics, engagement rates, and content quality.',
    },
    {
      question: 'What metrics are tracked in the analytics dashboard?',
      answer: 'The analytics dashboard tracks key metrics including reach, engagement rate, click-through rates, conversion rates, and ROI. You can also view detailed demographic data and sentiment analysis.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="md:flex md:items-center md:justify-between">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            Help & Support
          </h2>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <MessageSquare className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <h3 className="text-lg font-medium text-gray-900">Contact Support</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Get help from our support team
                </p>
              </div>
            </div>
            <div className="mt-4">
              <button className="w-full inline-flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                Start Chat
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <FileText className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <h3 className="text-lg font-medium text-gray-900">Documentation</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Browse our help articles
                </p>
              </div>
            </div>
            <div className="mt-4">
              <button className="w-full inline-flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                View Docs
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <ExternalLink className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <h3 className="text-lg font-medium text-gray-900">Video Tutorials</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Watch step-by-step guides
                </p>
              </div>
            </div>
            <div className="mt-4">
              <button className="w-full inline-flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                Watch Videos
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="mt-8">
        <h3 className="text-lg font-medium text-gray-900 flex items-center">
          <HelpCircle className="h-5 w-5 mr-2" />
          Frequently Asked Questions
        </h3>
        <div className="mt-6 space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white shadow sm:rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h4 className="text-lg font-medium text-gray-900">{faq.question}</h4>
                <p className="mt-2 text-sm text-gray-500">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form */}
      <div className="mt-8 bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg font-medium text-gray-900">Send us a message</h3>
          <div className="mt-4 max-w-xl">
            <form className="space-y-4">
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;