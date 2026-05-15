import React from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import TutorCard from '../../components/shared/TutorCard';
import { IoIosArrowForward } from 'react-icons/io';

const LatestTutors = () => {

    const axiosSecure = useAxiosSecure();

    const { data: tutors = [] } = useQuery({
        queryKey: ['latest-tutors'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users?role=tutor');
            return res.data;
        }
    })
    console.log(tutors)
    return (
        <div className='space-y-4'>
            <div className='flex justify-between items-center'>
                <div>
                    <h1 className='text-4xl font-semibold text-primary'>Latest Tutors</h1>
                </div>
                <div className='btn flex items-center'>
                    <a href='/tutors' >See More</a> 
                    <span><IoIosArrowForward></IoIosArrowForward> </span>
                </div>
            </div>
            <div className='divider'></div>
            <div className='grid grid-cols-6 gap-4'>
                {
                    tutors.map((tutor, i) => <TutorCard key={i} tutor={tutor}></TutorCard>)
                }
            </div>
        </div>
    );
};

export default LatestTutors;