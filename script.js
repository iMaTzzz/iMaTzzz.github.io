/*
const smallStars = document.getElementById('smallStars');
const mediumStars = document.getElementById('mediumStars');
const bigStars = document.getElementById('bigStars');
const hugeStars = document.getElementById('hugeStars');
const shootingStars = document.querySelector('.shootingStarsWrapper');
const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;

function getRandomInt(min, max) {
    // Returns an int between min and max both included
    return min + Math.floor(Math.random() * max - min + 1);
}

const animateNode = function (node) {
    const topValue = parseInt(node.style.top);
    if (topValue >= windowHeight) {
        node.style.top = "0px";
    } else {
        node.style.top = topValue + 1 + "px";
    }
}

const animateSmallStars = function () {
    smallStars.childNodes.forEach((node) => animateNode(node));
}

const animateMediumStars = function () {
    mediumStars.childNodes.forEach((node) => animateNode(node));
}

const animateBigStars = function () {
    bigStars.childNodes.forEach((node) => animateNode(node));
}

const animateHugeStars = function () {
    hugeStars.childNodes.forEach((node) => animateNode(node));
}

const createShootingStar = function () {
    // Set up random elements
    const xPos = getRandomInt(0, windowWidth);
    const yPos = getRandomInt(0, windowHeight);
    const color = '#ffffff';
    const time = getRandomInt(1, 3);

    // Create the shooting star
    const shootingStar = document.createElement("div");
    shootingStar.style.position = "absolute";
    shootingStar.style.width = windowWidth/10 + "px";
    shootingStar.style.height = "1px";
    shootingStar.style.background = "linear-gradient(90deg, #fff, transparent)";
    shootingStar.style.left = `${xPos}px`;
    shootingStar.style.top = `${yPos}px`;
    shootingStar.style.animation = `shootingStarAnimation ${time}s ease-in-out`;
    shootingStars.appendChild(shootingStar);

    // Delete it after the animation ends
    shootingStar.addEventListener("animationend", () => {
        shootingStars.removeChild(shootingStar);
    });
}

const animateShootingStar = function () {
    createShootingStar();
}


const createStars = function (nbStars, minSize, maxSize) {
    for (let i = 0; i < nbStars; i++) {
        // Set up random elements
        const xPos = getRandomInt(0, windowWidth);
        const yPos = getRandomInt(0, windowHeight);
        const alpha = Math.random();
        const size = getRandomInt(minSize, maxSize);
        const color = '#ffffff';
            
        // Add them to the body
        const star = document.createElement('div');
        star.style.position = 'relative';
        star.style.left = xPos + 'px';
        star.style.top = yPos + 'px';
        star.style.opacity = alpha;
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        star.style.backgroundColor = color;
        star.style.borderRadius = "50%";

        if (size === 1) {
            smallStars.appendChild(star);
        } else if (size === 2 || size === 3) {
            mediumStars.appendChild(star);
        } else if (size === 3) {
            bigStars.appendChild(star);
        } else {
            hugeStars.appendChild(star);
        }
    }
}

const start = function () {
    createStars(1000, 1, 1);
    createStars(500, 2, 3);
    createStars(250, 4, 4);
    createStars(100, 5, 5);
    setInterval(animateSmallStars, 17);
    setInterval(animateMediumStars, 23);
    setInterval(animateBigStars, 29);
    setInterval(animateHugeStars, 37);
    setInterval(animateShootingStar, 5000);
    //triggerShootingStar();
}

window.addEventListener("load", start);

// Function to trigger the shooting star (e.g., when the page loads)
function triggerShootingStar() {
    // Randomly decide when to show the shooting star
    const delay = getRandomInt(3000, 60000); // Random delay between 2 and 62 seconds
    setTimeout(() => {
        randomizeStar();
        star.style.display = 'block'; // Make the star visible
    }, delay);
}
/*

/*=============== SHOW MENU ===============*/
const headerToggle = document.getElementById('header-toggle'),
      main = document.getElementById('main'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(headerToggle){
    headerToggle.addEventListener('click', () =>{
        main.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        main.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')
const contentSections = document.querySelectorAll('.content')

/*
function linkAction(){
    const main = document.getElementById('main')
    // When we click on each nav__link, we remove the show-menu class
    main.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
*/
navLink.forEach((link) => {
    link.addEventListener('click', (event) => {
        const targetLink = event.target;
        console.log(targetLink);
        const activeContentSection = document.getElementsByClassName('content active')[0];
        const targetContentSection = document.getElementById(targetLink.href.split('#')[1] + "-content");
        if (activeContentSection !== targetContentSection) {
            const activeLink = document.getElementsByClassName('nav__link active-link')[0];
            activeLink.classList.remove('active-link')
            targetLink.classList.add('active-link');
            activeContentSection.classList.remove('active');
            targetContentSection.classList.add('active');
        }
    })
})

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)
