
document.addEventListener("DOMContentLoaded", (event) =>{
  gsap.registerPlugin(ScrollSmoother, ScrollTrigger, SplitText) 
  //Gsap code goes here

  let heroText = document.getElementById("hero-t");

  let heroSplit = new SplitText(heroText, {type:"chars, lines, words"})
  gsap.from(heroSplit.lines, {yPercent:100, opacity:0, duration:1.2, stagger:{each:0.08, from:"top"}});

  let menuTl = gsap.timeline({paused: true, reversed:true});
  gsap.defaults({duration:0.8, ease:"power2.out"});
  gsap.set(".menu-image", {opacity:0, yPercent:20});


  ///Select menu using selector
  let menu = document.querySelector(".full-screen-menu");
  let linkItems = document.querySelectorAll(".nav-item-wrapper");
  let openLink = document.getElementById("open-button");
  let closeLink = document.getElementById("close-button");
  let crossLines = document.querySelectorAll(".cross-line");
  let menuImages = document.querySelectorAll(".menu-image");

  //Timeline for creating images
  menuTl.from(menu, {yPercent:120, duration:1}),
  menuTl.from(linkItems, {yPercent:120, duration:1.2, opacity:1, stagger:{each:0.08, from:"top"}}, "<+0.2");

// Open menu
openLink.addEventListener("click", () => {
  menuTl.timeScale(1).play();
});

// Close menu
closeLink.addEventListener("click", () => {
  menuTl.timeScale(2).reverse();
});

//Second method try for creating menu close/open animation

// function menuToggle() {
//   if (menuTl.reversed()) {
//     menuTl.timeScale(1).play();
//   } else {
//     menuTl.timeScale(2).reverse();
//   }
// }

// //Now use addEvent to play the timeline
// openLink.addEventListener("click", menuToggle);
// closeLink.addEventListener("click", menuToggle);

let hoverTl = gsap.timeline({});


//2 -------- Animating on hover

  linkItems.forEach(link => {
    //Select an image for the link

    const menuImg = link.querySelector(".menu-image");
    const crossline = link.querySelector(".cross-line");
    const linkItem = link.querySelector(".link-item");
    const linkSplit = SplitText.create(linkItem, {type:"chars, lines, words"});
   
    link.addEventListener("mouseenter", () => {

      const parent = link.closest(".link-mask");
      if (parent) parent.classList.add("show-item");

      gsap.to(menuImg, {yPercent:0, opacity:1, ease:"power2.out"});
      gsap.to(crossline, {width:"100%", opacity:0.5, duration:0.8, ease:"power2.out"});
      gsap.to(linkItem, {opacity:0.4});
      gsap.to(linkSplit.chars, {y:-20, duration:0.5, stagger:{amount:0.3, from:"start"}})
    });

    link.addEventListener("mouseleave", () => {
      const parent = link.closest(".link-mask");
      if (parent) parent.classList.remove("show-item");

      gsap.to(menuImg, {yPercent:20, opacity:0, ease:"power2.out"});
      gsap.to(crossline, {width:"0%", opacity:0.4, duration:0.8, ease:"power2.out"});
      gsap.to(linkItem, {opacity:1});
      gsap.to(linkSplit.chars, {y:0, duration:0.4, stagger:{amount:0.3, from:"start"}})
    });
  });


  //3 ------ Buttons hover animations
  let menuButtons = document.querySelectorAll(".menu-button");

  menuButtons.forEach((menuButton) => {
    gsap.set(".button-underline", {xPercent:-120});
    const menuLine = menuButton.querySelector(".button-underline");
    const linkText = menuButton.querySelector("*");

    menuButton.addEventListener("mouseenter", () =>{
      let menuTl = gsap.timeline();

      gsap.to(menuLine, {xPercent:0, ease:"expo.inOut",
        // onComplete: () => {
        //   gsap.set(menuLine, {xPercent:-120});
        // }
       });
    });

    menuButton.addEventListener("mouseleave", () =>{
      gsap.to(menuLine, {xPercent:120, ease:"expo.inOut",
        onComplete: () => {
          gsap.set(menuLine, {xPercent:-120});
        }
      });
    });

  });




  ScrollSmoother.create({
    smooth:1,
    effects:true,
    wrapper: "#page-wrapper",
    content:"#main-wrapper"
  });

})


  // //for closing menu, click close button
  // closeLink.addEventListener("click", () =>{
  //   menuTl.timeScale(2).reverse();
  // });

  //     menuTl.eventCallback("onReverseComplete", () => {
  //     menuTl.timeScale(1);
  //   });