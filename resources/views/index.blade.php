@extends('principal')
@section('content')
<div class="index_background" style="background-image: url('{{ asset('imgs/IndexBackground/bg-'.(rand(1,25)).'.jpeg') }}')"></div>
<section class="login_modal"></section>
@endsection