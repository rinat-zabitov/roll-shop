function calcCartPriceAndDelivery() {
  const cartBody = document.querySelector('#cart-body');
  const cartItems = cartBody.querySelectorAll('.cart-item');
  const totalPriceEl = cartBody.querySelector('.total-price');
  const deliveryCost = cartBody.querySelector('.delivery-cost');
  const cartDelivery = cartBody.querySelector('[data-cart-delivery]');
  const deliveryFree = cartBody.querySelector('.delivery-free');

  const totalPrice = [...cartItems].reduce(
    (acc, curr) => acc + +curr.querySelector('.price__currency').textContent,
    0
  );

  totalPriceEl.textContent = totalPrice;

  if (totalPrice) {
    cartDelivery.classList.remove('none');
    if (totalPrice < 600) {
      deliveryFree.classList.remove('none');
      deliveryCost.classList.remove('free');
      deliveryCost.innerText = '250 ₽';
    } else {
      deliveryFree.classList.add('none');
      deliveryCost.classList.add('free');
      deliveryCost.innerText = 'бесплатно';
    }
  } else {
    cartDelivery.classList.add('none');
  }
}
