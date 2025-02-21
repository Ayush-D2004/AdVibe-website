import React from 'react';
import { FileText, Download, Share2, MoreVertical, Plus, Search } from 'lucide-react';

const Documents = () => {
  const documents = [
    {
      id: 1,
      name: 'Campaign Brief Template',
      type: 'PDF',
      size: '2.4 MB',
      modified: '2025-03-10',
      shared: true,
    },
    {
      id: 2,
      name: 'Influencer Guidelines',
      type: 'DOC',
      size: '1.8 MB',
      modified: '2025-03-08',
      shared: true,
    },
    {
      id: 3,
      name: 'Performance Report',
      type: 'PDF',
      size: '3.2 MB',
      modified: '2025-03-05',
      shared: false,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="md:flex md:items-center md:justify-between">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            Documents
          </h2>
        </div>
        <div className="mt-4 flex md:mt-0 md:ml-4">
          <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
            <Plus className="h-4 w-4 mr-2" />
            Upload Document
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="mt-8">
        <div className="max-w-xs">
          <label htmlFor="search" className="sr-only">Search documents</label>
          <div className="relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              name="search"
              id="search"
              className="block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
              placeholder="Search documents"
            />
          </div>
        </div>
      </div>

      {/* Documents List */}
      <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {documents.map((document) => (
            <li key={document.id}>
              <div className="px-4 py-4 sm:px-6 hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <FileText className="h-8 w-8 text-gray-400" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-purple-600">
                        {document.name}
                      </p>
                      <div className="mt-1 flex items-center">
                        <p className="text-sm text-gray-500">
                          {document.type} • {document.size}
                        </p>
                        {document.shared && (
                          <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                            Shared
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="ml-4 flex items-center space-x-4">
                    <button className="text-gray-400 hover:text-gray-500">
                      <Download className="h-5 w-5" />
                    </button>
                    <button className="text-gray-400 hover:text-gray-500">
                      <Share2 className="h-5 w-5" />
                    </button>
                    <button className="text-gray-400 hover:text-gray-500">
                      <MoreVertical className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                <div className="mt-2 sm:flex sm:justify-between">
                  <div className="sm:flex">
                    <p className="text-sm text-gray-500">
                      Last modified on {document.modified}
                    </p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Documents;