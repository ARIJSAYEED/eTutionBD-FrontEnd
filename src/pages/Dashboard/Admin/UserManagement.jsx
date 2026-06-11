import { useQuery } from '@tanstack/react-query';
import React, { use } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { AuthContext } from '../../../Context/Auth/AuthContext';
import Swal from 'sweetalert2';

const UserManagement = () => {

    const { user } = use(AuthContext)
    const axiosSecure = useAxiosSecure()

    const { data: users = [], refetch, isLoading } = useQuery({
        queryKey: ['users', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users`);
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

    // console.log(users)

    const handleMakeAnything = (id, update) => {
        console.log(id)
        // const update = { role: "admin" }
        const role = update.role
        Swal.fire({
            title: "Are you sure?",
            text: `You are going to make this user a ${role}!`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Confirm"
        }).then((result) => {
            if (result.isConfirmed)
                axiosSecure.patch(`/users/${id}/role`, update)
                    .then((res) => {
                        console.log(res.data)
                        if (res.data.modifiedCount) {
                            refetch()
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: `User has been made ${role}!`,
                                showConfirmButton: false,
                                timer: 2000
                            });
                        }
                    })
                    .catch(err => console.log(err))
        });
    };

    const handleMakeAdmin = (id) => {
        const update = { role: "admin" }
        handleMakeAnything(id, update)
    }
    const handleMakeTutor = (id) => {
        const update = { role: "tutor" }
        handleMakeAnything(id, update)
    }
    const handleMakeStudent = (id) => {
        const update = { role: "student" }
        handleMakeAnything(id, update)
    }

    // this action deletes user only from database not from firebase, need some research for that
    const handleDelete = (id) => {
        // console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete this User!"
        }).then((result) => {
            if (result.isConfirmed)
                axiosSecure.delete(`/users/${id}`)
                    .then((res) => {
                        refetch()
                        if (res.data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "The User has been deleted.",
                                icon: "success"
                            });
                        }
                    })
                    .catch(err => console.log(err))
        });
    };

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
                            <td className="space-x-1 text-end">
                                {
                                    u.role === "admin"
                                        ?
                                        <>
                                            <button
                                                onClick={() => handleMakeTutor(u._id)}
                                                className="btn btn-primary btn-sm shadow-none">Make Tutor</button>
                                            <button
                                                onClick={() => handleMakeStudent(u._id)}
                                                className="btn btn-primary btn-sm shadow-none">Make Student</button>
                                        </>
                                        :
                                        <button
                                            onClick={() => handleMakeAdmin(u._id)}
                                            className="btn btn-primary btn-sm shadow-none">Make Admin</button>
                                }
                                <button
                                    onClick={() => handleDelete(u._id)}
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