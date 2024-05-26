import { useDispatch } from "react-redux";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Clothes from "../Clothes/Clothes";
import {addToCart} from "../../../redux/features/cart/cartSlice"

const Home = () => {
    return (
        <div>
             
            <Banner></Banner>
            <Category></Category>
            <Clothes></Clothes>
        </div>
    );
};

export default Home;