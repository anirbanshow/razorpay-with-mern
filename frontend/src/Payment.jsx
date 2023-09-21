import React from 'react';
import { useSearchParams } from "react-router-dom";

const Payment = () => {

    const searchParams = useSearchParams()[0];
    const reference = searchParams.get("reference");

    return (
        <div className="container text-center pt-5">
            <h1>Payment Successfull</h1>
            <p>Order Id: ${reference} </p>
        </div>
    )
}

export default Payment;