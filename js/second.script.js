function menuActive(elem, nameOfClass) {
    elem.classList.toggle(nameOfClass);
}

document.querySelector('#menuActive').onclick = function () {
    menuActive(document.querySelector('.header_link'), 'active');
};

function openForm(el) {
    el.style.display = "block";
}
function closeForm(el) {
    el.style.display = "none"
}





// let navLink = document.getElementsByClassName('header_navigation_item_link');
// let focusLink =  document.getElementsByClassName('focus');
// // console.log(focusLink);
// function clickToggleNav(link, activeLink ){
//     for(let i = 0; i < link.length; i++){
//         link[i].onclick = function(){
//             let currentLink = activeLink[0];
//             if(currentLink){
//                 currentLink.classList.remove('focus');
//             }
//             if(currentLink !== this){
//                 this.classList.add('focus');
//             }
//         };
//     }
// }
// clickToggleNav(navLink, focusLink);






//СОРТИРОВКА ТОВАРОВ

let sortArray = [];
for (let key in cart) {
    sortArray.push({
        key: key,
        price: cart[key].price,
        name: cart[key].name,
        img: cart[key].img,
    });
}

//СОРТИРОВКА ПО ВОЗРАСТАНИЮ  

function sortPriseUp(elements) {

    elements.sort(function (a, b) {
        return a.price - b.price;
    });

    var result = elements.reduce((acc, item) => {
        acc[item.key] = item;
        // console.log(acc[item.key]); каждый элемент объекта с ключами 
        return acc;

    }, {});
    createItemGoods(document.querySelector('.box_output_goods_ul'), result);

}
if (document.querySelector('#btn_up')) {
    document.querySelector('#btn_up').onclick = function () {
        sortPriseUp(sortArray);
    }
}


// СОРТИРОВКА ПО УБЫВАНИЮ

function sortPriseDown(elements) {

    elements.sort(function (a, b) {
        return b.price - a.price;
    });

    var result = elements.reduce((acc, item) => {
        acc[item.key] = item;
        // console.log(acc[item.key]); каждый элемент объекта с ключами  
        return acc;

    }, {});
    createItemGoods(document.querySelector('.box_output_goods_ul'), result);

}
if (document.querySelector('#btn_down')) {
    document.querySelector('#btn_down').onclick = function () {
        sortPriseDown(sortArray);
    }
}





// let chboxxMin = document.getElementById('tel_sort_up');
// function checkCheckboxMin(inp) {
//     if (inp.checked) {
//         sortPriseUp(products);
//     }
// }



// function sortDown(products) {
//     products.sort(function (a, b) {
//         return b.price - a.price;
//     });
//     OutputOnThePage(goodsElement, products);
// }

// if (document.querySelector('#btn_down')) {
//     document.querySelector('#btn_down').onclick = function () {
//         sortDown(products);
//     }
// }
// let chboxxMax = document.getElementById('tel_sort_down');
// function checkCheckboxMax(inp) {
//     if (inp.checked) {
//         sortDown(products);
//     }
// }


//СОРТИРОВКА ПО ПРОИЗВОДИТЕЛЯМ
// кнопки производителей
// let elemManuf = document.querySelectorAll('.manufacturer'); //все кнопки с производителями
// function checkElements(buttons) {
//     let ar = [];
//     buttons.forEach(el => {//циклом проходим по всем элементам (кнопкам)
//         if (el.checked) {// если кнопка нажата,
//             ar.push(el.value); //добавляем значение этого элемента в массив
//         };
//     });
//     return ar;
// }


// поиск производителей в товаре
// function findProduct(manuf) {
//     let arrProduct = [];
//     products.forEach(el => {
//         if (manuf == el.manufacturer) {
//             arrProduct.push(el)
//         }
//     });
//     return arrProduct;
// }

// вывод товаров 
// function pushElements() {
//     goodsElement.innerHTML = '';
//     let arrCheckManuf = checkElements(elemManuf);
//     let arrOutput = [];
//     arrCheckManuf.forEach(el => {
//         arrOutput.push(findProduct(el));
//     });
//     arrOutput.forEach(el => {
//         OutputOnThePage(goodsElement, el);
//     });
//     if (arrOutput.length == 0) { OutputOnThePage(goodsElement, products); }
// }





//СОЕДИНЕНИЕ 
// let conection = document.querySelectorAll('.conection');

// function findProductConect(conect) {
//     let arrConect = [];
//     products.forEach(el => {
//         if (conect == el.connection) {
//             arrConect.push(el)
//         }
//     });
//     return arrConect;
// }


// function pushElementsConect() {
//     goodsElement.innerHTML = '';
//     let arrCheckConect = checkElements(conection);
//     let arrOutputConect = [];
//     arrCheckConect.forEach(el => {
//         arrOutputConect.push(findProductConect(el));
//     });
//     arrOutputConect.forEach(el => {
//         OutputOnThePage(goodsElement, el);
//     });
//     if (arrOutputConect.length == 0) { OutputOnThePage(goodsElement, products); }
// }



//SCROLL

let itemsButtons = document.querySelectorAll('.page_numbers button');
itemsButtons.forEach(el => {
    el.classList.add('scroll');
});



let elemBtn = document.querySelectorAll('.scroll');
elemBtn.forEach(el => {
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
function scrollToToСomputer() {
    if (scrolled > 350) {
        window.scrollTo(0, scrolled);
        scrolled = scrolled - 20;
        timer = setTimeout(scrollToToСomputer, 20);
    } else {
        clearTimeout(timer);
        window.scrollTo(0, 350);
    }
}

function scrollToTopMobile() {
    if (document.body.clientWidth < 768) {
        if (scrolled > 850) {
            window.scrollTo(0, scrolled);
            scrolled = scrolled - 20;
            timer = setTimeout(scrollToTopMobile, 20);
        } else {
            clearTimeout(timer);
            window.scrollTo(0, 850);
        }
    }
}



function myFunction(el) {
    el.classList.toggle('items_showing');
}


// document.querySelector('.button_first').onclick = function(){
//     myFunction(item_show);
// }
// document.querySelector('.button_second').onclick = function(){
//     myFunction(item_show_two);
// }







// let buttonBuy = document.querySelectorAll('.add_to_cart');//кнопка купить
// let cart = []; //корзина
// let cartObj; //для JSON
// let cookieBox; //для cookie
// let dropdownCart = document.querySelector('.dropdown_cart'); //всплывающая корзина
// let arrayCart = [];



// function addToCart() {
//     buttonBuy.forEach(el => {
//         el.addEventListener('click', event => {
//             let articul = el.dataset.id;
//             // if(cart[articul] != undefined){
//             //     cart[articul]++;
//             // }else{
//             //     cart[articul] = 1;
//             // }
//             cart.push(el.dataset.id, el.dataset.img, el.dataset.name, el.dataset.price);


//             let elementCart = `
//         <div class="cart_block">
//          <button class="delete"></button>
//          <p class="cart_name"> ${el.dataset.id}</p>
//          <img class="cart_img"src="${el.dataset.img}" аlt="Перфоратор">
//          <p class="cart_name"> ${el.dataset.name} </p>
//          <div class="cart_quantity">
//              <button class="minus">-</button>
//                  cart[articul]
//              <button class="plus">+</button>
//          </div>
//          <p class="cart_price">${el.dataset.price} р. </p>
//          <hr class="hr_cart">
//          </div>
//         `
//             dropdownCart.innerHTML += elementCart;
//             // arrayCart.push(el.dataset.id, el.dataset.name, el.dataset.price);

//             setCookie("cart", cart, 30);
//             // console.log(cart);

//         });

//     });
// }
// addToCart();

// function setCookie(cname, cvalue, exdays) {
//     var d = new Date();
//     d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
//     var expires = "expires=" + d.toUTCString();
//     document.cookie = cname + "=" + JSON.stringify(cvalue) + ";" + expires + ";path=/";
// }

// function getCookie(name) {
//     var searchName = name + '=';
//     var cookies = document.cookie.split(';');
//     for (var i = 0; i < cookies.length; i++) {
//         var c = cookies[i];
//         while (c.charAt(0) == ' ')
//             c = c.substring(1, c.length);
//         if (c.indexOf(searchName) == 0)
//             return c.substring(searchName.length, c.length);
//     }
//     return null;
// }
// // getCookie("cart");

// let cartCookie = getCookie("cart");
// if (document.cookie == '') {
//     let cartBoxEmpty = document.createElement('p');
//     cartBoxEmpty.className = 'text_cart_empty';
//     cartBoxEmpty.textContent = 'Корзина пуста';
//     dropdownCart.appendChild(cartBoxEmpty);


//     let cartBox = document.createElement('p');
//     cartBox.className = 'text_cart';
//     cartBox.textContent = 'Самое время что-то купить'
//     dropdownCart.appendChild(cartBox);

//     let emptyCart = document.createElement("IMG");
//     emptyCart.setAttribute("src", "img/jpg/empty_cart_man1.jpg");
//     dropdownCart.appendChild(emptyCart);


// }
// else {

//     let parseCart = JSON.parse(getCookie("cart"));
//     parseCart.forEach(el => {
//         let allCart = `
//     <div class="cart_block">
//     <button class="delete"></button>
//     <p class="cart_name"> ${parseCart[0]}</p>
//     <img class="cart_img"src="${parseCart[1]}" аlt="Перфоратор">
//     <p class="cart_name"> ${parseCart[2]} </p>
//         <div class="cart_quantity">
//             <button class="minus">-</button>
//                  cart[articul]
//             <button class="plus">+</button>
//         </div>
//     <p class="cart_price">${parseCart[3]} р. </p>
//     <hr class="hr_cart">
//     </div>
//     `
//         dropdownCart.innerHTML = allCart;
//     })

//     console.log('good job!');

// }





//ПОПАП ТОВАР ДОБАВЛЕН В КОРЗИНУ 
//  buttonBuy.forEach(el =>{
//         el.addEventListener('click', function(){
//            document.querySelector('.pop_up_notification').style.display="block";

// });
// })

// let btnContinueShopping = document.querySelector('.pop_up_button_continue_shopping');
// btnContinueShopping.onclick = function(){
//     document.querySelector('.pop_up_notification').style.display="none";
// }


















let inputsRy = {
    sliderWidth: 229,
    minRange: 4000,
    maxRange: 50000,
    outputWidth: 40, // output width
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

thumbs[0].addEventListener("mousedown", function (evt) {
    isDragging0 = true;
}, false);
thumbs[1].addEventListener("mousedown", function (evt) {
    isDragging1 = true;
}, false);
container.addEventListener("mouseup", function (evt) {
    isDragging0 = false;
    isDragging1 = false;
}, false);
container.addEventListener("mouseout", function (evt) {
    isDragging0 = false;
    isDragging1 = false;
}, false);

container.addEventListener("mousemove", function (evt) {
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







