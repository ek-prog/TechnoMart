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




// function myFunction(el){
//     el.classList.toggle('items_showing');
// }

let navLink = document.getElementsByClassName('header_navigation_item_link');
let focusLink =  document.getElementsByClassName('focus');
// console.log(focusLink);
function clickToggleNav(){
    for(let i = 0; i < navLink.length; i++){
        navLink[i].onclick = function(){
            let currentLink = focusLink[0];
            if(currentLink){
                currentLink.classList.remove('focus');
            }
            if(currentLink !== this){
                this.classList.add('focus');
            }
        };
    }
}
// clickToggleNav();

// ВЫВОД ТОВАРОВ НА СТРАНИЦУ

let products = [
     {
        img: 'img/png/Perforator_1.png',
        name: 'Перфоратор bosch <br> BFG 3000 ',
        manufacturer: 'Bosch',
        connection: 'Аккумуляторные',
        price: 13950,
        id: 234
    },
    {
        img: 'img/png/Perforator_2.png',
        name: 'Перфоратор Makita <br> BFG 6000',
        manufacturer: 'Makita',
        connection: 'Сетевые',
        price: 22000,
        id: 432146
    },
    {
        img: 'img/png/Perforator_4.png',
        name: 'Перфоратор Metabo <br> BFG 9000',
        manufacturer: 'Metabo',
        connection: 'Аккумуляторные',
        price: 12200,
        id: 21
    },
    {
        img: 'img/png/Perforator_1.png',
        name: 'Перфоратор Hitachi <br> BFG 3000 ',
        manufacturer: 'Hitachi',
        connection: 'Сетевые',
        price: 27750,
        id: 35654
    },
    {
        img: 'img/png/Perforator_2.png',
        name: 'Перфоратор Makita <br> BFG 6000',
        manufacturer: 'Makita',
        connection: 'Аккумуляторные',
        price: 10400,
        id: 4321113
    },
    {
        img: 'img/png/Perforator_3.png',
        name: 'Перфоратор Metabo <br> BFG 9000',
        manufacturer: 'Metabo',
        connection: 'Сетевые',
        price: 13700,
        id: 51
    },
    {
        img: 'img/png/Perforator_3.png',
        name: 'Перфоратор DeWALT <br> BFG 9000',
        manufacturer: 'DeWALT',
        connection: 'Аккумуляторные',
        price: 12200,
        id: 60
    },
    {
        img: 'img/png/Perforator_4.png',
        name: '<p>Перфоратор bosch <br> BFG 2000</p>',
        manufacturer: 'Bosch',
        connection: 'Аккумуляторные',
        price: 10300,
        id: 321
    },
    {
        img: 'img/png/Perforator_3.png',
        name: 'Перфоратор Metabo <br> BFG 9000',
        manufacturer: 'Metabo',
        connection: 'Сетевые',
        price: 12200,
        id: 245
    },
    {
        img: 'img/png/Perforator_1.png',
        name: 'Перфоратор bosch <br> BFG 3000 ',
        manufacturer: 'Bosch',
        connection: 'Аккумуляторные',
        price: 12352,
        id: 9
    },
    {
        img: 'img/png/Perforator_2.png',
        name: 'Перфоратор DeWALT <br> BFG 6000',
        manufacturer: 'DeWALT',
        connection: 'Сетевые',
        price: 15666,
        id: 352
    },
    {
        img: 'img/png/Perforator_3.png',
        name: 'Перфоратор Интерскол <br> BFG 9000',
        manufacturer: 'Интерскол',
        connection: 'Аккумуляторные',
        price: 22700,
        id: 6543
    },
    {
        img: 'img/png/Perforator_1.png',
        name: 'Перфоратор bosch <br> BFG 3000 ',
        manufacturer: 'Bosch',
        connection: 'Сетевые',
        price: 13950,
        id: 9632
    },
    {
        img: 'img/png/Perforator_2.png',
        name: 'Перфоратор Makita <br> BFG 6000',
        manufacturer: 'Makita',
        connection: 'Аккумуляторные',
        price: 22000,
        id: 7853

    },
    {
        img: 'img/png/Perforator_4.png',
        name: 'Перфоратор Metabo <br> BFG 9000',
        manufacturer: 'Metabo',
        connection: 'Аккумуляторные',
        price: 12200,
        id: 267654
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
    outputOnThePage(document.querySelector('.box_output_goods_ul'), paginationItems);
}



function createProduct(product) {
    const element = document.createElement('li');
    element.className = "link_goods";
    // element.setAttribute(`data-img="${product.img}" data-name="${product.name}" data-price="${product.price}"`);
    element.innerHTML = `
        <img class="popular_goods_item_photo" src="${product.img}" width="218" height="170" аlt="Перфоратор">
        <p>${product.name}</p>
        <p><span class="old_cost">${product.price}</span></p>
        <a class="popular_goods_price" href="#">${product.price}P.</a>
        <div class="add_popular_goods_second_str">
            <button class="btn_popular_goods btn_popular_goods_first add_to_cart" data-id="${product.id}" data-name="${product.name}" data-price="${product.price}">Купить</button>
            <button class="btn_popular_goods btn_popular_goods_second">B закладки</button>
        </div>
    `;

    return element
}

// Сохранить в массив products
function loadProducts() {
    products.forEach(product => {
        product.element = createProduct(product);

    });
}
loadProducts(); 




function outputOnThePage(container, products) {
    container.innerHTML = ''; // Стирает со страницы, но элементы сохранены

    products.forEach(product => {
        container.append(product.element); // Добавляются элементы
    });
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
if(goodsElement){
DisplayList(products, goodsElement, rows, currentPage);
}
if(paginationElement){
setUpPagination(products, paginationElement, rows);
}



//СОРТИРОВКА ТОВАРОВ
function sortPriseUp() {
    products.sort(function (a, b) {
        return a.price - b.price;
    });
    DisplayList(products, goodsElement, rows, currentPage);
}
if(document.querySelector('#btn_up')){
document.querySelector('#btn_up').onclick = function () {
 sortPriseUp();
}
}

    let chboxxMin = document.getElementById('tel_sort_up');
function checkCheckboxMin(inp){
    if(inp.checked){
       sortPriseUp();
    } 
}



function sortDown() {
    products.sort(function (a, b) {
        return b.price - a.price;
    });
    DisplayList(products, goodsElement, rows, currentPage);
}

if(document.querySelector('#btn_down')){
document.querySelector('#btn_down').onclick = function () {
    sortDown();
}
}
    let chboxxMax = document.getElementById('tel_sort_down');
function checkCheckboxMax(inp){
    if(inp.checked){
       sortDown();
    } 
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






//  let elem = [];
//  let allElem;
// function clickElem() {
//     products.forEach(product => {
//         product.element.onclick = function() {
//             elem.push(product); // добавляется кликнутый товар
//             // console.log(elem);
//             localStorage.setItem('elem',JSON.stringify(elem));
//               let jsString = JSON.stringify(elem);
//               console.log(jsString);
//             document.cookie = "elem=jsString;expires=15/10/2021 00:00:00";
            
//         }
//     });
//     // return elem;
// }

// let buttonBuy = document.querySelectorAll('.add_to_cart');
//     buttonBuy.forEach(el =>{
//         el.onclick = function(){
//             clickElem();
//             // console.log(elem);
//         }
//     });









let buttonBuy = document.querySelectorAll('.add_to_cart');//кнопка купить
let cart = {}; //корзина
let cartObj; //для JSON
let cookieBox; //для cookie
let dropdownCart = document.querySelector('.dropdown_cart'); //всплывающая корзина
let arrayCart = [];
// showCart();
// console.log(products);


// buttonBuy.forEach(el=>{
//     el.addEventListener('click', function(){
//      console.log(el.getAttribute('data-id')); 
//      console.log(el.getAttribute('data-name'));
//      console.log(el.getAttribute('data-price'));   
// });
// })




// checkCart();

function addToCart(){
    buttonBuy.forEach(el =>{
        el.addEventListener('click',event =>{
          let articul = el.dataset.id;
        if(cart[articul] != undefined){
            cart[articul]++;
        }else{
            cart[articul] = 1;
        }
        
        arrayCart.push(el.dataset.id, el.dataset.name, el.dataset.price);

        setCookie();
       

       console.log(cart);
       console.log(arrayCart);
       // document.querySelector('.dropdown_cart').innerHTML += el.getAttribute('data-name');

        // showCart();
    });
    });
}
addToCart();

function setCookie(){
    cartObj = JSON.stringify(cart);
    document.cookie = "cart=" + cartObj + "; expires=10/07/2021 00:00:00";
    // console.log(cartObj);
    
}


function readCookie (name) {
    var searchName = name + '=';
    var cookies = document.cookie.split(';');
    for(var i=0; i < cookies.length; i++) {
        var c = cookies[i];
        while (c.charAt(0) == ' ')
            c = c.substring(1, c.length);
        if (c.indexOf(searchName) == 0)
            return c.substring(searchName.length, c.length);
    }
    return null;
}
readCookie("cart");

console.log(cart);
document.querySelector('.dropdown_cart').innerHTML = readCookie("cart");


// function checkTheOccupancy(){
//     if(dropdownCart !== null){
//        cartBox = document.createElement('a');
//         cartBox.className = 'link_order';
//         cartBox.textContent = 'Оформить заказ'
//         dropdownCart.appendChild(cartBox);
//      }else {
//         dropdownCart.classList.add('empty_cart');
//         document.querySelector('.dropdown_cart').textContent = 'Ваша корзина пуста';
//         cartBox.style.display="none";

//     } 
// }
// checkTheOccupancy();



// function checkCart(){
//     console.log(cartObj);
//      if(cookieBox != null){
//         cart = JSON.parse(cartObj);
//         console.log(cart);

// }
// }



// function showCart(){
//     // checkCart();
//     let output ='';
//     for(let key in cart){
//         console.log(cart)
//         // console.log(products[key].name);
//         output += '<div class="cart_block">';
//         output += '<button class="delete"></button>';
//         output += ' <img class="cart_img" src="'+products[key].img+'" аlt="Перфоратор">';
//         output += '<p class="cart_name">' + products[key].name + '</p>';
//         output += '<div class="cart_quantity">';
//         output += '<button class="minus">-</button>';
//         output += cart[key];
//         output += '<button class="plus">+</button>';
//         output += '</div>';
//         output += '<p class="cart_price">' + cart[key]*products[key].price + 'р'  + '</p>';;
//         output += '</div>';
//         output += '<hr class="hr_cart">';
//     }

//     if(dropdownCart){document.querySelector('.dropdown_cart').innerHTML = output;}
// // checkTheOccupancy();

// }





// showCart();


//  buttonBuy.forEach(el =>{
//         el.addEventListener('click', function(){
//            document.querySelector('.pop_up_notification').style.display="block";

// });
// })

// let btnContinueShopping = document.querySelector('.pop_up_button_continue_shopping');
// btnContinueShopping.onclick = function(){
//     document.querySelector('.pop_up_notification').style.display="none";
// }











// addToCart();

// console.log(el.dataset.art);

// console.log(cart);

// console.log(JSON.stringify(elem));





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





let inputsRy = {
  sliderWidth: 229,
  minRange: 4000,
  maxRange: 50000, 
  outputWidth:40, // output width
  thumbWidth: 18, // thumb width
  thumbBorderWidth: 4,
  trackHeight: 4,
  theValue: [4000, 30000] // theValue[0] < theValue[1]
};
let isDragging0 = false;
let isDragging1 = false;

let range = inputsRy.maxRange - inputsRy.minRange;
let rangeK = inputsRy.sliderWidth / range;
let container = document.querySelector(".container_cost");
let thumbRealWidth = inputsRy.thumbWidth + 2 * inputsRy.thumbBorderWidth;

// styles
let slider = document.querySelector(".slider_cost");
slider.style.height = inputsRy.trackHeight + "px";
slider.style.width = inputsRy.sliderWidth + "px";
slider.style.paddingLeft = (inputsRy.theValue[0] - inputsRy.minRange) * rangeK + "px";
slider.style.paddingRight = inputsRy.sliderWidth - inputsRy.theValue[1] * rangeK + "px";

let track = document.querySelector(".track");
track.style.width = inputsRy.theValue[1] * rangeK - inputsRy.theValue[0] * rangeK + "px";

let thumbs = document.querySelectorAll(".thumb");
for (let i = 0; i < thumbs.length; i++) {

  thumbs[i].style.width = thumbs[i].style.height = inputsRy.thumbWidth + "px";
  // console.log(inputsRy.thumbWidth + "px");
  thumbs[i].style.borderWidth = inputsRy.thumbBorderWidth + "px";
  thumbs[i].style.top = -(inputsRy.thumbWidth / 2 + inputsRy.thumbBorderWidth - inputsRy.trackHeight / 2) + "px";
  thumbs[i].style.left = (inputsRy.theValue[i] - inputsRy.minRange) * rangeK - (thumbRealWidth / 2) + "px";

}
let outputs = document.querySelectorAll(".output");
for (let i = 0; i < outputs.length; i++) {
  // console.log(thumbs[i])
  outputs[i].style.width = outputs[i].style.height = outputs[i].style.lineHeight = outputs[i].style.left = inputsRy.outputWidth + "px";
  outputs[i].style.top = -(Math.sqrt(2 * inputsRy.outputWidth * inputsRy.outputWidth) + inputsRy.thumbWidth / 2 - inputsRy.trackHeight / 2) + "px";
  outputs[i].style.left = (inputsRy.theValue[i] - inputsRy.minRange) * rangeK - inputsRy.outputWidth / 2 + "px";
  outputs[i].innerHTML = "<p>" + inputsRy.theValue[i] + "</p>";
}

//events

thumbs[0].addEventListener("mousedown", function(evt) {
  isDragging0 = true;
}, false);
thumbs[1].addEventListener("mousedown", function(evt) {
  isDragging1 = true;
}, false);
container.addEventListener("mouseup", function(evt) {
  isDragging0 = false;
  isDragging1 = false;
}, false);
container.addEventListener("mouseout", function(evt) {
  isDragging0 = false;
  isDragging1 = false;
}, false);

container.addEventListener("mousemove", function(evt) {
  let mousePos = oMousePos(this, evt);
  let theValue0 = (isDragging0) ? Math.round(mousePos.x / rangeK) + inputsRy.minRange : inputsRy.theValue[0];
  // console.log(theValue0);
  let theValue1 = (isDragging1) ? Math.round(mousePos.x / rangeK) + inputsRy.minRange : inputsRy.theValue[1];

  if (isDragging0) {

    if (theValue0 < theValue1 - (thumbRealWidth / 2) &&
      theValue0 >= inputsRy.minRange) {
      inputsRy.theValue[0] = theValue0;
      thumbs[0].style.left = (theValue0 - inputsRy.minRange) * rangeK - (thumbRealWidth / 2) + "px";
      outputs[0].style.left = (theValue0 - inputsRy.minRange) * rangeK - inputsRy.outputWidth / 2 + "px";
      outputs[0].innerHTML = "<p>" + theValue0 + "</p>";
      slider.style.paddingLeft = (theValue0 - inputsRy.minRange) * rangeK + "px";
      track.style.width = (theValue1 - theValue0) * rangeK + "px";

    }
  } else if (isDragging1) {

    if (theValue1 > theValue0 + (thumbRealWidth / 2) &&
      theValue1 <= inputsRy.maxRange) {
      inputsRy.theValue[1] = theValue1;
      thumbs[1].style.left = (theValue1 - inputsRy.minRange) * rangeK - (thumbRealWidth / 2) + "px";
      outputs[1].style.left = (theValue1 - inputsRy.minRange) * rangeK - inputsRy.outputWidth / 2 + "px";
      outputs[1].innerHTML = "<p>" + theValue1 + "</p>";
      slider.style.paddingRight = (inputsRy.maxRange - theValue1) * rangeK + "px";
      track.style.width = (theValue1 - theValue0) * rangeK + "px";

    }
  }

}, false);

// helpers

function oMousePos(elmt, evt) {
  let ClientRect = elmt.getBoundingClientRect();
  return { //objeto
    x: Math.round(evt.clientX - ClientRect.left),
    y: Math.round(evt.clientY - ClientRect.top)
  }
}
