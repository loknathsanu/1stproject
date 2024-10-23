import React, { useState } from 'react'
import './navbar.css';
import { RiCloseLine, RiMenuLine } from 'react-icons/ri';

import logo from '../../assest/logo.png';

const Menu =()=>(
  <>
  <p><a href="#home">HOME</a></p>
  <p><a href="#Whatisgp3">What is gpt3?</a></p>
  <p><a href="#OpenA1">Open A1</a></p>
  <p><a href="#CaseStudies">Case Studies</a></p>
  <p><a href="#Library">Library</a></p>
  </>

)
const Navbar = () => {
  const[toggleMenu,setToggleMenu]=useState(false);
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links-logo'>
          <img src={logo} alt="logo" /> 
          
        </div>

      </div>
      <div className='gpt3__navbar-links-container'>
         <Menu/>
        </div>
        
        <div className='gpt3__navbar-sign'>
          <p>sign up</p>
          <button type='button'>
            sign in
          </button>
        </div>
        {/* <div className='gp3__navbar-menu'>
          {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={()=>setToggleMenu(false)}/>
         :<RiMenuLine color="#fff" size={27} onClick={() => setToggleMenu(true)} />}  
         {
          toggleMenu &&(
            <div className='gpt3__navabar-menu_container scale-up-center'>
              <div className='gpt3__navabar-menu_container-Links'>
                <Menu/> <div className='gpt3__navabar-menu_container-Links-sign'>
               <p>sign up</p>
                <button type='button'className='moblie '>
                sign in
                </button>
              </div>
                
              </div>

            </div>
            
          )}
        
        </div> */}
      
      </div>
  )
}

export default Navbar