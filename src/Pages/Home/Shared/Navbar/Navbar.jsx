import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../Providers/AuthProvider";


const Navbar = () => {
  const {user, setUser, profileImage, userImage, handlingLogout} = useContext(AuthContext);

//   const handlingLogout =()=>{
    
//     // setUser(null);
    
//     const token = JSON.parse(localStorage.getItem('token'));

// // console.log(token);
//     const logout = "https://enamulhaque.pythonanywhere.com/author/logout/";

//   fetch(logout,{
//     method: 'GET',
//     headers:{
//       'Authorization': token,
//       'content-type': 'application/json',
//     }
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       console.log('>>>>Navbar>>>>>>',data);
//       setUser(null);
//       localStorage.removeItem('token');
      
      
      
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }
    return (
        <div className="">
            <div className="navbar bg-base-300 fixed z-10 bg-opacity-30 text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 lg:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to='/'>Home</Link></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">ClickCart</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/contactus'>Contact Us</Link></li>
      <li><Link to='/productform'>Product Form</Link></li>
      <li><Link to='/products'>Products</Link></li>
      {user && <li><Link to='/dashboard'>Dashboard</Link></li>}
      {/* {user && <li><Link to='/wishlist'>Wish List</Link></li>}
      {user && <li><Link to='/cartlist'>Cart List</Link></li>} */}
    </ul>
  </div>
  <div className="navbar-end">
    
  {/* {user && <li><Link to='/profile'>{
                  userImage ? 
                  <small><img className="w-8 h-8 rounded-full" src={`https://enamulhaque.pythonanywhere.com/${profileImage}`} alt="Album"/></small>
                  :

                  <small><img src={profileImage} alt="Album"/></small>
                }
              </Link></li>}
    
      {
        user ?
        <button onClick={handlingLogout} className="text-base">Logout</button>
        :
        <Link to='/login'>Login</Link> 
      } */}

      <div className="flex-none">
      {
      user ?
      <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
</svg>
          
          <span className="badge badge-sm indicator-item">8</span>
        </div>
      </div>
      <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 shadow bg-base-300 bg-opacity-30 text-white">
        <div className="card-body">
          <span className="font-bold text-lg">8 Items</span>
          <div className="card-actions">
            <Link to='/wishlist' className="btn btn-primary btn-block">View Wish</Link>
          </div>
        </div>
      </div>
    </div>
    :
    <div></div>
    }
    {
      user ?
      <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item">8</span>
        </div>
      </div>
      <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 shadow bg-base-300 bg-opacity-30 text-white">
        <div className="card-body">
          <span className="font-bold text-lg">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <Link to="cartlist" className="btn btn-primary btn-block">View cart</Link>
          </div>
        </div>
      </div>
    </div>
    :
    <div></div>
    }
    
    {
      user ? 
      <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          {
            userImage ? 
            <img alt="Tailwind CSS Navbar component" src={`https://e-commerce-backend-8r60.onrender.com/${profileImage}`} />
            :
            <img alt="Tailwind CSS Navbar component" src={profileImage} />
          }
          
        </div>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-base-300 bg-opacity-30 text-white">
        <li>
          <Link to='/profile' className="justify-between">
            Profile
            <span className="badge">New</span>
          </Link>
        </li>
        <li><Link>Settings</Link></li>
        <li><Link onClick={handlingLogout} >Sign Out</Link></li>
      </ul>
    </div>
    :
    <ul className="menu menu-horizontal px-1">
      <li><Link to='/login'>Login</Link> </li>
      <li><Link to='/signup'>Sign Up</Link> </li>
    </ul>

    }
    
  </div>
  </div>
</div>


        </div>
    );
};

export default Navbar;