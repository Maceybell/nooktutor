 import React from 'react'
 import logo from './images/logo.png'
 import {BiMenu} from 'react-icons/bi'
 
 const Header = () => {
   return (
     <header>
        <img className='logo' src={logo} alt="" />
        <BiMenu className='menu' size="40px" />    
     </header>
   )
 }
 
 export default Header