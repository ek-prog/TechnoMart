
if (localStorage.getItem('cart')) {
    const cart = JSON.parse(localStorage.getItem('cart'));
    let shopCart = new Cart(cart); // cart - массив товаров в корзине
    console.log(shopCart);
    document.querySelector('.cart_products').innerHTML = ''; // очищаю вывод
    document.querySelector('.cart_products').append(shopCart.render()); // рисую корзину
    document.querySelector('.cart_products').append(shopCart.renderCheckout()); // кнопка оформления заказа
    document.querySelector('.cart_products').addEventListener('click', (event) => {
        let target = event.target;
        if (target.classList.contains('delete')) {
            shopCart.goodsDelete(target.dataset['articul']);
            document.querySelector('.cart_products').innerHTML = '';
            document.querySelector('.cart_products').append(shopCart.render());
            document.querySelector('.cart_products').append(shopCart.renderCheckout());
            localStorage.setItem('cart', JSON.stringify(shopCart.items));
            return true;
        }
        else if (target.classList.contains('plus')) {
            shopCart.goodsPlus(target.dataset['articul']);
            console.log(shopCart);
            document.querySelector('.cart_products').innerHTML = '';
            document.querySelector('.cart_products').append(shopCart.render());
            document.querySelector('.cart_products').append(shopCart.renderCheckout());

            localStorage.setItem('cart', JSON.stringify(shopCart.items));
            return true;
        }
        else if (target.classList.contains('minus')) {
            shopCart.goodsMinus(target.dataset['articul']);
            document.querySelector('.cart_products').innerHTML = '';
            document.querySelector('.cart_products').append(shopCart.render());
            document.querySelector('.cart_products').append(shopCart.renderCheckout());
            localStorage.setItem('cart', JSON.stringify(shopCart.items));
            return true;
        }
    });
}


if (localStorage.getItem('cart')) {
    const dropdowncart = JSON.parse(localStorage.getItem('cart'));
    let dropdownShopCart = new Cart(dropdowncart); // cart - массив товаров в корзине
    console.log();
    document.querySelector('.dropdown_cart_products').innerHTML = ''; // очищаю вывод
    document.querySelector('.dropdown_cart_products').append(dropdownShopCart.renderDropdownCart()); // рисую корзину


    document.querySelector('.dropdown_cart_products').addEventListener('click', (event) => {
        let target = event.target;
        if (target.classList.contains('delete')) {
            dropdownShopCart.goodsDelete(target.dataset['articul']);
            document.querySelector('.dropdown_cart_products').innerHTML = '';
            document.querySelector('.dropdown_cart_products').append(dropdownShopCart.renderDropdownCart());
            localStorage.setItem('cart', JSON.stringify(dropdownShopCart.items));
            return true;
        }
        else if (target.classList.contains('plus')) {
            dropdownShopCart.goodsPlus(target.dataset['articul']);
            console.log(dropdownShopCart);
            document.querySelector('.dropdown_cart_products').innerHTML = '';
            document.querySelector('.dropdown_cart_products').append(dropdownShopCart.renderDropdownCart());

            localStorage.setItem('cart', JSON.stringify(dropdownShopCart.items));
            return true;
        }
        else if (target.classList.contains('minus')) {
            dropdownShopCart.goodsMinus(target.dataset['articul']);
            document.querySelector('.dropdown_cart_products').innerHTML = '';
            document.querySelector('.dropdown_cart_products').append(dropdownShopCart.renderDropdownCart());
            localStorage.setItem('cart', JSON.stringify(dropdownShopCart.items));
            return true;
        }
    });
}