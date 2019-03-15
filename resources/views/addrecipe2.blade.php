@extends('index')
@section('content')

<section class="addrecipe2">

	{{-- En esta versión mejorada veremos el formulario de la misma forma que lo verá el usuario final. --}}

	<div class="recipe_form">
		<div class="recipe_header recipe_principal_img" style="background-image: url({{ asset('imgs/ensalada.jpg') }}">
			<div class="overflow"></div>
			<div class="text_characters">Caractéres: <span class="actual_character">35</span>/35</div>
			<textarea name="recipe2_title" maxlength="35" name="title" class="recipe_title" placeholder="Lorem ipsum dolor sit amet, consectetur adipi"></textarea>
		
		</div>


	</div>
	

</section>

@endsection