import React, { useState } from 'react';
import img1 from "../images/glass1.jpg";
import img2 from "../images/glass2.jpg";
import img3 from "../images/glass3.jpg";
import img4 from "../images/glass4.jpg";
import img5 from "../images/glass5.jpg";
import img6 from "../images/glass6.jpg";
import img7 from "../images/glass7.jpg";
import img8 from "../images/glass8.jpg";
import img9 from "../images/glass9.jpg";
import img10 from "../images/glass10.jpg";

import SimpleSlider from './Carosil';
import Zoom from './Zoom';
export default function Left() {

   const [st,setst]=useState(false);
   const [count,setcount]=useState(0);

   const sendChild=(data)=>{
       setst(data);
   }

   const handler=()=>{
        setst(true);
   }

  return (
    <div className='left'>
      {st && <Zoom sendChild={sendChild} count={count}/>}
    <div className='l11'>
          <div className='part1'>
        <a href="#">Eyewear</a><p>/</p>
        <a href="#">Sunglasses</a><p>/</p>
        <a href="#">Brands</a><p>/</p>
        <a href="#">Vincent Chase</a><br/>
        <p className='gr'>/ Grey Gold Full Rim Rectangle Vincent Chase Fashion Essentials VC S15797-C2 Sunglasses - 209527</p>
      </div>
      <div className='part2'>
        <div className="p2">
          <div className="gimg1" onClick={()=>{setst(true);setcount(1)}}>
            <img className="im1" src={img1} alt="" />
          </div>
          <div className="gimg1" onClick={()=>{setst(true);setcount(2)}}>
            <img className="im1" src={img2} alt="" />
          </div>
        </div>
        <div className="p2">
          <div className="gimg1" onClick={()=>{setst(true);setcount(3)}}>
            <img className="im1" src={img3} alt="" />
          </div>
          <div className="gimg1" onClick={()=>{setst(true);setcount(4)}}>
            <img className="im1" src={img4} alt="" />
          </div>
        </div>
        <div className="p2">
          <div className="gimg1" onClick={()=>{setst(true);setcount(5)}}>
            <img className="im1" src={img5} alt="" />
          </div>
          <div className="gimg1" onClick={()=>{setst(true);setcount(6)}}>
            <img className="im1" src={img6} alt="" />
          </div>
        </div>
        <div className="p2">
          <div className="gimg1" onClick={()=>{setst(true);setcount(7)}}>
            <img className="im1" src={img7} alt="" />
          </div>
          <div className="gimg1" onClick={()=>{setst(true);setcount(8)}}>
            <img className="im1" src={img8} alt="" />
          </div>
        </div>
        <div className="p2">
          <div className="gimg1" onClick={()=>{setst(true);setcount(9)}}>
            <img className="im1" src={img9} alt="" />
          </div>
          <div className="gimg1" onClick={()=>{setst(true);setcount(10)}}>
            <img className="im1" src={img10} alt="" />
          </div>
        </div>
      </div>
      <SimpleSlider/>
    </div>
    
    </div>
  );
}
