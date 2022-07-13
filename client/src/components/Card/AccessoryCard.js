import React, { useState } from "react";
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
        console.log(accessoryObj)
        if (props.toCart && props.toCart.length !== 0) {
            let cart = [...props.toCart]
            cart.push([accessoryObj, 1])
            props.setToCart(cart)
        } else {
            props.setToCart([[accessoryObj, 1]])
        }
    };
    console.log(props.toCart)

    return (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4">
        {data.accessories.map(accessory => (
            <CCard style={{ width: "18rem" }}>
                <CCardImage orientation="top" src={accessory.imageURL} />
                <CCardBody>
                    <CCardTitle>{accessory.name}</CCardTitle>
                    <CCardText>{accessory.price}</CCardText>
                    <CCardText>{accessory.description}</CCardText>
                </CCardBody>
                <CCardBody>
                    <CButton onClick={(e) => handleButtonSubmit(e, accessory) } value={props.toCart}>Add To Cart</CButton>
                </CCardBody>
            </CCard>
        ))}
        </div>
    )
}