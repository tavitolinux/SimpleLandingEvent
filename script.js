gsap.registerPlugin(ScrollTrigger);

// Animación inicial del Hero
const tl = gsap.timeline();

tl.from(".subtitle", { 
    y: 50, 
    opacity: 0, 
    duration: 1, 
    ease: "power3.out" 
})
.from(".main-title", { 
    scale: 1.5, 
    opacity: 0, 
    duration: 1.5, 
    ease: "expo.out" 
}, "-=0.5")
.from(".world-glow", {
    scale: 0,
    duration: 2,
    ease: "elastic.out(1, 0.5)"
}, "-=1");

// Brillo pulsante constante
gsap.to(".world-glow", {
    boxShadow: "0 0 80px 30px rgba(241, 196, 15, 0.6)",
    repeat: -1,
    yoyo: true,
    duration: 2,
    ease: "sine.inOut"
});

// Animación de tarjetas al hacer scroll
gsap.utils.toArray(".event-card").forEach((card) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 85%",
        },
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    });
});

// Efecto interactivo con el mouse en el título
document.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    
    gsap.to(".main-title", {
        rotationY: x,
        rotationX: -y,
        duration: 0.5
    });
});

// Animación sutil para el código QR en el footer
gsap.to(".qr-container", {
    scale: 1.05,
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
});

// Revelar el footer al llegar a él
gsap.from(".footer-content > div", {
    scrollTrigger: {
        trigger: ".main-footer",
        start: "top 90%"
    },
    y: 30,
    opacity: 0,
    duration: 1,
    stagger: 0.2 // Hace que las columnas aparezcan una tras otra
});


