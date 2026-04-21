import React from 'react';
import { Link } from 'react-router';

const Logo = () => {
    return (
        <div>
            <Link  
            to="/"
            className="btn text-xl bg-linear-60 from-primary to-secondary text-white border-none shadow-none"
            >
                eTutionBD
            </Link>
        </div>
    );
};

export default Logo;