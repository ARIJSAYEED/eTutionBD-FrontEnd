import React, { use } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../Context/Auth/AuthContext';
import TutionCard from '../../../components/shared/TutionCard';

const MyTutions = () => {

    const { user } = use(AuthContext);
    const axiosSecure = useAxiosSecure()
    // console.log(user)

    const { data: tutions = [] } = useQuery({
        queryKey: ['my-tutions'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/tutions?email=${user?.email}`);
            return res.data;
        }
    })

    // console.log(tutions)

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
                                    <button className="btn btn-outline">Delete</button>
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