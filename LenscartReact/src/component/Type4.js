import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {BiSolidChevronRight } from "react-icons/bi";


export default function Type4() {
  const arr1 = ['John Jacobs', 'Vincent Chase', 'New Balance', 'Carrera', 'Fossil'];
  const arr2=['New Arrivals','Best Seller','Lenskart BLU Lenses','Trending','Progressive Eyeglasses'];
  const arr3=['Rectangle Frames','Round Frames','Square Frames','Aviator Frames','Cat-Eye Frames','Rimless Frames','Halfrim Frames'];
  const arr4=['Masaba','Rhapsody','Surrealist - Powered By','Roman Holiday','Safari','Dreamscapes Edit','Downtown Edit','Rich Acetate'];

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
          <li>Brands</li>
          <li>Our Top Picks</li>
          <li>Frame Shape</li>
          <li style={{marginLeft:"25px"}}>Collection</li>
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
