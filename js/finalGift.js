// ==============================
// FINAL GIFT
// ==============================

function startFinalGift() {

    document.getElementById("scene3").classList.remove("active");
    document.getElementById("scene4").classList.add("active");

    gsap.from(".final-card", {
        opacity: 0,
        y: 80,
        scale: 0.9,
        duration: 1.5,
        ease: "power3.out"
    });

}

document.addEventListener("DOMContentLoaded", () => {

    const replay = document.getElementById("replayBtn");

    if (replay) {

        replay.addEventListener("click", () => {

            location.reload();

        });

    }

});