import React, { useState} from 'react';

const CartCard = (props) => {

    const { toCart, setToCart, item } = props;
    const [quantity, setQuantity] = useState(item[1])

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
    console.log(toCart)

    const onRemove = ( accessory ) => {
        const exist = toCart.find((x) => x.id === accessory.id);
        // if 1 remove it from the list
        if(exist.qty === 1) {
            setToCart(toCart.filter((x) => x.id !== accessory.id))
            // if greater than 1 decrease the quantity
        } else {
            setToCart(
                toCart.map((x) =>
                    x.id === accessory.id ? {...exist, qty: exist.qty - 1} : x
                )
            );
        }
    };
    return (
        <div key={item._id} className="row">
        <div>
            {item[0].name}
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
            {quantity}
        </div>
        <div>
            {quantity * item[0].price.toFixed(2)}
        </div>
    </div>
    )
};

export default CartCard;