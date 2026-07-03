// ==============================
// MAIN.JS
// ==============================

// ---------- PARTICLES ----------

const particleContainer = document.getElementById("particles");

for (let i = 0; i < 60; i++) {

    const particle = document.createElement("div");

    particle.classList.add("particle");

    const size = Math.random() * 8 + 3;

    particle.style.width = size + "px";
    particle.style.height = size + "px";

    particle.style.left = Math.random() * 100 + "vw";
    particle.style.top = Math.random() * 100 + "vh";

    particle.style.background =
        Math.random() > 0.5
            ? "rgba(255,170,200,.45)"
            : "rgba(255,255,255,.55)";

    particleContainer.appendChild(particle);

    gsap.to(particle, {
        y: -40,
        repeat: -1,
        yoyo: true,
        duration: 4 + Math.random() * 5,
        ease: "sine.inOut"
    });
}

// ==============================
// INTRO ANIMATION
// ==============================

const tl = gsap.timeline();

tl.to(".subtitle", {
    opacity: 1,
    y: -15,
    duration: 1
})

.to(".title", {
    opacity: 1,
    y: -15,
    duration: 1
}, "-=0.4")

.to(".message", {
    opacity: 1,
    y: -10,
    duration: 1
}, "-=0.4")

.fromTo("#startButton",
{
    opacity: 0,
    scale: 0.5,
    y: 30
},
{
    opacity: 1,
    scale: 1,
    y: 0,
    duration: 1.2,
    ease: "back.out(1.7)"
},
"-=0.2");

// ==============================
// START BUTTON
// ==============================

const button = document.getElementById("startButton");

button.addEventListener("click", () => {

    button.disabled = true;

    button.innerHTML = "Opening your gift... ❤️";

    button.classList.add("glow");

    gsap.to("#scene1", {

        opacity: 0,
        scale: 0.96,
        duration: 1.5,
        ease: "power2.inOut",

        onComplete: () => {

            document.getElementById("scene1").classList.remove("active");

            startMemories();

        }

    });

});