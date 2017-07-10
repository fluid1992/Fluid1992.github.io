var singNum = 0;
function setLrc(n){//获取歌词
	var str = '';
	for(attr in lrc[n].lyric) {
		str += '<li natrue="' + attr + '">' + lrc[n].lyric[attr] + '</li>';
	}
	$('.singName').html(lrc[n].singname);
	$('.singPlayer').html(lrc[n].singplayer);
	$('.lyric ul').html(str);
	$('audio').attr('src',lrc[n].singSrc);
}

setLrc(singNum);

var Au = $('audio').get(0);
var stopSing = true;
var getBarW = $('.bar').width();
var timer = null;
//		console.log($('.lyric li').attr('attr','singname')) 

var getBW = $('.bar-voice').width(); //获取声音条的宽度
$('.Vbar-move').css('width', Au.volume * getBW + 'px');
$('.Vdot-move').css('left', Au.volume * getBW - 6 + 'px');

$('.play').click(function() {
	Play();
})
function Play(){
	if(stopSing) { // 播放
		Au.play();
		$('.oldtime').html(changeNum(Au.duration)); //放置总时间
		$('.needle').addClass('active');
		$('.dish').addClass('active');

		clearInterval(timer);
		timer = setInterval(function() {
			var playTime = Au.currentTime;
			console.log(playTime)
			lrcShow(playTime);
			$('.newtime').html(changeNum(playTime)); //放置播放时间
			var addBarW = Au.currentTime / Au.duration * getBarW;

			$('.bar-move').css('width', addBarW + 'px');
			$('.dot-move').css('left', addBarW - 6 + 'px');
		}, 10)
		stopSing = false;
	} else {
		stopPlay();
	}
}
function stopPlay() {
	Au.pause(); //暂停
	$('.needle').removeClass('active');
	$('.dish').removeClass('active');
	clearInterval(timer);
	stopSing = true;
}

$('.dot-move').mousedown(function(ev) {

	stopPlay();
	var getX = ev.clientX;
	var getMBarW = $('.bar-move').width();
	var getMDotL = $('.dot-move').position().left;

	$(document).mousemove(function(ev) {
		var getMoveX = ev.clientX;
		var addW = getMoveX - getX;
		var setMBarW = getMBarW + addW;
		var setMDotL = getMBarW + addW - 6;
		if(setMDotL < -6) {
			setMDotL = -6;
		} else if(setMDotL > getBarW - 6)(
			setMDotL = getBarW - 6
		)
		if(setMBarW < 0) {
			setMBarW = 0;
		} else if(setMBarW > getBarW) {
			setMBarW = getBarW;
		}
		$('.bar-move').css('width', setMBarW + 'px');
		$('.dot-move').css('left', setMDotL + 'px');
		var playTime = setMBarW / getBarW * Au.duration;
		Au.currentTime = playTime;
		$('.newtime').html(changeNum(playTime));
		lrcShow(playTime);
	})
	$(document).mouseup(function() {
		$(this).off().mousedown();
	})
	return false;
})

function lrcShow(time) {
	$('.lyric li').each(function(i, elem) {
		if($(elem).attr('natrue') == changeNum(time)) {
			$('.lyric li').removeClass('active');
			var _index = $(elem).index();
			$('.lyric li').eq(_index).addClass('active');
			$('.lyric ul').animate({
				'margin-top': 100 - (_index * 35) + 'px'
			}, 5);
		}
	})
}

var songLen = lrc.length;
console.log(songLen)

$('.next').click(function(){//下一首
	changeSong(true);
})
$('.last').click(function(){//上一首
	changeSong(false);
})

function changeSong(bool){//选择上一首或者下一首
	stopPlay();
	if(bool){
		singNum++;
		if(singNum > songLen-1){
			singNum=0
		}
	}else{
		singNum--;
		if(singNum < 0){
			singNum = songLen-1
		}
	}
	setLrc(singNum);
	setTimeout(function(){
		Play();
	},1000)
}

function getTwo(n) {
	return n > 9 ? n : '0' + n;
}

function changeNum(t) {
	var m = getTwo(Math.floor(t / 60));
	var s = getTwo(Math.ceil(t % 60));
	return m + ':' + s;
}
//voice条的空控制
var voiceControl = true;
$('.voice-li').click(function(ev) {
	if(voiceControl) {
		$('.bar-voice').removeClass('active');

	} else {
		$('.bar-voice').addClass('active');
	}
	voiceControl = !voiceControl;
	ev.stopPropagation()
})
$('.cont').click(function(ev) {
	$('.bar-voice').addClass('active');
	ev.stopPropagation()
});

$('.Vdot-move').mousedown(function(ev) {
	//			console.log(getBH);
	var getY = ev.clientY;
	var getL = $('.Vdot-move').position().top;
	var getW = $('.Vbar-move').width();

	$(document).mousemove(function(ev) {
		var getMoveY = ev.clientY;
		var addY = getMoveY - getY;
		console.log(-addY)
		var setL = -addY + (94 - getL - 6);
		var setW = -addY + getW;

		if(setL < -6) {
			setL = -6;
		} else if(setL > getBW - 6)(
			setL = getBW - 6
		)
		if(setW < 0) {
			setW = 0;
		} else if(setW > getBW) {
			setW = getBW;
		}

		$('.Vbar-move').css('width', setW + 'px');
		$('.Vdot-move').css('left', setL + 'px');

		Au.volume = setW / getBW
		ev.stopPropagation();
	})

	$(document).mouseup(function(ev) {
		$(this).off().mousemove();
		ev.stopPropagation();
	})
	ev.stopPropagation();
	return false;
})