import React from 'react';
import Logo from './Logo';
import { Link, NavLink } from 'react-router';
import { FiLogIn } from "react-icons/fi";
import { use } from 'react';
import { AuthContext } from '../../Context/Auth/AuthContext';


const NavBar = () => {
    const { user, LogOut } = use(AuthContext);
    // console.log(user);
    const links = [
        <li key="1"><NavLink to='/'>Home</NavLink></li>,
        <li key="2"><NavLink to='/dashboard'>Dashboard</NavLink></li>,
        <li key="3"><NavLink to='/find-tution'>Find Tution</NavLink></li>,
        <li key="4"><NavLink to='/about'>About</NavLink></li>,
        <li key="5"><NavLink to='/contact'>Contact</NavLink></li>,
    ]

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Logo></Logo>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-2">
                    {links}
                </ul>
            </div>

            <div className="navbar-end space-x-2">
                {
                    user ?
                        <Link onClick={LogOut} className='btn bg-primary text-white'>
                            SignOut
                        </Link>
                        :
                        <Link to="/auth/signin" className="btn text-white bg-linear-60 from-primary to-secondary">
                            <FiLogIn ></FiLogIn>
                            SignIn
                        </Link>
                }
                <a className="btn btn-outline border-primary text-primary">Apply for tutor</a>
            </div>
        </div>
    );
};

export default NavBar;