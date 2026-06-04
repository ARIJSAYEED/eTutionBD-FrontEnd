import { useQuery } from '@tanstack/react-query';
import React, { use } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { AuthContext } from '../../../Context/Auth/AuthContext';

const Payments = () => {

    const { user } = use(AuthContext);
    const axiosSecure = useAxiosSecure();

    const { data: payments = [], isLoading } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments?email=${user?.email}`);
            return res.data;
        }
    });

    if (isLoading) return (
        <div className="min-h-screen flex items-center justify-center">
            <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
    );

    if (!payments.length) return (
        <div className='flex flex-col justify-center items-center space-y-2 mt-20'>
            <h1 className='text-5xl text-center mt-4'>No payment history found</h1>
        </div>
    );

    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra text-center">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Transaction ID</th>
                        <th>Tuition ID</th>
                        <th>Amount</th>
                        <th>Currency</th>
                        <th>Status</th>
                        <th>Paid At</th>
                    </tr>
                </thead>
                <tbody>
                    {payments.map((payment, i) => (
                        <tr key={payment._id} className='hover:bg-primary/10'>
                            <th>{i + 1}</th>
                            <td className="text-xs text-neutral-400">{payment.transactionId}</td>
                            <td className="text-xs text-neutral-400">{payment.tuitionId}</td>
                            <td className="font-semibold text-primary">৳{payment.amount}</td>
                            <td className="uppercase">{payment.currency}</td>
                            <td>
                                <span className={`badge badge-sm ${payment.paymentStatus === 'paid' ? 'badge-success' : 'badge-warning'}`}>
                                    {payment.paymentStatus}
                                </span>
                            </td>
                            <td className="text-xs text-neutral-400">
                                {new Date(payment.paidAt).toLocaleDateString()}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Payments;