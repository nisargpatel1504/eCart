import React from 'react'
import './payment.css';
import CheckoutItems from './CheckoutItems';
import { useStateValue } from '../Stateprovider';
import { Link } from "react-router-dom";
// import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';


function Payment() {
    const [{ basket , user }, dispatch] = useStateValue();

    // const stripe = useStripe();
    // const elements = useElements();
    return (
        <div className='payment'>
        <div className='payment__container'>
            <h2>
                Checkout(
                    <Link to='/checkout'> {basket?.length } items</Link>
                    )
            </h2>
            <div className="payment__section">
                <div className='payment__title'>
                        <h3>Delivery Address</h3>
                </div>
                <div className="payment__address">
                        <p> {user?.email} </p>
                        <p></p>
                        <p></p>
                </div>
            </div>
            <div className="payment__section">
                    <div className='payment__title'>
                                <h3>Reviews items and delivery</h3>
                    </div>
                    <div className='payment__items'> 
                        {
                        basket.map(item => (
                            <CheckoutItems
                                id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating} 
                            />
                            ))}
                    </div>
            </div> 

            <div className="payment__section">
                    <div className='payment__title'>
                                <h3>Payment Method</h3>
                    </div>
                    <div className='payment__details'>
                            <form>
                               
                            </form>
                    </div>
            </div>

        </div>
        </div>
    )
}

export default Payment
