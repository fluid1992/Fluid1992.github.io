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