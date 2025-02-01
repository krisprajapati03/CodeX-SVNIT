import React from 'react';

const MainDashbord = () => {
  return (
    <div className="font-roboto">

      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg"
            alt="Government Emblem"
            className="h-24 mx-auto mb-6"
          />
          <h1 className="text-4xl font-bold text-gov-blue mb-4">
            Efficient & Transparent Governance
          </h1>
          <p className="text-gray-600 mb-8">Track your government applications seamlessly</p>
          <div className="max-w-2xl mx-auto flex gap-2">
            <input
              type="text"
              placeholder="Enter Application ID"
              className="flex-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gov-blue"
            />
            <button className="bg-gov-blue text-white px-6 py-3 rounded-md hover:bg-blue-900">
              Track Status
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gov-blue mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Application Status",
                desc: "Track your application status in real-time.",
                icon: "clipboard-check",
              },
              {
                title: "Schedule Appointments",
                desc: "Book appointments for government services.",
                icon: "calendar",
              },
              {
                title: "Document Verification",
                desc: "Verify documents online securely.",
                icon: "shield-check",
              },
            ].map((service, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-gov-blue/10 rounded-full flex items-center justify-center mb-4">
                  <i className={`fas fa-${service.icon} text-gov-blue text-2xl`}></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gov-blue mb-6">About the Platform</h2>
          <p className="text-gray-600 mb-8">
            The Government Application Tracking Portal enhances transparency and efficiency in public services.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { value: "24/7", label: "Service Availability" },
              { value: "100+", label: "Government Services" },
              { value: "5M+", label: "Citizens Served" },
            ].map((item, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-gov-orange mb-2">{item.value}</div>
                <div className="text-gray-600">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gov-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "Quick Links", links: ["Home", "Services", "Track Application", "Contact Us"] },
              { title: "Important Links", links: ["RTI", "Terms of Service", "Privacy Policy", "Sitemap"] },
              { title: "Contact Information", links: ["Toll Free: 1800-XXX-XXXX", "Email: support@gov.in"] },
              { title: "Stay Connected", links: ["Facebook", "Twitter", "LinkedIn"] },
            ].map((section, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <a href="#" className="hover:text-gov-orange">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainDashbord;
