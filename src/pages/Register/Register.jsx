import React, { use } from 'react';
import Logo from '../../components/shared/Logo';
import { Link, useNavigate } from 'react-router';
import registerImg from '../../assets/register.png'
import { useForm } from "react-hook-form"
import { AuthContext } from '../../Context/Auth/AuthContext';
import Swal from 'sweetalert2'
import useAxiosSecure from '../../hooks/useAxiosSecure';
import SocialLogin from '../../components/shared/SocialLogin';
import axios from 'axios';


const Register = () => {
    const { SignUp, updateUser } = use(AuthContext);
    const { register, handleSubmit } = useForm();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();

    const handleSignUp = (data) => {

        console.log(data);

        const image = data.image[0]
        console.log(image)

        SignUp(data.email, data.password)
            .then(res => {

                console.log(res.user);

                const formData = new FormData();
                formData.append('image', image)

                const imgapiurl = `https://api.imgbb.com/1/upload?key=65e600d84bfeaacc6d56a7402516424c`

                axios.post(imgapiurl, formData)
                    .then(res => {

                        const photoURL = res.data.data.url;

                        console.log(photoURL)

                        data.image = photoURL;

                        axiosSecure.post('/users', data)
                            .then(res => {
                                if (res.data.insertedId) {
                                    Swal.fire({
                                        position: "center",
                                        icon: "success",
                                        title: "Registration Successful",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                }

                            })

                        const userProfile = {
                            displayName: data.name,
                            photoURL: photoURL
                        }

                        updateUser(userProfile)
                            .then(() => {
                                console.log("user profile updated")
                                navigate('/')
                            })
                            .catch(err => console.log(err))


                    })
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div className="w-11/12 mx-auto py-10 flex justify-center flex-col gap-6">
            <div className='flex justify-center items-center'>
                <Logo></Logo>
            </div>
            <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-6">
                <div className="text-center space-y-6 w-full lg:w-1/2">
                    <img src={registerImg} alt="" />
                </div>
                <div className="w-full lg:w-1/2">
                    <h1 className="text-3xl md:text-5xl font-bold capitalize">Register now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <div className='border p-6 rounded-md border-neutral-300 shadow-xl'>
                        <form onSubmit={handleSubmit(handleSignUp)} className='*:w-full space-y-4'>

                            {/* Image  */}
                            <label className='text-primary font-semibold'>Upload your Image</label>
                            <input {...register("image")} type="file" className="file-input" />

                            {/* name  */}
                            <label className='text-primary font-semibold'>Name</label>
                            <input
                                {...register("name")}
                                className='input' type="text" placeholder='enter your name' />

                            {/* email  */}
                            <label className='text-primary font-semibold'>Email</label>
                            <input
                                {...register("email")}
                                className='input' type="email" placeholder='enter your email' />

                            {/* role  */}
                            <label className='text-primary font-semibold'>Your Role</label>
                            <label
                                {...register('role')}
                                for="roles" className='select'>
                                <span className="label">Select Your Role</span>
                                <select
                                    {...register('role')}
                                    id="roles">
                                    <option value="student">Student</option>
                                    <option value="tutor">Tutor</option>
                                </select>
                            </label>

                            {/* password  */}
                            <label className='text-primary font-semibold'>Password</label>
                            <input
                                {...register("password")}
                                className='input' type="password" placeholder='enter your password' />

                            {/* forget-password  */}
                            <a className='link text-sm' href="">forget password</a>

                            {/* register-button  */}
                            <button className="btn w-full btn-primary uppercase my-4">Register</button>

                            <p className='text-center text-sm text-neutral-600'>Or</p>

                            {/* social-login  */}
                            <SocialLogin></SocialLogin>

                            <p>Already have an acccount? <Link to="/auth/signin" className='link text-primary'>Sign-In</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;