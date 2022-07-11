import React from 'react';


const Basket = (props) => {

const {cartItems} = props;

    return (
        <div>
            <h2>Cart Items</h2>
            <div>
                {cartItems.length === 0 && <div>Cart is Empty</div>}
            </div>
        </div>
    )
};

export default Basket;