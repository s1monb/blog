"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/blog/[id]/page",{

/***/ "./components/BodyParser.tsx":
/*!***********************************!*\
  !*** ./components/BodyParser.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BodyParser\": function() { return /* binding */ BodyParser; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _portabletext_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @portabletext/react */ \"./node_modules/@portabletext/react/dist/react-portable-text.mjs\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.m.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_use_clipboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-use-clipboard */ \"./node_modules/react-use-clipboard/dist/react-use-clipboard.module.js\");\n/* harmony import */ var react_refractor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-refractor */ \"./node_modules/react-refractor/lib/Refractor.js\");\n/* harmony import */ var react_refractor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_refractor__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-feather */ \"./node_modules/react-feather/dist/icons/check.js\");\n/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-feather */ \"./node_modules/react-feather/dist/icons/clipboard.js\");\n/* harmony import */ var refractor_lang_typescript__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! refractor/lang/typescript */ \"./node_modules/refractor/lang/typescript.js\");\n/* harmony import */ var refractor_lang_typescript__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(refractor_lang_typescript__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var refractor_lang_javascript__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! refractor/lang/javascript */ \"./node_modules/refractor/lang/javascript.js\");\n/* harmony import */ var refractor_lang_javascript__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(refractor_lang_javascript__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var refractor_lang_rust__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! refractor/lang/rust */ \"./node_modules/refractor/lang/rust.js\");\n/* harmony import */ var refractor_lang_rust__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(refractor_lang_rust__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var refractor_lang_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! refractor/lang/css */ \"./node_modules/refractor/lang/css.js\");\n/* harmony import */ var refractor_lang_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(refractor_lang_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var refractor_lang_markup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! refractor/lang/markup */ \"./node_modules/refractor/lang/markup.js\");\n/* harmony import */ var refractor_lang_markup__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(refractor_lang_markup__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\n\n\n\n\nreact_refractor__WEBPACK_IMPORTED_MODULE_4___default().registerLanguage((refractor_lang_typescript__WEBPACK_IMPORTED_MODULE_5___default()));\nreact_refractor__WEBPACK_IMPORTED_MODULE_4___default().registerLanguage((refractor_lang_javascript__WEBPACK_IMPORTED_MODULE_6___default()));\nreact_refractor__WEBPACK_IMPORTED_MODULE_4___default().registerLanguage((refractor_lang_rust__WEBPACK_IMPORTED_MODULE_7___default()));\nreact_refractor__WEBPACK_IMPORTED_MODULE_4___default().registerLanguage((refractor_lang_css__WEBPACK_IMPORTED_MODULE_8___default()));\nreact_refractor__WEBPACK_IMPORTED_MODULE_4___default().registerLanguage((refractor_lang_markup__WEBPACK_IMPORTED_MODULE_9___default()));\nconst BodyParser = (param)=>{\n    let { data , className =\"\"  } = param;\n    var _s = $RefreshSig$();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(className, \"prose\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_portabletext_react__WEBPACK_IMPORTED_MODULE_10__.PortableText, {\n            value: data,\n            components: {\n                block: {\n                    normal: (param)=>/*#__PURE__*/ {\n                        let { children  } = param;\n                        return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(className),\n                            children: children\n                        }, void 0, false, void 0, void 0);\n                    }\n                },\n                marks: {\n                    link: (param)=>{\n                        let { text , value: { href , url  }  } = param;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: href || url,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(className || \"text-primary\", \"underline\"),\n                                children: text\n                            }, void 0, false, void 0, void 0)\n                        }, void 0, false, void 0, void 0);\n                    },\n                    section: (param)=>/*#__PURE__*/ {\n                        let { text , value: { id  }  } = param;\n                        return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            id: id,\n                            children: text\n                        }, void 0, false, void 0, void 0);\n                    }\n                },\n                types: {\n                    code: _s((param)=>{\n                        let { value  } = param;\n                        _s();\n                        const [isCopied, setCopied] = (0,react_use_clipboard__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(value.code, {\n                            successDuration: 4000\n                        });\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"relative\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: setCopied,\n                                    className: \"absolute right-4 top-4 p-1 hover:bg-white/10 text-white/50 rounded-md\",\n                                    children: isCopied ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_feather__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                                className: \"text-white\"\n                                            }, void 0, false, void 0, void 0),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-xs absolute bottom-2 -left-[20px] text-white\",\n                                                children: \"copied\"\n                                            }, void 0, false, void 0, void 0)\n                                        ]\n                                    }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_feather__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {}, void 0, false, void 0, void 0)\n                                }, void 0, false, void 0, void 0),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_refractor__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                    language: value.language,\n                                    value: value.code,\n                                    markers: value.highlightedLines\n                                }, void 0, false, void 0, void 0)\n                            ]\n                        }, void 0, true, void 0, void 0);\n                    }, \"DwPg0xFkzfd5f1Nwbg0yrnY9hl4=\", false, function() {\n                        return [\n                            react_use_clipboard__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n                        ];\n                    })\n                }\n            }\n        }, void 0, false, {\n            fileName: \"/Users/simon/Code/blog/web/components/BodyParser.tsx\",\n            lineNumber: 30,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/simon/Code/blog/web/components/BodyParser.tsx\",\n        lineNumber: 29,\n        columnNumber: 9\n    }, undefined);\n};\n_c = BodyParser;\nvar _c;\n$RefreshReg$(_c, \"BodyParser\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0JvZHlQYXJzZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ21EO0FBQzNCO0FBQ0s7QUFDa0I7QUFDUDtBQUNTO0FBQ047QUFDQTtBQUNKO0FBQ0Y7QUFDSTtBQUd6Q0ksdUVBQTBCLENBQUNHLGtFQUFFQTtBQUM3QkgsdUVBQTBCLENBQUNJLGtFQUFFQTtBQUM3QkosdUVBQTBCLENBQUNLLDREQUFJQTtBQUMvQkwsdUVBQTBCLENBQUNNLDJEQUFHQTtBQUM5Qk4sdUVBQTBCLENBQUNPLDhEQUFJQTtBQUV4QixNQUFNRSxhQUFhLFNBTXBCO1FBTnFCLEVBQ3ZCQyxLQUFJLEVBQ0pDLFdBQVksR0FBRSxFQUlqQjs7SUFDRyxxQkFDSSw4REFBQ0M7UUFBSUQsV0FBV2QsZ0RBQUlBLENBQUNjLFdBQVc7a0JBQzVCLDRFQUFDZiw4REFBWUE7WUFDVGlCLE9BQU9IO1lBQ1BJLFlBQVk7Z0JBQ1JDLE9BQU87b0JBQ0hDLFFBQVEsdUJBQ0o7NEJBREssRUFBRUMsU0FBUSxFQUFFOytCQUNqQiw4REFBQ0M7NEJBQUVQLFdBQVdkLGdEQUFJQSxDQUFDYztzQ0FBYU07O29CQUFZO2dCQUVwRDtnQkFDQUUsT0FBTztvQkFDSEMsTUFBTSxTQUF5Qzs0QkFBeEMsRUFBRUMsS0FBSSxFQUFFUixPQUFPLEVBQUVTLEtBQUksRUFBRUMsSUFBRyxFQUFFLEdBQU87d0JBQ3RDLHFCQUNJLDhEQUFDekIsa0RBQUlBOzRCQUFDd0IsTUFBTUEsUUFBUUM7c0NBQ2hCLDRFQUFDQztnQ0FDR2IsV0FBV2QsZ0RBQUlBLENBQ1hjLGFBQWEsZ0JBQ2I7MENBR0hVOzs7b0JBSWpCO29CQUNBSSxTQUFTLHVCQUNMOzRCQURNLEVBQUVKLEtBQUksRUFBRVIsT0FBTyxFQUFFYSxHQUFFLEVBQUUsR0FBTzsrQkFDbEMsOERBQUNDOzRCQUFLRCxJQUFJQTtzQ0FBS0w7O29CQUFXO2dCQUVsQztnQkFDQU8sT0FBTztvQkFDSEMsSUFBSSxLQUFFLFNBQWU7NEJBQWQsRUFBRWhCLE1BQUssRUFBRTs7d0JBQ1osTUFBTSxDQUFDaUIsVUFBVUMsVUFBVSxHQUFHaEMsK0RBQVlBLENBQ3RDYyxNQUFNZ0IsSUFBSSxFQUNWOzRCQUNJRyxpQkFBaUI7d0JBQ3JCO3dCQUdKLHFCQUNJLDhEQUFDcEI7NEJBQUlELFdBQVU7OzhDQUNYLDhEQUFDc0I7b0NBQ0dDLFNBQVNIO29DQUNUcEIsV0FBVTs4Q0FFVG1CLHlCQUNHOzswREFDSSw4REFBQzVCLHNEQUFLQTtnREFBQ1MsV0FBVTs7MERBQ2pCLDhEQUFDTztnREFBRVAsV0FBVTswREFBb0Q7OztxRUFLckUsOERBQUNWLHNEQUFTQSxvQ0FDYjs7OENBRUwsOERBQUNELHdEQUFTQTtvQ0FDTm1DLFVBQVV0QixNQUFNc0IsUUFBUTtvQ0FDeEJ0QixPQUFPQSxNQUFNZ0IsSUFBSTtvQ0FDakJPLFNBQVN2QixNQUFNd0IsZ0JBQWdCOzs7O29CQUkvQzs7NEJBL0JrQ3RDLDJEQUFZQTs7O2dCQWdDbEQ7WUFDSjs7Ozs7Ozs7Ozs7QUFJaEIsRUFBRTtLQTNFV1UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Cb2R5UGFyc2VyLnRzeD8yODA2Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgUG9ydGFibGVUZXh0IH0gZnJvbSBcIkBwb3J0YWJsZXRleHQvcmVhY3RcIjtcbmltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgdXNlQ2xpcGJvYXJkIGZyb20gXCJyZWFjdC11c2UtY2xpcGJvYXJkXCI7XG5pbXBvcnQgUmVmcmFjdG9yIGZyb20gXCJyZWFjdC1yZWZyYWN0b3JcIjtcbmltcG9ydCB7IENsaXBib2FyZCwgQ2hlY2sgfSBmcm9tIFwicmVhY3QtZmVhdGhlclwiO1xuaW1wb3J0IHRzIGZyb20gXCJyZWZyYWN0b3IvbGFuZy90eXBlc2NyaXB0XCI7XG5pbXBvcnQganMgZnJvbSBcInJlZnJhY3Rvci9sYW5nL2phdmFzY3JpcHRcIjtcbmltcG9ydCBydXN0IGZyb20gXCJyZWZyYWN0b3IvbGFuZy9ydXN0XCI7XG5pbXBvcnQgY3NzIGZyb20gXCJyZWZyYWN0b3IvbGFuZy9jc3NcIjtcbmltcG9ydCBodG1sIGZyb20gXCJyZWZyYWN0b3IvbGFuZy9tYXJrdXBcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5SZWZyYWN0b3IucmVnaXN0ZXJMYW5ndWFnZSh0cyk7XG5SZWZyYWN0b3IucmVnaXN0ZXJMYW5ndWFnZShqcyk7XG5SZWZyYWN0b3IucmVnaXN0ZXJMYW5ndWFnZShydXN0KTtcblJlZnJhY3Rvci5yZWdpc3Rlckxhbmd1YWdlKGNzcyk7XG5SZWZyYWN0b3IucmVnaXN0ZXJMYW5ndWFnZShodG1sKTtcblxuZXhwb3J0IGNvbnN0IEJvZHlQYXJzZXIgPSAoe1xuICAgIGRhdGEsXG4gICAgY2xhc3NOYW1lID0gXCJcIixcbn06IHtcbiAgICBkYXRhOiBhbnlbXTtcbiAgICBjbGFzc05hbWU/OiBzdHJpbmc7XG59KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goY2xhc3NOYW1lLCBcInByb3NlXCIpfT5cbiAgICAgICAgICAgIDxQb3J0YWJsZVRleHRcbiAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YX1cbiAgICAgICAgICAgICAgICBjb21wb25lbnRzPXt7XG4gICAgICAgICAgICAgICAgICAgIGJsb2NrOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3JtYWw6ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2Nsc3goY2xhc3NOYW1lKX0+e2NoaWxkcmVufTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1hcmtzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rOiAoeyB0ZXh0LCB2YWx1ZTogeyBocmVmLCB1cmwgfSB9OiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtocmVmIHx8IHVybH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lIHx8IFwidGV4dC1wcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidW5kZXJsaW5lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0ZXh0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWN0aW9uOiAoeyB0ZXh0LCB2YWx1ZTogeyBpZCB9IH06IGFueSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGlkPXtpZH0+e3RleHR9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6ICh7IHZhbHVlIH0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBbaXNDb3BpZWQsIHNldENvcGllZF0gPSB1c2VDbGlwYm9hcmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLmNvZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3NEdXJhdGlvbjogNDAwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17c2V0Q29waWVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHJpZ2h0LTQgdG9wLTQgcC0xIGhvdmVyOmJnLXdoaXRlLzEwIHRleHQtd2hpdGUvNTAgcm91bmRlZC1tZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzQ29waWVkID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyBhYnNvbHV0ZSBib3R0b20tMiAtbGVmdC1bMjBweF0gdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvcGllZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2xpcGJvYXJkIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlZnJhY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlPXt2YWx1ZS5sYW5ndWFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWUuY29kZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXJzPXt2YWx1ZS5oaWdobGlnaHRlZExpbmVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuIl0sIm5hbWVzIjpbIlBvcnRhYmxlVGV4dCIsImNsc3giLCJMaW5rIiwidXNlQ2xpcGJvYXJkIiwiUmVmcmFjdG9yIiwiQ2xpcGJvYXJkIiwiQ2hlY2siLCJ0cyIsImpzIiwicnVzdCIsImNzcyIsImh0bWwiLCJyZWdpc3Rlckxhbmd1YWdlIiwiQm9keVBhcnNlciIsImRhdGEiLCJjbGFzc05hbWUiLCJkaXYiLCJ2YWx1ZSIsImNvbXBvbmVudHMiLCJibG9jayIsIm5vcm1hbCIsImNoaWxkcmVuIiwicCIsIm1hcmtzIiwibGluayIsInRleHQiLCJocmVmIiwidXJsIiwiYSIsInNlY3Rpb24iLCJpZCIsInNwYW4iLCJ0eXBlcyIsImNvZGUiLCJpc0NvcGllZCIsInNldENvcGllZCIsInN1Y2Nlc3NEdXJhdGlvbiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJsYW5ndWFnZSIsIm1hcmtlcnMiLCJoaWdobGlnaHRlZExpbmVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/BodyParser.tsx\n"));

/***/ })

});