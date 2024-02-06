window.addEventListener('click', function (event) {
  let counter;

  // Проверяем клик по кнопкам Плюс или Минус
  if (
    event.target.dataset.action === 'plus' ||
    event.target.dataset.action === 'minus'
  ) {
    // Находим обертку счетчика
    const counterWrapper = event.target.closest('.counter-wrapper');

    // Находим див с числом счетчика
    counter = counterWrapper.querySelector('[data-counter]');
  }

  // Проверяем является ли элемент по которому был совершен клик кнопкой Плюс
  if (event.target.dataset.action === 'plus') {
    counter.innerText = ++counter.innerText;
  }

  // Проверяем является ли элемент по которому был совершен клик кнопкой Минус
  if (event.target.dataset.action === 'minus') {
    // Проверяем чтобы счетчик был больше 1
    if (+counter.innerText > 1) {
      counter.innerText = --counter.innerText;
    } else if (
      event.target.closest('.cart-wrapper') &&
      parseInt(counter.innerText) === 1
    ) {
      // Удаляем товар из корзины
      event.target.closest('.cart-item').remove();

      toggleCartStatus();

      calcCartPriceAndDelivery();
    }
  }

  // Проверяем клик на + или - внутри корзины
  if (
    event.target.hasAttribute('data-action') &&
    event.target.closest('.cart-wrapper')
  ) {
    calcCartPriceAndDelivery();
  }
});
