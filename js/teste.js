/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.querySelector('#theme-button'); //botão dark mode
const darkTheme = 'dark-theme'; //classe com variaveis para o dark mode
const iconTheme = 'bx-sun'; //icone do sol

const selectedTheme = localStorage.getItem('selected-theme'); //Ler dados do armazenamento
const selectedIcon = localStorage.getItem('selected-icon'); //Ler dados do armazenamento

// We obtain the current theme that the interface has by validating the dark-theme class
// Obtemos o tema atual que a interface possui validando a classe dark-theme
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun';

if (selectedTheme) {  
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme);
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});