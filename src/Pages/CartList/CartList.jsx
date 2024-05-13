import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";
import Cart from "../Cart.jsx/Cart";



const CartList = () => {
    const {user} = useContext(AuthContext);
    // console.log('NNNNNNNN',user);
    const [clothCarts, setClothCarts] = useState([]);
    // console.log('>>>>>>>>>>>',clothCarts);
    useEffect(()=>{
        const clothWishFunction=async()=>{
            await axios.post(`https://enamulhaque.pythonanywhere.com/cloth/clothcartlist/`,{
                author: user
            })
            .then((response) => {
                // console.log(response);
                setClothCarts(response.data)
                
              })
              .catch((error) =>{
                console.log(error);
              });
        }
        clothWishFunction();
    },[user]);

    const handleCartDelete=async(id)=>{
      // console.log('delete cart')
      await axios.post('https://enamulhaque.pythonanywhere.com/cloth/cartlistdelete/', {
        product_id: id,
        author: user,
        })
        .then((response) => {
            console.log(response); 
            const cartAfterDelete =  clothCarts.filter(cloth => cloth.id !== id)
            setClothCarts(cartAfterDelete)
            
          })
          .catch((error) =>{
            console.log(error);
          });
    }

    const handleCheckOut=async()=>{
      await axios.post('https://enamulhaque.pythonanywhere.com/cloth/clothcartlistcheckout/', {
        clothList: clothCarts,
        author: user,
        })
        .then((response) => {
            console.log(response.data.url); 
            window.location.href = response.data.url
            
          })
          .catch((error) =>{
            console.log(error);
          });
    }

    return (
        <div className="w-10/12 mx-auto py-14"> 
            <h1>Cart List{clothCarts.length}</h1>
            
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Delete</th>
        <th></th>
      </tr>
    </thead>
    {
        clothCarts.map(cart=><Cart key={cart.id} cart={cart} handleCartDelete={handleCartDelete}></Cart>)
        // clothCarts.map(cart=><tr key={cart.id}>
        //     <th>
        //       <label>
        //         <input type="checkbox" className="checkbox" />
        //       </label>
        //     </th>
        //     <td>
        //       <div className="flex items-center gap-3">
        //         <div className="avatar">
        //           <div className="mask mask-squircle w-12 h-12">
        //             <img src={`http://127.0.0.1:8000/${cart.image}/`} alt="Avatar Tailwind CSS Component" />
        //           </div>
        //         </div>
        //         <div>
        //           <div className="font-bold">Hart Hagerty</div>
        //           <div className="text-sm opacity-50">United States</div>
        //         </div>
        //       </div>
        //     </td>
        //     <td>
        //       Zemlak, Daniel and Leannon
        //       <br/>
        //       <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
        //     </td>
        //     <td>Purple</td>
        //     <th>
        //       <button className="btn btn-ghost btn-xs">details</button>
        //     </th>
        //   </tr>)
    }
    {/* foot */}
    <tfoot>
      <tr>
        <th></th>
        <th>Name</th>
        <th>price</th>
        <th>quantity</th>
        <th>Delete</th>
        <th></th>
      </tr>
    </tfoot>
    
  </table>
</div>
<button onClick={handleCheckOut} className="btn btn-success text-white">Check Out</button>    
        </div>
        
    );
};

export default CartList;