function $getId(id) {
	return document.getElementById(id);
}
//获取元素属性值getStyle
function getStyle(obj, strr) {
	if(obj.currentStyle) {
		return obj.currentStyle[strr];
	} else {
		return getComputedStyle(obj)[strr];
	}
}