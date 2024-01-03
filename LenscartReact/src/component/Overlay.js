import React, { useEffect,useRef } from 'react'

export default function Overlay() {
   
    const reff=useRef();

   useEffect(()=>{
        if(reff.current){
            reff.current.style.backgroundColor = 'blue';
        }
     
        return ()=>{
            if(reff.current){
                reff.current.style.backgroundColor = 'transparent';
            }
        }
      
   })

  return (
    <div className='overlay' ref={reff}>
       
    </div>
  )
}
