import React from 'react';

export default function StoreLocate({passfromLeave2,passfromEnter2}) {

    function handler(){
        passfromLeave2(false)
    }
    function handler1(){
        passfromEnter2(true)
    }

  return (
    <div className='ttt' onMouseLeave={handler} onMouseEnter={handler1}>
      <div className="store">
        <div className="store1">
          <div className="st1">
            <div className="st1-1">
              <p>Over 1100+ Lenskart Store</p>
            </div>
            <div className="st1-2">
              <p>Experience eyewear in a whole new way: Visit your</p>
              <p>nearest store</p>
              <p>and treat yourself to 5000+ eyewear styles</p>
            </div>
            <button className="locatebt">Locate a Store</button>
          </div>
        </div>
        <div className="store2">
          <div className="city">
            <img src="https://static.lenskart.com/media/desktop/img/Delhi1.png" alt="Delhi" />
            <p>Delhi</p>
          </div>
          <div className="city">
            <img src="https://static.lenskart.com/media/desktop/img/Banglore1.png" alt="Bangalore" />
            <p>Bangalore</p>
          </div>
          <div className="city">
            <img src="https://static.lenskart.com/media/desktop/img/Mumbai1.png" alt="Mumbai" />
            <p>Mumbai</p>
          </div>
          <div className="city">
            <img src="https://static.lenskart.com/media/desktop/img/Ahmedabad1.png" alt="Ahmedabad" />
            <p>Ahmedabad</p>
          </div>
          <div className="city">
            <img src="https://static.lenskart.com/media/desktop/img/Chennai1.png" alt="Chennai" />
            <p>Chennai</p>
          </div>
          <div className="city">
            <img src="https://static.lenskart.com/media/desktop/img/Hyderabad1.png" alt="Hyderabad" />
            <p>Hyderabad</p>
          </div>
          <div className="city">
            <img src="https://static.lenskart.com/media/desktop/img/Cities1.png" alt="Cities" />
            <p>1100+<br />Cities</p>
          </div>
        </div>
      </div>
    </div>
  );
}
