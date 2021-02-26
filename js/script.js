$(document).ready(function(){

	$(".project").hide();
	$(".swProj").show();


	$(".toTop").click(function(){
		$("html, body").animate({
			scrollTop: "0px"
		});
		$("#myNav").hide();
		$("body").css("overflow","auto");
	});

	$(".toggleEspanol").click(function(){
		$(".english").hide();
		$(".espanol").show();
	});

	$(".toggleEnglish").click(function(){
		$(".espanol").hide();
		$(".english").show();
	});

	$(".about").click(function(){
		$("#myNav").toggle();
		$(".dropdown-menu").hide();

		if($('#myNav').is(':visible')){
			console.log("visible");
			$("body").css("overflow","hidden");
		} else {
			$("body").css("overflow","auto");
		};
	});

	$(".selected, .selected").click(function(){
		console.log('open');
		$(".dropdown-menu").slideToggle("fast");
	});

	$(".option").click(function(){
		console.log('close');
		$(".dropdown-menu").slideUp("fast");
	});

	$(".sw").click(function(){
		$(".selectedEN").text("Selected Work");
		$(".selectedES").text("Obra Seleccionada");

		$(".sw").hide();
		$(".exh").show();
		$(".id").show();
		$(".pm").show();
		$(".misc").show();
		$(".rd").show();

		$("html, body").animate({
			scrollTop: "0px"
		});

		$(".project").fadeOut();
		$(".swProj").fadeIn();
	});

	$(".exh").click(function(){
		$(".selectedEN").text("Exhibitions");
		$(".selectedES").text("Exposiciones");

		$(".sw").show();
		$(".exh").hide();
		$(".id").show();
		$(".pm").show();
		$(".misc").show();
		$(".rd").show();

		$("html, body").animate({
			scrollTop: "0px"
		});

		$(".project").fadeOut();
		$(".exhProj").fadeIn();
	});

	$(".id").click(function(){
		$(".selectedEN").text("Identity");
		$(".selectedES").text("Identidad");

		$(".sw").show();
		$(".exh").show();
		$(".id").hide();
		$(".pm").show();
		$(".misc").show();
		$(".rd").show();

		$("html, body").animate({
			scrollTop: "0px"
		});

		$(".project").fadeOut();
		$(".idProj").fadeIn();
	});

	$(".pm").click(function(){
		$(".selectedEN").text("Printed Matter");
		$(".selectedES").text("Impresos");

		$(".sw").show();
		$(".exh").show();
		$(".id").show();
		$(".pm").hide();
		$(".misc").show();
		$(".rd").show();

		$("html, body").animate({
			scrollTop: "0px"
		});

		$(".project").fadeOut();
		$(".pmProj").fadeIn();
	});

	$(".misc").click(function(){
		$(".selectedEN").text("Miscellaneous");
		$(".selectedES").text("Diverso");

		$(".sw").show();
		$(".exh").show();
		$(".id").show();
		$(".pm").show();
		$(".misc").hide();
		$(".rd").show();

		$("html, body").animate({
			scrollTop: "0px"
		});

		$(".project").fadeOut();
		$(".miscProj").fadeIn();
	});

	$(".rd").click(function(){
		$(".selectedEN").text("Rejected Designs");
		$(".selectedES").text("Diseños Rechazados");

		$(".sw").show();
		$(".exh").show();
		$(".id").show();
		$(".pm").show();
		$(".misc").show();
		$(".rd").hide();

		$("html, body").animate({
			scrollTop: "0px"
		});

		$(".project").fadeOut();
		$(".rdProj").fadeIn();
	});

	$(document).on("click", function(event){
        var $trigger = $(".dropdown");
        if($trigger !== event.target && !$trigger.has(event.target).length){
			$(".dropdown-menu").slideUp("fast");
        }            
    });



	$(window).scroll(function(){
	var scroll = $(window).scrollTop();
		console.log("SCROLL CLOSE");
		$(".dropdown-menu").slideUp("fast");

		if(scroll > 200) {
			$(".headerMini").css("top","0");
			$(".headerMini").slideDown("fast");
			$(".headerMini").css("display","flex");
	    }
	    else {
	    	$(".headerMini").css("top","-200");
			$(".headerMini").slideUp("fast");
    	};
    });

});