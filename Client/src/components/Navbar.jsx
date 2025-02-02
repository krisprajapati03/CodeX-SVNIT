import React, { useState } from 'react';

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginClick = () => {
        // Simulate login
        setIsLoggedIn(true);
        window.location.href = '/Login';
    };

    const handleProfileClick = () => {
        window.location.href = '/user/profile-settings';
    };

    const handleHomeClick = () => {
        window.location.href = '/';
    };

    const handleContactClick = () => {
        window.location.href = '/';
    };

    const handleServicesClick = () => {
        window.location.href = '/';
    };

    const handleAboutClick = () => {
        window.location.href = '/aboutus';
    };

    return (
        <nav className="bg-gov-blue text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg"
                            alt="Government Emblem"
                            className="h-12 w-auto"
                        />
                        <div className="ml-4 font-semibold text-lg">Government of India</div>
                    </div>
                    <div className="hidden md:block">
                        <div className="flex items-center space-x-8">
                            <button onClick={handleHomeClick} className="hover:text-orange-600">Home</button>
                            <button onClick={handleContactClick} className="hover:text-orange-600">Contact</button>
                            <button onClick={handleServicesClick} className="hover:text-orange-600">Services</button>
                            <button onClick={handleAboutClick} className="hover:text-orange-600">About</button>
                            {isLoggedIn ? (
                                <img
                                    src="https://via.placeholder.com/40"
                                    alt="User Profile"
                                    className="h-10 w-10 rounded-full cursor-pointer"
                                    onClick={handleProfileClick}
                                />
                            ) : (
                                <button onClick={handleLoginClick} className="bg-gov-orange px-4 py-2 rounded-md hover:bg-orange-600">Login</button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;