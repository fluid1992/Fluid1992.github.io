
var control = 0
$('.love img').on('click',function(){
	if(control==0){
		$(this).attr('src','img/taoxinh.png');
		control = 1;
	}else{
		$(this).attr('src','img/taoxin.png');
		control = 0;
	}
	
})