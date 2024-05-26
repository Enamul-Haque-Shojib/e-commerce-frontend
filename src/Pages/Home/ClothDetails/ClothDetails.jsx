// import axios from "axios";
// import { useContext, useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";
// import { AuthContext } from "../../../Providers/AuthProvider";
// import AddReview from "../../AddReview/AddReview";
// import Reviews from "../../Reviews/Reviews";
// import '../ClothDetails/ClothDetails.css'
// import RecommendedList from "../../RecommendedList/RecommendedList";
// import { useDispatch } from "react-redux";
// import {addToCart} from "../../../redux/features/cart/cartSlice";


// const ClothDetails = () => {
//     const dispath = useDispatch();
//     const {user, ratings ,setRatings} = useContext(AuthContext);
//     const cloth = useLoaderData();
//     const {clothid, name, image, quantity, price, rating, category} = cloth;
      
//     const [num, setNum] = useState(quantity);

//     useEffect(() => {
//       setRatings(rating)
//     },[rating, setRatings])

    
    

//     const handleAddToCart = async(e) =>{
//         e.preventDefault();
//         const n = num-1;
//         setNum(n)
//         // console.log("Cart");
//         await axios.post('https://enamulhaque.pythonanywhere.com/cloth/addcartlist/', {
//             product_id: clothid,
//             author: user,
//             quan : n
//             })
//             .then((response) => {
//                 console.log(response);
                
//               })
//               .catch((error) =>{
//                 console.log(error);
//               });
//     }
//     const handleAddToWish = async(e) =>{
//         e.preventDefault();
//         // console.log("wish");
//         await axios.post('https://enamulhaque.pythonanywhere.com/cloth/addwishlist/', {
//         product_id: clothid,
//         author: user
//         })
//         .then((response) => {
//             console.log(response);
//           })
//           .catch((error) =>{
//             console.log(error);
//           });
          
//     }
//     return (
//         <div className="pt-32 text-base">
//   <div className="card lg:card-side bg-white shadow-xl w-10/12 mx-auto">
//   <figure className="cloth-detail-image p-5"><img src={image} alt="Album"/></figure>
//   <div className="card-body">
//     <h2 className="card-title">{name}</h2>
//     <p>Price: {price}</p>
//     <p>Quantity: {quantity}</p>
//     <p>Category: {category}</p>
//     <p>Rating: {ratings}</p>
//     <div className="card-actions justify-start">
//       <button className="btn btn-success text-white" onClick={handleAddToCart}>Add Cart</button>

//       <button className="btn btn-warning text-white" onClick={handleAddToWish}>Add Wish</button>
//     </div>
//   </div>
// </div>
//           <RecommendedList category={category}></RecommendedList>
//           <Reviews clothid={clothid} name={name}></Reviews>
//           {user && <AddReview clothid={clothid} name={name}></AddReview>}

     
//         </div>
//     );
// };

// export default ClothDetails;






import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import AddReview from "../../AddReview/AddReview";
import Reviews from "../../Reviews/Reviews";
import '../ClothDetails/ClothDetails.css'
import RecommendedList from "../../RecommendedList/RecommendedList";
import { useDispatch } from "react-redux";
import {addToCart} from "../../../redux/features/cart/cartSlice";


const ClothDetails = () => {
    const dispath = useDispatch();
    const {user, ratings ,setRatings} = useContext(AuthContext);
    const cloth = useLoaderData();
    console.log("cloth loader", cloth);
    const {clothid, name, image, price, rating} = cloth;
      
    // const [num, setNum] = useState(quantity);

    useEffect(() => {
      setRatings(rating)
    },[rating, setRatings])

    
    

    const handleAddToCart = async(e) =>{
        e.preventDefault();
        // const n = num-1;
        // setNum(n)
        // console.log("Cart");
        // await axios.post('https://enamulhaque.pythonanywhere.com/cloth/addcartlist/', {
        //     product_id: clothid,
        //     author: user,
        //     quan : n
        //     })
        //     .then((response) => {
        //         console.log(response);
                
        //       })
        //       .catch((error) =>{
        //         console.log(error);
        //       });
    }
    const handleAddToWish = async(e) =>{
        // e.preventDefault();
        // // console.log("wish");
        // await axios.post('https://enamulhaque.pythonanywhere.com/cloth/addwishlist/', {
        // product_id: clothid,
        // author: user
        // })
        // .then((response) => {
        //     console.log(response);
        //   })
        //   .catch((error) =>{
        //     console.log(error);
        //   });
          
    }
    return (
        <div className="pt-32 text-base">
  <div className="card lg:card-side bg-white shadow-xl w-10/12 mx-auto">
  <figure className="cloth-detail-image p-5"><img src={image} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>Price: {price}</p>
    {/* <p>Quantity: {quantity}</p> */}
    {/* <p>Category: {category}</p> */}
    <p>Rating: {ratings}</p>
    <div className="card-actions justify-start">
      <button className="btn btn-success text-white">Add Cart</button>

      <button className="btn btn-warning text-white" onClick={handleAddToWish}>Add Wish</button>
    </div>
  </div>
</div>
          {/* <RecommendedList category={category}></RecommendedList> */}
          <Reviews clothid={clothid} name={name}></Reviews>
          {user && <AddReview clothid={clothid} name={name}></AddReview>}

     
        </div>
    );
};

export default ClothDetails;