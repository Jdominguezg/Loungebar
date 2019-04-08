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
		addStep($(this));
	});

	$(document).on('click', '.remove_step', function(e){
		removeStep($(this));
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

function createIngredient(element,n, label){
	var id = "recipe_ingredient_"+n;
	var textfield = form.createTextField(id, id, label, {'data-modify': '', 'maxlength':50});
	

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

function addStep(button){

	var id = $('[id*=_recipe_step_]').last().attr('id').substr(-1);
	var removeButton = getRemoveStepButton(id);

	if(!$('[id*=_recipe_step_]').last().children('.remove_step').length){
		$('[id*=_recipe_step_]').last().append(removeButton);
	}

	id++

	var step = $('<div id="_recipe_step_'+id+'"></div>');

	var trigger = $('<div class="recipe_description trigger_modal" data-modal="description_modal_'+id+'">'+
						'<h2>Paso '+id+' - <span class="recipe_step_title_'+id+'" data-placeholder=""></span></h2>'+
						'<div class="recipe_step_description_'+id+'" data-placeholder="Click para añadir descripción del paso '+id+'"></div>'+
					'</div>');
	var modal = $('<div class="modal form" id="description_modal_'+id+'">'+
					'<div class="col-12">'+
						'<div class="textfield">'+
							'<input type="text" data-modify name="recipe_step_title_'+id+'" maxlength="50" id="recipe_step_title_'+id+'">'+
							'<label for="recipe_step_title_1">Paso '+id+'</label>'+
						'</div>'+
						'<div class="textfield">'+
							'<textarea name="recipe_step_description_'+id+'" data-modify id="recipe_step_description_'+id+'" maxlength="1000" style="resize: none"></textarea>'+
							'<label for="recipe_step_description_'+id+'">Descripción</label>'+
						'</div>'+
						'<div class="righted">'+
							'<button class="dense_button close_modal cancel"><span>Cancelar</span></button>'+
							'<button class="raised_button close_modal accept"><span>Aceptar</span></button>'+
						'</div>'+
					'</div>'+
				'</div>');
	
	
	button.before(step);
	removeButton = getRemoveStepButton(id);
	step.append(trigger, modal, removeButton);
	modal.after('<overflow></overflow>');
	form.checkDataPlaceholder();

}

function removeStep(button){
	var id = button.attr('id').substr(-1);
	var nextSteps = $('#_recipe_step_'+id).siblings('[id*=_recipe_step_]');
	$('#_recipe_step_'+id).remove();
	$.each(nextSteps, function(index, val) {
		 var id = $(this).attr('id').substr(-1);
		 $(this).children('[data-modal=description_modal_'+id+']').children('h2').trim;
		 $(this).attr('id', '_recipe_step_'+id);
		 id--;

	});
}

function getRemoveStepButton(id){
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