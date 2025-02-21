import React from 'react';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';

const Calendar = () => {
  const events = [
    {
      id: 1,
      title: 'Campaign Kickoff',
      date: '2025-03-15',
      time: '10:00 AM',
      type: 'meeting',
    },
    {
      id: 2,
      title: 'Content Review',
      date: '2025-03-15',
      time: '2:00 PM',
      type: 'review',
    },
    {
      id: 3,
      title: 'Performance Analysis',
      date: '2025-03-16',
      time: '11:00 AM',
      type: 'analysis',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="md:flex md:items-center md:justify-between">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            Calendar
          </h2>
        </div>
        <div className="mt-4 flex md:mt-0 md:ml-4">
          <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
            <Plus className="h-4 w-4 mr-2" />
            Add Event
          </button>
        </div>
      </div>

      {/* Calendar Header */}
      <div className="mt-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button className="p-2 rounded-md hover:bg-gray-100">
              <ChevronLeft className="h-5 w-5 text-gray-600" />
            </button>
            <h3 className="mx-4 text-lg font-semibold text-gray-900">March 2025</h3>
            <button className="p-2 rounded-md hover:bg-gray-100">
              <ChevronRight className="h-5 w-5 text-gray-600" />
            </button>
          </div>
          <div className="flex space-x-2">
            <button className="px-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              Month
            </button>
            <button className="px-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              Week
            </button>
            <button className="px-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              Day
            </button>
          </div>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="mt-4 bg-white shadow ring-1 ring-black ring-opacity-5 lg:flex lg:h-full lg:flex-col">
        <div className="grid grid-cols-7 gap-px border-b border-gray-300 bg-gray-200 text-center text-xs font-semibold leading-6 text-gray-700 lg:flex-none">
          <div className="bg-white py-2">Sun</div>
          <div className="bg-white py-2">Mon</div>
          <div className="bg-white py-2">Tue</div>
          <div className="bg-white py-2">Wed</div>
          <div className="bg-white py-2">Thu</div>
          <div className="bg-white py-2">Fri</div>
          <div className="bg-white py-2">Sat</div>
        </div>
        <div className="flex bg-gray-200 text-xs leading-6 text-gray-700 lg:flex-auto">
          <div className="w-full grid grid-cols-7 grid-rows-5 gap-px">
            {/* Previous Month */}
            <div className="bg-gray-50 text-gray-500 relative py-2 px-3 h-24">
              <span className="absolute top-2 right-2">28</span>
            </div>
            {/* ... More previous month days ... */}

            {/* Current Month */}
            <div className="bg-white relative py-2 px-3 h-24">
              <span className="absolute top-2 right-2">1</span>
              {/* Event Example */}
              <div className="mt-8">
                <div className="bg-purple-100 text-purple-700 rounded px-2 py-1 text-sm mb-1 truncate">
                  Campaign Review
                </div>
              </div>
            </div>
            {/* ... More current month days ... */}
          </div>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="mt-8">
        <h3 className="text-lg font-medium text-gray-900">Upcoming Events</h3>
        <div className="mt-4 space-y-4">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white shadow rounded-lg px-4 py-4 sm:px-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-gray-900">
                    {event.title}
                  </h4>
                  <p className="mt-1 text-sm text-gray-500">
                    {event.date} at {event.time}
                  </p>
                </div>
                <div>
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      event.type === 'meeting'
                        ? 'bg-blue-100 text-blue-800'
                        : event.type === 'review'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-green-100 text-green-800'
                    }`}
                  >
                    {event.type}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;