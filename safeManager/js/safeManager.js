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

	//出现
	$('.p0').css('display','block');
	setTimeout(function(){
	  $('.p0_t_1').css('opacity',1).addClass('animated fadeInLeft');
	},200)
	setTimeout(function(){
	  $('.p0_t_2').css('opacity',1).addClass('animated fadeInRight');
	},300)
	setTimeout(function(){
	  $('.p0_i_1').css('opacity',1).addClass('myrotateXdown');
	},400)
	setTimeout(function(){
	  $('.p0_i_2').css('opacity',1).addClass('animated fadeIn');
	},500)
	//消失
	setTimeout(function(){
	  $('.p0_i_1').removeClass('myrotateXdown').addClass('myscale');
	  $('.p0_t_1').addClass('animated fadeInLeft').addClass('myscaleL')
	  setTimeout(function(){
		  $('.p0_t_2').addClass('animated fadeInRight').addClass('myscaleR')
		  $('.p0_i_2').addClass('animated fadeIn').addClass('myscaleO')
	  },500)
	},2000)
