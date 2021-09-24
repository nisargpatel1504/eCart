import React,{useEffect,useState} from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import axios from '../axios.js';
import { Link, useHistory } from 'react-router-dom';
import './showproduct.css'
import Editproduct from './Editproduct.js';

function Showproducts() {
    const [product, setProduct ] = useState([]); 
     const history = useHistory();   
      useEffect(() => {
          
        async function fetchData(){
             const req = await axios.get("/api/products");
             setProduct(req.data)
        } 
         fetchData();    
     }, [product]);    


     const editProduct = (id,e) =>{
         e.preventDefault();
         history.push('/Editproduct')
               
     }

     const deleteRow = async(id, e) =>{  
                e.preventDefault();
                await axios.delete(`api/products/${id}`)   
                alert(`Product ${id}Deleted`)
        }
        
      
    return (
        <div>
            <Link to={'/Editproduct'}>
                <button className="btnclick"> Click Me </button>
            </Link>
       
             <table class="table table-striped table-dark">
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
                            <DeleteIcon onClick={(e) => deleteRow(item._id, e)}/></td>
                        <td>
                            <EditIcon onClick={(e) => editProduct(item._id, e)} />
                        </td>
                        </tr>
                        </tbody>
                    )) }
                    
            </table>

        </div>
    )
}

export default Showproducts
