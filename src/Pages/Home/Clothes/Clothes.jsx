import { useEffect, useState } from "react";
import Cloth from "../Cloth/Cloth";


// const cloths =[
//     {
//         clothid:1,
//         name:"Full Sleve T-Shirt 1",
//         price:345.89,
//         rating:4.5,
//         image:"https://unsplash.com/photos/black-and-orange-nike-polo-shirt-N0ke5zChVBU"
//     },
//     {
//         clothid:2,
//         name:"Full Sleve T-Shirt 2",
//         price:345.89,
//         rating:4.5,
//         image:"https://unsplash.com/photos/black-and-orange-nike-polo-shirt-N0ke5zChVBU"
//     },
//     {
//         clothid:3,
//         name:"Full Sleve T-Shirt 3",
//         price:345.89,
//         rating:4.5,
//         image:"https://unsplash.com/photos/black-and-orange-nike-polo-shirt-N0ke5zChVBU"
//     },
//     {
//         clothid:4,
//         name:"Full Sleve T-Shirt 4",
//         price:345.89,
//         rating:4.5,
//         image:"https://unsplash.com/photos/black-and-orange-nike-polo-shirt-N0ke5zChVBU"
//     },
//     {
//         clothid:5,
//         name:"Full Sleve T-Shirt 5",
//         price:345.89,
//         rating:4.5,
//         image:"https://unsplash.com/photos/black-and-orange-nike-polo-shirt-N0ke5zChVBU"
//     },
    
// ]

const Clothes = () => {
    const [cloths, setCloths] = useState([]);
    // console.log(cloths);
    useEffect(()=>{
        // fetch('http://127.0.0.1:8000/cloth/list/')
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>{
            console.log("cloths data",data)
            setCloths(data);
        })
        .catch((err) => {
            console.log(err);
        });
    },[])
    console.log("cloths type",typeof(cloths));
    console.log(cloths);
    return (
        <div className="grid grid-cols-3 gap-x-8 gap-y-4 mx-auto w-10/12">
            {
                cloths.map(cloth => <Cloth
                    key={cloth.clothid}
                    cloth = {cloth}
                    ></Cloth>)
            }

            {
                // console.log("cloths type",typeof(cloths));
                // console.log(cloths);
            }
        </div>
    );
};

export default Clothes;