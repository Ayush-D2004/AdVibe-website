import React from 'react';
import { Calendar, User, Clock, Tag } from 'lucide-react';

function Blog() {
  const featuredPost = {
    title: 'The Future of Influencer Marketing: Trends to Watch in 2025',
    excerpt: 'Discover the emerging trends that are shaping the future of influencer marketing and how brands can stay ahead of the curve.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    author: 'Sarah Johnson',
    date: 'March 15, 2025',
    readTime: '8 min read',
    category: 'Industry Trends'
  };

  const posts = [
    {
      title: 'How to Build Authentic Relationships with Influencers',
      excerpt: 'Learn the key strategies for developing lasting partnerships with influencers that drive real results.',
      image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      author: 'Michael Chen',
      date: 'March 12, 2025',
      readTime: '6 min read',
      category: 'Best Practices'
    },
    {
      title: 'Measuring ROI in Influencer Marketing Campaigns',
      excerpt: 'A comprehensive guide to tracking and analyzing the success of your influencer marketing efforts.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      author: 'Emma Rodriguez',
      date: 'March 10, 2025',
      readTime: '10 min read',
      category: 'Analytics'
    },
    {
      title: 'Creating Content That Converts: A Guide for Influencers',
      excerpt: 'Tips and strategies for influencers to create engaging content that drives action.',
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c2b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      author: 'Alex Rivera',
      date: 'March 8, 2025',
      readTime: '7 min read',
      category: 'Content Creation'
    }
  ];

  const categories = [
    'Industry Trends',
    'Best Practices',
    'Analytics',
    'Content Creation',
    'Case Studies',
    'Platform Updates'
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-purple-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
              AdVibe Blog
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-purple-100">
              Insights, tips, and trends in influencer marketing to help you stay ahead of the curve.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative h-64 lg:h-96">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                  Featured Post
                </span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">{featuredPost.title}</h2>
              <p className="text-xl text-gray-600">{featuredPost.excerpt}</p>
              <div className="flex items-center space-x-6 text-gray-500">
                <div className="flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  {featuredPost.author}
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  {featuredPost.date}
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  {featuredPost.readTime}
                </div>
              </div>
              <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700">
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Recent Posts</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.title} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="relative h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <Tag className="h-4 w-4 text-purple-600" />
                    <span className="text-sm font-medium text-purple-600">{post.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Browse by Category</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full border border-purple-200 text-purple-600 hover:bg-purple-50 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Subscribe to Our Newsletter</h2>
              <p className="text-gray-600 mb-6">
                Get the latest insights and trends in influencer marketing delivered to your inbox.
              </p>
            </div>
            <form className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              />
              <button
                type="submit"
                className="px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Blog;