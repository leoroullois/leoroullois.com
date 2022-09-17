"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3130:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/loading-screen.tsx


const LoadingScreen = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex justify-center items-center fixed inset-0 bg-blue-500",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "flex h-16 w-16 border-4 border-white/20 border-l-white rounded-full animate-spin"
        })
    });
};
/* harmony default export */ const loading_screen = (LoadingScreen);

// EXTERNAL MODULE: external "react-icons/io5"
var io5_ = __webpack_require__(9989);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
;// CONCATENATED MODULE: ./src/hooks/use-outside-click.ts

const useOutsideClick = (ref, callback)=>{
    const handleCLick = (e)=>{
        if (ref.current && !ref.current.contains(e.target)) {
            callback();
        }
    };
    (0,external_react_.useEffect)(()=>{
        document.addEventListener("click", handleCLick);
        return ()=>{
            document.removeEventListener("click", handleCLick);
        };
    });
};

;// CONCATENATED MODULE: ./src/components/_common/lang-select.tsx





const LangSelect = ({ defaultValue , options  })=>{
    const { 0: isOpen , 1: setIsOpen  } = (0,external_react_.useState)(false);
    const { 0: current , 1: setCurrent  } = (0,external_react_.useState)(defaultValue ?? "fr");
    const toggle = ()=>{
        setIsOpen((isOpen)=>!isOpen);
    };
    const handleClick = (value)=>{
        setCurrent(value);
        setIsOpen(false);
    };
    const ref = (0,external_react_.useRef)(null);
    const handler = (e)=>{
        console.log("click outside", e);
        setIsOpen(false);
    };
    useOutsideClick(ref, handler);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "relative w-16",
        ref: ref,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                onClick: toggle,
                className: external_clsx_default()("flex flex-row justify-between items-center gap-x-1 text-lg font-bold cursor-pointer text-gray-50 duration-150", "hover:text-gray-200"),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: current.toUpperCase()
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(io5_.IoChevronDown, {
                        className: "text-3xl"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                className: external_clsx_default()("absolute  z-50 left-0 right-0 text-gray-900 border bg-gray-50 border-gray-300 rounded", {
                    hidden: !isOpen
                }),
                children: options.map(({ value , label  }, i)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: external_clsx_default()("duration-100 py-1", "hover:bg-gray-200 "),
                        onClick: ()=>handleClick(value),
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: "text-center w-full border-gray-300/40",
                            children: label
                        })
                    }, i))
            })
        ]
    });
};
/* harmony default export */ const lang_select = (LangSelect);

// EXTERNAL MODULE: ./src/components/_common/wrapper.tsx
var wrapper = __webpack_require__(9376);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/navbar.tsx






const NavBar = ({ links , icons , toggleMenu , isOpen , setIsOpen  })=>{
    const ref = (0,external_react_.useRef)(null);
    const outsideClickHandler = ()=>{
        if (isOpen) {
            setIsOpen(false);
        }
    };
    useOutsideClick(ref, outsideClickHandler);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        ref: ref,
        className: external_clsx_default()("z-40 flex flex-col  bg-gray-50 min-w-min w-48 mb-10 h-screen fixed right-0 top-0 gap-y-6 px-9 py-4 shadow duration-200", {
            "translate-x-full ": !isOpen,
            "backdrop-brightness-50": isOpen
        }, "md:translate-x-0 md:static md:flex-row md:items-center md:justify-between md:w-full md:rounded-lg md:h-auto"),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(io5_.IoClose, {
                onClick: toggleMenu,
                className: external_clsx_default()("self-end text-4xl cursor-pointer", "md:hidden")
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: external_clsx_default()("flex flex-col gap-y-3", "md:flex-row md:justify-evenly md:gap-x-5"),
                children: links.map(({ href , label  }, i)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: href,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: external_clsx_default()("cursor-hover", "inline-block relative font-semibold duration-100", "before:duration-100 before:opacity-0 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500", "hover:text-white hover:before:opacity-100 "),
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: external_clsx_default()("relative"),
                                children: label
                            })
                        })
                    }, i))
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: external_clsx_default()("flex flex-row gap-x-3 mt-6", "md:mt-0"),
                children: icons.map(({ href , icon  }, i)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: href,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: external_clsx_default()("cursor-hover", "flex justify-center items-center"),
                            children: icon
                        })
                    }, i))
            })
        ]
    });
};
/* harmony default export */ const navbar = (NavBar);

;// CONCATENATED MODULE: external "react-icons/io"
const io_namespaceObject = require("react-icons/io");
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/root-me.svg
/* harmony default export */ const root_me = ({"src":"/_next/static/media/root-me.67f89e36.svg","height":595,"width":595});
;// CONCATENATED MODULE: ./src/components/logos/root-me.tsx


// import React from 'react';

const RootMe = ()=>{
    const n = 26;
    return /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
        src: root_me,
        height: n,
        width: n,
        alt: "Root-Me"
    });
};
/* harmony default export */ const logos_root_me = (RootMe);

;// CONCATENATED MODULE: ./src/components/header.tsx









const Header = ()=>{
    const { 0: isOpen , 1: setIsOpen  } = (0,external_react_.useState)(false);
    const toggleMenu = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        setIsOpen((isOpen)=>!isOpen);
    };
    const links = [
        {
            href: "/",
            label: "Home"
        },
        {
            href: "#about",
            label: "About me"
        },
        {
            href: "#skills",
            label: "Skills"
        },
        {
            href: "#portfolio",
            label: "Portfolio"
        },
        {
            href: "#contact",
            label: "Contact"
        }, 
    ];
    const icons = [
        {
            href: "https://github.com/leoroullois",
            icon: /*#__PURE__*/ jsx_runtime_.jsx(io_namespaceObject.IoLogoGithub, {
                className: "text-2xl"
            })
        },
        {
            href: "https://twitter.com/leoroullois",
            icon: /*#__PURE__*/ jsx_runtime_.jsx(io_namespaceObject.IoLogoTwitter, {
                className: "text-2xl"
            })
        },
        {
            href: "https://www.root-me.org/0xLEY0",
            icon: /*#__PURE__*/ jsx_runtime_.jsx(logos_root_me, {})
        }, 
    ];
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: "bg-blue-600 py-5",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(wrapper/* default */.Z, {
            className: "flex-col gap-y-12",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                    className: "flex flex-row justify-between items-center text-xl",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: external_clsx_default()("font-bold text-gray-50 font-serif", "sm:text-5xl"),
                            children: "L\xe9o Roullois"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex items-center gap-x-9",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(lang_select, {
                                    defaultValue: "fr",
                                    options: [
                                        {
                                            value: "fr",
                                            label: "FR"
                                        },
                                        {
                                            value: "en",
                                            label: "EN"
                                        }, 
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(io5_.IoMenu, {
                                    className: external_clsx_default()("text-3xl text-gray-50 cursor-pointer", "md:hidden"),
                                    onClick: toggleMenu
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(navbar, {
                    toggleMenu: toggleMenu,
                    isOpen: isOpen,
                    setIsOpen: setIsOpen,
                    links: links,
                    icons: icons
                })
            ]
        })
    });
};
/* harmony default export */ const header = (Header);

;// CONCATENATED MODULE: ./src/components/footer.tsx




const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: "py-5 bg-slate-900 text-gray-50",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(wrapper/* default */.Z, {
            className: "flex-col items-center gap-y-5",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/contact",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: "cursor-hover hover:underline underline-offset-2",
                        children: "contact@leoroullois.com"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "font-bold",
                    children: "\xa9 2022 L\xe9o Roullois"
                })
            ]
        })
    });
};
/* harmony default export */ const footer = (Footer);

;// CONCATENATED MODULE: ./src/layout/layout.main.tsx



const MainLayout = ({ children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col justify-between min-h-screen relative bg-gray-50 text-slate-900 overflow-hidden",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(header, {}),
            children,
            /*#__PURE__*/ jsx_runtime_.jsx(footer, {})
        ]
    });
};
/* harmony default export */ const layout_main = (MainLayout);

;// CONCATENATED MODULE: ./src/layout/layout.tsx



const Layout = ({ children , type  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(layout_main, {
        children: children
    });
};
/* harmony default export */ const layout = (Layout);

;// CONCATENATED MODULE: ./src/hooks/use-page-loading.ts

const usePageLoading = ()=>{
    const { 0: isLoading , 1: setIsLoading  } = (0,external_react_.useState)(true);
    (0,external_react_.useEffect)(()=>{
        setIsLoading(false);
    }, []);
    return [
        isLoading
    ];
};

;// CONCATENATED MODULE: ./src/pages/_app.tsx





function MyApp({ Component , pageProps  }) {
    const type = "main";
    const [isLoading] = usePageLoading();
    if (isLoading) {
        return /*#__PURE__*/ jsx_runtime_.jsx(loading_screen, {});
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(layout, {
        type: type,
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 8103:
/***/ ((module) => {

module.exports = require("clsx");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 9989:
/***/ ((module) => {

module.exports = require("react-icons/io5");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,61,376], () => (__webpack_exec__(3130)));
module.exports = __webpack_exports__;

})();