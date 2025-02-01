import React from 'react';

const ApplicationForm = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-lg border border-neutral-200/20 overflow-hidden">
        {/* Form Header */}
        <div className="p-6 border-b border-neutral-200/20">
          <h2 className="text-lg font-medium text-neutral-900">New Application Submission</h2>
          <p className="mt-1 text-sm text-neutral-600">Please fill in all required information accurately</p>
        </div>

        {/* Form Body */}
        <form className="p-6 space-y-6">
          {/* Personal Information Section */}
          <div className="space-y-4">
            <h3 className="text-md font-medium text-neutral-900">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">Full Name*</label>
                <input
                  type="text"
                  required
                  className="w-full px-3 py-2 border border-neutral-200/20 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">Date of Birth*</label>
                <input
                  type="date"
                  required
                  className="w-full px-3 py-2 border border-neutral-200/20 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">Mobile Number*</label>
                <input
                  type="tel"
                  required
                  className="w-full px-3 py-2 border border-neutral-200/20 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">Email Address*</label>
                <input
                  type="email"
                  required
                  className="w-full px-3 py-2 border border-neutral-200/20 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Application Details Section */}
          <div className="space-y-4">
            <h3 className="text-md font-medium text-neutral-900">Application Details</h3>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">Application Type*</label>
                <select
                  required
                  className="w-full px-3 py-2 border border-neutral-200/20 rounded-lg focus:outline-none focus:border-blue-500"
                >
                  <option value="">Select Application Type</option>
                  <option value="birth_certificate">Birth Certificate</option>
                  <option value="income_certificate">Income Certificate</option>
                  <option value="residence_certificate">Residence Certificate</option>
                  <option value="caste_certificate">Caste Certificate</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">Purpose of Application*</label>
                <textarea
                  required
                  rows="3"
                  className="w-full px-3 py-2 border border-neutral-200/20 rounded-lg focus:outline-none focus:border-blue-500"
                ></textarea>
              </div>
            </div>
          </div>

          {/* Document Upload Section */}
          <div className="space-y-4">
            <h3 className="text-md font-medium text-neutral-900">Required Documents</h3>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">Identity Proof (Aadhaar/PAN)*</label>
                <div className="flex items-center space-x-2">
                  <input
                    type="file"
                    required
                    className="block w-full text-sm text-neutral-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">Address Proof*</label>
                <div className="flex items-center space-x-2">
                  <input
                    type="file"
                    required
                    className="block w-full text-sm text-neutral-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">Supporting Documents</label>
                <div className="flex items-center space-x-2">
                  <input
                    type="file"
                    multiple
                    className="block w-full text-sm text-neutral-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  />
                </div>
                <p className="mt-1 text-xs text-neutral-500">You can upload multiple supporting documents (Max 5MB each)</p>
              </div>
            </div>
          </div>

          {/* Declaration Section */}
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  type="checkbox"
                  required
                  className="h-4 w-4 text-blue-600 border-neutral-200/20 rounded"
                />
              </div>
              <div className="ml-3 text-sm">
                <label className="font-medium text-neutral-700">Declaration</label>
                <p className="text-neutral-500">I hereby declare that all the information provided is true and correct to the best of my knowledge.</p>
              </div>
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex items-center justify-end space-x-4 pt-4 border-t border-neutral-200/20">
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium text-neutral-700 hover:text-neutral-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplicationForm;