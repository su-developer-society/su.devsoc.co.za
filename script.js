// JavaScript to enhance the website functionality

document.addEventListener('DOMContentLoaded', function() {
    // Highlight active navigation item
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage || 
            (currentPage === '' && linkHref === 'index.html')) {
            link.style.fontWeight = 'bold';
        }
    });
    
    // Format timestamps if needed
    const formatDates = () => {
        const dateElements = document.querySelectorAll('time');
        dateElements.forEach(el => {
            const dateStr = el.getAttribute('datetime');
            if (dateStr) {
                const date = new Date(dateStr);
                el.textContent = date.toLocaleDateString();
            }
        });
    };
    
    formatDates();
});
