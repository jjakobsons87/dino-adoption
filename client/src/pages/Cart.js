import React, { useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';

//components
import Basket from '../components/Basket';
import CartHero from '../components/CartHero';

const Cart = (props) => {

    const [cartItems, setCartItems] = useState([]);
    const onAdd = (dino) => {
        const exist = cartItems.find(x=> x.id === dino.id);
        if(exist) {
            setCartItems(
                cartItems.map((x) =>
                    x.id === dino.id ? {...exist, qty: exist.qty + 1} : x
                )
            );
        } else {
            setCartItems([...cartItems, {...dino, qty: 1 }]);
        }
    };

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