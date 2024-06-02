import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const ProductForm = () => {
  
    const {profileImage, setProfileImage ,profile, user, userImage, setUserImage} = useContext(AuthContext);
    const [products, setProducts] = useState([]);

    // const [title, setTitle] = useState(null);
    // const [description, setDescription] = useState(null);
    // const [price, setPrice] = useState(0);
    // const [quantity, setQuantity] = useState(0);
    // const [vendor, setVendor] = useState(null);
    const [images, setImages] = useState([]);
    console.log(images)
    const [selectedColors, setSelectedColors] = useState([]);
    const [selectedSizes, setSelectedSizes] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);

    // console.log(title, price, quantity, vendor, description)

    const [colors, setColors] = useState([]);
    const [sizes, setSizes] = useState([]);
    const [categories, setCategories] = useState([]);
    // console.log(categories);
    
    // console.log(products)
    // useEffect(()=>{
    //     const clothWishFunction=async()=>{
    //         await axios.get('http://127.0.0.1:8000/api/v1/products/products/',{
    //             author: user
    //         })
    //         .then((response) => {
    //             // console.log(response);
    //             setProducts(response.data)
                
    //           })
    //           .catch((error) =>{
    //             console.log(error);
    //           });
    //     }
    //     clothWishFunction();
    // },[user]);

    useEffect(()=>{
        const colorFunction=async()=>{
            await axios.get('http://127.0.0.1:8000/api/v1/products/color/',{
                author: user
            })
            .then((response) => {
                // console.log(response.data);
                setColors(response.data)
                
              })
              .catch((error) =>{
                console.log(error);
              });
        }
        colorFunction();

        const sizeFunction=async()=>{
            await axios.get('http://127.0.0.1:8000/api/v1/products/size/',{
                author: user
            })
            .then((response) => {
                // console.log(response.data);
                setSizes(response.data)
                
              })
              .catch((error) =>{
                console.log(error);
              });
        }
        sizeFunction();

        const categoryFunction=async()=>{
            await axios.get('http://127.0.0.1:8000/api/v1/products/subcategory/',{
                author: user
            })
            .then((response) => {
                // console.log(response.data);
                setCategories(response.data)
                
              })
              .catch((error) =>{
                console.log(error);
              });
        }
        categoryFunction();
    },[user]);









    
  // const [preview, setPreview] = useState([]);
  

  const handleColorChange = (event) => {
    // const colorProduct = Array.from(e.target.value);
    const options = event.target.options;
    const values = [];
    for (let i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        values.push(options[i].value);
      }
    }
    setSelectedColors(values); 
  };
  const handleSizeChange = (event) => {
    // const sizeProduct = Array.from(e.target.value);
    const options = event.target.options;
    const values = [];
    for (let i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        values.push(options[i].value);
      }
    }
    setSelectedSizes(values); 
  };
  const handleCategoryChange = (event) => {
    // const categoryProduct = Array.from(e.target.value);
    const options = event.target.options;
    const values = [];
    for (let i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        values.push(options[i].value);
      }
    }
    setSelectedCategories(values); 
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    // setImages([...e.target.files]);
    setImages(files);

    // const previewImages = files.map(file => URL.createObjectURL(file));
    // setPreview(previewImages);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    const title = event.target.title.value
  
    const description=event.target.description.value;
    const summary=event.target.summary.value;
    const price = event.target.price.value; 
    const quantity = event.target.quantity.value; 
    const vender = event.target.vender.value;

    
    formData.append('title', title);
    formData.append('description', description);
    formData.append('summary', summary);
    formData.append('price', price);
    formData.append('quantity', quantity);
    formData.append('vendor', vender);
    selectedCategories.forEach((category, index) => {
      formData.append(`category`, category);
    });
    selectedColors.forEach((color, index) => {
      formData.append(`color`, color);
    });
    selectedSizes.forEach((size, index) => {
      formData.append(`size`, size);
    });


    images.forEach((image, index) => {
      formData.append(`uploaded_images`, image);
    });
    

    // try {
    //   const response = await fetch('http://127.0.0.1:8000/api/v1/products/', {
    //     method: 'POST',
    //     body: formData,
    //   });
    //   const data = await response.json();
    //   console.log(data);
    // } catch (error) {
    //   console.error('Error uploading images:', error);
    // }


    // axios.post('http://127.0.0.1:8000/api/v1/products/', formData)
    // .then(res => {
    //   console.log(res.data);
  
    // })
    // .catch(err => console.log(err))



    axios.post('http://127.0.0.1:8000/api/v1/products/', formData, {
        headers: {
          'content-type': 'multipart/form-data'
        }
      })
          .then(res => {
            console.log(res.data);
        
          })
          .catch(err => console.log(err))
    
  }







    return (
        <div>
            <h1>Upload Multiple Images</h1>



            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-white">
      <form onSubmit={handleSubmit} className="card-body">
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input type="text" name='title' placeholder="title"  className="input input-bordered bg-white" required />
        </div>

        <label className="form-control">
  <div className="label">
    <span className="label-text">Description</span>
    
  </div>
  <textarea className="textarea textarea-bordered h-24 bg-white" name='description' placeholder="description"></textarea>
  
</label>
        <label className="form-control">
  <div className="label">
    <span className="label-text">Summary</span>
    
  </div>
  <textarea className="textarea textarea-bordered h-24 bg-white" name='summary' placeholder="summary"></textarea>
  
</label>
        {/* <div className="form-control">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <input type="text" name='category' placeholder="category" className="input input-bordered bg-white" required />
        </div> */}
        <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Categories</span>
    
  </div>
  <select className="select select-bordered bg-white" name='category' multiple={true} onChange={handleCategoryChange}>
    {
      categories.map(category => <option value={category.sub_category} key={category.sub_category_id}>{category.sub_category}</option>)
    }
    
  </select>
  
</label>
        {/* <div className="form-control">
          <label className="label">
            <span className="label-text">Size</span>
          </label>
          <input type="text" name='size' placeholder="size"   className="input input-bordered bg-white" required />
        </div> */}
        <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Sizes</span>
    
  </div>
  <select className="select select-bordered bg-white" name='size' multiple={true} onChange={handleSizeChange}>
    {
      sizes.map(size => <option value={size.product_size} key={size.id}>{size.product_size}</option>)
    }
    
  </select>
  
</label>

<label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Colors</span>
    
  </div>
  <select className="select select-bordered bg-white" name='color' multiple={true} onChange={handleColorChange}>
    {
      colors.map(color => <option value={color.product_color} key={color.id}>{color.product_color}</option>)
    }
    
  </select>
  
</label>
        {/* <div className="form-control">
          <label className="label">
            <span className="label-text">Color</span>
          </label>
          <input type="text" name='color' placeholder="color"   className="input input-bordered bg-white" required />
        </div> */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="number" name='price' placeholder="price"   className="input input-bordered bg-white" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Quantity</span>
          </label>
          <input type="number" name='quantity' placeholder="quantity"   className="input input-bordered bg-white" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Vendor</span>
          </label>
          <input type="text" name='vender' placeholder="vendor" defaultValue={profile.username} className="input input-bordered bg-white" required/>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">uploaded_images</span>
          </label>
          <input
          className="input input-bordered bg-white"
          type="file"
          multiple
          onChange={handleImageChange}
          accept="image/*"
        />
        </div>
        
        <div className="form-control mt-6">
          <button className="btn btn-primary">Save</button>
        </div>
      </form>
    </div>




       

        </div>
    );
};

export default ProductForm;



// import axios from "axios";
// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../../Providers/AuthProvider";

// const ProductForm = () => {
//     const { profile } = useContext(AuthContext);
//     const [images, setImages] = useState([]);
//     const [selectedColors, setSelectedColors] = useState([]);
//     const [selectedSizes, setSelectedSizes] = useState([]);
//     const [selectedCategories, setSelectedCategories] = useState([]);
//     const [colors, setColors] = useState([]);
//     const [sizes, setSizes] = useState([]);
//     const [categories, setCategories] = useState([]);
    
//     useEffect(()=>{
//         const fetchData = async (endpoint, setState) => {
//             try {
//                 const response = await axios.get(endpoint, { author: profile.user });
//                 setState(response.data);
//             } catch (error) {
//                 console.log(error);
//             }
//         };

//         fetchData('http://127.0.0.1:8000/api/v1/products/color/', setColors);
//         fetchData('http://127.0.0.1:8000/api/v1/products/size/', setSizes);
//         fetchData('http://127.0.0.1:8000/api/v1/products/subcategory/', setCategories);
//     }, [profile.user]);

//     const handleMultiSelectChange = (event, setState) => {
//         const options = event.target.options;
//         const values = [];
//         for (let i = 0, l = options.length; i < l; i++) {
//             if (options[i].selected) {
//                 values.push(options[i].value);
//             }
//         }
//         setState(values);
//     };

//     const handleImageChange = (e) => {
//         // setImages([...e.target.files]);
//         const files = Array.from(e.target.files);
// //     // setImages([...e.target.files]);
//     setImages(files);
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         const formData = new FormData();

//         const title = event.target.title.value;
//         const description = event.target.description.value;
//         const price = event.target.price.value; 
//         const quantity = event.target.quantity.value; 
//         const vendor = event.target.vendor.value;

//         formData.append('title', title);
//         formData.append('description', description);
//         formData.append('price', price);
//         formData.append('quantity', quantity);
//         formData.append('vendor', vendor);
        
//         selectedCategories.forEach(category => {
//             formData.append('categories', category);
//         });
//         selectedColors.forEach(color => {
//             formData.append('colors', color);
//         });
//         selectedSizes.forEach(size => {
//             formData.append('sizes', size);
//         });

//         images.forEach(image => {
//             formData.append('uploaded_images', image);
//         });

//         console.log([...formData.entries()]); // Debugging: check FormData contents

//         try {
//             const response = await fetch('http://127.0.0.1:8000/api/v1/products/', {
//                 method: 'POST',
//                 body: formData,
//             });
//             const data = await response.json();
//             console.log(data);
//         } catch (error) {
//             console.error('Error uploading images:', error);
//         }
//     }

//     return (
//         <div>
//             <h1>Upload Multiple Images</h1>
//             <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-white">
//                 <form onSubmit={handleSubmit} className="card-body">
//                     <div className="form-control">
//                         <label className="label">
//                             <span className="label-text">Title</span>
//                         </label>
//                         <input type="text" name='title' placeholder="title" className="input input-bordered bg-white" required />
//                     </div>

//                     <label className="form-control">
//                         <div className="label">
//                             <span className="label-text">Description</span>
//                         </div>
//                         <textarea className="textarea textarea-bordered h-24 bg-white" name='description' placeholder="description"></textarea>
//                     </label>

//                     <label className="form-control w-full max-w-xs">
//                         <div className="label">
//                             <span className="label-text">Categories</span>
//                         </div>
//                         <select className="select select-bordered bg-white" name='category' multiple={true} onChange={(e) => handleMultiSelectChange(e, setSelectedCategories)}>
//                             {categories.map(category => <option value={category.sub_category_id} key={category.sub_category_id}>{category.sub_category}</option>)}
//                         </select>
//                     </label>

//                     <label className="form-control w-full max-w-xs">
//                         <div className="label">
//                             <span className="label-text">Sizes</span>
//                         </div>
//                         <select className="select select-bordered bg-white" name='size' multiple={true} onChange={(e) => handleMultiSelectChange(e, setSelectedSizes)}>
//                             {sizes.map(size => <option value={size.id} key={size.id}>{size.product_size}</option>)}
//                         </select>
//                     </label>

//                     <label className="form-control w-full max-w-xs">
//                         <div className="label">
//                             <span className="label-text">Colors</span>
//                         </div>
//                         <select className="select select-bordered bg-white" name='color' multiple={true} onChange={(e) => handleMultiSelectChange(e, setSelectedColors)}>
//                             {colors.map(color => <option value={color.id} key={color.id}>{color.product_color}</option>)}
//                         </select>
//                     </label>

//                     <div className="form-control">
//                         <label className="label">
//                             <span className="label-text">Price</span>
//                         </label>
//                         <input type="number" name='price' placeholder="price" className="input input-bordered bg-white" required/>
//                     </div>

//                     <div className="form-control">
//                         <label className="label">
//                             <span className="label-text">Quantity</span>
//                         </label>
//                         <input type="number" name='quantity' placeholder="quantity" className="input input-bordered bg-white" required/>
//                     </div>

//                     <div className="form-control">
//                         <label className="label">
//                             <span className="label-text">Vendor</span>
//                         </label>
//                         <input type="text" name='vendor' placeholder="vendor" defaultValue={profile.username} className="input input-bordered bg-white" required/>
//                     </div>

//                     <div className="form-control">
//                         <label className="label">
//                             <span className="label-text">Uploaded Images</span>
//                         </label>
//                         <input
//                             className="input input-bordered bg-white"
//                             type="file"
//                             multiple
//                             onChange={handleImageChange}
//                             accept="image/*"
//                         />
//                     </div>

//                     <div className="form-control mt-6">
//                         <button className="btn btn-primary">Save</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default ProductForm;

