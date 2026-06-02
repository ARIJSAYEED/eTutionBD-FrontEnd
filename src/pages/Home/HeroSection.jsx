import React, { useContext } from 'react';
import heroImg from '../../assets/hero.png.png'
import { Link } from 'react-router';
import { AuthContext } from '../../Context/Auth/AuthContext';

const HeroSection = () => {
    const { user } = useContext(AuthContext);
    // console.log("the home page user is", user);
    return (
        <div className='flex items-center'>
            <div className='w-1/2 space-y-4'>
                <h1 className='text-5xl font-semibold capitalize'>getting <span className='text-primary'>quality</span><br />education is now<br />more <span className='text-primary'>easy</span></h1>
                <p className='text-md text-neutral-600 capitalize'>we are here to find you the best tuition oppurtunity/the best tutor in your area that full fill your requirement and to help you grow</p>
                <div className='space-x-2'>
                    {
                        user ?
                            "" :
                            <Link to="/auth/register" className="btn btn-primary">Get Started</Link>
                    }
                    <button className="btn">Explore tuitions</button>
                </div>
            </div>
            <div className='w-1/2'>
                <img src={heroImg} alt="" />
            </div>
        </div>
    );
};

export default HeroSection;