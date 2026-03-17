document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navUl = document.querySelector('nav ul');

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '0.8rem 0';
            navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
        } else {
            navbar.style.padding = '1rem 0';
            navbar.style.boxShadow = 'none';
        }
    });

    // Mobile menu toggle
    mobileMenuToggle.addEventListener('click', () => {
        navUl.classList.toggle('active');
        const icon = mobileMenuToggle.querySelector('i');
        if (navUl.classList.contains('active')) {
            icon.setAttribute('data-lucide', 'x');
        } else {
            icon.setAttribute('data-lucide', 'menu');
        }
        lucide.createIcons();
    });

    // Smooth scroll for links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                // Close mobile menu if open
                navUl.classList.remove('active');
                mobileMenuToggle.querySelector('i').setAttribute('data-lucide', 'menu');
                lucide.createIcons();
            }
        });
    });

    // Check for contact success from Cloudflare Function redirect
    if (window.location.hash === '#contact-success') {
        alert('Thank you! Your message has been sent successfully. We will reach out shortly.');
        // Clear hash to prevent repeated alerts on refresh
        history.replaceState(null, null, ' ');
    }

    // Form submission handling
    // If we want to use AJAX instead of a full page reload redirect:
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            // Note: If you want traditional form redirect, remove e.preventDefault()
            // Here we allow the default form action to hit the Cloudflare Function
        });
    }
});
