import React from 'react'
import {  NavLink } from "react-router-dom";
import "../styles/Navbar.css"
import logo from "../assets/sketch.jpeg"

function Navbar() {
  return (

    <nav className='nav_div'>
        <div className='navbar'>
            <div className="logo-container">
            <a href="/home" className='head'>
                <img src={logo} alt="Game Talk Logo" className="logo" />
                <h1 className="site-name" href='/home'>GAME TALK</h1>
            </a>
            </div>   
            <ul className='navigation'>
                <li className='navigation__item'>
                    <NavLink to="/home" className = "navigation__link" data-text="Home">Home</NavLink>
                </li>
                <li className='navigation__item'>
                    <NavLink to="/gameplay" className = "navigation__link" data-text="Gameplay">Gameplay</NavLink>
                </li>
                <li className='navigation__item'>
                    <NavLink to="/companies" className = "navigation__link" data-text="Companies">Companies</NavLink>
                </li>
                <li className='navigation__item'>
                    <NavLink to="/favorites" className = "navigation__link" data-text="Favorites">Favorites</NavLink>
                </li>
            </ul>
        </div>
    </nav>
        
        
  )
}

export default Navbar