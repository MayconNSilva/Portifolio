/* Scroll Section active link */
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        
// Seleciona todas as seções e links de navegação do cabeçalho
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

// Executa a função quando a página é rolada
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        
        if(top >= offset && top < offset + height) {
            
            navLinks.forEach(links => {
                links.classList.remove("ativo");
            });
            
            document.querySelector("header nav a[href*=" + id + "]").classList.add("ativo");
        };
    });
};

/* Menu icon toggle */
// Seleciona o ícone do menu e a lista de links do menu
let menu = document.querySelector('#menu-icon');
let menuLinks = document.querySelector('.menu');

// Função executada ao clicar no ícone do menu
menu.onclick = () => {
    menu.classList.toggle('bx-x'); // Alterna o ícone (hambúrguer para 'X')
    menuLinks.classList.toggle('active'); // Alterna a visibilidade do menu
};

/* Remove menu icon and menu when click on menu links (scroll) */
// Função executada ao clicar em um link do menu (em telas pequenas)
menuLinks.onclick = () => {
    menu.classList.remove('bx-x'); // Garante que o ícone volte a ser hambúrguer
    menuLinks.classList.remove('active'); // Esconde o menu
};

        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove("ativo");
                document.querySelector("header nav a[href*=" + id + "]").classList.add("ativo");
            });
        };
    });
};

/* Menu icon toggle */
let menu = document.querySelector('#menu-icon');
let menuLinks = document.querySelector('.menu');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    menuLinks.classList.toggle('active');
};

/* Remove menu icon and menu when click on menu links (scroll) */
menuLinks.onclick = () => {
    menu.classList.remove('bx-x');
    menuLinks.classList.remove('active');
};
