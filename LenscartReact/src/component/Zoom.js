
import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BiSolidChevronLeft,BiSolidChevronRight } from "react-icons/bi";

import s1 from '../images/z1.jpg';
import s2 from '../images/z2.jpg';
import s3 from '../images/z3.jpg';
import s4 from '../images/z4.jpg';
import s5 from '../images/z5.jpg';
import s6 from '../images/z6.jpg';
import s7 from '../images/z7.jpg';
import s8 from '../images/z8.jpg';
import s9 from '../images/z9.jpg';
import s10 from '../images/z10.jpg';
import z1 from '../images/z1.jpg';
import z2 from '../images/z2.jpg';
import z3 from '../images/z3.jpg';
import z4 from '../images/z4.jpg';
import z5 from '../images/z5.jpg';
import z6 from '../images/z6.jpg';
import z7 from '../images/z7.jpg';
import z8 from '../images/z8.jpg';
import z9 from '../images/z9.jpg';
import z10 from '../images/z10.jpg';


function SampleNextArrow(props) {
    const {onClick } = props;
    return (
      <div className='arright1 arrw'onClick={onClick}>
           <BiSolidChevronRight/>
      </div>
    );
  }
  

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div className='arleft1 arrw' onClick={onClick}>
         <BiSolidChevronLeft/>
      </div>
    );
  }
  


function Zoom({sendChild,count}) {
     

  const [c,setc]=useState(count)
  const dataDigitalBestSeller = [ s1,s2,s3,s4,s5,s6,s7,s8,s9,s10];
  let z;
  const data = [z1,z2,z3,z4,z5,z6,z7,z8,z9,z10];
  data.map((i,index)=>{
           if(index+1==c){
              z=i;
           }
  })

  const reff=useRef();
  const reff1=useRef();

  useEffect(() => {
    const element = reff.current;
    console.log(element);
  
    if (element) {
      element.classList.add('zoom-in');
    }
    if(reff1.current){
      reff1.current.style.backgroundColor = 'rgba(0,0,0,0.5)';
    }
    return () => {
      if (element) {
        element.classList.remove('zoom-in');
      }
    };
  }, []);
  


    function handler(){
      const element = reff.current;

      if (element) {
        element.classList.add('zoom-out');
      }
      if(reff1.current){
        reff1.current.style.backgroundColor = 'transparent';
      }
      setTimeout(() => {
        sendChild(false);
      },1000);
    } 

  const settings = {
    dots:false,
    infinite:false,
    speed: 800,
    slidesToShow: 7,
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
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
     <>
        <div className="zoomgl1"  id="zoomimg1" ref={reff}>
             <div className="cross2" onClick={handler}> 
                 <svg width="1em" height="1em" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="m1.064 18.593 8.133-8.114 8.13 8.114 1.007-1.006-8.133-8.113 8.133-8.111L17.327.358l-8.13 8.114L1.064.358.057 1.363l8.132 8.11-8.132 8.114 1.007 1.006Z" fill="currentColor"></path>
                 </svg>
            </div>
            <div style={{height:"360px"}}>
                <div className="container">
                     <img className="image" src={z}/>
                {/* <div className="lens"></div> */}
                {/* <div className="result" id="iid"></div> */}
                </div>
             </div>
             <div>
             <Slider {...settings} className="imt">
                 {dataDigitalBestSeller.map((item,index) => (
                    <div  className={`imm ${index + 1 === c ? 'selected' : ''}`} onClick={()=>setc(index+1)} >
                        <img src={item} className='imgr' alt="" />
                   </div>
                 ))}
            </Slider>
             </div>
        </div>
        <div className='overlay' ref={reff1}>
       
        </div> 
     </>
  );
}

export default Zoom;


     
   
