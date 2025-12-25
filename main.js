document.addEventListener('DOMContentLoaded', (event) => {
    if (window.location.hash) {
        
        window.history.replaceState('', document.title, window.location.pathname + window.location.search);
        
        window.scrollTo(0, 0);
    }
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

document.querySelectorAll('.portfolio-card').forEach(card => {
    appearanceObserver.observe(card);
});

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}