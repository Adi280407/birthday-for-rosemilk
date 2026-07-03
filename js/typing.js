const letterText = `Happy Birthday, my Goiyapalam ❤️
I don't think a website could ever truly express how much you mean to me...
But I wanted to do something for you.
I couldn't be there with you, but I really wish I was there with you.
I know it is difficult right now, but I am here for you.
I will be here for you always.
You mean the world to me.
I love you.
Forever,
Rosemilk Boy ❤️`

function startLetter(){

    document.getElementById("scene2").classList.remove("active");
    document.getElementById("scene3").classList.add("active");

    gsap.to("#letterCard",{

        opacity:1,
        y:0,
        duration:1.5,
        ease:"power2.out",

        onComplete:()=>{

            typeLetter();

        }

    });

}

function typeLetter(){

    const element=document.getElementById("typingText");

    element.innerHTML="";

    let i=0;

    function type(){

        if(i<letterText.length){

            element.innerHTML+=letterText.charAt(i);

            i++;

            setTimeout(type,35);

        }

        else{

            setTimeout(()=>{

                startFinalGift();

            },3000);

        }

    }

    type();

}