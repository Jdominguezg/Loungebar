$(document).ready(function() {

	$(document).on('change', '.textfield input', function(){
		var input = $(this);
		var label = input.siblings('label');

		if(input.val().trim()!= ''){
			label.addClass('notEmpty');			
		}else{
			label.removeClass('notEmpty');
			input.val('');
		}
	});	

	$('[data-placeholder]').html($('[data-placeholder]').attr('data-placeholder'));
	
});