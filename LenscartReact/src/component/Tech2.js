import React, { useRef,useEffect } from 'react'
import store from '../images/store.webp';
import useAccordian from './useAccordian';
export default function Tech2({st}) {

    const inref=useRef('');
    useAccordian(st,inref);
  return (
    <div className="acc2" id="accordion-content2" ref={inref}>
    <div className="summary1" style={{marginBottom:"10px"}}>
        <img src={store} style={{borderRadius:"5px"}}/>
    <div className="summ2">
        Please Share Your<br/> Location To See<br/> Nearby Stores
        <div style={{color:"#00bac6",fontSize:"13px",fontFamily:"LKFuturaStd-Medium",marginTop:"5px",letterSpacing:"1.3px"}}>Store Locater</div>
    </div>
    </div>
</div>
  )
}
