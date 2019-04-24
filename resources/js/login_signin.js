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
	})

});