import axios from "axios";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext, useRef, useState } from "react";




const UpdateProfile = () => {
    const {user, setUser, profile, setProfile} = useContext(AuthContext);
    let author = useRef(user);
    const [oldPass, setOldPass] = useState('');
    const [newPass, setNewPass] = useState('');
  console.log(oldPass, newPass)

    const handleUpdateProfile=async(event)=>{
      event.preventDefault();
      author = user;
      const username = event.target.username.value;
      const first_name = event.target.first_name.value;
      const last_name = event.target.last_name.value;
      const email = event.target.email.value;
  
      const updateProfileData = {author, username, first_name, last_name, email}
      // console.log('Helo->', username, password);
      const profileUpdate = "http://127.0.0.1:8000/author/updateprofile/";
    await axios.post(profileUpdate, updateProfileData)
          .then((response) => {
              // console.log(response.data); 
              setUser(response.data.username)
              setProfile(response.data)
              
            })
            .catch((error) =>{
              console.log(error);
            });

    }








    const handleChangePassword=async(event)=>{
      event.preventDefault();
      author = user;
      const old_password = event.target.old_password.value;
      const new_password = event.target.new_password.value;
      setOldPass(old_password)
      setNewPass(new_password)
  
      const changePassData = {author, old_password, new_password}
      // console.log(changePassData);

      const changePassUrl = "http://127.0.0.1:8000/author/changepass/";
    await axios.post(changePassUrl, changePassData)
          .then((response) => {
              console.log('>>>>>>>>>>>>>>>>passord>>>>>>>>>>>>>',response); 
              setOldPass('');
              setNewPass('');
              
            })
            .catch((error) =>{
              console.log(error);
            });
    }


// console.log(image)

  
    
    return (
        <div className="py-10">

         <h1>Update profile</h1>


        


         <dialog id="my_modal_3" className="modal">
  <div className="modal-box bg-white">
    <form method="dialog">
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">Change Password</h3>
    <p className="py-4 text-xs">Press ESC key or click on ✕ button to close</p>
    <div className="card shrink-0 w-ful bg-white">
      <form onSubmit={handleChangePassword} className="card-body p-0">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Old Password</span>
          </label>
          <input type="password" name='old_password' placeholder="old password" defaultValue={oldPass} className="input input-bordered bg-white" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">New Password</span>
          </label>
          <input type="password" name='new_password' placeholder="new password" defaultValue={newPass} className="input input-bordered bg-white" required />
        </div>
        <div className="form-control mt-6">
          
          <input className="btn btn-ghost" type="submit" value="Change Password" />
        </div>
      </form>
    </div>
  </div>
</dialog>










         <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-white">
      <form onSubmit={handleUpdateProfile} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">User Name</span>
          </label>
          <input type="text" name='username' placeholder="usernamme" defaultValue={profile.username} className="input input-bordered bg-white" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">First Name</span>
          </label>
          <input type="text" name='first_name' placeholder="first name" defaultValue={profile.first_name}  className="input input-bordered bg-white" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Last Name</span>
          </label>
          <input type="text" name='last_name' placeholder="last name" defaultValue={profile.last_name} className="input input-bordered bg-white" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" defaultValue={profile.email}  className="input input-bordered bg-white" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
            <button className="btn bg-white btn-ghost" onClick={(e)=>{e.preventDefault(); document.getElementById('my_modal_3').showModal()}}>Change Password</button>
<dialog id="my_modal_3" className="modal"></dialog>

          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Save</button>
        </div>
      </form>
    </div>
        </div>
    );
};

export default UpdateProfile;