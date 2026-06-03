import axios from 'axios';
import React, { use, useEffect } from 'react';
import { AuthContext } from '../Context/Auth/AuthContext';

// created a axios instance
const axiosSecure = axios.create({
    // baseURL: "http://localhost:3000/"
    baseURL: "https://etutionbd-backend.onrender.com/"
})

const useAxiosSecure = () => {

    const { user } = use(AuthContext)

    useEffect(() => {
        const reqInterceptor = axiosSecure.interceptors.request.use(config => {
            config.headers.Authorization = `Bearer ${user?.accessToken}`
            return config;
        })

        const resInterceptor = axiosSecure.interceptors.response.use((response) => { return response },
            (error) => {
                console.log(error)
            })

        return () => {
            axiosSecure.interceptors.request.eject(reqInterceptor);
            axiosSecure.interceptors.request.eject(resInterceptor);
        }
    }, [user])

    return axiosSecure;
};

export default useAxiosSecure;