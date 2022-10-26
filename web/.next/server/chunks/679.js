exports.id = 679;
exports.ids = [679];
exports.modules = {

/***/ 9460:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3249))

/***/ }),

/***/ 1106:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 9446, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3258, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6862, 23))

/***/ }),

/***/ 8514:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__ */ const { createProxy  } = __webpack_require__(4353);
module.exports = createProxy("/Users/simon/Code/blog/web/app/layout.tsx");


/***/ }),

/***/ 3249:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./app/globals.css
var globals = __webpack_require__(1338);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.js
var clsx = __webpack_require__(4889);
var clsx_default = /*#__PURE__*/__webpack_require__.n(clsx);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(9483);
;// CONCATENATED MODULE: ./components/navLinks.tsx




function NavLinks({ links  }) {
    const pathname = (0,navigation.usePathname)();
    console.log(pathname);
    return /*#__PURE__*/ jsx_runtime_.jsx("nav", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
            className: "flex gap-8 text-sm font-mono",
            children: links.map(({ href , label  })=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                    className: clsx_default()(href === pathname ? "opacity-100" : "opacity-60 hover:opacity-100"),
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: href,
                        children: label
                    })
                }, href))
        })
    });
}

// EXTERNAL MODULE: ./node_modules/react-feather/build/index.js
var build = __webpack_require__(3462);
;// CONCATENATED MODULE: ./components/darkmodeToggle.tsx


function DarkmodeToggle({ setDarkMode , darkMode  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("button", {
        onClick: ()=>setDarkMode(!darkMode),
        "aria-label": "Dark-mode toggle",
        className: "hover:bg-darkSecondary dark:hover:bg-secondary rounded-full p-1 transition-colors group items-center flex justify-center",
        children: darkMode ? /*#__PURE__*/ jsx_runtime_.jsx(build/* Sun */.kOA, {
            className: "text-darkPrimary group-hover:text-primary transition-colors w-5 h-5"
        }) : /*#__PURE__*/ jsx_runtime_.jsx(build/* Moon */.JFe, {
            className: "text-primary group-hover:text-darkPrimary transition-colors w-5 h-5"
        })
    });
}

;// CONCATENATED MODULE: ./app/layout.tsx







function RootLayout({ children  }) {
    const [darkMode, setDarkMode] = (0,react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("html", {
        className: clsx_default()(darkMode && "dark"),
        lang: "en",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("head", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Simon Bj\xf8rn\xf8y"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
                className: "bg-secondary text-primary dark:bg-darkSecondary dark:text-darkPrimary transition-colors",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("header", {
                        className: "border-b border-primary/30 dark:border-darkPrimary",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex justify-end md:justify-between items-center py-4 container",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "hidden md:block",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: "text-xl font-semibold",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/",
                                            children: "Simon Bj\xf8rn\xf8y"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                                    className: "flex items-center gap-8",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(NavLinks, {
                                                links: [
                                                    {
                                                        href: "/",
                                                        label: "Home"
                                                    },
                                                    {
                                                        href: "/blog/list",
                                                        label: "Blog"
                                                    }
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(DarkmodeToggle, {
                                            darkMode: darkMode,
                                            setDarkMode: setDarkMode
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    children,
                    /*#__PURE__*/ jsx_runtime_.jsx("footer", {})
                ]
            })
        ]
    });
}


/***/ }),

/***/ 1338:
/***/ (() => {



/***/ })

};
;