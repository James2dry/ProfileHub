document.addEventListener('DOMContentLoaded', () => {
    const badges = document.querySelectorAll('.badge');
    
    badges.forEach((badge, index) => {
        badge.style.animationDelay = `${index * 0.2}s`;
        badge.style.opacity = '1';
    });

    createStars();
});

function createStars() {
    const numStars = 100;
    const container = document.body;

    for (let i = 0; i < numStars; i++) {
        let star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * window.innerWidth}px`;
        star.style.top = `${Math.random() * -window.innerHeight}px`;
        star.style.animationDuration = `${Math.random() * 3 + 2}s, 20s linear infinite`;
        container.appendChild(star);
    }
}

const css = `
@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.star {
    position: absolute;
    width: 2px;
    height: 2px;
    background: white;
    border-radius: 50%;
    animation: twinkle 5s infinite, starMovement 20s linear infinite;
}

@keyframes twinkle {
    0%, 100% { opacity: 0.8; }
    50% { opacity: 0; }
}

@keyframes starMovement {
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(100vh);
    }
}`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = css;
document.head.appendChild(styleSheet);
