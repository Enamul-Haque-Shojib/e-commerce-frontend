import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({product,handleProductDelete}) => {
    const {product_id ,title,price, quantity, images} = product;
    console.log(images[0].image)
    return (
        <div className="text-base">
           
    <div className="card w-80 h-full bg-white shadow-xl">
  <figure className="p-5"><img src={`http://127.0.0.1:8000/${images[0].image}`} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>Price: {price}</p>
    <p>Quantity: {quantity}</p>
    <Link to={`/products/${product_id}`}>
            <button className="btn btn-warning text-white ">Update</button>
            </Link>
    <button className="btn btn-error text-white" onClick={()=>handleProductDelete(product_id)}>Delete</button>
    
    
  </div>
</div>
        </div>
    );
};

export default Product;