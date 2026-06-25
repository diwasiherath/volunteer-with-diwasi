(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Navbar({ currentPage }) {
    _s();
    const [navOpen, setNavOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Monitor scrolling for older browsers/fallback sticky classes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const handleScroll = {
                "Navbar.useEffect.handleScroll": ()=>{
                    setIsScrolled(window.scrollY > 20);
                }
            }["Navbar.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll, {
                passive: true
            });
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    const navLinks = [
        {
            id: "home",
            label: "Home",
            path: "/"
        },
        {
            id: "about",
            label: "About",
            path: "/about"
        },
        {
            id: "projects",
            label: "Projects",
            path: "/projects"
        },
        {
            id: "places",
            label: "Places to Visit",
            path: "/places"
        },
        {
            id: "gallery",
            label: "Gallery",
            path: "/gallery"
        },
        {
            id: "reviews",
            label: "Reviews",
            path: "/reviews"
        },
        {
            id: "contact",
            label: "Contact",
            path: "/contact"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: `site-header ${isScrolled ? "scrolled" : ""}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                dangerouslySetInnerHTML: {
                    __html: `
        /* Native Scroll-Driven Shrinking Header */
        @media (prefers-reduced-motion: no-preference) {
          @supports ((animation-timeline: scroll()) and (animation-range: 0% 100%)) {
            .site-header {
              animation: shrink-header auto linear both;
              animation-timeline: scroll(block root);
              animation-range: 0px 80px;
              /* Overriding globals.css transition when native scroll timeline is active */
              transition: none !important;
            }
            .site-header .nav-container {
              animation: shrink-container auto linear both;
              animation-timeline: scroll(block root);
              animation-range: 0px 80px;
              transition: none !important;
            }
          }
        }

        @keyframes shrink-header {
          to {
            background-color: rgba(255, 255, 255, 0.96);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            box-shadow: 0 10px 30px rgba(0, 80, 80, 0.06);
            border-bottom-color: rgba(0, 128, 128, 0.15);
          }
        }

        @keyframes shrink-container {
          to {
            padding-block: 10px;
          }
        }

        /* Enhancing Logo Interactions */
        .site-header .logo {
          transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          text-decoration: none;
        }
        .site-header .logo:hover {
          transform: scale(1.02);
        }
        .site-header .logo span {
          display: block;
          font-weight: 500;
          letter-spacing: 0.5px;
          color: var(--primary);
          opacity: 0.8;
          transition: opacity 0.3s ease, color 0.3s ease;
        }
        .site-header .logo:hover span {
          opacity: 1;
          color: var(--accent-hover);
        }

        /* Modern Nav Links Underline & Glow */
        .site-header .nav-link {
          position: relative;
          transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .site-header .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--primary) 0%, var(--accent) 100%);
          transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .site-header .nav-link:hover::after,
        .site-header .nav-link.active::after {
          width: 100%;
        }

        .site-header .nav-link.active {
          color: var(--primary);
          text-shadow: 0 0 1px rgba(0, 128, 128, 0.2);
        }

        /* Custom premium action button for Volunteer Application */
        .site-header .nav-link-apply {
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-hover) 100%);
          color: var(--white) !important;
          padding: 8px 20px !important;
          border-radius: 25px;
          box-shadow: 0 4px 15px rgba(0, 128, 128, 0.2);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
          font-weight: 700;
        }

        .site-header .nav-link-apply::after {
          display: none !important;
        }

        .site-header .nav-link-apply:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 128, 128, 0.3);
          color: var(--accent) !important;
        }

        .site-header .nav-link-apply:active {
          transform: translateY(0);
        }

        /* Hamburger Morph Animation */
        .site-header .nav-toggle {
          display: none;
          flex-direction: column;
          justify-content: space-between;
          width: 24px;
          height: 18px;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
          z-index: 1100;
        }

        .site-header .nav-toggle span {
          width: 100%;
          height: 2px;
          background-color: var(--dark);
          border-radius: 2px;
          transition: transform 0.3s cubic-bezier(0.68, -0.6, 0.27, 1.55), 
                      opacity 0.3s ease,
                      background-color 0.3s ease;
        }

        .site-header .nav-toggle.open span:nth-child(1) {
          transform: translateY(8px) rotate(45deg);
          background-color: var(--primary);
        }

        .site-header .nav-toggle.open span:nth-child(2) {
          opacity: 0;
        }

        .site-header .nav-toggle.open span:nth-child(3) {
          transform: translateY(-8px) rotate(-45deg);
          background-color: var(--primary);
        }

        @media (max-width: 900px) {
          .site-header .nav-toggle {
            display: flex;
          }
          
          .site-header .nav-menu {
            position: fixed;
            top: 0;
            right: -100%;
            width: 300px;
            height: 100vh;
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            box-shadow: -10px 0 35px rgba(0, 80, 80, 0.08);
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            gap: 25px;
            padding: 100px 40px;
            transition: right 0.4s cubic-bezier(0.16, 1, 0.3, 1);
            border-left: 1px solid rgba(0, 128, 128, 0.08);
          }
          
          .site-header .nav-menu.open {
            right: 0;
          }

          .site-header .nav-menu li {
            width: 100%;
          }

          .site-header .nav-menu .nav-link-apply {
            display: inline-block;
            text-align: center;
            width: 100%;
            margin-top: 15px;
          }
        }
      `
                }
            }, void 0, false, {
                fileName: "[project]/src/components/Navbar.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "nav-container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "logo",
                        "aria-label": "DIWASI Homepage",
                        children: [
                            "Volunteer Sri Lanka With Diwasi ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "where stays become stories"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 226,
                                columnNumber: 43
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 225,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `nav-toggle ${navOpen ? "open" : ""}`,
                        onClick: ()=>setNavOpen(!navOpen),
                        "aria-label": "Toggle navigation menu",
                        "aria-expanded": navOpen,
                        "aria-controls": "nav-menu",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 236,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 237,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 238,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 229,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        id: "primaryNav",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            id: "nav-menu",
                            className: `nav-menu ${navOpen ? "open" : ""}`,
                            children: [
                                navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: link.path,
                                            className: `nav-link ${currentPage === link.id ? "active" : ""}`,
                                            "aria-current": currentPage === link.id ? "page" : undefined,
                                            onClick: ()=>setNavOpen(false),
                                            children: link.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar.tsx",
                                            lineNumber: 245,
                                            columnNumber: 17
                                        }, this)
                                    }, link.id, false, {
                                        fileName: "[project]/src/components/Navbar.tsx",
                                        lineNumber: 244,
                                        columnNumber: 15
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/apply",
                                        className: `nav-link nav-link-apply ${currentPage === "apply" ? "active" : ""}`,
                                        "aria-current": currentPage === "apply" ? "page" : undefined,
                                        onClick: ()=>setNavOpen(false),
                                        children: "Volunteer Application"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar.tsx",
                                        lineNumber: 256,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 255,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 242,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 241,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Navbar.tsx",
                lineNumber: 224,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Navbar.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_s(Navbar, "bMPiViUp8xOGmb3vK31SLUDbXzI=");
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Footer() {
    _s();
    const [showBackToTop, setShowBackToTop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrollProgress, setScrollProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Footer.useEffect": ()=>{
            const handleScroll = {
                "Footer.useEffect.handleScroll": ()=>{
                    // Calculate scroll progress percentage
                    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
                    if (totalHeight > 0) {
                        const progress = window.scrollY / totalHeight * 100;
                        setScrollProgress(progress);
                    }
                    setShowBackToTop(window.scrollY > 300);
                }
            }["Footer.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll, {
                passive: true
            });
            // Initial call
            handleScroll();
            return ({
                "Footer.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["Footer.useEffect"];
        }
    }["Footer.useEffect"], []);
    const scrollToTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    // SVGs inline icons
    const icons = {
        location: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "18",
            height: "18",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
                }, void 0, false, {
                    fileName: "[project]/src/components/Footer.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "12",
                    cy: "10",
                    r: "3"
                }, void 0, false, {
                    fileName: "[project]/src/components/Footer.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Footer.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, this),
        email: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "18",
            height: "18",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                }, void 0, false, {
                    fileName: "[project]/src/components/Footer.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                    points: "22,6 12,13 2,6"
                }, void 0, false, {
                    fileName: "[project]/src/components/Footer.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Footer.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this),
        user: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "18",
            height: "18",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                }, void 0, false, {
                    fileName: "[project]/src/components/Footer.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "12",
                    cy: "7",
                    r: "4"
                }, void 0, false, {
                    fileName: "[project]/src/components/Footer.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Footer.tsx",
            lineNumber: 47,
            columnNumber: 7
        }, this),
        facebook: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "18",
            height: "18",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
            }, void 0, false, {
                fileName: "[project]/src/components/Footer.tsx",
                lineNumber: 54,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Footer.tsx",
            lineNumber: 53,
            columnNumber: 7
        }, this),
        instagram: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "18",
            height: "18",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "2",
                    y: "2",
                    width: "20",
                    height: "20",
                    rx: "5",
                    ry: "5"
                }, void 0, false, {
                    fileName: "[project]/src/components/Footer.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                }, void 0, false, {
                    fileName: "[project]/src/components/Footer.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "17.5",
                    y1: "6.5",
                    x2: "17.51",
                    y2: "6.5"
                }, void 0, false, {
                    fileName: "[project]/src/components/Footer.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Footer.tsx",
            lineNumber: 58,
            columnNumber: 7
        }, this),
        youtube: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "18",
            height: "18",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"
                }, void 0, false, {
                    fileName: "[project]/src/components/Footer.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                    points: "9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"
                }, void 0, false, {
                    fileName: "[project]/src/components/Footer.tsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Footer.tsx",
            lineNumber: 65,
            columnNumber: 7
        }, this),
        linkedin: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "18",
            height: "18",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                }, void 0, false, {
                    fileName: "[project]/src/components/Footer.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "2",
                    y: "9",
                    width: "4",
                    height: "12"
                }, void 0, false, {
                    fileName: "[project]/src/components/Footer.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "4",
                    cy: "4",
                    r: "2"
                }, void 0, false, {
                    fileName: "[project]/src/components/Footer.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Footer.tsx",
            lineNumber: 71,
            columnNumber: 7
        }, this),
        arrowUp: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "18",
            height: "18",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "3",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "12",
                    y1: "19",
                    x2: "12",
                    y2: "5"
                }, void 0, false, {
                    fileName: "[project]/src/components/Footer.tsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                    points: "5,12 12,5 19,12"
                }, void 0, false, {
                    fileName: "[project]/src/components/Footer.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Footer.tsx",
            lineNumber: 78,
            columnNumber: 7
        }, this)
    };
    // 251.2 is the circumference of a circle with radius 40 (2 * pi * r)
    const strokeDashoffset = 251.2 - 251.2 * scrollProgress / 100;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "site-footer",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                        dangerouslySetInnerHTML: {
                            __html: `
          .site-footer {
            position: relative;
            background: linear-gradient(180deg, #1C2833 0%, #111a24 100%);
            border-top: 6px solid var(--primary);
            padding-top: 80px;
            overflow: hidden;
          }



          /* Interactive Social Row */
          .social-links {
            display: flex;
            gap: 12px;
            margin-top: 20px;
          }

          .social-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 38px;
            height: 38px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.05);
            color: #A0AAB2;
            transition: all var(--transition-fast);
            border: 1px solid rgba(255, 255, 255, 0.03);
          }

          .social-icon:hover {
            background: var(--primary);
            color: var(--white);
            transform: translateY(-4px) scale(1.08);
            box-shadow: 0 5px 15px rgba(0, 128, 128, 0.4);
          }

          /* Modern Contact details */
          .footer-contact-item {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            color: #A0AAB2;
            font-size: 0.9rem;
            line-height: 1.5;
            margin-bottom: 20px;
          }

          .footer-contact-icon {
            color: var(--accent);
            flex-shrink: 0;
            margin-top: 2px;
          }

          /* Premium Circular Scroll Button */
          .scroll-progress-btn {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 52px;
            height: 52px;
            border-radius: 50%;
            background: #1C2833;
            border: none;
            cursor: pointer;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--white);
            z-index: 999;
            opacity: 0;
            visibility: hidden;
            transform: translateY(20px) scale(0.9);
            transition: all var(--transition-normal) cubic-bezier(0.175, 0.885, 0.32, 1.275);
          }

          .scroll-progress-btn.visible {
            opacity: 1;
            visibility: visible;
            transform: translateY(0) scale(1);
          }

          .scroll-progress-btn:hover {
            transform: translateY(-4px) scale(1.05);
            box-shadow: 0 12px 30px rgba(0, 128, 128, 0.3);
            background: #2C3E50;
            color: var(--accent);
          }

          .scroll-progress-btn:hover svg.arrow-icon {
            animation: bounce-up 0.5s infinite alternate;
          }

          .scroll-progress-btn svg.progress-ring {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            transform: rotate(-90deg);
          }

          .scroll-progress-btn svg.progress-ring circle {
            fill: transparent;
            stroke-width: 4;
          }

          .scroll-progress-btn svg.progress-ring .ring-bg {
            stroke: rgba(255, 255, 255, 0.08);
          }

          .scroll-progress-btn svg.progress-ring .ring-fill {
            stroke: var(--accent);
            stroke-linecap: round;
            transition: stroke-dashoffset 0.1s;
          }

          @keyframes bounce-up {
            from { transform: translateY(0); }
            to { transform: translateY(-3px); }
          }
        `
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/Footer.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "footer-grid",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "footer-brand",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: [
                                            "Volunteer Sri Lanka With Diwasi ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Where stays become stories"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 219,
                                                columnNumber: 49
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 219,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "An impactful volunteer initiative focused on community empowerment, ethical development models, and unforgettable cross-cultural storytelling."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 220,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "social-links",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://www.facebook.com/share/1BupWRJmQs/?mibextid=wwXIfr",
                                                className: "social-icon",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                "aria-label": "Facebook",
                                                children: icons.facebook
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 224,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://www.instagram.com/diwasi.herath?igsh=MTRxc29nb2czcmhqMg%3D%3D&utm_source=qr",
                                                className: "social-icon",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                "aria-label": "Instagram",
                                                children: icons.instagram
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 227,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://youtube.com/@diwasiherath?si=aLIuuY8phvwxz8Tc",
                                                className: "social-icon",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                "aria-label": "YouTube",
                                                children: icons.youtube
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 230,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://www.linkedin.com/in/diwasi-herath-58a78b3b4?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
                                                className: "social-icon",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                "aria-label": "LinkedIn",
                                                children: icons.linkedin
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 233,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 223,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 218,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "footer-links-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        children: "Program Navigation"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 240,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "footer-links-list",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/",
                                                    onClick: (e)=>{
                                                        e.preventDefault();
                                                        scrollToTop();
                                                    },
                                                    children: "Home Dashboard"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 243,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 242,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/about",
                                                    children: "Our Mission & Vision"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 247,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 247,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/projects",
                                                    children: "Core Volunteer Tracks"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 248,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 248,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/places",
                                                    children: "Weekend Excursions"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 249,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 249,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/gallery",
                                                    children: "Field Photo Gallery"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 250,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 250,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/reviews",
                                                    children: "Volunteer Reviews"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 251,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 251,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/contact",
                                                    children: "Apply / Contact Us"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 252,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 252,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 241,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 239,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "footer-contact-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        children: "Get In Touch"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 257,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "footer-contact-list",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "footer-contact-item",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "footer-contact-icon",
                                                        children: icons.location
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Footer.tsx",
                                                        lineNumber: 260,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: "Our Volunteer Headquarters:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Footer.tsx",
                                                                lineNumber: 262,
                                                                columnNumber: 19
                                                            }, this),
                                                            "Northwestern province, Sri Lanka"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Footer.tsx",
                                                        lineNumber: 261,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 259,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "footer-contact-item",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "footer-contact-icon",
                                                        children: icons.email
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Footer.tsx",
                                                        lineNumber: 267,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: "Inquiries Email:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Footer.tsx",
                                                                lineNumber: 269,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: "mailto:diwasicherath@gmail.com",
                                                                style: {
                                                                    color: "#A0AAB2",
                                                                    textDecoration: "none"
                                                                },
                                                                children: "diwasicherath@gmail.com"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Footer.tsx",
                                                                lineNumber: 270,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Footer.tsx",
                                                        lineNumber: 268,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 266,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "footer-contact-item",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "footer-contact-icon",
                                                        children: icons.user
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Footer.tsx",
                                                        lineNumber: 274,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: "Official Program Director:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Footer.tsx",
                                                                lineNumber: 276,
                                                                columnNumber: 19
                                                            }, this),
                                                            "Diwasi Herath"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Footer.tsx",
                                                        lineNumber: 275,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 273,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 258,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 256,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Footer.tsx",
                        lineNumber: 217,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "footer-bottom",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                "© ",
                                new Date().getFullYear(),
                                " DIWASI Volunteer Sri Lanka Initiative. Designed for ethical tourism and sustainable global partnerships."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Footer.tsx",
                            lineNumber: 285,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Footer.tsx",
                        lineNumber: 284,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Footer.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: `scroll-progress-btn ${showBackToTop ? "visible" : ""}`,
                onClick: scrollToTop,
                "aria-label": "Scroll back to top",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "progress-ring",
                        viewBox: "0 0 100 100",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                className: "ring-bg",
                                cx: "50",
                                cy: "50",
                                r: "40"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 296,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                className: "ring-fill",
                                cx: "50",
                                cy: "50",
                                r: "40",
                                strokeDasharray: "251.2",
                                strokeDashoffset: strokeDashoffset
                            }, void 0, false, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 297,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Footer.tsx",
                        lineNumber: 295,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "arrow-icon",
                        style: {
                            zIndex: 2,
                            display: "flex",
                            alignItems: "center"
                        },
                        children: icons.arrowUp
                    }, void 0, false, {
                        fileName: "[project]/src/components/Footer.tsx",
                        lineNumber: 306,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Footer.tsx",
                lineNumber: 290,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(Footer, "BA8LFD9Y3YsM6c3ZdOHuqJ1XQEo=");
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/reviews.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_FORM_URL",
    ()=>DEFAULT_FORM_URL,
    "DEFAULT_REVIEWS",
    ()=>DEFAULT_REVIEWS,
    "DEFAULT_SHEET_URL",
    ()=>DEFAULT_SHEET_URL,
    "TRACK_NAMES",
    ()=>TRACK_NAMES,
    "cleanGoogleFormUrl",
    ()=>cleanGoogleFormUrl,
    "cleanGoogleSheetUrl",
    ()=>cleanGoogleSheetUrl,
    "fetchApprovedReviews",
    ()=>fetchApprovedReviews,
    "getAllLocalReviews",
    ()=>getAllLocalReviews,
    "getCustomSheetUrl",
    ()=>getCustomSheetUrl,
    "initializeLocalReviews",
    ()=>initializeLocalReviews,
    "mapRowToReview",
    ()=>mapRowToReview,
    "parseCSV",
    ()=>parseCSV,
    "resetLocalReviews",
    ()=>resetLocalReviews,
    "saveLocalReview",
    ()=>saveLocalReview,
    "setCustomSheetUrl",
    ()=>setCustomSheetUrl,
    "updateReviewApproval",
    ()=>updateReviewApproval
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const DEFAULT_REVIEWS = [
    {
        id: "rev-1",
        name: "Emma Watson",
        rating: 5,
        trackId: "school-dev",
        reviewText: "Teaching conversational English to kids at the local school was the highlight of my trip. The community was so welcoming, and Diwasi Herath and his team made sure we had everything we needed to succeed. The smiles on the kids' faces are something I will never forget!",
        date: "2026-05-15",
        approved: true,
        packageTier: "premium",
        country: "United Kingdom"
    },
    {
        id: "rev-2",
        name: "James Smith",
        rating: 5,
        trackId: "paddy-field",
        reviewText: "Getting into the mud and learning traditional rice cultivation was challenging but incredibly rewarding. The local farming families taught us centuries-old techniques. The premium homestay food was absolute heaven after a hard day of work!",
        date: "2026-06-02",
        approved: true,
        packageTier: "premium",
        country: "United States"
    },
    {
        id: "rev-3",
        name: "Sophia Loren",
        rating: 4,
        trackId: "bakery-food",
        reviewText: "Loved working in the community micro-bakery! The wood-fired ovens and local recipes are fascinating. It was great to support small local entrepreneurs. I recommend the Ultimate package for the extra comfort and transport.",
        date: "2026-04-20",
        approved: true,
        packageTier: "ultimate",
        country: "Italy"
    },
    {
        id: "rev-4",
        name: "Aravind Nair",
        rating: 5,
        trackId: "monk-english",
        reviewText: "Teaching English to the Buddhist monks at the monastic school was a deeply spiritual and peaceful experience. The monks are eager learners and highly respectful. I gained a lot of perspective on mindfulness and local culture.",
        date: "2026-05-30",
        approved: true,
        packageTier: "standard",
        country: "India"
    },
    {
        id: "rev-5",
        name: "Mia Johnson",
        rating: 4,
        trackId: "adult-care",
        reviewText: "Spending time with the elderly at the care home was a touching experience. We organized arts and crafts, physical exercises, and shared stories. The project was well-organized, and the staff are incredibly dedicated.",
        date: "2026-06-10",
        approved: true,
        packageTier: "standard",
        country: "Canada"
    },
    {
        id: "rev-6",
        name: "Lukas Müller",
        rating: 5,
        trackId: "cultural-exploration",
        reviewText: "The cultural exploration track was a fantastic dive into Sri Lanka's heritage. From learning local cooking to exploring ancient temples, every day was a new adventure. The ultimate package was worth every cent for the custom tours.",
        date: "2026-05-01",
        approved: true,
        packageTier: "ultimate",
        country: "Germany"
    }
];
const TRACK_NAMES = {
    "school-dev": "School Development Project",
    "preschool-dev": "Preschool Development Initiative",
    "adult-care": "Adult Care Home Wellness",
    "monk-english": "English for Buddhist Monks",
    "paddy-field": "Paddy Field & Rural Heritage",
    "cultural-exploration": "Social & Cultural Exploration",
    "industrial-tour": "Industrial, Craft & Education Tour",
    "ayurveda-wellness": "Ayurvedic Medicine & Wellness",
    "bakery-food": "Bakery & Traditional Food Sharing"
};
function parseCSV(csvText) {
    const lines = csvText.split(/\r?\n/);
    if (lines.length === 0 || !lines[0]) return [];
    // Parse header line
    const headers = parseCSVLine(lines[0]);
    const results = [];
    for(let i = 1; i < lines.length; i++){
        const line = lines[i];
        if (!line.trim()) continue;
        const row = parseCSVLine(line);
        const obj = {};
        headers.forEach((header, index)=>{
            let val = row[index] || "";
            obj[header.trim()] = val.trim();
        });
        results.push(obj);
    }
    return results;
}
function parseCSVLine(line) {
    const row = [];
    let insideQuote = false;
    let entry = "";
    for(let j = 0; j < line.length; j++){
        const char = line[j];
        if (char === '"') {
            // Toggle quote state
            insideQuote = !insideQuote;
        } else if (char === "," && !insideQuote) {
            // Field separator
            row.push(entry);
            entry = "";
        } else {
            entry += char;
        }
    }
    row.push(entry);
    // Clean enclosing quotes
    return row.map((val)=>val.replace(/^"|"$/g, "").replace(/""/g, '"'));
}
function mapRowToReview(row, index) {
    const keys = Object.keys(row);
    // Find case-insensitive keys that match our fields
    const findVal = (possibleHeaders)=>{
        const foundKey = keys.find((k)=>possibleHeaders.some((ph)=>k.toLowerCase().includes(ph.toLowerCase())));
        return foundKey ? row[foundKey] : "";
    };
    const name = findVal([
        "name",
        "who",
        "volunteer",
        "author"
    ]) || "Anonymous Volunteer";
    const ratingStr = findVal([
        "rating",
        "score",
        "star",
        "grade",
        "rate"
    ]);
    const rating = Math.min(5, Math.max(1, parseInt(ratingStr) || 5));
    const rawTrack = findVal([
        "track",
        "project",
        "program",
        "module"
    ]);
    // Try to match track name or track ID
    let trackId = "school-dev";
    const lowerTrack = rawTrack.toLowerCase();
    for (const [id, name] of Object.entries(TRACK_NAMES)){
        if (lowerTrack.includes(id) || lowerTrack.includes(name.toLowerCase())) {
            trackId = id;
            break;
        }
    }
    const reviewText = findVal([
        "review",
        "text",
        "comment",
        "testimonial",
        "experience",
        "story"
    ]) || "No review content provided.";
    const dateRaw = findVal([
        "timestamp",
        "date",
        "time"
    ]);
    let date = "2026-06-23";
    if (dateRaw) {
        try {
            // Just extract YYYY-MM-DD from timestamp
            const match = dateRaw.match(/^(\d{4}[-/]\d{1,2}[-/]\d{1,2})|(\d{1,2}[-/]\d{1,2}[-/]\d{4})/);
            if (match) {
                date = match[0].replace(/\//g, "-");
            } else {
                // Fallback to simpler parse or just date
                const d = new Date(dateRaw);
                if (!isNaN(d.getTime())) {
                    date = d.toISOString().split("T")[0];
                }
            }
        } catch  {
        // use fallback
        }
    }
    const approvedStr = findVal([
        "approved",
        "status",
        "approve",
        "publish"
    ]);
    // If spreadsheet doesn't have an "approved" column, default to true!
    // Otherwise, check if it starts with 'y', 't', 'a' (yes, true, approved)
    const hasApprovedColumn = keys.some((k)=>[
            "approved",
            "status",
            "approve",
            "publish"
        ].some((ph)=>k.toLowerCase().includes(ph)));
    const approved = hasApprovedColumn ? [
        "yes",
        "true",
        "approved",
        "y",
        "t",
        "1"
    ].includes(approvedStr.toLowerCase().trim()) : true;
    const rawPackage = findVal([
        "package",
        "tier",
        "price"
    ]);
    let packageTier = "standard";
    const lowerPkg = rawPackage.toLowerCase();
    if (lowerPkg.includes("premium")) packageTier = "premium";
    else if (lowerPkg.includes("ultimate")) packageTier = "ultimate";
    const country = findVal([
        "country",
        "nation",
        "origin",
        "home"
    ]) || "Global Citizen";
    return {
        id: `gs-${index}`,
        name,
        rating,
        trackId,
        reviewText,
        date,
        approved,
        packageTier,
        country
    };
}
// Browser localStorage key names
const LKEY_REVIEWS = "diwasi_local_reviews";
const LKEY_SHEET_URL = "diwasi_gs_csv_url";
const DEFAULT_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdLMQ_SvQ8e4iHz2AFEGCUJZRsAbQK0qfHX-yv67RKsj9cvsw/viewform?usp=preview";
const DEFAULT_SHEET_URL = "https://docs.google.com/spreadsheets/d/1RlQ60yO_xUO3mRoytSKH4NQXaHyq1vlQuM2lEvms9W8/edit?usp=sharing";
function cleanGoogleSheetUrl(url) {
    if (!url) return "";
    const trimmed = url.trim();
    const match = trimmed.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);
    if (match && match[1]) {
        return `https://docs.google.com/spreadsheets/d/${match[1]}/export?format=csv`;
    }
    return trimmed;
}
function cleanGoogleFormUrl(url) {
    if (!url) return "";
    const trimmed = url.trim();
    if (trimmed.includes("embedded=true")) return trimmed;
    const baseUrl = trimmed.split("?")[0];
    return `${baseUrl}?embedded=true`;
}
function getCustomSheetUrl() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const saved = localStorage.getItem(LKEY_SHEET_URL);
    if (saved) return cleanGoogleSheetUrl(saved);
    const envUrl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_GOOGLE_SHEET_CSV_URL;
    if (envUrl) return cleanGoogleSheetUrl(envUrl);
    return cleanGoogleSheetUrl(DEFAULT_SHEET_URL);
}
function setCustomSheetUrl(url) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if (url) {
        localStorage.setItem(LKEY_SHEET_URL, url);
    } else {
        localStorage.removeItem(LKEY_SHEET_URL);
    }
}
function initializeLocalReviews() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if (!localStorage.getItem(LKEY_REVIEWS)) {
        localStorage.setItem(LKEY_REVIEWS, JSON.stringify(DEFAULT_REVIEWS));
    }
}
function getAllLocalReviews() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    initializeLocalReviews();
    try {
        const raw = localStorage.getItem(LKEY_REVIEWS);
        return raw ? JSON.parse(raw) : DEFAULT_REVIEWS;
    } catch  {
        return DEFAULT_REVIEWS;
    }
}
function saveLocalReview(review) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    initializeLocalReviews();
    const current = getAllLocalReviews();
    // Prevent duplicate IDs
    const filtered = current.filter((r)=>r.id !== review.id);
    const updated = [
        review,
        ...filtered
    ];
    localStorage.setItem(LKEY_REVIEWS, JSON.stringify(updated));
}
function updateReviewApproval(id, approved) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    initializeLocalReviews();
    const current = getAllLocalReviews();
    const updated = current.map((r)=>r.id === id ? {
            ...r,
            approved
        } : r);
    localStorage.setItem(LKEY_REVIEWS, JSON.stringify(updated));
}
function resetLocalReviews() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    localStorage.setItem(LKEY_REVIEWS, JSON.stringify(DEFAULT_REVIEWS));
}
async function fetchApprovedReviews() {
    const sheetUrl = getCustomSheetUrl();
    if (sheetUrl) {
        try {
            // Use CORS proxy if needed, but Google Sheets published CSV supports direct CORS requests from anywhere!
            const res = await fetch(sheetUrl, {
                cache: "no-store"
            });
            if (!res.ok) throw new Error("Failed to fetch Google Sheets CSV data");
            const csvText = await res.text();
            const parsedRows = parseCSV(csvText);
            const reviews = parsedRows.map((row, idx)=>mapRowToReview(row, idx));
            return reviews.filter((r)=>r.approved);
        } catch (err) {
            console.error("Error fetching reviews from Google Sheets:", err);
            // Fall back to local reviews on failure
            const local = getAllLocalReviews();
            return local.filter((r)=>r.approved);
        }
    }
    // Default to localStorage
    const local = getAllLocalReviews();
    return local.filter((r)=>r.approved);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/reviews/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ReviewsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Navbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$reviews$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/reviews.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const PACKAGES = {
    standard: "Standard Tier",
    premium: "Premium Tier",
    ultimate: "Ultimate Tier"
};
function ReviewsPage() {
    _s();
    const [reviews, setReviews] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedTrack, setSelectedTrack] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [selectedRating, setSelectedRating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    // Modal state
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Stats
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        average: 0,
        total: 0,
        counts: [
            0,
            0,
            0,
            0,
            0
        ] // 1, 2, 3, 4, 5 stars
    });
    const loadData = async ()=>{
        setLoading(true);
        const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$reviews$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchApprovedReviews"])();
        setReviews(data);
        // Calculate stats
        if (data.length > 0) {
            const sum = data.reduce((acc, curr)=>acc + curr.rating, 0);
            const avg = parseFloat((sum / data.length).toFixed(1));
            const cnts = [
                0,
                0,
                0,
                0,
                0
            ];
            data.forEach((r)=>{
                if (r.rating >= 1 && r.rating <= 5) {
                    cnts[r.rating - 1]++;
                }
            });
            setStats({
                average: avg,
                total: data.length,
                counts: cnts
            });
        } else {
            setStats({
                average: 0,
                total: 0,
                counts: [
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            });
        }
        setLoading(false);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReviewsPage.useEffect": ()=>{
            loadData();
            // IntersectionObserver for scroll animations
            const revealElements = document.querySelectorAll(".reveal");
            const observer = new IntersectionObserver({
                "ReviewsPage.useEffect": (entries)=>{
                    entries.forEach({
                        "ReviewsPage.useEffect": (entry)=>{
                            if (entry.isIntersecting) {
                                entry.target.classList.add("is-visible");
                                observer.unobserve(entry.target);
                            }
                        }
                    }["ReviewsPage.useEffect"]);
                }
            }["ReviewsPage.useEffect"], {
                threshold: 0.1
            });
            revealElements.forEach({
                "ReviewsPage.useEffect": (el)=>observer.observe(el)
            }["ReviewsPage.useEffect"]);
            return ({
                "ReviewsPage.useEffect": ()=>observer.disconnect()
            })["ReviewsPage.useEffect"];
        }
    }["ReviewsPage.useEffect"], []);
    // Filtered reviews
    const filteredReviews = reviews.filter((r)=>{
        const matchesSearch = r.name.toLowerCase().includes(searchQuery.toLowerCase()) || r.reviewText.toLowerCase().includes(searchQuery.toLowerCase()) || r.country.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesTrack = selectedTrack === "all" || r.trackId === selectedTrack;
        const matchesRating = selectedRating === "all" || r.rating.toString() === selectedRating;
        return matchesSearch && matchesTrack && matchesRating;
    });
    const getInitials = (name)=>{
        const parts = name.split(" ");
        if (parts.length >= 2) {
            return (parts[0][0] + parts[1][0]).toUpperCase();
        }
        return name.slice(0, 2).toUpperCase();
    };
    const getAvatarGradient = (name)=>{
        const colors = [
            "linear-gradient(135deg, #008080 0%, #006666 100%)",
            "linear-gradient(135deg, #FFBF00 0%, #e6ac00 100%)",
            "linear-gradient(135deg, #2C3E50 0%, #1A252F 100%)",
            "linear-gradient(135deg, #188038 0%, #115c28 100%)",
            "linear-gradient(135deg, #3f51b5 0%, #283593 100%)"
        ];
        let sum = 0;
        for(let i = 0; i < name.length; i++)sum += name.charCodeAt(i);
        return colors[sum % colors.length];
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                currentPage: "reviews"
            }, void 0, false, {
                fileName: "[project]/src/app/reviews/page.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                dangerouslySetInnerHTML: {
                    __html: `
        .reviews-layout {
          max-width: 1200px;
          margin: 40px auto;
          padding: 0 20px;
          display: grid;
          grid-template-columns: 320px 1fr;
          gap: 30px;
        }

        @media (max-width: 900px) {
          .reviews-layout {
            grid-template-columns: 1fr;
          }
        }

        .stats-card {
          background: var(--white);
          border-radius: 12px;
          padding: 24px;
          border: 1px solid var(--gray-200);
          box-shadow: var(--shadow-sm);
        }

        .stats-large {
          display: flex;
          align-items: baseline;
          gap: 10px;
          margin-bottom: 15px;
        }

        .stats-number {
          font-size: 3rem;
          font-weight: 800;
          color: var(--primary);
          line-height: 1;
        }

        .stats-stars {
          font-size: 1.25rem;
          color: var(--accent);
        }

        .stats-bar-container {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 8px;
          font-size: 0.85rem;
          color: var(--gray-600);
        }

        .stats-bar-bg {
          flex-grow: 1;
          height: 8px;
          background: var(--gray-100);
          border-radius: 4px;
          overflow: hidden;
        }

        .stats-bar-fill {
          height: 100%;
          background: var(--accent);
          border-radius: 4px;
        }

        .filter-section {
          background: var(--white);
          border-radius: 12px;
          padding: 24px;
          border: 1px solid var(--gray-200);
          box-shadow: var(--shadow-sm);
          margin-top: 20px;
        }

        .filter-title {
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 15px;
          color: var(--dark);
          border-bottom: 2px solid var(--gray-100);
          padding-bottom: 8px;
        }

        .filter-group {
          margin-bottom: 15px;
        }

        .filter-group label {
          display: block;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 6px;
          color: var(--gray-700);
        }

        .filter-input, .filter-select {
          width: 100%;
          padding: 10px 12px;
          border: 1px solid var(--gray-300);
          border-radius: 8px;
          font-size: 0.95rem;
          background: var(--white);
          color: var(--dark);
          transition: border-color var(--transition-fast);
        }

        .filter-input:focus, .filter-select:focus {
          outline: none;
          border-color: var(--primary);
        }

        .reviews-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }

        .review-card {
          background: var(--white);
          border-radius: 12px;
          padding: 24px;
          border: 1px solid var(--gray-200);
          box-shadow: var(--shadow-sm);
          position: relative;
          transition: transform var(--transition-normal), box-shadow var(--transition-normal);
        }

        .review-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
        }

        .review-header {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 15px;
        }

        .review-avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 700;
          font-size: 1.1rem;
        }

        .review-user-info h3 {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--dark);
          margin-bottom: 2px;
        }

        .review-user-info p {
          font-size: 0.8rem;
          color: var(--gray-600);
        }

        .review-rating-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .review-stars {
          color: var(--accent);
          font-size: 1rem;
        }

        .review-date {
          font-size: 0.8rem;
          color: var(--gray-600);
        }

        .review-text {
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--dark);
          margin-bottom: 15px;
          position: relative;
        }

        .review-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .review-badge {
          font-size: 0.75rem;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: 20px;
        }

        .badge-track {
          background: rgba(0, 128, 128, 0.08);
          color: var(--primary);
          border: 1px solid rgba(0, 128, 128, 0.15);
        }

        .badge-tier {
          background: rgba(255, 191, 0, 0.08);
          color: #d49c00;
          border: 1px solid rgba(255, 191, 0, 0.2);
        }

        /* Modal Custom Styling Override */
        .modal-close {
          z-index: 10;
        }

        .star-picker {
          display: flex;
          gap: 6px;
          font-size: 1.75rem;
          margin-bottom: 15px;
        }

        .star-picker-btn {
          background: none;
          border: none;
          cursor: pointer;
          color: var(--gray-300);
          transition: color var(--transition-fast), transform var(--transition-fast);
          padding: 0;
        }

        .star-picker-btn:hover {
          transform: scale(1.15);
        }

        .star-picker-btn.filled {
          color: var(--accent);
        }

        .write-review-hero {
          background: linear-gradient(135deg, rgba(0,128,128,0.05) 0%, rgba(255,191,0,0.05) 100%);
          border-radius: 12px;
          padding: 30px;
          border: 1px dashed var(--primary);
          text-align: center;
          margin-bottom: 30px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;
        }

        .no-results {
          text-align: center;
          padding: 40px;
          background: var(--white);
          border-radius: 12px;
          border: 1px solid var(--gray-200);
          color: var(--gray-600);
        }

        .success-box {
          text-align: center;
          padding: 30px 10px;
        }

        .success-icon {
          font-size: 3rem;
          color: var(--success);
          margin-bottom: 15px;
        }
      `
                }
            }, void 0, false, {
                fileName: "[project]/src/app/reviews/page.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "page-header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: "Volunteer Reviews & Stories"
                    }, void 0, false, {
                        fileName: "[project]/src/app/reviews/page.tsx",
                        lineNumber: 395,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Real experiences from our global community of change-makers in Sri Lanka"
                    }, void 0, false, {
                        fileName: "[project]/src/app/reviews/page.tsx",
                        lineNumber: 396,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/reviews/page.tsx",
                lineNumber: 394,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "reviews-layout",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "reveal",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "stats-card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: "Community Rating"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/reviews/page.tsx",
                                        lineNumber: 403,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "stats-large",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "stats-number",
                                                children: stats.average || "0.0"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/reviews/page.tsx",
                                                lineNumber: 405,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "stats-stars",
                                                        children: "★".repeat(Math.round(stats.average)) + "☆".repeat(5 - Math.round(stats.average))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/reviews/page.tsx",
                                                        lineNumber: 407,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: "0.8rem",
                                                            color: "var(--gray-600)"
                                                        },
                                                        children: [
                                                            "Based on ",
                                                            stats.total,
                                                            " reviews"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/reviews/page.tsx",
                                                        lineNumber: 410,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/reviews/page.tsx",
                                                lineNumber: 406,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/reviews/page.tsx",
                                        lineNumber: 404,
                                        columnNumber: 13
                                    }, this),
                                    [
                                        5,
                                        4,
                                        3,
                                        2,
                                        1
                                    ].map((stars)=>{
                                        const count = stats.counts[stars - 1] || 0;
                                        const percentage = stats.total > 0 ? count / stats.total * 100 : 0;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "stats-bar-container",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        width: "40px"
                                                    },
                                                    children: [
                                                        stars,
                                                        " Star"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/reviews/page.tsx",
                                                    lineNumber: 422,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "stats-bar-bg",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "stats-bar-fill",
                                                        style: {
                                                            width: `${percentage}%`
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/reviews/page.tsx",
                                                        lineNumber: 424,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/reviews/page.tsx",
                                                    lineNumber: 423,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        width: "25px",
                                                        textAlign: "right"
                                                    },
                                                    children: count
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/reviews/page.tsx",
                                                    lineNumber: 426,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, stars, true, {
                                            fileName: "[project]/src/app/reviews/page.tsx",
                                            lineNumber: 421,
                                            columnNumber: 17
                                        }, this);
                                    })
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/reviews/page.tsx",
                                lineNumber: 402,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "filter-section",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "filter-title",
                                        children: "Filter & Search"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/reviews/page.tsx",
                                        lineNumber: 433,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "filter-group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "search",
                                                children: "Search Keywords"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/reviews/page.tsx",
                                                lineNumber: 436,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                id: "search",
                                                className: "filter-input",
                                                placeholder: "Name, country, comments...",
                                                value: searchQuery,
                                                onChange: (e)=>setSearchQuery(e.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/reviews/page.tsx",
                                                lineNumber: 437,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/reviews/page.tsx",
                                        lineNumber: 435,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "filter-group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "track",
                                                children: "Volunteer Track"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/reviews/page.tsx",
                                                lineNumber: 448,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                id: "track",
                                                className: "filter-select",
                                                value: selectedTrack,
                                                onChange: (e)=>setSelectedTrack(e.target.value),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "all",
                                                        children: "All Project Tracks"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/reviews/page.tsx",
                                                        lineNumber: 455,
                                                        columnNumber: 17
                                                    }, this),
                                                    Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$reviews$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRACK_NAMES"]).map(([id, name])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: id,
                                                            children: name
                                                        }, id, false, {
                                                            fileName: "[project]/src/app/reviews/page.tsx",
                                                            lineNumber: 457,
                                                            columnNumber: 19
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/reviews/page.tsx",
                                                lineNumber: 449,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/reviews/page.tsx",
                                        lineNumber: 447,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "filter-group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "rating",
                                                children: "Star Rating"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/reviews/page.tsx",
                                                lineNumber: 463,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                id: "rating",
                                                className: "filter-select",
                                                value: selectedRating,
                                                onChange: (e)=>setSelectedRating(e.target.value),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "all",
                                                        children: "All Ratings"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/reviews/page.tsx",
                                                        lineNumber: 470,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "5",
                                                        children: "5 Stars"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/reviews/page.tsx",
                                                        lineNumber: 471,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "4",
                                                        children: "4 Stars"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/reviews/page.tsx",
                                                        lineNumber: 472,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "3",
                                                        children: "3 Stars"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/reviews/page.tsx",
                                                        lineNumber: 473,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "2",
                                                        children: "2 Stars"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/reviews/page.tsx",
                                                        lineNumber: 474,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "1",
                                                        children: "1 Star"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/reviews/page.tsx",
                                                        lineNumber: 475,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/reviews/page.tsx",
                                                lineNumber: 464,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/reviews/page.tsx",
                                        lineNumber: 462,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "btn-outline",
                                        style: {
                                            width: "100%",
                                            marginTop: "10px",
                                            padding: "10px"
                                        },
                                        onClick: ()=>{
                                            setSearchQuery("");
                                            setSelectedTrack("all");
                                            setSelectedRating("all");
                                        },
                                        children: "Clear All Filters"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/reviews/page.tsx",
                                        lineNumber: 479,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/reviews/page.tsx",
                                lineNumber: 432,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/reviews/page.tsx",
                        lineNumber: 401,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "reveal",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "write-review-hero",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            fontSize: "1.3rem",
                                            fontWeight: "700",
                                            color: "var(--dark)"
                                        },
                                        children: "Did you volunteer with Diwasi Sri Lanka?"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/reviews/page.tsx",
                                        lineNumber: 497,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: "0.95rem",
                                            color: "var(--gray-600)",
                                            maxWidth: "550px"
                                        },
                                        children: "Your feedback helps us refine our community projects and guides future volunteers on their journeys. Share your story with us today!"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/reviews/page.tsx",
                                        lineNumber: 500,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            gap: "12px",
                                            marginTop: "5px"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "btn-primary",
                                            onClick: ()=>setIsModalOpen(true),
                                            children: "Write a Review"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/reviews/page.tsx",
                                            lineNumber: 504,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/reviews/page.tsx",
                                        lineNumber: 503,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/reviews/page.tsx",
                                lineNumber: 496,
                                columnNumber: 11
                            }, this),
                            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    textAlign: "center",
                                    padding: "60px 0"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "loading-spinner",
                                        style: {
                                            width: "40px",
                                            height: "40px",
                                            border: "4px solid var(--gray-200)",
                                            borderTopColor: "var(--primary)",
                                            borderRadius: "50%",
                                            animation: "spin 1s linear infinite",
                                            margin: "0 auto 15px auto"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/reviews/page.tsx",
                                        lineNumber: 512,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Loading approved reviews..."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/reviews/page.tsx",
                                        lineNumber: 521,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                                        children: `
                @keyframes spin {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(360deg); }
                }
              `
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/reviews/page.tsx",
                                        lineNumber: 522,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/reviews/page.tsx",
                                lineNumber: 511,
                                columnNumber: 13
                            }, this) : filteredReviews.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "reviews-grid",
                                children: filteredReviews.map((rev)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                        className: "review-card",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "review-header",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "review-avatar",
                                                        style: {
                                                            background: getAvatarGradient(rev.name)
                                                        },
                                                        children: getInitials(rev.name)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/reviews/page.tsx",
                                                        lineNumber: 534,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "review-user-info",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                children: rev.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/reviews/page.tsx",
                                                                lineNumber: 538,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: [
                                                                    "Volunteer from ",
                                                                    rev.country
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/reviews/page.tsx",
                                                                lineNumber: 539,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/reviews/page.tsx",
                                                        lineNumber: 537,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/reviews/page.tsx",
                                                lineNumber: 533,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "review-rating-row",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "review-stars",
                                                        children: "★".repeat(rev.rating) + "☆".repeat(5 - rev.rating)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/reviews/page.tsx",
                                                        lineNumber: 544,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "review-date",
                                                        children: rev.date
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/reviews/page.tsx",
                                                        lineNumber: 547,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/reviews/page.tsx",
                                                lineNumber: 543,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "review-text",
                                                children: [
                                                    '"',
                                                    rev.reviewText,
                                                    '"'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/reviews/page.tsx",
                                                lineNumber: 550,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "review-badges",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "review-badge badge-track",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$reviews$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRACK_NAMES"][rev.trackId] || rev.trackId
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/reviews/page.tsx",
                                                        lineNumber: 553,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "review-badge badge-tier",
                                                        children: PACKAGES[rev.packageTier] || rev.packageTier
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/reviews/page.tsx",
                                                        lineNumber: 556,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/reviews/page.tsx",
                                                lineNumber: 552,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, rev.id, true, {
                                        fileName: "[project]/src/app/reviews/page.tsx",
                                        lineNumber: 532,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/reviews/page.tsx",
                                lineNumber: 530,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "no-results",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: "No Reviews Found"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/reviews/page.tsx",
                                        lineNumber: 565,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            marginTop: "10px"
                                        },
                                        children: "Try adjusting your keywords, project track filters, or star rating selectors to find what you are looking for."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/reviews/page.tsx",
                                        lineNumber: 566,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/reviews/page.tsx",
                                lineNumber: 564,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/reviews/page.tsx",
                        lineNumber: 494,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/reviews/page.tsx",
                lineNumber: 399,
                columnNumber: 7
            }, this),
            isModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "modal-overlay active",
                onClick: ()=>setIsModalOpen(false),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "modal-container",
                    style: {
                        maxWidth: "600px",
                        padding: "30px"
                    },
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "modal-close",
                            onClick: ()=>setIsModalOpen(false),
                            "aria-label": "Close modal",
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/src/app/reviews/page.tsx",
                            lineNumber: 576,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            style: {
                                marginBottom: "20px",
                                borderBottom: "2px solid var(--gray-100)",
                                paddingBottom: "10px"
                            },
                            children: "Submit Volunteer Review"
                        }, void 0, false, {
                            fileName: "[project]/src/app/reviews/page.tsx",
                            lineNumber: 578,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                minHeight: "450px"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$reviews$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cleanGoogleFormUrl"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$reviews$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_FORM_URL"]),
                                title: "Submit Volunteer Review",
                                style: {
                                    width: "100%",
                                    height: "550px",
                                    border: "none",
                                    borderRadius: "8px",
                                    background: "var(--white)"
                                },
                                children: "Loading form..."
                            }, void 0, false, {
                                fileName: "[project]/src/app/reviews/page.tsx",
                                lineNumber: 583,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/reviews/page.tsx",
                            lineNumber: 582,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/reviews/page.tsx",
                    lineNumber: 575,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/reviews/page.tsx",
                lineNumber: 574,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/reviews/page.tsx",
                lineNumber: 601,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(ReviewsPage, "DwWxMWVF+50LX6H01QrM+Q6KURE=");
_c = ReviewsPage;
var _c;
__turbopack_context__.k.register(_c, "ReviewsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0ncp-at._.js.map