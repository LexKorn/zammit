'use strict';

function vacancy() {    
    const sign = document.querySelector('.sign_in'),
          modalMenu = document.querySelector('#modal__menu');

    sign.addEventListener('click', () => {
        let pswd = prompt('Введите пароль', '');

        for (let i = 0; i < 1; i++) {
            if (pswd === '1') {
                modalMenu.style.display = "block";
            } else if (pswd == null) {
                i++;
            } else {
                pswd = prompt('Неверный пароль. Попробуйте ещё раз', '');
                i--;
            }
        }
    });    

///////////////
    const btns = document.querySelectorAll('button'),
          modalWindows = document.querySelectorAll('.modal'),
          modalAdd = document.querySelector('#modal__add'),
          modalEdit = document.querySelector('#modal__edit'),
          modalRemove = document.querySelector('#modal__remove');
    
    btns.forEach(item => {
        item.addEventListener('click', (e) => {
            switch (e.target.getAttribute('id')) {
                case 'add':
                    modalAdd.style.display = "block";
                    modalAdd.classList.add('activeModal');
                    break;
                case 'edit':
                    modalEdit.style.display = "block";
                    modalEdit.classList.add('activeModal');
                    break;
                case 'remove':
                    modalRemove.style.display = "block";
                    modalRemove.classList.add('activeModal');
                    break;
            } 
        });        
    }); 
    
    function closeModal() {
        modalWindows.forEach(item => {
            item.style.display = "none";
            item.classList.remove('activeModal');
        });   
    }
    
    document.addEventListener('click', (e) => {
        modalWindows.forEach(item => {
            if (item.style.display === "block") {
                if (e.target.getAttribute('data-close') === '') {
                    closeModal();
                }
            }  
        });              
    });
////////////////

    const form =document.querySelector('form'),
          vacancyList = document.querySelector('.vacancy_list'),
          vacancyTitle = document.querySelector('.vacancy_title'),
          inputName = document.querySelector('[name="name"]'),
          inputDescr = document.querySelector('[name="describe"]');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let vacancyName = inputName.value,
            vacancyDescr = inputDescr.value;
            
        vacancyList.innerHTML += `
            <li>
                <div>
                    <h3>${vacancyName}</h3>
                    <p>${vacancyDescr}</p>
                </div>
            </li>
        `;  
        vacancyTitle.textContent = "";

        e.target.reset();
        closeModal();
    });
}
vacancy();