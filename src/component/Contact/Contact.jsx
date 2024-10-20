import React from 'react'

export default function Contact() {
    return (
        <div className="py-16 bg-white">
    <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            {/* Image Section */}
            <div className="md:w-5/12 lg:w-7/12">
                <img
                    src="https://img.freepik.com/free-photo/register-enquiry-online-web-page-concept_53876-124774.jpg?t=st=1729436952~exp=1729440552~hmac=4d3fbc87bf3067de1670e6c7899703395ff80049540822fac32250561d7a6b66&w=740" // You can replace this with a relevant contact image
                    alt="Contact Us"
                    className="w-full"
                />
            </div>

            {/* Content Section */}
            <div className="md:w-7/12 lg:w-6/12">
                <h2 className="text-4xl font-bold sm:text-5xl">
                    Get in touch with us!
                </h2>
                <p className="mt-6 text-gray-600">
                    Fill in the form to start a conversation with our team.
                </p>

                <div className="mt-8 bg-gray-100 p-6 rounded-lg">
                    <h1 className="text-3xl text-gray-800 font-extrabold tracking-tight">
                        Contact Information
                    </h1>
                    <div className="flex items-center mt-4 text-gray-600">
                        <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            viewBox="0 0 24 24"
                            className="w-8 h-8 text-gray-500"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                        </svg>
                        <div className="ml-4 text-md tracking-wide font-semibold">
                            Pakistan
                        </div>
                    </div>
                    <div className="flex items-center mt-4 text-gray-600">
                        <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            viewBox="0 0 24 24"
                            className="w-8 h-8 text-gray-500"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                        </svg>
                        <div className="ml-4 text-md tracking-wide font-semibold">
                            +92-3162827289
                        </div>
                    </div>
                    <div className="flex items-center mt-2 text-gray-600">
                        <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            viewBox="0 0 24 24"
                            className="w-8 h-8 text-gray-500"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                        </svg>
                        <div className="ml-4 text-md tracking-wide font-semibold">
                            hafizsaifullahkhan1@gmail.com
                        </div>
                    </div>
                </div>

                <form className="mt-6 p-6 bg-gray-100 rounded-lg">
                    <h1 className="text-2xl font-bold">Contact Form</h1>
                    <div className="flex flex-col mt-4">
                        <label htmlFor="name" className="hidden">
                            Full Name
                        </label>
                        <input
                        
                            type="name"
                            name="name"
                            id="name"
                            placeholder="Full Name"
                            className="mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                        />
                    </div>
                    <div className="flex flex-col mt-2">
                        <label htmlFor="email" className="hidden">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                            className="mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                        />
                    </div>
                    <div className="flex flex-col mt-2">
                        <label htmlFor="tel" className="hidden">
                            Telephone Number
                        </label>
                        <input
                            type="tel"
                            name="tel"
                            id="tel"
                            placeholder="Telephone Number"
                            className="mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                        />
                    </div>
                    <button
                        type="submit"
                        className="mt-4 bg-orange-700 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition ease-in-out duration-300"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>

        <div className="grid place-items-center mt-20">
            <img className="sm:w-96 w-48" src="https://img.freepik.com/free-photo/creative-designers-team-working-project_114579-2815.jpg?t=st=1729434754~exp=1729438354~hmac=236300f407d4ad591a675259d630e9d93d1876df5f0f06693a63734ffba97e68&w=740" alt="Contact Image" />
        </div>

        <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">Get in touch with us!</h1>
    </div>
</div>

    );
}