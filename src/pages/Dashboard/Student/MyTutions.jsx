import React, { use } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../Context/Auth/AuthContext';
import Swal from 'sweetalert2';
import { Link } from 'react-router';

const MyTutions = () => {

    const { user } = use(AuthContext);
    const axiosSecure = useAxiosSecure()

    const { data: tutions = [], refetch } = useQuery({
        queryKey: ['my-tutions', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/tutions?email=${user?.email}&adminApproval=approved`);
            return res.data;
        }
    })

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete this tution post!"
        }).then((result) => {
            if (result.isConfirmed)
                axiosSecure.delete(`tutions/${id}`)
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

    if (!tutions.length) return (
        <div className='flex flex-col justify-center items-center space-y-2 mt-20'>
            <h1 className='text-5xl text-center mt-4'>You haven't posted any tution yet</h1>
            <Link to='/dashboard/post-new-tution'>
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
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tutions.map((tution, i) => (
                        <tr key={tution._id} className='hover:bg-primary/10'>
                            <th>{i + 1}</th>
                            <td>
                                <p className="font-medium">{tution.studentName}</p>
                                <p className="text-xs text-neutral-400">{tution.guardianPhone}</p>
                            </td>
                            <td>
                                <p>{tution.classGrade}</p>
                                <p className="text-xs text-neutral-400">{tution.medium}</p>
                            </td>
                            <td>
                                <p>{tution.district}</p>
                                <p className="text-xs text-neutral-400">{tution.tutoringMode}</p>
                            </td>
                            <td>
                                <p>{tution.daysPerWeek}</p>
                                <p className="text-xs text-neutral-400">{tution.preferredTime}</p>
                            </td>
                            <td className="max-w-32 truncate text-sm">{tution.subjects}</td>
                            <td className="font-semibold text-primary">৳{tution.expectedSalary}</td>
                            <td>
                                <span className={`badge badge-sm ${tution.tutionStatus === 'open' ? 'badge-success' : 'badge-warning'}`}>
                                    {tution.tutionStatus}
                                </span>
                            </td>
                            <td className='space-x-1'>
                                <Link to={`/tutions/${tution._id}`}>
                                    <button className="btn btn-primary btn-sm shadow-none">Details</button>
                                </Link>
                                <button
                                    onClick={() => handleDelete(tution._id)}
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

export default MyTutions;