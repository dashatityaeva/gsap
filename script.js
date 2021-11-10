//first
gsap.fromTo(".box", {x: -200}, {rotation: 50, x: 0, duration: 1});

gsap.to(".box__title", {rotation: -50, x: 75, y: 0, duration: 1});

$(".box").each(function (index, box){
  let tl = new TimelineLite({paused:true});
  tl.
    to(box, 0.1, {zIndex:10,  ease: "ease-in-out", transition: 0.2})
    .to(box, 0.1, { scale:1.12,  ease: "ease-in-out"})
    box.animation = tl;
})

$(".box").mouseenter(function(){
  this.animation.play();
})

$(".box").mouseleave(function(){
  this.animation.reverse();
})

//second
let tl1 = gsap.timeline({
 
  scrollTrigger: {
    trigger: ".second",
    pin: true, 
    start: "top top", 
    end: "+=500",
    scrub: 1, 
    snap: {
      snapTo: "labels",
      duration: {min: 0.2, max: 3}, 
      delay: 0.2, 
      ease: "power1.inOut" 
    }
  }
});

// add animations and labels to the timeline
tl1.addLabel("start")
.from(".quote", {scale: 0.3, rotation:45, autoAlpha: 0})
.addLabel("color")
.from(".quote", {backgroundColor: "#1d1d1d"})
.addLabel("spin")
.to(".quote", {rotation: 360})
.addLabel("end");


//third
gsap.utils.toArray("section").forEach((section, i) => {
  section.bg = section.querySelector(".bg"); 

  section.bg.style.backgroundImage = `url(https://picsum.photos/${innerWidth}/${innerHeight}?random=${i})`;

  if (i) {
    section.bg.style.backgroundPosition = `25% ${-innerHeight / 4}px`;

    gsap.to(section.bg, {
      backgroundPosition: `25% ${innerHeight / 8}px`,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        scrub: true
      }
    });
  } 
  
  else {
    section.bg.style.backgroundPosition = "25% 0px"; 

    gsap.to(section.bg, {
      backgroundPosition: `50% ${innerHeight / 4}px`,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top", 
        end: "bottom top",
        scrub: true
      }
    });
  }
});