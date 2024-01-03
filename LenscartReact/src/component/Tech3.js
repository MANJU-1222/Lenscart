import React, {useRef } from 'react';
import useAccordian from './useAccordian';
export default function Tech3({st}) {

  const inref=useRef('');

  useAccordian(st,inref);
  return (
    <div className="acc2" id="accordion-content3" ref={inref}>
    <div className="input-container summary1" style={{paddingBottom:"10px"}}>
          <div className="input-wrapper">
              <input type="text" id="input" class="animated-input" required/>
              <label for="input" className="placeholder">Enter Pin Code</label>
              <button className="InputButton">CHECK</button>
          </div>
    </div>
 </div>
  )
}
