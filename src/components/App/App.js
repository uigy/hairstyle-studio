import React, { useState, useEffect, useRef } from "react";
import { Route, useHistory, useLocation } from "react-router-dom";
import Nav from "../Nav";
import Categories from "../Categories";
import Footer from "../Footer";
import { sections } from "../../assets/js/data";
import {
  dimHomepageBackground,
  showVerticalTitle,
  activateElement,
  deactivateElement,
} from "../../assets/js/utils";

const App = () => {
  let history = useHistory();
  let location = useLocation();
  const [item, setItem] = useState(-1);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);
  const homepageIntro = useRef("INITIAL_VALUE");
  const categoryHeading = useRef("INITIAL_VALUE");
  const categoryTitle = useRef("INITIAL_VALUE");
  const navTitle = useRef("INITIAL_VALUE");
  const sectionsRefs = [];
  const categoryTitleText = [];

  function sendData(ref, categoryTitle) {
    sectionsRefs.push(ref);
    categoryTitleText.push(categoryTitle);
  }

  const categoryList = [...Categories].map((Category, index) => (
    <Category sendData={sendData} key={index} />
  ));

  let homepageImageHeight;

  useEffect(() => {
    for (const section of sections) {
      if (section.location === location.pathname) {
        setItem(section.id);
        window.scrollTo({
          top: sectionsRefs[section.id].current.offsetTop,
        });
      }
    }
  }, []);

  useEffect(() => {
    homepageImageHeight = homepageIntro.current.offsetHeight;
    let currentItem = item;

    let isScrolling = null;
    const onScrollingStop = (callback) => {
      window.clearTimeout(isScrolling);
      isScrolling = setTimeout(callback, 100);
    };

    const handleScroll = () => {
      dimHomepageBackground(homepageIntro, homepageImageHeight);
      showVerticalTitle(navTitle, homepageImageHeight);

      onScrollingStop(() => {
        if (
          item === -1 &&
          window.scrollY > 0 &&
          window.scrollY < sectionsRefs[0].current.offsetTop
        ) {
          window.scrollTo({
            top: sectionsRefs[0].current.offsetTop,
            behavior: "smooth",
          });
          setItem(0);
          currentItem = 0;
        }

        const ranges = [
          {
            id: -1,
            top: 0,
            bottom: sectionsRefs[0].current.offsetTop - 50,
          },
        ];
        sectionsRefs.forEach((sectionRef, index) => {
          ranges.push({
            id: index,
            top:
              sectionRef.current.offsetTop -
              sectionRef.current.offsetHeight / 2,
            bottom:
              sectionRef.current.offsetTop +
              sectionRef.current.offsetHeight / 2,
          });
        });

        const currentRange = ranges.find(
          (range) =>
            range.top <= window.scrollY && range.bottom > window.scrollY
        );

        if (currentRange.id != item) {
          if (currentRange.id === -1) {
            window.scrollTo({ top: 0, behavior: "smooth" });
            history.push("/");
          } else {
            history.push(sections[currentRange.id].location);
          }
          setItem(currentRange.id);
          currentItem = currentRange.id;
        }

        setLastScrollPosition(window.scrollY);

        // showing up category heading
        if (currentItem > -1) {
          activateElement(categoryHeading.current, "category__heading--active");

          // changing category heading title
          if (
            categoryTitle.current.textContent != categoryTitleText[currentItem]
          ) {
            deactivateElement(categoryTitle.current, "category__title--active");
            setTimeout(() => {
              categoryTitle.current.textContent =
                categoryTitleText[currentItem];
              activateElement(categoryTitle.current, "category__title--active");
            }, 150);
          }
        } else {
          // hiding category heading
          deactivateElement(
            categoryHeading.current,
            "category__heading--active"
          );
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  function handleItemClick(index, e) {
    e.preventDefault();
    window.scrollBy({
      top: sectionsRefs[index].current.getBoundingClientRect().top,
      behavior: "smooth",
    });
    setItem(index);
  }

  return (
    <Route>
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
    </Route>
  );
};

export default App;
