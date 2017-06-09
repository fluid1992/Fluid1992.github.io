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
function Go(obj, moveNum, target, strr, funEnd) {
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
	}, 50)
}