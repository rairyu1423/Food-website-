//! GSAP for Home page
gsap.to(".animateImage", {
  y: 10,
  repeat: -1,
  yoyo: true,
  ease: "circ.out",
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
  { opacity: 1, scale: 1, stagger: 0.2, duration: 3, ease: "power2.out" },"same2"
);

tl.fromTo(
  ".animation-text-main",
  {
    x: -1000,
    opacity:0,
  },
  { x: 0,duration:1,stagger:1,ease: "power2.out",delay:1 ,opacity:1},"same2"
);

tl.fromTo(
    ".main-icon",
    {
      x: 10,
      opacity:0,
    },
    { x: 0,duration:1,stagger:1,ease: "power2.out",delay:1 ,opacity:1},"same2"
  );
  
