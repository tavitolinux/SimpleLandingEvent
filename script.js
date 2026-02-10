gsap.registerPlugin(ScrollTrigger);

// 1. Animación inicial del Hero (Entrada impactante)
const tl = gsap.timeline();

tl.from(".subtitle", { 
    y: 30, 
    opacity: 0, 
    duration: 1, 
    ease: "power3.out" 
})
.from(".main-title", { 
    scale: 1.1, 
    opacity: 0, 
    duration: 1.2, 
    ease: "expo.out" 
}, "-=0.6")
.from(".verse", {
    y: 20,
    opacity: 0,
    duration: 1
}, "-=0.8");

// 2. Efecto interactivo del Mouse en el Título (Sutil)
document.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 15;
    const y = (e.clientY / window.innerHeight - 0.5) * 15;
    
    gsap.to(".main-title", {
        rotationY: x,
        rotationX: -y,
        duration: 0.8,
        ease: "power1.out"
    });
});

// 3. Animación de las Tarjetas al hacer Scroll (Escalonada)
// Usamos .event-card-v2 que es tu nueva clase
gsap.utils.toArray(".event-card-v2").forEach((card) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 92%", // Se activa un poco antes de entrar
            toggleActions: "play none none none"
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
    });
});

// 4. Lógica del Acordeón (Control de apertura)
function toggleAccordion(id) {
    const item = document.getElementById(id);
    
    // Toggle de la clase activa
    item.classList.toggle('active');
    
    // IMPORTANTE: Refrescar ScrollTrigger después de que termine la transición CSS
    // Esto evita que las tarjetas de abajo se activen mal porque la página "creció"
    setTimeout(() => {
        ScrollTrigger.refresh();
    }, 600); // 600ms coincide con la transición de 0.5s del CSS
}

// 5. Animaciones del Footer (QR y Contenido)
gsap.from(".footer-content > div", {
    scrollTrigger: {
        trigger: ".main-footer",
        start: "top 95%"
    },
    y: 20,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15
});

// Pulso infinito para el QR (Llamada a la acción)
gsap.to(".qr-container", {
    scale: 1.05,
    duration: 1.2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});

// Parpadeo sutil del texto "WhatsApp"
gsap.to(".qr-link p", {
    opacity: 0.4,
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
});