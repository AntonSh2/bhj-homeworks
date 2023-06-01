const productQuantityControl = Array.from(document.getElementsByClassName('product__quantity-control'));
const productAdd = Array.from(document.getElementsByClassName('product__add'));
const cartProducts = document.querySelector('.cart__products');

productQuantityControl.forEach(element => {
  element.addEventListener('click', () => {
    const prodClose = element.closest('.product__quantity-controls');
    const countProduct = prodClose.querySelector('.product__quantity-value');

    if (element.classList.contains('product__quantity-control_inc')) {
      countProduct.textContent++;
    } else if (element.classList.contains('product__quantity-control_dec') && countProduct.textContent > 1) {
      countProduct.textContent--;
    }
  })
})

productAdd.forEach(element => {
  element.addEventListener('click', () => {
    const prodClose = element.closest('.product');
    const countProduct = prodClose.querySelector('.product__quantity-value');
    const srcImage = prodClose.querySelector('.product__image').src;
    const dataidAttribute = prodClose.getAttribute('data-id');
    const dataId = Array.from(cartProducts.children).find(item => item.getAttribute('data-id') === dataidAttribute);

    if (!dataId) {
      cartProducts.insertAdjacentHTML(
        'beforeEnd',
        `<div class="cart__product" data-id="${dataidAttribute}"><img class="cart__product-image" src=${srcImage}><div class="cart__product-count">${countProduct.textContent}</div></div>`);
    } else {
      const cartProductCount = dataId.querySelector('.cart__product-count'); 
      cartProductCount.textContent = +cartProductCount.textContent + +countProduct.textContent;
    }
  })
})