@extends('index')
@section('content')

<section class="addrecipe2">

	{{-- En esta versión mejorada veremos el formulario de la misma forma que lo verá el usuario final. --}}

	<div class="recipe_form">
		<div class="recipe_header recipe_principal_img" style="background-image: url({{ asset('imgs/ensalada.jpg') }}">
			<div class="overflow"></div>
			<div class="text_characters">Caractéres: <span class="actual_character">35</span>/35</div>
			<textarea name="recipe2_title" maxlength="35" name="title" class="recipe_title" placeholder="Click para añadir título de la receta"></textarea>
			<div class="user_info">
				<div class="user_avatar" style="background-image: url({{ asset('imgs/user.png') }})"></div>
				<div class="user_name"><a href="#">@Pepe_el_cojo</a></div>
				<div class="user_rate">
					<i class="material-icons">star</i>
					<i class="material-icons">star</i>
					<i class="material-icons">star</i>
					<i class="material-icons">star</i>
					<i class="material-icons">star</i>
				</div>
			</div>
		</div>


	</div>
	

</section>

@endsection