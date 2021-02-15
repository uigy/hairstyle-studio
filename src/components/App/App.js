import React, { useState, useEffect, useRef } from "react";
import Nav from "../Nav";
import Categories from "../Categories";
import Footer from "../Footer";
import {
  dimHomepageBackground,
  showVerticalTitle,
  activateElement,
  deactivateElement,
} from "../../assets/js/utils";

const App = () => {
  const [item, setItem] = useState(-1);
  const homepageIntro = useRef("INITIAL_VALUE");
  const categoryHeading = useRef("INITIAL_VALUE");
  const categoryTitle = useRef("INITIAL_VALUE");
  const navTitle = useRef("INITIAL_VALUE");

  const sections = []; // refs to category sections
  const categoryTitleText = [];

  function sendData(ref, categoryTitle) {
    sections.push(ref);
    categoryTitleText.push(categoryTitle);
  }

  const categoryList = [...Categories].map((Category, index) => (
    <Category sendData={sendData} key={index} />
  ));

  let homepageImageHeight;

  useEffect(() => {
    homepageImageHeight = homepageIntro.current.offsetHeight;

    window.onbeforeunload = (e) => {
      window.scrollTo(0, 0);
    };

    // showing up category heading
    if (item > -1) {
      activateElement(categoryHeading.current, "category__heading--active");

      // changing category heading title
      if (categoryTitle.current.textContent != categoryTitleText[item]) {
        deactivateElement(categoryTitle.current, "category__title--active");
        setTimeout(() => {
          categoryTitle.current.textContent = categoryTitleText[item];
          activateElement(categoryTitle.current, "category__title--active");
        }, 150);
      }
    } else {
      // hiding category heading
      deactivateElement(categoryHeading.current, "category__heading--active");
    }

    let isScrolling = null;
    const onScrollingStop = (callback) => {
      window.clearTimeout(isScrolling);
      isScrolling = setTimeout(callback, 100);
    };

    const handleScroll = () => {
      dimHomepageBackground(homepageIntro, homepageImageHeight);
      showVerticalTitle(navTitle, homepageImageHeight);

      onScrollingStop(() => {
        // autoscroll between sections and setting current item
        if (item < 0) {
          if (document.body.getBoundingClientRect().top < 0) {
            window.scrollBy({
              top: sections[0].current.getBoundingClientRect().top,
              behavior: "smooth",
            });
            setItem(item + 1);
          }
        } else {
          if (
            item == 0 &&
            sections[item].current.getBoundingClientRect().top > 5
          ) {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
            setItem(item - 1);
          } else if (
            (item < sections.length &&
              sections[item].current.getBoundingClientRect().bottom < 550) ||
            (item == sections.length - 1 &&
              sections[item].current.getBoundingClientRect().top < -550)
          ) {
            setItem(item + 1);
          } else if (
            (item < sections.length &&
              sections[item].current.getBoundingClientRect().top > 550) ||
            (item == sections.length &&
              sections[item - 1].current.getBoundingClientRect().top > -50)
          ) {
            setItem(item - 1);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  function handleItemClick(index, e) {
    e.preventDefault();
    window.scrollBy({
      top: sections[index].current.getBoundingClientRect().top,
      behavior: "smooth",
    });
    setItem(index);
  }

  return (
    <>
      <header className="header">
        <Nav
          navTitle={navTitle}
          item={item}
          handleItemClick={handleItemClick}
        />
        <section className="homepage">
          <div ref={homepageIntro} className="homepage__intro">
            <div className="homepage__hero-wrapper hero">
              <h1 className="hero__title">Hairstyle Studio</h1>
            </div>
          </div>
        </section>
      </header>
      <main id="content">
        <div ref={categoryHeading} className="category__heading">
          <h2
            ref={categoryTitle}
            className="category__title category__title--active"
          ></h2>
        </div>
        {categoryList}
      </main>
      <Footer />
    </>
  );
};

export default App;
