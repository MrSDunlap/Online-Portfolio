// Document selectors-------------------------------------------/
const welcome = document.querySelector('.home h1');
const intro = document.querySelector('.home h3');
const message = document.querySelector('.home p');

// Timelines----------------------------------------------------/
let tl = new TimelineMax();
let tl2 = new TimelineMax();

// ScrollMagic Controller---------------------------------------/
let controller = new ScrollMagic.Controller();


// HOME INFO ANIMATIN LOAD IN-----------------------------------/
tl.from(welcome, 1.5, 
    {height: '0%', opacity: 0}, '+= .5')
.from(intro, 2, 
    {height: '0%', opacity: 0}, '-= 1')
.from(message, 2, 
    {height: '0%', opacity:0}, '-= 1.5')
.from('.hBox1',2, {y: -10, opacity: 0}, '-= 2')
.from('.hBox2',2, {y: 10, opacity: 0}, '-= 3')
.from('.scrollDown',2, {y:15, opacity:0}, '-=3');

// HOME ANIMATION PARRALLAX ON SCROLL---------------------------/
tl2
    .to(welcome,3, {y: -500})
    .to(intro,3, {y: -400}, '-=3')
    .to(message,3, {y: -300}, '-=3')
    .to('.about',3, {top:'0%'}, '-=3')
    .to('.hBox1',3, {y:-450, rotation: '45deg'},'-=3')
    .to('.hBox2',3, {y:-250, rotation: '-45deg'},'-=3')
    .to('.scrollDown',3, {y:-300},'-=3');

let scene = new ScrollMagic.Scene({
    triggerElement: '.heroBlank',
    duration: '100%',
    triggerHook: 1,
})
    .setTween(tl2)
    .setPin('.heroBlank')
    .addTo(controller);



// Trying to make an intersection observer --------------------------------------------/

const navBar = document.querySelector('nav');
const homeSection = document.querySelector('.home');
const descSection = document.querySelector('.description');
const bars = document.querySelector('.bars');
const links = document.querySelectorAll('.links');

const faders = document.querySelectorAll('.fadeIn');


//NavBar observer for fade in---------------------------------------------------/
const sectionOneOptions = {
    rootMargin: " -300px 0px 0px 0px"
};
const sectionOneObserver = 
    new IntersectionObserver(function(entries, sectionOneObserver){
        entries.forEach(entry => {
            if(!entry.isIntersecting) {
                navBar.classList.add('navScrolled');
                topBar.classList.add('barX');
                bottomBar.classList.add('barX');
                
            } else {
                navBar.classList.remove('navScrolled');
                topBar.classList.remove('barX');
                bottomBar.classList.remove('barX');
            }
        });
}, sectionOneOptions);

sectionOneObserver.observe(homeSection);


//Text and image observer for fade in--------------------------------------------/
const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -500px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries,appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.toggle('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
},sectionOneOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

//BURGER MENU STUFF-----------------------------------------|
let burger = document.querySelector('.burgerMenu');
let navMenu = document.querySelector('.navLinks');
let topBar = document.querySelector('.top');
let bottomBar = document.querySelector('.bottom');

burger.addEventListener('click', ()=> {
    navMenu.classList.toggle('showMenu');
    topBar.classList.toggle('topRotation');
    bottomBar.classList.toggle('bottomRotation');
    bottomBar.classList.toggle('barX');
    topBar.classList.toggle('barX');    
});

navMenu.addEventListener('click', ()=> {
    navMenu.classList.toggle('showMenu');
    topBar.classList.toggle('topRotation');
    bottomBar.classList.toggle('bottomRotation');
    bottomBar.classList.toggle('barX');
    topBar.classList.toggle('barX');
});


