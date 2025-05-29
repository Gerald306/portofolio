// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = '#ffffff';
        nav.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    } else {
        nav.style.background = 'transparent';
        nav.style.boxShadow = 'none';
    }
});

// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Add your form submission logic here
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

document.querySelectorAll('.project-card, .about-content').forEach((el) => {
    observer.observe(el);
});

// Add fade-in animation
const fadeIn = {
    opacity: 0,
    transform: 'translateY(20px)',
    transition: 'opacity 0.5s ease-out, transform 0.5s ease-out'
};

// Apply initial styles
const elements = document.querySelectorAll('.project-card, .about-content');
elements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
});

// Add animation class when visible
observer.observe(elements);
