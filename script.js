//! GSAP for Home page
let tl2 = gsap.timeline();
tl2.from(
  ".animateImage",
  {
    x: 1000,
    ease: "power3.out",
    duration: 2,
  },
  "same"
);

tl2.from(
  ".animateAd",
  {
    x: -1000,
    duration: 2,
    stagger: 0.5,
  },
  "same"
);

gsap.to(".animateImage", {
  y: 10,
  repeat: -1,
  yoyo: true,
  delay: 2,
  duration: 1,
  ease: "sine.in",
});
gsap.to(".animateImage1", {
  y: 10,
  repeat: -1,
  yoyo: true,
  delay: 2,
  duration: 1,
  ease: "sine.in",
});
gsap.to(".animateImage2", {
  y: 10,
  repeat: -1,
  yoyo: true,
  delay: 2,
  duration: 1,
  ease: "sine.in",
});
gsap.to(".animateImage3", {
  y: 10,
  repeat: -1,
  yoyo: true,
  delay: 2,
  duration: 1,
  ease: "sine.in",
});
gsap.to(".animateImage4", {
  y: 10,
  repeat: -1,
  yoyo: true,
  delay: 2,
  duration: 1,
  ease: "sine.in",
});

gsap.from(".animateImage1", {
  x: -800,
  ease: "power3.out",
  duration: 1.5,
  // scrollTrigger: "#main-content-upper2 .animateImage",
  scrollTrigger: {
    trigger: "#main-content-upper2",
    // markers:true,
    start: "top 20%",
  },
});

gsap.from(".animateAd2", {
  x: 1000,
  duration: 1,
  stagger: 0.5,
  scrollTrigger: {
    trigger: "#main-content-upper2",
    // markers:true,
    start: "top 20%",
  },
});

gsap.from(".animateImage2", {
  x: 800,
  ease: "power3.out",
  duration: 1.5,
  // scrollTrigger: "#main-content-upper2 .animateImage",
  scrollTrigger: {
    trigger: "#main-content-upper3",
    // markers:true,
    start: "top 20%",
  },
});

gsap.from(".animateAd3", {
  x: -1000,
  duration: 1,
  stagger: 0.5,
  scrollTrigger: {
    trigger: "#main-content-upper3",
    // markers:true,
    start: "top 20%",
  },
});

gsap.from(".animateImage3", {
  x: -800,
  ease: "power3.out",
  duration: 1.5,
  // scrollTrigger: "#main-content-upper2 .animateImage",
  scrollTrigger: {
    trigger: "#main-content-upper4",
    // markers:true,
    start: "top 20%",
  },
});

gsap.from(".animateAd4", {
  x: 1000,
  duration: 1,
  stagger: 0.5,
  scrollTrigger: {
    trigger: "#main-content-upper4",
    // markers:true,
    start: "top 20%",
  },
});

gsap.from(".animateImage4", {
  x: 800,
  ease: "power3.out",
  duration: 1.5,
  // scrollTrigger: "#main-content-upper2 .animateImage",
  scrollTrigger: {
    trigger: "#main-content-upper5",
    // markers:true,
    start: "top 20%",
  },
});

gsap.from(".animateAd5", {
  x: -1000,
  duration: 1,
  stagger: 0.5,
  scrollTrigger: {
    trigger: "#main-content-upper5",
    // markers:true,
    start: "top 20%",
  },
});

//! GSAP for main Page
const header = document.querySelector("header");

const tl = gsap.timeline();

tl.fromTo(
  header,
  { y: -200 }, // Start position
  { y: 0, duration: 1, ease: "power2.out" } // End position
);

tl.fromTo(
  ".nav-items",
  { opacity: 0, scale: 0.5 },
  { opacity: 1, scale: 1, stagger: 0.2, duration: 3, ease: "power2.out" },
  "same2"
);

tl.fromTo(
  ".animation-text-main",
  {
    x: -1000,
    opacity: 0,
  },
  { x: 0, duration: 1, stagger: 1, ease: "power2.out", delay: 1, opacity: 1 },
  "same2"
);

tl.fromTo(
  ".main-icon",
  {
    x: 10,
    opacity: 0,
  },
  { x: 0, duration: 1, stagger: 1, ease: "power2.out", delay: 1, opacity: 1 },
  "same2"
);
