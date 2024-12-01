"user strict";

/* Tab Section Js area 
	0.1 Custom Header Bar
	0.2 Owl Carousel Slider
	0.3 Tab Section Js area
	0.4 Wow Js
	0.5 CountDown Js
	0.6 Custom Modal
	0.7 Search Js
	0.8 Scroll Top Js
	0.9 Custom Password Js
	10. Incrment and Decrement Js
	11. Quantity Js
	12. Cart Js
	13. Calculation Js
	14. Preloader

*/

$(document).ready(function () {
	/* Owl Carousel Slider*/
	$(".testimonial-wrapper").owlCarousel({
		loop: true,
		margin: 25,
		smartSpeed: 900,
		autoplayTimeout: 2000,
		autoplay: true,
		nav: true,
		center: true,
		responsiveClass: true,
		navText: [
			'<i class="fas fa-angles-left"></i>',
			'<i class="fas fa-angles-right"></i>',
		],
		responsive: {
			0: {
				items: 1,
			},
			500: {
				items: 1,
			},
			767: {
				items: 2,
			},
			991: {
				items: 2,
			},
			1199: {
				items: 3,
			},
			1399: {
				items: 3,
			},
		},
	});
	/* Owl Carousel Slider*/

	/* Tab Section Js area */
	$(".header-bar").on("click", function (e) {
		$(".main-menu, .header-bar").toggleClass("active");
	});
	$(".main-menu li a").on("click", function (e) {
		var element = $(this).parent("li");
		if (element.hasClass("open")) {
			element.removeClass("open");
			element.find("li").removeClass("open");
			element.find("ul").slideUp(300, "swing");
		} else {
			element.addClass("open");
			element.children("ul").slideDown(300, "swing");
			element.siblings("li").children("ul").slideUp(300, "swing");
			element.siblings("li").removeClass("open");
			element.siblings("li").find("li").removeClass("open");
			element.siblings("li").find("ul").slideUp(300, "swing");
		}
	});
	//menu top fixed start
	var fixed_top = $(".header-section");
	$(window).on("scroll", function () {
		if ($(this).scrollTop() > 220) {
			fixed_top.addClass("menu-fixed animated fadeInDown");
			fixed_top.removeClass("slideInUp");
			$("body").addClass("body-padding");
		} else {
			fixed_top.removeClass("menu-fixed fadeInDown");
			fixed_top.addClass("slideInUp");
			$("body").removeClass("body-padding");
		}
	});
	// Click event to scroll bar start
	$(window).on("scroll", function () {
		if ($(this).scrollTop() > 300) {
			$(".scrollToTop").fadeIn();
		} else {
			$(".scrollToTop").fadeOut();
		}
	});
	//Click event to scroll to top
	$(".scrollToTop").on("click", function () {
		$("html, body").animate(
			{
				scrollTop: 0,
			},
			700
		);
		return false;
	});
	//Click event to scroll to top end

	/*-- Odometer Counting Start--*/
	$(".odometer-item").each(function () {
		$(this).isInViewport(function (status) {
			if (status === "entered") {
				for (
					var i = 0;
					i < document.querySelectorAll(".odometer").length;
					i++
				) {
					var el = document.querySelectorAll(".odometer")[i];
					el.innerHTML = el.getAttribute("data-odometer-final");
				}
			}
		});
	});
	/*-- Odometer Counting End--*/

	/*-- Woe Animation Start--*/
	new WOW().init();
	/*-- Wow Animation End--*/

	/*-- Scroll Top Bottom End--*/
	let calcScrollValue = () => {
		let scrollProgress = document.getElementById("progress");
		let progressValue = document.getElementById("valu");
		let pos = document.documentElement.scrollTop;
		let calcHeight =
		document.documentElement.scrollHeight - 
		document.documentElement.clientHeight;
		let scrollValue = Math.round((pos * 250) / calcHeight);
		
		if (pos > 250){
			scrollProgress.style.display = "grid";
		} else{
			scrollProgress.style.display = "none";
		}
		scrollProgress.addEventListener("click", () => {
			document.documentElement.scrollTop = 0;
		}); 
	};
	window.onscroll = calcScrollValue;
	window.onload = calcScrollValue;
	/*-- Scroll Top Bottom End--*/

	/*-- Preloader Start--*/
	setTimeout(function(){
		$('.bg-load').fadeToggle();
	}, 1500);
	/*-- Preloader End--*/
	//Search Click
	$(document).ready(function(){
		$('a[href="#search"]').on('click', function(event) {                    
			$('#search').addClass('open');
			$('#search > form > input[type="search"]').focus();
		});            
		$('#search, #search button.close').on('click keyup', function(event) {
			if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
				$(this).removeClass('open');
			}
		});            
	});

	//Timing Hours
	$(".countdown").each(function () {
		var date = $(this).data("date");
		$(this).countdown({
			date: date,
			offset: +6,
			day: "Day",
			days: "Days",
		});
	});	
	// Nice select
	$(document).ready(function() {
		$('select').niceSelect();
	});
	// password hide
	$(".toggle-password, .toggle-password2, .toggle-password3, .toggle-password4, .toggle-password5").click(function() {
		$(this).toggleClass("fa-eye fa-eye-slash");
		var input = $($(this).attr("id"));
		if (input.attr("type") == "password") {
		  input.attr("type", "text");
		} else {
		  input.attr("type", "password");
		}
	  });

	//Swipper Slider
	/*-------- Swipper Slider Start--------*/
	var swiper = new Swiper(".mySwiper", {
        spaceBetween: 10,
        slidesPerView: 5,
		centeredSlides: true,
        freeMode: true,
		nav: true,
        watchSlidesProgress: true,
		loop: true,
		breakpoints: {
			// when window width is >= 320px
			320: {
			  slidesPerView: 2
			},
			// when window width is >= 480px
			480: {
			  slidesPerView: 3
			},
			// when window width is >= 640px
			767: {
			  slidesPerView: 4
			}
		  }
	});
	var swiper2 = new Swiper(".mySwiper2", {
		spaceBetween: 10,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		thumbs: {
			swiper: swiper,
		},
	});
	/*-------- Swipper Slider End--------*/
	// password hide and show

	if(document.getElementById("password")){
		const password = document.getElementById('password');
		const show = document.getElementById('show');
		const hide = document.getElementById('hide');
			hide.onclick=function(){
			if(password.type == 'password'){
				password.setAttribute('type','text');
			this.classList.add('hide');
	
			}
			}
			show.onclick=function(){
			if(password.type=="text"){
				password.setAttribute('type','password');
				hide.classList.remove('hide');
			}
			}
	}
  // password hide and show
  
  // increase and decrease function
  
  if (document.getElementsByClassName("idown").length) {
  
	const idown = document.querySelector('.idown');
	const iup = document.querySelector('.iup');
	const abcw = document.querySelector('#innumber');
	
	  idown.onclick=function(){
		abcw.value++;
	  }
	  iup.onclick=function(){
		abcw.value--;
	  }
  
  }
  // increase and decrease function

	//Quantity number
	   // shop cart + - start here
	var CartPlusMinus = $('.cart-plus-minus');
	CartPlusMinus.prepend('<div class="dec qtybutton">-</div>');
	CartPlusMinus.append('<div class="inc qtybutton">+</div>');
	$(".qtybutton").on("click", function() {
		var $button = $(this);
		var oldValue = $button.parent().find("input").val();
		if ($button.text() === "+") {
			var newVal = parseFloat(oldValue) + 1;
		} else {
			// Don't allow decrementing below zero
			if (oldValue > 1) {
				var newVal = parseFloat(oldValue) - 1;
			} else {
				newVal = 1;
			}
		}
		$button.parent().find("input").val(newVal);
	});
	//Tabbing start
		const tabs = document.querySelectorAll(".tab");
		const tabContent = document.querySelectorAll(".tab-content");

		let tabNo = 0;
		let contentNo = 0;

		tabs.forEach((tab) => {
			tab.dataset.id = tabNo;
			tabNo++;
			tab.addEventListener("click", function () {
				tabs.forEach((tab) => {
				tab.classList.remove("active");
				tab.classList.add("non-active");
				});
				this.classList.remove("non-active");
				this.classList.add("active");
				tabContent.forEach((content) => {
				content.classList.add("hidden");
				if (content.dataset.id === tab.dataset.id) {
					content.classList.remove("hidden");
				}
				});
			});
		});

		tabContent.forEach((content) => {
		content.dataset.id = contentNo;
		contentNo++;
		});
		// dashboard active{
});
//register Popup
jQuery(document).ready(function($){
	$('.cd-popup-trigger').on('click', function(event){
		event.preventDefault();
		$('.cd-popup').addClass('is-visible');
	});
	$('.cd-popup').on('click', function(event){
		if( $(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup') ) {
			event.preventDefault();
			$(this).removeClass('is-visible');
		}
	});
	$(document).keyup(function(event){
    	if(event.which=='27'){
    		$('.cd-popup').removeClass('is-visible');
	    }
    });
});

jQuery(document).ready(function($){
	$('.mypopup').on('click', function(event){
		event.preventDefault();
		$('.opent-code').addClass('is-visible');
	});
	$('.opent-code').on('click', function(event){
		if( $(event.target).is('.cd-popup-close') || $(event.target).is('.opent-code') ) {
			event.preventDefault();
			$(this).removeClass('is-visible');
		}
	});
	$(document).keyup(function(event){
    	if(event.which=='27'){
    		$('.opent-code').removeClass('is-visible');
	    }
    });
	
});

jQuery(document).ready(function($){
	$('.repopup').on('click', function(event){
		event.preventDefault();
		$('.repeatpopup').addClass('is-visible');
	});
	$('.repeatpopup').on('click', function(event){
		if( $(event.target).is('.cd-popup-close') || $(event.target).is('.repeatpopup') ) {
			event.preventDefault();
			$(this).removeClass('is-visible');
		}
	});
	$(document).keyup(function(event){
    	if(event.which=='27'){
    		$('.repeatpopup').removeClass('is-visible');
	    }
    });
	
});

