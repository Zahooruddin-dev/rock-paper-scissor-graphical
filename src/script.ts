import { matchAnimation } from './scripts/matchLogic.js';

const chooses = document.querySelector('#chooses') as HTMLDivElement;
const audio = document.querySelector('audio') as HTMLAudioElement;
audio.volume = 0.8;

let chooseOfPlayer: string;
let chooseOfMachine: number | string;

let heartsPlayer: number = 5;
let heartsComputer: number = 5;
const audiobg = document.getElementById('bgm') as HTMLAudioElement;
audiobg.volume = 0.2;

document.addEventListener(
	'click',
	() => {
		audiobg.play();
	},
	{ once: true },
);

chooses.addEventListener('click', async (e) => {
	const audioClicked = new Audio('./music/selectedButton.mp3');
	audioClicked.volume = 1;
	audioClicked.play();
	const target = e.target as HTMLImageElement;
	chooseOfPlayer = target.alt;
	chooseOfMachine = Math.floor(Math.random() * 3) + 1;

	switch (chooseOfMachine) {
		case 1:
			chooseOfMachine = 'rock';
			break;
		case 2:
			chooseOfMachine = 'paper';
			break;
		case 3:
			chooseOfMachine = 'scissor';
			break;
		default:
			console.log('Choose a valid value');
			break;
	}
	matchAnimation(chooseOfPlayer, chooseOfMachine as string);
});

chooses.addEventListener('mouseover', (e) => {
	const audioHover = new Audio('./music/hoverAudio.mp3');
	audioHover.volume = 1;
	const target = e.target as HTMLImageElement;

	switch (target.alt) {
		case 'rock':
			audioHover.play();
			break;
		case 'paper':
			audioHover.play();
			break;
		case 'scissor':
			audioHover.play();
			break;
		default:
			break;
	}
});
