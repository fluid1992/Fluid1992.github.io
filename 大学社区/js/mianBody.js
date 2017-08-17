$('.review-cont .myreview-open').on('click',function(){
	$(this).css('display','none');
	$(this).next($('li')).css('display','block')	
})
$('.review-cont .myreview-close').on('click',function(ev){
	$(this).closest($('.review-li')).css('display','none');
	$(this).closest($('.review-li')).prev($('.myreview-open')).css('display','block')	
	ev.stopPropagation()
})


$('.transmit-btn').on('click',function(){
	$('.review-btn').removeClass('active');
	$(this).addClass('active');
	$('.review-box').removeClass('active')
    $('.transmit').addClass('active')
})
$('.review-btn').on('click',function(){
	$('.transmit-btn').removeClass('active');
	$(this).addClass('active');
	$('.transmit').removeClass('active')
    $('.review-box').addClass('active')
})
