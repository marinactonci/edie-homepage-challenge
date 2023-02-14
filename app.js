const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
const logo = document.getElementById('logo');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', ()=> {
    toggleNavbar();
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        toggleNavbar();
    })
});

function toggleNavbar() {
    if (nav.classList.contains('d-none')) {
        hamburger.style.color = 'white'
        logo.style.color = 'white'
    } else {
        hamburger.style.color = '#333333'
        logo.style.color = '#333333'
    }
    nav.classList.toggle('d-none');
}