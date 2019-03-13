$(document).ready(function() {

	function addingredient(element, id){
		var html = '<div id="ingredient_'+id+'"  class="textfield">'+
						'<input type="text" name="recipe_ingredient_'+id+'" id="recipe_ingredient_'+id+'">'+
						'<label for="recipe_ingredient_'+id+'">Nuevo ingrediente</label>'+
						'</div>';
		element.after(html);
	}

	$('.ingredients button').on('click', function(e){
		e.preventDefault();
		var button = $(this);
		var textfield = button.siblings('.textfield').last();
		var id = textfield.attr('id').substring(textfield.attr('id').length - 1);
		id++;		
		addingredient(textfield,id);

	});
});