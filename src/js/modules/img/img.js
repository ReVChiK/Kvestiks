export function setImage(className, img) {
  if (Array.isArray(img)) {
    document.querySelectorAll(`.${className}`).forEach((item, i) => {
      item.src = img[i];
    });
  } else {
    document
      .querySelectorAll(`.${className}`)
      .forEach((item) => (item.src = img));
  }
}

export function setBackground(className, img) {
  document.querySelectorAll(`.${className}`).forEach((item) => {
    item.style.background = `url(${img})`;
    item.style.backgroundBlendMode = "multiply";
    item.style.backgroundColor = "#fff";
    item.style.backgroundRepeat = "no-repeat";
    item.style.backgroundPosition = "right";
  });
}

export function setMobileBackground(className, img) {
  document.querySelectorAll(`.${className}`).forEach((item) => {
    item.style.background = `url(${img})`;
    item.style.backgroundSize = "cover";
    item.style.backgroundRepeat = "no-repeat";
    item.style.backgroundPosition = "center";
  });
}
