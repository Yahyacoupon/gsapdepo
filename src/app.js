
document.addEventListener("DOMContentLoaded", (event) =>{
  gsap.registerPlugin(ScrollSmoother, ScrollTrigger, SplitText) 
  //Gsap code goes here

  let heroText = document.getElementById("hero-t");

  let heroSplit = new SplitText(heroText, {type:"chars, lines, words"})
  gsap.from(heroSplit.lines, {yPercent:100, opacity:0, duration:1.2, stagger:{each:0.08, from:"top"}})

})

// document.addEventListener("DOMContentLoaded", () => {
//   gsap.registerPlugin(ScrollSmoother, ScrollTrigger, SplitText);

//   // Grab element
//   let heroText = document.getElementById("hero-t");

//   // Split text
//   let heroSplit = SplitText.create(heroText, { type: "chars, words, lines" });

//   // Animate lines
//   gsap.from(heroSplit.lines, {
//     yPercent: 100,
//     opacity: 0,
//     duration: 1.2,
//     ease: "power3.out",
//     stagger: 0.05
//   });
// });
