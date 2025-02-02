import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [gov, setGov] = useState('');
  const [applications, setApplications] = useState([]); // Initialize as empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const storedGov = localStorage.getItem('gov');
    if (storedGov) {
      setGov(storedGov);
    } else {
      setLoading(false); // Stop loading if gov is not set
    }
  }, []);

  const getApplications = async () => {
    if (!gov || gov.trim() === "") {
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`http://127.0.0.1:3000/api/v1/application/gov/${gov}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch applications");
      }

      if (Array.isArray(data.applications)) {
        setApplications(data.applications);
      } else {
        throw new Error("Invalid data format received from the server");
      }
    } catch (error) {
      console.error("Error fetching applications:", error.message);
      setError(error.message);
      setApplications([]); // Reset applications to avoid UI errors
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getApplications();
  }, [gov]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  const totalApplications = applications.length;
  const approvedApplications = applications.filter(app => app.status === 'Approved').length;
  const pendingApplications = applications.filter(app => app.status === 'Pending').length;
  const rejectedApplications = applications.filter(app => app.status === 'Rejected').length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {/* Total Applications Card */}
        <div className="bg-white p-6 rounded-lg border border-neutral-200/20">
          <div className="flex items-center">
            <div className="p-3 bg-blue-100 rounded-lg">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm text-neutral-600">Total Applications</p>
              <h3 className="text-2xl font-semibold text-neutral-900">{totalApplications}</h3>
            </div>
          </div>
        </div>

        {/* Approved Applications Card */}
        <div className="bg-white p-6 rounded-lg border border-neutral-200/20">
          <div className="flex items-center">
            <div className="p-3 bg-green-100 rounded-lg">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm text-neutral-600">Approved Applications</p>
              <h3 className="text-2xl font-semibold text-neutral-900">{approvedApplications}</h3>
            </div>
          </div>
        </div>

        {/* Pending Applications Card */}
        <div className="bg-white p-6 rounded-lg border border-neutral-200/20">
          <div className="flex items-center">
            <div className="p-3 bg-yellow-100 rounded-lg">
              <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm text-neutral-600">Pending Applications</p>
              <h3 className="text-2xl font-semibold text-neutral-900">{pendingApplications}</h3>
            </div>
          </div>
        </div>

        {/* Rejected Applications Card */}
        <div className="bg-white p-6 rounded-lg border border-neutral-200/20">
          <div className="flex items-center">
            <div className="p-3 bg-red-100 rounded-lg">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm text-neutral-600">Rejected Applications</p>
              <h3 className="text-2xl font-semibold text-neutral-900">{rejectedApplications}</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity Table */}
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
                <th className="pb-4">Title</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200/20">
              {applications.map((app) => (
                <tr key={app._id} className="text-sm">
                  <td className="py-4">{app._id}</td>
                  <td className="py-4">{app.applicationType}</td>
                  <td className="py-4">
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        app.status === 'Approved'
                          ? 'bg-green-100 text-green-800'
                          : app.status === 'Pending'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {app.status}
                    </span>
                  </td>
                  <td className="py-4">{app.title || 'N/A'}</td>
                  <td className="px-6 py-4">
                      <button className="bg-blue-600 text-white py-2 px-4 rounded-lg" onClick={() => navigate(`/admin/documents/${app._id}`)}>View Details</button>
                    </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;