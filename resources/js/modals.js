$(document).ready(function() {

	$('.trigger_modal').on('click', function(event) {
		var modal = $('#'+$(this).attr('data-modal'));
		var input = modal.find('input');
		modal.addClass('open');
		
		

	});

	$('.close_modal').on('click', function(event){
		$(this).parents('.modal').removeClass('open');
	});

	$('.modal').after('<overflow></overflow>');
});