/*
	krpano Embedding Script
	krpano 1.19-pr10 (build 2017-05-10)
*/
function createPanoViewer(e) {
    function ft(e) {
        return ("" + e).toLowerCase()
    }

    function lt(e, t) {
        return e[d](t) >= 0
    }

    function ct() {
        var t, r, i, s, o, u, a, f, l = n.location;
        l = l.search || l.hash;
        if (l) {
            t = ".html5.flash.wmode.mobilescale.fakedevice.", r = l[R](1)[F]("&");
            for (i = 0; i < r[D]; i++) s = r[i], o = s[d]("="), o == -1 && (o = s[D]), u = s[R](0, o), a = ft(u), f = s[R](o + 1), t[d]("." + a + ".") >= 0 ? e[a] = f : a[C](0, 9) == "initvars." ? (e[_] || (e[_] = {}), e[_][u[C](9)] = f) : e.addVariable(u, f)
        }
    }

    function ht(e) {
        return e[B] = ct, e
    }

    function pt() {
        function N() {
            var e, n, i, s, o, u, a;
            if (t.plugins) {
                e = t.plugins["Shockwave Flash"];
                if (typeof e == "object") {
                    n = e.description;
                    if (n) {
                        i = v, t[z] && (s = t[z]["application/x-shockwave-flash"], s && (s.enabledPlugin || (i = p)));
                        if (i) {
                            o = n[F](" ");
                            for (u = 0; u < o[D]; ++u) {
                                a = parseFloat(o[u]);
                                if (isNaN(a)) continue;
                                return a
                            }
                        }
                    }
                }
            }
            if (r[nt]) try {
                e = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                if (e) {
                    n = e.GetVariable("$version");
                    if (n) return parseFloat(n[F](" ")[1][F](",").join("."))
                }
            } catch (f) {
            }
            return 0
        }

        function k() {
            var e, t, i = p, s = n[Y]("div");
            for (e = 0; e < 5; e++) if (typeof s.style[["p", "msP", "MozP", "WebkitP", "OP"][e] + "erspective"] != W) {
                i = v, e == 3 && r.matchMedia && (t = r.matchMedia("(-webkit-transform-3d)"), t && (i = t.matches == v));
                break
            }
            return i
        }

        function L(e) {
            var t, i, s = {};
            s[y] = e;
            if (r._krpWGL == v) return v;
            try {
                t = n[Y]("canvas");
                for (i = 0; i < 4; i++) if (t.getContext([q, "experimental-webgl", "moz-webgl", "webkit-3d"][i], s)) return r._krpWGL = v, v
            } catch (o) {
            }
            return p
        }

        var l, c, h, m, g, b, w, E, S, x, T;
        if (s > 0) return;
        l = p, c = p, h = p, m = e[O] && e[O][y] !== undefined ? e[O][y] : p, c = L(m);
        if (e.isDevice("iphone|ipad|ipod") && i[d]("opera mini") < 0) a = f = v, l = v; else {
            o = N(), o >= 10.1 && (u = v), l = k(), g = ft(t.platform), b = 0, w = 0, E = 0, S = i[d]("firefox/"), S < 0 && (S = i[d]("gecko/")), S >= 0 && (b = parseInt(i[C](1 + i[d]("/", S)), 10)), h = !!r[tt], S = i[d](tt), S > 0 && (E = parseInt(i[C](S + 7), 10), h = v), S = i[d]("edge/"), S > 0 && (h = p), S = i[d](Z), S > 0 && (w = parseInt(i[C](S + 8), 10), b >= 18 && (w = 4)), l && (w > 0 && w < 4 && (l = p), b > 3 && b < 18 && w > 1 && (c = l = p), c || (g[d](et) < 0 && b > 3 && w < 1 && (l = p), h && (l = p))), m && !c && u && (l = p);
            if (l || c) {
                a = v, x = i[d]("blackberry") >= 0 || i[d]("rim tablet") >= 0 || i[d]("bb10") >= 0, T = (t.msMaxTouchPoints | 0) > 1;
                if (w >= 4 || x || T) f = v
            }
        }
        s = 1 | l << 1 | c << 2 | h << 3
    }

    function dt(e) {
        function C(e) {
            function a() {
                r[m] ? (r[m]("DOMMouseScroll", c, p), r[m]("mousewheel", c, p), n[m]("mousedown", f, p), n[m]("mouseup", l, p)) : (r.opera ? r.attachEvent(P, c) : r[P] = n[P] = c, n.onmousedown = f, n.onmouseup = l)
            }

            function f(e) {
                e || (e = r.event, e[S] = e[X]), u = e ? e[S] : T
            }

            function l(e) {
                var t, i, s, a, f, l, c, h;
                e || (e = r.event, e[S] = e[X]), t = 0, i = o[D];
                for (t = 0; t < i; t++) {
                    s = o[t];
                    if (s) {
                        a = n[s.id];
                        if (a && s.needfix) {
                            f = a[x](), l = a == e[S], c = a == u, h = e.clientX >= f.left && e.clientX < f.right && e.clientY >= f.top && e.clientY < f.bottom;
                            if ((l || c) && h == p) try {
                                a[U] && a[U](0, "mouseUp")
                            } catch (d) {
                            }
                        }
                    }
                }
                return v
            }

            function c(t) {
                var i, u, a, f, l, c;
                t || (t = r.event, t[S] = t[X]), i = 0, u = p, t.wheelDelta ? (i = t.wheelDelta / 120, r.opera && s && (i /= 4 / 3)) : t.detail && (i = -t.detail, s == p && (i /= 3));
                if (i) {
                    a = 0, f = o[D];
                    for (a = 0; a < f; a++) {
                        l = o[a];
                        if (l) {
                            c = n[l.id];
                            if (c && c == t[S]) {
                                try {
                                    c.jswheel ? c.jswheel(i) : c[w] ? c[w](i) : c[A] && (c[A](), c[w] && c[w](i))
                                } catch (h) {
                                }
                                u = v;
                                break
                            }
                        }
                    }
                }
                e[V] == p && (u = p);
                if (u) return t[st] && t[st](), t[ut] && t[ut](), t.cancelBubble = v, t.cancel = v, n[m] || (t.returnValue = p), p
            }

            var i, s = ft(t.appVersion)[d](et) >= 0, o = r._krpMW, u = T;
            o || (o = r._krpMW = new Array, a()), i = e[b], o.push({
                id: e.id,
                needfix: s || !!r[tt] || i == "opaque" || i == "transparent"
            })
        }

        var i, s, o, u, a, f, l = encodeURIComponent, c = "", h = e.vars, y = e[j], N = e.id;
        for (; ;) {
            s = n[E](N);
            if (!s) break;
            N += String.fromCharCode(48 + Math.floor(9 * Math.random())), e.id = N
        }
        e[b] && (y[b] = e[b]), e[k] && (y[k] = e[k]), e[Q] !== undefined && (h[Q] = e[Q]), e[b] = ft(y[b]), y.allowfullscreen = "true", y.allowscriptaccess = it, i = "browser.", c = i + "useragent=" + l(t.userAgent) + "&" + i + "location=" + l(r.location.href);
        for (i in h) c += "&" + l(i) + "=" + l(h[i]);
        i = _, h = e[i];
        if (h) {
            c += "&" + i + "=";
            for (i in h) c += "%26" + l(escape(i)) + "=" + l(escape(h[i]))
        }
        y.flashvars = c, e[L] && (y.base = e[L]), o = "", u = ' id="' + N + '" width="' + e.width + '" height="' + e.height + '" style="outline:none;" ', a = "_krpcb_" + N, !e[I] || (r[a] = function () {
            try {
                delete r[a]
            } catch (t) {
                r[a] = T
            }
            e[I](n[E](N))
        });
        if (t.plugins && t[z] && !r[nt]) {
            o = '<embed name="' + N + '"' + u + 'type="application/x-shockwave-flash" src="' + e.swf + '" ';
            for (i in y) o += i + '="' + y[i] + '" ';
            o += " />"
        } else {
            o = "<object" + u + 'classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"><param name="movie" value="' + e.swf + '" />';
            for (i in y) o += '<param name="' + i + '" value="' + y[i] + '" />';
            o += "</object>"
        }
        e[g].innerHTML = o, e[at] === v && (f = n[E](N), f && f[at]()), C(e)
    }

    function vt(e) {
        typeof embedpanoJS !== W ? embedpanoJS(e) : e[N]("krpano HTML5 Viewer not available!")
    }

    function mt(n, r) {
        var u, a, f, l;
        n == 1 ? (o >= 11.4 && (u = v, ft(t.platform)[d](et) >= 0 && ft(t.vendor)[d]("apple") >= 0 && (a = i[d]("webkit/"), a > 0 && (a = parseFloat(i[C](a + 7)), !isNaN(a) && a > 0 && a < 534 && (u = p))), u && (e[b] == T && !e[j][b] ? e[b] = s & 8 ? "window" : "direct" : (f = ("" + e[b])[d]("-flash"), f > 0 && (e[b] = e[b][C](0, f))))), dt(e)) : n == 2 ? vt(e) : (l = "", r < 2 && (l += "Adobe Flashplayer"), r == 0 && (l += " or<br/>"), r != 1 && (l += "HTML5 Browser with WebGL ", lt(ft(e[K]), q) || (l += "or CSS3D "), l += "support"), l += " required!", e[N](l))
    }

    function gt() {
        var t = 'Local usage with <span style="border:1px solid gray;padding:0px 3px;">file://</span> urls is limited due browser security restrictions!<br><br>Use a localhost server (like the <a href="http://krpano.com/tools/ktestingserver/#top" style="color:#FFF;">krpano Testing Server</a>) for local testing!<br>E.g. just start the krpano Testing Server and refresh this page.<br><br><a href="http://krpano.com/docu/localusage/#top" style="color:#AAA;font-style:italic;text-decoration:none;">More information...</a>';
        e[N](t)
    }

    function yt(e, t, n) {
        var r;
        try {
            r = new XMLHttpRequest, r.responseType = "text", r.open("GET", e, v), r.onreadystatechange = function () {
                var e;
                r.readyState === 4 && (e = r.status, e == 0 && r.responseText || e == 200 ? t() : n())
            }, r.send(T)
        } catch (i) {
            n()
        }
    }

    var t, n, r, i, s, o, u, a, f, l, c, h, p = !1, d = "indexOf", v = !0, m = "addEventListener", g = "targetelement",
        y = "failIfMajorPerformanceCaveat", b = "wmode", w = "externalMouseEvent", E = "getElementById", S = "target",
        x = "getBoundingClientRect", T = null, N = "onerror", C = "slice", k = "bgcolor", L = "flashbasepath",
        A = "enable_mousewheel_js_bugfix", O = "webglsettings", M = "localfallback", _ = "initvars", D = "length",
        P = "onmousewheel", H = "fallback", B = "passQueryParameters", j = "params", F = "split", I = "onready",
        q = "webgl", R = "substring", U = "externalMouseEvent2", z = "mimeTypes", W = "undefined", X = "srcElement",
        V = "mwheel", $ = "basepath", J = "consolelog", K = "html5", Q = "xml", G = "flash", Y = "createElement",
        Z = "android", et = "mac", tt = "chrome", nt = "ActiveXObject", rt = "never", it = "always",
        st = "stopPropagation", ot = "only", ut = "preventDefault", at = "focus";
    return t = navigator, n = document, r = window, i = ft(t.userAgent), s = 0, o = 0, u = p, a = p, f = v, e || (e = {}), l = e[B] === v, e.swf || (e.swf = "krpano.swf"), e[Q] === undefined && (e[Q] = e.swf[F](".swf").join(".xml")), e.id || (e.id = "krpanoSWFObject"), e.width || (e.width = "100%"), e.height || (e.height = "100%"), e[k] || (e[k] = "#000000"), e[b] || (e[b] = T), e[S] || (e[S] = T), e[K] || (e[K] = "auto"), e[G] || (e[G] = T), e[V] === undefined && (e[V] = v), e.vars || (e.vars = {}), e[j] || (e[j] = {}), e[I] || (e[I] = T), e.mobilescale || (e.mobilescale = .5), e.fakedevice || (e.fakedevice = T), e[M] || (e[M] = "http://localhost:8090"), e[$] ? e[L] = e[$] : (c = "./", h = e.swf.lastIndexOf("/"), h >= 0 && (c = e.swf[C](0, h + 1)), e[$] = c), e.isDevice = function (e) {
        var t, n, r, s = "all", o = ["ipad", "iphone", "ipod", Z];
        for (t = 0; t < 4; t++) i[d](o[t]) >= 0 && (s += "|" + o[t]);
        e = ft(e)[F]("|");
        if (e == T) return v;
        n = e[D];
        for (t = 0; t < n; t++) {
            r = e[t];
            if (s[d](r) >= 0) return v
        }
        return p
    }, e.addVariable = function (t, n) {
        t = ft(t), t == "pano" || t == Q ? e[Q] = n : e.vars[t] = n
    }, e.addParam = function (t, n) {
        e[j][ft(t)] = n
    }, e.useHTML5 = function (t) {
        e[K] = t
    }, e.isHTML5possible = function () {
        return pt(), a
    }, e.isFlashpossible = function () {
        return pt(), u
    }, e[N] || (e[N] = function (t) {
        var n = e[g];
        n ? n.innerHTML = '<table style="width:100%;height:100%;color:#FFF;background:#000;"><tr style="vertical-align:middle;text-align:center;"><td>ERROR:<br><br>' + t + "<br><br></td></tr></table>" : alert("ERROR: " + t)
    }), e.embed = function (t) {
        var i, o, f, c, h, m;
        t && (e[S] = t), e[g] = n[E](e[S]);
        if (!e[g]) e[N]("No Embedding Target"); else {
            l && ct();
            if (e[at] === undefined && e[g][x]) {
                i = e[g][x](), e[at] = i.top == 0 && i.left == 0 && i.right >= r.innerWidth && i.bottom >= r.innerHeight;
                if (e[at]) try {
                    top !== window && (e[at] = p)
                } catch (y) {
                }
            }
            e[V] == p && (e.vars["control.disablewheel"] = v), e[J] && (e.vars[J] = e[J]), s == 0 && pt(), o = ft(e[K]), f = e[G], f && (f = ft(f), f == "prefer" ? o = H : f == H ? o = "prefer" : f == ot ? o = rt : f == rt && (o = ot)), c = 0, h = 0, m = a, m && lt(o, q) && (m = s & 4), o == rt ? (c = u ? 1 : 0, h = 1) : lt(o, ot) ? (c = m ? 2 : 0, h = 2) : lt(o, it) ? c = h = 2 : o == H ? c = u ? 1 : a ? 2 : 0 : c = m ? 2 : u ? 1 : 0, c == 2 && ft(location.href[C](0, 7)) == "file://" ? yt(location.href, function () {
                mt(c, h)
            }, function () {
                var t, n = ft(e[M]);
                n == G ? u ? mt(1, 0) : gt() : n == "none" ? mt(c, h) : n[d]("://") > 0 ? (t = new Image, t[N] = gt, t.onload = function () {
                    location.href = n + "/krpanotestingserverredirect.html?" + location.href
                }, t.src = n + "/krpanotestingserver.png") : gt()
            }) : mt(c, h)
        }
    }, ht(e)
}

function removepano(e) {
    var t, n, r, i, s = document.getElementById(e);
    if (s) {
        t = window._krpMW;
        if (t) for (n = 0; n < t.length; n++) {
            r = t[n];
            if (r && r.id === e) {
                t.splice(n, 1);
                break
            }
        }
        s.unload && s.unload(), i = s.parentNode, i && i.removeChild(s)
    }
}

function embedpano(e) {
    createPanoViewer(e).embed()
};
/*
	krpano HTML5 Viewer
	krpano 1.19-pr10 (build 2017-05-10)
*/
var krpanoJS = {version: "1.19-pr10", build: "2017-05-10"};

function embedpanoJS(p) {
    embedhtml5(p, "krp:o01|| :ei!c4=a^; >GGhg*9e}U,F)JiFM,d5{{)t@ ,e#Pblagd`JW|RX/sk!avLo!ls|4a2i7jm3yTlBU^(n]P~O{I';5zT+1dc|P2W5uEM9L;8uX4A]A/:,iOSbhO2{!QNPzW/*}t:u[Ak899XHN $V/N5qnL`_XAG%oe/i.3H9Wdm[ s%W:JdmgNu1dfb'Wb_32yva?cnaI'EwjX=8Qqo'pL=~LnR>w(TY,==& vR1l$SHJnZoj14YL<VkVW)c<`uF,qz|Y9Tm#C~yoSxD.#_~oY[d^2K`slEJv0e-^IV-s(tTQ_%h%$OGja<0LO}ue=J#%O+h1WIQ+K(Z6t4Q}J5WyU@!2=7~@{O]B/G#y%PT>SOoDt4=eC.< p>B|O{zk<t2]shHG^ fh<pH$$LqclBbF:7J xE:1U!.b<fQz4>%++SnV$q)R?$E('N^Ct##pHw4Q#8wg~xtpfb-pxxs4Bh@7+J=d*bMAGbJ-+%vB7,.x1=0={b(<h80O Zdz&B$pa.ImJw#IUG0w)CBjk5$PVD7>j5(/XtU3>aj-A`-GnC4lc',@W+*i$;jGev~n3r=*>|3;}$+vybaHs;cehLN/8p8v3BpcXnE3e2-ns4@@elnm|FI+i.7IZzGJ#6ty(r5EK0+U4%(+51*y?ZO6HvFxmEV0Sf=BO0(9l-WpB]O]F+Fs*droq$n/Mk^?UK;@BO%UK^AiIZXtaa@g eEL|v7<6Ylj'Fm~^LNB^9#!I%h|GMt5Xi8z{q(bqj)?LI#y)pY89 DIqEZ5-9/af~QO_sL*mcLYTS?g8fG8Lx.M+'{?DD?jw@A;,Q<}ls{3(6%?If%t[8}MIqoG+U<:uYP9<r *b>?2Y$E_)h>RLG3 @O9Qq@*)m-/C}Phhz$ikRDe5^Qa/GK#xv)|}G_6Rs-uWH8]p?oB(i*Aq+S]E1K=EPc[nOgN>(C`6;(=;!hA3|))/ Yh].<ppHY9gZb;M4B1FbXAcC+*u8PsK2tGeunF=zAUykD[Hc^~6XsHz-~rX/L&ZoSL_c_KLzA6sg(@xC66D?{-]Zxcp&2q@^S;a1kic-S|c8WA-AP~7'@BQ/wZ2*f#7uM3u^|cWNYG%8![6CC`[sXG@RuFcy8,vE:wMVf*j BBSY|=gaf<~WY63->yL,XEUN:}_-{G)3x8u}N xknM$*S`Mndw*G`3h[2{w0@Qx$k[2-5|{e2c?{kg$TN@]RkYX|VrAvDXX^hH{%9R@CO%/P$DYNDsM 9u.g-f|V.cFCgFs/q,}d}rT3g[(y<J#G(t0P@I = %OsJM:Eo WYne5pr@#Icq-YbQ[%n?P8]^SK7py> D+)qKTU;Xua|~;SX!$&C=mupJS@$Uq<[2Ja1^kL^&#j,Hdbf?6EKrRw%Y]q+Brn5ZH?vd,SAFq'#n~$*o3H.upP5~%c0LEZk+^P0<8wdR}Z{9V1(q}4rF>*9;hs-O0fvp]L_nh/ufTCVy;Th W#+,Jq16Z/)?zOt6l){(?lURSDK~Srf@U<:SIDP+ip:aPkWF|8I!`Xki0@A]fX!B&(OaGoXx++>qq/.zr72mky~jGx<>U9&M_QHxMc>r9UF[&>kBK+P$h[ZA&I1%Bxv]*L9[mi@%`u/[(}L]]eF0JaJ4QX<IM~.Y/iA#;-9AOPh]I<ypy*)z,pw&b&#t3xb!3cB;_mMm6$]6,E?}D2y[i/$(0Z:T(GWimSVxNI+G,m3=~M{ZR:QXRzD~rIuuNLCx4oBvA5m}4p|ii@iKe<7jEg1U0:7p(5U+VaSb@<u>DMirpoWQvp``@;^&5Ol[/;&<J.B2a#WOQ@$/2B>}>GDR`!PmlsOj<v4y jN/JYoG}{%PF76VZNS!>@$%RJ zTO$WB}$,cYJ8 vNsDGt+^1GK:2CjL@ y>lCNTBI~#Il:)%T7UN&nYBAo$r@lc2}Rkq|&yzAM<n q6IW?2&q+BROA|I;%I>,'|tPs|Rv:5p['D8zB~pg;3;FJ$5@cj/XG#F73ED8ZDD5Q56ad,C,KD`1MQBrQ6$5rI9<(iW!|BH*WI&6C:E12=E{DhH12gEHLR)agHq2l6&]0<Ta:JGqV7>u|v>YThS(t!$sQar+n8t*;8v:*tbeHAY{x=+ej?*f4@oW]YViny_3o b&&T.kA681n)W81(61t|Lm8tNz/Uxn f+W,Ha[.R,G9,w?B';y%%$k@8AWc@inFO^%UJdXRDd/qZep(nbGaC?wi81,iPKDH-nv0MYk$>`uLXyM=Est9BzniLQn/auuBMf95!V:V+T6DAh7B~8Er}S'WIBUFMi>OaF95 SC'f$WyR&a7FEe C<[?xaH`s~`F'5;/|4nnTycvd}u5qPz,[XsU6L.#:E|9vf|7V{W<w_|&q~s:*[m$se_Y;1+-4|D$~zD)P8PNdJ*VY8@5-5O9}y[#G43U5KFfqn/:QSUOoK$ pYbeJ}6#e7v1>`F2'a_!SH|l6;5NL7!Y5b.-ll:z*.BMLAhr-/p[.!-psoNNtS`0n1zXk{*el,W`c>hkNpL+I*N>!+!qivjm:gR,+5Eu*f4B[x'Y=rq##4A2h9}5Z`Lk'J2D7N=&|B>W[]=Z}GhZxx+@3PXBJciJ.6R4_VY.L*DcM3jsnl7'4W:gl ?j(Q)j<farq$BT%yEQbLB.X();Kd#* )=o7.,BOsY^{d42T>:?0,Tco~#dRw{u{Qu90gR]m#pbYwG=X^i]l:>e/Pb#,k01b@hX,l#Cx+Dr_h6uZnwZruo~[OPSu<=#m<#iEa,w.j!I^7SZIE</emu.'B>&%L|nIC9HVJ}nK!Qj^@O7'x)m@}-G)oZzw42kv^X(V`[*r:vwKf):i)|SG2f0e/!7HWr}t'Qt:*`^jR4d/)9?c{UMW4jv<-1aHL@VCu1xSISp'?h0YVhFd9ql07,[j^m~d~%+3k')*jnc;RUq_S'+'P2Yah:rDb^2=@.w5`~5xU]mh=?[tqy)2Fl[p?2nQRZU@dXXj,&HCJ^}__H10K[fKH1T2+*i0 (Wj1+;Ms<g[8rdJFWR#WjhxKQ;8$v(>V-zIR{l|y{w%XoC.}%Ws^'L*&PfZxp++V g~zHDIdR<oRrG(9Q[x/tp8..m[Hq]&iw6m33XUQ05zqrF}vJ0H|S$d3?r [k5|)Q?eHL8TpL646!Ks(n2=9+x_n<Q00v;CUwd3IpUq[~tEvONrJvsg!uCZ$COj+=W)$TX&(_7[-s KnU<`i&!oEm|5BD%zU0bQ%H&$z`~Mv&Q^Bv)|Gxa%{&&flQ}:rr9hJEC_d1+RwIAUJbvc0Eepj1No`xwJj2qLh7e} dP@0ZfRyr[%e3%MTzL`RWBr(TjW#RU~p5u2u}ZA<uJ8Jj )#yE F,xE6g)=/iIY7Z+0M]b1C*N Jhr4*u4Rmd4?l}6D.D+~'-U8n^GlKi@YS6kM6'hEI`RIF;>d%CarFxwW1mp]<P;m~dK:2y$ht=)VX#Cx0*Fx>TX&]V765;]2:iu0<z~-5UQTyEWykoS )3uwgV;0d7fR%E>H]VHtij&B>'+!n6d+A9oN=s!-qt=n7!:R1t,$+n=kInjNEmp)pP8{hPRUiW9J1?}'?km0~IbPspJmN)a?3m`YmS^Cm}ih]|5/~~Cxj}Jd ^T/j,046'_J+VpJ)d}<bup0Nqp(}5q`K$-xTpMm]#*<r]Zd~&X}%*0>zh4y%d>v'yvRWi9H ?3~(A{s93 [l:v!a1B{jqZ_5?k)})UJG9O%6A7]uyf<1a^bugDx@VOT, Dj}B]`s}W-LZET:_SfmTAi<^k,44bp]=0$xCxopmFevAB@*I7,`2z3QaksFP/_D+P>IXvwk-k<iXcA}y>Y6/lYw#)R.D%qIzHGR6c*ATV,l{6ZrW&O;CQ`:CTg@~0,X]D.$},<x[4`,5ukc1vA#@`/kW>hKx|Nwou8k}!8iH(6;0`&`_dws2g<{|TsqED<of>u]W.gPeyaI8jd{-RoM8}k]Ea3|8b 3N3%3F/_Vi^q(u]u~MUf[5s1[]{^ M@yV=M!a^kPL1aFG0G.CQ#yyU)6C9v'SS*zXJ$'|-#Pm$/S7}^R-b'~Ib-R*qamNq& _>10Ro4.##3J6i,$oTW?-<+|:TW'L{jk/N:,vqUQpKOYDimQWm&t9K5=3)z>@ON~|q39Hd{</Y%e#p'l-d8Zcx,V9:e:yVNOYkts%|BfAeETk|:I0o*+C'e.n.B@hlYZp|F[eB$kI#LTiBY:g8)U|/gLPoQEdmX5z#fj*jEEtB8OQGH[%KV7FsvawoC5&_[60^0jY<G}&SFEmF#nQ  ~mEkDRpvu7)k<C7# I zy/jxM3W~M=jvb[N}~T6E$U0)Nd})s}>$2})E:X0oa00*EmA!nB(q7Db~fqtky1%0dqw>Qg( 'GJ818#}6;Ipv/w>Gz8=D%bC^=8hT{{?dG0v=M4]I[7qws}Vxc^V.&Cz2iAo7n`2$yJpxfqX0$V%pQwskIJS>8qmEP}N,HTHG5ht69~;`(q{2sQgl}TD-^70pa&samlP D=uIGyIhwf!V3^<4spKam/k.A]a20b |TTasI3`x*r%q B!SPui4y4l>l1QxI=5xZ>@wHyE_}iN5wl~i_Sl#dPVQwNLdDva@XEx<(htKw_D!LCyI~k6lj@l!XG=JPQhg Ihg7%.Q[R=qyY?XYMau>r2W)vhAmhS%dFPBaiAW3RDXF*`%9vJ5O4;-+K`G7>F#{T?:$4o<R5OXw%pfJJs)@{<?ZBsJTzuF:q>6*HSzg)R++XxR!qlT*[:]28hz*7M<bt=%Ce|fG=]J5(YE!JrF&W]$(rOhBK$5`<>XG&$x;FMP{){GcE#ir_<UK5Q`N*xFWZDbdzKcj4*W^50k$jit(5Ug>IMo [wS^j>iP,7>qm,wXHm ~M$:(^.q5CAcoY;R~wWab5{RQW<0<mvdCzvX;ipq(&<E5]f/H@3DA[}6?!Dnci&C<+r[QW-bvr3c=)^i,65U}f:({F~TRbFZeY[j?]_}4aT;+MB'iO6z_IyMX1f{X8o@S`y.# pG5x7%VW$gDT^#,3?(zl3/#F/Z]'5*IHhs1^XA2r@l!u;_-.&|gYq9k%A!~?IcOn13b^l'U!!JC&IFS^ns.*x2OE%$WZ7+Kz7;WYg.w'*/ZJ?@'ggJ'}|~Vu?/{3?Fb@_$56=<gSy=*/D;1ib%7~'a(uT)^H>o#zk,o@hJ|x}=*;t.yd+(++'GHIJtJ<4Aj4GhM0@W'7(H*T5OW[rk$+(0jSawd/T$0 DektHB{h/F;Kz4S]!dRLW$z6/`V.%9V<Ro0g5t&$FY '&$]tUGR9e 0XGbH37I6K~h~n`4uu6:uYzZD`Mw'*mxUS.R|%ihic8%(^{zd^yQ,x){[WDdN&N/E&sSxG[^JhuwgY)BI,+@gOy_:?2@($]|O}FT!< ~Z^(WS$dh=de<#dEoS,AiOdbyOjIf5r3zog$mJ| k>!qj}bClfqUS'(K];pU,dW2wp;G&QA(fgL2|f}gX`}%McMPw>5.sE}T+8ikN}.B:oe.Cg,0?RX+5`#8GUj8>7^B`tXLqzz>! ![[E?qJ]T8A.F@QHe/p0t]p- EKQewTLhFpt#A]F:$*7|nHXvB+~lo>{:=.9aS,t!/}3'S)J#T#!>0r:Ep+H@#zE0'_W>frz)4pMQ=?_2v%@;]3ASL!BZ+yuM!7W@kr'y0casG>J2==j_&b&D>~f;$Bfu =`+EW#-DL&XSh7/$(|`tGi4(Bg2yOhLbC3e6~*.?z^KP1l1%@`yu{Sf:sd`&F`P@_@_:<gY39E|Ry^Zf+lo3tk#s)1GzmTDq6y'N T2a8GJH8u'ug5l,A$JJW (evr)B3<EQp]U#qz|w10*7phWZ2Bx+~*Y(<W@D[A?p$bL,ro82 }qJfcHN@Ar5'q;2P&@ n_ w7:oY}GI9Zqq;1xXEZbSOU|(GS'H{e.Sm/Sf`MRTS1t*coDG5<X2'!,c6qWV7U5z5;L#]m7q26I8l6 hfIZwD*s5d{]L&h)$hemO;Rq8|/7YU(! gK.F]dbu#1|oleB$yF3CD3;mPL&1is&;;$Y=!T(V%-#5,_TTs-`/B@a$eod:kZq';ge,a&?qXQf%C]^Rtr`Qd@a^?/J*RULYp7RKAU4]+T+i]jr8C|t~)-Qyk*|5E;,6th;?e?Tcd0^yVY_@H*LZ7.)[LA:I2#>:+TAD:#^T%05N}J^ZYgj4g:d/X17p-La)B_b_s4)e+#GDa*Cqvj<jIeD[@.z~v{'tPltkUwrW0MV@l.q~~.z[xH2lI<KJ7x:F*']8wK-td'(:40 `dH/,YMu*b)qs'9V6M1AG8j#!{e)BM.0R}u^08T6VNM7f5M}Vg)W@W;=m (<e|[18X0XA&dov D%J)){jE:R.^yU97lKUa1r.M`N_JitnuRk;g+wc7g->=$mSRp67W&D__{TcgB(pI&K 4;00^qriH%,8M<Diu;ZZVc:NI56taP5Di$LHy`NtP(7}F!@QSO;Q=^).HsnV>U9oGfi{LZO<}2Hn8`:T#Yw2'-0z}tr{d |u-3Un5J1:@4p?Vxomv6sVL53lmmQN`> C6U&$Js}gMd 2ZeCFLP`cJT'R`}hSh3$0dOtJdS_:?=.]bqJ^KV?1v8W>TME%z](`1)h[Ga7kYn'dK<R)lIaxc;r~/./sk@3*2WC scAG0zq>nu@1qZ5H7HT(I9D:WANJEni3H!x 6d#`@qv=*zxx##|k29q/u1--|[`}(o'7 4uvrjyPCTldZlATC5c>D7 ')^B-`-{}H#9Zz_/AqX`wJ4>RE{j1$P3o<03*1X'(*r:s.TTM1(Ko|<VmFV8KE|Q5q;djUOb>Yz{B]4,YJ&oMPMzq`0`xe8G_hH:w0lT@a9K]*/rH`Tk9c!O@r59~dm,djJ$'',&l4$]X!',)6=[K_A[J ~ZgZ#O~#KKw/`x9oE m- saZh47'=3d)0vg,WbA3bG d^&bK_S} #s KI4KuEe3ya/kT0X/Yz&[@ao>b|O>X2y7w3fXipuH>_Y;k_HQH_dl8+[m; +MfD ]~R I;at=90v|bRJ0_hm!db6mtN>BYh%VyP5H0x-9sJ4H$c;#(^(xV+.Ml?rOQfp.$CgXKm^/!>ekm~VD:Ib^,3&r7,80R(QVJJ;!5pw7Q?0^c~WhwGZ?6E=fKbr[(X@,BW hJwvYMNDT}Hrm[7U)j|B&yOCellFEh&+:s#=[>7XoIovK<*V-vT8DM8QI{$2['eb{WbtN)2&l|[T)^&x!k}_hJ^-H4r@R8^r:w?jHgRQEF?|FFc|8HUmcI#&W8ojdRt{Q64D`cjFtm9;4IyE(A%6s}0#:V`*^nCY<V.pDo*i_Zg8hm^qYx{4hOmUPvQqN3~8'nlr4>XoKYnEAyaaOTXS?{<g/I-^FQHcG^N~[#W$I##5t4$y`4z5,&AhHSmv{+g,?ak9/[E_%!8{f3fgyH)Tdx96!J|:9euA3)P'`P8#LhtUk-2kwR~W<VG#?t<O-5121Y6JB0%l#WJk>c3O{SMpxCjt,#A`*-tP^62WDo7= <othFkTJHT/Be/Lly.dq/9,b@am<jUDvwoSU7S04`ps-hZ>4a,RkDyUCt['#8hyHFJH)bL3GD4Q3zQu'jGMIKQbl?O`AIX2'$1P-ew_;!zIs<}l:k X_g;OF6Wc4WAF&EImsY*80bX),z##9f0EUA.;*seOY9w-)`? bCaSmCKGVR]G^I? KxkniwgXP8jaNIo|}G8G=:5g_IT%{%Ir.S :FdMewJ,p2~=>s-#/X&g}JugEm/Cglw<Am+=mE9g9&G3l$Wx7n`,_r^>>CxK[cC-wnj&.eCjd*>OZkWfbXvSOPMw^bwvOEK@ZMwc1ya<}'mejWS=X}K7rrj&[PV=7/I54p&3FObRVf%g0W0}WA)z*U18xfvJP.GU<D6SHh)$W % ^(W~.+_nvx+:[_|[qX( 8$^@aa:,+w_MYc(z$t6GENUIX&zL8Ck~:9B2J80rdK:t'.rB9`qoJ$5K,$!7}0H.ajDnU9n]A}z*p! 6+R_<~O4e((7iXz*#2,%ofXJ3u24+4~J2Kkno{Oz#t!X$ F4-3a-}nIW8Q]-pKW<di;%6~w3+o-+$e3+4_jv!{3]Z3S*:C.geH#cYswtRF; byk?:sD!Q:`(|FN4|J4J51$(.zI:w_=ZJdErM4(9qg>E3',h $(m4G.=]E*X7Hq.sbTtH(Fnk7}?E/:d3aR9mX;WX!mfl.2L_:!5u%oy{gbVSA%Rv<;fm`<S>V`{X2kr~$8 L=gyDM8S*&DCNZa !ie}'q@;pu?1>%^1~<:X5(YLDz|0B%hH16%!wb9M4pQ{&UOS*?! wvh-]%6!aiYF7Cj~ zL5NN^^@1nl&pw*L'x9Y;(6Kl_Qh6< !q<8.!bw*p@P0,D2~6@b|A`1`9Kpjnd:OW4AJ)3|%*HgE!0)g/CV1o)::D^/M>7ktq@hR}mx29wukfpfj(or*v,gX&'Xo7;Yc=U:N</FTN|/6WdgO44i,cmbE9]pmEEyti98%8mqdy5_jts|va|.)uJ_ky/Tyd{Q+]1o6PDf+qcOmO&C%7E=_A`r/%i&2wh=PQ&uL'M{fqnBi>:cl#az@)G.DLALT.*_zsN (ocA9 L;vn=*zr[}4I0PzsEMR=>K`(qt_wkhmcSAu<KL>gY0yX01O:i|iD5gQ+bpbHX9=[X6f|@O'y(QL=JRIYj`8>!M&ipl'l2)*X#jbb1%qq)|'+tQD?qono&AA^tlU3cj*_0TDw#?-{=B_@T;{]G ,I9khXbjh?yWCrT=J4m7Llp^eI:N1ZL=(?G8b/evk9Om]c8}(vn Cl3VL}WqAFNl&R,BOkB+729<:FH!wWc:oZTfJ*(<!PUVpAxj4p#o:e P2=h50_$}HX UuQ%J-W^fsdu@7%R/mZnh]A-Fd/#;<.fvnP]b|S;Wob9rpm5}h[ZEFD[x>*&e-jAri!BNq<<V4d<JNsiR,lgb%a`ix-P,i7;fPL'I._rsP2@o @bq8R=_P'gI`C9qS#i,O3{/UcZ[HF|Zg}/asC1y)uq!&w6NO't:=8BVi?p2N3~'Aiul:x[{75FR[|s<RkzmoWk_-&!U9]nTwFA]q o'IPq_lTi#Zd4gdCrrc1?n{fWRfd.QvCj|M[^ww7SA7A8<%!IT'9b)fz&z]7^BFA+'hL3,ld,vj>RiC*ebd]|E]lqg(%yMe~1/q~6WL5%^F5`>Gk; U0;C_[cRAHM")

    function embedhtml5($d, Xb) {
        function xd() {
            function J(a) {
                return ("" + a).toLowerCase()
            }

            function Wa(a, b) {
                if (!a) return a;
                var w = 0, d = 0, f, n = a.length, m;
                for (f = 0; f < n; f++) if (m = a.charCodeAt(f), 32 >= m) w++; else break;
                for (f = n - 1; 0 < f; f--) if (m = a.charCodeAt(f), 32 >= m) d++; else break;
                void 0 === b && (f = a.charAt(w), m = a.charAt(n - d - 1), ("'" == f && "'" == m || '"' == f && '"' == m) && 3 == a.split(f).length && (w++, d++));
                return a = a.slice(w, n - d)
            }

            function ma(a) {
                return _[53] === typeof a ? a : 0 <= _[402].indexOf(String(a).toLowerCase())
            }

            function ta(a, b) {
                if (typeof a != b) {
                    if (_[570] == b) return Number(a);
                    if (_[53] == b) return ma(a);
                    if (_[1] == b) return null == a ? null : String(a)
                }
                return a
            }

            function va(a) {
                return Number(a).toFixed(6)
            }

            function Ga(a, b, w, d) {
                a.__defineGetter__(b, w);
                void 0 !== d && a.__defineSetter__(b, d)
            }

            function Qb(a, b, w) {
                a.__defineGetter__(b, function () {
                    return a[w]
                });
                a.__defineSetter__(b, function (b) {
                    a[w] = b
                })
            }

            function Ja(a, b, w) {
                var d = "_" + b;
                a[d] = w;
                a.__defineGetter__(b, function () {
                    return a[d]
                });
                a.__defineSetter__(b, function (b) {
                    b = ta(b, typeof w);
                    b != a[d] && (a[d] = b, a.haschanged = !0)
                })
            }

            function Da(a) {
                a && a.preventDefault()
            }

            function da(a, b, w, d) {
                a && a.addEventListener(b, w, d)
            }

            function qa(a, b, w, d) {
                a && a.removeEventListener(b, w, d)
            }

            function Hb(a, b, w, d, f) {
                b[a + _[327]](w, d, f)
            }

            function Ha(a) {
                var b = ca.createElement(1 == a ? "img" : 2 == a ? _[578] : "div");
                b && 1 == a && "off" != Yb && (b.crossOrigin = Yb);
                return b
            }

            function Cc(a) {
                return function () {
                    return a.apply(a, arguments)
                }
            }

            function yd(a) {
                return a.split("<").join("&lt;").split(">").join("&gt;")
            }

            function zd(a) {
                return "0x" + (16777216 + (a | 0)).toString(16).slice(1).toUpperCase()
            }

            function fa(a, b) {
                var w = "(" + (a >> 16 & 255) + "," + (a >> 8 & 255) + "," + (a & 255);
                void 0 === b && (b = 1 - (a >> 24 & 255) / 255);
                return (1 > b ? "rgba" + w + "," + b : "rgb" + w) + ")"
            }

            function ae(a) {
                a = a.split("[").join("<").split("<<").join("[").split("]").join(">").split(">>").join("]");
                a = a.split("<sq>").join("'");
                a = a.split("<SQ>").join("'");
                a = a.split("<dq>").join('"');
                a = a.split("<DQ>").join('"');
                a = a.split("<lt>").join("<");
                return a = a.split("<gt>").join(">")
            }

            function md(a, b) {
                a = Number(a);
                b = Number(b);
                return a - 360 * Math.round((a - b) / 360)
            }

            function Rb(a) {
                if (a) {
                    var b = a.indexOf("?");
                    0 <= b && (a = a.slice(0, b));
                    b = a.indexOf("#");
                    0 <= b && (a = a.slice(0, b))
                }
                return a
            }

            function $d(a) {
                a = Rb(a);
                var b = a.lastIndexOf("/"), w = a.lastIndexOf("\\");
                w > b && (b = w);
                return a.slice(b + 1)
            }

            function Ad(a, b) {
                var w = String(a).charCodeAt(0);
                return 48 <= w && 57 >= w ? (wa(3, b + _[175]), !1) : !0
            }

            function xd(a, b) {
                for (var w = "", d = 0, f = 1, n = 0, m = 0; 1 == f && 0 == d;) {
                    var h, x = a.indexOf("*", n), w = "";
                    0 > x ? (x = a.length, d = 1) : (w = a.indexOf("*", x + 1), 0 > w && (w = a.length), h = w - (x + 1), w = a.substr(x + 1, h));
                    h = x - n;
                    0 < h && b.substr(m, d ? void 0 : h) != a.substr(n, h) && (f = 0);
                    n = x + 1;
                    "" != w && (m = b.indexOf(w, m), 0 > m && (f = 0))
                }
                return !!f
            }

            function Xa(a) {
                var b = vb ? vb.interruptionevents : "";
                if (a) if (0 <= a.indexOf(_[66])) {
                    if (0 > b.indexOf(_[573])) return
                } else if (0 <= a.indexOf("key")) {
                    if (0 > b.indexOf(_[498])) return
                } else if (0 <= a.indexOf("pano.") && 0 > b.indexOf(_[307])) return;
                sc = Sa()
            }

            function Dc(a, b, w, d) {
                for (; 32 >= a.charCodeAt(b);) b++;
                for (; 32 >= a.charCodeAt(w - 1);) w--;
                var f = a.charCodeAt(b);
                if (37 == f) a = O(a.slice(b + 1, w), d); else if (103 == f && "get(" == a.slice(b, b + 4)) {
                    for (b += 4; 32 >= a.charCodeAt(b);) b++;
                    for (w = a.lastIndexOf(")"); 32 >= a.charCodeAt(w - 1);) w--;
                    a = O(a.slice(b, w), d)
                } else 99 == f && "calc(" == a.slice(b, b + 5) ? a = O(a.slice(b, w), d) : (d = a.charCodeAt(b), 39 != d && 34 != d || d != a.charCodeAt(w - 1) || (b++, w--), a = a.slice(b, w));
                return a
            }

            function Od(a) {
                var b = [];
                if (null == a || void 0 == a) return b;
                var w, d = 0, f, n, m = 0;
                a = J(a);
                f = a.length;
                for (w = 0; w < f; w++) n = a.charCodeAt(w), 40 == n ? m++ : 41 == n ? m-- : 46 == n && 0 == m && (b.push(a.slice(d, w)), d = w + 1);
                b.push(a.slice(d));
                return b
            }

            function za(a, b) {
                var w = !1;
                a = J(a);
                var d, f, n, m;
                n = ic[a];
                null != n && void 0 !== n && "" != n && (nd(n, null, b), w = !0);
                m = ic.getArray();
                f = m.length;
                for (d = 0; d < f; d++) if (n = m[d]) n = n[a], null != n && void 0 !== n && "" != n && (nd(n, null, b), w = !0);
                return w
            }

            function M(a, b, d, e, f) {
                if (b && _[1] == typeof b) {
                    var n = b.slice(0, 4);
                    "get:" == n ? b = O(b.slice(4)) : "calc" == n && 58 == b.charCodeAt(4) && (b = aa.calc(null, b.slice(5)))
                }
                var n = null, m, h = Od(a);
                m = h.length;
                if (1 == m && e && (n = h[0], void 0 !== e[n])) {
                    e[n] = _[53] == typeof e[n] ? ma(b) : b;
                    return
                }
                var x = q, n = null;
                1 < m && (n = h[m - 1]);
                for (a = 0; a < m; a++) {
                    var Ta = a == m - 1, E = h[a], A = null, p = E.indexOf("[");
                    0 < p && (A = Dc(E, p + 1, E.length - 1, e), E = E.slice(0, p));
                    p = !1;
                    if (void 0 === x[E]) {
                        if (d) break;
                        Ta || (null == A ? x[E] = new tc : (x[E] = new Gb(tc), p = !0))
                    } else p = !0;
                    if (p && 0 == Ta && x[E] && 1 == x[E].isArray && null != A) if (Ta = null, x = x[E], Ta = d ? x.getItem(A) : x.createItem(A)) {
                        if (a == m - 2 && "name" == n) {
                            b = J(b);
                            A != b && (null == b || "null" == b || "" == b ? x.removeItem(A) : x.renameItem(A, b));
                            break
                        }
                        x = Ta;
                        continue
                    } else break;
                    if (Ta) x[E] = 1 == f ? b : ta(b, typeof x[E]); else if (x = x[E], null == x) break
                }
            }

            function be(a) {
                if (a && "null" != a) {
                    if (_[1] == typeof a) {
                        var b = a.split("&"), d = b.length, e;
                        a = {};
                        for (e = 0; e < d; e++) {
                            var f = b[e].split("=");
                            a[f[0]] = f[1]
                        }
                    }
                    for (var n in a) "xml" != n && M(n, a[n])
                }
            }

            function O(a, b, d) {
                if (a && "calc(" == ("" + a).slice(0, 5)) return aa.calc(null, a.slice(5, a.lastIndexOf(")")));
                var e, f, n = Od(a);
                e = n.length;
                if (1 == e && _[364] == n[0]) return b ? b._type + "[" + b.name + "]" : "";
                if (1 == e && b && (f = n[0], b.hasOwnProperty(f))) return b[f];
                var m = q;
                for (a = 0; a < e; a++) {
                    f = n[a];
                    var h = a == e - 1, x = null, Ta = f.indexOf("[");
                    0 < Ta && (x = Dc(f, Ta + 1, f.length - 1, b), f = f.slice(0, Ta));
                    if (m && void 0 !== m[f]) {
                        if (null != x && (Ta = m[f]) && Ta.isArray) if (f = Ta.getItem(x)) {
                            if (h) return f;
                            m = f;
                            continue
                        } else break;
                        if (h) return m[f];
                        m = m[f]
                    } else break
                }
                return !0 === d ? void 0 : null
            }

            function nd(a, b, d) {
                aa.callaction(a, b, d)
            }

            function Xe(a, b, d) {
                nd(a, b ? O(b) : null, d ? ma(d) : null)
            }

            function wa(a, b) {
                !Pd && (0 < a || q.debugmode) && (b = ["DEBUG", "INFO", _[552], "ERROR", _[435]][a] + ": " + b, Y.log(b), 2 < a && q.showerrors && setTimeout(function () {
                    try {
                        Y.showlog(!0)
                    } catch (a) {
                    }
                }, 500))
            }

            function cb(a, b) {
                if (!Pd) {
                    a = "" + a;
                    var w = 0 < J(a).indexOf("load");
                    a = yd(a).split("[br]").join("<br/>");
                    var e = xa.createItem(_[513]), f = xa.createItem(_[505]);
                    e.sprite || (e.create(), Y.controllayer.appendChild(e.sprite));
                    f.sprite || (f.create(), Y.controllayer.appendChild(f.sprite));
                    e.imagewidth = 1;
                    e.imageheight = 1;
                    e.loaded = !0;
                    e.handcursor = !1;
                    e.align = _[88];
                    e.width = "100%";
                    e.height = "100%";
                    e.alpha = .5;
                    e.keep = !0;
                    e = e.sprite.style;
                    e.backgroundColor = _[38];
                    e.zIndex = 99999998;
                    w && (f.visible = !1);
                    f.imagewidth = 1;
                    f.imageheight = 1;
                    f.loaded = !0;
                    f.handcursor = !1;
                    f.align = _[96];
                    f.y = 0;
                    f.width = "105%";
                    var n = d.ie || d.android ? -2 : 2;
                    f.height = n + 46 / ba;
                    f.keep = !0;
                    e = f.sprite.style;
                    e.backgroundColor = _[38];
                    e.color = _[55];
                    e.fontFamily = d.realDesktop && !d.ie ? _[32] : _[21];
                    e.fontSize = "12px";
                    e.margin = "-2px";
                    e.border = _[287];
                    b || (b = _[328]);
                    f.sprite.innerHTML = _[187] + b + "<br/>" + a + _[366];
                    e.zIndex = 99999999;
                    e[uc] = _[231];
                    f.jsplugin = {
                        onresize: function (a, b) {
                            var d = f.sprite.childNodes[0].clientHeight;
                            f.height = n + Math.max(46, d) / ba;
                            0 >= d && (f.imageheight = 1)
                        }
                    };
                    ea.disablewheel = !0;
                    ea.touchzoom = !1;
                    ea.usercontrol = !1;
                    setTimeout(function () {
                        try {
                            f.visible = !0
                        } catch (a) {
                        }
                    }, w ? 500 : 10)
                }
            }

            function Ye() {
                Ya.removeelements(!0);
                ce.stop();
                eb.unregister();
                Za.unload();
                Y.remove()
            }

            function Ze() {
                this.caller = this.args = this.cmd = null
            }

            function Db(a, b, d) {
                var e = null;
                if (null == a || "" == a) return null;
                for (var f = 0, n = 0, m = 0, h = 0, x = 0, q = 0, E = 0, A = 0, p = "", p = 0, p = a.charCodeAt(x); 0 < p && 32 >= p || 59 == p;) x++, p = a.charCodeAt(x);
                for (var u = $e, v = 0, n = a.length, f = x; f < n; f++) if (p = a.charCodeAt(f), 0 == A && 0 == E && 40 == p) m++; else if (0 == A && 0 == E && 41 == p) {
                    if (h++, m == h) {
                        q = f + 1;
                        p = a.slice(x, q);
                        u[v++] = p;
                        x = q;
                        for (p = a.charCodeAt(x); 0 < p && 32 >= p;) x++, p = a.charCodeAt(x);
                        p = a.charCodeAt(x);
                        if (59 != p) {
                            q = n;
                            break
                        }
                        x++;
                        for (p = a.charCodeAt(x); 59 == p || 0 < p && 32 >= p;) x++, p = a.charCodeAt(x);
                        f = x
                    }
                } else 34 == p ? 0 == E ? E = 1 : 1 == E && (E = 0) : 39 == p ? 0 == E ? E = 2 : 2 == E && (E = 0) : 91 == p && 0 == E ? A++ : 93 == p && 0 == E && A--;
                q != n && (p = a.slice(x, n), 0 < p.length && (u[v++] = p));
                n = v;
                for (f = 0; f < n; f++) if (p = u[f], E = p.indexOf("["), a = p.indexOf("]"), m = p.indexOf("("), 0 < E && 0 < a && m > E && m < a && (m = p.indexOf("(", a)), h = a = null, 0 < m ? (a = p.slice(0, m), h = Wa(p.slice(m + 1, p.lastIndexOf(")")), !1), 0 >= h.length && (h = null)) : (a = p, h = null), a = Wa(a), "//" != a.slice(0, 2)) {
                    x = [];
                    if (null != h) {
                        for (var q = h.length, m = 0, g = v = -1, t = E = 0, p = null, A = 0; A < q; A++) p = h.charCodeAt(A), 0 == E && 40 == p ? m++ : 0 == E && 41 == p ? m-- : 34 == p ? 1 == E && 0 <= v ? (v = -1, E = 0) : 0 == E && (v = A, E = 1) : 39 == p && (2 == E && 0 <= g ? (g = -1, E = 0) : 0 == E && (g = A, E = 2)), 44 == p && 0 == m && 0 == E && (p = Wa(h.slice(t, A)), x.push(p), t = A + 1);
                        0 == m && (p = Wa(h.slice(t, A)), x.push(p))
                    }
                    null == e && (e = []);
                    m = new Ze;
                    m.cmd = d ? a : J(a);
                    m.args = x;
                    m.caller = b;
                    e.push(m)
                }
                return e
            }

            function Ec() {
                this.z = this.y = this.x = 0
            }

            function Aa() {
                var a = _[137] !== typeof Float32Array ? new Float32Array(16) : Array(16);
                a[0] = a[5] = a[10] = a[15] = 1;
                a[1] = a[2] = a[3] = a[4] = a[6] = a[7] = a[8] = a[9] = a[11] = a[12] = a[13] = a[14] = 0;
                return a
            }

            function Ae(a, b, d, e, f, n, m, h, x, q, E, A, p, u, v, g, t) {
                a[0] = b;
                a[1] = d;
                a[2] = e;
                a[3] = f;
                a[4] = n;
                a[5] = m;
                a[6] = h;
                a[7] = x;
                a[8] = q;
                a[9] = E;
                a[10] = A;
                a[11] = p;
                a[12] = u;
                a[13] = v;
                a[14] = g;
                a[15] = t
            }

            function jc(a, b, d, e, f, n, m, h, x, q) {
                a[0] = b;
                a[1] = d;
                a[2] = e;
                a[3] = 0;
                a[4] = f;
                a[5] = n;
                a[6] = m;
                a[7] = 0;
                a[8] = h;
                a[9] = x;
                a[10] = q;
                a[11] = 0;
                a[12] = 0;
                a[13] = 0;
                a[14] = 0;
                a[15] = 1
            }

            function Qd(a, b) {
                a[0] = b[0];
                a[1] = b[1];
                a[2] = b[2];
                a[3] = b[3];
                a[4] = b[4];
                a[5] = b[5];
                a[6] = b[6];
                a[7] = b[7];
                a[8] = b[8];
                a[9] = b[9];
                a[10] = b[10];
                a[11] = b[11];
                a[12] = b[12];
                a[13] = b[13];
                a[14] = b[14];
                a[15] = b[15]
            }

            function vc(a, b) {
                var d = b[0], e = b[1], f = b[2], n = b[3], m = b[4], h = b[5], x = b[6], q = b[7], E = b[8], A = b[9],
                    p = b[10], u = b[11], v = b[12], g = b[13], t = b[14], C = b[15], z = a[0], y = a[1], F = a[2],
                    l = a[3];
                a[0] = z * d + y * m + F * E + l * v;
                a[1] = z * e + y * h + F * A + l * g;
                a[2] = z * f + y * x + F * p + l * t;
                a[3] = z * n + y * q + F * u + l * C;
                z = a[4];
                y = a[5];
                F = a[6];
                l = a[7];
                a[4] = z * d + y * m + F * E + l * v;
                a[5] = z * e + y * h + F * A + l * g;
                a[6] = z * f + y * x + F * p + l * t;
                a[7] = z * n + y * q + F * u + l * C;
                z = a[8];
                y = a[9];
                F = a[10];
                l = a[11];
                a[8] = z * d + y * m + F * E + l * v;
                a[9] = z * e + y * h + F * A + l * g;
                a[10] = z * f + y * x + F * p + l * t;
                a[11] = z * n + y * q + F * u + l * C;
                z = a[12];
                y = a[13];
                F = a[14];
                l = a[15];
                a[12] = z * d + y * m + F * E + l * v;
                a[13] = z * e + y * h + F * A + l * g;
                a[14] = z * f + y * x + F * p + l * t;
                a[15] = z * n + y * q + F * u + l * C
            }

            function af(a, b) {
                var d = a[0], e = a[1], f = a[2], n = a[3], m = a[4], h = a[5], x = a[6], q = a[7], E = a[8], A = a[9],
                    p = a[10], u = a[11], v = a[12], g = a[13], t = a[14], C = a[15], z = b[0], y = b[1], F = b[2],
                    l = b[3], c = b[4], D = b[5], B = b[6], P = b[7], r = b[8], Q = b[9], Ba = b[10], G = b[11],
                    X = b[12], na = b[13], N = b[14], S = b[15];
                a[0] = z * d + y * m + F * E + l * v;
                a[1] = z * e + y * h + F * A + l * g;
                a[2] = z * f + y * x + F * p + l * t;
                a[3] = z * n + y * q + F * u + l * C;
                a[4] = c * d + D * m + B * E + P * v;
                a[5] = c * e + D * h + B * A + P * g;
                a[6] = c * f + D * x + B * p + P * t;
                a[7] = c * n + D * q + B * u + P * C;
                a[8] = r * d + Q * m + Ba * E + G * v;
                a[9] = r * e + Q * h + Ba * A + G * g;
                a[10] = r * f + Q * x + Ba * p + G * t;
                a[11] = r * n + Q * q + Ba * u + G * C;
                a[12] = X * d + na * m + N * E + S * v;
                a[13] = X * e + na * h + N * A + S * g;
                a[14] = X * f + na * x + N * p + S * t;
                a[15] = X * n + na * q + N * u + S * C
            }

            function bf(a, b, d, e) {
                Ae(a, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, b, d, e, 1)
            }

            function od(a, b, d, e) {
                var f = a[3], n = a[7], m = a[11], h = a[15];
                a[0] += f * b;
                a[1] += f * d;
                a[2] += f * e;
                a[4] += n * b;
                a[5] += n * d;
                a[6] += n * e;
                a[8] += m * b;
                a[9] += m * d;
                a[10] += m * e;
                a[12] += h * b;
                a[13] += h * d;
                a[14] += h * e
            }

            function Rd(a, b) {
                var d = b[0], e = b[1], f = b[2], n = b[4], m = b[5], h = b[6], x = b[8], q = b[9], E = b[10], A = a[0],
                    p = a[1], u = a[2];
                a[0] = A * d + p * n + u * x;
                a[1] = A * e + p * m + u * q;
                a[2] = A * f + p * h + u * E;
                A = a[4];
                p = a[5];
                u = a[6];
                a[4] = A * d + p * n + u * x;
                a[5] = A * e + p * m + u * q;
                a[6] = A * f + p * h + u * E;
                A = a[8];
                p = a[9];
                u = a[10];
                a[8] = A * d + p * n + u * x;
                a[9] = A * e + p * m + u * q;
                a[10] = A * f + p * h + u * E;
                A = a[12];
                p = a[13];
                u = a[14];
                a[12] = A * d + p * n + u * x;
                a[13] = A * e + p * m + u * q;
                a[14] = A * f + p * h + u * E
            }

            function de(a, b, d, e) {
                var f, n, m;
                f = d * Z;
                d = Math.cos(f);
                n = Math.sin(f);
                f = -(b - 90) * Z;
                b = Math.cos(f);
                m = Math.sin(f);
                f = -e * Z;
                e = Math.cos(f);
                f = Math.sin(f);
                jc(a, b * e - m * n * f, b * f + m * n * e, -m * d, -d * f, d * e, n, m * e + b * n * f, m * f - b * n * e, b * d)
            }

            function cf(a, b, d) {
                d = -d * Z;
                var e = Math.cos(d);
                d = Math.sin(d);
                0 == b ? jc(a, 1, 0, 0, 0, e, d, 0, -d, e) : 1 == b ? jc(a, e, 0, -d, 0, 1, 0, d, 0, e) : jc(a, e, d, 0, -d, e, 0, 0, 0, 1)
            }

            function ee(a, b, d, e, f) {
                var n, m, h;
                f && (e = -e, d = -d, b = -b);
                n = -e * Z;
                e = Math.cos(n);
                m = Math.sin(n);
                n = -d * Z;
                d = Math.cos(n);
                h = Math.sin(n);
                n = -b * Z;
                b = Math.cos(n);
                n = Math.sin(n);
                f ? jc(a, d * b - h * m * n, d * n + h * m * b, -h * e, -e * n, e * b, m, h * b + d * m * n, h * n - d * m * b, d * e) : jc(a, b * d + n * m * h, n * e, -b * h + n * m * d, -n * d + b * m * h, b * e, n * h + b * m * d, e * h, -m, e * d)
            }

            function Be(a, b) {
                var d = b[0], e = b[1], f = b[2], n = b[4], m = b[5], h = b[6], x = b[8], q = b[9], E = b[10],
                    A = 1 / (d * m * E + e * h * x + n * q * f - x * m * f - n * e * E - q * h * d);
                jc(a, (m * E - q * h) * A, (-e * E + q * f) * A, (e * h - m * f) * A, (-n * E + x * h) * A, (d * E - x * f) * A, (-d * h + n * f) * A, (n * q - x * m) * A, (-d * q + x * e) * A, (d * m - n * e) * A)
            }

            function Sd(a, b) {
                var d = b.x, e = b.y, f = b.z;
                b.x = d * a[0] + e * a[4] + f * a[8];
                b.y = d * a[1] + e * a[5] + f * a[9];
                b.z = d * a[2] + e * a[6] + f * a[10]
            }

            function fe(a, b) {
                var d = b[0], e = b[1], f = b[2];
                b[0] = d * a[0] + e * a[4] + f * a[8];
                b[1] = d * a[1] + e * a[5] + f * a[9];
                b[2] = d * a[2] + e * a[6] + f * a[10]
            }

            function Tc(a) {
                return d.fractionalscaling ? Math.round(a * (d.pixelratio + 1E-7)) / d.pixelratio : Math.round(a)
            }

            function Fc(a, b, d, e) {
                a = ("" + a).split(d);
                e = e ? e : [0, 0, 0, 0];
                d = a.length;
                4 == d ? (e[0] = a[0] * b + .5 | 0, e[1] = a[1] * b + .5 | 0, e[2] = a[2] * b + .5 | 0, e[3] = a[3] * b + .5 | 0) : 3 == d ? (e[0] = a[0] * b + .5 | 0, e[1] = e[3] = a[1] * b + .5 | 0, e[2] = a[2] * b + .5 | 0) : 2 == d ? (e[0] = e[2] = a[0] * b + .5 | 0, e[1] = e[3] = a[1] * b + .5 | 0) : e[0] = e[1] = e[2] = e[3] = a[0] * b + .5 | 0;
                return e
            }

            function Ce(a) {
                var b = a && a._poly;
                b && (b.setAttribute("fill", !0 === a.polyline ? "none" : fa(a.fillcolor, a.fillalpha)), b.setAttribute(_[609], fa(a.bordercolor, a.borderalpha)), b.setAttribute(_[353], a.borderwidth * ba))
            }

            function df(a) {
                var b = r.r_rmatrix, d = r.r_zoom, e = r.r_zoff, f = .5 * Ua, n = .5 * Ea + r.r_yoff,
                    m = r._stereographic ? 10 - e : 1 - e * (1 - Math.min(r.fisheye * r.fisheye, 1)), h = a._poly;
                if (!h) {
                    var x = Y.svglayer;
                    x || (x = document.createElementNS(_[101], "svg"), x.setAttribute(_[64], "100%"), x.setAttribute(_[17], "100%"), x.style.position = _[0], x.style.left = 0, x.style.top = 0, x.style.display = la.stereo ? "none" : "", Y.svglayer = x, Y.hotspotlayer.appendChild(x));
                    h = document.createElementNS(_[101], ma(a.polyline) ? _[149] : _[536]);
                    x.appendChild(h);
                    h.kobject = a;
                    a._poly = h;
                    Ce(a);
                    h.style.opacity = Number(a.DATA.alpha) * (a.keep ? 1 : Gc);
                    a._assignEvents(h);
                    setTimeout(function () {
                        a.loading = !1;
                        a.loaded = !0;
                        aa.callaction(a.onloaded, a)
                    }, 7)
                }
                var x = a.point.getArray(), q = x.length, E = [];
                if (1 < q && a.DATA.visible && 0 == la.stereo) {
                    var A, p, u, v = new Ec, g = new Ec, t;
                    p = x[q - 1];
                    u = (180 - Number(p.ath)) * Z;
                    p = Number(p.atv) * Z;
                    v.x = 1E3 * Math.cos(p) * Math.cos(u);
                    v.z = 1E3 * Math.cos(p) * Math.sin(u);
                    v.y = 1E3 * Math.sin(p);
                    Sd(b, v);
                    for (A = 0; A < q; A++) p = x[A], u = (180 - Number(p.ath)) * Z, p = Number(p.atv) * Z, g.x = 1E3 * Math.cos(p) * Math.cos(u), g.z = 1E3 * Math.cos(p) * Math.sin(u), g.y = 1E3 * Math.sin(p), Sd(b, g), g.z >= m ? (v.z >= m || (t = (m - v.z) / (g.z - v.z), p = d / (m + e), u = (v.x + (g.x - v.x) * t) * p + f, p = (v.y + (g.y - v.y) * t) * p + n, E.push(u.toFixed(2) + "," + p.toFixed(2))), p = d / (g.z + e), u = g.x * p + f, p = g.y * p + n, E.push(u.toFixed(2) + "," + p.toFixed(2))) : v.z >= m && (t = (m - g.z) / (v.z - g.z), p = d / (m + e), u = (g.x + (v.x - g.x) * t) * p + f, p = (g.y + (v.y - g.y) * t) * p + n, E.push(u.toFixed(2) + "," + p.toFixed(2))), v.x = g.x, v.y = g.y, v.z = g.z;
                    0 == a.polyline && 2 < E.length && E.push(E[0]);
                    h.style.pointerEvents = a.DATA.enabled ? _[309] : "none";
                    h.style.cursor = a.DATA.handcursor ? _[10] : _[5];
                    h.style.visibility = a.DATA.visible ? _[16] : _[6]
                }
                h.setAttribute(_[577], E.join(" "))
            }

            function ef(a, b) {
                var d = 0, e, f, n;
                if (a && b) {
                    d = a.DATA.zorder;
                    e = b.DATA.zorder;
                    f = null == d || isNaN(d);
                    n = null == e || isNaN(e);
                    if (d == e || f && n) if (d = a.DATA.depth, e = b.DATA.depth, f = null == d || isNaN(d), n = null == e || isNaN(e), d == e || f && n) d = a.index, e = b.index, f = n = !1;
                    d = f ? -1 : n ? 1 : d - e
                }
                return d
            }

            function ge(a, b) {
                if (void 0 === b && Sb) {
                    var w = wb.getArray();
                    w.sort(ef);
                    var e = w.length, f;
                    for (f = 0; f < e; f++) {
                        var n = w[f];
                        n && (n.index = f)
                    }
                    Sb = !1
                }
                var w = wb.getArray(), e = w.length, m;
                f = r.r_rmatrix;
                var n = Ua, h = Ea, x = ba, q = .5 * n, E = .5 * h, A = r.r_zoom,
                    p = r.r_hlookat + Number(L.viewoffset), u = r.r_vlookat, v = r.r_vlookatA, g = r.r_yoff,
                    t = r.r_zoff, C = r._camroll;
                m = r._stereographic;
                var z;
                z = 1 * (1 + t / 1E3);
                var y = 50;
                0 < t && (m ? y -= t : (y = 20 - t, -125 > y && (y = -125)));
                var F = 0, l = 0;
                m = 0;
                void 0 !== b && (m = b, e = m + 1);
                var c = Tb, D = d.realDesktop && 250 > A ? 1.5 : 0, B = Df, P = Ef;
                B[1] = q;
                B[5] = he;
                B[9] = va(p);
                B[15] = c + "," + c + "," + c;
                var ga = qb, Q = new Ec, Ba = null;
                if (!la.stereo) for (; m < e; m++) {
                    var G = w[m];
                    if (G && G._ready) {
                        var X = null == G.DATA.url && 0 < G.point.count, Ba = null;
                        if (!X) {
                            if (G.DATA.webGL) continue;
                            Ba = G.sprite;
                            if (!Ba) continue
                        } else if (!0 !== G._ispoly) {
                            G._ispoly = !0;
                            var na = G;
                            na.createVars([_[149], na.polyline ? ma(na.polyline) : !1, Hc, _[466], na.fillcolor ? Number(na.fillcolor) : 11184810, Hc, _[465], na.fillalpha ? Number(na.fillalpha) : .5, Hc, _[126], na.borderwidth ? Number(na.borderwidth) : 3, Hc, _[128], na.bordercolor ? Number(na.bordercolor) : 11184810, Hc, _[131], na.borderalpha ? Number(na.borderalpha) : 1, Hc])
                        }
                        0 != G.haschanged_flags && G.processUpdates();
                        var N = G.getparsed(), Ba = Ba ? Ba.style : null, na = Number(G.DATA.alpha) * (G.keep ? 1 : Gc);
                        Ba && (Ba.opacity = na);
                        G._poly && (G._poly.style.opacity = na);
                        na = a || G.poschanged || G.forceupdate;
                        if (X) na && (df(G), G.poschanged = !1); else if (G.DATA.visible && G.loaded && na) {
                            G.poschanged = !1;
                            X = Number(G.DATA.flying);
                            F = (1 - X) * Number(G.DATA.ath);
                            l = (1 - X) * Number(G.DATA.atv);
                            0 < X && (F += X * md(p, G.DATA.ath), l += X * md(u, G.DATA.atv));
                            var na = !1, S = (180 - F) * Z, K = l * Z;
                            Q.x = 1E3 * Math.cos(K) * Math.cos(S);
                            Q.z = 1E3 * Math.cos(K) * Math.sin(S);
                            Q.y = 1E3 * Math.sin(K);
                            Sd(f, Q);
                            var xb = !1, ra = Q.x, k = Q.y, S = Q.z;
                            if (S >= y - t) var I = A / (S + t), ra = ra * I, k = k * I + g,
                                xb = 8E3 > Math.abs(ra) && 8E3 > Math.abs(k), ra = ra + q, k = k + E;
                            if (G.DATA.distorted) {
                                Ba.pointerEvents = 50 <= S + t && G.DATA.enabled ? "auto" : "none";
                                na = !0;
                                K = G.DATA.scale;
                                S = Number(G.DATA.scale);
                                isNaN(S) && (S = 1);
                                G._hszscale = S;
                                1 == G.scaleflying && (S = S * (1 - X) + S / (A / (h / 2)) * z * X);
                                G.DATA.scale = 1;
                                G.updatepluginpos(_[213]);
                                G.DATA.scale = K;
                                var R = G.pixelwidth, T = G.pixelheight, U = K = 1;
                                G._use_css_scale && (K = R / G.imagewidth, U = T / G.imageheight);
                                var ha = .5 * -T, ra = k = 0, Ka = G._oxpix, yb = G._oypix, k = k + .5 * -R / K,
                                    ra = ra + ha / U, k = k - (N.ex - .5) * R / K, ra = ra - (N.ey - .5) * T / U,
                                    N = -500, R = G._deepscale, T = G.DATA.depth;
                                isNaN(T) && (T = 1E3);
                                ha = 1;
                                0 == (T | 0) ? (N = 0, R = 1) : ha = 1E3 / T;
                                2 == Ic && (R *= 15);
                                R /= 1 + X + D;
                                if (d.firefox || 6 < d.iosversion && .1 > G.scale) R = 10 / (1 + X);
                                0 < t && (R = 1);
                                S = S * R * ha;
                                N *= R;
                                Ka = Ka * R * ha;
                                yb = yb * R * ha;
                                if (0 < t || d.firefox) na = xb;
                                xb = R * ha * c / 2;
                                xb = _[340] + xb * G.tx + "px," + xb * G.ty + "px," + -xb * G.tz + "px) ";
                                B[3] = va(E + g * (1 - X));
                                B[7] = va(-(v * (1 - X) + u * X));
                                B[11] = xb + _[146] + va(-F);
                                B[13] = va(l);
                                B[17] = N;
                                B[19] = va(1 * G.DATA.rotate + X * C);
                                B[21] = Ka;
                                B[23] = yb;
                                G.inverserotation ? (B[25] = "Y(" + va(G.ry), B[27] = "X(" + va(G.rx), B[29] = "Z(" + va(-G.rz)) : (B[25] = "Z(" + va(G.rz), B[27] = "X(" + va(-G.rx), B[29] = "Y(" + va(-G.ry));
                                B[31] = S * K;
                                B[33] = S * U;
                                G._istextfield && G.border && 0 < G.borderwidth && (X = G.borderwidth * (ba - 1), k += X, ra += X);
                                B[35] = k;
                                B[37] = ra;
                                Ba[ga + _[95]] = "0 0";
                                Ba[ga] = B.join("")
                            } else if (S >= y && (S = 1, xb)) {
                                if (G.zoom || G.distorted) S *= Number(2 * (1 - X) * I + X * ba) / ba;
                                K = G.DATA.scale;
                                G.updatepluginpos(_[228]);
                                G.DATA.scale = K;
                                R = G.pixelwidth;
                                T = G.pixelheight;
                                U = K = 1;
                                G._use_css_scale && (K = R / G.imagewidth, U = T / G.imageheight);
                                F = ra;
                                l = k;
                                0 == G.accuracy && (F = Math.round(F), l = Math.round(l));
                                ra = k = 0;
                                Ka = G._oxpix * S;
                                yb = G._oypix * S;
                                ha = 0 != K ? R / K : 0;
                                xb = 0 != U ? T / U : 0;
                                k -= (N.ex - .5) * ha;
                                ra -= (N.ey - .5) * xb;
                                N = 2 * S * (Math.max(R, T) * G.DATA.scale + Math.max(Ka, yb));
                                if (0 < F + N || 0 < l + N || F - N < n || l - N < h) G._use_css_scale ? S *= x : (k *= x, ra *= x), na = -ha / 2, N = -xb / 2, G._use_css_scale || (na *= x, N *= x), G._istextfield && 0 == G.accuracy && (F |= 0, l |= 0, na |= 0, N |= 0, Ka |= 0, yb |= 0, k |= 0, ra |= 0), P[1] = va(F), P[3] = va(l), P[5] = va(na), P[7] = va(N), P[9] = va(1 * G.DATA.rotate - C * (1 - X)), P[11] = Ka, P[13] = yb, P[15] = S * K, P[17] = S * U, P[19] = va(k), P[21] = va(ra), X = P.join(""), X = Uc && 2 > Ic && .5 < Number(G.zorder2) ? _[391] + (999999999E3 + G._zdeep) + "px) " + X : _[308] + X, Ba[ga + _[95]] = _[538], Ba[ga] = X, na = !0
                            }
                            0 == G.forceupdate && (X = na ? "" : "none", X != Ba.display && (Ba.display = X));
                            G.forceupdate = !1
                        }
                    }
                }
            }

            function Ff(a, b, w, e) {
                function f() {
                    var a = Ha(), c = a.style;
                    c.marginTop = c.marginBottom = u[17] * C + "px";
                    c.height = "1px";
                    c.backgroundColor = fa(u[18]);
                    "none" != u[19] && (c.borderBottom = _[404] + fa(u[19]));
                    z.appendChild(a)
                }

                function n(a) {
                    var c = a.changedTouches;
                    return (c && 0 < c.length ? c[0] : a).pageY
                }

                function m(a, c, b) {
                    var f = Ha(), l = f.style;
                    l.padding = u[20] * C + "px";
                    l.border = u[21] + _[33] + fa(u[22]);
                    l.borderRadius = u[23] * C + "px";
                    l.marginTop = u[24] * C + "px";
                    l.marginBottom = u[24] * C + "px";
                    d.androidstock && (l[_[42]] = _[12]);
                    eb.touch && da(f, d.browser.events.touchstart, function (a) {
                        function R(R) {
                            R = n(R) - U;
                            if (g > Ea) {
                                var a = k + R | 0;
                                a < Ea - g - 10 ? a = Ea - g - 10 : 10 < a && (a = 10);
                                t.style.top = a + "px"
                            }
                            15 < Math.abs(R) && (f.onmouseout(), l = !0)
                        }

                        function T() {
                            qa(W, e, R, !0);
                            qa(W, w, T, !0);
                            if (0 == l) f.onclick()
                        }

                        Da(a);
                        a.stopPropagation();
                        if (b && c) {
                            f.onmouseover();
                            var U = n(a), k = parseInt(t.style.top) | 0, l = !1, e = d.browser.events.touchmove,
                                w = d.browser.events.touchend;
                            da(W, e, R, !0);
                            da(W, w, T, !0)
                        }
                    }, !0);
                    b && c ? (l.cursor = _[10], f.onmousedown = function (a) {
                        a.stopPropagation()
                    }, f.onmouseover = function () {
                        l = this.style;
                        l.background = fa(u[25]);
                        l.border = u[21] + _[33] + fa(u[26]);
                        l.color = fa(u[27])
                    }, f.onmouseout = function () {
                        l = this.style;
                        l.background = "none";
                        l.border = u[21] + _[33] + fa(u[22]);
                        l.color = fa(u[4])
                    }, f.oncontextmenu = function (a) {
                        Da(a);
                        a.stopPropagation();
                        f.onclick()
                    }, f.onclick = function (a) {
                        e ? (l = t.style, l.opacity = 1, l.transition = _[121], l.opacity = 0, setTimeout(w, 300)) : w();
                        aa.callaction(b)
                    }) : (0 == c && (l.color = fa(u[5])), l.cursor = _[5]);
                    var k = Ha();
                    k.style.marginLeft = u[28] * C + "px";
                    k.style.marginRight = u[29] * C + "px";
                    k.innerHTML = a;
                    f.appendChild(k);
                    z.appendChild(f);
                    return k
                }

                function h() {
                    function a() {
                        return .4 > Math.random() ? " " : _[162]
                    }

                    var c = m("About" + a() + "the" + a() + _[59] + a() + _[499] + a() + _[459], !0, function () {
                        aa.openurl(_[240])
                    });
                    try {
                        (new MutationObserver(function (a) {
                            a = W.getComputedStyle(c);
                            9 > Math.min(parseInt(a.width) | 0, parseInt(a.height) | 0) && (q = {}, cb(_[122]))
                        })).observe(c, {attributes: !1, childList: !0, characterData: !0, subtree: !0})
                    } catch (b) {
                    }
                }

                function x() {
                    m(Y.fullscreen ? p.exitfs : p.enterfs, !0, function () {
                        q.fullscreen = !q.fullscreen
                    })
                }

                function r() {
                    var a = d.android, c = d.infoString, c = c.split(_[496]).join("");
                    m((ga ? "" : _[156] + q.version + _[281] + q.build + _[312]) + (a ? _[558] : "") + c + Za.infoString + (a ? _[489] : ""), !0, null)
                }

                function E() {
                    Ia && Ia[2] && m(Ia[2], !0, function () {
                        aa.openurl(Ia[3])
                    })
                }

                function A() {
                    var c = t.getBoundingClientRect(), d = c.width, c = c.height, l = b;
                    if (0 < d && 0 < c) {
                        g = c;
                        e && (a -= d >> 1, a + d > Ua && (a = Ua - d - 10), 10 > a && (a = 10));
                        for (; a + d > Ua;) a -= d / 2;
                        0 > a && (a = 0);
                        b + c > Ea && (b = e ? Ea - c - 10 : b - c);
                        0 > b && (e ? b = Ea - c >> 1 : l > Ea / 2 ? (b = l - c, 0 > b && (b = 4)) : (b = l, b + c > Ea && (b = Ea - 4 - c)));
                        v = t.style;
                        v.left = (a | 0) + "px";
                        v.top = (b | 0) + "px";
                        e && (v.transition = _[121], v.opacity = 1)
                    } else 10 > ++na && setTimeout(A, 32)
                }

                var p = q.contextmenu;
                if (e && 0 == p.touch) return null;
                za(_[329], !0);
                var u = null;
                p.customstyle && (_[133] == d.browser.domain || 0 == d.realDesktop || d.realDesktop && 0 != (La & 16)) && (u = J(p.customstyle).split("|"), 30 != u.length && (u = null));
                null == u && (u = (d.mac ? "default|14|default|0xFFFFFF|0x000000|0xBBBBBB|0|0|5|2|2|8|0x66000000|0|0|1|4|5|0xEEEEEE|none|1|0|0|0|3|0xEEEEEE|0|0|20|12" : "default|default|150%|0xFFFFFF|0x000000|0xBBBBBB|1|0xBBBBBB|0|2|2|8|0x66000000|0|0|2|2|5|0xE0E0E0|none|4|0|0|0|3|0xEEEEEE|0|0|18|12").split("|"));
                var v = null, g = 0, t = Ha();
                t.onselectstart = _[322];
                d.desktop && d.chrome && (t.style.opacity = .999);
                if (d.linux || d.android) u[1] = 12;
                v = t.style;
                v.position = _[0];
                v.zIndex = 99999999999;
                var C = 1;
                d.androidstock ? C = d.pixelratio : d.chrome && 40 > d.chromeversion && (v[qb] = _[28]);
                _[5] != u[0] ? v.fontFamily = u[0] : d.ios ? (v.fontFamily = _[21], v.fontWeight = _[530], _[5] == u[1] && (u[1] = 14)) : (v.font = "menu", d.firefox || 1 == d.pixelratio || (v.fontSize = "12px"));
                _[5] != u[1] && (v.fontSize = u[1] * C * (d.android ? 1.2 : 1) + "px");
                _[5] != u[2] && (v.lineHeight = u[2]);
                v.background = fa(u[3]);
                v.color = fa(u[4]);
                v.border = u[6] + _[33] + fa(u[7]);
                v.borderRadius = u[8] * C + "px";
                v.minWidth = "150px";
                v.textAlign = "left";
                v[uc] = u[9] + "px " + u[10] + "px " + u[11] + "px " + fa(u[12]);
                var z = Ha(), v = z.style;
                v.border = u[13] + _[33] + fa(u[14]);
                v.paddingTop = u[15] * C + "px";
                v.paddingBottom = u[16] * C + "px";
                eb.touch && da(z, d.browser.events.touchstart, function (a) {
                    Da(a);
                    a.stopPropagation()
                }, !1);
                t.appendChild(z);
                var y = p.item.getArray(), F, l, c = 0, D, B = y.length, P, ga = 0 != (La & 16), Q = ga, Ba = ga,
                    G = !1, X = !1;
                for (P = 0; P < B; P++) if (F = y[P]) if (l = F.caption) l = ae(unescape(l)), F.separator && 0 < c && f(), D = J(l), _[59] == D ? 0 == Q && (Q = !0, h(), c++) : Ia && _[507] == D ? 0 == Ba && (Ba = !0, E(), c++) : _[132] == D ? (G = !0, d.fullscreensupport && (x(), c++)) : _[393] == D ? (X = !0, r(), c++) : (D = F.visible && (!F.showif || aa.calc(null, F.showif))) ? (m(l, F.enabled, F.onclick), c++) : 0 == D && F.separator && 0 < c && z.removeChild(z.lastChild);
                Ia && 0 == Ba && (0 < c && (f(), c = 0), E());
                0 == Q && (0 < c && f(), h(), c++);
                0 == G && 1 == p.fullscreen && d.fullscreensupport && (x(), c++);
                0 == X && 1 == p.versioninfo && (0 < c && f(), r(), c++);
                if (0 == c) return null;
                v = t.style;
                v.left = _[144];
                v.top = "10px";
                var na = 0;
                e && (v.opacity = 0);
                setTimeout(A, 16);
                return t
            }

            function Gf() {
                function a(a, b, d) {
                    a.__defineGetter__(b, d)
                }

                q = new tc;
                q.set = M;
                q.get = O;
                q.call = nd;
                q.trace = wa;
                Object.defineProperty(q, _[555], {value: aa});
                q.Kloader = oa;
                q["true"] = !0;
                q[_[27]] = !1;
                q.strict = !1;
                q.version = _[481];
                q.build = _[431];
                q.buildversion = q.version;
                q.debugmode = !1;
                q.tweentypes = pd;
                q.basedir = _[414];
                q.lasterror = "";
                q.showtext = function () {
                };
                q.bgcolor = 0;
                q[$b[0]] = q[$b[1]] = !0;
                q.haveexternalinterface = !0;
                q.havenetworkaccess = !0;
                q.device = d;
                q.browser = d.browser;
                q._have_top_access = d.topAccess;
                q._isrealdesktop = d.realDesktop;
                q.iosversion = d.iosversion;
                q.isphone = d.iphone;
                q.ispad = d.ipad;
                q.isandroid = d.android;
                q.ishtml5 = !0;
                q.isflash = !1;
                q.ismobile = d.mobile;
                q.istablet = d.tablet;
                q.isdesktop = d.desktop;
                q.istouchdevice = d.touchdevice;
                q.isgesturedevice = d.gesturedevice;
                a(q, _[413], function () {
                    return kc / ba
                });
                a(q, _[400], function () {
                    return Eb / ba
                });
                Ga(q, _[422], function () {
                    return ba
                }, function (a) {
                    a = Number(a);
                    isNaN(a) && (a = 1);
                    1E-4 < Math.abs(a - ba) && (ba = a, Y.onResize(null, !0))
                });
                ac = q.area = new Hf;
                q.wheeldelta = 0;
                q.wheeldelta_raw = Number.NaN;
                q.wheeldelta_touchscale = 0;
                q.keycode = 0;
                q.idletime = .5;
                q.__defineGetter__(_[452], Sa);
                q.__defineGetter__(_[587], Math.random);
                Ga(q, _[132], function () {
                    return Y.fullscreen
                }, function (a) {
                    Y.setFullscreen(ma(a))
                });
                Ga(q, _[450], function () {
                    return oa.swfpath
                }, function (a) {
                    oa.swfpath = a
                });
                q.hlookat_moveforce = 0;
                q.vlookat_moveforce = 0;
                q.fov_moveforce = 0;
                q.multireslevel = 0;
                q.lockmultireslevel = "-1";
                q.downloadlockedlevel = !1;
                H = q.mouse = {
                    downLayer: !1,
                    down: !1,
                    up: !1,
                    moved: !1,
                    dragging: !1,
                    vinvert: !1,
                    downx: 0,
                    downy: 0,
                    x: 0,
                    y: 0,
                    clickx: 0,
                    clicky: 0
                };
                a(H, _[581], function () {
                    return H.x + ac.pixelx
                });
                a(H, _[580], function () {
                    return H.y + ac.pixely
                });
                a(H, "dd", function () {
                    var a = H.x - H.downx, b = H.y - H.downy;
                    return Math.sqrt(a * a + b * b)
                });
                r = q.view = new If;
                q.screentosphere = r.screentosphere;
                q.spheretoscreen = r.spheretoscreen;
                q.loadFile = oa.loadfile;
                q.decodeLicense = oa.decodeLicense;
                q.haveLicense = Cc(function (a) {
                    var b = !1, d = La;
                    switch (a.toLowerCase().charCodeAt(0)) {
                        case 107:
                            b = 0 != (d & 1);
                            break;
                        case 109:
                            b = 0 != (d & 128);
                            break;
                        case 98:
                            b = 0 != (d & 16)
                    }
                    return b
                });
                q.parsepath = q.parsePath = oa.parsePath;
                q.contextmenu = new Jf;
                ea = q.control = new Kf;
                ie = q.cursors = new Lf;
                L = q.image = {};
                xa = q.plugin = new Gb(Jc);
                q.layer = xa;
                wb = q.hotspot = new Gb(Mf);
                ic = q.events = new Gb(null, !0);
                ic.dispatch = za;
                la = q.display = {
                    currentfps: 60,
                    r_ft: 16,
                    FRM: 0,
                    _framebufferscale: 1,
                    mipmapping: "auto",
                    loadwhilemoving: d.realDesktop ? "true" : "auto",
                    _stereo: !1,
                    stereooverlap: 0,
                    hardwarelimit: d.realDesktop && d.safari && "6" > d.safariversion ? 2E3 : d.realDesktop && !d.webgl ? 2560 : d.iphone && d.retina && !d.iphone5 ? 800 : d.iphone && !d.retina ? 600 : d.ipod && d.retina ? 640 : d.mobile || d.tablet ? 1024 : 4096
                };
                Ga(la, _[160], function () {
                    return la._stereo
                }, function (a) {
                    a = ma(a);
                    la._stereo != a && (a = a && d.webgl, la._stereo = a, Y.svglayer && (Y.svglayer.style.display = a ? "none" : ""), r.haschanged = !0)
                });
                Ga(la, _[449], function () {
                    var a = la.FRM | 0;
                    return 0 == a ? "auto" : "" + a
                }, function (a) {
                    a |= 0;
                    0 > a && (a = 0);
                    la.FRM = a
                });
                Ga(la, _[257], function () {
                    return la._framebufferscale
                }, function (a) {
                    a = Number(a);
                    if (isNaN(a) || 0 == a) a = 1;
                    la._framebufferscale = a;
                    Y.onResize(null, !0)
                });
                q.memory = {maxmem: d.realDesktop ? Math.min(Math.max(150, 48 * screen.availWidth * screen.availHeight >> 20), 400) : d.ios && 7.1 > d.iosversion || d.iphone && !d.iphone5 ? 40 : 50};
                q.network = {retrycount: 2};
                Wc = q.progress = {};
                Wc.progress = 0;
                mb = new Jc;
                mb.name = "STAGE";
                nb = new Jc;
                nb.name = _[557];
                xa.alpha = 1;
                wb.alpha = 1;
                wb.visible = !0;
                Ga(xa, _[16], function () {
                    return "none" != Y.pluginlayer.style.display
                }, function (a) {
                    Y.pluginlayer.style.display = ma(a) ? "" : "none"
                });
                q.xml = {url: "", content: null, scene: null, sceneNEW: null};
                var b = q.security = {};
                Ga(b, "cors", function () {
                    return Yb
                }, function (a) {
                    Yb = a
                });
                vb = q.autorotate = new Nf;
                q.math = function () {
                    function a(b) {
                        var d = O(b, aa.actioncaller);
                        return Number(null !== d ? d : b)
                    }

                    function b(d) {
                        return function (b, f) {
                            M(b, Math[d](a(void 0 === f ? b : f)), !1, aa.actioncaller)
                        }
                    }

                    var d = {}, n = _[176].split(" "), m;
                    for (m in n) {
                        var h = n[m];
                        d[h] = b(h)
                    }
                    d.pi = Na;
                    d.atan2 = function (b, d, f) {
                        M(b, Math.atan2(a(d), a(f)), !1, aa.actioncaller)
                    };
                    d.min = function () {
                        var b = arguments, d = b.length, f = 3 > d ? 0 : 1, e = a(b[f]);
                        for (f++; f < d; f++) e = Math.min(e, a(b[f]));
                        M(b[0], e, !1, aa.actioncaller)
                    };
                    d.max = function () {
                        var b = arguments, d = b.length, f = 3 > d ? 0 : 1, e = a(b[f]);
                        for (f++; f < d; f++) e = Math.max(e, a(b[f]));
                        M(b[0], e, !1, aa.actioncaller)
                    };
                    d.pow = aa.pow;
                    return d
                }();
                q.action = new Gb;
                q.scene = new Gb;
                q.data = new Gb;
                q.addlayer = q.addplugin = function (a) {
                    if (!Ad(a, _[235] + a + ")")) return null;
                    a = xa.createItem(a);
                    if (!a) return null;
                    null == a.sprite && (a._dyn = !0, a.create(), null == a._parent && Y.pluginlayer.appendChild(a.sprite));
                    return a
                };
                q.removelayer = q.removeplugin = function (a, b) {
                    var d = xa.getItem(a);
                    if (d) {
                        if (ma(b)) {
                            var n = d._childs;
                            if (n) for (; 0 < n.length;) q.removeplugin(n[0].name, !0)
                        }
                        d.visible = !1;
                        d.parent = null;
                        d.sprite && Y.pluginlayer.removeChild(d.sprite);
                        d.destroy();
                        xa.removeItem(a)
                    }
                };
                q.addhotspot = function (a) {
                    if (!Ad(a, _[385] + a + ")")) return null;
                    a = wb.createItem(a);
                    if (!a) return null;
                    0 == a._ready && (a._dyn = !0, a.create(), a.sprite && Y.hotspotlayer.appendChild(a.sprite));
                    je = !0;
                    return a
                };
                q.removehotspot = function (a) {
                    var b = wb.getItem(a);
                    if (b) {
                        b.visible = !1;
                        b.parent = null;
                        if (b.sprite) try {
                            Y.hotspotlayer.removeChild(b.sprite)
                        } catch (d) {
                        }
                        if (b._poly) {
                            try {
                                Y.svglayer.removeChild(b._poly)
                            } catch (n) {
                            }
                            b._poly.kobject = null;
                            b._poly = null
                        }
                        b.destroy();
                        wb.removeItem(a)
                    }
                }
            }

            function Of() {
                var a = q.webVR;
                aa.processTicks();
                var b = r.haschanged;
                $a++;
                la.frame = $a;
                Za.fps();
                var w = Y.resizeCheck(), e = aa.processAnimations(), b = b | r.haschanged;
                if (d.webgl || !d.ios || d.ios && 5 <= d.iosversion) e = !1;
                e |= je;
                je = !1;
                e && (r._hlookat += (($a & 1) - .5) / (1 + r.r_zoom), b = !0);
                b |= Ya.handleloading();
                b |= eb.handleFrictions();
                b |= Ya.idlecheck();
                b |= r.continuousupdates;
                aa.processTicks();
                Qa && (b = !0, Qa = !1);
                a && a.enabled && (b = !0);
                b || w ? (Za.startFrame(), Ya.updateview(0, !0), Za.finishFrame()) : (r.haschanged && r.updateView(), ge(!1), d.webgl && Za.hittesthotspots(null));
                Ya.updateplugins(w);
                d.desktop && Ya.checkHovering();
                a && a.enabled && a.submitframe && a.submitframe()
            }

            var bc = this;
            try {
                !Object.prototype.__defineGetter__ && Object.defineProperty({}, "x", {
                    get: function () {
                        return !0
                    }
                }).x && (Object.defineProperty(Object.prototype, _[259], {
                    enumerable: !1,
                    configurable: !0,
                    value: function (a, b) {
                        Object.defineProperty(this, a, {get: b, enumerable: !0, configurable: !0})
                    }
                }), Object.defineProperty(Object.prototype, _[260], {
                    enumerable: !1,
                    configurable: !0,
                    value: function (a, b) {
                        Object.defineProperty(this, a, {set: b, enumerable: !0, configurable: !0})
                    }
                }))
            } catch (Sf) {
            }
            var db = navigator, ca = document, W = window, Na = Math.PI, Z = Na / 180, qd = Number.NaN, Td = 0,
                Sa = W.performance && W.performance.now ? function () {
                    return W.performance.now() - Td
                } : function () {
                    return (new Date).getTime() - Td
                }, Td = Sa(), Xc = String.fromCharCode, q = null, kc = 0, Eb = 0, Ua = 0, Ea = 0, ba = 1, Ud = 1,
                Yc = 0, ac = null, vb = null, ea = null, ie = null, la = null, ic = null, Wc = null, wb = null,
                L = null, H = null, xa = null, r = null, mb = null, nb = null, ke = !1, wc = !1, le = !1, De = 0,
                $a = 0, Vd = 60, La = 14, me = null, $b = [_[408], _[611]], Ia = null, Yb = "", Zc = null, Ib = null,
                Ub = null, ob = null, je = !1, xc = 0, sc = 0, Qa = !1, Uc = !0, d = {
                    runDetection: function (a) {
                        function b() {
                            var a = screen.width, c = screen.height, b = d.topAccess ? top : W, k = b.innerWidth,
                                l = b.innerHeight, b = b.orientation | 0, R = a / (c + 1), T = k / (l + 1);
                            if (1 < R && 1 > T || 1 > R && 1 < T) R = a, a = c, c = R;
                            E.width = a;
                            E.height = c;
                            E.orientation = b;
                            d.window = {width: k, height: l};
                            a /= k;
                            return d.pagescale = a
                        }

                        function w(a, c) {
                            for (var b = ["ms", "Moz", _[576], "O"], d = 0; 5 > d; d++) {
                                var l = 0 < d ? b[d - 1] + a.slice(0, 1).toUpperCase() + a.slice(1) : a;
                                if (void 0 !== S.style[l]) return l
                            }
                            return null
                        }

                        var e = "flash html5 mobile tablet desktop ie edge webkit firefox ios iosversion iphone ipod ipad retina hidpi android androidstock blackberry touchdevice gesturedevice fullscreensupport windows mac linux air standalone silk".split(" "),
                            f, n, m, h, q = ca.documentElement, r = a.mobilescale;
                        isNaN(r) && (r = .5);
                        n = e.length;
                        for (f = 0; f < n; f++) m = e[f], d[m] = !1;
                        d.html5 = d.html = !0;
                        d.iosversion = 0;
                        d.css3d = !1;
                        d.webgl = !1;
                        d.topAccess = !1;
                        d.simulator = !1;
                        d.multiressupport = !1;
                        d.panovideosupport = !1;
                        var E = d.screen = {};
                        try {
                            top && top.document && (d.topAccess = !0)
                        } catch (A) {
                        }
                        var p = db.platform, e = J(p), u = db.userAgent, v = J(u), g = n = "";
                        0 <= e.indexOf("win") ? d.windows = !0 : 0 <= e.indexOf("mac") ? d.mac = !0 : 0 <= e.indexOf("linux") && (d.linux = !0);
                        var t = W.devicePixelRatio, C = 2 <= t;
                        f = 1;
                        var z = 0 <= e.indexOf("ipod"), y = 0 <= e.indexOf(_[56]), F = 0 <= e.indexOf("ipad"),
                            l = y || z || F, c = v.indexOf("silk/"), D = 0 <= v.indexOf(_[526]) || 0 <= v.indexOf(_[163]),
                            B = 0 > c && !D && 0 <= v.indexOf(_[532]), P = m = !1, ga = !1, Q = u.indexOf(_[165]),
                            Ba = W.chrome && !D, G = u.indexOf(_[556]), X = !1,
                            na = (l || B || 0 <= c) && (d.windows || d.mac);
                        D && (Q = G = -1);
                        var e = !1, N = 0;
                        Ud = b();
                        if (l) {
                            if (d.ios = !0, n = p, h = u.indexOf("OS "), 0 < h && (h += 3, N = u.slice(h, u.indexOf(" ", h)).split("_").join("."), n += _[564] + N, d.iosversion = parseFloat(N), "6.0" <= N && (y && !C || z && C) && (d._iOS6_canvas_bug = !0)), m = y || z, P = F, h = Math.max(screen.width, screen.height), d.iphone = y || z, d.iphone5 = y && 500 < h, d.ip6p = y && 735 < h, d.ipod = z, d.ipad = F, d.retina = C, y || z) f *= r
                        } else if (B) if (h = u.indexOf(_[542]), N = parseFloat(u.slice(h + 8)), d.android = !0, d.linux = !1, d.androidversion = N, n = u.slice(h, u.indexOf(";", h)), m = 0 < v.indexOf(_[60]), Ba && 0 < v.indexOf(_[338]) && (m = 480 > Math.min(screen.width, screen.height)), P = !m, h = u.indexOf(")"), 5 < h && (N = u.slice(0, h).lastIndexOf(";"), 5 < N && (C = u.indexOf(_[607], N), 0 < C && (h = C), n += " (" + u.slice(N + 2, h) + ")")), 0 < G && isNaN(t) && (t = Ud), P && 1 < t) {
                            if (d.hidpi = !0, f = t, 0 <= Q || 0 < G) d.hidpi = !1, f = 1
                        } else m && (d.hidpi = 1 < t, f = t * r, .5 > f && (f = .5), 0 <= Q || 0 < G || na) && (d.hidpi = !1, f = r); else {
                            if (0 <= v.indexOf(_[405]) || 0 <= v.indexOf(_[441]) || 0 <= v.indexOf("bb10")) X = !0, d.blackberry = !0, n = _[399], e = !0;
                            0 <= c ? (X = !0, d.silk = !0, n = _[354] + parseFloat(v.slice(c + 5)).toFixed(2), ga = !1, m = 0 <= v.indexOf(_[60]), P = !m, e = !0) : 0 <= v.indexOf("ipad") || 0 <= v.indexOf(_[56]) ? ga = X = !0 : 0 <= v.indexOf(_[169]) ? (P = !0, n += _[599]) : 0 <= v.indexOf(_[60]) ? (m = !0, n += _[598], f = r) : ga = !0
                        }
                        z = db.vendor && 0 <= db.vendor.indexOf("Apple");
                        y = W.opera;
                        C = !1;
                        ga && (n = _[331]);
                        h = u.indexOf(_[523]);
                        0 < h && (z || y || B) && (h += 8, N = u.slice(h, u.indexOf(" ", h)), z ? (d.safari = !0, d.safariversion = N, g = _[591]) : (B && (g = _[273], e = !0), y && (d.opera = !0, d.operaversion = N, g = "Opera")), g += " " + N);
                        l && (h = u.indexOf(_[588]), 0 < h && (d.safari = !0, h += 6, N = parseFloat(u.slice(h, u.indexOf(" ", h))), d.crios = N, g = _[545] + N.toFixed(1)));
                        h = Q;
                        if (0 <= h || Ba) N = parseFloat(u.slice(h + 7)), d.chrome = !0, d.chromeversion = N, d.chromemobile = B || 0 <= c, g = _[165] + (isNaN(N) ? "" : " " + N.toFixed(1)), h = v.indexOf("opr/"), 0 < h && (g = _[572] + parseFloat(u.slice(h + 4)).toFixed(1) + _[457]), B && 28 > N && (e = !0), B && 1 < t && 20 > N && !na && (d.hidpi = !0, f = t, m && (f *= r)); else if (h = G, 0 > h && (h = u.indexOf(_[571])), 0 <= h && (N = parseFloat(u.slice(1 + u.indexOf("/", h))), d.firefox = !0, d.firefoxversion = N, g = _[488] + (isNaN(N) ? "" : N.toFixed(1)), B && 35 > N && (e = !0)), h = u.indexOf("MSIE "), C = 0 <= h || D) ga = d.ie = !0, P = !1, g = _[256], 0 < v.indexOf(_[486]) || 0 < v.indexOf(_[319]) ? (m = !0, ga = !1, g = _[550] + g, f = r) : 0 < v.indexOf("arm;") && 1 < db.msMaxTouchPoints && (P = !0, ga = !1, g = _[566] + g, e = !0, f = 1), 0 <= h ? (N = u.slice(h + 4, u.indexOf(";", h)), d.ieversion = parseFloat(N), g += N) : (h = u.indexOf("rv:"), 0 <= h ? (N = parseFloat(u.slice(h + 3)), !isNaN(N) && 10 <= N && 100 > N && (d.ieversion = N, g += " " + N.toFixed(1))) : (h = v.indexOf(_[163]), 0 <= h && (g = _[316], d.edge = !0, Uc = !1, N = parseFloat(u.slice(h + 6)), isNaN(N) || (d.ieversion = N, g += " " + N.toFixed(5))))), n = g, g = "";
                        d.android && (d.androidstock = !(d.chrome || d.firefox || d.opera));
                        0 == d.ie && 0 < (h = v.indexOf(_[565])) && (N = parseFloat(v.slice(h + 7)), !isNaN(N) && 0 < N && (d.webkit = !0, d.webkitversion = N));
                        d.pixelratio = isNaN(t) ? 1 : t;
                        d.fractionalscaling = 0 != d.pixelratio % 1;
                        var t = {}, S = Ha();
                        t.find = w;
                        t.prefix = C ? "ms" : d.firefox ? "moz" : d.safari || d.chrome || d.androidstock ? _[94] : "";
                        t.perspective = w(_[390]);
                        t.transform = w(_[444]);
                        t.backgroundsize = w(_[310]);
                        t.boxshadow = w(_[451]);
                        t.boxshadow_style = _[298] == t.boxshadow ? _[245] : _[372] == t.boxshadow ? _[293] : _[439];
                        B && "4.0" > d.androidversion && (t.perspective = null);
                        t.perspective && (d.css3d = !0, _[247] == t.perspective && W.matchMedia && (v = W.matchMedia(_[218]))) && (d.css3d = 1 == v.matches);
                        S = null;
                        d.webgl = function () {
                            var a = null;
                            try {
                                for (var c = Ha(2), b = 0; 4 > b && !(a = c.getContext([_[63], _[105], _[141], _[140]][b])); b++) ;
                            } catch (d) {
                            }
                            return null != a
                        }();
                        v = {};
                        v.useragent = u;
                        v.platform = p;
                        v.domain = null;
                        v.location = W.location.href;
                        v.protocol = ("" + v.location).split("://")[0].toLowerCase();
                        p = v.events = {};
                        v.css = t;
                        if (l || B || void 0 !== q.ontouchstart || X) d.touchdevice = !0, d.gesturedevice = !0;
                        l = 0;
                        d.ie && (db.msPointerEnabled || db.pointerEnabled) && (B = db.msMaxTouchPoints || db.maxTouchPoints, db.msPointerEnabled && (l = 2), db.pointerEnabled && (l = 1), d.touchdevice = 0 < B, d.gesturedevice = 1 < B);
                        p.touchstart = [_[47], _[375], _[326]][l];
                        p.touchmove = [_[48], _[376], _[335]][l];
                        p.touchend = [_[52], _[456], _[377]][l];
                        p.touchcancel = [_[378], _[345], _[295]][l];
                        p.gesturestart = [_[367], _[116], _[116]][l];
                        p.gesturechange = [_[343], _[114], _[114]][l];
                        p.gestureend = [_[428], _[124], _[124]][l];
                        p.pointerover = [_[13], _[13], _[44]][l];
                        p.pointerout = [_[14], _[14], _[45]][l];
                        d.pointerEvents = d.opera || d.ie && 11 > d.ieversion ? !1 : !0;
                        g && (n += " - " + g);
                        d.realDesktop = ga;
                        g = a.vars ? J(a.vars.simulatedevice) : null;
                        _[458] == g && (0 <= u.indexOf(_[168]) || 0 <= u.indexOf("iPod") ? g = _[56] : 0 <= u.indexOf("iPad") && (g = "ipad"));
                        d.touchdeviceNS = d.touchdevice;
                        u = _[56] == g ? 1 : "ipad" == g ? 2 : 0;
                        0 < u && (d.simulator = !0, d.crios = 0, n += " - " + (1 == u ? _[168] : "iPad") + _[426], f = u * r, m = 1 == u, P = 2 == u, ga = !1, d.ios = !0, d.iphone = m, d.ipad = P, d.touchdevice = !0, d.gesturedevice = !0);
                        d.browser = v;
                        d.infoString = n;
                        a = J(a.fakedevice);
                        _[60] == a ? (m = !0, P = ga = !1) : _[169] == a ? (P = !0, m = ga = !1) : _[546] == a && (ga = !0, m = P = !1);
                        d.mobile = m;
                        d.tablet = P;
                        d.desktop = ga;
                        d.normal = P || ga;
                        d.handheld = m || P;
                        d.touch = d.gesturedevice;
                        d.mouse = ga;
                        d.getViewportScale = b;
                        ba = f;
                        0 == d.simulator && (ca.fullscreenEnabled || ca.mozFullScreenEnabled || ca.webkitFullScreenEnabled || ca.webkitFullscreenEnabled || ca.msFullscreenEnabled || ga && d.safari && 6 > parseInt(d.safariversion)) && (a = [_[254], _[223], _[215], _[216], _[239]], r = -1, f = null, n = _[271], q[a[0]] ? (f = "", r = 0) : q[a[1]] ? (f = "moz", r = 1) : q[a[2]] ? (f = _[94], r = 2) : q[a[3]] ? (f = _[94], r = 3) : q[a[4]] && (f = "MS", n = _[268], r = 4), 0 <= r && 0 == e && (d.fullscreensupport = !0, p.fullscreenchange = f + n, p.requestfullscreen = a[r]));
                        d.buildList();
                        delete d.runDetection
                    }, buildList: function () {
                        var a, b = "|all";
                        for (a in d) a == J(a) && d[a] && (b += "|" + a);
                        d.haveList = b + "|"
                    }, checkSupport: function (a) {
                        a = J(a).split("no-").join("!").split(".or.").join("|").split(".and.").join("+").split("|");
                        var b, w, e = a.length;
                        for (b = 0; b < e; b++) {
                            var f = a[b].split("+"), n = !1;
                            for (w = 0; w < f.length; w++) {
                                var n = f[w], m = !1;
                                33 == n.charCodeAt(0) && (n = n.slice(1), m = !0);
                                if (0 == n.indexOf("ios") && d.ios) if (3 == n.length || d.iosversion >= parseFloat(n.slice(3))) if (m) {
                                    n = !1;
                                    break
                                } else n = !0; else if (m) n = !0; else {
                                    n = !1;
                                    break
                                } else if (0 <= d.haveList.indexOf("|" + n + "|")) if (m) {
                                    n = !1;
                                    break
                                } else n = !0; else if (m) n = !0; else {
                                    n = !1;
                                    break
                                }
                            }
                            if (n) return !0
                        }
                        return !1
                    }
                }, Ic = 1, Pd = !1, qb = null, Ee = null, ne = null, $c = null, uc = null, Fe = !1, Kc = 0,
                tc = function () {
                    var a = this;
                    a._type = "base";
                    a.registerattribute = function (b, d, e, f) {
                        b = J(b);
                        e && f ? (a.hasOwnProperty(b) && (d = ta(a[b], typeof d)), a.__defineGetter__(b, f), a.__defineSetter__(b, e), e(d)) : a.hasOwnProperty(b) ? a[b] = ta(a[b], typeof d) : a[b] = d
                    };
                    a.registerSetterGetter = function (b, d, e) {
                        var f = void 0;
                        a.hasOwnProperty(b) && (f = a[b]);
                        a.__defineGetter__(b, e);
                        a.__defineSetter__(b, d);
                        void 0 !== f && (f = ta(f, typeof e()), d(f))
                    };
                    a.createobject = function (b) {
                        b = J(b);
                        try {
                            return a.hasOwnProperty(b) ? a[b] : a[b] = new tc
                        } catch (d) {
                        }
                        return null
                    };
                    a.removeobject = a.removeattribute = function (b) {
                        b = J(b);
                        try {
                            a[b] = null, delete a[b]
                        } catch (d) {
                        }
                    };
                    a.createarray = function (b) {
                        b = J(b);
                        return a[b] && a[b].isArray ? a[b] : a[b] = new Gb(tc)
                    };
                    a.removearray = function (b) {
                        b = J(b);
                        a[b] && a[b].isArray && (a[b] = null, delete a[b])
                    };
                    a.getattributes = function () {
                        var b = [], d = ["index", _[497], "DATA"], e;
                        for (e in a) _[15] != typeof a[e] && -1 == d.indexOf(e) && "_" != e.charAt(0) && b.push(e);
                        return b
                    }
                }, Gb = function (a, b) {
                    var d = [], e = {};
                    this.isArray = !0;
                    this.isDynArray = 1 == b;
                    this.__defineGetter__("count", function () {
                        return d.length
                    });
                    this.__defineSetter__("count", function (a) {
                        0 == a ? (d = [], e = {}) : d.length = a
                    });
                    this.createItem = function (b, n) {
                        var m = -1, h = null, m = String(b).charCodeAt(0);
                        if (48 <= m && 57 >= m) {
                            if (n) return null;
                            m = parseInt(b, 10);
                            h = d[m];
                            if (null == h || void 0 == h) h = null != a ? new a : {}, h.name = "n" + m, h.index = m, d[m] = h, e[h.name] = h
                        } else if (b = J(b), h = e[b], null == h || void 0 == h) h = n ? n : null != a ? new a : {}, m = d.push(h) - 1, h.index = m, h.name = b, d[m] = h, e[b] = h;
                        return h
                    };
                    this.getItem = function (a) {
                        var b = -1, b = String(a).charCodeAt(0);
                        48 <= b && 57 >= b ? (b = parseInt(a, 10), a = d[b]) : a = e[J(a)];
                        return a
                    };
                    this.getArray = function () {
                        return d
                    };
                    this.renameItem = function (a, b) {
                        var m = -1, m = String(a).charCodeAt(0);
                        48 <= m && 57 >= m ? (m = parseInt(a, 10), m = d[m]) : m = e[J(a)];
                        m && (delete e[m.name], b = J(b), m.name = b, e[b] = m)
                    };
                    this.removearrayitem = this.removeItem = function (a) {
                        var b = -1, b = null;
                        a = String(a);
                        b = String(a).charCodeAt(0);
                        48 <= b && 57 >= b ? (b = parseInt(a, 10), b = d[b]) : b = e[J(a)];
                        if (b) {
                            e[b.name] = null;
                            delete e[b.name];
                            d.splice(b.index, 1);
                            var m;
                            m = d.length;
                            for (a = b.index; a < m; a++) d[a].index--
                        }
                        return b
                    };
                    this.sortby = function (a, b) {
                        var e, h;
                        h = d.length;
                        if (1 < h) {
                            var q = 1, r = !1, E = !1;
                            _[1] === typeof b && (b = b.toLowerCase(), 0 <= b.indexOf(_[424]) && (q = -1), 0 <= b.indexOf(_[540]) && (r = !0), 0 <= b.indexOf(_[278]) && (E = !0));
                            d.sort(function (b, d) {
                                var e = b[a], h = d[a];
                                r ? (e = Number(e), isNaN(e) && (e = void 0), h = Number(h), isNaN(h) && (h = void 0), void 0 === e && void 0 === h && (e = b[a], h = d[a])) : E && (null != e && (e = ("" + e).toLowerCase()), null != h && (h = ("" + h).toLowerCase()));
                                return void 0 === e && void 0 !== h ? +q : void 0 !== e && void 0 === h || e < h ? -q : e > h ? +q : 0
                            });
                            for (e = 0; e < h; e++) d[e].index = e
                        }
                    }
                }, $e = Array(256), oa = {};
            (function () {
                function a(a) {
                    var b, d, f, e, l = a.length;
                    b = 3 * (l >> 2) - ("=" == a.charAt(l - 1)) - ("=" == a.charAt(l - 2));
                    for (var c = new E(b), g = b / 3 | 0, h = 0, n = 0; 0 < g--;) b = p[a.charCodeAt(h) & 127], d = p[a.charCodeAt(h + 1) & 127], f = p[a.charCodeAt(h + 2) & 127], e = p[a.charCodeAt(h + 3) & 127], c[n] = b << 2 | d >> 4, c[n + 1] = (d & 15) << 4 | f >> 2, c[n + 2] = (f & 3) << 6 | e, h += 4, n += 3;
                    h < l && (b = p[a.charCodeAt(h) & 127], d = p[a.charCodeAt(h + 1) & 127], f = p[a.charCodeAt(h + 2) & 127], e = p[a.charCodeAt(h + 3) & 127], c[n++] = b << 2 | d >> 4, 64 != f && (c[n++] = (d & 15) << 4 | f >> 2), 64 != e && (c[n++] = (f & 3) << 6 | e));
                    return c
                }

                function b(a, b) {
                    var d, f, e = 15, l = _[262], c = new E(256);
                    if (82 == b) if (me) e = 127, l = me; else return null;
                    d = a[65] & 7;
                    for (f = 0; 128 > f; f++) c[2 * f] = a[f], c[2 * f + 1] = String(l).charCodeAt(f & e);
                    u.srand(c, 256);
                    return u.flip(a, d + 128, a.length - 128 - d)
                }

                function w(a, b, d) {
                    if (null == a) return null;
                    a = "" + a;
                    1 == b && q.basedir && 0 > a.indexOf("://") && 0 != a.indexOf("/") && "data:" != a.slice(0, 5) && (a = q.basedir + a);
                    a = a.split("\\").join("/");
                    null == h.firstxmlpath && (h.firstxmlpath = "");
                    null == h.currentxmlpath && (h.currentxmlpath = "");
                    null == h.swfpath && (h.swfpath = "");
                    null == h.htmlpath && (h.htmlpath = "");
                    for (b = a.indexOf("%"); 0 <= b;) {
                        var f = a.indexOf("%", b + 1);
                        if (f > b) {
                            var e = a.slice(b + 1, f), l = null;
                            if (36 == e.charCodeAt(0)) {
                                if (e = O(e.slice(1)), null != e) {
                                    e = "" + e;
                                    a = 47 == e.charCodeAt(0) || 0 < e.indexOf("://") ? e + a.slice(f + 1) : a.slice(0, b) + e + a.slice(f + 1);
                                    b = a.indexOf("%");
                                    continue
                                }
                            } else switch (e) {
                                case _[500]:
                                    l = 1 == d ? "" : h.firstxmlpath;
                                    break;
                                case _[420]:
                                    l = h.currentxmlpath;
                                    break;
                                case _[419]:
                                case _[537]:
                                    l = 1 == d ? "" : h.swfpath;
                                    break;
                                case _[503]:
                                    l = 1 == d ? "" : h.htmlpath;
                                    break;
                                case _[533]:
                                    l = 1 == d ? "" : q.basedir
                            }
                            null != l ? (f++, "/" == a.charAt(f) && f++, a = l + a.slice(f), b = a.indexOf("%")) : b = a.indexOf("%", b + 1)
                        } else b = -1
                    }
                    return a
                }

                function e(d, e, g) {
                    var h, n;
                    0 <= (h = e.indexOf(_[383])) ? (n = e.indexOf(_[361])) > h && (e = e.slice(h + 11, n), h = e.indexOf(_[461]), 0 <= h && (e = e.slice(h + 9, -3), 0 <= e.indexOf(_[107]) && (e = e.split(_[107]).join(_[590])))) : g && 0 <= (h = e.indexOf('"[[KENC')) && (n = e.lastIndexOf(']]"')) > h && (e = e.slice(h + 3, n));
                    var l = null;
                    h = e.slice(0, 8);
                    n = e.slice(8);
                    g = !0 === g && La & 64 || !g && La & 32;
                    if ("KENC" != h.slice(0, 4)) return e;
                    e = !1;
                    var c = 0, p = 0, p = 0, m = !1, c = String(h).charCodeAt(4);
                    if (80 == c || 82 == c) if (p = String(h).charCodeAt(5), 85 == p && (p = String(h).charCodeAt(6), m = 90 == p, 66 == p || m)) e = !0;
                    if (e && (!g || 80 != c)) if (m) {
                        h = c;
                        l = n.length;
                        e = g = null;
                        var q = p = m = c = 0, u = 0, v = 0, x = 0;
                        for (g = new E(4 * l / 5 | 0); c < l;) p = n.charCodeAt(c++) - 35, q = n.charCodeAt(c++) - 35, u = n.charCodeAt(c++) - 35, v = n.charCodeAt(c++) - 35, x = n.charCodeAt(c++) - 35, 56 < p && p--, 56 < q && q--, 56 < u && u--, 56 < v && v--, 56 < x && x--, x += 85 * (85 * (85 * (85 * p + q) + u) + v), g[m++] = x >> 24 & 255, g[m++] = x >> 16 & 255, g[m++] = x >> 8 & 255, g[m++] = x & 255;
                        g = b(g, h);
                        if (null == g) l = null; else {
                            l = g[2] << 16 | g[1] << 8 | g[0];
                            e = new E(l);
                            l = 8 + (g[6] << 16 | g[5] << 8 | g[4]);
                            c = 8;
                            for (m = 0; c < l;) {
                                p = g[c++];
                                q = p >> 4;
                                for (u = q + 240; 255 === u; q += u = g[c++]) ;
                                for (v = c + q; c < v;) e[m++] = g[c++];
                                if (c === l) break;
                                x = m - (g[c++] | g[c++] << 8);
                                q = p & 15;
                                for (u = q + 240; 255 === u; q += u = g[c++]) ;
                                for (v = m + q + 4; m < v;) e[m++] = e[x++]
                            }
                            g.length = 0;
                            l = n = f(e)
                        }
                    } else l = a(n), (l = b(l, c)) && (l = f(l));
                    null == l && d && cb(d + _[217]);
                    return l
                }

                function f(a) {
                    if (A) return A.decode(a);
                    for (var b = "", d = 0, e = 0, f = 0, l = 0, c = a.length; d < c;) e = a[d], 128 > e ? (0 < e && (b += Xc(e)), d++) : 191 < e && 224 > e ? (f = a[d + 1], b += Xc((e & 31) << 6 | f & 63), d += 2) : (f = a[d + 1], l = a[d + 2], e = (e & 15) << 12 | (f & 63) << 6 | l & 63, 65279 != e && (b += Xc(e)), d += 3);
                    return b
                }

                function n(a, b, d) {
                    void 0 !== b ? b(a, d) : cb(a + _[103] + d + ")")
                }

                function m(a, b, e, f, g) {
                    if (0 == h.DMcheck(a)) n(a, g, _[261]); else {
                        var l = null, c = !1;
                        if (d.ie && "" == ca.domain) try {
                            l = new ActiveXObject(_[255]), c = !0
                        } catch (p) {
                            l = null
                        }
                        null == l && (l = new XMLHttpRequest);
                        void 0 !== l.overrideMimeType && b && l.overrideMimeType(b);
                        l.onreadystatechange = function () {
                            if (4 == l.readyState) {
                                var b = l.status, d = l.responseText;
                                if (0 == b && d || 200 == b || 304 == b) if (e) {
                                    var h = null, h = c ? (new DOMParser).parseFromString(d, _[35]) : l.responseXML;
                                    f(a, h, b)
                                } else f(a, d); else n(a, g, l.status)
                            }
                        };
                        try {
                            l.open("GET", a, !0), l.send(null)
                        } catch (m) {
                            n(a, g, m)
                        }
                    }
                }

                var h = oa, x = 1;
                try {
                    String.fromCharCode.apply(null, (new Uint8Array(4)).subarray(2))
                } catch (r) {
                    x = 0
                }
                var E = x ? Uint8Array : Array, A = x && window.TextDecoder ? new TextDecoder : null, p = null;
                (function () {
                    var a;
                    p = new E(128);
                    for (a = 0; 128 > a; a++) p[a] = 0;
                    p[43] = 62;
                    p[47] = 63;
                    p[61] = 64;
                    for (a = 48; 58 > a; a++) p[a] = a + 4;
                    for (a = 65; 91 > a; a++) p[a] = a - 65;
                    for (a = 97; 123 > a; a++) p[a] = a - 71
                })();
                h.firstxmlpath = null;
                h.currentxmlpath = null;
                h.swfpath = null;
                h.htmlpath = null;
                h.parsePath = w;
                h.DMcheck = function (a) {
                    var b;
                    if (La & 256 && (b = ca.domain) && Zc) {
                        a = a.toLowerCase();
                        var d = a.indexOf("://");
                        if (0 < d) {
                            var d = d + 3, e = a.indexOf("/", d);
                            if (0 < e) return a = a.slice(d, e), d = a.indexOf(":"), 1 < d && (a = a.slice(0, d)), a == b
                        } else return b == Zc
                    }
                    return !0
                };
                var u = new function () {
                    var a, b, d;
                    this.srand = function (e, f) {
                        var l, c, g, h, p = new E(256);
                        for (l = 0; 256 > l; l++) p[l] = l;
                        for (c = l = 0; 256 > l; l++) c = c + p[l] + e[l % f] & 255, h = p[l], p[l] = p[c], p[c] = h;
                        for (g = c = l = 0; 256 > g; g++) l = l + 1 & 255, c = c + p[l] & 255, h = p[l], p[l] = p[c], p[c] = h;
                        a = p;
                        b = l;
                        d = c
                    };
                    this.flip = function (e, f, l) {
                        var c = new E(l), g, h;
                        c.length = l;
                        var p = a, n = b, m = d;
                        for (g = 0; g < l; g++, f++) n = n + 1 & 255, m = m + p[n] & 255, c[g] = e[f] ^ a[p[n] + p[m] & 255], h = p[n], p[n] = p[m], p[m] = h;
                        b = n;
                        d = m;
                        return c
                    }
                }, v = {}, g = function () {
                    this.img = this.url = null;
                    this.retries = 0;
                    this.refs = 1;
                    this.state = 0;
                    this.cb_done = [];
                    this.cb_err = []
                };
                g.prototype.handleEvent = function (a) {
                    a = a.type;
                    var b = 1;
                    if ("load" == a) b = 2; else if (_[97] == a) b = 4; else if (_[41] == a && (b = 3, ++this.retries < q.network.retrycount)) {
                        this.reload();
                        return
                    }
                    this.state = b;
                    this.finish()
                };
                g.prototype.removeImage = function () {
                    var a = this.img;
                    a.removeEventListener("load", this);
                    a.removeEventListener(_[41], this);
                    a.removeEventListener(_[97], this);
                    this.img = null
                };
                g.prototype.clear = function () {
                    this.img = this.url = null;
                    this.retries = 0;
                    this.refs = 1;
                    this.state = 0;
                    this.cb_done.length = 0;
                    this.cb_err.length = 0
                };
                g.prototype.load = function () {
                    var a = this.img, b = this.state;
                    null == a && (a = Ha(1), a.addEventListener("load", this), a.addEventListener(_[41], this), a.addEventListener(_[97], this), this.img = a);
                    0 == b && (this.state = 1, a.src = this.url)
                };
                g.prototype.reload = function () {
                    this.removeImage();
                    this.state = 0;
                    this.load()
                };
                g.prototype.finish = function () {
                    var a, b = this.img, d = this.refs, e = 4 == this.state,
                        f = 2 == this.state ? this.cb_done : this.cb_err;
                    delete v[this.url];
                    this.removeImage();
                    for (a = 0; a < d; a++) {
                        var l = f[a];
                        l && l(b, e)
                    }
                    this.clear()
                };
                h.reportLoadingError = function (a, b, d) {
                    a = _[358] + a + _[467];
                    b && (a = b + " " + a);
                    d && (a = a + " " + d);
                    q.lasterror = a;
                    0 == za(_[387]) && wa(3, a)
                };
                h.loadimage = function (a, b, d, e) {
                    var f = v[a];
                    f ? f.refs++ : (f = new g, f.url = a, v[a] = f);
                    f.cb_done.push(b);
                    f.cb_err.push(d);
                    a = f;
                    !0 === e && (a.retries = q.network.retrycount);
                    a.load();
                    return a.img
                };
                h.iOSWakelockCheck = function () {
                    for (var a in v) v[a].reload()
                };
                h.loadfile = function (a, b, d) {
                    h.loadfile2(a, null, b, d)
                };
                h.loadxml = function (a, b, d) {
                    h.loadfile2(a, _[35], b, d, !0)
                };
                h.loadfile2 = function (a, b, d, f, g) {
                    g = !0 === g;
                    var l = {errmsg: !0};
                    l.rqurl = a;
                    a = w(a);
                    l.url = a;
                    m(a, b, g, function (a, h, p) {
                        !0 === g ? d(h, p) : (h = e(a, h, _[115] == b), l.data = h, null != h ? d && d(l) : f && f(l))
                    }, g ? f : function (b, d) {
                        f && f(l);
                        l.errmsg && wa(3, a + _[103] + d + ")")
                    })
                };
                h.resolvecontentencryption = e;
                h.b64u8 = function (b) {
                    return f(a(b))
                };
                h.decodeLicense = function (a) {
                    return null
                }
            })();
            var ia = {};
            (function () {
                function a(b) {
                    var d, e, f = b.childNodes, h;
                    e = f.length;
                    for (d = 0; d < e; d++) if (h = f.item(d)) switch (h.nodeType) {
                        case 1:
                            a(h);
                            break;
                        case 8:
                            b.removeChild(h), d--, e--
                    }
                }

                function b(a, b) {
                    var d, e, f = a.childNodes, h = -1;
                    e = f.length;
                    if (1 <= e) for (d = 0; d < e; d++) if (J(f[d].nodeName) == b) {
                        h = d;
                        break
                    }
                    return 0 <= h ? f[h] : null
                }

                function w(b, e, f, h, p) {
                    var n, m, g, t, r = null;
                    m = null;
                    var z, y;
                    y = 0;
                    var F, l = b.length, c = new XMLSerializer, D = !1;
                    h || (D = !0, h = [], p = [], q.xml.parsetime = Sa());
                    for (var B = 0; B < l; B++) if ((n = b[B]) && n.nodeName && "#text" != n.nodeName && (m = n.nodeName, m = J(m), _[150] != m)) {
                        g = null == e && _[59] == m ? null : e ? e + "." + m : m;
                        if (t = n.attributes) {
                            if (t.devices && 0 == d.checkSupport(t.devices.value)) continue; else if (t["if"] && !aa.calc(null, t["if"].value)) continue;
                            if ("set" == m && t["var"] && t.val) {
                                aa.calc(t["var"].value, t.val.value);
                                continue
                            } else if ("debug" == m && t.trace) {
                                wa(0, aa.calc(null, t.trace.value));
                                continue
                            }
                        }
                        F = (m = t && t.name ? t.name.value : null) ? !0 : !1;
                        if (f) {
                            if (_[525] == g && f & 16) continue;
                            if ((_[57] == g || _[66] == g) && f & 4) continue;
                            if (_[7] == g && f & 128) continue;
                            if (_[99] == g && f & 65536) continue;
                            if (f & 64 && m) if (_[57] == g || _[66] == g) {
                                if ((r = xa.getItem(m)) && r._pCD && r.keep) continue
                            } else if (_[7] == g && (r = wb.getItem(m)) && r._pCD && r.keep) continue
                        }
                        if (g) if (F) {
                            if (_[11] == g || "data" == g || "scene" == g) {
                                a(n);
                                F = null;
                                if ((_[11] == g || "data" == g) && n.childNodes && 1 <= n.childNodes.length) for (r = 0; r < n.childNodes.length; r++) if (4 == n.childNodes[r].nodeType) {
                                    F = n.childNodes[r].nodeValue;
                                    break
                                }
                                null == F && (F = c.serializeToString(n), F = F.slice(F.indexOf(">") + 1, F.lastIndexOf("</")), _[11] == g && (F = F.split(_[602]).join('"').split(_[603]).join("'").split(_[162]).join(String.fromCharCode(160)).split("&amp;").join("&")));
                                _[11] == g && ma(n.getAttribute(_[529])) ? aa.addPAction(J(m), F) : M(g + "[" + m + _[83], F);
                                if (t) {
                                    var P;
                                    F = t.length;
                                    for (P = 0; P < F; P++) if (z = t[P], r = J(z.nodeName), z = z.value, "name" != r) {
                                        y = r.indexOf(".");
                                        if (0 < y) if (d.checkSupport(r.slice(y + 1))) r = r.slice(0, y); else continue;
                                        y = g + "[" + m + "]." + J(r);
                                        M(y, z)
                                    }
                                }
                                continue
                            }
                            g = g + "[" + m + "]";
                            if (!Ad(m, g)) continue;
                            M(g + ".name", m)
                        } else (m = O(g)) && m.isArray && !m.isDynArray && (m = "n" + String(m.count), g = g + "[" + m + "]", M(g + ".name", m));
                        if (t) {
                            var ga = "view" == g, r = g ? O(g) : null;
                            m = null;
                            F = t.length;
                            r && (r._lateBinding && (m = r._lateBinding), (z = t.style) && (z = z.value) && null == m && (r.style = z, p.push(g), m = r._lateBinding = {}));
                            for (P = 0; P < F; P++) {
                                z = t[P];
                                r = J(z.nodeName);
                                z = z.value;
                                var Q = g ? g + "." : "";
                                if ("name" != r && "style" != r) {
                                    y = r.indexOf(".");
                                    if (0 < y) if (d.checkSupport(r.slice(y + 1))) r = r.slice(0, y).toLowerCase(); else continue;
                                    y = Q + r;
                                    m ? m[r] = z : !z || _[1] != typeof z || "get:" != z.slice(0, 4) && "calc:" != z.slice(0, 5) ? (M(y, z), ga && M("xml." + y, z)) : (h.push(y), h.push(z))
                                }
                            }
                        }
                        n.childNodes && 0 < n.childNodes.length && w(n.childNodes, g, f, h, p)
                    }
                    if (D) {
                        l = h.length;
                        for (B = 0; B < l; B += 2) M(h[B], h[B + 1]);
                        l = p.length;
                        for (B = 0; B < l; B++) if (g = p[B], aa.assignstyle(g, null), r = O(g)) if (m = r._lateBinding) aa.copyattributes(r, m), r._lateBinding = null;
                        q.xml.parsetime = Sa() - q.xml.parsetime
                    }
                }

                function e(a, b) {
                    var d = null, f, h;
                    h = a.length;
                    for (f = 0; f < h; f++) if (d = a[f], !d || !d.nodeName || _[11] != J(d.nodeName)) {
                        var m = d.attributes;
                        if (m) {
                            var n, g = m.length, q;
                            for (n = 0; n < g; n++) {
                                var w = m[n];
                                q = J(w.nodeName);
                                var r = q.indexOf(".");
                                0 < r && (q = q.slice(0, r));
                                if (_[511] == q) {
                                    q = w.value;
                                    var r = q.split("|"), y, F;
                                    F = r.length;
                                    for (y = 0; y < F; y++) q = r[y], "" != q && 0 > q.indexOf("://") && 47 != q.charCodeAt(0) && (r[y] = b + q);
                                    w.value = r.join("|")
                                } else if (r = q.indexOf("url"), 0 == r || 0 < r && r == q.length - 3) if (q = w.value) r = q.indexOf(":"), y = q.charCodeAt(0), 47 == y || 37 == y && 36 != q.charCodeAt(1) || 0 < r && ("//" == q.substr(r + 1, 2) || 0 <= _[120].indexOf(q.substr(0, r + 1))) || (q = b + q), w.value = q
                            }
                        }
                        d.childNodes && 0 < d.childNodes.length && e(d.childNodes, b)
                    }
                }

                function f(a, b) {
                    var d = Rb(b), f = d.lastIndexOf("/"), h = d.lastIndexOf("\\");
                    h > f && (f = h);
                    0 < f && (d = d.slice(0, f + 1), e(a, d))
                }

                function n(a, d) {
                    var f = b(a, _[476]);
                    if (f) {
                        var e = "", h, m;
                        m = f.childNodes.length;
                        for (h = 0; h < m; h++) e += f.childNodes[h].nodeValue;
                        return (f = oa.resolvecontentencryption(d, e)) ? (f = (new DOMParser).parseFromString(f, _[35])) && f.documentElement && _[20] == f.documentElement.nodeName ? (wa(3, d + _[29]), null) : f : null
                    }
                    return La & 32 ? (cb(d + _[229]), null) : a
                }

                function m(a, b) {
                    var d, f;
                    switch (a.nodeType) {
                        case 1:
                            var e = ia.xmlDoc.createElement(a.nodeName);
                            if (a.attributes && 0 < a.attributes.length) for (d = 0, f = a.attributes.length; d < f;) e.setAttribute(a.attributes[d].nodeName, a.getAttribute(a.attributes[d++].nodeName));
                            if (b && a.childNodes && 0 < a.childNodes.length) for (d = 0, f = a.childNodes.length; d < f;) e.appendChild(m(a.childNodes[d++], b));
                            return e;
                        case 3:
                        case 4:
                        case 8:
                            return ia.xmlDoc.createTextNode(a.nodeValue)
                    }
                }

                function h(a, b) {
                    var e, q, p;
                    if (null != ia.xmlIncludeNode) {
                        p = Rb(a.url);
                        if ((q = a.responseXML) && q.documentElement && _[20] == q.documentElement.nodeName) {
                            cb(p + _[29]);
                            return
                        }
                        q = n(q, a.url);
                        if (null == q) return;
                        f(q.childNodes, p);
                        e = q.childNodes;
                        var r = ia.xmlIncludeNode.parentNode;
                        if (null != r.parentNode) {
                            var w = 0;
                            p = e.length;
                            if (1 < p) for (q = 0; q < p; q++) if (_[59] == J(e[q].nodeName)) {
                                w = q;
                                break
                            }
                            q = null;
                            q = void 0 === ia.xmlDoc.importNode ? m(e[w], !0) : ia.xmlDoc.importNode(e[w], !0);
                            r.insertBefore(q, ia.xmlIncludeNode);
                            r.removeChild(ia.xmlIncludeNode)
                        } else ia.xmlDoc = q;
                        ia.xmlAllNodes = [];
                        ia.addNodes(ia.xmlDoc.childNodes);
                        ia.xmlIncludeNode = null
                    }
                    r = !1;
                    p = ia.xmlAllNodes.length;
                    for (q = 0; q < p; q++) if (e = ia.xmlAllNodes[q], w = null, null != e.nodeName) {
                        w = J(e.nodeName);
                        if (_[150] == w) {
                            var w = e.attributes, g, t = w.length, C = !1;
                            for (g = 0; g < t; g++) {
                                var z = w[g];
                                _[531] == z.nodeName ? 0 == d.checkSupport(z.value) && (C = !0) : "if" == z.nodeName && (aa.calc(null, z.value) || (C = !0))
                            }
                            if (0 == C) for (g = 0; g < t; g++) if (z = w[g], "url" == J(z.nodeName)) {
                                r = !0;
                                C = z.value;
                                z = C.indexOf(":");
                                0 < z && 0 <= _[120].indexOf(C.substr(0, z + 1)) && (C = aa.calc(null, C.substr(z + 1)));
                                ia.xmlIncludeNode = e;
                                var y = oa.parsePath(C);
                                y ? oa.loadxml(y, function (a, d) {
                                    a ? h({url: y, responseXML: a}, b) : cb(y + " - " + (200 == d ? _[233] : _[208]))
                                }) : b()
                            }
                        }
                        if (r) break
                    }
                    0 == r && b()
                }

                ia.resolvexmlencryption = n;
                ia.resolvexmlincludes = function (a, b) {
                    var d = a.childNodes;
                    ia.xmlDoc = a;
                    ia.xmlAllNodes = [];
                    ia.addNodes(d);
                    f(d, q.xml.url);
                    ia.xmlIncludeNode = null;
                    h(null, b)
                };
                ia.parsexml = w;
                ia.xmlDoc = null;
                ia.xmlAllNodes = null;
                ia.xmlIncludeNode = null;
                ia.addNodes = function (a) {
                    var b, d, e;
                    e = a.length;
                    for (d = 0; d < e; d++) (b = a[d]) && b.nodeName && _[11] != J(b.nodeName) && (ia.xmlAllNodes.push(b), b.childNodes && 0 < b.childNodes.length && ia.addNodes(b.childNodes))
                };
                ia.findxmlnode = b
            })();
            var pd = {};
            (function () {
                var a = pd;
                a.linear = function (a, d, e) {
                    return e * a + d
                };
                a.easeinquad = function (a, d, e) {
                    return e * a * a + d
                };
                a.easeoutquad = function (a, d, e) {
                    return -e * a * (a - 2) + d
                };
                a[_[5]] = a.easeoutquad;
                a.easeinoutquad = function (a, d, e) {
                    return (1 > (a /= .5) ? e / 2 * a * a : -e / 2 * (--a * (a - 2) - 1)) + d
                };
                a.easeinback = function (a, d, e) {
                    return e * a * a * (2.70158 * a - 1.70158) + d
                };
                a.easeoutback = function (a, d, e) {
                    return e * (--a * a * (2.70158 * a + 1.70158) + 1) + d
                };
                a.easeinoutback = function (a, d, e) {
                    var f = 1.70158;
                    return 1 > (a *= 2) ? e / 2 * a * a * (((f *= 1.525) + 1) * a - f) + d : e / 2 * ((a -= 2) * a * (((f *= 1.525) + 1) * a + f) + 2) + d
                };
                a.easeincubic = function (a, d, e) {
                    return e * a * a * a + d
                };
                a.easeoutcubic = function (a, d, e) {
                    return e * (--a * a * a + 1) + d
                };
                a.easeinquart = function (a, d, e) {
                    return e * a * a * a * a + d
                };
                a.easeoutquart = function (a, d, e) {
                    return -e * ((a = a / 1 - 1) * a * a * a - 1) + d
                };
                a.easeinquint = function (a, d, e) {
                    return e * a * a * a * a * a + d
                };
                a.easeoutquint = function (a, d, e) {
                    return e * ((a = a / 1 - 1) * a * a * a * a + 1) + d
                };
                a.easeinsine = function (a, d, e) {
                    return -e * Math.cos(Na / 2 * a) + e + d
                };
                a.easeoutsine = function (a, d, e) {
                    return e * Math.sin(Na / 2 * a) + d
                };
                a.easeinexpo = function (a, d, e) {
                    return 0 == a ? d : e * Math.pow(2, 10 * (a - 1)) + d - .001 * e
                };
                a.easeoutexpo = function (a, d, e) {
                    return 1 == a ? d + e : 1.001 * e * (-Math.pow(2, -10 * a) + 1) + d
                };
                a.easeincirc = function (a, d, e) {
                    return -e * (Math.sqrt(1 - a * a) - 1) + d
                };
                a.easeoutcirc = function (a, d, e) {
                    return e * Math.sqrt(1 - (a = a / 1 - 1) * a) + d
                };
                a.easeoutbounce = function (a, d, e) {
                    return a < 1 / 2.75 ? 7.5625 * e * a * a + d : a < 2 / 2.75 ? e * (7.5625 * (a -= 1.5 / 2.75) * a + .75) + d : a < 2.5 / 2.75 ? e * (7.5625 * (a -= 2.25 / 2.75) * a + .9375) + d : e * (7.5625 * (a -= 2.625 / 2.75) * a + .984375) + d
                };
                a.easeinbounce = function (b, d, e) {
                    return e - a.easeoutbounce(1 - b, 0, e) + d
                };
                a.getTweenfu = function (b) {
                    b = J(b);
                    "" == b || "null" == b ? b = _[77] : void 0 === a[b] && (b = _[77]);
                    return a[b]
                }
            })();
            var aa = {};
            (function () {
                function a(a, b, d) {
                    var c, k = a.length;
                    d = 1 != d;
                    for (c = 0; c < k; c++) {
                        var e = "" + a[c], f = e.toLowerCase();
                        d && "null" == f ? a[c] = null : 41 == e.charCodeAt(e.length - 1) && (f = f.slice(0, 4), "get(" == f ? a[c] = O(Wa(e.slice(4, e.length - 1)), b) : "calc" == f && 40 == e.charCodeAt(4) && (a[c] = O(e, b)))
                    }
                }

                function b(a, d) {
                    var b, c, k, e = 0, f = 0, l = 0;
                    k = "";
                    b = 0;
                    for (c = a.length; b < c;) {
                        k = a.charCodeAt(b);
                        if (!(32 >= k)) if (34 == k) 0 == l ? l = 1 : 1 == l && (l = 0); else if (39 == k) 0 == l ? l = 2 : 2 == l && (l = 0); else if (0 == l) if (91 == k) 0 == f && (f = b + 1), e++; else if (93 == k && 0 < e && (e--, 0 == e)) {
                            if (k = Dc(a, f, b, d)) a = a.slice(0, f) + k + a.slice(b), b = f + k.length + 1, c = a.length;
                            f = 0
                        }
                        b++
                    }
                    return a
                }

                function d(a, b) {
                    var c = "", k, e, f, l, h;
                    f = a.length;
                    h = b.length;
                    for (e = 0; e < f; e++) k = a.charAt(e), "%" == k ? (e++, k = a.charCodeAt(e) - 48, 0 <= k && 9 >= k ? (e + 1 < f && (l = a.charCodeAt(e + 1) - 48, 0 <= l && 9 >= l && (e++, k = 10 * k + l)), c = k < h ? c + ("" + b[k]) : c + "null") : c = -11 == k ? c + "%" : c + ("%" + a.charAt(e))) : c += k;
                    return c
                }

                function e(a, b, c, k) {
                    c = Array.prototype.slice.call(c);
                    c.splice(0, 0, a);
                    b = d(b, c);
                    l.callaction(b, k, !0)
                }

                function f(a) {
                    a.position = N ? 0 : 1
                }

                function n(a, b, d) {
                    var krpano = q;
                    var caller = d;
                    var args = b;
                    var resolve = z;
                    var actions = l;
                    try {
                        eval(a, d)
                    } catch (c) {
                        wa(3, b[0] + " - " + c)
                    }
                }

                function m(a) {
                    var b = B, d = b.length, c;
                    for (c = 0; c < d; c++) if (b[c].id == a) {
                        a = b.splice(c, 1);
                        na === a && (na = null);
                        a && a[0].blockedactions && (G.splice(G.indexOf(a), 1), l.executeActions(a[0].blockedactions));
                        break
                    }
                }

                function h(a) {
                    wa(2, _[205] + a)
                }

                function x(a) {
                    var b = a.length;
                    if (2 == b || 3 == b) {
                        var d = O(a[b - 2], l.actioncaller), c = O(a[b - 1], l.actioncaller);
                        null == d && (d = a[b - 2]);
                        null == c && (c = a[b - 1]);
                        return [a[0], parseFloat(d), parseFloat(c)]
                    }
                    return null
                }

                function H(a, b, d) {
                    var c = 1 == b.length ? O(b[0], d) : b[1], c = 0 == a ? escape(c) : unescape(c);
                    M(b[0], c, !1, d, !0)
                }

                function E(a) {
                    var b, d = a.length, c = 0, k = 0, e = !1, f = !1, l = 0, h = 0, g = 0, m = !1, I = [], n = 0,
                        p = 0;
                    for (b = 0; b < d; b++) if (p = a.charCodeAt(b), 0 == m && 32 >= p) 0 < k && (I[n++] = a.substr(c, k), k = 0), e = !1; else if (0 == m && (61 == p || 33 == p && 61 == a.charCodeAt(b + 1) || 62 == p || 60 == p)) 0 == e && (0 < k ? (I[n++] = a.substr(c, k), k = 0) : 0 == n && 0 == q.strict && (I[n++] = ""), e = !0, f = !1, c = b), k++; else if (0 != m || 43 != p && 45 != p && 42 != p && 47 != p && 94 != p && 63 != p && 58 != p) {
                        if (0 == g) if (91 == p) l++, m = !0; else if (93 == p) l--, 0 == l && 0 == h && (m = !1); else if (40 == p) h++, m = !0; else if (41 == p) h--, 0 == h && 0 == l && (m = !1); else {
                            if (39 == p || 34 == p) g = p, m = !0
                        } else p == g && (g = 0, 0 == l && 0 == h && (m = !1));
                        if (e || f) 0 < k && (I[n++] = a.substr(c, k), k = 0), f = e = !1, c = b;
                        0 == k && (c = b);
                        k++
                    } else 0 < k && (I[n++] = a.substr(c, k)), e = !1, f = !0, c = b, k = 1;
                    0 < k && (I[n++] = a.substr(c, k));
                    2 == n && e && 0 == q.strict && (I[n++] = "");
                    return I
                }

                function A(a) {
                    var b = a.length;
                    if (!(3 > b)) {
                        var d, c;
                        for (d = 1; d < b - 1; d++) if (c = a[d], "==" == c || "!=" == c) {
                            a[d - 1] = "@" + a[d - 1];
                            c = a[d + 1];
                            if ("+" == c || "-" == c) for (d++, c = a[d + 1]; "+" == c || "-" == c;) d++, c = a[d + 1];
                            a[d + 1] = "@" + c
                        }
                    }
                }

                function p(a) {
                    var b = I, d = a.length, c, k;
                    if (1 == d) a[0] = g(a[0]); else for (c = 0; c < d; c++) if (k = a[c], !(0 <= b.indexOf("." + k + "."))) {
                        switch (k) {
                            case "AND":
                                k = "&&";
                                break;
                            case "OR":
                                k = "||";
                                break;
                            case "GT":
                                k = ">";
                                break;
                            case "GE":
                                k = ">=";
                                break;
                            case "LT":
                                k = "<";
                                break;
                            case "LE":
                                k = "<=";
                                break;
                            case "EQ":
                                k = "==";
                                break;
                            case "LSHT":
                                k = "<<";
                                break;
                            case "RSHT":
                                k = ">>";
                                break;
                            case "BAND":
                                k = "~&";
                                break;
                            case "BOR":
                                k = "~|";
                                break;
                            default:
                                k = g(k)
                        }
                        a[c] = k
                    }
                }

                function u(a) {
                    var b = a.length;
                    if (!(2 > b)) {
                        var d = I, c, k, e = null;
                        for (c = 0; c < a.length; c++) if (e = a[c], "+" == e || "-" == e) if (0 == c || 0 <= d.indexOf("." + a[c - 1] + ".")) {
                            k = 45 == e.charCodeAt(0) ? -1 : 1;
                            b = 1;
                            for (e = "" + a[c + b]; "+" == e || "-" == e;) k *= 45 == e.charCodeAt(0) ? -1 : 1, b++, e = "" + a[c + b];
                            e && 40 == e.charCodeAt(0) && (e = g(e));
                            e = e && 37 == e.charCodeAt(e.length - 1) ? parseFloat(e) * k + "%" : Number(e) * k;
                            a.splice(c, 1 + b, e);
                            --c
                        }
                        for (c = 1; c < a.length - 1; c++) e = a[c], "*" == e ? (a.splice(c - 1, 3, Number(a[c - 1]) * Number(a[c + 1])), c -= 3) : "/" == e ? (a.splice(c - 1, 3, Number(a[c - 1]) / Number(a[c + 1])), c -= 3) : "^" == e ? (a.splice(c - 1, 3, Math.pow(Number(a[c - 1]), Number(a[c + 1]))), c -= 3) : "<<" == e ? (a.splice(c - 1, 3, Number(a[c - 1]) << Number(a[c + 1])), c -= 3) : ">>" == e ? (a.splice(c - 1, 3, Number(a[c - 1]) >> Number(a[c + 1])), c -= 3) : "~&" == e ? (a.splice(c - 1, 3, Number(a[c - 1]) & Number(a[c + 1])), c -= 3) : "~|" == e && (a.splice(c - 1, 3, Number(a[c - 1]) | Number(a[c + 1])), c -= 3);
                        for (c = 1; c < a.length - 1; c++) e = a[c], "+" == e ? (a.splice(c - 1, 3, a[c - 1] + a[c + 1]), c -= 3) : "-" == e && (a.splice(c - 1, 3, Number(a[c - 1]) - Number(a[c + 1])), c -= 3)
                    }
                }

                function v(a) {
                    if (1 == a.length) return a[0];
                    var c, b = null, d = null, k = null, b = !1;
                    for (c = 0; c < a.length; c++) if (b = "" + a[c], 0 < b.length && 0 <= _[504].indexOf(b)) {
                        if (0 == c || c >= a.length - 1) throw _[43];
                        d = a[c - 1];
                        k = a[c + 1];
                        switch (b) {
                            case "===":
                            case "==":
                                b = d == k;
                                break;
                            case "!==":
                            case "!=":
                                b = d != k;
                                break;
                            case "<":
                                b = d < k;
                                break;
                            case "<=":
                                b = d <= k;
                                break;
                            case ">":
                                b = d > k;
                                break;
                            case ">=":
                                b = d >= k;
                                break;
                            default:
                                throw _[43];
                        }
                        a.splice(c - 1, 3, b);
                        c -= 2
                    }
                    if (1 == a.length) return a[0];
                    for (c = 0; c < a.length; c++) if (b = a[c], "&&" == b || "||" == b) {
                        if (0 == c || c >= a.length - 1) throw _[43];
                        d = a[c - 1];
                        k = a[c + 1];
                        b = "&&" == b ? d && k : d || k;
                        a.splice(c - 1, 3, b);
                        c -= 2
                    }
                    if (5 == a.length && "?" == a[1] && ":" == a[3]) return a[0] ? a[2] : a[4];
                    if (1 < a.length) throw _[43];
                    return a[0]
                }

                function g(a) {
                    var c = void 0, c = J(a), b = c.charCodeAt(0), d, e = 0, f = !1;
                    64 == b && (f = !0, a = a.slice(1), c = c.slice(1), b = c.charCodeAt(0));
                    if (39 == b || 34 == b) {
                        a = Wa(a);
                        if (f && 5 >= a.length) {
                            c = J(a);
                            if ("true" == c) return !0;
                            if (_[27] == c) return !1;
                            if ("null" == c) return null
                        }
                        2 >= a.length && 0 <= I.indexOf("." + a + ".") && (a = k + a + k);
                        return a
                    }
                    if (33 == b || 43 == b || 45 == b) e = b, a = a.slice(1), c = c.slice(1), b = c.charCodeAt(0);
                    d = c.charCodeAt(c.length - 1);
                    40 == b && 41 == d ? c = t(a.slice(1, -1)) : 37 == d ? c = a : (c = "null" != c ? O(a, l.actioncaller, !0) : null, void 0 === c ? (b = Number(a), isNaN(b) || isNaN(parseFloat(a)) ? f && (c = a) : c = b) : _[1] == typeof c && (a = J(c), "true" == a ? c = !0 : _[27] == a ? c = !1 : "null" == a ? c = null : (a = Number(c), isNaN(a) || (c = a))));
                    33 == e ? c = !c : 45 == e && (c = -c);
                    return c
                }

                function t(a) {
                    var c;
                    if ("" == a || null === a) return a;
                    try {
                        var b = E(a);
                        0 == q.strict && A(b);
                        p(b);
                        u(b);
                        c = v(b);
                        _[1] == typeof c && (c = c.split(k).join(""))
                    } catch (d) {
                        wa(3, d + ": " + a)
                    }
                    return c
                }

                function C(a) {
                    var c = a.position;
                    1 == a.motionmode ? (c *= a.Tmax, c <= a.T1 ? c *= a.accelspeed / 2 * c : c > a.T1 && c <= a.T1 + a.T2 ? c = a.S1 + (c - a.T1) * a.Vmax : (c -= a.T1 + a.T2, c = a.Vmax * c + a.breakspeed / 2 * c * c + a.S1 + a.S2), c = 0 != a.Smax ? c / a.Smax : 1) : 2 == a.motionmode && (c = a.tweenfu(c, 0, 1));
                    r.hlookat = a.startH + c * (a.destH - a.startH);
                    r.vlookat = a.startV + c * (a.destV - a.startV);
                    r.fov = a.startF + c * (a.destF - a.startF);
                    Xa(_[608])
                }

                function z(a, c) {
                    var b = O(a, c);
                    null == b && (b = a);
                    return b
                }

                function y(a) {
                    var c = a.waitfor;
                    "load" == c ? Ya.isLoading() && (a.position = 0) : "blend" == c && Ya.isBlending() && (a.position = 0);
                    Xa("wait")
                }

                function F(a) {
                    var c = a.varname, b = parseFloat(a.startval), d = parseFloat(a.endval),
                        k = null != a.startval ? 0 < String(a.startval).indexOf("%") : !1,
                        e = null != a.endval ? 0 < String(a.endval).indexOf("%") : !1;
                    e ? k || (b = 0) : k && 0 == d && (e = !0);
                    var k = 0, k = a.position, f = a.tweenmap;
                    0 <= c.indexOf(_[26], c.lastIndexOf(".") + 1) ? (b = parseInt(a.startval), d = parseInt(a.endval), 1 <= k ? k = d : (k = f(k, 0, 1), k = Math.min(Math.max((b >> 24) + k * ((d >> 24) - (b >> 24)), 0), 255) << 24 | Math.min(Math.max((b >> 16 & 255) + k * ((d >> 16 & 255) - (b >> 16 & 255)), 0), 255) << 16 | Math.min(Math.max((b >> 8 & 255) + k * ((d >> 8 & 255) - (b >> 8 & 255)), 0), 255) << 8 | Math.min(Math.max((b & 255) + k * ((d & 255) - (b & 255)), 0), 255))) : k = 1 <= k ? d : f(k, b, d - b);
                    M(c, e ? k + "%" : k, !0, a.actioncaller);
                    null != a.updatefu && l.callaction(a.updatefu, a.actioncaller)
                }

                var l = aa, c = !1;
                l.blocked = !1;
                l.actioncaller = null;
                var D = {};
                l.addPAction = function (a, c) {
                    D[a] = c
                };
                var B = [], P = [], ga = [], Q = null, Ba = 0, G = [], X = null, na = null, N = null, S = function () {
                    this.blockedactions = this.id = null;
                    this.position = this.maxruntime = this.starttime = 0;
                    this.updatefu = this.actioncaller = this.donecall = this.process = null
                };
                l.copyattributes = function (a, c) {
                    for (var b in c) {
                        var d = J(b);
                        if ("name" != d && "index" != d && "_type" != d) {
                            var k = c[b];
                            if (_[15] !== typeof k) {
                                if (k && _[1] == typeof k) {
                                    var e = k.slice(0, 4);
                                    "get:" == e ? k = O(k.slice(4)) : "calc" == e && 58 == k.charCodeAt(4) && (k = t(k.slice(5)))
                                }
                                a[d] = _[53] == typeof a[d] ? ma(k) : k
                            }
                        }
                    }
                };
                l.assignstyle = function (a, c) {
                    var b = O(a);
                    if (b && (null == c && (c = b.style), c)) {
                        b.style = c;
                        var d = c.split("|"), k, e;
                        e = d.length;
                        for (k = 0; k < e; k++) {
                            var f = O(_[601] + d[k] + "]");
                            f ? l.copyattributes(b, f) : wa(3, a + _[230] + d[k])
                        }
                    }
                };
                l.checkInterrupt = function () {
                    if (0 < G.length) {
                        var a = Q;
                        if (a) {
                            Q = null;
                            var c = B, b = c.length, d;
                            for (d = 0; d < b; d++) {
                                var k = c[d];
                                k && k.blockedactions && (c.splice(d, 1), b--, d--)
                            }
                            X = na = null;
                            G = [];
                            "break" != J(a) && l.callaction(a)
                        }
                    }
                };
                l.isblocked = function () {
                    return 0 < G.length || c
                };
                l.isBusy = function () {
                    return c
                };
                l.actions_autorun = function (a, c) {
                    var b = q.action.getArray(), d = [], k, e, f = null;
                    e = b.length;
                    for (k = 0; k < e; k++) (f = b[k]) && f.autorun == a && !f._arDone && (f._arDone = !0, d.push(f));
                    e = d.length;
                    if (0 < e) {
                        b = "";
                        for (k = 0; k < e; k++) f = d[k], b += _[541] + f.name + ");";
                        l.callaction(b, null, c)
                    }
                };
                l.callwith = function (a, c) {
                    var b = O(a, l.actioncaller);
                    if (b) {
                        var d = b._type;
                        _[57] != d && _[7] != d || l.callaction(c, b)
                    }
                };
                l.callaction = function (a, c, b) {
                    a && "null" != a && "" != a && (b = typeof a, _[15] === b ? a() : _[91] !== b && l.executeActions(Db(a, c, !1)))
                };
                l.haltActions = function () {
                    c = !0;
                    var a = new S;
                    a.id = "HALT" + ++Ba;
                    a.maxruntime = 1;
                    a.process = f;
                    a.starttime = Sa();
                    a.actioncaller = l.actioncaller;
                    a.blockedactions = [];
                    X = a;
                    G.push(a);
                    B.push(a);
                    N = a
                };
                l.resumeActions = function () {
                    c = !1;
                    N && (X === N && (X = null), N = null)
                };
                l.processactions = function () {
                };
                var K = 0, xb = 0, ra = 0;
                l.executeActions = function (c) {
                    if (null != c) {
                        K++;
                        if (1 == K) ra = 0; else if (0 < ra) return;
                        for (var b = null, k = null, e = null, b = null, f = l.actioncaller, h = 0, h = 0; h < c.length; h++) {
                            if (N && 0 == xb) {
                                N.blockedactions = N.blockedactions.concat(c.slice(h));
                                break
                            }
                            if (X && 0 == xb) {
                                X.blockedactions = X.blockedactions.concat(c.slice(h));
                                break
                            }
                            var b = c[h], k = String(b.cmd), e = b.args.slice(0), g = b.caller;
                            g && !0 === g._destroyed && (b.caller = g = null);
                            l.actioncaller = g;
                            if ("//" != k.slice(0, 2)) {
                                if ("call" == k) k = J(e.shift()); else if ("break" == k) {
                                    ra = K;
                                    break
                                }
                                a(e, g, "set" == k);
                                if (_[282] == k && 0 == ma(e[1])) {
                                    var k = e[0], k = J(k), m = null, m = q.events[k];
                                    null != m && void 0 !== m && "" != m && l.nexttick(m);
                                    e = q.events.getArray();
                                    g = e.length;
                                    b = void 0;
                                    for (b = 0; b < g; b++) if (m = e[b]) m = m[k], null != m && void 0 !== m && "" != m && l.nexttick(m)
                                } else if (void 0 !== l[k]) l[k].apply(l[k], e); else if (g && void 0 !== g[k]) b = g[k], _[15] === typeof b ? b.apply(b, e) : l.executeActions(Db(g[k], g, !1)); else {
                                    if (_[11] == k || "call" == k) k = J(e.shift());
                                    b = null;
                                    null != (b = O(k)) ? (m = typeof b, _[15] === m ? b.apply(b, e) : _[91] === m ? wa(2, _[111] + yd(k)) : _[1] === typeof b && (e.splice(0, 0, k), b = d(b, e), l.executeActions(Db(b, g, !1)))) : (m = O(_[543] + k + "]")) ? ((b = m.content) || (b = D[k]), b && (e.splice(0, 0, k), _[407] === J(m.type) ? n(b, e, g) : (b = d(b, e), l.executeActions(Db(b, g, !1))))) : wa(2, _[111] + yd(k))
                                }
                            }
                        }
                        l.actioncaller = f;
                        K--;
                        0 == K && (ra = 0, X = null)
                    }
                };
                l.processAnimations = function (a) {
                    var c = !1, b = B, d = b.length, k, e = Sa();
                    a = 1 == a;
                    for (k = 0; k < d; k++) {
                        var f = b[k];
                        if (f) {
                            var h = 0 < f.maxruntime ? (e - f.starttime) / 1E3 / f.maxruntime : 1;
                            isNaN(h) && (h = 1);
                            1 < h && (h = 1);
                            f.position = h;
                            null != f.process && (c = !0, f.process(f), h = f.position);
                            if (1 <= h || a) b.splice(k, 1), d--, k--, f.blockedactions ? (na === f && (na = null), G.splice(G.indexOf(f), 1), 0 < f.blockedactions.length && 0 == a && (h = f.blockedactions, f.blockedactions = null, l.executeActions(h))) : f.donecall && 0 == a && l.callaction(f.donecall, f.actioncaller)
                        }
                    }
                    return c
                };
                l.processTicks = function () {
                    var a = P, c = a.length, b;
                    if (0 < c) for (P = [], b = 0; b < c; b++) {
                        var d = a[b], k = d.actioncaller;
                        k && !0 === k._destroyed && (d.actioncaller = k = null);
                        l.callaction(d.call, k)
                    }
                };
                l.fromcharcode = function () {
                    var a = arguments;
                    2 == a.length && M(a[0], String.fromCharCode(z(a[1], l.actioncaller)), !1, l.actioncaller)
                };
                l.stopmovements = function () {
                    eb.stopFrictions(4)
                };
                l.stopall = function () {
                    h(_[547]);
                    B = [];
                    G = [];
                    N = na = X = null
                };
                l.breakall = function () {
                    h(_[490]);
                    l.processAnimations(!0)
                };
                l.oninterrupt = function (a) {
                    Q = a
                };
                l.delayedcall = function () {
                    var a = arguments, c = a.length, b = 0;
                    3 == c && (b++, c--);
                    2 == c && (c = new S, c.maxruntime = Number(a[b]), c.donecall = a[b + 1], c.starttime = Sa(), c.actioncaller = l.actioncaller, c.id = 0 < b ? "ID" + J(a[0]) : "DC" + ++Ba, m(c.id), B.push(c))
                };
                l.stopdelayedcall = function (a) {
                    m("ID" + J(a))
                };
                l.nexttick = function (a) {
                    var c = {};
                    c.call = a;
                    c.actioncaller = l.actioncaller;
                    P.push(c)
                };
                l.def = function () {
                    var a = arguments, c = a.length;
                    if (2 <= c) {
                        var b = l.actioncaller, d = "" + a[0], k = J(a[1]), a = 3 == c ? a[2] : O(d, b, !1);
                        _[91] == k ? a = {} : _[559] == k ? (a = parseInt(a), isNaN(a) && (a = 0)) : a = ta(a, k);
                        M(d, a, !1, b, !0)
                    }
                };
                l.set = function () {
                    var a = arguments;
                    2 == a.length && M(a[0], a[1], !1, l.actioncaller)
                };
                l.copy = function () {
                    var a = arguments;
                    if (2 == a.length) {
                        var c = O(a[1], l.actioncaller);
                        M(a[0], void 0 === c ? null : c, !1, l.actioncaller)
                    }
                };
                l.push = function () {
                    var a = arguments;
                    1 == a.length && ga.push(O(a[0], l.actioncaller))
                };
                l.pop = function () {
                    var a = arguments;
                    1 == a.length && M(a[0], ga.pop(), !1, l.actioncaller)
                };
                l[_[597]] = function () {
                    var a = arguments, c = a.length, b = a[0], d = J(O(b, l.actioncaller));
                    if (1 == c) M(b, !ma(d), !0, l.actioncaller); else if (3 <= c) {
                        var k;
                        c--;
                        for (k = 1; k <= c; k++) {
                            var e = J(a[k]), f = !1;
                            isNaN(Number(d)) || isNaN(Number(e)) ? d == e && (f = !0) : Number(d) == Number(e) && (f = !0);
                            if (f) {
                                k++;
                                k > c && (k = 1);
                                M(b, a[k], !0, l.actioncaller);
                                break
                            }
                        }
                    }
                };
                l.toggle = function (a) {
                    var c = O(a, l.actioncaller, !0);
                    void 0 !== c && M(a, !ma(c), !0, l.actioncaller)
                };
                l.roundval = function () {
                    var a = arguments;
                    if (1 <= a.length) {
                        var c = Number(O(a[0], l.actioncaller)), b = 2 == a.length ? parseInt(a[1]) : 0,
                            c = 0 == b ? Math.round(c).toString() : c.toFixed(b);
                        M(a[0], c, !1, l.actioncaller, !0)
                    }
                };
                l.tohex = function () {
                    var a = arguments, c = a.length;
                    if (0 < c) {
                        var b = parseInt(O(a[0], l.actioncaller)).toString(16).toUpperCase();
                        2 < c && (b = (_[487] + b).slice(-parseInt(a[2])));
                        1 < c && (b = a[1] + b);
                        M(a[0], b, !1, l.actioncaller, !0)
                    }
                };
                l.tolower = function () {
                    var a = arguments;
                    1 == a.length && M(a[0], J(O(a[0], l.actioncaller)), !1, l.actioncaller, !0)
                };
                l.toupper = function () {
                    var a = arguments;
                    1 == a.length && M(a[0], ("" + O(a[0], l.actioncaller)).toUpperCase(), !1, l.actioncaller, !0)
                };
                l.inc = function () {
                    var a = arguments, c = a.length;
                    if (1 <= c) {
                        var b = Number(O(a[0], l.actioncaller)) + (1 < c ? Number(a[1]) : 1);
                        3 < c && b > Number(a[2]) && (b = Number(a[3]));
                        M(a[0], b, !0, l.actioncaller)
                    }
                };
                l.dec = function () {
                    var a = arguments, c = a.length;
                    if (1 <= c) {
                        var b = Number(O(a[0], l.actioncaller)) - (1 < c ? Number(a[1]) : 1);
                        3 < c && b < Number(a[2]) && (b = Number(a[3]));
                        M(a[0], b, !0, l.actioncaller)
                    }
                };
                l.add = function () {
                    var a = x(arguments);
                    a && M(a[0], a[1] + a[2], !1, l.actioncaller)
                };
                l.sub = function () {
                    var a = x(arguments);
                    a && M(a[0], a[1] - a[2], !1, l.actioncaller)
                };
                l.mul = function () {
                    var a = x(arguments);
                    a && M(a[0], a[1] * a[2], !1, l.actioncaller)
                };
                l.div = function () {
                    var a = x(arguments);
                    a && M(a[0], a[1] / a[2], !1, l.actioncaller)
                };
                l.mod = function () {
                    var a = x(arguments);
                    if (a) {
                        var c = a[1], b = c | 0, c = c + (-b + b % (a[2] | 0));
                        M(a[0], c, !1, l.actioncaller)
                    }
                };
                l.pow = function () {
                    var a = x(arguments);
                    a && M(a[0], Math.pow(a[1], a[2]), !1, l.actioncaller)
                };
                l.clamp = function () {
                    var a = arguments;
                    if (3 == a.length) {
                        var c = l.actioncaller, b = Number(O(a[0], c)), d = Number(a[1]), k = Number(a[2]);
                        b < d && (b = d);
                        b > k && (b = k);
                        M(a[0], b, !1, c)
                    }
                };
                l.remapfovtype = function () {
                    var a = arguments, c = a.length;
                    if (3 == c || 5 == c) {
                        var b = l.actioncaller, d = Number(O(a[0], b)),
                            k = 3 == c ? q.area.pixelwidth : Number(O(a[3], b)),
                            c = 3 == c ? q.area.pixelheight : Number(O(a[4], b)), d = r.fovRemap(d, a[1], a[2], k, c);
                        M(a[0], d, !1, b)
                    }
                };
                l.screentosphere = function () {
                    var a = arguments;
                    if (4 == a.length) {
                        var c = l.actioncaller, b = r.screentosphere(Number(O(a[0], c)), Number(O(a[1], c)));
                        M(a[2], b.x, !1, c);
                        M(a[3], b.y, !1, c)
                    }
                };
                l.spheretoscreen = function () {
                    var a = arguments;
                    if (4 <= a.length) {
                        var c = l.actioncaller, b = r.spheretoscreen(Number(O(a[0], c)), Number(O(a[1], c)), a[4]);
                        M(a[2], b.x, !1, c);
                        M(a[3], b.y, !1, c)
                    }
                };
                l.screentolayer = function () {
                    var a = arguments;
                    if (5 == a.length) {
                        var c = l.actioncaller, b = xa.getItem(a[0]);
                        if (b) {
                            var d = Number(O(a[1], c)), k = Number(O(a[2], c)), e = qd, f = qd, h = b.sprite;
                            if (h) {
                                var g = ba, f = Y.viewerlayer.getBoundingClientRect(), m = h.getBoundingClientRect(),
                                    e = d * g - (m.left - f.left + h.clientLeft + h.scrollLeft),
                                    f = k * g - (m.top - f.top + h.clientTop + h.scrollTop);
                                b.scalechildren && (g = 1);
                                e /= b._finalxscale * g;
                                f /= b._finalyscale * g
                            }
                            M(a[3], e, !1, c);
                            M(a[4], f, !1, c)
                        }
                    }
                };
                l.layertoscreen = function () {
                    var a = arguments;
                    if (5 == a.length) {
                        var c = l.actioncaller, b = xa.getItem(a[0]);
                        if (b) {
                            var d = Number(O(a[1], c)), k = Number(O(a[2], c)), e = qd, f = qd, h = b.sprite;
                            if (h) var f = ba, g = b.scalechildren ? f : 1, m = Y.viewerlayer.getBoundingClientRect(),
                                I = h.getBoundingClientRect(),
                                e = d * b._finalxscale / g + (I.left - m.left + h.clientLeft + h.scrollLeft) / f,
                                f = k * b._finalyscale / g + (I.top - m.top + h.clientTop + h.scrollTop) / f;
                            M(a[3], e, !1, c);
                            M(a[4], f, !1, c)
                        }
                    }
                };
                l.escape = function () {
                    H(0, arguments, l.actioncaller)
                };
                l.unescape = function () {
                    H(1, arguments, l.actioncaller)
                };
                l.txtadd = function () {
                    var a = arguments, c, b = a.length, d = 2 == b ? String(O(a[0], l.actioncaller)) : "";
                    "null" == d && (d = "");
                    for (c = 1; c < b; c++) d += a[c];
                    M(a[0], d, !1, l.actioncaller, !0)
                };
                l.subtxt = function () {
                    var a = arguments, c = a.length;
                    if (2 <= c) {
                        var b = O(a[1], l.actioncaller), b = null == b ? String(a[1]) : String(b),
                            b = b.substr(2 < c ? Number(a[2]) : 0, 3 < c ? Number(a[3]) : void 0);
                        M(a[0], b, !1, l.actioncaller, !0)
                    }
                };
                l.indexoftxt = function () {
                    var a = arguments, c = a.length;
                    3 <= c && (c = String(a[1]).indexOf(String(a[2]), 3 < c ? Number(a[3]) : 0), M(a[0], c, !1, l.actioncaller, !0))
                };
                l.txtreplace = function () {
                    var a = arguments, c = a.length;
                    if (3 == c || 4 == c) {
                        var c = 3 == c ? 0 : 1, b = O(a[c], l.actioncaller);
                        if (b) var d = a[c + 2], b = b.split(a[c + 1]).join(d);
                        M(a[0], b, !1, l.actioncaller, !0)
                    }
                };
                l.txtsplit = function () {
                    var a = arguments, c = a.length;
                    if (3 <= c) {
                        var b = ("" + z(a[0], l.actioncaller)).split("" + a[1]), d;
                        if (3 == c) for (d = 0; d < b.length; d++) M(a[2] + "[" + d + _[561], b[d], !1, l.actioncaller, !0); else for (d = 2; d < c; d++) M(a[d], b[d - 2], !1, l.actioncaller, !0)
                    }
                };
                l.showlog = function () {
                    var a = arguments, a = !(1 == a.length && 0 == ma(a[0]));
                    Y.showlog(a)
                };
                l[_[595]] = function () {
                    var a = arguments, c, b = a.length, d = l.actioncaller;
                    for (c = 0; c < b; c++) a:{
                        var k = d, e = void 0, f = void 0, h = void 0, g = Od(a[c]), f = g.length;
                        if (1 == f && k && (h = g[0], k.hasOwnProperty(h))) {
                            k[h] = null;
                            delete k[h];
                            break a
                        }
                        for (var m = q, e = 0; e < f; e++) {
                            var h = g[e], I = e == f - 1, n = null, p = h.indexOf("[");
                            0 < p && (n = Dc(h, p + 1, h.length - 1, k), h = h.slice(0, p));
                            if (void 0 !== m[h]) {
                                if (null != n && (p = m[h], p.isArray)) if (h = p.getItem(n)) if (I) break a; else {
                                    m = h;
                                    continue
                                } else break;
                                if (I) {
                                    m[h] = null;
                                    delete m[h];
                                    break a
                                } else m = m[h]
                            } else break
                        }
                    }
                };
                l.Ltrace = function (a, c) {
                    var b, d = c.length, k = "", e = l.actioncaller;
                    for (b = 0; b < d; b++) var f = c[b], h = O(f, e), k = null != h ? k + h : k + f;
                    wa(a, k)
                };
                l.debug = function () {
                    l.Ltrace(0, arguments)
                };
                l.trace = function () {
                    l.Ltrace(1, arguments)
                };
                l.warning = function () {
                    l.Ltrace(2, arguments)
                };
                l.error = function () {
                    l.Ltrace(3, arguments)
                };
                l.fatalerror = function (a) {
                    cb(a)
                };
                l.openurl = function () {
                    var a = arguments;
                    W.open(a[0], 0 < a.length ? a[1] : _[594])
                };
                l.loadscene = function () {
                    var a = arguments;
                    if (0 < a.length) {
                        var c = a[0], b = O(_[89] + c + _[83]), d = O(_[89] + c + _[482]);
                        d && (d += ";");
                        null == b ? wa(3, 'loadscene() - scene "' + c + '" not found') : (q.xml.sceneNEW = c, q.xml.view = {}, Ya.loadxml(_[145] + b + _[136], a[1], a[2], a[3], d))
                    }
                };
                l.jsget = function () {
                    var a = arguments;
                    if (2 == a.length) {
                        var c = a[0], b = a[1], d = null;
                        try {
                            (function () {
                                var krpano = Y.viewerlayer;
                                d = eval(b)
                            })()
                        } catch (k) {
                            wa(3, "js" + (c ? "get" : "call") + '() - calling Javascript "' + b + '" failed: ' + k)
                        }
                        c && M(c, d, !1, l.actioncaller)
                    }
                };
                l.jscall = function () {
                    var a = arguments;
                    1 == a.length && l.jsget(null, a[0])
                };
                l.parseFunction = function (c) {
                    var b = null;
                    if (c = Db(c, null, !0)) c = c[0], a(c.args, l.actioncaller), b = [c.cmd].concat(c.args);
                    return b
                };
                l.js = function (c) {
                    c = "" + c;
                    var b = Db(c, null, !0);
                    if (b) {
                        b = b[0];
                        a(b.args, l.actioncaller);
                        var d = !1;
                        if (_[15] == typeof W[b.cmd]) {
                            d = !0;
                            try {
                                W[b.cmd].apply(W[b.cmd], b.args)
                            } catch (k) {
                                d = !1
                            }
                        }
                        if (0 == d) {
                            b = b.cmd + (0 < b.args.length ? "('" + b.args.join("','") + "');" : "();");
                            try {
                                eval(b)
                            } catch (e) {
                                wa(2, 'js() - calling Javascript "' + c + '" failed: ' + e)
                            }
                        }
                    }
                };
                l.setfov = function () {
                    var a = arguments;
                    1 == a.length && (r.fov = Number(a[0]))
                };
                l.lookat = function () {
                    var a = arguments;
                    if (1 <= a.length) {
                        var c, b = q.webVR;
                        b && b.enabled && b.setoffset ? (c = parseFloat(a[0]), isNaN(c) || (Ya.setLastPanoOffset(c - r.hlookat), b.setoffset(c), r.hlookat = c)) : (c = parseFloat(a[0]), isNaN(c) || (r.hlookat = c), c = parseFloat(a[1]), isNaN(c) || (r.vlookat = c), c = parseFloat(a[2]), isNaN(c) || (r.fov = c), c = parseFloat(a[3]), isNaN(c) || (r.distortion = c), c = parseFloat(a[4]), isNaN(c) || (r.architectural = c), c = parseFloat(a[5]), isNaN(c) || (r.pannini = "" + c))
                    }
                };
                l.adjusthlookat = function () {
                    var a = arguments;
                    1 == a.length && (a = Number(z(a[0], l.actioncaller)), isNaN(a) || (r.hlookat = md(r.hlookat, a)))
                };
                l["for"] = function () {
                    var a = arguments;
                    if (4 == a.length) {
                        xb++;
                        var c = l.actioncaller, b = "" + a[1], d = "" + a[3] + ";" + a[2], a = Db("" + a[0], c, !1),
                            c = Db(d, c, !1);
                        l.executeActions(a);
                        d = null;
                        try {
                            d = E(b), 0 == q.strict && A(d)
                        } catch (k) {
                            d = null, wa(3, k + ": " + b)
                        }
                        if (d) for (; ;) if (b = d.slice(), p(b), u(b), v(b)) {
                            if (l.executeActions(c), 0 < ra) {
                                ra = 0;
                                break
                            }
                        } else break;
                        xb--
                    }
                };
                l.loop = function () {
                    e("loop", _[336], arguments, l.actioncaller)
                };
                l.asyncloop = function () {
                    e(_[478], _[184], arguments, l.actioncaller)
                };
                l.callwhen = function () {
                    e(_[509], _[190], arguments, l.actioncaller)
                };
                l.asyncfor = function () {
                    e(_[514], "if('%5'!='NEXTLOOP',%1);if(%2,%4;%3;delayedcall(0,asyncfor(%1,%2,%3,%4,NEXTLOOP)););", arguments, l.actioncaller)
                };
                l.setinterval = function () {
                    e(_[374], _[181], arguments, l.actioncaller)
                };
                l.clearinterval = function (a) {
                    l.stopdelayedcall(_[470] + a)
                };
                var k = String.fromCharCode(2), I = ".<.<<.<=.==.===.>=.>.>>.!=.!==.+.-.*./.^.&&.||.?.:.~|.~&.";
                l.calc = function () {
                    var a, c = arguments;
                    2 == c.length && (a = t(c[1]), c[0] && M(c[0], a, !1, l.actioncaller));
                    return a
                };
                l.resolvecondition = function () {
                    var a = l.actioncaller, c = arguments, b = c.length, d = null, k = null, k = !1;
                    if (2 == b || 3 == b) {
                        d = J(c[0]);
                        k = 2 == b ? c[1] : c[2];
                        if ("null" == d || "" == d) d = null;
                        k = null == k || "" == k ? !1 : t(k);
                        null != d && (3 == b && (c = J(c[1]), b = ma(O(d, a)), "and" == c ? k = b && k : "or" == c ? k = b || k : "xor" == c && (k = !(b && k) && (b || k))), M(d, k, !1, a))
                    }
                    return k
                };
                l["if"] = function () {
                    var a = arguments, c = l.actioncaller;
                    2 <= a.length && (t(a[0]) ? l.callaction(a[1], c, !0) : 3 == a.length && l.callaction(a[2], c, !0))
                };
                l.ifnot = function () {
                    var a = arguments;
                    l["if"](a[0], a[2], a[1])
                };
                l.stoplookto = function () {
                    m(_[90])
                };
                l.lookto = function () {
                    var c = arguments, b = c.length;
                    if (2 <= b) if (na) wa(2, _[171]); else {
                        var d = 0 == ma(c[5]);
                        d && 0 < xb && wa(2, _[178]);
                        var k = l.actioncaller, e = new S;
                        l.stopmovements();
                        m(_[90]);
                        e.id = _[90];
                        e.actioncaller = k;
                        0 == d ? e.donecall = c[6] : (na = e, e.blockedactions = [], X = e, G.push(e));
                        4 < b && void 0 === c[4] && b--;
                        3 < b && void 0 === c[3] && b--;
                        2 < b && void 0 === c[2] && b--;
                        var f = Number(c[0]), h = Number(c[1]), g = 2 < b ? Number(c[2]) : r.fov,
                            I = 3 < b ? c[3] : null, n = 4 < b ? ma(c[4]) : !0;
                        if (!(isNaN(f) || isNaN(h) || isNaN(g))) {
                            var f = f - Number(q.image.viewoffset), p = 1, c = 720, b = -720, d = 720, t = r.hlookat,
                                u = t, x = r.vlookat, v = r.fov;
                            if (n) {
                                for (; -90 > h || 90 < h;) -90 > h ? (h = -180 - h, f += 180) : 90 < h && (h = 180 - h, f -= 180);
                                for (; 0 > t;) t += 360;
                                for (; 360 < t;) t -= 360;
                                for (; 0 > f;) f += 360;
                                for (; 360 < f;) f -= 360;
                                for (; -180 > x;) x += 360;
                                for (; 180 < x;) x -= 360;
                                t = md(t, f);
                                x = md(x, h);
                                n = t - u;
                                t -= n;
                                f -= n
                            }
                            e.startH = t;
                            e.startV = x;
                            e.startF = v;
                            e.destH = f;
                            e.destV = h;
                            e.destF = g;
                            f = Math.sqrt((f - t) * (f - t) + (h - x) * (h - x) + (g - v) * (g - v));
                            I && ((I = Db(I, null, !1)) && (I = I[0]), I && (h = I.cmd, g = I.args, a(g, k), _[58] == h ? (p = 0, d = 360, 1 == I.args.length && (d = parseFloat(g[0]))) : _[579] == h ? (p = 1, 0 < I.args.length && (c = parseFloat(g[0])), 1 < I.args.length && (b = parseFloat(g[1])), 2 < I.args.length && (d = parseFloat(g[2])), c = +Math.abs(c), b = -Math.abs(b), d = +Math.abs(d)) : "tween" == h && (p = 2, e.tweenfu = pd.getTweenfu(g[0]), e.maxruntime = parseFloat(g[1]), isNaN(e.maxruntime) && (e.maxruntime = .5))));
                            e.motionmode = p;
                            0 == p ? e.maxruntime = f / d : 1 == p && (k = f, p = d * d / (2 * c), I = d / c, f = -(d * d) / (2 * b), h = -d / b, g = k - (p + f), t = g / d, 0 > t && (d = Math.sqrt(2 * k * c * b / (b - c)), p = d * d / (2 * c), I = d / c, f = -(d * d) / (2 * b), h = -d / b, t = g = 0), x = I + t + h, e.accelspeed = c, e.breakspeed = b, e.Vmax = d, e.Tmax = x, e.Smax = k, e.T1 = I, e.T2 = t, e.T3 = h, e.S1 = p, e.S2 = g, e.S3 = f, e.maxruntime = x);
                            e.starttime = Sa();
                            e.process = C;
                            B.push(e)
                        }
                    }
                };
                l.looktohotspot = function () {
                    var a = arguments, c = l.actioncaller, b = wb.getItem(1 > a.length ? c ? c.name : "" : a[0]);
                    if (b) {
                        var c = b.ath, d = b.atv, k = 30, k = b.getcenter(), c = k.x, d = k.y, k = k.z,
                            b = Number(a[1]);
                        isNaN(b) || (k = b);
                        b = r.fovmin;
                        k < b && (k = b);
                        l.lookto(c, d, k, a[2], a[3])
                    }
                };
                l.moveto = function () {
                    var a = arguments;
                    2 <= a.length && l.lookto(a[0], a[1], r.fov, a[2])
                };
                l.zoomto = function () {
                    var a = arguments;
                    1 <= a.length && l.lookto(r.hlookat, r.vlookat, a[0], a[1])
                };
                l.getlooktodistance = function () {
                    var a = arguments, c = a.length;
                    if (3 <= c) {
                        var b = l.actioncaller, d = Number(z(a[1], b)), k = Number(z(a[2], b)), e = r.hlookat,
                            f = r.vlookat;
                        5 == c && (e = Number(z(a[3], b)), f = Number(z(a[4], b)));
                        if (!(isNaN(d) || isNaN(k) || isNaN(e) || isNaN(f))) {
                            var c = Math.PI, h = c / 180, d = c - d * h, e = c - e * h, f = f * h, k = k * h,
                                d = Math.acos(Math.cos(f) * Math.cos(e) * Math.cos(k) * Math.cos(d) + Math.sin(f) * Math.sin(k) + Math.cos(f) * Math.sin(e) * Math.cos(k) * Math.sin(d)) / h;
                            M(a[0], d, !1, b)
                        }
                    }
                };
                l.wait = function () {
                    var a = arguments;
                    if (1 == a.length) {
                        var a = a[0], c = J(a);
                        if ("load" == c || "blend" == c) a = 0; else {
                            c = "time";
                            a = Number(a);
                            if (isNaN(a)) return;
                            0 >= a && (a = 0)
                        }
                        var b = new S;
                        b.waitfor = c;
                        b.maxruntime = a;
                        b.process = y;
                        b.starttime = Sa();
                        b.actioncaller = l.actioncaller;
                        b.id = "WAIT" + ++Ba;
                        b.blockedactions = [];
                        X = b;
                        G.push(b);
                        B.push(b)
                    }
                };
                l.tween = function () {
                    var a = arguments, c = a.length;
                    if (2 <= c) {
                        var d = l.actioncaller, k = new S, e = J(a[0]);
                        if (0 < e.indexOf("|")) {
                            var c = ("" + a[0]).split("|"), d = ("" + a[1]).split("|"),
                                k = a[3] ? ("" + a[3]).split("|") : [a[3]], f = c.length, h = d.length, g = k.length,
                                I = parseFloat(a[2]);
                            if (0 > I || isNaN(I)) I = .5;
                            for (e = 0; e < h; e++) d[e] = Wa(d[e]);
                            for (e = 0; e < g; e++) k[e] = Wa(k[e]);
                            for (e = 0; e < f; e++) l.tween(Wa(c[e]), d[e % h], I, k[e % g], e == f - 1 ? a[4] : null, e == f - 1 ? a[5] : null)
                        } else {
                            f = e;
                            g = a[1];
                            h = !1;
                            d && 0 > e.indexOf(".") && d.hasOwnProperty(e) && (f = d._type + "[" + d.name + "]." + e, h = !0);
                            0 == h && 0 < e.indexOf("[") && (f = e = b(e, d), f = f.split(_[166]).join(_[155]));
                            k.id = f;
                            k.varname = e;
                            k.actioncaller = d;
                            k.startval = h ? d[e] : O(e, d);
                            if (null == k.startval || "" == k.startval) k.startval = 0;
                            k.endval = g;
                            e = 2 < c ? String(a[2]) : "0.5";
                            if (0 < e.indexOf("(") && (I = Db(e, null, !1))) {
                                var n = I[0];
                                _[519] == n.cmd && (I = Number(n.args[0]), e = Number(n.args[1]), g = Math.abs(parseFloat(g) - parseFloat(k.startval)), e = e * g / I)
                            }
                            e = parseFloat(e);
                            isNaN(e) && (e = .5);
                            k.maxruntime = e;
                            k.tweenmap = pd.getTweenfu(3 < c ? a[3] : _[77]);
                            if (4 < c) if ("wait" == J(a[4])) k.blockedactions = [], X = k, G.push(k); else if (g = a[4]) 0 == h && 0 < g.indexOf("[") && (g = b(g, d)), k.donecall = g;
                            5 < c && (k.updatefu = a[5]);
                            k.starttime = Sa();
                            k.process = F;
                            m(f);
                            B.push(k)
                        }
                    }
                };
                l.stoptween = function () {
                    var a = l.actioncaller, c = arguments, d = c.length, k;
                    for (k = 0; k < d; k++) {
                        var e = J(c[k]);
                        if (0 < e.indexOf("|")) l.stoptween.apply(l.stoptween, e.split("|")); else {
                            if (a && 0 > e.indexOf(".")) {
                                if (m(a._type + "[" + a.name + "]." + e)) continue
                            } else 0 < e.indexOf("[") && (e = b(e, a)), e = e.split(_[166]).join(_[155]);
                            m(e)
                        }
                    }
                };
                l.invalidatescreen = function () {
                    r.haschanged = !0
                };
                l.updatescreen = function () {
                    r.haschanged = !0
                };
                l.updateobject = function () {
                    V && V.updateFOV && V.updateFOV(V, [Number(L.hfov), Number(L.vfov), Number(L.voffset)]);
                    r.haschanged = !0
                };
                l.loadpano = function (a, c, b, d, k) {
                    q.xml.scene = null;
                    q.xml.view = {};
                    Ya.loadpano(a, c, b, d, k)
                };
                l.loadpanoscene = function (a, c, b, d, k, e) {
                    q.xml.sceneNEW = c;
                    q.xml.view = {};
                    q._loadpanoscene_name = c;
                    Ya.loadpano(a, b, d, k, e)
                };
                l.loadxml = function (a, c, b, d, k) {
                    q.xml.scene = null;
                    q.xml.view = {};
                    Ya.loadxml(a, c, b, d, k)
                };
                l.fscommand = function () {
                };
                l.freezeview = function () {
                };
                l.reloadpano = function () {
                };
                l.addlensflare = function () {
                };
                l.removelensflare = function () {
                };
                l.SAcall = function (a) {
                    var c = O(_[11]);
                    if ((a = Db(a, null, !1)) && c) {
                        var b, k;
                        k = a.length;
                        for (b = 0; b < k; b++) {
                            var e = a[b];
                            if (e) {
                                var f = e.cmd, h = c.getItem(f);
                                h && 1 == ma(h.secure) ? (e = e.args, e.splice(0, 0, f), l.callaction(d(h.content, e))) : wa(2, _[506] + f + _[333])
                            }
                        }
                    }
                }
            })();
            var Y = {};
            (function () {
                function a(a) {
                    a = _[210] + a;
                    W.console ? W.console.log(a) : alert(a)
                }

                function b(a, c, b, d, e, f) {
                    var h = Ha(), g = h.style;
                    g.position = _[0];
                    "LT" == a ? (g.left = c, g.top = b) : (g.left = c, g.bottom = b);
                    g.width = d;
                    g.height = e;
                    g.overflow = _[6];
                    !1 === f && (g.webkitUserSelect = g.MozUserSelect = g.msUserSelect = g.oUserSelect = g.userSelect = "none");
                    return h
                }

                function w(a) {
                    if (p.fullscreen = a) W.activekrpanowindow = v.id;
                    v.style.background = a ? fa(q.bgcolor, 1) : _[12];
                    za(1 == a ? _[252] : _[272])
                }

                function e(a, c) {
                    for (var b = a.style, d = c.length, e = 0, e = 0; e < d; e += 2) b[c[e]] = c[e + 1]
                }

                function f() {
                    E(!wc, le);
                    y.style.textDecoration = wc ? _[82] : "none"
                }

                function n() {
                    E(wc, !le);
                    F.style.textDecoration = le ? _[82] : "none"
                }

                function m(a) {
                    Xa(_[30])
                }

                function h(a) {
                    w(!!(ca.fullscreenElement || ca.mozFullScreenElement || ca.webkitIsFullScreen || ca.webkitFullscreenElement || ca.msFullscreenElement))
                }

                function x(a) {
                    p.__scrollpage_yet = W.innerHeight + 1 < Eb;
                    g.style.touchAction = p.__scrollpage_yet ? "pan-y" : "none"
                }

                function H(a, c) {
                    Da(a);
                    var b = "none" != t.style.display ? "none" : "";
                    void 0 !== c && (b = 1 == c ? "" : "none");
                    t.style.display = b;
                    y.style.display = F.style.display = q.debugmode ? "" : "none";
                    C.scrollTop = C.scrollHeight
                }

                function E(a, c) {
                    var b = a ? _[100] : "none";
                    wc = a;
                    le = c;
                    var d, e, f, h;
                    f = xa.getArray();
                    e = f.length;
                    for (d = 0; d < e; d++) (h = f[d]) && h.sprite && (h.sprite.style.outline = b);
                    b = c ? _[202] : "none";
                    f = wb.getArray();
                    e = f.length;
                    for (d = 0; d < e; d++) (h = f[d]) && h.sprite && (h.sprite.style.outline = b);
                    Qa = !0
                }

                function A() {
                    Q && (g.removeChild(Q), Q = null);
                    var a, c = Ha();
                    a = 25;
                    d.androidstock && (a *= d.pixelratio);
                    e(c, [_[36], _[0], "left", "50%", "top", "50%", _[26], _[55], _[50], a + "px", _[67], "none", _[40], _[5], _[334], "none"]);
                    a = c.style;
                    a.zIndex = 999999;
                    a.opacity = .67;
                    a = Ha();
                    e(a, "position;relative;left;-50%;top;-25px;fontFamily;sans-serif;textShadow;#000000 1px 1px 2px;lineHeight;110%".split(";"));
                    a.innerHTML = _[493] + (Ia && Ia[1] && 6 < Wa(Ia[1], !1).length ? Ia[1] : _[189]) + _[455];
                    c.appendChild(a);
                    g.appendChild(c);
                    Q = c
                }

                var p = Y;
                p.fullscreen = !1;
                p.__scrollpage_yet = !1;
                var u = null, v = null, g = null;
                p.htmltarget = null;
                p.viewerlayer = null;
                p.controllayer = null;
                p.panolayer = null;
                p.pluginlayer = null;
                p.hotspotlayer = null;
                var t = p.svglayer = null, C = null, z = null, y = null, F = null, l = 0, c = 0, D = !1, B = !1;
                p.build = function (c) {
                    function l(a) {
                        a && _[8] == a.type && 0 != (a.button | 0) || H(null, !1)
                    }

                    var r = c.target, B = c.id, u = ca.getElementById(r);
                    if (!u) return a(_[191] + r), !1;
                    for (var r = null, w = B, E = 1; ;) if (r = ca.getElementById(B)) if (_[292] == w) E++, B = w + E; else return a(_[185] + B), !1; else break;
                    r = Ha();
                    r.id = B;
                    r.style.position = _[147];
                    r.style.overflow = _[6];
                    r.style.lineHeight = _[61];
                    r.style.fontWeight = _[61];
                    r.style.fontStyle = _[61];
                    r.tabIndex = -1;
                    r.style.outline = 0;
                    B = _[38];
                    c.bgcolor && (B = c.bgcolor, q.bgcolor = parseInt(B.slice(1), 16));
                    w = J(c.wmode);
                    if (_[12] == w || _[158] == w) B = null;
                    null != B && (r.style.background = B);
                    u.appendChild(r);
                    v = r;
                    !0 === c.focus && (W.activekrpanowindow = v.id, v.focus());
                    p.htmltarget = u;
                    p.viewerlayer = r;
                    g = b("LT", 0, 0, "100%", "100%", !1);
                    e(g, "msTouchAction none touchAction none msContentZooming none contentZooming none -webkit-tap-highlight-color transparent".split(" "));
                    p.controllayer = g;
                    u = b("LT", 0, 0, "100%", "100%");
                    p.panolayer = u;
                    e(u, [_[315], "none"]);
                    c = b("LT", 0, 0, "100%", "100%", !1);
                    0 == d.ie && 0 == d.firefox && e(c, [Ee, _[129]]);
                    d.android && d.firefox && Uc && (B = b("LT", 0, 0, "1px", "1px"), B.style.background = _[270], B.style.pointerEvents = "none", B.style.zIndex = 999999999, B.style[qb] = _[28], c.appendChild(B));
                    var B = d.androidstock ? d.pixelratio : 1, w = 156 * B, E = (d.mobile ? 8 : 13) * B,
                        D = d.androidstock || d.android && d.chrome ? 6 : 8;
                    t = b("LB", 0, 0, "100%", w + "px", !0);
                    t.style.display = "none";
                    !0 !== d.opera && Uc && (2 > Ic && (t.style[qb] = _[28]), d.ios && 0 == d.simulator || d.android && d.chrome) && (t.style[qb] = _[28]);
                    t.style.zIndex = 999999999;
                    var P = b("LT", 0, 0, "100%", "100%", !0);
                    P.style.opacity = .67;
                    d.android && d.opera && (P.style.borderTop = _[198]);
                    e(P, [_[276], _[38], uc, _[492] + D + _[421], _[139], D + "px", _[562], .67]);
                    C = ca.createElement("pre");
                    D = null;
                    d.mac && (D = _[330] + (W.chrome ? "1px" : "0"));
                    d.realDesktop ? (C.style.fontFamily = _[32], C.style.fontSize = "11px", D && (C.style.fontSize = "13px", C.style.textShadow = D)) : (C.style.fontFamily = _[21], C.style.fontSize = E + "px");
                    e(C, [_[36], _[0], "left", "5px", "top", "0px", _[62], "left", _[379], 0, _[368], d.realDesktop ? "16px" : 0, _[434], 0, _[341], 0, _[135], "none", _[93], 0, _[139], (d.realDesktop ? 10 : 8) + "px", _[64], "100%", _[17], w - 10 + "px", _[485], "auto", _[241], "none", _[87], "block", _[443], "left", _[442], _[484], _[67], "none", _[26], _[55], _[40], "text"]);
                    z = Ha();
                    D && (z.style.textShadow = D);
                    e(z, [_[36], _[0], _[4], 0, "top", "10px", _[54], "0 4px", _[17], "30px", _[69], "none", _[70], "none", _[80], "none", _[40], _[10], _[42], _[12], _[81], d.realDesktop ? _[32] : _[21], _[50], (d.realDesktop ? 10 : 9 * B | 0) + "px", _[26], _[55]]);
                    z.innerHTML = "CLOSE";
                    da(z, _[47], Da, !0);
                    da(z, _[48], Da, !0);
                    da(z, _[52], l, !0);
                    da(z, _[2], l, !0);
                    t.appendChild(P);
                    t.appendChild(C);
                    t.appendChild(z);
                    y = Ha();
                    D && (y.style.textShadow = D);
                    e(y, [_[36], _[0], _[4], "0px", _[3], "0px", _[54], _[296], _[17], "12px", _[69], "none", _[70], "none", _[80], "none", _[40], _[10], _[42], _[12], _[81], d.realDesktop ? _[32] : _[21], _[50], (d.realDesktop ? 10 : 9 * B | 0) + "px", _[26], _[151], _[87], "none"]);
                    y.innerHTML = _[596];
                    da(y, _[47], Da, !0);
                    da(y, _[48], Da, !0);
                    da(y, _[52], f, !0);
                    da(y, _[2], f, !0);
                    t.appendChild(y);
                    F = Ha();
                    D && (F.style.textShadow = D);
                    e(F, [_[36], _[0], _[4], "0px", _[3], "18px", _[54], _[299], _[17], "12px", _[69], "none", _[70], "none", _[80], "none", _[40], _[10], _[42], _[12], _[81], d.realDesktop ? _[32] : _[21], _[50], (d.realDesktop ? 10 : 9 * B | 0) + "px", _[26], _[151], _[87], "none"]);
                    F.innerHTML = _[516];
                    da(F, _[47], Da, !0);
                    da(F, _[48], Da, !0);
                    da(F, _[52], n, !0);
                    da(F, _[2], n, !0);
                    t.appendChild(F);
                    r.appendChild(g);
                    g.appendChild(u);
                    g.appendChild(c);
                    d.ios && (u = Ha(), u.style.position = _[0], u.style.webkitTransformStyle = _[129], c.appendChild(u));
                    r.appendChild(t);
                    p.pluginlayer = c;
                    p.hotspotlayer = c;
                    d.fullscreensupport && da(ca, d.browser.events.fullscreenchange, h);
                    da(W, _[51], m, !1);
                    da(W, _[522], m, !1);
                    da(ca, _[30], m, !1);
                    p.onResize(null);
                    da(W, _[159], p.onResize, !1);
                    d.iphone && d.safari && da(W, _[164], x, !1);
                    return !0
                };
                p.focus = function (a) {
                    W.activekrpanowindow = v.id;
                    d.desktop && ca.activeElement !== v && v.focus()
                };
                p.setFullscreen = function (a) {
                    if (d.fullscreensupport) if (a) v[d.browser.events.requestfullscreen](); else try {
                        ca.exitFullscreen ? ca.exitFullscreen() : ca.mozCancelFullScreen ? ca.mozCancelFullScreen() : ca.webkitCancelFullScreen ? ca.webkitCancelFullScreen() : ca.webkitExitFullscreen ? ca.webkitExitFullscreen() : ca.msExitFullscreen && ca.msExitFullscreen()
                    } catch (c) {
                    } else {
                        var b = ca.body, e = b.style, f = v.style;
                        if (a) p.fsbkup = [e.padding, e.margin, e.overflow, b.scrollTop, b.scrollLeft, W.pageYOffset], e.padding = "0 0", e.margin = "0 0", e.overflow = _[6], b.scrollTop = "0", b.scrollLeft = "0", b.appendChild(v), f.position = _[0], f.left = 0, f.top = 0, f.width = "100%", f.height = "100%", eb.domUpdate(), W.scrollTo(0, 0), w(!0); else if (a = p.fsbkup) p.htmltarget.appendChild(v), e.padding = a[0], e.margin = a[1], e.overflow = a[2], b.scrollTop = a[3], b.scrollLeft = a[4], f.position = _[147], eb.domUpdate(), W.scrollTo(0, a[5]), p.fsbkup = null, w(!1)
                    }
                };
                p.onResize = function (a, c) {
                    D = c;
                    B = !0
                };
                p.resizeCheck = function () {
                    var a = !1, b = v, e = b.clientWidth, b = b.clientHeight;
                    !(e != l || b != c || ac && ac.haschanged) || 0 == e && 0 == l || (l = e, c = b, a = !0);
                    B && (a = !0, B = !1);
                    255 == ($a & 511) && 0 == (La & 1) && A();
                    if (a) {
                        var f = v, h = 0, e = f;
                        do if (h = e.offsetHeight, d.ie && p.fullscreen && 20 > h && (h = 0), 1 >= h) {
                            if (e = e.parentNode, null == e) {
                                h = W.innerHeight;
                                break
                            }
                        } else break; while (1);
                        b = 0;
                        for (e = f; e && "body" != J(e.nodeName);) b++, e = e.parentNode;
                        var m = f.clientWidth, e = !1;
                        if (0 == f.clientHeight) {
                            for (var n = !1; f;) if (f && f.style && "none" == f.style.display) {
                                n = !0;
                                break
                            } else f = f.parentNode;
                            0 == n && 0 < m && (e = !0)
                        }
                        f = "100%";
                        1 > h && (h = 100);
                        var n = W.innerWidth, q = W.innerHeight, r = top !== window;
                        d.iphone && 2 >= b && 0 == r && n > q && (f = _[264]);
                        d.getViewportScale();
                        b = f;
                        eb && eb.focusLoss();
                        f = !1;
                        if (kc != m || Eb != h || D) f = !0, D = !1, kc = m, Eb = h;
                        v.style.width = "100%";
                        v.style.height = b;
                        l = kc;
                        c = Eb;
                        mb && (mb._pxw = mb.pixelwidth = mb.imagewidth = kc / ba, mb._pxh = mb.pixelheight = mb.imageheight = Eb / ba);
                        nb && (nb._pxw = nb.pixelwidth = nb.imagewidth = kc / ba, nb._pxh = nb.pixelheight = nb.imageheight = Eb / ba);
                        f && (ac && ac.calc(kc, Eb), za(_[84]), f = !1);
                        ac ? (f |= ac.calc(kc, Eb), g.style.left = ac.pixelx * ba + "px", g.style.top = ac.pixely * ba + "px", g.style.width = Ua + "px", g.style.height = Ea + "px", m = Ua, h = Ea) : (Ua = kc, Ea = Eb);
                        Yc = Math.max(4 * h / 3, m);
                        d.desktop && (b = W.devicePixelRatio, isNaN(b) || (d.pixelratio = b, d.fractionalscaling = 0 != b % 1));
                        Za.size(m, h);
                        f && za(_[84]);
                        "" == t.style.display && (C.scrollTop = C.scrollHeight);
                        Ya.updateview(!1, !0);
                        B = e
                    }
                    return a
                };
                var P = "";
                p.log = function (a) {
                    if ("cls" == a) C.innerHTML = ""; else if ("d" == a) A(); else {
                        var c = 4 > d.firefoxversion ? 4096 : 1E4, b = a.slice(0, 6).charCodeAt(0);
                        73 != b ? (c = _[225] + (68 == b ? _[604] : 87 == b ? _[605] : _[606]) + ";'>" + a + _[508], P += c + "\n", C.innerHTML += "\n" + c) : (P += a + "\n", P.length > c ? (P = P.slice(-c / 2, -1), C.innerHTML = P) : C.lastChild ? C.lastChild.nodeValue += "\n" + a : C.innerHTML += a);
                        C.scrollTop = C.scrollHeight;
                        bc.so.vars && ma(bc.so.vars.consolelog) && (c = W.console) && c.log && (d.firefox || d.chrome ? c.log("%c" + a, 68 == b ? _[318] : 69 == b ? _[200] : 87 == b ? _[313] : _[317]) : c.log(a))
                    }
                };
                p.showlog = function (a) {
                    H(null, a)
                };
                var ga = 0;
                p.handleKeydown = function (a) {
                    q[$b[1]] ? 79 == a ? H() : "none" != t.style.display && (68 == a ? (q.debugmode = !q.debugmode, H(null, !0), 0 == q.debugmode && (y.style.textDecoration = F.style.textDecoration = "none", ke = !1, E(!1, !1))) : q.debugmode && (72 == a ? n() : 76 == a ? f() : 80 == a ? (ke = !ke, Qa = !0) : 83 == a ? (la.stereo = !la.stereo, Qa = !0) : 65 == a ? (vb.enabled = !vb.enabled, wa(0, (vb.enabled ? "en" : "dis") + _[284]), Qa = !0) : 67 == a ? ea.mousetype = _[18] == ea.mousetype ? _[613] : _[18] : 85 == a && (wa(0, _[222]), r.maxpixelzoom = Number.NaN, r.fovmin = 0, r.fovmax = 179, r.limitview = "off", Qa = !0))) : 0 != ga || 220 != a && 160 != a ? 1 == ga && 73 == a ? ga++ : 2 == ga && 68 == a ? ga++ : 3 == ga && 75 == a ? ga++ : 4 == ga && 70 == a ? ga++ : 5 == ga && 65 == a ? q[$b[1]] = !0 : ga = 0 : ga++
                };
                p.getMousePos = function (a, c) {
                    var b = {}, d = c ? c : g, e = d.getBoundingClientRect();
                    b.x = Math.round(a.clientX - e.left - d.clientLeft + d.scrollLeft);
                    b.y = Math.round(a.clientY - e.top - d.clientTop + d.scrollTop);
                    return b
                };
                p.remove = function () {
                    null != u && (clearInterval(u), u = null);
                    try {
                        qa(W, _[159], p.onResize, !1), qa(W, _[164], x, !1), d.fullscreensupport && qa(ca, d.browser.events.fullscreenchange, h), p.htmltarget.removeChild(v), p.htmltarget = null, p.viewerlayer = null, p.controllayer = null, p.panolayer = null, p.pluginlayer = null, g = v = z = C = t = p.hotspotlayer = null
                    } catch (a) {
                    }
                };
                var Q = null
            })();
            var eb = {};
            (function () {
                function a(a) {
                    var c = a.pointerType;
                    if (4 != c && _[19] != c) {
                        a = a.changedTouches ? a.changedTouches : [a];
                        var c = a.length, b, d, k;
                        for (b = 0; b < c; b++) if (d = a[b], k = d.pointerId ? d.pointerId : d.identifier, void 0 !== k) {
                            d = R(d);
                            d = {id: k, lx: d.x / ba, ly: d.y / ba};
                            var e, f;
                            f = Ma.length;
                            for (e = 0; e < f; e++) if (Ma[e].id == k) {
                                Ma[e] = d;
                                return
                            }
                            Ma.push(d)
                        }
                    }
                }

                function b(a) {
                    var c = a.pointerType;
                    if (4 != c && _[19] != c) {
                        a = a.changedTouches ? a.changedTouches : [a];
                        var c = a.length, b, d;
                        for (b = 0; b < c; b++) if (d = a[b], d = d.pointerId ? d.pointerId : d.identifier, void 0 !== d) {
                            var k, e;
                            e = Ma.length;
                            for (k = 0; k < e; k++) if (Ma[k].id == d) {
                                Ma.splice(k, 1);
                                break
                            }
                        }
                    }
                }

                function w() {
                    var a = J(ea.usercontrol);
                    return (_[19] == a || "all" == a) && !aa.isblocked()
                }

                function e(a) {
                    return a && (a = a.pointerType, 4 == a || _[19] == a) ? !0 : !1
                }

                function f(a, c, b, d) {
                    for (var k = $a; 0 < Oa.length && !(b - Oa[0].t <= wa) && !(1 >= k - Oa[0].f);) Oa.shift();
                    k = Oa.length - 1;
                    0 <= k && a == Oa[k].x && c == Oa[k].y ? Oa[k].t = b : Oa.push({x: a, y: c, t: b, f: d})
                }

                function n(a, c, b, d, k) {
                    k && (b = .5 * (b - a), d = .5 * (d - c), c = .5 * Ua, k = .5 * Ea + r.r_yoff, a = c - b, b = c + b, c = k - d, d = k + d);
                    c = r.inverseProject(a, c);
                    k = r.inverseProject(b, d);
                    d = (Math.atan2(k.z, k.x) - Math.atan2(c.z, c.x)) / Z;
                    c = -(Math.atan2(c.y, Math.sqrt(c.x * c.x + c.z * c.z)) - Math.atan2(k.y, Math.sqrt(k.x * k.x + k.z * k.z))) / Z;
                    -180 > d ? d += 360 : 180 < d && (d -= 360);
                    if (b < a && 0 > d || b > a && 0 < d) d = -d;
                    return {h: d, v: c}
                }

                function m(a, c, b, d) {
                    w() ? (a = n(a, c, b, d, ea.dragrelative), Ca = !1, fa = a.h, sa = a.v, H.vinvert && (fa *= -1), a = r.hlookat + fa, b = r.vlookat + sa, ma += fa, ib += sa, c = r._limits, ea.bouncinglimits && c && (360 > c[0] && (a < c[1] ? (Sa = !0, a = .5 * ma + .5 * c[1]) : a > c[2] && (Sa = !0, a = .5 * ma + .5 * c[2])), b < c[4] ? (Sa = !0, b = -(ib - c[4]), d = Math.min(b / 720, 1), d = -Math.min(b - 120 * d + 200 * d * d - 3E3 * d * d * d + 3E3 * d * d * d * d, 163), b = .5 * (c[4] + d) + .5 * c[4]) : b > c[5] && (Sa = !0, b = ib - c[5], d = Math.min(b / 720, 1), d = Math.min(b - 120 * d + 200 * d * d - 3E3 * d * d * d + 3E3 * d * d * d * d, 163), b = .5 * (c[5] + d) + .5 * c[5])), r.hlookat = a, r.vlookat = b, Ya.updateview(), r.haschanged = !0) : sa = fa = 0
                }

                function h(a) {
                    (ca.hidden || ca.webkitHidden || ca.mozHidden || ca.msHidden) && x(a)
                }

                function x(a) {
                    a ? (_[31] == a.type ? Y.controllayer.contains(a.target) && a.preventDefault() : C(), _[51] == a.type && !1 === a.persisted && (Pd = !0), H.down && D(a)) : C();
                    for (var c in ha) 1 == ha[c] && (q.keycode = c, za(_[153]), ha[c] = !1);
                    q.keycode = 0;
                    L()
                }

                function L() {
                    q.hlookat_moveforce = q.vlookat_moveforce = q.fov_moveforce = 0;
                    rb = pa = Ca = !1;
                    Aa = va = ab = ta = fa = sa = bb = Fa = Ga = Qa = 0
                }

                function E(a) {
                    var c = 0;
                    if (1 != ea.disablewheel && (Da(a), Xa(_[294]), w())) {
                        a.wheelDelta ? c = a.wheelDelta / -120 : a.detail && (c = a.detail, 0 == d.mac && (c /= 3));
                        var b = c * ea.mousefovchange;
                        ea.zoomtocursor ? (xa = !0, v(a), ua = H.x, jb = H.y, 0 < b && 0 == ea.zoomoutcursor && (xa = !1)) : xa = !1;
                        rb = !0;
                        Na = 0;
                        Aa += .001 * b;
                        q.wheeldelta_raw = -c;
                        q.wheeldelta = 3 * -c;
                        F(_[73])
                    }
                }

                function A(a) {
                    var c = Y.viewerlayer;
                    ca.activeElement == c != 0 && W.activekrpanowindow == c.id && (Xa(_[86]), c = a.keyCode, 0 == (a.altKey || a.ctrlKey || a.shiftKey || a.metaKey || 32 > c || 111 < c && 124 > c) && Da(a), q.keycode = c, aa.checkInterrupt(), 0 != aa.isblocked() || !0 === ha[c] && !ea.keydownrepeat || (ha[c] = !0, za(_[480])), Y.handleKeydown(c), u(c, 1), 27 == c && (C(), Y.fullscreen && (Y.fsbkup || d.opera) && Y.setFullscreen(!1)))
                }

                function p(a) {
                    var c = Y.viewerlayer;
                    ca.activeElement == c != 0 && W.activekrpanowindow == c.id && (Xa(_[98]), a = a.keyCode, q.keycode = a, 1 == ha[a] && (ha[a] = !1, za(_[153])), u(a, 0))
                }

                function u(a, c) {
                    if (0 == c || !aa.isblocked()) {
                        var b = J(ea.usercontrol);
                        if ("all" == b || "keyb" == b) a = "," + a + ",", 0 <= ("," + ea.keycodesin + ",").indexOf(a) ? q.fov_moveforce = -c : 0 <= ("," + ea.keycodesout + ",").indexOf(a) ? q.fov_moveforce = +c : 0 <= ("," + ea.keycodesleft + ",").indexOf(a) ? q.hlookat_moveforce = -c : 0 <= ("," + ea.keycodesright + ",").indexOf(a) ? q.hlookat_moveforce = +c : 0 <= ("," + ea.keycodesup + ",").indexOf(a) ? q.vlookat_moveforce = ea.keybinvert ? +c : -c : 0 <= ("," + ea.keycodesdown + ",").indexOf(a) && (q.vlookat_moveforce = ea.keybinvert ? -c : +c)
                    }
                }

                function v(a) {
                    a = R(a);
                    H.x = a.x / ba;
                    H.y = a.y / ba;
                    H.moved = !0
                }

                function g(a) {
                    var c, b, k = a.changedTouches ? a.changedTouches : [a];
                    b = k.length;
                    var f = J(a.type), h = 0 <= f.indexOf("start") || 0 <= f.indexOf("down");
                    -99 != Vb && h && (ad = !0);
                    for (c = 0; c < b; c++) {
                        var f = k[c], g = f.pointerId ? f.pointerId : f.identifier;
                        -99 == Vb && h && (Vb = g);
                        if (Vb == g) {
                            b = R(f);
                            H.x = b.x / ba;
                            H.y = b.y / ba;
                            H.moved = !0;
                            0 == (La & 16) && (0 == d.realDesktop || 10 <= d.ieversion && !e(a)) && H.x > kc / ba - 22 && H.y > Eb / ba - 32 && a.type == T.touchstart && (yb = f.pageY, da(U, T.touchend, t, !0));
                            break
                        }
                    }
                }

                function t(a) {
                    a = a.changedTouches ? a.changedTouches : [a];
                    qa(U, T.touchend, t, !0);
                    -120 > a[0].pageY - yb && Y.showlog(!0)
                }

                function C() {
                    if (Ja) {
                        try {
                            U.removeChild(Ja), U.removeChild(Va)
                        } catch (a) {
                        }
                        Va = Ja = null
                    }
                }

                function z(a) {
                    if (Ja) C(); else {
                        Da(a);
                        a.stopPropagation();
                        var c = R(a.changedTouches ? a.changedTouches[0] : a);
                        H.downx = H.x = c.x / ba;
                        H.downy = H.y = c.y / ba;
                        Ja = Ff(c.x, c.y, C, 0 <= J(a.type).indexOf("touch"));
                        null != Ja && (Va = Ha(), a = Va.style, a.position = _[0], d.androidstock || (a.zIndex = 99999999998, a[qb] = _[28]), a.width = "100%", a.height = "100%", U.appendChild(Va), U.appendChild(Ja))
                    }
                }

                function y(a, b) {
                    var k = a.timeStamp;
                    500 < k && 500 > k - xc ? xc = 0 : (Y.focus(1), Da(a), (k = 0 == (a.button | 0)) && C(), aa.checkInterrupt(), !aa.isblocked() && k && (1 != b ? (da(W, _[9], l, !0), da(W, _[2], c, !0), d.topAccess && da(top, _[2], D, !0)) : da(d.topAccess ? top : W, T.touchend, X, !0), k = R(a), pb = k.x, ia = k.y, kb = a.timeStamp, ma = r.hlookat, ib = r.vlookat, rd = 0, H.down = !0, H.up = !1, H.moved = !1, H.downx = H.x = k.x / ba, H.downy = H.y = k.y / ba, 1 == F(_[46]) ? (qa(W, _[9], l, !0), H.down = !1) : setTimeout(B, 100)))
                }

                function F(a) {
                    var c = _[37] == a, b = !1;
                    if (_[46] == a || _[34] == a || c || _[73] == a) b = Za.hittesthotspots(a);
                    0 == b && (c ? (za(_[34]), za(_[37]), wb()) : za(a));
                    return b
                }

                function l(a) {
                    Da(a);
                    var b = R(a);
                    H.x = b.x / ba;
                    H.y = b.y / ba;
                    H.moved = !0;
                    if (_[18] == J(ea.mousetype)) {
                        pa = !0;
                        var d = n(pb, ia, b.x, b.y, ea.movetorelative).h;
                        H.vinvert && (d *= -1);
                        rd += d
                    } else m(pb, ia, b.x, b.y);
                    pb = b.x;
                    ia = b.y;
                    kb = a.timeStamp;
                    f(pb, ia, kb, $a);
                    (0 === a.buttons || void 0 === a.buttons && 0 === a.which) && c(a, !0)
                }

                function c(a, b) {
                    0 == H.downLayer && Xa(_[350]);
                    Da(a);
                    qa(W, _[9], l, !0);
                    qa(W, _[2], c, !0);
                    d.topAccess && qa(top, _[2], D, !0);
                    var k = R(a);
                    pb = k.x;
                    ia = k.y;
                    kb = a.timeStamp;
                    f(pb, ia, kb, $a);
                    if (ea.drag_oldmode) Ca = !0, 1 >= Oa.length && (Ca = !1, sa = fa = 0); else if (_[18] != J(ea.mousetype)) if (w() && 1 < Oa.length && 0 == ja) {
                        var e = Oa[0], h = Oa[Oa.length - 1], k = (h.t - e.t) * ea.draginertia;
                        0 < k && (e = n(e.x, e.y, h.x, h.y, ea.dragrelative), Ca = !0, fa = e.h / k, sa = e.v / k)
                    } else Ca = !1, sa = fa = 0;
                    H.down = !1;
                    H.dragging = !1;
                    B();
                    0 == H.up && (H.up = !0, k = _[34], !0 !== b && (0 == H.moved || 5 > Math.abs(H.x - H.downx) && 5 > Math.abs(H.y - H.downy)) && (k = _[37]), F(k))
                }

                function D(a) {
                    c(a, !0)
                }

                function B() {
                    ie.update()
                }

                function P(a) {
                    1 == q.control.preventTouchEvents && Da(a)
                }

                function ga(a) {
                    fb && (sb++, 2 == sb && (lc = 1), oa.addPointer(a.pointerId), U.setPointerCapture ? U.setPointerCapture(a.pointerId) : U.msSetPointerCapture && U.msSetPointerCapture(a.pointerId))
                }

                function Q(a) {
                    sb--;
                    0 > sb && (sb = 0);
                    return 2 > sb && Ka ? (K(a), !0) : !1
                }

                function Ba(c) {
                    xc = c.timeStamp;
                    wa = d.ios ? 100 : 49 > Vd ? 200 : 100;
                    a(c);
                    if (tb) {
                        if (0 == q.control.preventTouchEvents) return;
                        if (e(c)) {
                            c.currentPoint && c.currentPoint.properties && 0 == c.currentPoint.properties.isLeftButtonPressed && (c.button = 0);
                            xc = 0;
                            y(c, !0);
                            return
                        }
                        ga(c)
                    }
                    W.activekrpanowindow = Y.viewerlayer.id;
                    Xa(_[286]);
                    0 == Y.__scrollpage_yet && P(c);
                    C();
                    if (!(Ka || 0 == Zb && 1 < Ma.length || (aa.checkInterrupt(), aa.isblocked()))) {
                        var b = c.changedTouches ? c.changedTouches[0] : c, k = R(b);
                        M = b.pointerId ? b.pointerId : b.identifier;
                        pb = k.x;
                        ia = k.y;
                        kb = c.timeStamp;
                        Oa = [];
                        ma = r.hlookat;
                        ib = r.vlookat;
                        rd = 0;
                        H.down = !0;
                        H.dragging = !0;
                        H.up = !1;
                        H.moved = !1;
                        H.downx = H.x = k.x / ba;
                        H.downy = H.y = k.y / ba;
                        I = {t: xc};
                        ja = 1 == F(_[46]) ? !0 : !1
                    }
                }

                function G(a) {
                    var c = a.pointerType;
                    if (4 != c && _[19] != c) {
                        var c = a.changedTouches ? a.changedTouches : [a], b = c.length, d, k, h;
                        for (d = 0; d < b; d++) if (k = c[d], h = k.pointerId ? k.pointerId : k.identifier, void 0 !== h) {
                            var g, p;
                            p = Ma.length;
                            for (g = 0; g < p; g++) if (Ma[g].id == h) {
                                k = R(k);
                                h = k.y / ba;
                                g = Ma[g];
                                g.lx = k.x / ba;
                                g.ly = h;
                                break
                            }
                        }
                    }
                    if (tb) {
                        if (e(a)) {
                            H.down && l(a);
                            return
                        }
                        if (1 < sb) return
                    }
                    if ((c = w()) && 0 == Zb && 1 < Ma.length) {
                        var q;
                        p = k = Ma[0].lx;
                        q = h = Ma[0].ly;
                        g = Ma.length;
                        for (d = 1; d < g; d++) c = Ma[d].lx, b = Ma[d].ly, c < k && (k = c), c > p && (p = c), b < h && (h = b), b > q && (q = b);
                        c = p - k;
                        b = q - h;
                        c = Math.sqrt(c * c + b * b);
                        1 > c && (c = 1);
                        0 == Vc ? (Vc = !0, V = c, N(a)) : S(a, c / V)
                    } else Xa(_[314]), 0 == Y.__scrollpage_yet && P(a), Ka || 0 == c || (c = a.changedTouches ? a.changedTouches[0] : a, M == (c.pointerId ? c.pointerId : c.identifier) && (c = R(c), 0 == ja && (_[18] == J(ea.touchtype) ? (pa = !0, b = n(pb, ia, c.x, c.y, ea.movetorelative).h, -180 > b ? b = 360 + b : 180 < b && (b = -360 + b), rd += b) : m(pb, ia, c.x, c.y)), pb = c.x, ia = c.y, kb = a.timeStamp, f(pb, ia, kb, $a), -99 == Vb && (H.x = c.x / ba, H.y = c.y / ba), I && 16 < H.dd && (I = null), 0 == Y.__scrollpage_yet && Da(a)))
                }

                function X(a) {
                    b(a);
                    Vb = -99;
                    ad = !1;
                    if (tb) {
                        qa(d.topAccess ? top : W, T.touchend, X, !0);
                        if (Q(a)) return;
                        if (e(a)) {
                            c(a);
                            return
                        }
                    }
                    Vc && (K(a), Vc = !1);
                    0 == Y.__scrollpage_yet && P(a);
                    if (Ka) M = -99; else {
                        var k = a.changedTouches ? a.changedTouches[0] : a;
                        if (M == (k.pointerId ? k.pointerId : k.identifier)) {
                            M = -99;
                            k = R(k);
                            H.x = k.x / ba;
                            H.y = k.y / ba;
                            pb = k.x;
                            ia = k.y;
                            kb = a.timeStamp;
                            f(pb, ia, kb, $a);
                            if (_[18] != J(ea.touchtype)) if (w() && 1 < Oa.length && 0 == ja) {
                                var h = Oa[0], g = Oa[Oa.length - 1], k = (g.t - h.t) * ea.draginertia;
                                0 < k && (h = n(h.x, h.y, g.x, g.y, ea.dragrelative), Ca = !0, fa = h.h / k, sa = h.v / k)
                            } else Ca = !1, sa = fa = 0;
                            H.down = !1;
                            H.dragging = !1;
                            if (0 == H.up) {
                                H.up = !0;
                                I && 0 == ja && (k = 52800 / (Math.min(Math.max(la.currentfps, 10), 60) + 35), 32 > H.dd && a.timeStamp - I.t > k && z(a));
                                a = _[34];
                                if (0 == H.moved || 5 > Math.abs(H.x - H.downx) && 5 > Math.abs(H.y - H.downy)) a = _[37];
                                F(a)
                            }
                            I = null;
                            ja = !1
                        }
                    }
                }

                function na(a) {
                    b(a);
                    Vc = !1;
                    Vb = M = -99;
                    Ka = !1;
                    sb = 0;
                    ja = !1;
                    I = null
                }

                function N(a) {
                    0 == q.control.preventTouchEvents || fb && 2 > sb || (Da(a), Ka = !0, I = null, Bd = r.fov, M = -99, H.down = !1, H.dragging = !1)
                }

                function S(a, c) {
                    if (0 != q.control.preventTouchEvents) {
                        var b = void 0 !== c ? c : a.scale;
                        if (fb) {
                            if (2 > sb) return;
                            0 == Ka && N(a);
                            b = lc *= b
                        }
                        Da(a);
                        Xa(_[274]);
                        if (w()) {
                            sa = fa = 0;
                            var d = 2 / Z, k = 1 / Math.tan(Bd / d), d = Math.atan(1 / (k * b)) * d,
                                k = d > r.fov ? -3 : 3;
                            q.wheeldelta = k;
                            q.wheeldelta_raw = k / 3;
                            q.wheeldelta_touchscale = b;
                            0 == ea.touchzoom && (d = r.fov);
                            ea.bouncinglimits && (d < r.fovmin ? (d = O(d), b = O(r.fovmin), Aa = .5 * -(d - b), rb = !0, Na = 1, d += Aa, Aa = 1E-9, d = ra(d)) : d > r.fovmax && (d = O(d), b = O(r.fovmax), Aa = .75 * -(d - b), rb = !0, Na = 1, d += Aa, Aa = 1E-9, d = ra(d)));
                            if (ea.zoomtocursor && (0 < k || 1 == ea.zoomoutcursor)) {
                                if (k = Ma.length, 0 < k) {
                                    xa = !0;
                                    for (b = jb = ua = 0; b < k; b++) {
                                        var e = Ma[b];
                                        ua += e.lx;
                                        jb += e.ly
                                    }
                                    ua /= k;
                                    jb /= k;
                                    r.updateView();
                                    k = r.screentosphere(ua, jb);
                                    r.fov = d;
                                    r.updateView();
                                    b = r.screentosphere(ua, jb);
                                    d = r.hlookat + (k.x - b.x);
                                    k = r.vlookat + (k.y - b.y);
                                    if (b = r._limits) 360 > b[0] && (d < b[1] ? d = b[1] : d > b[2] && (d = b[2])), k < b[4] ? k = b[4] : k > b[5] && (k = b[5]);
                                    r.hlookat = d;
                                    r.vlookat = k
                                }
                            } else r.fov = d, r.updateView();
                            F(_[73]);
                            r.haschanged = !0
                        }
                    }
                }

                function K(a) {
                    0 != q.control.preventTouchEvents && (Ka && (Ka = !1), ad = !1, Ma = [], Da(a))
                }

                function O(a) {
                    return Wa * Math.log(1 / Math.tan(.5 * a * Z))
                }

                function ra(a) {
                    return 2 * Math.atan(1 / Math.exp(a / Wa)) / Z
                }

                var k = eb;
                k.mouse = !1;
                k.touch = !1;
                var I = null, R = null, T = null, U = null, ha = [], Ka = !1, yb = 0, Zb = !1, Vc = !1, V = 1, Bd = 90,
                    M = -99, ma = 0, ib = 0, pb = 0, ia = 0, kb = 0, Oa = [], Vb = -99, ad = !1, wa = 100, ja = !1,
                    Ma = [], tb = !1, fb = !1, oa = null, sb = 0, lc = 1, Ca = !1, fa = 0, sa = 0, pa = !1, ab = 0,
                    ta = 0, va = 0, rd = 0, rb = !1, Aa = 0, Na = 0, xa = !1, ua = 0, jb = 0, bb = 0, Fa = 0, Sa = !1,
                    Ga = 0, Qa = 0, Ja = null, Va = null;
                k.registerControls = function (a) {
                    U = a;
                    T = d.browser.events;
                    R = Y.getMousePos;
                    d.ie && (fb = (tb = db.msPointerEnabled || db.pointerEnabled) && (1 < db.msMaxTouchPoints || 1 < db.maxTouchPoints));
                    Zb = fb || 0 == d.simulator && d.ios || void 0 !== ca.documentElement.ongesturestart;
                    if (d.chrome || d.android) Zb = !1;
                    a = !(0 == d.simulator && d.ios || d.android || 10 <= d.ieversion && d.touchdeviceNS);
                    var c = d.touchdeviceNS;
                    c && (d.mobile || d.tablet) && 0 == d.simulator && 0 == d.realDesktop && (a = !1);
                    k.mouse = a;
                    k.touch = c;
                    T.mouse = a;
                    T.touch = c;
                    da(ca, _[86], A, !1);
                    da(ca, _[98], p, !1);
                    da(d.topAccess ? top : W, _[31], x, !0);
                    da(d.topAccess ? top : W, _[51], x, !0);
                    da(ca, _[30], h);
                    da(ca, _[102], h);
                    da(ca, _[104], h);
                    da(ca, _[106], h);
                    if (a || tb) da(U, _[117], E, !1), da(U, _[134], E, !1);
                    (a || tb) && da(W, _[9], v, !0);
                    a && da(U, _[8], y, !1);
                    (a && d.realDesktop || d.ie) && da(U, _[31], z, !1);
                    c && (da(U, T.touchstart, g, !0), da(U, T.touchmove, g, !0), da(U, T.touchstart, Ba, !1), da(U, T.touchmove, G, !0), da(U, T.touchend, X, !0), da(U, T.touchcancel, na, !0), Zb && (da(U, T.gesturestart, N, !1), da(U, T.gesturechange, S, !1), da(U, T.gestureend, K, !0), fb && (da(U, _[119], K, !0), oa = new MSGesture, oa.target = U)))
                };
                k.domUpdate = function () {
                    if (oa) {
                        var a = U;
                        sb = 0;
                        k.unregister();
                        k.registerControls(a)
                    }
                };
                k.unregister = function () {
                    oa && (oa = oa.target = null);
                    qa(ca, _[86], A, !1);
                    qa(ca, _[98], p, !1);
                    qa(d.topAccess ? top : W, _[31], x, !0);
                    qa(d.topAccess ? top : W, _[51], x, !0);
                    d.topAccess && qa(top, _[2], D, !0);
                    qa(ca, _[30], h);
                    qa(ca, _[102], h);
                    qa(ca, _[104], h);
                    qa(ca, _[106], h);
                    qa(W, _[9], v, !0);
                    qa(W, _[9], l, !0);
                    qa(W, _[2], c, !0);
                    qa(U, _[117], E, !1);
                    qa(U, _[134], E, !1);
                    qa(U, _[8], y, !1);
                    qa(U, _[31], z, !0);
                    qa(U, T.touchstart, g, !0);
                    qa(U, T.touchmove, g, !0);
                    qa(U, T.touchstart, Ba, !1);
                    qa(U, T.touchmove, G, !0);
                    qa(U, T.touchend, X, !0);
                    qa(U, T.touchcancel, na, !0);
                    qa(U, T.gesturestart, N, !1);
                    qa(U, T.gesturechange, S, !1);
                    qa(U, T.gestureend, K, !0);
                    qa(U, _[119], K, !0);
                    R = T = U = null
                };
                k.handleFrictions = function () {
                    var a, c = a = !1, b = q.hlookat_moveforce, d = q.vlookat_moveforce, k = q.fov_moveforce;
                    if (0 != k) {
                        var e = ea.keybfovchange;
                        xa = !1;
                        rb = !0;
                        Na = 0;
                        Aa += e * k * .001
                    }
                    if (0 != b || 0 != d || 0 != bb || 0 != Fa) {
                        var f = ea.keybfriction, c = ea.keybspeed, k = r.hlookat, e = r.vlookat,
                            h = ea.keybaccelerate * Math.tan(Math.min(.5 * Number(r.fov), 45) * Z);
                        bb += b * h;
                        b = Fa += d * h;
                        d = bb;
                        bb *= f;
                        Fa *= f;
                        f = Math.sqrt(b * b + d * d);
                        0 < f ? (b /= f, d /= f) : d = b = 0;
                        f > c && (f = c);
                        d *= f;
                        k = 180 >= (Math.floor(e) % 360 + 450) % 360 ? k + d : k - d;
                        e += b * f;
                        r.hlookat = k;
                        r.vlookat = e;
                        f < .05 * h && (Fa = bb = 0);
                        c = !0
                    }
                    a |= c;
                    if (Ca) b = Math.pow(ea.dragfriction, .92), fa *= b, sa *= b, b = Math.sqrt(sa * sa + fa * fa), d = Math.min(.04 * Yc / r.r_zoom, .5), 0 != b && (r.hlookat += fa, r.vlookat += sa), b < d && (Ca = !1, sa = fa = 0), a |= 1; else if (pa) {
                        var b = H, d = va, c = ab, k = ta, f = .025 * ea.movetoaccelerate, g = ea.movetospeed,
                            h = ea.movetofriction, e = !1;
                        if (w()) {
                            if (b.down && (b.x != b.downx || b.y != b.downy)) {
                                var l = n(b.downx, b.downy, b.x, b.y, ea.movetorelative);
                                l.h = rd;
                                c = d * c - l.h * f;
                                k = d * k - l.v * f;
                                d = Math.sqrt(c * c + k * k);
                                0 < d && (c /= d, k /= d, d > g && (d = g))
                            }
                            f = r.hlookat;
                            g = r.vlookat;
                            g += d * k * ea.movetoyfriction;
                            r.hlookat = f + d * c;
                            r.vlookat = g;
                            d *= h;
                            h = Math.min(.04 * Yc / r.r_zoom, .5);
                            0 == b.down && d < h && (e = !0)
                        } else e = !0;
                        e && (pa = !1, rd = k = c = d = 0);
                        va = d;
                        ab = c;
                        ta = k;
                        a |= 1
                    }
                    if (rb) {
                        a:{
                            d = b = r.fov;
                            c = Aa;
                            k = !1;
                            if (0 < Math.abs(c)) {
                                h = c;
                                f = ea.fovspeed;
                                k = r.fovmin;
                                e = r.fovmax;
                                c *= ea.fovfriction;
                                Math.abs(h) > f && (h = f * (h / Math.abs(h)));
                                b = O(b);
                                b = ra(b + h);
                                if (ea.bouncinglimits && 0 < Na) if (0 == Ka) h = O(b), b < k ? (c = O(k), c = .25 * -(h - c)) : b > e && (c = O(e), c = .25 * -(h - c)); else {
                                    b = void 0;
                                    break a
                                } else b < k && (b = k, c = 0), b > e && (b = e, c = 0);
                                r.fov = b;
                                Aa = c;
                                k = !0;
                                xa && (r.fov = d, r.updateView(), d = r.screentosphere(ua, jb), r.fov = b, r.updateView(), b = r.screentosphere(ua, jb), c = r.vlookat + (d.y - b.y), r.hlookat += d.x - b.x, r.vlookat = c)
                            }
                            1E-5 > Math.abs(Aa) && (Na = Aa = 0, rb = !1);
                            b = k
                        }
                        a |= b
                    }
                    Sa && (b = !1, H.down ? b = !1 : (d = r.hlookat, c = r.vlookat, d += Ga, c += Qa, r.hlookat = d, r.vlookat = c, b = !0, Ga *= .95, Qa *= .95, k = r._limits, ea.bouncinglimits && k && (360 > k[0] && (d < k[1] ? Ga = .15 * -(d - k[1]) : d > k[2] && (Ga = .15 * -(d - k[2]))), c < k[4] ? Qa = .15 * -(c - k[4]) : c > k[5] && (Qa = .15 * -(c - k[5]))), d = .15 * Math.min(.04 * Yc / r.r_zoom, .5), Math.sqrt(Ga * Ga + Qa * Qa) < d && (Ga = Qa = 0, Sa = !1)), a |= b);
                    return a
                };
                k.stopFrictions = function (a) {
                    0 == (0 | a) && (a = 3);
                    a & 1 && (ab = fa = 0);
                    a & 2 && (ta = sa = 0);
                    a & 4 && (L(), H.down = !1)
                };
                k.isMultiTouch = function () {
                    return Ka || Vc || 1 < sb || ad
                };
                k.isBouncing = function () {
                    return 0 < Na || Sa
                };
                k.focusLoss = x;
                var wb = function () {
                    function a() {
                        try {
                            c = 0, H.clickx = b, H.clicky = d, za(_[71], !0)
                        } catch (k) {
                        }
                    }

                    var c = 0, b = 0, d = 0, k = null;
                    return function () {
                        var e = H.x, f = H.y;
                        c++;
                        if (2 == c) {
                            c = 0;
                            null != k && (clearTimeout(k), k = null);
                            var h = e - b, g = f - d;
                            h * h + g * g <= (0 != xc ? 100 : 1) ? (H.clickx = e, H.clicky = f, za(_[332], !0)) : (H.clickx = b, H.clicky = d, za(_[71], !0), H.clickx = e, H.clicky = f, za(_[71], !0))
                        } else b = e, d = f, k = setTimeout(a, 300)
                    }
                }();
                k.trackTouch = function (c) {
                    if (0 == Zb || fb) {
                        var d = c.type;
                        d == T.touchstart ? tb ? ga(c) : a(c) : d == T.touchend && (tb ? Q(c) : b(c))
                    }
                };
                var Wa = -.1
            })();
            var ja = null, V = null, Jb = !1, pe = !1, zb = 0, Ab = !1, Lc = !1, Fb = -1, Ya = {};
            (function () {
                function a(a, b) {
                    if (!0 !== b) r.haschanged = !0; else {
                        var d = q.webVR;
                        d && d.enabled && d.updateview();
                        d = aa.isBusy();
                        0 == d && za(_[355]);
                        r.updateView();
                        ja && Za.renderpano(ja, 2);
                        V && Za.renderpano(V, 1);
                        F && (F = Za.rendersnapshot(F, V));
                        ge(!0);
                        0 == d && za(_[346])
                    }
                }

                function b(a, b, d, e, h) {
                    t.count++;
                    t.id = t.count;
                    if (f()) {
                        q.xml.sceneNEW && (q.xml.scene = q.xml.sceneNEW, q.xml.sceneNEW = null);
                        "%3c" == a.slice(0, 3).toLowerCase() && (a = unescape(a));
                        aa.haltActions();
                        q.xml.url = "";
                        q.xml.content = a;
                        q.loadxmlbasedir && (q.xml.url = q.loadxmlbasedir, q.loadxmlbasedir = null);
                        var g = (new DOMParser).parseFromString(a, _[35]);
                        (a = g.getElementsByTagName(_[20])[0]) ? (wa(3, a.innerText), cb(_[199])) : ia.resolvexmlincludes(g, function () {
                            g = ia.xmlDoc;
                            m(g, b, d, e, h)
                        })
                    }
                }

                function w(a, b) {
                    setTimeout(function () {
                        try {
                            a.removeChild(b)
                        } catch (d) {
                        }
                    }, 20)
                }

                function e(a) {
                    var b = 0 != (C & 64) && 0 == (C & 256), e;
                    !0 === a && (C = b = 0);
                    if (0 == (C & 4)) {
                        var f = xa.getArray();
                        a = f.length;
                        for (e = 0; e < a; e++) {
                            var h = f[e];
                            !h || 0 != b && 0 != h.keep || (h.sprite && (h.visible = !1, h.parent = null, h.sprite.parentNode && h.sprite.parentNode.removeChild(h.sprite)), h.destroy(), xa.removeItem(e), e--, a--)
                        }
                    }
                    if (0 == (C & 128)) for (f = wb.getArray(), a = f.length, e = 0; e < a; e++) if ((h = f[e]) && (0 == b || 0 == h.keep)) {
                        if (h.sprite) {
                            h.visible = !1;
                            h.parent = null;
                            try {
                                Y.hotspotlayer.removeChild(h.sprite)
                            } catch (g) {
                            }
                        }
                        var l = h._poly;
                        l && (l.kobject = null, 8.4 == d.iosversion ? w(Y.svglayer, l) : Y.svglayer.removeChild(l), h._poly = null);
                        h.destroy();
                        wb.removeItem(e);
                        e--;
                        a--
                    }
                    b = ic.getArray();
                    a = b.length;
                    for (e = 0; e < a; e++) (f = b[e]) && 0 == ma(f.keep) && (ic.removeItem(e), e--, a--)
                }

                function f() {
                    return 1 < t.count && t.removeid != t.id && (t.removeid = t.id, za(_[357], !0), t.removeid != t.id) ? !1 : !0
                }

                function n(a) {
                    var b, d, e = "";
                    a = Rb(a);
                    b = a.lastIndexOf("/");
                    d = a.lastIndexOf("\\");
                    d > b && (b = d);
                    0 <= b && (e = a.slice(0, b + 1));
                    return e
                }

                function m(a, b, f, l, m) {
                    z = !1;
                    C = V ? 64 : 0;
                    f && (f = J(f), 0 <= f.indexOf(_[384]) && (C |= 4), 0 <= f.indexOf(_[373]) && (C |= 128), 0 <= f.indexOf(_[464]) && (C |= 16), 0 <= f.indexOf(_[520]) && (C |= 32), 0 <= f.indexOf("merge") && (C |= 16448), 0 <= f.indexOf(_[415]) && (C |= 256), 0 <= f.indexOf(_[517]) && (C |= 4), 0 <= f.indexOf(_[527]) && (C |= 36), 0 <= f.indexOf(_[462]) && (z = !0, C |= 65536), 0 <= f.indexOf(_[360]) && M(_[130], 0), 0 <= f.indexOf(_[416]) && (C |= 1056));
                    0 == (C & 1024) && (vb.currentmovingspeed = 0);
                    0 == z && (zb = 0, l && (l = J(l), f = l.indexOf(_[586]), 0 <= f && (zb = parseFloat(l.slice(f + 6)), isNaN(zb) || 0 > zb)) && (zb = 2), V && (f = 0 != (C & 1024), d.webgl ? (f && (ja || F) && (ja && (F = Za.snapshot(F, ja)), f = !1), ja && (ja.destroy(), ja = null), 0 == f ? (V.stop(), F = Za.snapshot(F, V), V.destroy(), V = null) : (V.suspended = !0, ja = V, V = null, Za.renderpano(ja, 2)), Za.setblendmode(l), Fb = -1, Ab = !1) : (0 == Ab ? (ja && (ja.destroy(), ja = null), ja = V, 0 == f ? ja.stop() : ja.suspended = !0, V = null) : (l = (Sa() - Fb) / 1E3 / zb, l = u(l), .5 < l ? V && (V.destroy(), V = null) : (ja && (ja.destroy(), ja = null), ja = V, 0 == f ? ja.stop() : ja.suspended = !0, V = null), Ab = !1), ja && ja.stopped && Za.renderpano(ja, 2))), C & 32 && (g[0] = r.hlookat, g[1] = r.vlookat, g[2] = r.camroll, g[3] = r.fov, g[4] = r.fovtype, g[5] = r.fovmin, g[6] = r.fovmax, g[7] = r.maxpixelzoom, g[8] = r.fisheye, g[9] = r.fisheyefovlink, g[10] = r.stereographic, g[12] = r.pannini, g[13] = r.architectural, g[14] = r.architecturalonlymiddle), 0 == (C & 16384) && r.defaults(), r.limitview = "auto", r.hlookatmin = Number.NaN, r.hlookatmax = Number.NaN, r.vlookatmin = Number.NaN, r.vlookatmax = Number.NaN, q.preview && delete q.preview, q.image && delete q.image, q.onstart = null, L = q.image = {}, L.type = null, L.multires = !1, L.multiresthreshold = .025, L.cubelabels = "l|f|r|b|u|d", L.stereo = !1, L.stereoformat = "TB", L.stereolabels = "1|2", L.tiled = !1, L.tilesize = 0, L.tiledimagewidth = 0, L.tiledimageheight = 0, L.baseindex = 1, L.level = new Gb, L.hfov = 0, L.vfov = 0, L.voffset = 0, L.hres = 0, L.vres = 0, L.viewoffset = 0, L.haschanged = !1, Ja(L, "frame", 1), L.frames = 1);
                    e();
                    if (a && a.documentElement && _[20] == a.documentElement.nodeName) cb(a.baseURI + _[29]); else {
                        ia.parsexml(a.childNodes, null, C);
                        if (null != q._loadpanoscene_name) {
                            var n = O(_[89] + q._loadpanoscene_name + "]");
                            n && (l = _[145] + n.content + _[136], q.xml.url = "", q.xml.scene = q._loadpanoscene_name, q.xml.content = l, q.onstart = null, l = (new DOMParser).parseFromString(l, _[35]), ia.resolvexmlincludes(l, function () {
                                (a = ia.xmlDoc) && a.documentElement && _[20] == a.documentElement.nodeName ? cb(a.baseURI + _[29]) : (ia.parsexml(a.childNodes, null, C), m = n.onstart)
                            }));
                            q._loadpanoscene_name = null
                        }
                        q.xmlversion = q.version;
                        q.version = q.buildversion;
                        y = m;
                        be(b);
                        h()
                    }
                }

                function h() {
                    var a, b, d = q.plugin.getArray(), e;
                    b = d.length;
                    for (a = 0; a < b; a++) {
                        var f = d[a];
                        if (f && f.layer && f.layer.isArray) {
                            var h = f.layer.getArray();
                            e = h.length;
                            for (b = 0; b < e; b++) {
                                var l = h[b];
                                l && (xa.createItem(l.name, l), l.parent = f.name, l.keep = f.keep)
                            }
                            f.plugin = null;
                            f.layer = null;
                            a--;
                            b = d.length
                        }
                    }
                    if (0 != x(!0)) {
                        if (0 == z) {
                            C & 32 && (r.hlookat = g[0], r.vlookat = g[1], r.camroll = g[2], r.fov = g[3], r.fovtype = g[4], r.fovmin = g[5], r.fovmax = g[6], r.maxpixelzoom = g[7], r.fisheye = g[8], r.fisheyefovlink = g[9], r.stereographic = g[10], r.pannini = g[12], r.architectural = g[13], r.architecturalonlymiddle = g[14]);
                            Ya.updateview();
                            ja && ja.removemainpano();
                            for (a = 0; 4100 > a; a++) ;
                            void 0 !== la.hardwarelimit && (Kc = parseFloat(la.hardwarelimit), isNaN(Kc) && (Kc = 0));
                            void 0 !== la.usedesktopimages && (Fe = ma(la.usedesktopimages));
                            Jb = !0;
                            Wc.progress = 0;
                            V = Za.createPano(L);
                            V.addToLayer(Y.panolayer);
                            0 < zb ? (Lc = !0, V.setblend(0), Gc = 0) : (Lc = !1, V.setblend(1), Gc = 1)
                        }
                        aa.resumeActions();
                        aa.actions_autorun(_[534], !0);
                        a = q.onstart;
                        y && (a = y, y = null);
                        d = t.id;
                        aa.callaction(a, null, !0);
                        if (d == t.id && (aa.actions_autorun(_[535], !1), za(_[347]), q.xml && q.xml.scene && za(_[418]), d == t.id)) {
                            0 == z && E();
                            a = wb.getArray();
                            d = a.length;
                            for (f = 0; f < d; f++) (b = a[f]) && 0 == b._ready && (b.create(), b.sprite && Y.hotspotlayer.appendChild(b.sprite));
                            x();
                            0 < Eb && za(_[84]);
                            Ya.updateview();
                            aa.processactions()
                        }
                    }
                }

                function x(a) {
                    var b = xa.getArray(), d = b.length, e, f = !0;
                    for (e = 0; e < d; e++) {
                        var g = b[e];
                        if (g) {
                            var l = !1;
                            1 == a ? 1 == g.preload && _[23] != g.type && 0 == g.loaded && (g.onloaded = h, g.altonloaded = null, l = !0, f = !1) : (1 == g.preload && (g.preload = !1, g.onloaded = null), l = !0);
                            l && 0 == g._ready && (g.create(), g.sprite && null == g._parent && Y.pluginlayer.appendChild(g.sprite))
                        }
                    }
                    return f
                }

                function Ta() {
                    za(_[251])
                }

                function E() {
                    var c = d.desktop || Fe, b = !1, e = L.type, f = parseFloat(L.hfov), h = parseFloat(L.vfov),
                        g = parseFloat(L.voffset);
                    isNaN(f) && (f = 0);
                    isNaN(h) && (h = 0);
                    isNaN(g) && (g = 0);
                    var l = !!(L.multires && L.level && 0 < L.level.count), m = !!L.mobile, n = !!L.tablet;
                    c || 0 != l || !m && !n || (e = "cube", b = !0);
                    if (null == e) if (L.left || L.cube) e = "cube"; else if (L.cubestrip) e = _[49]; else if (L.sphere) e = _[39]; else if (L.cylinder) e = _[24]; else if (L.flat) e = "flat"; else if (L.fisheye) e = _[85]; else {
                        if (m || n) e = "cube", b = !0
                    } else e = J(e);
                    var c = _[39] == e || _[24] == e || _[85] == e, q = 0 < f && 1 >= f && 45 >= h && c || "flat" == e,
                        r = "cube" == e || _[49] == e || null == e && 0 == c && 0 == q, t = !1, u = null;
                    if (r) f = 360, h = 180; else if (c || q) if (u = oa.parsePath(O(_[574] + e + ".url"))) {
                        var x = 0;
                        0 <= (x = J(u).indexOf(_[548])) && (c = t = !0, l = q = !1, d.panovideosupport && (u = u.slice(x + 7)))
                    }
                    L.type = e;
                    L.hfov = f;
                    L.vfov = h;
                    L.voffset = g;
                    g = ("" + L.cubelabels).split("|");
                    6 == g.length && (V.cubelabels = g);
                    V.stereo = d.webgl ? L.stereo : !1;
                    V.stereoformat = "sbs" == J(L.stereoformat) ? 0 : 1;
                    g = ("" + L.stereolabels).split("|");
                    2 == g.length && (V.stereolabels = g);
                    var w = J(O(_[365]));
                    if (g = O(_[381])) {
                        g = oa.parsePath(g);
                        if (_[49] == w || "null" == w && r) {
                            x = O(_[243]);
                            if (null != x) {
                                var x = J(x), k = [0, 1, 2, 3, 4, 5];
                                k[x.indexOf("l")] = 0;
                                k[x.indexOf("f")] = 1;
                                k[x.indexOf("r")] = 2;
                                k[x.indexOf("b")] = 3;
                                k[x.indexOf("u")] = 4;
                                k[x.indexOf("d")] = 5;
                                x = k
                            }
                            V.addCubestripPreview(g, x)
                        } else if ("flat" == w || ("null" == w || _[39] == w || _[24] == w) && q) V.addFlatLevel(g, f, h, 0, 0, 0, L.baseindex, !0); else if (_[39] == w || _[24] == w || "null" == w && c) x = [Number(L.hfov), Number(L.vfov), Number(L.voffset)], k = L[e], V.addRoundPano(w, g, x, null, k);
                        a(!1, !0)
                    } else if (0 == w.indexOf("grid")) {
                        if (g = Db(w, null, !1)) if (g = g[0], "grid" == g.cmd) {
                            var I = g.args, g = void 0 == I[1] ? 64 : parseInt(I[1]),
                                x = void 0 == I[2] ? 64 : parseInt(I[2]), k = void 0 == I[3] ? 512 : parseInt(I[3]),
                                w = void 0 == I[4] ? 6710886 : parseInt(I[4]),
                                R = void 0 == I[5] ? 2236962 : parseInt(I[5]),
                                I = void 0 == I[6] ? void 0 == I[4] ? 16777215 : w : parseInt(I[6]), w = fa(w),
                                R = fa(R), I = fa(I);
                            V.addGridPreview(k, g, x, R, w, I);
                            a(!1, !0);
                            Ta()
                        }
                    } else Ta();
                    g = !1;
                    x = d.androidstock && !d.webgl;
                    if (q || r) {
                        if (b || r && x) n ? g = p(_[369]) : m && (g = p(_[371]));
                        if (0 == g) if ("cube" == e) {
                            if (l) if (m = L.level.getArray(), b = m.length, m.sort(function (a, c) {
                                return +parseInt(a.tiledimagewidth, 10) - parseInt(c.tiledimagewidth, 10)
                            }), 0 == d.multiressupport || x) {
                                h = d.iphone && d.retina || d.tablet || d.android ? 1100 : d.iphone ? 512 : 2560;
                                0 < Kc && (h = Kc + 256);
                                for (l = b - 1; 0 <= l && !(f = m[l].tiledimagewidth, f <= h); l--) ;
                                0 <= l && (g = p(_[72] + l + "]", !0))
                            } else for (m.sort(function (a, c) {
                                return +parseInt(a.tiledimagewidth, 10) - parseInt(c.tiledimagewidth, 10)
                            }), l = 0; l < b; l++) if (m = _[72] + l + "]", n = O(m), h = A(m)) m = n.tilesize ? n.tilesize : L.tilesize, f = parseInt(n.tiledimagewidth, 10), 0 < m && 0 < f && (V.addCubeLevel(h, f, m, L.baseindex), g = !0);
                            0 == g && (g = p(_[99]))
                        } else if (_[49] == e && L.cubestrip) V.addCubestripPano(oa.parsePath("" + L.cubestrip.url)), g = !0; else if ((_[39] == e || _[24] == e) && 1 >= f && 45 >= h || "flat" == e) {
                            if (d.multiressupport && l) for (m = L.level.getArray(), b = m.length, m.sort(function (a, c) {
                                return +parseInt(a.tiledimagewidth, 10) - parseInt(c.tiledimagewidth, 10)
                            }), l = 0; l < b; l++) if (m = _[72] + l + "]", n = O(m), c = O(m + "." + e + ".url"), c = oa.parsePath(c)) m = n.tilesize ? n.tilesize : L.tilesize, q = parseInt(n.tiledimagewidth, 10), n = parseInt(n.tiledimageheight, 10), 0 < m && 0 < q && 0 < n && (V.addFlatLevel(c, f, h, q, n, m, L.baseindex, !1), g = !0);
                            0 == g && (b = L[e]) && b.url && (V.addFlatLevel(oa.parsePath("" + b.url), f, h, 0, 0, 0, L.baseindex, !1), g = !0)
                        }
                    } else c && 0 == l && d.webgl && u && ((x = [Number(L.hfov), Number(L.vfov), Number(L.voffset)], k = L[e], t) ? d.panovideosupport && (f = xa.getItem(u)) && (f.renderToBitmap = !0, f.visible = !1, V.addRoundPano(e, null, x, f, k), g = !0) : (V.addRoundPano(e, u, x, null, k), g = !0));
                    g && (Jb = pe = !0);
                    V.finalize();
                    0 == g && null != e && (wa(2, _[206]), za(_[118]));
                    a(!1, !0)
                }

                function A(a) {
                    var b = _[193].split(" "), d = Array(6), e, f;
                    if (e = O(a + "." + b[6] + ".url")) {
                        if (e = oa.parsePath(e)) for (f = 0; 6 > f; f++) d[f] = e.split("%s").join(V.cubelabels[f])
                    } else for (f = 0; 6 > f; f++) if (e = oa.parsePath(O(a + "." + b[f] + ".url"))) d[f] = e; else return null;
                    return d
                }

                function p(a, b) {
                    var d = A(a);
                    if (!d) return !1;
                    if (b) {
                        var e = O(a), f = e.tilesize ? e.tilesize : L.tilesize, e = parseInt(e.tiledimagewidth, 10);
                        V.addCubeLevel(d, e, f, L.baseindex)
                    } else V.addCubeLevel(d, 0, 0, 1);
                    return !0
                }

                function u(a) {
                    1 < a && (a = 1);
                    0 == d.webgl && (a *= a * a);
                    a = 1 - a;
                    0 > a && (a = 0);
                    return a
                }

                var v = Ya;
                v.loadpano = function (a, d, e, h, g) {
                    t.count++;
                    t.id = t.count;
                    if (f()) if (0 > J(e).indexOf(_[438]) && M(_[130], 0), "null" == J(a) && (a = null), q.xml.content = null, q.xml.scene = null, a) {
                        aa.haltActions();
                        null == oa.firstxmlpath ? oa.firstxmlpath = n(a) : a = oa.parsePath(a, !0);
                        oa.currentxmlpath = n(a);
                        q.xml.url = a;
                        var l = t.id;
                        oa.loadxml(a, function (b, f) {
                            if (l == t.id) {
                                if (b && b.childNodes) {
                                    var n = b.childNodes, p = n.length;
                                    0 == p ? b = null : 2 == p && n[1] && _[20] == n[1].nodeName && (b = null)
                                }
                                b ? (b = ia.resolvexmlencryption(b, a), null != b && ia.resolvexmlincludes(b, function () {
                                    b = ia.xmlDoc;
                                    m(b, d, e, h, g)
                                })) : 200 == f ? cb(a + _[29]) : cb(a + _[203])
                            }
                        })
                    } else q.xml.url = "", b(_[253], d, e, h, g)
                };
                v.loadxml = b;
                v.loadxmldoc = m;
                v.updateview = a;
                v.updateplugins = function (a) {
                    var b = xa.getArray(), d = b.length, e;
                    Sa();
                    var f = 0, h = 0;
                    for (e = 0; e < d; e++) {
                        var g = b[e];
                        g && g._ready && (0 != g.haschanged_flags && (g.processUpdates(), f++), (a || g.poschanged) && g.loaded && (g.updatepos(_[448]), h++))
                    }
                };
                v.idlecheck = function () {
                    var a = Sa();
                    H.moved && (H.down || H.downLayer) && Xa((H.downLayer ? _[66] : "pano") + _[207]);
                    (a - sc) / 1E3 > q.idletime && l != sc && (l = sc, za(_[569]));
                    return vb.checkIdletime(a, sc)
                };
                v.previewdone = Ta;
                v.havepanosize = function (a) {
                    V && V.id == a.id && (L.hfov = a.hfov, L.vfov = a.vfov, L.hres = a.hres, L.vres = a.vres, za(_[477]), r.haschanged = !0)
                };
                v.removeelements = e;
                v.isLoading = function () {
                    return Jb
                };
                v.isBlending = function () {
                    return Lc || Ab
                };
                var g = [], t = {count: 0, id: 0}, C = 0, z = !1, y = null, F = null, l = 0;
                v.checkHovering = function () {
                    if (1 != ($a & 1) && !aa.isblocked()) {
                        var a = [xa.getArray(), wb.getArray()], b, d, e, f, h;
                        for (h = 0; 2 > h; h++) for (b = a[h], e = b.length, f = 0; f < e; f++) (d = b[f]) && d.DATA.visible && d.hovering && d.onhover && aa.callaction(d.onhover, d)
                    }
                };
                v.handleloading = function () {
                    var a = !1;
                    0 == Ab && (ja && (a |= ja.doloading()), V && (a |= V.doloading()));
                    Jb = V && V.isloading();
                    var b = Za.handleloading();
                    pe && 1 != Jb && (pe = !1, za(_[118]));
                    b & 1 && (Jb = !0);
                    b & 2 && (a = !0);
                    if (V && (ja || F)) if (0 == Ab) V.previewcheck() && (Ab = !0, Fb = -1); else {
                        a = 0;
                        0 <= zb && (-1 == Fb ? Fb = Sa() : (a = (Sa() - Fb) / 1E3, a = 0 < zb ? a / zb : 1), a = u(a), Lc = !0, 0 < zb && V.setblend(1 - a), Gc = 1 - a);
                        if (0 == a || 0 >= zb) zb = 0, Gc = 1, ja && (ja.destroy(), ja = null), Lc = Ab = !1;
                        a = !0
                    }
                    return a
                };
                v.setLastPanoOffset = function (a) {
                    ja && ja.image && (ja.image.viewoffset += -a)
                }
            })();
            var Za = {};
            (function () {
                var a, b;

                function w(a) {
                    if (pa) {
                        var b = q.bgcolor;
                        pa.clearColor((b >> 16 & 255) / 255, (b >> 8 & 255) / 255, (b & 255) / 255, a)
                    }
                }

                function e(a) {
                    if (!1 === document.hidden && sa) {
                        var b = parseInt(sa.style.height);
                        0 < b && (sa.style.height = b + 1 + "px", setTimeout(function () {
                            sa && parseInt(sa.style.height) == b + 1 && (sa.style.height = b + "px")
                        }, 100))
                    }
                }

                function f() {
                    return "attribute vec3 vx;attribute vec2 tx;uniform float sh;uniform float ch;uniform mat4 mx;uniform mat4 ot;uniform mat3 tm;varying vec2 tt;void main(){vec3 vr=vec3(ot*vec4(vx,1));vec3 vs=1000.0*normalize(vr);vec2 c2=vec2(vr.x,vr.z);c2=c2/max(1.0,length(c2));vec3 vc=1000.0*vec3(c2.x,clamp(vr.y*inversesqrt(1.0+vr.x*vr.x+vr.z*vr.z),-30.0,+30.0),c2.y);vec3 vv=vr*(1.0-sh)+sh*(vs*(1.0-ch)+vc*ch);gl_Position=mx*vec4(vv,1.0);tt=(vec3(tx,1)*tm).xy;}"
                }

                function n(a, b) {
                    return "#ifdef GL_ES\n#ifdef GL_FRAGMENT_PRECISION_HIGH\nprecision highp float;\n#else\nprecision mediump float;\n#endif\n#endif\nuniform float aa;uniform sampler2D sm;varying vec2 tt;void main(){vec4 c=texture2D(sm,vec2(tt.s,tt.t)" + (a ? ",-1.0" : "") + ");" + (b ? _[197] : "") + "gl_FragColor=vec4(c.rgb,c.a*aa);}"
                }

                function m(a) {
                    var b = pa;
                    b && a && (b.deleteProgram(a.prg), b.deleteShader(a.vs), b.deleteShader(a.fs), a.prg = null, a.vs = null, a.fs = null)
                }

                function h(a, b, c, d) {
                    var k = pa;
                    null == a && (a = "attribute vec2 vx;varying vec2 tx;void main(){gl_Position=vec4(vx.x*2.0-1.0,-1.0+vx.y*2.0,0.0,1.0);tx=vx;}");
                    var e = null;
                    if (void 0 === Jb[a]) {
                        e = k.createShader(k.VERTEX_SHADER);
                        k.shaderSource(e, a);
                        k.compileShader(e);
                        if (!k.getShaderParameter(e, k.COMPILE_STATUS)) return wa(0, _[123] + k.getShaderInfoLog(e)), null;
                        Jb[a] = e
                    } else e = Jb[a];
                    a = k.createShader(k.FRAGMENT_SHADER);
                    k.shaderSource(a, b);
                    k.compileShader(a);
                    if (!k.getShaderParameter(a, k.COMPILE_STATUS)) return wa(0, _[123] + k.getShaderInfoLog(a)), null;
                    b = k.createProgram();
                    k.attachShader(b, e);
                    k.attachShader(b, a);
                    k.linkProgram(b);
                    if (!k.getProgramParameter(b, k.LINK_STATUS)) return null;
                    k.useProgram(b);
                    k.uniform1i(k.getUniformLocation(b, "sm"), 0);
                    var e = {vs: e, fs: a, prg: b}, f = c.split(","), h;
                    a = f.length;
                    for (c = 0; c < a; c++) (h = f[c]) && k.enableVertexAttribArray(e[h] = k.getAttribLocation(b, h));
                    d = d.split(",");
                    a = d.length;
                    for (c = 0; c < a; c++) (f = d[c]) && (e[f] = k.getUniformLocation(b, f));
                    return e
                }

                function x(a, b) {
                    return h(null, a, "vx", b)
                }

                function O() {
                    mc = null
                }

                function E(a) {
                    a = a && a.prg ? a.prg : a;
                    var b = pa;
                    a ? a != mc && (Fb = mc, mc = a, b.useProgram(mc)) : Fb && (mc = Fb, Fb = null, b.useProgram(mc))
                }

                function A() {
                    var c = pa;
                    try {
                        var k = c.createBuffer();
                        c.bindBuffer(lb, k);
                        c.bufferData(lb, new Float32Array([0, 0, 0, 1, 1, 1, 1, 0]), bd);
                        var e = c.createBuffer();
                        c.bindBuffer(Wb, e);
                        c.bufferData(Wb, new Uint16Array([0, 1, 2, 0, 2, 3]), bd);
                        a = k;
                        b = e;
                        var g;
                        for (g = 0; 6 > g; g++) {
                            var c = _[180], l = e = k = "";
                            0 == g ? e = _[188] : 1 == g ? (l = "cc", k = _[109], e = _[177]) : 2 == g ? (l = "cc", k = _[109], e = _[173]) : 3 == g ? (l = "ct,zf", k = _[194], e = _[172]) : 4 == g ? (l = "fp,bl", k = _[195], e = "float t=(tx.x*fp.x+tx.y*fp.y+fp.z)*(1.0-2.0*bl)+bl;gl_FragColor=vec4(texture2D(sm,tx).rgb,smoothstep(t-bl,t+bl,aa));") : 5 == g && (l = _[502], k = _[183], e = "float t=(1.0-sqrt(2.0)*sqrt((ap.x*(tx.x-0.5)*(tx.x-0.5)+ap.y*(tx.y-0.5)*(tx.y-0.5))/(0.5*(ap.x+ap.y))))*(1.0-2.0*bl)+bl;gl_FragColor=vec4(texture2D(sm,(tx-vec2(0.5,0.5))*mix(1.0,aa,zf)+vec2(0.5,0.5)).rgb,smoothstep(t-bl,t+bl,aa));");
                            c = _[211] + c + k + "void main(){" + e + "}";
                            bb[g] = h(null, c, "vx", "aa," + l);
                            if (null == bb[g]) return !1
                        }
                        var m = h(f(), n(!0, !1), "vx,tx", _[68]);
                        null == m && d.ie && (m = h(f(), n(!1, !1), "vx,tx", _[68]));
                        if (null == m) return !1;
                        xa = m;
                        rb = h(f(), n(!1, !0), "vx,tx", _[68]);
                        mb = m.vx;
                        nb = m.tx;
                        zb = m.sh;
                        Hb = m.ch;
                        vb = m.aa;
                        Gb = m.mx;
                        Db = m.ot;
                        Eb = m.tm
                    } catch (I) {
                        return !1
                    }
                    return !0
                }

                function p(a) {
                    if (a) {
                        var b = pa;
                        b.deleteBuffer(a.vx);
                        b.deleteBuffer(a.tx);
                        b.deleteBuffer(a.ix);
                        a.vx = null;
                        a.tx = null;
                        a.ix = null;
                        a.vxd = null;
                        a.txd = null;
                        a.ixd = null;
                        a.tcnt = 0
                    }
                }

                function u(a, b, c, d) {
                    this.tcnt = a;
                    this.vxd = b;
                    this.txd = c;
                    this.ixd = d;
                    this.ix = this.tx = this.vx = null
                }

                function v(a) {
                    var b = pa;
                    b.bindBuffer(lb, a.vx = b.createBuffer());
                    b.bufferData(lb, a.vxd, bd);
                    b.bindBuffer(lb, a.tx = b.createBuffer());
                    b.bufferData(lb, a.txd, bd);
                    b.bindBuffer(Wb, a.ix = b.createBuffer());
                    b.bufferData(Wb, a.ixd, bd)
                }

                function g(a, b) {
                    var c, d = 2 * (b + 1) * (b + 1);
                    c = 6 * b * b;
                    var k = new Float32Array(3 * (b + 1) * (b + 1)), e = new Float32Array(d), f = new Uint16Array(c), h,
                        g, l, m, n;
                    a *= 2;
                    for (g = c = d = 0; g <= b; g++) for (h = 0; h <= b; h++) l = h / b, m = g / b, e[d] = l, e[d + 1] = m, d += 2, k[c] = a * (l - .5), k[c + 1] = a * (m - .5), k[c + 2] = 0, c += 3;
                    for (g = c = 0; g < b; g++) for (h = 0; h < b; h++) d = h + g * (b + 1), l = d + 1, m = d + (b + 1), n = m + 1, f[c] = d, f[c + 1] = l, f[c + 2] = m, f[c + 3] = l, f[c + 4] = n, f[c + 5] = m, c += 6;
                    return new u(6 * b * b, k, e, f)
                }

                function t(a) {
                    var b = pa;
                    null == a && (a = {
                        have: !1,
                        fb: null,
                        tex: null,
                        w: 0,
                        h: 0,
                        alpha: 1,
                        havepano: -1,
                        drawcalls: 0
                    }, a.fb = b.createFramebuffer(), a.tex = b.createTexture(), b.bindTexture(ka, a.tex), b.texParameteri(ka, b.TEXTURE_WRAP_T, b.CLAMP_TO_EDGE), b.texParameteri(ka, b.TEXTURE_WRAP_S, b.CLAMP_TO_EDGE), b.texParameteri(ka, b.TEXTURE_MAG_FILTER, Ob), b.texParameteri(ka, b.TEXTURE_MIN_FILTER, Ob), b.bindFramebuffer(gb, null), Va = !1);
                    var c = d.gl.width * La + .5 | 0, k = d.gl.height * La + .5 | 0;
                    if (a.w != c || a.h != k) a.w = c, a.h = k, b.bindTexture(ka, a.tex), b.texImage2D(ka, 0, Xb, c, k, 0, Xb, cd, null), b.bindFramebuffer(gb, a.fb), b.framebufferTexture2D(gb, b.COLOR_ATTACHMENT0, ka, a.tex, 0), b.bindTexture(ka, null), b.bindFramebuffer(gb, null), Va = !1;
                    return a
                }

                function C(c, k, e) {
                    var f = pa;
                    if (0 >= c.drawcalls || null == k) return !1;
                    var h = d.gl.width * La + .5 | 0, g = d.gl.height * La + .5 | 0;
                    if (0 < h && 0 < g) return E(k.prg), f.viewport(0, 0, h, g), k.aa && (Xa && (e = 1 - Xa(1 - e, 0, 1), 0 > e ? e = 0 : 1 < e && (e = 1)), f.uniform1f(k.aa, e)), k.sz && f.uniform2f(k.sz, h, g), f.bindBuffer(lb, a), f.vertexAttribPointer(k.vx, 2, nc, !1, 0, 0), f.bindBuffer(Wb, b), f.activeTexture(dd), f.bindTexture(ka, c.tex), f.drawElements(ic, 6, Yb, 0), kb++, !0
                }

                function z(a, b, c, d, k, e) {
                    var f = !1;
                    0 == d && (b = c = d = 1024, ib = f = !0);
                    this.type = 0;
                    this.stereo = e;
                    this.preview = !1;
                    this.needsize = f;
                    this.w = b;
                    this.h = c;
                    this.mp = b * c * a >> 20;
                    this.tilesize = d;
                    this.htiles = (b + d - 1) / d | 0;
                    this.vtiles = (c + d - 1) / d | 0;
                    this.loadedtiles = [0, 0];
                    this.addedtiles = [0, 0];
                    this.totaltiles = a * this.htiles * this.vtiles;
                    this.i = k;
                    this.planeurls = Array(a);
                    this.planemapping = 6 == a ? [0, 1, 2, 3, 4, 5] : [1];
                    this.invplanemapping = 6 == a ? [0, 1, 2, 3, 4, 5] : [0, 0, 0, 0, 0, 0];
                    this.completelyadded = this.complete = !1;
                    this.vfov = this.hfov = 90;
                    this.voffset = this.hoffset = 0;
                    this.vscale = 1
                }

                function y(a, b) {
                    return a.preview ? -1 : b.preview ? 1 : a.w - b.w
                }

                function F(a, b, c, d, k, e, f) {
                    e = 0 < e ? d * f / e : 1;
                    0 >= d && (d = 1);
                    0 >= k && (k = e);
                    e = k / e;
                    b.hfov = d;
                    b.vfov = k;
                    b.hoffset = 0;
                    b.voffset = d / 2 - k / e / 2;
                    b.vscale = 1;
                    f = a.levels;
                    c && f.push(b);
                    f.sort(y);
                    b = f.length - 1;
                    for (c = k = 0; c <= b; c++) f[c].needsize || (k = f[c].vfov);
                    if (0 < k) {
                        for (c = 0; c <= b; c++) f[c].needsize || (f[c].vscale = k / f[c].vfov * e);
                        a.fovlimits = [-d / 2, +d / 2, -k / 2, +k / 2]
                    }
                    l(a)
                }

                function l(a) {
                    var b = null, c = 0 == a.type, d = c || null != a.fovlimits, k = a.levels;
                    if (k) {
                        var e = k.length;
                        0 < e && (k = k[e - 1], 0 == k.preview && 0 == k.needsize && d && (b = k))
                    }
                    b && a.done && 0 == a.ready && (a.ready = !0, a.hfov = c ? 360 : b.hfov, a.vfov = c ? 180 : b.vfov, a.hres = b.w, a.vres = b.h, Ya.havepanosize(a))
                }

                function c() {
                    this.h = this.w = 0;
                    this.imgfov = null;
                    this.loading = !0;
                    this.texture = this.obj = null;
                    this.texvalid = !1;
                    this.mx = Aa()
                }

                function D() {
                    this.layer = null;
                    this.tiles = [];
                    this.mx = this.texture = this.csobj = this.csobj0 = null
                }

                function B(a) {
                    function b(a, c, d, k) {
                        f(a);
                        if (1 != a.type) {
                            var e = pa;
                            d || (d = [0, 1, 2, 3, 4, 5]);
                            var g, h, l, m;
                            if (c) {
                                g = c.naturalWidth;
                                h = c.naturalHeight;
                                m = 1;
                                if (3 * g == 2 * h) l = g / 2; else if (2 * g == 3 * h) l = g / 3; else if (1 * g == 6 * h) l = g / 6; else if (6 * g == 1 * h) l = g / 1; else {
                                    0 == a.type && wa(2, _[280] + c.src + _[212]);
                                    return
                                }
                                g /= l;
                                h /= l
                            } else k && (l = k.width, m = 0, g = 1, h = 6, c = k);
                            k = Ca ? 0 : Ka;
                            var n = l, I = new D, p = new z(6, n, n, n, 1, !1), Kb, q, R, r = [2, 0, 3, 1, 4, 5];
                            0 == Ca && (Kb = Ha(), Kb.style.position = _[0], Kb.style.pointerEvents = "none", I.layer = Kb);
                            I.tiles = Array(6);
                            for (q = 0; q < h; q++) for (Kb = 0; Kb < g; Kb++) {
                                var t = d[q * g + Kb], T = new P("prev" + a.id + "s" + tc[t], 0, t, 0, 0, p, "", a);
                                R = r[t];
                                var u = 1 == t || 3 == t ? k : 0, x = 3 >= t ? k : 0, w = Ha(2);
                                w.width = n + 2 * u;
                                w.height = n + 2 * x;
                                w.style.position = _[0];
                                w.style[$c] = "0 0";
                                var cc = w.getContext("2d");
                                cc && (0 < x && (cc.drawImage(c, m * Kb * l, m * q * l, l, 1, u, 0, l, x), cc.drawImage(c, m * Kb * l, m * q * l + l - 1, l, 1, u, n + x, l, x)), 0 < u && (cc.drawImage(c, m * Kb * l + 0, m * q * l + 0, 1, l, 0, u, u, l), cc.drawImage(c, m * Kb * l + l - 1, m * q * l + 0, 1, l, n + u, u, u, l)), cc.drawImage(c, m * Kb * l, m * q * l, l, l, u, x, n, n), yb && cc.getImageData(n >> 1, n >> 1, 1, 1));
                                T.canvas = w;
                                0 == Ca ? (T.elmt = w, w = -n / 2, T.transform = uc[t] + _[74] + (w - u) + "px," + (w - x) + "px," + w + "px) ") : (ga(T, n, n), t = e.createTexture(), e.activeTexture(dd), e.bindTexture(ka, t), e.texParameteri(ka, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.texParameteri(ka, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(ka, e.TEXTURE_MAG_FILTER, Ob), e.texParameteri(ka, e.TEXTURE_MIN_FILTER, Ob), e.texImage2D(ka, 0, dc, dc, cd, w), e.bindTexture(ka, null), T.texture = t, T.mem = 0);
                                T.state = 2;
                                I.tiles[R] = T
                            }
                            ib = !0;
                            a.cspreview = I
                        }
                    }

                    function k(a, b) {
                        g.imagefov = b;
                        var c = a.rppano, d = c.w, e = c.h;
                        a.stereo && (0 == a.stereoformat ? d >>= 1 : e >>= 1);
                        var f = b[0], h = b[1], l = b[2];
                        0 >= f && (f = 360);
                        if (0 >= h) {
                            var h = f, m = d, n = e, I = 180,
                                I = 4 == a.type ? 2 * Math.atan(h / 2 * (n / m) * Z) / Z : _[154] == a.mapping ? n / m * (h / 2) * Na : h * n / m;
                            180 < I && (I = 180);
                            h = I
                        }
                        a.hfov = f;
                        a.vfov = h;
                        a.hres = d;
                        a.vres = e;
                        c.imgfov = [f, h, l];
                        c = -h / 2 + l;
                        d = +h / 2 + l;
                        4 == a.type && (d = Math.tan(.5 * h * Z), l = Math.sin(l * Z), c = Math.atan(-d + l) / Z, d = Math.atan(+d + l) / Z);
                        a.fovlimits = [-f / 2, +f / 2, c, d]
                    }

                    function e(a, b, c, k) {
                        b = pa;
                        var f = a.rppano, g = b.createTexture();
                        b.activeTexture(dd);
                        b.bindTexture(ka, g);
                        b.texParameteri(ka, b.TEXTURE_WRAP_T, b.CLAMP_TO_EDGE);
                        b.texParameteri(ka, b.TEXTURE_WRAP_S, b.CLAMP_TO_EDGE);
                        b.texParameteri(ka, b.TEXTURE_MAG_FILTER, Ob);
                        b.texParameteri(ka, b.TEXTURE_MIN_FILTER, Ob);
                        if (c) {
                            var h;
                            k = c.naturalWidth;
                            h = c.naturalHeight;
                            f.w = k;
                            f.h = h;
                            var l = !1, m = !1, n = M(k) << 1 | M(h), m = d.opera ? "" : J(la.mipmapping);
                            if (m = "force" == m || "auto" == m && 3 == n) 0 == (n & 2) && (l = !0, k = G(k)), 0 == (n & 1) && (l = !0, h = G(h)), b.texParameteri(ka, b.TEXTURE_MIN_FILTER, b.LINEAR_MIPMAP_LINEAR);
                            k > va && (l = !0, k = va);
                            h > va && (l = !0, h = va);
                            if (l) {
                                l = Ha(2);
                                l.width = k;
                                l.height = h;
                                n = l.getContext("2d");
                                n.drawImage(c, 0, 0, k, h);
                                if (d.ios) {
                                    var I;
                                    I = h;
                                    for (var p = n.getImageData(0, 0, 1, I).data, Kb = 0, q = I, R = I; R > Kb;) 0 == p[4 * (R - 1) + 3] ? q = R : Kb = R, R = q + Kb >> 1;
                                    I = R / I;
                                    0 < I && 1 > I && n.drawImage(c, 0, 0, k, h / I)
                                }
                                b.texImage2D(ka, 0, dc, dc, cd, l)
                            } else b.texImage2D(ka, 0, dc, dc, cd, c);
                            m && b.generateMipmap(ka);
                            f.texvalid = !0
                        } else k && (f.videoplugin = k, f.videoready = !1);
                        b.bindTexture(ka, null);
                        f.texture = g;
                        a.rppano = f;
                        ib = !0
                    }

                    function f(a) {
                        var b = pa, c = a.cspreview;
                        if (c) if (a.cspreview = null, b) for (a = 0; 6 > a; a++) {
                            var d = c.tiles[a], k = d.texture;
                            k && (b.deleteTexture(k), d.texture = null)
                        } else a.previewadded && (a.layer.removeChild(c.layer), a.previewadded = !1)
                    }

                    var h = ++Vb, g = this;
                    g.id = h;
                    g.image = a;
                    g.panoview = null;
                    g.type = 0;
                    g.typeinfos = null;
                    g.mapping = null;
                    g.cubelabels = _[593].split("");
                    g.stereo = !1;
                    g.stereoformat = 0;
                    g.stereolabels = ["1", "2"];
                    g.done = !1;
                    g.ready = !1;
                    g.fovlimits = null;
                    g.hfov = 0;
                    g.vfov = 0;
                    g.hres = 0;
                    g.vres = 0;
                    g.levels = [];
                    g.frame = 0;
                    g.currentlevel = -1;
                    g.viewloaded = !1;
                    g.stopped = !1;
                    g.suspended = !1;
                    g.alpha = 1;
                    g.cspreview = null;
                    g.rppano = null;
                    g.previewadded = !1;
                    g.previewloading = !1;
                    g.mjpegimage = null;
                    g.mjpegdata = null;
                    g.addToLayer = function (a) {
                        if (0 == Ca) {
                            var b = Ha(), c = b.style;
                            c.position = _[0];
                            c.left = 0;
                            c.top = 0;
                            g.layer = b;
                            a.appendChild(b)
                        }
                    };
                    g.addGridPreview = function (a, c, k, e, f, h) {
                        var l;
                        a += 1;
                        var m = d.desktop ? 1023 : d.tablet || d.webgl ? 511 : 255;
                        l = a < m ? a : m;
                        var n = Ha(2);
                        n.width = l;
                        n.height = l;
                        m = l / a;
                        k *= m;
                        c *= m;
                        m = n.getContext("2d");
                        m.fillStyle = e;
                        m.fillRect(0, 0, l, l);
                        m.fillStyle = f;
                        for (e = 0; e < a; e += k) m.fillRect(0, e, a, 1);
                        for (e = 0; e < a; e += c) m.fillRect(e, 0, 1, a);
                        if (h != f) for (m.fillStyle = h, f = 0; f < a; f += k) for (e = 0; e < a; e += c) m.fillRect(e, f, 1, 1);
                        setTimeout(function () {
                            b(g, null, null, n)
                        }, 10)
                    };
                    g.addCubestripPreview = function (a, c) {
                        g.previewloading = !0;
                        oa.loadimage(a, function (a) {
                            b(g, a, c);
                            g.previewloading = !1;
                            Ya.previewdone()
                        }, function (b) {
                            oa.reportLoadingError(a);
                            g.previewloading = !1
                        })
                    };
                    g.addCubestripPano = function (a) {
                        oa.loadimage(a, function (a) {
                            b(g, a, null)
                        }, function () {
                            oa.reportLoadingError(a)
                        })
                    };
                    g.addCubeLevel = function (a, b, c, d) {
                        b = new z(6, b, b, c, d, g.stereo);
                        b.planeurls[0] = a[0];
                        b.planeurls[1] = a[1];
                        b.planeurls[2] = a[2];
                        b.planeurls[3] = a[3];
                        b.planeurls[4] = a[4];
                        b.planeurls[5] = a[5];
                        a = g.levels;
                        a.push(b);
                        a.sort(y);
                        l(g)
                    };
                    g.addFlatLevel = function (a, b, c, d, k, e, f, h) {
                        g.type = 1;
                        e = new z(1, d, k, e, f, g.stereo);
                        e.planeurls[0] = a;
                        e.type = 1;
                        e.preview = h;
                        F(g, e, !0, b, c, d, k)
                    };
                    g.addRoundPano = function (a, b, d, f, h) {
                        var l = !1, m = J(h.mjpegstream);
                        "true" == m || "auto" == m ? (l = !0, g.mjpegdata = null) : (m = Number(m), !isNaN(m) && 0 < m && (l = !0, g.mjpegdata = {
                            delay: 1E3 / m,
                            lastupdate: 0
                        }));
                        g.mapping = h.mapping ? J(h.mapping) : "equi";
                        a = J(a);
                        _[24] == a ? g.type = 4 : _[85] == a ? (g.type = 5, g.stereo = !1, g.typeinfos = {
                            fov: h.fov,
                            align: h.align,
                            crop: h.crop,
                            lenscp: h.lenscp
                        }) : g.type = 3;
                        g.rppano = new c;
                        if (f) {
                            if (g.updateFOV = k, e(g, a, null, f), h = void 0 !== f._panoid, f._panoid = g.id, g.imagefov = d, f.onvideoreadyCB = function () {
                                var a = g.rppano;
                                a.w = f.videowidth;
                                a.h = f.videoheight;
                                k(g, g.imagefov);
                                r.updateView();
                                Ya.havepanosize(g);
                                g.ready = !0;
                                g.rppano.loading = !1;
                                a.videoready = !0
                            }, !h && f.havevideosize) f.onvideoreadyCB()
                        } else b && oa.loadimage(b, function (b) {
                            l && (g.mjpegimage = b);
                            e(g, a, b);
                            k(g, d);
                            r.updateView();
                            Ya.havepanosize(g);
                            g.rppano.loading = !1
                        }, function () {
                            oa.reportLoadingError(b)
                        })
                    };
                    g.finalize = function () {
                        g.done = !0;
                        l(g)
                    };
                    g.setblend = function (a) {
                        Ca ? g.alpha = a : g.layer && (g.layer.style.opacity = a)
                    };
                    g.removemainpano = function () {
                    };
                    g.stop = function () {
                        g.stopped = !0
                    };
                    g.destroy = function () {
                        var a = pa;
                        f(g);
                        if (a) {
                            var b = g.rppano;
                            if (b) {
                                b.videoplugin && (b.videoplugin._panoid = void 0);
                                var c = b.texture;
                                c && a.deleteTexture(c);
                                b.texture = null
                            }
                        }
                        for (var d in Ma) (b = Ma[d]) && b.pano === g && N(b);
                        a || (g.layer.parentNode.removeChild(g.layer), g.layer = null)
                    };
                    g.previewcheck = function () {
                        var a = g.rppano;
                        return a && a.videoplugin ? a.texvalid : g.previewloading || 0 == g.type && null == g.cspreview && 0 < g.levels.length && !g.viewloaded ? !1 : !0
                    };
                    g.doloading = function () {
                        return !1
                    };
                    g.isloading = function () {
                        if (g.previewloading) return !0;
                        var a = g.levels, b = a.length;
                        if (0 < b) {
                            if (0 == g.type && (b = a[0].preview && 1 < b ? 1 : 0, 9 > a[b].mp && !a[b].complete) || !g.viewloaded) return !0
                        } else if (a = g.rppano) return a.videoplugin ? !a.texvalid : a.loading;
                        return !1
                    }
                }

                function P(a, b, c, d, k, e, f, g) {
                    this.id = a;
                    this.pano = g;
                    this.cubeside = c;
                    this.stereo = f;
                    this.levelindex = b;
                    this.level = e;
                    this.h = d;
                    this.v = k;
                    this.draworder = e ? tc[c] * e.htiles * e.vtiles + k * e.htiles + d : tc[c];
                    this.url = null;
                    this.sh = this.ch = this.sv = 0;
                    this.mx = this.texture = this.canvas = this.image = this.elmt = null;
                    this.lastusage_on_frame = this.mem = this.retries = this.state = 0;
                    this.overlap = this.transform = null;
                    e && (a = 2 * ((d + .5) / e.htiles - .5), k = 2 * ((k + .5) / e.vtiles - .5), a += .5 / e.htiles, k += .5 / e.vtiles, 1 == g.type && (a *= Math.tan(.5 * e.hfov * Z), k *= Math.tan(.5 * e.vfov * Z)), 0 == c ? (c = 1, e = k, g = -a) : 1 == c ? (c = -a, e = k, g = -1) : 2 == c ? (c = -1, e = k, g = a) : 3 == c ? (c = a, e = k, g = 1) : 4 == c ? (c = -a, g = -k, e = -1) : (c = -a, g = k, e = 1), a = -Math.atan2(c, g), k = -Math.atan2(-e, Math.sqrt(c * c + g * g)), this.sv = Math.sin(k), k = Math.cos(k), this.ch = Math.cos(a) * k, this.sh = Math.sin(a) * k)
                }

                function ga(a, b, c) {
                    var d = Dc[a.cubeside], k = a.level, e = k.w / 2, f = k.tilesize, g = 1E3 / e, h = 1, l = k.vscale;
                    1 == k.type && (h = Math.tan(.5 * k.hfov * Z));
                    var m = (-e + a.h * f + b / 2 + 2 * k.hoffset * e / 90) * g * h,
                        k = (-e + a.v * f + c / 2 + 2 * k.voffset * e / k.hfov) * g * h * l, e = e * g;
                    jc(ed, b / 1E3 * h, 0, 0, 0, c / 1E3 * h * l, 0, 0, 0, 1);
                    bf(Rb, m, k, e);
                    vc(ed, Rb);
                    b = Rb;
                    h = d[1];
                    l = -d[0] * Z;
                    d = Math.cos(l);
                    c = Math.sin(l);
                    l = -h * Z;
                    h = Math.cos(l);
                    l = Math.sin(l);
                    jc(b, h, 0, -l, c * l, d, c * h, d * l, -c, d * h);
                    vc(ed, Rb);
                    d = Aa();
                    jc(d, g, 0, 0, 0, g, 0, 0, 0, g);
                    vc(d, ed);
                    a.mx = d
                }

                function Q(a, b, c, d, k, e) {
                    var f = [], g = a.length, h, l = !1, m = 0, n;
                    for (h = 0; h < g; h++) {
                        var I = a.charAt(h), p = I.charCodeAt(0);
                        if (37 == p) l = !0, m = 0; else if (48 == p) l ? m++ : f.push(I); else if (l) {
                            l = !1;
                            n = null;
                            65 <= p && 84 >= p && (p += 32);
                            if (108 == p) n = c; else if (115 == p) n = b; else if (116 == p) n = e; else if (117 == p || 120 == p || 99 == p || 104 == p) n = d; else if (118 == p || 121 == p || 114 == p) n = k;
                            if (null != n) {
                                for (; n.length <= m;) n = "0" + n;
                                f.push(n)
                            } else f.push("%" + I)
                        } else l = !1, f.push(I)
                    }
                    return f.join("")
                }

                function M(a) {
                    return 0 == (a & a - 1)
                }

                function G(a) {
                    a--;
                    a |= a >> 1;
                    a |= a >> 2;
                    a |= a >> 4;
                    a |= a >> 8;
                    a |= a >> 16;
                    a++;
                    return a
                }

                function X(a, b, c, d, k, e) {
                    if (0 < e) setTimeout(function () {
                        try {
                            X(null, b, c, d, k, 0)
                        } catch (a) {
                        }
                    }, e); else {
                        null == a && (a = b.getContext("2d"));
                        e = k[0];
                        var f = k[1], g = k[2], h = k[3];
                        0 < e && a.drawImage(c, 0, 0, 1, d[1], 0, f, e, d[3]);
                        0 < f && a.drawImage(c, 0, 0, d[0], 1, e, 0, d[2], f);
                        0 < g && a.drawImage(c, d[0] - 1, 0, 1, d[1], e + d[2], f, g, d[3]);
                        0 < h && a.drawImage(c, 0, d[1] - 1, d[0], 1, e, f + d[3], d[2], h)
                    }
                }

                function V(a) {
                    function b(c) {
                        c ? a.image = c : c = a.image;
                        if (0 < Oa) ib = !0, setTimeout(b, 0); else if (ad--, null != c && null != c.naturalWidth) {
                            var k = c.naturalWidth, e = c.naturalHeight, f = k * e * 4, g = !1;
                            0 == f && (g = !0);
                            if (g) a.state = 0, ib = !0; else {
                                var h = a.level;
                                if (h) {
                                    h.needsize && (h.w = k, h.h = e, h.tilesize = k > e ? k : e, h.needsize = !1, 1 == h.type ? F(a.pano, h, !1, L.hfov, L.vfov, k, e) : l(a.pano), h.preview && Ya.previewdone());
                                    h.loadedtiles[a.stereo - 1]++;
                                    h.complete = h.stereo && la.stereo ? h.loadedtiles[0] == h.totaltiles && h.loadedtiles[1] == h.totaltiles : h.loadedtiles[0] == h.totaltiles;
                                    g = 1 == h.htiles * h.vtiles;
                                    a.state = 2;
                                    a.lastusage_on_frame = pb;
                                    if (Ca) {
                                        ga(a, k, e);
                                        var m = pa, n = d.opera ? "" : J(la.mipmapping), I = "force" == n;
                                        if (n = I || "auto" == n) {
                                            if (!M(k) || !M(e)) {
                                                n = 1024;
                                                g ? (n = 0, I && (n = va)) : I || M(h.tilesize) || (n = 0);
                                                var g = G(k), p = G(e);
                                                g < n && p < n && (h = Ha(2), h.width = g, h.height = p, n = h.getContext("2d"), n.drawImage(c, 0, 0, g, p), c = h, k = g, e = p)
                                            }
                                            n = M(k) && M(e)
                                        }
                                        n && 0 == I && !d.realDesktop && a.level && 2500 < a.level.h && (n = !1);
                                        k = m.createTexture();
                                        m.activeTexture(dd);
                                        m.bindTexture(ka, k);
                                        m.texParameteri(ka, m.TEXTURE_WRAP_T, m.CLAMP_TO_EDGE);
                                        m.texParameteri(ka, m.TEXTURE_WRAP_S, m.CLAMP_TO_EDGE);
                                        m.texParameteri(ka, m.TEXTURE_MAG_FILTER, Ob);
                                        m.texParameteri(ka, m.TEXTURE_MIN_FILTER, n ? m.LINEAR_MIPMAP_LINEAR : Ob);
                                        m.texImage2D(ka, 0, dc, dc, cd, c);
                                        n && m.generateMipmap(ka);
                                        m.bindTexture(ka, null);
                                        a.texture = k;
                                        a.image = null
                                    } else {
                                        m = [k, e, k, e];
                                        I = !1;
                                        k == e && 1 == h.htiles && (n = la.hardwarelimit, k + 2 * Ka > n && (h.w = h.h = m[2] = m[3] = k = e = n - 2 * Ka, I = !0));
                                        var q = [0, 0, 0, 0], R = Ka, r = a.h, t = a.v, h = a.cubeside, u = a.level,
                                            T = u.tilesize, n = u.vscale, x = -u.w / 2, w = p = 1;
                                        1 == u.type && (p = Math.tan(.5 * u.hfov * Z), h = 6, 2 < R && (R = 2), d.ie || d.desktop && d.safari) && (w = 252);
                                        1E3 < -x && 4 < R && (R = 4);
                                        var U = x, v = U;
                                        q[2] = R;
                                        q[3] = R;
                                        0 == h || 2 == h ? 0 == r && (q[0] = R) : 1 != h && 3 != h || r != u.vtiles - 1 || (q[2] = 0);
                                        0 <= h && 3 >= h ? 0 == t && (q[1] = R) : (r == u.htiles - 1 && (q[2] = 0), t == u.vtiles - 1 && (q[3] = 0));
                                        a.overlap = q;
                                        U -= q[0];
                                        v -= q[1];
                                        q = (U + r * T) * p;
                                        t = (v + t * T - 2 * u.voffset * x / u.hfov) * p * n;
                                        u = p;
                                        T = p * n;
                                        1 < w && (q *= w, t *= w, x *= w, u *= w, T *= w);
                                        w = "" + q;
                                        q = 0 < w.indexOf("e-") ? q = q.toFixed(18) : w;
                                        w = "" + t;
                                        t = 0 < w.indexOf("e-") ? t = t.toFixed(18) : w;
                                        w = "" + x;
                                        x = 0 < w.indexOf("e-") ? x = x.toFixed(18) : w;
                                        a.transform = uc[h] + _[74] + q + "px," + t + "px," + x + "px) ";
                                        if (1 != p || 1 != n) a.transform += _[510] + u + "," + T + ",1) ";
                                        (p = a.overlap) ? (h = Ha(2), h.width = k + p[0] + p[2], h.height = e + p[1] + p[3], h.style.overflow = _[6], f = h.width * h.height * 4, x = w = 0, n = h.getContext("2d"), p && (w = p[0], x = p[1], X(n, h, c, m, p, g ? 0 : 250)), I ? n.drawImage(c, 0, 0, m[0], m[1], w, x, k, e) : n.drawImage(c, w, x), yb && n.getImageData(m[0] >> 1, m[1] >> 1, 1, 1), a.canvas = h, a.elmt = h, a.image = null) : a.elmt = c;
                                        a.elmt.style.position = _[0];
                                        a.elmt.style[$c] = "0 0"
                                    }
                                    a.mem = f;
                                    fb += f;
                                    if (fb > za) {
                                        ib = !0;
                                        Oa++;
                                        for (var cc, f = null, k = 0; ;) {
                                            for (cc in Ma) k++, c = Ma[cc], 0 < c.levelindex && 2 <= c.state && c.lastusage_on_frame < pb - 1 && (!f || c.lastusage_on_frame < f.lastusage_on_frame) && (f = c);
                                            if (f) {
                                                if (N(f), f = null, fb < za - 2097152) break
                                            } else break
                                        }
                                        if (k > Math.max(2 * tb.length, 100)) {
                                            f = {};
                                            for (cc in Ma) if (c = Ma[cc]) (0 < c.levelindex || 8 < c.level.mp) && 0 == c.state && c.lastusage_on_frame < pb - 2 ? (c.pano = null, c.level = null) : f[cc] = c;
                                            Ma = f
                                        }
                                        fb > za && (sb = !0)
                                    }
                                    ib = !0;
                                    Oa++
                                }
                            }
                        }
                    }

                    function c(b, d) {
                        ad--;
                        d ? a.state = 4 : a.retries < q.network.retrycount ? (a.retries++, a.state = 0, ib = !0) : (a.state = 4, oa.reportLoadingError(a.url))
                    }

                    null != a.pano && (null == a.url && (a.url = Q(a.level.planeurls[a.level.invplanemapping[a.cubeside]], a.pano.cubelabels[a.cubeside], a.levelindex, String(a.h + a.level.i), String(a.v + a.level.i), a.pano.stereolabels[a.stereo - 1])), a.state = 1, oa.loadimage(a.url, b, c, !0), ad++)
                }

                function N(a) {
                    var b = pa, c = a.texture;
                    b && c && b.deleteTexture(c);
                    (b = a.elmt) && (c = b.parentNode) && c.removeChild(b);
                    c = tb.length;
                    for (b = 0; b < c; b++) if (tb[b] == a) {
                        tb.splice(b, 1);
                        break
                    }
                    b = a.id;
                    Ma[b] = null;
                    delete Ma[b];
                    if (b = a.level) b.addedtiles[a.stereo - 1]--, b.completelyadded = b.stereo && la.stereo ? b.addedtiles[0] == b.totaltiles && b.addedtiles[1] == b.totaltiles : b.addedtiles[0] == b.totaltiles;
                    fb -= a.mem;
                    a.state = 0;
                    a.image = null;
                    a.canvas = null;
                    a.texture = null;
                    a.elmt = null;
                    a.pano = null;
                    a.level = null
                }

                function S(a) {
                    if (Ca) {
                        var b = pa, c = Ga, d = a.texture;
                        c && d && (b.uniformMatrix4fv(Db, !1, a.mx), b.bindBuffer(lb, c.vx), b.vertexAttribPointer(mb, 3, nc, !1, 0, 0), b.bindBuffer(lb, c.tx), b.vertexAttribPointer(nb, 2, nc, !1, 0, 0), b.bindBuffer(Wb, c.ix), b.activeTexture(dd), b.bindTexture(ka, d), b.drawElements(ic, c.tcnt, Yb, 0), kb++, ke && nd(c, .6))
                    } else a.elmt.style[qb] = Tc + a.transform
                }

                function K(a, b) {
                    var c = new Ec;
                    c.x = a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
                    c.y = a[0] * b[3] + a[1] * b[4] + a[2] * b[5];
                    c.z = -2 * (a[0] * b[6] + a[1] * b[7] + a[2] * b[8]);
                    return c
                }

                function da(a, b) {
                    var c = a.panoview, k = a.id, e, f, h, l, m, n, t, x, w, B, C, y, A, z, F, D, G, J, H, Zb, N, Ka,
                        K = !1, Oa, L, O, M, Ta, W, X, Y, ga, aa, Q, yb, ca, sa, ja = !1, Vb = !1, Ba = !0, oa = Sa();
                    if (Ca) {
                        var fb = pa, sb = Ua, va = Ea, ta = a.panoview, ua = d.gl.width * La + .5 | 0,
                            za = d.gl.height * La + .5 | 0;
                        if (0 < b) {
                            var Fa = ua, ua = ua >> 1, sb = sb >> 1;
                            fb.viewport(2 == b ? ua : 0, 0, 1 == b ? ua : Fa - ua, za)
                        } else fb.viewport(0, 0, ua, za);
                        var Da = 1 / (.5 * sb), xb = -1 / (.5 * va), Ia = ta.zf,
                            bb = 0 < b ? Number(la.stereooverlap) * sb * .5 * (1 == b ? 1 : -1) : 0, jb = ta.yf,
                            Va = Math.min(Ia / 200, 1), Wa = 0 < Ia ? ta.ch : 0;
                        Ae(qd, Da, 0, 0, 0, 0, xb, 0, 0, 0, 0, 65535 / 65536, 1, 0, 0, 65535 / 65536 - 1, 0);
                        var Ya = ta.z;
                        Ae(wc, Ya, 0, 0, 0, 0, Ya, 0, 0, bb, jb, 1, 0, Ia * bb, Ia * jb, Ia, 1);
                        vc(wc, qd);
                        if (0 < b) {
                            var Xa = q.webVR;
                            Xa && Xa.enabled && Xa.prjmatrix(b, wc)
                        }
                        5 == a.type && rb ? (E(rb), mb = rb.vx, nb = rb.tx, zb = rb.sh, Hb = rb.ch, vb = rb.aa, Gb = rb.mx, Db = rb.ot, Eb = rb.tm) : (E(xa), mb = xa.vx, nb = xa.tx, zb = xa.sh, Hb = xa.ch, vb = xa.aa, Gb = xa.mx, Db = xa.ot, Eb = xa.tm);
                        fb.uniform1f(vb, 1);
                        fb.uniform1f(zb, Va);
                        fb.uniform1f(Hb, Wa);
                        Qd(Kc, Uc);
                        if (2 == b) {
                            var Za = Number(la.stereo_rightview_rx), cb = Number(la.stereo_rightview_ry),
                                db = Number(la.stereo_rightview_rz);
                            isNaN(Za) && (Za = 0);
                            isNaN(cb) && (cb = 0);
                            isNaN(db) && (db = 0);
                            ee(ed, Za, cb, db, !1);
                            af(Kc, ed)
                        }
                        vc(Kc, wc);
                        fb.uniformMatrix4fv(Gb, !1, Kc);
                        fb.uniformMatrix3fv(Eb, !1, Qb);
                        var $a = ab.obj0, gb = ab.obj;
                        null == $a && ($a = g(500, 1), gb = g(500, 19), v($a), v(gb), ab.obj0 = $a, ab.obj = gb);
                        Ga = 10 < Ia ? gb : $a
                    }
                    var Cd = b;
                    0 == Cd && (Cd = 1);
                    a.stereo && (k += "t" + Cd);
                    e = +c.h + Number(a.image.viewoffset);
                    f = -c.v;
                    h = c.z;
                    l = Na - e * Z;
                    m = -f * Z;
                    n = Math.sin(m);
                    t = Math.cos(m);
                    x = Math.cos(l) * t;
                    w = Math.sin(l) * t;
                    if ($b) {
                        var ob = [x, n, w];
                        Be(ed, $b);
                        fe(ed, ob);
                        x = ob[0];
                        n = ob[1];
                        w = ob[2]
                    }
                    B = a.levels;
                    y = B.length;
                    A = a.currentlevel;
                    a.viewloaded = !1;
                    if (5E3 > h) {
                        var Ab = 1 / Math.max(100, h), qb = Math.abs(Math.cos(e * Z)), Ib = Math.cos(.25 * Na);
                        if (1E-14 > qb || qb > Ib - 1E-14 && qb < Ib + 1E-14 || qb > 1 - 1E-14 || 1E-14 > t || t > 1 - 1E-14) e += (.5 + .5 * Math.random()) * Ab * (.5 > Math.random() ? -1 : 1), f += (.5 + .5 * Math.random()) * Ab * (.5 > Math.random() ? -1 : 1);
                        d.firefox && (n < -(1 - 1E-14) && (f += .5), n > +(1 - 1E-14) && (f -= .5))
                    }
                    Tc = _[74] + Ua / 2 + "px," + Ea / 2 + _[236] + c.yf.toFixed(16) + _[258] + h.toFixed(16) + _[125] + (-c.r).toFixed(16) + _[110] + h.toFixed(16) + _[349] + f.toFixed(16) + _[339] + e.toFixed(16) + "deg) " + Fc;
                    if (0 < y) {
                        var Cb = 1 == ma(la.loadwhilemoving) ? !0 : 0 == a.hasmoved || ea, Fb = A;
                        7 <= ad && (Cb = !1);
                        if (a.stopped) Cb = !1; else {
                            9 > B[0].mp && (0 == B[0].complete && (Fb = 0, K = !0), 0 == Cb && 0 == B[0].completelyadded && (Fb = 0, Cb = K = !0));
                            var Ob = q.lockmultireslevel | 0;
                            q.downloadlockedlevel && 0 <= Ob && Ob < y && (K = !0, 0 == B[Ob].complete && (Cb = !0))
                        }
                        Bd && 5 < Fb && (Fb -= 3, Bd = !1, ib = !0);
                        if (Cb) {
                            Vc = oa;
                            ea = !1;
                            yb = null;
                            sa = 1E6;
                            for (z = Fb; 0 <= z; z--) {
                                C = B[z];
                                G = C.w;
                                J = C.h;
                                H = C.tilesize;
                                Zb = C.htiles;
                                N = C.vtiles;
                                var ja = !0, jc = C.planeurls.length;
                                for (D = 0; D < jc; D++) if (F = C.planemapping[D], Ka = K ? [0, 0, 1, 1] : c.vr[F]) {
                                    aa = "p" + k + "l" + z + "s" + tc[F] + "h";
                                    var Ub = 1, ff = 1;
                                    1 == a.type && (Ub = 1 / Math.tan(.5 * C.hfov * Z), ff = 1 / Math.tan(.5 * C.vfov * Z));
                                    Oa = Math.floor((Ub * (Ka[0] - .5) + .5) * G / H);
                                    L = Math.ceil((Ub * (Ka[2] - .5) + .5) * G / H);
                                    0 > Oa && (Oa = 0);
                                    L > Zb && (L = Zb);
                                    O = Math.floor((ff * (Ka[1] - .5) + .5) * J / H);
                                    M = Math.ceil((ff * (Ka[3] - .5) + .5) * J / H);
                                    0 > O && (O = 0);
                                    M > N && (M = N);
                                    for (Y = O; Y < M; Y++) for (X = Oa; X < L; X++) {
                                        ga = aa + X + "v" + Y;
                                        Q = Ma[ga];
                                        Q || (Q = new P(ga, z, F, X, Y, C, Cd, a), Ma[ga] = Q, ja = !1);
                                        if (0 == Q.state) ca = Math.acos(x * Q.ch + w * Q.sh + n * Q.sv), ca < sa && (yb = Q, sa = ca), ja = !1; else if (1 == Q.state) ja = !1; else if (2 == Q.state) {
                                            0 == Ca && S(Q);
                                            var sd = Q, Jb = null, Rb = null;
                                            0 == Ca && (Jb = sd.elmt, Rb = a.layer);
                                            if (0 != Ca || Jb.parentNode != Rb) {
                                                for (var uc = tb.length, Sb = -1, Tb = void 0, oe = void 0, Bc = sd.pano, Cc = sd.levelindex, Gc = sd.draworder, Ic = 0, Jc = 0, oe = 0; oe < uc; oe++) if (Tb = tb[oe], Tb.pano === Bc && (Ic = Tb.levelindex, Jc = Tb.draworder, Ic >= Cc && Jc >= Gc)) {
                                                    Sb = oe;
                                                    break
                                                }
                                                0 > Sb ? (Jb && Rb.appendChild(Jb), tb.push(sd)) : (Jb && Rb.insertBefore(Jb, tb[Sb].elmt), tb.splice(Sb, 0, sd));
                                                var fd = sd.level;
                                                fd.addedtiles[sd.stereo - 1]++;
                                                fd.completelyadded = fd.stereo && la.stereo ? fd.addedtiles[0] == fd.totaltiles && fd.addedtiles[1] == fd.totaltiles : fd.addedtiles[0] == fd.totaltiles
                                            }
                                            Q.state = 3
                                        }
                                        Q.lastusage_on_frame = pb
                                    }
                                }
                                0 == Bd && 0 == ja && z == Fb && 1E3 < oa - fa && (Bd = !0, fa = oa);
                                if (ja) {
                                    a.viewloaded = !0;
                                    break
                                }
                            }
                            yb && V(yb)
                        }
                    }
                    1 != a.viewloaded ? (Vb = !0, ia = oa) : 0 < ia && 200 > oa - ia && (Vb = !0);
                    Ca && 10 < c.zf && (Vb = !0);
                    if (Vb) {
                        var bc = a.cspreview;
                        if (bc) {
                            var gf = bc.layer;
                            for (Ta = 0; 6 > Ta; Ta++) {
                                var mc = bc.tiles[Ta];
                                S(mc);
                                0 == Ca && 2 == mc.state && (gf.appendChild(mc.elmt), mc.state = 3)
                            }
                            0 != Ca || a.previewadded || (0 == a.layer.childNodes.length ? a.layer.appendChild(gf) : a.layer.insertBefore(gf, a.layer.childNodes[0]), a.previewadded = !0)
                        }
                    } else 0 == Ca && a.previewadded && ((bc = a.cspreview) && a.layer.removeChild(bc.layer), a.previewadded = !1);
                    a.previewloading && (Ba = !1);
                    if (Ba) for (W = tb.length, Ta = 0; Ta < W; Ta++) if (Q = tb[Ta], !(Q.pano !== a || a.stereo && Q.stereo != Cd)) if (Q.levelindex > A) {
                        0 == Ca && Q.pano.layer.removeChild(Q.elmt);
                        Q.state = 2;
                        tb.splice(Ta, 1);
                        Ta--;
                        W--;
                        var gd = Q.level;
                        gd.addedtiles[Q.stereo - 1]--;
                        gd.completelyadded = gd.stereo && la.stereo ? gd.addedtiles[0] == gd.totaltiles && gd.addedtiles[1] == gd.totaltiles : gd.addedtiles[0] == gd.totaltiles
                    } else S(Q);
                    if (0 == y && Ca) {
                        var Nb = a.rppano;
                        if (2 < a.type && Nb) {
                            var Sc = Nb.texture, sc = Nb.imgfov, Mc = Nb.videoplugin, hd = null, Dc = !1;
                            Mc && (Mc._panoid != a.id ? Mc = Nb.videoplugin = null : ib = r.haschanged = !0);
                            if (Sc && sc) {
                                var Xc = sc[0], Yc = sc[1], pd = sc[2];
                                Dc = Mc ? (hd = Mc.videoDOM) ? Nb.videoready : Nb.texvalid : !0;
                                if (Dc) {
                                    var id = ab.objS, Ge = a.type + "/" + Xc + "x" + Yc + "/" + pd + "/" + a.mapping;
                                    5 == a.type && (Ge += "/" + a.hres + "x" + a.vres);
                                    if (Ge != ab.objS_i) {
                                        var Ac = Xc, td = Yc, Nc = pd, jd = id, od = a.type, oc = 15453, Oc = 10302,
                                            yc = 3E4;
                                        jd && jd.tcnt != yc && (jd = null);
                                        var Dd = jd ? jd.vxd : new Float32Array(oc),
                                            qe = jd ? jd.txd : new Float32Array(Oc),
                                            Ed = jd ? jd.ixd : new Uint16Array(yc), ec, fc, Fd, ud, Gd, Wc, Hd, pc, Id,
                                            Zc, $c, He, re, Ie, Ac = Ac * Z, td = td * Z, Nc = Nc * Z;
                                        4 == od ? (td = 1E3 * Math.tan(.5 * td), Nc = 500 * Math.sin(1 * Nc)) : Nc = -Nc + .5 * Na;
                                        var oc = Oc = 0, $d = _[154] === a.mapping;
                                        if (5 == od) {
                                            var Je = Aa(), Lb = new Ec, Ke = a.typeinfos, se = Number(Ke.fov),
                                                xd = ("" + Ke.align).split("|"), yd = Number(xd[0]), zd = Number(xd[1]),
                                                Ad = Number(xd[2]), hb = ("" + Ke.lenscp).split("|");
                                            isNaN(se) && (se = 180);
                                            isNaN(zd) && (zd = 0);
                                            isNaN(yd) && (yd = 0);
                                            isNaN(Ad) && (Ad = 0);
                                            isNaN(hb[0]) && (hb[0] = 0);
                                            isNaN(hb[1]) && (hb[1] = 0);
                                            isNaN(hb[2]) && (hb[2] = 0);
                                            isNaN(hb[3]) && (hb[3] = 0);
                                            isNaN(hb[4]) && (hb[4] = 0);
                                            hb[5] = 1 - hb[0] - hb[1] - hb[2];
                                            hb[3] /= a.hres;
                                            hb[4] /= a.vres;
                                            var kd = 1, Le = 0, Me = 0, Od = a.vres / a.hres,
                                                Jd = ("" + Ke.crop).split("|");
                                            if (1 == Jd.length) kd = Number(Jd[0]), isNaN(kd) && (kd = 1); else if (4 == Jd.length) {
                                                var Pd = Number(Jd[0]), Rd = Number(Jd[1]), ge = Number(Jd[2]),
                                                    ie = Number(Jd[3]), kd = (Rd - Pd) / 2;
                                                if (isNaN(kd)) kd = 1; else var je = (ge + ie) / 2,
                                                    Le = a.hres / 2 - (Pd + Rd) / 2, Me = a.vres / 2 - je,
                                                    kd = kd / (a.vres / 2), Le = Le / a.vres, Me = Me / a.vres
                                            }
                                            var Td = Aa(), Ud = Aa(), Vd = Aa();
                                            cf(Td, 1, -yd);
                                            cf(Ud, 0, Ad);
                                            cf(Vd, 2, -zd);
                                            vc(Je, Ud);
                                            vc(Je, Vd);
                                            vc(Je, Td);
                                            Ac = 360 * Z;
                                            td = .5 * se * Z;
                                            Nc = (180 - .25 * se) * Z;
                                            for (fc = 0; 50 >= fc; fc++) for (pc = (fc / 50 - .5) * td + Nc, Id = Math.sin(pc), Zc = Math.cos(pc), ec = 0; 100 >= ec; ec++) {
                                                pc = (ec / 100 - .5) * Ac + Na;
                                                $c = Math.sin(pc);
                                                He = Math.cos(pc);
                                                ud = -500 * He * Id;
                                                Fd = 500 * Zc;
                                                Gd = 500 * $c * Id;
                                                var me = Fd, ne = ud, pe = Gd;
                                                Lb.x = Fd;
                                                Lb.y = ud;
                                                Lb.z = Gd;
                                                Sd(Je, Lb);
                                                Fd = Lb.x;
                                                ud = Lb.y;
                                                Gd = Lb.z;
                                                Lb.x = pe;
                                                Lb.y = -me;
                                                Lb.z = ne;
                                                var ae = Math.atan2(Lb.z, Lb.x),
                                                    Pb = Math.atan2(Math.sqrt(Lb.x * Lb.x + Lb.z * Lb.z), Lb.y),
                                                    Pb = 2 / (se * Math.PI / 180) * Pb,
                                                    Pb = kd * (hb[0] * Pb * Pb * Pb * Pb + hb[1] * Pb * Pb * Pb + hb[2] * Pb * Pb + hb[5] * Pb);
                                                Wc = .5 - Le * Od + .5 * Od * Pb * Math.cos(ae) + hb[3];
                                                Hd = .5 - Me + .5 * Pb * Math.sin(ae) + hb[4];
                                                Dd[oc] = Fd;
                                                Dd[oc + 1] = ud;
                                                Dd[oc + 2] = Gd;
                                                oc += 3;
                                                qe[Oc] = Wc;
                                                qe[Oc + 1] = Hd;
                                                Oc += 2
                                            }
                                        } else for (fc = 0; 50 >= fc; fc++) for (Hd = 1 - fc / 50, 4 == od ? (Id = 1, ud = td * (Hd - .5) + Nc) : (pc = (fc / 50 - .5) * td + Nc, Id = Math.sin(pc), Zc = Math.cos(pc), ud = 500 * Zc, $d && (Hd = .5 * Math.sin((Hd - .5) * Na) + .5)), ec = 0; 100 >= ec; ec++) pc = (ec / 100 - .5) * Ac + Na, $c = Math.sin(pc), He = Math.cos(pc), Fd = 500 * He * Id, Gd = 500 * $c * Id, Wc = 1 - ec / 100, Dd[oc] = Fd, Dd[oc + 1] = ud, Dd[oc + 2] = Gd, oc += 3, qe[Oc] = Wc, qe[Oc + 1] = Hd, Oc += 2;
                                        for (fc = yc = 0; 50 > fc; fc++) for (ec = 0; 100 > ec; ec++) re = 101 * fc + ec, Ie = re + 101, Ed[yc] = re, Ed[yc + 1] = re + 1, Ed[yc + 2] = Ie, Ed[yc + 3] = Ie, Ed[yc + 4] = re + 1, Ed[yc + 5] = Ie + 1, yc += 6;
                                        var id = new u(3E4, Dd, qe, Ed), Kd = ab.objS, zc = id;
                                        if (Kd && Kd.tcnt == zc.tcnt) {
                                            zc.vx = Kd.vx;
                                            zc.tx = Kd.tx;
                                            zc.ix = Kd.ix;
                                            var Wd = pa;
                                            Wd.bindBuffer(lb, zc.vx);
                                            Wd.bufferData(lb, zc.vxd, bd);
                                            Wd.bindBuffer(lb, zc.tx);
                                            Wd.bufferData(lb, zc.txd, bd);
                                            Wd.bindBuffer(Wb, zc.ix);
                                            Wd.bufferData(Wb, zc.ixd, bd)
                                        } else Kd && p(Kd), v(zc);
                                        ab.objS = id;
                                        ab.objS_i = Ge
                                    }
                                    var Pc = pa;
                                    Pc.uniformMatrix4fv(Db, !1, Nb.mx);
                                    a.stereo && Pc.uniformMatrix3fv(Eb, !1, 0 == a.stereoformat ? 1 >= Cd ? xc : Hc : 1 >= Cd ? ac : kc);
                                    Pc.bindBuffer(lb, id.vx);
                                    Pc.vertexAttribPointer(mb, 3, nc, !1, 0, 0);
                                    Pc.bindBuffer(lb, id.tx);
                                    Pc.vertexAttribPointer(nb, 2, nc, !1, 0, 0);
                                    Pc.bindBuffer(Wb, id.ix);
                                    var Ld = null;
                                    if (hd && 0 == qa) {
                                        qa++;
                                        var hf = Mc.posterDOM, be = hf && hf.complete,
                                            ce = (4 <= hd.readyState || !0 === Mc.iPhoneMode) && 0 < hd.videoWidth;
                                        be && d.chromemobile && 0 == hd.currentTime && (ce = !1);
                                        if (ce) {
                                            var de = hd.currentTime;
                                            if (Mc.lastCurrentTime != de && (Mc.lastCurrentTime = 4 > hd.readyState ? -1 : de, Ld = hd, d.ie && !d.edge && d.desktop)) {
                                                null == lc && (lc = Ha(2));
                                                if (lc.width != Nb.w || lc.height != Nb.h) lc.width = Nb.w, lc.height = Nb.h;
                                                lc.getContext("2d").drawImage(hd, 0, 0, Nb.w, Nb.h);
                                                Ld = lc
                                            }
                                        } else be && (Ld = hf)
                                    } else a.mjpegimage && (Qa = !0, null == a.mjpegdata ? 0 == a.hasmoved && (Ld = a.mjpegimage) : oa - a.mjpegdata.lastupdate > a.mjpegdata.delay && (a.mjpegdata.lastupdate = oa, Ld = a.mjpegimage));
                                    Pc.activeTexture(dd);
                                    Pc.bindTexture(ka, Sc);
                                    if (Ld) {
                                        var Ce = Ld, jf = Mc, he = !0;
                                        d.ios && 10 <= d.iosversion && pa.pixelStorei(pa.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0);
                                        try {
                                            pa.texImage2D(ka, 0, dc, dc, cd, Ce)
                                        } catch (te) {
                                            he = !1, te = "" + te, jf && jf.error != te && (jf.error = te, wa(3, te))
                                        }
                                        he && (Nb.texvalid = !0)
                                    }
                                    Nb.texvalid && (Pc.drawElements(ic, id.tcnt, Yb, 0), kb++, ke && nd(id, .25))
                                }
                            }
                        }
                    }
                    if (Ca) {
                        var Ra = pa, ue = Ga, Ne = q.webVR, kf = Ne && Ne.enabled, lf = kf ? Ne.getcursor() : null,
                            qc = a.panoview, De = qc.h + Number(a.image.viewoffset), Ee = qc.v, Fe = qc.r,
                            Xe = qc.z / (kf ? 2E3 : Ea) * 2, mf = qc.zf, Ye = Math.min(qc.zf / 200, 1),
                            Ze = 1 + mf / 1E3, nf = ed;
                        ee(nf, 0, -qc.h + 90 - Number(a.image.viewoffset), qc.v, !1);
                        var rf = wb.getArray(), $e = rf.length, Oe, ya, Pa, Xd, ve = 2 > b, of = null;
                        if (0 < b) {
                            var df = kf ? Ne.eyetranslt(b) : 0;
                            bf(we, -df, 0, 0);
                            Qd(Lc, vd);
                            vc(Lc, we);
                            bf(we, -r.tz, r.ty, -r.tx);
                            af(Lc, we);
                            of = Lc
                        }
                        Ra.uniformMatrix4fv(Gb, !1, wc);
                        var Md = !1;
                        Ra.bindBuffer(lb, ue.vx);
                        Ra.vertexAttribPointer(mb, 3, nc, !1, 0, 0);
                        Ra.bindBuffer(lb, ue.tx);
                        Ra.vertexAttribPointer(nb, 2, nc, !1, 0, 0);
                        Ra.bindBuffer(Wb, ue.ix);
                        for (Oe = 0; Oe < $e; Oe++) if ((ya = rf[Oe]) && ya._ready && (ve && 0 != ya.haschanged_flags && ya.processUpdates(), ya.loaded && (ya.keep || !a.suspended) && (Pa = ya.DATA, Pa.visible))) if (Pa.webGL) {
                            var Qc = ya.GL;
                            Qc || (Qc = ya.GL = new ra);
                            var sf = !0, Yd = Pa.depth, Mb = 1;
                            isNaN(Yd) && (Yd = 1E3, sf = !1);
                            ya === lf && (Yd = lf.hit_depth, Mb *= Yd / 1E3);
                            var gc = ya.getparsed(), Nd = gc.flags;
                            if (ve) {
                                var tf = Pa.scale, Mb = Mb * tf;
                                Pa.scale = 1;
                                ya.renderer_flags & uf && ya.API_calcsize();
                                Pa.scale = tf;
                                Qc.state = 1;
                                ya.renderer_flags = 0;
                                var ld = Pa.flying, Pe = (1 - ld) * Pa.ath, Qe = (1 - ld) * Pa.atv,
                                    Re = (1 - ld) * Pa.rotate;
                                0 < ld && (Pe += ld * md(De, Pa.ath), Qe += ld * md(Ee, Pa.atv), Re += ld * md(Fe, Pa.rotate));
                                var Se = 0 == Pa.distorted && 0 == Pa.zoom;
                                1 != ya.scaleflying || Se || (Mb = Mb * (1 - ld) + Mb / Xe * ld * Ze);
                                var vf = ya.getrenderer(), xe = vf.w, ye = vf.h, hc = [0, 0, 0, 0];
                                ya._istextfield && (hc = ya._tf_extends);
                                var Te = 2 * (xe + hc[0] + hc[1]) / 1E3, Ue = 2 * (ye + hc[2] + hc[3]) / 1E3;
                                Se && (Te *= ba, Ue *= ba);
                                U(Pa.distorted ? null : nf, Nd, ub, Te * Mb, Ue * Mb, Pa.mx_RR, 2 * (Nd & 64 ? gc.ox * xe : gc.ox), 2 * (Nd & 128 ? gc.oy * ye : gc.oy), Yd, -Re, -Pe + 90, Qe, -ya.tz, ya.ty, ya.tx, (-(gc.ex - .5) * xe * 2 + hc[1] - hc[0]) * Mb, (-(gc.ey - .5) * ye * 2 + hc[3] - hc[2]) * Mb);
                                var ze = 0;
                                if (Se || 0 == Pa.distorted) if (ze = (ub[8] + ub[12]) * vd[2] + (ub[9] + ub[13]) * vd[6] + (ub[10] + ub[14]) * vd[10] + (ub[11] + ub[15]) * vd[14], ze += qc.zf, ze < qc.zf && 1E3 < qc.zf) {
                                    Qc.state = 0;
                                    continue
                                }
                                if (Se) {
                                    var rc = ze, rc = .5 / qc.z * rc, Mb = Mb * rc;
                                    U(nf, Nd, ub, Te * Mb, Ue * Mb, Pa.mx_RR, 2 * rc * (Nd & 64 ? gc.ox * xe : gc.ox), 2 * rc * (Nd & 128 ? gc.oy * ye : gc.oy), Yd, -Re, -Pe + 90, Qe, -ya.tz, ya.ty, ya.tx, (-(gc.ex - .5) * xe * 2 + hc[1] - hc[0]) * Mb, (-(gc.ey - .5) * ye * 2 + hc[3] - hc[2]) * Mb)
                                }
                                Qd(ya.MX, ub)
                            } else Qd(ub, ya.MX);
                            if (!(.01 > Pa.alpha)) {
                                of && sf ? vc(ub, of) : vc(ub, vd);
                                if (ve) {
                                    if (Nd & 3072) {
                                        if (Md = !0, 0 < mf) {
                                            var wf = ub[8] + ub[12], xf = ub[9] + ub[13], rc = ub[10] + ub[14],
                                                rc = rc * (1E3 / Math.sqrt(wf * wf + xf * xf + rc * rc));
                                            -800 > rc && (Md = !1);
                                            if (rc < (1E3 < mf ? -100 : -950)) {
                                                Qc.state = 0;
                                                continue
                                            }
                                        }
                                    } else Md = !1;
                                    Qc.state = Md ? 2 : 1
                                } else {
                                    if (0 == Qc.state) continue;
                                    Md = 2 == Qc.state
                                }
                                if (Xd = Qc.tex) {
                                    if (Ra.activeTexture(dd), Ra.bindTexture(ka, Xd), 1 != Qc.tex_type) a:{
                                        var Bb = ya, yf = !1;
                                        if (2 == Bb.GL.tex_type) {
                                            ib = !0;
                                            var pf = Bb.posterDOM, wd = Bb.videoDOM, ef = pf && pf.complete,
                                                qf = wd && (4 <= wd.readyState || !0 === Bb.iPhoneMode) && 0 < wd.videoWidth;
                                            wd && d.chromemobile && 0 == wd.currentTime && (qf = !1);
                                            var Ve = qf ? wd : ef ? pf : null;
                                            if (Ve !== Bb.GL.tex_src) {
                                                if (null == wd) {
                                                    T(Bb);
                                                    Bb.lastCurrentTime = -1;
                                                    Xd = null;
                                                    break a
                                                }
                                                Ve && (Bb.GL.tex_src = Ve, Bb.lastCurrentTime = -1)
                                            }
                                            if (qf) {
                                                var zf = wd.currentTime;
                                                zf !== Bb.lastCurrentTime && (yf = !0, Bb.lastCurrentTime = zf)
                                            }
                                            yf && R(Bb, dc, Ve)
                                        } else 3 == Bb.GL.tex_type && Bb.renderToCanvasUpdateCheck() && (Bb.GL.tex_src = Bb.renderToCanvas(), null != Bb.GL.tex_src && R(Bb, Xb, Bb.GL.tex_src));
                                        Xd = Bb.GL.tex
                                    }
                                } else Xd = I(ya);
                                if (null != Xd) {
                                    Ra.uniformMatrix4fv(Db, !1, ub);
                                    var Rc = Qb, Zd = Pa.crop;
                                    ya.pressed && Pa.ondowncrop ? Zd = Pa.ondowncrop : ya.hovering && Pa.onovercrop && (Zd = Pa.onovercrop);
                                    if (Zd && ya.loader) if (Zd != ya.C_crop) {
                                        ya.C_crop = Zd;
                                        var We = ("" + Zd).split("|"), Af = ya.loader.naturalWidth,
                                            Bf = ya.loader.naturalHeight, Rc = [1, 0, 0, 0, 1, 0, 0, 0, 0];
                                        Rc[0] = (1 * We[2] - 1) / Af;
                                        Rc[2] = (1 * We[0] + .5) / Af;
                                        Rc[4] = (1 * We[3] - 1) / Bf;
                                        Rc[5] = (1 * We[1] + .5) / Bf;
                                        ya.C_crop_matrix = Rc
                                    } else Rc = ya.C_crop_matrix; else switch (Pa.stereo) {
                                        case "SBS":
                                            Rc = [.5, 0, 2 > b ? 0 : .5, 0, 1, 0, 0, 0, 0];
                                            break;
                                        case "TB":
                                            Rc = [1, 0, 0, 0, .5, 2 > b ? 0 : .5, 0, 0, 0]
                                    }
                                    Ra.uniformMatrix3fv(Eb, !1, Rc);
                                    Ra.uniform1f(vb, Pa.alpha);
                                    0 == Pa.distorted && Ra.uniform1f(zb, 0);
                                    Md && Ra.disable(Ra.CULL_FACE);
                                    var Cf = !1;
                                    "add" == ya.blendmode && (Cf = !0, Ra.blendFunc(Ra.SRC_ALPHA, Ra.ONE));
                                    Ra.drawElements(ic, ue.tcnt, Yb, 0);
                                    kb++;
                                    Cf && (Ja ? Ra.blendFuncSeparate(Ra.SRC_ALPHA, Ra.ONE_MINUS_SRC_ALPHA, Ra.ONE, Ra.ONE) : Ra.blendFunc(Ra.SRC_ALPHA, Ra.ONE_MINUS_SRC_ALPHA));
                                    Md && Ra.enable(Ra.CULL_FACE);
                                    le && nd(ue, 1);
                                    0 == Pa.distorted && Ra.uniform1f(zb, Ye)
                                }
                            }
                        } else ve && 0 < b && ya.sprite && "none" != ya.sprite.style.display && (ya.sprite.style.display = "none");
                        ve && (lf || 1 == eb.mouse || d.ie) && ha.hittesthotspots(null)
                    }
                }

                function ra() {
                    this.state = 0;
                    this.tex_uid = null;
                    this.tex_type = 0;
                    this.destroy = this.tex = this.tex_src = null
                }

                function k(a, b) {
                    this.uid = a;
                    this.cnt = 1;
                    this.tex = b
                }

                function I(a) {
                    var b = 0, c = null, e = a.loader, f = Xb, h = 0, g = 0;
                    if (a.jsplugin) {
                        var c = a.getfullpath(), l = a.posterDOM, m = a.videoDOM;
                        l || m ? (ib = !0, b = 2, f = dc, l && m && d.chromemobile && 0 == m.currentTime && (m = null), m && (2 <= m.readyState || !0 === a.iPhoneMode) && 0 < m.videoWidth ? (e = m, h = m.videoWidth, g = m.videoHeight) : l && l.complete ? (e = l, h = l.naturalWidth, g = l.naturalHeight) : (e = null, a.requestUpdate())) : a._istextfield && (e = null, b = 3, l = a.renderToCanvas()) && (e = l, c = a._tf_id, h = l.width, g = l.height)
                    } else e && (c = e.src, h = e.naturalWidth, g = e.naturalHeight, !c || 1 > h || 1 > g ? e = null : b = 1);
                    if (!e) return null;
                    l = pa;
                    m = null;
                    if (m = Ac[c]) m.cnt++, m = m.tex; else {
                        l.activeTexture(dd);
                        m = l.createTexture();
                        l.bindTexture(ka, m);
                        l.texParameteri(ka, l.TEXTURE_WRAP_T, l.CLAMP_TO_EDGE);
                        l.texParameteri(ka, l.TEXTURE_WRAP_S, l.CLAMP_TO_EDGE);
                        l.texParameteri(ka, l.TEXTURE_MAG_FILTER, Ob);
                        var n = !1;
                        1 == b && a.DATA.mipmapping && 3 == (M(h) << 1 | M(g)) && (n = !0);
                        a.DATA.premultiplyalpha && pa.pixelStorei(pa.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0);
                        l.texParameteri(ka, l.TEXTURE_MIN_FILTER, n ? l.LINEAR_MIPMAP_LINEAR : Ob);
                        2 == b && d.ios && 10 <= d.iosversion && pa.pixelStorei(pa.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0);
                        try {
                            R(a, f, e), n && l.generateMipmap(ka), Ac[c] = new k(c, m)
                        } catch (I) {
                            wa(3, I)
                        }
                    }
                    a.GL.tex = m;
                    a.GL.tex_uid = c;
                    a.GL.tex_type = b;
                    a.GL.tex_src = e;
                    a.GL.destroy || (a.GL.destroy = function () {
                        T(a)
                    });
                    return m
                }

                function R(a, b, c) {
                    if (d.ie && !d.edge && "video" == c.localName) {
                        var k = c.videoWidth, e = c.videoHeight, f = a.DATA.tmpIECanvas;
                        null == f && (f = a.DATA.tmpIECanvas = Ha(2));
                        if (f.width != k || f.height != e) f.width = k, f.height = e;
                        f.getContext("2d").drawImage(c, 0, 0);
                        c = f
                    }
                    pa.texImage2D(ka, 0, b, b, cd, c)
                }

                function T(a) {
                    if (a.GL) {
                        a.DATA.tmpIECanvas && (a.DATA.tmpIECanvas.width = a.DATA.tmpIECanvas.height = 1, a.DATA.tmpIECanvas = null);
                        var b = a.GL.tex_uid, c = Ac[b];
                        c && 0 == --c.cnt && (pa.deleteTexture(c.tex), c.tex = null, Ac[b] = null, delete Ac[b]);
                        a.GL.tex = null;
                        a.GL.tex_uid = null;
                        a.GL.tex_type = 0;
                        a.GL.tex_src = null;
                        a.GL.destroy = null;
                        a.GL = null
                    }
                }

                function U(a, b, c, d, k, e, f, h, g, l, m, n, I, p, q, R, t) {
                    var r = we;
                    Ae(c, d, 0, 0, 0, 0, k, 0, 0, 0, 0, 1, 0, R, t, 0, 1);
                    a ? (od(c, f, h, 0), d = -l * Z, b = Math.cos(d), d = Math.sin(d), k = c[0], e = c[1], c[0] = k * b - e * d, c[1] = k * d + e * b, k = c[4], e = c[5], c[4] = k * b - e * d, c[5] = k * d + e * b, k = c[8], e = c[9], c[8] = k * b - e * d, c[9] = k * d + e * b, k = c[12], e = c[13], c[12] = k * b - e * d, c[13] = k * d + e * b, Rd(c, a), m = (m + 90) * Z, n *= Z, I += g * Math.cos(n) * Math.cos(m), q += g * Math.cos(n) * Math.sin(m), p += g * Math.sin(n), od(c, I, p, q)) : (b & 1024 && Rd(c, e), od(c, f, h, g), ee(r, l, m, n, !1), Rd(c, r), b & 2048 && od(c, I, p, q))
                }

                var ha = Za, Ka = 0, yb = !1, Zb = 0, Vc = 0, ea = !1, Bd = !1, fa = 0, ia = 0, ib = !1, pb = 0, qa = 0,
                    kb = 0, Oa = 0, Vb = 0, ad = 0, ja = 0, ta = 16.666, Ma = {}, tb = [], fb = 0, za = 52428800,
                    sb = !1, lc = null, Ca = !1, Da = !1, sa = null, pa = null, ab = null, va = 0, Ga = null, xa = null,
                    rb = null, Ja = !1, La = 1, Wa = !1, ua = null, jb = null;
                b = a = null;
                var bb = [], Fa = null, Xa = null, cb = !1, Ia = null, $a = null, Va = !1, db = [], mb, nb, zb, Hb, vb,
                    Gb, Db, Eb, Qb = [1, 0, 0, 0, 1, 0, 0, 0, 0], ac = [1, 0, 0, 0, .5, 0, 0, 0, 0],
                    kc = [1, 0, 0, 0, .5, .5, 0, 0, 0], xc = [.5, 0, 0, 0, 1, 0, 0, 0, 0],
                    Hc = [.5, 0, .5, 0, 1, 0, 0, 0, 0], ka, Ab, gb, dd, lb, Wb, Xb, dc, cd, Yb, nc, ic, bd, Ob,
                    tc = [1, 3, 0, 2, 4, 5, 6],
                    uc = "rotateY(90deg) ;;rotateY(-90deg) ;rotateY(180deg) ;rotateX(-90deg) ;rotateX(90deg) ;".split(";"),
                    Tc = "", Fc = "", $b = null;
                ha.requiereredraw = !1;
                ha.isloading = !1;
                ha.setup = function (a) {
                    var b, c = null;
                    if (2 == a) {
                        var k = {};
                        if (0 <= J(bc.so.html5).indexOf(_[219]) || d.mac && d.firefox) k.preserveDrawingBuffer = !0;
                        if (d.mobile || d.ios) k.antialias = !1;
                        k.depth = !1;
                        k.stencil = !1;
                        var f = bc.so.webglsettings;
                        f && (!0 === f.preserveDrawingBuffer && (k.preserveDrawingBuffer = !0), !0 === f.depth && (k.depth = !0), !0 === f.stencil && (k.stencil = !0));
                        f = J(bc.so.wmode);
                        _[12] == f || _[158] == f ? (Ja = !0, k.alpha = !0, k.premultipliedAlpha = !0) : k.alpha = !1;
                        try {
                            for (sa = Ha(2), sa.style.position = _[0], sa.style.left = 0, b = sa.style.top = 0; 4 > b && !(c = sa.getContext([_[63], _[105], _[141], _[140]][b], k)); b++) ;
                        } catch (g) {
                        }
                        sa && c && (pa = c, ab = {}, ka = c.TEXTURE_2D, Ab = c.COLOR_BUFFER_BIT | c.DEPTH_BUFFER_BIT | c.STENCIL_BUFFER_BIT, gb = c.FRAMEBUFFER, dd = c.TEXTURE0, lb = c.ARRAY_BUFFER, Wb = c.ELEMENT_ARRAY_BUFFER, Xb = c.RGBA, dc = c.RGB, cd = c.UNSIGNED_BYTE, Yb = c.UNSIGNED_SHORT, nc = c.FLOAT, ic = c.TRIANGLES, bd = c.STATIC_DRAW, Ob = c.LINEAR, A() && (Ja ? c.clearColor(0, 0, 0, 0) : w(1), c.disable(c.DEPTH_TEST), c.depthFunc(c.NEVER), c.enable(c.BLEND), c.blendFunc(c.SRC_ALPHA, c.ONE_MINUS_SRC_ALPHA), c.enable(c.CULL_FACE), c.cullFace(c.FRONT), va = c.getParameter(c.MAX_TEXTURE_SIZE), !d.desktop && 4096 < va && (va = 4096), 2048 >= va && d.firefox && !d.mac && !d.android && (d.css3d = !1), Y.panolayer.appendChild(sa), ha.infoString = _[495], q.webGL = {
                            canvas: sa,
                            context: c,
                            ppShaderArray: db,
                            createShader: h,
                            createPostProcessingShader: x,
                            deleteShader: m,
                            useShader: E,
                            restoreProgram: O,
                            ppshaders: db,
                            createppshader: x,
                            useProgram: E
                        }, Ca = !0));
                        0 == Ca && (ab = pa = sa = null, a = 1)
                    }
                    1 == a && (ha.infoString = _[491], d.webgl = !1);
                    Ka = d.browser.css.tileoverlap | 0;
                    if (6 < d.iosversion || d.mac && "7" <= d.safariversion) yb = !0;
                    d.multiressupport = d.androidstock && 0 == d.webgl ? !1 : !0;
                    (a = d.webgl) && d.android && d.androidstock && (a = !1);
                    9 <= d.iosversion && document.addEventListener(_[30], e, !1);
                    d.panovideosupport = a;
                    d.buildList()
                };
                ha.getMaxTexSize = function () {
                    return va
                };
                ha.reset = function () {
                    pb = 0
                };
                var Jb = {}, Fb = null, mc = null;
                ha.unload = function () {
                    var c;
                    q.webGL && (q.webGL.canvas = null, q.webGL.context = null, q.webGL = null);
                    var d = pa;
                    if (d && ab) {
                        d.bindTexture(ka, null);
                        d.bindBuffer(lb, null);
                        d.bindBuffer(Wb, null);
                        d.bindFramebuffer(gb, null);
                        Va = !1;
                        m(xa);
                        m(rb);
                        rb = xa = null;
                        ab.obj0 && (p(ab.obj0), p(ab.obj));
                        ab.objS && p(ab.objS);
                        ab = null;
                        for (c = 0; 6 > c; c++) bb[c] && bb[c].prg && (d.deleteProgram(bb[c].prg), bb[c].prg = null, bb[c] = null);
                        d.deleteBuffer(a);
                        d.deleteBuffer(b);
                        var k = [ua, jb, Ia, $a];
                        for (c = 0; c < k.length; c++) k[c] && (k[c].fb && d.deleteFramebuffer(k[c].fb), k[c].tex && d.deleteTexture(k[c].tex), k[c] = null)
                    }
                    Ca = !1;
                    pa = sa = null
                };
                ha.size = function (a, b) {
                    if (Ca) {
                        var c = (d.android && 0 == d.androidstock || d.blackberry || d.silk || d.mac) && 0 == d.hidpi ? d.pixelratio : 1;
                        if (d.desktop || d.ios || d.ie) c = W.devicePixelRatio;
                        isNaN(c) && (c = 1);
                        if (!d.desktop && 1 != c) a:{
                            var k = c,
                                c = [320, 360, 400, 480, 640, 720, 768, 800, 1024, 1080, 1280, 1366, 1440, 1920, 2560],
                                e, f, h = a * k;
                            f = c.length;
                            for (e = 0; e < f; e++) if (2 > Math.abs(c[e] - h)) {
                                c = c[e] / a;
                                break a
                            }
                            c = k
                        }
                        c *= 1;
                        k = a * c + .25 | 0;
                        c = b * c + .25 | 0;
                        if (e = q.webVR) if (e = e.getsize(k, c)) k = e.w, c = e.h;
                        k *= la.framebufferscale;
                        c *= la.framebufferscale;
                        sa.style.width = a + "px";
                        sa.style.height = b + "px";
                        if (sa.width != k || sa.height != c || 0 == Da) {
                            Da = !0;
                            sa.width = k;
                            sa.height = c;
                            pa.bindFramebuffer(gb, null);
                            Va = !1;
                            e = pa.drawingBufferWidth | 0;
                            f = pa.drawingBufferHeight | 0;
                            d.desktop && d.chrome && 300 == e && 150 == f && (e = f = 0);
                            if (0 >= e || 0 >= f) e = k, f = c;
                            pa.viewport(0, 0, e, f);
                            d.gl = {width: e, height: f}
                        }
                    } else d.gl = {width: 0, height: 0}
                };
                ha.fps = function () {
                    var a = Sa();
                    if (0 < ja) {
                        var b = a - ja;
                        if (5 < b && 500 > b) {
                            var c = Math.min(b / 160, .75);
                            ta = ta * (1 - c) + b * c;
                            0 < ta && (Vd = 1E3 / ta, la.currentfps = Vd)
                        }
                        0 == Oa && (la.r_ft = .9 * la.r_ft + .1 * b)
                    }
                    ja = a
                };
                var Sc = !1;
                ha.startFrame = function () {
                    ib = !1;
                    kb = qa = 0;
                    Sc = !0;
                    za = q.memory.maxmem << 20;
                    if (Ca) {
                        var a = pa;
                        (cb = 0 < db.length) ? (a.clear(Ab), Ia = t(Ia), 0 == Va && (Va = !0, a.bindFramebuffer(gb, Ia.fb)), a.clear(Ab), kb = 0) : (Va && (Va = !1, a.bindFramebuffer(gb, null)), a.clear(Ab))
                    }
                };
                ha.finishFrame = function () {
                    pb++;
                    Oa = 0;
                    if (Ca) {
                        var a = pa;
                        if (cb) {
                            var b, c = db.length, k = Ia, e = null;
                            1 < c && (e = $a = t($a));
                            a.disable(a.BLEND);
                            for (b = 0; b < c; b++) k.drawcalls = kb, kb = 0, e ? (a.bindFramebuffer(gb, e.fb), Va = !0) : (a.bindFramebuffer(gb, null), Va = !1), a.clear(Ab), C(k, db[b], 1), k = e, e = b + 1 == c - 1 ? null : b & 1 ? $a : Ia;
                            a.enable(a.BLEND);
                            a.bindFramebuffer(gb, Ia.fb);
                            Va = !0
                        } else Va && (Va = !1, a.bindFramebuffer(gb, null));
                        d.androidstock && a.finish()
                    }
                    q.memory.usage = fb >> 20;
                    Sc = !1
                };
                ha.createPano = function (a) {
                    return new B(a)
                };
                var Bc = 0, Cc = 0, Tb = 0, vd = Aa(), Cb = Aa(), Ic = Aa(), Uc = Aa(), Jc = Aa(), qd = Aa(), wc = Aa(),
                    Kc = Aa(), Lc = Aa(), ed = Aa(), Rb = Aa();
                ha.setblendmode = function (a) {
                    if (Ca) {
                        var b = pa;
                        Fa = null;
                        var c = !0, k = null, e = null, f = 1, h = aa.parseFunction(a);
                        if (h) switch (h[0].toUpperCase()) {
                            case "BLEND":
                                (k = h[2]) || (k = _[389]);
                                Fa = bb[0];
                                break;
                            case _[411]:
                                e = Number(h[2]);
                                f = Number(h[3]);
                                (k = h[4]) || (k = _[386]);
                                isNaN(e) && (e = 16777215);
                                isNaN(f) && (f = 2);
                                Fa = bb[1];
                                E(Fa.prg);
                                break;
                            case _[417]:
                                e = Number(h[2]);
                                (k = h[3]) || (k = _[382]);
                                isNaN(e) && (e = 0);
                                Fa = bb[2];
                                E(Fa.prg);
                                break;
                            case _[429]:
                                var c = !1, g = Number(h[2]);
                                a = Number(h[3]);
                                k = h[4];
                                isNaN(g) && (g = 0);
                                isNaN(a) && (a = .2);
                                a = 0 > a ? 0 : 1 < a ? 1 : a;
                                k || (k = _[58]);
                                var l = h = 0, m = Math.cos(g * Z), n = Math.sin(g * Z);
                                0 > n && (l = 1, g += 90);
                                0 > m && (h = 1, g += 0 > n ? 90 : -90);
                                g = Math.sqrt(2) * Math.cos((45 - g) * Z);
                                m *= g;
                                n *= g;
                                g = 1 / (m * m + n * n);
                                Fa = bb[4];
                                E(Fa.prg);
                                b.uniform3f(Fa.fp, m * g, n * g, (-h * m - l * n) * g);
                                b.uniform1f(Fa.bl, .5 * a);
                                break;
                            case _[475]:
                                c = !1;
                                a = Number(h[2]);
                                (k = h[3]) || (k = _[325]);
                                isNaN(a) && (a = 2);
                                Fa = bb[3];
                                E(Fa.prg);
                                b.uniform2f(Fa.ct, .5, .5);
                                b.uniform1f(Fa.zf, a);
                                break;
                            case _[473]:
                                c = !1, a = Number(h[2]), g = Number(h[3]), l = Number(h[4]), (k = h[5]) || (k = _[58]), isNaN(a) && (a = .2), isNaN(g) && (g = .2), isNaN(l) && (l = 0), a = -1 > a ? -1 : 1 < a ? 1 : a, g = 0 > g ? 0 : 1 < g ? 1 : g, l = 0 > l ? 0 : 1 < l ? 1 : l, h = d.gl.width / d.gl.height, m = 1, isNaN(h) && (h = 1), h *= h, 0 > a ? h *= 1 + a : m *= 1 - a, Fa = bb[5], E(Fa.prg), b.uniform2f(Fa.ap, h, m), b.uniform1f(Fa.bl, .5 * g), b.uniform1f(Fa.zf, l)
                        }
                        if (null == Fa || 0 == c && la.stereo) Fa = bb[0], e = null;
                        null !== e && b.uniform3f(Fa.cc, f * (e >> 16 & 255) / 255, f * (e >> 8 & 255) / 255, f * (e & 255) / 255);
                        null == k && (k = _[58]);
                        Xa = pd.getTweenfu(k);
                        Wa = 0 == d.realDesktop && 1 < d.pixelratio || 33 < la.r_ft
                    }
                };
                ha.snapshot = function (a, b) {
                    if (Ca) {
                        var c = pa;
                        if (!d.gl) return null;
                        if (a) {
                            var k = ua;
                            ua = jb;
                            jb = k
                        }
                        Wa && (La = .707);
                        jb = t(jb);
                        c.bindFramebuffer(gb, jb.fb);
                        Va = !0;
                        kb = 0;
                        Ja && w(1);
                        c.clear(Ab);
                        k = 0;
                        b && (k = Sc, Sc = !0, ha.renderpano(b, 1), Sc = k, k = 1 - b.alpha);
                        a && C(ua, Fa, b ? 1 - b.alpha : a.alpha) && kb++;
                        jb.drawcalls = kb;
                        cb ? (c.bindFramebuffer(gb, Ia.fb), Va = !0) : (c.bindFramebuffer(gb, null), Va = !1);
                        La = 1;
                        null == a && (a = {});
                        a.alpha = k;
                        return a
                    }
                    return null
                };
                ha.rendersnapshot = function (a, b) {
                    if (0 == Sc) return a;
                    if (null == pa || null == jb || b && 1 <= b.alpha) return null;
                    var c = a.alpha = b ? 1 - b.alpha : a.alpha;
                    C(jb, Fa, c);
                    return a
                };
                ha.renderpano = function (a, b) {
                    if (0 != Sc) {
                        a.frame = pb;
                        var c = !1, k = pa;
                        if (2 == b && k) {
                            if (a.stopped && ua && ua.done && ua.pano == a.id) {
                                ua.have = !0;
                                return
                            }
                            Wa && (La = .707);
                            if (ua = t(ua)) c = !0, ua.have = !0, ua.pano = a.id, ua.done = !1, ua.alpha = a.alpha, ua.drawcalls = 0, k.bindFramebuffer(gb, ua.fb), Va = !0, w(1), k.clear(Ab)
                        }
                        var e = a.panoview = a.stopped && a.panoview ? a.panoview : r.getState(a.panoview),
                            f = Number(e.h) + Number(a.image.viewoffset), h = e.v, g = e.r, l = e.z,
                            m = a.hasmoved = f != Bc || h != Cc || l != Tb;
                        l != Tb && (sb = !1);
                        var n = Sa();
                        if (m) {
                            if ("auto" == J(la.loadwhilemoving)) {
                                var I = n - sc;
                                200 < n - Vc && 0 == H.down && 200 < I && (ea = !0)
                            }
                            Zb = n
                        } else 10 > n - Zb && (a.hasmoved = m = !0);
                        ib = m;
                        Bc = f;
                        Cc = h;
                        Tb = l;
                        m = vd;
                        l = Cb;
                        de(m, f, h, g);
                        Qd(Uc, m);
                        Fc = "";
                        $b = null;
                        a.image && a.image.prealign && (g = ("" + a.image.prealign).split("|"), 3 == g.length && (f = Number(g[0]), h = -Number(g[1]), g = -Number(g[2]), isNaN(f) || isNaN(h) || isNaN(g) || (Fc = _[146] + h.toFixed(4) + _[321] + g.toFixed(4) + _[323] + f.toFixed(4) + "deg) ", $b = Ic, Be(l, m), m = Uc, l = Jc, Qd(m, vd), ee($b, f, h, g, !1), af(m, $b))));
                        Be(l, m);
                        f = (d.android && 0 == d.androidstock || d.blackberry || d.ios) && 0 == d.hidpi ? d.pixelratio : 1;
                        d.ios && d.retina && (f = 1.5);
                        1.4 < f && (f = 1.4);
                        g = 1 / (e.z / (.5 * Ea));
                        h = e.zf;
                        200 < h && (g = Math.atan(g), h = Math.min(g + Math.asin(h / 1E3 * Math.sin(g)), 1), isNaN(h) && (h = 1), g = Math.tan(h));
                        .5 > g && (f = 1);
                        d.desktop && (f = d.pixelratio);
                        f = .25 * Na * (Ua * f / Math.sin(Math.atan(Ua / Ea * g)) + Ea * f / g);
                        0 == a.type ? f *= 2 / Na : 1 == a.type && (h = a.levels, f *= 2 / Na, f *= Math.tan(.5 * h[h.length - 1].vfov * Z));
                        g = f;
                        f = 0;
                        m = a.levels;
                        h = m.length;
                        n = 1 + (L ? parseFloat(L.multiresthreshold) : 0);
                        isNaN(n) && (n = 1);
                        .1 > n && (n = .1);
                        g = Math.ceil(g * n);
                        if (0 < h) {
                            for (; !(0 == m[f].preview && m[f].h >= g);) if (f++, f >= h) {
                                f = h - 1;
                                break
                            }
                            sb && 0 < f && --f;
                            g = q.lockmultireslevel;
                            _[524] == J(g) && (q.lockmultireslevel = g = "" + f);
                            g |= 0;
                            0 <= g && g < h && (f = g);
                            a.currentlevel != f && (a.currentlevel = f)
                        }
                        1 == b && (f = a.currentlevel, q.multireslevel = 0 < f && a.levels[0].preview ? f - 1 : f);
                        a:{
                            m = l;
                            l = e.zf;
                            g = 1 / (e.z / (.5 * Yc));
                            if (0 < l && (f = Math.atan(g), g = Math.tan(f + Math.asin(l / 1E3 * Math.sin(f))), isNaN(g) || 0 >= g)) {
                                e.vr = Xc;
                                break a
                            }
                            n = g * Ea / Ua;
                            I = e.yf / Ea * 2 * n;
                            l = [g, n + I, -1];
                            f = [-g, n + I, -1];
                            h = [-g, -n + I, -1];
                            g = [g, -n + I, -1];
                            fe(m, l);
                            fe(m, f);
                            fe(m, h);
                            fe(m, g);
                            for (var p, n = 1, R = null, I = Array(40), u = [null, null, null, null, null, null], m = 0; 6 > m; m++) {
                                var x = [], T = [];
                                x.push(K(l, Sb[m]));
                                x.push(K(f, Sb[m]));
                                x.push(K(h, Sb[m]));
                                x.push(K(g, Sb[m]));
                                var U = 0, v = 0, E = 0, B = 0;
                                for (p = v = 0; 4 > p; p++) R = x[p], v = R.x, E = R.y, B = R.z / 2, v = 1 * (v > -B) + 8 * (v < B) + 64 * (E < B) + 512 * (E > -B) + 4096 * (-.1 > -B), I[p] = v, U += v;
                                p = 0 != (U & 18724);
                                if (0 == U) for (p = 0; 4 > p; p++) R = x[p], T.push(R.x / R.z), T.push(R.y / R.z); else if (p) continue; else {
                                    for (var U = 4, R = I, y = 0, z = [], F = [], A, ha = 0, ha = 0; 5 > ha; ha++) {
                                        var D = 1 << 3 * ha;
                                        for (p = 0; p < U; p++) {
                                            var E = (p + U - 1) % U, v = x[E], G = x[p], E = R[E], ra = R[p], N = 0;
                                            0 == (ra & D) ? (N |= 2, E & D && (N |= 1)) : 0 == (E & D) && (N |= 1);
                                            N & 1 && (4 == ha ? n = (.1 - v.z / 2) / (G.z - v.z) / 2 : 3 == ha ? n = (-v.y - v.z / 2) / (G.y - v.y + (G.z - v.z) / 2) : 2 == ha ? n = (v.z / 2 - v.y) / (G.y - v.y - (G.z - v.z) / 2) : 1 == ha ? n = (v.z / 2 - v.x) / (G.x - v.x - (G.z - v.z) / 2) : 0 == ha && (n = (-v.z / 2 - v.x) / (G.x - v.x + (G.z - v.z) / 2)), A = new Ec, A.x = v.x + (G.x - v.x) * n, A.y = v.y + (G.y - v.y) * n, A.z = v.z + (G.z - v.z) * n, v = A.x, E = A.y, B = A.z / 2, v = 1 * (v > -B) + 8 * (v < B) + 64 * (E < B) + 512 * (E > -B) + 4096 * (-.1 > -B), z.push(A), F.push(v), y++);
                                            N & 2 && (z.push(G), F.push(ra), y++)
                                        }
                                        U = y;
                                        x = z;
                                        R = F;
                                        y = 0;
                                        z = [];
                                        F = []
                                    }
                                    for (p = 0; p < U; p++) R = x[p], T.push(R.x / R.z), T.push(R.y / R.z)
                                }
                                x = U = 9;
                                y = R = -9;
                                z = T.length;
                                if (4 < z) {
                                    for (p = 0; p < z; p++) T[p] += .5;
                                    for (p = 0; p < z; p += 2) T[p + 0] < U && (U = T[p + 0]), T[p + 1] < x && (x = T[p + 1]), T[p + 0] > R && (R = T[p + 0]), T[p + 1] > y && (y = T[p + 1]);
                                    U > R || 0 > U && 0 > R || 1 < U && 1 < R || x > y || 0 > x && 0 > y || 1 < x && 1 < y || (0 > U && (U = 0), 0 > x && (x = 0), 1 < R && (R = 1), 1 < y && (y = 1), u[m] = [U, x, R, y])
                                }
                            }
                            e.vr = u
                        }
                        ab && (Ja ? (k.clearColor(0, 0, 0, 0), k.blendEquationSeparate(k.FUNC_ADD, k.FUNC_ADD), k.blendFuncSeparate(k.SRC_ALPHA, k.ONE_MINUS_SRC_ALPHA, k.ONE, k.ONE)) : k.blendFunc(k.SRC_ALPHA, k.ONE_MINUS_SRC_ALPHA));
                        la.stereo ? (da(a, 1), da(a, 2)) : da(a, 0);
                        e = 0;
                        l = a.levels;
                        f = l.length;
                        q.downloadlockedlevel && 0 < (q.lockmultireslevel | 0) && (e = q.lockmultireslevel | 0, e >= f && (e = f - 1));
                        0 < f && (e = l[e], Wc.progress = e.stereo && la.stereo ? (e.loadedtiles[0] + e.loadedtiles[1]) / (2 * e.totaltiles) : e.loadedtiles[0] / e.totaltiles);
                        c && (cb ? (k.bindFramebuffer(gb, Ia.fb), Va = !0) : (k.bindFramebuffer(gb, null), Va = !1), k.clear(Ab), ua.drawcalls = kb, ua.done = !0, La = 1);
                        1 == b && k && ua && 0 < ua.drawcalls && ua.done && ua.have && (ua.have = !1, C(ua, Fa, 1 - Gc))
                    }
                };
                ha.handleloading = function () {
                    return ib ? 2 : 0
                };
                var Dc = [[0, 180], [0, 90], [0, 0], [0, 270], [-90, 90], [90, 90]], nd = function () {
                        function a(b, c) {
                            var d, k = 8 * (c + 1);
                            d = 4 * (c + 1);
                            var e = new Float32Array(12 * (c + 1)), f = new Float32Array(k), g = new Uint16Array(d), h, l,
                                m, n;
                            b *= 2;
                            for (h = d = k = 0; 4 > h; h++) for (l = 0; l <= c; l++) 0 == h ? (m = l, n = 0) : 1 == h ? (m = c, n = l) : 2 == h ? (m = c - l, n = c) : (m = 0, n = c - l), m /= c, n /= c, f[k] = m, f[k + 1] = n, k += 2, e[d] = b * (m - .5), e[d + 1] = b * (n - .5), e[d + 2] = 0, d += 3;
                            for (l = d = 0; l < 4 * (c + 1); l++) g[d] = l, d += 1;
                            return new u(d, e, f, g)
                        }

                        var b = null, c = null, d = null;
                        return function (k, e) {
                            var f = pa;
                            null == b && (b = f.createTexture(), f.bindTexture(ka, b), f.texParameteri(ka, f.TEXTURE_WRAP_T, f.CLAMP_TO_EDGE), f.texParameteri(ka, f.TEXTURE_WRAP_S, f.CLAMP_TO_EDGE), f.texParameteri(ka, f.TEXTURE_MAG_FILTER, f.NEAREST), f.texParameteri(ka, f.TEXTURE_MIN_FILTER, f.NEAREST), f.texImage2D(ka, 0, f.RGB, 1, 1, 0, f.RGB, cd, new Uint8Array([0, 255, 0])), c = a(500, 1), d = a(500, 19), v(c), v(d), ib = !0);
                            var g = null;
                            if (g = k === ab.obj0 ? c : k === ab.obj ? d : k) f.bindBuffer(lb, g.vx), f.vertexAttribPointer(mb, 3, nc, !1, 0, 0), f.bindBuffer(lb, g.tx), f.vertexAttribPointer(nb, 2, nc, !1, 0, 0), f.bindBuffer(Wb, g.ix), f.uniform1f(vb, e), f.bindTexture(ka, b), f.drawElements(f.LINE_LOOP, g.tcnt, Yb, 0), f.bindBuffer(lb, k.vx), f.vertexAttribPointer(mb, 3, nc, !1, 0, 0), f.bindBuffer(lb, k.tx), f.vertexAttribPointer(nb, 2, nc, !1, 0, 0), f.bindBuffer(Wb, k.ix), f.uniform1f(vb, 1)
                        }
                    }(),
                    Sb = [[-1, 0, 0, 0, 1, 0, 0, 0, 1], [0, 0, 1, 0, 1, 0, 1, 0, 0], [1, 0, 0, 0, 1, 0, 0, 0, -1], [0, 0, -1, 0, 1, 0, -1, 0, 0], [0, 0, 1, -1, 0, 0, 0, 1, 0], [0, 0, 1, 1, 0, 0, 0, -1, 0]],
                    Xc = [[0, 0, 1, 1], [0, 0, 1, 1], [0, 0, 1, 1], [0, 0, 1, 1], [0, 0, 1, 1], [0, 0, 1, 1]], Ac = {},
                    ub = Aa(), we = Aa();
                ha.hittesthotspots = function (a) {
                    if (_[34] == a) {
                        if (Ub) return Ub.process_onup(Ub, !0), Ub = null, !0
                    } else if (_[37] == a && Ub) return Ub.process_onup(Ub, !1), Ub = null, !0;
                    var b = q.webVR, c = b && b.enabled, b = c ? b.getcursor() : null, d = wb.getArray(), k = d.length,
                        e, f = [0, 0, 1], g = !1, h = !1, l = b ? b.depth : 2E3, m = b && b.enabled;
                    if (!c) {
                        m = !0;
                        c = H.x * ba;
                        e = H.y * ba;
                        if (la.stereo) {
                            var f = Ua >> 1, n = f * Number(la.stereooverlap);
                            c < f ? c = c + (f >> 1) - (n >> 1) : (c -= f >> 1, c += n >> 1)
                        }
                        f = r.inverseProject(c, e);
                        f = [-f.x, -f.y, -f.z];
                        if (Ib) {
                            if (n = Ib.hovering) a:{
                                n = Ib;
                                if (ca.elementsFromPoint && (c = ca.elementsFromPoint(c, e))) {
                                    var p = c.length;
                                    for (e = 0; e < p; e++) if (c[e].kobject === n) {
                                        n = !0;
                                        break a
                                    }
                                    n = !1;
                                    break a
                                }
                                n = !0
                            }
                            0 == n && (Ib = null)
                        }
                    }
                    c = f;
                    e = c[0];
                    n = c[1];
                    p = c[2];
                    c[0] = e * Cb[0] + n * Cb[4] + p * Cb[8] + Cb[12];
                    c[1] = e * Cb[1] + n * Cb[5] + p * Cb[9] + Cb[13];
                    c[2] = e * Cb[2] + n * Cb[6] + p * Cb[10] + Cb[14];
                    if (null == Ib) for (--k; 0 <= k; k--) if ((c = d[k]) && c._ready && (0 != c.haschanged_flags && c.processUpdates(), e = c.DATA, e.visible && c !== b && (0 != e.reloading || c.loaded && c.GL && 0 != c.GL.state) && m && e.enabled)) {
                        var I = c.MX, n = 0, p = 1E3, R = f[0], x = f[1], t = f[2], T = p * I[0], u = p * I[1],
                            w = p * I[2], v = p * I[4], U = p * I[5], E = p * I[6], B = I[12] - (T + v) / 2,
                            y = I[13] - (u + U) / 2, I = I[14] - (w + E) / 2, C = x * E - t * U, z = t * v - R * E,
                            A = R * U - x * v, ha = T * C + u * z + w * A;
                        if (-1E-6 > ha || 1E-6 < ha) ha = 1 / ha, p = (B * C + y * z + I * A) * -ha, 0 <= p && 1 >= p && (C = I * u - y * w, z = B * w - I * T, A = y * T - B * u, p = (R * C + x * z + t * A) * ha, 0 <= p && 1 >= p && (n = (v * C + U * z + E * A) * ha));
                        if (1 < n) {
                            null == a && c != ob && (null != ob && (ob.hovering = !1, aa.callaction(ob.onout, ob), b && aa.callaction(b.onout, ob), ob.DATA.onovercrop && (Qa = !0), ob = null), ob = c, c.hovering = !0, e.onovercrop && (Qa = !0), aa.isblocked() || (aa.callaction(c.onover, c), b && aa.callaction(b.onover, c)));
                            g = !0;
                            l = n;
                            _[46] == a && (Ub = c, c.process_ondown(c), c.capture && (h = !0));
                            break
                        }
                    }
                    null == a && (b && (l = Math.max(l, 200) - 100, b.hit_depth = l), 0 == g && null != ob && (ob.DATA.onovercrop && (Qa = !0), ob.hovering = !1, aa.callaction(ob.onout, ob), b && aa.callaction(b.onout, ob), ob = null), ie.update());
                    return g && h
                }
            })();
            var If = function () {
                    function a(a, d, e) {
                        a = J(a).charCodeAt(0);
                        return 118 == a ? e : 104 == a ? d : 100 == a ? Math.sqrt(d * d + e * e) : Math.max(d, e * b.mfovratio)
                    }

                    var b = this;
                    b.haschanged = !1;
                    b.r_rmatrix = Aa();
                    (function () {
                        var a = "hlookat vlookat camroll fov maxpixelzoom fisheye fisheyefovlink architectural tx ty tz".split(" "),
                            d = [_[324], _[214]], e;
                        for (e in a) Ja(b, a[e], 0);
                        for (e in d) Ja(b, d[e], !1);
                        Ja(b, _[544], "VFOV");
                        b.continuousupdates = !1;
                        Ga(b, _[554], function () {
                            return "" + b._pannini
                        }, function (a) {
                            var d = Number(a), d = isNaN(d) ? ma(a) ? 1 : 0 : 0 > d ? 0 : 1 < d ? 1 : d;
                            b._pannini = d;
                            b.haschanged = !0
                        });
                        Ga(b, _[440], function () {
                            return b._fisheye
                        }, function (a) {
                            b.fisheye = a
                        });
                        Ga(b, _[249], function () {
                            return b._fisheyefovlink
                        }, function (a) {
                            b.fisheyefovlink = a
                        });
                        Ga(b, _[362], function () {
                            if ("off" == J(b.limitview)) return 360;
                            var a = b.hlookatmax, d = b.hlookatmin, e = V && V.fovlimits;
                            isNaN(d) && (d = e ? e[0] : -180);
                            isNaN(a) && (a = e ? e[1] : 180);
                            return a - d
                        }, function (a) {
                        });
                        Ga(b, _[370], function () {
                            if ("off" == J(b.limitview)) return 180;
                            var a = b.vlookatmax, d = b.vlookatmin, e = V && V.fovlimits;
                            isNaN(d) && (d = e ? e[2] : -90);
                            isNaN(a) && (a = e ? e[3] : 90);
                            return a - d
                        }, function (a) {
                        })
                    })();
                    b.defaults = function () {
                        b._hlookat = 0;
                        b._vlookat = 0;
                        b._architectural = 0;
                        b._architecturalonlymiddle = !0;
                        b._fov = 90;
                        b._fovtype = d.desktop ? "VFOV" : "MFOV";
                        b._camroll = 0;
                        b.mfovratio = 4 / 3;
                        b._maxpixelzoom = Number.NaN;
                        b._stereographic = !0;
                        b._pannini = 0;
                        b._fisheye = 0;
                        b._fisheyefovlink = .5;
                        b.fovmin = 1;
                        b.fovmax = 179;
                        b.r_zoom = 1;
                        b.r_yoff = 0;
                        b.r_zoff = 0;
                        b.haschanged = !1;
                        b.limitview = "auto";
                        b.hlookatmin = Number.NaN;
                        b.hlookatmax = Number.NaN;
                        b.vlookatmin = Number.NaN;
                        b.vlookatmax = Number.NaN;
                        b._limits = null
                    };
                    b.inverseProject = function (a, d) {
                        var e, h, q, r, w, A, p, u;
                        q = -1E3;
                        w = q / b.r_zoom;
                        e = (a - Ua / 2) * w;
                        h = (d - Ea / 2 - b.r_yoff) * w;
                        w = 1 / Math.sqrt(e * e + h * h + q * q);
                        e *= w;
                        h *= w;
                        q *= w;
                        r = b.r_zoff;
                        0 < r && (A = b._pannini, 0 < A && (w = e * e + q * q, 0 != w && (w = 1 + A * (1 / Math.sqrt(w) - 1), e *= w, h *= w, q *= w)), 0 == b._stereographic && (u = Math.atan(1E3 / r) / Z - 1, (1 > -q ? Math.acos(-q) / Z : 0) > u && (A = -h, p = e, w = A * A + p * p, 0 < w && (w = 1 / Math.sqrt(w), A *= w, p *= w), u *= Z, w = Math.sin(u), e = w * p, h = -w * A, q = -Math.cos(u))), A = r * q, p = A * A - (r * r - 1E6), 0 < p && (w = -A + Math.sqrt(p), e *= w, h *= w, q = q * w - -r, w = 1 / Math.sqrt(e * e + h * h + q * q), e *= w, h *= w, q *= w));
                        r = new Ec;
                        r.x = e;
                        r.y = h;
                        r.z = q;
                        return r
                    };
                    var q = b.fovRemap = function (b, d, e, h, q) {
                        h || (h = Ua);
                        q || (q = Ea);
                        b = Math.tan(b / 360 * Na);
                        d = a(d, h, q);
                        e = a(e, h, q);
                        return b = 360 * Math.atan(b * e / d) / Na
                    }, e = Aa();
                    b.screentosphere = function (a, d) {
                        var m = new Ec;
                        if (la.stereo) {
                            var h = Ua / 2, q = h / 2 * (1 - Number(la.stereooverlap));
                            a = a < h ? a + q : a - q
                        }
                        h = b.inverseProject(a * ba, d * ba);
                        Be(e, b.r_rmatrix);
                        Sd(e, h);
                        h = [Math.atan2(h.x, h.z) / Z + 270, Math.atan2(-h.y, Math.sqrt(h.x * h.x + h.z * h.z)) / Z];
                        180 < h[0] && (h[0] -= 360);
                        m.x = h[0];
                        m.y = h[1];
                        m.z = 0;
                        return m
                    };
                    b.spheretoscreen = function (a, d, e) {
                        var h = new Ec;
                        a = (180 - a) * Z;
                        d *= Z;
                        h.x = 1E3 * Math.cos(d) * Math.cos(a);
                        h.z = 1E3 * Math.cos(d) * Math.sin(a);
                        h.y = 1E3 * Math.sin(d);
                        Sd(b.r_rmatrix, h);
                        d = h.z + b.r_zoff;
                        var q = a = qd;
                        10 <= d && (d = b.r_zoom / d, a = (h.x * d + .5 * Ua) / ba, q = (h.y * d + .5 * Ea) / ba + b.r_yoff, la.stereo && e && ("l" == e ? a -= Ua / 4 * (1 - Number(la.stereooverlap)) : "r" == e && (a += Ua / 4 * (1 - Number(la.stereooverlap)))));
                        h.x = a;
                        h.y = q;
                        return h
                    };
                    b.updateView = function () {
                        var a = b._maxpixelzoom;
                        if (!isNaN(a) && 0 != a) {
                            var e = 1E-6;
                            if (V && V.ready) {
                                var m = V.vres, h = V.vfov;
                                0 == V.type && (m = m * Math.PI * .5);
                                if (50 < m && 0 < h) {
                                    var e = Ua, x = Ea,
                                        a = 360 / Math.PI * Math.atan(Math.tan(2 * Math.atan(1 / (2 / Math.PI * m * a / (h / 180) / (.5 * e)))) / (e / x));
                                    if (isNaN(a) || 1E-4 > a) a = b.fovmax;
                                    90 < a && (a = 90);
                                    e = q(a, "VFOV", b._fovtype)
                                }
                            }
                            b.fovmin = e
                        }
                        var a = b._fov, m = b._hlookat, h = b._vlookat, e = b._camroll, H = d.webgl ? b._fisheye : 0,
                            E = b._fisheyefovlink, A = b._stereographic, x = 0,
                            p = 0 == ea.bouncinglimits || 0 == eb.isBouncing();
                        p && (a < b.fovmin && (a = b.fovmin), a > b.fovmax && (a = b.fovmax));
                        179 < a && (a = 179);
                        if (0 < H) {
                            var u = q(a, b._fovtype, "VFOV");
                            A ? (170 < a && (a = 170), x = 1E3 * H * Math.sin(Math.pow(Math.min(u / 130, 1), 2 * E) * Na * .5)) : (H += Math.pow(Math.min(H, 1), 10) / 10, x = H * Math.sin(Math.pow(u / 180, E) * Na * .5), x *= 3E3 * x)
                        }
                        var v = J(b.limitview), g = V && V.fovlimits, t = 0, C = 0, z = 0, E = Number(b.hlookatmin),
                            u = Number(b.hlookatmax), y = Number(b.vlookatmin), F = Number(b.vlookatmax);
                        "auto" == v && (E = u = y = F = Number.NaN);
                        isNaN(E) && (E = g ? g[0] : -180);
                        isNaN(u) && (u = g ? g[1] : 180);
                        isNaN(y) && (y = g ? g[2] : -90);
                        isNaN(F) && (F = g ? g[3] : 90);
                        "auto" == v && (r.hlookatmin = E, r.hlookatmax = u, r.vlookatmin = y, r.vlookatmax = F, v = "range");
                        F < y && (g = y, y = F, F = g);
                        u < E && (g = E, E = u, u = g);
                        var l = !1, c = !1, D = _[142] != v, B = !0, B = 180, g = u - E, P = F - y;
                        switch (v) {
                            case "off":
                            case _[27]:
                                g = 360;
                                E = -180;
                                u = 180;
                                y = -1E5;
                                F = 1E5;
                                D = !1;
                                break;
                            case _[447]:
                                D = !0;
                            case _[142]:
                                c = !0;
                            case "range":
                                if ((l = 360 > g) || 180 > P) z = q(a, b._fovtype, "HFOV"), z > g && (B = !0, c && q(g, "HFOV", "VFOV") < P && (B = l = !1), z = g, D && B && (a = q(z, "HFOV", b._fovtype))), t = q(a, b._fovtype, "VFOV"), t > P && (B = !0, c && q(P, "VFOV", "HFOV") < g && (B = l = !1), t = P, D && B && (a = q(t, "VFOV", b._fovtype))), q(a, b._fovtype, "HFOV"), B = t, C = t *= .5, z *= .5, -89.9 >= y && (t = 0), 89.9 <= F && (C = 0)
                        }
                        v = [360, -180, 180, t + C, y + t, F - C];
                        p && (h - t < y ? (h = y + t, eb.stopFrictions(2)) : h + C > F && (h = F - C, eb.stopFrictions(2)));
                        l && (z = -h * Z, C = .5 * Ua, t = .5 * Ea, y = t / Math.tan(B * Z * .5), 0 < z && (t = -t), C = 1 / Math.sqrt(1 + (C * C + t * t) / (y * y)), t = t / y * C, y = Math.acos(-C * Math.sin(z) + t * Math.cos(z)) - Na / 2, isNaN(y) && (y = -Na / 2), C = Math.acos((C * Math.cos(z) + t * Math.sin(z)) / Math.sin(y + Na / 2)), isNaN(C) && (C = 0), z = 180 * C / Na, 2 * z >= g && (D && (z = q(g, "HFOV", b._fovtype), z < a && (a = z)), z = g / 2));
                        360 > g && (D = !1, v[0] = g, v[1] = E + z, v[2] = u - z, p && (m - z < E ? (m = E + z, D = !0) : m + z > u && (m = u - z, D = !0)), D && (eb.stopFrictions(1), 0 != vb.currentmovingspeed && (vb.currentmovingspeed = 0, vb.speed *= -1)));
                        b._limits = v;
                        b._fov = a;
                        b._hlookat = m;
                        b._vlookat = h;
                        a = q(a, b._fovtype, "MFOV");
                        0 < H && 0 == A ? (u = q(a, "MFOV", "VFOV"), H = Math.asin(1E3 * Math.sin(u * Z * .5) / (1E3 + .72 * x)), H = .5 * Ea / Math.tan(H)) : H = .5 * Yc / Math.tan(a / 114.591559);
                        b.hfov = q(a, "MFOV", "HFOV");
                        b.vfov = q(a, "MFOV", "VFOV");
                        b.r_fov = a;
                        b.r_zoom = H;
                        b.r_zoff = x;
                        b.r_vlookat = h;
                        A = Number(b._architectural);
                        p = 0;
                        0 < A && (1 == b._architecturalonlymiddle && (p = Math.abs(h / 90), 1 < p && (p = 1), p = Math.tan(p * Na * .25), A *= 1 - p), p = A * (-h * (Ea / Math.tan(q(a, "MFOV", "VFOV") / 114.591559)) / 90), h *= 1 - A);
                        b.r_yoff = p;
                        de(b.r_rmatrix, m + Number(L.viewoffset), h, e);
                        b.r_hlookat = m;
                        b.r_vlookatA = h;
                        b.r_roll = e;
                        Tb = 0 == d.simulator && (d.iphone || d.ipad) ? .25 : 1;
                        d.ie && (Tb = r.r_zoom / 1E3 * 10);
                        if (d.androidstock || d.android && d.chrome || d.blackberry) Tb = r.r_zoom / 1E3 / 4;
                        he = _[352] + H + _[125] + -e + _[110] + (H - x / 2 * Tb) + "px) ";
                        b.haschanged = !1
                    };
                    b.getState = function (a) {
                        null == a && (a = {h: 0, v: 0, z: 0, r: 0, zf: 0, yf: 0, ch: 0, vr: null});
                        a.h = b._hlookat;
                        a.v = b.r_vlookatA;
                        a.z = b.r_zoom;
                        a.r = b._camroll;
                        a.zf = b.r_zoff;
                        a.yf = b.r_yoff;
                        a.ch = b._pannini;
                        return a
                    };
                    b.defaults()
                }, Kf = function () {
                    var a = this;
                    a.defaults = function () {
                        a.usercontrol = "all";
                        a.mouse = "drag";
                        a.touch = "drag";
                        a.drag_oldmode = !1;
                        a.dragrelative = !0;
                        a.draginertia = .1;
                        a.dragfriction = .9;
                        a.movetorelative = !0;
                        a.movetoaccelerate = 1;
                        a.movetospeed = 10;
                        a.movetofriction = .8;
                        a.movetoyfriction = 1;
                        a.keybaccelerate = .5;
                        a.keybspeed = 10;
                        a.keybfriction = .9;
                        a.keybinvert = !1;
                        a.keybfovchange = .75;
                        a.mousefovchange = 1;
                        a.fovspeed = 3;
                        a.fovfriction = .9;
                        a.camrollreset = !0;
                        a.keycodesleft = "37";
                        a.keycodesright = "39";
                        a.keycodesup = "38";
                        a.keycodesdown = "40";
                        a.keycodesin = "";
                        a.keycodesout = "";
                        a.touchzoom = !0;
                        a.zoomtocursor = !1;
                        a.zoomoutcursor = !0;
                        a.disablewheel = !1;
                        a.keydownrepeat = !0;
                        a.bouncinglimits = !1;
                        a.preventTouchEvents = !0
                    };
                    a.defaults();
                    Qb(a, _[445], _[19]);
                    Qb(a, _[446], "touch");
                    Qb(a, _[277], _[263]);
                    Qb(a, _[430], _[380]);
                    Qb(a, _[342], _[306]);
                    Qb(a, _[311], _[283]);
                    Qb(a, _[344], _[356])
                }, Lf = function () {
                    var a = this;
                    a.standard = _[5];
                    a.dragging = "move";
                    a.moving = "move";
                    a.hit = _[10];
                    a.update = function () {
                        var b = H.down, d = !1, e = ob, f = Ub;
                        f ? e ? (d = e.DATA.handcursor, e == f ? (b = !1, e.capture || (b = H.down && H.moved)) : b = f.capture ? !1 : H.down && H.moved) : b = !f.capture : e && 0 == b && (d = e.DATA.handcursor);
                        e = J(ea.mousetype);
                        Y.controllayer.style.cursor = b ? _[18] == e ? a.moving : a.dragging : d ? a.hit : a.standard
                    }
                }, Hf = function () {
                    var a = this;
                    a.haschanged = !1;
                    a.mode = _[62];
                    a.pixelx = 0;
                    a.pixely = 0;
                    a.pixelwidth = 0;
                    a.pixelheight = 0;
                    Ja(a, _[62], _[88]);
                    Ja(a, "x", "0");
                    Ja(a, "y", "0");
                    Ja(a, _[64], "100%");
                    Ja(a, _[17], "100%");
                    Ja(a, "left", "0");
                    Ja(a, "top", "0");
                    Ja(a, _[4], "0");
                    Ja(a, _[3], "0");
                    a.calc = function (b, d) {
                        var e = 1 / ba, f = _[93] == J(a.mode), n = f ? a._left : a._x, m = f ? a._top : a._y,
                            h = f ? a._right : a._width, q = f ? a._bottom : a._height,
                            n = 0 < n.indexOf("%") ? parseFloat(n) / 100 * b * e : Number(n),
                            h = 0 < h.indexOf("%") ? parseFloat(h) / 100 * b * e : Number(h),
                            m = 0 < m.indexOf("%") ? parseFloat(m) / 100 * d * e : Number(m),
                            q = 0 < q.indexOf("%") ? parseFloat(q) / 100 * d * e : Number(q), n = n / e, m = m / e,
                            h = h / e, q = q / e;
                        f ? (h = b - n - h, q = d - m - q) : (f = J(a._align), 0 <= f.indexOf("left") || (n = 0 <= f.indexOf(_[4]) ? b - h - n : (b - h) / 2 + n), 0 <= f.indexOf("top") || (m = 0 <= f.indexOf(_[3]) ? d - q - m : (d - q) / 2 + m));
                        a.pixelx = Math.round(n * e);
                        a.pixely = Math.round(m * e);
                        f = !1;
                        n = Math.round(h);
                        h = Math.round(q);
                        if (Ua != n || Ea != h) f = !0, Ua = n, Ea = h;
                        a.pixelwidth = n * e;
                        a.pixelheight = h * e;
                        a.haschanged = !1;
                        return f
                    }
                }, Hc = 2097152, uf = 1, Bc = uf | 2, Sb = !1, Pf = function () {
                    this.ay = this.ax = this.oy = this.ox = this.y = this.x = this.h = this.w = this.flags = 0;
                    this.asy = this.asx = 1;
                    this.ey = this.ex = 0
                }, Qf = function () {
                    this.h = this.w = 0
                }, Jc = function () {
                    function a(a, b, d) {
                        D[a] = b;
                        c.__defineGetter__(a, function () {
                            return D[a]
                        });
                        c.__defineSetter__(a, function (b) {
                            if (b != D[a] || d & 96) D[a] = b, c.haschanged_flags |= d, c.GL && (Qa = !0)
                        })
                    }

                    function b() {
                        var a = D.alpha;
                        c.ishotspot && (a *= Gc);
                        var b = 255 * a | 0;
                        b == c._aa || c.GL || (c.sprite && (c.sprite.style.opacity = a, c._aa = b), c._poly && (c._poly.style.opacity = a, c._aa = b));
                        D.autoalpha && (a = 0 < a, a != D.visible && (c.visible = a))
                    }

                    function r() {
                        if (c.sprite && null != D.zorder) {
                            var a = parseInt(D.zorder);
                            !isNaN(a) && 0 <= a ? (c.sprite.style.zIndex = O + a, c._zdeep = a, c._deepscale = 100 / (200 + a)) : (c._zdeep = 0, c._deepscale = .5)
                        }
                        c.ishotspot && (Sb = !0)
                    }

                    function e() {
                        c.sprite && (c.sprite.style.overflow = D.maskchildren ? _[6] : _[16], X && d.safari && t())
                    }

                    function f(a, b) {
                        var c = b;
                        b && (c = b = a.DATA.enabled) && _[23] == a.type && (c = 0 != a.DATA.bgcapture);
                        if (a.sprite) {
                            var d = a.sprite.style;
                            d.cursor = c && a.DATA.handcursor ? _[10] : _[5];
                            d.pointerEvents = c ? "auto" : "none";
                            0 == c && a.hovering && (a.hovering = !1, Ib === a && (Ib = null))
                        }
                        if (c = a._childs) {
                            var e, g;
                            e = c.length;
                            for (d = 0; d < e; d++) (g = c[d]) && g.sprite && f(g, b)
                        }
                    }

                    function n() {
                        if (c.sprite) {
                            var a = D.enabled;
                            if (a && c._parent) a:{
                                for (a = m(c._parent); a;) {
                                    if (0 == a.DATA.enabled || 0 == a.children) {
                                        a = !1;
                                        break a
                                    }
                                    if (a._parent) a = m(a._parent); else break
                                }
                                a = !0
                            }
                            f(c, a, !0)
                        }
                    }

                    function m(a) {
                        var b = null;
                        if (a) {
                            var b = a = J(a), c = xa, d = a.indexOf("[");
                            0 < d && (b = a.slice(0, d), _[7] == b && (c = wb), a = a.slice(d + 1, a.indexOf("]")));
                            if ("stage" == b) return null == mb.sprite && (mb.sprite = Y.viewerlayer, mb.loaded = !0), mb;
                            if (_[549] == b) return null == nb.sprite && (a = Ha(), b = a.style, b.position = _[0], b.width = "100%", b.height = "100%", b.overflow = _[6], b.zIndex = "0", b.pointerEvents = "none", Y.controllayer.parentNode.insertBefore(a, Y.controllayer), nb.sprite = a, nb.loaded = !0), nb;
                            b = c.getItem(a)
                        }
                        return b
                    }

                    function h(a) {
                        if (c._parent != a && !c._destroyed) {
                            if (c._parent) {
                                var b = m(c._parent);
                                if (b) {
                                    var d = b._childs;
                                    if (d) {
                                        var e, f;
                                        f = d.length;
                                        for (e = 0; e < f; e++) if (d[e] === c) {
                                            d.splice(e, 1);
                                            f--;
                                            break
                                        }
                                        0 == f && (d = null);
                                        b._childs = d;
                                        b.requestUpdate()
                                    }
                                }
                            }
                            if (a) if (b = m(a)) if (b.sprite) null == b._childs && (b._childs = []), b._use_css_scale = !1, c._use_css_scale = !1, b._childs.push(c), b.sprite.appendChild(c.sprite), b.requestUpdate(), b.haschanged_flags |= 4096; else {
                                if (b.GL || b.ishotspot && _[63] == b.renderer) {
                                    b.renderer = _[65];
                                    b.processUpdatesHS();
                                    b.requestUpdate();
                                    h(a);
                                    return
                                }
                                setTimeout(function () {
                                    c._parent = null;
                                    h(a)
                                }, 16)
                            } else a = null;
                            null == a && Y.pluginlayer.appendChild(c.sprite);
                            c._parent = a;
                            c.requestUpdate();
                            c.haschanged_flags |= 4096
                        }
                    }

                    function x(a) {
                        (a = this.kobject) && 0 == G && (a.DATA.reloading = !1, (a = a.loadingurl) && "data:" == a.slice(0, 5) && 50 < a.length && (a = a.slice(0, 50) + "..."), oa.reportLoadingError(a, c.getfullpath() + " -"))
                    }

                    function L() {
                        var a = c.jsplugin, b = c.GL;
                        a && a.unloadplugin && a.unloadplugin();
                        b && b.destroy && b.destroy();
                        c.jsplugin = null;
                        c.GL = null
                    }

                    function E(a) {
                        K && (H.down = !1, eb.trackTouch(a), qa(W, a.type, E, !0), _[2] == a.type ? (ca.body.style.webkitUserSelect = ca.body.style.backupUserSelect, qa(W, _[9], A, !0), qa(W, _[2], E, !0)) : (qa(W, d.browser.events.touchmove, A, !0), qa(W, d.browser.events.touchend, E, !0)), c.process_onup(K, M))
                    }

                    function A(a, b) {
                        Xa(_[401]);
                        var c = a.changedTouches && 0 < a.changedTouches.length ? a.changedTouches[0] : a, e = c.pageX,
                            c = c.pageY;
                        !0 === b ? S = [e, c] : S ? 0 == M && (e -= S[0], c -= S[1], Math.sqrt(e * e + c * c) >= (d.touchdevice ? 11 : 4) && (M = !0)) : (S = null, qa(W, a.type, A, !0))
                    }

                    function p(a, b) {
                        var e = a.timeStamp, f = !0;
                        switch (a.type) {
                            case _[44]:
                            case _[13]:
                            case _[22]:
                                1 == b && (e = _[23] == K.type, v(K) && (!e || e && K.DATA.bgcapture) && K.DATA.handcursor && (c.sprite.style.cursor = _[10]));
                                e = K.sprite || K._poly;
                                for (f = 0; e;) {
                                    var g = e.kobject;
                                    if (g) {
                                        var h = g.DATA.enabled;
                                        0 == d.pointerEvents && (h = v(g));
                                        if (0 == h || 0 < f && 0 == g.children) return;
                                        f++;
                                        e = e.parentNode
                                    } else break
                                }
                                for (f = K.sprite || K._poly; f;) {
                                    if (g = f.kobject) g.enabled && 0 == g.hovering && (g.hovering = !0, Ib = g, 0 == g.pressed && g.DATA.onovercrop && y(g, g.DATA.onovercrop), aa.isblocked() || aa.callaction(g.onover, g)); else break;
                                    f = f.parentNode
                                }
                                break;
                            case _[45]:
                            case _[14]:
                            case _[25]:
                                for (e = (f = a.relatedTarget) ? f.kobject : null; f && null == e;) if (f = f.parentNode) e = f.kobject; else break;
                                for (f = K.sprite || K._poly; f;) {
                                    if (g = f.kobject) {
                                        for (var h = !1, l = e; l;) {
                                            if (g == l) {
                                                h = !0;
                                                break
                                            }
                                            if (l.sprite && l.sprite.parentNode) l = l.sprite.parentNode.kobject; else break
                                        }
                                        if (0 == h) 1 == g.hovering && (g.hovering = !1, Ib === g && (Ib = null), 0 == g.pressed && g.DATA.onovercrop && y(g, g.DATA.crop), aa.callaction(g.onout, g)); else break
                                    } else break;
                                    f = f.parentNode
                                }
                                break;
                            case _[8]:
                                Y.focus(2);
                                Xa(_[302]);
                                if (500 < e && 500 > e - xc) {
                                    xc = 0;
                                    break
                                }
                                if (f = 0 == (a.button | 0)) ca.body.style.backupUserSelect = ca.body.style.webkitUserSelect, ca.body.style.webkitUserSelect = "none", H.down = !0, A(a, !0), da(W, _[2], E, !0), da(W, _[9], A, !0), c.process_ondown(K);
                                break;
                            case d.browser.events.touchstart:
                                Y.focus(2);
                                Xa(_[267]);
                                xc = e;
                                eb.trackTouch(a);
                                if (eb.isMultiTouch()) break;
                                M = !1;
                                if (f = 0 == (a.button | 0)) A(a, !0), da(W, d.browser.events.touchend, E, !0), da(W, d.browser.events.touchmove, A, !0), K.pressed = !0, K.DATA.ondowncrop && y(K, K.DATA.ondowncrop), aa.isblocked() || aa.callaction(K.ondown, K)
                        }
                    }

                    function u(a, b) {
                        if (a === b) return !1;
                        for (; b && b !== a;) b = b.parentNode;
                        return b === a
                    }

                    function v(a) {
                        if (a.DATA.enabled) {
                            for (a = a.sprite; a;) if ((a = a.parentNode) && a.kobject && 0 == a.kobject.DATA.enabled) return !1;
                            return !0
                        }
                        return !1
                    }

                    function g(a) {
                        var b = a.type;
                        if (_[8] != b && b != d.browser.events.touchstart || !aa.isblocked()) {
                            var e = a.target.kobject;
                            _[44] == b ? b = _[13] : _[45] == b && (b = _[14]);
                            null == e && (e = c);
                            if ((_[13] != b && _[14] != b || 4 == a.pointerType || _[19] == a.pointerType) && e) {
                                var e = a.timeStamp, f = c._eP;
                                e != c._eT && (f = 0);
                                if (_[22] == b || _[13] == b) {
                                    var g = a.relatedTarget;
                                    if (this === g || u(this, g)) return
                                } else if (_[25] == b || _[14] == b) if (g = a.relatedTarget, this === g || u(this, g)) return;
                                _[22] == b && 0 == c.hovering ? f = 0 : _[25] == b && 1 == c.hovering && (f = 0);
                                b = D.enabled;
                                0 == d.pointerEvents && (b = v(c));
                                if (b && (!X || X && D.bgcapture)) 0 == c.children && a.stopPropagation(), 0 == f && (0 == c.children && 1 == a.eventPhase || 2 <= a.eventPhase) && (f = 1, c.jsplugin && c.jsplugin.hittest && (b = Y.getMousePos(a.changedTouches ? a.changedTouches[0] : a, c.sprite), c.jsplugin.hittest(b.x * c.imagewidth / c.pixelwidth, b.y * c.imageheight / c.pixelheight) || (f = 2)), 1 == f && (K = c, p(a), c.capture && (null != c.jsplugin && u(Y.controllayer, c.sprite) || 0 == (a.target && "A" == a.target.nodeName) && Da(a), a.stopPropagation()))); else if (0 == d.pointerEvents && ca.msElementsFromPoint && 0 == f && 2 == a.eventPhase && (g = a.type, b = _[2] == g || _[25] == g || _[45] == g || _[14] == g || g == d.browser.events.touchend, _[8] == g || _[22] == g || _[44] == g || _[13] == g || g == d.browser.events.touchstart || b) && (g = ca.msElementsFromPoint(a.clientX, a.clientY))) {
                                    var h = [], l, m, q = null, q = null;
                                    for (l = 0; l < g.length; l++) if (q = g[l], q = q.kobject) h.push(q); else break;
                                    b && n();
                                    if (b && V) for (l = 0; l < V.length; l++) {
                                        var q = V[l], r = !1;
                                        for (m = 0; m < h.length; m++) h[m] === q && (r = !0);
                                        0 == r && (f = 1, K = q, p(a, !0), q.capture && (null == c.jsplugin && Da(a), a.stopPropagation()))
                                    }
                                    for (l = 0; l < g.length; l++) if (q = g[l], q = q.kobject) {
                                        if (m = _[23] == q.type, 1 == (v(q) && (!m || m && q.DATA.bgcapture)) || b) if (f = 1, K = q, p(a, !0), q.capture) {
                                            null == c.jsplugin && Da(a);
                                            a.stopPropagation();
                                            break
                                        }
                                    } else break;
                                    V = h
                                }
                                c._eT = e;
                                c._eP = f
                            }
                        }
                    }

                    function t() {
                        var a = c.sprite;
                        if (a) {
                            var a = a.style, b = Number(D.bgcolor), e = Number(D.bgalpha), f = ba;
                            isNaN(b) && (b = 0);
                            isNaN(e) && (e = 0);
                            var g = ("" + D.bgborder).split(" "), h = Fc(g[0], f, ","), l = g[1] | 0, g = Number(g[2]);
                            isNaN(g) && (g = 1);
                            if (h[0] != Z[0] || h[3] != Z[3]) Z = h, c.requestUpdate();
                            0 == e ? a.background = "none" : a.backgroundColor = fa(b, e);
                            var b = Fc(c.bgroundedge, f * D.scale, " "), e = "", m = c.bgshadow;
                            if (m) {
                                var n = ("" + m).split(","), p, q;
                                q = n.length;
                                for (p = 0; p < q; p++) {
                                    var r = Wa(n[p]).split(" "), t = r.length;
                                    if (4 < t) {
                                        var u = 5 < t ? 1 : 0;
                                        "" != e && (e += ", ");
                                        e += r[0] * f + "px " + r[1] * f + "px " + r[2] * f + "px " + (u ? r[3] * f : 0) + "px " + fa(r[3 + u] | 0, r[4 + u]) + (6 < t ? " " + r[6] : "")
                                    }
                                }
                            }
                            if (d.safari || d.ios) a.webkitMaskImage = D.maskchildren && !m && 0 < b[0] + b[1] + b[2] + b[3] ? _[186] : "";
                            a[uc] = e;
                            a.borderStyle = "solid";
                            a.borderColor = fa(l, g);
                            a.borderWidth = h.join("px ") + "px";
                            a.borderRadius = b.join("px ") + "px"
                        }
                    }

                    function C(a) {
                        this.ss = ba;
                        this.onresize = function (b, c) {
                            a.imagewidth = a.pixelwidth / a.DATA.scale;
                            a.imageheight = a.pixelheight / a.DATA.scale;
                            var d = 65536;
                            this.ss != ba && (this.ss = ba, d |= 16384);
                            a.haschanged_flags |= d;
                            return !1
                        }
                    }

                    function z() {
                        c.loadedurl && (D.reloading = !0);
                        if (c._ready) {
                            var a = oa.parsePath(D.url), b = a, e = "";
                            if (!(c.loading && c.loadingurl == a || c.loadedurl == a)) {
                                var f = b.indexOf("?");
                                0 < f && (b = b.slice(0, f));
                                f = b.indexOf("#");
                                0 < f && (b = b.slice(0, f));
                                f = b.lastIndexOf(".");
                                0 < f && (e = J(b.slice(f + 1)));
                                L();
                                G = !1;
                                c.loading = !0;
                                c.loaded = !1;
                                c.loadedurl = null;
                                c.createLoader();
                                d.ios && (_[406] == a.substr(0, 10) ? c.loader.removeAttribute(_[394]) : "off" != Yb && (c.loader.crossOrigin = Yb));
                                if (_[78] == b) X = G = !0, c.loading = !1, c.loaded = !0, c.loadedurl = a, c.createVars([_[152], c.bgcolor ? Number(c.bgcolor) : 0, 16384, _[157], c.bgalpha ? Number(c.bgalpha) : 0, 16384, _[127], c.bgroundedge ? c.bgroundedge : "0", 16384, _[143], c.bgborder ? c.bgborder : "0", 16384, _[148], c.bgshadow ? c.bgshadow : "", 16384, _[468], ma(c.bgcapture), 4096]), c.haschanged_flags |= 4096, c.haschanged_flags |= 16384, c.jsplugin = new C(c), F(); else if (_[76] == b || 0 <= a.indexOf(_[337])) {
                                    G = !0;
                                    c.loader = null;
                                    c.loading = !1;
                                    c.loaded = !0;
                                    c.loadedurl = a;
                                    var g = new Rf;
                                    g.registerplugin(q, c.getfullpath(), c);
                                    c.jsplugin = g;
                                    0 == c._dyn ? F() : setTimeout(function () {
                                        g.updatehtml();
                                        F()
                                    }, 7)
                                } else "js" == e ? (G = !0, c.loadingurl = a, oa.loadfile2(a, _[115], function (b) {
                                    c.loading = !1;
                                    c.loaded = !0;
                                    c.loadedurl = a;
                                    b = b.data;
                                    if (null != b) {
                                        var d = _[427] + a + _[209];
                                        try {
                                            eval(b + ";")
                                        } catch (e) {
                                            d = _[469] + a + _[432] + e
                                        }
                                        _[15] == typeof krpanoplugin ? (b = new krpanoplugin, b.registerplugin(q, c.getfullpath(), c), c.jsplugin = b, F()) : wa(3, d)
                                    }
                                })) : "swf" == e ? (c.loading = !1, c.loaded = !1, wa(2, c.getfullpath() + _[220] + $d(a))) : (c.loaded && c.preload && (c._ispreload = !0, c.preload = !1, c.onloaded = null), oa.DMcheck(a) ? (c.loading = !0, c.loaded = !1, c.loadingurl = a, c.loader.src = a) : (c.loading = !1, wa(3, c.getfullpath() + _[266] + a)))
                            }
                        }
                    }

                    function y(a, b) {
                        var d = 0, e = 0, f = a.loader;
                        if (f && (d = f.naturalWidth, e = f.naturalHeight, a.ishotspot)) switch (a.stereo) {
                            case "SBS":
                                d >>= 1;
                                break;
                            case "TB":
                                e >>= 1
                        }
                        b && (b = String(b).split("|"), 4 == b.length && (d = b[2], e = b[3]));
                        if (null == a.jsplugin && 0 == a._isNE()) {
                            a.imagewidth = d;
                            a.imageheight = e;
                            var f = a._gOSF(), g = a.haschanged_flags;
                            f & 1 && 0 == (g & 32) && (a.DATA.width = String(d));
                            f & 2 && 0 == (g & 64) && (a.DATA.height = String(e))
                        }
                        c.GL && (Qa = !0);
                        c.requestUpdate(Bc)
                    }

                    function F() {
                        1 != c._destroyed && (D.reloading = !1, c.loading = !1, c.loaded = !0, 0 == G && (c.loadedurl = c.loadingurl), c.jsplugin ? l() : c.haschanged_flags |= 2, Qa = !0)
                    }

                    function l() {
                        c.sprite && (0 == G ? c.sprite.style.backgroundImage = 'url("' + c.loader.src + '")' : c.sprite.style.background = "none");
                        y(c, D.crop);
                        c.requestUpdate(Bc);
                        N = !0;
                        0 == G && null == c.parent && null == c._childs && (c._use_css_scale = !0);
                        c.ishotspot || c.updatepluginpos();
                        aa.callaction(null != c.altonloaded ? c.altonloaded : c.onloaded, c, !0)
                    }

                    var c = this;
                    c.prototype = tc;
                    this.prototype.call(this);
                    var D = c.DATA = {};
                    c._type = _[57];
                    c.layer = c.plugin = new Gb(Jc);
                    c.haschanged_flags = 0;
                    c.renderer_flags = 0;
                    var B = new Pf, P = new Qf;
                    c.createVars = function (b) {
                        var c, d = b.length;
                        for (c = 0; c < d; c += 3) a(b[c], b[c + 1], b[c + 2])
                    };
                    var O = 0, Q = 3, M = !1, G = !1, X = !1, Z = [0, 0, 0, 0], N = !1, S = null, K = null, V = null,
                        ra = null;
                    c._isNE = function () {
                        return G
                    };
                    c._gOSF = function () {
                        return Q
                    };
                    c.haveUserWidth = function () {
                        return 0 == (Q & 1) || 0 != (c.haschanged_flags & 32)
                    };
                    c.haveUserHeight = function () {
                        return 0 == (Q & 2) || 0 != (c.haschanged_flags & 64)
                    };
                    c.__defineGetter__("type", function () {
                        var a = c.url;
                        return _[78] == a ? _[23] : _[76] == a ? "text" : _[99]
                    });
                    c.__defineSetter__("type", function (a) {
                        a = J(a);
                        if (_[23] == a) c.url = _[78]; else if ("text" == a || _[138] == a) c.url = _[76]
                    });
                    c.sprite = null;
                    c.loader = null;
                    c.jsplugin = null;
                    c.ishotspot = !1;
                    c._ready = !1;
                    c._dyn = !1;
                    c._use_css_scale = !1;
                    c._hszscale = 1;
                    c._eT = 0;
                    c._eP = 0;
                    c._pCD = !1;
                    c._deepscale = .5;
                    c._zdeep = 0;
                    c._childs = null;
                    c._parent = null;
                    c.__defineGetter__(_[167], function () {
                        return c._parent
                    });
                    c.__defineSetter__(_[167], function (a) {
                        if (null == a || "" == a || "null" == J(a)) a = null;
                        c.sprite ? h(a) : c._parent = a
                    });
                    c.MX = Aa();
                    c.GL = null;
                    c.imagewidth = 0;
                    c.imageheight = 0;
                    c.forceresize = !1;
                    c.pixelwidth = 0;
                    c.pixelheight = 0;
                    c.pixelx = 0;
                    c.pixely = 0;
                    c._pxw = 0;
                    c._pxh = 0;
                    c._finalxscale = 1;
                    c._finalyscale = 1;
                    c._ispreload = !1;
                    D.reloading = !1;
                    c.loading = !1;
                    c.loaded = !1;
                    c.loadingurl = null;
                    c.loadedurl = null;
                    c.pressed = !1;
                    c.hovering = !1;
                    c.preload = !1;
                    c.keep = !1;
                    c.style = null;
                    c.capture = !0;
                    c.children = !0;
                    c.accuracy = 0;
                    c.onloaded = null;
                    c.altonloaded = null;
                    c.maxwidth = 0;
                    c.minwidth = 0;
                    c.maxheight = 0;
                    c.minheight = 0;
                    c.onover = null;
                    c.onhover = null;
                    c.onout = null;
                    c.onclick = null;
                    c.ondown = null;
                    c.onup = null;
                    c.onloaded = null;
                    c.createVars(["url", null, 1, _[16], !0, 4, _[64], null, 32, _[17], null, 64, "scale", 1, 16, _[583], 0, 8, "x", null, 512, "y", null, 512, "ox", null, 256, "oy", null, 256, _[62], null, 1024, "edge", null, 1024, _[584], null, 2048, _[363], !1, 32768, _[320], !1, 65536, "alpha", 1, 8192, _[479], !1, 8192, _[437], null, 0, _[436], null, 0, _[553], !0, 4096, _[433], !0, 4096]);
                    D.crop = null;
                    c.__defineGetter__("crop", function () {
                        return D.crop
                    });
                    c.__defineSetter__("crop", function (a) {
                        a != D.crop && (D.crop = a, c.pressed && D.ondowncrop ? a = D.ondowncrop : c.hovering && D.onovercrop && (a = D.onovercrop), y(c, a))
                    });
                    c.getrenderer = function () {
                        return P
                    };
                    c.getparsed = function () {
                        return B
                    };
                    c.API_calcsize = function (a) {
                        a = c.ishotspot;
                        var b = ba, d = Ua, e = Ea;
                        a && (b = 1, d = e = 1E3);
                        var f = c.imagewidth, g = c.imageheight, h = B.flags, l = D.scale, m = B.w, n = B.h;
                        0 == (h & 3) ? m = f : 2 == (h & 3) && (m *= d / b / 1);
                        0 == (h & 12) ? n = g : 8 == (h & 12) && (n *= e / b / 1);
                        m *= b;
                        n *= b;
                        0 > m && (m = d / 1 + m, 0 > m && (m = 0));
                        0 > n && (n = e / 1 + n, 0 > n && (n = 0));
                        3 == (h & 3) ? m = 0 != g ? n * f / g : 0 : 12 == (h & 12) && (n = 0 != f ? m * g / f : 0);
                        0 < c.maxwidth && m > b * c.maxwidth && (m = b * c.maxwidth);
                        0 < c.minwidth && m < b * c.minwidth && (m = b * c.minwidth);
                        0 < c.maxheight && n > b * c.maxheight && (n = b * c.maxheight);
                        0 < c.minheight && n < b * c.minheight && (n = b * c.minheight);
                        m = m * l * 1;
                        n = n * l * 1;
                        a || 0 != c.accuracy || (m = Tc(m), n = Tc(n));
                        P.w = m;
                        P.h = n;
                        return P
                    };
                    c.loadstyle = function (a) {
                        aa.assignstyle(c.getfullpath(), a)
                    };
                    c.getmouse = function (a) {
                        var b = 0, d = 0;
                        if (d = c.sprite) {
                            var e = Y.controllayer, f = e.getBoundingClientRect(), g = d.getBoundingClientRect(),
                                b = H.x - g.left - d.clientLeft + f.left + e.clientLeft,
                                d = H.y - g.top - d.clientTop + f.top + e.clientTop;
                            a && (b = b * c.imagewidth / c.pixelwidth, d = d * c.imageheight / c.pixelheight);
                            return {x: b, y: d}
                        }
                        return null
                    };
                    c._assignEvents = function (a, b) {
                        b || (b = "add");
                        eb.touch && (Hb(b, a, d.browser.events.touchstart, g, !0), Hb(b, a, d.browser.events.touchstart, g, !1));
                        eb.mouse && (Hb(b, a, _[8], g, !0), Hb(b, a, _[8], g, !1));
                        d.desktop && (eb.mouse || d.ie) && (0 == eb.mouse && d.ie ? (Hb(b, a, d.browser.events.pointerover, g, !0), Hb(b, a, d.browser.events.pointerover, g, !1), Hb(b, a, d.browser.events.pointerout, g, !0), Hb(b, a, d.browser.events.pointerout, g, !1)) : (Hb(b, a, _[22], g, !0), Hb(b, a, _[22], g, !1), Hb(b, a, _[25], g, !0), Hb(b, a, _[25], g, !1)))
                    };
                    c.createLoader = function () {
                        var a = c.loader;
                        a && "" != a.src && (c.destroyLoader(), a = null);
                        a || (a = Ha(1), a.kobject = c, da(a, _[41], x, !0), da(a, "load", F, !1), c.loader = a)
                    };
                    c.destroyLoader = function () {
                        var a = c.loader;
                        a && (a.kobject = null, qa(a, _[41], x, !0), qa(a, "load", F, !1), c.loader = null)
                    };
                    c.createSprite = function () {
                        if (!c.sprite) {
                            var a = Ha(), d = a.style;
                            a.kobject = c;
                            d.display = "none";
                            d.position = _[0];
                            wc && (d.outline = _[100]);
                            d.zIndex = O;
                            c.sprite = a;
                            c._assignEvents(a);
                            e();
                            b();
                            r();
                            c.haschanged_flags |= 4096;
                            De++
                        }
                    };
                    c.destroySprite = function () {
                        var a = c.sprite;
                        a && (a.parentNode && a.parentNode.removeChild(a), a.style.background = "none", c._assignEvents(a, _[585]), a.kobject = null, c.sprite = null, De--)
                    };
                    c.create = function () {
                        c._pCD = !0;
                        O = c.ishotspot ? 2001 : 3001;
                        c.alturl && (c.url = c.alturl, delete c.alturl);
                        c.altscale && (c.scale = c.altscale, delete c.altscale);
                        c.createLoader();
                        c.ishotspot || c.createSprite();
                        var a = c._parent;
                        a && (c._parent = null, h(a));
                        c._ready = !0
                    };
                    c.destroy = function () {
                        Ib === c && (Ib = null);
                        L();
                        c.destroyLoader();
                        c.jsplugin = null;
                        c.loaded = !1;
                        c._destroyed = !0;
                        c.parent = null;
                        var a = c._childs;
                        if (a) {
                            var b, d, a = a.slice();
                            d = a.length;
                            for (b = 0; b < d; b++) a[b].parent = null;
                            c._childs = null
                        }
                        c.destroySprite()
                    };
                    c.getfullpath = function () {
                        return c._type + "[" + c.name + "]"
                    };
                    c.changeorigin = function () {
                        var a = arguments, b = null, d = null;
                        if (0 < a.length) {
                            var e = null, f = 0, g = 0, h = 0, l = 0, n = ba, p = Ua / n, q = Ea / n, r = c._parent;
                            r && (r = m(r)) && (0 == c._use_css_scale ? (p = r._pxw * n, q = r._pxh * n) : (p = r.imagewidth * n, q = r.imageheight * n));
                            n = c.imagewidth;
                            r = c.imageheight;
                            b = 0;
                            e = String(D.width);
                            "" != e && null != e && (0 < e.indexOf("%") ? n = parseFloat(e) / 100 * p : "prop" == e.toLowerCase() ? b = 1 : n = e);
                            e = String(D.height);
                            "" != e && null != e && (0 < e.indexOf("%") ? r = parseFloat(e) / 100 * q : "prop" == e.toLowerCase() ? b = 2 : r = e);
                            1 == b ? n = r * c.imagewidth / c.imageheight : 2 == b && (r = n * c.imageheight / c.imagewidth);
                            b = d = J(a[0]);
                            1 < a.length && (d = J(a[1]));
                            var a = String(D.align), t = D.edge ? J(D.edge) : "null";
                            if ("null" == t || _[589] == t) t = a;
                            (e = String(D.x)) && (f = 0 < e.indexOf("%") ? parseFloat(e) / 100 * p : parseFloat(e));
                            isNaN(f) && (f = 0);
                            (e = String(D.y)) && (g = 0 < e.indexOf("%") ? parseFloat(e) / 100 * q : parseFloat(e));
                            isNaN(g) && (g = 0);
                            if (e = a) h = 0 <= e.indexOf("left") ? 0 + f : 0 <= e.indexOf(_[4]) ? p - f : p / 2 + f, l = 0 <= e.indexOf("top") ? 0 + g : 0 <= e.indexOf(_[3]) ? q - g : q / 2 + g;
                            1 != D.scale && (n *= D.scale, r *= D.scale);
                            h = 0 <= t.indexOf("left") ? h + 0 : 0 <= t.indexOf(_[4]) ? h + -n : h + -n / 2;
                            l = 0 <= t.indexOf("top") ? l + 0 : 0 <= t.indexOf(_[3]) ? l + -r : l + -r / 2;
                            e = a = 0;
                            a = 0 <= b.indexOf("left") ? 0 + f : 0 <= b.indexOf(_[4]) ? p - f : p / 2 + f;
                            e = 0 <= b.indexOf("top") ? 0 + g : 0 <= b.indexOf(_[3]) ? q - g : q / 2 + g;
                            a = 0 <= d.indexOf("left") ? a + 0 : 0 <= d.indexOf(_[4]) ? a + -n : a + -n / 2;
                            e = 0 <= d.indexOf("top") ? e + 0 : 0 <= d.indexOf(_[3]) ? e + -r : e + -r / 2;
                            c.align = b;
                            c.edge = d;
                            0 <= b.indexOf(_[4]) ? c.x = String(f + a - h) : c.x = String(f - a + h);
                            0 <= b.indexOf(_[3]) ? c.y = String(g + e - l) : c.y = String(g - e + l)
                        }
                    };
                    c.requestUpdate = function (a) {
                        c.poschanged = !0;
                        a && (c.renderer_flags |= a);
                        c.GL && (Qa = !0)
                    };
                    c.resetsize = function () {
                        if (c.loaded) {
                            var a = c.imagewidth, b = c.imageheight;
                            D.width = String(a);
                            D.height = String(b);
                            Q = 3;
                            var d = D.crop;
                            c.pressed && D.ondowncrop ? d = D.ondowncrop : c.hovering && D.onovercrop && (d = D.onovercrop);
                            d && (y(c, d), a = c.imagewidth, b = c.imageheight);
                            B.w = a;
                            B.h = b;
                            B.flags = B.flags & -16 | 5;
                            c.requestUpdate(Bc)
                        }
                    };
                    c.registersize = function (a, b) {
                        null != a && (D.width = String(a), B.w = Number(a), B.flags = B.flags & -4 | 1);
                        null != b && (D.height = String(b), B.h = Number(b), B.flags = B.flags & -13 | 4);
                        c.requestUpdate(Bc)
                    };
                    c.registercontentsize = function (a, b) {
                        null != a && (c.ishotspot && "SBS" == c.stereo && (a *= .5), c.imagewidth = Number(a), Q & 1 && 0 == (c.haschanged_flags & 32) && (D.width = String(a), B.w = Number(a), B.flags = B.flags & -4 | 1));
                        null != b && (c.ishotspot && "TB" == c.stereo && (b *= .5), c.imageheight = Number(b), Q & 2 && 0 == (c.haschanged_flags & 64) && (D.height = String(b), B.h = Number(b), B.flags = B.flags & -13 | 4));
                        c.requestUpdate(Bc)
                    };
                    c.process_ondown = function (a) {
                        H.down = !0;
                        H.downLayer = !0;
                        Xa(_[359]);
                        a || (a = c);
                        M = !1;
                        a.pressed = !0;
                        a.DATA.ondowncrop && y(a, a.DATA.ondowncrop);
                        aa.isblocked() || aa.callaction(a.ondown, a)
                    };
                    c.process_onup = function (a, b) {
                        H.downLayer = !1;
                        Xa(_[483]);
                        a || (a = c);
                        if (a.pressed) {
                            a.pressed = !1;
                            if (a.DATA.ondowncrop || a.DATA.onovercrop) a.hovering && a.DATA.onovercrop ? y(a, a.DATA.onovercrop) : y(a, a.DATA.crop);
                            aa.callaction(a.onup, a);
                            b || aa.isblocked() || aa.callaction(a.onclick, a)
                        }
                    };
                    c.updateCrop = y;
                    c.processUpdates = function () {
                        if (c.haschanged_flags & 96) {
                            var a = c.haschanged_flags;
                            if (a & 32) {
                                var d = D.width, f = 0, g = _[1] === typeof d, h = parseFloat(d);
                                0 == 0 * h ? (Q &= -2, g && 0 < d.indexOf("%") ? (h /= 100, f = 2) : f = 1) : g && "prop" == d.toLowerCase() ? (h = 0, f = 3, Q &= -2) : (D.width = null, Q |= 1, h = 0);
                                B.w = h;
                                B.flags = B.flags & -4 | f
                            }
                            a & 64 && (a = D.height, d = 0, f = _[1] === typeof a, g = parseFloat(a), 0 == 0 * g ? (Q &= -3, f && 0 < a.indexOf("%") ? (g /= 100, d = 8) : d = 4) : f && "prop" == a.toLowerCase() ? (g = 0, d = 12, Q &= -3) : (D.height = null, Q |= 2, g = 0), B.h = g, B.flags = B.flags & -13 | d);
                            c.requestUpdate(Bc);
                            X && t();
                            c.haschanged_flags &= -97
                        }
                        if (c.haschanged_flags & 1) {
                            c.haschanged_flags &= -2;
                            a = D.url;
                            if ("" == a || "null" == a) D.url = a = null;
                            null != a ? z() : (L(), c.jsplugin = null, c.loadedurl = null, c.loadingurl = null, c.loading = !1, c.loaded = !1)
                        }
                        c.haschanged_flags & 2 && (c.haschanged_flags &= -3, l());
                        c.haschanged_flags & 4 && (c.haschanged_flags &= -5, (a = D.visible) && c.ishotspot && (Qa = !0), 0 == a && Ib === c && (Ib = null), c._poly && (c._poly.style.visibility = a ? _[16] : _[6]), c.sprite && (d = !0, c.jsplugin && c.jsplugin.onvisibilitychanged && (d = !0 !== c.jsplugin.onvisibilitychanged(a)), d && (0 == a ? c.sprite.style.display = "none" : c.requestUpdate())));
                        c.haschanged_flags & 16 && (c.haschanged_flags &= -17, c.requestUpdate());
                        c.haschanged_flags & 8 && (c.haschanged_flags &= -9, c.requestUpdate());
                        if (c.haschanged_flags & 256) {
                            c.haschanged_flags &= -257;
                            var a = D.ox, d = D.oy, f = _[1] === typeof a, g = _[1] === typeof d, h = 0, m = parseFloat(a),
                                p = parseFloat(d);
                            0 == 0 * m ? f && 0 < a.indexOf("%") && (m /= 100, h |= 64) : (m = 0, D.ox = null);
                            0 == 0 * p ? g && 0 < d.indexOf("%") && (p /= 100, h |= 128) : (p = 0, D.oy = null);
                            B.ox = m;
                            B.oy = p;
                            B.flags = B.flags & -193 | h;
                            c.requestUpdate(2)
                        }
                        c.haschanged_flags & 512 && (c.haschanged_flags &= -513, a = D.x, d = D.y, f = _[1] === typeof a, g = _[1] === typeof d, h = 0, m = parseFloat(a), p = parseFloat(d), 0 == 0 * m ? f && 0 < a.indexOf("%") && (m /= 100, h |= 16) : (m = 0, D.x = null), 0 == 0 * p ? g && 0 < d.indexOf("%") && (p /= 100, h |= 32) : (p = 0, D.y = null), B.x = m, B.y = p, B.flags = B.flags & -49 | h, c.requestUpdate(2));
                        if (c.haschanged_flags & 1024) {
                            c.haschanged_flags &= -1025;
                            a = D.align;
                            d = D.edge;
                            a && "" != a || (a = _[88]);
                            d && "" != d || (d = a);
                            var a = J(a), d = J(d), g = f = .5, m = h = 1, q = p = .5;
                            0 <= a.indexOf("left") ? f = 0 : 0 <= a.indexOf(_[4]) && (f = 1, h = -1);
                            0 <= a.indexOf("top") ? g = 0 : 0 <= a.indexOf(_[3]) && (g = 1, m = -1);
                            0 <= d.indexOf("left") ? p = 0 : 0 <= d.indexOf(_[4]) && (p = 1);
                            0 <= d.indexOf("top") ? q = 0 : 0 <= d.indexOf(_[3]) && (q = 1);
                            B.ax = f;
                            B.ay = g;
                            B.asx = h;
                            B.asy = m;
                            B.ex = p;
                            B.ey = q;
                            c.requestUpdate(2)
                        }
                        c.haschanged_flags & 2048 && (c.haschanged_flags &= -2049, r());
                        c.haschanged_flags & 4096 && (c.haschanged_flags &= -4097, n());
                        c.haschanged_flags & 8192 && (c.haschanged_flags &= -8193, b());
                        c.haschanged_flags & 32768 && (c.haschanged_flags &= -32769, e());
                        c.haschanged_flags & 16384 && (c.haschanged_flags &= -16385, t());
                        c.haschanged_flags & 65536 && (c.haschanged_flags &= -65537, N = !0, c.requestUpdate());
                        c.ishotspot && c.processUpdatesHS()
                    };
                    c.updatepluginpos = c.updatepos = function (a) {
                        if (!(1 > $a) && (a = c.sprite)) {
                            var b = ba, e = Ua, f = Ea;
                            0 != c.haschanged_flags && c.processUpdates();
                            var g = c.loader;
                            if (g && 0 == c.loaded) a.style.display = "none"; else if (c.poschanged = !1, a && (g || 0 != G)) {
                                G && (g = null);
                                var h = c.ishotspot, l = D.scale, n = c._use_css_scale, p = c.imagewidth, q = c.imageheight;
                                if (g && (0 >= p || 0 >= q)) a.style.display = "none"; else {
                                    var r = !1, t = D.crop;
                                    c.pressed && D.ondowncrop ? t = D.ondowncrop : c.hovering && D.onovercrop && (t = D.onovercrop);
                                    t && (t = String(t).split("|"), 4 == t.length ? (t[0] |= 0, t[1] |= 0, t[2] |= 0, t[3] |= 0) : t = null);
                                    var u = c.scale9grid;
                                    u && (u = String(u).split("|"), 4 <= u.length ? (u[0] |= 0, u[1] |= 0, u[2] |= 0, u[3] |= 0, n = c._use_css_scale = !1, D.scalechildren = !1) : u = null);
                                    h && c.distorted && (b = 1, e = f = 1E3);
                                    var w = 1, v = 1, x = c._parent, E = !0;
                                    if (x) {
                                        var y = m(x);
                                        y ? (y.poschanged && y.updatepos(c.getfullpath() + _[563]), 0 == n ? (e = y._pxw * b, f = y._pxh * b) : (e = y.imagewidth * b, f = y.imageheight * b), y.DATA.scalechildren ? (w = 0 != y.imagewidth ? e / b / y.imagewidth : 1, v = 0 != y.imageheight ? f / b / y.imageheight : 1) : (w *= y._finalxscale, v *= y._finalyscale), 0 == y.loaded && (E = !1, a.style.display = "none")) : wa(3, 'no parent "' + x + '" found')
                                    }
                                    var C = B.flags, z = B.w, A = B.h, F = B.x, H = B.y, x = B.ox, J = B.oy;
                                    0 == (C & 3) ? z = p : 2 == (C & 3) && (z *= e / b / w);
                                    0 == (C & 12) ? A = q : 8 == (C & 12) && (A *= f / b / v);
                                    z *= b;
                                    A *= b;
                                    0 > z && (z = e / w + z, 0 > z && (z = 0));
                                    0 > A && (A = f / v + A, 0 > A && (A = 0));
                                    3 == (C & 3) ? z = 0 != q ? A * p / q : 0 : 12 == (C & 12) && (A = 0 != p ? z * q / p : 0);
                                    0 < c.maxwidth && z > b * c.maxwidth && (z = b * c.maxwidth);
                                    0 < c.minwidth && z < b * c.minwidth && (z = b * c.minwidth);
                                    0 < c.maxheight && A > b * c.maxheight && (A = b * c.maxheight);
                                    0 < c.minheight && A < b * c.minheight && (A = b * c.minheight);
                                    z = z * w * l;
                                    A = A * v * l;
                                    h || 0 != c.accuracy || (z = Tc(z), A = Tc(A));
                                    F *= C & 16 ? e : b * w;
                                    H *= C & 32 ? f : b * v;
                                    l = c._hszscale;
                                    x *= C & 64 ? z * l : w * b;
                                    J *= C & 128 ? A * l : v * b;
                                    c._oxpix = x;
                                    c._oypix = J;
                                    var K = 0 != p ? z / p : 0, Q = 0 != q ? A / q : 0, l = K, C = Q, L = z / b, P = A / b;
                                    if (L != c._pxw || P != c._pxh) c._pxw = L, c._pxh = P, c.pixelwidth = L / w, c.pixelheight = P / v, r = !0;
                                    D.scalechildren ? (c._finalxscale = K, c._finalyscale = Q) : (c._finalxscale = w, c._finalyscale = v);
                                    n ? (a.style.width = p + "px", a.style.height = q + "px", K = Q = 1) : (a.style.width = z + "px", a.style.height = A + "px");
                                    if (g) if (u) {
                                        var K = u, Q = z, L = A, O = t, t = c.sprite, p = c.loader, M, P = ba;
                                        5 == K.length && (P *= Number(K[4]));
                                        M = p.naturalWidth;
                                        g = p.naturalHeight;
                                        null == O && (O = [0, 0, M, g]);
                                        p = 'url("' + p.src + '")';
                                        if (null == ra) for (ra = Array(9), u = 0; 9 > u; u++) q = Ha(), q.kobject = c, q.imgurl = null, q.style.position = _[0], q.style.overflow = _[6], ra[u] = q, t.appendChild(q);
                                        for (var u = [O[0] + 0, O[0] + K[0], O[0] + K[0] + K[2], O[0] + O[2]], w = [O[1] + 0, O[1] + K[1], O[1] + K[1] + K[3], O[1] + O[3]], v = [K[0], K[2], O[2] - K[0] - K[2]], K = [K[1], K[3], O[3] - K[1] - K[3]], Q = [v[0] * P | 0, Q - ((v[0] + v[2]) * P | 0), v[2] * P | 0], S = [K[0] * P | 0, L - ((K[0] + K[2]) * P | 0), K[2] * P | 0], X = [0, Q[0], Q[0] + Q[1]], Y = [0, S[0], S[0] + S[1]], V, ga, O = 0; 3 > O; O++) for (P = 0; 3 > P; P++) q = ra[3 * O + P], L = q.style, V = 0 != v[P] ? Q[P] / v[P] : 0, ga = 0 != K[O] ? S[O] / K[O] : 0, q.imgurl != p && (q.imgurl = p, L.backgroundImage = p), q = d.mac && d.firefox ? W.devicePixelRatio : 1, L[ne] = (M * V * q | 0) / q + "px " + (g * ga * q | 0) / q + "px", L.backgroundPosition = (-u[P] * V * q | 0) / q + "px " + (-w[O] * ga * q | 0) / q + "px", L.left = X[P] + "px", L.top = Y[O] + "px", L.width = Q[P] + "px", L.height = S[O] + "px";
                                        t.style.background = "none"
                                    } else {
                                        if (ra && (p = c.sprite)) {
                                            try {
                                                for (M = 0; 9 > M; M++) ra[M].kobject = null, p.removeChild(ra[M])
                                            } catch (aa) {
                                            }
                                            ra = null;
                                            c.loader && (p.style.backgroundImage = 'url("' + c.loader.src + '")')
                                        }
                                        a.style.backgroundPosition = t ? -t[0] * K + "px " + -t[1] * Q + "px" : "0 0";
                                        a.style[ne] = g.naturalWidth * K + "px " + g.naturalHeight * Q + "px"
                                    }
                                    c.jsplugin && c.jsplugin.onresize && (c._pxw != c.imagewidth || c._pxh != c.imageheight || c.forceresize) && (t = [c.imagewidth, c.imageheight], c.imagewidth = 0 < c._pxw ? c._pxw : 1, c.imageheight = 0 < c._pxh ? c._pxh : 1, c.forceresize = !1, !0 === c.jsplugin.onresize(c._pxw, c._pxh) && (c.imagewidth = t[0], c.imageheight = t[1]));
                                    p = "";
                                    M = t = 0;
                                    0 == h && (h = B.ex * -z, g = B.ey * -A, t = B.ax * e + B.asx * F + h, M = B.ay * f + B.asy * H + g, c.pixelx = (t + x) / b, c.pixely = (M + J) / b, t -= Z[3], M -= Z[0], 0 == c.accuracy && (t = Tc(t), M = Tc(M)), b = z / 2 + h, e = A / 2 + g, n && (f = n = 1, A = c.imagewidth / 2, z = c.imageheight / 2, H = F = 0, y && 0 == y.DATA.scalechildren && (n /= y.pixelwidth / y.imagewidth, f /= y.pixelheight / y.imageheight, F = -h * (1 - n), H = -g * (1 - f)), p = _[79] + (F - A) + "px," + (H - z) + _[409] + l * n + "," + C * f + _[348] + A + "px," + z + "px) ", 0 != l && (b /= l, x /= l), 0 != C && (e /= C, J /= C)), p = _[79] + t + "px," + M + "px) " + p + _[79] + -b + "px," + -e + _[392] + D.rotate + _[275] + (b + x) + "px," + (e + J) + "px)", Uc && 2 > Ic && !0 !== d.opera ? p = _[204] + p : d.androidstock && (p = _[226] + p), qb ? a.style[qb] = p : (a.style.left = t + "px", a.style.top = M + "px"), y = D.visible && E ? "" : "none", y != a.style.display && (a.style.display = y));
                                    if (r || N) {
                                        if (a = c._childs) for (y = a.length, c.poschanged = !1, r = 0; r < y; r++) a[r].updatepos(c.getfullpath() + _[539] + r + "]");
                                        N = !1
                                    }
                                }
                            }
                        }
                    }
                }, Rf = function () {
                    function a(a, c, d, e) {
                        g.registerattribute(c, d, function (d) {
                            t[c] != d && (t[c] = d, null != e ? e(c, d) : b(a))
                        }, function () {
                            return t[c]
                        })
                    }

                    function b(a) {
                        z |= a;
                        g && null == C && (C = setTimeout(q, 0))
                    }

                    function q() {
                        C = null;
                        if (g) {
                            var a = !1;
                            2 == z && (a = r());
                            0 == a && H();
                            e();
                            z = 0
                        }
                    }

                    function e() {
                        g && (g._tf_id = g.name + "_" + ++y)
                    }

                    function f(a) {
                        a && 0 == a.indexOf("data:") && ((a = O("data[" + a.slice(5) + _[83])) || (a = ""));
                        return a
                    }

                    function n(a) {
                        if (a && a.parentNode) try {
                            a.parentNode.removeChild(a)
                        } catch (b) {
                        }
                    }

                    function m(a) {
                        a && (a.style.left = _[144], a.style.visibility = _[6], Y.viewerlayer.appendChild(a), a.childNodes[0].getBoundingClientRect())
                    }

                    function h(a) {
                        a.ontouchend = function () {
                            a.click()
                        }
                    }

                    function r() {
                        var a = !1;
                        if (S) {
                            var b = S.childNodes[0];
                            if (b) {
                                var a = b.style, b = ma(t.background), c = ma(t.border), e = parseInt(t.backgroundcolor),
                                    f = parseFloat(t.backgroundalpha);
                                isNaN(f) && (f = 1);
                                var h = c ? parseFloat(t.borderwidth) : 0;
                                isNaN(h) && (h = 1);
                                var l = t.bordercolor, l = l ? parseInt(l) : 0, m = ma(t.mergedalpha),
                                    n = parseFloat(t.borderalpha);
                                isNaN(n) && (n = 1);
                                var p = Number(t.textshadow);
                                isNaN(p) && (p = 0);
                                var q = t.textshadowangle * Z, u = Number(t.shadow);
                                isNaN(u) && (u = 0);
                                var w = d.firefox ? .78 : .8, v = t.shadowangle * Z, x = Math.round(u * Math.cos(v)),
                                    v = Math.round(u * Math.sin(v)), y = parseFloat(t.shadowrange);
                                if (isNaN(y) || 0 > y) y = 0;
                                a.backgroundColor = b ? fa(e, f) : "";
                                a.borderColor = c && 0 < h ? fa(l, (m ? f : 1) * n) : "";
                                a.borderRadius = 0 < B[0] + B[1] + B[2] + B[3] ? B.join("px ") + "px" : "";
                                a[uc] = b && 0 < u ? x + "px " + v + "px " + w * y + "px " + fa(t.shadowcolor, (m ? f : 1) * t.shadowalpha) : "";
                                a.textShadow = 0 < p ? Math.round(p * Math.cos(q)) + "px " + Math.round(p * Math.sin(q)) + "px " + w * t.textshadowrange + "px " + fa(t.textshadowcolor, (m ? f : 1) * t.textshadowalpha) : "";
                                L[0] = h;
                                L[1] = h;
                                L[2] = h;
                                L[3] = h;
                                b && 0 < u && (L[0] -= Math.min(x - y, 0), L[1] += Math.max(x + y, 0), L[2] -= Math.min(v - y, 0), L[3] += Math.max(v + y, 0));
                                a = !0;
                                g.GL && (Qa = !0)
                            }
                        }
                        return a
                    }

                    function H() {
                        if (g) {
                            C && (clearTimeout(C), C = null);
                            0 != g.haschanged_flags && g.processUpdates();
                            var a = 2 == F || 1 == F && 0 == g.haveUserWidth(),
                                b = 2 == l || 1 == l && 0 == g.haveUserHeight(), e = t.html, n = t.css, e = e ? f(e) : "",
                                n = n ? f(n) : "";
                            ma(t.background);
                            var p = ma(t.border), q = parseFloat(t.borderwidth);
                            isNaN(q) && (q = 1);
                            var e = ae(e), n = n.split("0x").join("#"), u = n.split("}").join("{").split("{");
                            if (1 < u.length) {
                                for (var w = [], n = 1; n < u.length; n += 2) {
                                    var v = Wa(u[n - 1]), y = u[n], B = "p" == J(v) ? "div" : v,
                                        e = e.split("<" + v).join("<" + B + _[501] + y + "' "),
                                        e = e.split("</" + v + ">").join("</" + B + ">");
                                    w.push(u[n])
                                }
                                n = ""
                            }
                            e = _[238] + D[0] + "px " + D[1] + "px " + D[2] + "px " + D[3] + "px;" + n + "'>" + e + _[92];
                            1 == t.vcenter ? e = "<table style='width:100%;height:100%;border-collapse:collapse;text-decoration:inherit;'><tr style='vertical-align:middle;'><td style='padding:0;'>" + e + _[108] : g.ishotspot && (e = "<table style='width:100%;height:100%;border-collapse:collapse;text-decoration:inherit;'><tr style='vertical-align:top;'><td style='padding:0;'>" + e + _[108]);
                            e = e.split("<p").join(_[182]);
                            e = e.split("</p>").join(_[92]);
                            n = _[244];
                            if (1 == a || 0 == ma(t.wordwrap)) n += _[232];
                            0 == b && (n += _[351]);
                            P = 1;
                            p && 0 < q ? (P = q * ba, n += _[567] + Math.ceil(q) + _[221]) : P = 0;
                            0 == a && (n += _[610] + g.imagewidth + _[234]);
                            e = unescape(e);
                            e = '<div style="' + n + '">' + e + _[92];
                            S && S.parentNode == g.sprite && (N = S, S = null);
                            null == S && (S = Ha(), K = S.style, ma(t.selectable) && (K.webkitUserSelect = K.MozUserSelect = K.msUserSelect = K.oUserSelect = K.userSelect = "text", K.cursor = "text"), K.position = _[0], K.left = K.top = -P + "px", _[7] == g._type && 1 == g.DATA.distorted ? (K.width = "100%", K.height = "100%", K[qb] = "") : (K[$c] = "0 0", K[qb] = _[161] + ba + ")", K.width = 100 / ba + "%", K.height = 100 / ba + "%"), K.fontSize = "12px", K.fontFamily = "Arial", K.lineHeight = _[61]);
                            S.innerHTML = e;
                            r();
                            a = g.interactivecontent;
                            if (b = S.getElementsByTagName("a")) if (e = b.length, 0 < e) for (a = !0, n = 0; n < e; n++) if (p = b[n]) q = "" + p.href, _[612] == q.toLowerCase().slice(0, 6) && (p.href = _[192] + Y.viewerlayer.id + _[474] + q.slice(6).split("'").join('"') + "','" + g.getfullpath() + "');"), d.touch && h(p);
                            0 < S.getElementsByTagName(_[568]).length && (a = !0);
                            S.style.pointerEvents = a ? "auto" : "none";
                            _[7] == g._type && (g.forceupdate = !0);
                            m(S);
                            c = !1;
                            g.loaded = !0;
                            n = g.DATA.scalechildren;
                            g.DATA.scalechildren = !n;
                            g.scalechildren = n;
                            G = 0;
                            X = $a;
                            null == Q && (Q = setTimeout(E, 10));
                            z = 0
                        }
                    }

                    function E() {
                        Q = null;
                        c = !1;
                        if (g && S) {
                            var a = 2 == F || 1 == F && 0 == g.haveUserWidth(),
                                b = 2 == l || 1 == l && 0 == g.haveUserHeight();
                            M = !0;
                            var d = S && (S.parentNode == g.sprite || null == g.sprite && !!g.GL), e = 0, f = 0;
                            if (0 == a && 0 == b) f = g.imageheight, 1 > f && (f = 1); else {
                                try {
                                    if (e = S.childNodes[0].clientWidth, f = S.childNodes[0].clientHeight, 0 == e || 3 > f) f = 0
                                } catch (h) {
                                }
                                if (1 > f && d && S.parentNode && 1 > S.parentNode.clientHeight) {
                                    m(S);
                                    G = 0;
                                    X = $a;
                                    null == Q && (Q = setTimeout(E, 10));
                                    M = !1;
                                    return
                                }
                            }
                            if (0 < f) {
                                if (d = g.DATA.enabled, g.DATA.enabled = !d, g.enabled = d, K.top = K.left = -P + "px", c = !0, N && N.parentNode == g.sprite ? (K.visibility = _[16], g.sprite.replaceChild(S, N), N = null) : (n(N), N = null, g.sprite && (K.visibility = _[16], g.sprite.appendChild(S))), 0 != a || 0 != b) if (e = a ? Math.round(e) : g.imagewidth, f = b ? Math.round(f) : g.imageheight, e != g.DATA.width || f != g.DATA.height) a && b ? g.registersize(e, f) : a ? g.registersize(e, null) : b && g.registersize(null, f), g.updatepluginpos(_[138]), _[7] == g._type && ge(!0, g.index), g.onautosized && aa.callaction(g.onautosized, g, !0)
                            } else G++, 3 > G || $a < X + 1 ? null == Q && (Q = setTimeout(E, 20)) : (N && N.parentNode == g.sprite && (g.sprite.replaceChild(S, N), N = null), g.DATA.height = 0);
                            M = !1
                        }
                    }

                    function A() {
                        if (g._tf_id != g._tf_canvas_id || 0 == c) return !0;
                        var a = g.getparsed(), b = a.w, a = a.h;
                        return b != g.imagewidth || a != g.imageheight || g.forceresize ? (g.imagewidth = b, g.imageheight = a, g.forceresize = !1, v.onresize(b, a), !0) : !1
                    }

                    function p() {
                        function a(b, c) {
                            var d, e = b.length;
                            for (d = 0; d < e; d++) {
                                var f = b[d];
                                if (0 == f.childNodes.length) {
                                    if ("BR" != f.nodeName) {
                                        var g = f.nodeValue;
                                        if (g && "" != g.trim()) {
                                            var h = _[82] == M.textDecorationLine || c & 4;
                                            D.font = M.fontStyle + " " + M.fontWeight + " " + M.fontSize + " " + M.fontFamily;
                                            D.fillStyle = M.color;
                                            Q.selectNodeContents(f);
                                            var f = Q.getClientRects(), k = f.length, l, m;
                                            if (1 == k) {
                                                if (l = f[0].left, m = f[0].bottom, D.fillText(g, E + l, C + m), h) {
                                                    var n = .075 * parseFloat(M.fontSize);
                                                    D.fillStyle = M.textDecorationColor;
                                                    D.fillRect(E + l, C + m - 1.5 * n, f[0].width, n)
                                                }
                                            } else if (1 < k) for (var g = g.split(" "), p = g.length, q = 0, r = 0; r < k; r++) {
                                                l = f[r].left;
                                                m = f[r].bottom;
                                                for (var n = f[r].width, t = 0, u = ""; q < p;) {
                                                    var w = g[q], v = .99 * D.measureText(u + w).width;
                                                    if (v > n) break;
                                                    t = v;
                                                    u += w + " ";
                                                    q++
                                                }
                                                D.fillText(u, E + l, C + m);
                                                h && (n = .075 * parseFloat(M.fontSize), D.fillStyle = M.textDecorationColor, D.fillRect(E + l, C + m - 1.5 * n, t, n))
                                            }
                                        }
                                    }
                                } else h = c, k = M, M = getComputedStyle(f), l = ("" + f.nodeName).toLowerCase(), "b" == l ? c |= 1 : "i" == l ? c |= 2 : "u" == l && (c |= 4), a(f.childNodes, c), M = k, c = h
                            }
                        }

                        var b = g.getparsed(), e = b.w, f = b.h;
                        if (e != g.imagewidth || void 0 === g.imagewidth || f != g.imageheight || void 0 === g.imageheight || g.forceresize) g.imagewidth = e, g.imageheight = f, g.forceresize = !1, v.onresize(e, f); else if (0 == c) v.onresize(e, f);
                        if (0 >= e || 0 >= f || !S) return null;
                        var h = ma(t.background), l = parseInt(t.backgroundcolor), b = parseFloat(t.backgroundalpha);
                        isNaN(b) && (b = 1);
                        var m = P / ba, n = t.bordercolor, n = n ? parseInt(n) : 0, p = parseFloat(t.borderalpha);
                        isNaN(p) && (p = 1);
                        var q = ma(t.mergedalpha), r = Number(t.shadow);
                        isNaN(r) && (r = 0);
                        var w = t.shadowangle * Z, x = Number(t.textshadow);
                        isNaN(x) && (x = 0);
                        var y = t.textshadowangle * Z, z = e, A = f, E = 0, C = 0, E = L[0], C = L[2],
                            e = e + (L[0] + L[1]), f = f + (L[2] + L[3]);
                        null == V && (V = {}, V.canvas = Ha(2), V.ctx = V.canvas.getContext("2d"));
                        var F = V.canvas, D = V.ctx, G = 1 * d.pixelratio, H = Za.getMaxTexSize() - 1;
                        0 >= H && (H = 2047);
                        var J = G, K = G, N = e * J + .5 | 0, O = f * K + .5 | 0;
                        N > H && (J = H / N, N = H);
                        O > H && (K = H / O, O = H);
                        F.width = N;
                        F.height = O;
                        D.scale(J, K);
                        r *= G;
                        x *= G;
                        D.clearRect(0, 0, e, f);
                        if (h || 0 < m) f = e = null, 0 < B[0] + B[1] + B[2] + B[3] && (e = [], e[0] = B[0], e[1] = B[1], e[2] = B[2], e[3] = B[3], f = e), 0 < m && e && (f = [], f[0] = Math.max(e[0] - m, 0), f[1] = Math.max(e[1] - m, 0), f[2] = Math.max(e[2] - m, 0), f[3] = Math.max(e[3] - m, 0)), p *= q ? b : 1, 0 < r && (D.shadowBlur = t.shadowrange * G, D.shadowColor = fa(t.shadowcolor, (q ? b : 1) * t.shadowalpha), D.shadowOffsetX = Math.round(r * Math.cos(w)), D.shadowOffsetY = Math.round(r * Math.sin(w)), D.fillStyle = fa(0 < m ? n : l, 1), D.globalCompositeOperation = _[75], u(D, E - m, C - m, z + 2 * m, A + 2 * m, e), D.shadowBlur = D.shadowColor = D.shadowOffsetX = D.shadowOffsetY = 0, D.globalCompositeOperation = _[112], u(D, E - m, C - m, z + 2 * m, A + 2 * m, e), D.globalCompositeOperation = _[75]), 0 < m && (h && (D.fillStyle = fa(l, b), u(D, E - m, C - m, z + 2 * m, A + 2 * m, e)), D.fillStyle = fa(n, p), u(D, E - m, C - m, z + 2 * m, A + 2 * m, e), D.globalCompositeOperation = _[112], D.fillStyle = fa(l, 1), u(D, E, C, z, A, f), D.globalCompositeOperation = _[75]), h && (D.fillStyle = fa(l, b), u(D, E, C, z, A, f));
                        D.textBaseline = _[3];
                        var h = S.childNodes[0].childNodes[0], M = getComputedStyle(h), Q = ca.createRange();
                        Q.selectNodeContents(h.childNodes[0]);
                        l = Q.getBoundingClientRect();
                        D.beginPath();
                        D.rect(E, C, z, A);
                        D.clip();
                        E -= l.left;
                        C -= l.top;
                        0 < x ? (D.shadowBlur = t.textshadowrange * G, D.shadowColor = fa(t.textshadowcolor, (q ? b : 1) * t.textshadowalpha), D.shadowOffsetX = Math.round(x * Math.cos(y)), D.shadowOffsetY = Math.round(x * Math.sin(y))) : D.shadowBlur = D.shadowColor = D.shadowOffsetX = D.shadowOffsetY = 0;
                        a(h.childNodes, 0);
                        g._tf_canvas_id = g._tf_id;
                        return F
                    }

                    function u(a, b, c, d, e, f) {
                        f ? (a.beginPath(), a.moveTo(b, c + f[3]), a.lineTo(b, c + e - f[3]), a.arcTo(b, c + e, b + f[3], c + e, f[3]), a.lineTo(b + d - f[2], c + e), a.arcTo(b + d, c + e, b + d, c + e - f[2], f[2]), a.lineTo(b + d, c + f[1]), a.arcTo(b + d, c, b + d - f[1], c, f[1]), a.lineTo(b + f[0], c), a.arcTo(b, c, b, c + f[0], f[0]), a.closePath(), a.fill()) : a.fillRect(b, c, d, e)
                    }

                    var v = this, g = null, t = {}, C = null, z = 0, y = 0, F = 1, l = 1, c = !1, D = [0, 0, 0, 0],
                        B = [0, 0, 0, 0], P = 1, L = [0, 0, 0, 0], Q = null, M = !1, G = 0, X = 0, W = ba, N = null,
                        S = null, K = null;
                    v.registerplugin = function (c, d, f) {
                        g = f;
                        c = g.html;
                        d = g.css;
                        delete g.html;
                        delete g.css;
                        g._istextfield = !0;
                        g._tf_extends = L;
                        e();
                        g.accuracy = 0;
                        g.registerattribute(_[472], "auto", function (a) {
                            F = "auto" == J(a) ? 1 : 2 * ma(a);
                            b(1)
                        }, function () {
                            return 1 == F ? "auto" : 2 == F ? "true" : _[27]
                        });
                        g.registerattribute(_[403], "auto", function (a) {
                            l = "auto" == J(a) ? 1 : 2 * ma(a);
                            b(1)
                        }, function () {
                            return 1 == l ? "auto" : 2 == l ? "true" : _[27]
                        });
                        g.registerattribute(_[242], !1);
                        a(1, _[528], !1);
                        a(1, _[54], "2", function (a, c) {
                            Fc(c, 1, " ", D);
                            b(1)
                        });
                        a(2, _[135], !0);
                        a(2, _[301], 1);
                        a(2, _[300], 16777215);
                        a(1, _[93], !1);
                        a(1, _[126], 1);
                        a(2, _[131], 1);
                        a(2, _[398], !0);
                        a(2, _[128], 0);
                        a(2, _[471], "0", function (a, c) {
                            Fc(c, 1, " ", B);
                            b(2)
                        });
                        a(2, _[600], 0);
                        a(2, _[397], 4);
                        a(2, _[396], 45);
                        a(2, _[395], 0);
                        a(2, _[388], 1);
                        a(2, _[410], 0);
                        a(2, _[291], 4);
                        a(2, _[290], 45);
                        a(2, _[289], 0);
                        a(2, _[288], 1);
                        a(1, _[412], !1);
                        a(1, _[521], !0);
                        a(1, _[592], "");
                        g.registerSetterGetter("bg", function (a) {
                            g.background = a
                        }, function () {
                            return t.background
                        });
                        g.registerSetterGetter(_[152], function (a) {
                            g.backgroundcolor = a
                        }, function () {
                            return t.backgroundcolor
                        });
                        g.registerSetterGetter(_[157], function (a) {
                            g.backgroundalpha = a
                        }, function () {
                            return t.backgroundalpha
                        });
                        g.registerSetterGetter(_[143], function (a) {
                            a = a.split(" ");
                            var b = parseFloat(a[0]);
                            isNaN(b) && (b = 0);
                            g.border = 0 < b;
                            g.borderwidth = b;
                            g.bordercolor = parseInt(a[1]);
                            a = parseFloat(a[2]);
                            g.borderalpha = isNaN(a) ? 1 : a;
                            g.mergedalpha = !1
                        }, function () {
                            return t.borderwidth + " " + zd(t.bordercolor) + " " + t.borderalpha
                        });
                        g.registerSetterGetter(_[127], function (a) {
                            g.roundedge = a
                        }, function () {
                            return t.roundedge
                        });
                        g.registerSetterGetter(_[148], function (a) {
                            a = a.split(" ");
                            if (5 == a.length) {
                                var b = parseFloat(a[0]), c = parseFloat(a[1]), d = Math.sqrt(b * b + c * c);
                                g.shadow = 0 == d ? .001 : d;
                                g.shadowangle = Math.atan2(c, b) / Z;
                                g.shadowrange = a[2];
                                g.shadowcolor = a[3];
                                g.shadowalpha = a[4]
                            } else g.shadow = 0
                        }, function () {
                            var a = t.shadow;
                            if (0 == a) return "";
                            var b = t.shadowangle * Z, c = Math.round(a * Math.cos(b)), a = Math.round(a * Math.sin(b));
                            return c + " " + a + " " + t.shadowrange + " " + zd(t.shadowcolor) + " " + t.shadowalpha
                        });
                        g.registerSetterGetter(_[463], function (a) {
                            a = a.split(" ");
                            if (5 == a.length) {
                                var b = parseFloat(a[0]), c = parseFloat(a[1]), d = Math.sqrt(b * b + c * c);
                                g.textshadow = 0 == d ? .001 : d;
                                g.textshadowangle = Math.atan2(c, b) / Z;
                                g.textshadowrange = a[2];
                                g.textshadowcolor = a[3];
                                g.textshadowalpha = a[4]
                            } else g.textshadow = 0
                        }, function () {
                            var a = t.textshadow;
                            if (0 == a) return "";
                            var b = t.textshadowangle * Z, c = Math.round(a * Math.cos(b)), a = Math.round(a * Math.sin(b));
                            return c + " " + a + " " + t.textshadowrange + " " + zd(t.textshadowcolor) + " " + t.textshadowalpha
                        });
                        g.registerattribute("blur", 0);
                        g.registerattribute(_[518], 0);
                        g.registerattribute(_[515], null, function (a) {
                            null != a && "" != a && "none" != ("" + a).toLowerCase() && (l = 2, b(1))
                        }, function () {
                            return 2 == l ? _[96] : "none"
                        });
                        0 != F && 0 != l || g.registercontentsize(400, 300);
                        g.sprite && (g.sprite.style.color = _[38], g.sprite.style[_[67]] = "none", g.sprite.style.pointerEvents = "none");
                        a(1, "html", c ? c : "");
                        a(1, "css", d ? d : "");
                        g.renderToCanvasUpdateCheck = A;
                        g.renderToCanvas = p
                    };
                    v.unloadplugin = function () {
                        g && (g.loaded = !1, Q && clearTimeout(Q), C && clearTimeout(C), n(N), n(S));
                        g = C = Q = K = S = N = null
                    };
                    v.onvisibilitychanged = function (a) {
                        a && _[7] == g._type && (g.forceupdate = !0);
                        return !1
                    };
                    v.onresize = function (a, b) {
                        if (W != ba) return W = ba, Fc(t.padding, 1, " ", D), Fc(t.roundedge, 1, " ", B), H(), !1;
                        if (M) return !1;
                        if (g) {
                            var d = 2 == F || 1 == F && 0 == g.haveUserWidth(),
                                e = 2 == l || 1 == l && 0 == g.haveUserHeight();
                            g.registercontentsize(a, b);
                            S && (0 == g.ishotspot ? (K[qb] = _[161] + ba + ")", K.width = 100 / ba + "%", K.height = 100 / ba + "%") : (K[qb] = "", K.width = "100%", K.height = "100%"), c && (K.left = K.top = -P + "px"), 0 == d && (S.childNodes[0].style.width = a + "px"), 0 == e && (S.childNodes[0].style.height = b + "px"), d || e ? (c = !1, g.sprite && (d && (g.sprite.style.width = 0), e && (g.sprite.style.height = 0)), G = 0, X = $a, null == Q && (Q = setTimeout(E, 10))) : (0 == d && (K.width = a + 2 * P + "px"), 0 == e && (K.height = b + "px")))
                        }
                        return !1
                    };
                    v.updatehtml = H;
                    var V = null
                }, Gc = 1, Mf = function () {
                    function a() {
                        var a = J(q.renderer), e = q.webGL, e = _[65] == a ? !1 : d.webgl;
                        if (q.webGL = e) {
                            if (b.sprite) {
                                try {
                                    Y.hotspotlayer.removeChild(b.sprite)
                                } catch (m) {
                                }
                                b.destroySprite();
                                Qa = b.renderToBitmap = !0
                            }
                        } else b.sprite || (b.renderToBitmap = !1, b.createSprite(), Y.hotspotlayer.appendChild(b.sprite), b.videoDOM && b.sprite.appendChild(b.videoDOM), b.posterDOM && b.sprite.appendChild(b.posterDOM), 0 == b._isNE() && b.loaded && (b.sprite.style.backgroundImage = 'url("' + b.loader.src + '")'), Qa = !0)
                    }

                    var b = this;
                    b.prototype = Jc;
                    this.prototype.call(this);
                    b._type = _[7];
                    b.ishotspot = !0;
                    var q = b.DATA;
                    q.webGL = d.webgl;
                    q.mx_RR = Aa();
                    b.createVars([_[512], q.webGL ? _[63] : _[65], 131072, _[423], !1, 8, _[269], !1, 8, "ath", 0, 8, "atv", 0, 8, "zoom", !1, 1048576, _[460], !1, 1048576, _[160], "", 8, "depth", 1E3, 2048, _[582], 0, 8, "rx", 0, 262144, "ry", 0, 262144, "rz", 0, 262144, _[297], !1, 262144, "tx", 0, 524288, "ty", 0, 524288, "tz", 0, 524288]);
                    b.edge = _[96];
                    b.accuracy = 1;
                    b.scaleflying = !0;
                    b.zorder2 = 0;
                    b.forceupdate = !1;
                    b.renderToBitmap = d.webgl;
                    Sb = !0;
                    b.point = new Gb(null);
                    var e = b.create;
                    b.create = function () {
                        e();
                        a()
                    };
                    b.processUpdatesHS = function () {
                        b.haschanged_flags & 131072 && (b.haschanged_flags &= -131073, a());
                        if (b.haschanged_flags & 262144) {
                            b.haschanged_flags &= -262145;
                            var d = q.rx, e = q.ry, m = q.rz, h = b.getparsed();
                            0 != d || 0 != e || 0 != m ? (h.flags |= 1024, ee(q.mx_RR, m, e, d, !q.inverserotation)) : h.flags &= -1025;
                            b.requestUpdate()
                        }
                        b.haschanged_flags & 524288 && (b.haschanged_flags &= -524289, d = q.tx, e = q.ty, m = q.tz, h = b.getparsed(), h.flags = 0 != d || 0 != e || 0 != m ? h.flags | 2048 : h.flags & -2049, b.requestUpdate());
                        b.haschanged_flags & 1048576 && (b.haschanged_flags &= -1048577, b.requestUpdate());
                        b.haschanged_flags & Hc && (b.haschanged_flags &= ~Hc, Ce(b), b.requestUpdate())
                    };
                    b.updatepos = function () {
                        b.requestUpdate()
                    };
                    b.getcenter = function () {
                        var a = 0, d = 0, e = 25;
                        if (b.DATA.url) a = b.DATA.ath, d = b.DATA.atv, e = 25 * Number(b.DATA.scale); else {
                            for (var h = b.point.getArray(), q = 0, r = h.length, w, A, p, u = 5E4, v = -5E4, g = 5E4, t = -5E4, C = 5E4, z = -5E4, y = 0, F = 0, l = 0, q = 0; q < r; q++) A = h[q], w = Number(A.ath), p = Number(A.atv), A = 0 > w ? w + 360 : w, w < u && (u = w), w > v && (v = w), A < g && (g = A), A > t && (t = A), p < C && (C = p), p > z && (z = p), w = (180 - w) * Z, p *= Z, y += Math.cos(p) * Math.cos(w), l += Math.cos(p) * Math.sin(w), F += Math.sin(p);
                            0 < r && (y /= r, F /= r, l /= r, a = 90 + Math.atan2(y, l) / Z, d = -Math.atan2(-F, Math.sqrt(y * y + l * l)) / Z, 180 < a && (a -= 360), w = v - u, p = z - C, 170 < w && (w = t - g), e = w > p ? w : p)
                        }
                        1 > e ? e = 1 : 90 < e && (e = 90);
                        h = new Ec;
                        h.x = a;
                        h.y = d;
                        h.z = e;
                        e = arguments;
                        2 == e.length && (M(e[0], a, !1, this), M(e[1], d, !1, this));
                        return h
                    }
                }, he = "", Tb = 1,
                Df = "translate3D(;;px,;;px,0px) ;;rotateX(;;deg) rotateY(;;deg) ;;deg) rotateX(;;deg) scale3D(;;) translateZ(;;px) rotate(;;deg) translate(;;px,;;px) rotate;;deg) rotate;;deg) rotate;;deg) scale(;;,;;) translate(;;px,;;px)".split(";"),
                Ef = "translate(;;px,;;px) translate(;;px,;;px) rotate(;;deg) translate(;;px,;;px) scale(;;,;;) translate(;;px,;;px)".split(";"),
                Jf = function () {
                    this.fullscreen = d.fullscreensupport;
                    this.touch = this.versioninfo = !0;
                    this.customstyle = null;
                    this.enterfs = _[425];
                    this.exitfs = _[303];
                    this.item = new Gb(function () {
                        this.visible = this.enabled = !0;
                        this.caption = null;
                        this.separator = !1;
                        this.onclick = null
                    })
                }, Nf = function () {
                    function a() {
                        e = r.hlookat;
                        n = d.speed;
                        m = 0;
                        d.isrotating = !0;
                        d.ispaused = !1;
                        za(_[250])
                    }

                    function b() {
                        d.currentmovingspeed = 0;
                        d.isrotating = !1;
                        d.ispaused = !1;
                        za(_[265])
                    }

                    var d = this;
                    d.enabled = !1;
                    d.waittime = 1.5;
                    d.accel = 1;
                    d.speed = 10;
                    d.horizon = 0;
                    d.tofov = Number.NaN;
                    d.zoomslowdown = !0;
                    d.interruptionevents = "userviewchange|layers|keyboard";
                    d.isrotating = !1;
                    d.ispaused = !1;
                    var e = d.currentmovingspeed = 0, f = 0, n = 1, m = 0, h = !1;
                    d.start = function () {
                        d.enabled = !0;
                        f = Sa();
                        a()
                    };
                    d.stop = function () {
                        d.enabled = !1
                    };
                    d.pause = function () {
                        d.ispaused = !0
                    };
                    d.resume = function () {
                        d.ispaused = !1
                    };
                    d.interrupt = function () {
                        Xa(_[224])
                    };
                    d.checkIdletime = function (q, H) {
                        var E = d.enabled;
                        h != E && (h = E, d.ispaused = !1, za(_[246]));
                        if (E) {
                            if (!d.isrotating) {
                                if (d.ispaused) return Xa(_[237]), !1;
                                (q - H) / 1E3 > d.waittime && (f = q, a())
                            }
                            if (d.isrotating) if (H > f) b(); else {
                                if (d.ispaused) return !1;
                                var A = r._hlookat, p = r._vlookat, E = r._fov,
                                    u = d.zoomslowdown ? Math.tan(Math.min(.5 * E, 45) * Z) : 1, v = d.accel, g = d.speed,
                                    t = d.currentmovingspeed, v = v / 60, g = g / 60;
                                0 < g ? (t += v * v, t > g && (t = g)) : (t -= v * v, t < g && (t = g));
                                d.currentmovingspeed = t;
                                A += u * t;
                                if (0 < t && 0 > n || 0 > t && 0 < n) n = t, m++;
                                if (360 <= Math.abs(A - e) || 2 == m && (0 < t ? 0 < A : 0 > A)) e = A, m = 0, za(_[227]);
                                u = Math.abs(u * t);
                                r._hlookat = A;
                                A = parseFloat(d.horizon);
                                isNaN(A) || (A = (A - p) / 60, v = Math.abs(A), 0 < v && (v > u && (A = u * A / v), p += A, r._vlookat = p));
                                p = parseFloat(d.tofov);
                                isNaN(p) || (p < r.fovmin && (p = r.fovmin), p > r.fovmax && (p = r.fovmax), p = (p - E) / 60, A = Math.abs(p), 0 < A && (A > u && (p = u * p / A), r._fov = E + p));
                                return !0
                            }
                        } else d.isrotating && b();
                        return !1
                    }
                }, ce = function () {
                    function a(a) {
                        var b = la.FRM, d = q.webVR;
                        d && d.enabled && d.requestframe && d.requestframe(a) || (0 == b && n ? n(a) : (0 == b && (b = 60), d = 1E3 / b, b = (new Date).getTime(), d = Math.max(0, d - (b - f)), W.setTimeout(a, d), f = b + d))
                    }

                    function b() {
                        r && (e(), a(b))
                    }

                    var r = !0, e = null, f = 0,
                        n = W.requestAnimationFrame || W.webkitRequestAnimationFrame || W.mozRequestAnimationFrame || W.oRequestAnimationFrame || W.msRequestAnimationFrame;
                    return {
                        start: function (f) {
                            if (d.ios && 9 > d.iosversion || d.linux && d.chrome || d.desktop && d.safari) n = null;
                            r = !0;
                            e = f;
                            a(b)
                        }, stop: function () {
                            r = !1;
                            e = null
                        }
                    }
                }();
            bc.init = function (a) {
                bc.so = a;
                d.runDetection(a);
                if (d.css3d || d.webgl) qb = d.browser.css.transform, Ee = qb + "Style", $c = qb + _[95];
                ne = d.browser.css.backgroundsize;
                uc = d.browser.css.boxshadow;
                var b = 0;
                d.ios && 0 == d.simulator ? 5 <= d.iosversion && 1 != Ud && (b = 4) : d.android ? (Ic = 2, b = 4, d.firefox && (b = 0)) : (b = 2, d.desktop && d.safari && (b = 8), d.ie && (b = 8));
                d.browser.css.tileoverlap = b;
                Gf();
                if (!Y.build(a)) return !1;
                ea.layer = Y.controllayer;
                ea.panoControl = eb;
                ea.getMousePos = Y.getMousePos;
                la.htmltarget = Y.htmltarget;
                la.viewerlayer = Y.viewerlayer;
                wa(1, _[156] + q.version + _[494] + q.build + (q.debugmode ? _[551] : ")"));
                b = !0;
                a.html5 && 0 <= J(a.html5).indexOf(_[65]) && (b = !1);
                Za.setup(d.webgl && b ? 2 : 1);
                wa(1, d.infoString + Za.infoString);
                a && a.basepath && "" != a.basepath && (oa.swfpath = a.basepath);
                Y.onResize(null);
                eb.registerControls(Y.controllayer);
                ce.start(Of);
                if (!d.css3d && !d.webgl && 0 > J(a.html5).indexOf(_[575])) cb(_[174]); else {
                    var w = b = null, e = [], f = !0, n = 0, m = [],
                        h = "360etours.net clickcwb.com.br afu360.com webvr.net webvr.cn aero-scan.ru shambalaland.com littlstar.com d3uo9a4kiyu5sk.cloudfront.net vrvideo.com lapentor.com".split(" "),
                        x = _[170].split(" "), H = null, E = null, A = Xc(100), p = J(_[179]).split(";"), u, v;
                    if (null != Xb && "" != Xb) {
                        var g = oa.b64u8(Xb), t = g.split(";");
                        if (u = t[0] == p[0]) if (g = J(g), 0 <= g.indexOf(p[6]) || 0 <= g.indexOf(p[7]) || 0 <= g.indexOf(p[8])) u = !1;
                        var g = Xb = null, g = t.length, g = g - 2, C = t[g], z = 0;
                        0 == C.indexOf("ck=") ? C = C.slice(3) : u = !1;
                        if (u) for (u = 0; u < g; u++) {
                            var y = t[u], F = y.length;
                            for (v = 0; v < F; v++) z += y.charCodeAt(v) & 255;
                            if (!(4 > F) && (v = y.slice(3), "" != v)) switch (_[196].indexOf(y.slice(0, 3)) / 3 | 0) {
                                case 1:
                                    La = parseInt(v);
                                    f = 0 == (La & 1);
                                    break;
                                case 2:
                                    b = v;
                                    e.push(p[1] + "=" + v);
                                    break;
                                case 3:
                                    w = v;
                                    e.push(p[2] + v);
                                    break;
                                case 4:
                                    m.push(v);
                                    e.push(p[3] + "=" + v);
                                    break;
                                case 5:
                                    y = parseInt(v);
                                    H = new Date;
                                    H.setFullYear(y >> 16, (y >> 8 & 15) - 1, y & 63);
                                    break;
                                case 6:
                                    E = v;
                                    break;
                                case 7:
                                    F = y = v.length;
                                    if (128 > y) for (; 128 > F;) v += v.charAt(F % y), F++;
                                    me = v;
                                    break;
                                case 8:
                                    break;
                                case 9:
                                    Ia = v.split("|");
                                    4 != Ia.length && (Ia = null);
                                    break;
                                case 10:
                                    break;
                                default:
                                    e.push(y)
                            }
                        }
                        z != parseInt(C) && (n = 1);
                        u = ca.location;
                        u = J(u.search || u.hash);
                        if (0 < u.indexOf(_[113])) {
                            cb(e.join(", "), J(_[113]).toUpperCase());
                            return
                        }
                        0 < u.indexOf(_[285]) && (null == a.vars && (a.vars = {}), a.vars.consolelog = !0, La = La & 1 | 14);
                        t = null
                    }
                    e = J(ca[p[3]]);
                    La & 512 && (u = !1, d.topAccess ? J(top.document[p[3]]) != e && (u = !0) : u = !0, u && (n = 2));
                    Zc = e;
                    try {
                        throw Error("path");
                    } catch (l) {
                        u = "" + l.stack, t = u.indexOf("://"), 0 < t && (t += 3, g = u.indexOf("/", t), u = u.slice(t, g), g = u.indexOf(":"), 0 < g && (u = u.slice(0, g)), Zc = u)
                    }
                    0 == e.indexOf(_[614]) && (e = e.slice(4));
                    p = "" == e || _[454] == e || _[453] == e || 0 == e.indexOf(p[4]);
                    d.browser.domain = p ? null : e;
                    if (0 == (La & 2) && p) n = 3; else if (!p) {
                        u = e.indexOf(".") + 1;
                        0 > e.indexOf(".", u) && (u = 0);
                        p = e;
                        e = e.slice(u);
                        0 == e.indexOf(_[560]) && _[133] != e && (n = 2);
                        for (u = 0; u < h.length; u++) if (h[u] == e) {
                            n = 2;
                            break
                        }
                        if (0 == n && 0 < m.length) for (n = 2, u = 0; u < m.length; u++) if (e == m[u] || xd(m[u], p)) {
                            n = 0;
                            break
                        }
                    }
                    if (b || w) for (m = ("." + b + "." + w).toLowerCase(), u = 0; u < x.length; u++) 0 <= m.indexOf(x[u]) && (n = 1);
                    if (null != H && new Date > H) cb(_[304]), null != E && setTimeout(function () {
                        W.location = E
                    }, 500); else if (0 < n) cb(_[122] + ["", _[279], _[248]][n - 1]); else {
                        Ia && (La &= -129, wa(1, Ia[0]));
                        0 == f && (b ? wa(1, _[305] + b) : f = !0);
                        (f || 0 == (La & 1)) && Y.log(A);
                        f = null;
                        a.xml && (f = a.xml);
                        a.vars && (a.vars.xml && (f = a.vars.xml), f || (f = a.vars.pano));
                        0 == (La & 4) && (a.vars = null);
                        La & 16 && (q[$b[0]] = q[$b[1]] = !1);
                        n = Y.viewerlayer;
                        La & 8 ? (n.get = Cc(O), n.set = Cc(M), n.call = Xe) : (n.set = function () {
                            wa(2, _[201])
                        }, n.get = Ia ? Cc(O) : n.set, n.call = Cc(aa.SAcall));
                        n.screentosphere = r.screentosphere;
                        n.spheretoscreen = r.spheretoscreen;
                        n.unload = Ye;
                        !0 === a.exposeAPI && (n.krpanoAPI = q);
                        q.krpanolicense = {regname: b, regmail: w};
                        a.initvars && be(a.initvars);
                        aa.loadpano(f, a.vars);
                        if (a.onready) a.onready(n);
                        return !0
                    }
                }
            }
        }

        var _ = function () {
            var J = Xb;
            Xb = null;
            var Wa = J.length - 3, ma, ta, va, Ga = "", Qb = "", Ja = 1, Da = 0, da = [],
                qa = [1, 48, 55, 53, 38, 51, 52, 3];
            va = J.charCodeAt(4);
            for (ma = 5; ma < Wa; ma++) ta = J.charCodeAt(ma), 92 <= ta && ta--, 34 <= ta && ta--, ta -= 32, ta = (ta + 3 * ma + 59 + qa[ma & 7] + va) % 93, va = (23 * va + ta) % 32749, ta += 32, 124 == ta ? 0 == Ja ? Da ^= 1 : 1 == Da ? Da = 0 : (da.push(Ga), Ga = "", Ja = 0) : (ta = String.fromCharCode(ta), 0 == Da ? Ga += ta : Qb += ta, Ja++);
            0 < Ja && da.push(Ga);
            ta = 0;
            for (Wa += 3; ma < Wa;) ta = ta << 5 | J.charCodeAt(ma++) - 53;
            ta != va && (da = null);
            Xb = Qb;
            return da
        }();
        _ && _[137] != typeof krpanoJS && (new xd).init($d)
    };
}
;
