var len = $('.right-nav li').length;
$('.right-nav li').each(function(i,elem){
	$(elem).css('background-position',39*i+'px 0px')
})
var scrollControl = 0;
	$('.right-nav li').eq(scrollControl).css('background-position',39*scrollControl+'px 39px');

//var addMouseWheelHandler = function() {
  document.addEventListener("mousewheel", MouseWheelHandler, false); //不兼容火狐
  document.addEventListener("DOMMouseScroll", MouseWheelHandler, false); //不兼容火狐
  
  
  //IE9, Chrome, Safari, Oper
//}
function MouseWheelHandler(ev){
	var d=true;  //滚动条向下为true
	var newEv=ev||event;
	if(newEv.wheelDelta){
			newEv.wheelDelta < 0 ? d=true : d =false;
		}else{
			newEv.detail > 0  ?  d=true : d=false;
	}
		
	d == true  ? scrollControl ++ : scrollControl -- ;
	if(scrollControl > len - 1){
		scrollControl = 0;
	}else if(scrollControl < 0){
		scrollControl = len - 1;
	}
	$('.right-nav li').each(function(i,elem){
		$(elem).css('background-position',39*i+'px 0px')
	})
	$('.right-nav li').eq(scrollControl).css('background-position',39*scrollControl+'px 39px');
	if(d){
		if( scrollControl == 0){
			animationp4out();
			animationp(2500);
		}else if(scrollControl == 1){
			animationpout();
			animationp1();
		}else if(scrollControl == 2){
			animationp1out();
			animationp2();
		}else if(scrollControl == 3){
			animationp2out();
			animationp3();
		}else if(scrollControl == 4){
			animationp3out();
			animationp4();
		}
	}else{
		if( scrollControl == 0){
			animationp1outUp();
			animationp(2500);
		}else if(scrollControl == 1){
			animationp2outUp();
			animationp1();
		}else if(scrollControl == 2){
			animationp3outUp();
			animationp2();
		}else if(scrollControl == 3){
			animationp4outUp(); 
			animationp3();
		}else if(scrollControl == 4){
			animationpoutUp();
			animationp4();
		}
	}
}
//上面是右边的那个滑动导航
//滚动向下的按键
	$('.roll-down').click(function(){
		animationpout();
		animationp1();
	})
	//出现
	animationp(0);
	function animationp(n){
		setTimeout(function(){
			$('.roll-down').css('display','block');
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
		},n)
		
		//消失
	}	
	function animationpout(){
		  $('.p0_i_1').removeClass('myrotateXdown').addClass('myscale');
		  $('.p0_t_1').addClass('animated fadeInLeft').addClass('myscaleL')
		  setTimeout(function(){
			  $('.p0_t_2').addClass('animated fadeInRight').addClass('myscaleR')
			  $('.p0_i_2').addClass('animated fadeIn').addClass('myscaleO')
		  },500)
		//还原
	  setTimeout(function(){
		$('.p0').css('display','none');
		 $('.p0_t_1').removeClass('myscaleL');
		 $('.p0_i_1').removeClass('myscale');
		 $('.p0_t_2').removeClass('myscaleR');
		 $('.p0_i_2').removeClass('myscaleO');
	  },1500)
	}
	function animationpoutUp(){
		  $('.p0_i_1').removeClass('myrotateXdown').addClass('myrotateXdownRe');
		  $('.p0_t_1').addClass('animated fadeInLeft').addClass('myscaleLRe')
		  setTimeout(function(){
			  $('.p0_t_2').addClass('animated fadeInRight').addClass('myscaleRRe')
			  $('.p0_i_2').addClass('animated fadeIn').addClass('myscaleORe')
		  },500)
		//还原
	  setTimeout(function(){
		$('.p0').css('display','none');
		 $('.p0_t_1').removeClass('myrotateXdownRe');
		 $('.p0_i_1').removeClass('myscaleRe');
		 $('.p0_t_2').removeClass('myscaleRRe');
		 $('.p0_i_2').removeClass('myscaleORe');
	  },1500)
	}
//	animationp1();
	function animationp1(){
	//第二个页面的动画
	$('.roll-down').css('display','none');
	setTimeout(function(){
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
	},1500)
	//	结束动画
	}
	function animationp1out(){
			$('.p1_i_2').removeClass('myrotate').addClass('myscaleEnd');
			$('.p1_i_3').removeClass('myscleP1').addClass('myscaleEnd');
			$('.p1_i_4').removeClass('myslide').addClass('myscaleEnd');
			$('.p1_i_1').removeClass('myfly').addClass('myflyout');
			$('.p1_t_2').remove('fadeIn').addClass('fadeOut');
		setTimeout(function(){
			$('.p1_t_1').removeClass('animated fadeInRight').addClass('mylargen');
			
		},500)
//	还原
	setTimeout(function(){
		 $('.p1').css('display','none');
		$('.p1_i_2').removeClass('myscaleEnd');
		$('.p1_i_3').removeClass('myscaleEnd');
		$('.p1_i_4').removeClass('myscaleEnd');
		$('.p1_i_1').removeClass('myflyout');
		$('.p1_t_2').removeClass('fadeOut');
		$('.p1_t_1').removeClass('mylargen');
	  },1500)
	}
	function animationp1outUp(){
			$('.p1_i_2').removeClass('myrotate').addClass('myrotateRe');
			$('.p1_i_3').removeClass('myscleP1').addClass('myscleP1Re');
			$('.p1_i_4').removeClass('myslide').addClass('myslideRe');
			$('.p1_i_1').removeClass('myfly').addClass('myflyRe');
			$('.p1_t_2').remove('fadeIn').addClass('fadeOut');
		setTimeout(function(){
			$('.p1_t_1').removeClass('animated fadeInRight').addClass('mylargenRe');
			
		},500)
//	还原
	setTimeout(function(){
		 $('.p1').css('display','none');
		$('.p1_i_2').removeClass('myrotateRe');
		$('.p1_i_3').removeClass('myscleP1Re');
		$('.p1_i_4').removeClass('myslideRe');
		$('.p1_i_1').removeClass('myflyRe');
		$('.p1_t_2').removeClass('animated fadeOut');
		$('.p1_t_1').removeClass('mylargenRe');
	  },1500)
	}
//	第三页动画 
//		animationp2();
		function animationp2(){
			setTimeout(function(){
			
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
			},1500)
		}	
		function animationp2out(){
			
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
				
				setTimeout(function(){
					$('.p2').css('display','none');
					$('.p2_i_1').removeClass('largenout');
					$('.p2_i_2').removeClass('largenout1');
					$('.p2_i_3').removeClass('largenout');
					$('.p2_i_5').removeClass('moveout1');
					$('.p2_i_7').removeClass('moveout2');
					$('.p2_i_9').removeClass('moveout3');
					
					$('.p2_t_1').removeClass('largenout');
					$('.p2_t_2').removeClass('animated fadeOut');
		  		},1500)
		}
		function animationp2outUp(){
			
				$('.p2_i_1').removeClass('mymove').addClass('mymoveRe');
				$('.p2_i_2').removeClass('myrotate45').addClass('myrotate45Re');
				setTimeout(function(){
					$('.p2_i_3').removeClass('fadeIn').addClass('fadeOut');
				},300)
				$('.p2_i_5').removeClass('mymovei5').addClass('mymovei5Re');
				$('.p2_i_7').removeClass('mymovei7').addClass('mymovei7Re');
				$('.p2_i_9').removeClass('mymoveRight').addClass('mymoveRightRe');
				$('.p2_t_1').removeClass('active').addClass('activeRe');
				$('.p2_t_2').removeClass('fadeIn').addClass('fadeOut');
				
				setTimeout(function(){
					$('.p2').css('display','none');
					$('.p2_i_1').removeClass('mymoveRe');
					$('.p2_i_2').removeClass('myrotate45Re');
					$('.p2_i_3').removeClass('animated fadeOut');
					$('.p2_i_5').removeClass('mymovei5Re');
					$('.p2_i_7').removeClass('mymovei7Re');
					$('.p2_i_9').removeClass('mymoveRightRe');
					$('.p2_t_1').removeClass('activeRe');
					$('.p2_t_2').removeClass('animated fadeOut');
		  		},1500)
		}
//第四页动画开始
//animationp3();
function animationp3(){
	setTimeout(function(){
			
		$('.p3').css('display','block');
		$('.p3_i_1').css('opacity',1).addClass('translateY300');
		$('.p3_t_1').css('opacity',1).addClass('animated fadeInLeft');
		
		setTimeout(function(){
			$('.p3_i_2').css('opacity',1).addClass('translateYX');
		},250)
		setTimeout(function(){
			$('.p3_i_3').css('opacity',1).addClass('translateleftXY');
		},650)
		setTimeout(function(){
			$('.p3_i_4').css('opacity',1).addClass('translateRot');
			$('.p3_i_7').css('opacity',1).addClass('translateRotRightMI');
			
		},200)
		$('.p3_i_5').css('opacity',1).addClass('translateRot');
		$('.p3_i_6').css('opacity',1).addClass('translateRotRight');
		$('.p3_t_2').css('opacity',1).addClass('animated fadeIn');
	},1500)
}
	//动画移除
function animationp3out(){
		$('.p3_i_1').removeClass('translateY300').addClass('largenout3');
		setTimeout(function(){
			$('.p3_i_2').removeClass('translateYX').addClass('largenout3');
		},100)
		setTimeout(function(){
			$('.p3_i_3').removeClass('translateleftXY').addClass('largenout3');
		},300)
		$('.p3_t_1').removeClass('animated fadeInLeft').addClass('largenout3');
		$('.p3_t_2').removeClass('fadeIn').addClass('fadeOut');
		$('.p3_i_4').removeClass('translateRot').addClass('translateYXRp3');
		$('.p3_i_5').removeClass('translateRot').addClass('translateYXRp3');
		$('.p3_i_6').removeClass('translateRot').addClass('translateYXp3');
		$('.p3_i_7').removeClass('translateRotRightMI').addClass('translateYXp3');
//	还原
		setTimeout(function(){
			$('.p3').css('display','none');
			$('.p3_i_1').removeClass('largenout3');
			$('.p3_i_2').removeClass('largenout3');
			$('.p3_i_3').removeClass('largenout3');
			$('.p3_i_4').removeClass('translateYXRp3');
			$('.p3_i_5').removeClass('translateYXRp3');
			$('.p3_i_6').removeClass('translateYXp3');
			$('.p3_i_7').removeClass('translateYXp3');
			$('.p3_t_1').removeClass('largenout3');
			$('.p3_t_2').removeClass('fadeOut');
			
		  },1500)
}
function animationp3outUp(){
		$('.p3_i_1').removeClass('translateY300').addClass('translateY300Re');
		setTimeout(function(){
			$('.p3_i_2').removeClass('translateYX').addClass('translateYXRe');
		},100)
		setTimeout(function(){
			$('.p3_i_3').removeClass('translateleftXY').addClass('translateleftXYRe');
		},300)
		$('.p3_t_1').removeClass('animated fadeInLeft').addClass('largenout3Re');
		$('.p3_t_2').removeClass('fadeIn').addClass('fadeOut');
		$('.p3_i_4').removeClass('translateRot').addClass('translateRotRe');
		$('.p3_i_5').removeClass('translateRot').addClass('translateRotRe');
		$('.p3_i_6').removeClass('translateRot').addClass('translateRotRe');
		$('.p3_i_7').removeClass('translateRotRightMI').addClass('translateRotRightMIRe');
//	还原
		setTimeout(function(){
			$('.p3').css('display','none');
			$('.p3_i_1').removeClass('translateY300Re');
			$('.p3_i_2').removeClass('translateYXRe');
			$('.p3_i_3').removeClass('translateleftXYRe');
			$('.p3_i_4').removeClass('translateRotRe');
			$('.p3_i_5').removeClass('translateRotRe');
			$('.p3_i_6').removeClass('translateRotRe');
			$('.p3_i_7').removeClass('translateRotRightMIRe');
			$('.p3_t_1').removeClass('largenout3Re');
			$('.p3_t_2').removeClass('animated fadeOut');
			
		  },1500)
}
//第四页动画结束
//第五页动画开始
//	animationp4();
	function animationp4(){
		setTimeout(function(){
			
			$('.p4').css('display','block');
			$('.p4_i_1').css('opacity',1).addClass('translateY300');
			setTimeout(function(){
				$('.p4_i_2').css('opacity',1).addClass('translateYX');
			},250)
			setTimeout(function(){
				$('.p4_i_3').css('opacity',1).addClass('translateYX');
			},650)
			$('.p4_i_4').css('opacity',1).addClass('animated fadeIn');
			setTimeout(function(){
				$('.imgp4').css('opacity',1).addClass('myrotate');
			},200)
			setTimeout(function(){
				$('.p4_t_1').css('opacity',1).addClass('translateTX');
			},800)
			setTimeout(function(){
				$('.p4_t_2').css('opacity',1).addClass('animated fadeIn');
			},1500)
		},1500)
	}
	//第五页动画结束
	function animationp4out(){
		
			$('.p4_t_1').removeClass('translateTX').addClass('largenout');
			$('.p4_i_1').removeClass('translateY300').addClass('largenout');
			$('.p4_t_2').removeClass('fadeIn').addClass('fadeOut');
			$('.p4_i_4').removeClass('animated fadeIn').addClass('largenout3');
			setTimeout(function(){
				$('.p4_i_2').removeClass('translateYX').addClass('largenout');
			},500)
			setTimeout(function(){
				$('.p4_i_3').removeClass('translateYX').addClass('largenout');
			},1000)
		
		setTimeout(function(){
			$('.p4').css('display','none');
			$('.p4_t_1').removeClass('largenout');
			$('.p4_i_1').removeClass('largenout');
			$('.p4_t_2').removeClass('animated fadeOut');
			$('.p4_i_4').removeClass('largenout3');
			$('.p4_i_2').removeClass('largenout');
			$('.p4_i_3').removeClass('largenout');
		 },1500)
	}
function animationp4outUp(){
		
			$('.p4_t_1').removeClass('translateTX').addClass('translateTXRe');
			$('.p4_i_1').removeClass('translateY300').addClass('translateY300Re');
			$('.p4_t_2').removeClass('fadeIn').addClass('fadeOut');
			$('.p4_i_4').removeClass('animated fadeIn').addClass('largenout3Re');
			setTimeout(function(){
				$('.p4_i_2').removeClass('translateYX').addClass('translateYXRe');
			},500)
			setTimeout(function(){
				$('.p4_i_3').removeClass('translateYX').addClass('translateYXRe');
			},1000)
		
		setTimeout(function(){
			$('.p4').css('display','none');
			$('.p4_t_1').removeClass('translateTXRe');
			$('.p4_i_1').removeClass('translateY300Re');
			$('.p4_t_2').removeClass('animated fadeOut');
			$('.p4_i_4').removeClass('largenout3Re');
			$('.p4_i_2').removeClass('translateYXRe');
			$('.p4_i_3').removeClass('translateYXRe');
		 },1500)
	}