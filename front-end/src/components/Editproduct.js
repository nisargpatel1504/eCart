import React,{useState,useEffect} from 'react'
import './Editproduct.css';
import axios from '../axios.js';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Showproducts from './Showproducts';

function Editproduct() {
    const [product, setProduct ] = useState([]); 


    // useEffect(() => {
    //     async function fetchData(){
    //          const req = await axios.get("/");
    //          setProduct(req.data)
    //     } 
    //      fetchData();    
    //  }, []); 

    const handleChange = (e) => {
        const {name , value} = e.target
        setProduct({
            ...product,
            [name] : value,
        })
    }
     const addProduct = async (e) => {
            e.preventDefault();
            const req = await axios.post("/",product)
            alert("Product has been added");
    }

    
    return (
      <div className="editproduct">
                {console.log("Product",product)}
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
                        <button className="btn btn-primary">Click</button>
                    </form>

           <Showproducts />
           {/* <table class="table table-striped table-dark">
                    <thead>
                        <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Title</th>
                        <th scope="col">Price</th>
                        <th scope="col">Rating</th>
                        <th scope="col">Image</th>
                        <th scope="col">Delete</th>
                        <th scope="col">Edit</th>
                        </tr>
                    </thead>
                    { product&&product.map((item)=>(
                                   
                        <tbody>
                        <tr>
                        <td scope="row">{item._id}</td>
                        <td>{item.title}</td>
                        <td>${item.price}</td>
                        <td>{item.rating}</td>
                        <td>{item.image}</td>
                        <td>
                            <DeleteIcon /></td>
                        <td>
                            <EditIcon />
                        </td>
                        </tr>
                        </tbody>
                    )) }
                    
            </table>
 */}

        </div>
    )
}
export default Editproduct
