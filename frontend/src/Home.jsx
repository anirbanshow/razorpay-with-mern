import React from 'react';
import Card from './Card';
import axios from 'axios';

const Home = () => {

    const checkoutHandler = async (amount) => {

        const { data: { key } } = await axios.get("http://localhost:4000/api/getkey");

        const { data: { order } } = await axios.post("http://localhost:4000/api/checkout", {
            amount
        });

        const options = {
            key,
            amount: order.amount,
            currency: "INR",
            name: "Acme Corp",
            description: "Test Transaction",
            image: "https://example.com/your_logo",
            order_id: order.id,
            callback_url: "http://localhost:4000/api/paymentVerification",
            prefill: {
                name: "Gaurav Kumar",
                email: "gaurav.kumar@example.com",
                contact: "9000090000"
            },
            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
                "color": "#3399cc"
            }
        };

        var razor = new window.Razorpay(options);
        razor.open();
    }

    return (
        <div className="container pt-5">
            <div className="row justify-content-center">
                <div className="col-md-3">

                    <Card
                        amount={500}
                        checkoutHandler={checkoutHandler}
                    />

                </div>
            </div>
        </div>
    )
}

export default Home;