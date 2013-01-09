jQuery(document).ready(function($) {
	
	var slwdwnSpeed = 1000; // 2000 = 2 seconds; 1000 = 1 seconds
	var slwdwnElement = 'a.slwdwn';

	jQuery(slwdwnElement).each(function(e){
		jQuery(this).click(function(e){
			var getID = $(this).attr('href');
			var offset = $(getID).offset();
			jQuery('html,body').animate({
				scrollTop: offset.top	
			},slwdwnSpeed);
			return false;
		});
	});
});
