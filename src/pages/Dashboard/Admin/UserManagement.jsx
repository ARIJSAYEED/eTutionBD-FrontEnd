import { useQuery } from '@tanstack/react-query';
import React, { use } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { AuthContext } from '../../../Context/Auth/AuthContext';

const UserManagement = () => {

    const { user } = use(AuthContext)
    const axiosSecure = useAxiosSecure()

    const { data: users = [] } = useQuery({
        queryKey: ['users', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users`);
            return res.data;
        }
    })

    const handleMakeAdmin = (id) => {
        console.log(id)
    }

    const handleDelete = (id) => {
        console.log(id)
    }

    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra text-center">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>User</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Joined</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((u, i) => (
                        <tr key={u._id} className="hover:bg-primary/10">
                            <th>{i + 1}</th>
                            <td>
                                <div className="flex items-center gap-3 justify-start">
                                    <div className="avatar">
                                        <div className="w-10 rounded">
                                            <img src={u.image} alt={u.name} />
                                        </div>
                                    </div>
                                    <p className="font-medium">{u.name}</p>
                                </div>
                            </td>
                            <td className="text-sm text-neutral-500">{u.email}</td>
                            <td>
                                <span className={`badge badge-sm`}>
                                    {u.role}
                                </span>
                            </td>
                            <td className="text-sm text-neutral-400">
                                {new Date(u.createdAt).toLocaleDateString('en-GB', {
                                    day: 'numeric', month: 'short', year: 'numeric'
                                })}
                            </td>
                            <td className="space-x-1">
                                <button
                                onClick={()=>handleMakeAdmin(u._id)} 
                                className="btn btn-primary btn-sm shadow-none">Make Admin</button>
                                <button
                                    onClick={()=>handleDelete(u._id)}
                                    className="btn btn-error btn-sm btn-outline shadow-none">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserManagement;