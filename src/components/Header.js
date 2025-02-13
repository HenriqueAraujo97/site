import React from "react";
import { ReactTyped } from "react-typed";


const Header = () => {
  return (
    <div className="header-wraper"> 
    <div className="main-info"> 
        <h1> Software Engineer</h1>
        <ReactTyped
          className="typed-text"
          strings={["AL","C/AL","C#","JAVA","SQL","React"]}
          typeSpeed={80}
          backSpeed={60}
          loop
        />
        <a href="#" className="btn-main-offer">Contact me</a>
    </div>
    </div>
  )
}

export default Header
