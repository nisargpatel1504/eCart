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
             const req = await axios.get("/api/products");
             setProduct(req.data)
             
        } 
         fetchData();    
     }, []);

    const checkAdmin = () =>{
        if(user.email==="admin@gmail.com"){
               return  <a  href="/api/showProduct">Edit Product</a>     
        }
    }
     return (
    <div className="home">
       
     {checkAdmin()
        
        }
        <div className="home__container">
            <div className="home__row">
                        {
                                product.map((item)=>(
                                    <Product 
                                    
                                    key= {item._id}
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
