$(function() {
	
	var body_height = $("body").height(),
		body_width = $("body").width();
		
	$(".icon_refresh").click(function(e){
		e.stopPropagation();
		refresh = $(this);
		refresh.addClass("active");
		setTimeout(function(){
			refresh.attr("class","icon_refresh");
		}, 1000)
	});
	
	$(".stock_search").find(".t1").focus(function(){
		search_box = $(".stock_search");
		search_box_top = search_box.offset().top;
		hide_other();
		search_box.addClass("fixed").css({
			top:search_box_top
		}).animate({
		  background: "#FFFFFF",
		  height:"100%",
		  left: '0',
		  top: '0'
		}, 200);
		$(".stock_search").find(".close").show();
	});
	
	$(".stock_search").find(".close").click(function(){
		search_box = $(".stock_search");
		show_other();
		search_box.removeClass("fixed").removeAttr("style");
		search_box.find(".t1").blur();
		$(this).hide();
	})
	

	$(".stock_part .stock_cate").on("tap",function(){
		if($(this).hasClass("show")) {
			$(this).removeClass("show").addClass("hide");
			$(this).next(".plate_list").hide();
		} else {
			$(this).removeClass("hide").addClass("show");
			$(this).next(".plate_list").show();
		}
	})
    
});

function hide_other(){
	$(".header").hide();
	$(".footer").hide();
}

function show_other(){
	$(".header").show();
	$(".footer").show();
}
