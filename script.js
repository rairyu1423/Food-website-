//! GSAP for Home page
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

gsap.from(".animateImage", {
  x: 800,
  ease: "power3.out",
  duration: 1,
  // scrollTrigger: "#main-content-upper2 .animateImage",
  scrollTrigger: {
    trigger: "#main-content-upper1",
    // markers:true,
    start: "top 40%",
  },
});

gsap.from(".animateAd", {
  x: -1000,
  duration: 1.5,
  stagger: 0.5,
  ease: "circ.out",
  scrollTrigger: {
    trigger: "#main-content-upper1",
    // markers:true,
    start: "top 40%",
  },
});

gsap.from(".animateImage1", {
  x: -800,
  ease: "power3.out",
  duration: 1.5,
  // scrollTrigger: "#main-content-upper2 .animateImage",
  scrollTrigger: {
    trigger: "#main-content-upper2",
    // markers:true,
    start: "top 40%",
  },
});

gsap.from(".animateAd2", {
  x: 1000,
  duration: 1.5,
  stagger: 0.5,
  ease: "circ.out",

  scrollTrigger: {
    trigger: "#main-content-upper2",
    // markers:true,
    start: "top 40%",
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
    start: "top 40%",
  },
});

gsap.from(".animateAd3", {
  x: -1000,
  duration: 1.5,
  stagger: 0.5,
  ease: "circ.out",

  scrollTrigger: {
    trigger: "#main-content-upper3",
    // markers:true,
    start: "top 40%",
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
    start: "top 40%",
  },
});

gsap.from(".animateAd4", {
  x: 1000,
  duration: 1.5,
  ease: "circ.out",

  stagger: 0.5,
  scrollTrigger: {
    trigger: "#main-content-upper4",
    // markers:true,
    start: "top 40%",
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
    start: "top 40%",
  },
});

gsap.from(".animateAd5", {
  x: -1000,
  duration: 1.5,
  stagger: 0.5,
  ease: "circ.out",
  scrollTrigger: {
    trigger: "#main-content-upper5",
    // markers:true,
    start: "top 40%",
  },
});

//! GSAP for main Page
const header = document.querySelector("header");

const tl = gsap.timeline();

tl.fromTo(
  header,
  { y: -370 }, // Start position
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
  {
    x: 0,
    duration: 1,
    stagger: 0.8,
    ease: "power2.out",
    delay: 0.5,
    opacity: 1,
  },
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

// !  Suggestion box
let items = document.querySelector(".items");
let sugbox = document.querySelector(".suggetion");

items.addEventListener("mouseenter", () => {
  sugbox.style.opacity = "1";
  sugbox.style.pointerEvents = "auto";
  items.addEventListener("mouseenter", () => {
    sugbox.style.opacity = "1";
    sugbox.style.pointerEvents = "auto";
  });
});
sugbox.addEventListener("mouseleave", () => {
  sugbox.style.opacity = "0";
  sugbox.style.pointerEvents = "none";
});

window.addEventListener("click", () => {
  sugbox.style.opacity = "0";
  sugbox.style.pointerEvents = "none";
});
// ! End of suggetion box
// ! Swiper for review
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: false,
  loop: true, // Enable infinite loop
  slidesOffsetBefore: 1, // Start from the very beginning
  slidesPerView: 2, // Show 2 slides at a time
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// ! Swiper end for review
const name = () => {
  console.log("Hallow");
};

// Home html fixing

// Gallery animation
// !Callery Header Animation
gsap.from("#animationheader", {
  x: -1000,
  duration: 1.5,
  stagger: 0.2,
});
gsap.from("#animationImage", {
  x: 900,
  duration: 1.5,
  stagger: 0.2,
});
// !Callery Card Animation
gsap.fromTo(
  "#galleryCard .ca1",
  { opacity: 0, scale: 0.8 },
  {
    opacity: 1,
    duration: 0.4,
    scale: 1,
    scrollTrigger: {
      // trigger:"#galleryCard",
      trigger: ".containerHeader",
      // markers:true,
      start: "30% 10%",
      end: "50% 90%",
      scrub: 1,
    },
  }
);
gsap.fromTo(
  "#galleryCard .ca2",
  { opacity: 0, scale: 0.8 },
  {
    opacity: 1,
    duration: 0.4,
    scale: 1,
    scrollTrigger: {
      // trigger:"#galleryCard",
      trigger: ".containerHeader",
      // markers:true,
      start: "80% 10%",
      end: "90% 90%",
      scrub: 1,
    },
  }
);
gsap.fromTo(
  ".gallerybox2 .ca3",
  { opacity: 0, scale: 0.8 },
  {
    opacity: 1,
    duration: 0.4,
    scale: 1,
    scrollTrigger: {
      // trigger:"#galleryCard",
      trigger: ".gallerybox1",
      // markers:true,
      start: "50% 10%",
      end: "60% 90%",
      scrub: 1,
    },
  }
);

gsap.fromTo(
  ".gallerybox3 .ca4",
  { opacity: 0, scale: 0.8 },
  {
    opacity: 1,
    duration: 0.4,
    scale: 1,
    scrollTrigger: {
      // trigger:"#galleryCard",
      trigger: ".gallerybox1",
      // markers:true,
      start: "94% 10%",
      end: "100% 90%",
      scrub: 1,
    },
  }
);
gsap.fromTo(
  ".gallerybox4 .ca5",
  { opacity: 0, scale: 0.8 },
  {
    opacity: 1,
    duration: 0.4,
    scale: 1,
    scrollTrigger: {
      // trigger:"#galleryCard",
      trigger: ".gallerybox2",
      // markers:true,
      start: "94% 10%",
      end: "100% 90%",
      scrub: 1,
    },
  }
);
//! Outlets Animation
gsap.fromTo(
  ".oca1",
  { opacity: 0, scale: 0.8, x: 3 },
  {
    opacity: 1,
    duration: 0.4,
    scale: 1,
    scrollTrigger: {
      // trigger:"#galleryCard",
      trigger: ".gallerybox3",
      // markers:true,
      start: "90% 10%",
      end: "100% 90%",
      scrub: 1,
    },
  }
);
gsap.fromTo(
  ".oca2",
  { opacity: 0, scale: 0.8, x: 3 },
  {
    opacity: 1,
    duration: 0.4,
    scale: 1,
    scrollTrigger: {
      // trigger:"#galleryCard",
      trigger: ".gallerybox4",
      // markers:true,
      start: "90% 10%",
      end: "100% 90%",
      scrub: 1,
    },
  }
);

const scroll = new LocomotiveScroll({
  el: document.querySelector(".parent"),
  smooth: true,
});
if (window.innerWidth <= 768) {
  alert("Warning: This website is not optimized for mobile devices.Open it to the Laptop or P.C. for Better Experiences");
}
