import React from 'react'
import './res.css'
import { Link, useNavigate } from 'react-router-dom'
export default function H1() {
  const navigate=useNavigate();
  return (
    <div className='h1'>
        <div className='h11'>
             <div><Link to={'domore'}>Do More, Be More</Link></div>
            {/* <div> <p >Do More, Be More</p></div> */}
             <div><a className='bor'>Tryin3D</a></div>
             <div><a className='bor'>StoreLocator</a></div>
             <div><a className='bor'>Singapore</a></div>
             <div><a className='bor'>UAE</a></div>
             <div><a className='bor'>John Jacobs</a></div>
             <div><a className='bor'>Aqualens</a></div>
             <div><a className='bor'>Cobrowsing</a></div>
             <div><a className='bor'>Engineering Blog</a></div>
             <div><a className='bor'>Lenskart Franchise</a></div>
        </div>
        <div className='h12'>
             <p>Contact Us</p>
        </div>
    </div>
  )
}
