import React from 'react';


const Basket = (props) => {

const {cartItems, onAdd, onRemove } = props;
const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
const taxPrice = itemsPrice * .14;
const shippingPrice = itemsPrice > 5000 ? 0 : 1000;
const totalPrice = itemsPrice + taxPrice + shippingPrice;

    return (
        <div className="basket-container">
            <h2>Cart Items</h2>
            <div>
                {cartItems.length === 0 && <div>Cart is Empty</div>}
            </div>
            {cartItems.map((item) => (
                <div key={item.id} className="row">
                    <div>
                        {item.name}
                    </div>
                    <div>
                        <button onClick={()=> onAdd(item)} className="add">
                            +
                        </button>
                        <button onClick={()=> onRemove(item)} className="remove">
                            -
                        </button>
                    </div>
                    <div>
                        {item.qty} x ${item.price.toFixed(2)}
                    </div>
                </div>
            ))}
            {cartItems.length !== 0 && (
                <>
                <hr></hr>
                <div className="price">
                    <div>Items Price</div>
                    <div> ${itemsPrice.toFixed(2)}</div>
                </div>
                </>
            )}
        </div>
    )
};

export default Basket;