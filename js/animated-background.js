// Animated Background with Particles
document.addEventListener('DOMContentLoaded', function() {
    createAnimatedBackground();
});

function createAnimatedBackground() {
    // Create background container
    const bgContainer = document.createElement('div');
    bgContainer.className = 'animated-background';
    document.body.insertBefore(bgContainer, document.body.firstChild);

    // Create glowing orbs
    createGlowOrbs(bgContainer);

    // Create floating particles
    createParticles(bgContainer, 30);

    // Create gradient lines
    createGradientLines(bgContainer);
}

function createGlowOrbs(container) {
    const orbs = [
        { size: 400, top: '10%', left: '20%', type: 'cyan', delay: 0 },
        { size: 500, top: '60%', left: '70%', type: 'coral', delay: 2 },
        { size: 450, top: '80%', left: '30%', type: 'cyan', delay: 1 },
        { size: 350, top: '30%', left: '80%', type: 'coral', delay: 3 }
    ];

    orbs.forEach(orb => {
        const orbElement = document.createElement('div');
        orbElement.className = `glow-orb ${orb.type}`;
        orbElement.style.width = `${orb.size}px`;
        orbElement.style.height = `${orb.size}px`;
        orbElement.style.top = orb.top;
        orbElement.style.left = orb.left;
        orbElement.style.animationDelay = `${orb.delay}s`;
        container.appendChild(orbElement);
    });
}

function createParticles(container, count) {
    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        
        // Random size class
        const sizes = ['small', 'medium', 'large'];
        const sizeClass = sizes[Math.floor(Math.random() * sizes.length)];
        particle.className = `particle ${sizeClass}`;
        
        // Random starting position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        // Random animation duration and delay
        const duration = 15 + Math.random() * 20; // 15-35 seconds
        const delay = Math.random() * 10; // 0-10 seconds delay
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;
        
        container.appendChild(particle);
    }
}

function createGradientLines(container) {
    const lineCount = 5;
    for (let i = 0; i < lineCount; i++) {
        const line = document.createElement('div');
        line.className = 'gradient-line';
        line.style.top = (i * 20 + 10) + '%';
        line.style.width = '200%';
        line.style.animationDelay = `${i * 2}s`;
        line.style.animationDuration = `${8 + i * 2}s`;
        container.appendChild(line);
    }
}




