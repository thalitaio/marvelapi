import React, { useState } from "react";
import logo from "../img/logo-marvel.svg";
import "./header.css";

function Header() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">
      <a href="#" className="nav__brand">
        <header className="center">
          <img src={logo} />{" "}
        </header>
      </a>
      <ul className={active}>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Filmes
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Quadrinhos
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Programas de TV
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Jogos
          </a>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Header;
