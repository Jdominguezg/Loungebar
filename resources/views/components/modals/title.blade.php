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