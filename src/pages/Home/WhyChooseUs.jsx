import React from 'react';
import { FaChalkboardTeacher, FaCalendarAlt, FaShieldAlt } from 'react-icons/fa';

const features = [
    {
        icon: <FaChalkboardTeacher className="text-4xl text-primary" />,
        title: 'Expert Tutors',
        description: 'All our tutors are verified, experienced, and rated by real students.',
    },
    {
        icon: <FaCalendarAlt className="text-4xl text-primary" />,
        title: 'Flexible Schedule',
        description: 'Book sessions at any time that works for you — morning, evening, or weekend.',
    },
    {
        icon: <FaShieldAlt className="text-4xl text-primary" />,
        title: 'Safe & Trusted',
        description: 'Secure payments, verified profiles, and a safe learning environment.',
    },
];

const WhyChooseUs = () => {
    return (
        <section className="py-16 bg-base-100">
            <div className="max-w-5xl mx-auto px-4">


                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-base-content mb-3">
                        Why Choose <span className="text-primary">eTuitionBD?</span>
                    </h2>
                    <p className="text-base-content/60 text-lg">
                        Bangladesh's most trusted home tuition platform.
                    </p>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div key={index} className="card border bg-base-200 border-neutral-200 shadow-sm text-center p-6 hover:border-primary hover:shadow-xl hover:scale-105 transition duration-150">
                            <div className="flex justify-center mb-4">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-base-content mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-base-content/60 text-sm">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default WhyChooseUs;