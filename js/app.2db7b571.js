(function (t) { function e(e) { for (var s, i, o = e[0], c = e[1], l = e[2], p = 0, u = []; p < o.length; p++)i = o[p], Object.prototype.hasOwnProperty.call(n, i) && n[i] && u.push(n[i][0]), n[i] = 0; for (s in c) Object.prototype.hasOwnProperty.call(c, s) && (t[s] = c[s]); d && d(e); while (u.length) u.shift()(); return r.push.apply(r, l || []), a() } function a() { for (var t, e = 0; e < r.length; e++) { for (var a = r[e], s = !0, i = 1; i < a.length; i++) { var o = a[i]; 0 !== n[o] && (s = !1) } s && (r.splice(e--, 1), t = c(c.s = a[0])) } return t } var s = {}, i = { app: 0 }, n = { app: 0 }, r = []; function o(t) { return c.p + "js/" + ({ about: "about" }[t] || t) + "." + { about: "8d5d908c" }[t] + ".js" } function c(e) { if (s[e]) return s[e].exports; var a = s[e] = { i: e, l: !1, exports: {} }; return t[e].call(a.exports, a, a.exports, c), a.l = !0, a.exports } c.e = function (t) { var e = [], a = { about: 1 }; i[t] ? e.push(i[t]) : 0 !== i[t] && a[t] && e.push(i[t] = new Promise((function (e, a) { for (var s = "css/" + ({ about: "about" }[t] || t) + "." + { about: "0a922956" }[t] + ".css", n = c.p + s, r = document.getElementsByTagName("link"), o = 0; o < r.length; o++) { var l = r[o], p = l.getAttribute("data-href") || l.getAttribute("href"); if ("stylesheet" === l.rel && (p === s || p === n)) return e() } var u = document.getElementsByTagName("style"); for (o = 0; o < u.length; o++) { l = u[o], p = l.getAttribute("data-href"); if (p === s || p === n) return e() } var d = document.createElement("link"); d.rel = "stylesheet", d.type = "text/css", d.onload = e, d.onerror = function (e) { var s = e && e.target && e.target.src || n, r = new Error("Loading CSS chunk " + t + " failed.\n(" + s + ")"); r.code = "CSS_CHUNK_LOAD_FAILED", r.request = s, delete i[t], d.parentNode.removeChild(d), a(r) }, d.href = n; var m = document.getElementsByTagName("head")[0]; m.appendChild(d) })).then((function () { i[t] = 0 }))); var s = n[t]; if (0 !== s) if (s) e.push(s[2]); else { var r = new Promise((function (e, a) { s = n[t] = [e, a] })); e.push(s[2] = r); var l, p = document.createElement("script"); p.charset = "utf-8", p.timeout = 120, c.nc && p.setAttribute("nonce", c.nc), p.src = o(t); var u = new Error; l = function (e) { p.onerror = p.onload = null, clearTimeout(d); var a = n[t]; if (0 !== a) { if (a) { var s = e && ("load" === e.type ? "missing" : e.type), i = e && e.target && e.target.src; u.message = "Loading chunk " + t + " failed.\n(" + s + ": " + i + ")", u.name = "ChunkLoadError", u.type = s, u.request = i, a[1](u) } n[t] = void 0 } }; var d = setTimeout((function () { l({ type: "timeout", target: p }) }), 12e4); p.onerror = p.onload = l, document.head.appendChild(p) } return Promise.all(e) }, c.m = t, c.c = s, c.d = function (t, e, a) { c.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: a }) }, c.r = function (t) { "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, c.t = function (t, e) { if (1 & e && (t = c(t)), 8 & e) return t; if (4 & e && "object" === typeof t && t && t.__esModule) return t; var a = Object.create(null); if (c.r(a), Object.defineProperty(a, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t) for (var s in t) c.d(a, s, function (e) { return t[e] }.bind(null, s)); return a }, c.n = function (t) { var e = t && t.__esModule ? function () { return t["default"] } : function () { return t }; return c.d(e, "a", e), e }, c.o = function (t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, c.p = "", c.oe = function (t) { throw console.error(t), t }; var l = window["webpackJsonp"] = window["webpackJsonp"] || [], p = l.push.bind(l); l.push = e, l = l.slice(); for (var u = 0; u < l.length; u++)e(l[u]); var d = p; r.push([0, "chunk-vendors"]), a() })({ 0: function (t, e, a) { t.exports = a("56d7") }, "034f": function (t, e, a) { "use strict"; a("85ec") }, "159c": function (t, e, a) { t.exports = a.p + "img/misc_img.5287652e.png" }, "24cf": function (t, e, a) { "use strict"; a("44e6") }, 3541: function (t, e, a) { }, 3759: function (t, e, a) { t.exports = a.p + "img/portfolio.f06e556d.png" }, "44e6": function (t, e, a) { }, 5502: function (t, e, a) { "use strict"; a("81ac") }, "56d7": function (t, e, a) { "use strict"; a.r(e); a("e260"), a("e6cf"), a("cca6"), a("a79d"); var s = a("2b0e"), i = function () { var t = this, e = t.$createElement, a = t._self._c || e; return a("div", { attrs: { id: "app" } }, [a("SiteNav", { attrs: { id: "nav" } }), a("div", { staticClass: "profile-bg" }, [a("b-img", { staticClass: "profile-img", attrs: { src: t.image, alt: "profile photo" } })], 1), a("b-row", [a("b-col", { attrs: { cols: "12", lg: "4" } }, [a("div", { staticClass: "title-text" }, [a("h1", [t._v("Dineen")]), a("h1", [t._v("Lauren")]), a("h3", [t._v("Web")]), a("h3", [t._v("Development")])])]), a("b-col", { attrs: { cols: "12", lg: "8" } }, [a("div", { staticClass: "transition-container" }, [a("transition", { attrs: { name: "fade", mode: "out-in" } }, [a("router-view")], 1)], 1)])], 1)], 1) }, n = [], r = function () { var t = this, e = t.$createElement, a = t._self._c || e; return a("section", [a("b-navbar", { attrs: { toggleable: "sm", type: "light", variant: "light", fixed: "top" } }, [a("b-navbar-brand", { attrs: { to: "/" } }, [a("img", { staticClass: "logo-img", attrs: { src: t.logo, alt: "dineen lauren logo" } })]), a("b-navbar-toggle", { attrs: { target: "nav-collapse" }, scopedSlots: t._u([{ key: "default", fn: function (t) { var e = t.expanded; return [a("b-icon", e ? { attrs: { icon: "chevron-bar-up" } } : { attrs: { icon: "chevron-bar-down" } })] } }]) }), a("b-collapse", { staticClass: "mx-auto", attrs: { id: "nav-collapse", "is-nav": "" } }, [a("b-navbar-nav", { staticClass: "mx-auto" }, [a("b-nav-item", { attrs: { to: "/about" } }, [t._v("About")]), a("b-nav-item", { attrs: { to: "/projects" } }, [t._v("Projects")]), a("b-nav-item", { attrs: { to: "/resume" } }, [t._v("Resume")])], 1), a("b-navbar-nav", { staticClass: "ml-auto" })], 1)], 1)], 1) }, o = [], c = a("0759"), l = a("7386"), p = { name: "SiteNav", components: { BIcon: c["a"], BIconChevronBarUp: l["e"], BIconChevronBarDown: l["d"] }, data: function () { return { logo: a("d87d") } } }, u = p, d = (a("e6f8"), a("2877")), m = Object(d["a"])(u, r, o, !1, null, "35fdac30", null), v = m.exports, f = { components: { SiteNav: v }, data: function () { return { tabIndex: 0, image: a("b31e") } } }, b = f, h = (a("034f"), Object(d["a"])(b, i, n, !1, null, null, null)), g = h.exports, _ = (a("d3b7"), a("3ca3"), a("ddb0"), a("8c4f")), C = function () { var t = this, e = t.$createElement, a = t._self._c || e; return a("transition", { attrs: { name: "slide-up", mode: "out-in" } }, [a("div", { staticClass: "r-fullscreen-overlay" }, [a("div", { staticClass: "r-fullscreen-overlay__body" }, [a("h1", { staticClass: "offset-1" }, [t._v("Dineen")]), a("h1", { staticClass: "offset-2" }, [t._v("Lauren")]), a("h4", { staticClass: "offset-3" }, [t._v("Web Development")]), a("router-link", { staticClass: "button", attrs: { to: "about" } }, [t._v("View")])], 1)])]) }, w = [], y = { name: "Home", data: function () { return {} } }, j = y, k = (a("5502"), Object(d["a"])(j, C, w, !1, null, "b27290ce", null)), x = k.exports, S = function () { var t = this, e = t.$createElement, a = t._self._c || e; return a("b-container", { staticClass: "pg-section projects" }, [a("div", { staticClass: "pg-title" }, [a("h1", [t._v("Projects")])]), a("AppRSVP"), a("UnionStreetCap"), a("UwDev"), a("Portfolio"), a("Design")], 1) }, O = [], P = function () { var t = this, e = t.$createElement, s = t._self._c || e; return s("b-container", { staticClass: "content-container relative", attrs: { fluid: "sm" } }, [s("div", { staticClass: "project-title" }, [s("h3", { staticClass: "m-0" }, [t._v("Wedding RSVP")]), s("ul", [s("li", [s("a", { attrs: { href: "https://www.dineenlauren.com/rsvp-app/#/", target: "blank" } }, [t._v("View Site")])]), s("li", { staticClass: "mx-2" }, [t._v("|")]), s("li", [s("a", { attrs: { href: "https://github.com/dineenlauren/rsvp-app/tree/gh-pages", target: "blank" } }, [t._v("View Code ")])])])]), s("b-row", { attrs: { "align-h": "center" } }, [s("b-col", { staticClass: "video-gif", attrs: { cols: "12", lg: "11" } }, [s("b-embed", { staticClass: "video-img", attrs: { type: "video", aspect: "4by3", controls: "", loop: "true", allowfullscreen: "" } }, [s("source", { attrs: { poster: "../../assets/images/rsvp-app.png", src: a("e22b"), type: "video/webm" } }), s("source", { attrs: { poster: "../../assets/images/rsvp-app.png", src: a("7487"), type: "video/mp4" } })])], 1), s("b-col", { staticClass: "project-text", attrs: { cols: "12" } }, [s("p", { staticClass: "emphasis" }, [t._v("Tech:")]), s("b-row", { staticClass: "tech" }, [s("b-col", { staticClass: "item", attrs: { cols: "auto" } }, [t._v("Vue")]), s("b-col", { staticClass: "item", attrs: { cols: "auto" } }, [t._v("Bootstrap-Vue")]), s("b-col", { staticClass: "item", attrs: { cols: "auto" } }, [t._v("Firestore")]), s("b-col", { staticClass: "item", attrs: { cols: "auto" } }, [t._v("Firebase")])], 1), s("p", [s("span", { staticClass: "emphasis" }, [t._v("What it is: ")]), t._v(" A RSVP website allowing users to login and update their RSVP status. ")]), s("p", [s("span", { staticClass: "emphasis" }, [t._v("Overview: ")]), t._v("This is a replica of a real wedding website I created for a friend's wedding. They needed to restrict their guest count, so each guest was given their own login credentials. Upon logging in, the RSVP page would display different information depending on whether the guest was allowed an additional guest or not. ")]), s("p", [s("span", { staticClass: "emphasis" }, [t._v("How it worked: ")]), t._v(" I used Vue.js as the framework for building the user interface, Firebase to handle authentication, Firestore as the database, and BootstrapVue for styling. ")])], 1)], 1)], 1) }, W = [], E = { name: "AppRSVP" }, D = E, A = (a("777e"), Object(d["a"])(D, P, W, !1, null, "29aa33d6", null)), B = A.exports, I = function () { var t = this, e = t.$createElement, s = t._self._c || e; return s("b-container", { staticClass: "mt-5 content-container relative", attrs: { fluid: "sm" } }, [s("div", { staticClass: "project-title yellow" }, [s("h3", [t._v("Union Street Capital")]), s("ul", [s("li", [s("a", { attrs: { href: "https://www.unionstreetcap.com/", target: "blank" } }, [t._v("View Site")])])])]), s("b-row", { attrs: { "align-h": "center" } }, [s("b-col", { staticClass: "screenshot", attrs: { cols: "12", lg: "11" } }, [s("a", { attrs: { href: "https://www.unionstreetcap.com/", target: "_blank" } }, [s("b-img", { attrs: { src: a("9531"), fluid: "", alt: "Image of unionstreetcap.com landing page" } })], 1)]), s("b-col", { staticClass: "project-text", attrs: { cols: "12" } }, [s("p", { staticClass: "emphasis" }, [t._v("Tech:")]), s("b-row", { staticClass: "tech" }, [s("b-col", { staticClass: "item", attrs: { cols: "auto" } }, [t._v("CMS")]), s("b-col", { staticClass: "item", attrs: { cols: "auto" } }, [t._v("Photoshop")])], 1), s("p", [s("span", { staticClass: "emphasis" }, [t._v("What it is: ")]), t._v(" A site promoting client's business. ")]), s("p", [s("span", { staticClass: "emphasis" }, [t._v("Overview: ")]), t._v(" I created this client's website on Wix.com, as it is user friendly, which allows the client to easily make changes on their own. ")])], 1)], 1)], 1) }, V = [], U = { name: "UnionStreetCap" }, L = U, F = (a("c17c"), Object(d["a"])(L, I, V, !1, null, "c2caede4", null)), M = F.exports, T = function () { var t = this, e = t.$createElement, s = t._self._c || e; return s("b-container", { staticClass: "mt-5 content-container relative", attrs: { fluid: "sm" } }, [s("div", { staticClass: "project-title yellow" }, [s("h3", [t._v("Land Development Site Listing")]), s("ul", [s("li", [s("a", { attrs: { href: "https://uwdevsite.com/", target: "blank" } }, [t._v("View Site")])])])]), s("b-row", { attrs: { "align-h": "center" } }, [s("b-col", { staticClass: "screenshot", attrs: { cols: "12", lg: "11" } }, [s("a", { attrs: { href: "https://uwdevsite.com/", target: "_blank" } }, [s("b-img", { attrs: { src: a("ebb4"), fluid: "", alt: "Image of uwdevsite.com landing page" } })], 1)]), s("b-col", { staticClass: "project-text", attrs: { cols: "12" } }, [s("p", { staticClass: "emphasis" }, [t._v("Tech:")]), s("b-row", { staticClass: "tech" }, [s("b-col", { staticClass: "item", attrs: { cols: "auto" } }, [t._v("CMS")]), s("b-col", { staticClass: "item", attrs: { cols: "auto" } }, [t._v("WordPress")]), s("b-col", { staticClass: "item", attrs: { cols: "auto" } }, [t._v("Photoshop")])], 1), s("p", [s("span", { staticClass: "emphasis" }, [t._v("What it is: ")]), t._v(" A website promoting a land development site for sell. ")]), s("p", [s("span", { staticClass: "emphasis" }, [t._v("Overview: ")]), t._v(" I created this client's website with Wordpress.org and bluehost, which allowed for open customization and easy modifications. ")])], 1)], 1)], 1) }, $ = [], N = { name: "UwDev" }, R = N, H = (a("7c66"), Object(d["a"])(R, T, $, !1, null, "691131c6", null)), q = H.exports, X = function () { var t = this, e = t.$createElement, s = t._self._c || e; return s("b-container", { staticClass: "content-container relative", attrs: { fluid: "sm" } }, [s("div", { staticClass: "project-title" }, [s("h3", { staticClass: "m-0" }, [t._v("This Portfolio")]), s("ul", [s("li", [s("a", { attrs: { href: "https://github.com/dineenlauren/dineenlauren.github.io", target: "blank" } }, [t._v(" View Code ")])])])]), s("b-row", { attrs: { "align-h": "center" } }, [s("b-col", { staticClass: "screenshot", attrs: { cols: "12", lg: "11" } }, [s("b-img", { attrs: { src: a("3759"), fluid: "", alt: "Image of portfolio landing page" } })], 1), s("b-col", { staticClass: "project-text", attrs: { cols: "12" } }, [s("p", { staticClass: "emphasis" }, [t._v("Tech:")]), s("b-row", { staticClass: "tech" }, [s("b-col", { staticClass: "item", attrs: { cols: "auto" } }, [t._v("Vue")]), s("b-col", { staticClass: "item", attrs: { cols: "auto" } }, [t._v("Bootstrap-Vue")]), s("b-col", { staticClass: "item", attrs: { cols: "auto" } }, [t._v("Photoshop")]), s("b-col", { staticClass: "item", attrs: { cols: "auto" } }, [t._v("Adobe XD")])], 1), s("p", [s("span", { staticClass: "emphasis" }, [t._v("What it is: ")]), t._v(" My portfolio website showcasing projects I have created. ")]), s("p", [s("span", { staticClass: "emphasis" }, [t._v("Overview: ")]), t._v("I created the graphics and logos via Photoshop. I designed / wireframed with XD. Built with Vue.js and Bootstrap-Vue. ")])], 1)], 1)], 1) }, z = [], G = { name: "Portfolio" }, J = G, K = Object(d["a"])(J, X, z, !1, null, "750c7e9f", null), Y = K.exports, Q = function () { var t = this, e = t.$createElement, s = t._self._c || e; return s("b-container", { staticClass: "mt-5 content-container relative", attrs: { fluid: "sm" } }, [s("div", { staticClass: "project-title" }, [s("h3", [t._v("Template Creations")])]), s("b-row", { staticClass: "mx-2 my-4" }, [s("b-col", { staticClass: "py-3 bg-pink", attrs: { md: "4" } }, [s("h4", [t._v("Marketing Packages")]), s("p", [s("a", { attrs: { href: "https://drive.google.com/file/d/1zs6d9uwXONMpwvYWlnNDyrLDS3H92C1c/view?usp=sharing", target: "blank" } }, [t._v(" Preview "), s("b-icon-caret-right-fill")], 1)])]), s("b-col", [s("a", { attrs: { href: "https://drive.google.com/file/d/1zs6d9uwXONMpwvYWlnNDyrLDS3H92C1c/view?usp=sharing", target: "_blank" } }, [s("b-img", { attrs: { src: a("fdf6"), fluid: "", alt: "Marketing Design Pages" } })], 1)]), s("b-col", { staticClass: "project-text", attrs: { cols: "12" } }, [s("p", [s("span", { staticClass: "emphasis" }, [t._v("What it is:")]), t._v(" A marketing package for a large scale, multi-family apartment building for sale ")]), s("p", [s("span", { staticClass: "emphasis" }, [t._v("Overview:")]), t._v(" I create, design and implement marketing packages for commercial real estate brokers listing a property for sale. ")]), s("p", [s("span", { staticClass: "emphasis" }, [t._v("How it works:")])]), s("p", [s("b-icon-caret-right-fill"), t._v("I obtain detailed property information via county and/or city records, previous sale comparables and listing broker. ")], 1), s("p", [s("b-icon-caret-right-fill"), t._v("I design and create all maps and graphics (aside from property renderings - those are obtained by listing broker). ")], 1), s("p", [s("b-icon-caret-right-fill"), t._v("I enhance and/or edit all photos in Photoshop ")], 1), s("p", [s("b-icon-caret-right-fill"), t._v("I create and design each page to suit the content ")], 1)])], 1), s("b-row", { staticClass: "mx-2 my-4" }, [s("b-col", { staticClass: "py-3 bg-pink", attrs: { md: "4", order: "1", "order-md": "2" } }, [s("h4", [t._v("Financial Calculators")])]), s("b-col", { attrs: { order: "2", "order-md": "1" } }, [s("b-img", { attrs: { src: a("e6dc"), fluid: "", alt: "Excel financial calculator spreadsheet" } })], 1), s("b-col", { staticClass: "project-text", attrs: { order: "3", cols: "12" } }, [s("p", [s("span", { staticClass: "emphasis" }, [t._v("What it is:")]), t._v(" An Excel template which streamlines the calcuations of property financials saving listing brokers time and preventing errors ")]), s("p", [s("span", { staticClass: "emphasis" }, [t._v("Overview:")]), t._v(" Computes all necessary operating financials pertaining to a multi-family property ")]), s("p", [s("span", { staticClass: "emphasis" }, [t._v("How it works:")])]), s("p", [s("b-icon-caret-right-fill"), t._v("The listing broker inputs property information into specified cells, and the rest is automatically calculated and populated ")], 1)])], 1), s("b-row", { staticClass: "mx-2 my-4" }, [s("b-col", { staticClass: "py-3 bg-pink", attrs: { md: "4" } }, [s("h4", [t._v("Misc. Projects")])]), s("b-col", [s("b-img", { attrs: { src: a("159c"), fluid: "", alt: "collage of different project images" } })], 1), s("b-col", { staticClass: "project-text", attrs: { cols: "12" } }, [s("p", [s("span", { staticClass: "emphasis" }, [t._v("What it is:")]), t._v(" I design and create an array of different marketing materials for clients ")]), s("p", [s("span", { staticClass: "emphasis" }, [t._v("Overview:")]), t._v(" Postcards, yard signs, social media listing updates, flyers ")])])], 1)], 1) }, Z = [], tt = { name: "Design", components: { BIconCaretRightFill: l["c"], BIconCaretLeftFill: l["b"] }, data: function () { return {} } }, et = tt, at = (a("d54d"), Object(d["a"])(et, Q, Z, !1, null, "fbe467a8", null)), st = at.exports, it = { name: "projects", components: { AppRSVP: B, UnionStreetCap: M, UwDev: q, Portfolio: Y, Design: st } }, nt = it, rt = (a("ed0c"), Object(d["a"])(nt, S, O, !1, null, null, null)), ot = rt.exports, ct = function () { var t = this, e = t.$createElement, a = t._self._c || e; return a("b-container", { staticClass: "pg-section resume" }, [a("div", { staticClass: "pg-title" }, [a("h1", [t._v("Resume")])]), a("div", [a("WkUx"), a("WkOperations"), a("WkBroker")], 1)]) }, lt = [], pt = function () { var t = this, e = t.$createElement, a = t._self._c || e; return a("b-container", { staticClass: "content-container relative", attrs: { fluid: "sm" } }, [a("div", [a("div", { staticClass: "project-title" }, [a("h3", { staticClass: "m-0" }, [t._v("University of Washington")]), a("h5", [t._v("Seattle Campus - Seattle, WA")])]), a("b-row", [a("b-col", { attrs: { cols: "12", lg: "11" } }, [a("p", { staticClass: "emphasis-sm" }, [t._v("Communications and Sales")])]), a("b-col", { staticClass: "project-text", attrs: { cols: "12" } }, [a("div", { staticClass: "r-overview my-2" }, [a("ul", [a("li", [t._v("Michael G. Foster School of Business Sales Program")]), a("li", [t._v("Real Estate Broker's License Acquired")])])])])], 1)], 1), a("div", [a("div", { staticClass: "project-title" }, [a("h3", { staticClass: "m-0" }, [t._v("Seattle University")]), a("h5", [t._v("Seattle, WA")])]), a("b-row", [a("b-col", { attrs: { cols: "12", lg: "11" } }, [a("p", { staticClass: "emphasis-sm" }, [t._v("New and Continuing Studies Web Development")])]), a("b-col", { staticClass: "project-text", attrs: { cols: "12" } }, [a("div", { staticClass: "r-overview my-2" }, [a("ul", [a("li", [t._v("Web Development Certificate")])])])])], 1)], 1)]) }, ut = [], dt = { name: "Education", data: function () { return { item1: { school: "University of Washington", degree: "Communications and Sales", location: "Seattle Campus - Seattle, WA", accreditations: { 1: "Michael G. Foster School of Business Sales Program", 2: "Real Estate Broker's License Acquired" } }, item2: { school: "Seattle University", degree: "New and Continuing Studies Web Development", location: "Seattle, WA", accreditations: { 1: "Web Development Certificate" } } } } }, mt = dt, vt = Object(d["a"])(mt, pt, ut, !1, null, "896fe0b8", null), ft = vt.exports, bt = function () { var t = this, e = t.$createElement, a = t._self._c || e; return a("b-container", { staticClass: "content-container", attrs: { fluid: "sm" } }, [a("div", { staticClass: "project-title" }, [a("h3", { staticClass: "m-0" }, [t._v(t._s(t.job))]), a("h5", [t._v(t._s(t.location))])]), a("b-row", [a("b-col", { attrs: { cols: "12", lg: "11" } }, [a("p", { staticClass: "emphasis-sm" }, [t._v(t._s(t.date))])]), a("b-col", { staticClass: "project-text", attrs: { cols: "12" } }, [a("div", { staticClass: "r-overview my-2" }, t._l(t.description, (function (e) { return a("ul", { key: e }, [a("li", [t._v(t._s(e))])]) })), 0)])], 1)], 1) }, ht = [], gt = { name: "WkUx", data: function () { return { job: "Freelance UX / Design", title: "Freelance", date: "Feb 2020 - present", location: "Seattle, WA", description: { 1: "Design and create marketing packages, flyers, signs, and other misc. marketing marterials for commercial real estate", 2: "Design, build and implement websites through content management services that can be self-managed by client", 3: "Maintain website content, updates and functionality for clients" } } } }, _t = gt, Ct = Object(d["a"])(_t, bt, ht, !1, null, "37e9cfe8", null), wt = Ct.exports, yt = function () { var t = this, e = t.$createElement, a = t._self._c || e; return a("b-container", { staticClass: "content-container relative", attrs: { fluid: "sm" } }, [a("div", { staticClass: "project-title" }, [a("h3", { staticClass: "m-0" }, [t._v(t._s(t.job))]), a("h5", [t._v(t._s(t.location))])]), a("b-row", [a("b-col", { attrs: { cols: "12", lg: "11" } }, [a("p", { staticClass: "emphasis-sm" }, [t._v(t._s(t.title))]), a("p", [t._v(t._s(t.date))])]), a("b-col", { staticClass: "project-text", attrs: { cols: "12" } }, [a("div", { staticClass: "r-overview my-2" }, t._l(t.description, (function (e) { return a("ul", { key: e }, [a("li", [t._v(t._s(e))])]) })), 0)])], 1)], 1) }, jt = [], kt = { name: "WkBroker", data: function () { return { job: "Urban Commercial Partners LLC", title: "Office Operations", date: "Oct 2017 - Feb 2020", location: "Seattle, WA", description: { 1: "Managed our digital marketing packages including designing, building,and maintaining the Firm’s web site, appropriately, on a time sensitive basis to produce the optimal return on investment", 2: "Experience in managing Firm’s financial records and general office management requirements" } } } }, xt = kt, St = Object(d["a"])(xt, yt, jt, !1, null, "54f2a61e", null), Ot = St.exports, Pt = function () { var t = this, e = t.$createElement, a = t._self._c || e; return a("b-container", { staticClass: "content-container relative", attrs: { fluid: "sm" } }, [a("div", { staticClass: "project-title" }, [a("h3", { staticClass: "m-0" }, [t._v(t._s(t.job))]), a("h5", [t._v(t._s(t.location))])]), a("b-row", [a("b-col", { attrs: { cols: "12", lg: "11" } }, [a("p", { staticClass: "emphasis-sm" }, [t._v(t._s(t.title))]), a("p", [t._v(t._s(t.date))])]), a("b-col", { staticClass: "project-text", attrs: { cols: "12" } }, [a("div", { staticClass: "r-overview my-2" }, t._l(t.description, (function (e) { return a("ul", { key: e }, [a("li", [t._v(t._s(e))])]) })), 0)])], 1)], 1) }, Wt = [], Et = { name: "WkBroker", data: function () { return { job: "Urban Commercial Partners LLC", title: "Associate Broker", date: "Oct 2014 - Feb 2020", location: "Seattle, WA", description: { 1: "Experience ranges from successful sales of small-scale properties ($200K+) to large complexes ($4M+)", 2: "Advised clients on how to streamline operations and enhance fiscal performance of their property portfolio", 3: "Performed all aspects of selling including prospecting, approaching, presenting,handling objections, proposal preparation, closing and follow-up" } } } }, Dt = Et, At = Object(d["a"])(Dt, Pt, Wt, !1, null, "519329e9", null), Bt = At.exports, It = { name: "projects", components: { Education: ft, WkUx: wt, WkOperations: Ot, WkBroker: Bt } }, Vt = It, Ut = (a("24cf"), Object(d["a"])(Vt, ct, lt, !1, null, null, null)), Lt = Ut.exports; s["a"].use(_["a"]); var Ft = [{ path: "/", name: "Home", component: x }, { path: "/about", name: "About", component: function () { return a.e("about").then(a.bind(null, "f820")) } }, { path: "/projects", name: "Projects", component: ot }, { path: "/resume", name: "Resume", component: Lt }], Mt = new _["a"]({ routes: Ft }), Tt = Mt, $t = a("edbf"), Nt = a("498a"), Rt = a("f9bc"), Ht = a("0025"), qt = a("bdc5"), Xt = a("b720"), zt = a("a7e2"); a("f9e3"), a("2dd8"); s["a"].use($t["a"]), s["a"].use(Nt["a"]), s["a"].use(Rt["a"]), s["a"].use(Ht["a"]), s["a"].use(qt["a"]), s["a"].use(Xt["a"]), s["a"].use(zt["a"]), s["a"].component("BIcon", c["a"]), s["a"].component("BIconGithub", l["g"]), s["a"].config.productionTip = !1, new s["a"]({ router: Tt, render: function (t) { return t(g) } }).$mount("#app") }, 7487: function (t, e, a) { t.exports = a.p + "media/vue-firebase.9bf1e8c9.mp4" }, "777e": function (t, e, a) { "use strict"; a("3541") }, "7c33": function (t, e, a) { }, "7c66": function (t, e, a) { "use strict"; a("d6cb") }, "7d27": function (t, e, a) { }, "81ac": function (t, e, a) { }, "85ec": function (t, e, a) { }, 9531: function (t, e, a) { t.exports = a.p + "img/unionstreetcap.6d7e3d38.png" }, ac18: function (t, e, a) { }, b31e: function (t, e, a) { t.exports = a.p + "img/profile.02bfa37c.png" }, c17c: function (t, e, a) { "use strict"; a("ac18") }, d54d: function (t, e, a) { "use strict"; a("7c33") }, d6cb: function (t, e, a) { }, d87d: function (t, e, a) { t.exports = a.p + "img/dl_logo.e9f97ada.svg" }, e22b: function (t, e, a) { t.exports = a.p + "media/vue-firebase.b237d317.webm" }, e6dc: function (t, e, a) { t.exports = a.p + "img/excel_img.cc7b167d.png" }, e6f8: function (t, e, a) { "use strict"; a("7d27") }, e79b: function (t, e, a) { }, ebb4: function (t, e, a) { t.exports = a.p + "img/uwdev.7169e7f3.png" }, ed0c: function (t, e, a) { "use strict"; a("e79b") }, fdf6: function (t, e, a) { t.exports = a.p + "img/om_img.5842cd19.png" } });
//# sourceMappingURL=app.2db7b571.js.map
