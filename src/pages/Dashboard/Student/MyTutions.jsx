import React, { use } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../Context/Auth/AuthContext';
import TutionCard from '../../../components/shared/TutionCard';

const MyTutions = () => {
    const {user}=use(AuthContext);
    const axiosSecure = useAxiosSecure()
    console.log(user)

    const { data: tutions = [] } = useQuery({
        queryKey: ['my-tutions'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/tutions?email=${user?.email}`);
            return res.data;
        }
    })

    console.log(tutions)

    return (
        <div className='grid grid-cols-4 gap-4'>
            {
                tutions.map((tution,i)=><TutionCard key={i} tution={tution}></TutionCard>)
            }
        </div>
    );
};

export default MyTutions;