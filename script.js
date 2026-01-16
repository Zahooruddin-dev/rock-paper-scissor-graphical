import {matchAnimation} from"./scripts/matchLogic.js"

const chooses = document.querySelector("#chooses");
const audio = document.querySelector("audio");
audio.volume = 0.8;

let chooseOfPlayer;
let chooseOfMachine;

let heartsPlayer = 5;
let heartsComputer = 5;



chooses.addEventListener("click", async e => {
    const audioClicked = new Audio("./music/selectedButton.mp3");
    audioClicked.volume = 1;
    audioClicked.play();
    console.log(e.target.alt);

    chooseOfPlayer = e.target.alt;
    chooseOfMachine = Math.floor(Math.random() * 3) + 1;

    switch (chooseOfMachine){
        case 1:
            chooseOfMachine = "rock";
            break;
        case 2:
            chooseOfMachine = "paper";
            break;
        case 3:
            chooseOfMachine = "scissor";
            break;
        default:
            console.log("Choose a valid value");
            break;
    }
    matchAnimation(chooseOfPlayer, chooseOfMachine)
})

chooses.addEventListener("mouseover", e => {
    const audioHover = new Audio("./music/hoverAudio.mp3");
    audioHover.volume = 1;

    switch(e.target.alt){
        case "rock":
            audioHover.play();
            break;
        case "paper":
            audioHover.play();
            break;
        case "scissor":
            audioHover.play();
            break;
        default:
            break;
    }
        
    })

