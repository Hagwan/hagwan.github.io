(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [506], {
        4910: function(e, t, n) {
            "use strict";
            let r, o;

            function i() {
                return (i = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            n.d(t, {
                x8: function() {
                    return rt
                },
                VY: function() {
                    return tt
                },
                aV: function() {
                    return et
                },
                h_: function() {
                    return Qe
                },
                fC: function() {
                    return Ge
                },
                Dx: function() {
                    return nt
                },
                xz: function() {
                    return Je
                }
            });
            var a, l, u, c, s, d = n(7294),
                f = n.t(d, 2);

            function p(e, t, {
                checkForDefaultPrevented: n = !0
            } = {}) {
                return function(r) {
                    if (null == e || e(r), !1 === n || !r.defaultPrevented) return null == t ? void 0 : t(r)
                }
            }

            function m(...e) {
                return t => e.forEach((e => {
                    var n;
                    "function" == typeof(n = e) ? n(t): null != n && (n.current = t)
                }))
            }

            function v(...e) {
                return (0, d.useCallback)(m(...e), e)
            }
            let h = (null == globalThis ? void 0 : globalThis.document) ? d.useLayoutEffect : () => {},
                g = f["useId".toString()] || (() => {}),
                y = 0;

            function E(e) {
                let [t, n] = d.useState(g());
                return h((() => {
                    e || n((e => null != e ? e : String(y++)))
                }), [e]), e || (t ? `radix-${t}` : "")
            }

            function b(e) {
                let t = (0, d.useRef)(e);
                return (0, d.useEffect)((() => {
                    t.current = e
                })), (0, d.useMemo)((() => (...e) => {
                    var n;
                    return null === (n = t.current) || void 0 === n ? void 0 : n.call(t, ...e)
                }), [])
            }
            var w = n(3935);
            let C = (0, d.forwardRef)(((e, t) => {
                let {
                    children: n,
                    ...r
                } = e, o = d.Children.toArray(n), a = o.find(P);
                if (a) {
                    let e = a.props.children,
                        n = o.map((t => t !== a ? t : d.Children.count(e) > 1 ? d.Children.only(null) : (0, d.isValidElement)(e) ? e.props.children : null));
                    return (0, d.createElement)(S, i({}, r, {
                        ref: t
                    }), (0, d.isValidElement)(e) ? (0, d.cloneElement)(e, void 0, n) : null)
                }
                return (0, d.createElement)(S, i({}, r, {
                    ref: t
                }), n)
            }));
            C.displayName = "Slot";
            let S = (0, d.forwardRef)(((e, t) => {
                let {
                    children: n,
                    ...r
                } = e;
                return (0, d.isValidElement)(n) ? (0, d.cloneElement)(n, {
                    ... function(e, t) {
                        let n = {
                            ...t
                        };
                        for (let r in t) {
                            let o = e[r],
                                i = t[r];
                            /^on[A-Z]/.test(r) ? o && i ? n[r] = (...e) => {
                                i(...e), o(...e)
                            } : o && (n[r] = o) : "style" === r ? n[r] = {
                                ...o,
                                ...i
                            } : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "))
                        }
                        return {
                            ...e,
                            ...n
                        }
                    }(r, n.props),
                    ref: m(t, n.ref)
                }) : d.Children.count(n) > 1 ? d.Children.only(null) : null
            }));
            S.displayName = "SlotClone";
            let R = ({
                children: e
            }) => (0, d.createElement)(d.Fragment, null, e);

            function P(e) {
                return (0, d.isValidElement)(e) && e.type === R
            }
            let O = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, t) => {
                    let n = (0, d.forwardRef)(((e, n) => {
                        let {
                            asChild: r,
                            ...o
                        } = e, a = r ? C : t;
                        return (0, d.useEffect)((() => {
                            window[Symbol.for("radix-ui")] = !0
                        }), []), (0, d.createElement)(a, i({}, o, {
                            ref: n
                        }))
                    }));
                    return n.displayName = `Primitive.${t}`, {
                        ...e,
                        [t]: n
                    }
                }), {}),
                _ = "dismissableLayer.update",
                N = (0, d.createContext)({
                    layers: new Set,
                    layersWithOutsidePointerEventsDisabled: new Set,
                    branches: new Set
                }),
                L = (0, d.forwardRef)(((e, t) => {
                    var n;
                    let {
                        disableOutsidePointerEvents: o = !1,
                        onEscapeKeyDown: a,
                        onPointerDownOutside: l,
                        onFocusOutside: u,
                        onInteractOutside: c,
                        onDismiss: s,
                        ...f
                    } = e, m = (0, d.useContext)(N), [h, g] = (0, d.useState)(null), y = null !== (n = null == h ? void 0 : h.ownerDocument) && void 0 !== n ? n : null == globalThis ? void 0 : globalThis.document, [, E] = (0, d.useState)({}), w = v(t, (e => g(e))), C = Array.from(m.layers), [S] = [...m.layersWithOutsidePointerEventsDisabled].slice(-1), R = C.indexOf(S), P = h ? C.indexOf(h) : -1, L = m.layersWithOutsidePointerEventsDisabled.size > 0, x = P >= R, A = function(e, t = (null == globalThis ? void 0 : globalThis.document)) {
                        let n = b(e),
                            r = (0, d.useRef)(!1),
                            o = (0, d.useRef)((() => {}));
                        return (0, d.useEffect)((() => {
                            let e = e => {
                                    if (e.target && !r.current) {
                                        let i = {
                                            originalEvent: e
                                        };

                                        function a() {
                                            D("dismissableLayer.pointerDownOutside", n, i, {
                                                discrete: !0
                                            })
                                        }
                                        "touch" === e.pointerType ? (t.removeEventListener("click", o.current), o.current = a, t.addEventListener("click", o.current, {
                                            once: !0
                                        })) : a()
                                    }
                                    r.current = !1
                                },
                                i = window.setTimeout((() => {
                                    t.addEventListener("pointerdown", e)
                                }), 0);
                            return () => {
                                window.clearTimeout(i), t.removeEventListener("pointerdown", e), t.removeEventListener("click", o.current)
                            }
                        }), [t, n]), {
                            onPointerDownCapture: () => r.current = !0
                        }
                    }((e => {
                        let t = e.target,
                            n = [...m.branches].some((e => e.contains(t)));
                        !x || n || (null == l || l(e), null == c || c(e), e.defaultPrevented || null == s || s())
                    }), y), I = function(e, t = (null == globalThis ? void 0 : globalThis.document)) {
                        let n = b(e),
                            r = (0, d.useRef)(!1);
                        return (0, d.useEffect)((() => {
                            let e = e => {
                                e.target && !r.current && D("dismissableLayer.focusOutside", n, {
                                    originalEvent: e
                                }, {
                                    discrete: !1
                                })
                            };
                            return t.addEventListener("focusin", e), () => t.removeEventListener("focusin", e)
                        }), [t, n]), {
                            onFocusCapture: () => r.current = !0,
                            onBlurCapture: () => r.current = !1
                        }
                    }((e => {
                        let t = e.target,
                            n = [...m.branches].some((e => e.contains(t)));
                        n || (null == u || u(e), null == c || c(e), e.defaultPrevented || null == s || s())
                    }), y);
                    return function(e, t = (null == globalThis ? void 0 : globalThis.document)) {
                        let n = b(e);
                        (0, d.useEffect)((() => {
                            let e = e => {
                                "Escape" === e.key && n(e)
                            };
                            return t.addEventListener("keydown", e), () => t.removeEventListener("keydown", e)
                        }), [n, t])
                    }((e => {
                        P === m.layers.size - 1 && (null == a || a(e), !e.defaultPrevented && s && (e.preventDefault(), s()))
                    }), y), (0, d.useEffect)((() => {
                        if (h) return o && (0 === m.layersWithOutsidePointerEventsDisabled.size && (r = y.body.style.pointerEvents, y.body.style.pointerEvents = "none"), m.layersWithOutsidePointerEventsDisabled.add(h)), m.layers.add(h), T(), () => {
                            o && 1 === m.layersWithOutsidePointerEventsDisabled.size && (y.body.style.pointerEvents = r)
                        }
                    }), [h, y, o, m]), (0, d.useEffect)((() => () => {
                        h && (m.layers.delete(h), m.layersWithOutsidePointerEventsDisabled.delete(h), T())
                    }), [h, m]), (0, d.useEffect)((() => {
                        let e = () => E({});
                        return document.addEventListener(_, e), () => document.removeEventListener(_, e)
                    }), []), (0, d.createElement)(O.div, i({}, f, {
                        ref: w,
                        style: {
                            pointerEvents: L ? x ? "auto" : "none" : void 0,
                            ...e.style
                        },
                        onFocusCapture: p(e.onFocusCapture, I.onFocusCapture),
                        onBlurCapture: p(e.onBlurCapture, I.onBlurCapture),
                        onPointerDownCapture: p(e.onPointerDownCapture, A.onPointerDownCapture)
                    }))
                }));

            function T() {
                let e = new CustomEvent(_);
                document.dispatchEvent(e)
            }

            function D(e, t, n, {
                discrete: r
            }) {
                let o = n.originalEvent.target,
                    i = new CustomEvent(e, {
                        bubbles: !1,
                        cancelable: !0,
                        detail: n
                    });
                t && o.addEventListener(e, t, {
                    once: !0
                }), r ? o && (0, w.flushSync)((() => o.dispatchEvent(i))) : o.dispatchEvent(i)
            }
            let x = "focusScope.autoFocusOnMount",
                A = "focusScope.autoFocusOnUnmount",
                I = {
                    bubbles: !1,
                    cancelable: !0
                },
                M = (0, d.forwardRef)(((e, t) => {
                    let {
                        loop: n = !1,
                        trapped: r = !1,
                        onMountAutoFocus: o,
                        onUnmountAutoFocus: a,
                        ...l
                    } = e, [u, c] = (0, d.useState)(null), s = b(o), f = b(a), p = (0, d.useRef)(null), m = v(t, (e => c(e))), h = (0, d.useRef)({
                        paused: !1,
                        pause() {
                            this.paused = !0
                        },
                        resume() {
                            this.paused = !1
                        }
                    }).current;
                    (0, d.useEffect)((() => {
                        if (r) {
                            function e(e) {
                                if (h.paused || !u) return;
                                let t = e.target;
                                u.contains(t) ? p.current = t : z(p.current, {
                                    select: !0
                                })
                            }

                            function t(e) {
                                h.paused || !u || u.contains(e.relatedTarget) || z(p.current, {
                                    select: !0
                                })
                            }
                            return document.addEventListener("focusin", e), document.addEventListener("focusout", t), () => {
                                document.removeEventListener("focusin", e), document.removeEventListener("focusout", t)
                            }
                        }
                    }), [r, u, h.paused]), (0, d.useEffect)((() => {
                        if (u) {
                            F.add(h);
                            let e = document.activeElement;
                            if (!u.contains(e)) {
                                let t = new CustomEvent(x, I);
                                u.addEventListener(x, s), u.dispatchEvent(t), t.defaultPrevented || (function(e, {
                                    select: t = !1
                                } = {}) {
                                    let n = document.activeElement;
                                    for (let r of e)
                                        if (z(r, {
                                                select: t
                                            }), document.activeElement !== n) return
                                }(k(u).filter((e => "A" !== e.tagName)), {
                                    select: !0
                                }), document.activeElement === e && z(u))
                            }
                            return () => {
                                u.removeEventListener(x, s), setTimeout((() => {
                                    let t = new CustomEvent(A, I);
                                    u.addEventListener(A, f), u.dispatchEvent(t), t.defaultPrevented || z(null != e ? e : document.body, {
                                        select: !0
                                    }), u.removeEventListener(A, f), F.remove(h)
                                }), 0)
                            }
                        }
                    }), [u, s, f, h]);
                    let g = (0, d.useCallback)((e => {
                        if (!n && !r || h.paused) return;
                        let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                            o = document.activeElement;
                        if (t && o) {
                            let t = e.currentTarget,
                                [r, i] = function(e) {
                                    let t = k(e);
                                    return [j(t, e), j(t.reverse(), e)]
                                }(t);
                            r && i ? e.shiftKey || o !== i ? e.shiftKey && o === r && (e.preventDefault(), n && z(i, {
                                select: !0
                            })) : (e.preventDefault(), n && z(r, {
                                select: !0
                            })) : o === t && e.preventDefault()
                        }
                    }), [n, r, h.paused]);
                    return (0, d.createElement)(O.div, i({
                        tabIndex: -1
                    }, l, {
                        ref: m,
                        onKeyDown: g
                    }))
                }));

            function k(e) {
                let t = [],
                    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                        acceptNode: e => {
                            let t = "INPUT" === e.tagName && "hidden" === e.type;
                            return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                        }
                    });
                for (; n.nextNode();) t.push(n.currentNode);
                return t
            }

            function j(e, t) {
                for (let n of e)
                    if (! function(e, {
                            upTo: t
                        }) {
                            if ("hidden" === getComputedStyle(e).visibility) return !0;
                            for (; e && (void 0 === t || e !== t);) {
                                if ("none" === getComputedStyle(e).display) return !0;
                                e = e.parentElement
                            }
                            return !1
                        }(n, {
                            upTo: t
                        })) return n
            }

            function z(e, {
                select: t = !1
            } = {}) {
                if (e && e.focus) {
                    var n;
                    let r = document.activeElement;
                    e.focus({
                        preventScroll: !0
                    }), e !== r && (n = e) instanceof HTMLInputElement && "select" in n && t && e.select()
                }
            }
            let F = (o = [], {
                add(e) {
                    let t = o[0];
                    e !== t && (null == t || t.pause()), (o = W(o, e)).unshift(e)
                },
                remove(e) {
                    var t;
                    null === (t = (o = W(o, e))[0]) || void 0 === t || t.resume()
                }
            });

            function W(e, t) {
                let n = [...e],
                    r = n.indexOf(t);
                return -1 !== r && n.splice(r, 1), n
            }
            let B = (0, d.forwardRef)(((e, t) => {
                    var n;
                    let {
                        container: r = (null == globalThis || null === (n = globalThis.document) || void 0 === n ? void 0 : n.body),
                        ...o
                    } = e;
                    return r ? w.createPortal((0, d.createElement)(O.div, i({}, o, {
                        ref: t
                    })), r) : null
                })),
                U = e => {
                    let {
                        present: t,
                        children: n
                    } = e, r = function(e) {
                        var t;
                        let [n, r] = (0, d.useState)(), o = (0, d.useRef)({}), i = (0, d.useRef)(e), a = (0, d.useRef)("none"), [l, u] = (t = {
                            mounted: {
                                UNMOUNT: "unmounted",
                                ANIMATION_OUT: "unmountSuspended"
                            },
                            unmountSuspended: {
                                MOUNT: "mounted",
                                ANIMATION_END: "unmounted"
                            },
                            unmounted: {
                                MOUNT: "mounted"
                            }
                        }, (0, d.useReducer)(((e, n) => {
                            let r = t[e][n];
                            return null != r ? r : e
                        }), e ? "mounted" : "unmounted"));
                        return (0, d.useEffect)((() => {
                            let e = q(o.current);
                            a.current = "mounted" === l ? e : "none"
                        }), [l]), h((() => {
                            let t = o.current,
                                n = i.current;
                            if (n !== e) {
                                let r = a.current,
                                    o = q(t);
                                e ? u("MOUNT") : "none" === o || "none" === (null == t ? void 0 : t.display) ? u("UNMOUNT") : u(n && r !== o ? "ANIMATION_OUT" : "UNMOUNT"), i.current = e
                            }
                        }), [e, u]), h((() => {
                            if (n) {
                                let e = e => {
                                        let t = q(o.current).includes(e.animationName);
                                        e.target === n && t && (0, w.flushSync)((() => u("ANIMATION_END")))
                                    },
                                    t = e => {
                                        e.target === n && (a.current = q(o.current))
                                    };
                                return n.addEventListener("animationstart", t), n.addEventListener("animationcancel", e), n.addEventListener("animationend", e), () => {
                                    n.removeEventListener("animationstart", t), n.removeEventListener("animationcancel", e), n.removeEventListener("animationend", e)
                                }
                            }
                            u("ANIMATION_END")
                        }), [n, u]), {
                            isPresent: ["mounted", "unmountSuspended"].includes(l),
                            ref: (0, d.useCallback)((e => {
                                e && (o.current = getComputedStyle(e)), r(e)
                            }), [])
                        }
                    }(t), o = "function" == typeof n ? n({
                        present: r.isPresent
                    }) : d.Children.only(n), i = v(r.ref, o.ref);
                    return "function" == typeof n || r.isPresent ? (0, d.cloneElement)(o, {
                        ref: i
                    }) : null
                };

            function q(e) {
                return (null == e ? void 0 : e.animationName) || "none"
            }
            U.displayName = "Presence";
            let K = 0;

            function Y() {
                let e = document.createElement("span");
                return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e
            }
            var $ = function() {
                return ($ = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }).apply(this, arguments)
            };

            function V(e, t) {
                var n = {};
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                    var o = 0;
                    for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) 0 > t.indexOf(r[o]) && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
                }
                return n
            }
            var H = "right-scroll-bar-position",
                X = "width-before-scroll-bar",
                Z = (void 0 === a && (a = {}), (void 0 === l && (l = function(e) {
                    return e
                }), u = [], c = !1, s = {
                    read: function() {
                        if (c) throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                        return u.length ? u[u.length - 1] : null
                    },
                    useMedium: function(e) {
                        var t = l(e, c);
                        return u.push(t),
                            function() {
                                u = u.filter((function(e) {
                                    return e !== t
                                }))
                            }
                    },
                    assignSyncMedium: function(e) {
                        for (c = !0; u.length;) {
                            var t = u;
                            u = [], t.forEach(e)
                        }
                        u = {
                            push: function(t) {
                                return e(t)
                            },
                            filter: function() {
                                return u
                            }
                        }
                    },
                    assignMedium: function(e) {
                        c = !0;
                        var t = [];
                        if (u.length) {
                            var n = u;
                            u = [], n.forEach(e), t = u
                        }
                        var r = function() {
                                var n = t;
                                t = [], n.forEach(e)
                            },
                            o = function() {
                                return Promise.resolve().then(r)
                            };
                        o(), u = {
                            push: function(e) {
                                t.push(e), o()
                            },
                            filter: function(e) {
                                return t = t.filter(e), u
                            }
                        }
                    }
                }).options = $({
                    async: !0,
                    ssr: !1
                }, a), s),
                G = function() {},
                J = d.forwardRef((function(e, t) {
                    var n, r, o, i = d.useRef(null),
                        a = d.useState({
                            onScrollCapture: G,
                            onWheelCapture: G,
                            onTouchMoveCapture: G
                        }),
                        l = a[0],
                        u = a[1],
                        c = e.forwardProps,
                        s = e.children,
                        f = e.className,
                        p = e.removeScrollBar,
                        m = e.enabled,
                        v = e.shards,
                        h = e.sideCar,
                        g = e.noIsolation,
                        y = e.inert,
                        E = e.allowPinchZoom,
                        b = e.as,
                        w = V(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]),
                        C = (n = [i, t], r = function(e) {
                            return n.forEach((function(t) {
                                var n;
                                return "function" == typeof(n = t) ? n(e) : n && (n.current = e), n
                            }))
                        }, (o = (0, d.useState)((function() {
                            return {
                                value: null,
                                callback: r,
                                facade: {
                                    get current() {
                                        return o.value
                                    },
                                    set current(e) {
                                        var t = o.value;
                                        t !== e && (o.value = e, o.callback(e, t))
                                    }
                                }
                            }
                        }))[0]).callback = r, o.facade),
                        S = $($({}, w), l);
                    return d.createElement(d.Fragment, null, m && d.createElement(h, {
                        sideCar: Z,
                        removeScrollBar: p,
                        shards: v,
                        noIsolation: g,
                        inert: y,
                        setCallbacks: u,
                        allowPinchZoom: !!E,
                        lockRef: i
                    }), c ? d.cloneElement(d.Children.only(s), $($({}, S), {
                        ref: C
                    })) : d.createElement(void 0 === b ? "div" : b, $({}, S, {
                        className: f,
                        ref: C
                    }), s))
                }));
            J.defaultProps = {
                enabled: !0,
                removeScrollBar: !0,
                inert: !1
            }, J.classNames = {
                fullWidth: X,
                zeroRight: H
            };
            var Q = function(e) {
                var t = e.sideCar,
                    n = V(e, ["sideCar"]);
                if (!t) throw Error("Sidecar: please provide `sideCar` property to import the right car");
                var r = t.read();
                if (!r) throw Error("Sidecar medium not found");
                return d.createElement(r, $({}, n))
            };
            Q.isSideCarExport = !0;
            var ee = function() {
                    var e = function() {
                        var e = 0,
                            t = null;
                        return {
                            add: function(r) {
                                var o, i;
                                0 == e && (t = function() {
                                    if (!document) return null;
                                    var e = document.createElement("style");
                                    e.type = "text/css";
                                    var t = n.nc;
                                    return t && e.setAttribute("nonce", t), e
                                }()) && ((o = t).styleSheet ? o.styleSheet.cssText = r : o.appendChild(document.createTextNode(r)), i = t, (document.head || document.getElementsByTagName("head")[0]).appendChild(i)), e++
                            },
                            remove: function() {
                                --e || !t || (t.parentNode && t.parentNode.removeChild(t), t = null)
                            }
                        }
                    }();
                    return function(t, n) {
                        d.useEffect((function() {
                            return e.add(t),
                                function() {
                                    e.remove()
                                }
                        }), [t && n])
                    }
                },
                te = function() {
                    var e = ee();
                    return function(t) {
                        return e(t.styles, t.dynamic), null
                    }
                },
                ne = {
                    left: 0,
                    top: 0,
                    right: 0,
                    gap: 0
                },
                re = function(e) {
                    return parseInt(e || "", 10) || 0
                },
                oe = function(e) {
                    if (void 0 === e && (e = "margin"), "undefined" == typeof window) return ne;
                    var t = function(e) {
                            var t = window.getComputedStyle(document.body),
                                n = t["padding" === e ? "paddingLeft" : "marginLeft"],
                                r = t["padding" === e ? "paddingTop" : "marginTop"],
                                o = t["padding" === e ? "paddingRight" : "marginRight"];
                            return [re(n), re(r), re(o)]
                        }(e),
                        n = document.documentElement.clientWidth,
                        r = window.innerWidth;
                    return {
                        left: t[0],
                        top: t[1],
                        right: t[2],
                        gap: Math.max(0, r - n + t[2] - t[0])
                    }
                },
                ie = te(),
                ae = function(e, t, n, r) {
                    var o = e.left,
                        i = e.top,
                        a = e.right,
                        l = e.gap;
                    return void 0 === n && (n = "margin"), "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(r, ";\n   padding-right: ").concat(l, "px ").concat(r, ";\n  }\n  body {\n    overflow: hidden ").concat(r, ";\n    overscroll-behavior: contain;\n    ").concat([t && "position: relative ".concat(r, ";"), "margin" === n && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(i, "px;\n    padding-right: ").concat(a, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(l, "px ").concat(r, ";\n    "), "padding" === n && "padding-right: ".concat(l, "px ").concat(r, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(H, " {\n    right: ").concat(l, "px ").concat(r, ";\n  }\n  \n  .").concat(X, " {\n    margin-right: ").concat(l, "px ").concat(r, ";\n  }\n  \n  .").concat(H, " .").concat(H, " {\n    right: 0 ").concat(r, ";\n  }\n  \n  .").concat(X, " .").concat(X, " {\n    margin-right: 0 ").concat(r, ";\n  }\n  \n  body {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(l, "px;\n  }\n")
                },
                le = function(e) {
                    var t = e.noRelative,
                        n = e.noImportant,
                        r = e.gapMode,
                        o = void 0 === r ? "margin" : r,
                        i = d.useMemo((function() {
                            return oe(o)
                        }), [o]);
                    return d.createElement(ie, {
                        styles: ae(i, !t, o, n ? "" : "!important")
                    })
                },
                ue = !1;
            if ("undefined" != typeof window) try {
                var ce = Object.defineProperty({}, "passive", {
                    get: function() {
                        return ue = !0, !0
                    }
                });
                window.addEventListener("test", ce, ce), window.removeEventListener("test", ce, ce)
            } catch (e) {
                ue = !1
            }
            var se = !!ue && {
                    passive: !1
                },
                de = function(e, t) {
                    var n = window.getComputedStyle(e);
                    return "hidden" !== n[t] && !(n.overflowY === n.overflowX && "TEXTAREA" !== e.tagName && "visible" === n[t])
                },
                fe = function(e, t) {
                    var n = t;
                    do {
                        if ("undefined" != typeof ShadowRoot && n instanceof ShadowRoot && (n = n.host), pe(e, n)) {
                            var r = me(e, n);
                            if (r[1] > r[2]) return !0
                        }
                        n = n.parentNode
                    } while (n && n !== document.body);
                    return !1
                },
                pe = function(e, t) {
                    return de(t, "v" === e ? "overflowY" : "overflowX")
                },
                me = function(e, t) {
                    return "v" === e ? [t.scrollTop, t.scrollHeight, t.clientHeight] : [t.scrollLeft, t.scrollWidth, t.clientWidth]
                },
                ve = function(e) {
                    return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
                },
                he = function(e) {
                    return [e.deltaX, e.deltaY]
                },
                ge = function(e) {
                    return e && "current" in e ? e.current : e
                },
                ye = 0,
                Ee = [],
                be = (Z.useMedium((function(e) {
                    var t = d.useRef([]),
                        n = d.useRef([0, 0]),
                        r = d.useRef(),
                        o = d.useState(ye++)[0],
                        i = d.useState((function() {
                            return te()
                        }))[0],
                        a = d.useRef(e);
                    d.useEffect((function() {
                        a.current = e
                    }), [e]), d.useEffect((function() {
                        if (e.inert) {
                            document.body.classList.add("block-interactivity-".concat(o));
                            var t = function(e, t, n) {
                                if (n || 2 == arguments.length)
                                    for (var r, o = 0, i = t.length; o < i; o++) !r && o in t || (r || (r = Array.prototype.slice.call(t, 0, o)), r[o] = t[o]);
                                return e.concat(r || Array.prototype.slice.call(t))
                            }([e.lockRef.current], (e.shards || []).map(ge), !0).filter(Boolean);
                            return t.forEach((function(e) {
                                    return e.classList.add("allow-interactivity-".concat(o))
                                })),
                                function() {
                                    document.body.classList.remove("block-interactivity-".concat(o)), t.forEach((function(e) {
                                        return e.classList.remove("allow-interactivity-".concat(o))
                                    }))
                                }
                        }
                    }), [e.inert, e.lockRef.current, e.shards]);
                    var l = d.useCallback((function(e, t) {
                            if ("touches" in e && 2 === e.touches.length) return !a.current.allowPinchZoom;
                            var o, i = ve(e),
                                l = n.current,
                                u = "deltaX" in e ? e.deltaX : l[0] - i[0],
                                c = "deltaY" in e ? e.deltaY : l[1] - i[1],
                                s = e.target,
                                d = Math.abs(u) > Math.abs(c) ? "h" : "v";
                            if ("touches" in e && "h" === d && "range" === s.type) return !1;
                            var f = fe(d, s);
                            if (!f) return !0;
                            if (f ? o = d : (o = "v" === d ? "h" : "v", f = fe(d, s)), !f) return !1;
                            if (!r.current && "changedTouches" in e && (u || c) && (r.current = o), !o) return !0;
                            var p = r.current || o;
                            return function(e, t, n, r, o) {
                                var i, a = (i = window.getComputedStyle(t).direction, "h" === e && "rtl" === i ? -1 : 1),
                                    l = a * r,
                                    u = n.target,
                                    c = t.contains(u),
                                    s = !1,
                                    d = l > 0,
                                    f = 0,
                                    p = 0;
                                do {
                                    var m = me(e, u),
                                        v = m[0],
                                        h = m[1] - m[2] - a * v;
                                    (v || h) && pe(e, u) && (f += h, p += v), u = u.parentNode
                                } while (!c && u !== document.body || c && (t.contains(u) || t === u));
                                return (d && (o && 0 === f || !o && l > f) || !d && (o && 0 === p || !o && -l > p)) && (s = !0), s
                            }(p, t, e, "h" === p ? u : c, !0)
                        }), []),
                        u = d.useCallback((function(e) {
                            if (Ee.length && Ee[Ee.length - 1] === i) {
                                var n = "deltaY" in e ? he(e) : ve(e),
                                    r = t.current.filter((function(t) {
                                        var r;
                                        return t.name === e.type && t.target === e.target && (r = t.delta)[0] === n[0] && r[1] === n[1]
                                    }))[0];
                                if (r && r.should) return void(e.cancelable && e.preventDefault());
                                if (!r) {
                                    var o = (a.current.shards || []).map(ge).filter(Boolean).filter((function(t) {
                                        return t.contains(e.target)
                                    }));
                                    (o.length > 0 ? l(e, o[0]) : !a.current.noIsolation) && e.cancelable && e.preventDefault()
                                }
                            }
                        }), []),
                        c = d.useCallback((function(e, n, r, o) {
                            var i = {
                                name: e,
                                delta: n,
                                target: r,
                                should: o
                            };
                            t.current.push(i), setTimeout((function() {
                                t.current = t.current.filter((function(e) {
                                    return e !== i
                                }))
                            }), 1)
                        }), []),
                        s = d.useCallback((function(e) {
                            n.current = ve(e), r.current = void 0
                        }), []),
                        f = d.useCallback((function(t) {
                            c(t.type, he(t), t.target, l(t, e.lockRef.current))
                        }), []),
                        p = d.useCallback((function(t) {
                            c(t.type, ve(t), t.target, l(t, e.lockRef.current))
                        }), []);
                    d.useEffect((function() {
                        return Ee.push(i), e.setCallbacks({
                                onScrollCapture: f,
                                onWheelCapture: f,
                                onTouchMoveCapture: p
                            }), document.addEventListener("wheel", u, se), document.addEventListener("touchmove", u, se), document.addEventListener("touchstart", s, se),
                            function() {
                                Ee = Ee.filter((function(e) {
                                    return e !== i
                                })), document.removeEventListener("wheel", u, se), document.removeEventListener("touchmove", u, se), document.removeEventListener("touchstart", s, se)
                            }
                    }), []);
                    var m = e.removeScrollBar,
                        v = e.inert;
                    return d.createElement(d.Fragment, null, v ? d.createElement(i, {
                        styles: "\n  .block-interactivity-".concat(o, " {pointer-events: none;}\n  .allow-interactivity-").concat(o, " {pointer-events: all;}\n")
                    }) : null, m ? d.createElement(le, {
                        gapMode: "margin"
                    }) : null)
                })), Q),
                we = d.forwardRef((function(e, t) {
                    return d.createElement(J, $({}, e, {
                        ref: t,
                        sideCar: be
                    }))
                }));
            we.classNames = J.classNames;
            var Ce = new WeakMap,
                Se = new WeakMap,
                Re = {},
                Pe = 0,
                Oe = function(e) {
                    return e && (e.host || Oe(e.parentNode))
                },
                _e = function(e, t, n) {
                    void 0 === n && (n = "data-aria-hidden");
                    var r = Array.from(Array.isArray(e) ? e : [e]),
                        o = t || ("undefined" == typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body);
                    return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), function(e, t, n, r) {
                        var o = (Array.isArray(e) ? e : [e]).map((function(e) {
                            if (t.contains(e)) return e;
                            var n = Oe(e);
                            return n && t.contains(n) ? n : (console.error("aria-hidden", e, "in not contained inside", t, ". Doing nothing"), null)
                        })).filter((function(e) {
                            return !!e
                        }));
                        Re[n] || (Re[n] = new WeakMap);
                        var i = Re[n],
                            a = [],
                            l = new Set,
                            u = new Set(o),
                            c = function(e) {
                                !e || l.has(e) || (l.add(e), c(e.parentNode))
                            };
                        o.forEach(c);
                        var s = function(e) {
                            !e || u.has(e) || Array.prototype.forEach.call(e.children, (function(e) {
                                if (l.has(e)) s(e);
                                else {
                                    var t = e.getAttribute(r),
                                        o = null !== t && "false" !== t,
                                        u = (Ce.get(e) || 0) + 1,
                                        c = (i.get(e) || 0) + 1;
                                    Ce.set(e, u), i.set(e, c), a.push(e), 1 === u && o && Se.set(e, !0), 1 === c && e.setAttribute(n, "true"), o || e.setAttribute(r, "true")
                                }
                            }))
                        };
                        return s(t), l.clear(), Pe++,
                            function() {
                                a.forEach((function(e) {
                                    var t = Ce.get(e) - 1,
                                        o = i.get(e) - 1;
                                    Ce.set(e, t), i.set(e, o), t || (Se.has(e) || e.removeAttribute(r), Se.delete(e)), o || e.removeAttribute(n)
                                })), --Pe || (Ce = new WeakMap, Ce = new WeakMap, Se = new WeakMap, Re = {})
                            }
                    }(r, o, n, "aria-hidden")) : function() {
                        return null
                    }
                };
            let Ne = "Dialog",
                [Le, Te] = function(e, t = []) {
                    let n = [],
                        r = () => {
                            let t = n.map((e => (0, d.createContext)(e)));
                            return function(n) {
                                let r = (null == n ? void 0 : n[e]) || t;
                                return (0, d.useMemo)((() => ({
                                    [`__scope${e}`]: {
                                        ...n,
                                        [e]: r
                                    }
                                })), [n, r])
                            }
                        };
                    return r.scopeName = e, [function(t, r) {
                        let o = (0, d.createContext)(r),
                            i = n.length;

                        function a(t) {
                            let {
                                scope: n,
                                children: r,
                                ...a
                            } = t, l = (null == n ? void 0 : n[e][i]) || o, u = (0, d.useMemo)((() => a), Object.values(a));
                            return (0, d.createElement)(l.Provider, {
                                value: u
                            }, r)
                        }
                        return n = [...n, r], a.displayName = t + "Provider", [a, function(n, a) {
                            let l = (null == a ? void 0 : a[e][i]) || o,
                                u = (0, d.useContext)(l);
                            if (u) return u;
                            if (void 0 !== r) return r;
                            throw Error(`\`${n}\` must be used within \`${t}\``)
                        }]
                    }, function(...e) {
                        let t = e[0];
                        if (1 === e.length) return t;
                        let n = () => {
                            let n = e.map((e => ({
                                useScope: e(),
                                scopeName: e.scopeName
                            })));
                            return function(e) {
                                let r = n.reduce(((t, {
                                    useScope: n,
                                    scopeName: r
                                }) => ({
                                    ...t,
                                    ...n(e)[`__scope${r}`]
                                })), {});
                                return (0, d.useMemo)((() => ({
                                    [`__scope${t.scopeName}`]: r
                                })), [r])
                            }
                        };
                        return n.scopeName = t.scopeName, n
                    }(r, ...t)]
                }(Ne),
                [De, xe] = Le(Ne),
                Ae = (0, d.forwardRef)(((e, t) => {
                    let {
                        __scopeDialog: n,
                        ...r
                    } = e, o = xe("DialogTrigger", n), a = v(t, o.triggerRef);
                    return (0, d.createElement)(O.button, i({
                        type: "button",
                        "aria-haspopup": "dialog",
                        "aria-expanded": o.open,
                        "aria-controls": o.contentId,
                        "data-state": He(o.open)
                    }, r, {
                        ref: a,
                        onClick: p(e.onClick, o.onOpenToggle)
                    }))
                })),
                Ie = "DialogPortal",
                [Me, ke] = Le(Ie, {
                    forceMount: void 0
                }),
                je = "DialogOverlay",
                ze = (0, d.forwardRef)(((e, t) => {
                    let n = ke(je, e.__scopeDialog),
                        {
                            forceMount: r = n.forceMount,
                            ...o
                        } = e,
                        a = xe(je, e.__scopeDialog);
                    return a.modal ? (0, d.createElement)(U, {
                        present: r || a.open
                    }, (0, d.createElement)(Fe, i({}, o, {
                        ref: t
                    }))) : null
                })),
                Fe = (0, d.forwardRef)(((e, t) => {
                    let {
                        __scopeDialog: n,
                        ...r
                    } = e, o = xe(je, n);
                    return (0, d.createElement)(we, {
                        as: C,
                        allowPinchZoom: !0,
                        shards: [o.contentRef]
                    }, (0, d.createElement)(O.div, i({
                        "data-state": He(o.open)
                    }, r, {
                        ref: t,
                        style: {
                            pointerEvents: "auto",
                            ...r.style
                        }
                    })))
                })),
                We = "DialogContent",
                Be = (0, d.forwardRef)(((e, t) => {
                    let n = ke(We, e.__scopeDialog),
                        {
                            forceMount: r = n.forceMount,
                            ...o
                        } = e,
                        a = xe(We, e.__scopeDialog);
                    return (0, d.createElement)(U, {
                        present: r || a.open
                    }, a.modal ? (0, d.createElement)(Ue, i({}, o, {
                        ref: t
                    })) : (0, d.createElement)(qe, i({}, o, {
                        ref: t
                    })))
                })),
                Ue = (0, d.forwardRef)(((e, t) => {
                    let n = xe(We, e.__scopeDialog),
                        r = (0, d.useRef)(null),
                        o = v(t, n.contentRef, r);
                    return (0, d.useEffect)((() => {
                        let e = r.current;
                        if (e) return _e(e)
                    }), []), (0, d.createElement)(Ke, i({}, e, {
                        ref: o,
                        trapFocus: n.open,
                        disableOutsidePointerEvents: !0,
                        onCloseAutoFocus: p(e.onCloseAutoFocus, (e => {
                            var t;
                            e.preventDefault(), null === (t = n.triggerRef.current) || void 0 === t || t.focus()
                        })),
                        onPointerDownOutside: p(e.onPointerDownOutside, (e => {
                            let t = e.detail.originalEvent,
                                n = 0 === t.button && !0 === t.ctrlKey;
                            (2 === t.button || n) && e.preventDefault()
                        })),
                        onFocusOutside: p(e.onFocusOutside, (e => e.preventDefault()))
                    }))
                })),
                qe = (0, d.forwardRef)(((e, t) => {
                    let n = xe(We, e.__scopeDialog),
                        r = (0, d.useRef)(!1);
                    return (0, d.createElement)(Ke, i({}, e, {
                        ref: t,
                        trapFocus: !1,
                        disableOutsidePointerEvents: !1,
                        onCloseAutoFocus: t => {
                            var o, i;
                            null === (o = e.onCloseAutoFocus) || void 0 === o || o.call(e, t), t.defaultPrevented || (r.current || null === (i = n.triggerRef.current) || void 0 === i || i.focus(), t.preventDefault()), r.current = !1
                        },
                        onInteractOutside: t => {
                            var o, i;
                            null === (o = e.onInteractOutside) || void 0 === o || o.call(e, t), t.defaultPrevented || (r.current = !0);
                            let a = t.target;
                            (null === (i = n.triggerRef.current) || void 0 === i ? void 0 : i.contains(a)) && t.preventDefault()
                        }
                    }))
                })),
                Ke = (0, d.forwardRef)(((e, t) => {
                    let {
                        __scopeDialog: n,
                        trapFocus: r,
                        onOpenAutoFocus: o,
                        onCloseAutoFocus: a,
                        ...l
                    } = e, u = xe(We, n), c = v(t, (0, d.useRef)(null));
                    return (0, d.useEffect)((() => {
                        var e, t;
                        let n = document.querySelectorAll("[data-radix-focus-guard]");
                        return document.body.insertAdjacentElement("afterbegin", null !== (e = n[0]) && void 0 !== e ? e : Y()), document.body.insertAdjacentElement("beforeend", null !== (t = n[1]) && void 0 !== t ? t : Y()), K++, () => {
                            1 === K && document.querySelectorAll("[data-radix-focus-guard]").forEach((e => e.remove())), K--
                        }
                    }), []), (0, d.createElement)(d.Fragment, null, (0, d.createElement)(M, {
                        asChild: !0,
                        loop: !0,
                        trapped: r,
                        onMountAutoFocus: o,
                        onUnmountAutoFocus: a
                    }, (0, d.createElement)(L, i({
                        role: "dialog",
                        id: u.contentId,
                        "aria-describedby": u.descriptionId,
                        "aria-labelledby": u.titleId,
                        "data-state": He(u.open)
                    }, l, {
                        ref: c,
                        onDismiss: () => u.onOpenChange(!1)
                    }))), !1)
                })),
                Ye = "DialogTitle",
                $e = (0, d.forwardRef)(((e, t) => {
                    let {
                        __scopeDialog: n,
                        ...r
                    } = e, o = xe(Ye, n);
                    return (0, d.createElement)(O.h2, i({
                        id: o.titleId
                    }, r, {
                        ref: t
                    }))
                })),
                Ve = (0, d.forwardRef)(((e, t) => {
                    let {
                        __scopeDialog: n,
                        ...r
                    } = e, o = xe("DialogClose", n);
                    return (0, d.createElement)(O.button, i({
                        type: "button"
                    }, r, {
                        ref: t,
                        onClick: p(e.onClick, (() => o.onOpenChange(!1)))
                    }))
                }));

            function He(e) {
                return e ? "open" : "closed"
            }
            let [Xe, Ze] = function(e, t) {
                let n = (0, d.createContext)(t);

                function r(e) {
                    let {
                        children: t,
                        ...r
                    } = e, o = (0, d.useMemo)((() => r), Object.values(r));
                    return (0, d.createElement)(n.Provider, {
                        value: o
                    }, t)
                }
                return r.displayName = e + "Provider", [r, function(r) {
                    let o = (0, d.useContext)(n);
                    if (o) return o;
                    if (void 0 !== t) return t;
                    throw Error(`\`${r}\` must be used within \`${e}\``)
                }]
            }("DialogTitleWarning", {
                contentName: We,
                titleName: Ye,
                docsSlug: "dialog"
            }), Ge = e => {
                let {
                    __scopeDialog: t,
                    children: n,
                    open: r,
                    defaultOpen: o,
                    onOpenChange: i,
                    modal: a = !0
                } = e, l = (0, d.useRef)(null), u = (0, d.useRef)(null), [c = !1, s] = function({
                    prop: e,
                    defaultProp: t,
                    onChange: n = (() => {})
                }) {
                    let [r, o] = function({
                        defaultProp: e,
                        onChange: t
                    }) {
                        let n = (0, d.useState)(e),
                            [r] = n,
                            o = (0, d.useRef)(r),
                            i = b(t);
                        return (0, d.useEffect)((() => {
                            o.current !== r && (i(r), o.current = r)
                        }), [r, o, i]), n
                    }({
                        defaultProp: t,
                        onChange: n
                    }), i = void 0 !== e, a = b(n), l = (0, d.useCallback)((t => {
                        if (i) {
                            let n = "function" == typeof t ? t(e) : t;
                            n !== e && a(n)
                        } else o(t)
                    }), [i, e, o, a]);
                    return [i ? e : r, l]
                }({
                    prop: r,
                    defaultProp: o,
                    onChange: i
                });
                return (0, d.createElement)(De, {
                    scope: t,
                    triggerRef: l,
                    contentRef: u,
                    contentId: E(),
                    titleId: E(),
                    descriptionId: E(),
                    open: c,
                    onOpenChange: s,
                    onOpenToggle: (0, d.useCallback)((() => s((e => !e))), [s]),
                    modal: a
                }, n)
            }, Je = Ae, Qe = e => {
                let {
                    __scopeDialog: t,
                    forceMount: n,
                    children: r,
                    container: o
                } = e, i = xe(Ie, t);
                return (0, d.createElement)(Me, {
                    scope: t,
                    forceMount: n
                }, d.Children.map(r, (e => (0, d.createElement)(U, {
                    present: n || i.open
                }, (0, d.createElement)(B, {
                    asChild: !0,
                    container: o
                }, e)))))
            }, et = ze, tt = Be, nt = $e, rt = Ve
        },
        3740: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return b
                }
            });
            let r = n(4788),
                o = n(8754),
                i = n(1757),
                a = n(224),
                l = i._(n(7294)),
                u = o._(n(2636)),
                c = n(7757),
                s = n(3735),
                d = n(3341);
            n(4210);
            let f = o._(n(7746)),
                p = {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image",
                    loader: "default",
                    dangerouslyAllowSVG: !1,
                    unoptimized: !1
                };

            function m(e) {
                return void 0 !== e.default
            }

            function v(e) {
                return "number" == typeof e || void 0 === e ? e : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN
            }

            function h(e, t, n, o, i, a, l) {
                if (!e || e["data-loaded-src"] === t) return;
                e["data-loaded-src"] = t, ("decode" in e ? e.decode() : Promise.resolve()).catch((() => {})).then((() => {
                    if (e.parentElement && e.isConnected) {
                        if ("blur" === n && a(!0), null == o ? void 0 : o.current) {
                            let t = new Event("load");
                            Object.defineProperty(t, "target", {
                                writable: !1,
                                value: e
                            });
                            let n = !1,
                                i = !1;
                            o.current(r._({}, t, {
                                nativeEvent: t,
                                currentTarget: e,
                                target: e,
                                isDefaultPrevented: () => n,
                                isPropagationStopped: () => i,
                                persist: () => {},
                                preventDefault: () => {
                                    n = !0, t.preventDefault()
                                },
                                stopPropagation: () => {
                                    i = !0, t.stopPropagation()
                                }
                            }))
                        }(null == i ? void 0 : i.current) && i.current(e)
                    }
                }))
            }

            function g(e) {
                let [t, n] = l.version.split("."), r = parseInt(t, 10), o = parseInt(n, 10);
                return r > 18 || 18 === r && o >= 3 ? {
                    fetchPriority: e
                } : {
                    fetchpriority: e
                }
            }
            let y = (0, l.forwardRef)(((e, t) => {
                    var {
                        imgAttributes: n,
                        heightInt: o,
                        widthInt: i,
                        qualityInt: u,
                        className: c,
                        imgStyle: s,
                        blurStyle: d,
                        isLazy: f,
                        fetchPriority: p,
                        fill: m,
                        placeholder: v,
                        loading: y,
                        srcString: E,
                        config: b,
                        unoptimized: w,
                        loader: C,
                        onLoadRef: S,
                        onLoadingCompleteRef: R,
                        setBlurComplete: P,
                        setShowAltText: O,
                        onLoad: _,
                        onError: N
                    } = e, L = a._(e, ["imgAttributes", "heightInt", "widthInt", "qualityInt", "className", "imgStyle", "blurStyle", "isLazy", "fetchPriority", "fill", "placeholder", "loading", "srcString", "config", "unoptimized", "loader", "onLoadRef", "onLoadingCompleteRef", "setBlurComplete", "setShowAltText", "onLoad", "onError"]);
                    return y = f ? "lazy" : y, l.default.createElement(l.default.Fragment, null, l.default.createElement("img", r._({}, L, g(p), {
                        loading: y,
                        width: i,
                        height: o,
                        decoding: "async",
                        "data-nimg": m ? "fill" : "1",
                        className: c,
                        style: r._({}, s, d)
                    }, n, {
                        ref: (0, l.useCallback)((e => {
                            t && ("function" == typeof t ? t(e) : "object" == typeof t && (t.current = e)), e && (N && (e.src = e.src), e.complete && h(e, E, v, S, R, P))
                        }), [E, v, S, R, P, N, w, t]),
                        onLoad: e => {
                            h(e.currentTarget, E, v, S, R, P)
                        },
                        onError: e => {
                            O(!0), "blur" === v && P(!0), N && N(e)
                        }
                    })))
                })),
                E = (0, l.forwardRef)(((e, t) => {
                    let n, o;
                    var i, {
                            src: h,
                            sizes: E,
                            unoptimized: b = !1,
                            priority: w = !1,
                            loading: C,
                            className: S,
                            quality: R,
                            width: P,
                            height: O,
                            fill: _,
                            style: N,
                            onLoad: L,
                            onLoadingComplete: T,
                            placeholder: D = "empty",
                            blurDataURL: x,
                            fetchPriority: A,
                            layout: I,
                            objectFit: M,
                            objectPosition: k,
                            lazyBoundary: j,
                            lazyRoot: z
                        } = e,
                        F = a._(e, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "fill", "style", "onLoad", "onLoadingComplete", "placeholder", "blurDataURL", "fetchPriority", "layout", "objectFit", "objectPosition", "lazyBoundary", "lazyRoot"]);
                    let W = (0, l.useContext)(d.ImageConfigContext),
                        B = (0, l.useMemo)((() => {
                            let e = p || W || s.imageConfigDefault,
                                t = [...e.deviceSizes, ...e.imageSizes].sort(((e, t) => e - t)),
                                n = e.deviceSizes.sort(((e, t) => e - t));
                            return r._({}, e, {
                                allSizes: t,
                                deviceSizes: n
                            })
                        }), [W]),
                        U = F,
                        q = U.loader || f.default;
                    delete U.loader;
                    let K = "__next_img_default" in q;
                    if (K) {
                        if ("custom" === B.loader) throw Error('Image with src "'.concat(h, '" is missing "loader" prop.') + "\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")
                    } else {
                        let e = q;
                        q = t => {
                            let {
                                config: n
                            } = t, r = a._(t, ["config"]);
                            return e(r)
                        }
                    }
                    if (I) {
                        "fill" === I && (_ = !0);
                        let e = {
                            intrinsic: {
                                maxWidth: "100%",
                                height: "auto"
                            },
                            responsive: {
                                width: "100%",
                                height: "auto"
                            }
                        } [I];
                        e && (N = r._({}, N, e));
                        let t = {
                            responsive: "100vw",
                            fill: "100vw"
                        } [I];
                        t && !E && (E = t)
                    }
                    let Y = "",
                        $ = v(P),
                        V = v(O);
                    if ("object" == typeof(i = h) && (m(i) || void 0 !== i.src)) {
                        let e = m(h) ? h.default : h;
                        if (!e.src) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));
                        if (!e.height || !e.width) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));
                        if (n = e.blurWidth, o = e.blurHeight, x = x || e.blurDataURL, Y = e.src, !_)
                            if ($ || V) {
                                if ($ && !V) {
                                    let t = $ / e.width;
                                    V = Math.round(e.height * t)
                                } else if (!$ && V) {
                                    let t = V / e.height;
                                    $ = Math.round(e.width * t)
                                }
                            } else $ = e.width, V = e.height
                    }
                    let H = !w && ("lazy" === C || void 0 === C);
                    (!(h = "string" == typeof h ? h : Y) || h.startsWith("data:") || h.startsWith("blob:")) && (b = !0, H = !1), B.unoptimized && (b = !0), K && h.endsWith(".svg") && !B.dangerouslyAllowSVG && (b = !0), w && (A = "high");
                    let [X, Z] = (0, l.useState)(!1), [G, J] = (0, l.useState)(!1), Q = v(R), ee = Object.assign(_ ? {
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        objectFit: M,
                        objectPosition: k
                    } : {}, G ? {} : {
                        color: "transparent"
                    }, N), te = "blur" === D && x && !X ? {
                        backgroundSize: ee.objectFit || "cover",
                        backgroundPosition: ee.objectPosition || "50% 50%",
                        backgroundRepeat: "no-repeat",
                        backgroundImage: 'url("data:image/svg+xml;charset=utf-8,'.concat((0, c.getImageBlurSvg)({
                            widthInt: $,
                            heightInt: V,
                            blurWidth: n,
                            blurHeight: o,
                            blurDataURL: x,
                            objectFit: ee.objectFit
                        }), '")')
                    } : {}, ne = function(e) {
                        let {
                            config: t,
                            src: n,
                            unoptimized: r,
                            width: o,
                            quality: i,
                            sizes: a,
                            loader: l
                        } = e;
                        if (r) return {
                            src: n,
                            srcSet: void 0,
                            sizes: void 0
                        };
                        let {
                            widths: u,
                            kind: c
                        } = function(e, t, n) {
                            let {
                                deviceSizes: r,
                                allSizes: o
                            } = e;
                            if (n) {
                                let e = /(^|\s)(1?\d?\d)vw/g,
                                    t = [];
                                for (let r; r = e.exec(n); r) t.push(parseInt(r[2]));
                                if (t.length) {
                                    let e = .01 * Math.min(...t);
                                    return {
                                        widths: o.filter((t => t >= r[0] * e)),
                                        kind: "w"
                                    }
                                }
                                return {
                                    widths: o,
                                    kind: "w"
                                }
                            }
                            if ("number" != typeof t) return {
                                widths: r,
                                kind: "w"
                            };
                            let i = [...new Set([t, 2 * t].map((e => o.find((t => t >= e)) || o[o.length - 1])))];
                            return {
                                widths: i,
                                kind: "x"
                            }
                        }(t, o, a), s = u.length - 1;
                        return {
                            sizes: a || "w" !== c ? a : "100vw",
                            srcSet: u.map(((e, r) => "".concat(l({
                                config: t,
                                src: n,
                                quality: i,
                                width: e
                            }), " ").concat("w" === c ? e : r + 1).concat(c))).join(", "),
                            src: l({
                                config: t,
                                src: n,
                                quality: i,
                                width: u[s]
                            })
                        }
                    }({
                        config: B,
                        src: h,
                        unoptimized: b,
                        width: $,
                        quality: Q,
                        sizes: E,
                        loader: q
                    }), re = h, oe = (0, l.useRef)(L);
                    (0, l.useEffect)((() => {
                        oe.current = L
                    }), [L]);
                    let ie = (0, l.useRef)(T);
                    (0, l.useEffect)((() => {
                        ie.current = T
                    }), [T]);
                    let ae = r._({
                        isLazy: H,
                        imgAttributes: ne,
                        heightInt: V,
                        widthInt: $,
                        qualityInt: Q,
                        className: S,
                        imgStyle: ee,
                        blurStyle: te,
                        loading: C,
                        config: B,
                        fetchPriority: A,
                        fill: _,
                        unoptimized: b,
                        placeholder: D,
                        loader: q,
                        srcString: re,
                        onLoadRef: oe,
                        onLoadingCompleteRef: ie,
                        setBlurComplete: Z,
                        setShowAltText: J
                    }, U);
                    return l.default.createElement(l.default.Fragment, null, l.default.createElement(y, r._({}, ae, {
                        ref: t
                    })), w ? l.default.createElement(u.default, null, l.default.createElement("link", r._({
                        key: "__nimg-" + ne.src + ne.srcSet + ne.sizes,
                        rel: "preload",
                        as: "image",
                        href: ne.srcSet ? void 0 : ne.src,
                        imageSrcSet: ne.srcSet,
                        imageSizes: ne.sizes,
                        crossOrigin: U.crossOrigin
                    }, g(A)))) : null)
                })),
                b = E;
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        7757: function(e, t) {
            "use strict";

            function n(e) {
                let {
                    widthInt: t,
                    heightInt: n,
                    blurWidth: r,
                    blurHeight: o,
                    blurDataURL: i,
                    objectFit: a
                } = e, l = r || t, u = o || n, c = i.startsWith("data:image/jpeg") ? "%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%" : "";
                return l && u ? "%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(l, " ").concat(u, "'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(r && o ? "1" : "20", "'/%3E").concat(c, "%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(i, "'/%3E%3C/svg%3E") : "%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='".concat("contain" === a ? "xMidYMid" : "cover" === a ? "xMidYMid slice" : "none", "' x='0' y='0' height='100%25' width='100%25' href='").concat(i, "'/%3E%3C/svg%3E")
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "getImageBlurSvg", {
                enumerable: !0,
                get: function() {
                    return n
                }
            })
        },
        7746: function(e, t) {
            "use strict";

            function n(e) {
                let {
                    config: t,
                    src: n,
                    width: r,
                    quality: o
                } = e;
                return "".concat(t.path, "?url=").concat(encodeURIComponent(n), "&w=").concat(r, "&q=").concat(o || 75)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return r
                }
            }), n.__next_img_default = !0;
            let r = n
        },
        5675: function(e, t, n) {
            e.exports = n(3740)
        }
    }
]);