const startChangeColorBtnEl = document.querySelector('[data-start]');
const stopChangeColorBtnEl = document.querySelector('[data-stop]');

startChangeColorBtnEl.addEventListener('click', startChangeColorFn);
stopChangeColorBtnEl.addEventListener('click', stopChangeColorFn);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let intervalId = null;

function startChangeColorFn() {
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startChangeColorBtnEl.disabled = true;
  stopChangeColorBtnEl.disabled = false;
}

function stopChangeColorFn() {
  clearInterval(intervalId);
  startChangeColorBtnEl.disabled = false;
  stopChangeColorBtnEl.disabled = true;
}
