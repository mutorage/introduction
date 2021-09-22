"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (s) {
  var l = {};

  function n() {
    var e = null,
        t = void 0,
        r = l.clearContext("main.muri-canvas"),
        n = [];
    n.push({
      path: "/beta/home",
      _class: "MainActivityView"
    }, {
      path: "/search/:type/:query",
      _class: "SearchResultView"
    });

    var a,
        n = function (e) {
      var t = e._r.path.match(/:(\w+)/g),
          r = {};

      if (null == t) return {};

      for (var n = e.result, a = 0; a < t.length; a++) {
        r[t[a]] = n[a + 1];
      }

      return r;
    }(e = (e = n.map(function (e) {
      var t = new RegExp("^" + e.path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");
      return {
        _r: e,
        result: location.pathname.match(t)
      };
    }).find(function (e) {
      return null !== e.result;
    })) || ("/" == location.pathname || "/index.html" == location.pathname ? {
      _r: n[0],
      result: [n[0].path]
    } : function (e) {
      var t = mutorage.apps.useResourceSync("/static/user_contents" + e.result[0]);

      if (404 == t.status) {
        var r = l.createVirtualDOM("section", {
          style: {
            "background-color": "#f14668",
            color: "#ffffff",
            "align-items": "stretch",
            "flex-direction": "column",
            "justify-content": "space-between"
          }
        }, l.createVirtualDOM("div", {
          style: {
            padding: "9rem 1.5rem",
            "flex-grow": "1",
            "flex-shrink": "0"
          }
        }, l.createVirtualDOM("p", {
          style: {
            "margin-bottom": "1.5rem",
            "font-size": "2rem",
            "font-weight": "600",
            "line-height": "1.125",
            "word-break": "break-word"
          }
        }, "이런... 페이지를 찾을 수 없어요"), l.createVirtualDOM("br", {}), l.createVirtualDOM("p", {
          style: {
            color: "rgba(255, 255, 255, 0.9)",
            "font-size": "1.25rem",
            "font-weight": "400",
            "line-height": "1.25",
            "word-break": "break-word"
          }
        }, "여기로 오게한 개발자를 짤라야 겠군요! :*")));
        return e.response = r, e;
      }

      if (200 == t.status) return {
        _r: {
          path: [location.pathname],
          _class: "UserStaticView"
        },
        result: [location.pathname],
        response: t.data
      };
      window.alert("인터넷 연결 또는 서버 문제가 발생하였습니다.\n새로고침합니다."), location.reload();
    }({
      _r: {
        path: "__NOT_FOUND_ERROR__",
        _class: "ClientNotFoundView"
      },
      result: [location.pathname]
    })));

    s.parameter = n, t = "UserStaticView" == e._r._class || "ClientNotFoundView" == e._r._class ? (a = e.response, l.createElement(a)) : ((n = l.stateStorage.getView(e._r._class)) || (200 == (a = mutorage.apps.useResourceSync("/app/" + e._r._class)).status ? n = l.stateStorage.setView(e._r._class, l.createElement(a.data)) : 404 == a.status && (a = l.createVirtualDOM("section", {
      style: {
        "background-color": "#ffe08a",
        color: "rgba(0,0,0,.7)",
        "align-items": "stretch",
        "flex-direction": "column",
        "justify-content": "space-between"
      }
    }, l.createVirtualDOM("div", {
      style: {
        padding: "9rem 1.5rem",
        "flex-grow": "1",
        "flex-shrink": "0"
      }
    }, l.createVirtualDOM("p", {
      style: {
        "margin-bottom": "1.5rem",
        "font-size": "2rem",
        "font-weight": "600",
        "line-height": "1.125",
        "word-break": "break-word"
      }
    }, "흠... 이 페이지, 개발중인것 같은데요?"), l.createVirtualDOM("br", {}), l.createVirtualDOM("p", {
      style: {
        color: "rgba(0,0,0,.7)",
        "font-size": "1.25rem",
        "font-weight": "400",
        "line-height": "1.25",
        "word-break": "break-word"
      }
    }, "계획은 있으나 아직 서비스중이지 않은것 같아요! :*"))), n = l.createElement(a))), n), r.appendChild(t), history.replaceState({
      _class: e._r["class"]
    }, null, e.result[0]);
  }

  l.createVirtualDOM = function (e, t) {
    return {
      type: e,
      props: t,
      children: [].slice.call(arguments, 2)
    };
  }, l.createElement = function (e) {
    if ("string" == typeof e) return document.createTextNode(e);

    for (var t = document.createElement(e.type), r = 0, n = e.props; r < Object.keys(n).length; r++) {
      var a = Object.keys(n)[r];
      if ("textContent" != a && "innerText" != a) {
        if ("style" != a || "object" != _typeof(n[a])) t.setAttribute(a, n[a]);else for (var s = n[a], o = 0, i = Object.keys(s); o < i.length; o++) {
          t.style[i[o]] = s[i[o]];
        }
      } else console.log("That property should be used as createTextNode by pushing a string to children in the virtual object.");
    }

    return e.children.map(l.createElement).forEach(t.appendChild.bind(t)), t;
  }, l.appendTo = function (e, t) {
    return document.querySelector(e).appendChild(t), t;
  }, l.clearContext = function (e) {
    e = document.querySelector(e);
    return e.innerHTML = "", e;
  }, l.removeElement = function (e) {
    e.parentNode.removeChild(e);
  }, l.stateStorage = {
    getView: function getView(e) {
      return !!this.views.hasOwnProperty(e) && this.views[e].cloneNode(!0);
    },
    setView: function setView(e, t) {
      return this.views[e] = t, this.getView(e);
    },
    views: {}
  }, this.addEventListener("popstate", n), document.addEventListener("DOMContentLoaded", function () {
    document.body.addEventListener("click", function (e) {
      var t = e.target.closest(".internal-link");
      t && (e.preventDefault(), history.pushState(null, null, t.href), n());
    }), n();
    var e,
        t,
        r = 200 == (t = (0, s.apps.useResourceSync)("/static/navigator")).status ? (l.appendTo(".muri-menus", l.createElement(t.data)), {
      success: !0,
      tree: t.data
    }) : t,
        t = (e = {}, t = l.createElement({
      type: "div",
      props: {
        "class": "suggestions-renderer"
      },
      children: [{
        type: "div",
        props: {
          "class": "sb-pointer"
        },
        children: []
      }, {
        type: "div",
        props: {
          "class": "suggestions-view"
        },
        children: []
      }]
    }), l.stateStorage.setView("suggestion_renderer", t), e.renderer = null, e.drawView = function () {
      e.undraw(), e.renderer = l.stateStorage.getView("suggestion_renderer"), l.appendTo(".search-box", e.renderer), e.renderer.addEventListener("mousedown", function (e) {
        return e.preventDefault(), !1;
      });
    }, e.undraw = function () {
      null != e.renderer && (l.removeElement(e.renderer), e.renderer = null);
    }, e.initalize = function () {}, document.querySelector(".search-box input").addEventListener("focus", e.drawView), document.querySelector(".search-box input").addEventListener("blur", e.undraw), e);
    s.components = {
      navMenuRenderer: r,
      searchSuggestionRenderer: t
    };
  });
}((void 0).mutorage = (void 0).mutorage || {});