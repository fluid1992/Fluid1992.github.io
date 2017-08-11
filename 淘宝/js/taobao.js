
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


