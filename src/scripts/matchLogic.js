import { startCharAnimation, stopCharAnimation } from "../animationsScripts/animationOfCharacters.js";

export async function matchAnimation(player, computer){
    const chooses = document.querySelector("#chooses");
    let playerCard;
    let computerCard;
    let result;

    const playerHearts = document.querySelector("#p1");
    const computerHearts = document.querySelector("#p2");

    chooses.style.transition = "all 0.5s ease-out";
    chooses.style.opacity = "0%";
    chooses.style.marginTop = "20px";
    
    setTimeout(() => {
        chooses.style.display = "none";

        switch(player){
            case "rock":
                playerCard = "./img/cards/rock card.png";
                break;
            case "paper":
                playerCard = "./img/cards/paper card.png";
                break;
            case "scissor":
                playerCard = "./img/cards/scissor card.png";
                break;
            default:
                break;
        }

        switch(computer){
            case "rock":
                computerCard = "./img/cards/rock card.png";
                break;
            case "paper":
                computerCard = "./img/cards/paper card.png";
                break;
            case "scissor":
                computerCard = "./img/cards/scissor card.png";
                break;
            default:
                break;
        }

        const playerCardChoose = document.querySelector("#playerCardChoose");
        const computerCardChoose = document.querySelector("#computerCardChoose");

        playerCardChoose.setAttribute("src", playerCard);
        playerCardChoose.setAttribute("alt", player);

        computerCardChoose.setAttribute("src", computerCard);
        computerCardChoose.setAttribute("alt", computer);

        playerCardChoose.style.top = "0rem";
        computerCardChoose.style.bottom = "0rem";

        playerCardChoose.style.opacity = "100%";
        computerCardChoose.style.opacity = "100%";

        setTimeout(() => {
            playerCardChoose.style.top = "-12rem";
            computerCardChoose.style.bottom = "-12rem";

            playerCardChoose.style.opacity = "0%";
            computerCardChoose.style.opacity = "0%";
        }, 2000);

        result = winnerOfMatch(player, computer);

        if (result === "player"){
            stopCharAnimation();

            const playerChar = document.querySelector("#sprite1 img");
            
            let count = 0;
            const interval = setInterval(() => {
                if (count >= 5){
                    clearInterval(interval)
                }

                playerChar.setAttribute("src", `./img/playerCharFolder/playerChar${count}.png`);
                count++;
            }, 500);

            try{
                computerHearts.removeChild(computerHearts.firstChild);
                computerHearts.removeChild(computerHearts.firstChild);
                if (computerHearts.childNodes.length <= 1){
                    throw new Error("Last Heart");
                }
            }catch(error){
                const winnermessage = document.querySelector("#result");
                winnermessage.setAttribute("src", "./img/resultsOfGame/Player win.png");

                const winner = document.querySelector("#winner");
                winner.style.opacity = "100%";
                winner.style.top = "0rem";

                const container2 = document.querySelector("#container2");
                container2.removeChild("#chooses");
            }
            startCharAnimation();

        } else if (result === "computer"){
            stopCharAnimation();

            const computerChar = document.querySelector("#sprite2 img");
            
            let count = 0;
            const interval = setInterval(() => {
                if (count >= 5){
                    clearInterval(interval)
                }

                computerChar.setAttribute("src", `./img/computerCharFolder/computerChar${count}.png`);
                count++;
            }, 500);
                
            try{
                playerHearts.removeChild(playerHearts.firstChild);
                playerHearts.removeChild(playerHearts.firstChild);
                if (playerHearts.childNodes.length <= 1){
                    throw new Error("Last Heart");
                }
            }catch(error){
                const winnermessage = document.querySelector("#result");
                winnermessage.setAttribute("src", "./img/resultsOfGame/Computer win.png");

                const winner = document.querySelector("#winner");
                winner.style.opacity = "100%";
                winner.style.top = "0rem";

                const container2 = document.querySelector("#container2");
                container2.removeChild("#chooses");
            }
            startCharAnimation();
        }

        setTimeout(() => {
            chooses.style.display = "flex";
        }, 1000)

        setTimeout(() => {
            chooses.style.opacity = "100%";
            chooses.style.marginTop = "0px";
            playerCardChoose.style.top = "12rem";
            computerCardChoose.style.bottom = "12rem";
        }, 3000);

        return result;
    }, 1200)
}

    

function winnerOfMatch(player, computer){
    if (player == "rock"){
        if (computer == "rock") {
            return false;
        } else if (computer == "paper") {
            return "computer";
        } else {
            return "player";
        }
    } else if (player == "paper"){
        if (computer == "rock") {
            return "player";
        } else if (computer == "paper") {
            return false;
        } else {
            return "computer";
        }
    } else {
        if (computer == "rock") {
            return "computer";
        } else if (computer == "paper") {
            return "player";
        } else {
            return false;
        }
    }
}