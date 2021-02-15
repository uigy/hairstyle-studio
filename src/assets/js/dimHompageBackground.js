export function dimHomepageBackground(homepageIntro, homepageImageHeight) {
  if (window.scrollY < homepageImageHeight) {
    homepageIntro.current.style.setProperty(
      "opacity",
      1 - window.scrollY / homepageImageHeight
    );
    homepageIntro.current.style.setProperty(
      "filter",
      `grayscale(${window.scrollY / homepageImageHeight})`
    );
  }
}
