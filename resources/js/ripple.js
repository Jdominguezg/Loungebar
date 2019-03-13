$(document).ready(function() {
	
	$('button').on('click', function(e){
		$('.ripple').remove();
		var button = $(this);
		var positionleft = 'left:'+((e.pageX - button.offset().left)-50)+'px;';
		var positiontop =  'top:'+((e.pageY - button.offset().top)-50)+'px;';
		button.prepend('<div class="ripple" style="'+positiontop+positionleft+'"></div>');		
	});

});