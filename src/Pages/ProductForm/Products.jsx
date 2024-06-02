import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Product from './Product';

const Products = () => {
    const {profileImage, setProfileImage ,profile, user, userImage, setUserImage} = useContext(AuthContext);
    const [products, setProducts] = useState([]);

        // console.log(products)
    useEffect(()=>{
        const clothWishFunction=async()=>{
            await axios.get('http://127.0.0.1:8000/api/v1/products/',{
                author: user
            })
            .then((response) => {
                // console.log(response);
                setProducts(response.data)
                
              })
              .catch((error) =>{
                console.log(error);
              });
        }
        clothWishFunction();
    },[user]);


    const handleProductDelete=async(id)=>{
        console.log(id)
        await axios.delete(`http://127.0.0.1:8000/api/v1/products/${id}/`, {
          author: user,
          })
          .then((response) => {
            //   console.log(response.data); 
              const productAfterDelete =  products.filter(product => product.product_id !== id)
              setProducts(productAfterDelete)
              
            })
            .catch((error) =>{
              console.log(error);
            });
      }
    


    return (
        <div className="grid grid-cols-3 gap-x-8 gap-y-4 mx-auto w-10/12">
            {
                products.map(product => <Product
                    key={product.product_id}
                    product = {product}
                    
                    handleProductDelete = {handleProductDelete}
                    ></Product>)
            }
        </div>
    );
};

export default Products;