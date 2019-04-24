// España!!
$(document).ready(function() {

	isEmpty();

	$(document).on('change', '.textfield input, .textfield textarea', function(){
		isEmpty()
	});	
	
	$(document).on('keyup', '.textfield [maxlength]', function(e){
		updateCharLength($(this));
	});

	checkMaxLength();
	checkDataPlaceholder();
	
});

export function isEmpty(){
	var inputs = $('input');

	$.each(inputs, function(index, val) {
		if($(this).val().trim()!=''){
			$(this).siblings('label').addClass('notEmpty');
		}else{
			$(this).siblings('label').removeClass('notEmpty');
			$(this).val('');
		}
	});
	
}

export function checkMaxLength(){
	$('.textfield [maxlength]').each(function(index, el){		
		createCharLength($(this));
	});
}

export function checkDataPlaceholder(){
	$('[data-placeholder]').each(function(index, el) {
		if($(this).text() == ''){
			$(this).text($(this).attr('data-placeholder'));
		}
	});
}

export function createCharLength(element, currentlength, maxlength){
	var maxlength = element.attr('maxlength');
	var currentlength = maxlength - element.val().length;
	var html = $('<div class="text_characters text_right">'+currentlength+'/'+maxlength+'</div>');

	if(!element.parent().prev('.text_characters').length){
		element.parent().before(html);
	}
	
}

export function updateCharLength(element){
	var maxlength = element.attr('maxlength');
	var currentlength = maxlength - element.val().length;
	var text = currentlength+'/'+maxlength;
	element.parent().prev('.text_characters').text(text);
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

export function focusElement(e){	
	e.focus();
}