import React,{useState} from 'react';
import  './navbar.css';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import {useStateValue} from '../Stateprovider';

function Navbar() {
    const [{basket,user},dispatch] = useStateValue();  
    
    
    return (
        
        <div className='header'>
       
        <Link to='/'>
        <strong className="header__text"> E-cart</strong>
        </Link>
        <div className='header-search'>
            <input className='header-search-input' type='text'/>
            <SearchIcon className="header-searchIcon" />
        </div>
        <div className='header-nav'></div>
            <Link to="./Login">
            <div className='header-option'>   
                <span className='header-optionLine1'>Hello  </span>
                <span className='header-optionLine2'>Sign In</span>
             </div>
            </Link>
           
            <div className='header-option'>
            <span className='header-optionLine1'>Returns</span>
            <span className='header-optionLine2'>& Orders</span>
            </div>
           
            <div className='header-option'>
            <span className='header-optionLine1'>Your</span>
            <span className='header-optionLine2'>Prime</span>
            </div>

            <Link to='./Checkout'>
            <div className="header-optionBasket">
                 <ShoppingBasketIcon />
                 <span className="header-optionLineTwo header-basketCount">
                  {basket?.length}
                  
                 </span>
             </div>
             </Link>
             
        </div>
        
    )
}

export default Navbar
