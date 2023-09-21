import React from 'react'

const Card = ({ amount, checkoutHandler }) => {
    return (
        <div className="card text-center">

            <img
                src="https://thedotmode.com/cdn/shop/files/mockup-of-a-t-shirt-hanging-against-a-solid-background-26878.png?v=1686928473&width=823"
                className="card-img-top" alt="checkout"
            />

            <div className="card-body">
                <h5 className="card-title">T-Shirt</h5>
                <p className="card-text">{amount}</p>
                <button className="btn btn-primary" onClick={() => checkoutHandler(amount)}>Buy Now</button>
            </div>
        </div>
    )
}

export default Card;