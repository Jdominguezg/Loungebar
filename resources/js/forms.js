// España!!
$(document).ready(function() {

	$(document).on('change', '.textfield input', function(){
		var input = $(this);
		var label = input.siblings('label');

		if(input.val().trim()!= ''){
			label.addClass('notEmpty');			
		}else{
			label.removeClass('notEmpty');
			input.val('');
		}
	});	

	$('.textfield [maxlength]').each(function(index, el){		
		createCharLength($(this));
	});
	$(document).on('keyup', '.textfield [maxlength]', function(e){
		updateCharLength($(this));
	});

	$('[data-placeholder]').each(function(index, el) {
		$(this).text($(this).attr('data-placeholder'));
	});
	
});

function createCharLength(element, currentlength, maxlength){
	var maxlength = element.attr('maxlength');
	var currentlength = maxlength - element.val().length;
	var html = '<div class="text_characters text_right">'+currentlength+'/'+maxlength+'</div>';
	element.parent().before(html);
}

export function updateCharLength(element){
	var maxlength = element.attr('maxlength');
	var currentlength = maxlength - element.val().length;
	var html = '<div class="text_characters text_right">'+currentlength+'/'+maxlength+'</div>';
	element.parent().siblings('.text_characters').html(html);
}