import React from 'react';

const forUserDB = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-100 p-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mb-6">
        {/* Pending Review Card */}
        <div className="bg-white p-6 rounded-lg border border-neutral-200/20">
          <div className="flex items-center">
            <div className="p-3 bg-yellow-100 rounded-lg">
              <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm text-neutral-600">Pending Review</p>
              <h3 className="text-lg font-semibold text-neutral-900">18</h3>
            </div>
          </div>
        </div>

        {/* Approved Today Card */}
        <div className="bg-white p-6 rounded-lg border border-neutral-200/20">
          <div className="flex items-center">
            <div className="p-3 bg-green-100 rounded-lg">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm text-neutral-600">Approved Today</p>
              <h3 className="text-lg font-semibold text-neutral-900">12</h3>
            </div>
          </div>
        </div>

        {/* Rejected Card */}
        <div className="bg-white p-6 rounded-lg border border-neutral-200/20">
          <div className="flex items-center">
            <div className="p-3 bg-red-100 rounded-lg">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm text-neutral-600">Rejected</p>
              <h3 className="text-lg font-semibold text-neutral-900">3</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Pending Applications Table */}
      <div className="bg-white rounded-lg border border-neutral-200/20 w-full max-w-6xl mb-6">
        <div className="p-6 border-b border-neutral-200/20 flex justify-between items-center">
          <h2 className="text-lg font-medium text-neutral-900">Pending Applications</h2>
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="Search applications..."
              className="px-4 py-2 border border-neutral-200/20 rounded-lg focus:outline-none focus:border-blue-500"
            />
            <select className="px-4 py-2 border border-neutral-200/20 rounded-lg focus:outline-none focus:border-blue-500">
              <option>All Types</option>
              <option>Birth Certificate</option>
              <option>Income Certificate</option>
              <option>Residence Proof</option>
            </select>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-neutral-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Application ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Applicant</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Submission Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-neutral-200/20">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-900">#APP-2024-001</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <img className="h-8 w-8 rounded-full" src="https://placehold.co/32x32" alt="Applicant" />
                    <div className="ml-4">
                      <div className="text-sm font-medium text-neutral-900">Raj Kumar</div>
                      <div className="text-sm text-neutral-500">raj@example.com</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600">Birth Certificate</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600">2024-01-20</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">Pending Review</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600">
                  <button className="text-blue-600 hover:text-blue-900 mr-3">Review</button>
                  <button className="text-green-600 hover:text-green-900 mr-3">Approve</button>
                  <button className="text-red-600 hover:text-red-900">Reject</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 border-t border-neutral-200/20">
          <div className="flex justify-between items-center">
            <div className="text-sm text-neutral-600">Showing 1 to 10 of 18 entries</div>
            <div className="flex space-x-2">
              <button className="px-3 py-1 border border-neutral-200/20 rounded-lg hover:bg-neutral-50">Previous</button>
              <button className="px-3 py-1 bg-blue-600 text-white rounded-lg">1</button>
              <button className="px-3 py-1 border border-neutral-200/20 rounded-lg hover:bg-neutral-50">2</button>
              <button className="px-3 py-1 border border-neutral-200/20 rounded-lg hover:bg-neutral-50">Next</button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        <div className="bg-white p-6 rounded-lg border border-neutral-200/20">
          <h3 className="text-lg font-medium text-neutral-900 mb-4">Document Verification</h3>
          <p className="text-neutral-600 mb-4">Verify and validate submitted documents</p>
          <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-150">Start Verification</button>
        </div>

        <div className="bg-white p-6 rounded-lg border border-neutral-200/20">
          <h3 className="text-lg font-medium text-neutral-900 mb-4">Communication Panel</h3>
          <p className="text-neutral-600 mb-4">Message applicants for clarifications</p>
          <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-150">Open Messages</button>
        </div>

        <div className="bg-white p-6 rounded-lg border border-neutral-200/20">
          <h3 className="text-lg font-medium text-neutral-900 mb-4">Generate Reports</h3>
          <p className="text-neutral-600 mb-4">Create detailed application reports</p>
          <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-150">Generate Report</button>
        </div>
      </div>
    </div>
  );
};

export default forUserDB;