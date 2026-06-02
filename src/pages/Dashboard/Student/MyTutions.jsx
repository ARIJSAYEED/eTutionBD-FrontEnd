import React, { use } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../Context/Auth/AuthContext';
import Swal from 'sweetalert2';
import { Link } from 'react-router';

const MyTuitions = () => {

    const { user } = use(AuthContext);
    const axiosSecure = useAxiosSecure()
    console.log("user from my tutions", user?.email)

    const { data: tuitions = [], refetch, isLoading } = useQuery({
        queryKey: ['my-tuitions', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/tuitions?email=${user?.email}&adminApproval=approved`);
            return res.data;
        }
    })

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <span className="loading loading-spinner loading-lg text-primary"></span>
            </div>
        )
    }

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete this tuition post!"
        }).then((result) => {
            if (result.isConfirmed)
                axiosSecure.delete(`tuitions/${id}`)
                    .then((res) => {
                        refetch()
                        if (res.data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "The post has been deleted.",
                                icon: "success"
                            });
                        }
                    })
                    .catch(err => console.log(err))
        });
    }

    if (!tuitions.length) return (
        <div className='flex flex-col justify-center items-center space-y-2 mt-20'>
            <h1 className='text-5xl text-center mt-4'>You haven't posted any tuition yet</h1>
            <Link to='/dashboard/post-new-tuition'>
                <button className="btn btn-primary shadow-none">Post Here</button>
            </Link>
        </div>
    )

    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra text-center">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Student</th>
                        <th>Class</th>
                        <th>Location</th>
                        <th>Schedule</th>
                        <th>Subjects</th>
                        <th>Salary</th>
                        <th>Payment Status</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tuitions.map((tuition, i) => (
                        <tr key={tuition._id} className='hover:bg-primary/10'>
                            <th>{i + 1}</th>
                            <td>
                                <p className="font-medium">{tuition.studentName}</p>
                                <p className="text-xs text-neutral-400">{tuition.guardianPhone}</p>
                            </td>
                            <td>
                                <p>{tuition.classGrade}</p>
                                <p className="text-xs text-neutral-400">{tuition.medium}</p>
                            </td>
                            <td>
                                <p>{tuition.district}</p>
                                <p className="text-xs text-neutral-400">{tuition.tutoringMode}</p>
                            </td>
                            <td>
                                <p>{tuition.daysPerWeek}</p>
                                <p className="text-xs text-neutral-400">{tuition.preferredTime}</p>
                            </td>
                            <td className="max-w-32 truncate text-sm">{tuition.subjects}</td>
                            <td className="font-semibold text-primary">৳{tuition.expectedSalary}</td>
                            <td className="font-semibold text-primary">{tuition.paymentStatus}</td>
                            <td>
                                <span className={`badge badge-sm ${tuition.tuitionStatus === 'open' ? 'badge-success' : 'badge-warning'}`}>
                                    {tuition.tuitionStatus}
                                </span>
                            </td>
                            <td className='space-x-1'>
                                <Link to={`/tuitions/${tuition._id}`}>
                                    <button className="btn btn-primary btn-sm shadow-none">Details</button>
                                </Link>
                                <button
                                    onClick={() => handleDelete(tuition._id)}
                                    className="btn btn-error btn-sm btn-outline shadow-none">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyTuitions;