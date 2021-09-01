import React from 'react'

const  Todo = ({product}) => {
    return (
          
        product.map((p) => (
            <div className="todo">
                <h1>{p.name}</h1>
                <p>{p.price}</p>
                <p>{p.rating}</p>
                <img src={p.url} />
            
            </div>
        ))
        
);
};

export default Todo
