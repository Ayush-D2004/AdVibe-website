import React from 'react';
import { BarChart2, Users, Zap, TrendingUp } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { name: 'Total Campaigns', value: '12', change: '+20%', icon: Zap },
    { name: 'Active Collaborations', value: '4', change: '+12%', icon: Users },
    { name: 'Engagement Rate', value: '4.5%', change: '+2.3%', icon: TrendingUp },
    { name: 'Total Reach', value: '2.4M', change: '+15%', icon: BarChart2 },
  ];

  const recentActivity = [
    {
      id: 1,
      type: 'campaign',
      title: 'Summer Collection Launch',
      description: 'Campaign started with 5 influencers',
      date: '2h ago',
    },
    {
      id: 2,
      type: 'message',
      title: 'New Message from StyleCo',
      description: 'Regarding the upcoming winter campaign',
      date: '4h ago',
    },
    {
      id: 3,
      type: 'analytics',
      title: 'Campaign Performance Update',
      description: 'Spring collection campaign exceeded targets',
      date: '1d ago',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="md:flex md:items-center md:justify-between">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            Dashboard
          </h2>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
          >
            <dt>
              <div className="absolute bg-purple-500 rounded-md p-3">
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <p className="ml-16 text-sm font-medium text-gray-500 truncate">
                {stat.name}
              </p>
            </dt>
            <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
              <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
              <p className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                {stat.change}
              </p>
            </dd>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="mt-8">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Recent Activity
        </h3>
        <div className="mt-4 bg-white shadow rounded-lg">
          <ul className="divide-y divide-gray-200">
            {recentActivity.map((activity) => (
              <li key={activity.id} className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Zap className="h-5 w-5 text-purple-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-purple-600">
                        {activity.title}
                      </p>
                      <p className="text-sm text-gray-500">{activity.description}</p>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <span className="text-sm text-gray-500">{activity.date}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;