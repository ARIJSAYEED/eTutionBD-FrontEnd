import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaPhoneAlt, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdArrowForwardIos, MdMarkEmailRead } from "react-icons/md";

const Footer = () => {
    return (
        <footer className="bg-primary text-primary-content px-10 py-12 space-y-10 rounded-sm">

            {/* Top Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                    <h1 className="text-5xl font-bold">eTutionBD</h1>
                    <p className="text-primary-content/60 text-sm max-w-sm">
                        Connecting students with the best tutors across Bangladesh — tailored to your needs and location.
                    </p>
                </div>
                <div className="flex flex-col sm:items-end justify-center space-y-2">
                    <p className="text-lg font-semibold">Get In Touch</p>
                    <div className="flex items-center border border-primary-content/30 rounded-lg overflow-hidden">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="bg-transparent px-4 py-2 text-sm outline-none placeholder:text-primary-content/40 w-56"
                        />
                        <button className="bg-primary-content text-primary px-3 py-2 hover:opacity-90 transition-opacity">
                            <MdArrowForwardIos size={16} />
                        </button>
                    </div>
                </div>
            </div>

            <div className="border-t border-primary-content/20" />

            {/* Bottom Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">

                {/* Contact */}
                <div className="space-y-3">
                    <div className="bg-primary-content rounded-sm px-2 py-0.5 inline-block">
                        <h3 className="text-xs uppercase font-semibold text-primary">Contact Information</h3>
                    </div>
                    <div className="space-y-2 text-sm text-primary-content/80">
                        <p className="flex items-center gap-2"><MdMarkEmailRead size={16} /> etution@bd.com</p>
                        <p className="flex items-center gap-2"><FaPhoneAlt size={13} /> +880-1234-567891</p>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="space-y-3">
                    <div className="bg-primary-content rounded-sm px-2 py-0.5 inline-block">
                        <h3 className="text-xs uppercase font-semibold text-primary">Quick Links</h3>
                    </div>
                    <ul className="space-y-1.5 text-sm text-primary-content/80">
                        <li><a href="/" className="hover:text-primary-content transition-colors">Home</a></li>
                        <li><a href="/tutions" className="hover:text-primary-content transition-colors">Tuitions</a></li>
                        <li><a href="/tutors" className="hover:text-primary-content transition-colors">Tutors</a></li>
                        <li><a href="/about" className="hover:text-primary-content transition-colors">About Us</a></li>
                    </ul>
                </div>

                {/* Help */}
                <div className="space-y-3">
                    <div className="bg-primary-content rounded-sm px-2 py-0.5 inline-block">
                        <h3 className="text-xs uppercase font-semibold text-primary">Help</h3>
                    </div>
                    <ul className="space-y-1.5 text-sm text-primary-content/80">
                        <li><a href="/faq" className="hover:text-primary-content transition-colors">FAQ</a></li>
                        <li><a href="/privacy" className="hover:text-primary-content transition-colors">Privacy Policy</a></li>
                        <li><a href="/terms" className="hover:text-primary-content transition-colors">Terms of Service</a></li>
                    </ul>
                </div>

                {/* Follow Us */}
                <div className="space-y-3">
                    <div className="bg-primary-content rounded-sm px-2 py-0.5 inline-block">
                        <h3 className="text-xs uppercase font-semibold text-primary">Follow Us</h3>
                    </div>
                    <div className="flex gap-2">
                        <div className="p-2 cursor-pointer rounded-sm bg-primary-content text-primary hover:opacity-80 transition-opacity"><FaFacebookF size={16} /></div>
                        <div className="p-2 cursor-pointer rounded-sm bg-primary-content text-primary hover:opacity-80 transition-opacity"><FaXTwitter size={16} /></div>
                        <div className="p-2 cursor-pointer rounded-sm bg-primary-content text-primary hover:opacity-80 transition-opacity"><FaTiktok size={16} /></div>
                        <div className="p-2 cursor-pointer rounded-sm bg-primary-content text-primary hover:opacity-80 transition-opacity"><FaLinkedinIn size={16} /></div>
                    </div>
                </div>
            </div>

            <div className="border-t border-primary-content/20 pt-4 text-center text-xs text-primary-content/50">
                © 2026 eTutionBD. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;