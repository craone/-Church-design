window.videoOn = false;
var quanjingid = $("input[name='quanjingid']").val();
var svpano = document.getElementById("svpano");
function AlertiframeForProduct(id){
    var url = 'index.php?c=product&id='+id+'&type=pc';
    getHtml(url);
    closeall();
}
$.post("?a=RecordQuanjing",{'quanjingid':quanjingid,'mb':'0'});
function getHtml(url){
    $('#jx_box').show();
    $.post(url, 'isAjax=1', function(data){
        if(data){
            $('#jx_box_content').html('<div>'+data+'</div>');
            var imgNum=$('#jx_box_content img').length;
            if(imgNum == 0){
                myScroll.refresh();
                myScroll.scrollTo(0, 0);
            } else {
                $('#jx_box_content img').load(function(){
                    if(!--imgNum){
                        myScroll.refresh();
                        myScroll.scrollTo(0, 0);
                    }
                });
            }
        } else {
            $('#jx_box_content').html('<div>暂无内容</div>');
        }
    });
    closeall();
    cover('show');
    return;
}

$(function(){
    $('.jx_box_close').click(function(){
        $('#jx_box').hide();
        console.log(window.videoOn);
        if(window.videoOn){
            svpano.call("yinyue(play);");
            window.videoOn = false;
        }
        cover('hide');
    });
    $("#jx_box_content").click(function(){
        myScroll.refresh();
    })

    /*$.post("//api.svrvr.com/index.php/Api/Data/showSwTip",{'quanjingid':quanjingid},function(data){
        if(data!=='false'){
            $("body").append('<div id="swtip" style="width: 100%;position: absolute;top: 180px;">'+
                                '<div style="width:240px;background: #fff;color: #000;font-size: 13px;font-family: 微软雅黑;line-height: 8px;text-align: center;padding: 5px;box-shadow: 2px 2px 2px #ccc;margin: auto;opacity: 0.9;">'+
                                '<a href="http://www.svrvr.com"><img src="//cdn.thumb.svrvr.com/public/images/logo/logo.png_s"></a>'+
                                '<p>视维云提醒您，该全景服务已经到期</p>'+
                                '<p>续费后自动隐藏，<span style="color: #8e2323;cursor: pointer;" onclick="'+'$(\'#swtip\')'+'.remove()">关闭提示继续浏览</span></p>'+
                              '</div>'+
                            '</div>');
        }
    });*/
});
function boxhide(){
    setTimeout("document.getElementById('box').style.display='none'",600)
}
function boxshow(){
    document.getElementById('box').style.display='block'
}
function productList(){
    svpano.call("listlist(start);");
}
function switchOpen(element){
    if(element.getAttribute("open")=="false"){
        element.setAttribute("open","true");
        $(".txt").html("分享至：");
        $(".text").css({"text-align":'left',"text-indent":'1em'});
    }else{
        element.setAttribute("open","false");
        $(".txt").html("分享");
        $(".text").css({"text-align":'center'});
    }
}

var Hot = {
    svpano:function(x){
        window.open("/index.php?a=quanjingjump&id="+x);
    }
}
function popupTo(info){
    document.getElementById("popupArea").setAttribute("popup",info);
}

function displayit(n){
    for(i=0;i<4;i++){
        if(i==n){
            var id='menu_list'+n;
            if(document.getElementById(id).style.display=='none'){
                document.getElementById(id).style.display='';
                document.getElementById("plug-wrap").style.display='block';
                cover('show');
            }else{
                document.getElementById(id).style.display='none';
                document.getElementById("plug-wrap").style.display='none';
                cover('hide');
            }
        }else{
            if($('#menu_list'+i)){
                $('#menu_list'+i).css('display','none');
            }
        }
    }
}

function gps(data){
    var u = navigator.userAgent;
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    if(isiOS){
        window.location.href=data;
        return;
    }
    window.videoOn = true;
    var height = $(window).height()*1-30;
    svpano.call("yinyue(stop);");
    wapView.getHtml('/?c=index&a=wap_img&id=1');
    setTimeout(function(){

        $("#map").fadeIn(300);
        $("#map").find("iframe").attr("src",data);

    },1200);
};

function cover(x){
    if (x == 'show'){
        svpano.call("cover(show);");
    }else{
        svpano.call("cover(hide);");
    }
}
$(".jx_box_close").click(function(){
    $("#jx_box_content").html("");
})
function comment(x){
    if(x == "add"){
        $.jxbox.tip('请用微信扫描右侧二维码，去说一说吧', 2)
    }

    if(x == "new"){
        var scene = svpano.get("xml.scene");
        $.post("?c=dothing&a=noteList",{scene:scene},function(data){
            var data = eval('(' + data + ')');
            if(!data){
                return;
            }
            $.each(data,function(i,n){
                if(n.time>0){
                    svpano.call("comment(submit," + "n"+n.id + ","+ n.ath +","+ n.atv +","+n.headThumbimgurl+","+ n.time +","+ n.about +");");			//传入用户输入的内容
                }else{
                    svpano.call("comment(submit," + "n"+n.id + ","+ n.ath +","+ n.atv +","+n.headThumbimgurl+","+ n.about +");");			//传入用户输入的内容
                }
            })
        })
    }
}

function closeall(){
    var count = document.getElementById("top_menu").getElementsByTagName("ul").length;
    for(i=0;i<count;i++){
        document.getElementById("top_menu").getElementsByTagName("ul").item(i).style.display='none';
    }
    document.getElementById("plug-wrap").style.display='none';
    cover('hide');

}

setTimeout("$('.loading').fadeOut()",5000);

var wapView = {
    act:function(type,data){
        if(type=='video'){
            this.alertVideo(data);
        }else if(type=='article'){
            this.alertArticle(data);
        }
    },
    alertVideo:function(data){
        window.videoOn = true;
        svpano.call("yinyue(stop);");
        this.getHtml('/?c=index&a=wap_img&id=1');
        setTimeout(function(){
            $("#jx_box_content").html('<iframe height=460 width=98% src="'+data+'" frameborder=0 allowfullscreen></iframe>')
        },1200);
        $("#jx_box_content").css('padding-top','12px');
    },
    alertArticle:function(data){
        this.getHtml('/?c=index&a=wap_img&id='+data);
    },
    getHtml:function(url){
        $('#jx_box').show();
        $('#jx_box_content').html('<div>内容正在载入中，请稍后..</div>');
        $.post(url, 'isAjax=1', function(data){
            if(data){
                var imgId = url.replace('/?c=index&a=wap_img&id=','');
                if(imgId!=='677'){
                    $('#jx_box_content').html('<div>'+data+'</div>');
                }else{
                    $('#jx_box_content').html('<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>');
                    $("body").append('<div id="activityreg" ><br/><br/>'+data+'</div>');
                }
            } else {
                $('#jx_box_content').html('<div>暂无内容</div>');
            };
        });
        return;
    }
}


function AlertiframeForProduct(id){
    var url = 'index.php?c=product&id='+id+'&type=pc';
    getHtml(url);
    closeall();
}
function getHtml(url){
    $('#jx_box').show();
    $.post(url, 'isAjax=1', function(data){
        if(data){
            $('#jx_box_content').html('<div>'+data+'</div>');
            var imgNum=$('#jx_box_content img').length;
            if(imgNum == 0){
                myScroll.refresh();
                myScroll.scrollTo(0, 0);
            } else {
                $('#jx_box_content img').load(function(){
                    if(!--imgNum){
                        myScroll.refresh();
                        myScroll.scrollTo(0, 0);
                    }
                });
            }
        } else {
            $('#jx_box_content').html('<div>暂无内容</div>');
        }
    });
    closeall();
    return;
}

$(function(){
    $('#jx_box_close').click(function(){$('#jx_box').hide();});
});
function boxhide(){
    setTimeout("document.getElementById('box').style.display='none'",600)
    //显示界面功能菜单
}
function boxshow(){
    document.getElementById('box').style.display='block'
    //隐藏界面功能菜单
}
function switchOpen(element){
    if(element.getAttribute("open")=="false"){
        element.setAttribute("open","true");
        $(".txt").html("分享至：");
        $(".text").css({"text-align":'left',"text-indent":'1em'});

    }else{
        element.setAttribute("open","false");
        $(".txt").html("分享");
        $(".text").css({"text-align":'center'});

    }
}

var Hot = {
    svpano:function(x){
        window.open("/index.php?a=quanjingjump&id="+x);
    }
}
function popupTo(info){
    document.getElementById("popupArea").setAttribute("popup",info);
}
function displayit(n)
{
    for(i=0;i<4;i++){
        if(i==n){
            var id='menu_list'+n;
            if(document.getElementById(id).style.display=='none'){
                document.getElementById(id).style.display='';
                document.getElementById("plug-wrap").style.display='block';
            }else{
                document.getElementById(id).style.display='none';
                document.getElementById("plug-wrap").style.display='none';
            }
        }else{
            if($('#menu_list'+i)){
                $('#menu_list'+i).css('display','none');
            }
        }
    }
}
function closeall()
{
    var count = document.getElementById("top_menu").getElementsByTagName("ul").length;
    for(i=0;i<count;i++){
        document.getElementById("top_menu").getElementsByTagName("ul").item(i).style.display='none';
    }
    document.getElementById("plug-wrap").style.display='none';
}