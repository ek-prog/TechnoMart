const cart = {
    "p92779": {
        img: 'img/png/Perforator_1.png',
        name: 'Перфоратор Bosch <br> BFG 3000 ',
        manufacturer: 'Bosch',
        connection: 'Аккумуляторные',
        price: 13950,
        id: 234
    },
    "p63553250": {
        img: 'img/png/Perforator_2.png',
        name: 'Перфоратор Makita <br> BFG 6000',
        manufacturer: 'Makita',
        connection: 'Сетевые',
        price: 22000,
        id: 432146
    },
    "p93127": {
        img: 'img/png/Perforator_4.png',
        name: 'Перфоратор Metabo <br> BFG 9000',
        manufacturer: 'Metabo',
        connection: 'Аккумуляторные',
        price: 12200,
        id: 21
    },
    "p79946990": {
        img: 'img/png/Perforator_1.png',
        name: 'Перфоратор Hitachi <br> BFG 3000 ',
        manufacturer: 'Hitachi',
        connection: 'Сетевые',
        price: 27750,
        id: 35654
    },
    "p6533206": {
        img: 'img/png/Perforator_2.png',
        name: 'Перфоратор Makita <br> BFG 6000',
        manufacturer: 'Makita',
        connection: 'Аккумуляторные',
        price: 10400,
        id: 4321113
    },
    "p65256824": {
        img: 'img/png/Perforator_3.png',
        name: 'Перфоратор Bosch <br> BFG 6000',
        manufacturer: 'Bosch',
        connection: 'Аккумуляторные',
        price: 15600,
        id: 312134331
    },
}



function createItemGoods(container, arrayCart) {
    let out = '';
    for (let key in arrayCart) {
        out += `<li class="link_goods">`;
        out += `<img class="popular_goods_item_photo" src="${arrayCart[key]['img']}">`;
        out += `<p>${arrayCart[key]['name']}</p>`;
        out += `<p><span class="old_cost">${arrayCart[key]['price']}Р.</span></p>`;
        out += `<a class="popular_goods_price" href="#">${arrayCart[key]['price']}Р.</a>`;
        out += `<div class="add_popular_goods">`;
        out += `<button class="to-cart button-primary btn_popular_goods btn_popular_goods_first" data-articul="${key}">В корзину</button>`;
        out += `<button class="btn_popular_goods btn_popular_goods_second">В закладки</button>`;
        out += `</div>`;
        out += `</li>`;
    }
    container.innerHTML = out;
}

//
createItemGoods(document.querySelector('.box_output_goods_ul'), cart);


const data = {}; // массив, в который добавляются товары в корзину

document.querySelector('.box_output_goods_ul').addEventListener('click', event => {
    if (event.target.classList.contains('to-cart')) {
        let articul = event.target.dataset['articul'];
        if (data[articul] !== undefined) {
            data[articul]['count']++;
        }
        else {
            data[articul] = cart[articul];
            data[articul]['count'] = 1;
        }
        localStorage.setItem('cart', JSON.stringify(data));
    }
})
