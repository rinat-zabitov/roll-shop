// Находим элементы на странице
const btnMinus = document.querySelector('[data-action="minus"]');
const btnPlus = document.querySelector('[data-action="plus"]');
const counter = document.querySelector('[data-counter]');

// Отслеживаем клик на кнопку btnMinus
btnMinus.addEventListener('click', function () {
  if (+counter.innerText > 1) {
    counter.innerText = --counter.innerText;
  }
});

// Отслеживаем клик на кнопку btnPlus
btnPlus.addEventListener('click', function () {
  counter.innerText = ++counter.innerText;
});
