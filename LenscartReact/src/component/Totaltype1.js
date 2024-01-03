import React, { useState } from 'react'
import Type from './Type'
import Type1 from './Type1'
import Type2 from './Type2'
import Type3 from './Type3'
import Type4 from './Type4'

export default function Totaltype1({passfromLeave2,passfromEnter2}) {

   const [st1,setst1]=useState(true);
   const [st2,setst2]=useState(false);
   const [st3,setst3]=useState(false);
   const [st4,setst4]=useState(false);

   function handler(){
      passfromLeave2(false)
   }
   function handler1(){
      passfromEnter2(true)
   }

   function display1(data){
      setst1(data);
      setst2(false);
      setst3(false);
      setst4(false);
   }
   function display2(data){
      setst1(false);
      setst2(data);
      setst3(false);
      setst4(false);
   }
   function display3(data){
      setst1(false);
      setst2(false);
      setst3(data);
      setst4(false);
    } 
   function display4(data){
       setst4(data);
       setst1(false);
       setst2(false);
       setst3(false);
   }

  return (
    <div className='ttt' onMouseLeave={handler} onMouseEnter={handler1}>
        <div><Type display1={display1} display2={display2} display3={display3} display4={display4}/></div>
        {st1 &&  <div> <Type1/></div>}
        {st2 && <div><Type2/></div>}
        {st3 && <div><Type3/></div> }
        {st4 && <div><Type4/></div>}
    </div>
  )
}
