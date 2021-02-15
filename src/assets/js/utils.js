export function classExist(item, className) {
  return item.classList.contains(className);
}

export function activateElement(item, className) {
  if (!classExist(item, className)) {
    item.classList.add(className);
  }
}

export function deactivateElement(item, className) {
  if (classExist(item, className)) {
    item.classList.remove(className);
  }
}

export { dimHomepageBackground } from "./dimHompageBackground";
export { showVerticalTitle } from "./showVerticalTitle";
