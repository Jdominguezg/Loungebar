$(document).ready(function() {

	$(document).on('click', '.trigger_modal', function(event) {
		event.preventDefault();
		var modal = $('#'+$(this).attr('data-modal'));
		var input = modal.find('input').first();
		modal.addClass('open');
		focusElement(input);
	});

	$(document).on('click', '.modal + overflow', function(event){
		event.preventDefault();
		$(this).siblings('.modal').removeClass('open');
	});

	function focusElement(e){
		setTimeout(function(){
			e.focus();
		}, 100);
		
	}

	$('.modal.form .accept').on('click', function(event){
		event.preventDefault();
		elements = $(this).parent().siblings('.textfield').children('input');
		elements.each(function(index) {
			var input = $(this);
			var data = input.val();

			if(input.is('[data-modify]')){
				var id = input.attr('id');
				if(data.trim() != ''){
					$('.'+id).text(data);
					input.attr('data-prev-val', data);
				}else{
					$('.'+id).text($('.'+id).attr('data-placeholder'));
					input.val('').change();
					input.attr('data-prev-val', data);
				}
			}		
		});
	});

	$('.modal.form .cancel').on('click', function(event){
		event.preventDefault();
		elements = $(this).parent().siblings('.textfield').children('input');
		elements.each(function(index) {
			var input = $(this);
			var data =  input.val();
			if(typeof input.attr('data-prev-val') !== 'undefined'){
				var prevData = input.attr('data-prev-val');
			}else{
				var prevData = '';
			}
			
			if(input.is('[data-modify]')){
				var id = input.attr('id');
				if(prevData.trim() == ''){
					$('.'+id).text($('.'+id).attr('data-placeholder'));
					input.val('').change();
				} else {
					$('.'+id).text(prevData);
					input.val(prevData).change();					
				}
			}
		});

	});

	$('.close_modal').on('click', function(event){
		$(this).parents('.modal').removeClass('open');
	});

	$('.modal').after('<overflow></overflow>');

});
