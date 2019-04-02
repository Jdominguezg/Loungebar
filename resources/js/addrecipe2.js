import * as form from './forms.js';

//TODO REMOVE INGREDIETNS

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

	$(document).on('click', '#title_modal .accept, #title_modal .cancel', function(e){
		var hours = $('#recipe_duration_time_hours').val();
		var minutes = $('#recipe_duration_time_minutes').val();
		if(minutes < 0){
			minutes = 0;
			$('#recipe_duration_time_minutes').val(minutes);
			$('#recipe_duration_time_minutes').attr('data-prev-val',minutes);
		}
		if(minutes > 59){
			minutes = 59;
			$('#recipe_duration_time_minutes').val(minutes);
			$('#recipe_duration_time_minutes').attr('data-prev-val',minutes);
		}
		if(hours < 0){
			hours = 0;
			$('#recipe_duration_time_hours').val(hours);
			$('#recipe_duration_time_hours').attr('data-prev-val',hours);
		}
		if(hours > 48){
			hours = 48;
			$('#recipe_duration_time_hours').val(hours);
			$('#recipe_duration_time_hours').attr('data-prev-val',hours);
		}
		if(hours > 0 || minutes >0){
			recipeTime(hours, minutes);			
		}
	});
	
	$(document).on('click', '.add_ingredient', function(e){
		var n = ($(this).siblings('.textfield').length) + 1;
		var label = $(this).siblings('.textfield').last().children('label').text();
		createIngredient($(this), n, label);
	});

	$(document).on('click', '.remove_ingredient', function(e){
		
		removeIngredient($(this).parent());
	});

});

function createIngredient(element,n, label){
	var id = "recipe_ingredient_"+n;
	var textfield = form.createTextField(id, id, label, {'data-modify': true, 'maxlength':50});
	

	element.before(textfield);
	form.focusElement($('#'+id));
	form.checkMaxLength();

	addDeleteButton();

	var ul = $('[list-append]');	
	var html = $('<li class="'+id+'" data-placeholder="Click para añadir los ingredientes"></li>');
	ul.append(html);
	form.checkDataPlaceholder();
}

function removeIngredient(ingredient){
	
	var id = ingredient.children('input').attr('id');
	$('.'+id).remove();
	ingredient.prev('.text_characters.delete').remove();

	var nextsTextfields = ingredient.nextAll('.textfield');
	var nextsInputs = nextsTextfields.children('input');
	nextsInputs.each(function(index, el) {
		var id = $(this).attr('id');
		var shortid = id[id.length-1];
		shortid--;
		$(this).attr({
			name: 'recipe_ingredient_'+shortid,
			id: 'recipe_ingredient_'+shortid
		});
		$('.'+id).addClass('recipe_ingredient_'+shortid).removeClass(id);
		$(this).siblings('label').attr('for', 'recipe_ingredient_'+shortid);
		
	});	
	
	ingredient.remove();

	var ingredietns = $('#ingredeints_modal .textfield.delete');
	if(ingredients.length == 1){
		$('.remove_ingredient').remove();
		ingredients.removeClass('delete');
		ingredients.prev('.text_characters.delete').removeClass('delete');
	}
}

function addDeleteButton(){
	var deletebutton = $('<button class="dense_button remove_ingredient"><span><i class="material-icons">delete</i></span></button>');
	var textfields = $('#ingredients_modal .textfield').not('.delete');
	var textCharacters = $('#ingredients_modal .text_characters').not('.delete');

	textfields.addClass('delete');
	textfields.append(deletebutton);
	textCharacters.addClass('delete');
	
}

function recipeTime(hours = 0, minutes = 0){
	var time = '';
	if(hours > 0){
		if(hours > 1){
			time += hours+' horas ';			
		}else{
			time += hours+' hora ';
		}
	}
	if(minutes > 0){
		if(minutes > 1){
			time += minutes+' minutos ';
		}else{
			time+= minutes+' minuto ';
		}	
	}
	$('.recipe_duration_time').text(time);
}