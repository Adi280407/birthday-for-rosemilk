// ==============================
// MEMORIES.JS
// ==============================

const memories = [

{
    image: "assests/photos/photo1.jpeg",
    caption: "The beginning of something amazing! ❤️"
},

{
    image: "assests/photos/photo2.jpeg",
    caption: "Every smile with you is my favourite."
},

{
    image: "assests/photos/photo3.jpeg",
    caption: "I laugh at this every single time."
},

{
    image: "assests/photos/photo4.jpeg",
    caption: "My happy place is wherever you are."
},

{
    image: "assests/photos/photo5.jpeg",
    caption: "Thank you for being you."
}

];

let memoryIndex = 0;

function startMemories() {

    document.getElementById("scene1").classList.remove("active");
    document.getElementById("scene2").classList.add("active");

    memoryIndex = 0;

    showMemory();

}

function showMemory() {

    const card = document.querySelector(".memory-card");
    const image = document.getElementById("memoryImage");
    const caption = document.getElementById("memoryCaption");

    image.src = memories[memoryIndex].image;
    caption.textContent = memories[memoryIndex].caption;

    gsap.fromTo(card,
    {
        opacity: 0,
        scale: 0.7,
        rotation: gsap.utils.random(-8, 8),
        y: 80
    },
    {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1,
        ease: "power2.out"
    });

    gsap.to(card, {

        opacity: 0,
        duration: 1,
        delay: 3,

        onComplete: () => {

            memoryIndex++;

            if (memoryIndex < memories.length) {

                showMemory();

            } else {

                console.log("Memories finished.");

                // Move to Scene 3 (Letter)
                setTimeout(() => {

                    startLetter();

                }, 1000);

            }

        }

    });

}