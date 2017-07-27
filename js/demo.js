Zepto(function($){
	var myScroll;
	var $elm;

	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
	
	$(window).on("load",function(){
		if($(".main article").attr("data-scroll")){
			$(".main article").wrapInner('<div class=content-scroll>')
			myScroll = new IScroll(".main article", { mouseWheel: true,
			onBeforeScrollStart: function(e) {
				var target = e.target;
				while (target.nodeType != 1) target = target.parentNode;
				if(target.tagName != 'select' && target.tagName != 'input' && target.tagName != 'textarea') {
					e.preventDefault();
				}
			}
			});
		}
	})

	$('input, textarea').bind('focus', function(e) {
		$elm = $(this);
	});

	$(window).on('resize', function() {
		if (myScroll !== undefined||$elm !== undefined) {
			try {
			setTimeout(function() {
				myScroll.refresh();
				myScroll.scrollToElement($elm[0]);
			}, 100);
			console.error("onResize");
			} catch(e) {
				alert(e.name + ": " + e.message);
			}
		}
	});

	$(window).bind('orientationchange', function() {
		var orientation = window.orientation;
		switch (orientation) {
			case 0:
				console.error('portrait (normal): ' + orientation);
				break;
			case 180:
				console.error('portrait (upside-down): ' + orientation);
				break;
			case -90:
				console.error('landscape (clockwise): ' + orientation);
				break;
			case 90:
				console.error('landscape (counter-clockwise): ' + orientation);
				break;
			default:
				console.error('unknown orientation: ' + orientation);
		}
	});

});