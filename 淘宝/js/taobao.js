
mydown($('.mytb-nav'),$('.mytb-nav .pulldown'));//我的淘宝
mydown($('.area'),$('.area .pulldown'));//地域选择

$('.my-area li').click(function(){
	$('.area span').html($(this).html());
})//把选择好的地域显示在标签中

mydown($('.mycollect'),$('.mycollect .pulldown'));//我的收藏
mydown($('.buy-person'),$('.buy-person .pulldown'));//卖家中心
mydown($('.contact-service'),$('.contact-service .pulldown'));//联系客服

function mydown(obj,objPart){ //下拉菜单移入显示，移除赢藏
	obj.mouseover(function(){
		objPart.css('display','block');
	})
	
	obj.mouseout(function(){
		objPart.css('display','none');
	})
}

