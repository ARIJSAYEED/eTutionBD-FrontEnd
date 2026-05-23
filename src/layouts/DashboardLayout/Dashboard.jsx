import React from 'react';
import Logo from '../../components/shared/Logo';
import { Link, NavLink, Outlet } from 'react-router';
import { MdOutlinePostAdd, MdPendingActions } from "react-icons/md";
import { FaChalkboardTeacher, FaClipboardList } from "react-icons/fa";
import { FiPlusSquare } from 'react-icons/fi';
import { HiHome, HiMiniWallet } from "react-icons/hi2";


const Dashboard = () => {
    return (
        <div className="drawer lg:drawer-open max-w-11/12 mx-auto">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Navbar */}
                <nav className="navbar w-full bg-base-300">
                    <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
                        {/* Sidebar toggle icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M9 4v16"></path><path d="M14 10l2 2l-2 2"></path></svg>
                    </label>
                    <div className="px-4">
                        <Logo></Logo>
                    </div>
                </nav>

                {/* Page content here */}
                <Outlet></Outlet>

            </div>

            <div className="drawer-side is-drawer-close:overflow-visible">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
                    {/* Sidebar content here */}
                    <ul className="menu w-full grow">

                        {/* homepage */}
                        <li>
                            <NavLink to="/" className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Homepage">
                                {/* Home icon */}
                                <HiHome className='text-[16px]'></HiHome>
                                <span className="is-drawer-close:hidden">Homepage</span>
                            </NavLink>
                        </li>

                        {/* my-tutions  */}
                        <li>
                            <NavLink to='/dashboard/my-tutions' className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="My Tutions">
                                {/* icon */}
                                <FaClipboardList className='text-[16px]'></FaClipboardList>
                                <span className="is-drawer-close:hidden">My Tutions</span>
                            </NavLink>
                        </li>

                        {/* post-new-tutions */}
                        <li>
                            <NavLink to='/dashboard/post-new-tution' className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Post For Tutor">
                                {/* icon */}
                                <FiPlusSquare className='text-[16px]'></FiPlusSquare>
                                <span className="is-drawer-close:hidden">Post For Tutor</span>
                            </NavLink>
                        </li>

                        {/* applied-tutors  */}
                        <li>
                            <NavLink to='/dashboard/applied-tutors' className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Applied Tutors">
                                {/* icon */}
                                <FaChalkboardTeacher className='text-[16px]'></FaChalkboardTeacher>
                                <span className="is-drawer-close:hidden">Applied Tutors</span>
                            </NavLink>
                        </li>

                        {/* payments  */}
                        <li>
                            <NavLink to='/dashboard/payments' className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Payments">
                                {/* icon */}
                                <HiMiniWallet className='text-[16px]'></HiMiniWallet>
                                <span className="is-drawer-close:hidden">Payments</span>
                            </NavLink>
                        </li>
                        {/* Post-Waiting-For-Approval */}
                        <li>
                            <NavLink to='/dashboard/post-waiting-for-approval' className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Post Waiting For Approval">
                                {/* icon */}
                                <MdPendingActions  className='text-[16px]'></MdPendingActions>
                                <span className="is-drawer-close:hidden">Post Waiting For Approval</span>
                            </NavLink>
                        </li>




                        {/* List item */}
                        <li>
                            <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Settings">
                                {/* Settings icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M20 7h-9"></path><path d="M14 17H5"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></svg>
                                <span className="is-drawer-close:hidden">Settings</span>
                            </button>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;