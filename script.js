document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Close menu when clicking a link
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            // Check if this item is already active
            const isActive = item.classList.contains('active');

            // Close all other items
            faqItems.forEach(faq => faq.classList.remove('active'));

            // If it wasn't active, open it
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
});
