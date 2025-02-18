import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+1 (555) 123-4567'],
      description: 'Monday to Friday, 9am to 6pm EST'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['support@advibe.com', 'partnerships@advibe.com'],
      description: "We'll respond within 24 hours"
    },
    {
      icon: MapPin,
      title: 'Office',
      details: ['123 Innovation Drive', 'San Francisco, CA 94105'],
      description: 'Come visit us'
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Monday - Friday: 9am - 6pm', 'Saturday: 10am - 4pm'],
      description: 'Sunday: Closed'
    }
  ];

  const faqs = [
    {
      question: 'How do I get started with AdVibe?',
      answer: 'Getting started is easy! Simply fill out our contact form or schedule a demo, and our team will guide you through the process of setting up your account and launching your first campaign.'
    },
    {
      question: 'What types of brands do you work with?',
      answer: 'We work with brands of all sizes across various industries, from emerging startups to established enterprises. Our platform is particularly well-suited for brands in fashion, beauty, lifestyle, tech, food & beverage, and health & wellness.'
    },
    {
      question: 'How do you ensure brand safety?',
      answer: 'We have a comprehensive vetting process for all influencers on our platform, including audience authenticity checks, content quality reviews, and brand alignment assessments. We also provide detailed analytics and monitoring tools.'
    }
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-purple-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
              Get in Touch
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-purple-100">
              Have questions? We're here to help you succeed with influencer marketing.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((item) => (
              <div key={item.title} className="bg-gray-50 rounded-lg p-8 text-center">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-purple-100 text-purple-600 mb-4">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                {item.details.map((detail, index) => (
                  <p key={index} className="text-gray-600">{detail}</p>
                ))}
                <p className="text-sm text-gray-500 mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Send Us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows={6}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-8">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;