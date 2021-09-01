import React from 'react'
import './subtotal.css'; 
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../Stateprovider';
import {getBasketTotal} from '../Reducer';

function Subtotal() {
const [{basket},dispatch] = useStateValue();
console.log(getBasketTotal);
    return (
        <div className="subtotal">
             <CurrencyFormat 
            renderText={(value) => (
              <>
                <p>
                    Subtotal ({basket.length} items) : <strong>{value}</strong>
                </p>
                <small className="Subtotal__gift">
                    <input type="checkbox" />This order contains a gift
                </small>
                </>
            )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeprator={true}
                prefix={"$"}

                />
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
