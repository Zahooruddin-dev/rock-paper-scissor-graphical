const char1 = document.querySelector("#sprite1 img") as HTMLImageElement;
const char2 = document.querySelector("#sprite2 img") as HTMLImageElement;

const PLAYER_FRAMES: string[] = [
    "./img/playerCharFolder/playerChar0.png",
    "./img/playerCharFolder/playerChar1.png",
    "./img/playerCharFolder/playerChar2.png",
    "./img/playerCharFolder/playerChar3.png",
];

const COMPUTER_FRAMES: string[] = [
    "./img/computerCharFolder/computerChar0.png",
    "./img/computerCharFolder/computerChar1.png",
    "./img/computerCharFolder/computerChar2.png",
    "./img/computerCharFolder/computerChar3.png",
];

let continuousAnimationChar: number;
let currentFrame: number = 0;

function getFrame(frames: string[], index: number): string {
    return frames[index % frames.length] ?? frames[0]!;
}

export function stopCharAnimation() {
    clearInterval(continuousAnimationChar);
    currentFrame = 0;
}

export function startCharAnimation(fps: number = 700) {
    stopCharAnimation();
    continuousAnimationChar = setInterval(() => {
        currentFrame = (currentFrame + 1) % PLAYER_FRAMES.length;
        char1.setAttribute("src", getFrame(PLAYER_FRAMES, currentFrame));
        char2.setAttribute("src", getFrame(COMPUTER_FRAMES, currentFrame));
    }, fps);
}

startCharAnimation();