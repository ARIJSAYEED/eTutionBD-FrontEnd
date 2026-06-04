import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const PaymentS = () => {
    const [searchParams] = useSearchParams();
    const [paymentInfo, setPaymentInfo] = useState({});
    const axiosSecure = useAxiosSecure()
    const sessionId = searchParams.get('session_id')
    
    // console.log(sessionId)

    useEffect(() => {
        if (sessionId) {
            axiosSecure.patch(`/payment-success?session_id=${sessionId}`)
                .then(res => {
                    console.log(res.data)
                    setPaymentInfo({
                        transactionId: res.data.transactionId,
                        // trackingId: res.data.trackingId
                    })
                })
                .catch(err => console.log(err))
        }
    }, [sessionId, axiosSecure])

    return (
        <div>
            <h1>payment was successful</h1>
            <p>transactionId- {paymentInfo.transactionId}</p>
        </div>
    );
};

export default PaymentS;