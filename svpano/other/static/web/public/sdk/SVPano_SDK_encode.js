var svpano = '';
var SDK_SVPano = {
    'data': [], 'panoId': "krpano", 'PointData': "", 'SDK_Receive_Data': "", initializtionPano: function (data) {
        embedpano({
            swf: data['swf'],
            xml: data['xml'],
            target: data['div_id'],
            html5: data['html5'],
            wmode: data['wmode'],
            id: this.panoId,
            initvars: {
                Data_Path: data['Data_Path'],
                mypath: data['mypath'],
                Pano_Path: data['Pano_Path'],
                Plugin_Path: data['Plugin_Path'],
                Edit_Path: data['Edit_Path'],
                praise: data['praise'],
                user_title: data['title'],
                user_tel: data['tel'],
                user_add: data['address'],
                works: data['works']
            },
            mobilescale: 0.5,
            passQueryParameters: true
        });
        svpano = eval(this.panoId);
        console.log(data)
    }, AddHot: function (data) {
        console.log(data);
        svpano.call("addhotspot(" + data['name'] + ");set(hotspot[" + data['name'] + "].onloaded,svrvrtxt(););set(hotspot[" + data['name'] + "].wz," + data['position'] + ");set(hotspot[" + data['name'] + "].html," + data['title'] + ");set(hotspot[" + data['name'] + "].ath," + data['ath'] + ");set(hotspot[" + data['name'] + "].atv," + data['atv'] + ");set(hotspot[" + data['name'] + "].js," + data['js'] + ");set(hotspot[" + data['name'] + "].url," + data['img'] + ");");
        svpano.call("looktohotspot(" + data['name'] + ",get(view.fov));")
    }, DelHot: function (data) {
        svpano.call("removehotspot(" + data + ");")
    }, ObtainHot: function (data) {
        svpano.call("SV_SDK(SDK_Hot_Property," + data + ");")
    }, AllHot: function () {
        svpano.call("SV_SDK(SDK_Hot_Property,all);")
    }, get: function (x) {
        return svpano.get(x)
    }, set: function (x, y) {
        svpano.set(x, y)
    }, skin_Setting: function (x) {
        if (x == true) {
            svpano.call("skin_fullscreen_btn(out);")
        } else {
            svpano.call("skin_fullscreen_btn(enter);")
        }
    }, skin_fullscreen: function (x) {
        if (x == true) {
            svpano.call("set(fullscreen,true);")
        } else {
            svpano.call("set(fullscreen,false);")
        }
    }, timeStamp: function () {
        var timestamp = Date.parse(new Date());
        timestamp = timestamp / 1000;
        krpano.set("timestamp", timestamp)
    }
}
