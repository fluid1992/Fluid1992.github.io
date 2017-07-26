var RememberArr = [];
var timer = null;
var num = 0;
var score = 0;
var arr = [];
var start = false;
var getRecord = 0;
var fangxiang = 0;
getRecord = window.localStorage.getItem('record');
console.log(getRecord);
if(getRecord!=null){
	console.log(1);
}else{
	getRecord = 0;
}
$('.scoreRecord em').html(getRecord);
createDiv();
$('button').on('click',function(){
	start = !start;
	if(start){
		$('button').html('点我暂停')
		move(fangxiang);
	}else{
		$('button').html('点我开始游戏')
		clearInterval(timer);
	}
	
//	init();
})


$(document).on('keydown',function(ev){
	if(start){
		var T=$('.head').position().top;
		var L=$('.head').position().left;
		var myDct = ev.which;
		if(myDct==39||myDct==37||myDct==38||myDct==40){
			if(ev.which==39){
				$('.head').css('left',L+10+'px');
			}else if(ev.which==37){
				$('.head').css('left',L-10+'px');
			}else if(ev.which==38){
				$('.head').css('top',T-10+'px');
			}else if(ev.which==40){
				$('.head').css('top',T+10+'px');
			}
//			console.log(panduan(ev.which)) 
			if(panduan(ev.which)){
				eat(myDct);
				move(myDct);
			}
			
		}
	}
//	return false;
})

function init(){
	
	clearInterval(timer);
	num = 0;
	score = 0;
	start = false;
	RememberArr = [];
	arr = [];
	getRecord = window.localStorage.getItem('record');
	$('.nowScore em').html(score);
	$('.scoreRecord em').html(getRecord);
	$('.cont').html('<div class="head"></div>');
	createDiv();
}
function panduan(myNum){
	if(myNum==39||myNum==37||myNum==38||myNum==40){
		var getLAgain=$('.head').position().left;
		var getTAgain=$('.head').position().top;
		var Relen = RememberArr.length
		console.log('什么？？')
		if(getLAgain<0 || getLAgain>800-10 || getTAgain>600-10 || getTAgain<0){
			alert('你死了！');
			init();
			return false;
		}//撞边界
		for(var i=0;i<Relen/2;i++){
			if(getLAgain == RememberArr[i*2] && getTAgain == RememberArr[i*2+1]){
				alert('你死了！');
				init();
				
				return false;
			}
		}//撞自己
		RememberArr.push(getLAgain,getTAgain);
		Relen = RememberArr.length;
		if(num>1){
			for(var i = 1; i<num;i++){
				$('.cont div').eq(i).css({'top':RememberArr[Relen-1-i*2]+'px','left':RememberArr[Relen-2-i*2]+'px'});
			}//被吃掉的元素，要跟着头走
		}
		return true;
	}	
//	eat();
//	move(myDct);
}

function eat(n){
	var getT=$('.head').position().top;
	var getL=$('.head').position().left;
	var len = arr.length;
	console.log(len);
	var Relen = RememberArr.length;
	
	if(getL == arr[0] && getT == arr[1]){
		console.log('你吃到了');
		score +=100;
		$('.nowScore em').html(score);
		if(getRecord < score){
			window.localStorage.setItem('record',score);
			$('.scoreRecord em').html(score);
		}
		arr.shift();
		arr.shift();
		$('.cont div').eq(num).css({'top':RememberArr[1]+'px','left':RememberArr[0]+'px'});
//		$('.cont div').eq(num).css({'top':RememberArr[Relen-3]+'px','left':RememberArr[Relen-4]+'px'});
		createDiv();
	}else{
		if(Relen>2){
			RememberArr.shift();
			RememberArr.shift();
		}
	}
}

function createDiv(){
	var Relen = RememberArr.length;
	var l =Math.round(Math.random()*79)*10; 
	var t =Math.round(Math.random()*59)*10; 
	num++;
	for(var i=0;i<Relen/2;i++){
		if(t==RememberArr[i*2+1] && l==RememberArr[i*2]){
			createDiv();
		}
	}
	arr.push(l,t);
	var str =$('.cont').html() + '<div style = "top:'+t+'px;left:'+l+'px"></div>'
	console.log(str);
	$('.cont').html(str);
}


//move();
function move(n){//移动
	if(n==39||n==37||n==38||n==40){
		var sleep = num*2
		if(sleep>150){
			sleep = 150;
		}
		fangxiang = n;
		clearInterval(timer);
		timer = setInterval(function(){
			var T=$('.head').position().top;
			var L=$('.head').position().left;
			if(n==39){
				$('.head').css('left',L+10+'px');
			}
			if(n==37){
				$('.head').css('left',L-10+'px');
			} 
			if(n==38){
				$('.head').css('top',T-10+'px');
			}
			if(n==40){
				$('.head').css('top',T+10+'px');
			}
			panduan(n);
			eat(n);
		},200-sleep)
	}
}