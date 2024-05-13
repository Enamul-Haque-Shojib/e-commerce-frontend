import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../Providers/AuthProvider";


const Navbar = () => {
  const {user, setUser, profileImage, userImage} = useContext(AuthContext);

  const handlingLogout =()=>{
    
    // setUser(null);
    
    const token = JSON.parse(localStorage.getItem('token'));

// console.log(token);
    const logout = "https://enamulhaque.pythonanywhere.com/author/logout/";

  fetch(logout,{
    method: 'GET',
    headers:{
      'Authorization': token,
      'content-type': 'application/json',
    }
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('>>>>Navbar>>>>>>',data);
      setUser(null);
      localStorage.removeItem('token');
      
      
      
    })
    .catch((err) => {
      console.log(err);
    });
}
    return (
        <div className="">
            <div className="navbar bg-base-300 fixed z-10 bg-opacity-30 text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
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
      {user && <li><Link to='/wishlist'>Wish List</Link></li>}
      {user && <li><Link to='/cartlist'>Cart List</Link></li>}
      {/* {user && <li><Link to='/profile'>Profile</Link></li>} */}
      
      
    </ul>
  </div>
  <div className="navbar-end">
  {user && <li><Link to='/profile'>{
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
      }
  </div>
</div>
        </div>
    );
};

export default Navbar;