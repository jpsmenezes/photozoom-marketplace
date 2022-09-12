'use strict'

//abrir ou fechar o menu quando clicar nos especificos botões na versão mobile
document.querySelector('.menu-open').addEventListener('click', openMenu);
document.querySelector('.menu-close').addEventListener('click', closeMenu);

function openMenu(){
    document.body.classList.add('expended');
}
function closeMenu(){
    document.body.classList.remove('expended');
}




