$('.mytb-nav').mouseover(function(){
	$('.mytb-nav .pulldown').css('display','block');
})
$('.mytb-nav').mouseout(function(){
	$('.mytb-nav .pulldown').css('display','none');
})

$('.area').mouseover(function(){
	$('.area .pulldown').css('display','block');
})

$('.area').mouseout(function(){
	$('.area .pulldown').css('display','none');
})
$('.my-area li').click(function(){
	$('.area span').html($(this).html());
})

$('.mycollect').mouseover(function(){
	$('.mycollect .pulldown').css('display','block');
})
$('.mycollect').mouseout(function(){
	$('.mycollect .pulldown').css('display','none');
})

$('.buy-person').mouseover(function(){
	$('.buy-person .pulldown').css('display','block');
})
$('.buy-person').mouseout(function(){
	$('.buy-person .pulldown').css('display','none');
})

$('.contact-service').mouseover(function(){
	$('.contact-service .pulldown').css('display','block');
})
$('.contact-service').mouseout(function(){
	$('.contact-service .pulldown').css('display','none');
})
