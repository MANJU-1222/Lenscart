import React, { startTransition, useState } from 'react'
import "./style1.css"
import "./style2.css"
import "./style3.css"
import "./style4.css"
import Header from './Header'
import Section1 from './section1';
import { Routes,Route, useNavigate, NavLink } from 'react-router-dom'
import Domore from './Domore'
import { Link } from 'react-router-dom'


export default function Over() {
  const navigate=useNavigate();

  const [cl,setCl]=useState(true);

  function handler(){
     setCl(false)
    navigate('section')
  }

  const display=(data)=>{
       setCl(data)
  }
  //  const handler=({isActive})=>{

  //   return {
  //       fontWeight: isActive ? 'bold':'normal',
  //       textDecoration: isActive ? 'none':'underline'
  //   }

  // }

  return (
    <div>
         <Header/>
         {/* <Section1/> */}
          {cl && <div style={{position:"relative",marginTop:'170px'}}>
             <button onClick={handler}>Section</button>
          </div>}

          {/* <div style={{position:"relative",marginTop:'170px'}}>
              <NavLink to={'section'}>Section</NavLink>  
          </div> */}
          <Routes>
                <Route path='/' element={<Header/>}/> 
                <Route path='section' element={<Section1 display={display}/>}/>
                {/* <Route path='section' element={<Section1/>}/> */}
                <Route path='domore' element={<Domore/>}/>
          </Routes>
    </div>
  )
}