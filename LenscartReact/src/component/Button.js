import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Button() {
    const navigate=useNavigate();

    const [clk,setClk]=useState(false);

    const handler=()=>{
          setClk(true);
          navigate('section');
    }

  return (
    <>
        <div style={{position:"relative",marginTop:'170px'}}>
             <button onClick={handler}>Section</button>
         </div>
    </>
  )
}
