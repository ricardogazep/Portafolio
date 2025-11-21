// Obtener elementos
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

// Función para abrir/cerrar menú al hacer click en el botón hamburguesa
mobileMenu.addEventListener('click', (e) => {
    navMenu.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    e.stopPropagation(); // Evita que el clic se propague y cierre inmediatamente el menú
});

// Cerrar menú si se hace clic fuera del navbar
document.addEventListener('click', (e) => {
    // Si el menú está abierto y el clic no es dentro del menú ni del botón
    if (navMenu.classList.contains('active') && 
        !navMenu.contains(e.target) &&
        !mobileMenu.contains(e.target)) {
        navMenu.classList.remove('active');
        mobileMenu.classList.remove('active');
    }
});