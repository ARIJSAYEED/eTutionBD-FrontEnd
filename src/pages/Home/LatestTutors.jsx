import React from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import TutorCard from '../../components/shared/TutorCard';
import { IoIosArrowForward } from 'react-icons/io';
import { FiUsers } from 'react-icons/fi';

const LatestTutors = () => {
    const axiosSecure = useAxiosSecure();

    const { data: tutors = [], isLoading } = useQuery({
        queryKey: ['latest-tutors'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users?role=tutor');
            return res.data;
        }
    });

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <span className="loading loading-spinner loading-lg text-primary"></span>
            </div>
        )
    }

    return (
        <section className="py-10 px-4">

            {/* Section Header */}
            <div className="flex justify-between items-end mb-2">
                <div className="flex items-center gap-3">
                    <div className="bg-secondary/10 text-secondary p-2 rounded-sm">
                        <FiUsers size={20} />
                    </div>
                    <div>
                        <p className="text-xs text-base-content/40 uppercase tracking-widest font-medium mb-0.5">Meet Our Experts</p>
                        <h2 className="text-2xl font-bold text-base-content">Latest Tutors</h2>
                    </div>
                </div>

                <a href="/tutors" className="btn btn-outline btn-secondary btn-sm gap-1 rounded-xl">
                    See More
                    <IoIosArrowForward size={15} />
                </a>
            </div>

            {/* Divider */}
            <div className="border-b border-base-300 mb-6 mt-4" />

            {/* Tutor Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5">
                {tutors.map((tutor, i) => (
                    <TutorCard key={i} tutor={tutor} />
                ))}
            </div>

            {/* Empty State */}
            {tutors.length === 0 && (
                <div className="text-center py-16">
                    <p className="text-4xl mb-3">🎓</p>
                    <p className="text-base-content/50 text-sm">No tutors available right now.</p>
                </div>
            )}

            {/* Bottom CTA */}
            {tutors.length > 0 && (
                <div className="text-center mt-8">
                    <a href="/tutors" className="btn btn-secondary btn-wide gap-2 rounded-xl">
                        View All Tutors
                        <IoIosArrowForward size={16} />
                    </a>
                </div>
            )}
        </section>
    );
};

export default LatestTutors;