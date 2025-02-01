import React from 'react';
import { useNavigate } from 'react-router-dom';

function UserDashBoard({ isLoggedIn, userApplications }) {
    const navigate = useNavigate();

    return (
        <div className='flex items-center justify-center w-full h-screen'>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Quick Stats - Only show if user is logged in and has applications */}
            {isLoggedIn && userApplications && userApplications.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div className="bg-white p-6 rounded-lg border border-neutral-200/20">
                        <div className="flex items-center">
                            <div className="p-3 bg-blue-100 rounded-lg">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                                </svg>
                            </div>
                            <div className="ml-4">
                                <p className="text-sm text-neutral-600">Total Applications</p>
                                <h3 className="text-lg font-semibold text-neutral-900">{userApplications.length}</h3>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg border border-neutral-200/20">
                        <div className="flex items-center">
                            <div className="p-3 bg-green-100 rounded-lg">
                                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                            <div className="ml-4">
                                <p className="text-sm text-neutral-600">Approved</p>
                                <h3 className="text-lg font-semibold text-neutral-900">
                                    {userApplications.filter(app => app.status === 'Approved').length}
                                </h3>
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
                                <h3 className="text-lg font-semibold text-neutral-900">
                                    {userApplications.filter(app => app.status === 'Pending').length}
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Recent Applications - Only show if user is logged in and has applications */}
            {isLoggedIn && userApplications && userApplications.length > 0 && (
                <div className="bg-white rounded-lg border border-neutral-200/20 mb-6">
                    <div className="p-6 border-b border-neutral-200/20">
                        <h2 className="text-lg font-medium text-neutral-900">Recent Applications</h2>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-neutral-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Application ID</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Type</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Status</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Last Updated</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Action</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-neutral-200/20">
                                {userApplications.map((app, index) => (
                                    <tr key={index}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-900">{app.id}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600">{app.type}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                                app.status === 'Approved' ? 'bg-green-100 text-green-800' :
                                                app.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
                                            }`}>
                                                {app.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600">{app.lastUpdated}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                                            <button className="text-blue-600 hover:text-blue-900">View Details</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {/* Quick Actions - Always show */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg border border-neutral-200/20">
                    <h3 className="text-lg font-medium text-neutral-900 mb-4">New Application</h3>
                    <p className="text-neutral-600 mb-4">Start a new application for government services</p>
                    <button onClick={() => navigate('/user/application-form')}  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-150">Apply Now</button>
                </div>

                {/* Track Application - Only show if user is logged in */}
                {isLoggedIn && (
                    <div className="bg-white p-6 rounded-lg border border-neutral-200/20">
                        <h3 className="text-lg font-medium text-neutral-900 mb-4">Track Application</h3>
                        <p className="text-neutral-600 mb-4">Check the status of your existing applications</p>
                        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-150">Track Status</button>
                    </div>
                )}

                <div className="bg-white p-6 rounded-lg border border-neutral-200/20">
                    <h3 className="text-lg font-medium text-neutral-900 mb-4">Help & Support</h3>
                    <p className="text-neutral-600 mb-4">Get assistance with your applications</p>
                    <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-150">Contact Support</button>
                </div>
            </div>
        </div>
        </div>
    );
}

export default UserDashBoard;