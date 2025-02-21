import React from 'react';
import { Search, Filter, UserPlus } from 'lucide-react';

const Network = () => {
  const influencers = [
    {
      id: 1,
      name: 'Alex Rivera',
      handle: '@alexcreates',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      category: 'Lifestyle & Travel',
      followers: '250K',
      engagement: '4.8%',
      status: 'Available',
    },
    {
      id: 2,
      name: 'Sarah Chen',
      handle: '@sarahexplores',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      category: 'Fashion & Beauty',
      followers: '500K',
      engagement: '5.2%',
      status: 'In Campaign',
    },
    {
      id: 3,
      name: 'Marcus Johnson',
      handle: '@marcusfitness',
      avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      category: 'Fitness & Health',
      followers: '180K',
      engagement: '6.1%',
      status: 'Available',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="md:flex md:items-center md:justify-between">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            Influencer Network
          </h2>
        </div>
        <div className="mt-4 flex md:mt-0 md:ml-4">
          <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
            <UserPlus className="h-4 w-4 mr-2" />
            Add Influencer
          </button>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div className="flex-1 min-w-0">
          <div className="max-w-xs">
            <label htmlFor="search" className="sr-only">Search influencers</label>
            <div className="relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                name="search"
                id="search"
                className="block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                placeholder="Search influencers"
              />
            </div>
          </div>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-4">
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </button>
        </div>
      </div>

      {/* Influencers Grid */}
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {influencers.map((influencer) => (
          <div
            key={influencer.id}
            className="bg-white shadow rounded-lg overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="p-6">
              <div className="flex items-center">
                <img
                  className="h-16 w-16 rounded-full"
                  src={influencer.avatar}
                  alt=""
                />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    {influencer.name}
                  </h3>
                  <p className="text-sm text-purple-600">{influencer.handle}</p>
                  <p className="text-sm text-gray-500">{influencer.category}</p>
                </div>
                <div className="ml-auto">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      influencer.status === 'Available'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {influencer.status}
                  </span>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">Followers</p>
                  <p className="mt-1 text-lg font-semibold text-gray-900">
                    {influencer.followers}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Engagement Rate
                  </p>
                  <p className="mt-1 text-lg font-semibold text-gray-900">
                    {influencer.engagement}
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <button className="w-full inline-flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                  View Profile
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Network;