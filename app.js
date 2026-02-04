const { createApp, onMounted } = Vue;

createApp({
    setup() {
        onMounted(() => {
            const tl = gsap.timeline();

            // Animation de l'image de fond
            tl.from(".hero-bg-image", {
                scale: 1.3,
                duration: 2.5,
                ease: "power2.out"
            });

            // Entrée du texte et de la carte
            tl.from(".hero-title", {
                x: -50,
                opacity: 0,
                duration: 1,
                ease: "power4.out"
            }, "-=1.5");

            tl.from(".floating-card", {
                y: 30,
                opacity: 0,
                duration: 0.8
            }, "-=0.8");

            tl.from(".hero-right", {
                x: 50,
                opacity: 0,
                duration: 1
            }, "-=1");

            // Animation continue de flottement
            gsap.to(".floating-card", {
                y: -12,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        });

        return {};
    }
}).mount('#app');


gsap.registerPlugin(ScrollTrigger);
// ... dans votre setup() Vue ...
onMounted(() => {
    // Animation des éléments Bento au scroll
    gsap.from(".reveal", {
        scrollTrigger: {
            trigger: ".bento-grid",
            start: "top 80%", // Commence quand le haut de la grille atteint 80% de l'écran
        },
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2, // Décale l'apparition de chaque carte
        ease: "power3.out"
    });
});

// Animation des barres de graphique
gsap.from(".bar-anim", {
    scrollTrigger: {
        trigger: ".feature-card",
        start: "top 70%",
    },
    scaleY: 0,
    transformOrigin: "bottom",
    duration: 1.5,
    stagger: 0.1,
    ease: "elastic.out(1, 0.5)"
});

// Animation de flottement des icônes de services
gsap.to(".floating-icon", {
    y: -15,
    duration: 2.5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    stagger: {
        each: 0.5,
        from: "random"
    }
});

// Apparition des cartes
/*gsap.from(".feature-card", {
    scrollTrigger: {
        trigger: ".grid",
        start: "top 80%",
    },
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    ease: "power4.out"
});*/

// Animation des logos partenaires (entrée en cascade)
gsap.from(".grayscale img", {
    scrollTrigger: {
        trigger: ".grayscale",
        start: "top 90%",
    },
    opacity: 0,
    y: 20,
    duration: 0.8,
    stagger: 0.1,
    ease: "power2.out"
});

// Animation du bloc témoignage
gsap.from(".testimonial-box", {
    scrollTrigger: {
        trigger: ".testimonial-box",
        start: "top 85%",
    },
    opacity: 0,
    x: 50,
    duration: 1.2,
    ease: "expo.out"
});

// Animation du footer (apparition douce)
gsap.from("footer > div", {
    scrollTrigger: {
        trigger: "footer",
        start: "top 95%",
    },
    opacity: 0,
    y: 30,
    duration: 1,
    ease: "power3.out"
});

// Enregistrement du plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// 1. Animation du texte géant "WARRI" en arrière-plan
gsap.to(".warri-scroll-text", {
    scrollTrigger: {
        trigger: "footer",
        start: "top bottom", // Commence quand le footer entre dans l'écran
        end: "bottom top",
        scrub: 1.5, // Le texte suit le mouvement du scroll avec un léger retard
    },
    x: "-30%", // Déplacement horizontal
    ease: "none"
});

// 2. Animation de révélation des sections du footer
const footerSections = document.querySelectorAll('footer .grid > div');
gsap.from(footerSections, {
    scrollTrigger: {
        trigger: "footer",
        start: "top 80%",
    },
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power4.out"
});

// 3. Animation magnétique sur les boutons sociaux (optionnel mais très moderne)
const socials = document.querySelectorAll('.social-circle');
socials.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        gsap.to(btn, {
            x: x * 0.5,
            y: y * 0.5,
            duration: 0.3,
            ease: "power2.out"
        });
    });
    
    btn.addEventListener('mouseleave', () => {
        gsap.to(btn, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: "elastic.out(1, 0.3)"
        });
    });
});

// Assure-toi d'inclure ScrollTrigger dans ton HTML : 
// <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. SEQUENCE D'ENTRÉE (HERO SECTION)
    const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1.2 }});

    tl.from(".navbar", { y: -50, opacity: 0 })
      .from(".floating-card", { y: 30, opacity: 0, duration: 1.5, ease: "elastic.out(1, 0.5)" }, "-=0.5");

    // 2. ANIMATIONS AU SCROLL (REVEAL)
    const reveals = document.querySelectorAll('.reveal');

    // 3. EFFET DE FLOTTAISON (CONTINU)
    gsap.to(".floating-element, .floating-card", {
        y: 15,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    // 4. TEXTE INFINI DANS LE FOOTER (SCROLL HORIZONTAL)
    gsap.to(".warri-scroll-text", {
        xPercent: -20,
        scrollTrigger: {
            trigger: ".footer-wrap",
            start: "top bottom",
            end: "bottom top",
            scrub: 1
        }
    });

    // 5. ANIMATION DES ICONS SYNC
    gsap.to(".floating-icon", {
        rotate: 360,
        duration: 20,
        repeat: -1,
        ease: "none"
    });

});


