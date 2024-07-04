const minEl = document.querySelector('.minute');
const secEl = document.querySelector('.second');
const hourEl = document.querySelector('.hour');

setInterval(() => {
    const date = new Date();
    console.log(date.getMinutes())
    const secDeg = date.getSeconds() / 60 * 360 - 90;
    const minDeg = date.getMinutes() / 60 * 360 - 90;
    const hourDeg = (date.getHours() % 12 + date.getMinutes() / 60) / 12 * 360 - 90;
    
    secEl.style.transform = `rotate(${secDeg}deg)`;
    minEl.style.transform = `rotate(${minDeg}deg)`;
    hourEl.style.transform = `rotate(${hourDeg}deg)`;
}, 1000);

// function updateClock() {

//     const now = new Date();
//     const seconds = now.getSeconds();
//     const minutes = now.getMinutes();
//     const hours = now.getHours() % 12;

//     const secondHand = document.querySelector('.second');
//     const minuteHand = document.querySelector('.minute');
//     const hourHand = document.querySelector('.hour');

//     const secondDegrees = (seconds / 60) * 360;
//     const minuteDegrees = ((minutes + seconds / 60) / 60) * 360;
//     const hourDegrees = ((hours + minutes / 60) / 12) * 360;

//     secondHand.style.transform = `translateX(-50%) rotate(${secondDegrees}deg)`;
//     minuteHand.style.transform = `translateX(-50%) rotate(${minuteDegrees}deg)`;
//     hourHand.style.transform = `translateX(-50%) rotate(${hourDegrees}deg)`;
// }

// setInterval(updateClock, 1000);
// updateClock();