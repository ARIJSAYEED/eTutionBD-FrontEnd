import React, { use } from 'react';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Context/Auth/AuthContext';

const PostNewTuition = () => {
    const { user } = use(AuthContext);
    console.log(user?.email)

    const { register, handleSubmit } = useForm();
    const axiosSecure = useAxiosSecure()

    const handlePosttuition = (data) => {

        console.log(data)

        axiosSecure.post('/tuitions', data)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "tuition has been Posted",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className='my-4'>
            <div className='text-center'>
                <h1 className="text-6xl text-center font-semibold text-primary mb-2">Post New Tuition</h1>
                <p>Please fill this from with accurate information to find tutor fast</p>
            </div>
            <div className="card bg-base-100 w-full max-w-2xl shrink-0 shadow-2xl mx-auto">
                <div className='card-body'>
                    <form onSubmit={handleSubmit(handlePosttuition)}>
                        <fieldset className='fieldset space-y-4'>

                            {/* Student Name */}
                            <div>
                                <label className='text-[16px] text-primary font-semibold'>Student Name</label>
                                <input
                                    {...register('studentName')}
                                    className='input w-full' type="text" placeholder="e.g. Rahim Uddin" />
                            </div>

                            {/* Student Email */}
                            <div>
                                <label className='text-[16px] text-primary font-semibold'>Student Email</label>
                                <input
                                    {...register('studentEmail')}
                                    className='input w-full'
                                    type="email"
                                    placeholder="e.g. student@email.com"
                                    defaultValue={user?.email}
                                    readOnly
                                />
                            </div>

                            {/* Guardian Phone */}
                            <div>
                                <label className='text-[16px] text-primary font-semibold'>Guardian Phone Number</label>
                                <input
                                    {...register('guardianPhone')}
                                    className='input w-full' type="tel" placeholder="e.g. 01XXXXXXXXX" />
                            </div>

                            {/* Location */}
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className='text-[16px] text-primary font-semibold'>District</label>
                                    <input
                                        {...register('district')}
                                        className='input w-full' type="text" placeholder="e.g. Rajshahi" />
                                </div>
                                <div>
                                    <label className='text-[16px] text-primary font-semibold'>Area / Upazila</label>
                                    <input
                                        {...register('area')}
                                        className='input w-full' type="text" placeholder="e.g. Shibganj" />
                                </div>
                            </div>

                            {/* Class & Medium */}
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className='text-[16px] text-primary font-semibold'>Class / Grade</label>
                                    <select
                                        {...register('classGrade')}
                                        className='select w-full'>
                                        <option disabled defaultValue>Select class</option>
                                        <option>Class 1</option>
                                        <option>Class 2</option>
                                        <option>Class 3</option>
                                        <option>Class 4</option>
                                        <option>Class 5</option>
                                        <option>Class 6</option>
                                        <option>Class 7</option>
                                        <option>Class 8</option>
                                        <option>Class 9</option>
                                        <option>Class 10 (SSC)</option>
                                        <option>Class 11-12 (HSC)</option>
                                        <option>O-Level</option>
                                        <option>A-Level</option>
                                        <option>University</option>
                                    </select>
                                </div>
                                <div>
                                    <label className='text-[16px] text-primary font-semibold'>Medium</label>
                                    <select
                                        {...register('medium')}
                                        className='select w-full'>
                                        <option disabled defaultValue>Select medium</option>
                                        <option>Bangla Medium</option>
                                        <option>English Medium</option>
                                        <option>English Version</option>
                                        <option>Madrasa</option>
                                    </select>
                                </div>
                            </div>

                            {/* Subjects */}
                            <div>
                                <label className='text-[16px] text-primary font-semibold'>Subjects Needed</label>
                                <input
                                    {...register('subjects')}
                                    className='input w-full' type="text" placeholder="e.g. Math, Physics, English" />
                            </div>

                            {/* Days & Time */}
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className='text-[16px] text-primary font-semibold'>Days Per Week</label>
                                    <select
                                        {...register('daysPerWeek')}
                                        className='select w-full'>
                                        <option disabled defaultValue>Select days</option>
                                        <option>1 day/week</option>
                                        <option>2 days/week</option>
                                        <option>3 days/week</option>
                                        <option>4 days/week</option>
                                        <option>5 days/week</option>
                                        <option>6 days/week</option>
                                        <option>Everyday</option>
                                    </select>
                                </div>
                                <div>
                                    <label className='text-[16px] text-primary font-semibold'>Preferred Time</label>
                                    <select
                                        {...register('preferredTime')}
                                        className='select w-full'>
                                        <option disabled defaultValue>Select time</option>
                                        <option>Morning (6am–10am)</option>
                                        <option>Noon (10am–2pm)</option>
                                        <option>Afternoon (2pm–5pm)</option>
                                        <option>Evening (5pm–9pm)</option>
                                        <option>Flexible</option>
                                    </select>
                                </div>
                            </div>

                            {/* Tutoring Mode */}
                            <div>
                                <label className='text-[16px] text-primary font-semibold'>Tutoring Mode</label>
                                <select
                                    {...register('tutoringMode')}
                                    className='select w-full'>
                                    <option disabled defaultValue>Select mode</option>
                                    <option>At student's home</option>
                                    <option>At tutor's place</option>
                                    <option>Online</option>
                                    <option>Flexible</option>
                                </select>
                            </div>

                            {/* Salary */}
                            <div>
                                <label className='text-[16px] text-primary font-semibold'>Expected Salary (BDT / month)</label>
                                <input
                                    {...register('expectedSalary')}
                                    className='input w-full' type="number" placeholder="e.g. 3000" />
                            </div>

                            {/* Tutor Gender & Type */}
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className='text-[16px] text-primary font-semibold'>Preferred Tutor Gender</label>
                                    <select
                                        {...register('tutorGender')}
                                        className='select w-full'>
                                        <option disabled defaultValue>Select gender</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Any</option>
                                    </select>
                                </div>
                                <div>
                                    <label className='text-[16px] text-primary font-semibold'>Preferred Tutor Type</label>
                                    <select
                                        {...register('tutorType')}
                                        className='select w-full'>
                                        <option disabled defaultValue>Select type</option>
                                        <option>University Student</option>
                                        <option>School / College Teacher</option>
                                        <option>Professional Tutor</option>
                                        <option>Any</option>
                                    </select>
                                </div>
                            </div>

                            {/* Special Instructions */}
                            <div>
                                <label className='text-[16px] text-primary font-semibold'>Special Instructions</label>
                                <textarea
                                    {...register('specialInstructions')}
                                    className='textarea w-full h-24' placeholder="e.g. Student is weak in Algebra, needs HSC preparation..."></textarea>
                            </div>

                            {/* Submit */}
                            <button className='btn btn-primary w-full mt-2' type="submit">
                                Post Tuition
                            </button>

                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PostNewTuition;