import { matchAnimation } from "./scripts/matchLogic.js";

const MACHINE_CHOICES = ["rock", "paper", "scissor"] as const;

const chooses = document.querySelector("#chooses") as HTMLDivElement;
const audiobg = document.getElementById("bgm") as HTMLAudioElement;
audiobg.volume = 0.2;

document.addEventListener("click", () => audiobg.play(), { once: true });

chooses.addEventListener("click", (e) => {
    const target = e.target as HTMLImageElement;
    if (!MACHINE_CHOICES.includes(target.alt as typeof MACHINE_CHOICES[number])) return;

    new Audio("./music/selectedButton.mp3").play();

    const playerChoice = target.alt;
const machineChoice = MACHINE_CHOICES[Math.floor(Math.random() * MACHINE_CHOICES.length)]!;

    matchAnimation(playerChoice, machineChoice);
});

chooses.addEventListener("mouseover", (e) => {
    const target = e.target as HTMLImageElement;
    if (MACHINE_CHOICES.includes(target.alt as typeof MACHINE_CHOICES[number])) {
        new Audio("./music/hoverAudio.mp3").play();
    }
});