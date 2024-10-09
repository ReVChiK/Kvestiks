export function setIcons(className, icons) {
  document
    .querySelectorAll(`.${className}`)
    .forEach((item, i) => (item.src = icons[i]));
}
