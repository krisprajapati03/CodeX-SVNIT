import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Clock, Mail, Phone, FileText, User, Tag, AlertCircle } from 'lucide-react';

const Application = () => {
    const [application, setApplication] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        fetch(`http://127.0.0.1:3000/api/v1/application/${id}`)
            .then(response => response.json())
            .then(data => {
                setApplication(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching application:', error);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    const getStatusColor = (status) => {
        const statusColors = {
            'pending': 'bg-yellow-100 text-yellow-800',
            'approved': 'bg-green-100 text-green-800',
            'rejected': 'bg-red-100 text-red-800',
            'default': 'bg-gray-100 text-gray-800'
        };
        return statusColors[status?.toLowerCase()] || statusColors.default;
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
                        <div className="flex items-center justify-between">
                            <h2 className="text-2xl font-bold text-white">Application Details</h2>
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(application.status)}`}>
                                {application.status}
                            </span>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-8">
                        {/* Basic Information */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Basic Information</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex items-center space-x-3">
                                    <User className="w-5 h-5 text-gray-400" />
                                    <div>
                                        <p className="text-sm text-gray-500">Full Name</p>
                                        <p className="font-medium text-gray-900">{application.fullName}</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Phone className="w-5 h-5 text-gray-400" />
                                    <div>
                                        <p className="text-sm text-gray-500">Mobile</p>
                                        <p className="font-medium text-gray-900">{application.mobile}</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Mail className="w-5 h-5 text-gray-400" />
                                    <div>
                                        <p className="text-sm text-gray-500">Email</p>
                                        <p className="font-medium text-gray-900">{application.email}</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Tag className="w-5 h-5 text-gray-400" />
                                    <div>
                                        <p className="text-sm text-gray-500">Application Type</p>
                                        <p className="font-medium text-gray-900">{application.applicationType}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Application Details */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Application Details</h3>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-sm text-gray-500">Title</p>
                                    <p className="mt-1 font-medium text-gray-900">{application.title}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Description</p>
                                    <p className="mt-1 text-gray-900">{application.description}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Additional Data</p>
                                    <p className="mt-1 text-gray-900">{application.data}</p>
                                </div>
                            </div>
                        </div>

                        {/* Documents */}
                        {application.documents?.length > 0 && (
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
                                    <div className="flex items-center space-x-2">
                                        <FileText className="w-5 h-5 text-gray-400" />
                                        <span>Attached Documents</span>
                                    </div>
                                </h3>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {application.documents.map(doc => (
                                        <li key={doc.cid}>
                                            <a
                                                href={doc.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center p-3 space-x-3 text-sm text-blue-600 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors duration-200"
                                            >
                                                <FileText className="w-5 h-5" />
                                                <span className="font-medium">{doc.name}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Timeline */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Application At</h3>
                            <div className="flex items-center space-x-3">
                                <Clock className="w-5 h-5 text-gray-400" />
                                <div>
                                    <p className="text-sm text-gray-500">Submitted To</p>
                                    <p className="font-medium text-gray-900">{application.applicationAt}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Application;