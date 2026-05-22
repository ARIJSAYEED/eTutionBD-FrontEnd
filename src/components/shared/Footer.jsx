import React from 'react';
import Logo from './Logo';
import { FaFacebookF, FaLinkedinIn, FaPhoneAlt, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdArrowForwardIos, MdMarkEmailRead } from "react-icons/md";



const Footer = () => {
    return (
        <footer className="bg-primary p-10 space-y-20 rounded-sm">

            {/* first-section */}
            <div className='grid grid-cols-2 gap-10'>
                <div className='text-white space-y-2'>
                    <h1 className='text-6xl font-semibold'>eTutionBD</h1>
                    <p className='text-neutral-300 text-base capitalize'>we are here to find you the best tution oppurtunity/the best tutor in your area that full fill your requirement and to help you grow</p>
                </div>
                <div className='flex flex-col items-end justify-end space-y-2'>
                    <h1 className='text-3xl text-white'>Get In Touch</h1>
                    <label className='label'>
                        <input
                            className='input placeholder:text-base'
                            type="email"
                            placeholder='Enter your email' />
                        <button className='btn shadow-none'>
                            <MdArrowForwardIos className='text-primary text-2xl'></MdArrowForwardIos>
                        </button>
                    </label>
                </div>
            </div>

            {/* second-section */}
            <div className='grid grid-cols-4 gap-4 '>
                <div className='space-y-2'>
                    <div className='bg-white rounded-sm px-2'>
                        <h1 className='uppercase text-sm font-semibold text-primary'>Contact Infromation</h1>
                    </div>
                    <div className=''>

                        {/* email */}
                        <div className='flex items-center text-sm gap-1 text-white'>
                            <MdMarkEmailRead className='text-xl'></MdMarkEmailRead>
                            <p className='text-neutral-300'>etution@bd.com</p>
                        </div>

                        {/* phone */}
                        <div className='flex items-center text-sm gap-1 text-white'>
                            <FaPhoneAlt className='text-base'></FaPhoneAlt>
                            <p className='text-neutral-300'>+880-1234-567891</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='bg-white rounded-sm px-2'>
                        <h1 className='uppercase text-sm font-semibold text-primary'>Quick Links</h1>
                    </div>
                </div>
                <div>
                    <div className='bg-white rounded-sm px-2'>
                        <h1 className='uppercase text-sm font-semibold text-primary'>Help</h1>
                    </div>

                </div>
                <div className='space-y-2'>
                    <div className='bg-white rounded-sm px-2'>
                        <h1 className='uppercase text-sm font-semibold text-primary'>Follow Us</h1>
                    </div>
                    <div className='flex justify-between gap-1 *:border'>
                        <div className='p-2 text-xl cursor-pointer rounded-sm flex justify-center items-center bg-white text-primary'>
                            <FaFacebookF></FaFacebookF>
                        </div>
                        <div className='p-2 text-xl cursor-pointer rounded-sm flex justify-center items-center bg-white text-primary'>
                            <FaXTwitter></FaXTwitter>
                        </div>
                        <div className='p-2 text-xl cursor-pointer rounded-sm flex justify-center items-center bg-white text-primary'>
                            <FaTiktok></FaTiktok>
                        </div>
                        <div className='p-2 text-xl cursor-pointer rounded-sm flex justify-center items-center bg-white text-primary'>
                            <FaLinkedinIn></FaLinkedinIn>
                        </div>
                    </div>
                </div>
            </div>

            <div className='space-y-4'>
                <div className='border-t border-neutral-400'></div>
                <p className='text-sm tracking-wide text-white text-center'>© 2026, eTutionBD, All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;