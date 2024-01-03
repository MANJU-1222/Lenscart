import React, { useRef, useState } from 'react'
import {BiSolidChevronRight } from "react-icons/bi";

export default function Typesun(props) {
   
   const {display1,display2}=props;

    const men=useRef();
    const women=useRef();
    const clas=useRef();
    const pre=useRef();

    const Enterhandler1 = () => {
        setsc(true);
        men.current.style.backgroundColor = 'rgb(242, 236, 230)';
        women.current.style.backgroundColor = 'transparent';
        if (pre.current && pre.current.style.backgroundColor !== 'rgb(242, 236, 230)') {
            if (clas.current) {
                clas.current.style.backgroundColor = 'rgb(242, 236, 230)';
            }
        }
        if(men.current.style.backgroundColor == 'rgb(242, 236, 230)'&& clas.current.style.backgroundColor == 'rgb(242, 236, 230)'){
            display1(true);
        }
      }

    const Enterhandler2 = () => {
        setsc(true);
        women.current.style.backgroundColor = 'rgb(242, 236, 230)';
        men.current.style.backgroundColor = 'transparent';
        if (pre.current  && pre.current.style.backgroundColor !== 'rgb(242, 236, 230)') {
            if (clas.current) {
                clas.current.style.backgroundColor = 'rgb(242, 236, 230)';
            }
        }
        if(women.current.style.backgroundColor == 'rgb(242, 236, 230)'&& clas.current.style.backgroundColor == 'rgb(242, 236, 230)'){
            display1(true);
        }
    };

    const Enterchildhandler1=()=>{
        display1(true);
        clas.current.style.backgroundColor = 'rgb(242, 236, 230)';
        if(pre.current) {
            pre.current.style.backgroundColor = 'transparent';
        }
    }  

    const Enterchildhandler2=()=>{
        display2(true);
        clas.current.style.backgroundColor = 'transparent';
        pre.current.style.backgroundColor = 'rgb(242, 236, 230)';
    }
      

    const [sc,setsc]=useState(true);


  return (
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
                       <div className="cat" ref={pre} onMouseEnter={Enterchildhandler2}>
                             PREMIUM EYEGLASSES<br/> Starting From $3000
                            <div className='arr' > <BiSolidChevronRight/></div>
                       </div>
                  </div>
             </div>
         </div>
    </div>
  )
}
