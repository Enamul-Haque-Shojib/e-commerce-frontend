import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import { useEffect, useState } from 'react';

// import img1 from '../../../assets/images/shirtcat.jpg'
// import img2 from '../../../assets/images/capcat.jpg'
// import img3 from '../../../assets/images/hatcat.jpg'
// import img4 from '../../../assets/images/tshirtcat.jpg'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import '../Category/Category.css'





const Category = () => {

    const [cats, setCats] = useState([]);

    // console.log(cats);
    
    useEffect(() => {
        fetch('https://e-commerce-backend-8r60.onrender.com/cloth/category/')
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          setCats(data)
        })
        .catch((err) => {
          console.log(err);
        });
    }, [])



    return (
        <section className='w-10/12 mx-auto'>
         

          <SectionTitle
            subHeading={'Sub Heading'}
            heading={'Heading'}

          ></SectionTitle>
          

          <Swiper 
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 60,
          stretch: 0,
          depth: 100,
          modifier: 1,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="swiper_container"
      >
        {/* {
          cats.map((category) => <SwiperSlide className='' key={category.id}>
            
            <img  src={category.image} alt="" />
            
            <h3 className='text-4xl text-white -mt-20 text-center'>{category.name}</h3>
            </SwiperSlide>)
         } */}
        {
          cats.map((category) => <SwiperSlide className='' key={category.id}>
            
            <img  src={category.image} alt="" />
            
            <h3 className='text-4xl text-white -mt-20 text-center'>{category.name}</h3>
            </SwiperSlide>
          
      

            )
         }

{/* <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div> */}

        </Swiper>
     
    </section>
    );
};

export default Category;