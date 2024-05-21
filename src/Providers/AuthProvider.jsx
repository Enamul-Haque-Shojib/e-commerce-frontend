// import { createContext, useEffect, useState } from "react";
// import defaultProfileImage from '../assets/images/profile1.png';

// export const AuthContext = createContext(null);

// const AuthProvider = ({children}) => {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [reviews, setReviews] = useState([]);
//     const [ratings, setRatings] = useState(0.0);
//     const [profile, setProfile] = useState({});
//     const [profileImage, setProfileImage] = useState(defaultProfileImage);
//     const [userImage, setUserImage] = useState(false);
//     // console.log('user>>>>>>>>>>>',profileImage );
//     // console.log('profile>>>>>>>>>>>',profile, );


//     const token = JSON.parse(localStorage.getItem('token'))
//     // console.log('>>>>>>token>>>>>>',token)
    
//     useEffect(() => {
//         fetch('https://enamulhaque.pythonanywhere.com/author/user/',{
//             method: 'GET',
//             headers:{
//               'Authorization': token,
//               'content-type': 'application/json',
//             }
//           })
//           .then((response) => response.json())
//         .then((data) => {
//           // console.log(data.profile_image.profile_image);
          
//           if(data.data=='null'){
//             setUser(null);
//             setLoading(false);
//             localStorage.removeItem('token');
//           }else{
//             setUser(data.token.user);
//             setProfile(data.profile);
//             if(data.profile_image.profile_image==null){
//               // console.log('no profile image')
//               setProfileImage(defaultProfileImage)
//               setUserImage(false)
//             }else{
//               setProfileImage(data.profile_image.profile_image);
//               setUserImage(true)
//             }
//             setLoading(false);
//           }
          
           
//         })
//         .catch((err) => {
//           console.log(err);
//           setUser(null)
//           setLoading(false);
//           localStorage.removeItem('token');
//         });
//     }, [token])


    
//     const authInfo = {
//         user,
//         loading,
//         setUser,
//         reviews,
//         setReviews,
//         setRatings,
//         ratings,
//         profile,
//         setProfile,
//         profileImage,
//         setProfileImage,
//         userImage,
//         setUserImage

//     }
//     return (
//         <AuthContext.Provider value={authInfo}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthProvider;




import { createContext, useEffect, useState } from "react";
import defaultProfileImage from '../assets/images/profile1.png'


export const AuthContext = createContext({
  currentTheme: 'light',
  changeCurrentTheme: () => {},
});

const AuthProvider = ({children}) => {
  const persistedTheme = localStorage.getItem('theme');
  const [theme, setTheme] = useState(persistedTheme || 'light');
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [reviews, setReviews] = useState([]);
    const [ratings, setRatings] = useState(0.0);
    const [profile, setProfile] = useState({});
    const [profileImage, setProfileImage] = useState(defaultProfileImage);
    const [userImage, setUserImage] = useState(false);
    // console.log('user>>>>>>>>>>>',profileImage );
    // console.log('profile>>>>>>>>>>>',profile, );

    const changeCurrentTheme = (newTheme) => {
      setTheme(newTheme);
      localStorage.setItem('theme', newTheme);
    };

    const token = JSON.parse(localStorage.getItem('token'))
    // console.log('>>>>>>token>>>>>>',token)
    
    const handlingLogout =()=>{
    
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

        document.documentElement.classList.add('[&_*]:!transition-none');
      if (theme === 'light') {
        document.documentElement.classList.remove('dark');
        document.documentElement.style.colorScheme = 'light';
      } else {
        document.documentElement.classList.add('dark');
        document.documentElement.style.colorScheme = 'dark';
      }
  
      const transitionTimeout = setTimeout(() => {
        document.documentElement.classList.remove('[&_*]:!transition-none');
      }, 1);
      
      return () => clearTimeout(transitionTimeout);
    }, [token, theme])


    
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
        setUserImage,
        changeCurrentTheme,
        currentTheme: theme,
        handlingLogout
        

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;




