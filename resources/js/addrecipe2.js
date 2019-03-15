$(document).ready(function() {

	actualCharacter = $('.actual_character');
	count = actualCharacter.html();
	
	function characterMinus(){
		actualCharacter--;
	}

	function characterPlus(){
		actualCharacter++;
	}



	$(document).on('keydown', '.recipe_title', function(e) {
		var element = $(this);
		if((e.keyCode == 8 || e.keyCode == 46) && element.val().length > 0 && count < 35){
			count++;
			console.log(element.val().length+1);
			actualCharacter.html(count);

		}else if(e.keyCode != 8 && e.keyCode != 46 && count > 0){
			count--;
			console.log(element.val().length+1);
			actualCharacter.html(count);
		}
	});
});