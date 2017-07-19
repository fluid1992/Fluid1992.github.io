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
//	animationp();
	function animationp(){
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
	}
//	animationp1();
	function animationp1(){
	//第二个页面的动画
		$('.p1').css('display','block');
		$('.p1_i_1').css('opacity',1).addClass('myfly');
		$('.p1_i_2').css('opacity',1).addClass('myrotate');
		$('.p1_i_4').css('opacity',1).addClass('myslide');
		$('.p1_i_3').css('opacity',1).addClass('myscleP1');
		setTimeout(function(){
			$('.p1_t_1').css('opacity',1).addClass('animated fadeInRight')	 
				  
		},500)
		setTimeout(function(){
				  $('.redUp').addClass('myredUp')
				  $('.greenDown').addClass('mygreendown');
				  
		},1000)
		setTimeout(function(){
			$('.p1_t_2').css('opacity',1).addClass('animated fadeIn')
		},1500)
	//	结束动画
		setTimeout(function(){
			$('.p1_i_2').removeClass('myrotate').addClass('myscaleEnd');
			$('.p1_i_3').removeClass('myscleP1').addClass('myscaleEnd');
			$('.p1_i_4').removeClass('myslide').addClass('myscaleEnd');
			$('.p1_i_1').removeClass('myfly').addClass('myflyout');
			$('.p1_t_2').remove('fadeIn').addClass('fadeOut');
		},5000)
		setTimeout(function(){
			$('.p1_t_1').removeClass('animated fadeInRight').addClass('mylargen');	
		},5500)
	}
//	第三页动画 
//		animationp2();
		function animationp2(){
			$('.p2').css('display','block');
			$('.p2_i_1').css('opacity',1).addClass('mymove');
			$('.p2_i_2').css('opacity',1).addClass('myrotate45');
			setTimeout(function(){
				$('.p2_i_3').css('opacity',1).addClass('animated fadeIn');
			},1200)
			$('.p2_i_4').css('opacity',1);
			$('.p2_i_5').css('opacity',1).addClass('mymovei5');
			$('.p2_i_7').css('opacity',1).addClass('mymovei7');
			$('.loog-gun').addClass('mymoveLoogGun');
			$('.short-gun').addClass('mymoveShortGun');
			$('.p2_i_9').css('opacity',1).addClass('mymoveRight');
			setTimeout(function(){
				$('.img10').addClass('myImgrotate1');
				$('.img11').addClass('myImgrotate2');
			},1200)
			$('.p2_t_1').css('opacity',1).addClass('active');
			setTimeout(function(){
				$('.p2_t_2').css('opacity',1).addClass('animated fadeIn');
			},500)
			
			
			setTimeout(function(){
				$('.p2_i_1').removeClass('mymove').addClass('largenout');
				$('.p2_i_2').removeClass('myrotate45').addClass('largenout1');
				setTimeout(function(){
					$('.p2_i_3').removeClass('animated fadeIn').addClass('largenout');
				},300)
				$('.p2_i_5').removeClass('mymovei5').addClass('moveout1');
				$('.p2_i_7').removeClass('mymovei7').addClass('moveout2');
				$('.p2_i_9').removeClass('mymoveRight').addClass('moveout3');
				$('.p2_t_1').removeClass('active').addClass('largenout');
				$('.p2_t_2').removeClass('fadeIn').addClass('animated fadeOut');
			},5000)
		}
		
