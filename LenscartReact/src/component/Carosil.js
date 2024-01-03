import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { BiSolidChevronLeft,BiSolidChevronRight } from "react-icons/bi";

import a1 from '../images/aquacolor1.jpg';
import a2 from '../images/aquacolor2.jpg';
import a3 from '../images/aquacolor3.png';
import a4 from '../images/aquacolor4.jpg';
import a5 from '../images/aquacolor5.jpg';
import a6 from '../images/aquacolor6.jpeg';
import a7 from '../images/aquacolor7.jpeg';


export const dataDigitalBestSeller = [
    {
      id: 1,
      title: 'Aquacolor Premium',
      price: '$499',
      linkImg:a1
    },
    {
      id: 2,
      title: 'Aquacolor Premium',
      price: '$499',
      linkImg:a3
   },
    {
      id: 3,
      title: 'Aquacolor Premium',
      price: '$499',
      linkImg:a4
    },
    {
      id: 4,
      title: 'Aqualens',
      price: '$279',
      linkImg:a5
     },
    {
      id: 5,
      title: 'Vincent Chase Polarized',
      price: '$2000',
      linkImg:a6
     },
    {
      id: 6,
      title: 'Aqualens',
      price: '$1499',
      linkImg:a2
     },
    {
      id: 7,
      title: 'Hooper',
      price: '$2000',
      linkImg:a7
    }
  ];


  function SampleNextArrow(props) {
    const {onClick } = props;
    return (
      <div className='arright arrw'onClick={onClick}>
           <BiSolidChevronRight/>
      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div className='arleft arrw' onClick={onClick}>
         <BiSolidChevronLeft/>
      </div>
    );
  }
  

function App() {
  const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    dots:false,
    infinite:false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
      linkDefault: a1,
    }));
  };

  return (
     <>
     <div className="recent">Recently Viewed Products</div>
    <div className="caros">
      <Slider {...settings}>
        {dataDigitalBestSeller.map((item) => (
          <div className="card">
            <div className="card-top">
              <img src={item.linkImg}  alt={item.title} onError={handleErrorImage} />
            </div>
            <div className="card-bottom">
                 <div className="aua">{item.title}<br/>{item.price}</div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
     </>
  );
}

export default App;



