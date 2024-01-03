import React, { useEffect, useRef } from 'react';
import useAccordian from './useAccordian';
export default function Tech({ st}) {

   const inref=useRef('');

   useAccordian(st,inref);

  return (
    
    <div className="acc2" id="accordion-content1" ref={inref}>

      <div className="summary1">
        <div>
          <ul style={{ paddingLeft: '0px' }}>
            <li>Product id</li>
            <li>Model No.</li>
            <li>Frame Size</li>
            <li>Frame Width</li>
            <li>Frame Dimensions</li>
            <li>Frame colour</li>
          </ul>
        </div>
        <div className="summ">
          <ul>
            <li>209527</li>
            <li>VC S15797</li>
            <li>Medium</li>
            <li>141 mm</li>
            <li>61-15-145</li>
            <li>Gold</li>
          </ul>
        </div>
      </div>
      <div className="summary1" style={{ color: "#00bac6", fontSize: "13px", fontFamily: "LKFuturaStd-Medium", marginTop: '-10px', paddingBottom: "10px", letterSpacing: "1.3px" }}>
        Show All Information
      </div>
    </div>
  );
}
