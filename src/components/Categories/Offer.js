import React, { useRef, useEffect } from "react";
import haircutImg from "../../assets/img/haircut.jpg";

const Offer = ({ sendData }) => {
  const categoryTitle = "Our offer";
  const section = useRef("INITIAL_VALUE");
  useEffect(() => {
    sendData(section, categoryTitle);
  });
  return (
    <section ref={section} className="category offer">
      <div className="offer__image-wrapper">
        <img className="offer__img" src={haircutImg} alt="salon" />
      </div>
      <div className="offer__price-list">
        <div className="offer__category-list">
          <div className="offer__category offer__category--active">Haircut</div>
          <div className="offer__category">Styling</div>
          <div className="offer__category">Coloring</div>
          <div className="offer__category">Permanent</div>
          <div className="offer__category">Ombre</div>
          <div className="offer__category">Care</div>
        </div>
        <div className="offer__pricing">
          <div className="offer__name">Lorem, ipsum.</div>
          <div className="offer__price">$100</div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
