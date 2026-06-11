import React, { use } from 'react';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../hooks/useAxiosSecure'
import { AuthContext } from '../Context/Auth/AuthContext';

const useRole = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = use(AuthContext)

    const { data: role = 'student', isLoading: roleLoading } = useQuery({
        queryKey: ['user-role', user?.email],
        enabled: !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/${user?.email}/role`);
            return res.data.role;
        }
    });

    // console.log(role)

    return { role, roleLoading };
};

export default useRole;