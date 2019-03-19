@extends('index')
@section('content')

<section class="addrecipe2">

	{{-- En esta versión mejorada veremos el formulario de la misma forma que lo verá el usuario final. --}}

	<div class="recipe_form">
		
		<div class="recipe_header recipe_principal_img" style="background-image: url({{ asset('imgs/ensalada.jpg') }}">
			<div class="overflow"></div>
<<<<<<< HEAD
			{{-- <div class="text_characters">Caractéres: <span class="actual_character">35</span>/35</div>
			<textarea name="recipe2_title" maxlength="35" name="title" class="recipe_title" placeholder="Click para añadir título de la receta"></textarea> --}}
=======
			<div class="recipe_title pointer trigger_modal" data-modal="title_modal" data-placeholder="Click para añadir el título de la receta."></div>
>>>>>>> refs/remotes/origin/crafting-app
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


		<div class="recipe_body">
<<<<<<< HEAD
			<div class="recipe_title pointer trigger_modal" data-modal="title_modal">Click para añadir el título de la receta</div>

			<div class="modal" id="title_modal">
				<div class="col-12">
					<div class="textfield">
						<input type="text" name="recipe_name" id="recipe_name">
						<label for="recipe_name">Título</label>
					</div>
					<div class="righted">
						<button class="dense close_modal"><span>Cancelar</span></button>
						<button class="raised_button close_modal"><span>Aceptar</span></button>
					</div>
				</div>
				
			</div>
		</div>
	</div>

=======
			<div class="recipe_title pointer trigger_modal" data-modal="title_modal" data-placeholder="Click para añadir el título de la receta."></div>

			<div class="modal form" id="title_modal">
				<div class="col-12">
					<div class="textfield">
						<input type="text" name="recipe_title" data-modify id="recipe_title" maxlength="100">
						<label for="recipe_title">Título</label>
					</div>
					<div class="righted">
						<button class="dense_button close_modal cancel"><span>Cancelar</span></button>
						<button class="raised_button close_modal accept"><span>Aceptar</span></button>
					</div>
				</div>
			</div>
			
		</div>
	</div>
>>>>>>> refs/remotes/origin/crafting-app

</section>

@endsection