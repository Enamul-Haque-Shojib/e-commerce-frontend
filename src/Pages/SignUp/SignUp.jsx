import axios from "axios";
import { Link } from "react-router-dom";


const SignUp = () => {
    const handleSignUp = async(event) =>{
        event.preventDefault();
        const username = event.target.username.value;
        const first_name = event.target.first_name.value;
        const last_name = event.target.last_name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirm_password = event.target.confirm_password.value;
        const usersignup = {username, first_name, last_name, email, password, confirm_password}
        // console.log('Helo->', username, password);
        const signup = "https://enamulhaque.pythonanywhere.com/author/register/";
    
      // fetch(login, {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(
      //       usersignup),
      // })
      //   .then((response) => response.json())
      //   .then((data) => {
      //     console.log(data);
          
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
      await axios.post(signup,
        usersignup)
            .then((response) => {
                console.log(response.data); 
              
                
              })
              .catch((error) =>{
                console.log(error);
              });
    
      }
    return (
        <div className="hero min-h-screen bg-white w-4/5 mx-auto">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Sign Up now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-white">
      <form onSubmit={handleSignUp} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">User Name</span>
          </label>
          <input type="text" name='username' placeholder="usernamme" className="input input-bordered bg-white" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">First Name</span>
          </label>
          <input type="text" name='first_name' placeholder="first name" className="input input-bordered bg-white" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Last Name</span>
          </label>
          <input type="text" name='last_name' placeholder="last name" className="input input-bordered bg-white" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered bg-white" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered bg-white" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input type="password" name='confirm_password' placeholder="confirmPassword" className="input input-bordered bg-white" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </form>
      <p>Already have Account? <Link to='/login'>Login</Link></p>
    </div>
  </div>
</div>
    );
};

export default SignUp;




// import axios from "axios";
// import { Link } from "react-router-dom";


// const SignUp = () => {
//     const handleSignUp = async(event) =>{
//         event.preventDefault();
//         const username = event.target.username.value;
//         const first_name = event.target.first_name.value;
//         const last_name = event.target.last_name.value;
//         const email = event.target.email.value;
//         const password = event.target.password.value;
//         const re_password = event.target.confirm_password.value;
//         const usersignup = {username, first_name, last_name, email, password, re_password}
//         // console.log('Helo->', username, password);
//         // const signup = "https://enamulhaque.pythonanywhere.com/author/register/";
//         const signup = "https://click-cart-bzwk.onrender.com/api/v1/auth/users/";
    
//       // fetch(login, {
//       //   method: "POST",
//       //   headers: {
//       //     "Content-Type": "application/json",
//       //   },
//       //   body: JSON.stringify(
//       //       usersignup),
//       // })
//       //   .then((response) => response.json())
//       //   .then((data) => {
//       //     console.log(data);
          
//       //   })
//       //   .catch((err) => {
//       //     console.log(err);
//       //   });
//       await axios.post(signup,
//         usersignup)
//             .then((response) => {
//                 console.log(response.data); 
              
                
//               })
//               .catch((error) =>{
//                 console.log(error);
//               });
    
//       }
//     return (
//         <div className="hero min-h-screen bg-white w-4/5 mx-auto">
//   <div className="hero-content flex-col lg:flex-row-reverse">
//     <div className="text-center lg:text-left">
//       <h1 className="text-5xl font-bold">Sign Up now!</h1>
//       <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
//     </div>
//     <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-white">
//       <form onSubmit={handleSignUp} className="card-body">
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">User Name</span>
//           </label>
//           <input type="text" name='username' placeholder="usernamme" className="input input-bordered bg-white" required />
//         </div>
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">First Name</span>
//           </label>
//           <input type="text" name='first_name' placeholder="first name" className="input input-bordered bg-white" required />
//         </div>
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">Last Name</span>
//           </label>
//           <input type="text" name='last_name' placeholder="last name" className="input input-bordered bg-white" required />
//         </div>
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">Email</span>
//           </label>
//           <input type="email" name='email' placeholder="email" className="input input-bordered bg-white" required />
//         </div>
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">Password</span>
//           </label>
//           <input type="password" name='password' placeholder="password" className="input input-bordered bg-white" required />
//         </div>
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">Confirm Password</span>
//           </label>
//           <input type="password" name='confirm_password' placeholder="confirmPassword" className="input input-bordered bg-white" required />
//         </div>
//         <div className="form-control mt-6">
//           <button className="btn btn-primary">Sign Up</button>
//         </div>
//       </form>
//       <p>Already have Account? <Link to='/login'>Login</Link></p>
//     </div>
//   </div>
// </div>
//     );
// };

// export default SignUp;