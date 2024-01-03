import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {BiSolidChevronRight } from "react-icons/bi";


export default function Type3() {
  const arr1 = ['Starting from Rs.599', 'For your Kids'];
 
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
          <li>Collection</li>
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
      </div>
    </div>
  );
}
