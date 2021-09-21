const headerEl = document.querySelector("header");
const bgCircle1 = document.querySelector(".bg-circle-1");

window.onscroll = () => {
  if (window.pageYOffset > 500) {
    headerEl.style.backgroundColor = "#4db0ff";
    headerEl.style.transition = "background-color 1s ease-in";
  } else {
    headerEl.style.backgroundColor = "#5459bf";
  }
};

// window.addEventListener("scroll", (event) => {
//   let scroll = this.scrollY;
//   console.log(scroll)
// });

var docWidth = document.documentElement.offsetWidth;
[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);

