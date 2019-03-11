@extends('index')
@section('content')
	<h2 class="center">
		¡Vamos a añadir una nueva receta!
	</h2>
	<form id="new_recipe" method="post">
		<div class="textfield">
			<input type="text" name="recipe_name" id="recipe_name">
			<label for="recipe_name">Label</label>
		</div>
	</form>
@endsection