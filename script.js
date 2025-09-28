document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuOpen = document.getElementById('menuOpen');
    const menuClose = document.getElementById('menuClose');

// Toggle menu function
const toggleMenu = () => {
    mobileMenu.classList.toggle('hidden');
    menuOpen.classList.toggle('hidden');
    menuClose.classList.toggle('hidden');
};

// Event listeners
menuBtn.addEventListener('click', toggleMenu);

    document.querySelectorAll('#mobileMenu a').forEach(link => {
    link.addEventListener('click', () => {
        toggleMenu();
    });
});

    // Form submission
    const appointmentForm = document.getElementById('appointmentForm');
    appointmentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(appointmentForm);
        // Here you would typically send the form data to your backend
        // For now, we'll just show an alert
        alert('Thank you for your submission! We will contact you soon.');
        appointmentForm.reset();
    });

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
