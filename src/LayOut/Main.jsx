
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Pages/Home/Shared/Footer/Footer';
import Navbar from '../Pages/Home/Shared/Navbar/Navbar';


const Main = () => {
    const location = useLocation();
    // console.log(location);
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup');
    const noHeader = location.pathname.includes('dashboard');
    return (
        <div>
            {noHeaderFooter || noHeader || <Navbar></Navbar>}
            {/* <Navbar></Navbar> */}
            <Outlet></Outlet>
            {/* <Footer></Footer> */}
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;