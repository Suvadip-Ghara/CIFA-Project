let lastScrollTop = 0;
const header = document.querySelector('header');
const nav = document.querySelector('nav');

// Function to handle scroll events
function handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Determine scroll direction
    if (scrollTop > lastScrollTop && scrollTop > 80) {
        // Scrolling down & past the header height
        header.classList.add('hide');
    } else {
        // Scrolling up or at the top
        header.classList.remove('hide');
    }
    
    lastScrollTop = scrollTop;
}

// Add scroll event listener with throttling for better performance
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            handleScroll();
            ticking = false;
        });
        ticking = true;
    }
});