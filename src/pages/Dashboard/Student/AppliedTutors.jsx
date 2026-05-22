import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { use } from "react";
import { AuthContext } from "../../../Context/Auth/AuthContext";


const AppliedTutors = () => {

    const { user } = use(AuthContext)
    console.log("user from applied tutor page", user)

    const axiosSecure = useAxiosSecure()

    const { data: appliedTutors = [] } = useQuery({
        queryKey: ['AppliedTutors', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/tutionApplications?studentEmail=${user?.email}`);
            return res.data;
        },
        // enabled: !!user?.email,
    });

    console.log(appliedTutors)

    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra text-center">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Tutor Name</th>
                        <th>Applied for</th>
                        <th>Student Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        appliedTutors.map((at, i) => (
                            <tr key={i}>
                                <th>{i + 1}</th>
                                <td>{at.name}</td>
                                <td>{at.classGrade}</td>
                                <td>{at.studentName}</td>
                                <td>
                                    <button className="btn btn-primary shadow-none">View</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AppliedTutors;