'use strict';

function modal() {
    const items = document.querySelectorAll('.item'),
          modalWindows = document.querySelectorAll('.modal'),
          modalMCD = document.querySelector('#modal__mcd'),
          modalIcePalace = document.querySelector('#modal__ice'),
          modalGMII = document.querySelector('#modal__gmii'),
          modalDRVC = document.querySelector('#modal__drvc'),
          modalMMK = document.querySelector('#modal__mmk');
    
    items.forEach(item => {
        item.addEventListener('click', (e) => {
            switch (e.target.getAttribute('id')) {
                case 'mcd':
                    modalMCD.style.display = "block";
                    modalMCD.classList.add('activeModal');
                    break;
                case 'ice':
                    modalIcePalace.style.display = "block";
                    modalIcePalace.classList.add('activeModal');
                    break;
                case 'gmii':
                    modalGMII.style.display = "block";
                    modalGMII.classList.add('activeModal');
                    break;
                case 'drvc':
                    modalDRVC.style.display = "block";
                    modalDRVC.classList.add('activeModal');
                    break;
                case 'mmk':
                    modalMMK.style.display = "block";
                    modalMMK.classList.add('activeModal');
                    break;
            } 
        slider();
        });        
    }); 

    function closeModal() {
        modalWindows.forEach(item => {
            item.style.display = "none";
            item.classList.remove('activeModal');
        });   
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        } 
    });

    document.addEventListener('click', (e) => {
        modalWindows.forEach(item => {
            if (item.style.display === "block") {
                if (e.target == item || e.target.getAttribute('data-close') === '') {
                    closeModal();
                }
            }  
        });              
    });

    function slider() {
        const activeModal = document.querySelector('.activeModal'),
              slides = activeModal.querySelectorAll('.offer__slide'),
              current = activeModal.querySelector('#current'),
              total = activeModal.querySelector('#total'),
              btnPrev = activeModal.querySelector('.offer__slider-prev'),
              btnNext = activeModal.querySelector('.offer__slider-next');
    
        let activeIndex = 0;
    
        slides.forEach(item => {
            item.classList.add('hide');        
        });    
    
        if (slides.length < 10) {
            total.textContent = `0${slides.length}`;
        } else {
            total.textContent = `${slides.length}`;
        }
    
        function currentIndex() {
            if (activeIndex < 10) {
                current.textContent = `0${activeIndex + 1}`;
            } else {
                current.textContent = `${activeIndex + 1}`;
            }
        }    
    
        function showSlide() {
            slides.forEach((item, i) => {
                if (i === activeIndex) {
                    item.classList.remove('hide');
                } else {
                    item.classList.add('hide');
                }
            });
        }
        showSlide();
    
        btnPrev.addEventListener('click', () => {        
            if (activeIndex === 0) {
                activeIndex = slides.length - 1;
            } else {
                activeIndex--;            
            }
            currentIndex();
            showSlide();
        });
    
        btnNext.addEventListener('click', () => {        
            if (activeIndex === slides.length - 1) {
                activeIndex = 0;
            } else {
                activeIndex++;            
            }
            currentIndex();
            showSlide();
        });
    }
}
modal();