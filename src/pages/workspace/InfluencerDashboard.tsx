import React, { useState } from 'react';
import { MessageSquare, Calendar, BarChart2, Users, Image, Plus, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Message {
  id: number;
  platform: string;
  sender: string;
  content: string;
  time: string;
  unread: boolean;
}

interface ContentItem {
  id: number;
  title: string;
  platform: string;
  scheduledDate: string;
  status: 'draft' | 'scheduled' | 'published';
  metrics?: {
    views: number;
    likes: number;
    comments: number;
  };
}

interface CollaborationRequest {
  id: number;
  brand: string;
  campaign: string;
  budget: string;
  deadline: string;
  status: 'pending' | 'accepted' | 'declined';
}

const InfluencerDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  const messages: Message[] = [
    {
      id: 1,
      platform: 'Instagram',
      sender: 'FashionBrand',
      content: 'Hey! Would love to collaborate on our summer collection...',
      time: '5m ago',
      unread: true,
    },
    {
      id: 2,
      platform: 'TikTok',
      sender: 'BeautyCoLtd',
      content: 'Your latest video was amazing! We have a great opportunity...',
      time: '1h ago',
      unread: true,
    },
  ];

  const upcomingContent: ContentItem[] = [
    {
      id: 1,
      title: 'Summer Fashion Haul',
      platform: 'Instagram',
      scheduledDate: '2025-03-20',
      status: 'scheduled',
    },
    {
      id: 2,
      title: 'Skincare Routine',
      platform: 'TikTok',
      scheduledDate: '2025-03-22',
      status: 'draft',
    },
  ];

  const collaborationRequests: CollaborationRequest[] = [
    {
      id: 1,
      brand: 'FashionBrand',
      campaign: 'Summer Collection Launch',
      budget: '$2,000',
      deadline: '2025-04-01',
      status: 'pending',
    },
    {
      id: 2,
      brand: 'BeautyCo',
      campaign: 'Skincare Series',
      budget: '$1,500',
      deadline: '2025-04-15',
      status: 'accepted',
    },
  ];

  const recentContent: ContentItem[] = [
    {
      id: 3,
      title: 'Spring Lookbook',
      platform: 'Instagram',
      scheduledDate: '2025-03-15',
      status: 'published',
      metrics: {
        views: 25000,
        likes: 1200,
        comments: 89,
      },
    },
    {
      id: 4,
      title: 'Morning Routine',
      platform: 'TikTok',
      scheduledDate: '2025-03-14',
      status: 'published',
      metrics: {
        views: 50000,
        likes: 5000,
        comments: 230,
      },
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Creator Dashboard</h1>
        <div className="flex items-center space-x-4">
          <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700">
            <Plus className="h-4 w-4 mr-2" />
            Create Content
          </button>
          <button className="relative p-2 text-gray-400 hover:text-gray-500">
            <Bell className="h-6 w-6" />
            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white" />
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Users className="h-6 w-6 text-gray-400" />
              </div>
              <div className="ml-5">
                <p className="text-sm font-medium text-gray-500">Total Followers</p>
                <p className="text-2xl font-semibold text-gray-900">125.4K</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <BarChart2 className="h-6 w-6 text-gray-400" />
              </div>
              <div className="ml-5">
                <p className="text-sm font-medium text-gray-500">Engagement Rate</p>
                <p className="text-2xl font-semibold text-gray-900">4.8%</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <MessageSquare className="h-6 w-6 text-gray-400" />
              </div>
              <div className="ml-5">
                <p className="text-sm font-medium text-gray-500">Unread Messages</p>
                <p className="text-2xl font-semibold text-gray-900">{messages.filter(m => m.unread).length}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Calendar className="h-6 w-6 text-gray-400" />
              </div>
              <div className="ml-5">
                <p className="text-sm font-medium text-gray-500">Scheduled Posts</p>
                <p className="text-2xl font-semibold text-gray-900">{upcomingContent.length}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Messages and Collaboration Requests */}
        <div className="lg:col-span-2 space-y-8">
          {/* Messages */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
              <h2 className="text-lg font-medium text-gray-900">Recent Messages</h2>
              <Link to="/workspace/messages" className="text-sm text-purple-600 hover:text-purple-500">
                View all
              </Link>
            </div>
            <div className="border-t border-gray-200">
              <ul className="divide-y divide-gray-200">
                {messages.map((message) => (
                  <li key={message.id} className="px-4 py-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-900">{message.sender}</p>
                        <p className="text-sm text-gray-500">{message.content}</p>
                      </div>
                      <div className="flex items-center">
                        <span className="text-xs text-gray-500">{message.time}</span>
                        {message.unread && (
                          <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                            New
                          </span>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Collaboration Requests */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h2 className="text-lg font-medium text-gray-900">Collaboration Requests</h2>
            </div>
            <div className="border-t border-gray-200">
              <ul className="divide-y divide-gray-200">
                {collaborationRequests.map((request) => (
                  <li key={request.id} className="px-4 py-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-900">{request.brand}</p>
                        <p className="text-sm text-gray-500">{request.campaign}</p>
                        <div className="mt-1">
                          <span className="text-xs text-gray-500">Budget: {request.budget}</span>
                          <span className="mx-2">•</span>
                          <span className="text-xs text-gray-500">Deadline: {request.deadline}</span>
                        </div>
                      </div>
                      <div>
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            request.status === 'pending'
                              ? 'bg-yellow-100 text-yellow-800'
                              : request.status === 'accepted'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-red-100 text-red-800'
                          }`}
                        >
                          {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Content Calendar and Recent Performance */}
        <div className="space-y-8">
          {/* Upcoming Content */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
              <h2 className="text-lg font-medium text-gray-900">Content Calendar</h2>
              <Link to="/workspace/calendar" className="text-sm text-purple-600 hover:text-purple-500">
                View calendar
              </Link>
            </div>
            <div className="border-t border-gray-200">
              <ul className="divide-y divide-gray-200">
                {upcomingContent.map((content) => (
                  <li key={content.id} className="px-4 py-4">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{content.title}</p>
                      <div className="mt-1">
                        <span className="text-xs text-gray-500">{content.platform}</span>
                        <span className="mx-2">•</span>
                        <span className="text-xs text-gray-500">{content.scheduledDate}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Recent Content Performance */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h2 className="text-lg font-medium text-gray-900">Recent Performance</h2>
            </div>
            <div className="border-t border-gray-200">
              <ul className="divide-y divide-gray-200">
                {recentContent.map((content) => (
                  <li key={content.id} className="px-4 py-4">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{content.title}</p>
                      <div className="mt-1">
                        <span className="text-xs text-gray-500">{content.platform}</span>
                        <span className="mx-2">•</span>
                        <span className="text-xs text-gray-500">{content.scheduledDate}</span>
                      </div>
                      {content.metrics && (
                        <div className="mt-2 grid grid-cols-3 gap-4">
                          <div>
                            <p className="text-sm font-medium text-gray-900">{content.metrics.views}</p>
                            <p className="text-xs text-gray-500">Views</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900">{content.metrics.likes}</p>
                            <p className="text-xs text-gray-500">Likes</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900">{content.metrics.comments}</p>
                            <p className="text-xs text-gray-500">Comments</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfluencerDashboard;