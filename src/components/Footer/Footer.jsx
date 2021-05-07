import React from "react"
import mylogo from "./../../Assets/The StarGirl copy.png"
import './Footer.css'

const Footer = () => {
    return (
        <div className="Footer-container">
            <div className="Footer-header"><p>Made with &#10083; by </p></div>
            <div>
            <a href="https://hashnode.com/@codingirl">
                <img className="mylogofooter"
                    src={mylogo}
                    alt="mylogofooter"
                    target="_blank"
                    rel="noreferrer"></img>
                </a>
            </div>
            
        </div>
    );
}

export default Footer;