'use strict'

//ABRIR OU FECHAR O MENU NA VERSÃO MOBILE
const openMenu = () => {
    document.body.classList.add('expended');
}
const closeMenu = () => {
    document.body.classList.remove('expended');
}

document.querySelector('.menu-open').addEventListener('click', openMenu);
document.querySelector('.menu-close').addEventListener('click', closeMenu);

//FECHAR O MENU MOBILE AO CLICAR EM QUALQUER LINK
document.querySelectorAll('.linkMenu').forEach(link => link.addEventListener('click', closeMenu));
document.querySelector('.nav-btn-login').addEventListener('click', closeMenu);


// BANNER-SLIDE 
  const bannerSlide = new Swiper(".banner-slider-container", {
    slidesPerView: 1,
    grabCursor:true,    
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // DEPOIMENTO-SLIDE 
  const depoimentoSlide = new Swiper(".depoimentos-slider-container", {
    slidesPerView: 1,
    grabCursor:true,    
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },    
  });
  
  // DESCONTO-SLIDE 
  const descontoSlide = new Swiper(".desconto-slide-content", {
    slidesPerView: 1,
    grabCursor:true,    
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },    
  });

// COLABORADORES-SLIDE 
const colaboradoresSlide = new Swiper(".colaboradores-slider", {
  slidesPerView: 1,      
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});