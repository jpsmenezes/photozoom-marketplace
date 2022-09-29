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



//=============== SHOW SCROLL UP ========================================
const scrollUp = () =>{
	const scrollUp = document.querySelector('#scroll-up');
      
	scrollY >= 2000 ? scrollUp.classList.add('show-scroll')
						      : scrollUp.classList.remove('show-scroll');  
}
window.addEventListener('scroll', scrollUp);



//=============== DARK MODE =============================================
const themeButton = document.querySelector('#theme-button');
const darkTheme = 'dark-theme'; 
const iconTheme = 'bx-sun'; 

const selectedTheme = localStorage.getItem('selected-theme'); 
const selectedIcon = localStorage.getItem('selected-icon'); 

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun';

if (selectedTheme) {  
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);   
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme); 
}

themeButton.addEventListener('click', ()=>{   
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});



//=============== SWIPER JS =========================================
// BANNER-SLIDE 
  const bannerSlide = new Swiper(".banner-slider-container", {
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

  // DEPOIMENTO-SLIDE 
  const depoimentoSlide = new Swiper(".depoimentos-slider-container", {
    
    //PARAMETROS
    slidesPerView: 1,        
    loop: true,
    initialSlide: 1,
     
    //PAGINAÇÃO
    pagination: {
      el: ".swiper-pagination",
      clickable: true,     
    },   
    
    //AUTOPLAY
    autoplay: {
      delay: 5000,
      disableOnInteraction:false,
    },       

    breakpoints: {
      // when window width is >= 1023px
      1023: {
        slidesPerView: 3,
        initialSlide: 1,
        spaceBetween: 0,        
        enabled:false,
      },
    },
  });
  
  // DESCONTO-SLIDE 
  const descontoSlide = new Swiper(".desconto-slide-content", {
    slidesPerView: 1,        
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


//=============== SCROLLREVEAL =======================================
const transition = ScrollReveal({
  origin: 'bottom',
  distance: '60px',
  duration: 2000,
  delay: 130,
});

transition.reveal(`.hero-content h1`,{origin: 'top'});

transition.reveal(` 
    .hero-content h3, 
    #hero-form, 
    #about .btn__button, 
    #about h2, 
    #about .line, 
    #about p,
    #tudoQueVocePrecisa header,
    #tudoQueVocePrecisa .options,
    #planosAcessiveis header,
    #planosAcessiveis .personal,
    #planosAcessiveis .business,
    #planosAcessiveis .enterprise`);

transition.reveal(`#pictures .photo-content`,{origin: 'right'})