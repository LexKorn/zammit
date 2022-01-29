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

function zoomSlide() {
    slides.forEach(slide => {
        slide.addEventListener('click', () => {
            let urlImg = slide.style.backgroundImage;
            console.log(urlImg);
            slide.style.cssText += `
                position: fixed; z-index: 10;  
                top: 0; left: 0; bottom: 0; right: 0;  
                width: auto; max-width: 100%;  
                height: auto; max-height: 100%;  
                margin: auto;  
                box-shadow: 0 0 200px #000, 0 0 0 1000px rgba(0,0,0,.3);  
                -webkit-box-shadow: 0 0 200px #000, 0 0 0 1000px rgba(0,0,0,.3);  
                -moz-box-shadow: 0 0 200px #000, 0 0 0 1000px rgba(0,0,0,.3);  
            `;

            setTimeout(() => {
                slide.addEventListener('click', () => {
                    slide.style.cssText = `background-image: ${urlImg}`;
                });
            }, 500);
        });
    })
}
zoomSlide();