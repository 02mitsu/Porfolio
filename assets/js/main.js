document.addEventListener('DOMContentLoaded', (event) => {
    // Comprueba si la URL actual tiene un fragmento (el #texto)
    if (window.location.hash) {
        
        // 1. Elimina el fragmento de la URL
        // Usamos replaceState para limpiar la URL sin crear una entrada en el historial
        window.history.replaceState('', document.title, window.location.pathname + window.location.search);
        
        // 2. Asegura que el scroll esté en el tope de la página (0, 0)
        // Esto fuerza la vista al principio (el Hero)
        window.scrollTo(0, 0);
    }
});