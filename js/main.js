// Modal functionality
function openModal(serviceTitle, serviceDesc, keywords) {
    const modal = document.createElement('div');
    modal.className = 'modal flex items-center justify-center';
    modal.innerHTML = `
        <div class="modal-content">
            <button onclick="this.closest('.modal').remove()" class="absolute top-6 right-6 text-white text-3xl">&times;</button>
            <h2 class="text-xl uppercase mb-6">${serviceTitle}</h2>
            <p class="text-gray-400 text-lg mb-8 leading-relaxed">${serviceDesc}</p>
            <div class="flex flex-wrap gap-3">
                ${keywords.map(keyword => `<span class="bg-brand-green text-black px-4 py-2 rounded-full text-lg">${keyword}</span>`).join('')}
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    setTimeout(() => modal.classList.add('active'), 10);

    // Add escape key listener
    const handleEscape = (e) => {
        if (e.key === 'Escape') {
            modal.remove();
        }
    };
    document.addEventListener('keydown', handleEscape);
    modal.addEventListener('remove', () => {
        document.removeEventListener('keydown', handleEscape);
    });
}

// Mobile menu functionality
function toggleMenu() {
    const menu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// Close menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        const menu = document.querySelector('.nav-menu');
        const hamburger = document.querySelector('.hamburger');
        menu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Navbar scroll functionality
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}); 