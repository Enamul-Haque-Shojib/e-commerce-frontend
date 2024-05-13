import { Link } from "react-router-dom";


const Wish = ({wish, handleWishDelete}) => {
    const {id,clothid, name, image, price, quantity} = wish;

    return (
          <div className="">
           
          <div className="card w-80 h-full bg-white shadow-xl">
        <figure className="p-5"><img src={`https://enamulhaque.pythonanywhere.com/${image}/`} alt="Shoes" /></figure>
        <div className="card-body text-base">
          <h2 className="card-title">{name}</h2>
          <p>Price: {price}</p>
          <p>Quantity: {quantity}</p>
          
          <div className="card-actions">
            
            <Link to={`/list/${clothid}`}>
                  <button className="btn btn-primary text-white ">Details</button>
            </Link>
            <button className="btn btn-error text-white" onClick={()=>handleWishDelete(id)}>Delete</button>
          </div>
        </div>
      </div>
              </div>
    );
};

export default Wish;