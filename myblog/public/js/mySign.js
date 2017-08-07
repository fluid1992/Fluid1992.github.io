$('#myBtn').on('click',function () {
    // var Email = $('#email').html();
    // var passward = $('#password').html();
    alert(11)
    $.ajax({
        type:"post",
        url:"/save",
        dataType:'json',
        data:{
            Email:$('#email').html(),
            passward:$('#password').html()
        },
        success:function (resultt) {
            console.log(JSON.stringify(result))
        },
        error:function (err) {
            console.log(JSON.stringify(err))
        }
    });
})