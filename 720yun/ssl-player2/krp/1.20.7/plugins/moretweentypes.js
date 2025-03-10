/*
	krpano 1.20.7 MoreTweenTypes Plugin (build 2020-05-26)
	https://krpano.com/plugins/moretweentypes/
*/
var krpanoplugin = function () {
    function d(a, c, b) {
        return a < 1 / 2.75 ? 7.5625 * b * a * a + c : a < 2 / 2.75 ? b * (7.5625 * (a -= 1.5 / 2.75) * a + .75) + c : a < 2.5 / 2.75 ? b * (7.5625 * (a -= 2.25 / 2.75) * a + .9375) + c : b * (7.5625 * (a -= 2.625 / 2.75) * a + .984375) + c
    }

    function e(a, c, b) {
        return (1 > (a /= .5) ? b / 2 * a * a : -b / 2 * (--a * (a - 2) - 1)) + c
    }

    function f(a, c, b) {
        .5 > a ? (a *= 2, c = -(b / 2) * a * (a - 2) + c) : (a = 2 * a - 1, c = b / 2 * a * a + (c + b / 2));
        return c
    }

    function g(a, c, b) {
        return 1 > (a /= .5) ? b / 2 * a * a * a + c : b / 2 * ((a -= 2) * a * a + 2) + c
    }

    function h(a, c, b) {
        .5 > a ? (a *= 2, c = b / 2 * (--a * a * a + 1) + c) : (a = 2 * a - 1, c = b / 2 * a * a * a + (c + b / 2));
        return c
    }

    function k(a, c, b) {
        return 1 > (a /= .5) ? b / 2 * a * a * a * a + c : -b / 2 * ((a -= 2) * a * a * a - 2) + c
    }

    function l(a, c, b) {
        .5 > a ? (a *= 2, c = -(b / 2) * (--a * a * a * a - 1) + c) : (a = 2 * a - 1, c = b / 2 * a * a * a * a + (c + b / 2));
        return c
    }

    function m(a, c, b) {
        return 1 > (a /= .5) ? b / 2 * a * a * a * a * a + c : b / 2 * ((a -= 2) * a * a * a * a + 2) + c
    }

    function n(a, c, b) {
        .5 > a ? (a *= 2, c = b / 2 * (--a * a * a * a * a + 1) + c) : (a = 2 * a - 1, c = b / 2 * a * a * a * a * a + (c + b / 2));
        return c
    }

    function p(a, c, b) {
        return -b / 2 * (Math.cos(Math.PI * a) - 1) + c
    }

    function q(a, c, b) {
        .5 > a ? a = b / 2 * Math.sin(Math.PI / 2 * a * 2) + c : (c += b / 2, b /= 2, a = -b * Math.cos(Math.PI / 2 * (2 *
            a - 1)) + b + c);
        return a
    }

    function r(a, c, b) {
        .5 > a ? (a *= 2, b /= 2, c = 1 == a ? c + b : 1.001 * b * (-Math.pow(2, -10 * a) + 1) + c) : (a = 2 * a - 1, c += b / 2, b /= 2, c = 0 == a ? c : b * Math.pow(2, 10 * (a - 1)) + c - .001 * b);
        return c
    }

    function t(a, c, b) {
        return 0 == a ? c : 1 == a ? c + b : 1 > a / 2 ? b / 2 * Math.pow(2, 10 * (a - 1)) + c - 5E-4 * b : b / 2 * 1.0005 * (-Math.pow(2, -10 * --a) + 2) + c
    }

    function u(a, c, b) {
        return 1 > (a /= .5) ? -b / 2 * (Math.sqrt(1 - a * a) - 1) + c : b / 2 * (Math.sqrt(1 - (a -= 2) * a) + 1) + c
    }

    function v(a, c, b) {
        .5 > a ? (a *= 2, b = b / 2 * Math.sqrt(1 - --a * a) + c) : (a = 2 * a - 1, c += b / 2, b = -(b / 2) * (Math.sqrt(1 - a * a) - 1) + c);
        return b
    }

    function w(a, c, b) {
        return .5 > a ? .5 * (b - d(1 - 2 * a, 0, b) + 0) + c : .5 * d(2 * a - 1, 0, b) + .5 * b + c
    }

    function x(a, c, b) {
        .5 > a ? a = d(2 * a, c, b / 2) : (c += b / 2, b /= 2, a = b - d(1 - (2 * a - 1), 0, b) + c);
        return a
    }

    this.registerplugin = function (a) {
        a = a.tweentypes;
        a.easeinoutquad = e;
        a.easeoutinquad = f;
        a.easeinoutcubic = g;
        a.easeoutincubic = h;
        a.easeinoutquart = k;
        a.easeoutinquart = l;
        a.easeinoutquint = m;
        a.easeoutinquint = n;
        a.easeinoutsine = p;
        a.easeoutinsine = q;
        a.easeoutinexpo = r;
        a.easeinoutexpo = t;
        a.easeinoutcirc = u;
        a.easeoutincirc = v;
        a.easeinoutbounce = w;
        a.easeoutinbounce =
            x
    };
    this.unloadplugin = function () {
    }
};
