jQuery(document).ready(function($) {
	
	var slwdwnSpeed = 1000; // 2000 = 2 seconds; 1000 = 1 seconds
	var slwdwnElement = 'a[href^="#"]';

	$(slwdwnElement).each(function(){
		$(this).click(function(e){
            e.preventDefault();
			var getID = $(this).attr('href');
			var offset = $(getID).offset();
			$('html,body').animate({
				scrollTop: offset.top	
			},slwdwnSpeed);
		});
	});
});
