const menuEmail = document.querySelector('.navbar-email');
const menuHamburgesaIcon = document.querySelector('.menu');
const menuCarrito = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobilemenu= document.querySelector('.mobile-menu');
const aside= document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamburgesaIcon.addEventListener('click', toggleMobileMenu);
menuCarrito.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu(){
    const isAsideClosed = aside.classList.contains('inactive');
    if(!isAsideClosed){
        aside.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu(){
    const isAsideClosed = aside.classList.contains('inactive');
    if(!isAsideClosed){
        aside.classList.add('inactive');
    }
    mobilemenu.classList.toggle('inactive');
}
function toggleCarritoAside(){
    const isMobileMenuClosed = mobilemenu.classList.contains('inactive');

    if(!isMobileMenuClosed){
        mobilemenu.classList.add('inactive');
    }
    aside.classList.toggle('inactive');
}
    