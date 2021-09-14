import React,{useEffect} from 'react'
import './checkout.css'
import Subtotal from './Subtotal';
import CheckoutItems from './CheckoutItems';
import { useStateValue } from '../Stateprovider';


// const cartFromLocalStorage = JSON.parse(localStorage.getItem('basket') || '[]')
const Checkout = () =>  {
    const [{basket},dispatch] = useStateValue();   

    useEffect(()=>{
        localStorage.setItem("basket",JSON.stringify(basket));
    } ,[basket]);


    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <img className="checkout__ad" src="https://m.media-amazon.com/images/I/41xiGNjf6jL.jpg"/>
            
            <div>
                <h2  className='checkout__title'>Your shopping basket</h2>
                {basket.map(item => (
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
            <div className='checkout__right'>
                <Subtotal />
            </div>
        </div>
       
    );
};

export default Checkout;
