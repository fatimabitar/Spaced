const headerEl = document.querySelector("header");

window.onscroll = () => {
  if (window.pageYOffset > 500) {
    headerEl.style.backgroundColor = "#4db0ff";
    headerEl.style.transition = "background-color 1s ease-in";
  } else {
    headerEl.style.backgroundColor = "#5459bf";
  }
};

//setting up Lottie interactivity on scroll
// LottieInteractivity.create({
//   mode: "scroll",
//   player: "#firstLottie",
//   actions: [
//     {
//       visibility: [0, 1],
//       type: "seek",
//       frames: [0, 25],
//     },
//   ],
// });

//Phone Rotation on scroll
const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
  triggerElement: "header",
  duration: 1000,
  triggerHook: 0,
})
  .setTween(
    gsap.to("#firstLottie", 0.5, {
      x: -750,
      y: 850,
      ease: Power1.easeIn,
    })
  )
  .addTo(controller);

// Background Circle
const controller2 = new ScrollMagic.Controller();
const scene2 = new ScrollMagic.Scene({
  triggerElement: "header",
  duration: 1000,
  triggerHook: 0,
})
  .setTween(TweenMax.to(".bg-circle", 1, { scale: 0.2, opacity: 0 }))
  .addTo(controller2);

const controller3 = new ScrollMagic.Controller();
const scene3 = new ScrollMagic.Scene({
  triggerElement: ".how-it-works",
  duration: 1000,
  triggerHook: 1,
})
  .setTween(TweenMax.from(".bg-circle2", 1, { scale: 0.2, opacity: 0 }))
  .addTo(controller3);

const scene5 = new ScrollMagic.Scene({
  triggerElement:"header .lead",
  duration: 1000,
  triggerHook:0
}).setTween(TweenMax.from(".small-img1 , .small-img2 ,.small-img3",1,{scale:0.2,opacity:0})).addTo(controller3)

//Image Slider
const controller4 = new ScrollMagic.Controller();
const scene4 = new ScrollMagic.Scene({
  triggerElement: ".images-slider",
  duration: 100,
  triggerHook: 1,
})
  .setTween(
    gsap.to(".scrolling-thumbs-wrap", 0.1, {
      rotation: "5deg",
      ease: Power4.easeIn,
    })
  )
  .addTo(controller4);

//New Image Slider
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "taking-control .lead",
    start: "top",
    end: "bottom bottom",
    scrub: 0.5,
  },
  duration: 2,
});
tl.from(".column", {
  ease: Power3.easeIn,
  y: 50,
}).to(".column", {
  ease: Power3.easeOut,
  y: -200,
});
//Background Circle
gsap.from(
  ".bg-circle3, .people-nearby .screen-1,  .notification-1, .notification-2",
  {
    scrollTrigger: ".people-nearby",
    scale: 0,
    ease: Power4.easeIn,
    duration: 1,
  }
);
gsap.from(
  ".bg-circle4, .taking-control .screen-2, .taking-control .notification-1",
  {
    scrollTrigger: ".taking-control",
    scale: 0,
    ease: Power1.easeIn,
    duration: 1,
  }
);

//Image and text reveal on scroll
gsap.from(".right", {
  scrollTrigger: ".share",
  x: 100,
  ease: Power1.easeIn,
  duration: 1,
});
gsap.from(".left", {
  scrollTrigger: ".share",
  x: -100,
  ease: Power1.easeIn,
  duration: 1,
});
gsap.from(".stagger", {
  scrollTrigger: ".share",
  y: -100,
  opacity: 0,
  stagger: 0.2,
  dalay: 0.2,
  ease: Power1.easeIn,
  duration: 1,
});
