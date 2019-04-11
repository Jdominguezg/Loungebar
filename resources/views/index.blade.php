@extends('principal')
@section('content')
<div class="index_background" style="background-image: url('{{ asset('imgs/IndexBackground/bg-'.(rand(1,25)).'.jpeg') }}')"></div>

<h1 class="login_title light">Inicia Sesión</h1>
<div class="flip_card">
	<section class="login_modal front">
		<div class="col-12">
			<div class="textfield">
				<input type="text" name="username" id="username">
				<label for="username">Usuario</label>
			</div>
			<div class="textfield">
				<input type="password" name="password" id="password">
				<label for="password">Contraseña</label>
			</div>
			<button class="raised_button login_button"><span>Iniciar sesión</span></button>
			<div class="register_now">
				<div>¿No tienes cuenta todavía?</div>
				<a href="#">Regístrate</a>
			</div>
			<button class="social_button" style="background-color: #4267b2; color: #fff;"><i class="col-1 fab fa-facebook-f"></i><span class="col-11 text_left">Iniciar con Facebook</span></button>
			<button class="social_button" style="background-color: #1DA1F2; color:#fff;"><i class="col-1 fab fa-twitter"></i><span class="col-11 text_left">Iniciar con Twitter</span> </button>
			<button class="social_button" style="background-color: #DD4B39; color:#fff;"><i class="col-1 fab fa-google"></i><span class="col-11 text_left">Iniciar con Google</span>  </button>
		</div>
	</section>
	<section class="signin_modal back"></section>
</div>
@endsection