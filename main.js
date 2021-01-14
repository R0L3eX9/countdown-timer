const startButton = document.getElementById('start-btn');
const resetButton = document.getElementById('reset-btn');
const hoursText = document.getElementById('hrs');
const minutesText = document.getElementById('mins');
const secondsText = document.getElementById('sec');
const title = document.querySelector('title');

let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0
let interval;

startButton.addEventListener('click', () => {
  if(startButton.innerHTML === 'Start') {
    interval = setInterval(startTimer);
    startButton.innerHTML = 'Pause';
    title.innerHTML = 'Stopwatch - START';
    startButton.className -= 'start-btn';
    startButton.className += ' stop-btn';
  } else {
    clearInterval(interval);
    startButton.innerHTML = 'Start';
    title.innerHTML = 'Stopwatch - PAUSE';
    startButton.className -= 'stop-btn';
    startButton.className += ' start-btn';
  }

});

const startTimer = () => {
  ++milliseconds;
  if(milliseconds > 99) {
    seconds++;
    milliseconds = 0;
    secondsText.innerHTML = (seconds <= 9) ? `0${seconds}`: `${seconds}`;
  }
  if(seconds > 59) {
    minutes++;
    seconds = 0;
    minutesText.innerHTML = (minutes <= 9) ? `0${minutes}`: `${minutes}`;
  }
  if(minutes > 59) {
    hours++;
    minutes = 0;
    hoursText.innerHTML = (hours <= 9) ? `0${hours}`: `${hours}`;
  }
}

resetButton.addEventListener('click', () => {
  hours = 0;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  secondsText.innerHTML = '00';
  minutesText.innerHTML = '00';
  hoursText.innerHTML = '00';
  clearInterval(interval);
  startButton.innerHTML = 'Start';
  title.innerHTML = 'Stopwatch';
  startButton.className -= 'stop-btn';
  startButton.className += ' start-btn';
})