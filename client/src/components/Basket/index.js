import React from 'react';


const Basket = (props) => {

const {cartItems, onAdd, onRemove } = props;

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
        </div>
    )
};

export default Basket;