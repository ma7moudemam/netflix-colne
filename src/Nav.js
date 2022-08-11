import React , {useEffect, useState} from 'react'
import './Nav.css'
import AvatarImage from './assets/4.jpg'

const Nav = () => {

    const [show , handleShow] = useState();

    useEffect(() => {
        window.addEventListener("scroll" , ()=>{
            if(window.scrollY > 100){
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll", handleShow);
        };
    }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
        <img
            className="nav__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
            alt="Netflix Logo" />
        <img
            className="nav__avatar"
            src={AvatarImage}
            alt="Netflix Avatar" />
    </div>
  )
}

export default Nav