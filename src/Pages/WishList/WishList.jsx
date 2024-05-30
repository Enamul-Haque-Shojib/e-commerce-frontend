import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Wish from "../Wish/Wish";


const WishList = () => {
    const {user} = useContext(AuthContext);
    const [clothWishes, setClothWishes] = useState([]);
    // console.log('>>>>>>>>>>>',clothWishes);
    useEffect(()=>{
        const clothWishFunction=async()=>{
            await axios.post(`https://e-commerce-backend-8r60.onrender.com/cloth/clothwishlist/`,{
                author: user
            })
            .then((response) => {
                // console.log(response);
                setClothWishes(response.data)
                
              })
              .catch((error) =>{
                console.log(error);
              });
        }
        clothWishFunction();
    },[user]);


    const handleWishDelete=async(id)=>{
        // console.log('delete cart')
        await axios.post('https://e-commerce-backend-8r60.onrender.com/cloth/clothwishlistdelete/', {
          product_id: id,
          author: user,
          })
          .then((response) => {
              console.log(response); 
              const wishAfterDelete =  clothWishes.filter(cloth => cloth.id !== id)
              setClothWishes(wishAfterDelete)
              
            })
            .catch((error) =>{
              console.log(error);
            });
      }


    return (
        <div className="py-14">
            <h1>Wish List</h1>
            <div className="grid grid-cols-3 gap-x-8 gap-y-4 mx-auto w-10/12">
            {
                clothWishes.map(wish=><Wish key={wish.id} wish={wish} handleWishDelete={handleWishDelete}></Wish>)
            }
            </div>
        </div>
    );
};

export default WishList;