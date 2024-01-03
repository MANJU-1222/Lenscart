import React from 'react'
import a1 from '../images/aquacolor1.jpg';
import a2 from '../images/aquacolor2.jpg';
import a3 from '../images/aquacolor3.png';
import a4 from '../images/aquacolor4.jpg';
import a5 from '../images/aquacolor5.jpg';
import a6 from '../images/aquacolor6.jpeg';
import a7 from '../images/aquacolor7.jpeg';
export default function Slide() {
  return (
    <div>
    <div className="recent">Recently Viewed Products</div>
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
    <div className='arrow'>
            <svg width="0.6em" height="0.6em" viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg" data-role="none" class="slick-arrow slick-prev" currentSlide="1" slideCount="7" style={{display:"block"}}><path d="M10 1 1.667 8.5 10 16" stroke="#666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
    </div>
    <div className="wrap">
       
        <div className="slide1">
            <div className="im2" style={{marginLeft:"0px"}}>
                       <div><img src={a1}/></div>
                       <div className="aua">Aquacolor premium <br/>₹ 1499 </div>
            </div>
            <div className="im2">
                  <div><img src={a2}/></div>
                  <div class="aua">Aquacolor premium <br/>₹ 499 </div>
            </div>
            <div className="im2">
                 <div><img src={a3} alt="nothing"/></div>
                 <div className="aua">Aqualens <br/>₹ 1499 </div>
            </div>
            <div className="im2">
                 <div><img src={a4}/></div>
                 <div className="aua">Hooper <br/>₹ 2000 </div>
            </div>
            <div className="im2">
                  <div><img src={a5}/></div>
                  <div className="aua">Vincent Chase<br/>Polarized<br/>₹ 2000</div>
            </div>
            <div className="im2">
                  <div><img src={a6}/></div>
                  <div className="aua">Aqualens <br/>₹ 279</div>
            </div>
            <div className="im2">
                  <div><img src={a7}/></div>
                  <div className="aua">Aquacolor premium <br/>₹ 499 </div>
            </div>
        </div>
      </div>
      <div className='arrow'>
           <svg width="0.6em" height="0.6em" viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg" data-role="none" className="slick-arrow slick-next" currentSlide="0" slideCount="7" style={{display:"block"}}><path d="m1 1 8.333 7.5L1 16" stroke="#666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
      </div>
    </div>
</div>
  )
}

