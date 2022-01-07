function modal() {
    const items = document.querySelectorAll('.item'),
          modalWindows = document.querySelectorAll('.modal'),
          modalMCD = document.querySelector('#modal__mcd'),
          modalIcePalace = document.querySelector('#modal__ice'),
          modalGMII = document.querySelector('#modal__gmii');
    
    items.forEach(item => {
        item.addEventListener('click', (e) => {
            switch (e.target.getAttribute('id')) {
                case 'mcd':
                    modalMCD.style.display = "block";
                    break;
                case 'ice':
                    modalIcePalace.style.display = "block";
                    break;
                case 'gmii':
                    modalGMII.style.display = "block";
                    break;
            }            
        });        
    });    

    function closeModal() {
        modalWindows.forEach(item => {
            item.style.display = "none";
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
}
modal();