import React from "react";
import logo from "../../assets/logo.png";
import logoHenry from "../../assets/logo-henry.png";
import styleNav from "./NavBar.module.css";

import { NavLink } from "react-router-dom";

const navStyles = {textAlign:"center", display:"block"}
const funcActiveLink = ({isActive}) => (
  isActive ? styleNav.active : styleNav.disable
);

export default function NavBar() {
  return (
    <div className={styleNav.container}>
      <NavLink  style={navStyles} className={styleNav.imagesHome} to="/">
        <img src={logoHenry} alt="logo-henry" />
        <img src={logo} alt="logo" />
      </NavLink>
      <nav className={styleNav.menu}>
        <h1>Central de Cruceros</h1>
        <ul className={styleNav.options}>
          <NavLink style={navStyles} to="/promotions" className={funcActiveLink} >
            <li>
              <p>Promotions</p>
            </li>
          </NavLink>
          <NavLink to="/shipping" className={funcActiveLink} style={navStyles}>
            <li>
              <p>Navieras</p>
            </li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
}
