'use strict';

const slides = document.querySelectorAll('.slide');

for (const slide of slides) {
    slide.addEventListener('mouseover', () => {
        clearActiveClasses();
        slide.classList.add('active');
    });
}

function clearActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
}

const opener = document.querySelector('.opener'),
      achiev = document.querySelector('.achievements');

opener.addEventListener('click', () => {
    if (achiev.style.display == 'none') {
        achiev.style.display = 'block';
    } else {
        achiev.style.display = 'none';
    }    
});