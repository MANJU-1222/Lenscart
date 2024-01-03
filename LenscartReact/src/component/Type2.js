import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {BiSolidChevronRight } from "react-icons/bi";


export default function Type2() {
  const arr1 = ['New Arrivals', 'Best Seller','Trending'];
  const arr2=['Rectangle Frames','Wayfarer Frames','Round Frames','Cat-Eye Frames','Oval Frames','Geometric Frames'];
  const arr3=['Hooper Mini','Astra','Flexi','Stello','Gripzy','Locke','Poppin'];
  const arr4=['2-5 Yrs ','5-8 Yrs','8-12 Yrs'];

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
          <li style={{marginLeft:"25px"}}>AGE</li>
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
