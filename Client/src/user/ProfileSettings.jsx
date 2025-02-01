import React, { useState } from 'react';

const ProfileSettings = () => {
    const [profilePicture, setProfilePicture] = useState('https://placehold.co/80x80');
    const [fullName, setFullName] = useState('Raj Kumar');
    const [mobileNumber, setMobileNumber] = useState('+91 9876543210');
    const [email, setEmail] = useState('raj.kumar@example.com');
    const [aadhaarNumber, setAadhaarNumber] = useState('XXXX-XXXX-1234');
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [emailNotifications, setEmailNotifications] = useState(true);
    const [smsNotifications, setSmsNotifications] = useState(false);
    const [languagePreference, setLanguagePreference] = useState('English');

    const handleSaveChanges = () => {
        alert('Changes saved successfully!');
        // Implement the save functionality here (e.g., make API call to save the changes)
    };

    const handleProfilePictureChange = (e) => {
        // Implement profile picture change functionality (e.g., file upload)
        setProfilePicture(URL.createObjectURL(e.target.files[0]));
    };

    return (
        <section id="settings_profile" className="bg-[#E5E7EB] min-h-screen py-6">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-lg border border-neutral-200/20">
                    <div className="p-6 border-b border-neutral-200/20">
                        <h2 className="text-lg font-medium text-neutral-900">Profile Settings</h2>
                        <p className="mt-1 text-sm text-neutral-600">Manage your account settings and preferences</p>
                    </div>

                    <div className="p-6">
                        <div className="space-y-8">
                            {/* Profile Information */}
                            <div>
                                <h3 className="text-md font-medium text-neutral-900 mb-4">Profile Information</h3>
                                <div className="flex items-center mb-6">
                                    <img src={profilePicture} alt="Profile" className="w-20 h-20 rounded-full" />
                                    <div className="ml-4">
                                        {/* Custom styled button for file input */}
                                        <label
                                            htmlFor="profilePicture"
                                            className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 cursor-pointer"
                                        >
                                            Change Photo
                                        </label>
                                        <input
                                            type="file"
                                            id="profilePicture"
                                            className="hidden"
                                            accept="image/*"
                                            onChange={handleProfilePictureChange}
                                        />
                                        <p className="mt-1 text-xs text-neutral-500">JPG, GIF or PNG. Max size 2MB</p>
                                    </div>
                                </div>
                                <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-neutral-700 mb-1">Full Name</label>
                                        <input
                                            type="text"
                                            value={fullName}
                                            onChange={(e) => setFullName(e.target.value)}
                                            className="w-full px-3 py-2 border border-neutral-200/20 rounded-lg focus:outline-none focus:border-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-neutral-700 mb-1">Email Address</label>
                                        <input
                                            type="email"
                                            value={email}
                                            className="w-full px-3 py-2 border border-neutral-200/20 rounded-lg bg-neutral-50"
                                            readOnly
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-neutral-700 mb-1">Mobile Number</label>
                                        <input
                                            type="tel"
                                            value={mobileNumber}
                                            onChange={(e) => setMobileNumber(e.target.value)}
                                            className="w-full px-3 py-2 border border-neutral-200/20 rounded-lg focus:outline-none focus:border-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-neutral-700 mb-1">Aadhaar Number</label>
                                        <input
                                            type="text"
                                            value={aadhaarNumber}
                                            className="w-full px-3 py-2 border border-neutral-200/20 rounded-lg bg-neutral-50"
                                            readOnly
                                        />
                                    </div>
                                </form>
                            </div>

                            {/* Security Settings */}
                            <div>
                                <h3 className="text-md font-medium text-neutral-900 mb-4">Security Settings</h3>
                                <form className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-neutral-700 mb-1">Current Password</label>
                                        <input
                                            type="password"
                                            value={currentPassword}
                                            onChange={(e) => setCurrentPassword(e.target.value)}
                                            className="w-full px-3 py-2 border border-neutral-200/20 rounded-lg focus:outline-none focus:border-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-neutral-700 mb-1">New Password</label>
                                        <input
                                            type="password"
                                            value={newPassword}
                                            onChange={(e) => setNewPassword(e.target.value)}
                                            className="w-full px-3 py-2 border border-neutral-200/20 rounded-lg focus:outline-none focus:border-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-neutral-700 mb-1">Confirm New Password</label>
                                        <input
                                            type="password"
                                            value={confirmNewPassword}
                                            onChange={(e) => setConfirmNewPassword(e.target.value)}
                                            className="w-full px-3 py-2 border border-neutral-200/20 rounded-lg focus:outline-none focus:border-blue-500"
                                        />
                                    </div>
                                </form>
                            </div>

                            {/* Preferences */}
                            <div>
                                <h3 className="text-md font-medium text-neutral-900 mb-4">Preferences</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm font-medium text-neutral-700">Email Notifications</p>
                                            <p className="text-xs text-neutral-500">Receive email updates about your applications</p>
                                        </div>
                                        <button
                                            type="button"
                                            className={`bg-neutral-200 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${emailNotifications ? 'bg-blue-600' : 'bg-neutral-200'}`}
                                            role="switch"
                                            aria-checked={emailNotifications}
                                            onClick={() => setEmailNotifications(!emailNotifications)}
                                        >
                                            <span
                                                className={`inline-block h-5 w-5 transform rounded-full bg-white transition duration-200 ease-in-out ${emailNotifications ? 'translate-x-5' : 'translate-x-0'}`}
                                            ></span>
                                        </button>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm font-medium text-neutral-700">SMS Notifications</p>
                                            <p className="text-xs text-neutral-500">Receive SMS alerts for important updates</p>
                                        </div>
                                        <button
                                            type="button"
                                            className={`bg-neutral-200 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${smsNotifications ? 'bg-blue-600' : 'bg-neutral-200'}`}
                                            role="switch"
                                            aria-checked={smsNotifications}
                                            onClick={() => setSmsNotifications(!smsNotifications)}
                                        >
                                            <span
                                                className={`inline-block h-5 w-5 transform rounded-full bg-white transition duration-200 ease-in-out ${smsNotifications ? 'translate-x-5' : 'translate-x-0'}`}
                                            ></span>
                                        </button>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-neutral-700 mb-1">Language Preference</label>
                                        <select
                                            value={languagePreference}
                                            onChange={(e) => setLanguagePreference(e.target.value)}
                                            className="w-full px-3 py-2 border border-neutral-200/20 rounded-lg focus:outline-none focus:border-blue-500"
                                        >
                                            <option>English</option>
                                            <option>हिंदी</option>
                                            <option>ગુજરાતી</option>
                                            <option>मराठी</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="mt-8 pt-6 border-t border-neutral-200/20 flex justify-end space-x-4">
                            <button className="px-4 py-2 text-sm font-medium text-neutral-700 hover:text-neutral-900">Cancel</button>
                            <button
                                className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700"
                                onClick={handleSaveChanges}
                            >
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProfileSettings;
