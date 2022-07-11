import React from 'react';
import { Navigate, useParams } from 'react-router-dom';

//components
import CartItems from '../components/cartItems';

const Cart = (props) => {
    return (
        <div className="cart-container">
            <CartItems/>
        </div>
    )
};

export default Cart;