import axios from "axios";
import { useParams } from "react-router-dom";


const ResetPssNew = () => {
    const {uid ,token } = useParams();
    console.log(uid, token);
    const handleResetPassNew=async(event) => {
        event.preventDefault();
        const new_password = event.target.new_password.value;
        const confirm_password = event.target.confirm_password.value;
        // console.log(new_password, confirm_password)
        let resetPassNewData = {};
        if (new_password === confirm_password){
          resetPassNewData = {confirm_password}
          console.log(resetPassNewData)
          const resetPassNewUrl = `https://enamulhaque.pythonanywhere.com/author/resetpassnew/${uid}/${token}`;
          await axios.post(resetPassNewUrl, resetPassNewData)
            .then((response) => {
                console.log(response.data);
                
              })
              .catch((error) =>{
                console.log(error);
              });
        }else{
          console.log('password does not match')
        }
  
      
    }
    return (
        <div className="hero min-h-screen bg-white w-4/5 mx-auto">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Make New Password</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-white">
            <form className="card-body" onSubmit={handleResetPassNew}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">New Password</span>
                </label>
                <input type="password" placeholder="new password" name="new_password" className="input input-bordered bg-white" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input type="password" placeholder="confirm password" name="confirm_password" className="input input-bordered bg-white" required />
              </div>
              
              <div className="form-control mt-6">
                <button className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default ResetPssNew;