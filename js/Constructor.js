
class Cart {

    /**
 *  properties
 *  @param [array] items - массив с товарами в корзине
 *  @param [string] cartClass - css класс таблицы
 *  @param [string] cartDropdownClass -  css класс выпадающей корзины
 *  @param [string] cartElement - css класс li элемента в выпадающей корзине 
 *  @param [string] quantity - css класс бокса с кол-вом товара
 *  @param [string] plusClass - css класс добавление товара 
 *  @param [string] minusClass - css класс уменьшение товара 
 *  @param [string] deleteClass - css класс удаление товара 
 *  @param [string] checkout - css класс кнопки оформления заказа
 *  @param [string] boxButton  - css класс блока с кнопкой оформления заказа
 *  @param [string] continueShoping -  css класс кнопки 'Продолжить покупки'
 *  @param [string] currency - текущая валюта 
 */
    constructor(
        items,
        cartClass = "cart",
        cartDropdownClass = 'dropdownClass',
        cartElement = 'cartElement',
        plusClass = 'plus',
        minusClass = 'minus',
        deleteClass = 'delete',
        quantity = 'quantity',
        boxButton = 'boxButton',
        checkout = 'checkout',
        continueShoping = 'continueShoping',
        currency = '',
    ) {
        this.items = items;
        this.plusClass = plusClass;
        this.minusClass = minusClass;
        this.deleteClass = deleteClass;
        this.cartClass = cartClass;
        this.cartDropdownClass = cartDropdownClass;
        this.cartElement = cartElement;
        this.quantity = quantity;
        this.checkout = checkout;
        this.continueShoping = continueShoping;
        this.boxButton = boxButton;
        this.currency = 'Р';
    }
    goodsPlus(art) {
        this.items[art]['count']++;
    }
    goodsMinus(art) {
        if (this.items[art]['count'] - 1 == 0) {
            this.goodsDelete(art);
        }
        else {
            this.items[art]['count']--;
        }
    }
    goodsDelete(art) {
        delete this.items[art];
    }
    getTotal() {
        let total = 0;
        for (let key in this.items) {
            total += this.items[key]['count'] * this.items[key]['price'];
        }
        return total;
    }
    render() {

        let table = document.createElement('table'); // create table
        table.classList.add(this.cartClass); // add class from constructor

        for (let key in this.items) {
            let goods = this.items[key];
            // делаем строку
            const tr = document.createElement('tr');
            // делаем кнопку удалить
            let td = document.createElement('td');
            let button = document.createElement('button');
            button.classList.add(this.deleteClass);
            button.classList.add('button-primary');
            // button.innerHTML = "x";
            button.setAttribute('data-articul', key);
            td.append(button);
            tr.append(td);
            // делаем картинку
            td = document.createElement('td');
            let img = document.createElement('img');
            img.src = goods.img;
            td.append(img);
            tr.append(td);
            // делаем название
            td = document.createElement('td');
            let h4 = document.createElement('h4');
            h4.innerHTML = goods.name;
            td.append(h4);
            tr.append(td);
            // делаем минус
            td = document.createElement('td');
            button = document.createElement('button');
            button.classList.add(this.minusClass);
            button.classList.add('button-primary');
            button.innerHTML = "-";
            button.setAttribute('data-articul', key);
            td.append(button);
            tr.append(td);
            // делаем количество
            td = document.createElement('td');
            let span = document.createElement('span');
            span.innerHTML = goods.count;
            td.append(span);
            tr.append(td);
            // делаем плюс
            td = document.createElement('td');
            button = document.createElement('button');
            button.classList.add(this.plusClass);
            button.classList.add('button-primary');
            button.innerHTML = "+";
            button.setAttribute('data-articul', key);
            td.append(button);
            tr.append(td);
            // делаем total
            td = document.createElement('td');
            span = document.createElement('span');
            span.innerHTML = goods.count * goods.price + ' ' + this.currency;
            td.append(span);
            tr.append(td);
            table.append(tr);
        }
        //  total
        let tr = document.createElement('tr');
        let td = document.createElement('td');
        td.setAttribute('colspan', 7); // merge 7 td
        td.style.textAlign = 'right';
        td.innerHTML = '<span class="total">Всего: </span> ' + this.getTotal() + ' ' + this.currency;
        tr.append(td);
        table.append(tr);

        return table;
    }
    renderCheckout() {
        let checkout = document.createElement('a');
        checkout.classList.add(this.checkout);
        checkout.textContent = 'Оформить заказ';

        let continueShoping = document.createElement('a');
        continueShoping.classList.add(this.continueShoping);
        continueShoping.textContent = 'Продолжить покупки';



        let boxButton = document.createElement('div');
        boxButton.classList.add(this.boxButton);
        boxButton.append(continueShoping);
        boxButton.append(checkout);


        return boxButton;
    }

    renderDropdownCart() {
        const itemCartElement = document.createElement('ul'); // создаю ul для выпадающего списка
        itemCartElement.classList.add(this.cartDropdownClass);

        for (let key in this.items) {
            let goodsdropdown = this.items[key];
            const cartElement = document.createElement('li');
            cartElement.classList.add(this.cartElement);


            let button = document.createElement('button');
            button.classList.add(this.deleteClass);
            button.classList.add('button-primary');
            // button.innerHTML = "x";
            button.setAttribute('data-articul', key);
            cartElement.append(button);

            // делаем картинку
            let img = document.createElement('img');
            img.src = goodsdropdown.img;
            cartElement.append(img);
            // делаем название
            let h4 = document.createElement('h4');
            h4.innerHTML = goodsdropdown.name;
            cartElement.append(h4);




            let quantity = document.createElement('div');
            quantity.classList.add(this.quantity);

            // делаем минус
            button = document.createElement('button');
            button.classList.add(this.minusClass);
            button.classList.add('button-primary');
            button.innerHTML = "-";
            button.setAttribute('data-articul', key);
            quantity.append(button);
            // делаем количество
            let span = document.createElement('span');
            span.innerHTML = goodsdropdown.count;
            quantity.append(span);
            // делаем плюс
            button = document.createElement('button');
            button.classList.add(this.plusClass);
            button.classList.add('button-primary');
            button.innerHTML = "+";
            button.setAttribute('data-articul', key);
            quantity.append(button);
            cartElement.append(quantity);
            itemCartElement.append(cartElement);
        }
        return itemCartElement;
    }
}
