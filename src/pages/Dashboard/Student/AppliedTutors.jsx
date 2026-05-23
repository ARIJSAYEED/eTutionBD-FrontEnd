import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { use } from "react";
import { AuthContext } from "../../../Context/Auth/AuthContext";

const AppliedTutors = () => {
    const { user } = use(AuthContext);
    const axiosSecure = useAxiosSecure();

    const { data: appliedTutors = [], isLoading } = useQuery({
        queryKey: ['AppliedTutors', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/tutionApplications?studentEmail=${user?.email}`);
            return res.data;
        },
        enabled: !!user?.email,
    });

    const formatDate = (dateStr) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
    };

    if (isLoading) return <p className="text-center py-10">Loading...</p>;

    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra text-center">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Tutor</th>
                        <th>Applied For</th>
                        <th>Qualifications</th>
                        <th>Experience</th>
                        <th>Salary</th>
                        <th>Applied At</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {appliedTutors.map((at, i) => (
                        <tr key={i}>
                            <th>{i + 1}</th>
                            <td>
                                <div className="flex items-center gap-2 justify-start">
                                    <div className="avatar">
                                        <div className="w-10 rounded">
                                            <img src={at.tutorImage} alt={at.tutorName} />
                                        </div>
                                    </div>
                                    <span className="font-medium">{at.tutorName}</span>
                                </div>
                            </td>
                            <td>{at.classGrade}</td>
                            <td>{at.qualifications}</td>
                            <td>{at.experience}</td>
                            <td>৳{at.expectedSalary}</td>
                            <td>{formatDate(at.appliedAt)}</td>
                            <td>
                                <span className="badge badge-warning badge-sm">Pending</span>
                            </td>
                            <td>
                                <button className="btn btn-primary btn-sm shadow-none">View</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AppliedTutors;