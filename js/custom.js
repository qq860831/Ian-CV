// jQuery的初始化
$(document).ready(function(){

	// header color change
	$(window).on("scroll",function(){  // 頁面在滾動時
		var scrollDistance = $(window).scrollTop();
		var $header = $(".js-header");
		if(scrollDistance > 80){  //80剛好就是離開上面有人物的地方
			$header.addClass("header--colored");
		}
		else{
			$header.removeClass("header--colored");
		}
	})

	// wow plugin initialize
	if(screen.width > 768){
		new WOW().init();
	}
	

	// fancybox plugin options
	$('[data-fancybox]').fancybox({
		loop : true
	});

	// stellar plugin initialize
	if(screen.width > 768){
		$(window).stellar();
	}
})