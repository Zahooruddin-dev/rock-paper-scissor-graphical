const body = document.querySelector("body") as HTMLBodyElement;
const rps = document.querySelector("#rps") as HTMLDivElement;
const startGame = document.querySelector("#start") as HTMLDivElement;

window.addEventListener("load", () => smoothScrollTo(0, 0, 0));

body.addEventListener("click", start, { once: true });

function start() {
    if (!rps || !startGame) return;

    [rps, startGame].forEach((el) => {
        el.style.transition = "all 1.2s";
        el.style.opacity = "0";
    });

    smoothScrollTo(0, 800, 2100);
}

function easeInOutQuart(time: number, from: number, distance: number, duration: number): number {
    time /= duration / 2;
    if (time < 1) return (distance / 2) * time * time * time * time + from;
    time -= 2;
    return (-distance / 2) * (time * time * time * time - 2) + from;
}

function smoothScrollTo(endX: number, endY: number, duration: number = 400) {
    const startX = window.scrollX;
    const startY = window.scrollY;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = performance.now();

    const timer = setInterval(() => {
        const time = performance.now() - startTime;
        window.scroll(
            easeInOutQuart(time, startX, distanceX, duration),
            easeInOutQuart(time, startY, distanceY, duration)
        );
        if (time >= duration) clearInterval(timer);
    }, 1000 / 60);
}