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




let navLink = document.getElementsByClassName('header_navigation_item_link');
let focusLink =  document.getElementsByClassName('focus');
console.log(focusLink);
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
clickToggleNav();


//Слайдер
$(document).ready(function(){
	$('.item_category_slider').slick({
		arrows: false,
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 1000,
		easing: 'ease',
		infinite: true,
		initialSlide: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		draggable: true,
		swipe: true,
		touchThreshold:10,
		touchMove: true

	});
});

$(document).ready(function(){
	$('.slider_products').slick({
		arrows: true,
		dots: true, 
		slidesToShow: 3,
		slidesToScroll: 3,
		speed: 1000,
		easing: 'ease',
		infinite: true,
		 // centerMode: true,
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



    let serviceButtons = document.getElementsByClassName('service_slider_control');
    // console.log(serviceButtons);
    let activeService = document.getElementsByClassName('service_active');

    function toggleService(){
    	for(let i = 0; i < serviceButtons.length; i++){
    		serviceButtons[i].onclick = function() {
    			let currentActive = activeService[0];
    			if(currentActive){
    				currentActive.classList.remove('service_active');
    			}
    			if(currentActive !== this){
    				this.classList.add('service_active');
    			}
    		};
    	}

    }

    




    function openbox(id){
    	let allBlock = document.querySelectorAll('.service_slider_inner');
    	for(let i = 0; i < allBlock.length; i++){
    		if(allBlock[i].id == id){
    			allBlock[i].style.display = (allBlock[i].style.display == 'none')? 'flex' : 'none';
    		}else{
    			allBlock[i].style.display = 'none';
    		}
    	}
    }


first = document.getElementById('first');
second = document.getElementById('second');
third = document.getElementById('third');

if(first){
first.addEventListener('click', function(){
	toggleService();
	openbox('first_service');
});
}


if(second){
second.addEventListener('click', function(){
	toggleService();
	openbox('second_service');
});
}

if(third){
third.addEventListener('click', function(){
	toggleService();
	openbox('thrird_service');
});
}


let loginButton = document.getElementById('login_button');
console.log(loginButton);
let registerButton = document.getElementById('register_button');
console.log(registerButton);



loginButton.addEventListener('click', function(){
	document.getElementById('modal_register').style.display = 'none';
	document.getElementById('modal_login').style.display = 'block';
	loginButton.classList.add('focus_register');
	registerButton.classList.remove('focus_register');


});

registerButton.addEventListener('click', function(){
	document.getElementById('modal_login').style.display = 'none';
	document.getElementById('modal_register').style.display = 'block';
	registerButton.classList.add('focus_register');
	loginButton.classList.remove('focus_register');

});

let form = document.querySelector('.wrapper_modal_login_registration');
let openLogin = document.getElementById('button_login_open');
openLogin.addEventListener('click', function(){
	form.style.display="block";
	document.getElementById('modal_register').style.display = 'none';
	document.getElementById('modal_login').style.display = 'block';
	registerButton.classList.remove('focus_register');
	loginButton.classList.add('focus_register');
	

});


let openRegister = document.getElementById('button_register_open');
openRegister.addEventListener('click', function(){
	form.style.display="block";
	document.getElementById('modal_login').style.display = 'none';
	document.getElementById('modal_register').style.display = 'block';
	loginButton.classList.remove('focus_register');
	registerButton.classList.add('focus_register');
	
	

})
