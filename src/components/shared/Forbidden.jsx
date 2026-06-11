import React from 'react';

const Forbidden = () => {
    return (
        <div className='flex justify-center items-center'>
            <h1 className='text-4xl text-red-500 capitalize font-semibold'>you do not have the permission to access this page</h1>
        </div>
    );
};

export default Forbidden;