
import React, { useState } from 'react';
import Totaltype1 from './Totaltype1';
import Totaltype2 from './Totaltype2';
import TypeCom from './TypeCom';
import Type7 from './Type7';
import Kids from './Kidss';
import Eyetest from './Eyetest';
import StoreLocate from './StoreLocate';

export default function H3() {
  const [ch, setCh] = useState(Array(7).fill(false));

  const passFromLeave = (index) => {
    setCh((prevCh) => {
      const newCh = [...prevCh];
      newCh[index] = false;
      return newCh;
    });
  };

  const passFromEnter = (index) => {
    setCh((prevCh) => {
      const newCh = Array(7).fill(false);
      newCh[index] = true;
      return newCh;
    }); 
  };

  const setFun = (index) => {
    setCh((prevCh) => {
      const newCh = Array(7).fill(false);
      newCh[index] = true;
      return newCh;
    });
  };

  const components = [
    <Totaltype1 passfromLeave2={() => passFromLeave(0)} passfromEnter2={() => passFromEnter(0)} />,
    <TypeCom passfromLeave2={() => passFromLeave(1)} passfromEnter2={() => passFromEnter(1)} />,
    <Kids passfromLeave2={() => passFromLeave(2)} passfromEnter2={() => passFromEnter(2)} />,
    <Type7 passfromLeave2={() => passFromLeave(3)} passfromEnter2={() => passFromEnter(3)} />,
    <Totaltype2 passfromLeave2={() => passFromLeave(4)} passfromEnter2={() => passFromEnter(4)} />,
    <Eyetest passfromLeave2={() => passFromLeave(5)} passfromEnter2={() => passFromEnter(5)} />,
    <StoreLocate passfromLeave2={() => passFromLeave(6)} passfromEnter2={() => passFromEnter(6)} />,
  ];

  return (
    <>
      <div className='h3'>
        <div className='types' onMouseLeave={() => setCh(Array(7).fill(false))}>
          {Array.from({ length: 7 }, (_, index) => (
            <div key={index} className='type1' onMouseEnter={() => setFun(index)}>
              {[
                'EYEGLASSES',
                'COMPUTER GLASSES',
                'KIDS GLASSES',
                'CONTACT LENSES',
                'SUNGLASSES',
                'HOME EYE-TEST',
                'STORE LOCATER',
              ][index]}
            </div>
          ))}
        </div>
        <div className="bt">
                  <a href="#"><img src="https://static1.lenskart.com/media/desktop/img/May22/3dtryon1.png"/></a>
                  <a href="#"><img src="https://static1.lenskart.com/media/desktop/img/Mar22/13-Mar/blulogo.png"/></a>
                  <a href="#"><img src="https://static.lenskart.com/media/desktop/img/Feb22/18-Feb/goldlogo.jpg"/></a>
        </div>
      </div>

      {ch.map((isTrue, index) => isTrue && components[index])}
    </>
  );
}

