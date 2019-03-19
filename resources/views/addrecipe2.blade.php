@extends('index')
@section('content')

<section class="addrecipe2">

	{{-- En esta versión mejorada veremos el formulario de la misma forma que lo verá el usuario final. --}}

	<div class="recipe_form">
		
		<div class="recipe_header recipe_principal_img" style="background-image: url({{ asset('imgs/ensalada.jpg') }}">
			<div class="overflow"></div>

			<div class="recipe_title pointer trigger_modal" data-modal="title_modal" data-placeholder="Click para añadir el título de la receta."></div>
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

			<div class="recipe_description pointer trigger_modal" data-modal="description_modal" data-placeholder="Click para añadir descripción a la receta."></div>
			
			<div class="modal form" id="description_modal">
				<div class="textfield">
					<textarea></textarea>
				</div>
			</div>
		</div>
	</div>

</section>

@endsection