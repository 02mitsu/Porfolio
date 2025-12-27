if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

document.addEventListener('DOMContentLoaded', () => {

   
    if (window.location.hash) {
        window.history.replaceState('', document.title, window.location.pathname + window.location.search);
        window.scrollTo(0, 0);
    }

    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetHref = this.getAttribute('href');

 
            if (targetHref.includes('.html')) {
                return; 
            }
            if (targetHref.startsWith('#')) {
            
                if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('/')) {
                     e.preventDefault();
                     const targetSection = document.querySelector(targetHref);
                     if (targetSection) {
                         targetSection.scrollIntoView({ behavior: 'smooth' });
                     }
                }
            }
        });
    });

    const observerOptions = {
        root: null,
        threshold: 0.15
    };

    const appearanceObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, observerOptions);

    const cards = document.querySelectorAll('.portfolio-card');
    cards.forEach(card => {
        appearanceObserver.observe(card);
    });

    const contenedorCarrusel = document.querySelector('.vertical-marquee-container');
    const pista = document.querySelector('.vertical-marquee-track');

    if (contenedorCarrusel && pista) {
        const vigilante = new IntersectionObserver((entradas) => {
            entradas.forEach(entrada => {
                if (entrada.isIntersecting) {
                    pista.classList.add('en-movimiento');
                } else {
                    pista.classList.remove('en-movimiento');
                }
            });
        }, { threshold: 0.2 });

        vigilante.observe(contenedorCarrusel);
    }
});