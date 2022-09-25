/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.querySelector('#theme-button'); //botão que aciona o dark mode
const darkTheme = 'dark-theme'; //classe que vai ser add no body para acionar o dark mode
const iconTheme = 'bx-sun'; //string para o icone do sol
const selectedTheme = localStorage.getItem('selected-theme'); //obter dados armazenado na chave 'selected-theme'
const selectedIcon = localStorage.getItem('selected-icon'); //obter dados armazenado na chave 'selected-icon'

//funcão que retorna qual é o tema autal que esta sendo utilizado, verificando se o body contein a classe 'darkTheme' e retorna uma string 'dark' ou 'light'
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';

//funcão que retorna qual icone autal que esta sendo utilizado, verificando se o botão(themeButton) contein a classe que esta armazenada na variável(iconTheme) e retorna uma string 'bx bx-moon' ou 'bx bx-sun'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun';

//ao abrir a pagina ele vai verificar no localStorage por meio da chave(selectedTheme) o tema e icone salvo pelo usuário 
if(selectedTheme){
  //condicional para adicionar ou remover a classe 'darkTheme' do body
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);

  //condicional para adicionar ou remover a classe 'iconTheme' do 'themeButton'
  themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme);
}

//ativar ou desativar o tema com o clique no botão
themeButton.addEventListener('click', ()=>{  
  //adicionar ou remover o 'darkTheme' ou 'iconTheme'
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  //vamos salvar o tema e o icone que o usuário alterou no localStorage
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});