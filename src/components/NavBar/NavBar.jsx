import React from 'react';
import logo from "./../../Assets/flash.png"
import mylogo from "./../../Assets/The StarGirl.png"
import "./NavBar.css"

const NavBar = ()=> {
    return (
        <div className="nav-container">
            <div className="nav-left">
                <img className="logo" src={logo} alt="logo"  ></img>
                <p className="logo-text">Typing Test</p>
            </div>
            <div className="nav-right">
                <a href="https://hashnode.com/@codingirl">
                <img className="mylogo" src={mylogo} alt="mylogo"  ></img>
                </a>
            </div>
      </div>  
    );
}

export default NavBar;