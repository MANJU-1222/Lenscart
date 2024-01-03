import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {BiSolidChevronRight } from "react-icons/bi";


export default function Type1() {
  const arr1 = ['New Arrivals', 'Best Seller', 'Lenskart BLU Lenses', 'Trending', 'Computer Eyeglasses', 'Tinded Eyeglasses', 'Progressive Eyeglasses'];
  const arr2=['Rectangle Frames','Wayfarer Frames','Round Frames','Aviator Frames','Cat-Eye Frames','Rimless Frames','Halfrim Frames','Geometric Frames'];
  const arr3=['Switch Grip','Air Essentials','Urban Edit','Blend Edit','Sleek Steel','Switch-Magnetic Clips-On','Air Flex','Air Wrap','Classic Acetate','Essential Edit'];
  const arr4=['Vincent Chase ','Lenskart Air','John Jacobs','OJOS','New Balance','Lenskart STUDIO'];

  const [t,setT]=useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

   function handler1(item){
       setHoveredItem(item)
   } 
   function handler2(){
      setHoveredItem(null)
   }

  return (
    <div className='e1-2'>
      <div className="headings" >
        <ul>
          <li>Our Top Picks</li>
          <li>Frame Type</li>
          <li>Collection</li>
          <li style={{marginLeft:"25px"}}>Brands</li>
        </ul>
      </div>
      <div className='eyedrop2'>
           <div className='toppics'>
               <ul>
                  {arr1.map((item, index) => (
                           <li key={index} onMouseEnter={()=>handler1(item)} onMouseLeave={handler2}>
                                {item} <span className='a-arrow' style={{ opacity: hoveredItem === item ? 1 : 0 }}><BiSolidChevronRight /></span>
                           </li>
                 ))}
               </ul>
           </div>
           <div className='toppics'>
               <ul>
                  {arr2.map((item, index) => (
                        <li key={index} onMouseEnter={()=>handler1(item)} onMouseLeave={handler2}>
                             {item} <span className='a-arrow' style={{ opacity: hoveredItem === item ? 1 : 0 }}><BiSolidChevronRight /></span>
                        </li>
                 ))}
               </ul>
           </div>
           <div className='toppics' style={{width:"220px"}}>
               <ul>
                  {arr3.map((item, index) => (
                       <li key={index} onMouseEnter={()=>handler1(item)} onMouseLeave={handler2}>
                          {item} <span className='a-arrow' style={{ opacity: hoveredItem === item ? 1 : 0 }}><BiSolidChevronRight /></span>
                       </li>
                 ))}
               </ul>
           </div>
           <div className='toppics' >
               <ul>
                  {arr4.map((item, index) => (
                        <li key={index} onMouseEnter={()=>handler1(item)} onMouseLeave={handler2}>
                           {item}<span className='a-arrow' style={{ opacity: hoveredItem === item ? 1 : 0 }}><BiSolidChevronRight /></span>
                          </li>
                 ))}
               </ul>
           </div>
      </div>
    </div>
  );
}
