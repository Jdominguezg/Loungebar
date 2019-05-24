@extends('principal')
@section('content')

<section class="addrecipe content">


	<div class="recipe_form">
		
		<div class="recipe_header recipe_principal_img" style="background-image: url({{ asset('imgs/ensalada.jpg') }}">
			<div class="overflow">
				<div class="change_img">
					<input type="file" style="opacity: 0" name="recipe_principal_img" accept="image/*" id="recipe_principal_img">
					<label for="recipe_principal_img">
						<i class="material-icons">image</i>
						<span>Añadir o Modificar imágen de la receta</span>
					</label>
					
				</div>				
			</div>

			<div class="recipe_title pointer trigger_modal" data-modal="title_modal" data-placeholder="Click para añadir el título de la receta."></div>
			<div class="recipe_duration trigger_modal" data-modal="title_modal">
				<i class="material-icons">access_time</i>
				<span style="margin:0 5px" class="recipe_duration_time" data-placeholder="Click para añadir la duración de la receta."></span>
			</div>
			<div class="user_info">
				<div class="user_avatar" style="background-image: url({{ asset('imgs/user5.png') }})"></div>
				<div class="user_name"><a href="#">@Test_user</a></div>
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

			@include('./components/modals/title')

			<div class="recipe_introduction pointer trigger_modal" data-modal="introduction_modal" data-placeholder="Click para añadir una introducción a la receta."></div>
			
			@include('./components/modals/introduction')
			
			<div class="recipe_ingredients">
				<h3>Ingredientes</h3>
				<ul list-append class="trigger_modal" data-modal="ingredients_modal">
					<li class="recipe_ingredient_1" data-placeholder="Click para añadir los ingredientes"></li>
				</ul>
			</div>

			@include('./components/modals/ingredients')
			<div id="_recipe_step_1" data-number="1">
				
				<div class="recipe_description trigger_modal" data-modal="description_modal_1">
					<h2>Paso 1 - <span class="recipe_step_title_1" data-placeholder=''></span></h2>
					<div class="recipe_step_description_1" data-placeholder="Click para añadir descripción del paso 1"></div>
				</div>

				@include('./components/modals/description')
			</div>

			<button class="raised_button add_step" style="margin: 8px 0;"><span>Añadir Paso</span></button>

		</div>
	</div>

</section>

<div class="produce_recipe center">
	<div class="col-6 cancel_recipe">Cancelar</div>
	<div class="col-6 save_recipe">Guardar</div>
</div>

@endsection