import React from 'react';
import heroImg from '../../assets/hero.png.png'
import { Link } from 'react-router';

const Home = () => {
    return (
        <div className='flex items-center'>
            <div className='w-1/2 space-y-4'>
                <h1 className='text-5xl font-semibold capitalize'>getting <span className='text-primary'>quality</span><br />education is now<br />more <span className='text-primary'>easy</span></h1>
                <p className='text-md text-neutral-600 capitalize'>we are here to find you the best tution oppurtunity/the best tutor in your area that full fill your requirement and to help you grow</p>
                <div className='space-x-2'>
                    <Link to="/auth/register" className="btn btn-primary">Get Started</Link>
                    <button className="btn">Explore Tutions</button>
                </div>
            </div>
            <div className='w-1/2'>
                <img src={heroImg} alt="" />
            </div>
        </div>
    );
};

export default Home;