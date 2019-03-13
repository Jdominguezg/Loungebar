$(document).ready(function() {

	$('.textfield input').on('change', function(){
		var input = $(this);
		var label = input.siblings('label');

		if(input.val().trim()!= ''){
			label.addClass('notEmpty');			
		}else{
			label.removeClass('notEmpty');
			input.val('');
		}
	});	

	$('button').on('click', function(e){
		e.preventDefault();
	});


});