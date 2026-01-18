// Verifica se a tela é maior que 768px (PC/Tablet)
const isDesktop = window.matchMedia("(min-width: 769px)").matches;

if (isDesktop) {
    const cursor = document.getElementById('cursor-blur');

    // Efeito de Glow seguindo o mouse
    document.addEventListener('mousemove', (e) => {
        cursor.animate({
            left: `${e.clientX}px`,
            top: `${e.clientY}px`
        }, { duration: 500, fill: "forwards" });
    });

    // Efeito de partículas (Trail)
    document.addEventListener('mousemove', function(e){
        // Cria partículas apenas a cada 50ms para não pesar
        if(Math.random() > 0.1) return; 

        let body = document.querySelector('body');
        let particle = document.createElement('span');
        
        particle.style.position = 'fixed';
        particle.style.top = (e.clientY) + 'px';
        particle.style.left = (e.clientX) + 'px';
        particle.style.width = '4px';
        particle.style.height = '4px';
        particle.style.background = '#6366f1';
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        
        body.appendChild(particle);

        let randomX = (Math.random() - 0.5) * 20;
        let randomY = (Math.random() - 0.5) * 20;

        particle.animate([
            { transform: `translate(0,0) scale(1)`, opacity: 1 },
            { transform: `translate(${randomX}px, ${randomY}px) scale(0)`, opacity: 0 }
        ], {
            duration: 1000,
            easing: 'ease-out'
        });

        setTimeout(() => {
            particle.remove();
        }, 1000);
    });
}