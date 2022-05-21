$(function() {

  /* Fixed header */
	let header = $("#header");
	let intro = $("#intro");
	let introH;
	let scrollPosition = $(window).scrollTop();

	$(window).on("scroll load resize", function(){
		let introH = intro.innerHeight();
		scrollPosition = $(this).scrollTop();

		if (scrollPosition > introH) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}

	});

	/* smooth scroll */

	$("[data-scroll]").on("click", function(event) {
			event.preventDefault(); /* Отменяем стандартное поведение ссылки */

			let blockID = $(this).data('scroll');
			let blockOffset = $(blockID).offset().top;

			console.log(blockOffset);

			$("html, body").animate({
				scrollTop: blockOffset - 70
			}, 700)
	});


});
