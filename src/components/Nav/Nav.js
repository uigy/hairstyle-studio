import React, { useState } from "react";
import NavIcons from "./NavIcons";

const Nav = ({ navTitle, item, handleItemClick }) => {
  const navItems = [...NavIcons].map((Icon, index) => (
    <li
      key={index}
      className={`nav__item${item == index ? " nav__item--active" : ""}`}
      onClick={(e) => handleItemClick(index, e)}
    >
      <a href="#" className="nav__link">
        <Icon active={item == index} />
      </a>
    </li>
  ));
  return (
    <nav className="nav" role="navigation">
      <ul className="nav__item-list">{navItems}</ul>
      <h1 ref={navTitle} className="nav__title">
        Hairstyle Studio
      </h1>
    </nav>
  );
};

export default Nav;
