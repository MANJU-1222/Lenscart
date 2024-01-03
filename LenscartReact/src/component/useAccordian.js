import React, { useEffect } from 'react'

export default function useAccordian(st,inref) {
        useEffect(()=>{
            console.log("rendered");
                if(inref.current){
                    inref.current.classList.add('opened') ;
                }
        
                 return ()=>{
                    console.log("rendered stop");
                    if(inref.current){
                        inref.current.classList.remove('opened') 
                    }
                 }
           },[])
  return inref;
}
