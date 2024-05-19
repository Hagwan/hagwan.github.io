(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [818], {
        8312: function (e, t, s) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function () {
                return s(7211)
            }])
        },
        7604: function (e, t, s) {
            "use strict";
            s.d(t, {
                Z: function () {
                    return r
                }
            });
            var a = s(5893),
                l = s(1365);

            function r(e) {
                let {
                    title: t,
                    url: s,
                    label: r = "",
                    className: i = "",
                    fill: n,
                    small: o
                } = e, c = t.trim().split(" "), d = c.pop(), m = c.join(" ");
                return (0, a.jsxs)("a", {
                    className: "inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 ".concat(i, " group/link ").concat(o ? "text-sm" : "text-base"),
                    href: s,
                    target: "_blank",
                    rel: "noreferrer",
                    "aria-label": r || t,
                    children: [n && (0, a.jsx)("span", {
                        className: "absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"
                    }), (0, a.jsxs)("span", {
                        children: [m, " ", (0, a.jsxs)("span", {
                            className: "inline-block",
                            children: [d, (0, a.jsx)(l.Z, {
                                use: "arrow-external",
                                className: "inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ".concat(o ? "ml-0.5" : "ml-1 translate-y-px")
                            })]
                        })]
                    })]
                })
            }
        },
        1365: function (e, t, s) {
            "use strict";
            s.d(t, {
                Z: function () {
                    return l
                }
            });
            var a = s(5893);

            function l(e) {
                let {
                    use: t,
                    className: s = "h-4 w-4"
                } = e;
                switch (t) {
                    case "github":
                        return (0, a.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 16 16",
                            fill: "currentColor",
                            className: s,
                            "aria-hidden": "true",
                            children: (0, a.jsx)("path", {
                                d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                            })
                        });
                    case "instagram":
                        return (0, a.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 1000 1000",
                            fill: "currentColor",
                            className: s,
                            "aria-hidden": "true",
                            children: (0, a.jsx)("path", {
                                d: "M295.42,6c-53.2,2.51-89.53,11-121.29,23.48-32.87,12.81-60.73,30-88.45,57.82S40.89,143,28.17,175.92c-12.31,31.83-20.65,68.19-23,121.42S2.3,367.68,2.56,503.46,3.42,656.26,6,709.6c2.54,53.19,11,89.51,23.48,121.28,12.83,32.87,30,60.72,57.83,88.45S143,964.09,176,976.83c31.8,12.29,68.17,20.67,121.39,23s70.35,2.87,206.09,2.61,152.83-.86,206.16-3.39S799.1,988,830.88,975.58c32.87-12.86,60.74-30,88.45-57.84S964.1,862,976.81,829.06c12.32-31.8,20.69-68.17,23-121.35,2.33-53.37,2.88-70.41,2.62-206.17s-.87-152.78-3.4-206.1-11-89.53-23.47-121.32c-12.85-32.87-30-60.7-57.82-88.45S862,40.87,829.07,28.19c-31.82-12.31-68.17-20.7-121.39-23S637.33,2.3,501.54,2.56,348.75,3.4,295.42,6m5.84,903.88c-48.75-2.12-75.22-10.22-92.86-17-23.36-9-40-19.88-57.58-37.29s-28.38-34.11-37.5-57.42c-6.85-17.64-15.1-44.08-17.38-92.83-2.48-52.69-3-68.51-3.29-202s.22-149.29,2.53-202c2.08-48.71,10.23-75.21,17-92.84,9-23.39,19.84-40,37.29-57.57s34.1-28.39,57.43-37.51c17.62-6.88,44.06-15.06,92.79-17.38,52.73-2.5,68.53-3,202-3.29s149.31.21,202.06,2.53c48.71,2.12,75.22,10.19,92.83,17,23.37,9,40,19.81,57.57,37.29s28.4,34.07,37.52,57.45c6.89,17.57,15.07,44,17.37,92.76,2.51,52.73,3.08,68.54,3.32,202s-.23,149.31-2.54,202c-2.13,48.75-10.21,75.23-17,92.89-9,23.35-19.85,40-37.31,57.56s-34.09,28.38-57.43,37.5c-17.6,6.87-44.07,15.07-92.76,17.39-52.73,2.48-68.53,3-202.05,3.29s-149.27-.25-202-2.53m407.6-674.61a60,60,0,1,0,59.88-60.1,60,60,0,0,0-59.88,60.1M245.77,503c.28,141.8,115.44,256.49,257.21,256.22S759.52,643.8,759.25,502,643.79,245.48,502,245.76,245.5,361.22,245.77,503m90.06-.18a166.67,166.67,0,1,1,167,166.34,166.65,166.65,0,0,1-167-166.34"
                            })
                        });
                    case "twitter":
                        return (0, a.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 248 204",
                            fill: "currentColor",
                            className: s,
                            "aria-hidden": "true",
                            children: (0, a.jsx)("path", {
                                id: "white_background",
                                d: "M221.95,51.29c0.15,2.17,0.15,4.34,0.15,6.53c0,66.73-50.8,143.69-143.69,143.69v-0.04   C50.97,201.51,24.1,193.65,1,178.83c3.99,0.48,8,0.72,12.02,0.73c22.74,0.02,44.83-7.61,62.72-21.66   c-21.61-0.41-40.56-14.5-47.18-35.07c7.57,1.46,15.37,1.16,22.8-0.87C27.8,117.2,10.85,96.5,10.85,72.46c0-0.22,0-0.43,0-0.64   c7.02,3.91,14.88,6.08,22.92,6.32C11.58,63.31,4.74,33.79,18.14,10.71c25.64,31.55,63.47,50.73,104.08,52.76   c-4.07-17.54,1.49-35.92,14.61-48.25c20.34-19.12,52.33-18.14,71.45,2.19c11.31-2.23,22.15-6.38,32.07-12.26   c-3.77,11.69-11.66,21.62-22.2,27.93c10.01-1.18,19.79-3.86,29-7.95C240.37,35.29,231.83,44.14,221.95,51.29z"
                            })
                        });
                    case "linkedin":
                        return (0, a.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            fill: "currentColor",
                            className: s,
                            "aria-hidden": "true",
                            children: (0, a.jsx)("path", {
                                d: "M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"
                            })
                        });
                    case "arrow-external":
                        return (0, a.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 20 20",
                            fill: "currentColor",
                            className: s,
                            "aria-hidden": "true",
                            children: (0, a.jsx)("path", {
                                fillRule: "evenodd",
                                d: "M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z",
                                clipRule: "evenodd"
                            })
                        });
                    case "arrow-internal":
                        return (0, a.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 20 20",
                            fill: "currentColor",
                            className: s,
                            "aria-hidden": "true",
                            children: (0, a.jsx)("path", {
                                fillRule: "evenodd",
                                d: "M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z",
                                clipRule: "evenodd"
                            })
                        });
                    case "star":
                        return (0, a.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 20 20",
                            fill: "currentColor",
                            className: s,
                            "aria-hidden": "true",
                            children: (0, a.jsx)("path", {
                                fillRule: "evenodd",
                                d: "M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z",
                                clipRule: "evenodd"
                            })
                        });
                    case "download":
                        return (0, a.jsxs)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 20 20",
                            fill: "currentColor",
                            className: s,
                            "aria-hidden": "true",
                            children: [(0, a.jsx)("path", {
                                d: "M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z"
                            }), (0, a.jsx)("path", {
                                d: "M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z"
                            })]
                        });
                    case "close":
                        return (0, a.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            fill: "currentColor",
                            className: s,
                            "aria-hidden": "true",
                            children: (0, a.jsx)("path", {
                                fillRule: "evenodd",
                                d: "M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z",
                                clipRule: "evenodd"
                            })
                        });
                    case "link":
                        return (0, a.jsxs)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 20 20",
                            fill: "currentColor",
                            className: s,
                            "aria-hidden": "true",
                            children: [(0, a.jsx)("path", {
                                d: "M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"
                            }), (0, a.jsx)("path", {
                                d: "M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"
                            })]
                        });
                    default:
                        return (0, a.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            className: s,
                            fill: "none",
                            stroke: "currentColor",
                            "aria-hidden": "true",
                            children: (0, a.jsx)("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "2",
                                d: "M4 6h16M4 12h16M4 18h7"
                            })
                        })
                }
            }
        },
        4533: function (e, t, s) {
            "use strict";
            s.d(t, {
                Z: function () {
                    return l
                }
            });
            var a = s(5893);

            function l(e) {
                let {
                    text: t,
                    className: s = ""
                } = e;
                return (0, a.jsx)("div", {
                    className: "flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ".concat(s),
                    children: t
                })
            }
        },
        8425: function (e, t, s) {
            "use strict";
            s.d(t, {
                Z: function () {
                    return n
                }
            });
            var a = s(5893),
                l = s(7294),
                r = s(9008),
                i = s.n(r);

            function n(e) {
                let {
                    title: t,
                    pathname: s
                } = e, r = "Hagwan Mohammed", n = "", o = "", c = "".concat(o, "images/target-images/Hi.jpg"), d = "@hagwanx", m = r;
                return t !== r && (m = "".concat(t, " | ").concat(r)), (0, a.jsxs)(i(), {
                    children: [(0, a.jsx)("title", {
                        children: m
                    }), (0, a.jsx)("meta", {
                        name: "description",
                        content: n
                    }, "description"), (0, a.jsx)("meta", {
                        name: "image",
                        content: c
                    }), (0, a.jsx)("meta", {
                        property: "og:locale",
                        content: "en_US"
                    }, "og:locale"), (0, a.jsx)("meta", {
                        property: "og:site_name",
                        content: r
                    }, "og:site_name"), (0, a.jsx)("meta", {
                        property: "og:type",
                        content: "website"
                    }, "og:type"), (0, a.jsx)("meta", {
                        property: "twitter:card",
                        content: "summary_large_image"
                    }, "twitter:card"), (0, a.jsx)("meta", {
                        property: "twitter:creator",
                        content: d
                    }, "twitter:creator"), (0, a.jsx)("meta", {
                        property: "twitter:site",
                        content: d
                    }, "twitter:site"), ["og", "twitter"].map((e => (0, a.jsxs)(l.Fragment, {
                        children: [(0, a.jsx)("meta", {
                            property: "".concat(e, ":title"),
                            content: m
                        }, "".concat(e, ":title")), (0, a.jsx)("meta", {
                            property: "".concat(e, ":description"),
                            content: n
                        }, "".concat(e, ":description")), (0, a.jsx)("meta", {
                            property: "".concat(e, ":url"),
                            content: o + s
                        }, "".concat(e, ":url")), (0, a.jsx)("meta", {
                            property: "".concat(e, ":image"),
                            content: c
                        }, "".concat(e, ":image"))]
                    }, e))), (0, a.jsx)("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "512x192",
                        href: "/images/android-chrome-512x512.png"
                    }), (0, a.jsx)("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "192x192",
                        href: "/images/android-chrome-192x192.png"
                    }), (0, a.jsx)("link", {
                        rel: "apple-touch-icon",
                        sizes: "180x180",
                        href: "/images/apple-touch-icon.png"
                    }), (0, a.jsx)("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "32x32",
                        href: "/images/favicon-32x32.png"
                    }), (0, a.jsx)("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "16x16",
                        href: "/images/favicon-16x16.png"
                    }), (0, a.jsx)("link", {
                        rel: "manifest",
                        href: "/images/site.webmanifest"
                    }), (0, a.jsx)("meta", {
                        name: "msapplication-TileColor",
                        content: "#0f172a"
                    }), (0, a.jsx)("meta", {
                        name: "theme-color",
                        content: "#0f172a"
                    }), (0, a.jsx)("meta", {
                        name: "google-site-verification",
                        content: "DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk"
                    })]
                })
            }
        },
        7211: function (e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function () {
                    return k
                }
            });
            var a = s(5893),
                l = s(7294);

            function r() {
                return (0, a.jsxs)("div", {
                    children: [(0, a.jsxs)("p", {
                        className: "mb-4",
                        children: ["I am a passionate and skilled software engineer with a deep love for crafting elegant, efficient, and user-friendly solutions. Specializing in ", " ", (0, a.jsx)("a", {
                            className: "font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300",
                            href: "",
                            target: "_blank",
                            rel: "noreferrer",
                            children: "Flutter"
                        }), ", HTML, CSS, and JavaScript, I excel in turning complex problems into streamlined, intuitive applications. My dedication to continuous learning and staying updated with the latest industry trends ensures that I deliver cutting-edge solutions. Let's collaborate to bring your digital visions to life!", (0, a.jsx)("a", {
                            className: "font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300",
                            href: "",
                            target: "_blank",
                            rel: "noreferrer",
                        }), "."]
                    }), (0, a.jsxs)("p", {
                        children: ["When I’m not at the computer, I’m usually playing football, Reading, hanging out with family or friends, or Going to the ", " ", (0, a.jsxs)("span", {
                            className: "group/korok inline-flex lg:cursor-[url('/images/koroks/Elma.png'),_pointer] lg:font-medium lg:text-slate-200",
                            children: [(0, a.jsx)("span", {
                                className: "sr-only",
                                children: "GYM"
                            }), "GYM".split("").map(((e, t) => (0, a.jsx)("span", {
                                className: "".concat(["group-hover/korok:text-red-400", "group-hover/korok:text-orange-400", "group-hover/korok:text-yellow-400", "group-hover/korok:text-lime-400", "group-hover/korok:text-green-400", "group-hover/korok:text-teal-400", "group-hover/korok:text-cyan-400", "group-hover/korok:text-sky-400", "group-hover/korok:text-blue-400", "group-hover/korok:text-indigo-400", "group-hover/korok:text-violet-400"][t], " transition duration-75 group-hover/korok:-translate-y-px ").concat(["delay-[50ms]", "delay-[75ms]", "delay-[100ms]", "delay-[125ms]", "delay-[150ms]", "delay-[175ms]", "delay-[200ms]", "delay-[225ms]", "delay-[250ms]", "delay-[275ms]", "delay-[300ms]"][t]),
                                "aria-hidden": "true",
                                children: " " === e ? " " : e
                            }, t)))]
                        }), "."]
                    })]
                })
            }
            var i = s(7604);

            function n() {
                return (0, a.jsx)("div", {
                    className: "absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"
                })
            }
            var o = s(1365),
                c = s(1664),
                d = s.n(c);

            function m(e) {
                let {
                    title: t,
                    url: s,
                    className: l,
                    border: r = !0
                } = e, i = t.trim().split(" "), n = i.pop(), c = i.join(" "), m = r ? "border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none" : "";
                return (0, a.jsx)(d(), {
                    className: "inline-flex items-center font-medium leading-tight text-slate-200 ".concat(l, " group"),
                    href: s,
                    "aria-label": t,
                    children: (0, a.jsxs)("span", {
                        children: [(0, a.jsxs)("span", {
                            className: m,
                            children: [c, " "]
                        }), (0, a.jsxs)("span", {
                            className: "whitespace-nowrap",
                            children: [(0, a.jsx)("span", {
                                className: m,
                                children: n
                            }), (0, a.jsx)(o.Z, {
                                use: "arrow-internal",
                                className: "ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                            })]
                        })]
                    })
                })
            }
            var h = s(4533);

            function p() {
                return (0, a.jsxs)("div", {
                    children: [(0, a.jsx)("ol", {
                        className: "group/list",
                        children: [{
                            date: "Present",
                            company: {
                                name: "",
                                link: ""
                            },
                            positions: ["Software Engineer", "Open to work", "Mobile Developer"],
                            desc: "Post my internship, I now invest my free time in crafting mobile applications. Proficient in Flutter, I'm actively seeking opportunities to apply my skills in a dynamic team. Eager to contribute to innovative projects and drive solutions focused on user satisfaction.",
                            tech: ["Flutter", "Firebase", "Figma", "Github"]
                        }, {
                            date: "May — Sep 2023",
                            company: {
                                name: "Xentral Methods",
                                link: "https://www.xentralmethods.com/"
                            },
                            positions: ["Augmented Reality Software Engineer"],
                            desc: "At Xentral Methods, I interned as an Augmented Reality Software Engineer and Flutter mobile developer. This role immersed me in cutting-edge AR technology and honed my skills in creating immersive experiences. Additionally, I gained expertise in crafting versatile and user-friendly mobile applications.",
                            tech: ["Flutter", "HTML", "JavaScript", "Gitlab", "MindAR", "ARcore"],
                            links: [{
                                title: "XentralMethods",
                                url: "https://www.xentralmethods.com/"
                            },]
                        }, {
                            date: "2019 — 2023",
                            company: {
                                name: "MMU",
                                link: "https://www.mmu.edu.my/"
                            },
                            positions: ["Education"],
                            desc: "I pursued Computer Science with a focus on Software Engineering at MMU University in Cyberjaya. This dynamic program equipped me with a strong foundation in theoretical concepts and practical skills, preparing me for the constantly changing field of software development. The vibrant campus and collaborative learning environment enriched my academic journey.",
                            tech: ["C++", "Java", "HTML", "CSS", "JavaScript", "SQL"]
                        }, {
                            date: "2018",
                            company: {
                                name: "Alshola private school",
                                link: "https://www.alsholaschool.com/"
                            },
                            positions: ["Education"],
                            desc: "I attended Al Shola Private School in the United Arab Emirates during my school years. The institution provided a diverse and enriching educational experience, fostering both academic excellence and personal growth.",

                        },].map(((e, t) => (0, a.jsx)("li", {
                            className: "mb-12",
                            children: (0, a.jsxs)("div", {
                                className: "group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50",
                                children: [(0, a.jsx)(n, {}), (0, a.jsx)("header", {
                                    className: "z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2",
                                    "aria-label": e.date.replace("—", "to").replace("Dec", "December"),
                                    children: e.date || ""
                                }), (0, a.jsxs)("div", {
                                    className: "z-10 sm:col-span-6",
                                    children: [(0, a.jsx)("h3", {
                                        className: "font-medium leading-snug text-slate-200",
                                        children: e.positions.map(((t, s) => (0, a.jsx)("div", {
                                            children: 0 === s ? (0, a.jsx)(i.Z, {
                                                title: "".concat(t, " · ").concat(e.company.name),
                                                label: "".concat(t, " at ").concat(e.company.name),
                                                url: e.company.link,
                                                fill: !0
                                            }) : (0, a.jsx)("div", {
                                                className: "text-slate-500",
                                                "aria-hidden": "true",
                                                children: t
                                            })
                                        }, s)))
                                    }), (0, a.jsx)("p", {
                                        className: "mt-2 text-sm leading-normal",
                                        children: e.desc
                                    }), e.links && (0, a.jsx)("ul", {
                                        className: "mt-2 flex flex-wrap",
                                        "aria-label": "Related links",
                                        children: e.links.map(((e, t) => (0, a.jsx)("li", {
                                            className: "mr-4",
                                            children: (0, a.jsxs)("a", {
                                                className: "relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300",
                                                href: e.url,
                                                target: "_blank",
                                                rel: "noreferrer",
                                                children: [(0, a.jsx)(o.Z, {
                                                    use: "link",
                                                    className: "mr-1 h-3 w-3"
                                                }), (0, a.jsx)("span", {
                                                    children: e.title
                                                })]
                                            })
                                        }, t)))
                                    }), e.tech && (0, a.jsx)("ul", {
                                        className: "mt-2 flex flex-wrap",
                                        "aria-label": "Technologies used",
                                        children: e.tech.map(((e, t) => (0, a.jsx)("li", {
                                            className: "mr-1.5 mt-2",
                                            children: (0, a.jsx)(h.Z, {
                                                text: e
                                            })
                                        }, t)))
                                    })]
                                })]
                            })
                        }, t)))
                    }), (0, a.jsx)("div", {
                        className: "mt-12",
                        children: (0, a.jsx)(m, {
                            title: "View Full Résumé",
                            url: "/resume.pdf",
                            className: "font-semibold text-slate-200"
                        })
                    })]
                })
            }

            function u() {
                return (0, a.jsx)("footer", {})
            }

            function x(e) {
                let {
                    sections: t
                } = e;
                return (0, a.jsxs)("header", {
                    className: "lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24",
                    children: [(0, a.jsxs)("div", {
                        children: [(0, a.jsx)("h1", {
                            className: "text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl",
                            children: (0, a.jsx)(d(), {
                                href: "/",
                                children: "Hagwan Mohammed"
                            })
                        }), (0, a.jsx)("h2", {
                            className: "mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl",
                            children: "Software Engineer"
                        }), (0, a.jsx)("p", {
                            className: "mt-4 max-w-xs leading-normal",
                            children: "Crafting intuitive applications with efficiency and elegance."
                        }), (0, a.jsx)("nav", {
                            className: "nav hidden lg:block",
                            "aria-label": "In-page jump links",
                            children: (0, a.jsx)("ul", {
                                className: "mt-16 w-max",
                                children: t.map(((e, t) => e.hideFromNav ? null : (0, a.jsx)("li", {
                                    children: (0, a.jsxs)("a", {
                                        className: "group flex items-center py-3 ".concat(0 === t ? "active" : ""),
                                        href: "#".concat(e.heading.toLowerCase()),
                                        children: [(0, a.jsx)("span", {
                                            className: "nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"
                                        }), (0, a.jsx)("span", {
                                            className: "nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200",
                                            children: e.heading
                                        })]
                                    })
                                }, t)))
                            })
                        })]
                    }), (0, a.jsx)("ul", {
                        className: "ml-1 mt-8 flex items-center",
                        "aria-label": "Social media",
                        children: [{
                            title: "GitHub",
                            url: "https://github.com/hagwan",
                            icon: "github"
                        }, {
                            title: "Instagram",
                            url: "https://instagram.com/hagwanx",
                            icon: "instagram"
                        }, {
                            title: "Gmail",
                            url: "mailto: hagwanmohammed@gmail.com",
                            icon: "email"
                        }, {
                            title: "LinkedIn",
                            url: "https://www.linkedin.com/in/hagwan/",
                            icon: "linkedin"
                        }].map(((e, t) => (0, a.jsx)("li", {
                            className: "mr-5 text-xs",
                            children: (0, a.jsxs)("a", {
                                className: "block hover:text-slate-200",
                                href: e.url,
                                target: "_blank",
                                rel: "noreferrer",
                                children: [(0, a.jsx)("span", {
                                    className: "sr-only",
                                    children: e.title
                                }), (0, a.jsx)(o.Z, {
                                    use: e.icon,
                                    className: "h-6 w-6"
                                })]
                            })
                        }, t)))
                    })]
                })
            }
            var g = s(5675),
                f = s.n(g);

            function v() {
                let e = e => { };
                return (0, a.jsxs)("div", {
                    children: [(0, a.jsx)("ul", {
                        className: "group/list",
                        children: [



                            {
                                title: "AR-Vision",
                                link: "ar.html",
                                desc: "Welcome to My AR Project, a dynamic and engaging augmented reality (AR) application built using MindAR. This project is designed to showcase the potential of AR across various fields such as education, shopping, and entertainment.",
                                tech: ["MindAR", "AFrame", "3DModels", "Augmented Reality", "HTML", "CSS", "JavaScript"],
                            },

                            {
                                title: "Gemini Meets ChatGPT",
                                link: "https://github.com/Hagwan/GeminiAI-Powered-ChatGPT-UI",
                                desc: "GeminiAI-Powered-ChatGPT-UI Enjoy a design that mirrors ChatGPT's familiarity, making it easy for users to transition and explore GeminiAI's functionalities.",
                                tech: ["HTML", "CSS", "JavaScript ", "Github", " GeminiAI-API", "Node.js"],

                            },

                            {
                                title: "MyPet",
                                link: "https://github.com/Hagwan/MyPet",
                                desc: "MyPet is a comprehensive Flutter app catering to pet owners' needs, offering services like vet appointments, pet hotels, reminders, and profiles.",
                                tech: ["Flutter", "Figma", "Firebase ", "Github", "Testing", "API", "Android"],
                            },


                            {
                                title: "SuperApp",
                                link: "https://www.xentralmethods.com/",
                                desc: "During my internship, I worked with Xentral Methods in SuperApp, a Flutter application for iOS and Android that focuses on augmented reality (AR) for children's books.",
                                tech: ["Flutter", "MindAR", "arcore_flutter ", "Gitlab", "Firebase", "Figma"],
                                github: "https://github.com/hagwanx/"
                            },









                        ].map(((t, s) => (0, a.jsx)("li", {
                            className: "mb-12",
                            children: (0, a.jsxs)("div", {
                                className: "group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50",
                                children: [(0, a.jsx)(n, {}), (0, a.jsxs)("div", {
                                    className: "z-10 sm:order-2 sm:col-span-6",
                                    children: [(0, a.jsx)("h3", {
                                        children: (0, a.jsx)(i.Z, {
                                            title: t.title,
                                            url: t.link,
                                            fill: !0
                                        })
                                    }), (0, a.jsx)("p", {
                                        className: "mt-2 text-sm leading-normal",
                                        children: t.desc
                                    }), t.github && (0, a.jsx)(e, {
                                        repoUrl: t.github
                                    }), t.download && (0, a.jsxs)("a", {}), t.tech && (0, a.jsx)("ul", {
                                        className: "mt-2 flex flex-wrap",
                                        "aria-label": "Technologies used:",
                                        children: t.tech.map(((e, t) => (0, a.jsx)("li", {
                                            className: "mr-1.5 mt-2",
                                            children: (0, a.jsx)(h.Z, {
                                                text: e
                                            })
                                        }, t)))
                                    })]
                                }), (0, a.jsx)(f(), {
                                })]
                            })
                        }, s)))
                    }),

                    (0, a.jsx)("div", {
                        className: "mt-12",
                        children: (0, a.jsx)(m, {
                            title: "View Full Project Archive",
                            url: "https://github.com/Hagwan",
                            className: "font-semibold text-slate-200"
                        })
                    })]
                })
            }
            var b = s(8425),
                j = s(4910);

            function w() {
                let [e, t] = (0, l.useState)(null);
                return (0, a.jsx)("div", {})
            }

            function y() {
                return (0, a.jsx)("div", {
                    children: (0, a.jsx)("ul", {})
                })
            }

            function k() {
                let e = (0, l.useRef)([]);
                (0, l.useEffect)((() => {
                    let t = document.querySelector(".nav");
                    if (!t || window.innerWidth < 1024) return;
                    let s = "active",
                        a = new IntersectionObserver((e => {
                            e.forEach((e => {
                                if (e.isIntersecting) {
                                    let a = t.querySelector("a[href].".concat(s));
                                    null == a || a.classList.remove(s);
                                    let l = t.querySelector('a[href="#'.concat(e.target.id, '"]'));
                                    null == l || l.classList.add(s)
                                }
                            }))
                        }), {
                            rootMargin: "0% 0% -".concat(70, "% 0%"),
                            threshold: 0
                        });
                    e.current.forEach((e => {
                        e && a.observe(e)
                    }))
                }), []);
                let t = [{
                    heading: "About",
                    label: "About me",
                    component: (0, a.jsx)(r, {})
                }, {
                    heading: "Experience",
                    label: "Work experience",
                    component: (0, a.jsx)(p, {})
                }, {
                    heading: "Projects",
                    label: "Selected projects",
                    component: (0, a.jsx)(v, {})
                }, {
                    heading: "",
                    label: "Blog posts",
                    component: (0, a.jsx)(y, {}),
                    hideFromNav: !0
                }];
                return (0, a.jsxs)("div", {
                    className: "lg:flex lg:justify-between lg:gap-4",
                    children: [(0, a.jsx)(b.Z, {
                        pathname: "/",
                        title: "Hagwan Mohammed"
                    }), (0, a.jsx)(x, {
                        sections: t
                    }), (0, a.jsxs)("main", {
                        id: "content",
                        className: "pt-24 lg:w-1/2 lg:py-24",
                        children: [t.map(((t, s) => (0, a.jsxs)("section", {
                            id: t.heading.toLowerCase(),
                            className: "mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24",
                            "aria-label": t.label,
                            ref: t => e.current[s] = t,
                            children: [(0, a.jsx)("div", {
                                className: "sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0",
                                children: (0, a.jsx)("h2", {
                                    className: "text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only",
                                    children: t.heading
                                })
                            }), t.component]
                        }, s))), (0, a.jsx)(u, {})]
                    }), (0, a.jsx)(w, {})]
                })
            }
        }
    },



    function (e) {
        e.O(0, [664, 506, 774, 888, 179], (function () {
            return e(e.s = 8312)
        })), _N_E = e.O()
    }
]);
