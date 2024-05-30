import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";

const AddReview = ({clothid, name}) => {
    // console.log(clothid, name)
    const {user, setReviews, setRatings} = useContext(AuthContext, );
    // console.log(rating)
    const handleReview=async(event)=>{
        event.preventDefault();
        const form = event.target;
        const body = form.body.value;
        const ratings = form.ratings.value;
        // console.log(body, ratings);

        await axios.post('https://e-commerce-backend-8r60.onrender.com/cloth/addreview/', {
        product_id: clothid,
        product_name: name,
        author: user,
        body: body,
        ratings: ratings
        })
        .then((response) => {
            console.log(response.data.rating);
            setReviews(response.data.reviewlist);
            setRatings(response.data.rating);
          })
          .catch((error) =>{
            console.log(error);
          });

    }
    return (
        <div className="hero bg-white w-10/12 mx-auto">
        <div className="hero-content w-full">
          
          <div className="card shrink-0 w-full shadow-2xl bg-white border">
            <form onSubmit={handleReview} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Review</span>
                </label>
                <textarea placeholder="Bio" name='body' className="textarea textarea-bordered textarea-lg w-full bg-white" ></textarea>
              </div>
              <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Ratings</span>
  </div>
  <select className="select select-bordered bg-white" name='ratings' defaultValue={'0'}>
    <option disabled value="0">0</option>
    <option value='1'>⭐</option>
    <option value='2'>⭐⭐</option>
    <option value='3'>⭐⭐⭐</option>
    <option value='4'>⭐⭐⭐⭐</option>
    <option value='5'>⭐⭐⭐⭐⭐</option>
  </select>

</label>
              <div className="form-control mt-6">
                
                <input className="btn btn-primary w-1/3" type="submit" value="Submit" />
              </div>
            </form>
            
          </div>
        </div>
      </div>
    );
};

export default AddReview;