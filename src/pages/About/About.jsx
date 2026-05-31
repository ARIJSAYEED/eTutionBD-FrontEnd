import React from 'react';
import { FaUsers, FaBookOpen, FaBullseye } from 'react-icons/fa';

const About = () => {
    return (
        <div className="bg-base-100">

            {/* Hero */}
            <section className="py-16 bg-base-200">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold text-base-content mb-4">
                        About <span className="text-primary">eTuitionBD</span>
                    </h1>
                    <p className="text-base-content/60 text-lg max-w-2xl mx-auto">
                        We are Bangladesh's trusted online platform connecting students with
                        qualified home tutors across the country.
                    </p>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-14">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-base-content mb-4">Our Story</h2>
                            <p className="text-base-content/60 mb-3">
                                eTuitionBD was founded with a simple goal — make quality education
                                accessible to every student in Bangladesh, from Dhaka to the most
                                remote districts.
                            </p>
                            <p className="text-base-content/60">
                                We started small, but today we connect thousands of students with
                                verified, experienced tutors every single day. Our platform makes
                                finding the right tutor fast, safe, and simple.
                            </p>
                        </div>
                        <div className="bg-base-200 rounded-2xl p-8 text-center">
                            <p className="text-6xl font-extrabold text-primary mb-2">2019</p>
                            <p className="text-base-content/60">Year Founded</p>
                            <div className="divider"></div>
                            <p className="text-6xl font-extrabold text-primary mb-2">64</p>
                            <p className="text-base-content/60">Districts Covered</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission, Vision, Values */}
            <section className="py-14 bg-base-200">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-base-content text-center mb-10">
                        What We Stand For
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="card border border-neutral-200 hover:border-primary hover:shadow-xl hover:scale-105 transition duration-150 p-6 text-center">
                            <div className="flex justify-center mb-4">
                                <FaBullseye className="text-4xl text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-base-content mb-2">Our Mission</h3>
                            <p className="text-base-content/60 text-sm">
                                To make quality tutoring accessible and affordable for every student
                                in Bangladesh.
                            </p>
                        </div>

                        <div className="card border border-neutral-200 hover:border-primary hover:shadow-xl hover:scale-105 transition duration-150 p-6 text-center">
                            <div className="flex justify-center mb-4">
                                <FaBookOpen className="text-4xl text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-base-content mb-2">Our Vision</h3>
                            <p className="text-base-content/60 text-sm">
                                A Bangladesh where no student is left behind due to a lack of
                                access to the right teacher.
                            </p>
                        </div>

                        <div className="card border border-neutral-200 hover:border-primary hover:shadow-xl hover:scale-105 transition duration-150 p-6 text-center">
                            <div className="flex justify-center mb-4">
                                <FaUsers className="text-4xl text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-base-content mb-2">Our Values</h3>
                            <p className="text-base-content/60 text-sm">
                                Trust, transparency, and a genuine commitment to student success
                                guide everything we do.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-14">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">

                        <div className="bg-base-200 rounded-2xl py-8 px-4">
                            <p className="text-3xl font-extrabold text-primary">10,000+</p>
                            <p className="text-base-content/60 text-sm mt-1">Students</p>
                        </div>

                        <div className="bg-base-200 rounded-2xl py-8 px-4">
                            <p className="text-3xl font-extrabold text-primary">1,500+</p>
                            <p className="text-base-content/60 text-sm mt-1">Tutors</p>
                        </div>

                        <div className="bg-base-200 rounded-2xl py-8 px-4">
                            <p className="text-3xl font-extrabold text-primary">50+</p>
                            <p className="text-base-content/60 text-sm mt-1">Subjects</p>
                        </div>

                        <div className="bg-base-200 rounded-2xl py-8 px-4">
                            <p className="text-3xl font-extrabold text-primary">98%</p>
                            <p className="text-base-content/60 text-sm mt-1">Satisfaction</p>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
};

export default About;