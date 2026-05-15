import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import TutionCard from '../../components/shared/TutionCard';

const Tutions = () => {

    const axiosSecure = useAxiosSecure()

    const { data: tutions = [] } = useQuery({
        queryKey: ['tutions'],
        queryFn: async () => {
            const res = await axiosSecure.get('/tutions');
            return res.data;
        }
    })

    return (
        <div className='grid grid-cols-4 gap-4'>
            {
                tutions.map((tution, i) => <TutionCard key={i} tution={tution}></TutionCard>)
            }
        </div>
    );
};

export default Tutions;