const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');
const navItems = [nav1, nav2, nav3, nav4, nav5];
let bool = false

 

const toggle = () => {
    menuBars.classList.toggle('change')
     
    if(!bool) {
        overlay.classList.remove('overlay-back')
        overlay.classList.add('overlay-slide')
        console.log('overlay go');
        bool = true
    } else {
         
        overlay.classList.remove('overlay-slide')
        overlay.classList.add('overlay-back')
        console.log('overlay back');
        bool = false
        
    }
}
menuBars.addEventListener('click', toggle)