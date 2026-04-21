import React from 'react';
import errorImg from '../../assets/error.png'
import Logo from '../../components/shared/Logo';

const ErrorPage = () => {
    return (
        <div className='h-screen flex flex-col justify-center items-center space-y-2'>
            <img className='h-80' src={errorImg} alt="" />
            <h1 className='text-2xl text-primary capitalize'>You have come to a wrong page</h1>
            <div className='space-y-2'>
                <h1 className='text-center text-neutral-600 font-semibold'>Go back to</h1>
                <Logo></Logo>
            </div>
        </div>
    );
};

export default ErrorPage;