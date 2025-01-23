// Breakfast page Animations
// Text animation
gsap.from(".bktext", {
  x: -1000,
  stagger: 0.2,
  duration: 2,
});
// Card Animation
gsap.fromTo(
  ".bkcart1",
  { opacity: 0, scale: 0.8, x: 3 },
  {
    opacity: 1,
    duration: 0.4,
    scale: 1,
    scrollTrigger: {
      trigger: ".bg1",
      // markers:true,
      start: "23% 10%",
      end: "30% 90%",
      scrub: 1,
    },
  }
);

gsap.fromTo(
  ".bkcart2",
  { opacity: 0, scale: 0.8, x: 3 },
  {
    opacity: 1,
    duration: 0.4,
    scale: 1,
    scrollTrigger: {
      trigger: ".bg1",
      //   markers: true,
      start: "80% 10%",
      end: "90% 90%",
      scrub: 1,
    },
  }
);

//
for (let i = 3; i <= 19; i++) {
  gsap.fromTo(
    `.bkcart${i}`,
    { opacity: 0, scale: 0.8, x: 3 },
    {
      opacity: 1,
      duration: 0.4,
      scale: 1,
      scrollTrigger: {
        trigger: `.bkcart${i - 2}`,
        start: "80% 10%",
        end: "90% 90%",
        scrub: 1,
      },
    }
  );
}

// dinner page animation
// Text animation
gsap.from(".dintext", {
  x: -1000,
  stagger: 0.2,
  duration: 2,
});
//   card animation
gsap.fromTo(
  ".dincart1",
  { opacity: 0, scale: 0.8, x: 3 },
  {
    opacity: 1,
    duration: 0.4,
    scale: 1,
    scrollTrigger: {
      trigger: ".bg2",
      // markers:true,
      start: "23% 10%",
      end: "30% 90%",
      scrub: 1,
    },
  }
);

gsap.fromTo(
  ".dincart2",
  { opacity: 0, scale: 0.8, x: 3 },
  {
    opacity: 1,
    duration: 0.4,
    scale: 1,
    scrollTrigger: {
      trigger: ".bg2",
        // markers: true,
      start: "85% 10%",
      end: "90% 90%",
      scrub: 1,
    },
  }
);

//
for (let i = 3; i <= 20; i++) {
  gsap.fromTo(
    `.dincart${i}`,
    { opacity: 0, scale: 0.8, x: 3 },
    {
      opacity: 1,
      duration: 0.4,
      scale: 1,
      scrollTrigger: {
        trigger: `.dincart${i - 2}`,
        start: "80% 10%",
        end: "90% 90%",
        scrub: 1,
      },
    }
  );
}

// Lunch page animation
gsap.from(".lutext", {
  x: -1000,
  stagger: 0.2,
  duration: 2,
});
//   card animation
gsap.fromTo(
  ".lucart1",
  { opacity: 0, scale: 0.8, x: 3 },
  {
    opacity: 1,
    duration: 0.4,
    scale: 1,
    scrollTrigger: {
      trigger: ".bg3",
      // markers:true,
      start: "23% 10%",
      end: "30% 90%",
      scrub: 1,
    },
  }
);

gsap.fromTo(
  ".lucart2",
  { opacity: 0, scale: 0.8, x: 3 },
  {
    opacity: 1,
    duration: 0.4,
    scale: 1,
    scrollTrigger: {
      trigger: ".bg3",
      //   markers: true,
      start: "80% 10%",
      end: "90% 90%",
      scrub: 1,
    },
  }
);

//
for (let i = 3; i <= 20; i++) {
  gsap.fromTo(
    `.lucart${i}`,
    { opacity: 0, scale: 0.8, x: 3 },
    {
      opacity: 1,
      duration: 0.4,
      scale: 1,
      scrollTrigger: {
        trigger: `.lucart${i - 2}`,
        start: "80% 10%",
        end: "90% 90%",
        scrub: 1,
      },
    }
  );
}
