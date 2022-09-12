'use strict'

//ABRIR OU FECHAR O MENU NA VERSÃO MOBILE
function openMenu(){
    document.body.classList.add('expended');
}
function closeMenu(){
    document.body.classList.remove('expended');
}

document.querySelector('.menu-open').addEventListener('click', openMenu);
document.querySelector('.menu-close').addEventListener('click', closeMenu);


document.querySelectorAll('.linkMenu').forEach(link => link.addEventListener('click', closeMenu));
document.querySelector('.nav-btn-login').addEventListener('click', closeMenu);




