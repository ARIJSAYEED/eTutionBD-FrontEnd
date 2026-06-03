import React, { use } from 'react';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../hooks/useAxiosSecure'
import { AuthContext } from '../Context/Auth/AuthContext';

const useRole = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = use(AuthContext)

    const { data: role = 'student', isLoading } = useQuery({
        queryKey: ['user-role'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/${user?.email}/role`);
            return res.data.role;
        }
    });

    // console.log(role)

    return { role, isLoading };
};

export default useRole;