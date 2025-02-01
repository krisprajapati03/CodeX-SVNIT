import React from 'react';

const Dashboard = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg border border-neutral-200/20">
          <div className="flex items-center">
            <div className="p-3 bg-blue-100 rounded-lg">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm text-neutral-600">Total Applications</p>
              <h3 className="text-2xl font-semibold text-neutral-900">1,234</h3>
              <p className="text-xs text-green-600">↑ 12% from last month</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-neutral-200/20">
          <div className="flex items-center">
            <div className="p-3 bg-green-100 rounded-lg">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm text-neutral-600">Approved</p>
              <h3 className="text-2xl font-semibold text-neutral-900">856</h3>
              <p className="text-xs text-green-600">↑ 8% from last month</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-neutral-200/20">
          <div className="flex items-center">
            <div className="p-3 bg-yellow-100 rounded-lg">
              <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm text-neutral-600">Pending</p>
              <h3 className="text-2xl font-semibold text-neutral-900">324</h3>
              <p className="text-xs text-yellow-600">↓ 3% from last month</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-neutral-200/20">
          <div className="flex items-center">
            <div className="p-3 bg-red-100 rounded-lg">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm text-neutral-600">Rejected</p>
              <h3 className="text-2xl font-semibold text-neutral-900">54</h3>
              <p className="text-xs text-red-600">↑ 2% from last month</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Application Types Chart */}
        <div className="lg:col-span-2 bg-white rounded-lg border border-neutral-200/20 p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-medium text-neutral-900">Application Types Distribution</h3>
            <select className="px-3 py-1 border border-neutral-200/20 rounded-lg text-sm">
              <option>Last 30 Days</option>
              <option>Last 3 Months</option>
              <option>Last Year</option>
            </select>
          </div>
          <div className="h-80 bg-neutral-50 rounded-lg flex items-center justify-center">
            <p className="text-neutral-600">[Bar Chart Placeholder]</p>
          </div>
        </div>

        {/* Processing Time */}
        <div className="bg-white rounded-lg border border-neutral-200/20 p-6">
          <h3 className="text-lg font-medium text-neutral-900 mb-6">Average Processing Time</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-neutral-600">Birth Certificate</span>
                <span className="text-neutral-900 font-medium">3.2 days</span>
              </div>
              <div className="w-full bg-neutral-100 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '65%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-neutral-600">Income Certificate</span>
                <span className="text-neutral-900 font-medium">4.5 days</span>
              </div>
              <div className="w-full bg-neutral-100 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '80%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-neutral-600">Residence Proof</span>
                <span className="text-neutral-900 font-medium">2.8 days</span>
              </div>
              <div className="w-full bg-neutral-100 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '45%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="mt-6 bg-white rounded-lg border border-neutral-200/20">
        <div className="p-6 border-b border-neutral-200/20">
          <h3 className="text-lg font-medium text-neutral-900">Recent Activity</h3>
        </div>
        <div className="p-6">
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm font-medium text-neutral-500">
                <th className="pb-4">Application ID</th>
                <th className="pb-4">Type</th>
                <th className="pb-4">Status</th>
                <th className="pb-4">Processing Time</th>
                <th className="pb-4">Officer</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200/20">
              <tr className="text-sm">
                <td className="py-4">#APP-2024-001</td>
                <td className="py-4">Birth Certificate</td>
                <td className="py-4">
                  <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Approved</span>
                </td>
                <td className="py-4">2.5 days</td>
                <td className="py-4">Officer Kumar</td>
              </tr>
              <tr className="text-sm">
                <td className="py-4">#APP-2024-002</td>
                <td className="py-4">Income Certificate</td>
                <td className="py-4">
                  <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">Pending</span>
                </td>
                <td className="py-4">1.8 days</td>
                <td className="py-4">Officer Singh</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;