function calcCartPriceAndDelivery() {
  const cartBody = document.querySelector('#cart-body');
  const cartItems = cartBody.querySelectorAll('.cart-item');
  const totalPriceEl = cartBody.querySelector('.total-price');
  const deliveryCost = cartBody.querySelector('.delivery-cost');
  const cartDelivery = cartBody.querySelector('[data-cart-delivery]');
  const deliveryFree = cartBody.querySelector('.delivery-free');

  const prodItems = [...cartItems].map(item => ({
    id: +item.dataset.id,
    count: +item.querySelector('[data-counter]').textContent,
  }));
  console.log(prodItems);

  const totalPrice = prodItems.reduce(
    (acc, curr) => acc + data.find(({ id }) => id == curr.id).price * curr.count,
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
