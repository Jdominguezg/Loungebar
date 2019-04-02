@extends('index')
@section('content')

<section class="addrecipe2">

	{{-- En esta versión mejorada veremos el formulario de la misma forma que lo verá el usuario final. --}}

	<div class="recipe_form">
		
		<div class="recipe_header recipe_principal_img" style="background-image: url({{ asset('imgs/ensalada.jpg') }}">
			<div class="overflow"></div>

			<div class="recipe_title pointer trigger_modal" data-modal="title_modal" data-placeholder="Click para añadir el título de la receta."></div>
			<div class="recipe_duration trigger_modal" data-modal="title_modal">
				<i class="material-icons">access_time</i>
				<span style="margin:0 5px" class="recipe_duration_time" data-placeholder="Click para añadir la duración de la receta."></span>
			</div>
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
					
					<div class="textfield">
						<input type="number" max="48"  min="0" data-modify="recipe_duration_time" name="recipe_duration_time_hours" id="recipe_duration_time_hours">
						<label for="recipe_duration_time_hours">Horas</label>
					</div>
					<div class="textfield">
						<input type="number" max="59"  min="0" data-modify="recipe_duration_time" name="recipe_duration_time_minutes" id="recipe_duration_time_minutes">
						<label for="recipe_duration_time_minutes">Minutos</label>
					</div>
					
					
					<div class="righted">
						<button class="dense_button close_modal cancel"><span>Cancelar</span></button>
						<button class="raised_button close_modal accept"><span>Aceptar</span></button>
					</div>
				</div>
			</div>

			<div class="recipe_description pointer trigger_modal" data-modal="description_modal" data-placeholder="Click para añadir descripción a la receta."></div>
			
			<div class="modal form" id="description_modal">
				<div class="col-12">
					<div class="textfield">
						<textarea id="recipe_description" data-modify name="recipe_description" maxlength="1000"></textarea>
						<label for="recipe_description">Descripción</label>
					</div>
					<div class="righted">
						<button class="dense_button close_modal cancel"><span>Cancelar</span></button>
						<button class="raised_button close_modal accept"><span>Aceptar</span></button>
					</div>
				</div>
			</div>
			
			<div class="recipe_ingredients">
				<h3>Ingredientes</h3>
				<ul list-append class="trigger_modal" data-modal="ingredients_modal">
					<li class="recipe_ingredient_1" data-placeholder="Click para añadir los ingredientes"></li>
				</ul>
			</div>

			<div class="modal form" id="ingredients_modal">
				<div class="col-12 modal_container">
					<div class="textfield">
						<input type="text" name="recipe_ingredient_1" data-modify id="recipe_ingredient_1" maxlength="50">
						<label for="recipe_ingredient_1">Cantidad e ingrediente</label>
					</div>
					<button class="outlined_button col-12 add_ingredient">
						<span>Añadir otro ingredietne</span>
					</button>
					<div class="righted">
						<button class="dense_button close_modal cancel"><span>Cancelar</span></button>
						<button class="raised_button close_modal accept"><span>Aceptar</span></button>
					</div>
				</div>
			</div>


		</div>
	</div>

</section>

@endsection