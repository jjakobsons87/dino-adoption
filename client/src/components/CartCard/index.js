import React, { useState} from 'react';

const CartCard = (props) => {

    const { toCart, setToCart, item } = props;
    const [quantity, setQuantity] = useState(item[1])
    let itemValue = parseFloat(item[0].price).toFixed(2)
    let shipping = 5;

    const onAdd = (accessory) => {
        if (toCart) {
            setToCart(
                toCart.map((x) =>
                    x[0]._id === accessory[0]._id ? [{...x[0]}, x[1] + 1] : x
                )
            );
            setQuantity(prev => prev + 1);
        }
    };

    const onRemove = ( accessory ) => {
        // if 1 remove it from the list
        if(accessory[1] - 1 === 0) {
            setToCart(toCart.filter((x) => x[0]._id !== accessory[0]._id))
            // if greater than 1 decrease the quantity
        } else {
            setToCart(
                toCart.map((x) =>
                    x[0]._id === accessory[0]._id ? [{...x[0]}, x[1] - 1] : x
                )
            );
            setQuantity(prev => prev - 1);
        }
    };

    return (
        <div key={item._id} className="cart-flex">
            <div className="cart-img">
                <img 
                    src={item[0].imageURL} alt={item.name}
                />
            </div>

            <div className="cart-data">
                <div className="cart-item-name">
                    {item[0].name}
                </div>
                <div>
                    {item[0].description}
                </div>
                <div>
                    <button onClick={()=> onAdd(item)} className="add">
                        +
                    </button>
                    <button onClick={()=> onRemove(item)} className="remove">
                        -
                    </button>
                </div>
                <div className="quantity">
                    Quantity: {quantity}
                </div>
                <div>
                    Item Cost: ${quantity * itemValue}
                </div>
                <div>
                    
                    Shipping: ${shipping}
                </div>
                <div>
                    <strong>Due At Checkout: ${quantity * itemValue + shipping}</strong>
                </div>
            </div>
        </div>
    )
};

export default CartCard;