import React, { useState } from 'react';

//components
import Basket from '../components/Basket';
import CartHero from '../components/CartHero';

const Cart = (accessory) => {

    const [cartItems, setCartItems] = useState([]);
    const onAdd = (accessory) => {
        const exist = cartItems.find(x=> x.id === accessory.id);
        if(exist) {
            setCartItems(
                cartItems.map((x) =>
                    x.id === accessory.id ? {...exist, qty: exist.qty + 1} : x
                )
            );
        } else {
            setCartItems([...cartItems, {...accessory, qty: 1 }]);
        }
    };

    const onRemove = ( accessory ) => {
        const exist = cartItems.find((x) => x.id === accessory.id);
        // if 1 remove it from the list
        if(exist.qty === 1) {
            setCartItems(cartItems.filter((x) => x.id !== accessory.id))
            // if greater than 1 decrease the quantity
        } else {
            setCartItems(
                cartItems.map((x) =>
                    x.id === accessory.id ? {...exist, qty: exist.qty - 1} : x
                )
            );
        }
    };

    return (
        <div className="cart-container">
            <div className="cart-hero">
                <CartHero></CartHero>
            </div>
            <div className="basket">
                {/* onAdd adds items to cart */}
                <Basket 
                    onAdd={onAdd}
                    onRemove={onRemove}
                    cartItems={cartItems}>
                </Basket>
            </div>
        </div>
    )
};

export default Cart;