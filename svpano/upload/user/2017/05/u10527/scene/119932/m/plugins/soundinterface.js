
/*
	krpano 1.19-pr8 Sound Interface Plugin (build 2016-09-30)
	http://krpano.com/plugins/soundinterface/
*/
var krpanoplugin = function () {
    function t(a) {
        a = document.visibilityState;
        q(!(!0 === document.hidden || "hidden" == a || "prerender" == a || "unloaded" == a))
    }

    function z(a) {
        var b = a.split("|");
        if (1 < b.length) {
            if (null == f && (f = "", a = document.createElement("audio"), null !== a && void 0 !== a)) if (f += ".wav", void 0 !== a.canPlayType) {
                var c = a.canPlayType("audio/ogg");
                c.match(/maybe|probably/i) && (f += ".ogg", f += ".oga");
                0 == (k.android && k.firefox) && (c = a.canPlayType("audio/mpeg"), c.match(/maybe|probably/i) && (f += ".mp3", f += ".mp2", f += ".mpa"));
                c = a.canPlayType("audio/mp4");
                c.match(/maybe|probably/i) && (f += ".mp4");
                c = a.canPlayType("audio/wav");
                c.match(/maybe|probably/i) && (f += ".wav")
            } else f += ".mp3";
            var c = b.length, e;
            a = null;
            for (e = 0; e < c; e++) {
                var h = ("" + b[e]).toLowerCase(), h = h.slice(h.lastIndexOf("."));
                if (0 < f.indexOf(h)) {
                    a = b[e];
                    break
                }
            }
            null == a && (a = b)
        }
        b = v.rootpath;
        null != b && 0 < b.length && "null" != ("" + b).toLowerCase() ? "/" != b.charAt(b.length - 1) && (b += "/") : b = "";
        return b = unescape(g.parsePath(b + a))
    }

    function A() {
    }

    function n(a) {
        a = document.body;
        try {
            h ? h.paused &&
            !h.ended ? (h.play(), 0 == h.paused && (a.removeEventListener(l, n, !0), h = null)) : (a.removeEventListener(l, n, !0), h = null) : a.removeEventListener(l, n, !0)
        } catch (b) {
            h = null
        }
    }

    function B() {
        var a = arguments;
        if (1 < a.length) {
            var b = ("" + a[0]).toLowerCase(), c = "" + a[1], f = 2 < a.length ? parseInt(a[2]) : 1,
                k = 3 < a.length ? "" + a[3] : null;
            if ("auto" == b || "null" == b || "" == b) b = "autoid_" + g.timertick + "_" + Math.ceil(1E3 * g.random);
            var c = z(c), d = null;
            if (r && w && void 0 !== e[b]) {
                d = e[b];
                try {
                    d.currentTime = 0, d.pause()
                } catch (p) {
                }
                e[b] = null;
                delete e[b];
                d = null
            }
            if (null !=
                d || void 0 !== e[b]) {
                null == d ? d = e[b] : e[b] = d;
                try {
                    d.currentTime = 0, d.pause()
                } catch (q) {
                }
            } else {
                d = document.createElement("audio");
                if (!d) {
                    g.trace(2, "Soundinterface Plugin - HTML5 audio is not supported by this browser!");
                    return
                }
                d.addEventListener("error", function (a) {
                    g.trace(3, "soundinterface - loading of " + c + " failed!");
                    e[b] = null;
                    delete e[b];
                    d = null
                }, !0);
                d.addEventListener("ended", function (a) {
                        try {
                            0 < d.loopcount ? (d.loopcount--, 0 == d.loopcount ? k && g.call(k) : (d.currentTime = 0, d.play())) : (d.currentTime = 0, d.play())
                        } catch (b) {
                        }
                    },
                    !0);
                e[b] = d
            }
            try {
                if (d.loopcount = f, d.src = c, d && (d.volume = u, d.play()), r && d && d.paused) {
                    var m = document.body;
                    m.removeEventListener(l, n, !0);
                    h = d;
                    m.addEventListener(l, n, !0)
                }
            } catch (t) {
                g.trace(2, "Soundinterface Plugin - HTML5 audio is not supported by this browser!")
            }
        }
    }

    function C(a) {
        if (a = e[("" + a).toLowerCase()]) try {
            a.pause()
        } catch (b) {
        }
    }

    function D(a) {
        if (a = e[("" + a).toLowerCase()]) try {
            a.paused && a.play()
        } catch (b) {
        }
    }

    function E(a) {
        if (a = e[("" + a).toLowerCase()]) try {
            a.paused ? a.play() : a.pause()
        } catch (b) {
        }
    }

    function F(a) {
        if (a =
            e[("" + a).toLowerCase()]) {
            a == h && (h = null);
            try {
                a.currentTime = 0, a.pause()
            } catch (b) {
            }
        }
    }

    function x() {
        var a, b;
        for (a in e) if ((b = e[a]) && void 0 !== b.paused) {
            try {
                b.pause()
            } catch (c) {
            }
            e[a] = null
        }
        e = [];
        h = null
    }

    function q(a) {
        var b, c;
        for (b in e) {
            c = e[b];
            try {
                c && void 0 !== c.paused && (0 == a ? 0 == c.paused && (c.pause(), c.needresume = !0) : c.needresume && (c.needresume = !1, c.play()))
            } catch (f) {
            }
        }
    }

    function y() {
        u = p ? 0 : m;
        var a, b;
        for (a in e) if (b = e[a]) try {
            b.volume = u, r && (p ? 0 == b.paused && (b._krp_muted = !0, b.pause()) : 1 == b._krp_muted && (b._krp_muted =
                !1, b.play()))
        } catch (c) {
        }
    }

    var g = null, v = null, k = null, e = [], h = null, r = !1, w = !1, l = "touchstart", u = 1, m = 1, p = !1;
    this.registerplugin = function (a, b, c) {
        g = a;
        v = c;
        k = g.device;
        "1.17" > g.version ? g.trace(3, "Soundinterface Plugin - too old krpano version, min. version is 1.17!") : (k.ios && 9 <= k.iosversion && (l = "touchend"), c.keep = !0, c.registerattribute("rootpath", ""), c.registerattribute("volume", 1, function (a) {
            m = a;
            y()
        }, function () {
            return m
        }), c.registerattribute("mute", !1, function (a) {
            p = 0 <= "yesontrue1".indexOf(String(a).toLowerCase());
            y()
        }, function () {
            return p
        }), g.soundinterface = c, g.preloadsound = A, g.playsound = B, g.pausesound = C, g.resumesound = D, g.pausesoundtoggle = E, g.stopsound = F, g.stopallsounds = x, w = k.ios && 4.2 > k.iosversion, r = k.ios || k.android, window.addEventListener("pagehide", function () {
            q(!1)
        }, !1), window.addEventListener("pageshow", function () {
            q(!0)
        }, !1), document.addEventListener("visibilitychange", t, !1))
    };
    this.unloadplugin = function () {
        try {
            x(), document.removeEventListener("visibilitychange", t)
        } catch (a) {
        }
    };
    var f = null
};