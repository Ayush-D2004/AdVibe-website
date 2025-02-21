import React from 'react';
import { BarChart2, TrendingUp, Users, DollarSign, LineChart, PieChart } from 'lucide-react';

const Analytics = () => {
  const metrics = [
    {
      name: 'Total Reach',
      value: '2.4M',
      change: '+15%',
      icon: Users,
      trend: 'up',
    },
    {
      name: 'Engagement Rate',
      value: '4.5%',
      change: '+2.3%',
      icon: TrendingUp,
      trend: 'up',
    },
    {
      name: 'Campaign ROI',
      value: '320%',
      change: '+28%',
      icon: DollarSign,
      trend: 'up',
    },
    {
      name: 'Active Campaigns',
      value: '12',
      change: '-2',
      icon: BarChart2,
      trend: 'down',
    },
  ];

  const campaigns = [
    {
      id: 1,
      name: 'Summer Collection',
      reach: '850K',
      engagement: '4.8%',
      roi: '280%',
      status: 'active',
    },
    {
      id: 2,
      name: 'Brand Awareness',
      reach: '1.2M',
      engagement: '3.9%',
      roi: '310%',
      status: 'active',
    },
    {
      id: 3,
      name: 'Product Launch',
      reach: '650K',
      engagement: '5.2%',
      roi: '420%',
      status: 'completed',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="md:flex md:items-center md:justify-between">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            Analytics Overview
          </h2>
        </div>
        <div className="mt-4 flex md:mt-0 md:ml-4">
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
            Export Report
          </button>
          <button className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
            Generate Insights
          </button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <div
            key={metric.name}
            className="bg-white overflow-hidden shadow rounded-lg"
          >
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <metric.icon className="h-6 w-6 text-purple-600" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      {metric.name}
                    </dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900">
                        {metric.value}
                      </div>
                      <div className={`ml-2 flex items-baseline text-sm font-semibold ${
                        metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {metric.change}
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-900">Engagement Trends</h3>
              <LineChart className="h-6 w-6 text-gray-400" />
            </div>
            <div className="mt-4 h-48 flex items-center justify-center bg-gray-50 rounded">
              <p className="text-gray-500">Chart visualization would go here</p>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-900">Audience Demographics</h3>
              <PieChart className="h-6 w-6 text-gray-400" />
            </div>
            <div className="mt-4 h-48 flex items-center justify-center bg-gray-50 rounded">
              <p className="text-gray-500">Chart visualization would go here</p>
            </div>
          </div>
        </div>
      </div>

      {/* Campaigns Table */}
      <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Campaign Performance
          </h3>
        </div>
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden border-b border-gray-200">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Campaign
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Reach
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Engagement
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        ROI
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {campaigns.map((campaign) => (
                      <tr key={campaign.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {campaign.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {campaign.reach}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {campaign.engagement}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {campaign.roi}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            campaign.status === 'active'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}>
                            {campaign.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;