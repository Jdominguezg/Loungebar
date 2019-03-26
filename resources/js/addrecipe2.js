import * as form from './forms.js';
$(document).ready(function() {

	var maxcharacter = 35;
	var length = $('.recipe_title').val().length;
	var placeholder = $('.recipe_title').attr('placeholder');
	
	$(document).on('keyup', '.recipe_title', function(e) {
		var length = $(this).val().length;
		if(length <= maxcharacter){
			$('.actual_character').html(maxcharacter - length);
		}
	});

	$(document).on('focus', '.recipe_title', function(e){
		$(this).attr('placeholder', '');
	});

	$(document).on('change', '.recipe_title', function(e){
		if($(this).val() == ''){
			$(this).attr('placeholder', placeholder);
		}
	});
	
	$(document).on('click', '.add_ingredient', function(e){
		var n = ($(this).siblings('.textfield').length) + 1;
		var label = $(this).siblings('.textfield').last().children('label').text();
		createIngredient($(this), n, label);
	});

});

function createIngredient(element,n, label){
	var id = "recipe_ingredient_"+n;
	var textfield = form.createTextField(id, id, label, {'data-modify': true, 'maxlength':50});

	element.before(textfield);
	form.focusElement($('#'+id));
	form.checkMaxLength();

	var ul = $('[list-append]');	
	var html = $('<li class="'+id+'" data-placeholder="Click para añadir los ingredientes"></li>');
	ul.append(html);
	form.checkDataPlaceholder();
}