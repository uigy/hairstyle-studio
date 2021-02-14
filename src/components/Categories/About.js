import React, { useRef, useEffect } from "react";
import salonImg from "../../assets/img/salon.png"; // todo: srcSet

const About = ({ sendData }) => {
  const categoryTitle = "About us";
  const section = useRef("INITIAL_VALUE");
  useEffect(() => {
    sendData(section, categoryTitle);
  });

  return (
    <section ref={section} className="category about">
      <div className="about__info">
        <section>
          <p className="about__info-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
            obcaecati aut saepe voluptas amet deleniti eaque consectetur illo
            rem possimus maiores, officiis illum at, ad sint iste cumque, ea
            adipisci!
          </p>
          <p className="about__info-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla,
            atque vero eum rem reiciendis rerum quam temporibus blanditiis nobis
            vitae consequatur mollitia.
          </p>
          <p className="about__info-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt,
            excepturi.
          </p>
        </section>
      </div>
      <div className="about__image-wrapper">
        <img className="about__img" src={salonImg} alt="salon" />
      </div>
    </section>
  );
};

export default About;
