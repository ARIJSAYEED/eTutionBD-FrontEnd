import React from 'react';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const PaymentS = () => {
    const [searchParams] = useSearchParams();
    const axiosSecure = useAxiosSecure()
    const sessionId = searchParams.get('session_id')
    console.log(sessionId)

    useEffect(() => {
        if (sessionId) {
            axiosSecure.patch(`/payment-success?session_id=${sessionId}`)
                .then(res => {
                    console.log(res.data)
                })
                .catch(err => console.log(err))
        }
    }, [sessionId, axiosSecure])

    return (
        <div>
            payment was successful
        </div>
    );
};

export default PaymentS;