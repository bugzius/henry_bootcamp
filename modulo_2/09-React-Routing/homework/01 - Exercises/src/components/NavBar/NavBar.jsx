import React from "react";
import logo from "../../assets/logo.png";
import logoHenry from "../../assets/logo-henry.png";
import styleNav from "./NavBar.module.css";

export default function NavBar() {
  return (
    <div className={styleNav.container}>
      <img src={logoHenry} alt="logo-henry" />
      <img src={logo} alt="logo" />
      <nav className={styleNav.menu}>
        <h1>Central de Cruceros</h1>
        <ul className={styleNav.options}>
          <li>
            <p>Promotions</p>
          </li>
          <li>
            <p>Shipping</p>
          </li>
        </ul>
      </nav>
    </div>
  );
}
