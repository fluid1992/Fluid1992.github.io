$('#blogPublic button').on('click',function(){
	if($('#blogPublic input').eq(0).val()==''){
		alert('标题不能为空');
		return false;
	}
	if($('#blogPublic input').eq(1).val()==''){
		alert('作者名称不能为空');
		return false;
	}
	$.ajax({
		type:"post",
		url:"/myarcsend",
		dataType:'json',
		data:{
			'title':$('#blogPublic input').eq(0).val(),
			'author':$('#blogPublic input').eq(1).val(),
			'time':$('#blogPublic input').eq(2).val(),
			'content':$('#blogPublic textarea').val()
		},
		success:function(result){
			// if(result.amgee != ''){
             //    console.log(JSON.stringify(result));
			// }else {
				console.log(1);
                console.log(JSON.stringify(result));
			// }

		},
		error:function(err){
            console.log(JSON.stringify(err));
		}
	});
})





//后台列表的请求
// $.ajax({
// 	type:'get',
// 	url:'http://yooye.top/phpBlog/admin/list.php',
// 	dataType:'json',
// 	success:function(result){
// 		if(result.code==0){
// 			var str='';
// 			console.log(result.data.length);
// 			for(var i=0;i<result.data.length;i++){
// 				str+='<tr>'
// 	          			+'<td>'+result.data[i].title+'</td>'
// 	          			+'<td>'+result.data[i].content+'</td>'
// 	          			+'<td>'+result.data[i].author+'</td>'
// 	          			+'<td>'+result.data[i].time+'</td>'
// 	          			+'<td>'
// 	          				+'<button class="btn btn-primary">编辑</button>'
// 	          				+'<button class="btn btn-danger" data-id="'+result.data[i].id+'">删除</button>'
// 	          			+'</td>'
// 	          		+'</tr>'
// 			};
// 			$('#blogList .tB').html(str);
// 		}
// 	},
// 	error:function(err){
// 		console.log(2);
// 		console.log(JSON.stringify(err));
// 	}
// })
//
// //后台列表删除按钮功能
$('#blogList').delegate('.btn-danger','click',function(){
	var _this=$(this);
	var dataId=$(this).attr('myId');
	alert(dataId);
	var conf=confirm('你真的确定要删除吗？');
	if(conf){
		$.ajax({
			type:'get',
			url:'/mylist/del?id='+dataId,
			dataType:'json',
			success:function(re){
				if(re.code==0){
					_this.closest('tr').remove();
				}else{
					alert('删除失败，请重试');
				}
			},
			error:function(err){
				console.log(JSON.stringify(err));
			}
		})
	}
})
$('.mybtn').on('click',function () {
	var v = $('#blogList input').val()
	if(v==''){
		alert('作者名不能为空，请重新输入');
		return;
	}
	$.ajax({
        type:'post',
        url:'/mylist/sech',
        dataType:'json',
		data:{
        	myAuthorFind:v
		},
        success:function(re){
            console.log(JSON.stringify(re));

            var len = re.length;
            var str = '';
            for(var i =0;i < len;i++){
            	str += '<tr>'
                      +'<td>'+re[i]._id+'</td>'
					  +'<td>'+re[i].title+'</td>'
                	  +'<td>'+re[i].content+'</td>'
                	  +'<td>'+re[i].author+'</td>'
                	  +'<td>'+re[i].time+'</td>'
               		  + '<td>'
              		  + '<button class="btn btn-primary">编辑</button>'
					  +'<button class="btn btn-danger" myId = "'+re[i]._id+'">删除</button>'
                      +'</td>'
                      +'</tr>'
			}
			$('.tB').html(str);
		},
		error:function(err){
			console.log(JSON.stringify(err));
		}
	})
})
//修改提交数据
$('#blogEdit .btn-primary').on('click',function () {
	$.ajax({
		type:'post',
		url:'/submit',
		dataType:'json',
		data:{
            'title':$('#blogEdit input').eq(0).val(),
            'author':$('#blogEdit input').eq(1).val(),
            'time':$('#blogEdit input').eq(2).val(),
            'content':$('#blogEdit textarea').val()
		},
		success:function (re) {
			if(re.amgee=='修改成功'){
				alert('修改成功');
			}
        },
		error:function (err) {
            console.log(JSON.stringify(err))

        }
	})
})
