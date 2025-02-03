// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.querySelector('.mobile-menu-toggle');
    const navList = document.querySelector('.nav-list');

    mobileMenu.addEventListener('click', () => {
        navList.classList.toggle('active');
    });

    // Smooth Scroll and Active Link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            // Remove active class from all links
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            // Add active class to clicked link
            link.classList.add('active');

            // Smooth scroll to section
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });

            // Close mobile menu after click
            if (navList.classList.contains('active')) {
                navList.classList.remove('active');
            }
        });
    });

    // Highlight active section on scroll
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                const id = section.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
});