import React, { useState } from 'react';
import './product.css';
import { Link, useHistory } from "react-router-dom";
import {useStateValue} from '../Stateprovider';

function Product({key,title , price , image  , rating }) {
    const [ {basket,user} , dispatch ] = useStateValue();
    const history = useHistory();
    
    const addToBasket = () => {
            Object.keys(user)?.length ? 
            dispatch({
                type: 'ADD_TO_BASKET',
                item:{
                    id:key,
                    title:title,
                    image:image,
                    price:price,
                    rating:rating,
                },
            }) : history.push("/Login");
            
                
    }
    
    return (
        <div className='product'>
                
            <div className='product__info'>
                    <p className="product__details"> {title} </p>
                    <p className='product__price'>
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>
                    <div className='product__rating'>
                    {Array(rating).fill().map((_, i)=>(
                            <p>🌟</p>
                    ))}
                    </div>
            </div>
            <img src={image} alt=""></img>
            <button onClick={addToBasket} >Add to basket</button>
        </div>
        )
}

export default Product
