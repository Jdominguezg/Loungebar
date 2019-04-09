import * as form from './forms.js';

$(document).ready(function() {

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


	$(document).on('click', '.recipe_background_button', function(e){
		$(this).children('input').trigger('focus');
	});

	$(document).on('change', '#recipe_principal_img', function(e){
		loadImg(this, $('.recipe_header.recipe_principal_img'));
	});

	$(document).on('click', '.add_step', function(e){
		var n = $(this).siblings('[id*=_recipe_step_]').length;
		createStep(n);
	});

	$(document).on('click', '.remove_step', function(e){
		removeStep($(this).parent());
		
	});

});

function loadImg(input, element){
	if(input.files && input.files[0]){
		var reader = new FileReader();

		reader.onload = function(e){
			element.css('background-image', 'url('+e.target.result+')');
		}

		reader.readAsDataURL(input.files[0]);
	}
}

function createIngredient(element,n , label){
	var id = "recipe_ingredient_"+n;
	var textfield = form.createTextField(id, id, label, {'data-modify': '', 'maxlength':50, 'data-number':n});
	

	element.before(textfield);
	form.focusElement($('#'+id));
	form.checkMaxLength();

	addDeleteButton();

	var html = $('<li class="'+id+'" data-placeholder="Click para añadir los ingredientes"></li>');
	$('[list-append]').append(html);
	form.checkDataPlaceholder();
}

function removeIngredient(ingredient){


	var n = ingredient.children('input').attr('data-number');
	var id = ingredient.children('input').attr('id');
	$('.'+id).remove();
	ingredient.prev('.text_characters.delete').remove();

	var nextsTextfields = ingredient.nextAll('.textfield');
	var nextInputs = nextsTextfields.children('input');
	
	$.each(nextInputs, function(index, val) {
		 var n = $(this).attr('data-number');
		 var id = $(this).attr('id');
		 n--;
		 $(this).attr({
		 		'name': 'recipe_ingredient_'+n,
		 		'id': 'recipe_ingredient_'+n,
		 		'data-number': n
		 });
		 $('.'+id).addClass('recipe_ingredient_'+n).removeClass(id);
		 $(this).siblings('label').attr('for', 'recipe_ingredient_'+n)
	});

	ingredient.remove();

	var ingredients = $('#ingredients_modal .textfield.delete');
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
	textCharacters.addClass('delete');
	textfields.append(deletebutton);
	
}

function createStep(n){
	 var id = '_recipe_step_'+n;

	if(!$('[id*=_recipe_step_]').last().children('.remove_step').length){
		$('[id*=_recipe_step_]').last().append(createRemoveStepButton(n));
	}

	n++;

	var step = $('<div id="_recipe_step_'+n+'" data-number="'+n+'"></div>');

	var trigger = $('<div class="recipe_description trigger_modal" data-modal="description_modal_'+n+'">'+
						'<h2>Paso '+n+' - <span class="recipe_step_title_'+n+'" data-placeholder=""></span></h2>'+
						'<div class="recipe_step_description_'+n+'" data-placeholder="Click para añadir descripción del paso '+n+'"></div>'+
					'</div>');
	var modal = $('<div class="modal form" id="description_modal_'+n+'">'+
					'<div class="col-12">'+
						'<div class="textfield">'+
							'<input type="text" data-modify name="recipe_step_title_'+n+'" maxlength="50" id="recipe_step_title_'+n+'">'+
							'<label for="recipe_step_title_'+n+'">Paso '+n+'</label>'+
						'</div>'+
						'<div class="textfield">'+
							'<textarea name="recipe_step_description_'+n+'" data-modify id="recipe_step_description_'+n+'" maxlength="1000" style="resize: none"></textarea>'+
							'<label for="recipe_step_description_'+n+'">Descripción</label>'+
						'</div>'+
						'<div class="righted">'+
							'<button class="dense_button close_modal cancel"><span>Cancelar</span></button>'+
							'<button class="raised_button close_modal accept"><span>Aceptar</span></button>'+
						'</div>'+
					'</div>'+
				'</div>');
	
	$('[id*=_recipe_step_]').last().after(step);
	step.append(trigger, modal, createRemoveStepButton(n));
	modal.after('<overflow></overflow>');
	form.checkDataPlaceholder();

}

function removeStep(element){

	var nextSteps = element.nextAll('[id*=_recipe_step_]');
	element.remove();
	
	$.each(nextSteps, function(index, val) {
		console.log(n);
		 var n = $(this).attr('data-number');

		 $('[data-modal=description_modal_'+n+'] h2')
		 	.html($('[data-modal=description_modal_'+n+'] h2').html().replace(n, n-1))
		 
		 $('.recipe_step_title_'+n)
		 	.addClass('recipe_step_title_'+(n-1))
		 	.removeClass('recipe_step_title_'+n);

		 $('[data-modal=description_modal_'+n+']').attr('data-modal','description_modal_'+(n-1));
		 
		 $('.recipe_step_description_'+n)
		 	.attr('data-placeholder', $('.recipe_step_description_'+n)
		 	.attr('data-placeholder').replace(n, n-1)).text('')
		 	.addClass('recipe_step_description_'+(n-1))
		 	.removeClass('recipe_step_description_'+n);
		 	form.checkDataPlaceholder();

		 $('[for=recipe_step_title_'+n+']')
		 	.text($('[for=recipe_step_title_'+n+']').text().replace(n, n-1))
		 	.attr('for', 'recipe_step_title_'+(n-1));

		 $('#recipe_step_title_'+n).attr({
		 	name: 'recipe_step_title_'+(n-1),
		 	id: 'recipe_step_title_'+(n-1)
		 });
		 
		 $('#recipe_step_description_'+n).siblings('label').attr('for', 'recipe_step_description_'+(n-1));
		 $('#recipe_step_description_'+n).attr({
		 	name: 'recipe_step_description_'+(n-1),
		 	id: 'recipe_step_description_'+(n-1)
		 });

		 $(this).attr({
		 			'id': '_recipe_step_'+(n-1),
		 			'data-number': n-1
		 		});		 

		 $('#description_modal_'+n).attr('id', 'description_modal_'+(n-1));

	});

	if($('[id*=_recipe_step_]').length == 1){
		$('.remove_step').remove();
	}
	
}

function createRemoveStepButton(id){
	return '<button id="remove_step_'+id+'" class="outlined_button remove_step" style="display: block; margin: 8px 0;">Eliminar Paso</button>';
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