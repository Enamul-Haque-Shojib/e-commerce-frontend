import { useEffect } from "react";
import Recommended from "../Recommended/Recommended";
import axios from "axios";


const RecommendedList = ({category}) => {
    useEffect(()=>{
        const fun=async()=>{
            await axios.get(`http://127.0.0.1:8000/cloth/list/?search=${category}`, {
        })
        .then((response) => {
            console.log(response);
          })
          .catch((error) =>{
            console.log(error);
          });
        }
        fun();
        
    },[category])
    return (
        <div>
            <Recommended></Recommended>
        </div>
    );
};

export default RecommendedList;