import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import axios from 'axios';

const UpdateProduct = () => {


    const {user, ratings ,setRatings, profile} = useContext(AuthContext);
    const products = useLoaderData();
    const {product_id, title,  quantity, price, description, summary, category} = products;
    console.log(category)

    const [colors, setColors] = useState([]);
    const [sizes, setSizes] = useState([]);
    const [categories, setCategories] = useState([]);

    const [images, setImages] = useState([]);
    // console.log(images);
    const [selectedColors, setSelectedColors] = useState([]);
    const [selectedSizes, setSelectedSizes] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [created_at, setCreated_at] = useState([]);
    

   


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
        setImages(files);
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
        const created_at = event.target.created_at.value;
        // console.log(created_at);
        formData.append('title', title);
        formData.append('description', description);
        formData.append('summary', summary);
        formData.append('price', price);
        formData.append('quantity', quantity);
        formData.append('vendor', vender);
        formData.append('created_at', created_at);
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
    
    
    
        axios.put(`http://127.0.0.1:8000/api/v1/products/${product_id}/`, formData, {
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
              <h1>Update Product</h1>



<div className="card shrink-0 w-full max-w-sm shadow-2xl bg-white">
<form onSubmit={handleSubmit} className="card-body">

<div className="form-control">
<label className="label">
<span className="label-text">Title</span>
</label>
<input type="text" name='title' placeholder="title" defaultValue={title}  className="input input-bordered bg-white" required />
</div>

<label className="form-control">
<div className="label">
<span className="label-text">Description</span>

</div>
<textarea className="textarea textarea-bordered h-24 bg-white" name='description' defaultValue={description} placeholder="description"></textarea>

</label>
<label className="form-control">
<div className="label">
<span className="label-text">Summary</span>

</div>
<textarea className="textarea textarea-bordered h-24 bg-white" defaultValue={summary} name='summary' placeholder="summary"></textarea>

</label>

<label className="form-control w-full max-w-xs">
<div className="label">
<span className="label-text">Categories</span>

</div>
<select className="select select-bordered bg-white" name='category'  onChange={handleCategoryChange}>
{
categories.map(category => <option value={category.sub_category_id} key={category.sub_category_id}>{category.sub_category}</option>)
}

</select>

</label>

<label className="form-control w-full max-w-xs">
<div className="label">
<span className="label-text">Sizes</span>

</div>
<select className="select select-bordered bg-white" name='size' multiple={true} onChange={handleSizeChange}>
{
sizes.map(size => <option value={size.id} key={size.id}>{size.product_size}</option>)
}

</select>

</label>

<label className="form-control w-full max-w-xs">
<div className="label">
<span className="label-text">Colors</span>

</div>
<select className="select select-bordered bg-white" name='color' multiple={true} onChange={handleColorChange}>
{
colors.map(color => <option value={color.id} key={color.id}>{color.product_color}</option>)
}

</select>

</label>

<div className="form-control">
<label className="label">
<span className="label-text">Price</span>
</label>
<input type="number" name='price' placeholder="price" defaultValue={price}   className="input input-bordered bg-white" required/>
</div>
<div className="form-control">
<label className="label">
<span className="label-text">Quantity</span>
</label>
<input type="number" name='quantity' placeholder="quantity" defaultValue={quantity}  className="input input-bordered bg-white" required/>
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
<div className="input input-bordered bg-white">
<input type="datetime-local" name="created_at" />
</div>

<div className="form-control mt-6">
<button className="btn btn-primary">Update</button>
</div>
</form>
</div>
        </div>
    );
};

export default UpdateProduct;