import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  BarChart2, 
  MessageSquare, 
  Users, 
  Calendar,
  FileText,
  Settings,
  HelpCircle,
  Zap
} from 'lucide-react';
import { cn } from '../../lib/utils';

interface WorkspaceSidebarProps {
  isOpen: boolean;
}

const WorkspaceSidebar: React.FC<WorkspaceSidebarProps> = ({ isOpen }) => {
  const location = useLocation();

  const navigation = [
    { name: 'Dashboard', href: '/workspace', icon: Home },
    { name: 'Analytics', href: '/workspace/analytics', icon: BarChart2 },
    { name: 'Campaigns', href: '/workspace/campaigns', icon: Zap },
    { name: 'Messages', href: '/workspace/messages', icon: MessageSquare },
    { name: 'Network', href: '/workspace/network', icon: Users },
    { name: 'Calendar', href: '/workspace/calendar', icon: Calendar },
    { name: 'Documents', href: '/workspace/documents', icon: FileText },
  ];

  const secondaryNavigation = [
    { name: 'Settings', href: '/workspace/settings', icon: Settings },
    { name: 'Help & Support', href: '/workspace/support', icon: HelpCircle },
  ];

  return (
    <div className={cn(
      "flex flex-col fixed inset-y-0 bg-purple-700 pt-5 pb-4 w-64 transform transition-transform duration-150 ease-in-out lg:translate-x-0 lg:static lg:inset-0",
      isOpen ? "translate-x-0" : "-translate-x-full"
    )}>
      <div className="flex items-center flex-shrink-0 px-4">
        <Link to="/" className="flex items-center">
          <Zap className="h-8 w-8 text-white" />
          <span className="ml-2 text-white text-xl font-bold">AdVibe</span>
        </Link>
      </div>

      <div className="mt-8 flex-1 flex flex-col overflow-y-auto">
        <nav className="flex-1 px-2 space-y-1">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  isActive
                    ? 'bg-purple-800 text-white'
                    : 'text-purple-100 hover:bg-purple-600',
                  'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                )}
              >
                <item.icon
                  className={cn(
                    isActive ? 'text-white' : 'text-purple-200 group-hover:text-white',
                    'mr-3 flex-shrink-0 h-6 w-6'
                  )}
                />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto">
          <div className="px-2 space-y-1">
            {secondaryNavigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-purple-100 hover:bg-purple-600"
              >
                <item.icon className="mr-3 flex-shrink-0 h-6 w-6 text-purple-200 group-hover:text-white" />
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkspaceSidebar;