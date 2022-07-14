import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ACCESSORIES } from "../../utils/queries";



import {
    CCard,
    CCardImage,
    CCardBody,
    CCardTitle,
    CCardText,
    CButton
} from "@coreui/react";

export default function AccessoryCard(props) {

    const { loading, error, data } = useQuery(QUERY_ACCESSORIES);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    // handle transfer to cart
    const handleButtonSubmit = async (event, accessoryObj) => {
        event.preventDefault();
        if (props.toCart && props.toCart.length !== 0) {
            let cart = [...props.toCart]
            cart.push([accessoryObj, 1])
            props.setToCart(cart)
        } else {
            props.setToCart([[accessoryObj, 1]])
        }
    };

    return (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4 dinodiv">
        {data.accessories.map(accessory => (
            <CCard style={{ width: "18rem" }} className="dinocard">
                 <CCardTitle><h2 className="dinoh1">{accessory.name}</h2></CCardTitle>
                <CCardImage orientation="top" className="dinoimage" src={accessory.imageURL} />
                <CCardBody>
                <CCardText><p className="dinospecifictitle">Price</p> {accessory.price}</CCardText>
                <CCardText><p className="dinospecifictitle">Item Description</p> {accessory.description}</CCardText>
                </CCardBody>
                <CCardBody>
                    <CButton onClick={(e) => handleButtonSubmit(e, accessory) } value={props.toCart}>Add To Cart</CButton>
                </CCardBody>
            </CCard>
        ))}
        </div>
    )
}