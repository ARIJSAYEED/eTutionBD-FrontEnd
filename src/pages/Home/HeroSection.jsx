import React, { useContext } from 'react';
import heroImg from '../../assets/hero.png.png'
import { Link } from 'react-router';
import { AuthContext } from '../../Context/Auth/AuthContext';

const HeroSection = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className='relative overflow-hidden min-h-[90vh] flex items-center'>

            <div className='w-11/12 mx-auto flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-6 py-16'>

                {/* left content */}
                <div className='w-full lg:w-1/2 space-y-6 text-center lg:text-left'>

                    {/* badge */}
                    <div className='inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full border border-primary/20'>
                        <span className='w-2 h-2 bg-primary rounded-full animate-pulse'></span>
                        Trusted by 10,000+ students
                    </div>

                    <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight capitalize'>
                        Getting <span className='text-primary'>quality</span><br className='hidden md:block' /> education is now<br className='hidden md:block' /> more <span className='text-primary relative'>
                            easy
                        </span>
                    </h1>

                    <p className='text-base md:text-lg text-neutral-500 capitalize max-w-md mx-auto lg:mx-0 leading-relaxed'>
                        We are here to find you the best tuition opportunity — the best tutor in your area that fulfills your requirement and helps you grow.
                    </p>

                    <div className='flex flex-col sm:flex-row gap-3 justify-center lg:justify-start'>
                        {!user && (
                            <Link to="/auth/register" className="btn btn-primary btn-lg rounded-sm px-8 shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 transition-all duration-200">
                                Get Started
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </Link>
                        )}
                        <button className="btn btn-outline btn-lg rounded-sm px-8 hover:-translate-y-0.5 transition-all duration-200">
                            Explore Tuitions
                        </button>
                    </div>

                    {/* stats row */}
                    <div className='flex gap-6 justify-center lg:justify-start pt-2'>
                        <div className='text-center lg:text-left'>
                            <p className='text-2xl font-bold text-primary'>500+</p>
                            <p className='text-xs text-neutral-500'>Expert Tutors</p>
                        </div>
                        <div className='w-px bg-neutral-200'></div>
                        <div className='text-center lg:text-left'>
                            <p className='text-2xl font-bold text-primary'>10k+</p>
                            <p className='text-xs text-neutral-500'>Students</p>
                        </div>
                        <div className='w-px bg-neutral-200'></div>
                        <div className='text-center lg:text-left'>
                            <p className='text-2xl font-bold text-primary'>4.9★</p>
                            <p className='text-xs text-neutral-500'>Avg Rating</p>
                        </div>
                    </div>
                </div>

                {/* right image */}
                <div className='w-full lg:w-1/2 flex justify-center relative'>
                    <div className='absolute inset-0 bg-primary/5 rounded-3xl blur-2xl scale-90 pointer-events-none'></div>
                    <img
                        src={heroImg}
                        alt="hero"
                        className='relative w-full max-w-sm md:max-w-md lg:max-w-full hover:scale-105 transition-transform duration-500'
                    />
                </div>

            </div>
        </div>
    );
};

export default HeroSection;