import { useContext, useEffect} from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";
import Review from "../Review/Review";


const Reviews = ({clothid, name}) => {
    const {user, reviews, setReviews} = useContext(AuthContext);
    // console.log(reviews);
    

    useEffect(() =>{
        const fun=async()=>{
            await axios.post('http://127.0.0.1:8000/cloth/clothreviews/', {
            product_id: clothid,
            product_name: name,
            author: user
            })
            .then((response) => {
                // console.log(response);
                setReviews(response.data)
            })
            .catch((error) =>{
                console.log(error);
            });
        }

        fun();
    },[clothid, name, user, setReviews])

    return (
        <div className="w-10/12 mx-auto text-base">
            <h1>Reviews : {reviews.length}</h1>
            {
                reviews.map(rev=><Review key={rev.id} rev={rev}></Review>)
            }
        </div>
    );
};

export default Reviews;