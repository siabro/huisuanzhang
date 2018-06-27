//banner中部banner_select的选项文字替换
$(document).ready(
	function() {
		$(".banner_select").change(
			function() {
				var getSelectVal = $(".banner_select option:selected").text();
				$(".banner_select span").text(getSelectVal);
			}
		)
	}
);

//banner_select输入框控制
function word_ctrl_on() {
	var a = document.getElementsByClassName("b_i")[0];
	if(a.value=='请输入公司名称，例:北京公斤科技有限公司'){
		a.value='';
	}
}

function word_ctrl_out() {
	var a = document.getElementsByClassName("b_i")[0];
	if(a.value==''){
		a.value='请输入公司名称，例:北京公斤科技有限公司';
	}
}

//点击主导航栏分类显示banner左部菜单
function menuFix() {
	var i = document.getElementsByClassName("leftSidebar_cont")[0];
	if(i.style.display == "none") {
		i.style.display = "";
	} else {
		i.style.display = "none";
	}
}
window.onload = menuFix();

//悬浮菜单1
function show_second_menu1() {
	var c = document.getElementsByClassName("second_menu1_1")[0];
	if(c.style.display == "none") {
		c.style.display = "block";
	} else {
		c.style.display = "none";
	}
}
window.onload = show_second_menu1();

function hidden_second_menu1() {
	var c = document.getElementsByClassName("second_menu1_1")[0];
	c.style.display = "none";
}
window.onload = hidden_second_menu1();

function replaceImg1() {
	var a = document.getElementsByClassName("barOption_1")[0];
	var oldimg = a.children[0];
	var newimg = document.createElement("img");
	newimg.src = "img/second_menu_left1_1.png";
	a.replaceChild(newimg, oldimg);
}

function restoreImg1() {
	var a = document.getElementsByClassName("barOption_1")[0];
	var oldimg = a.children[0];
	var newimg = document.createElement("img");
	newimg.src = "img/second_menu_left1.png";
	a.replaceChild(newimg, oldimg);
}

//悬浮菜单2
function show_second_menu2() {
	var c = document.getElementsByClassName("second_menu1_2")[0];
	if(c.style.display == "none") {
		c.style.display = "block";
	} else {
		c.style.display = "none";
	}
}
window.onload = show_second_menu2();

function hidden_second_menu2() {
	var c = document.getElementsByClassName("second_menu1_2")[0];
	c.style.display = "none";
}
window.onload = hidden_second_menu2();

function replaceImg2() {
	var a = document.getElementsByClassName("barOption_2")[0];
	var oldimg = a.children[0];
	var newimg = document.createElement("img");
	newimg.src = "img/second_menu_left2_2.png";
	a.replaceChild(newimg, oldimg);
}

function restoreImg2() {
	var a = document.getElementsByClassName("barOption_2")[0];
	var oldimg = a.children[0];
	var newimg = document.createElement("img");
	newimg.src = "img/second_menu_left2.png";
	a.replaceChild(newimg, oldimg);
}

//悬浮菜单3
function show_second_menu3() {
	var c = document.getElementsByClassName("second_menu1_3")[0];
	if(c.style.display == "none") {
		c.style.display = "block";
	} else {
		c.style.display = "none";
	}
}
window.onload = show_second_menu3();

function hidden_second_menu3() {
	var c = document.getElementsByClassName("second_menu1_3")[0];
	c.style.display = "none";
}
window.onload = hidden_second_menu3();

function replaceImg3() {
	var a = document.getElementsByClassName("barOption_3")[0];
	var oldimg = a.children[0];
	var newimg = document.createElement("img");
	newimg.src = "img/second_menu_left3_3.png";
	a.replaceChild(newimg, oldimg);
}

function restoreImg3() {
	var a = document.getElementsByClassName("barOption_3")[0];
	var oldimg = a.children[0];
	var newimg = document.createElement("img");
	newimg.src = "img/second_menu_left3.png";
	a.replaceChild(newimg, oldimg);
}

//banner右侧表单输入框文字控制
function phone_word_ctrl_on() {
	var a = document.getElementsByName("phoneNumber")[0];
	if(a.value=='请输入你的手机号码'){
		a.value='';
	}
}

function phone_word_ctrl_out() {
	var a = document.getElementsByName("phoneNumber")[0];
	if(a.value==''){
		a.value='请输入你的手机号码';
	}
}

function NN_word_ctrl_on() {
	var a = document.getElementsByName("nickName")[0];
	if(a.value=='例:王先生'){
		a.value='';
	}
}

function NN_word_ctrl_out() {
	var a = document.getElementsByName("nickName")[0];
	if(a.value==''){
		a.value='例:王先生';
	}
}


//		function show_second_menu() {
//			var c = document.getElementsByClassName("second_menus");
//			for(var i = 0;i < c.length-1; i++) {
//				var d = document.getElementsByClassName("second_menus")[i];
//				if (d.style.display == "none") {     
//				    d.style.display = "block";     
//				}
//				else{     
//					d.style.display = "none";
//				}
//			}
//		}
//		window.onload = show_second_menu();
//		
//		function hidden_second_menu() {
//			var c = document.getElementsByClassName("second_menus");
//			for(var i = 0; i <c.length-1; i++) {
//				var d = document.getElementsByClassName("second_menus")[i];
//				d.style.display = "none";
//			}
//		}
//		window.onload = hidden_second_menu();