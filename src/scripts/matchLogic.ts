import {
	startCharAnimation,
	stopCharAnimation,
} from '../animationsScripts/animationOfCharacters.js';

const CARD_SRCS: Record<string, string> = {
	rock: './img/cards/rock card.png',
	paper: './img/cards/paper card.png',
	scissor: './img/cards/scissor card.png',
};

const WINS: Record<string, string> = {
	rock: 'scissor',
	paper: 'rock',
	scissor: 'paper',
};

const sleep = (ms: number) => new Promise<void>((res) => setTimeout(res, ms));

export async function matchAnimation(player: string, computer: string) {
	const chooses = document.querySelector('#chooses') as HTMLDivElement;
	const playerHearts = document.querySelector('#p1') as HTMLDivElement;
	const computerHearts = document.querySelector('#p2') as HTMLDivElement;
	const playerCard = document.querySelector(
		'#playerCardChoose',
	) as HTMLImageElement;
	const computerCard = document.querySelector(
		'#computerCardChoose',
	) as HTMLImageElement;

	chooses.style.transition = 'all 0.5s ease-out';
	chooses.style.opacity = '0%';
	chooses.style.marginTop = '20px';

	await sleep(1200);
	chooses.style.display = 'none';
	function getCard(choice: string): string {
		return CARD_SRCS[choice] ?? CARD_SRCS['rock']!;
	}
	playerCard.setAttribute('src', getCard(player));
	playerCard.setAttribute('alt', player);
	computerCard.setAttribute('src', getCard(computer));
	computerCard.setAttribute('alt', computer);

playerCard.style.transform = 'translateY(0)';
    computerCard.style.transform = 'translateY(0)';
    playerCard.style.opacity = '1';
    computerCard.style.opacity = '1';

    await sleep(2000);

    playerCard.style.transform = 'translateY(-100%)';
    computerCard.style.transform = 'translateY(100%)';
    playerCard.style.opacity = '0';
    computerCard.style.opacity = '0';

	const result = winnerOfMatch(player, computer);

	if (result === 'player') {
		await playWinAnimation('#sprite1 img', 'playerCharFolder', 'playerChar');
		removeHeart(computerHearts, true);
	} else if (result === 'computer') {
		await playWinAnimation(
			'#sprite2 img',
			'computerCharFolder',
			'computerChar',
		);
		removeHeart(playerHearts, false);
	}

	await sleep(1000);
	chooses.style.display = 'flex';

	await sleep(2000);
    playerCard.style.transform = 'translateY(100%)';
    computerCard.style.transform = 'translateY(-100%)';
	chooses.style.opacity = '100%';
	chooses.style.marginTop = '0px';
	playerCard.style.top = '12rem';
	computerCard.style.bottom = '12rem';
}

async function playWinAnimation(
	selector: string,
	folder: string,
	prefix: string,
) {
	stopCharAnimation();
	const char = document.querySelector(selector) as HTMLImageElement;
	let count = 0;
	await new Promise<void>((res) => {
		const interval = setInterval(() => {
			char.setAttribute('src', `./img/${folder}/${prefix}${count}.png`);
			count++;
			if (count >= 5) {
				clearInterval(interval);
				res();
			}
		}, 500);
	});
	startCharAnimation();
}

function removeHeart(heartsDiv: HTMLDivElement, playerWon: boolean) {
	const last = heartsDiv.lastChild;
	if (last) heartsDiv.removeChild(last);

	if (heartsDiv.childNodes.length === 0) {
		const result = document.querySelector('#result') as HTMLImageElement;
		result.setAttribute(
			'src',
			playerWon
				? './img/resultsOfGame/Player win.png'
				: './img/resultsOfGame/Computer win.png',
		);

		const winner = document.querySelector('#winner') as HTMLDivElement;
		winner.style.opacity = '100%';
		winner.style.top = '0rem';

		const container2 = document.querySelector('#container2') as HTMLDivElement;
		const chooses = container2.querySelector('#chooses');
		if (chooses) container2.removeChild(chooses);
	}
}

function winnerOfMatch(player: string, computer: string): string | false {
	if (player === computer) return false;
	return WINS[player] === computer ? 'player' : 'computer';
}
