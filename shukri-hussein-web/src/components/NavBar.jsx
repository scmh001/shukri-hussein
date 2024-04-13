import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import "./NavBar.css";



function NavBar() {
    const [menuOpen, setMenuOpen] =  useState(false)

  return (
    <React.Fragment>
    <div className="nav-bar">
    <nav>
        <Link to="/" className="title">Shukri <span className="title2">Hussein</span></Link>
        <div className="menu" onClick={() => {
            setMenuOpen(!menuOpen);
        }}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
            <li>
                <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
                <NavLink to="/about">About</NavLink>
            </li>
            <li>
                <NavLink to="/blogs">Blogs</NavLink>
            </li>
            <li>
                <NavLink to="/contact">Contact</NavLink>
            </li>
            {/* <li>
                <button className="sub">Subscribe</button>
            </li> */}
        </ul>
    </nav>
    </div>
    </React.Fragment>
  )
}

export default NavBar