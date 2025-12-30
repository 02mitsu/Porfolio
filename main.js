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




document.addEventListener('DOMContentLoaded', () => {
    
    const lightbox = document.getElementById('image-lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close-lightbox');

    const galleryImages = document.querySelectorAll('.project-gallery-compact img, .project-gallery img, .illustration-grid img');

    if (lightbox && galleryImages.length > 0) {
        
        galleryImages.forEach(img => {
            img.addEventListener('click', () => {
                lightbox.classList.add('active'); 
                lightboxImg.src = img.src; 
                document.body.style.overflow = 'hidden'; 
            });
        });

        const closeLightbox = () => {
            lightbox.classList.remove('active');
            document.body.style.overflow = 'auto'; 
        };

        if (closeBtn) closeBtn.addEventListener('click', closeLightbox);

        lightbox.addEventListener('click', (e) => {
            if (e.target !== lightboxImg) closeLightbox();
        });
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeLightbox();
        });
    }
});



document.addEventListener('DOMContentLoaded', () => {
    
    const toggleBtn = document.getElementById('theme-toggle');
    const sunIcon = document.querySelector('.theme-icon.sun');
    const moonIcon = document.querySelector('.theme-icon.moon');
    const htmlElement = document.documentElement;

  
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
        htmlElement.setAttribute('data-theme', 'dark');
        updateIcons(true); 
    }


    function updateIcons(isDark) {
        if (isDark) {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
        } else {
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
        }
    }

  
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
      
            if (htmlElement.getAttribute('data-theme') === 'dark') {
           
                htmlElement.removeAttribute('data-theme');
                localStorage.setItem('theme', 'forest');
                updateIcons(false);
            } else {
    
                htmlElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                updateIcons(true);
            }
        });
    }
});