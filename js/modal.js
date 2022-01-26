'use strict';

function modal() {
    const items = document.querySelectorAll('.item'),
          modalWindows = document.querySelectorAll('.modal'),
          modalMCD = document.querySelector('#modal__mcd'),
          modalIcePalace = document.querySelector('#modal__ice'),
          modalGMII = document.querySelector('#modal__gmii'),
          modalDRVC = document.querySelector('#modal__drvc'),
          modalMMK = document.querySelector('#modal__mmk'),
          modalCinema = document.querySelector('#modal__cinema'),
          modalEpsilon = document.querySelector('#modal__epsilon'),
          modalAngara = document.querySelector('#modal__angara'),
          modalFive = document.querySelector('#modal__five'),
          modalGerclia = document.querySelector('#modal__gerclia'),
          modalOlgino = document.querySelector('#modal__olgino'),
          modalTsvetnoy = document.querySelector('#modal__tsvetnoy'),
          modalPNK = document.querySelector('#modal__pnk'),
          modalSouth = document.querySelector('#modal__south'),
          modalElyzovo = document.querySelector('#modal__elyzovo'),
          modalSignal = document.querySelector('#modal__signal'),
          modal4Seasons = document.querySelector('#modal__4seasons'),
          modalIstra = document.querySelector('#modal__istra'),
          modalNabokov = document.querySelector('#modal__nabokov'),
          modalNikolskaya = document.querySelector('#modal__nikolskaya'),
          modalReef = document.querySelector('#modal__reef'),
          modalOstozenka = document.querySelector('#modal__ostozenka'),
          modalBarviha = document.querySelector('#modal__barviha'),
          modalKiev = document.querySelector('#modal__kiev'),
          modalButick = document.querySelector('#modal__butick');
    
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
                case 'cinema':
                    modalCinema.style.display = "block";
                    modalCinema.classList.add('activeModal');
                    break;
                case 'epsilon':
                    modalEpsilon.style.display = "block";
                    modalEpsilon.classList.add('activeModal');
                    break;
                case 'angara':
                    modalAngara.style.display = "block";
                    modalAngara.classList.add('activeModal');
                    break;
                case 'five':
                    modalFive.style.display = "block";
                    modalFive.classList.add('activeModal');
                    break;
                case 'gerclia':
                    modalGerclia.style.display = "block";
                    modalGerclia.classList.add('activeModal');
                    break;
                case 'olgino':
                    modalOlgino.style.display = "block";
                    modalOlgino.classList.add('activeModal');
                    break;
                case 'tsvetnoy':
                    modalTsvetnoy.style.display = "block";
                    modalTsvetnoy.classList.add('activeModal');
                    break;
                case 'pnk':
                    modalPNK.style.display = "block";
                    modalPNK.classList.add('activeModal');
                    break;
                case 'south':
                    modalSouth.style.display = "block";
                    modalSouth.classList.add('activeModal');
                    break;
                case 'elyzovo':
                    modalElyzovo.style.display = "block";
                    modalElyzovo.classList.add('activeModal');
                    break;
                case 'signal':
                    modalSignal.style.display = "block";
                    modalSignal.classList.add('activeModal');
                    break;
                case 'butick':
                    modalButick.style.display = "block";
                    modalButick.classList.add('activeModal');
                    break;
                case '4seasons':
                    modal4Seasons.style.display = "block";
                    modal4Seasons.classList.add('activeModal');
                    break;
                case 'istra':
                    modalIstra.style.display = "block";
                    modalIstra.classList.add('activeModal');
                    break;
                case 'nabokov':
                    modalNabokov.style.display = "block";
                    modalNabokov.classList.add('activeModal');
                    break;
                case 'nikolskaya':
                    modalNikolskaya.style.display = "block";
                    modalNikolskaya.classList.add('activeModal');
                    break;
                case 'reef':
                    modalReef.style.display = "block";
                    modalReef.classList.add('activeModal');
                    break;
                case 'ostozenka':
                    modalOstozenka.style.display = "block";
                    modalOstozenka.classList.add('activeModal');
                    break;
                case 'barviha':
                    modalBarviha.style.display = "block";
                    modalBarviha.classList.add('activeModal');
                    break;
                case 'kiev':
                    modalKiev.style.display = "block";
                    modalKiev.classList.add('activeModal');
                    break;
            } 
        showSlideCounter();
        slider();
        document.body.style.overflow = 'hidden';
        });        
    }); 

    function closeModal() {
        modalWindows.forEach(item => {
            item.style.display = "none";
            item.classList.remove('activeModal');
            document.body.style.overflow = '';
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

    function showSlideCounter() {
        const activeModal = document.querySelector('.activeModal'),
              sliderCounter = activeModal.querySelector('.offer__slider-counter');

        sliderCounter.innerHTML = `
            <div class="offer__slider-prev">
                <img src="../icons/left.svg" alt="prev">
            </div>
            <span id="current">01</span>
            /
            <span id="total">04</span>
            <div class="offer__slider-next">
                <img src="../icons/right.svg" alt="next">
            </div>
        `;
    }

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