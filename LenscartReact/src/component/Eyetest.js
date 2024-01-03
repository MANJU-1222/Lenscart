import React from 'react';

export default function Eyetest({passfromLeave2,passfromEnter2}) {

    function handler(){
        passfromLeave2(false)
    }
    function handler1(){
        passfromEnter2(true)
    }


  return (
    <div className='ttt' onMouseLeave={handler} onMouseEnter={handler1}>
      <div className="eyetest">
        <div className="test1">
          <img src="https://static1.lenskart.com/media/desktop/img/HomeTryOut.png" alt="Eye Test Image" />
        </div>
        <div className="test2">
          <div className="ttts">
            <div className="test2-1">
              <p>Get your eyes checked at</p>
              <p>home</p>
            </div>
            <div className="test2-2">
              <p>A certified refractionist will visit you with </p>
              <p>latest eye testing machines & 100 trial frames</p>
            </div>
            <button className="bookbt">Book appointment</button>
          </div>
        </div>
      </div>
    </div>
  );
}
