export function showVerticalTitle(navTitle, homepageImageHeight) {
  const titleBottom =
    -navTitle.current.offsetWidth - homepageImageHeight / 4 + window.scrollY;
  if (titleBottom < 20) {
    navTitle.current.style.setProperty("visibility", "visible");
    navTitle.current.style.setProperty("bottom", titleBottom + "px");
  } else {
    navTitle.current.style.setProperty("visibility", "visible");
    navTitle.current.style.setProperty("bottom", "20px");
  }
}
