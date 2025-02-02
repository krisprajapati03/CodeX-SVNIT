import React, { useState } from 'react';
import axios from 'axios';

const ApplicationTracker = () => {
  const [applicationId, setApplicationId] = useState(''); // Holds the application ID
  const [status, setStatus] = useState(null); // Holds the status of the application
  const [error, setError] = useState(null); // Holds error message if the application ID is not found

  // Function to handle the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`http://127.0.0.1:3000/api/v1/application/${applicationId}`);
      setStatus(response.data);
      setError(null); // Reset error if found
    } catch (err) {
      setError('Application ID not found');
      setStatus(null); // Reset status if not found
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Search Form */}
      <div className="bg-white rounded-lg border border-neutral-200/20 mb-6">
        <div className="p-6">
          <h2 className="text-lg font-medium text-neutral-900 mb-4">Track Your Application</h2>
          <form className="flex flex-col md:flex-row gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter Application ID"
              value={applicationId}
              onChange={(e) => setApplicationId(e.target.value)}
              className="flex-1 px-4 py-2 border border-neutral-200/20 rounded-lg focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Track Status
            </button>
          </form>
          {error && (
            <div className="mt-4 text-red-600 text-sm">{error}</div>
          )}
        </div>
      </div>

      {/* Application Timeline */}
      {status && (
        <div className="bg-white rounded-lg border border-neutral-200/20">
          <div className="p-6 border-b border-neutral-200/20">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h3 className="text-lg font-medium text-neutral-900">
                  Application #{status.id}
                </h3>
                <p className="text-sm text-neutral-600">Birth Certificate Application</p>
              </div>
              <span className="mt-2 md:mt-0 px-3 py-1 text-sm font-medium rounded-full bg-yellow-100 text-yellow-800">
                {status.status}
              </span>
            </div>
          </div>

          <div className="p-6">
            <div className="space-y-8">
              {status.stages.map((item, index) => (
                <div key={index} className="relative flex items-start group">
                  <div className="flex items-center h-full">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    {index < status.stages.length - 1 && (
                      <div className="flex-shrink-0 w-0.5 h-full bg-neutral-200 absolute top-8 left-4"></div>
                    )}
                  </div>
                  <div className="ml-4 min-w-0 flex-1">
                    <div className="text-sm font-medium text-neutral-900">{item.stage}</div>
                    <div className="mt-1 text-sm text-neutral-600">{item.date}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Information */}
            <div className="mt-8 pt-6 border-t border-neutral-200/20">
              <h4 className="text-sm font-medium text-neutral-900 mb-4">Additional Information</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-neutral-600">Expected Completion:</p>
                  <p className="text-sm font-medium text-neutral-900">{status.additionalInfo.expectedCompletion}</p>
                </div>
                <div>
                  <p className="text-sm text-neutral-600">Department:</p>
                  <p className="text-sm font-medium text-neutral-900">{status.additionalInfo.department}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApplicationTracker;
