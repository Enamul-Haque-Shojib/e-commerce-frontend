import { useEffect, useState } from "react";
import Cloth from "../Cloth/Cloth";


const Clothes = () => {
    const [cloths, setCloths] = useState([]);
    console.log('newe>>>>>>>>>>>>>>>',cloths);
    useEffect(()=>{
        // fetch('http://127.0.0.1:8000/cloth/list/')
        fetch('https://click-cart-bzwk.onrender.com/api/v1/products/products/')
        .then(res=>res.json())
        .then(data=>{
            setCloths(data)

        })
        .catch((err) => {
            console.log(err);
        });
    },[])
    return (
        <div className="grid grid-cols-3 gap-x-8 gap-y-4 mx-auto w-10/12">
            {
                cloths.map(cloth => <Cloth
                    key={cloth.clothid}
                    cloth = {cloth}
                    ></Cloth>)
            }
        </div>
    );
};

export default Clothes;