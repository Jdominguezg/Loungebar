@extends('index')
@section('content')
<h2 class="center light">
	¡Vamos a añadir una nueva receta!
</h2>

<form id="new_recipe" class="center" method="post">
	<h3 class="light text_left">Primero debemos insertar un título para esta receta</h3>
	<div class="textfield">
		<input type="text" name="recipe_name" id="recipe_name">
		<label for="recipe_name">Título</label>
	</div>
	<br>
	<h3 class="light text_left">A continuación insertaremos los ingredientes y sus cantidades</h3>
	<div class="ingredients row">
		<div id="ingredient_1" class="textfield ingredient_name col-5">
			<input type="text" name="recipe_ingredient_1" id="recipe_ingredient_1">
			<label for="recipe_ingredient_1">Ingrediente 1</label>
		</div>
		<div id="ingredient_1_cuantity" class="textfield ingredient col-3">
			<input type="number" name="recipe_ingredient_1_cuantity" id="recipe_ingredient_1_cuantity">
			<label for="recipe_ingredient_1_cuantity">Cantidad</label>
		</div>
		<button class="raised_button">Añadir ingrediente</button>
	</div>

</form>	


@endsection