function $(id) {
	return document.getElementById(id);
}
//获取元素属性值getStyle
function getStyle(obj, strr){
	if(obj.currentStyle) {
		return obj.currentStyle[strr];
	} else {
		return getComputedStyle(obj)[strr];
	}
}
//元素的移动
function Go(obj, moveNum, target, strr,sleepTime,funEnd) {
	clearInterval(obj.timer);
	obj.timer = setInterval(function() {
		var maLeft = parseInt(getStyle(obj, strr)) + moveNum;
		if(maLeft < target && moveNum < 0 || maLeft > target && moveNum > 0) {
			maLeft = target;
		}
		obj.style[strr] = maLeft + 'px';
		if(maLeft == target) {
			clearInterval(obj.timer);
			if(funEnd) {
				funEnd();
			}
		}
	}, sleepTime)
}
//改变透明度
function ChooseOpacity(obj, state,sleepTime) {
	clearInterval(obj.opaTimer);
	obj.opaTimer = setInterval(function() {
		var opa = parseFloat(getStyle(obj, 'opacity')) + state;
		if(opa >= 1 || opa <= 0) {
			state > 0 ? opa = 1 : opa = 0;
			clearInterval(obj.opaTimer);
		}
		obj.style.opacity = opa;
	}, sleepTime)
}

//抖动
function shake(obj, strr, endFn) {
	var str = [];
	for(var i = 20; i > 0; i -= 2) {
		str.push(i, -i);
	}
	var num = 0;
	obj.timer = setInterval(function() {
		obj.style[strr] = str[num] + 'px';
		num++;
		if(num > str.length) {
			clearInterval(obj.timer);
			obj.style[strr] = '0px';
			if(endFn) {
				endFn();
			}
		}
	}, 50)
}


//获取到网页左边和右边的距离
function getDistence(obj) {
	var arr = {
		'top': 0,
		'left': 0
	}
	while(obj) {
		arr.top += obj.offsetTop;
		arr.left += obj.offsetLeft;
		obj = obj.offsetParent;
	}
	return arr;
}