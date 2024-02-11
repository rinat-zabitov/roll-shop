function setCount(el = new HTMLElement()) {
  const $counter = el.parentElement.children[1];
  if (el.dataset.action === 'minus') {
    if ($counter.textContent === '1') return;
    $counter.textContent = +$counter.textContent - 1;
  } else if (el.dataset.action === 'plus') {
    $counter.textContent = +$counter.textContent + 1;
  }
}

function renderProducts(productsArray) {
  const productsContainer = document.querySelector('#products-container');
  productsArray.forEach(item => {
    const productHtml = `
      <div class="col-md-6">
        <div class="card mb-4" data-id="${item.id}">
          <img class="product-img" src="img/roll/${item.imgSrc}" alt="">
          <div class="card-body text-center">
            <h4 class="item-title">${item.title}</h4>
            <p><small data-items-in-box class="text-muted">${item.itemsInBox} шт.</small></p>
            <div class="details-wrapper">
              <div class="items counter-wrapper">
                <div onclick="setCount(this)" class="items__control" data-action="minus">-</div>
                <div class="items__current" data-counter>1</div>
                <div onclick="setCount(this)" class="items__control" data-action="plus">+</div>
              </div>
              <div class="price">
                <div class="price__weight">${item.weight}г.</div>
                <span class="price__currency">${item.price}</span><span> ₽</span>
              </div>
            </div>
            <button onclick="addToCart(this)" data-cart type="button" class="btn btn-block btn-outline-warning">+ в корзину</button>
          </div>
        </div>
      </div>
    `;
    productsContainer.insertAdjacentHTML('beforeend', productHtml);
  });
}

async function getProducts() {
  const response = await getData();
  renderProducts(response);
}

getProducts();
