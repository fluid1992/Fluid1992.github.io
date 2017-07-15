var len = $('.right-nav li').lenght;
$('.right-nav li').each(function(i,elem){
	$(elem).css('background-position',39*i+'px 0px')
})
var scrollControl = 0;
	$('.right-nav li').eq(scrollControl).css('background-position',39*scrollControl+'px 39px');
//$(document).mousewheel(function(){
//	scrollControl ++;
//	if(scrollControl > len - 1){
//		scrollControl = 0;
//	}
//	console.log(1)
//	$('.right-nav li').each(function(i,elem){
//		$(elem).css('background-position',39*i+'px 0px')
//	})
//	$('.right-nav li').eq(scrollControl).css('background-position',39*scrollControl+'px 39px');
//})
var addMouseWheelHandler = function() {
  document.addEventListener("mousewheel", MouseWheelHandler, false); 
  //IE9, Chrome, Safari, Oper
}
function MouseWheelHandler(){
	scrollControl ++;
	if(scrollControl > len - 1){
		scrollControl = 0;
	}
	console.log(1)
	$('.right-nav li').each(function(i,elem){
		$(elem).css('background-position',39*i+'px 0px')
	})
	$('.right-nav li').eq(scrollControl).css('background-position',39*scrollControl+'px 39px');
}
addMouseWheelHandler();
//$(document).ready(function(){
//$(window).scroll(function(){
//	alert(1);
//  if($(window).scrollTop()>100){
////     $("div").animate({left:'250px'});  
//
//    });
// });
//});
