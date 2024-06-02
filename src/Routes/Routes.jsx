import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import ClothDetails from "../Pages/Home/ClothDetails/ClothDetails";
import Login from "../Pages/Login/Login";
import WishList from "../Pages/WishList/WishList";
import CartList from "../Pages/CartList/CartList";
import SignUp from "../Pages/SignUp/SignUp";
import Profile from "../Pages/Profile/Profile";
import PrivateRoutes from "./PrivateRoutes";
import About from "../Pages/About/About";
import Success from "../Pages/Success/Success";
import Cencale from "../Pages/Cencale/Cencale";
import ContactUs from "../Pages/ContactUs/ContactUs";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
import ResetPassEmail from "../Pages/ForgotPassword/ResetPassEmail";
import ResetPssNew from "../Pages/ForgotPassword/ResetPssNew";
import Dashboard from "../Pages/Dashboard";
import ProductForm from "../Pages/ProductForm/ProductForm";
import Products from "../Pages/ProductForm/Products";
import UpdateProduct from "../Pages/ProductForm/UpdateProduct";



  export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'about',
            element:<About></About>
        },
        {
            path:'list/:id',
            element:<ClothDetails></ClothDetails>,
            loader: ({params}) => fetch(`https://e-commerce-backend-8r60.onrender.com/cloth/list/${params.id}/`)
        },
        {
          path:'profile',
          element:<PrivateRoutes
          ><Profile></Profile></PrivateRoutes>
        },
        {
          path:'wishlist',
          element:<PrivateRoutes><WishList></WishList></PrivateRoutes>
        },
        {
          path:'cartlist',
          element:<PrivateRoutes><CartList></CartList></PrivateRoutes>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'signup',
          element:<SignUp></SignUp>
        },
        {
          path:'success',
          element:<Success></Success>
        },
        {
          path:'cencale',
          element:<Cencale></Cencale>
        },
        {
          path:'contactus',
          element:<ContactUs></ContactUs>
        },
        {
          path:'updateprofile',
          element:<PrivateRoutes>
            <UpdateProfile></UpdateProfile>
          </PrivateRoutes>
        },
        {
          path:'dashboard',
          element:<PrivateRoutes>
            <Dashboard></Dashboard>
          </PrivateRoutes>
        },
        {
          path:'resetpassemail',
          element:
            <ResetPassEmail></ResetPassEmail>
        
        },
        {
          path:'resetpassnew/:uid/:token',
          element:<ResetPssNew></ResetPssNew>
        },
        {
          path:'productform',
          element:<ProductForm></ProductForm>
        },
        {
          path:'products',
          element:<Products></Products>
        },
        {
          path:'updateproducts',
          
        },
        {
          path:'products/:id',
          element:<UpdateProduct></UpdateProduct>,
          loader: ({params}) => fetch(`http://127.0.0.1:8000/api/v1/products/${params.id}/`)
      },
      ]
    },
  ]);