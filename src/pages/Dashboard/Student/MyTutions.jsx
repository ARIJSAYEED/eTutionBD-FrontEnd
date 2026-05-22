import React, { use } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../Context/Auth/AuthContext';
import TutionCard from '../../../components/shared/TutionCard';
import Swal from 'sweetalert2';

const MyTutions = () => {

    const { user } = use(AuthContext);
    const axiosSecure = useAxiosSecure()
    // console.log(user)

    const { data: tutions = [] } = useQuery({
        queryKey: ['my-tutions', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/tutions?email=${user?.email}`);
            return res.data;
        }
    })

    console.log(tutions)

    const handleDelete = (id) => {
        console.log("the button was clicked", id)

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
                        console.log(res)
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

    return (
        <div className="overflow-x-auto *:text-center">
            <table className="table table-zebra">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Student Name</th>
                        <th>Gurdians Phone</th>
                        <th>Class Grade</th>
                        <th>Salary</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        tutions.map((tution, i) =>
                            <tr
                                key={i}
                                className='hover:bg-primary/15'
                            >
                                <th>{i + 1}</th>
                                <td>{tution.studentName}</td>
                                <td>{tution.guardianPhone}</td>
                                <td>{tution.classGrade}</td>
                                <td>{tution.expectedSalary}</td>
                                <td className='space-x-2'>
                                    <button className="btn btn-primary">Details</button>
                                    <button
                                        onClick={() => handleDelete(tution._id)}
                                        className="btn btn-outline">Delete</button>
                                </td>
                            </tr>
                        )
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MyTutions;