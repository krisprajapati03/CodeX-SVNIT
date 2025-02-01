import React from 'react';

const DocumentVerificationPanel = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-lg border border-neutral-200/20">
        <div className="p-6 border-b border-neutral-200/20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h2 className="text-lg font-medium text-neutral-900">Document Verification Panel</h2>
              <p className="text-sm text-neutral-600">Verify and validate submitted documents</p>
            </div>
            <div className="mt-4 md:mt-0">
              <select className="px-4 py-2 border border-neutral-200/20 rounded-lg focus:outline-none focus:border-blue-500">
                <option>All Applications</option>
                <option>Pending Verification</option>
                <option>Verified</option>
                <option>Rejected</option>
              </select>
            </div>
          </div>
        </div>

        {/* Document Viewer */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
          {/* Document List */}
          <div className="border-r border-neutral-200/20 p-4">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Search applications..."
                className="w-full px-4 py-2 border border-neutral-200/20 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg cursor-pointer">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-sm font-medium text-neutral-900">#APP-2024-001</h3>
                    <p className="text-xs text-neutral-600">Birth Certificate</p>
                  </div>
                  <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">Pending</span>
                </div>
              </div>

              <div className="p-4 hover:bg-neutral-50 rounded-lg cursor-pointer">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-sm font-medium text-neutral-900">#APP-2024-002</h3>
                    <p className="text-xs text-neutral-600">Income Certificate</p>
                  </div>
                  <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">Pending</span>
                </div>
              </div>
            </div>
          </div>

          {/* Document Preview */}
          <div className="lg:col-span-2 p-6">
            <div className="mb-6">
              <h3 className="text-lg font-medium text-neutral-900 mb-2">Document Review - #APP-2024-001</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full">Aadhaar Card</span>
                <span className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full">Birth Certificate</span>
                <span className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full">Address Proof</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Document Preview Cards */}
              <div className="border border-neutral-200/20 rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm font-medium text-neutral-900">Aadhaar Card</h4>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-neutral-600 hover:text-neutral-900">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                      </svg>
                    </button>
                    <button className="p-2 text-neutral-600 hover:text-neutral-900">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="aspect-w-16 aspect-h-9 bg-neutral-100 rounded-lg mb-4">
                  <img
                    src="https://placehold.co/400x300"
                    alt="Document Preview"
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">Approve</button>
                  <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">Reject</button>
                </div>
              </div>

              <div className="border border-neutral-200/20 rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm font-medium text-neutral-900">Birth Certificate</h4>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-neutral-600 hover:text-neutral-900">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                      </svg>
                    </button>
                    <button className="p-2 text-neutral-600 hover:text-neutral-900">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="aspect-w-16 aspect-h-9 bg-neutral-100 rounded-lg mb-4">
                  <img
                    src="https://placehold.co/400x300"
                    alt="Document Preview"
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">Approve</button>
                  <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">Reject</button>
                </div>
              </div>
            </div>

            {/* Verification Notes */}
            <div className="mt-6">
              <h4 className="text-sm font-medium text-neutral-900 mb-2">Verification Notes</h4>
              <textarea
                rows="4"
                className="w-full px-4 py-2 border border-neutral-200/20 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Add verification notes..."
              />
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex justify-end space-x-4">
              <button className="px-6 py-2 bg-neutral-100 text-neutral-700 rounded-lg hover:bg-neutral-200">Save Draft</button>
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Complete Verification</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentVerificationPanel;
    