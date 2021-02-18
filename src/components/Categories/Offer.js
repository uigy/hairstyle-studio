import React, { useState, useRef, useEffect } from "react";
import haircutImg from "../../assets/img/haircut.jpg";
import { offerCategories } from "../../assets/js/data";

const Offer = ({ sendData }) => {
  const categoryTitle = "Our offer";
  const section = useRef("INITIAL_VALUE");

  useEffect(() => {
    sendData(section, categoryTitle);
  });

  const categoryList = useRef("INITIAL_VALUE");
  const [activeCategory, setActiveCategory] = useState(0);

  const offerCategoriesList = offerCategories.map((category) => (
    <li
      key={category.id}
      className={`offer__category${
        category.id === activeCategory ? " offer__category--active" : ""
      }`}
      onClick={(e) => handleClick(e, category.id)}
    >
      {category.categoryName}
    </li>
  ));

  const mapOffer = (id) =>
    offerCategories[id].offer.map((offer) => (
      <li className="offer__item" key={offer.id}>
        <div className="offer__name">{offer.offerName}</div>
        <div className="offer__price">{offer.offerPrice}</div>
      </li>
    ));

  let offer = mapOffer(activeCategory);

  const handleClick = (e, id) => {
    offer = mapOffer(id);
    setActiveCategory(id);
  };

  return (
    <section ref={section} className="category offer">
      <div className="offer__image-wrapper">
        <img className="offer__img" src={haircutImg} alt="salon" />
      </div>
      <div className="offer__price-list">
        <ul ref={categoryList} className="offer__category-list">
          {offerCategoriesList}
        </ul>
        <ul className="offer__pricing">{offer}</ul>
      </div>
    </section>
  );
};

export default Offer;
