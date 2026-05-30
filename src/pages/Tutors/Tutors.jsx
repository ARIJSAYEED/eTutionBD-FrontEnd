import React from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import TutorCard from '../../components/shared/TutorCard';
import { FiSearch, FiUsers, FiStar, FiFilter } from 'react-icons/fi';

const Tutors = () => {
    const axiosSecure = useAxiosSecure();

    const { data: tutors = [] } = useQuery({
        queryKey: ['tutions'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users?role=tutor');
            return res.data;
        }
    });

    return (
        <div className="min-h-screen bg-base-200 px-6 py-10">

            {/* Header */}
            <div className="max-w-7xl mx-auto mb-10">
                <div className="flex items-center gap-3 mb-2">
                    <div className="bg-secondary text-secondary-content p-2 rounded-sm">
                        <FiUsers size={22} />
                    </div>
                    <h1 className="text-3xl font-bold text-base-content">Find a Tutor</h1>
                </div>
                <p className="text-base-content/60 text-sm max-w-xl ml-1">
                    Connect with experienced and verified tutors across a variety of subjects. Filter by expertise, rating, or availability to find the right match for you.
                </p>
            </div>

            {/* Search & Filter Bar */}
            <div className="max-w-7xl mx-auto mb-8">
                <div className="bg-base-100 rounded-2xl shadow-sm p-4 flex flex-col sm:flex-row gap-3 items-center">

                    {/* Search */}
                    <label className="input input-bordered flex items-center gap-2 flex-1 w-full">
                        <FiSearch className="text-base-content/40" />
                        <input
                            type="text"
                            placeholder="Search by name or subject..."
                            className="grow bg-transparent outline-none text-sm"
                        />
                    </label>

                    {/* Subject Filter */}
                    <select className="select select-bordered w-full sm:w-44 text-sm">
                        <option disabled selected>Subject</option>
                        <option>Mathematics</option>
                        <option>Physics</option>
                        <option>English</option>
                        <option>Chemistry</option>
                        <option>Biology</option>
                        <option>ICT</option>
                    </select>

                    {/* Rating Filter */}
                    <select className="select select-bordered w-full sm:w-44 text-sm">
                        <option disabled selected>Rating</option>
                        <option>⭐ 5 Stars</option>
                        <option>⭐ 4+ Stars</option>
                        <option>⭐ 3+ Stars</option>
                    </select>

                    {/* Availability Filter */}
                    <select className="select select-bordered w-full sm:w-44 text-sm">
                        <option disabled selected>Availability</option>
                        <option>Morning</option>
                        <option>Afternoon</option>
                        <option>Evening</option>
                        <option>Weekend</option>
                    </select>

                    {/* Filter Button */}
                    <button className="btn btn-secondary gap-2 w-full sm:w-auto">
                        <FiFilter size={16} />
                        Filter
                    </button>
                </div>
            </div>

            {/* Stats Row */}
            <div className="max-w-7xl mx-auto mb-6 flex flex-wrap gap-4">
                <div className="bg-base-100 rounded-xl px-5 py-3 flex items-center gap-3 shadow-sm">
                    <FiUsers className="text-secondary" size={18} />
                    <div>
                        <p className="text-xs text-base-content/50">Total Tutors</p>
                        <p className="font-bold text-base-content">{tutors.length}</p>
                    </div>
                </div>
                <div className="bg-base-100 rounded-xl px-5 py-3 flex items-center gap-3 shadow-sm">
                    <FiStar className="text-warning" size={18} />
                    <div>
                        <p className="text-xs text-base-content/50">Verified Tutors</p>
                        <p className="font-bold text-base-content">{tutors.length}</p>
                    </div>
                </div>
            </div>

            {/* Tutor Cards Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                {tutors.map((tutor, i) => (
                    <TutorCard key={i} tutor={tutor} />
                ))}
            </div>

            {/* Empty State */}
            {tutors.length === 0 && (
                <div className="max-w-7xl mx-auto text-center py-24">
                    <div className="text-6xl mb-4">🎓</div>
                    <h3 className="text-xl font-semibold text-base-content mb-1">No tutors found</h3>
                    <p className="text-base-content/50 text-sm">Try adjusting your filters or check back later.</p>
                </div>
            )}
        </div>
    );
};

export default Tutors;