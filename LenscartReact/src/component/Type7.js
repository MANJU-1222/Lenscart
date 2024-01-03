import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {BiSolidChevronRight } from "react-icons/bi";


export default function Type7({passfromLeave2,passfromEnter2}) {
  const arr1 = ['Aqualens', 'Bausch Lomp', 'soflens', 'Acuvue', 'Iconnect', 'AIcon'];
  const arr2=['Monthly','Day & Night','Daily','Yearly','Bi-weekly'];
  const arr3=['Spherical-(CYL<0.5)','Spherical+(CYL<0.5)','Cylindrical Power(>0.75)','Toric Power'];
  const arr4=['Green','Blue','Brown','Turquoise','View all colors'];
  const arr5=['Small','Large','View all solutions'];

  const [t,setT]=useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

   function handler1(item){
       setHoveredItem(item)
   } 
   function handler2(){
      setHoveredItem(null)
   }

   function handler3(){
       passfromLeave2(false)
   }
   function handler4(){
      passfromEnter2(true)
   }

  return (
<div className='ttt' onMouseLeave={handler3} onMouseEnter={handler4}>
<div className='e1-2'>
      <div className="headings" >
        <ul>
          <li>Brands</li>
          <li>Explore By Disposability</li>
          <li>Explore By Power</li>
          <li>Explore By Color</li>
          <li style={{marginLeft:"25px"}}>Solution</li>
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
           <div className='toppics' >
               <ul>
                  {arr5.map((item, index) => (
                        <li key={index} onMouseEnter={()=>handler1(item)} onMouseLeave={handler2}>
                           {item}<span className='a-arrow' style={{ opacity: hoveredItem === item ? 1 : 0 }}><BiSolidChevronRight /></span>
                          </li>
                 ))}
               </ul>
           </div>
      </div>
    </div>
</div>
  );
}
