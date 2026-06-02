import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="bg-base-100 py-16">
            <div className="max-w-5xl mx-auto px-4">

                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-base-content mb-3">
                        Contact <span className="text-primary">Us</span>
                    </h1>
                    <p className="text-base-content/60 text-lg">
                        Have a question? We'd love to hear from you.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                    {/* Contact Form */}
                    <div className="card bg-base-200 shadow-sm">
                        <h2 className="text-2xl font-bold text-base-content mb-6">Send a Message</h2>

                        <div className="mb-4">
                            <label className="block text-base-content font-medium mb-1">Your Name</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="input input-bordered w-full"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-base-content font-medium mb-1">Email Address</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="input input-bordered w-full"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-base-content font-medium mb-1">Phone Number</label>
                            <input
                                type="tel"
                                placeholder="Enter your phone number"
                                className="input input-bordered w-full"
                            />
                        </div>

                        <div className="mb-6">
                            <label className="block text-base-content font-medium mb-1">Message</label>
                            <textarea
                                placeholder="Write your message here..."
                                className="textarea textarea-bordered w-full h-32"
                            ></textarea>
                        </div>

                        <button className="btn btn-primary w-full">Send Message</button>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col gap-6">

                        <div>
                            <h2 className="text-2xl font-bold text-base-content mb-4">Get in Touch</h2>
                            <p className="text-base-content/60">
                                Whether you're a student looking for a tutor or a tutor wanting to join
                                our platform, we're here to help.
                            </p>
                        </div>

                        <div className="card bg-base-200 shadow-sm p-6 flex flex-row items-center gap-4">
                            <FaPhone className="text-2xl text-primary shrink-0" />
                            <div>
                                <p className="font-semibold text-base-content">Phone</p>
                                <p className="text-base-content/60 text-sm">+880 1700-000000</p>
                            </div>
                        </div>

                        <div className="card bg-base-200 shadow-sm p-6 flex flex-row items-center gap-4">
                            <FaEnvelope className="text-2xl text-primary shrink-0" />
                            <div>
                                <p className="font-semibold text-base-content">Email</p>
                                <p className="text-base-content/60 text-sm">support@etuitionbd.com</p>
                            </div>
                        </div>

                        <div className="card bg-base-200 shadow-sm p-6 flex flex-row items-center gap-4">
                            <FaMapMarkerAlt className="text-2xl text-primary shrink-0" />
                            <div>
                                <p className="font-semibold text-base-content">Address</p>
                                <p className="text-base-content/60 text-sm">Dhaka, Bangladesh</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Contact;