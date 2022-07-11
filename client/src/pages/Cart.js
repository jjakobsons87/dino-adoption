import React, { useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';

//components
import Basket from '../components/Basket';
import CartHero from '../components/CartHero';

const Cart = (props) => {

    const [cartItems, setCartItems] = useState([]);

    return (
        <div className="cart-container">
            <div className="cart-hero">
                <CartHero></CartHero>
            </div>
            <div className="basket">
                <Basket cartItems={cartItems}></Basket>
            </div>
        </div>
    )
};

export default Cart;