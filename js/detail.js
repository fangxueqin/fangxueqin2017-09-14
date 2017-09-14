var str = location.href;
//console.log(str); http://127.0.0.1/babyhouse0911/detail.html?pid=yook01
var pid = str.split("=")[1];
//console.log(pid);

$.ajax({
	type:"get",
	url:"https://fangxueqin.github.io/fangxueqin2017-09-14/data.json",
	success : function( res ){
		var htm1 = "" ;
		var htm2 = "";
		var htm3 = "";
		for( var i in res ){
			if( pid==res[i].id ){
				var str = res[i];
				console.log(str)
				htm1 = `<div id="mask"></div>`
				htm2 = `<img src="image/${str.src}" class="bigImage"/>`
				/*htm3 = `<li><img src="image/${str.src}" alt="" class="smallPicOne" /></li>
						<li class="choosed"><img src="image/${str.srd}" alt="" /></li>`*/
				htm3 = `<div id="name">
							<h1>${str.name}</h1>
							<a href="#">
								<strong class="productinfo" id="PromShortDescription">${str.name}</strong>							
							</a>
						</div>
						<div class="clearfix">
								<ul id="summary" class="clearfix">
									<li id="summary-price" class="clearfix">
										<div class="sx_dt pdt5">促销价</div>
										<div class="sx_dd">
											<strong class="p-price" data-type="item" data-gid="90583">${str.price}</strong>
											
										</div>
									</li>
									<li id="choose-amount" class="i_buy_div clearfix">
										<div class="sx_dt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
										<div class="sx_dd pdt50 clearfix">
											<div class="choose_num_ul">
												<div class="computing_num">
													<input type="text" value="1" maxlength="2" id="txtqyt"/>
												</div>
												<div class="computing_act">
													<input type="button" class="add" id="plus" >
													<input type="button" class="reduce" id="minus">
												</div>
											<div class="shopping_div clearfix">
												<span data-id=${str.id} data-name=${str.name} data-src=${str.src} data-price=${str.price} style="display:none;"></span>
												<a class="shopping_car" data-position="item_Cart" id="jCarbtn1">加载中...</a>
											</div>	
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>`
			}
		}
		$("#mask").html(htm1);
		$(".big").html(htm2);
		$(".conTopConBox").html(htm3);
		$("#bigImg").mouseenter(function(){
			$("#mask").show();
			$(".big").show();
		}).mouseleave(function(){
			$("#mask").hide();
			$(".big").hide();
		})
		$("#bigImg").mousemove(function(e){
			var e = e || event;
			var x = e.pageX - $("#bigImg").offset().left - $("#mask").width()/2;
			var y = e.pageY- $("#bigImg").offset().top - $("#mask").height()/2;
			var maxLeft = $("#bigImg").width() - $("#mask").width();
			var maxTop = $("#bigImg").height() - $("#mask").height();
			x=x<0? 0 : (x>maxLeft? maxLeft : x);
			y=y<0? 0 : (y>maxTop? maxTop : y);
			$("#mask").css({"left":x,"top":y});
			var x1 = 2*x;
			var y1 = 2*y;
			$(".big img").css({"left":-x1,"top":-y1})
		})
		$(".add").click(function(){
			num = $("#txtqyt").val();
			num++;
			$("#txtqyt").val(num);
		})
		$(".reduce").click(function(){
			num--;
			$("#txtqyt").val(num);
		})
	}
})
$(".conTopConBox").on("click","#jCarbtn1",function(){
	var arr = [];
	var flag = true;
	var _json = {
		id : $(this).prev().data("id"),
		name : $(this).prev().data("name"),
		src : $(this).prev().data("src"),
		price : $(this).prev().data("price"),
		count : $("#txtqyt").val()	
	}
	var cookieInfo = getCookie("shoplist");
	if( cookieInfo.length!=0 ){
		arr = cookieInfo;
		for(var i in arr){
			if(_json.id == arr[i].id){
				arr[i].count = parseInt( _json.count ) + parseInt( arr[i].count );
				flag = false;
				break;
			}
		}
	}
	if(flag){
		arr.push(_json)
	}
	setCookie("shoplist",JSON.stringify(arr));
	var f = confirm("是否继续购买")
	if(!f){
		location.href = "https://fangxueqin.github.io/fangxueqin2017-09-14/mycart.html"  //连接购物车网址
	}
	console.log(document.cookie);
})
