'use strict';

function vacancy() {    
    const sign = document.querySelector('.sign_in'),
          modalWindow = document.querySelector('.modal');

    sign.addEventListener('click', () => {
        const pswd = prompt('Введите пароль', '');

        if (pswd === '123') {
            modalWindow.style.display = "block";
        }
    });


    

    function closeModal() {
        modalWindow.style.display = "none";
    }

    document.addEventListener('click', (e) => {
        if (modalWindow.style.display === "block") {
            // if (e.target == modalWindow || e.target.getAttribute('data-close') === '') {
            if (e.target.getAttribute('data-close') === '') {
                closeModal();
            }
        }              
    });

    // const items = document.querySelectorAll('.item'),
    //       modalWindows = document.querySelectorAll('.modal'),
    //       modalMCD = document.querySelector('#modal__mcd'),
    //       modalIcePalace = document.querySelector('#modal__ice'),
    //       modalGMII = document.querySelector('#modal__gmii'),
    //       modalDRVC = document.querySelector('#modal__drvc'),
    //       modalMMK = document.querySelector('#modal__mmk');
    
    // items.forEach(item => {
    //     item.addEventListener('click', (e) => {
    //         switch (e.target.getAttribute('id')) {
    //             case 'mcd':
    //                 modalMCD.style.display = "block";
    //                 modalMCD.classList.add('activeModal');
    //                 break;
    //             case 'ice':
    //                 modalIcePalace.style.display = "block";
    //                 modalIcePalace.classList.add('activeModal');
    //                 break;
    //             case 'gmii':
    //                 modalGMII.style.display = "block";
    //                 modalGMII.classList.add('activeModal');
    //                 break;
    //             case 'drvc':
    //                 modalDRVC.style.display = "block";
    //                 modalDRVC.classList.add('activeModal');
    //                 break;
    //             case 'mmk':
    //                 modalMMK.style.display = "block";
    //                 modalMMK.classList.add('activeModal');
    //                 break;
    //         } 
    //     });        
    // }); 

    
    // function closeModal() {
    //     modalWindows.forEach(item => {
    //         item.style.display = "none";
    //         item.classList.remove('activeModal');
    //     });   
    // }
    

    // document.addEventListener('keydown', (e) => {
    //     if (e.key === 'Escape') {
    //         closeModal();
    //     } 
    // });


    // document.addEventListener('click', (e) => {
    //     modalWindows.forEach(item => {
    //         if (item.style.display === "block") {
    //             if (e.target == item || e.target.getAttribute('data-close') === '') {
    //                 closeModal();
    //             }
    //         }  
    //     });              
    // });
}
vacancy();