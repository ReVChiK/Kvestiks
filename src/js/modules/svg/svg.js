export function setSvg(className, svg, classLink) {
  document
    .querySelectorAll(`.${className}`)
    .forEach(
      (item) => (item.innerHTML = `<a href="#" class="${classLink}">${svg}</a>`)
    );
}
