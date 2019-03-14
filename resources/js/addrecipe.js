$(document).ready(function() {
	var ingredients = $('.ingredients');
	var ingredientsCount = ingredients.attr('data-global-count');

// Devuelve el html de un nuevo ingrediente junto a su Id.
	function generateIngredientHtml(id){
		var html = 
		'<div id="ingredient_'+id+'" class="row ingredient">'+
			'<div class="textfield col-12">'+
				'<input id="name_'+id+'" type="text" name="ingredient_name">'+
				'<label for="name_'+id+'">Ingrediente '+id+'</label>'+
			'</div>'+
			'<div class="textfield col-5">'+
				'<input id="quantity_'+id+'" type="number" min="1" name="quantity">'+
				'<label for="quantity_'+id+'">Cantidad</label>'+
			'</div>'+		
			'<div class="textfield col-4">'+
				'<select id="unit_'+id+'">'+
					'<option>gr.</option>'+
					'<option>Uds.</option>'+
					'<option>Kg.</option>'+
				'</select>'+
			'</div>'+
			'<div class="textfield col-3">'+
				'<button id="remove_'+id+'" class="shaped_button remove_ingredient" data-id="'+id+'">'+
					'<span><i class="material-icons">delete</i></span>'+
				'</button>'+
			'</div>'+
		'</div>';
		return html;
	}


	// Resta -1 a los id de los ingredientes que continuan al ingrediente eliminado.
	function editIngredientsId(elements){
		elements.each(function(){
			var element = $(this);
			var id = element.attr('id').substr(element.attr('id').length - 1);
			var new_id = id-1;

			element.attr('id', 'ingredient_'+new_id);

			var name = $('#name_'+id);
			var namelabel = name.siblings('label');
			var namelabeltext = namelabel.html().substr(0, namelabel.html().length - 1);

			name.attr('id', 'name_'+new_id);
			namelabel.attr('for', 'name_'+new_id);
			namelabel.html(namelabeltext+new_id);

			var quantity = $('#quantity_'+id);
			var quantitylabel = quantity.siblings('label');

			quantity.attr('id', 'quantity_'+new_id);
			quantitylabel.attr('for', 'quantity_'+new_id);

			var unit = $('#unit_'+id);

			unit.attr('id', 'unit_'+new_id);

			var remove = $('#remove_'+id);

			remove.attr('id', 'remove_'+new_id);
			remove.attr('data-id', new_id);
		});		
	}

// Añade un nuevo ingrediente al formulario.
	function addingredient(element, count){
		ingredients.attr('data-global-count', count);
		element.after(generateIngredientHtml(count));
	}

// Elimina un ingradiente del formulario.
	function removeingredient(id, count){
		var element = $('#ingredient_'+id);
		var elements = element.nextAll('.ingredient');
		if(elements){
			editIngredientsId(elements);
		}		
		element.remove();			
	}

//function comrpueba si el numero de ingredientes es igual a 1.
	function ingredientsCountIsOne(){
		if(ingredientsCount == 1){
			return true;
		}
		else{
			return false;
		}
	}	

	$(document).on('click', '#addIngredient', function(e){
		var ingredient = $(this).siblings('.ingredient').last();		
		ingredientsCount++;

		if(!ingredientsCountIsOne()){
			$('#quantity_1').parent().removeClass('col-6');
			$('#unit_1').parent().removeClass('col-6');
			$('#remove_1').parent().removeClass('d-none');	
			$('#quantity_1').parent().addClass('col-5');
			$('#unit_1').parent().addClass('col-4');
			$('#remove_1').parent().addClass('col-3');
		}
		addingredient(ingredient, ingredientsCount);
	});

	$(document).on('click', '.remove_ingredient', function(e){
		var id = $(this).attr('data-id');

		if(ingredientsCount>1){
			removeingredient(id);
			ingredientsCount--;	
		}

		if(ingredientsCountIsOne()){
			$('#quantity_1').parent().addClass('col-6');
			$('#unit_1').parent().addClass('col-6');
			$('#remove_1').parent().addClass('d-none');	
			$('#quantity_1').parent().removeClass('col-5');
			$('#unit_1').parent().removeClass('col-4');
			$('#remove_1').parent().removeClass('col-3');			
		}

	});
});