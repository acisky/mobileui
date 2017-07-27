Zepto(function($){
	
	var $sidebar = $("#sidebar"),
		$body = $("body"),
		offset = $sidebar.offset(),
		topPadding = 15,
		scrolltop = document.documentElement.scrollTop+document.body.scrollTop;
		
	$(document.body || document.documentElement).on("scroll",function() {
		console.log($(".wrapper").scrollTop());
		if ($body.scrollTop() > offset.top) {
			$sidebar.animate({marginTop: $body.scrollTop() - offset.top + topPadding});
		} else {
			$sidebar.animate({marginTop: 0});
		}
	});
        
});