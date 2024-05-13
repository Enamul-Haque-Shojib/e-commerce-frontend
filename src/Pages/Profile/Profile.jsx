import { useContext, useState} from "react";
import { AuthContext } from "../../Providers/AuthProvider";

import { Link } from "react-router-dom";
import axios from "axios";

const Profile = () => {
    const {profileImage, setProfileImage ,profile, user, userImage, setUserImage} = useContext(AuthContext);

    // console.log(profile)

    const [image, setImage] = useState(null)

    // console.log(image)
        const handleUpdateProfile = (e) => {
          e.preventDefault();
          // console.log(this.state);
          let form_data = new FormData();
          form_data.append('profile_image', image);
          form_data.append('author', user);
          console.log(form_data);
          let url = 'https://enamulhaque.pythonanywhere.com/author/uploadprofile/';
          axios.post(url, form_data, {
            headers: {
              'content-type': 'multipart/form-data'
            }
          })
              .then(res => {
                console.log(res.data.profile_image);
                setProfileImage(res.data.profile_image)
              })
              .catch(err => console.log(err))
        };
    
        const handleImageChange = (e) => {
          const profile_image = e.target.files[0];
          setImage(profile_image)
          setUserImage(true)
        };
    
    return (
        <div className="pt-14">
            <h1>Profile</h1>


            <dialog id="my_modal_3" className="modal">
  <div className="modal-box bg-white">
    <form method="dialog" >
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">Upload Profile Image</h3>
    <p className="py-4 text-xs">Press ESC key or click on ✕ button to close</p>
    <form onSubmit={handleUpdateProfile}>
        
            <input type="file"
                   id="image"
                   name="profile_image"
                   accept="image/png, image/jpeg, image/jpg"  onChange={handleImageChange} required/>
          
          <button type="submit" className="btn btn-primary text-white ">Upload Image</button>
        </form>
  </div>
</dialog>







            <div className="card lg:card-side bg-white shadow-xl my-14 w-10/12 mx-auto border">
              <div>
                {
                  userImage ? 
                  <figure><img src={`https://enamulhaque.pythonanywhere.com/${profileImage}`} alt="Album"/></figure>
                  :

                  <figure><img src={profileImage} alt="Album"/></figure>
                }
              
              <button className="btn bg-white btn-ghost" onClick={(e)=>{e.preventDefault(); document.getElementById('my_modal_3').showModal()}}>Upload Image</button>
              </div>
  <div className="card-body">
    <h2 className="card-title">{profile.username}</h2>
    <p>First Name: {profile.first_name}</p>
    <p>Last Name: {profile.last_name}</p>
    <p>Email: {profile.email}</p>
    <div className="card-actions justify-end">
      <Link className="btn btn-primary text-white " to='/updateprofile'>Update Profile</Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Profile;