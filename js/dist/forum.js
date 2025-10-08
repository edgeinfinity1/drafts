/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inheritsLoose)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(t, o) {
  t.prototype = Object.create(o.prototype), t.prototype.constructor = t, (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t, o);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}


/***/ }),

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/***/ (function(module) {

!function (t, e) {
   true ? module.exports = e() : 0;
}(this, function () {
  "use strict";

  var t = 1e3,
    e = 6e4,
    n = 36e5,
    r = "millisecond",
    i = "second",
    s = "minute",
    u = "hour",
    a = "day",
    o = "week",
    c = "month",
    f = "quarter",
    h = "year",
    d = "date",
    l = "Invalid Date",
    $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
    y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
    M = {
      name: "en",
      weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
      months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
      ordinal: function ordinal(t) {
        var e = ["th", "st", "nd", "rd"],
          n = t % 100;
        return "[" + t + (e[(n - 20) % 10] || e[n] || e[0]) + "]";
      }
    },
    m = function m(t, e, n) {
      var r = String(t);
      return !r || r.length >= e ? t : "" + Array(e + 1 - r.length).join(n) + t;
    },
    v = {
      s: m,
      z: function z(t) {
        var e = -t.utcOffset(),
          n = Math.abs(e),
          r = Math.floor(n / 60),
          i = n % 60;
        return (e <= 0 ? "+" : "-") + m(r, 2, "0") + ":" + m(i, 2, "0");
      },
      m: function t(e, n) {
        if (e.date() < n.date()) return -t(n, e);
        var r = 12 * (n.year() - e.year()) + (n.month() - e.month()),
          i = e.clone().add(r, c),
          s = n - i < 0,
          u = e.clone().add(r + (s ? -1 : 1), c);
        return +(-(r + (n - i) / (s ? i - u : u - i)) || 0);
      },
      a: function a(t) {
        return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
      },
      p: function p(t) {
        return {
          M: c,
          y: h,
          w: o,
          d: a,
          D: d,
          h: u,
          m: s,
          s: i,
          ms: r,
          Q: f
        }[t] || String(t || "").toLowerCase().replace(/s$/, "");
      },
      u: function u(t) {
        return void 0 === t;
      }
    },
    g = "en",
    D = {};
  D[g] = M;
  var p = "$isDayjsObject",
    S = function S(t) {
      return t instanceof _ || !(!t || !t[p]);
    },
    w = function t(e, n, r) {
      var i;
      if (!e) return g;
      if ("string" == typeof e) {
        var s = e.toLowerCase();
        D[s] && (i = s), n && (D[s] = n, i = s);
        var u = e.split("-");
        if (!i && u.length > 1) return t(u[0]);
      } else {
        var a = e.name;
        D[a] = e, i = a;
      }
      return !r && i && (g = i), i || !r && g;
    },
    O = function O(t, e) {
      if (S(t)) return t.clone();
      var n = "object" == typeof e ? e : {};
      return n.date = t, n.args = arguments, new _(n);
    },
    b = v;
  b.l = w, b.i = S, b.w = function (t, e) {
    return O(t, {
      locale: e.$L,
      utc: e.$u,
      x: e.$x,
      $offset: e.$offset
    });
  };
  var _ = function () {
      function M(t) {
        this.$L = w(t.locale, null, !0), this.parse(t), this.$x = this.$x || t.x || {}, this[p] = !0;
      }
      var m = M.prototype;
      return m.parse = function (t) {
        this.$d = function (t) {
          var e = t.date,
            n = t.utc;
          if (null === e) return new Date(NaN);
          if (b.u(e)) return new Date();
          if (e instanceof Date) return new Date(e);
          if ("string" == typeof e && !/Z$/i.test(e)) {
            var r = e.match($);
            if (r) {
              var i = r[2] - 1 || 0,
                s = (r[7] || "0").substring(0, 3);
              return n ? new Date(Date.UTC(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s)) : new Date(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s);
            }
          }
          return new Date(e);
        }(t), this.init();
      }, m.init = function () {
        var t = this.$d;
        this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();
      }, m.$utils = function () {
        return b;
      }, m.isValid = function () {
        return !(this.$d.toString() === l);
      }, m.isSame = function (t, e) {
        var n = O(t);
        return this.startOf(e) <= n && n <= this.endOf(e);
      }, m.isAfter = function (t, e) {
        return O(t) < this.startOf(e);
      }, m.isBefore = function (t, e) {
        return this.endOf(e) < O(t);
      }, m.$g = function (t, e, n) {
        return b.u(t) ? this[e] : this.set(n, t);
      }, m.unix = function () {
        return Math.floor(this.valueOf() / 1e3);
      }, m.valueOf = function () {
        return this.$d.getTime();
      }, m.startOf = function (t, e) {
        var n = this,
          r = !!b.u(e) || e,
          f = b.p(t),
          l = function l(t, e) {
            var i = b.w(n.$u ? Date.UTC(n.$y, e, t) : new Date(n.$y, e, t), n);
            return r ? i : i.endOf(a);
          },
          $ = function $(t, e) {
            return b.w(n.toDate()[t].apply(n.toDate("s"), (r ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)), n);
          },
          y = this.$W,
          M = this.$M,
          m = this.$D,
          v = "set" + (this.$u ? "UTC" : "");
        switch (f) {
          case h:
            return r ? l(1, 0) : l(31, 11);
          case c:
            return r ? l(1, M) : l(0, M + 1);
          case o:
            var g = this.$locale().weekStart || 0,
              D = (y < g ? y + 7 : y) - g;
            return l(r ? m - D : m + (6 - D), M);
          case a:
          case d:
            return $(v + "Hours", 0);
          case u:
            return $(v + "Minutes", 1);
          case s:
            return $(v + "Seconds", 2);
          case i:
            return $(v + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, m.endOf = function (t) {
        return this.startOf(t, !1);
      }, m.$set = function (t, e) {
        var n,
          o = b.p(t),
          f = "set" + (this.$u ? "UTC" : ""),
          l = (n = {}, n[a] = f + "Date", n[d] = f + "Date", n[c] = f + "Month", n[h] = f + "FullYear", n[u] = f + "Hours", n[s] = f + "Minutes", n[i] = f + "Seconds", n[r] = f + "Milliseconds", n)[o],
          $ = o === a ? this.$D + (e - this.$W) : e;
        if (o === c || o === h) {
          var y = this.clone().set(d, 1);
          y.$d[l]($), y.init(), this.$d = y.set(d, Math.min(this.$D, y.daysInMonth())).$d;
        } else l && this.$d[l]($);
        return this.init(), this;
      }, m.set = function (t, e) {
        return this.clone().$set(t, e);
      }, m.get = function (t) {
        return this[b.p(t)]();
      }, m.add = function (r, f) {
        var d,
          l = this;
        r = Number(r);
        var $ = b.p(f),
          y = function y(t) {
            var e = O(l);
            return b.w(e.date(e.date() + Math.round(t * r)), l);
          };
        if ($ === c) return this.set(c, this.$M + r);
        if ($ === h) return this.set(h, this.$y + r);
        if ($ === a) return y(1);
        if ($ === o) return y(7);
        var M = (d = {}, d[s] = e, d[u] = n, d[i] = t, d)[$] || 1,
          m = this.$d.getTime() + r * M;
        return b.w(m, this);
      }, m.subtract = function (t, e) {
        return this.add(-1 * t, e);
      }, m.format = function (t) {
        var e = this,
          n = this.$locale();
        if (!this.isValid()) return n.invalidDate || l;
        var r = t || "YYYY-MM-DDTHH:mm:ssZ",
          i = b.z(this),
          s = this.$H,
          u = this.$m,
          a = this.$M,
          o = n.weekdays,
          c = n.months,
          f = n.meridiem,
          h = function h(t, n, i, s) {
            return t && (t[n] || t(e, r)) || i[n].slice(0, s);
          },
          d = function d(t) {
            return b.s(s % 12 || 12, t, "0");
          },
          $ = f || function (t, e, n) {
            var r = t < 12 ? "AM" : "PM";
            return n ? r.toLowerCase() : r;
          };
        return r.replace(y, function (t, r) {
          return r || function (t) {
            switch (t) {
              case "YY":
                return String(e.$y).slice(-2);
              case "YYYY":
                return b.s(e.$y, 4, "0");
              case "M":
                return a + 1;
              case "MM":
                return b.s(a + 1, 2, "0");
              case "MMM":
                return h(n.monthsShort, a, c, 3);
              case "MMMM":
                return h(c, a);
              case "D":
                return e.$D;
              case "DD":
                return b.s(e.$D, 2, "0");
              case "d":
                return String(e.$W);
              case "dd":
                return h(n.weekdaysMin, e.$W, o, 2);
              case "ddd":
                return h(n.weekdaysShort, e.$W, o, 3);
              case "dddd":
                return o[e.$W];
              case "H":
                return String(s);
              case "HH":
                return b.s(s, 2, "0");
              case "h":
                return d(1);
              case "hh":
                return d(2);
              case "a":
                return $(s, u, !0);
              case "A":
                return $(s, u, !1);
              case "m":
                return String(u);
              case "mm":
                return b.s(u, 2, "0");
              case "s":
                return String(e.$s);
              case "ss":
                return b.s(e.$s, 2, "0");
              case "SSS":
                return b.s(e.$ms, 3, "0");
              case "Z":
                return i;
            }
            return null;
          }(t) || i.replace(":", "");
        });
      }, m.utcOffset = function () {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, m.diff = function (r, d, l) {
        var $,
          y = this,
          M = b.p(d),
          m = O(r),
          v = (m.utcOffset() - this.utcOffset()) * e,
          g = this - m,
          D = function D() {
            return b.m(y, m);
          };
        switch (M) {
          case h:
            $ = D() / 12;
            break;
          case c:
            $ = D();
            break;
          case f:
            $ = D() / 3;
            break;
          case o:
            $ = (g - v) / 6048e5;
            break;
          case a:
            $ = (g - v) / 864e5;
            break;
          case u:
            $ = g / n;
            break;
          case s:
            $ = g / e;
            break;
          case i:
            $ = g / t;
            break;
          default:
            $ = g;
        }
        return l ? $ : b.a($);
      }, m.daysInMonth = function () {
        return this.endOf(c).$D;
      }, m.$locale = function () {
        return D[this.$L];
      }, m.locale = function (t, e) {
        if (!t) return this.$L;
        var n = this.clone(),
          r = w(t, e, !0);
        return r && (n.$L = r), n;
      }, m.clone = function () {
        return b.w(this.$d, this);
      }, m.toDate = function () {
        return new Date(this.valueOf());
      }, m.toJSON = function () {
        return this.isValid() ? this.toISOString() : null;
      }, m.toISOString = function () {
        return this.$d.toISOString();
      }, m.toString = function () {
        return this.$d.toUTCString();
      }, M;
    }(),
    k = _.prototype;
  return O.prototype = k, [["$ms", r], ["$s", i], ["$m", s], ["$H", u], ["$W", a], ["$M", c], ["$y", h], ["$D", d]].forEach(function (t) {
    k[t[1]] = function (e) {
      return this.$g(e, t[0], t[1]);
    };
  }), O.extend = function (t, e) {
    return t.$i || (t(e, _, O), t.$i = !0), O;
  }, O.locale = w, O.isDayjs = S, O.unix = function (t) {
    return O(1e3 * t);
  }, O.en = D[g], O.Ls = D, O.p = {}, O;
});

/***/ }),

/***/ "./src/forum/addDraftsDropdown.js":
/*!****************************************!*\
  !*** ./src/forum/addDraftsDropdown.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_HeaderSecondary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/HeaderSecondary */ "flarum/common/components/HeaderSecondary");
/* harmony import */ var flarum_common_components_HeaderSecondary__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_HeaderSecondary__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_DraftsDropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/DraftsDropdown */ "./src/forum/components/DraftsDropdown.js");
/*
 *
 *  This file is part of fof/drafts.
 *
 *  Copyright (c) 2019 FriendsOfFlarum.
 *
 *  For the full copyright and license information, please view the LICENSE.md
 *  file that was distributed with this source code.
 *
 */





/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_common_components_HeaderSecondary__WEBPACK_IMPORTED_MODULE_2___default().prototype), 'items', function (items) {
    if (!(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().session).user || !flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('canSaveDrafts')) return;
    items.add('Drafts', m(_components_DraftsDropdown__WEBPACK_IMPORTED_MODULE_3__["default"], {
      state: (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().drafts)
    }), 20);
  });
}

/***/ }),

/***/ "./src/forum/addPreferences.js":
/*!*************************************!*\
  !*** ./src/forum/addPreferences.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_FieldSet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/FieldSet */ "flarum/common/components/FieldSet");
/* harmony import */ var flarum_common_components_FieldSet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_FieldSet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_components_SettingsPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/components/SettingsPage */ "flarum/common/components/SettingsPage");
/* harmony import */ var flarum_common_components_SettingsPage__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_SettingsPage__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/components/Switch */ "flarum/common/components/Switch");
/* harmony import */ var flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/utils/ItemList */ "flarum/common/utils/ItemList");
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/common/utils/Stream */ "flarum/common/utils/Stream");
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_7__);








/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_common_components_SettingsPage__WEBPACK_IMPORTED_MODULE_4___default().prototype), 'oninit', function () {
    this.draftAutosaveInterval = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_7___default()(this.user.preferences().draftAutosaveInterval);
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_common_components_SettingsPage__WEBPACK_IMPORTED_MODULE_4___default().prototype), 'settingsItems', function (items) {
    if ((flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum).data.attributes.canSaveDrafts) {
      items.add('drafts', flarum_common_components_FieldSet__WEBPACK_IMPORTED_MODULE_3___default().component({
        label: flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-drafts.forum.user.settings.drafts_heading'),
        className: 'Settings-drafts'
      }, this.draftsItems().toArray()));
    }
  });
  (flarum_common_components_SettingsPage__WEBPACK_IMPORTED_MODULE_4___default().prototype)['draftsItems'] = function () {
    var _this = this;
    var items = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_6___default())();
    items.add('draft-autosave-enable', flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_5___default().component({
      state: this.user.preferences().draftAutosaveEnable,
      onchange: function onchange(value) {
        _this.draftAutosaveEnableLoading = true;
        _this.user.savePreferences({
          draftAutosaveEnable: value
        }).then(function () {
          _this.draftAutosaveEnableLoading = false;
          m.redraw();
        });
      },
      loading: this.draftAutosaveEnableLoading
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-drafts.forum.user.settings.draft_autosave_enable')));
    items.add('draft-autosave-interval', this.user.preferences().draftAutosaveEnable ? m("label", null, m("p", null, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-drafts.forum.user.settings.draft_autosave_interval_label')), m("input", {
      className: "FormControl",
      type: "number",
      min: "0",
      bidi: this.draftAutosaveInterval
    }), flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default().component({
      className: 'Button Button--primary',
      onclick: function onclick() {
        var isInt = function isInt(str) {
          return str == Math.round(str);
        };
        if (_this.draftAutosaveInterval() < 0 || !isInt(_this.draftAutosaveInterval())) {
          _this.draftAutosaveIntervalInvalid = true;
          _this.draftAutosaveInterval(_this.user.preferences().draftAutosaveInterval);
          m.redraw();
        } else {
          _this.draftAutosaveIntervalInvalid = false;
          _this.user.savePreferences({
            draftAutosaveInterval: _this.draftAutosaveInterval()
          }).then(function () {
            m.redraw();
          });
        }
      }
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-drafts.forum.user.settings.draft_autosave_interval_button')), this.draftAutosaveIntervalInvalid ? m("p", {
      "class": "invalidInterval"
    }, m("small", null, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-drafts.forum.user.settings.draft_autosave_interval_invalid'))) : '') : m("p", null));
    return items;
  };
}

/***/ }),

/***/ "./src/forum/components/DraftsDropdown.js":
/*!************************************************!*\
  !*** ./src/forum/components/DraftsDropdown.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DraftsDropdown)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_NotificationsDropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/NotificationsDropdown */ "flarum/common/components/NotificationsDropdown");
/* harmony import */ var flarum_common_components_NotificationsDropdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_NotificationsDropdown__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _DraftsList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DraftsList */ "./src/forum/components/DraftsList.js");

/*
 *
 *  This file is part of fof/drafts.
 *
 *  Copyright (c) 2019 FriendsOfFlarum.
 *
 *  For the full copyright and license information, please view the LICENSE.md
 *  file that was distributed with this source code.
 *
 */




var DraftsDropdown = /*#__PURE__*/function (_NotificationsDropdow) {
  function DraftsDropdown() {
    return _NotificationsDropdow.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(DraftsDropdown, _NotificationsDropdow);
  DraftsDropdown.initAttrs = function initAttrs(attrs) {
    attrs.label = attrs.label || flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-drafts.forum.dropdown.tooltip');
    attrs.icon = attrs.icon || 'fas fa-edit';
    _NotificationsDropdow.initAttrs.call(this, attrs);
  };
  var _proto = DraftsDropdown.prototype;
  _proto.getMenu = function getMenu() {
    return m("div", {
      className: 'Dropdown-menu ' + this.attrs.menuClassName,
      onclick: this.menuClick.bind(this)
    }, this.showing ? _DraftsList__WEBPACK_IMPORTED_MODULE_3__["default"].component({
      state: this.attrs.state
    }) : '');
  };
  _proto.goToRoute = function goToRoute() {
    m.route.set(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().route('drafts'));
  };
  _proto.getUnreadCount = function getUnreadCount() {
    if ((flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().cache).draftsLoaded) {
      return flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().store.all('drafts').length;
    }
    return flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().store.all('drafts').length + flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().session.user.draftCount();
  };
  _proto.getNewCount = function getNewCount() {
    // We return 0 here so that the drafts dropdown doesn't always show a new count (usually highlighted in the forum primary color).
    return 0;
  };
  return DraftsDropdown;
}((flarum_common_components_NotificationsDropdown__WEBPACK_IMPORTED_MODULE_2___default()));


/***/ }),

/***/ "./src/forum/components/DraftsList.js":
/*!********************************************!*\
  !*** ./src/forum/components/DraftsList.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DraftsList)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/LoadingIndicator */ "flarum/common/components/LoadingIndicator");
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _DraftsListItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DraftsListItem */ "./src/forum/components/DraftsListItem.tsx");
/* harmony import */ var flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/components/Tooltip */ "flarum/common/components/Tooltip");
/* harmony import */ var flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_6__);

/*
 *
 *  This file is part of fof/drafts.
 *
 *  Copyright (c) 2019 FriendsOfFlarum.
 *
 *  For the full copyright and license information, please view the LICENSE.md
 *  file that was distributed with this source code.
 *
 */







var DraftsList = /*#__PURE__*/function (_Component) {
  function DraftsList() {
    return _Component.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(DraftsList, _Component);
  var _proto = DraftsList.prototype;
  _proto.oncreate = function oncreate(vnode) {
    _Component.prototype.oncreate.call(this, vnode);
    $('.draft--delete').on('click tap', function (event) {
      event.stopPropagation();
    });
  };
  _proto.deleteAll = function deleteAll() {
    if (!confirm(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-drafts.forum.dropdown.delete_all_alert'))) return;
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().request({
      method: 'DELETE',
      url: flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('apiUrl') + '/drafts/all'
    }).then(function () {
      (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().store).data.drafts = [];
      m.redraw();
    });
  };
  _proto.view = function view() {
    var drafts = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().store.all('drafts');
    var state = this.attrs.state;
    return m("div", {
      className: "NotificationList DraftsList"
    }, m("div", {
      className: "NotificationList-header"
    }, m("h4", {
      className: "App-titleControl App-titleControl--text"
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-drafts.forum.dropdown.title')), m("div", {
      "class": "App-primaryControl"
    }, m((flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_6___default()), {
      showOnFocus: false,
      text: flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-drafts.forum.dropdown.delete_all_button')
    }, m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
      "data-container": "body",
      icon: "fas fa-trash-alt",
      className: "Button Button--link Button--icon Alert-dismiss",
      onclick: this.deleteAll.bind(this)
    })))), m("div", {
      className: "NotificationList-content"
    }, m("ul", {
      className: "NotificationGroup-content"
    }, drafts.length ? drafts.sort(function (a, b) {
      return b.updatedAt() - a.updatedAt();
    }).map(function (draft) {
      return m(_DraftsListItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
        draft: draft,
        state: state
      });
    }) : null, state.loading ? m((flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_3___default()), {
      display: "block"
    }) : !drafts.length && m("div", {
      className: "NotificationList-empty"
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-drafts.forum.dropdown.empty_text')))));
  };
  return DraftsList;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default()));


/***/ }),

/***/ "./src/forum/components/DraftsListItem.tsx":
/*!*************************************************!*\
  !*** ./src/forum/components/DraftsListItem.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DraftsListItem)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_helpers_avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/helpers/avatar */ "flarum/common/helpers/avatar");
/* harmony import */ var flarum_common_helpers_avatar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_avatar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/helpers/icon */ "flarum/common/helpers/icon");
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_helpers_humanTime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/helpers/humanTime */ "flarum/common/helpers/humanTime");
/* harmony import */ var flarum_common_helpers_humanTime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_humanTime__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_utils_string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/utils/string */ "flarum/common/utils/string");
/* harmony import */ var flarum_common_utils_string__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_string__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/common/components/Tooltip */ "flarum/common/components/Tooltip");
/* harmony import */ var flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_9__);










var DraftsListItem = /*#__PURE__*/function (_Component) {
  function DraftsListItem() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.canSchedule = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('canScheduleDrafts') && flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('drafts.enableScheduledDrafts');
    return _this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(DraftsListItem, _Component);
  var _proto = DraftsListItem.prototype;
  _proto.oncreate = function oncreate(vnode) {
    _Component.prototype.oncreate.call(this, vnode);
  };
  _proto.view = function view() {
    var _this$attrs = this.attrs,
      draft = _this$attrs.draft,
      state = _this$attrs.state;
    var scheduledDraftIcon = 'far fa-calendar-plus';
    if (draft.scheduledValidationError()) scheduledDraftIcon = 'far fa-calendar-times';else if (draft.scheduledFor()) scheduledDraftIcon = 'far fa-calendar-check';
    return m("li", null, m("a", {
      onclick: state.showComposer.bind(state, draft),
      className: "Notification draft--item"
    }, flarum_common_helpers_avatar__WEBPACK_IMPORTED_MODULE_3___default()(draft.user()), flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_4___default()(draft.icon(), {
      className: 'Notification-icon'
    }), m("span", {
      "class": "Notification-title"
    }, m("span", {
      className: "Notification-content"
    }, draft.scheduledFor() && m((flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_8___default()), {
      showOnFocus: false,
      text: flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-drafts.forum.dropdown.scheduled_icon_tooltip', {
        datetime: dayjs__WEBPACK_IMPORTED_MODULE_9___default()(draft.scheduledFor()).format(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-drafts.forum.dropdown.scheduled_icon_tooltip_formatter')[0])
      })
    }, flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_4___default()('far fa-clock', {
      className: 'draft--scheduledIcon'
    })), draft.type() === 'reply' ? draft.loadRelationships().discussion.title() : draft.title()), m("span", {
      "class": "Notification-title-spring"
    }), flarum_common_helpers_humanTime__WEBPACK_IMPORTED_MODULE_5___default()(draft.updatedAt())), m("div", {
      "class": "Notification-action"
    }, m((flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_8___default()), {
      showOnFocus: false,
      text: flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-drafts.forum.dropdown.delete_button')
    }, m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_7___default()), {
      "data-container": "body",
      icon: "fas fa-trash-alt",
      className: "Notification-action Button Button--link hasIcon draft--delete",
      onclick: function onclick(e) {
        state.deleteDraft(draft);
        e.stopPropagation();
      }
    })), this.canSchedule ? m((flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_8___default()), {
      showOnFocus: false,
      text: flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-drafts.forum.dropdown.schedule_button')
    }, m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_7___default()), {
      "data-container": "body",
      icon: scheduledDraftIcon,
      className: "Notification-action Button Button--link hasIcon draft--schedule",
      onclick: function onclick(e) {
        state.scheduleDraft(draft);
        e.stopPropagation();
      }
    })) : null), m("div", {
      className: "Notification-excerpt"
    }, (0,flarum_common_utils_string__WEBPACK_IMPORTED_MODULE_6__.truncate)(draft.content(), 200)), draft.scheduledValidationError() ? m("p", {
      className: "scheduledValidationError"
    }, draft.scheduledValidationError()) : ''));
  };
  return DraftsListItem;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default()));


/***/ }),

/***/ "./src/forum/components/DraftsPage.js":
/*!********************************************!*\
  !*** ./src/forum/components/DraftsPage.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DraftsPage)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Page */ "flarum/common/components/Page");
/* harmony import */ var flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _DraftsList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DraftsList */ "./src/forum/components/DraftsList.js");

/*
 *
 *  This file is part of fof/drafts.
 *
 *  Copyright (c) 2019 FriendsOfFlarum.
 *
 *  For the full copyright and license information, please view the LICENSE.md
 *  file that was distributed with this source code.
 *
 */




var DraftsPage = /*#__PURE__*/function (_Page) {
  function DraftsPage() {
    return _Page.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(DraftsPage, _Page);
  var _proto = DraftsPage.prototype;
  _proto.oninit = function oninit(vnode) {
    _Page.prototype.oninit.call(this, vnode);
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().history.push('drafts');
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().drafts.load();
    this.bodyClass = 'App--drafts';
  };
  _proto.view = function view() {
    return m("div", {
      className: "DraftsPage"
    }, m(_DraftsList__WEBPACK_IMPORTED_MODULE_3__["default"], {
      state: (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().drafts)
    }));
  };
  return DraftsPage;
}((flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_2___default()));


/***/ }),

/***/ "./src/forum/components/ScheduleDraftModal.js":
/*!****************************************************!*\
  !*** ./src/forum/components/ScheduleDraftModal.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ScheduleDraftModal)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Alert */ "flarum/common/components/Alert");
/* harmony import */ var flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/components/Modal */ "flarum/common/components/Modal");
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/components/LoadingIndicator */ "flarum/common/components/LoadingIndicator");
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_5__);






var CurrentDate = dayjs().format('YYYY-MM-DD');
var CurrentTime = dayjs().format('HH:mm');
var ScheduleDraftModal = /*#__PURE__*/function (_Modal) {
  function ScheduleDraftModal() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Modal.call.apply(_Modal, [this].concat(args)) || this;
    _this.loading = false;
    _this.date = void 0;
    _this.time = void 0;
    _this.previewFormatString = void 0;
    return _this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(ScheduleDraftModal, _Modal);
  var _proto = ScheduleDraftModal.prototype;
  _proto.oninit = function oninit(vnode) {
    _Modal.prototype.oninit.call(this, vnode);
    this.date = this.isScheduled() ? dayjs(this.attrs.draft.scheduledFor()).format('YYYY-MM-DD') : CurrentDate;
    this.time = this.isScheduled() ? dayjs(this.attrs.draft.scheduledFor()).format('HH:mm') : CurrentTime;
    this.previewFormatString = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-drafts.forum.schedule_draft_modal.schedule_time_preview_formatter')[0];
  };
  _proto.className = function className() {
    return 'ScheduleDraftModal';
  };
  _proto.title = function title() {
    return flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-drafts.forum.schedule_draft_modal.title');
  };
  _proto.content = function content() {
    var _this2 = this;
    if (this.loading) {
      return m((flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_5___default()), null);
    }
    return [this.attrs.draft.scheduledFor() ? m("div", {
      className: "Modal-alert"
    }, m((flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_2___default()), {
      type: "success",
      dismissible: false
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-drafts.forum.schedule_draft_modal.scheduled_text', {
      datetime: this.formattedDateTime()
    }))) : '', this.attrs.draft.scheduledValidationError() ? m("div", {
      className: "Modal-alert"
    }, m((flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_2___default()), {
      type: "error",
      dismissible: false
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-drafts.forum.schedule_draft_modal.scheduled_error', {
      error: this.attrs.draft.scheduledValidationError()
    }))) : '', m("input", {
      style: "display: none"
    }), m("div", {
      className: "Modal-body"
    }, m("div", {
      className: "Form Form--centered"
    }, m("p", {
      className: "helpText"
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-drafts.forum.schedule_draft_modal.text')), m("div", {
      className: "Form-group ScheduleDraftModal-timeDateGroup"
    }, m("input", {
      name: "scheduledForDate",
      className: "FormControl",
      type: "date",
      min: CurrentDate,
      value: this.date,
      onchange: function onchange(e) {
        return _this2.date = e.target.value;
      }
    }), m("input", {
      name: "scheduledForTime",
      className: "FormControl",
      type: "time",
      value: this.time,
      onchange: function onchange(e) {
        return _this2.time = e.target.value;
      }
    })), m("div", {
      "class": "Form-group ScheduleDraftModal-datePreview"
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-drafts.forum.schedule_draft_modal.schedule_time_preview', {
      datetime: this.formattedDateTime()
    })), m("div", {
      className: "Form-group ScheduleDraftModal-submitButtons"
    }, this.isScheduled() && m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
      className: "ScheduleDraftModal-unscheduleBtn Button Button--block Button--danger",
      loading: this.loading,
      onclick: this.unschedule.bind(this)
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-drafts.forum.schedule_draft_modal.unschedule_button')), m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
      className: "ScheduleDraftModal-scheduleBtn Button Button--block Button--primary",
      type: "submit",
      loading: this.loading,
      disabled: !this.changed()
    }, this.isScheduled() ? flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-drafts.forum.schedule_draft_modal.reschedule_button') : flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-drafts.forum.schedule_draft_modal.schedule_button')))))];
  }

  /**
   * Returns a Date object for currently entered values in the modal.
   */;
  _proto.scheduledFor = function scheduledFor() {
    var date = new Date(this.date + " " + this.time);
    return date || null;
  }

  /**
   * Whether the modal's details have been modified.
   */;
  _proto.changed = function changed() {
    var getTimeOrNull = function getTimeOrNull(date) {
      return date ? date.getTime() || null : null;
    };
    return getTimeOrNull(this.scheduledFor()) !== getTimeOrNull(this.attrs.draft.scheduledFor());
  };
  _proto.isScheduled = function isScheduled() {
    return !!this.attrs.draft.scheduledFor();
  };
  _proto.formattedDateTime = function formattedDateTime() {
    var date = dayjs(this.scheduledFor());

    // if (!date) {
    //     return app.translator.trans('fof-drafts.forum.schedule_draft_modal.schedule_time_preview_invalid');
    // }

    var formatted = date.format(this.previewFormatString);
    return formatted;
  };
  _proto.unschedule = function unschedule(e) {
    var _this3 = this;
    e.preventDefault();
    this.loading = true;

    // Save draft with no scheduled post time
    if (confirm(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-drafts.forum.schedule_draft_modal.unschedule_warning'))) {
      this.attrs.draft.save({
        scheduledFor: null,
        clearValidationError: true,
        scheduledValidationError: ''
      }).then(function () {
        _this3.success = true;
        _this3.hide.call(_this3);
      })["catch"](function () {}).then(this.loaded.bind(this));
    }
  };
  _proto.onsubmit = function onsubmit(e) {
    var _this4 = this;
    e.preventDefault();
    this.loading = true;
    this.attrs.draft.save({
      scheduledFor: this.scheduledFor(),
      clearValidationError: true,
      scheduledValidationError: ''
    }).then(function () {
      return _this4.success = true;
    })["catch"](function () {}).then(this.loaded.bind(this));
  };
  return ScheduleDraftModal;
}((flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_4___default()));


/***/ }),

/***/ "./src/forum/components/index.js":
/*!***************************************!*\
  !*** ./src/forum/components/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   components: () => (/* binding */ components)
/* harmony export */ });
/* harmony import */ var _DraftsDropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DraftsDropdown */ "./src/forum/components/DraftsDropdown.js");
/* harmony import */ var _DraftsList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DraftsList */ "./src/forum/components/DraftsList.js");
/* harmony import */ var _DraftsListItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DraftsListItem */ "./src/forum/components/DraftsListItem.tsx");
/* harmony import */ var _DraftsPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DraftsPage */ "./src/forum/components/DraftsPage.js");
/* harmony import */ var _ScheduleDraftModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ScheduleDraftModal */ "./src/forum/components/ScheduleDraftModal.js");
/*
 *
 *  This file is part of fof/drafts.
 *
 *  Copyright (c) 2019 FriendsOfFlarum.
 *
 *  For the full copyright and license information, please view the LICENSE.md
 *  file that was distributed with this source code.
 *
 */






var components = {
  DraftsDropdown: _DraftsDropdown__WEBPACK_IMPORTED_MODULE_0__["default"],
  DraftsList: _DraftsList__WEBPACK_IMPORTED_MODULE_1__["default"],
  DraftsListItem: _DraftsListItem__WEBPACK_IMPORTED_MODULE_2__["default"],
  DraftsPage: _DraftsPage__WEBPACK_IMPORTED_MODULE_3__["default"],
  ScheduleDraftModal: _ScheduleDraftModal__WEBPACK_IMPORTED_MODULE_4__["default"]
};

/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   components: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_17__.components),
/* harmony export */   models: () => (/* reexport safe */ _models__WEBPACK_IMPORTED_MODULE_18__.models),
/* harmony export */   states: () => (/* reexport safe */ _states__WEBPACK_IMPORTED_MODULE_19__.states),
/* harmony export */   utils: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_20__.utils)
/* harmony export */ });
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/models/User */ "flarum/common/models/User");
/* harmony import */ var flarum_common_models_User__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_models_User__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/Model */ "flarum/common/Model");
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Model__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/utils/Stream */ "flarum/common/utils/Stream");
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _models_Draft__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/Draft */ "./src/forum/models/Draft.js");
/* harmony import */ var _components_DraftsPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/DraftsPage */ "./src/forum/components/DraftsPage.js");
/* harmony import */ var _addDraftsDropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addDraftsDropdown */ "./src/forum/addDraftsDropdown.js");
/* harmony import */ var _addPreferences__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./addPreferences */ "./src/forum/addPreferences.js");
/* harmony import */ var flarum_forum_components_Composer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/forum/components/Composer */ "flarum/forum/components/Composer");
/* harmony import */ var flarum_forum_components_Composer__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_Composer__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var flarum_forum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! flarum/forum/components/DiscussionComposer */ "flarum/forum/components/DiscussionComposer");
/* harmony import */ var flarum_forum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var flarum_forum_components_ReplyComposer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! flarum/forum/components/ReplyComposer */ "flarum/forum/components/ReplyComposer");
/* harmony import */ var flarum_forum_components_ReplyComposer__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_ReplyComposer__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var flarum_forum_states_ComposerState__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! flarum/forum/states/ComposerState */ "flarum/forum/states/ComposerState");
/* harmony import */ var flarum_forum_states_ComposerState__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_states_ComposerState__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _utils_fillRelationship__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utils/fillRelationship */ "./src/forum/utils/fillRelationship.js");
/* harmony import */ var _states_DraftsListState__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./states/DraftsListState */ "./src/forum/states/DraftsListState.js");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _utils_deepEqual__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./utils/deepEqual */ "./src/forum/utils/deepEqual.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components */ "./src/forum/components/index.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./models */ "./src/forum/models/index.js");
/* harmony import */ var _states__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./states */ "./src/forum/states/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./utils */ "./src/forum/utils/index.js");
function _createForOfIteratorHelperLoose(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (t) return (t = t.call(r)).next.bind(t); if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var o = 0; return function () { return o >= r.length ? { done: !0 } : { done: !1, value: r[o++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
/*
 *
 *  This file is part of fof/drafts.
 *
 *  Copyright (c) 2019 FriendsOfFlarum.
 *
 *  For the full copyright and license information, please view the LICENSE.md
 *  file that was distributed with this source code.
 *
 */






















flarum_forum_app__WEBPACK_IMPORTED_MODULE_15___default().initializers.add('fof-drafts', function () {
  (flarum_forum_app__WEBPACK_IMPORTED_MODULE_15___default().store).models.drafts = _models_Draft__WEBPACK_IMPORTED_MODULE_4__["default"];
  (flarum_common_models_User__WEBPACK_IMPORTED_MODULE_1___default().prototype).drafts = flarum_common_Model__WEBPACK_IMPORTED_MODULE_2___default().hasMany('drafts');
  (flarum_common_models_User__WEBPACK_IMPORTED_MODULE_1___default().prototype).draftCount = flarum_common_Model__WEBPACK_IMPORTED_MODULE_2___default().attribute('draftCount');
  (flarum_forum_app__WEBPACK_IMPORTED_MODULE_15___default().routes).drafts = {
    path: '/drafts',
    component: _components_DraftsPage__WEBPACK_IMPORTED_MODULE_5__["default"]
  };
  (flarum_forum_app__WEBPACK_IMPORTED_MODULE_15___default().drafts) = new _states_DraftsListState__WEBPACK_IMPORTED_MODULE_14__["default"]((flarum_forum_app__WEBPACK_IMPORTED_MODULE_15___default()));
  (flarum_forum_states_ComposerState__WEBPACK_IMPORTED_MODULE_12___default().prototype)['changed'] = function () {
    var _this = this;
    if (!this.body || !this.data) return false;
    var data = this.data();
    var draft = this.draft;
    var fields = Object.keys(data).filter(function (element) {
      return element !== 'relationships';
    });
    if (!fields) {
      return false;
    }

    // If there's no content, we don't want to save this draft
    // regardless of whether other attributes have changed.
    if (!this.fields.content()) {
      return false;
    }
    var getData = function getData(field) {
      return (field === 'content' ? _this.fields.content() : data[field]) || '';
    };
    for (var _iterator = _createForOfIteratorHelperLoose(fields), _step; !(_step = _iterator()).done;) {
      var field = _step.value;
      var fieldValue = getData(field);
      var draftFieldValue = draft && draft.data.attributes[field];
      if (!draft && fieldValue || draft && !(0,_utils_deepEqual__WEBPACK_IMPORTED_MODULE_16__["default"])(fieldValue, draftFieldValue)) {
        return true;
      }
    }
    if (!data.relationships && !draft.relationships()) {
      return false;
    }
    var relationships = Object.keys(data.relationships);
    var equalRelationships = function equalRelationships(data, draft, relationship) {
      var _draft$relationships$, _draft$relationships$2;
      if ((!data.relationships[relationship] || !data.relationships[relationship].length) && (!(relationship in draft.relationships()) || !((_draft$relationships$ = draft.relationships()[relationship].data) != null && _draft$relationships$.length))) {
        return true;
      } else if (!(relationship in draft.relationships()) || data.relationships[relationship].length !== ((_draft$relationships$2 = draft.relationships()[relationship].data) == null ? void 0 : _draft$relationships$2.length)) {
        return false;
      }
      var getId = function getId(element) {
        return typeof element.id == 'function' ? element.id() : element.id;
      };
      var dataIds = (0,_utils_fillRelationship__WEBPACK_IMPORTED_MODULE_13__["default"])(data.relationships[relationship], getId);
      var draftIds = (0,_utils_fillRelationship__WEBPACK_IMPORTED_MODULE_13__["default"])(draft.relationships()[relationship].data, getId);
      return !dataIds.some(function (id, i) {
        return id !== draftIds[i];
      });
    };
    for (var _i = 0, _relationships = relationships; _i < _relationships.length; _i++) {
      var relationship = _relationships[_i];
      if (!draft) {
        if (data.relationships[relationship]) {
          return true;
        }
      } else {
        if (!equalRelationships(data, draft, relationship)) {
          return true;
        }
      }
    }
    return false;
  };
  (flarum_forum_states_ComposerState__WEBPACK_IMPORTED_MODULE_12___default().prototype)['saveDraft'] = function () {
    var _this2 = this;
    this.saving = true;
    m.redraw();
    var afterSave = function afterSave() {
      _this2.saving = false;
      _this2.justSaved = true;
      setTimeout(function () {
        _this2.justSaved = false;
        m.redraw();
      }, 300);
      m.redraw();
    };
    var draft = this.draft;
    if (draft && draft.id() && !draft.exists) {
      // Draft was deleted before autosave, no need to save.
      return;
    }
    if (draft) {
      delete draft.data.attributes.relationships;
      draft.save(Object.assign(draft.data.attributes, this.data()))["catch"](function () {
        console.log("draft save failure ignored");
      }).then(function () {
        return afterSave();
      });
    } else {
      flarum_forum_app__WEBPACK_IMPORTED_MODULE_15___default().store.createRecord('drafts').save(this.data()).then(function (draft) {
        draft.loadRelationships(true);
        _this2.draft = draft;
        afterSave();
      });
    }
  };
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_forum_components_Composer__WEBPACK_IMPORTED_MODULE_8___default().prototype), 'controlItems', function (items) {
    if (!(this.state.bodyMatches((flarum_forum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_9___default())) || this.state.bodyMatches((flarum_forum_components_ReplyComposer__WEBPACK_IMPORTED_MODULE_10___default()))) || !flarum_forum_app__WEBPACK_IMPORTED_MODULE_15___default().forum.attribute('canSaveDrafts') || this.state.position === 'minimized') return;
    var classNames = ['Button', 'Button--icon', 'Button--link'];
    if (this.state.saving) {
      classNames.push('saving');
    }
    if (this.state.justSaved) {
      classNames.push('justSaved');
    }
    items.add('save-draft', flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_11___default().component({
      icon: this.state.justSaved ? 'fas fa-check' : this.state.saving ? 'fas fa-spinner fa-spin' : 'fas fa-save',
      className: classNames.join(' '),
      itemClassName: 'App-backControl',
      title: flarum_forum_app__WEBPACK_IMPORTED_MODULE_15___default().translator.trans('fof-drafts.forum.composer.title'),
      disabled: this.state.saving || this.state.justSaved || this.loading,
      onclick: this.state.saveDraft.bind(this.state)
    }), 20);
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_forum_states_ComposerState__WEBPACK_IMPORTED_MODULE_12___default().prototype), 'load', function () {
    var _this3 = this;
    if (!flarum_forum_app__WEBPACK_IMPORTED_MODULE_15___default().forum.attribute('canSaveDrafts')) return;
    if (flarum_forum_app__WEBPACK_IMPORTED_MODULE_15___default().session.user.preferences().draftAutosaveEnable && (this.bodyMatches((flarum_forum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_9___default())) || this.bodyMatches((flarum_forum_components_ReplyComposer__WEBPACK_IMPORTED_MODULE_10___default())))) {
      this.autosaveInterval = setInterval(function () {
        if (_this3.changed() && !_this3.saving && !_this3.loading) {
          _this3.saveDraft();
        }
      }, 1000 * flarum_forum_app__WEBPACK_IMPORTED_MODULE_15___default().session.user.preferences().draftAutosaveInterval);
    }
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_forum_states_ComposerState__WEBPACK_IMPORTED_MODULE_12___default().prototype), 'clear', function () {
    this.draft = null;
    if (this.autosaveInterval) clearInterval(this.autosaveInterval);
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.override)((flarum_forum_states_ComposerState__WEBPACK_IMPORTED_MODULE_12___default().prototype), 'preventExit', function (original) {
    if (this.body && this.body.componentClass && this.draft) {
      this.body.attrs.confirmExit = flarum_forum_app__WEBPACK_IMPORTED_MODULE_15___default().translator.trans('fof-drafts.forum.composer.exit_alert');
    }
    var prevented = false;
    if (this.changed()) {
      prevented = original();
    }
    if (prevented) return prevented;
    if (!this.body || !this.body.componentClass) return;
    var draft = this.draft;
    if (draft && !draft.title() && !draft.content() && confirm(flarum_forum_app__WEBPACK_IMPORTED_MODULE_15___default().translator.trans('fof-drafts.forum.composer.discard_empty_draft_alert'))) {
      draft["delete"]();
    }
    return prevented;
  });
  function initComposerBody() {
    var _this4 = this;
    Object.keys(this.attrs).forEach(function (key) {
      if (!['originalContent', 'title', 'user'].includes(key)) {
        _this4[key] = _this4.attrs[key];
      } else if (key === 'title') {
        _this4.title = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3___default()(_this4.attrs.title);
      }
    });
    if (this.data) {
      this.composer.data = this.data.bind(this);
    }
    if (this.attrs.draft) {
      this.composer.draft = this.attrs.draft;
    }
  }
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_forum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_9___default().prototype), 'oninit', initComposerBody);
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_forum_components_ReplyComposer__WEBPACK_IMPORTED_MODULE_10___default().prototype), 'oninit', initComposerBody);
  function deleteDraftsOnSubmit() {
    if (this.composer.draft) {
      this.composer.draft["delete"]();
    }
  }
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_forum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_9___default().prototype), 'onsubmit', deleteDraftsOnSubmit);
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_forum_components_ReplyComposer__WEBPACK_IMPORTED_MODULE_10___default().prototype), 'onsubmit', deleteDraftsOnSubmit);
  if (flarum_forum_app__WEBPACK_IMPORTED_MODULE_15___default().initializers.has('fof-byobu')) {
    var PrivateDiscussionComposer = flarum.extensions['fof-byobu'].discussions.PrivateDiscussionComposer;
    (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)(PrivateDiscussionComposer.prototype, 'onsubmit', deleteDraftsOnSubmit);
  }
  (0,_addDraftsDropdown__WEBPACK_IMPORTED_MODULE_6__["default"])();
  (0,_addPreferences__WEBPACK_IMPORTED_MODULE_7__["default"])();
});

/***/ }),

/***/ "./src/forum/models/Draft.js":
/*!***********************************!*\
  !*** ./src/forum/models/Draft.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Draft)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/Model */ "flarum/common/Model");
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Model__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/utils/ItemList */ "flarum/common/utils/ItemList");
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_utils_mixin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/utils/mixin */ "flarum/common/utils/mixin");
/* harmony import */ var flarum_common_utils_mixin__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_mixin__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_fillRelationship__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/fillRelationship */ "./src/forum/utils/fillRelationship.js");

/*
 *
 *  This file is part of fof/drafts.
 *
 *  Copyright (c) 2019 FriendsOfFlarum.
 *
 *  For the full copyright and license information, please view the LICENSE.md
 *  file that was distributed with this source code.
 *
 */






var Draft = /*#__PURE__*/function (_mixin) {
  function Draft() {
    return _mixin.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Draft, _mixin);
  return Draft;
}(flarum_common_utils_mixin__WEBPACK_IMPORTED_MODULE_4___default()((flarum_common_Model__WEBPACK_IMPORTED_MODULE_2___default()), {
  user: flarum_common_Model__WEBPACK_IMPORTED_MODULE_2___default().hasOne('user'),
  content: flarum_common_Model__WEBPACK_IMPORTED_MODULE_2___default().attribute('content'),
  title: flarum_common_Model__WEBPACK_IMPORTED_MODULE_2___default().attribute('title'),
  scheduledValidationError: flarum_common_Model__WEBPACK_IMPORTED_MODULE_2___default().attribute('scheduledValidationError'),
  relationships: flarum_common_Model__WEBPACK_IMPORTED_MODULE_2___default().attribute('relationships'),
  extra: flarum_common_Model__WEBPACK_IMPORTED_MODULE_2___default().attribute('extra'),
  scheduledFor: flarum_common_Model__WEBPACK_IMPORTED_MODULE_2___default().attribute('scheduledFor', (flarum_common_Model__WEBPACK_IMPORTED_MODULE_2___default().transformDate)),
  updatedAt: flarum_common_Model__WEBPACK_IMPORTED_MODULE_2___default().attribute('updatedAt', (flarum_common_Model__WEBPACK_IMPORTED_MODULE_2___default().transformDate)),
  loadedRelationships: null,
  type: function type() {
    var relationships = this.loadRelationships();
    if (relationships.discussion) {
      return 'reply';
    } else if (flarum.extensions['fof-byobu'] && flarum.extensions['fof-byobu'].discussions && (
    // If private discussion composer is not exported, we can't support PM drafts.
    'recipientGroups' in relationships || 'recipientUsers' in relationships)) {
      return 'privateDiscussion';
    } else {
      return 'discussion';
    }
  },
  icon: function icon() {
    switch (this.type()) {
      case 'discussion':
        return 'fas fa-edit';
      case 'reply':
        return 'fas fa-reply';
      case 'privateDiscussion':
        var customIcon = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum).data.attributes['byobu.icon-badge'];
        return customIcon ? customIcon : 'fas fa-eye-slash';
    }
  },
  loadRelationships: function loadRelationships(force) {
    var _this = this;
    if (!force && this.loadedRelationships && (Object.keys(this.loadedRelationships).length > 0 || Object.keys(this.loadedRelationships).length === 0 && Object.keys(this.relationships).length === 0)) {
      return this.loadedRelationships;
    }
    this.loadedRelationships = {};
    var relationships = this.relationships();
    if (relationships) {
      Object.keys(relationships).forEach(function (relationshipName) {
        var relationship = relationships[relationshipName];
        if (!relationship || !relationship.data) return;
        _this.loadedRelationships[relationshipName] = (0,_utils_fillRelationship__WEBPACK_IMPORTED_MODULE_5__["default"])(relationship.data, function (model) {
          return flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().store.getById(model.type, model.id);
        });
      });
    }
    if ('recipientUsers' in this.loadedRelationships || 'recipientGroups' in this.loadedRelationships) {
      var recipients = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3___default())();
      (this.loadedRelationships['recipientUsers'] || []).forEach(function (user) {
        if (user) recipients.add('users:' + user.id(), user);
      });
      (this.loadedRelationships['recipientGroups'] || []).forEach(function (group) {
        if (group) recipients.add('groups:' + group.id(), group);
      });
      this.loadedRelationships['recipients'] = recipients;
    }
    return this.loadedRelationships;
  },
  compileData: function compileData() {
    var data = {
      originalContent: this.content(),
      title: this.title(),
      user: (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().session).user,
      confirmExit: flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-drafts.forum.composer.exit_alert'),
      draft: this,
      fields: Object.assign({}, this.loadRelationships(), this.extra())
    };
    Object.assign(data, data.fields);
    return data;
  }
}));


/***/ }),

/***/ "./src/forum/models/index.js":
/*!***********************************!*\
  !*** ./src/forum/models/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   models: () => (/* binding */ models)
/* harmony export */ });
/* harmony import */ var _Draft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Draft */ "./src/forum/models/Draft.js");
/*
 *
 *  This file is part of fof/drafts.
 *
 *  Copyright (c) 2019 FriendsOfFlarum.
 *
 *  For the full copyright and license information, please view the LICENSE.md
 *  file that was distributed with this source code.
 *
 */


var models = {
  Draft: _Draft__WEBPACK_IMPORTED_MODULE_0__["default"]
};

/***/ }),

/***/ "./src/forum/states/DraftsListState.js":
/*!*********************************************!*\
  !*** ./src/forum/states/DraftsListState.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DraftsListState)
/* harmony export */ });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_forum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/components/DiscussionComposer */ "flarum/forum/components/DiscussionComposer");
/* harmony import */ var flarum_forum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_components_ReplyComposer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/components/ReplyComposer */ "flarum/forum/components/ReplyComposer");
/* harmony import */ var flarum_forum_components_ReplyComposer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_ReplyComposer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ScheduleDraftModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ScheduleDraftModal */ "./src/forum/components/ScheduleDraftModal.js");




var DraftsListState = /*#__PURE__*/function () {
  function DraftsListState() {
    /**
     * Whether or not the flags are loading.
     *
     * @type {Boolean}
     */
    this.loading = false;
    this.cache = [];
  }
  var _proto = DraftsListState.prototype;
  _proto.deleteDraft = function deleteDraft(draft) {
    var _this = this;
    if (!window.confirm(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-drafts.forum.dropdown.alert'))) return;
    this.loading = true;
    draft["delete"]().then(function () {
      if ((flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().composer).body && (flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().composer).draft && flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().composer.draft.id() === draft.id() && !flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().composer.changed()) {
        flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().composer.hide();
      }
      _this.loading = false;
      m.redraw();
    });
  };
  _proto.scheduleDraft = function scheduleDraft(draft) {
    if (!flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('canScheduleDrafts') || !flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('drafts.enableScheduledDrafts')) return;
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().modal.show(_components_ScheduleDraftModal__WEBPACK_IMPORTED_MODULE_3__["default"], {
      draft: draft
    });
  };
  _proto.showComposer = function showComposer(draft) {
    if (this.loading) return;
    return new Promise(function (resolve) {
      var componentClass;
      switch (draft.type()) {
        case 'privateDiscussion':
          componentClass = (__webpack_require__(/*! @fof-byobu */ "@fof-byobu").discussions)['PrivateDiscussionComposer'];
          break;
        case 'reply':
          componentClass = (flarum_forum_components_ReplyComposer__WEBPACK_IMPORTED_MODULE_2___default());
          break;
        default:
          componentClass = (flarum_forum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_1___default());
      }
      var data = draft.compileData();
      flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().composer.load(componentClass, data);
      flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().composer.show();
      Object.assign((flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().composer).fields, data.fields);
      return resolve((flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().composer));
    });
  };
  _proto.load = function load() {
    var _this2 = this;
    if ((flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().cache).draftsLoaded) {
      return;
    }
    this.loading = true;
    m.redraw();
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().store.find('drafts').then(function () {
      return (flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().cache).draftsLoaded = true;
    }, function () {}).then(function () {
      _this2.loading = false;
      m.redraw();
    });
  };
  return DraftsListState;
}();


/***/ }),

/***/ "./src/forum/states/index.js":
/*!***********************************!*\
  !*** ./src/forum/states/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   states: () => (/* binding */ states)
/* harmony export */ });
/* harmony import */ var _DraftsListState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DraftsListState */ "./src/forum/states/DraftsListState.js");
/*
 *
 *  This file is part of fof/drafts.
 *
 *  Copyright (c) 2021 FriendsOfFlarum.
 *
 *  For the full copyright and license information, please view the LICENSE.md
 *  file that was distributed with this source code.
 *
 */


var states = {
  DraftsListState: _DraftsListState__WEBPACK_IMPORTED_MODULE_0__["default"]
};

/***/ }),

/***/ "./src/forum/utils/deepEqual.js":
/*!**************************************!*\
  !*** ./src/forum/utils/deepEqual.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ deepEqual)
/* harmony export */ });
// Deep comparison function
function deepEqual(obj1, obj2) {
  if (obj1 === obj2) {
    return true;
  }
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 == null || obj2 == null) {
    return false;
  }
  var keys1 = Object.keys(obj1);
  var keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (var _i = 0, _keys = keys1; _i < _keys.length; _i++) {
    var key = _keys[_i];
    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }
  return true;
}

/***/ }),

/***/ "./src/forum/utils/fillRelationship.js":
/*!*********************************************!*\
  !*** ./src/forum/utils/fillRelationship.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (data, map) {
  return Array.isArray(data) ? data.map(map).sort() : map(data);
});

/***/ }),

/***/ "./src/forum/utils/index.js":
/*!**********************************!*\
  !*** ./src/forum/utils/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   utils: () => (/* binding */ utils)
/* harmony export */ });
/* harmony import */ var _fillRelationship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fillRelationship */ "./src/forum/utils/fillRelationship.js");
/*
 *
 *  This file is part of fof/drafts.
 *
 *  Copyright (c) 2019 FriendsOfFlarum.
 *
 *  For the full copyright and license information, please view the LICENSE.md
 *  file that was distributed with this source code.
 *
 */

var utils = {
  fillRelationship: _fillRelationship__WEBPACK_IMPORTED_MODULE_0__["default"]
};

/***/ }),

/***/ "@fof-byobu":
/*!*************************************************!*\
  !*** external "flarum.extensions['fof-byobu']" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.extensions['fof-byobu'];

/***/ }),

/***/ "flarum/common/Component":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['common/Component']" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/Component'];

/***/ }),

/***/ "flarum/common/Model":
/*!*****************************************************!*\
  !*** external "flarum.core.compat['common/Model']" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/Model'];

/***/ }),

/***/ "flarum/common/components/Alert":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Alert']" ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Alert'];

/***/ }),

/***/ "flarum/common/components/Button":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Button']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Button'];

/***/ }),

/***/ "flarum/common/components/FieldSet":
/*!*******************************************************************!*\
  !*** external "flarum.core.compat['common/components/FieldSet']" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/FieldSet'];

/***/ }),

/***/ "flarum/common/components/HeaderSecondary":
/*!**************************************************************************!*\
  !*** external "flarum.core.compat['common/components/HeaderSecondary']" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/HeaderSecondary'];

/***/ }),

/***/ "flarum/common/components/LoadingIndicator":
/*!***************************************************************************!*\
  !*** external "flarum.core.compat['common/components/LoadingIndicator']" ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/LoadingIndicator'];

/***/ }),

/***/ "flarum/common/components/Modal":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Modal']" ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Modal'];

/***/ }),

/***/ "flarum/common/components/NotificationsDropdown":
/*!********************************************************************************!*\
  !*** external "flarum.core.compat['common/components/NotificationsDropdown']" ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/NotificationsDropdown'];

/***/ }),

/***/ "flarum/common/components/Page":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['common/components/Page']" ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Page'];

/***/ }),

/***/ "flarum/common/components/SettingsPage":
/*!***********************************************************************!*\
  !*** external "flarum.core.compat['common/components/SettingsPage']" ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/SettingsPage'];

/***/ }),

/***/ "flarum/common/components/Switch":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Switch']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Switch'];

/***/ }),

/***/ "flarum/common/components/Tooltip":
/*!******************************************************************!*\
  !*** external "flarum.core.compat['common/components/Tooltip']" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Tooltip'];

/***/ }),

/***/ "flarum/common/extend":
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/extend'];

/***/ }),

/***/ "flarum/common/helpers/avatar":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/avatar']" ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/helpers/avatar'];

/***/ }),

/***/ "flarum/common/helpers/humanTime":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/humanTime']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/helpers/humanTime'];

/***/ }),

/***/ "flarum/common/helpers/icon":
/*!************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/icon']" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/helpers/icon'];

/***/ }),

/***/ "flarum/common/models/User":
/*!***********************************************************!*\
  !*** external "flarum.core.compat['common/models/User']" ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/models/User'];

/***/ }),

/***/ "flarum/common/utils/ItemList":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['common/utils/ItemList']" ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/utils/ItemList'];

/***/ }),

/***/ "flarum/common/utils/Stream":
/*!************************************************************!*\
  !*** external "flarum.core.compat['common/utils/Stream']" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/utils/Stream'];

/***/ }),

/***/ "flarum/common/utils/mixin":
/*!***********************************************************!*\
  !*** external "flarum.core.compat['common/utils/mixin']" ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/utils/mixin'];

/***/ }),

/***/ "flarum/common/utils/string":
/*!************************************************************!*\
  !*** external "flarum.core.compat['common/utils/string']" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/utils/string'];

/***/ }),

/***/ "flarum/forum/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['forum/app']" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/app'];

/***/ }),

/***/ "flarum/forum/components/Composer":
/*!******************************************************************!*\
  !*** external "flarum.core.compat['forum/components/Composer']" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/Composer'];

/***/ }),

/***/ "flarum/forum/components/DiscussionComposer":
/*!****************************************************************************!*\
  !*** external "flarum.core.compat['forum/components/DiscussionComposer']" ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/DiscussionComposer'];

/***/ }),

/***/ "flarum/forum/components/ReplyComposer":
/*!***********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/ReplyComposer']" ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/ReplyComposer'];

/***/ }),

/***/ "flarum/forum/states/ComposerState":
/*!*******************************************************************!*\
  !*** external "flarum.core.compat['forum/states/ComposerState']" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/states/ComposerState'];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   components: () => (/* reexport safe */ _src_forum__WEBPACK_IMPORTED_MODULE_0__.components),
/* harmony export */   models: () => (/* reexport safe */ _src_forum__WEBPACK_IMPORTED_MODULE_0__.models),
/* harmony export */   states: () => (/* reexport safe */ _src_forum__WEBPACK_IMPORTED_MODULE_0__.states),
/* harmony export */   utils: () => (/* reexport safe */ _src_forum__WEBPACK_IMPORTED_MODULE_0__.utils)
/* harmony export */ });
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/*
 *
 *  This file is part of fof/drafts.
 *
 *  Copyright (c) 2019 FriendsOfFlarum.
 *
 *  For the full copyright and license information, please view the LICENSE.md
 *  file that was distributed with this source code.
 *
 */


})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=forum.js.map