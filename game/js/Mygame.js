var RememberArr = [];
var timer = null;
$(document).on('keydown',function(ev){
	var T=$('.head').position().top;
	var L=$('.head').position().left;
	clearInterval(timer);
	
	console.log(T,L)
	console.log(ev.which);
	var myDct = ev.which;
	if(ev.which==39){
		
		$('.head').css('left',L+10+'px');
		
	}else if(ev.which==37){
		$('.head').css('left',L-10+'px');
		
		
	}else if(ev.which==38){
		$('.head').css('top',T-10+'px');
		
		
	}else if(ev.which==40){
		$('.head').css('top',T+10+'px');
	}
//	clearInterval(timer);
	
	console.log(myDct);
	if(ev.which==39||ev.which==37||ev.which==38||ev.which==40){
		var getLAgain=$('.head').position().left;
		var getTAgain=$('.head').position().top;
		var Relen = RememberArr.length
		if(getLAgain<0 || getLAgain>800-10 || getTAgain>600-10 || getTAgain<0){
			alert('你死了！');
		}//撞边界
		for(var i=0;i<Relen/2;i++){
			if(getLAgain == RememberArr[i*2] && getTAgain == RememberArr[i*2+1]){
				alert('你死了！');
			}
		}//撞自己
		RememberArr.push(getLAgain,getTAgain);
		Relen = RememberArr.length;
		if(num>1){
			for(var i = 1; i<num;i++){
				$('.cont div').eq(i).css({'top':RememberArr[Relen-1-i*2]+'px','left':RememberArr[Relen-2-i*2]+'px'});
			}//被吃掉的元素，要跟着头走
		}
		eat();
		move(myDct);
	}
//	return false;
})

function panduan(myNum){
	if(ev.which==39||ev.which==37||ev.which==38||ev.which==40){
		var getLAgain=$('.head').position().left;
		var getTAgain=$('.head').position().top;
		var Relen = RememberArr.length
		if(getLAgain<0 || getLAgain>800-10 || getTAgain>600-10 || getTAgain<0){
			alert('你死了！');
		}//撞边界
		for(var i=0;i<Relen/2;i++){
			if(getLAgain == RememberArr[i*2] && getTAgain == RememberArr[i*2+1]){
				alert('你死了！');
			}
		}//撞自己
		RememberArr.push(getLAgain,getTAgain);
		Relen = RememberArr.length;
		if(num>1){
			for(var i = 1; i<num;i++){
				$('.cont div').eq(i).css({'top':RememberArr[Relen-1-i*2]+'px','left':RememberArr[Relen-2-i*2]+'px'});
			}//被吃掉的元素，要跟着头走
		}
}

var arr = [];
var num = 0;
function eat(){
	var getT=$('.head').position().top;
	var getL=$('.head').position().left;
	var len = arr.length;
	console.log(len);
	var Relen = RememberArr.length;
	
	if(getL == arr[0] && getT == arr[1]){
		console.log('你吃到了');
		console.log(num);
		console.log(RememberArr);
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
createDiv();
console.log(arr);
function createDiv(){
	var Relen = RememberArr.length;
	num++;
	var l =Math.round(Math.random()*80)*10; 
	var t =Math.round(Math.random()*60)*10; 
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
		
	},200)
}
