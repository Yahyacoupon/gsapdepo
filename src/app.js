
document.addEventListener("DOMContentLoaded", (event) =>{
  gsap.registerPlugin(ScrollSmoother, ScrollTrigger, SplitText) 
  //Gsap code goes here

  let heroText = document.getElementById("hero-t");

  let heroSplit = new SplitText(heroText, {type:"chars, lines, words"})
  gsap.from(heroSplit.lines, {yPercent:100, opacity:0, duration:1.2, stagger:{each:0.08, from:"top"}})

  ScrollSmoother.create({
    smooth:1,
    effects:true,
    wrapper: "#page-wrapper",
    content:"#main-wrapper"
  });

})