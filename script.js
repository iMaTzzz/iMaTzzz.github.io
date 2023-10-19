let ticking = false;
const stars = document.getElementById('stars');
const stars2 = document.getElementById('stars2');
const stars3 = document.getElementById('stars3');


let scrollValue = 0; // Initialize the scroll value

const animateStars = function () {
    stars.style.transform = `translateY(${scrollValue * 0.05}px)`;
    stars2.style.transform = `translateY(${scrollValue * 0.11}px)`;
    stars3.style.transform = `translateY(${scrollValue * 0.29}px)`;
};

const onScroll = () => {
    scrollValue = window.scrollY;
    if (!ticking) {
        window.requestAnimationFrame(() => {
            animateStars();
            ticking = false;
        });
        ticking = true;
    }
};


const start = function () {
}

window.addEventListener("load", start);

// Initial animation call in case you start the page already scrolled
animateStars();