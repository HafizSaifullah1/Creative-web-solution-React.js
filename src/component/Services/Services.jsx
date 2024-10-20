import React from 'react'

import { Link } from 'react-router-dom'

function Services() {
  return (
    <div className="py-16 bg-white">
    <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        {/* Header Section */}
        <h1 className="text-4xl font-bold text-center text-gray-800 sm:text-5xl">
            Our Services
        </h1>
        <p className="mt-4 text-center text-lg text-gray-600">
            We offer a range of services to help you succeed.
        </p>

        {/* Services List */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service 1 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
                <div className="flex items-center justify-center mb-4">
                    <svg
                        fill="currentColor"
                        className="w-12 h-12 text-orange-600"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 0a12 12 0 100 24 12 12 0 000-24zm0 22a10 10 0 110-20 10 10 0 010 20z" />
                        <path d="M12 6c-1.104 0-2 .896-2 2 0 1.104.896 2 2 2s2-.896 2-2c0-1.104-.896-2-2-2zm0 10c-1.104 0-2 .896-2 2 0 1.104.896 2 2 2s2-.896 2-2c0-1.104-.896-2-2-2z" />
                    </svg>
                </div>
                <h2 className="text-xl font-bold text-gray-800">Web Development</h2>
                <p className="mt-2 text-gray-600">
                    Build responsive and user-friendly websites tailored to your needs.
                </p>
            </div>

            {/* Service 2 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
                <div className="flex items-center justify-center mb-4">
                    <svg
                        fill="currentColor"
                        className="w-12 h-12 text-orange-600"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 0a12 12 0 100 24 12 12 0 000-24zm0 22a10 10 0 110-20 10 10 0 010 20z" />
                        <path d="M18 12h-6v6h-4v-6H6V8h6V2h4v6h6z" />
                    </svg>
                </div>
                <h2 className="text-xl font-bold text-gray-800">Graphic Design</h2>
                <p className="mt-2 text-gray-600">
                    Create stunning visuals that capture your brand's essence and engage your audience.
                </p>
            </div>

            {/* Service 3 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
                <div className="flex items-center justify-center mb-4">
                    <svg
                        fill="currentColor"
                        className="w-12 h-12 text-orange-600"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 0a12 12 0 100 24 12 12 0 000-24zm0 22a10 10 0 110-20 10 10 0 010 20z" />
                        <path d="M16.5 10.5H20v3h-3.5l-1 1h4v3h-3v-3h-4.5l1-1z" />
                    </svg>
                </div>
                <h2 className="text-xl font-bold text-gray-800">Digital Marketing</h2>
                <p className="mt-2 text-gray-600">
                    Enhance your online presence and reach your target audience effectively.
                </p>
            </div>

            {/* Service 4 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
                <div className="flex items-center justify-center mb-4">
                    <svg
                        fill="currentColor"
                        className="w-12 h-12 text-orange-600"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 0a12 12 0 100 24 12 12 0 000-24zm0 22a10 10 0 110-20 10 10 0 010 20z" />
                        <path d="M16.5 10.5H20v3h-3.5l-1 1h4v3h-3v-3h-4.5l1-1z" />
                    </svg>
                </div>
                <h2 className="text-xl font-bold text-gray-800">SEO Services</h2>
                <p className="mt-2 text-gray-600">
                    Improve your website's visibility and rank higher in search engine results.
                </p>
            </div>

            {/* Service 5 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
                <div className="flex items-center justify-center mb-4">
                    <svg
                        fill="currentColor"
                        className="w-12 h-12 text-orange-600"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 0a12 12 0 100 24 12 12 0 000-24zm0 22a10 10 0 110-20 10 10 0 010 20z" />
                        <path d="M16 4h4v16h-4V4zm-5 8H4v4h7v-4zm0-5H4v4h7V7zm0-5H4v4h7V2z" />
                    </svg>
                </div>
                <h2 className="text-xl font-bold text-gray-800">Content Creation</h2>
                <p className="mt-2 text-gray-600">
                    Develop high-quality content that resonates with your audience.
                </p>
            </div>

            {/* Service 6 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
                <div className="flex items-center justify-center mb-4">
                    <svg
                        fill="currentColor"
                        className="w-12 h-12 text-orange-600"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 0a12 12 0 100 24 12 12 0 000-24zm0 22a10 10 0 110-20 10 10 0 010 20z" />
                        <path d="M9 17l5-5-5-5v10z" />
                    </svg>
                </div>
                <h2 className="text-xl font-bold text-gray-800">Consulting</h2>
                <p className="mt-2 text-gray-600">
                    Get expert advice to navigate your business challenges and achieve growth.
                </p>
            </div>
        </div>

        {/* Call to Action */}
        <div className="mt-10 text-center">
            <h2 className="text-2xl font-bold text-gray-800">Ready to Get Started?</h2>
            <p className="mt-4 text-lg text-gray-600">
                Contact us today to discuss how we can help you succeed!
            </p>
            <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 mt-6 font-medium text-white bg-orange-700 rounded-lg hover:opacity-75"
            >
                Contact Us
            </Link>
        </div>
    </div>
</div>

  )
}

export default Services