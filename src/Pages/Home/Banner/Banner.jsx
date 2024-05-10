import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../assets/images/banner1.png'
import img2 from '../../../assets/images/banner2.png'
import img3 from '../../../assets/images/banner3.png'
import './Banner.css'

const Banner = () => {
    return (
        
            <Carousel className="text-center">
                <div className="hu">
                    <img src={img1} />
                    <p className="leg text-7xl">NEW AMAZING STUFF IS HERE</p>
                </div>
                <div className="hu">
                    <img src={img2} />
                    <p className="leg text-7xl">FASHION CHANGING ALWAYS</p>
                </div>
                <div className="hu">
                    <img src={img3} />
                    <p className="leg text-7xl">HIGHEST QUALITY COLLECTION</p>
                </div>
            </Carousel>
        
    );
};

export default Banner;