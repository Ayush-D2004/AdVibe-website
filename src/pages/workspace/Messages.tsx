import React from 'react';
import { Search, Edit } from 'lucide-react';

const Messages = () => {
  const conversations = [
    {
      id: 1,
      name: 'Sarah Johnson',
      company: 'Fashion Brand Co.',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      lastMessage: 'Looking forward to discussing the campaign details with you!',
      time: '5m ago',
      unread: true,
    },
    {
      id: 2,
      name: 'Michael Chen',
      company: 'Tech Startup Inc.',
      avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      lastMessage: 'The latest analytics report is ready for review.',
      time: '1h ago',
      unread: false,
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      company: 'Beauty Co.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      lastMessage: 'Can we schedule a call to discuss the upcoming campaign?',
      time: '2h ago',
      unread: true,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="md:flex md:items-center md:justify-between">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            Messages
          </h2>
        </div>
        <div className="mt-4 flex md:mt-0 md:ml-4">
          <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
            <Edit className="h-4 w-4 mr-2" />
            New Message
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="mt-8">
        <div className="max-w-xs">
          <label htmlFor="search" className="sr-only">Search messages</label>
          <div className="relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              name="search"
              id="search"
              className="block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
              placeholder="Search messages"
            />
          </div>
        </div>
      </div>

      {/* Conversations List */}
      <div className="mt-6 bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {conversations.map((conversation) => (
            <li key={conversation.id}>
              <a href="#" className="block hover:bg-gray-50">
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-12 w-12 rounded-full"
                        src={conversation.avatar}
                        alt=""
                      />
                    </div>
                    <div className="min-w-0 flex-1 px-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-purple-600 truncate">
                            {conversation.name}
                          </p>
                          <p className="text-sm text-gray-500">
                            {conversation.company}
                          </p>
                        </div>
                        <div className="ml-2 flex-shrink-0 flex">
                          <p className="text-sm text-gray-500">{conversation.time}</p>
                          {conversation.unread && (
                            <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                              New
                            </span>
                          )}
                        </div>
                      </div>
                      <p className="mt-1 text-sm text-gray-600 truncate">
                        {conversation.lastMessage}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Messages;