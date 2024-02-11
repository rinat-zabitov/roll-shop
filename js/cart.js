const cartWrapper = document.querySelector('.cart-wrapper');

function adjustPrice(el) {
  const $counter = el.parentElement.children[1];
  const $price = el.parentElement.nextElementSibling.firstElementChild;
  const price = data.find(({ id }) => el.closest('.cart-item').dataset.id == id).price;

  if (el.dataset.action === 'minus') {
    if ($counter.textContent === '1') $counter.closest('.cart-item').remove();
    $counter.textContent = +$counter.textContent - 1;
    $price.textContent = +$counter.textContent * price;
  } else if (el.dataset.action === 'plus') {
    $counter.textContent = +$counter.textContent + 1;
    $price.textContent = +$counter.textContent * price;
  }

  toggleCartStatus();
  calcCartPriceAndDelivery();
}

function addToCart(el) {
  const card = el.closest('.card');
  const prodData = data.find(({ id }) => card.dataset.id == id);
  const itemCount = +card.querySelector('[data-counter]')?.textContent || 1;

  const itemInCart = cartWrapper.querySelector(`[data-id="${prodData.id}"]`);

  if (itemInCart) {
    const $counter = itemInCart.querySelector('[data-counter]');
    const counter = +$counter.textContent;
    const $price = itemInCart.querySelector('.price__currency');
    $counter.textContent = counter + itemCount;
    $price.textContent = (counter + itemCount) * prodData.price;
  } else {
    const cartItemHtml = `
        <div class="cart-item" data-id="${prodData.id}">
          <div class="cart-item__top">
            <div class="cart-item__img">
              <img src="./img/roll/${prodData.imgSrc}" alt="${prodData.title}">
            </div>
            <div class="cart-item__desc">
              <div class="cart-item__title">${prodData.title}</div>
              <div class="cart-item__weight">${prodData.itemsInBox} / ${prodData.weight}</div>

              <!-- cart-item__details -->
              <div class="cart-item__details">

                <div class="items items--small counter-wrapper">
                  <div onclick="adjustPrice(this)" class="items__control" data-action="minus">-</div>
                  <div class="items__current" data-counter="">${itemCount}</div>
                  <div onclick="adjustPrice(this)" class="items__control" data-action="plus">+</div>
                </div>

                <div class="price">
                  <span class="price__currency">${prodData.price * itemCount}</span><span> ₽</span>
                </div>
              </div>
              <!-- // cart-item__details -->
            </div>
          </div>
        </div>
      `;

    cartWrapper.insertAdjacentHTML('beforeend', cartItemHtml);
  }

  toggleCartStatus();
  card.querySelector('[data-counter]').textContent = '1';
  calcCartPriceAndDelivery();
}
