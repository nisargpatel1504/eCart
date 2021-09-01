import React,{useEffect,useState} from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import axios from '../axios.js';

function Showproducts() {
    const [product, setProduct ] = useState([]); 
        
      useEffect(() => {
          
        async function fetchData(){
             const req = await axios.get("/");
             setProduct(req.data)
        } 
         fetchData();    
     }, []);    


     const updateProduct = (id) =>{
         
     }

     const deleteRow = async(id, e) =>{  
                e.preventDefault();
                await axios.delete(`/${id}`)   
                alert(`Product ${id}Deleted`)
        }
        
      
    return (
        <div>
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
                            <EditIcon  />
                        </td>
                        </tr>
                        </tbody>
                    )) }
                    
            </table>

        </div>
    )
}

export default Showproducts
