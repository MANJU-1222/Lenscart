import React from 'react';
import { Link } from 'react-router-dom';

export default function Kids({passfromLeave2,passfromEnter2}) {

    function handler(){
        passfromLeave2(false)
   }
   function handler1(){
        passfromEnter2(true)
   }

  return (
    <div className='ttt' onMouseLeave={handler} onMouseEnter={handler1}>
      <div className="kids-wl">
        <Link to="#">
          <div className="kid">
            <img src="https://static1.lenskart.com/media/desktop/img/May22/glasses.jpg" alt="Eyeglasses" />
            <p>Eyeglasses</p>
          </div>
        </Link>
        <Link to='#'>
          <div className="kid">
            <img src="https://static1.lenskart.com/media/desktop/img/May22/computer-glasses.jpg" alt="Zero Power computer Glasses" />
            <p>Zero Power computer Glasses</p>
          </div>
        </Link>
        <Link to='#'>
          <div className="kid">
            <img src="https://static1.lenskart.com/media/desktop/img/May22/Sunnies.jpg" alt="Sunglasses" />
            <p>Sunglasses</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

