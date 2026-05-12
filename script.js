// Multi-page navigation
const pages = document.querySelectorAll('.page');
const navLinks = document.querySelectorAll('.nav-link');

function showPage(pageId) {
    pages.forEach(p => p.classList.remove('active'));
    document.getElementById(pageId + 'Page').classList.add('active');
    navLinks.forEach(link => link.classList.remove('active'));
    const activeLink = document.querySelector(`.nav-link[data-page="${pageId}"]`);
    if (activeLink) activeLink.classList.add('active');
    // Refresh AOS for new content
    AOS.refresh();
}

// Nav bar clicks
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const page = this.getAttribute('data-page');
        showPage(page);
        document.getElementById('navMenu').classList.remove('show');
    });
});

// Buttons with data-page attribute (e.g., Hero button)
document.querySelectorAll('[data-page]').forEach(el => {
    if (el.classList.contains('nav-link')) return; // already handled
    el.addEventListener('click', function(e) {
        e.preventDefault();
        showPage(this.getAttribute('data-page'));
    });
});

// Mobile menu toggle
document.getElementById('mobileBtn').addEventListener('click', () => {
    document.getElementById('navMenu').classList.toggle('show');
});

// Typewriter effect
const text = "Empowering your digital life with expert services in graphics, printing, typing, and more.";
let i = 0;
function typeWriter() {
    if (i < text.length) {
        document.getElementById('typewriter').textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
    }
}
window.addEventListener('load', typeWriter);

// Copy account number
document.getElementById('copy-account').addEventListener('click', function() {
    const acc = document.getElementById('account-number').textContent.replace(/\s/g, '');
    navigator.clipboard.writeText(acc).then(() => {
        this.textContent = 'Copied!';
        setTimeout(() => { this.textContent = 'Copy Account Number'; }, 2000);
    });
});

// Form submission -> WhatsApp
document.getElementById('service-request-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('full-name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const service = document.getElementById('service').value;
    const details = document.getElementById('project-details').value;
    const message = `New Service Request:%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Phone:* ${phone}%0A*Service:* ${service}%0A*Details:* ${details}`;
    window.open(`https://wa.me/2349139285285?text=${message}`, '_blank');
    document.getElementById('confirmation-msg').style.display = 'block';
    this.reset();
});
