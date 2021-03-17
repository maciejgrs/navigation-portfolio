const menuBars = document.getElementById("menu-bars");
const overlay = document.getElementById("overlay");
const nav1 = document.getElementById("nav-1");
const nav2 = document.getElementById("nav-2");
const nav3 = document.getElementById("nav-3");
const nav4 = document.getElementById("nav-4");
const nav5 = document.getElementById("nav-5");
const navItems = [nav1, nav2, nav3, nav4, nav5];
let bool = false;

const animate = (bool) => {
  if (!bool) {
    for (let i = 0; i < navItems.length; i++) {
      navItems[i].classList.remove(`slide-out-${i}`);
      navItems[i].classList.add(`slide-in-${i}`);
      overlay.classList.remove("overlay-back");
      overlay.classList.add("overlay-slide");
    }
  } else {
    for (let i = 1; i < navItems.length; i++) {
      navItems[i].classList.remove(`slide-in-${i}`);
      navItems[i].classList.add(`slide-out-${i}`);
      overlay.classList.remove("overlay-slide");
      overlay.classList.add("overlay-back");
    }
  }
  
};
const toggle = () => {
  menuBars.classList.toggle("change");

  if (!bool) {
    animate(bool);
    bool = true;
  } else {
    animate(bool);
    bool = false;
  }
};
menuBars.addEventListener("click", toggle);

navItems.forEach((nav) => {
  nav.addEventListener("click", toggle);
});
