import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {BiSolidChevronRight } from "react-icons/bi";


export default function Type5() {
  const arr1 = [ 'Best Seller', 'New Arrivals','Power Sunglasses'];
  const arr2=['Aviator','Rounders','Wayfarer','Aviator Frames','Hexagon','Cat-Eye','Clubmaster'];
  const arr3=['Maverick','Fashion Essentials','Aerodynamics','Glam Slam','Havana','Polarized','Power Sunglasses'];
  const arr4=['Vincent Chase ','John Jacobs','OJOS'];

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
          <li>Shape</li>
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
