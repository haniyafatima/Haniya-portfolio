const tl = gsap.timeline({ defaults:{ easein: "power1.out"} });
tl.fromTo(".logo", {opacity: 0}, {opacity: 1});
tl.fromTo(".li1", {opacity: 0}, {opacity: 1});
tl.fromTo(".li2", {opacity: 0}, {opacity: 1});
tl.fromTo(".li3", {opacity: 0}, {opacity: 1});
tl.fromTo(".li4", {opacity: 0}, {opacity: 1});
tl.fromTo(".li5", {opacity: 0}, {opacity: 1});

const navBar = () => {
  const burger= document.querySelector(".burger");
  const navLinks= document.querySelector(".nav-links");

  const toggle= burger.addEventListener("click" , () => {
    navLinks.classList.toggle("fadeIn");
    burger.classList.toggle("move");

  });
  toggle();
}
navBar();
