import React, { useRef, useState } from 'react'
import bubble from "../images/bubble.png"
import tick from "../images/tick.svg"
import tryon from "../images/tryon.webp"
import f1 from "../images/fashion.webp"
import f2 from "../images/fashion2.webp"
import f3 from "../images/fashion3.webp"
import f4 from "../images/fashion4.webp"
import f5 from "../images/fashion5.jpg"
import f6 from "../images/fashion6.webp"
import f7 from "../images/fashion7.webp"
import f8 from "../images/fashion8.webp"
import f9 from "../images/fashion9.webp"
import Tech from './tech'
import Tech2 from './Tech2'
import Tech3 from './Tech3'
import Tech4 from './Tech4'

export default function Right() {

    const [states, setStates] = useState([false, false, false, false]);

    const toggleAccordion = (index) => {
      const newStates = states.map((state, i) => (i === index ? !state : false));
      setStates(newStates);
    };

  return (
       <>

<div className='right'>
        <div className='rrr'>
            <div className='rpart1'>
                Problem in placing order ? Give a missed call <span style={{color: "rgb(51, 122, 183)"}}>&nbsp;1800<br/>111-111</span>
            </div>
            <div>
            <div style={{display: "flex"}}>
                <div>
                    <div className="rp-1">Vincent Chase</div>
                    <div className="rp-2">Gold Full Rim Rectangle</div>
                    <div className="rp-2 rp-3">Size : Wide&nbsp;<sub style={{color: "#333"}}><svg width="1.2em" height="1.2em" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.383 5h2v2h-2V5Zm0 4h2v6h-2V9Zm1-9c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z" fill="currentColor"></path></svg></sub></div>
                    <div className="rp-4">₹1000<sub class="rp-41">(₹1000 with GST)</sub></div>
                </div>
                {/*
                <div className="Icon">
                    <svg width="1.8em" height="1.8em" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" class="wishlist-icon">
                       <path d="M12 21.593C6.37 16.054 1 11.296 1 7.191 1 3.4 4.068 2 6.281 2c1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447C20.266 2.01 23 3.631 23 7.191c0 4.069-5.136 8.625-11 14.402M17.726 1.01c-2.203 0-4.446 1.042-5.726 3.238C10.715 2.042 8.478 1 6.281 1 3.098 1 0 3.187 0 7.191 0 11.852 5.571 16.62 12 23c6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181"></path>
                    </svg>
                </div> */}
            </div>
            <div>
                <img src={bubble} className="bubble" />
            </div>
            </div>
            <div className='rpart2'>
            <div>
                <div className="uv">
                    <div>
                        <p className="uv1">With 100% UV Protection</p>
                        <p className="uv2">Get 1 for Rs 800 | 2 For Rs 1000 + <br/> Cashback with Gold Membership</p>
                    </div>
                    <div>
                        <img src={tick} style={{marginTop: "20px"}}/>
                    </div>
                </div>
                <button className="buybt">
                        <p>BUY NOW</p>
                        <p style={{fontSize:"11.6667px"}}>with 1 year warranty</p>
                </button>
                <button className="tryonbt">
                         <div className="trytxt">Try On</div>
                         <img src={tryon} className="tryim"/>
                </button>
            </div>
            <div>
            <div className="down1" style={{ paddingBottom: "10px" }}>
                    <div className="dn" id="toggleButton1" onClick={()=>toggleAccordion(0)}>
                        <div>Technical Information</div>
                        <div className={`arri ${states[0] ? 'rotate180' : ''}`}></div>
                    </div>
                    {states[0] && <Tech st={states[0]} />} {console.log(states[0])}
                </div>
                <div className="down1">
                    <div className="dn" id="toggleButton2"  onClick={()=>toggleAccordion(1)}>
                        <div>Visit Nearby Store</div>
                        <div  className={`arri ${states[1] ? 'rotate180' : ''}`}></div>
                    </div>
                    {states[1] && <Tech2 st={states[1]}  />}
                </div>
                <div className="down1">
                    <div className="dn" id="toggleButton2" onClick={()=>toggleAccordion(2)}>
                        <div>Check Delevery Options</div>
                        <div className={`arri ${states[2] ? 'rotate180' : ''}`} id="rotateDiv2"></div>
                    </div>
                    {states[2] && <Tech3 st={states[2]}  />}
                </div>
                <div className="down1">
                    <div className="dn" id="toggleButton2" onClick={()=>toggleAccordion(3)}>
                        <div>Review(0)</div>
                        <div className={`arri ${states[3] ? 'rotate180' : ''}`} id="rotateDiv2"></div>
                    </div>
                    {states[3] && <Tech4 st={states[3]}  />}
                </div>
            </div>
                <div>
                    <img className="fim1" src={f1} style={{marginTop: "10px"}}/>
                </div>
                <div className='viewim'>
                    <div>
                        <img className="fim1" src={f2}/>
                    </div>
                    <div>
                        <img className="fim1" src={f3}/>
                    </div>
                    <div>
                        <img className="fim1" src={f4}/>
                    </div>
                    <div>
                        <img className="fim1" src={f5}/>
                    </div>
                    <div>
                        <img className="fim1" src={f6}/>
                    </div>
                    <div>
                        <img className="fim1" src={f7}/>
                    </div>
                    <div>
                        <img className="fim1 jj" src={f8}/>
                    </div>
                    <div>
                        <img className="fim1" src={f9}/>
                    </div>
                </div>
            </div>
        </div>
</div>

       </>
     
      )


}
