import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserDashBoard = () => {
  const navigate = useNavigate();
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const email = localStorage.getItem('email');

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:3000/api/v1/application/citizen/${email}`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch applications");
        }

        // Ensure data is an array
        setApplications(Array.isArray(data) ? data : data.applications || []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, [email]);

  if (!Array.isArray(applications)) {
    return <p className="text-center p-6 text-red-500">Invalid data received from the server.</p>;
  }

  return (
    <div className="max-w-7xl pt-14 mx-auto px-4 sm:px-6 lg:px-8">
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <StatCard title="Total Applications" count={applications.length} color="blue" />
        <StatCard
          title="Approved"
          count={applications.filter(app => app.status === "Approved").length}
          color="green"
        />
        <StatCard
          title="Pending"
          count={applications.filter(app => app.status === "Pending").length}
          color="yellow"
        />
      </div>

      {/* Recent Applications Table */}
      <div className="bg-white rounded-lg border border-neutral-200/20 mb-6">
        <div className="p-6 border-b border-neutral-200/20">
          <h2 className="text-lg font-medium text-neutral-900">Recent Applications</h2>
        </div>
        <div className="overflow-x-auto">
          {loading ? (
            <p className="text-center p-6">Loading applications...</p>
          ) : error ? (
            <p className="text-center p-6 text-red-500">{error}</p>
          ) : (
            <table className="w-full">
              <thead className="bg-neutral-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium">Application ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium">ApplicationAt</th>
                  <th className="px-6 py-3 text-left text-xs font-medium">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-neutral-200/20">
                {applications.map((app) => (
                  <tr key={app.id}>
                    <td className="px-6 py-4">{app._id}</td>
                    <td className="px-6 py-4">{app.applicationType}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs rounded-full ${app.status === "Approved" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}>
                        {app.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">{app.applicationAt}</td>
                    <td className="px-6 py-4">
                      <button className="bg-blue-600 text-white py-2 px-4 rounded-lg" onClick={() => navigate(`/application/${app._id}`)}>View Details</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* New Application Card */}
        <div className="bg-white p-6 rounded-lg border border-neutral-200/20">
          <h3 className="text-lg font-medium text-neutral-900 mb-4">New Application</h3>
          <p className="text-neutral-600 mb-4">Start a new application for government services</p>
          <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-150" onClick={() => navigate('/user/application-form')}>
            Apply Now
          </button>
        </div>

        {/* Track Application Card */}
        <div className="bg-white p-6 rounded-lg border border-neutral-200/20">
          <h3 className="text-lg font-medium text-neutral-900 mb-4">Track Application</h3>
          <p className="text-neutral-600 mb-4">Check the status of your existing applications</p>
          <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-150" onClick={() => navigate('/user/application-status')}>
            Track Status
          </button>
        </div>

        {/* Help & Support Card */}
        <div className="bg-white p-6 rounded-lg border border-neutral-200/20">
          <h3 className="text-lg font-medium text-neutral-900 mb-4">Help & Support</h3>
          <p className="text-neutral-600 mb-4">Get assistance with your applications</p>
          <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-150">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

// StatCard Component
const StatCard = ({ title, count, color }) => {
  const colors = {
    blue: "bg-blue-100 text-blue-600",
    green: "bg-green-100 text-green-600",
    yellow: "bg-yellow-100 text-yellow-600",
  };

  return (
    <div className="bg-white p-6 rounded-lg border border-neutral-200/20">
      <div className="flex items-center">
        <div className={`p-3 rounded-lg ${colors[color]}`}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        </div>
        <div className="ml-4">
          <p className="text-sm text-neutral-600">{title}</p>
          <h3 className="text-lg font-semibold text-neutral-900">{count}</h3>
        </div>
      </div>
    </div>
  );
};

export default UserDashBoard;