import React, { use } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';
import { AuthContext } from '../../Context/Auth/AuthContext';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const TutionDetails = () => {

    const { user } = use(AuthContext);
    const { tutionId } = useParams();
    const axiosSecure = useAxiosSecure();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const { data: tutionDetails = {}, isLoading } = useQuery({
        queryKey: ['tution-details', tutionId],
        queryFn: async () => {
            const res = await axiosSecure.get(`/tutions/${tutionId}`);
            return res.data;
        }
    });

    const { data: applications = [], refetch } = useQuery({
        queryKey: ['tution-applications', tutionId],
        queryFn: async () => {
            const res = await axiosSecure.get(`/tutionApplications?tutionId=${tutionId}`);
            return res.data;
        }
    });

    // console.log(applications)

    const {
        _id,
        classGrade,
        district,
        area,
        subjects,
        daysPerWeek,
        preferredTime,
        tutoringMode,
        expectedSalary,
        tutionStatus,
        medium,
        tutorGender,
        tutorType,
        specialInstructions,
        createdAt
    } = tutionDetails;

    const handleApplyNow = (data) => {
        const applicationData = {
            tutionId: _id,
            classGrade,
            TutorImage: user?.photoURL,
            ...data
        };

        // console.log("Application Submitted:", applicationData);

        axiosSecure.post('/tutionApplications', applicationData)
            .then((res) => {
                console.log(res)
                refetch()
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Application Successful",
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
            })
            .catch(err => console.log(err))

        document.getElementById(`apply_modal_${_id}`).close();
    };

    if (isLoading) return (
        <div className="min-h-screen flex items-center justify-center">
            <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
    );

    return (
        <div className="min-h-screen bg-neutral-50">

            <div>
                <div>
                    {/* ── Hero Banner ── */}
                    <div className="bg-white border-b border-neutral-200">
                        <div className="max-w-5xl mx-auto px-6 py-10">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <h1 className="text-3xl font-bold text-neutral-800">{classGrade}</h1>
                                        <span className="badge badge-success badge-soft">{tutionStatus}</span>
                                    </div>
                                    <p className="text-neutral-500 text-base">📍 {district}, {area}</p>
                                    <p className="text-xs text-neutral-400 mt-1">
                                        Posted on {createdAt && new Date(createdAt).toLocaleDateString('en-GB', {
                                            day: 'numeric', month: 'long', year: 'numeric'
                                        })}
                                    </p>
                                </div>

                                {/* salary + apply */}
                                <div className="flex flex-col items-start md:items-end gap-3">
                                    <div>
                                        <p className="text-xs text-neutral-400 uppercase tracking-wide">Monthly Salary</p>
                                        <p className="text-3xl font-bold text-primary">৳{expectedSalary}</p>
                                    </div>
                                    <button
                                        onClick={() => document.getElementById(`apply_modal_${_id}`).showModal()}
                                        className="btn btn-primary shadow-none"
                                    >
                                        Apply Now
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* ── Body ── */}
                    <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

                        {/* LEFT — main info (2 cols wide) */}
                        <div className="md:col-span-2 flex flex-col gap-6">

                            {/* Subjects */}
                            <div className="bg-white rounded-xl border border-neutral-200 p-6">
                                <h2 className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-4">Subjects</h2>
                                <div className="flex flex-wrap gap-2">
                                    {subjects?.split(',').map((s, i) => (
                                        <span key={i} className="badge badge-ghost text-sm capitalize px-3 py-3">{s.trim()}</span>
                                    ))}
                                </div>
                            </div>

                            {/* Schedule */}
                            <div className="bg-white rounded-xl border border-neutral-200 p-6">
                                <h2 className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-4">Schedule</h2>
                                <div className="grid grid-cols-3 gap-4 text-center">
                                    <div className="bg-neutral-50 rounded-lg p-4">
                                        <p className="text-xl mb-1">📅</p>
                                        <p className="text-xs text-neutral-400 mb-1">Days / Week</p>
                                        <p className="text-sm font-semibold text-neutral-700">{daysPerWeek}</p>
                                    </div>
                                    <div className="bg-neutral-50 rounded-lg p-4">
                                        <p className="text-xl mb-1">🕐</p>
                                        <p className="text-xs text-neutral-400 mb-1">Preferred Time</p>
                                        <p className="text-sm font-semibold text-neutral-700">{preferredTime}</p>
                                    </div>
                                    <div className="bg-neutral-50 rounded-lg p-4">
                                        <p className="text-xl mb-1">🏠</p>
                                        <p className="text-xs text-neutral-400 mb-1">Mode</p>
                                        <p className="text-sm font-semibold text-neutral-700">{tutoringMode}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Special Instructions */}
                            <div className="bg-white rounded-xl border border-neutral-200 p-6">
                                <h2 className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-4">Special Instructions</h2>
                                <p className="text-sm text-neutral-600 bg-neutral-50 rounded-lg px-4 py-4 border-l-4 border-primary leading-relaxed">
                                    {specialInstructions || 'No special instructions provided.'}
                                </p>
                            </div>

                        </div>

                        {/* RIGHT — tutor preference sidebar */}
                        <div className="flex flex-col gap-6">

                            <div className="bg-white rounded-xl border border-neutral-200 p-6">
                                <h2 className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-4">Tutor Preference</h2>
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center gap-3">
                                        <span className="text-xl">👤</span>
                                        <div>
                                            <p className="text-xs text-neutral-400">Gender</p>
                                            <p className="text-sm font-semibold text-neutral-700">{tutorGender}</p>
                                        </div>
                                    </div>
                                    <div className="divider my-0"></div>
                                    <div className="flex items-center gap-3">
                                        <span className="text-xl">💼</span>
                                        <div>
                                            <p className="text-xs text-neutral-400">Tutor Type</p>
                                            <p className="text-sm font-semibold text-neutral-700">{tutorType}</p>
                                        </div>
                                    </div>
                                    <div className="divider my-0"></div>
                                    <div className="flex items-center gap-3">
                                        <span className="text-xl">📚</span>
                                        <div>
                                            <p className="text-xs text-neutral-400">Medium</p>
                                            <p className="text-sm font-semibold text-neutral-700">{medium}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Quick apply CTA card */}
                            <div className="bg-primary text-primary-content rounded-xl p-6 flex flex-col gap-3">
                                <p className="text-sm font-semibold opacity-80">Interested in this tuition?</p>
                                <p className="text-2xl font-bold">৳{expectedSalary}<span className="text-sm font-normal opacity-70"> /month</span></p>
                                <button
                                    onClick={() => document.getElementById(`apply_modal_${_id}`).showModal()}
                                    className="btn bg-white text-primary shadow-none btn-sm"
                                >
                                    Apply Now
                                </button>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Applications */}
                <div className="bg-white rounded-xl border border-neutral-200 p-6">
                    <h2 className="text-sm font-semibold text-neutral-600 uppercase tracking-widest mb-4">
                        Applications ({applications.length})
                    </h2>
                    {applications.length === 0 ? (
                        <p className="text-sm text-neutral-600">No applications yet.</p>
                    ) : (
                        <div className="flex flex-col gap-4">
                            {applications.map(app => (
                                <div
                                    key={app._id}
                                    className="bg-neutral-50 rounded-xl border border-neutral-300 p-4 hover:border-neutral-500 hover:shadow-xl hover:scale-101 transition duration-150"
                                >
                                    {/* Top row — name + salary */}
                                    <div className="flex justify-between items-start">

                                        <div className='flex space-x-2'>
                                            <div className="avatar">
                                                <div className="w-16 rounded">
                                                    <img src={app.TutorImage} />
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-semibold text-primary capitalize">{app.name}</h3>
                                                <p className="text-sm text-neutral-600">{app.email}</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-sm font-bold text-primary">৳{app.expectedSalary}</p>
                                            <p className="text-sm text-neutral-600">/month</p>
                                        </div>
                                    </div>

                                    <div className="divider my-2"></div>

                                    {/* Bottom row — badges */}
                                    <div className="flex flex-wrap gap-2">
                                        <span className="badge badge-ghost badge-sm">💼 {app.qualifications}</span>
                                        <span className="badge badge-ghost badge-sm">🕐 {app.experience}</span>
                                    </div>

                                    <div className="flex gap-2 mt-3">
                                        <button className="btn btn-sm hover:bg-primary hover:text-white">
                                            View Profile
                                        </button>
                                        <button className="btn btn-sm hover:bg-primary hover:text-white">
                                            Accept
                                        </button>
                                        <button className="btn btn-sm hover:bg-primary hover:text-white">
                                            Reject
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* ── Apply Modal ── */}
            <dialog id={`apply_modal_${_id}`} className="modal">
                <div className="modal-box max-w-md">
                    <h3 className="text-lg font-semibold mb-1">Apply for Tuition</h3>
                    <p className="text-sm text-neutral-500 mb-5">{classGrade} · {district}</p>

                    <form onSubmit={handleSubmit(handleApplyNow)} className="flex flex-col gap-4">
                        <div className="avatar">
                            <div className="w-16 rounded">
                                <img src={user?.photoURL} />
                            </div>
                        </div>
                        <div>
                            <label className="text-xs font-medium text-neutral-500 uppercase tracking-wide">Name</label>
                            <input type="text"
                                {...register("name", { required: "Name is required" })}
                                defaultValue={user?.displayName || ''}
                                // readOnly
                                className="input input-bordered w-full mt-1 bg-neutral-100" />
                        </div>
                        <div>
                            <label className="text-xs font-medium text-neutral-500 uppercase tracking-wide">Email</label>
                            <input type="email"
                                {...register("email", { required: "Email is required" })}
                                defaultValue={user?.email || ''}
                                // readOnly
                                className="input input-bordered w-full mt-1 bg-neutral-100" />
                        </div>
                        <div>
                            <label className="text-xs font-medium text-neutral-500 uppercase tracking-wide">Qualifications</label>
                            <input type="text" {...register("qualifications", { required: "Qualifications is required" })}
                                placeholder="e.g. BSc in Mathematics" className="input input-bordered w-full mt-1" />
                            {errors.qualifications && <p className="text-red-500 text-xs mt-1">{errors.qualifications.message}</p>}
                        </div>
                        <div>
                            <label className="text-xs font-medium text-neutral-500 uppercase tracking-wide">Experience</label>
                            <input type="text" {...register("experience", { required: "Experience is required" })}
                                placeholder="e.g. 2 years tutoring SSC students" className="input input-bordered w-full mt-1" />
                            {errors.experience && <p className="text-red-500 text-xs mt-1">{errors.experience.message}</p>}
                        </div>
                        <div>
                            <label className="text-xs font-medium text-neutral-500 uppercase tracking-wide">Expected Salary (৳/month)</label>
                            <input type="number" {...register("expectedSalary", { required: "Expected salary is required" })}
                                placeholder="e.g. 5000" className="input input-bordered w-full mt-1" />
                            {errors.expectedSalary && <p className="text-red-500 text-xs mt-1">{errors.expectedSalary.message}</p>}
                        </div>
                        <div className="flex justify-end gap-2 mt-2">
                            <button type="button" onClick={() => document.getElementById(`apply_modal_${_id}`).close()}
                                className="btn btn-ghost btn-sm">Cancel</button>
                            <button type="submit" className="btn btn-primary btn-sm">Submit Application</button>
                        </div>
                    </form>
                </div>
                <form method="dialog" className="modal-backdrop"><button>close</button></form>
            </dialog>

        </div>
    );
};

export default TutionDetails;