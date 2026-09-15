import React, { useState } from 'react'
import Logo from '../images/logo.png'
import "./header.css"

const header = () => {

const [showmenu, setshowmenu] = useState(false);

const handleButton = ()=>
{

        setshowmenu(!showmenu)


}


  return (
    <div className=' header ' >
        <div className='header-container'>
            <div className='grid navbar-grid'>

       <img onClick={()=>{
        window.location.href="./home"
       }} className='header-img' src={Logo}  alt="" />

      
        <div className='nav'>

        <nav className={ showmenu ? 'mobile-menu' : 'menu-web'}>
            <ul>

       <li><a  className='text-lg font-medium text-amber-50 scale-95 hover:scale-120'  href='/home'>Home</a></li>

        <li><a className='text-lg font-medium text-amber-50 scale-95 hover:scale-120' href='/about'>About</a></li>

       <li> <a className='text-lg font-medium text-amber-50 scale-95 hover:scale-120' href='/overview'>Overview</a></li>

       <li> <a className='text-lg font-medium text-amber-50 scale-95 hover:scale-120' href='/career'>Career</a></li>

       <li> <a className='text-lg font-medium text-amber-50 scale-95 hover:scale-120' href='/industries'>Industries</a></li>
        
        <li><a className='text-lg font-medium text-amber-50 scale-95 hover:scale-120' href='/contact'>Contact</a></li>
            </ul>
        
        </nav>
        <div className='ham-menu'>
            <button onClick={handleButton}>&#9776;</button>
        </div>
        </div>
      </div>
            </div>

        </div>
     
      
   
    
  )
}

export default header
