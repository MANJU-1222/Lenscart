import React, { useState } from 'react'
import Typesun from './Typesun'
import Type5 from './Type5'
import Type6 from './Type6';

export default function Totaltype2({passfromLeave2,passfromEnter2}) {

   const [st1,setst1]=useState(true);
   const [st2,setst2]=useState(false);

   function handler(){
        passfromLeave2(false)
   }
   function handler1(){
        passfromEnter2(true)
   }


   function display1(data){
      setst1(data);
      setst2(false);
   }
   function display2(data){
      setst1(false);
      setst2(data);
   }

  return (
    <div className='ttt' onMouseLeave={handler} onMouseEnter={handler1}>
        <div><Typesun display1={display1} display2={display2}/></div>
        {st1 &&  <div> <Type5/></div>}
        {st2 &&  <div> <Type6/></div>}
        
    </div>
  )
}
