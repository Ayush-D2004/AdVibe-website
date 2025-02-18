import React from 'react';
import { User, Bell, Lock, Globe, CreditCard } from 'lucide-react';

const Settings = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="md:flex md:items-center md:justify-between">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            Settings
          </h2>
        </div>
      </div>

      <div className="mt-8">
        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            {/* Profile Settings */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900 flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  Profile Settings
                </h3>
                <div className="mt-4 space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Notification Settings */}
              <div className="pt-6 border-t border-gray-200">
                <h3 className="text-lg leading-6 font-medium text-gray-900 flex items-center">
                  <Bell className="h-5 w-5 mr-2" />
                  Notification Preferences
                </h3>
                <div className="mt-4 space-y-4">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="email_notifications"
                        name="email_notifications"
                        type="checkbox"
                        className="focus:ring-purple-500 h-4 w-4 text-purple-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="email_notifications" className="font-medium text-gray-700">
                        Email Notifications
                      </label>
                      <p className="text-gray-500">Receive updates about campaigns and messages</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Security Settings */}
              <div className="pt-6 border-t border-gray-200">
                <h3 className="text-lg leading-6 font-medium text-gray-900 flex items-center">
                  <Lock className="h-5 w-5 mr-2" />
                  Security
                </h3>
                <div className="mt-4">
                  <button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                    Change Password
                  </button>
                </div>
              </div>

              {/* Billing Settings */}
              <div className="pt-6 border-t border-gray-200">
                <h3 className="text-lg leading-6 font-medium text-gray-900 flex items-center">
                  <CreditCard className="h-5 w-5 mr-2" />
                  Billing
                </h3>
                <div className="mt-4 space-y-4">
                  <div className="bg-gray-50 p-4 rounded-md">
                    <p className="text-sm text-gray-700">Current Plan: Professional</p>
                    <p className="text-sm text-gray-500">Next billing date: April 1, 2025</p>
                  </div>
                  <button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                    Manage Subscription
                  </button>
                </div>
              </div>

              {/* Language Settings */}
              <div className="pt-6 border-t border-gray-200">
                <h3 className="text-lg leading-6 font-medium text-gray-900 flex items-center">
                  <Globe className="h-5 w-5 mr-2" />
                  Language & Region
                </h3>
                <div className="mt-4">
                  <select
                    id="language"
                    name="language"
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm rounded-md"
                  >
                    <option>English (US)</option>
                    <option>Spanish</option>
                    <option>French</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Save Button */}
            <div className="mt-6 flex justify-end">
              <button
                type="submit"
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;