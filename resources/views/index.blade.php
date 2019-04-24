@extends('principal')
@section('content')
<div class="index_background" style="background-image: url('{{ asset('imgs/IndexBackground/bg-'.(rand(1,25)).'.jpeg') }}')"></div>

<h1 class="login_title light">Inicia Sesión</h1>

<section class="login_modal">
	<div class="col-12">
		<form method="get" action="{{ url('/') }}">
			<div class="textfield">
				<input type="text" name="log_user" id="log_user" value="{{$log_user}}" autofocus>
				<label for="log_user">Usuario / Correo Electrónico</label>
			</div>
			<div class="textfield">
				<input type="password" name="log_password" value="{{$log_password}}" id="log_password">
				<label for="log_password">Contraseña</label>
			</div>
			<button class="raised_button login_button"><span>Iniciar sesión</span></button>
		</form>
		<div class="register_now">
			<div>¿No tienes cuenta todavía?</div>
			<span class="go_signin U pointer">Regístrate</span>
		</div>
		<button class="social_button" style="background-color: #4267b2; color: #fff;"><i class="col-1 fab fa-facebook-f"></i><span class="col-11 text_left">Iniciar con Facebook</span></button>
		<button class="social_button" style="background-color: #1DA1F2; color:#fff;"><i class="col-1 fab fa-twitter"></i><span class="col-11 text_left">Iniciar con Twitter</span> </button>
		<button class="social_button" style="background-color: #DD4B39; color:#fff;"><i class="col-1 fab fa-google"></i><span class="col-11 text_left">Iniciar con Google</span>  </button>

	</div>
</section>

<h1 class="signin_title light back_title">Registrarse</h1>

<section class="signin_modal back">
	<form method="post" action="{{ url('/') }}">
		{{ csrf_field() }}
		<i class="material-icons arrow_back pointer">arrow_back</i>
		<div class="col-12">
			<div class="textfield">
				<input type="text" name="signin_nickname" id="signin_nickname" maxlength="50" value="{{$sign_nickname}}">
				<label for="signin_nickname">Nickname</label>
				<div class="toast">Este será el nombre que se mostrará al resto de usuarios de la plataforma.</div>
			</div>
			<div class="textfield">
				<input type="text" name="signin_username" id="signin_username" maxlength="25" value="{{$sign_userid}}">
				<label for="signin_username">Usuario</label>
				<div class="toast">Este es el identificador que te servirá tanto para iniciar sesión como para que los usuarios te encuentren de manera más sencilla y te puedan etiquetar.</div>
			</div>
			<div class="textfield">
				<input type="password" name="signin_password" id="signin_password" values="{{$sign_password}}">
				<label for="signin_password">Contraseña</label>
				<div class="toast">
					Debe contener:
					<ul>
						<li>8 caracteres</li>
						<li>Letras Mayúsculas</li>
						<li>Letras Minúsculas</li>
						<li>Números</li>
						<li>Caracteres extraños (!@_-?#$...)</li>
					</ul>
				</div>
			</div>
			<div class="textfield">
				<input type="email" name="signin_email" id="signin_email" maxlength="100" values="{{$sign_email}}">
				<label for="signin_email">Correo Electrónico</label>
				<div class="toast">También podrás iniciar sesión utilizando el correo electrónico, una vez lo hayas validado.</div>
			</div>
			<button class="raised_button">Registrarse</button>
		</form>
	</div>
</section>

@endsection