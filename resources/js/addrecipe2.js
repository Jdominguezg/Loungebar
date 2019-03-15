$(document).ready(function() {

	var maxcharacter = 35;
	var length = $('.recipe_title').val().length;
	var placeholder = $('.recipe_title').attr('placeholder');
	
	$(document).on('keyup', '.recipe_title', function(e) {
		var length = $(this).val().length;
		if(length <= maxcharacter){
			$('.actual_character').html(maxcharacter - length);
		}
	});

	$(document).on('focus', '.recipe_title', function(e){
		$(this).attr('placeholder', '');
	});

	$(document).on('change', '.recipe_title', function(e){
		if($(this).val() == ''){
			$(this).attr('placeholder', placeholder);
		}
	})
	

});