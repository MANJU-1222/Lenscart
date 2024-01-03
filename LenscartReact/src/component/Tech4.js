import React, { useRef } from 'react';
import useAccordian from './useAccordian';
export default function Tech4({st}) {

    const inref=useRef('');

    useAccordian(st,inref);


  return (
    <div className="acc2" id="accordion-content4" ref={inref}>
        <div className="sumary" style={{paddingTop:"20px",paddingBottom:"10px"}}>
           <div style={{textAlign:"center"}}>NO REVIEWS</div>
            <div><button>WRITE A REVIEW</button></div>
        </div>
    </div>
  )
}
