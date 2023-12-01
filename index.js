gsap.registerPlugin(ScrollTrigger);

gsap
  .timeline({
    scrollTrigger: {
      trigger: "main",
      start: "top top",
      end: "bottom bottom",
      scrub: 15, // Adjust the scrub value to control the speed of the animation
    },
  })
  .to(".main-header-title", { x: "-100%" })
  .to(".main-header-title2", { x: "100%" }, 0);
