import React,{useState , useEffect} from 'react';
import './home.css';
import Product from './Product.js';
import axios from '../axios.js';
import {useStateValue} from '../Stateprovider';


function Home() {
    const [product, setProduct ] = useState([]);
    const [ {user} , dispatch ] = useStateValue();
    useEffect(() => {
        async function fetchData(){
             const req = await axios.get("/");
             setProduct(req.data)
        } 
         fetchData();    
     }, []);

     
    
     return (
        
    <div className="home">

             <a  href="editProduct">Edit Product</a>
            
        <div className="home__container">
            <div className="home__row">
                        {
                                product.map((item)=>(
                                    <Product 
                                    
                                    key= {item.title}
                                    title={item.title}
                                    price={item.price}
                                    image={item.image}
                                    rating={item.rating}
                                    
                                    />
                                    ))
                            }                
            
            </div>
        </div>
    </div>
    )
}

export default Home;
