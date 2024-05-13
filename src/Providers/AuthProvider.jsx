import { createContext, useEffect, useState } from "react";
import defaultProfileImage from '../assets/images/profile1.png'
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [reviews, setReviews] = useState([]);
    const [ratings, setRatings] = useState(0.0);
    const [profile, setProfile] = useState({});
    const [profileImage, setProfileImage] = useState(defaultProfileImage);
    const [userImage, setUserImage] = useState(false);
    // console.log('user>>>>>>>>>>>',profileImage );
    // console.log('profile>>>>>>>>>>>',profile, );


    const token = JSON.parse(localStorage.getItem('token'))
    // console.log('>>>>>>token>>>>>>',token)
    
    useEffect(() => {
        
        
        fetch('https://enamulhaque.pythonanywhere.com/author/user/',{
            method: 'GET',
            headers:{
              'Authorization': token,
              'content-type': 'application/json',
            }
          })
          .then((response) => response.json())
        .then((data) => {
          // console.log(data.profile_image.profile_image);
          
          if(data.data=='null'){
            setUser(null);
            setLoading(false);
            localStorage.removeItem('token');
          }else{
            setUser(data.token.user);
            setProfile(data.profile);
            if(data.profile_image.profile_image==null){
              // console.log('no profile image')
              setProfileImage(defaultProfileImage)
              setUserImage(false)
            }else{
              setProfileImage(data.profile_image.profile_image);
              setUserImage(true)
            }
            setLoading(false);
          }
          
           
        })
        .catch((err) => {
          console.log(err);
          setUser(null)
          setLoading(false);
          localStorage.removeItem('token');
        });
    }, [token])


    
    const authInfo = {
        user,
        loading,
        setUser,
        reviews,
        setReviews,
        setRatings,
        ratings,
        profile,
        setProfile,
        profileImage,
        setProfileImage,
        userImage,
        setUserImage

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;




