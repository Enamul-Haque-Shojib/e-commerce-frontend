import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const Cart = ({cart, handleCartDelete}) => {
  const {user} = useContext(AuthContext);
    const {id, clothid, image, name, quantity, price} = cart;
    // console.log(clothid, id)
    const [quan, setQuan] = useState(quantity);
    const [prc, setPrc] = useState(price);


    const handleMinus=async(e)=>{
      e.preventDefault();
        // const n = quan-1;
        // if(n >= 0){
        //   console.log(n)
        //   setQuan(n);
        // } 
       if(quan >0){
        await axios.post('https://e-commerce-backend-8r60.onrender.com/cloth/addcartlistminus/', {
          product_id: clothid,
          author: user,
          // quan : n
          })
          .then((response) => {
              // console.log(response.data.Minus);
              setQuan(response.data.Quantity);
              setPrc(response.data.Minus);
              
            })
            .catch((error) =>{
              console.log(error);
            });
       }
        
    }

    const handlePlus=async(e)=>{
      e.preventDefault();
        // const num = quan+1;
        // let n;
        // if(num<=quantity){
        //   n=num
        // }
        // ---------------------------->>>>>>>
       
        await axios.post('https://e-commerce-backend-8r60.onrender.com/cloth/addcartlistplus/', {
          product_id: clothid,
          author: user,
          // quan : n
          })
          .then((response) => {
              // console.log(response);
              setQuan(response.data.Quantity);
              setPrc(response.data.Plus);
              
            })
            .catch((error) =>{
              console.log(error);
            });
    }

    // const handleDelete=async(e)=>{
    //   e.preventDefault();
    //   await axios.post('http://127.0.0.1:8000/cloth/cartlistdelete/', {
    //     product_id: id,
    //     author: user,
    //     })
    //     .then((response) => {
    //         console.log(response);   
            
    //       })
    //       .catch((error) =>{
    //         console.log(error);
    //       });
    // }

    return (
           <tbody>
      {/* row 1 */}
      <tr className="">
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={`https://e-commerce-backend-8r60.onrender.com/${image}/`} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
              <div className="text-sm opacity-50">{clothid}</div>
            </div>
          </div>
        </td>
        <td>
          {prc}
          
        </td>
        <td>
        <button onClick={handleMinus} className="btn btn-ghost btn-xs">-</button>
            {quan}
        <button onClick={handlePlus} className="btn btn-ghost btn-xs">+</button>
        </td>
        <th>
          <button onClick={()=>handleCartDelete(id)} className="btn btn-error btn-xs text-white">Delete</button>
        </th>
      </tr>
    
    </tbody>
           
        
    );
};

export default Cart;




















