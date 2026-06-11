import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
// import TuitionCard from '../../components/shared/tuitionCard';
import { IoIosArrowForward } from "react-icons/io";
import { FiBookOpen } from 'react-icons/fi';
import TuitionCard from '../../components/shared/TutionCard';

const LatestTuition = () => {
    const axiosSecure = useAxiosSecure();

    const { data: tuitions = [], isLoading } = useQuery({
        queryKey: ['latest-tuitions'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/tuitions?adminApproval=approved&limit=4`);
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
                    <div className="bg-primary/10 text-primary p-2 rounded-sm">
                        <FiBookOpen size={20} />
                    </div>
                    <div>
                        <p className="text-xs text-base-content/40 uppercase tracking-widest font-medium mb-0.5">Freshly Added</p>
                        <h2 className="text-2xl font-bold text-base-content">Latest Tuitions</h2>
                    </div>
                </div>

                <a href="/tuitions" className="btn btn-outline btn-primary btn-sm gap-1 rounded-xl">
                    Explore More
                    <IoIosArrowForward size={15} />
                </a>
            </div>

            {/* Divider */}
            <div className="border-b border-base-300 mb-6 mt-4" />

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {tuitions.map((tuition, i) => (
                    <TuitionCard key={i} tuition={tuition} />
                ))}
            </div>

            {/* Empty State */}
            {tuitions.length === 0 && (
                <div className="text-center py-16">
                    <p className="text-4xl mb-3">📚</p>
                    <p className="text-base-content/50 text-sm">No tuitions available right now.</p>
                </div>
            )}

            {/* Bottom CTA */}
            {tuitions.length > 0 && (
                <div className="text-center mt-8">
                    <a href="/tuitions" className="btn btn-primary btn-wide gap-2 rounded-xl">
                        View All Tuitions
                        <IoIosArrowForward size={16} />
                    </a>
                </div>
            )}
        </section>
    );
};

export default LatestTuition;