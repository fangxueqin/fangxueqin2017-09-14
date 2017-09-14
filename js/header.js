//鼠标移入到选项卡上让其显示或消失
$(".ui-slider-nav").mouseenter(function(){
	$(".ui-category").show();
}).mouseleave(function(){
	$(".ui-category").hide();
})

$(".ui-category-list").mouseenter(function(){
	$(this).children(".ui-category-third").show();
	$(this).children(".ui-cate-right").show();
}).mouseleave(function(){
	$(this).children(".ui-category-third").hide();
	$(this).children(".ui-cate-right").hide();
})



//导航栏移入显示
$(".ssn-home").mouseenter(function(){
	$("#Theader_down01").show();
}).mouseleave(function(){
	$("#Theader_down01").hide();
})
$(".ssn-mybrand").mouseenter(function(){
	$("#Theader_down03").show();
}).mouseleave(function(){
	$("#Theader_down03").hide();
})


/*轮播*/
var timer = setInterval(autoPlay,3500);
var index = 0;
function autoPlay(){
	index++;
	if( index == 3 ){
		index = 0;
	}
	$(".btnArea span").eq(index).addClass("bannercur").siblings().removeClass("bannercur");
	$(".imgArea").animate({ "left":-1090*index},2000) }

$(".btnArea span").mouseenter(function(){
	clearInterval( timer );
	index = $(this).index() - 1;
	autoPlay();
})

$(".btnArea span").mouseleave(function(){
	timer = setInterval(autoPlay,2000);
})

/*返回顶部*/
$("#gototop").mouseenter(function(){
	$("#gototop").addClass("activeLevel");
    $(this).children(".level-dd").css("display","block").stop().animate( {right:31} );
}).mouseleave(function(){
	$("#gototop").removeClass("activeLevel");
	$(this).children(".level-dd").css("display","none").stop().animate( {right:55} );
})
$(".level-dd-a").click(function(){
	$("body,html").animate( {scrollTop:0},1000 );
})

/*侧边栏特效*/
$("#mycollect").mouseenter(function(){
	$("#mycollect").addClass("activeLevel");
	$(this).children(".level-login-dd").css("display","block").stop().animate( {right:31});
}).mouseleave(function(){
	$("#mycollect").removeClass("activeLevel");
	$(this).children(".level-login-dd").css("display","none").stop().animate( {right:55});
})


$("#ewcode").mouseenter(function(){
	$(this).addClass("activeLevel");
}).mouseleave(function(){
	$(this).removeClass("activeLevel");
})

$("#myservice").mouseenter(function(){
	$(this).children(".level-dd").css("display","block").stop().animate( {right:31} );
}).mouseleave(function(){
	$(this).children(".level-dd").css("display","none").stop().animate( {right:55} );
})

$("#mycart").mouseenter(function(){
	$(this).addClass("activeLevel")
}).mouseleave(function(){
	$(this).removeClass("activeLevel");
})


///*吸顶操作*/
$(window).scroll(function(){	
	var height = $(".slidebox").height();
	var sTop = $(document).scrollTop();
	if( sTop > height ){
		$(".nav").css({	
			"display" : "block",
			"position": "fixed",
			"top" : 0
			})
	}else{
		$(".nav").css({
			"display" : "none",
			"position": "static"
			})
	}
})

/*滚动条事件*/
$(window).scroll(function(){
	var height = $(".ui-nav").height();
	var sTop = $(document).scrollTop();
	if( sTop > height ){
		$(".fixleftImg").show();
	}else{
		$(".fixleftImg").hide();
	}
})
$(".fixleftAd_close").click(function(){
	$(".fixleftAd").hide();
	$(".fixleftImg").css({"height":231})
})
