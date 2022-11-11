const startChangeColorBtnEl = document.querySelector('[data-start]');
const stopChangeColorBtnEl = document.querySelector('[data-stop]');

startChangeColorBtnEl.addEventListener('click', onClickStartChangeColorBtnEl);
stopChangeColorBtnEl.addEventListener('click', onStopChangeColorBtnEl);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let intervalId = null;

function onClickStartChangeColorBtnEl() {
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startChangeColorBtnEl.disabled = true;
  stopChangeColorBtnEl.disabled = false;
}

function onStopChangeColorBtnEl() {
  clearInterval(intervalId);
  startChangeColorBtnEl.disabled = false;
  stopChangeColorBtnEl.disabled = true;
}
