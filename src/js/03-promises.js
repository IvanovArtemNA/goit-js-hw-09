import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');

let amount;
let delay;
let step;

function onSubmitBtnClick(event) {
  event.preventDefault();

  amount = Number(event.currentTarget.elements.amount.value);
  delay = Number(event.currentTarget.elements.delay.value);
  step = Number(event.currentTarget.elements.step.value);

  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay)
      .then((position, delay) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch((position, delay) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    delay += step;
  }
}

formEl.addEventListener('submit', onSubmitBtnClick);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return (promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  }));
}

// then - если всё ок
// catch если всё не ок
