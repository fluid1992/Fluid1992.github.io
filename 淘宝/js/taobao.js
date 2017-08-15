
mydown($('.mytb-nav'),$('.mytb-nav .pulldown'));//我的淘宝
mydown($('.area'),$('.area .pulldown'));//地域选择

$('.my-area li').click(function(){
	$('.area span').html($(this).html());
})//把选择好的地域显示在标签中

mydown($('.mycollect'),$('.mycollect .pulldown'));//我的收藏
mydown($('.buy-person'),$('.buy-person .pulldown'));//卖家中心
mydown($('.contact-service'),$('.contact-service .pulldown'));//联系客服
mydown($('.web-nav'),$('.web-nav-box'));


function mydown(obj,objPart){ //下拉菜单移入显示，移除赢藏
	obj.mouseover(function(){
		objPart.css('display','block');
	})
	
	obj.mouseout(function(){
		objPart.css('display','none');
	})
}

//生成导航内容
var jjceArr = [
	'女装','男装','内衣','鞋靴','箱包','婴童','家电','数码',
	'手机','美妆','珠宝','眼镜','手表','运动','户外','乐器',
	'游戏','动漫','影视','美食','鲜花','宠物','农资','房产',
	'装饰','建材','家居','百货','汽车','二手车','办公','企业购',
	'定制','教育','卡券','本地'
]
var featureArr = [
	'iFashion','爱逛街','美妆秀','全球购','腔调','淘女郎','星店','格调',
	'运动派','极有家','特色中国','潮电街','拍卖会','淘宝众筹','中国制造',
	'飞猪','亲宝贝','闲鱼','农资','天天特价','清仓','俪人购','聚名品','淘抢购',
	'全球精选','非常大牌','试用','量贩团','阿里翻译'
]
var aliAppArr = [
	'淘宝','天猫','支付宝','聚划算','飞猪','蚂蚁聚宝','旺信','闲鱼',
	'阿里钱盾','钉钉','高德地图','点点虫','虾米音乐','淘票票','菜鸟裹裹',
	'爱逛街','拍卖会','阿里云','网商银行','阿里邮箱','阿里众包'
]
var recommendArr = [
	'余额宝','大牌捡宝','淘公仔','浏览器','淘宝香港','淘宝台湾',
	'淘宝全球','淘宝东南亚','闺蜜淘货','大众评审','淘工作'
]
var hotArr = [
	'女装','家居','全球购','极有家','天天特价','淘宝','闲鱼','钉钉','余额宝'
]
var newArr = [
	'家电','iFashion','亲宝贝','阿里翻译','蚂蚁聚宝','菜鸟裹裹','阿里邮箱','淘工作'
]
var popdata=[
	['夏新品','0'],['连衣裙','0'],['短裤','1'],['T恤','0'],['吊带裤','1'],['裤子','0'],['雪纺衫','1'],['夏季套装','0'],
	['牛仔外套','1'],['薄衬衫','0'],['牛仔裤','1'],['情侣T','1'],['半身裙','0'],['大码女装','1'],['时尚套装','0'],
	['蕾丝衫','0'],['背心吊带','1'],['夏季外套','1'],['薄针织衫','1'],['妈妈装','1'],['防晒衫','1'],['红人私服','0'],
	['甜美风','1'],['文艺风','1'],['街头风','0'],['原创单品','1'],['大厂直供','0'],['通勤风','1'],['婚纱礼服','1']
]



addElm($('.jjce'),jjceArr);
addElm($('.feature'),featureArr);
addElm($('.aliapp'),aliAppArr);
addElm($('.recommend'),recommendArr);

function addElm(obj,objArr){
	var str = '';
	var cha = '';
	for(var i = 0;i < objArr.length; i++){
		for(var j = 0;j < hotArr.length;j++){
			if(objArr[i]==hotArr[j]){
				str += '<li><a herf="#">'+objArr[i]+'<span class="hot"></span></a></li>';
				cha += '1';
				break;
			}
		}
		for(var j = 0;j < newArr.length;j++){
			if(objArr[i]==newArr[j]){
				str += '<li><a herf="#">'+objArr[i]+'<span class="new"></span></a></li>';
			
				cha += '1';
				break;
			}
		}
		if(cha==''){
			str += '<li><a herf="#">'+objArr[i]+'</a></li>';
		}else{
			cha = '';
		}
	}	  
	obj.html(str);
}
$('.QR-code i').on('click',function(){
	$('.QR-code').css('display','none')
})

addElmA();
function addElmA(){
	var str = '';
	for(var i = 0;i<popdata.length;i++){
		if(popdata[i][1]==0){
			str += '<a class = "red" href="#">'+popdata[i][0]+'</a>'
		}else{
			str += '<a href="#">'+popdata[i][0]+'</a>'
		}
	}
	$('.link-a p').html(str);
}

//左侧导航事件
$('.side-nav li').on('mouseenter',function(){
	$('.side-nav li').each(function(i,elem){
		$(elem).removeClass('active');
		$('.pop-up').eq(i).css('display','none')
		console.log(1)
	})
	$('.side-pop-up').css('display','block');
	$('.pop-up').eq($(this).index()).css('display','block')
	$(this).addClass('active');
})

xiaoshi($('.side-nav'),'mouseleave');
xiaoshi($('.side-title-h3'),'mouseenter');
xiaoshi($('.side-nav-img'),'mouseenter');
function xiaoshi(obj,str){
	obj.on(str,function(ev){
		$('.side-nav li').each(function(i,elem){
			$(elem).removeClass('active');
			$('.pop-up').eq(i).css('display','none')
		})
		
		$('.side-pop-up').css('display','none');
		ev.stopPropagation();
	})
}


