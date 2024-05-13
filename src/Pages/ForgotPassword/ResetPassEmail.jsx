import axios from "axios";


const ResetPassEmail = () => {

    const handleResetPassEmail=async(event) => {
        event.preventDefault();
        const email = event.target.email.value;
        // console.log(email)
        const resetPassEmailData = {email}
        const resetPassEmailUrl = "https://enamulhaque.pythonanywhere.com/author/resetpassemail/";
      await axios.post(resetPassEmailUrl, resetPassEmailData)
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
      <h1 className="text-5xl font-bold">Forgot Password?</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-white">
      <form className="card-body" onSubmit={handleResetPassEmail}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered bg-white" required />
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

export default ResetPassEmail;