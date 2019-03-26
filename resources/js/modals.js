import * as form from './forms.js';

$(document).ready(function() {

	$(document).on('click', '.trigger_modal', function(event) {
		event.preventDefault();
		var modal = $('#'+$(this).attr('data-modal'));
		var input = modal.find('input, textarea').first();
		modal.addClass('open');
		focusElement(input);
	});

	$(document).on('click', '.modal + overflow', function(event){
		event.preventDefault();
		$(this).siblings('.modal').removeClass('open');
	});

//Controla que al pulsar control + Enter se presiona el botón aceptar
var keys = { Enter: false, Control: false};
$(document).on('keydown keyup', '.modal.form input:last, .modal.form textarea:last', function(event) {		
	if(event.type === 'keydown'){
		if(event.key in keys){
			keys[event.key] = true;
			if(keys['Enter'] && keys['Control']){
				$(this).parents('.modal').find('.accept').click();	
			}
		}
	}
	if(event.type === 'keyup'){
		if(event.key in keys){
			keys[event.key] = false;
		}
	}
});

$(document).on('keyup', function(event){
	if($(this).find('.modal.open') && event.key === 'Escape'){
		if($('.modal.open .cancel').length > 0){
			$('.modal.open .cancel').click();
		}else{
			$('.modal.open').removeClass('open');				
		}
	}
});


$('.modal.form .accept').on('click', function(event){
	event.preventDefault();
	var elements = $(this).parent().siblings('.textfield').children('input, textarea');
	modifyContent(elements);
});

$('.modal.form .cancel').on('click', function(event){
	event.preventDefault();
	var elements = $(this).parent().siblings('.textfield').children('input, textarea');
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
		form.updateCharLength(input);
	});

});

$('.close_modal').on('click', function(event){
	$(this).parents('.modal').removeClass('open');
});

$('.modal').after('<overflow></overflow>');

});



function focusElement(e){
	setTimeout(function(){
		e.focus();
	}, 100);
}



function modifyContent(elements){

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
}