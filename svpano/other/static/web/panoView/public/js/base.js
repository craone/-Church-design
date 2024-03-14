$(".passView").click(function(){
    var pass = $(".password").val();
    var quanjingid = $("input[name='quanjingid']").val();
    if(pass){
        $.post("?a=pass",{'pass':pass,'quanjingid':quanjingid},function(data){
            var result = eval("("+data+")");
            if(result['status'] == 'ok'){
                //SDK_SVPano.panoId = 'svpano';
                //SDK_SVPano.initializtionPano(panodata);
                //var svpano = document.getElementById("krpanoSWFObject");
                $(".pass").fadeOut();
                //$.getScript("http://cdn.pano.svrvr.com/other/static/web/panoView/wap/js/wapview.js");
                //$.getScript("http://cdn.pano.svrvr.com/other/static/web/panoView/wap/js/wScratchPad.js");
                //$.getScript("http://cdn.pano.svrvr.com/other/static/web/panoView/wap/js/weichat.js");
            }else{
                $(".tip").html(result['info']);
                setTimeout(function(){
                    $(".tip").html('');
                },6000)
            }
        })
    }else{
        $(".tip").html('请输入密码');
        setTimeout(function(){
            $(".tip").html('');
        },6000)
    }
})