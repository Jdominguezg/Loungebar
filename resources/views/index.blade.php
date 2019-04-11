@extends('principal')
@section('content')
<div class="index_background" style="background-image: url('{{ asset('imgs/IndexBackground/bg-'.(rand(1,25)).'.jpeg') }}')"></div>

<section class="login_modal">
	<h1 class="login_title light">Inicia Sesión</h1>

	<div class="textfield">
		<input type="text" name="username" id="username">
		<label for="username">Usuario</label>
	</div>
	<div class="textfield">
		<input type="password" name="password" id="password">
		<label for="password">Contraseña</label>
	</div>
	
</section>
@endsection