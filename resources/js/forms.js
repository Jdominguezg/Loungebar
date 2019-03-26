// España!!
$(document).ready(function() {

	$(document).on('change', '.textfield input, .textfield textarea', function(){
		var input = $(this);
		var label = input.siblings('label');

		if(input.val().trim()!= ''){
			label.addClass('notEmpty');			
		}else{
			label.removeClass('notEmpty');
			input.val('');
		}
	});	
	
	$(document).on('keyup', '.textfield [maxlength]', function(e){
		updateCharLength($(this));
	});

	checkMaxLength();
	checkDaraPlaceholder();
	
});

export function checkMaxLength(){
	$('.textfield [maxlength]').each(function(index, el){		
		createCharLength($(this));
	});
}

export function checkDaraPlaceholder(){
	$('[data-placeholder]').each(function(index, el) {
		$(this).text($(this).attr('data-placeholder'));
	});
}

export function createCharLength(element, currentlength, maxlength){
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

export function createTextField(id, name, label = '', atributes = 0, type = 'text'){
	var textfield = $('<div class="textfield">'+
						'<input type="'+type+'" name="'+name+'" id="'+id+'">'+
						'<label for="'+name+'">'+label+'</label>'+
					'</div>');
	if(atributes){
		$.each(atributes, function(index, val) {
			textfield.children('input').attr(index, val);
		});
	}
	return textfield;
}