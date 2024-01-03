import React, { useRef, useState } from 'react'
import {BiSolidChevronRight } from "react-icons/bi";

export default function TypeCom({passfromLeave2,passfromEnter2}) {

    function handler(){
        passfromLeave2(false)
    }
    function handler1(){
        passfromEnter2(true)
    }

    const men=useRef();
    const women=useRef();
    const kid=useRef();
    const clas=useRef();
    const pre=useRef();

    const [sc,setsc]=useState(false);

    const Enterhandler1 = () => {
        setsc(false);
        men.current.style.backgroundColor = 'rgb(242, 236, 230)';
        women.current.style.backgroundColor = 'transparent';
        kid.current.style.backgroundColor = 'transparent';
        clas.current.style.backgroundColor = 'rgb(242, 236, 230)';
      }
      
    const Enterhandler2 = () => {
        setsc(false);
        women.current.style.backgroundColor = 'rgb(242, 236, 230)';
        men.current.style.backgroundColor = 'transparent';
        kid.current.style.backgroundColor = 'transparent';
        clas.current.style.backgroundColor = 'rgb(242, 236, 230)';
    };
    

    const Enterhandler3 = () => {
       setsc(true);
       kid.current.style.backgroundColor = 'rgb(242, 236, 230)';
       men.current.style.backgroundColor = 'transparent';
       women.current.style.backgroundColor = 'transparent';
       clas.current.style.backgroundColor = 'transparent';
       if(pre.current){
        pre.current.style.backgroundColor = 'transparent';
       }
    }
        

    const Enterchildhandler1=()=>{
        clas.current.style.backgroundColor = 'rgb(242, 236, 230)';
        if(pre.current) {
            pre.current.style.backgroundColor = 'transparent';
        }
    }  

    const Enterchildhandler2=()=>{
        clas.current.style.backgroundColor = 'transparent';
        pre.current.style.backgroundColor = 'rgb(242, 236, 230)';
    }

  return (
<div className='ttt' onMouseLeave={handler} onMouseEnter={handler1}>
<div className="e1-1">
         <div className="eyedrop2">
             <div className="gender">
                  <div class="box"  ref={men} onMouseEnter={Enterhandler1}>
                        <img src="https://static.lenskart.com/media/desktop/img/men_pic.png"/>
                        <p>Men</p>
                        <span className='arr'> <BiSolidChevronRight/></span>
                  </div>
                  <div className="box" ref={women} onMouseEnter={Enterhandler2}>
                        <img src="https://static.lenskart.com/media/desktop/img/women_pic.png"/>
                        <p>Women</p>
                        <span className='arr'> <BiSolidChevronRight/></span>
                  </div>
                  <div className="box" ref={kid} onMouseEnter={Enterhandler3}>
                        <img src="https://static.lenskart.com/media/desktop/img/kid_pic.png"/>
                        <p>Kids</p>
                        <span className='arr'> <BiSolidChevronRight/></span>
                  </div>
             </div>
             <div className='hed'>
                 <div  class="headings-1">
                      <p style={{marginLeft:"20px"}}>SELECT CATEGORY</p>
                  </div>
                  <div  className="selectcat" >
                       <div className="cat" style={{marginTop:"13px"}} ref={clas} onMouseEnter={Enterchildhandler1}>
                            CLASSIC EYEGLASSES<br/> Starting From $1200
                            <div className='arr' > <BiSolidChevronRight/></div>
                       </div>
                       {sc &&
                         <div className="cat" ref={pre} onMouseEnter={Enterchildhandler2}>
                             PREMIUM EYEGLASSES<br/> Starting From $3000
                            <div className='arr' > <BiSolidChevronRight/></div>
                          </div>
                       }
                  </div>
             </div>
         </div>
    </div>
</div>
  )
}
