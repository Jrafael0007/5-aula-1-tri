// Controles de acessibilidade
document.getElementById('increaseFont').addEventListener('click', function() {
    const currentSize = parseFloat(getComputedStyle(document.body).fontSize);
    document.body.style.fontSize = (currentSize + 1) + 'px';
});

document.getElementById('decreaseFont').addEventListener('click', function() {
    const currentSize = parseFloat(getComputedStyle(document.body).fontSize);
    if (currentSize > 12) {
        document.body.style.fontSize = (currentSize - 1) + 'px';
    }
});

document.getElementById('highContrast').addEventListener('click', function() {
    document.body.classList.toggle('high-contrast');
});

document.getElementById('resetAccessibility').addEventListener('click', function() {
    document.body.style.fontSize = '';
    document.body.classList.remove('high-contrast');
});

// Navegação suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});