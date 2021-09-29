import React,{useEffect, useState} from 'react';
import  './navbar.css';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link, useHistory } from "react-router-dom";
import {useStateValue} from '../Stateprovider';

function Navbar() {
    const [{basket,user},dispatch] = useStateValue();  
    const history = useHistory();
    
    const handleAuth = (e) =>{
        
        if (window.confirm("You sure want to logout")) {
            localStorage.removeItem("user");
            return dispatch({
              type: "SET_USER",
              user: null,
            });
          }
        // if(user){
        //     dispatch({
        //         type : "SET_USER",
        //         user:null,
        //     })
        // }
          history.push('/');
    }
    let str = user.email;
    str = str.substring(0,str.indexOf("@") +0);
    
    return (
        <div className='header'>
        <Link to='/'>
        <strong className="header__text"> eCart</strong>
        </Link>
        <div className='header-search'>
            <input className='header-search-input' type='text'/>
            <SearchIcon className="header-searchIcon" />
        </div>
        <div className='header-nav'></div>
        {
            !user ? (
                <Link to="./users">
                <div className="header-option">
                    <span className="header-optionLine1">Hello</span>
                    <span className="header-optionLine2">Guest</span>
                </div>
                </Link>
            ) : (
                <div className="header-option pointer" onClick={handleAuth}>
                <span className="header-optionLine1">Hello</span>
                <span className="header-optionLine2">{str}</span>
                </div>
            )}

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
