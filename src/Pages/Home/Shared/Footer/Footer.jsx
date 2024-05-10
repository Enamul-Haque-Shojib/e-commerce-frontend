import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content">
  <aside>
  <Link to='/' className="decoration-0"><h5 className="text-white text-2xl">Shohoj Bazar</h5></Link>
  </aside> 
  <nav className="flex">
  <Link to="https://twitter.com/" target="_blank" className="decoration-0 text-white"><i className="fa-brands fa-x-twitter"></i></Link>
            <Link to="https://www.facebook.com/" target="_blank" className="decoration-0 text-white"><i className="fa-brands fa-facebook m-1"></i></Link>
            <Link to="https://www.tiktok.com/" target="_blank" className="decoration-0 text-white"><i className="fa-brands fa-tiktok m-1"></i></Link>
            <Link to="https://www.instagram.com/" target="_blank" className="decoration-0 text-white"><i className="fa-brands fa-instagram m-1"></i></Link>
  </nav> 
  <nav>
    <h6 className="footer-title">Services</h6> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Company</h6> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Legal</h6> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
        </div>
    );
};

export default Footer;