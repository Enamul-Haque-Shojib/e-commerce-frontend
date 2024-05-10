import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";


const Login = () => {
    const {setUser} = useContext(AuthContext);

    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const username = form.username.value;
        const password = form.password.value;

        // console.log(username, password);
        const loginUser = {username, password};



        const login = "http://127.0.0.1:8000/author/login/";
    
        fetch(login, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginUser),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log('>>>>>>>>>>login>>>>>>>>>>>',data);
            if(data.token){
              localStorage.setItem('token', JSON.stringify(data.token)); 
              setUser(data.user);
              navigate(from, { replace: true });
            }
               
            else
            localStorage.setItem('token', JSON.stringify('null'));  
            // setUser(null);
          })
          .catch((err) => {
            
            console.log(err);
          });
    }

    return (
        <div className="hero min-h-screen bg-white w-4/5 mx-auto">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-white">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">User Name</span>
          </label>
          <input type="text" name='username' placeholder="username" className="input input-bordered bg-white" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered bg-white" required />
          <label className="label">
            <Link to="/resetpassemail" className="label-text-alt link link-hover">Forgot password?</Link>
          </label>
        </div>
        <div className="form-control mt-6">
          
          <input className="btn btn-primary" type="submit" value="Login" />
        </div>
      </form>
      <p>New Here? <Link to='/signup'>Create an Account</Link></p>
    </div>
  </div>
</div>
    );
};

export default Login;