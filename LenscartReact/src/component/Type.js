import React, { useRef, useState } from 'react'
import {BiSolidChevronRight } from "react-icons/bi";

export default function Type(props) {
   
   const {display1,display2,display3,display4}=props;

    const men=useRef();
    const women=useRef();
    const kid=useRef();
    const clas=useRef();
    const pre=useRef();
    const com=useRef();

    const [sc,setsc]=useState(true);

    const Enterhandler1 = () => {
        setsc(true);
        men.current.style.backgroundColor = 'rgb(242, 236, 230)';
        women.current.style.backgroundColor = 'transparent';
        kid.current.style.backgroundColor = 'transparent';
        if (pre.current && com.current && pre.current.style.backgroundColor !== 'rgb(242, 236, 230)' && com.current.style.backgroundColor !== 'rgb(242, 236, 230)') {
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
        kid.current.style.backgroundColor = 'transparent';
        if (pre.current && com.current && pre.current.style.backgroundColor !== 'rgb(242, 236, 230)' && com.current.style.backgroundColor !== 'rgb(242, 236, 230)') {
            if (clas.current) {
                clas.current.style.backgroundColor = 'rgb(242, 236, 230)';
            }
        }
        if(women.current.style.backgroundColor == 'rgb(242, 236, 230)'&& clas.current.style.backgroundColor == 'rgb(242, 236, 230)'){
            display1(true);
        }
    };
    

    const Enterhandler3 = () => {
       setsc(false);
       display4(true);
       kid.current.style.backgroundColor = 'rgb(242, 236, 230)';
       men.current.style.backgroundColor = 'transparent';
       women.current.style.backgroundColor = 'transparent';
       clas.current.style.backgroundColor = 'rgb(242, 236, 230)';
    }
        

    const Enterchildhandler1=()=>{
        display1(true);
        clas.current.style.backgroundColor = 'rgb(242, 236, 230)';
        if(pre.current) {
            pre.current.style.backgroundColor = 'transparent';
        }
        if(com.current){
            com.current.style.backgroundColor = 'transparent';
        }
    }  

    const Enterchildhandler2=()=>{
        display2(true);
        clas.current.style.backgroundColor = 'transparent';
        pre.current.style.backgroundColor = 'rgb(242, 236, 230)';
        com.current.style.backgroundColor = 'transparent';
    }

    const Enterchildhandler3=()=>{
        display3(true);
        clas.current.style.backgroundColor = 'transparent';
        pre.current.style.backgroundColor = 'transparent';
        com.current.style.backgroundColor = 'rgb(242, 236, 230)';
    }

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
                       {sc &&
                           <div className="cat" ref={com} onMouseEnter={Enterchildhandler3} >
                               COMPUTER EYEGLASSES<br/> Starting From $500
                               <div className='arr' > <BiSolidChevronRight/></div>
                           </div>
                       }
                  </div>
             </div>
         </div>
    </div>
  )
}
