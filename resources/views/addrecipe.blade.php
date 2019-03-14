@extends('index')
@section('content')
<h2 class="center light">
	¡Vamos a añadir una nueva receta!
</h2>

{{-- Form --}}
<section class="form center">
	{{-- Titulo --}}
	<h3 class="light text_left">Primero debemos insertar un título para esta receta</h3>
	<div class="textfield col-12">
		<input type="text" name="recipe_name" id="recipe_name">
		<label for="recipe_name">Título</label>
	</div>	
	{{-- Ingredientes --}}
	<h3 class="light text_left">A continuación insertaremos los ingredientes y sus cantidades</h3>
	<div class="ingredients" data-global-count="1">
		<div id="ingredient_1" class="row ingredient">
			<div class="textfield col-12 col-md-4">
				<input id="name_1" type="text" name="ingredient_name">
				<label for="name_1">Ingrediente 1</label>
			</div>
			<div class="textfield col-6 col-md-4">
				<input id="quantity_1" type="number" min="1" name="quantity">
				<label for="quantity_1">Cantidad</label>
			</div>			
			<div class="textfield col-6 col-md-4">
				<select id="unit_1">
					<option>gr.</option>
					<option>Uds.</option>
					<option>Kg.</option>
				</select>
			</div>
			<div class="textfield d-none">
				<button id="remove_1" class="shaped_button remove_ingredient" data-id='1'>
					<span><i class="material-icons">delete</i></span>
				</button>
			</div>
		</div>
		<button id="addIngredient" class="raised_button">Añadir ingrediente</button>
	</div>
	{{-- Elaboración --}}
	
</section>
{{-- End Form --}}



@endsection