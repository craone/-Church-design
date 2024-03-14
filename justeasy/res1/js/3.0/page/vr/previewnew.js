$(function () {
    setTimeout(showclose, 5000);

    /*by  wcy 图片添加缩放功能*/
    if (is_mobile < 0) {
        $(document).on("mousewheel DOMMouseScroll", ".layui-layer-phimg img", function (e) {
            var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||
                (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));
            var imagep = $(".layui-layer-phimg").parent().parent();
            var image = $(".layui-layer-phimg").parent();
            var h = image.height();
            var w = image.width();
            if (delta > 0) {
                if (h < 2 * (window.innerHeight)) {
                    h = h * 1.05;
                    w = w * 1.05;
                }
            } else if (delta < 0) {
                if (h > 100) {
                    h = h * 0.95;
                    w = w * 0.95;
                }
            }
            image.height(h);
            image.width(w);
            imagep.height(h);
            imagep.width(w);
        });
    }
});

function changeImg2() {
    var $targetObj = $('body .layui-layer-phimg img');
    cat.touchjs.init($targetObj, function (left, top, scale, rotate) {
        $targetObj.css({
            left: left,
            top: top,
            'transform': 'scale(' + scale + ')',
        });
    });
    cat.touchjs.drag($targetObj, function (left, top) {
    });
    cat.touchjs.scale($targetObj, function (scale) {
    });
}

/*自定义执行方法*/
function loadView() {
    if (weixin == 1) {
        wx.config({
            beta: true,
            debug: false,
            appId: wx_share_appId,
            timestamp: wx_share_timestamp,
            nonceStr: wx_share_nonceStr,
            signature: wx_share_signature,
            jsApiList: ['onMenuShareAppMessage', 'onMenuShareWechat', 'onMenuShareTimeline', 'previewImage']
        });
        wx.ready(function () {
            wx.onMenuShareAppMessage({
                title: wx_share_title,
                desc: wx_share_desc.replace('&amp;', '&'),
                link: location.toString(),
                imgUrl: wx_share_imgUrl,
                success: function () {
                },
                cancel: function () {
                }
            });
            wx.onMenuShareWechat({
                title: wx_share_title,
                desc: wx_share_desc.replace('&amp;', '&'),
                link: location.toString(),
                imgUrl: wx_share_imgUrl,
                success: function () {
                },
                cancel: function () {
                }
            });
            wx.onMenuShareTimeline({
                title: wx_share_title,
                link: location.toString(),
                imgUrl: wx_share_imgUrl,
                success: function () {
                },
                cancel: function () {
                }
            });
        });
    } else {
        wx.config({
            appId: wx_share_appId,
            timestamp: wx_share_timestamp,
            nonceStr: wx_share_nonceStr,
            signature: wx_share_signature,
            jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQZone', 'onMenuShareQQ', 'previewImage']
        });
        wx.ready(function () {
            wx.onMenuShareTimeline({
                title: wx_share_title,
                link: location.toString(),
                imgUrl: wx_share_imgUrl
            });
            wx.onMenuShareAppMessage({
                title: wx_share_title,
                desc: wx_share_desc.replace('&amp;', '&'),
                link: location.toString(),
                imgUrl: wx_share_imgUrl
            });
            wx.onMenuShareQZone({
                title: wx_share_title,
                desc: wx_share_desc.replace('&amp;', '&'),
                link: location.toString(),
                imgUrl: wx_share_imgUrl
            });
            wx.onMenuShareQQ({
                title: wx_share_title,
                desc: wx_share_desc.replace('&amp;', '&'),
                link: location.toString(),
                imgUrl: wx_share_imgUrl
            });
        });
    }

    /*作品是否下架*/
    if (is_offline_pano == 1 && $("#save_theft_tips").css('display') == 'none') {
        layer.open({
            type: 1,
            title: '下架提醒',
            content: $("#save_theft_tips"),
            area: ['560px', '300px'],
            closeBtn: false,
            shadeClose: false,
            shade: 1,
        });
        removepano("krpanoSWFObject");
        $('#tab-shuffling').remove();
        $('title').text("该作品涉嫌违规，已强制停止访问");
        return false;
    }
    setTimeout(function () {
        krpano.set("layer[viewnum].html", vr_view_num);
    }, 800);
    krpano.set("layer[skin_control_bar].visible", false);
    if (app_referer == 1) {
        krpano.set("layer[logcontainer].x", 30);
    }
    if (app_referer == 2) {
        krpano.set("layer[logcontainer].visible", false);
    }
    if (isbigscreen == 1) {
        krpano.set("layer[logcontainer].y", 40);
        krpano.set("layer[mapcontainer].y", 40);
    }
    if (is_mobile > 0 && isbigscreen != 1) {
        krpano.set("layer[logcontainer].y", 20);
    }
    /*vip过期还原logo水印*/
    if (has_expired == 1) {
        krpano.set("layer[jelogo].visible", true);
        krpano.set("layer[jelogo].url", vr_water_origin);
    }

    krpano.set("layer[skin_layer].y", -120);
    krpano.set("layer[skin_scroll_window].y", 0);

    /*设置开场广告*/
    $("#bodyclass").hide();
    $("body").css('background-color', '');

    if (is_mobile > 0) {
        $('#panoMoblie').attr('style', 'display:flex;');
        $('#pano-wrapper').remove();
        $('#yuyue').remove();
    } else {
        $('#panoMoblie').remove();
        $('#pano-wrapper').attr('style', 'display:block;');
        $('#mobile_yuyue').remove();
    }

    /*头部滚动广告*/
    if (advertStatus > 0) {
        $(".top-advert").show();
        $("#container").Toproll({speed: .5});
    }

    let skin_x = krpano.get("layer[skin_btn_vr].x");
    let skin_y = Math.abs(krpano.get("layer[skin_layer].y"));

    if (!navigator.userAgent.match(/ipad/i)) {
        $(".pano-revision-moblie").removeClass("pano-revision-ipad");
        var _shin_btn_fs = krpano.get("layer[skin_btn_fs].align");
        if (_shin_btn_fs == 'rightbottom') {
            $(".pano-revision-moblie .fixed-design").css({
                "right": `${skin_x - 4}px`,
                "left": 'none',
                "bottom": `${skin_y + 305}px`
            });
        } else {
            $(".pano-revision-moblie .fixed-design").css({
                "left": `${skin_x}px`,
                "bottom": `${skin_y + 305}px`,
                "right": 'none',
            });
        }
        $(".pano-revision-moblie").removeClass("none-revision");
    } else {
        $(".pano-revision-moblie").addClass("pano-revision-ipad");
        $(".pano-revision-moblie .fixed-design").css({
            "right": `${skin_x - 2}px`,
            "left": 'none',
            "bottom": `${skin_y + 380}px`
        });
        $(".pano-revision-moblie .fixed-design i").css({
            "width": `33px`,
            "height": '33px',
        });
        $(".pano-revision-moblie").removeClass("none-revision");
    }

    checkOrient();

    if (vr_isWxAndroid == 1) {
        _SessionStoragejson = localStorage.getItem('SessionStoragejson');
        var jsonEntity = JSON.parse(_SessionStoragejson);
        if (jsonEntity._panoId == PANOID) {
            krpano.call("loadscene(" + jsonEntity._sceneName + ",null,MERGE,BLEND(0.8));");
            krpano.call("skin_view_normal();");
            krpano.set("VIEW.hlookat", jsonEntity._hlookat);
            krpano.set("VIEW.vlookat", jsonEntity._vlookat);
            localStorage.clear();
        }
    }

    /***************微官网图标******************/
    if (vip_auth_micro > 0) {
        $('.p_class_micro_icon').hide();
    }

    /***************顶部滚动广告******************/
    if (vip_auth_TopAdvert > 0) {
        $(".top-advert").hide();
        for (var i in krpano.get("hotspot").getArray()) {
            if (krpano.get("hotspot").getArray()[i].name.indexOf('nadirlogo') >= 0) {
                krpano.call("delhotspot(" + krpano.get("hotspot").getArray()[i].name + ")");
            }
        }
    }

    /***************作品logo水印******************/
    if (vip_auth_watermark > 0) {
        krpano.set("layer[jelogo].visible", true);
        krpano.set("layer[jelogo].url", vip_auth_watermark_origin);
    }
    //作品logo
    if (!vip_auth_logo) {
        krpano.set('layer[avatar_1].width', 0);
        krpano.set('layer[author].x', 20);
        krpano.set('layer[iconview].x', 20);
        krpano.set('layer[viewnum].x', 40);
    }
}

/*自动弹出场景预览图*/
if (vr_model_group != 0 && pano_setting_showthumbs == 'true' && is_offline_pano != 1) {
    if (bodyclass == 'body-class') {
        setTimeout(function () {
            $('#tab-shuffling').removeClass('visibility');
        }, 5000);
    } else {
        setTimeout(function () {
            $('#tab-shuffling').removeClass('visibility');
        }, 1000);
    }
}

/*全景点击场景切换回调方法 场景切换执行的函数 执行完成并点击分组tab*/
function clickvrgroup(id) {
    if (vr_model_group != 0) {
        let _id = $('.vr-pano2sceneid-' + id).attr('data-groupid');
        let _index = $('.vr-pano2sceneid-' + id).attr('data-index');
        let _groupindex = $('.nav-tab-groupid-' + id).attr('data-index');
        $('.nav-tab-groupid-' + _id).click();
        $('.vr-pano2sceneid-' + id).addClass('swiper-slide-active swiper-slide-thumb-active').siblings('.swiper-slide').removeClass('swiper-slide-active swiper-slide-thumb-active');
        tag_index = $('.vr-pano2sceneid-' + id).attr('data-index');
        galleryThumbs.slideTo(_index);
        galleryTop.slideTo(_groupindex);
        initAudioHotspot();
    }
}

/**无户型图时 每次加载场景执行**/
function onloadscenerun() {
    initAudioHotspot();
}

/**有户型图时 每次操作场景是执行**/
function sandTargetToSandid(sceneid) {
    initAudioHotspot();
    removeSandboxsandspotAll();
    /*当前展开的sceneid*/
    if (_sandTargetToSandid[sceneid]) {
        /*获取当前户型图ID*/
        var _sanid = _sandTargetToSandid[sceneid];
        /*处理户型图背景展示信息*/
        krpano.set("layer[mapcontainer].visible", true);
        krpano.set("layer[sandbox].url", _sandTargetToSandInfoList['spot' + _sanid].pic);
        krpano.set("layer[sandbox].onclick", 'js(opensand(' + _sandTargetToSandInfoList['spot' + _sanid].pic + '))');
        krpano.call("set(layer[activespot].visible, false);");
        /*处理户型图背景展示信息*/
        /*左边标识的展示*/
        loadSandBoxIcon(_sandTargetToSandInfoList['spot' + _sanid].type, krpano.get("layer[mapcontainer].width"));
         // console.log(krpano.get("layer[mapcontainer].width"));
         // console.log(window.innerWidth);
         var winwidth=window.innerWidth
         var winwidthratio=1;
        /*添加户型图上的热点*/
        if (_sandTargetToSandList['spot' + _sanid]) {
            $.each(_sandTargetToSandList['spot' + _sanid], function (i, v) {
                if(winwidth < 800){
                    winwidthratio=0.5;
                }else if(winwidth < 1200){
                    winwidthratio=0.8;
                }else if(winwidth < 1366){
                    winwidthratio=0.85;
                }else if(winwidth < 1440){
                    winwidthratio=0.95;
                }
                krpano.call("addsandboxhotspotnew(sandspot" + v.target + "," + v.x*winwidthratio + "," + v.y*winwidthratio + "," + v.target + "," + v.isopen + ")");
            });
        }
        /* 操作选中的场景*/
        loadSandBoxSpotActive(_sandTargetToSandList['spot' + _sanid]);
        /*对户型图进行适配*/
        krpano.call("resizemap();");
        /*默认关闭户型图*/
        if (_sandTargetToSandInfoList['spot' + _sanid].is_open == '2') {
            var _sandBoxmapsonoff = krpano.get("layer[mapsonoff].onoroff");
            if (parseInt(_sandBoxmapsonoff) == 1) {
                krpano.call("swapmaps();");
            }
        } else {
            var _sandBoxmapsonoff = krpano.get("layer[mapsonoff].onoroff");
            if (parseInt(_sandBoxmapsonoff) != 1) {
                krpano.call("swapmaps();");
            }
        }
    } else {
        krpano.set("layer[mapcontainer].visible", false);
    }
}

/*** 户型图热点选中状态 ***/
function loadSandBoxSpotActive(spotlist) {
    var currScene = krpano.get("xml.scene");
    if (currScene == null) return null;
    var _SandBoxCurrSceneActive = currScene.replace("scene_", "");
    var winwidth=window.innerWidth;
    var winwidthratio=1;
    $.each(spotlist, function (i, v) {
        if(winwidth < 800){
            winwidthratio=0.5;
        }else if(winwidth < 1200){
            winwidthratio=0.8;
        }else if(winwidth < 1366){
            winwidthratio=0.85;
        }else if(winwidth < 1440){
            winwidthratio=0.95;
        }
        if (v.target == _SandBoxCurrSceneActive) {
            krpano.set("layer[activespot].x", v.x*winwidthratio);
            krpano.set("layer[activespot].y", v.y*winwidthratio);
            krpano.set("layer[activespot].visible", true);
        }
    });
}

/**** 点击户型图热点 切换场景 ****/
function sandboxswitchspot(id, isopen) {
    if (id) {
        /**在多分组的情况下**/
        if (vr_model_group != 0) {
            clickvrgroup(id);
        }
        /**如果户型图是默认关闭的 那么点击热点时需要展开**/
        if (isopen == 2) {
            krpano.call("loadscene(scene_" + id + ",null,MERGE,BLEND(0.8));swapmaps();");
        } else {
            krpano.call("loadscene(scene_" + id + ",null,MERGE,BLEND(0.8));");
        }
    }
}

/*展示户型图左边的图片*/
function loadSandBoxIcon(type, width) {
    var _sandboxleft, _sandboxright, _sandbox_flag;
    switch (type) {
        case '2':
            _sandbox_flag = 'sp';
            break;
        case '3':
            _sandbox_flag = 'fs';
            break;
        case '4':
            _sandbox_flag = 'pm';
            break;
        default:
            _sandbox_flag = 'hx';
    }
    _sandboxleft = vr_site_res1_url + 'vr16/skin/' + _sandbox_flag + '-l' + (_sandBoxisLanguage == 2 ? '-en' : '') + '.png';
    _sandboxright = vr_site_res1_url + 'vr16/skin/' + _sandbox_flag + '-r' + (_sandBoxisLanguage == 2 ? '-en' : '') + '.png';
    krpano.set("layer[mapsonoff].x", (parseInt(width)));
    krpano.set("layer[mapsonoff].url", _sandboxright);
    krpano.set("layer[mapsonoff].picon", _sandboxright);
    krpano.set("layer[mapsonoff].picoff", _sandboxleft);
}

/*删除户型图标记点*/
function removeSandboxsandspotAll() {
    var _sandbox_scene_count = krpano.get("scene.count");
    var _sandbox_scene_id;
    if (_sandbox_scene_count) {
        for (i = 0; i < _sandbox_scene_count; i++) {
            _sandbox_scene_id = krpano.get("scene[" + i + "].id");
            krpano.call("removelayer(sandspot" + _sandbox_scene_id + ");");
        }
    }
    return true;
}

/*点击热点*/
function showBox(id, type) {
    initAudioHotspot();
    $.ajax({
        url: '/Church-Design/justeasy/vr/hotspotinfonew',
        type: 'get',
        dataType: 'jsonp',
        data: {
            id: id,
            last_update_time: last_update_time
        }
    }).done(function (data) {
        if (data && data.status == 200) {
            var info = data.list;
            if (type == 5) {
                layer.photos({
                    photos: info.photos,
                    closeBtn: 1,
                    shade: 0.8,
                    success: function (layero, index) {
                        // if (uid && (uid == 849990 || uid == 1345914 || uid == 833908 || uid == 1190071)) {
                        //     $('.layui-layer-phimg').before("<div style='position: absolute; z-index: 3002; overflow: hidden; opacity: 1; pointer-events: auto; background: none; width: 100%; height: 1000px;'></div>");
                        // }
                        /*禁止图片右击保存*/
                        $(".layui-layer-phimg img").on("contextmenu", function () {
                            return false;
                        });
                        /*changeImg2();*/
                        setTimeout(changeImg2, 500);
                    },
                    tab: function (pic, layero) {
                        /*changeImg2();*/
                        setTimeout(changeImg2, 500);
                    },
                    end: function () {
                        layer.closeAll();
                        cat.touchjs.scaleVal=1;
                        cat.touchjs.left=0;
                        cat.touchjs.top=0;

                    }
                });
            } else {
                if (type == 4 || type == 6) {
                    let _showBoxType = 1;
                    let _showBoxArea = ['746px', '423px'];
                    if (type == 6) {
                        _showBoxType = 2;
                        _showBoxArea = ['650px', '600px'];
                    }
                    if (is_mobile > 0) {
                        _showBoxArea = ['90%', 'auto'];
                        var ua = navigator.userAgent.toLowerCase();
                        if (/ipad/i.test(ua)) {
                            _showBoxArea = ['746px', '423px'];
                        }
                        if (type == 6) {
                            _showBoxArea = ['90%', '423px'];
                        }
                    }
                    layer.open({
                        type: _showBoxType,
                        title: false,
                        area: _showBoxArea,
                        shade: [0.8, '#393D49'],
                        content: info.target,
                        success: function () {
                            onPause();
                        },
                        end: function () {
                            onResume();
                        }
                    });
                } else {
                    layer.msg(info.target, {
                        time: 0,
                        area: ["480px", "auto"],
                        closeBtn: true
                    });
                }
            }
        }
    }).fail(function () {
        layer.msg("网络错误！");
    });
}

$(document).on("click", ".layui-layer-close2", function () {
    krpano.call("resumesound(bgsnd);");
});

if (navigator.userAgent.match(/mobile/i)) {
    $(".tel").remove();
}

/*滑动显示图标上的提示*/
$(document).on('mouseenter', '#pano-wrapper li', function () {
    $(".none", this).show();
});
$(document).on('mouseleave', '#pano-wrapper li', function () {
    $(".none", this).hide();
});

/*关闭滚动广告*/
$(document).on('click', '.top-advert .top-close', function (event) {
    $(".top-advert").hide();
});

/*** 点赞 ***/
$(document).on('click', '#btn_like', function (event) {
    event.preventDefault();
    var liked = $(this).attr('data-val');
    if (liked == '-sel') {
        layer.msg("赞过啦 :)", {
            time: 1000
        });
        return false;
    }
    var pano_like = getCookie('pano_like');
    var uv_code = getCookie('vr_vip_statis_uv');
    $.ajax({
        url: vr_site_url + 'likepanonew/' + PANOID,
        type: 'get',
        dataType: 'jsonp',
        data: {
            author: uid,
            vip: vr_is_vip,
            pano_like: pano_like,
            uv_code: uv_code
        }
    }).done(function (data) {
        if (data && data.status == 200) {
            $("#btn_like").attr('data-val', '-sel');
            var num = parseInt($("#like_num").text());
            $("#like_num").text(num + 1);
            if (is_mobile > 0) {
                $(".icon-revision i.item-icon-like").css("background-image", "url(" + vr_site_res1_url + "images/vr-revision/zan-sel-moblie.png)");
            } else {
                $(".icon-revision i.item-icon-like").css("background-image", "url(" + vr_site_res1_url + "images/vr-revision/zan-sel.png)");
            }
            setCookie('pano_like', data.list.pano_like, 365);
            if (data.list.uv_code != -1) {
                setCookie('vr_vip_statis_uv', data.list.uv_code, 1);
            }
        }
        layer.msg(data.msg, {
            time: 1000
        });
    })
});

$(document).on('click', '.share', function () {
    if($("#pano_preview_compare").is(":visible")){
        var sceneid = $('.swiper-wrapper .swiper-slide-thumb-active').attr('data-pano2sceneid');
        $.ajax({
            url: vr_site_url + "Pano/Index/share_compare",
            type: 'post',
            dataType: 'json',
            data: {
                id: sceneid,
            },
        }).done(function (data) {
            if (data.status == 200) {
                $('.share_compare').show();
                $("#share_compare_img").html('');
                jQuery('#share_compare_img').qrcode({
                    render: "canvas",
                    text: data.url,
                    width: "100",           //二维码的宽度
                    height: "100",          //二维码的高度
                    background: "#ffffff",  //二维码的后景色
                    foreground: "#000000",  //二维码的前景色
                });
            } else {
                layer.msg(data.msg)
            }
        }).fail(function () {
            layer.msg("网络出错！")
        });

    } else {
        shareTop();

        $.ajax({
            url: vr_site_url + "Pano/Index/set_work_share",
            type: 'post',
            dataType: 'json',
            data: {
                id: PANOID,
            },
        }).done(function (data) {

        }).fail(function () {

        });

    }

});
var whiteUrl = '';
/*二维码背景*/
function getCanvasWhite() {
    var cw=document.getElementById('canvasWhite');
    var ctw=cw.getContext('2d');
    ctw.fillStyle='#FFFFFF';
    ctw.fillRect(0,0,83,83);
    ctw.restore();
    whiteUrl = cw.toDataURL('image/png');
}
function shareTop() {
    $("#canvas_img").html('');
    var c=document.getElementById("myCanvas");
    getCanvasInfoData();
}
function canvasPop(tit,userName){
    layer.open({
        title:false,
        closeBtn:'1',
        type: 1,
        content: $("#canvasPop"),
        area: ['1062px', '680px'],
        skin: "canvas-skin",
        shade: .5,
        success:function(){
            getCanvas(tit,userName);
        },
        shadeClose:0,
    });
}
/*绘制canvas图片*/
var radio=2;
function getCanvas(txt1,txt2){
    var c=document.getElementById("myCanvas");
    var ctx=c.getContext("2d");
    var imageData = ctx.getImageData(0, 0, c.width*2, c.height*2);
    for(var i = 0; i < imageData.data.length; i += 4) {
        /* 当该像素是透明的,则设置成白色 */
        if(imageData.data[i + 3] == 0) {
            imageData.data[i] = 255;
            imageData.data[i + 1] = 255;
            imageData.data[i + 2] = 255;
            imageData.data[i + 3] = 255;
        }
    }
    ctx.putImageData(imageData, 0, 0);
    ctx.font="normal bold 48px Arial";
    ctx .fillStyle="#333333FF";
    ctx.textAlign="center";
    ctx.fillText(txt1,190*radio,50*2);
    /*绘制直线*/
    ctx.moveTo(68*2, 90*2);
    ctx.lineTo(102*2, 90*2);
    ctx.strokeStyle = "#333333";
    ctx.lineWidth = "1";
    ctx.moveTo(278*2, 90*2);
    ctx.lineTo(312*2, 90*2);
    ctx.strokeStyle = "#333333";
    ctx.lineWidth = "1";
    ctx.stroke();

    /*绘制个人头像*/
    var img=document.getElementById("canvas_user");
    circleImg(ctx, img, 120*2, 76*2, 13*2);
    $('#canvas_user').attr('src',c.toDataURL('image/png'));
    /*个人昵称*/
    ctx.font="28px Arial";
    ctx.textAlign="start";
    ctx .fillStyle="#333333";
    ctx.fillText(txt2,160*2,94*2);
    /* 绘制案例 */
    var img1=document.getElementById("canvas_case_pic");
    roundRect(ctx, img1, 20*2, 123*2, 340*2, 230*2, 10*2);
    $('#canvas_case_pic').attr('src',c.toDataURL('image/png'));
    /* 绘制二维码 */
    var img4=document.getElementById("canvas_code_white");
    ctx.drawImage(img4,268*2,328*2,87*2,87*2);
    var img2=document.getElementById("canvas_code");
    ctx.drawImage(img2,270*2,330*2,83*2,83*2);
    $('#canvas_code').attr('src',c.toDataURL('image/png'));
    ctx.textAlign="end";
    ctx.font="24px Arial";
    ctx .fillStyle="#999999FF";
    ctx.fillText("查看VR效果",343*2,428*2);

    var img3=document.getElementById("canvas_logo");
    ctx.drawImage(img3,20*2,387*2,126*2,43*2);
    $('#canvas_logo').attr('src',c.toDataURL('image/png'));
    /* 绘制canvas图片结束 */
    c.toDataURL('image/png')
}
/*绘制个人头像圆*/
function circleImg(ctx, img, x, y, r) {
    ctx.save();
    var d =2 * r;
    var cx = x + r;
    var cy = y + r;
    ctx.arc(cx, cy, r, 0, 2 * Math.PI);
    ctx.clip();
    ctx.drawImage(img, x, y, d, d);
    ctx.restore();
}
/*绘制矩形图片圆角*/
function roundRect(ctx, img, x, y, w, h, r) {
    if (w < 2 * r) r = w / 2;
    if (h < 2 * r) r = h / 2;
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, 0);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, 0);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
    ctx.strokeStyle = '#FFFFFF';
    ctx.stroke();
    ctx. save();
    ctx.clip();
    ctx.drawImage(img, x, y, w, h);
    ctx.restore();
}
/*复制*/
var clipboard = new ClipboardJS('#canvas_copy');
clipboard.on('success', function(e) {
    layer.msg("您已成功复制作品链接地址，快去粘贴分享吧");
    e.clearSelection();
});
function shareC() {
    if (is_vip) {
        layer.msg("手机识别图中二维码，即可快速转发分享哦");
    } else {
        layer.msg("手机识别图中二维码，即可快速转发分享哦");
    }
}

/*生成二维码*/
$('#shareimg').qrcode({
    render: 'canvas',
    ecLevel: 'H',
    size: 180,
    radius: 0.5,
    width: 180,
    height: 180,
    background: '#ffffff',
    text: shareUrl
});

function showclose() {
    $(".top-advert .top-close").show();
}

function adverturl() {
    window.open(vr_adv_url);
    return false;
}

function playsound() {
    var status = krpano.get("layer[skin_btn_sound].data");
    if (status == 1 || status == null) {
        document.getElementById('mp3').pause();
        krpano.set("layer[skin_btn_sound].url", "/Church-Design/justeasy/res1/vr16/skin/music-new-no.png");
        krpano.set("layer[skin_btn_sound].data", 0);
        $('#pano-right .music_play').addClass('active');
        $('#pano-right-mobile .music_play').addClass('active');
    } else {
        document.getElementById('mp3').play();
        krpano.set("layer[skin_btn_sound].url", "/Church-Design/justeasy/res1/vr16/skin/music-new.png");
        krpano.set("layer[skin_btn_sound].data", 1);
        $('#pano-right .music_play').removeClass('active');
        $('#pano-right-mobile .music_play').removeClass('active');
        initAudioHotspot();
    }
}

/*切换场景等操作 初始化上一个播放音频的状态*/
function initAudioHotspot() {
    if (audioHotSpotActiveId > 0) {
        var _hotspotmp3_status = $('#HotspotAudio' + audioHotSpotActiveId).attr('status');
        if (_hotspotmp3_status == 'play') {
            document.getElementById('HotspotAudio' + audioHotSpotActiveId).pause();
            $('#HotspotAudio' + audioHotSpotActiveId).attr('status', 'pause');
            krpano.set("hotspot[hotspotname" + audioHotSpotActiveId + "].html", krpano.get("hotspot[hotspotname" + audioHotSpotActiveId + "].htmlbak"));
        }
    }
}

/* 暂停音乐 */
function onPause() {
    if (music > 0) {
        document.getElementById('mp3').pause();
        krpano.set("layer[skin_btn_sound].url", "/Church-Design/justeasy/res1/vr16/skin/music-new-no.png");
        krpano.set("layer[skin_btn_sound].data", 0);
    }
}

/* 播放音乐 */
function onResume() {
    if (music > 0) {
        document.getElementById('mp3').play();
        krpano.set("layer[skin_btn_sound].url", "/Church-Design/justeasy/res1/vr16/skin/music-new.png");
        krpano.set("layer[skin_btn_sound].data", 1);
    }
}

/**播放音频热点**/
function hotspotAudio(mp3, id) {
    $('.HotspotAudio').load();
    $('#adoMusic').load();
    if (audioHotSpotActiveId > 0) {
        krpano.set("hotspot[hotspotname" + audioHotSpotActiveId + "].html", krpano.get("hotspot[hotspotname" + audioHotSpotActiveId + "].htmlbak"));
    }
    var _docmp3 = $('#HotspotAudio' + id).attr('src');
    if (!_docmp3) {
        $('body').prepend('<audio class="HotspotAudio" id="HotspotAudio' + id + '" src="' + mp3 + '" status="play" style="display: none;"></audio>');
        document.getElementById('HotspotAudio' + id).play();
        onPause();
        audioHotSpotActiveId = id;
        krpano.set("hotspot[hotspotname" + id + "].html", '播放中...');
    } else {
        var _hotspotmp3_status = $('#HotspotAudio' + id).attr('status');
        if (_hotspotmp3_status == 'play') {
            document.getElementById('HotspotAudio' + id).pause();
            $('#HotspotAudio' + id).attr('status', 'pause');
            krpano.set("hotspot[hotspotname" + id + "].html", krpano.get("hotspot[hotspotname" + id + "].htmlbak"));
            onResume();
        } else {
            $('#HotspotAudio' + id).attr('status', 'play');
            document.getElementById('HotspotAudio' + id).play();
            onPause();
            krpano.set("hotspot[hotspotname" + id + "].html", '播放中...');
        }
    }
}

/* 全景编辑点击热点超链接地址 */
function openHyperlink(url) {
    initAudioHotspot();
    if (app == 'android') {
        android.vrLookDetail(url);
    } else if (app == 'ios') {
        var data = {
            url: url
        };
        window.webkit.messageHandlers.vrLookDetail.postMessage(data);
    } else {
        if (vr_isWxAndroid == 1) {
            var SessionStoragejson = {
                _panoId: PANOID,
                _sceneName: krpano.get("scene[get(xml.scene)].name"),
                _hlookat: krpano.get("VIEW.hlookat"),
                _vlookat: krpano.get("VIEW.vlookat"),
            };
            localStorage.setItem('SessionStoragejson', JSON.stringify(SessionStoragejson));
        }
        window.open(url);
    }
}

/**** 地图 ****/
function getMap() {
    var area = ['740px', '517px'];
    if (is_mobile > 0) {
        area = ['90%', '350px'];
    }
    layer.open({
        type: 2,
        title: 'Ta的地图足迹',
        closeBtn: 1,
        area: area,
        shadeClose: true,
        skin: 'layui-tip-revision',
        content: vr_site_url + "pano/index/maps.php?panoid=" + PANOID + '&lat=' + lat + '&lng=' + lng,
    });
}

/**** 在线预约 ****/
function getmake() {
    var area = ['580px', '430px'];
    if (is_mobile > 0) {
        area = ['90%', '400px'];
    }
    layer.open({
        title: "在线预约",
        area: area,
        type: 1,
        content: $('.pano-make'),
        end: function () {
            $('#yy_name').val('');
            $('#yy_phone').val('');
            $('#yy_des').val('');
        }
    });
}

/**** 设计说明 ****/
function getintro() {
    var area = ['580px', '480px'];
    if (is_mobile > 0) {
        area = ['90%', '400px'];
    }
    layer.open({
        title: intro,
        area: area,
        type: 1,
        content: $('#des_intro')
    });
}

/*横竖屏*/
window.addEventListener('load', function () {
    checkOrient();
    window.onorientationchange = checkOrient;
}, false);

function checkOrient() {
    if (window.orientation == 90 || window.orientation == -90) {
        /*横屏*/
        if (vr_model_group == 1) {
            krpano.set('layer[skin_layer].y', 0);
        } else {
            krpano.set('layer[skin_layer].y', -65);
            let _height = document.body.clientHeight;
            if (_height >= 375 && _height < 720) {
                krpano.set('layer[skin_btn_vr].y', 110);
                krpano.set('layer[skin_btn_sound].y', 160);
                krpano.set('layer[skin_btn_gyro].y', 210);
            }
            if (_height <= 320) {
                krpano.set('layer[skin_btn_vr].y', 80);
                krpano.set('layer[skin_btn_sound].y', 110);
                krpano.set('layer[skin_btn_gyro].y', 160);
            }
        }
        if (!krpano.get("layer[skin_btn_thumbs].visible")) {
            $('#show_scenes').addClass('show_scenes');
        }
        $('.fixed-design').hide();
    } else {
        krpano.set('layer[skin_layer].y', -120);
        $('#show_scenes').removeClass('show_scenes');
        $('.fixed-design').show();
    }
}

/*自动播放音乐*/
function audioAutoPlay(status) {
    if (music > 0 && status == 1) {
        var audio = document.getElementById('mp3');
        audio.play();
    }
}

document.addEventListener('DOMContentLoaded', function () {
    audioAutoPlay(1);
});
document.addEventListener('WeixinJSBridgeReady', function () {
    audioAutoPlay(1);
}, false);
document.addEventListener('touchstart', function () {
    var status = krpano.get("layer[skin_btn_sound].data");
    audioAutoPlay(status);
}, false);

/*新标签打开微官网*/
function hrefMicro(title, url) {
    if ($("#mp3").length > 0) {
        playsound();
    }
    if (parseInt(versions) > 113) {
        if (app == "android") {
            android.goMicro('1', '', url);
        } else if (app == "ios") {
            window.webkit.messageHandlers.goMicro.postMessage({
                canShare: '1',
                title: '',
                url: url
            });
        } else {
            goMicro(title, url);
        }
    } else {
        goMicro(title, url);
    }
}

function goMicro(title, url) {
    location.href = url;
}

/* 在线预约 begin*/
var yuyue_lock = false;
$(document).on('click', '#sub_yuyue', function () {
    if (yuyue_lock) {
        return false;
    }
    var name = $('#yy_name').val();
    if (name.length < 1) {
        layer.msg('请您输入称呼！');
        $('#yy_name').addClass('border-red');
        return false;
    }
    $('#yy_name').removeClass('border-red');
    var phone = $('#yy_phone').val();
    var phoneReg = /^[1][3,4,5,6,7,8][0-9]{9}$/;
    if (!phoneReg.test(phone)) {
        layer.msg('请您输入正确的联系电话！');
        $('#yy_phone').addClass('border-red');
        return false;
    }
    $('#yy_phone').removeClass('border-red');
    var type = $('#yy_type').val();
    $('#yy_type').removeClass('border-red');
    var des = $('#yy_des').val();
    if (des.length < 10) {
        layer.msg('您输入的描述语过于简短！');
        $('#yy_des').addClass('border-red');
        return false;
    }
    $('#yy_des').removeClass('border-red');
    yuyue_lock = true;
    $.ajax({
        url: vr_site_url + "Pano/Index/yuyue.php",
        type: 'post',
        dataType: 'json',
        data: {
            name: name,
            id: PANOID,
            phone: phone,
            type: type,
            des: des
        },
    }).done(function (data) {
        if (data.status == 200) {
            layer.closeAll();
        }
        layer.msg(data.msg);
        yuyue_lock = false;
    }).fail(function () {
        layer.msg('网络异常！');
        yuyue_lock = false;
    });
});

/* 在线预约 end*/

function jsfullScreen() {
    var isFull = !!(document.webkitIsFullScreen || document.mozFullScreen ||
        document.msFullscreenElement || document.fullscreenElement
    );
    if (isFull == false) {
        var element = document.documentElement;
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        }
        $('#pano-right .screen').addClass('active');
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
        $('#pano-right .screen').removeClass('active');
    }
}

/*顶部滚动*/
(function ($) {
    $.fn.extend({
        Toproll: function (options) {
            var defaults = {
                speed: 50
            };
            var options = $.extend(defaults, options);

            var speed = (document.all) ? options.speed : Math.max(1, options.speed - 1);
            if ($(this) == null) return;
            var $container = $(this);
            var $content = $("#content");
            var init_left = $container.width();
            $content.css({
                left: parseInt(init_left) + "px"
            });
            var This = this;
            var _time = setInterval(function () {
                This.move($container, $content, speed);
            }, 50);
            $container.bind("mouseover", function () {
                clearInterval(_time);
            });

            $container.bind("mouseout", function () {
                _time = setInterval(function () {
                    This.move($container, $content, speed);
                }, 50);
            });
            return this;
        },
        move: function ($container, $content, speed) {
            var container_width = $container.width();
            var content_width = $content.width();
            if (parseInt($content.css("left")) + content_width > 0) {
                $content.css({
                    left: parseInt($content.css("left")) - speed + "px"
                });
            } else {
                $content.css({
                    left: parseInt(container_width) + "px"
                });
            }
        }
    });
})(jQuery);

function opensand(url) {
    let originalUrl = url;
    if (url.indexOf('_thumb') > -1) {
        originalUrl = url.replace('_thumb', '');
    }
    let json = {
        'title': '',
        'id': 1,
        'start': 0,
        'data': [{
            'alt': '',
            'pid': 1,
            'src': originalUrl,
            'thumb': url
        }]
    };
    layer.photos({
        photos: json
    });
}

var material_index;

function showMaterial(id) {
    $.ajax({
        url: '/Church-Design/justeasy/vr/hotspotinfonew',
        type: 'get',
        dataType: 'jsonp',
        data: {
            id: id,
            last_update_time: last_update_time
        },
        success: function (data) {
            if (data && data.status == 200) {
                var sceneid = krpano.get("xml.scene").split("_")[1];
                var info = data.list;
                var target = info.target;
                var imgarr = target.split(",");
                var arr = {
                    id: 0,
                    list: []
                };
                $.each(imgarr, function (k, v) {
                    if (k == 0) {
                        arr.id = v;
                    } else {
                        var items = v.split("|");
                        var active = items[2] == sceneid ? '' : 'none';
                        arr.list.push({
                            id: items[2],
                            name: items[1],
                            pic: items[0],
                            active: active
                        });
                    }
                });
                var _content = template('material-view', arr);
                material_index = layer.open({
                    type: 1,
                    title: 0,
                    shade: 0.7,
                    area: ["auto", "auto"],
                    shadeClose: true,
                    content: _content,
                    skin: 'layui-material'
                });
            }
        },
        error: function () {
            layer.msg("网络错误！");
        }
    })
}

function joinscene(id) {
    layer.close(material_index);
    var h = krpano.get("VIEW.hlookat");
    var v = krpano.get("VIEW.vlookat");
    var fov = krpano.get("VIEW.fov");
    krpano.call("loadscene(get(scene[scene_" + id + "].name),null,MERGE,OPENBLEND(0.5, 0.0, 0.75, 0, linear))");
    krpano.set("VIEW.hlookat", h);
    krpano.set("VIEW.vlookat", v);
    krpano.set("VIEW.fov", fov);
}

//分屏按钮
function compare_vr() {
    $('#pano').hide();

    var id = $('.swiper-wrapper .swiper-slide-thumb-active').attr('data-pano2sceneid');

    embedpano({
        id: "krpanoCompareViewObject",
        swf: "/Church-Design/justeasy/res1/vr-public/vr2023/tour.swf",
        xml: "/Church-Design/justeasy/vr/pano/index/share_compare_xml/id/"+id+".php",
        target: "pano_preview_compare",
        html5: "prefer",
        mobilescale: 1.0,
        passQueryParameters: true,
        wmode: "opaque",
        webgl:"auto"
    });

    $('#btn_like').hide();
    $('#like_num').hide();
    $('.vip_map').hide();
    $('.fixed-design').hide();
    $('#pano_preview_compare').show();
    $('.vr-preview-icon-right').hide();
    if (is_mobile > 0) {
        krpano.call('top_bottom(set)');
        layer.msg('点击【分屏按钮】退出分屏');
    } else {
        krpano.call('side_by_side(set)');
        layer.msg('按 ESC 即可退出分屏模式');
    }

    setTimeout(function () {
        var krpano_conpare = document.getElementById("krpanoCompareViewObject");
        krpano_conpare.set("layer[exit_compare].visible", true);
    },1000);

}


//按 ESC 即可退出分屏模式
$(document).on('keydown', function(e) {
    if (e.which === 27) {
        exit_compare();
    }
});

//退出分屏
function exit_compare() {
    $('.vip_map').show();
    $('#btn_like').show();
    $('#like_num').show();
    $('#pano').show();
    $('#pano_preview_compare').hide();
    $('#pano-wrapper').show();
    $('.share_compare').hide();
    $('.fixed-design').show();
    $('.vr-preview-icon-right').show();
    removepano("pano_preview_compare");
}