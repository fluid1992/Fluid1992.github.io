var len = $('.right-nav li').length;
$('.right-nav li').each(function(i,elem){
	$(elem).css('background-position',39*i+'px 0px')
})
var scrollControl = 0;
	$('.right-nav li').eq(scrollControl).css('background-position',39*scrollControl+'px 39px');

//var addMouseWheelHandler = function() {
  document.addEventListener("mousewheel", MouseWheelHandler, false); //不兼容火狐
  //IE9, Chrome, Safari, Oper
//}

function MouseWheelHandler(delta){
	delta.deltaY > 0 ? scrollControl ++ : scrollControl -- ;
	if(scrollControl > len - 1){
		scrollControl = 0;
	}else if(scrollControl < 0){
		scrollControl = len - 1;
	}
	$('.right-nav li').each(function(i,elem){
		$(elem).css('background-position',39*i+'px 0px')
	})
	$('.right-nav li').eq(scrollControl).css('background-position',39*scrollControl+'px 39px');
}
//上面是右边的那个滑动导航
