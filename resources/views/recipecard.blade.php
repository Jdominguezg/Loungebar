@extends('principal')
@section('content')
<section style="margin-top:56px;">	
	@for ($i = 0; $i < 5 ; $i++)
	<div class="recipe_card centered">
		<div class="recipe_card_header">
			<a href="#">
				<div class="user_info">
					<div class="user_img" style="background-image: url('{{ asset('imgs/user'.($i+1).'.png') }}')"></div>
					<div class="user_name medium">Usuario de Prueba {{$i+1}}</div>
				</div>
			</a>
			<a href="#">
				<i class="material-icons share">share</i>
			</a>
		</div>
		<a href="#">
			<div class="recipe_img" style="background-image: url('{{asset('imgs/indexBackground/bg-'.($i+1).'.jpeg')}}');">

				<div class="recipe_header">
					<div class="recipe_title">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
						proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</div>
					<div class="recipe_duration">
						<i class="material-icons">access_time</i>
						<span style="margin:0 5px" class="recipe_duration_time">{{rand(2,6)}} Horas y {{rand(2,60)}} minutos</span>
					</div>
				</div>
				<div class="show_more">ver más</div>
			</div>
		</a>
		<div class="recipe_actions">
			<div class="rate"><i class="material-icons">favorite_outlined</i></div>
			<div class="comment"><i class="material-icons">chat_bubble_outline</i></div>
		</div>
		<div class="recipe_rate">
			
		</div>
	</div>
	@endfor
	

</section>
@endsection