import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import "./NavBar.css";



function NavBar() {
    const [menuOpen, setMenuOpen] =  useState(false)

  return (
    <React.Fragment>
    <nav>
        <Link to="/" className="title">Shukri Hussein</Link>
        <div className="menu" onClick={() => {
            setMenuOpen(!menuOpen);
        }}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
            <li>
                <NavLink to="/about">About</NavLink>
            </li>
            <li>
                <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
                <NavLink to="/home">Home</NavLink>
            </li>
        </ul>
    </nav>
    </React.Fragment>
  )
}

export default NavBar