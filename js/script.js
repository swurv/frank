$(document).ready(function(){

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

	$(".selected").click(function(){
		console.log('open');
		$(".dropdown-menu").slideToggle("fast");
	});

	$(".option").click(function(){
		console.log('close');
		$(".dropdown-menu").slideUp("fast");
	});

	$(".sw").click(function(){
		$(".selected").text("Selected Work");
		$(".sw").hide();
		$(".exh").show();
		$(".id").show();
		$(".pm").show();
		$(".misc").show();
		$(".rd").show();

		$("html, body").animate({
			scrollTop: "0px"
		});
		
		$(".exhProj").fadeIn();
		$(".idProj").fadeIn();
		$(".pmProj").fadeIn();
		$(".miscProj").fadeIn();
		$(".rdProj").fadeIn();
	});

	$(".exh").click(function(){
		$(".selected").text("Exhibitions");
		$(".sw").show();
		$(".exh").hide();
		$(".id").show();
		$(".pm").show();
		$(".misc").show();
		$(".rd").show();

		$("html, body").animate({
			scrollTop: "0px"
		});

		$(".exhProj").fadeIn();
		$(".idProj").fadeOut();
		$(".pmProj").fadeOut();
		$(".miscProj").fadeOut();
		$(".rdProj").fadeOut();
	});

	$(".id").click(function(){
		$(".selected").text("Identity");
		$(".sw").show();
		$(".exh").show();
		$(".id").hide();
		$(".pm").show();
		$(".misc").show();
		$(".rd").show();

		$("html, body").animate({
			scrollTop: "0px"
		});

		$(".exhProj").fadeOut();
		$(".idProj").fadeIn();
		$(".pmProj").fadeOut();
		$(".miscProj").fadeOut();
		$(".rdProj").fadeOut();
	});

	$(".pm").click(function(){
		$(".selected").text("Printed Matter");
		$(".sw").show();
		$(".exh").show();
		$(".id").show();
		$(".pm").hide();
		$(".misc").show();
		$(".rd").show();

		$("html, body").animate({
			scrollTop: "0px"
		});

		$(".exhProj").fadeOut();
		$(".idProj").fadeOut();
		$(".pmProj").fadeIn();
		$(".miscProj").fadeOut();
		$(".rdProj").fadeOut();
	});

	$(".misc").click(function(){
		$(".selected").text("Miscellaneous");
		$(".sw").show();
		$(".exh").show();
		$(".id").show();
		$(".pm").show();
		$(".misc").hide();
		$(".rd").show();

		$("html, body").animate({
			scrollTop: "0px"
		});

		$(".exhProj").fadeOut();
		$(".idProj").fadeOut();
		$(".pmProj").fadeOut();
		$(".miscProj").fadeIn();
		$(".rdProj").fadeOut();
	});

	$(".rd").click(function(){
		$(".selected").text("Rejected Designs");
		$(".sw").show();
		$(".exh").show();
		$(".id").show();
		$(".pm").show();
		$(".misc").show();
		$(".rd").hide();

		$("html, body").animate({
			scrollTop: "0px"
		});

		$(".exhProj").fadeOut();
		$(".idProj").fadeOut();
		$(".pmProj").fadeOut();
		$(".miscProj").fadeOut();
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

	// $(window).scroll(function() {
	// 	if ($(document).scrollTop() > 200) {
	// 		// $('.nav').slideDown();
	// 		$(".nav").css("position","fixed");
	// 	}	else {
	//         // $('.nav').slideUp();
	//         $(".nav").css("position","absolute");
	//     }
	// });

});