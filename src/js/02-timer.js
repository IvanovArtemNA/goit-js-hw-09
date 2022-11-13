import flatpickr from 'flatpickr';
import Notiflix from 'notiflix';
import 'flatpickr/dist/flatpickr.min.css';
require('flatpickr/dist/themes/dark.css');

const timingEl = document.querySelector('#datetime-picker');
const startTimerBtnEl = document.querySelector('[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

const period = 1000;

let date = null;
let timer = null;

startTimerBtnEl.addEventListener('click', onTimerBtnEl);
startTimerBtnEl.setAttribute('disabled', '');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(dates) {
    if (dates[0] <= date) {
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      Notiflix.Notify.success('Push Start to countdown');

      date = dates[0];
      startTimerBtnEl.removeAttribute('disabled');
    }
  },
};

flatpickr(timingEl, options);

function onTimerBtnEl() {
  timer = setInterval(() => {
    const reversing = date - new Date();
    startTimerBtnEl.setAttribute('disabled', '');
    timingEl.setAttribute('disabled', '');
    stopTimer(reversing);

    const converted = convertation(reversing);
    updateTimer(converted);
  }, period);
}

function stopTimer(reversing) {
  if (reversing <= 1000) {
    clearInterval(timer);
    timingEl.removeAttribute('disabled');
  }
}

function convertation(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function updateTimer({ days, hours, minutes, seconds }) {
  daysEl.textContent = addLeadingZero(days);
  hoursEl.textContent = addLeadingZero(hours);
  minutesEl.textContent = addLeadingZero(minutes);
  secondsEl.textContent = addLeadingZero(seconds);
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}
