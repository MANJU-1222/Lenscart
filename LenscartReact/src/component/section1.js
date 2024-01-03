import React from 'react'
import Left from './Left'
import Right from './right'
import './style1.css'
import { useNavigate } from 'react-router-dom'
import Footer from './Footer'
import SimpleSlider from './Carosil';

export default function Section1({display}) {

  const navigate=useNavigate();
  function passtoparent(){
    const val=true;
    navigate('/');
    display(val);

  }
  return (
    <>
    <div className='section1'>
        <Left/>
        <Right/>
    </div>
    {/* <SimpleSlider/> */}
    <Footer/>
    <br/>
    {/* <button onClick={()=>navigate(-1)}>Go Back</button> */}
    <button onClick={passtoparent}>Go Back</button>
    </>
  )
}
