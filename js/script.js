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

//Слайдер

// let slides = document.querySelectorAll('.item_slide');
// let currentSlide = 0; //создали переменную для текущего слайда 
// let slideInterval = setInterval(nextSlide, 3000); // создали интервал для следующего слайда в 3 сек

// function nextSlide() {
// 	goToSlide(currentSlide + 1); //вперед
// }
// function previousSlide() {
// 	goToSlide(currentSlide - 1); //назад
// }
// function goToSlide(n) {
// 	slides[currentSlide].className = 'item_slide';// меняем класс для текущего слайда 
// 	currentSlide = (n + slides.length) % slides.length;
// 	slides[currentSlide].className = 'item_showing'; //меняем текущему слайду класс на active

// }
// let nextBtn = document.getElementById('next_btn');
// let previousBtn = document.getElementById('previous_btn');

// nextBtn.onclick = function () {
// 	nextSlide();
// };
// previousBtn.onclick = function () {
// 	previousSlide();
// };


let slideIndex = 0;
showSlides();


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("item_slide");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}










//Слайдер производителей

// let slidesManuf = document.querySelectorAll('#slides_manuf .slide');
// let currentSlideManuf = 0;
// let slideIntervalManuf = setInterval(nextSlideManuf, 2200);

// function nextSlideManuf() {
// 	if (document.body.clientWidth < 640) {
// 		slidesManuf[currentSlideManuf].className = 'slide';
// 		currentSlideManuf = (currentSlideManuf + 1) % slidesManuf.length;
// 		slidesManuf[currentSlideManuf].className = 'slide showing'
// 	}
// }

// let link = document.querySelectorAll('.header_navigation_item li');

// for (let i = 0; i < link.length; i++) {
// 	link[i].addEventListener("click", function () {
// 		let currentLink = document.getElementsByClassName('focus');
// 		currentLink[0].className = currentLink[0].className.replace(" focus", "");
// 		this.className += " focus";

// 	});
// }
// console.log(link);


function myFunction(el){
	el.classList.toggle('items_showing');
}
document.querySelector('.button_first').onclick = function(){
	myFunction(item_show);
}
document.querySelector('.button_second').onclick = function(){
	myFunction(item_show_two);
}



// window.onclick = function(e){
// 	if(!e.target.matches('.footer_line_item_show')){
// 		let myDropdown = document.getElementById('item_show');
// 		if(myDropdown.classList.contains('items_showing')){
// 			myDropdown.classList.remove('items_showing');
// 		}
// 	}
// }

// document.addEventListener('DOMContentLoaded', function () {
//   // инициализация слайдера
//   new SimpleAdaptiveSlider('.slider', {
//     loop: true,
//     autoplay: true,
//     interval: 3000,
//     swipe: true,
//   });
// });
$(document).ready(function(){
	$('.slider').slick({
		arrows: true,
		dots: true, 
		// adaptiveHeight: true,
		slidesToShow: 4,
		slidesToScroll: 2,
		speed: 1000,
		easing: 'ease',
		infinite: true,
		initialSlide: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		draggable: true,
		swipe: true,
		touchThreshold:10,
		touchMove: true,
		responsive:[
		{
			breakpoint: 825,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
		},{
			breakpoint: 640,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		]
	});
});

$(document).ready(function(){
	$('.slider_products').slick({
		arrows: true,
		dots: true, 
		slidesToShow: 3,
		slidesToScroll: 2,
		speed: 1000,
		easing: 'ease',
		infinite: true,
		initialSlide: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		responsive:[
		{
			breakpoint: 840,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},{
			breakpoint: 628,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		]
	});
});