$(document).ready(function() {

	function addingredient(element, id){
		var html = '<div id="ingredient_'+id+'"  class="textfield ingredient_name col-4">'+
						'<input type="text" name="recipe_ingredient_'+id+'" id="recipe_ingredient_'+id+'">'+
						'<label for="recipe_ingredient_'+id+'">Ingrediente '+id+'</label>'+
					'</div>'+
					'<div id="ingredient_'+id+'_cuantity" class="textfield ingredient-cuantity col-3">'+
						'<input type="number" name="recipe_ingredient_'+id+'_cuantity" id="recipe_ingredient_'+id+'_cuantity">'+
						'<label for="recipe_ingredient_'+id+'_cuantity">Cantidad</label>'+
					'</div>';
		element.after(html);
	}

	$('.ingredients button').on('click', function(e){
		e.preventDefault();
		var button = $(this);
		var textfield = button.siblings('.textfield.ingredient_name').last();
		var id = textfield.attr('id').substring(textfield.attr('id').length - 1);
		id++;		
		addingredient(textfield,id);

	});
});