const char1 = document.querySelector("#sprite1 img");
const char2 = document.querySelector("#sprite2 img");

let continuosAnimationChar;

export function stopCharAnimation(){
    clearInterval(continuosAnimationChar);
}

export function startCharAnimation(){
    continuosAnimationChar = setInterval(() => {
        if(char1.getAttribute("src") === "./img/playerCharFolder/playerChar0.png"){
            char1.setAttribute("src", "./img/playerCharFolder/playerChar1.png");
            char2.setAttribute("src", "./img/computerCharFolder/computerChar0.png");
        } else {
            char1.setAttribute("src", "./img/playerCharFolder/playerChar0.png");
            char2.setAttribute("src", "./img/computerCharFolder/computerChar1.png");
        }
    }, 700);
}

startCharAnimation();