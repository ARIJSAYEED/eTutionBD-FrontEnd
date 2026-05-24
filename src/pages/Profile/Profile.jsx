import { useQuery } from '@tanstack/react-query';
import React, { use } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { AuthContext } from '../../Context/Auth/AuthContext';

const Profile = () => {
    const { user } = use(AuthContext);
    const axiosSecure = useAxiosSecure();

    const { data: userInfo = {} } = useQuery({
        queryKey: ['user', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users?email=${user.email}`);
            return res.data;
        }
    });

    const getCreatedDate = (createdAt) => {
        if (!createdAt) return '--';
        return new Date(createdAt).toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
    };

    return (
        <div className="max-w-2xl mx-auto py-8 px-4">

            {/* Header Card */}
            <div className="card bg-base-100 border border-base-300 shadow-sm mb-4">
                <div className="card-body">
                    <div className="flex items-center gap-5">
                        <div className="avatar">
                            <div className="w-20 rounded ring ring-base-300 ring-offset-base-100 ring-offset-2">
                                <img src={userInfo.image} alt="Profile" />
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                                <h2 className="text-lg font-semibold">{userInfo.name}</h2>
                                <span className="badge badge-neutral capitalize">{userInfo.role}</span>
                            </div>
                            <p className="text-sm text-base-content/60">{userInfo.email}</p>
                            <p className="text-xs text-base-content/50 mt-1">
                                Joined {getCreatedDate(userInfo.createdAt)}
                            </p>
                        </div>
                        <button className="btn btn-sm btn-outline">Change photo</button>
                    </div>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="bg-base-200 rounded-xl p-4">
                    <p className="text-xs text-base-content/50 mb-1">Account created</p>
                    <p className="text-sm font-medium">{getCreatedDate(userInfo.createdAt)}</p>
                </div>
                <div className="bg-base-200 rounded-xl p-4">
                    <p className="text-xs text-base-content/50 mb-1">Role</p>
                    <p className="text-sm font-medium capitalize">{userInfo.role}</p>
                </div>
                <div className="bg-base-200 rounded-xl p-4">
                    <p className="text-xs text-base-content/50 mb-1">Status</p>
                    <p className="text-sm font-medium text-success">Active</p>
                </div>
            </div>

            {/* Personal Info */}
            <div className="card bg-base-100 border border-base-300 shadow-sm mb-4">
                <div className="card-body">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xs font-medium uppercase tracking-widest text-base-content/50">Personal information</h3>
                        <button className="btn btn-xs btn-outline">Edit</button>
                    </div>

                    <div className="mb-3">
                        <p className="text-xs text-base-content/50 mb-1">Full name</p>
                        <p className="text-sm font-medium">{userInfo.name}</p>
                    </div>
                    <div className="mb-3">
                        <p className="text-xs text-base-content/50 mb-1">Email</p>
                        <p className="text-sm font-medium">{userInfo.email}</p>
                    </div>
                    <div className="mb-3">
                        <p className="text-xs text-base-content/50 mb-1">User ID</p>
                        <p className="text-xs font-mono text-base-content/60">{userInfo._id}</p>
                    </div>
                    <div>
                        <p className="text-xs text-base-content/50 mb-1">Role</p>
                        <p className="text-sm font-medium capitalize">{userInfo.role}</p>
                    </div>
                </div>
            </div>

            {/* Security */}
            <div className="card bg-base-100 border border-base-300 shadow-sm mb-4">
                <div className="card-body">
                    <h3 className="text-xs font-medium uppercase tracking-widest text-base-content/50 mb-4">Security</h3>
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-xs text-base-content/50 mb-1">Password</p>
                            <p className="text-sm font-medium tracking-widest">
                                {'•'.repeat(userInfo.password?.length || 6)}
                            </p>
                        </div>
                        <button className="btn btn-xs btn-outline">Change</button>
                    </div>
                </div>
            </div>

            {/* Danger Zone */}
            <div className="card bg-base-100 border border-error/30 shadow-sm">
                <div className="card-body">
                    <h3 className="text-xs font-medium uppercase tracking-widest text-base-content/50 mb-4">Danger zone</h3>
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium">Delete account</p>
                            <p className="text-xs text-base-content/50 mt-1">
                                Permanently remove your account and all data.
                            </p>
                        </div>
                        <button className="btn btn-sm btn-error btn-outline">Delete</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Profile;