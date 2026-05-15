import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import TutionCard from '../../components/shared/TutionCard';
import { IoIosArrowForward } from "react-icons/io";


const LatestTuition = () => {

    const axiosSecure = useAxiosSecure();

    const { data: tutions = [] } = useQuery({
        queryKey: ['latest-tutions'],
        queryFn: async () => {
            const res = await axiosSecure.get('/tutions');
            return res.data;
        }
    })

    const latestTutions = tutions.slice(-4).reverse(); // ← trim to 4


    // console.log("latest tution post from home page", tutions);

    return (
        <div className='space-y-4'>
            <div className='flex justify-between items-center'>
                <div>
                    <h1 className='text-4xl font-semibold text-primary'>Latest Tutions</h1>
                </div>
                <div className='btn flex items-center'>
                    <a href='/tutions' >Explore More</a> 
                    <span><IoIosArrowForward></IoIosArrowForward> </span>
                </div>
            </div>
            <div className='grid grid-cols-4 gap-5'>
                {
                    latestTutions.map((tution, i) => <TutionCard key={i} tution={tution}></TutionCard>)
                }
            </div>
        </div>
    );
};

export default LatestTuition;