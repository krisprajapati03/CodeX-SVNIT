import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { CheckCircle, XCircle, Loader2, FileText, User, Phone, Mail, Calendar } from "lucide-react"

const DocumentVerificationPanel = () => {
  const { id } = useParams()
  const [application, setApplication] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchApplication = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:3000/api/v1/application/${id}`)
        const data = await response.json()

        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch application")
        }

        setApplication(data)
      } catch (error) {
        console.error("Error fetching application:", error.message)
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchApplication()
  }, [id])

  const updateStatus = async (status) => {
    try {
      const response = await fetch(`http://127.0.0.1:3000/api/v1/application/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Failed to update application status")
      }

      setApplication({ ...application, status })
    } catch (error) {
      console.error("Error updating application status:", error.message)
      setError(error.message)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center text-red-500">
          <XCircle className="w-12 h-12 mx-auto mb-4" />
          <p className="text-xl font-semibold">{error}</p>
        </div>
      </div>
    )
  }

  if (!application) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl text-gray-500">No application data found.</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 bg-blue-600">
            <h2 className="text-2xl font-bold text-white">Document Verification Panel</h2>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Application Details</h3>
                <div className="space-y-3">
                  <p>
                    <span className="font-medium">Title:</span> {application.title}
                  </p>
                  <p>
                    <span className="font-medium">Description:</span> {application.description}
                  </p>
                  <p>
                    <span className="font-medium">Data:</span> {application.data}
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Applicant Information</h3>
                <div className="space-y-3">
                  <p className="flex items-center">
                    <User className="w-5 h-5 mr-2" /> {application.fullName}
                  </p>
                  <p className="flex items-center">
                    <Phone className="w-5 h-5 mr-2" /> {application.mobile}
                  </p>
                  <p className="flex items-center">
                    <Mail className="w-5 h-5 mr-2" /> {application.email}
                  </p>
                  <p className="flex items-center">
                    <FileText className="w-5 h-5 mr-2" /> {application.applicationType}
                  </p>
                  <p className="flex items-center">
                    <Calendar className="w-5 h-5 mr-2" /> {new Date(application.applicationAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Documents</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {application.documents?.map((doc) => (
                  <a
                    key={doc.cid}
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition duration-150"
                  >
                    <FileText className="w-6 h-6 mr-3 text-blue-500" />
                    <span className="text-sm font-medium text-gray-900">{doc.name}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Current Status</h3>
              <div
                className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                  application.status === "Approved"
                    ? "bg-green-100 text-green-800"
                    : application.status === "Rejected"
                      ? "bg-red-100 text-red-800"
                      : "bg-yellow-100 text-yellow-800"
                }`}
              >
                {application.status}
              </div>
            </div>

            {application.status !== "Approved" && application.status !== "Rejected" && (
              <div className="mt-8 flex justify-end space-x-4">
                <button
                  className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-150 flex items-center"
                  onClick={() => updateStatus("Approved")}
                >
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Approve
                </button>
                <button
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-150 flex items-center"
                  onClick={() => updateStatus("Rejected")}
                >
                  <XCircle className="w-5 h-5 mr-2" />
                  Reject
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DocumentVerificationPanel

