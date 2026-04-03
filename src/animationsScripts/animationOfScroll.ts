const body = document.querySelector('body') as HTMLBodyElement;
const rps = document.querySelector('#rps') as HTMLDivElement;
const startGame = document.querySelector('#start') as HTMLDivElement;

window.addEventListener('load', () => {
	smoothScrollTo(0, 0, 0);
});

body.addEventListener('click', start);

function start(e : Event) {
	rps.style.transition = 'all 1.2s';
	rps.style.opacity = 0;
	startGame.style.transition = 'all 1.2s';
	startGame.style.opacity = 0;

	smoothScrollTo(0, 800, 2100);
	body.removeEventListener('click', start);
}

function smoothScrollTo(endX: number, endY: number, duration: number) {
	const startX = window.scrollX || window.pageXOffset;
	const startY = window.scrollY || window.pageYOffset;
	const distanceX = endX - startX;
	const distanceY = endY - startY;
	const startTime = new Date().getTime();

	duration = typeof duration !== 'undefined' ? duration : 400;

	const easeInOutQuart = (time: number, from: number, distance: number, duration: number) => {
		if ((time /= duration / 2) < 1)
			return (distance / 2) * time * time * time * time + from;
		return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
	};

	const timer = setInterval(() => {
		const time = new Date().getTime() - startTime;
		const newX = easeInOutQuart(time, startX, distanceX, duration);
		const newY = easeInOutQuart(time, startY, distanceY, duration);
		if (time >= duration) {
			clearInterval(timer);
		}
		window.scroll(newX, newY);
	}, 1000 / 60);
}
