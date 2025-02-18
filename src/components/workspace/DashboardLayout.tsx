import React, { useState } from 'react';
import { Menu, Bell, Settings, ChevronDown, Search } from 'lucide-react';
import WorkspaceSidebar from './WorkspaceSidebar';
import NotificationsPanel from './NotificationsPanel';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      {/* Sidebar */}
      <WorkspaceSidebar isOpen={sidebarOpen} />

      {/* Main content */}
      <div className="flex-1 overflow-auto">
        {/* Top navigation */}
        <div className="bg-white shadow-sm">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <button
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className="px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 lg:hidden"
                >
                  <Menu className="h-6 w-6" />
                </button>
                <div className="flex-1 flex items-center">
                  <div className="max-w-2xl w-full lg:max-w-xs">
                    <label htmlFor="search" className="sr-only">Search</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="search"
                        name="search"
                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                        placeholder="Search"
                        type="search"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => setNotificationsOpen(!notificationsOpen)}
                  className="p-2 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                >
                  <span className="sr-only">View notifications</span>
                  <Bell className="h-6 w-6" />
                </button>

                {/* Profile dropdown */}
                <div className="ml-3 relative">
                  <div>
                    <button className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                      <span className="hidden md:flex md:items-center">
                        <span className="ml-3 text-gray-700 text-sm font-medium">Tom Cook</span>
                        <ChevronDown className="ml-2 h-4 w-4 text-gray-400" />
                      </span>
                    </button>
                  </div>
                </div>

                <button className="ml-6 p-2 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                  <span className="sr-only">Settings</span>
                  <Settings className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Notifications panel */}
        <NotificationsPanel isOpen={notificationsOpen} onClose={() => setNotificationsOpen(false)} />

        {/* Page content */}
        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
          <div className="py-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;