import axios from 'axios';
import React, { use, useEffect } from 'react';
import { AuthContext } from '../Context/Auth/AuthContext';
import { useNavigate } from 'react-router';

// created a axios instance
const axiosSecure = axios.create({
    baseURL: "http://localhost:3000/"
    // baseURL: "https://etutionbd-backend.onrender.com/"
})

const useAxiosSecure = () => {

    const { user, LogOut } = use(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {
        const reqInterceptor = axiosSecure.interceptors.request.use(config => {
            config.headers.Authorization = `Bearer ${user?.accessToken}`
            return config;
        })

        const resInterceptor = axiosSecure.interceptors.response.use((response) => { return response },
            (error) => {
                console.log(error)
                const statusCode = error.status;
                if (statusCode === 401 || statusCode === 403) {
                    LogOut().then(() => navigate('/auth/signin'))
                }
                return Promise.reject(error);
            })

        return () => {
            axiosSecure.interceptors.request.eject(reqInterceptor);
            axiosSecure.interceptors.response.eject(resInterceptor);
        }
    }, [user, LogOut, navigate])

    return axiosSecure;
};

export default useAxiosSecure;