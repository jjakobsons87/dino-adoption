import React, { useState } from 'react';

//components
import Basket from '../components/Basket';
import CartHero from '../components/CartHero';

// icons
import { SiVisa, SiMastercard, SiDiscover, SiAmericanexpress, SiBitcoin } from "react-icons/si";

const Cart = (props) => {

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
                {props.toCart &&
                    <Basket
                        toCart={props.toCart}
                    />
                }
            </div>
            <div className="icons">
                <div className="cart-icons">
                    <SiVisa></SiVisa>
                </div>
                <div className="cart-icons">
                    <SiMastercard></SiMastercard>
                </div>
                <div className="cart-icons">
                    <SiDiscover></SiDiscover>
                </div>
                <div className="cart-icons">
                    <SiAmericanexpress></SiAmericanexpress>
                </div>
                <div className="cart-icons">
                    <SiBitcoin></SiBitcoin>
                </div>
            </div>
        </div>
    )
};

export default Cart;