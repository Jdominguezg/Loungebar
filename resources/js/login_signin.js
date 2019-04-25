$(document).ready(function() {
	
	$(document).on('click', '.go_signin', function(event) {
		$('.login_modal').addClass('back');
		$('.login_title').addClass('back_title');
		$('.signin_modal').removeClass('back');
		$('.signin_title').removeClass('back_title');
		setTimeout(function(){
			$('#signin_nickname').focus();
		}, 300)
		
	});
	$(document).on('click', '.signin_modal .arrow_back', function(event){
		$('.login_modal').removeClass('back');
		$('.login_title').removeClass('back_title');
		$('.signin_modal').addClass('back');
		$('.signin_title').addClass('back_title');
		$('#log_user').focus();
	});

	$(document).on('click', '.login_button', function(event) {
		event.preventDefault();
		var submit = false;

		var inputs = $(this).siblings().find('input');
		try{
			$.each(inputs, function(index, val) {
				if($(this).val().trim() == ''){
					alert('Complete los campos correctamente para iniciar sesión');
					$(this).focus();
					throw submit = false;
				} else{
					submit = true;
				}
			});
		}catch{};

		if(submit){			
			$(this).parents('form').submit();
		}
		
	});

	$(document).on('click', '.signin_button', function(event) {
		event.preventDefault();
		var submit = false;
		var inputs = $(this).siblings().find('input');
		try{
			$.each(inputs, function(index, val) {
				if($(this).val().trim() == ''){
					alert('Complete los campos correctamente para registrarse');
					$(this).focus();
					throw submit = false;
				}else{
					submit = true;
				}
			});
		}catch{}

		if(submit){
			$(this).parents('form').submit();
		}
	});

});