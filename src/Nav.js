import React, { useEffect, useState } from "react";
import './Nav.css';

function Nav() {

    const [show,handleShow]=useState(false);

    const transitionNavbar=()=>{
        if(window.scrollY>100)
        {
            handleShow(true);
        }
        else{
            handleShow(false);
        }
           
        
    }


useEffect((f)=>{
window.addEventListener("scroll", transitionNavbar);
return ()=> window.removeEventListener("scroll", transitionNavbar);
},[])

    return <div className={`nav ${show && 'nav-black'}`}>
        <div className="nav_container">
        <img className="nav_logo" src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png" alt="Netflix"/>
        <img className="nav_logo1" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Avatar"/>


    </div>
  

    </div>
    
}
export default Nav;
