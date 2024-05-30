
import { Link } from "react-router-dom";


const Cloth = ({cloth}) => {
    
    // const {clothid,title, product_image, price, quantity, rating} = cloth;
    const {clothid,name, image, price, quantity, rating} = cloth;
    // console.log(image)
    return (
        <div className="text-base">
           
    <div className="card w-80 h-full bg-white shadow-xl">
  <figure className="p-5"><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>Price: {price}</p>
    <p>Quantity: {quantity}</p>
    <p>Rating: {rating}</p>
    <div className="card-actions justify-end">
      <Link to={`/list/${clothid}`}>
            <button className="btn btn-primary text-white ">Details</button>
            </Link>
    </div>
  </div>
</div>
        </div>
        
    );
};

export default Cloth;