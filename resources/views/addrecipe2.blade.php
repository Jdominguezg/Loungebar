@extends('index')
@section('content')

<section class="addrecipe2">

	<p>En esta versión mejorada veremos el formulario de la misma forma que lo verá el usuario final.</p>

	<div class="recipe_form">
		<div class="recipe_header recipe_principal_img" style="background-image: url({{ asset('imgs/ensalada.jpg') }}">
			<div class="overflow"></div>
			<button class="action_button"></button>
			<input type="text" name="title" class="recipe_title" placeholder="Título de la receta.">
		</div>


	</div>
	

</section>

@endsection