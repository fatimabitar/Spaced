const headerEl = document.querySelector("header");

window.onscroll = () => {
  if (window.pageYOffset > 500) {
    headerEl.style.backgroundColor = "#4db0ff";
    headerEl.style.transition = "background-color 1s ease-in";
  } else {
    headerEl.style.backgroundColor = "#5459bf";
  }
};
