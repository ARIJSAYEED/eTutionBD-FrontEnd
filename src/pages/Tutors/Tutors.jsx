import React from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import TutorCard from '../../components/shared/TutorCard';

const Tutors = () => {
    const axiosSecure = useAxiosSecure()

    const { data: tutors = [] } = useQuery({
        queryKey: ['tutions'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users?role=tutor');
            return res.data;
        }
    })
    console.log(tutors)
    return (
        <div className='grid grid-cols-6 gap-4'>
            {
                tutors.map((tutor, i) => <TutorCard key={i} tutor={tutor}></TutorCard>)
            }
        </div>
    );
};

export default Tutors;