import React from "react";
import Nav from "../Nav";

const Header = ({ item, handleItemClick }) => {
  return (
    <header className="header">
      <Nav item={item} handleItemClick={handleItemClick} />
      <section className="homepage">
        <div className="homepage__intro">
          <div className="homepage__hero-wrapper hero">
            <h1 className="hero__title">Hairstyle Studio</h1>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
