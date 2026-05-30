import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import TutionCard from '../../components/shared/TutionCard';
import { FiSearch, FiFilter, FiBookOpen } from 'react-icons/fi';

const Tutions = () => {
    const axiosSecure = useAxiosSecure();

    const { data: tutions = [] } = useQuery({
        queryKey: ['tutions'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/tutions?adminApproval=approved`);
            return res.data;
        }
    });

    return (
        <div className="min-h-screen bg-base-200 px-6 py-10">

            {/* Header */}
            <div className="max-w-7xl mx-auto mb-10">
                <div className="flex items-center gap-3 mb-2">
                    <div className="bg-primary text-primary-content p-2 rounded-sm">
                        <FiBookOpen size={22} />
                    </div>
                    <h1 className="text-3xl font-bold text-base-content">Browse Tuitions</h1>
                </div>
                <p className="text-base-content/60 text-sm max-w-xl ml-1">
                    Explore a wide range of approved tuition listings. Find the perfect tutor based on subject, location, and your preferred schedule.
                </p>
            </div>

            {/* Search & Filter Bar */}
            <div className="max-w-7xl mx-auto mb-8">
                <div className="bg-base-100 rounded-2xl shadow-sm p-4 flex flex-col sm:flex-row gap-3 items-center">

                    {/* Search */}
                    <label className="input input-bordered flex items-center gap-2 flex-1 w-full">
                        <FiSearch className="text-base-content/40" />
                        <input type="text" placeholder="Search by subject, location..." className="grow bg-transparent outline-none text-sm" />
                    </label>

                    {/* Subject Filter */}
                    <select className="select select-bordered w-full sm:w-44 text-sm">
                        <option disabled selected>Subject</option>
                        <option>Mathematics</option>
                        <option>Physics</option>
                        <option>English</option>
                        <option>Chemistry</option>
                        <option>Biology</option>
                    </select>

                    {/* Class Filter */}
                    <select className="select select-bordered w-full sm:w-44 text-sm">
                        <option disabled selected>Class</option>
                        <option>Class 6</option>
                        <option>Class 7</option>
                        <option>Class 8</option>
                        <option>Class 9</option>
                        <option>Class 10</option>
                        <option>HSC</option>
                    </select>

                    {/* Filter Button */}
                    <button className="btn btn-primary gap-2 w-full sm:w-auto">
                        <FiFilter size={16} />
                        Filter
                    </button>
                </div>
            </div>

            {/* Results Count */}
            <div className="max-w-7xl mx-auto mb-4">
                <p className="text-sm text-base-content/50">
                    Showing <span className="font-semibold text-base-content">{tutions.length}</span> tuitions
                </p>
            </div>

            {/* Tuition Cards Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {tutions.map((tution, i) => (
                    <TutionCard key={i} tution={tution} />
                ))}
            </div>

            {/* Empty State */}
            {tutions.length === 0 && (
                <div className="max-w-7xl mx-auto text-center py-24">
                    <div className="text-6xl mb-4">📚</div>
                    <h3 className="text-xl font-semibold text-base-content mb-1">No tuitions found</h3>
                    <p className="text-base-content/50 text-sm">Try adjusting your filters or check back later.</p>
                </div>
            )}
        </div>
    );
};

export default Tutions;