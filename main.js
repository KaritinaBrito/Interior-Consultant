const btnMenu= document.querySelector('.btn-icon-header');
const mainContainer = document.querySelector('.main-container');
const menuSide = document.querySelector('.menuSide');
const menuSideContainer = document.querySelector('.menuSide-container');
const headerContainer = document.querySelector('.header-container--left');
const closeBtn = document.querySelector('.closeBtn');

function toogleMenu() {
    btnMenu.addEventListener('click', () => {
        menuSide.classList.remove('hidden');
        menuSideContainer.classList.add('visible');
        mainContainer.classList.add('hidden');
        headerContainer.classList.add('hidden');
    });          
}

function closeMenu() {
    closeBtn.addEventListener('click', () => {
        menuSide.classList.add('hidden');
        menuSideContainer.classList.remove('visible');
        mainContainer.classList.remove('hidden');
        headerContainer.classList.remove('hidden');
    })
}


