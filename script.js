document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobileMenu');
    const menuOpen = document.getElementById('menuOpen');
    const menuClose = document.getElementById('menuClose');


    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu if open
                if (!mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                    menuOpen.classList.remove('hidden');
                    menuClose.classList.add('hidden');
                }
            }
        });
    });
});
