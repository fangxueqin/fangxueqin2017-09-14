console.log(document.cookie);
var arr = getCookie( "shoplist" );
console.log(arr);
var html1 = "";
var html2 = "";
var html3 = "";
for( var i in arr ){
	var list = arr[i];
	html1 = `<li data-action="1" data-name=${list.name} class="cart3_prod select item_group">
				<a href="#" class="pic inblock"><img src="image/${list.src}"/></a>
				<span class="tit inblock"> 
                        <a href="#" class="" data-position="flashItem_1">${list.name}</a>           
                </span>
                <span class="price inblock"><ins>${list.price}</ins></span>
                <span class="num inblock">
                    <a href="#" class="minus" id="minus"> <span></span></a>
                    <input type="text" maxlength="3" value="1" class="inblock inputTip"> 
                    <a href="#" class="add" id="add"><span></span><em></em> </a> 
                </span>
                <span class="inblock count"><strong>${list.price*(list.count)}</strong></span>
                <span data-name=${list.name} style="display:none"></span>
                <span class="action inblock"><a href="#" class="btn_del">删除 </a></span>
		</li>`
	html2 = `<span class="dist inblock"></span>
			<span class="checktext inblock"> 小计：  </span>
			<span class="totle_price inblock">${list.price+(list.price)}</span>`
	html3 = `<span class="inblock submit">            
			    <a href="#" id="submitOrder" class="submit_b" data-cart="0">确认订单</a>			               
			</span>
			<span class="inblock totCash" id="totCash">${list.price+(list.price)}</span>
			<span class="inblock det">共有<strong id="BuyTotalCount">${list.count}</strong>件商品，总计(不含运费):</span>`
}
$(".cart3_list").html(html1);
$(".cart_check").html(html2);
$(".a-m").html(html3);

//加减
$(".add").click(function(){
	var num = $(".inputTip").val();
	num++;
	$(".inputTip").val(num);
})
$(".minus").click(function(){
	var num = $(".inputTip").val();
	num--;
	$(".inputTip").val(num);	
})

//删除
$(".btn_del").click(function(){
	
	var name = $(this).parent().parent().data("name");
	for( var i in arr ){
		if( arr[i].name == name ){
			arr.splice(i,1);
			setCookie( "shoplist",JSON.stringify(arr) );
			$(this).parent().parent().remove();
		}
	}
})
//跳转到购物车2
$("#submitOrder").click(function(){
	location.href = "https://fangxueqin.github.io/fangxueqin2017-09-14/mycart2.html";
})
