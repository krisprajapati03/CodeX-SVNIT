import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ApplicationForm = () => {
  // Enhanced Form State
  const [formData, setFormData] = useState({
    fullName: "",
    title: "",
    mobile: "",
    email: "",
    applicationType: "",
    description: "",
    applicationAt: "",
    data: "", // Added required field
    documents: null,
  });

  // Add error and loading states
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [filesInfo, setFilesInfo] = useState([]);

  // Initialize navigate hook inside the component
  const navigate = useNavigate();

  // Handle file selection
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const maxSize = 5 * 1024 * 1024; // 5MB
    
    const fileInfo = files.map(file => ({
      name: file.name,
      size: file.size,
      isValid: file.size <= maxSize
    }));

    const allFilesValid = fileInfo.every(file => file.isValid);
    if (!allFilesValid) {
      setError("One or more files exceed the 5MB limit");
    } else {
      setError("");
      setFormData({ ...formData, documents: e.target.files });
    }
    setFilesInfo(fileInfo);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const form = new FormData();
      
      // Append all text fields
      Object.keys(formData).forEach(key => {
        if (key !== 'documents') {
          form.append(key, formData[key]);
        }
      });

      // Append citizen email for backend reference
      form.append("citizen", formData.email);
      
      // Handle multiple document uploads
      if (formData.documents) {
        Array.from(formData.documents).forEach((file) => {
          form.append("documents", file);
        });
      }

      const response = await fetch("http://127.0.0.1:3000/api/v1/application", {
        method: "POST",
        body: form,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Submission failed');
      }

      // After successful submission, navigate to the dashboard
      navigate('/user/dashboard');
      
    } catch (error) {
      setError(error.message || "Failed to submit application");
      console.error("Error submitting application:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-lg border border-neutral-200/20 overflow-hidden">
        {/* Form Header */}
        <div className="p-6 border-b border-neutral-200/20">
          <h2 className="text-lg font-medium text-neutral-900">New Application Submission</h2>
          <p className="mt-1 text-sm text-neutral-600">Please fill in all required information accurately</p>
        </div>

        {/* Error Display */}
        {error && (
          <div className="p-4 bg-red-50 border-l-4 border-red-500">
            <div className="flex">
              <AlertCircle className="h-5 w-5 text-red-500" />
              <p className="ml-3 text-sm text-red-700">{error}</p>
            </div>
          </div>
        )}

        {/* Form Body */}
        <form className="p-6 space-y-6" onSubmit={handleSubmit}>
          {/* Title Section */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">Title*</label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-3 py-2 border border-neutral-200/20 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          {/* Personal Information Section */}
          <div className="space-y-4">
            <h3 className="text-md font-medium text-neutral-900">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Existing personal information fields */}
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">Full Name*</label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3 py-2 border border-neutral-200/20 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">Mobile Number*</label>
                <input
                  type="tel"
                  required
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  className="w-full px-3 py-2 border border-neutral-200/20 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">Email Address*</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                  value={formData.applicationType}
                  onChange={(e) => setFormData({ ...formData, applicationType: e.target.value })}
                  className="w-full px-3 py-2 border border-neutral-200/20 rounded-lg focus:outline-none focus:border-blue-500"
                >
                  <option value="">Select Application Type</option>
                  <option value="birth_certificate">Birth Certificate</option>
                  <option value="income_certificate">Income Certificate</option>
                  <option value="residence_certificate">Residence Certificate</option>
                  <option value="caste_certificate">Caste Certificate</option>
                  <option value="Verification">Verification</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">Description*</label>
                <textarea
                  required
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows="3"
                  className="w-full px-3 py-2 border border-neutral-200/20 rounded-lg focus:outline-none focus:border-blue-500"
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">Additional Data*</label>
                <textarea
                  required
                  value={formData.data}
                  onChange={(e) => setFormData({ ...formData, data: e.target.value })}
                  rows="3"
                  className="w-full px-3 py-2 border border-neutral-200/20 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Enter any additional information required for your application"
                ></textarea>
              </div>
            </div>
          </div>

          {/* Application Send To Section */}
          <div className="space-y-4">
            <h3 className="text-md font-medium text-neutral-900">Application Send To</h3>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">Send To*</label>
                <select
                  required
                  value={formData.applicationAt}
                  onChange={(e) => setFormData({ ...formData, applicationAt: e.target.value })}
                  className="w-full px-3 py-2 border border-neutral-200/20 rounded-lg focus:outline-none focus:border-blue-500"
                >
                  <option value="">Select Level</option>
                  <option value="Taluka">Taluka</option>
                  <option value="District">District</option>
                  <option value="State">State</option>
                  <option value="Central">Central</option>
                </select>
              </div>
            </div>
          </div>

          {/* File Upload Section */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">Upload Documents*</label>
              <input
                type="file"
                multiple
                required
                accept="image/*,application/pdf,.doc,.docx,.txt"
                onChange={handleFileChange}
                className="w-full px-3 py-2 border border-neutral-200/20 rounded-lg focus:outline-none focus:border-blue-500"
              />
              <p className="mt-1 text-xs text-neutral-500">Allowed file types: .pdf, .doc, .docx, .txt, .jpg, .jpeg, .png (max size 5MB each)</p>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit Application"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplicationForm;
