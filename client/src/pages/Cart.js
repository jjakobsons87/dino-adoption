import React, { useState } from 'react';

//components
import CartCard from '../components/CartCard';
import CartHero from '../components/CartHero';

// icons
import { SiVisa, SiMastercard, SiDiscover, SiAmericanexpress, SiBitcoin } from "react-icons/si";

const Cart = (props) => {

    const [cartItems, setCartItems] = useState([]);
    const { toCart, setToCart } = props;

    function renderCartItems() {
        return (
        toCart.map((item) => (
            <CartCard toCart={toCart} setToCart={setToCart} item={item} />
        )))
    }

    return (
      <div className="cartBody">
        <div className="cart-container">
            <div className="cart-hero">
                <CartHero></CartHero>
            </div>
            <div className="basket">
                {/* onAdd adds items to cart */}
                {props.toCart &&
        <div className="basket-container">
        <h2 className="cart-title">Cart Items</h2>
        <div>
            {toCart.length === 0 && <div>Cart is Empty</div>}
        </div>
        {toCart && renderCartItems()}
        </div>
                }
            </div>
            {cartItems.length !== 0 && (
                <>
                <hr></hr>
                <div className="subtotal">
                    <div>Items Price</div>
                    {/* <div> ${itemsPrice.toFixed(2)}</div> */}
                </div>
                <div className="subtotal">
                    <div>Tax Price</div>
                    {/* <div> ${taxPrice.toFixed(2)}</div> */}
                </div>
                <div className="subtotal">
                    <div>Shipping Price</div>
                    {/* <div> ${shippingPrice.toFixed(2)}</div> */}
                </div>
                <div className="total-price">
                    <div><strong>Total Price</strong></div>
                    {/* <div><strong> ${totalPrice.toFixed(2)} </strong></div> */}
                </div>
                </>
            )}
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
        </div>
    )
};

export default Cart;