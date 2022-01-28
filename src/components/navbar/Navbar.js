import React from 'react';
import './navbarStyle.css';

export function Navbar() {
  return <div>
    <div className='container-fluid'>
     <div>
               <img src='./assets/Logo.png' className='Logo-navbar' />
           </div>
           <nav>
               <ul>
                   <li><a href='#' className='home'>Home</a></li>
                   <li><a href='#' className='about'>About us</a></li>
                   <li><a href='#' className='feature'>Features</a></li>
                   <li><a href='#' className='contact'>Contact</a></li>
               </ul>
               <button className='btn-1-navbar buttons'>Sign in</button>
               <button className='btn-2-navbar buttons'>Sign up</button>
           </nav>
           </div>
  </div>;
}
