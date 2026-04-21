import React from 'react';
import Logo from '../../components/shared/Logo';
import { Link } from 'react-router';
import registerImg from '../../assets/register.png'

const Register = () => {
    return (
        <div className="w-11/12 mx-auto py-10 flex justify-center flex-col gap-6">
            <div className='flex justify-center items-center'>
                <Logo></Logo>
            </div>
            <div className="flex items-center space-x-6">
                <div className="text-center space-y-6 w-1/2">
                    <img src={registerImg} alt="" />
                </div>
                <div className="w-1/2">
                    <h1 className="text-5xl font-bold capitalize">Register now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <div className='border p-6 rounded-md border-neutral-300 shadow-xl'>
                        <form className='*:w-full space-y-4' action="">
                            {/* Image  */}
                            <label className='text-primary font-semibold'>Upload your Image</label>
                            <input type="file" className="file-input" />

                            {/* name  */}
                            <label className='text-primary font-semibold'>Name</label>
                            <input className='input' type="text" name="name" id="" placeholder='enter your name' />

                            {/* email  */}
                            <label className='text-primary font-semibold'>Email</label>
                            <input className='input' type="text" name="email" id="" placeholder='enter your email' />
                            {/* password  */}
                            <label className='text-primary font-semibold'>Password</label>
                            <input className='input' type="password" name="" id="" placeholder='enter your password' />

                            {/* forget-password  */}
                            <a className='link text-sm' href="">forget password</a>
                            
                            {/* register-button  */}
                            <button className="btn w-full btn-primary uppercase my-4">Register</button>

                            <p>Already have an acccount? <Link to="/auth/signin" className='link text-primary'>Sign-In</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;