//menu
const btnMobile = document.getElementById('btn-mobile');
function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
      event.currentTarget.setAttribute('aria-label', 'Fechar Menu');  
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu'); 
    }
}
btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);
//slide produtos
const slide = document.querySelectorAll('.content-scroll-lateral');

const botaoEsquerdo = document.querySelectorAll('.seta-before');

const botaoDireito = document.querySelectorAll('.seta-next');

slide.forEach((item, i) => {
    let slideTamanho = item.getBoundingClientRect();
    let slideWidth = slideTamanho.width;
    
    botaoDireito[i].addEventListener('click', () => {
        item.scrollLeft += slideWidth;
    })

    botaoEsquerdo[i].addEventListener('click', () => {
        item.scrollLeft -= slideWidth;
    })
})