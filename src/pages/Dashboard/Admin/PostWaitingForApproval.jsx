import { useQuery } from '@tanstack/react-query';
import React, { use } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { AuthContext } from '../../../Context/Auth/AuthContext';
import Swal from 'sweetalert2';

const PostWaitingForApproval = () => {

    const { user } = use(AuthContext)
    const axiosSecure = useAxiosSecure()

    const { data: pendingtuitions = [], refetch } = useQuery({
        queryKey: ['pending-tuitions', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/tuitions?adminApproval=pending`);
            return res.data;
        }
    })

    const handleUpdateAdminApproval = (tuitionId, adminApproval) => {
        console.log(tuitionId, adminApproval)
        axiosSecure.patch(`/tuitions/${tuitionId}`, { adminApproval })
            .then(res => {
                // console.log(res)
                if (res.data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `the tuition post has been ${adminApproval}`,
                        showConfirmButton: false,
                        timer: 3000
                    })
                }
            })
            .catch(err => console.log(err))

    }
    const handleApproval = (tuitionId) => {
        handleUpdateAdminApproval(tuitionId, 'approved')
    }
    const handleRejection = (tuitionId) => {
        handleUpdateAdminApproval(tuitionId, 'rejected')
    }

    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra text-center">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Student</th>
                        <th>Class</th>
                        <th>Subjects</th>
                        <th>Location</th>
                        <th>Schedule</th>
                        <th>Salary</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {pendingtuitions.map((pt, i) => (
                        <tr key={pt._id}>
                            <th>{i + 1}</th>
                            <td>
                                <p className="font-medium">{pt.studentName}</p>
                                <p className="text-xs text-neutral-400">{pt.studentEmail}</p>
                            </td>
                            <td>
                                <p>{pt.classGrade}</p>
                                <p className="text-xs text-neutral-400">{pt.medium}</p>
                            </td>
                            <td className="max-w-32 truncate">{pt.subjects}</td>
                            <td>
                                <p>{pt.district}</p>
                                <p className="text-xs text-neutral-400">{pt.tutoringMode}</p>
                            </td>
                            <td>
                                <p>{pt.daysPerWeek}</p>
                                <p className="text-xs text-neutral-400">{pt.preferredTime}</p>
                            </td>
                            <td className="font-semibold text-primary">৳{pt.expectedSalary}</td>
                            <td className="space-x-1">
                                <button
                                    onClick={() => handleApproval(pt._id)}
                                    className="btn btn-success btn-sm shadow-none">Approve</button>

                                <button
                                    onClick={() => handleRejection(pt._id)}
                                    className="btn btn-error btn-sm shadow-none">Reject</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PostWaitingForApproval;