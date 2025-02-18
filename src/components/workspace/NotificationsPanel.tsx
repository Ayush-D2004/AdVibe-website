import React from 'react';
import { X, Bell } from 'lucide-react';
import { cn } from '../../lib/utils';

interface NotificationsPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const NotificationsPanel: React.FC<NotificationsPanelProps> = ({ isOpen, onClose }) => {
  const notifications = [
    {
      id: 1,
      title: 'New Campaign Request',
      description: 'Beauty Brand Co. wants to collaborate with you on a new campaign.',
      time: '5 minutes ago',
      unread: true,
    },
    {
      id: 2,
      title: 'Campaign Update',
      description: 'Your latest campaign performance report is ready to view.',
      time: '1 hour ago',
      unread: true,
    },
    {
      id: 3,
      title: 'New Message',
      description: 'You have a new message from Fashion Style Inc.',
      time: '2 hours ago',
      unread: false,
    },
  ];

  return (
    <div
      className={cn(
        'fixed inset-0 overflow-hidden z-50',
        !isOpen && 'pointer-events-none'
      )}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={cn(
            'absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity',
            isOpen ? 'opacity-100' : 'opacity-0'
          )}
          onClick={onClose}
        />

        <section
          className={cn(
            'absolute inset-y-0 right-0 pl-10 max-w-full flex transform transition-transform duration-500 ease-in-out',
            isOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          <div className="w-screen max-w-md">
            <div className="h-full flex flex-col bg-white shadow-xl">
              <div className="px-4 py-6 sm:px-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center">
                    <Bell className="h-6 w-6 text-purple-600" />
                    <h2 className="ml-3 text-lg font-medium text-gray-900">Notifications</h2>
                  </div>
                  <div className="ml-3 h-7 flex items-center">
                    <button
                      onClick={onClose}
                      className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-purple-500"
                    >
                      <span className="sr-only">Close panel</span>
                      <X className="h-6 w-6" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex-1 overflow-y-auto">
                <div className="divide-y divide-gray-200">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={cn(
                        'px-4 py-4 sm:px-6',
                        notification.unread && 'bg-purple-50'
                      )}
                    >
                      <div className="flex items-start">
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-medium text-purple-600">
                              {notification.title}
                            </p>
                            <p className="text-xs text-gray-500">{notification.time}</p>
                          </div>
                          <p className="mt-1 text-sm text-gray-600">
                            {notification.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NotificationsPanel;