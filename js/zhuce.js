/*表单验证*/
var flagTel = null;
$("#tel").blur(function(){
	var reg = /^\d{11,}$/;
	var str = $("#tel").val();
	if( reg.test( str ) ){
		$("#p1").html("输入正确");
		flagTel = true;
	}else{
		$("#p1").html("手机格式不对，请重新输入");
		flagTel = false;
	}
})

var flagPwd = null;
$("#pwd").blur(function(){
	var reg = /^[a-z,0-9]{3,11}$/;
	var str = $(this).val();
	if( reg.test( str ) ){
		$("#p2").html("您输入的密码正确");
		flagPwd = true;
	}else{
		$("#p2").html("您输入的密码有误，请重新输入");
		flagPwd = false;
	}
})

var flagQpwd = null;
$("#qpwd").blur(function(){
	var str = $(this).val();
	if( str == $("#pwd").val() ){
		$("#p3").html("正确");
		flagQpwd = true;
	}else{
		$("#p3").html("两次密码不一致哦");
		flagPwd = false;
	}
})


