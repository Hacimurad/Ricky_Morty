import React, { useState } from "react";
import { Link } from "react-router-dom";
import back from '../../assets/back.png';
import menu from '../../assets/menu.png';
import './Menu.css';

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }



  return (

    <div className="menu-container">
      <button className="menu-toggle" onClick={toggleMenu}>
       
      <img src={menu} alt="menu" />
      </button>
      <div className={`menu ${isOpen ? "open" : ""}`}>
        <button className="close-menu" onClick={toggleMenu}>
        <img src={back} alt="close" />
        </button>
        <div className="menu-items">
            <ul>
              <li><Link to="/">Characters</Link></li>
              <li><Link to="/locations">Locations</Link></li>
            </ul>
        </div>
      </div>
    </div>

  );
}

export default Menu;



