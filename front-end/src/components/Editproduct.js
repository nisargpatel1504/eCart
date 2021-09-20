import React,{useState,useEffect} from 'react'
import './Editproduct.css';
import axios from '../axios.js';
import { useHistory } from 'react-router-dom';


function Editproduct() {
    const [product, setProduct ] = useState([]); 
    const history = useHistory();

    const handleChange = (e) => {
        const {name , value} = e.target
        setProduct({
            ...product,
            [name] : value,
        })
    }
     const addProduct = async (e) => {
            e.preventDefault();
            const req = await axios.post("/api/products",product)
            alert("Product has been added");
            history.push("./showProduct");
    }

    const updateProduct = async() =>{

    }

    
    return (
      <div className="editproduct">
                
                    <form onSubmit={addProduct} className="form">
                        <div className="form-group">
                            <lable>Title:</lable>
                            <input value={product.title} name="title" onChange={handleChange}  className="form-control" required></input>

                        </div>
                        <div className="form-group">
                            <lable>Price:</lable>
                            <input value={product.price} name="price" onChange={handleChange} className="form-control" required></input>

                        </div>
                        <div className="form-group">
                            <lable>Rating:</lable>
                            <input value={product.rating} name="rating" onChange={handleChange} className="form-control" required></input>

                        </div>
                        <div className="form-group">
                            <lable>Image:</lable>
                            <input value={product.image} name="image" onChange={handleChange} className="form-control" required></input>

                        </div>
                        <button className="btn btn-primary">Add product</button>

                    </form>
                    <button className="btn btn-primary" onClick={updateProduct}>Update Product</button>

        </div>
    )
}
export default Editproduct
