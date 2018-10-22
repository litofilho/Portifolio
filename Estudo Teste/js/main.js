$(document).ready(function() {	
	alert("I+");
	var htmllogo = $('.logo-container').html();
	var htmllogoGD = $('.logo-container').html();
	
	if($('.logo-toogle').css('display') == 'block') {
		//$('.logo-container').remove();
		$('.logo-toogle').append($(htmllogo));
	}
	
    if($('.affix .logo-marca').css('display') == 'block') {
		//$('.logo-container').remove();
		$('.affix .logo-marca').append($(htmllogo));
	}
});

$(window).on('load', function(){





});
