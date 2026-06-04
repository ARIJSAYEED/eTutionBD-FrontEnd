import { useQuery } from '@tanstack/react-query';
import React, { use } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { AuthContext } from '../../../Context/Auth/AuthContext';
import { Link } from 'react-router';

const AppliedTuitions = () => {

    const { user } = use(AuthContext);
    const axiosSecure = useAxiosSecure();

    const { data: appliedTuitions = [], isLoading } = useQuery({
        queryKey: ['applied-tuitions', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/applied-tuitions?email=${user?.email}`);
            return res.data;
        }
    });

    if (isLoading) return (
        <div className="min-h-screen flex items-center justify-center">
            <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
    );

    if (!appliedTuitions.length) return (
        <div className='flex flex-col justify-center items-center space-y-2 mt-20'>
            <h1 className='text-5xl text-center mt-4'>You haven't applied to any tuition yet</h1>
            <Link to='/tuitions'>
                <button className="btn btn-primary shadow-none">Browse Tuitions</button>
            </Link>
        </div>
    );

    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra text-center">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Student</th>
                        <th>Class</th>
                        {/* <th>Tuition</th> */}
                        <th>Qualifications</th>
                        <th>Experience</th>
                        <th>Expected Salary</th>
                        <th>Applied At</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {appliedTuitions.map((application, i) => (
                        <tr key={application._id} className='hover:bg-primary/10'>
                            <th>{i + 1}</th>
                            <td>
                                <p className="font-medium">{application.studentName}</p>
                                <p className="text-xs text-neutral-400">{application.studentEmail}</p>
                            </td>
                            <td>{application.classGrade}</td>
                            {/* <td>
                                <p className="font-medium">{application.tutorName}</p>
                                <p className="text-xs text-neutral-400">{application.tutorEmail}</p>
                            </td> */}
                            <td className="max-w-32 truncate text-sm">{application.qualifications}</td>
                            <td>{application.experience}</td>
                            <td className="font-semibold text-primary">৳{application.expectedSalary}</td>
                            <td className="text-xs text-neutral-400">
                                {new Date(application.appliedAt).toLocaleDateString()}
                            </td>
                            <td>
                                <Link to={`/tuitions/${application.tuitionId}`}>
                                    <button className="btn btn-primary btn-sm shadow-none">Details</button>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AppliedTuitions;