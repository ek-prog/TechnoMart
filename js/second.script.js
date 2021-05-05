function menuActive() {
    let headerMenu = document.querySelector('.header_link');
    headerMenu.classList.toggle('active');
}
function openForm(el) {
    el.style.display = "block";
}
function closeForm(el) {
    el.style.display = "none"
}
// ВЫВОД ТОВАРОВ НА СТРАНИЦУ

let products = [
    {
        img: 'img/png/Perforator_1.png',
        name: 'Перфоратор bosch <br> BFG 3000 ',
        manufacturer: 'Bosch',
        connection: 'Аккумуляторные',
        price: 13950
    },
    {
        img: 'img/png/Perforator_2.png',
        name: 'Перфоратор Makita <br> BFG 6000',
        manufacturer: 'Makita',
        connection: 'Сетевые',
        price: 22000
    },
    {
        img: 'img/png/Perforator_4.png',
        name: 'Перфоратор Metabo <br> BFG 9000',
        manufacturer: 'Metabo',
        connection: 'Аккумуляторные',
        price: 12200
    },
    {
        img: 'img/png/Perforator_1.png',
        name: 'Перфоратор Hitachi <br> BFG 3000 ',
        manufacturer: 'Hitachi',
        connection: 'Сетевые',
        price: 27750
    },
    {
        img: 'img/png/Perforator_2.png',
        name: 'Перфоратор Makita <br> BFG 6000',
        manufacturer: 'Makita',
        connection: 'Аккумуляторные',
        price: 10400
    },
    {
        img: 'img/png/Perforator_3.png',
        name: 'Перфоратор Metabo <br> BFG 9000',
        manufacturer: 'Metabo',
        connection: 'Сетевые',
        price: 13700
    },
    {
        img: 'img/png/Perforator_3.png',
        name: 'Перфоратор DeWALT <br> BFG 9000',
        manufacturer: 'DeWALT',
        connection: 'Аккумуляторные',
        price: 12200
    },
    {
        img: 'img/png/Perforator_4.png',
        name: '<p>Перфоратор bosch <br> BFG 2000</p>',
        manufacturer: 'Bosch',
        connection: 'Аккумуляторные',
        price: 10300
    },
    {
        img: 'img/png/Perforator_3.png',
        name: 'Перфоратор Metabo <br> BFG 9000',
        manufacturer: 'Metabo',
        connection: 'Сетевые',
        price: 12200
    },
    {
        img: 'img/png/Perforator_1.png',
        name: 'Перфоратор bosch <br> BFG 3000 ',
        manufacturer: 'Bosch',
        connection: 'Аккумуляторные',
        price: 12352
    },
    {
        img: 'img/png/Perforator_2.png',
        name: 'Перфоратор DeWALT <br> BFG 6000',
        manufacturer: 'DeWALT',
        connection: 'Сетевые',
        price: 15666
    },
    {
        img: 'img/png/Perforator_3.png',
        name: 'Перфоратор Интерскол <br> BFG 9000',
        manufacturer: 'Интерскол',
        connection: 'Аккумуляторные',
        price: 22700
    },
    {
        img: 'img/png/Perforator_1.png',
        name: 'Перфоратор bosch <br> BFG 3000 ',
        manufacturer: 'Bosch',
        connection: 'Сетевые',
        price: 13950
    },
    {
        img: 'img/png/Perforator_2.png',
        name: 'Перфоратор Makita <br> BFG 6000',
        manufacturer: 'Makita',
        connection: 'Аккумуляторные',
        price: 22000
    },
    {
        img: 'img/png/Perforator_4.png',
        name: 'Перфоратор Metabo <br> BFG 9000',
        manufacturer: 'Metabo',
        connection: 'Аккумуляторные',
        price: 12200
    }
    // {
    //     img: 'img/png/Perforator_1.png',
    //     name: 'Перфоратор bosch <br> BFG 3000 ',
    //     manufacturer: 'Bosch',
    //     connection: 'Аккумуляторные',
    //     price: 27750
    // },
    // {
    //     img: 'img/png/Perforator_2.png',
    //     name: 'Перфоратор Makita <br> BFG 6000',
    //     manufacturer: 'Makita',
    //     connection: 'Сетевые',
    //     price: 10400
    // },
    // {
    //     img: 'img/png/Perforator_3.png',
    //     name: 'Перфоратор Metabo <br> BFG 9000',
    //     manufacturer: 'Metabo',
    //     connection: 'Аккумуляторные',
    //     price: 13700
    // },
    // {
    //     img: 'img/png/Perforator_3.png',
    //     name: 'Перфоратор Metabo <br> BFG 9000',
    //     manufacturer: 'Metabo',
    //     connection: 'Аккумуляторные',
    //     price: 12200
    // },
    // {
    //     img: 'img/png/Perforator_3.png',
    //     name: 'Перфоратор Metabo <br> BFG 9000',
    //     manufacturer: 'Metabo',
    //     connection: 'Сетевые',
    //     price: 12200
    // },
    // {
    //     img: 'img/png/Perforator_4.png',
    //     name: '<p>Перфоратор BOSCH <br> BFG 2000</p>',
    //     manufacturer: 'Bosch',
    //     connection: 'Аккумуляторные',
    //     price: 10300
    // },
    // {
    //     img: 'img/png/Perforator_2.png',
    //     name: 'Перфоратор Makita <br> BFG 6000',
    //     manufacturer: 'Makita',
    //     connection: 'Сетевые',
    //     price: 10400
    // }
];


// function outpuOnThePage(arr) {
//     let out = '';
//     arr.forEach(el => {
//         out += '<li class="link_goods">';
//         out += '<img class="popular_goods_item_photo" src="' + el.img + '" width="218" height="170" alt="Перфоратор">';
//         out += '<p>' + el.name + '</p>';
//         out += '<p><span class="old_cost">' + el.price + 'Р.</span></p>';
//         out += '<a class="popular_goods_price" href="#">' + el.price + 'Р.</a>';
//         out += '<div class="add_popular_goods">';
//         out += '<button class="btn_popular_goods btn_popular_goods_first">Купить</button>';
//         out += '<button class="btn_popular_goods btn_popular_goods_second">В закладки</button>';
//         out += '</div>';
//         out += '</li>';
//     });
//     return out;
// }
// document.querySelector('.box_output_goods_ul').innerHTML = outpuOnThePage(products);










//ПАГИНАЦИЯ
let goodsElement = document.querySelector('.box_output_goods_ul');
let paginationElement = document.getElementById('pagination');

let currentPage = 1;
let rows = 9;

function DisplayList(items, wrapper, rows_per_page, page){
    wrapper.innerHTML = '';
    page--;

    let start = rows_per_page * page;
    let end = start + rows_per_page;
    let paginationItems = items.slice(start, end);
    // console.log(paginationItems);
    document.querySelector('.box_output_goods_ul').innerHTML = outpuOnThePage(paginationItems);
}



function outpuOnThePage(arr) {
    let out = '';
    arr.forEach(el => {
        out += '<li class="link_goods">';
        out += '<img class="popular_goods_item_photo" src="' + el.img + '" width="218" height="170" alt="Перфоратор">';
        out += '<p>' + el.name + '</p>';
        out += '<p><span class="old_cost">' + el.price + 'Р.</span></p>';
        out += '<a class="popular_goods_price" href="#">' + el.price + 'Р.</a>';
        out += '<div class="add_popular_goods_second_str">';
        out += '<button class="btn_popular_goods btn_popular_goods_first">Купить</button>';
        out += '<button class="btn_popular_goods btn_popular_goods_second">В закладки</button>';
        out += '</div>';
        out += '</li>';
    });
    return out;
}


function setUpPagination(items, wrapper, rows_per_page){
    wrapper.innerHTML = '';
    let pageCount = Math.ceil(items.length / rows_per_page);
    for(let i = 1; i < pageCount + 1; i++){
        let btn = paginationButton(i, items);
        wrapper.appendChild(btn);
    }
}

function paginationButton(page, items){
    let button = document.createElement('button');
    button.innerText = page;

    if(currentPage == page) button.classList.add('active');
    
    button.addEventListener('click', function(){
        currentPage = page;
        DisplayList(products, goodsElement, rows, currentPage);

        let currentBtn = document.querySelector('.page_numbers button.active');
        currentBtn.classList.remove('active');

        button.classList.add('active');
    });
    return button;
}

DisplayList(products, goodsElement, rows, currentPage);
setUpPagination(products, paginationElement, rows);




//СОРТИРОВКА ТОВАРОВ
function sortPriseUp() {
    products.sort(function (a, b) {
        return a.price - b.price;
    });
    DisplayList(products, goodsElement, rows, currentPage);
}
document.querySelector('#btn_up').onclick = function () {
 sortPriseUp();
}



function sortDown() {
    products.sort(function (a, b) {
        return b.price - a.price;
    });
    DisplayList(products, goodsElement, rows, currentPage);
}
document.querySelector('#btn_down').onclick = function () {
    sortDown();
}



//СОРТИРОВКА ПО ПРОИЗВОДИТЕЛЯМ
// кнопки производителей
    let elemManuf = document.querySelectorAll('.manufacturer'); //все кнопки с производителями

function checkManufacturer(wrapper) {
    let arrManuf = [];
    for (let elem = 0; elem < wrapper.length; elem++) { //циклом проходим по всем элементам (кнопкам)
        if (wrapper[elem].checked) { // если кнопка нажата,
            arrManuf.push(wrapper[elem].value);  //добавляем значение этого элемента в массив
            // console.log(arrManuf);
        };

    };
    return arrManuf;
}



// поиск производителей в товаре
function findProduct(manuf) {
    let arrProduct = [];
    products.forEach(el =>{
        if(manuf == el.manufacturer){
            arrProduct.push(el)
        }
    });
    return arrProduct;
}

// вывод товаров 
function pushElements(){
    document.querySelector('.box_output_goods_ul').innerHTML = '';
    let arrCheckManuf = checkManufacturer(elemManuf);
    let arrOutput = [];
    arrCheckManuf.forEach(el=>{
        arrOutput.push(findProduct(el));
        // console.log(arrOutput);
    });
    arrOutput.forEach(el=>{
        DisplayList(el, goodsElement, rows, currentPage);
    });
    if(arrOutput.length == 0){  DisplayList(products, goodsElement, rows, currentPage);}
}





//СОЕДИНЕНИЕ 

function checkConections(){
  let ar = [];
  let conection = document.querySelectorAll('.conection');
  conection.forEach(el =>{
    if(el.checked){
      ar.push(el.value);
  };
});
  return ar;
}

function findProductConect(conect) {
    let arrConect = [];
    products.forEach(el =>{
        if(conect == el.connection){
            arrConect.push(el)
        }
    });
    return arrConect;
}


function pushElementsConect(){
    document.querySelector('.box_output_goods_ul').innerHTML = '';
    let arrCheckConect = checkConections();
    let arrOutputConect = [];
    arrCheckConect.forEach(el=>{
        arrOutputConect.push(findProductConect(el));
    });
    arrOutputConect.forEach(el=>{
        DisplayList(el, goodsElement, rows, currentPage);
    });
    if(arrOutputConect.length == 0){  DisplayList(products, goodsElement, rows, currentPage);}
}


//SCROLL

let itemsButtons = document.querySelectorAll('.page_numbers button');
itemsButtons.forEach(el=>{
    el.classList.add('scroll');
});



let elemBtn = document.querySelectorAll('.scroll');
elemBtn.forEach(el=>{
    el.onclick = function () {
        topFunction();
        scrollToToСomputer();
        scrollToTopMobile();
    }
});


let scrolled;
let timer;

function topFunction() {
  // document.body.scrollTop = 100; // Для Safari
  // document.documentElement.scrollTop = 100; // Для Chrome, Firefox, IE и Opera
  scrolled = window.pageYOffset;
  // window.scrollTo(0,0);
}
function scrollToToСomputer(){
    if(scrolled > 350){
        window.scrollTo(0, scrolled);
        scrolled = scrolled - 20;
        timer = setTimeout(scrollToToСomputer, 20);
    } else{
        clearTimeout(timer);
        window.scrollTo(0, 350);
    }
}

function scrollToTopMobile(){
    if (document.body.clientWidth < 768) {
        if(scrolled > 850){
            window.scrollTo(0, scrolled);
            scrolled = scrolled - 20;
            timer = setTimeout(scrollToTopMobile, 20);
        } else{
            clearTimeout(timer);
            window.scrollTo(0, 850);
        }
    }
}



function myFunction(el){
    el.classList.toggle('items_showing');
}
document.querySelector('.button_first').onclick = function(){
    myFunction(item_show);
}
document.querySelector('.button_second').onclick = function(){
    myFunction(item_show_two);
}








// itemsButtons.onclick = function(event){
//     let eachLink = event.target;
//     eachLink.classList.add('scroll');
//     console.log(itemsButtons);

// console.log(buttons);



// let ul = document.querySelector('.box_output_goods_ul');
// ul.onclick = function(event){
//     let eachLink = event.target;
//     findProduct();
// }


