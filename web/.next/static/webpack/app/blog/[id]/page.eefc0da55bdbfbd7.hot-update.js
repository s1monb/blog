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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BodyParser\": function() { return /* binding */ BodyParser; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _portabletext_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @portabletext/react */ \"./node_modules/@portabletext/react/dist/react-portable-text.mjs\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.m.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_use_clipboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-use-clipboard */ \"./node_modules/react-use-clipboard/dist/react-use-clipboard.module.js\");\n/* harmony import */ var react_refractor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-refractor */ \"./node_modules/react-refractor/lib/Refractor.js\");\n/* harmony import */ var react_refractor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_refractor__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var refractor_lang_typescript__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! refractor/lang/typescript */ \"./node_modules/refractor/lang/typescript.js\");\n/* harmony import */ var refractor_lang_typescript__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(refractor_lang_typescript__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var refractor_lang_javascript__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! refractor/lang/javascript */ \"./node_modules/refractor/lang/javascript.js\");\n/* harmony import */ var refractor_lang_javascript__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(refractor_lang_javascript__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var refractor_lang_rust__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! refractor/lang/rust */ \"./node_modules/refractor/lang/rust.js\");\n/* harmony import */ var refractor_lang_rust__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(refractor_lang_rust__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var refractor_lang_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! refractor/lang/css */ \"./node_modules/refractor/lang/css.js\");\n/* harmony import */ var refractor_lang_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(refractor_lang_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var refractor_lang_markup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! refractor/lang/markup */ \"./node_modules/refractor/lang/markup.js\");\n/* harmony import */ var refractor_lang_markup__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(refractor_lang_markup__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\n\n\n\nreact_refractor__WEBPACK_IMPORTED_MODULE_4___default().registerLanguage((refractor_lang_typescript__WEBPACK_IMPORTED_MODULE_5___default()));\nreact_refractor__WEBPACK_IMPORTED_MODULE_4___default().registerLanguage((refractor_lang_javascript__WEBPACK_IMPORTED_MODULE_6___default()));\nreact_refractor__WEBPACK_IMPORTED_MODULE_4___default().registerLanguage((refractor_lang_rust__WEBPACK_IMPORTED_MODULE_7___default()));\nreact_refractor__WEBPACK_IMPORTED_MODULE_4___default().registerLanguage((refractor_lang_css__WEBPACK_IMPORTED_MODULE_8___default()));\nreact_refractor__WEBPACK_IMPORTED_MODULE_4___default().registerLanguage((refractor_lang_markup__WEBPACK_IMPORTED_MODULE_9___default()));\nconst BodyParser = (param)=>{\n    let { data , className =\"\"  } = param;\n    var _s = $RefreshSig$();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(className, \"prose\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_portabletext_react__WEBPACK_IMPORTED_MODULE_10__.PortableText, {\n            value: data,\n            components: {\n                block: {\n                    normal: (param)=>/*#__PURE__*/ {\n                        let { children  } = param;\n                        return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(className),\n                            children: children\n                        }, void 0, false, void 0, void 0);\n                    }\n                },\n                marks: {\n                    link: (param)=>{\n                        let { text , value: { href , url  }  } = param;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: href || url,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(className || \"text-primary\", \"underline\"),\n                                children: text\n                            }, void 0, false, void 0, void 0)\n                        }, void 0, false, void 0, void 0);\n                    },\n                    section: (param)=>/*#__PURE__*/ {\n                        let { text , value: { id  }  } = param;\n                        return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            id: id,\n                            children: text\n                        }, void 0, false, void 0, void 0);\n                    }\n                },\n                types: {\n                    code: _s((param)=>{\n                        let { value  } = param;\n                        _s();\n                        const [isCopied, setCopied] = (0,react_use_clipboard__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(value.code);\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"relative\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: setCopied,\n                                    className: \"absolute right-4 top-4\",\n                                    children: isCopied ? \"Copied\" : \"Copy\"\n                                }, void 0, false, void 0, void 0),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_refractor__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                    language: value.language,\n                                    value: value.code,\n                                    markers: value.highlightedLines\n                                }, void 0, false, void 0, void 0)\n                            ]\n                        }, void 0, true, void 0, void 0);\n                    }, \"DwPg0xFkzfd5f1Nwbg0yrnY9hl4=\", false, function() {\n                        return [\n                            react_use_clipboard__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n                        ];\n                    })\n                }\n            }\n        }, void 0, false, {\n            fileName: \"/Users/simon/Code/blog/web/components/BodyParser.tsx\",\n            lineNumber: 28,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/simon/Code/blog/web/components/BodyParser.tsx\",\n        lineNumber: 27,\n        columnNumber: 9\n    }, undefined);\n};\n_c = BodyParser;\nvar _c;\n$RefreshReg$(_c, \"BodyParser\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0JvZHlQYXJzZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNtRDtBQUMzQjtBQUNLO0FBQ2tCO0FBQ1A7QUFDRztBQUNBO0FBQ0o7QUFDRjtBQUNJO0FBRXpDSSx1RUFBMEIsQ0FBQ0Msa0VBQUVBO0FBQzdCRCx1RUFBMEIsQ0FBQ0Usa0VBQUVBO0FBQzdCRix1RUFBMEIsQ0FBQ0csNERBQUlBO0FBQy9CSCx1RUFBMEIsQ0FBQ0ksMkRBQUdBO0FBQzlCSix1RUFBMEIsQ0FBQ0ssOERBQUlBO0FBRXhCLE1BQU1FLGFBQWEsU0FNcEI7UUFOcUIsRUFDdkJDLEtBQUksRUFDSkMsV0FBWSxHQUFFLEVBSWpCOztJQUNHLHFCQUNJLDhEQUFDQztRQUFJRCxXQUFXWixnREFBSUEsQ0FBQ1ksV0FBVztrQkFDNUIsNEVBQUNiLDhEQUFZQTtZQUNUZSxPQUFPSDtZQUNQSSxZQUFZO2dCQUNSQyxPQUFPO29CQUNIQyxRQUFRLHVCQUNKOzRCQURLLEVBQUVDLFNBQVEsRUFBRTsrQkFDakIsOERBQUNDOzRCQUFFUCxXQUFXWixnREFBSUEsQ0FBQ1k7c0NBQWFNOztvQkFBWTtnQkFFcEQ7Z0JBQ0FFLE9BQU87b0JBQ0hDLE1BQU0sU0FBeUM7NEJBQXhDLEVBQUVDLEtBQUksRUFBRVIsT0FBTyxFQUFFUyxLQUFJLEVBQUVDLElBQUcsRUFBRSxHQUFPO3dCQUN0QyxxQkFDSSw4REFBQ3ZCLGtEQUFJQTs0QkFBQ3NCLE1BQU1BLFFBQVFDO3NDQUNoQiw0RUFBQ0M7Z0NBQ0diLFdBQVdaLGdEQUFJQSxDQUNYWSxhQUFhLGdCQUNiOzBDQUdIVTs7O29CQUlqQjtvQkFDQUksU0FBUyx1QkFDTDs0QkFETSxFQUFFSixLQUFJLEVBQUVSLE9BQU8sRUFBRWEsR0FBRSxFQUFFLEdBQU87K0JBQ2xDLDhEQUFDQzs0QkFBS0QsSUFBSUE7c0NBQUtMOztvQkFBVztnQkFFbEM7Z0JBQ0FPLE9BQU87b0JBQ0hDLElBQUksS0FBRSxTQUFlOzRCQUFkLEVBQUVoQixNQUFLLEVBQUU7O3dCQUNaLE1BQU0sQ0FBQ2lCLFVBQVVDLFVBQVUsR0FBRzlCLCtEQUFZQSxDQUN0Q1ksTUFBTWdCLElBQUk7d0JBR2QscUJBQ0ksOERBQUNqQjs0QkFBSUQsV0FBVTs7OENBQ1gsOERBQUNxQjtvQ0FDR0MsU0FBU0Y7b0NBQ1RwQixXQUFVOzhDQUVUbUIsV0FBVyxXQUFXLE1BQU07OzhDQUVqQyw4REFBQzVCLHdEQUFTQTtvQ0FDTmdDLFVBQVVyQixNQUFNcUIsUUFBUTtvQ0FDeEJyQixPQUFPQSxNQUFNZ0IsSUFBSTtvQ0FDakJNLFNBQVN0QixNQUFNdUIsZ0JBQWdCOzs7O29CQUkvQzs7NEJBbkJrQ25DLDJEQUFZQTs7O2dCQW9CbEQ7WUFDSjs7Ozs7Ozs7Ozs7QUFJaEIsRUFBRTtLQS9EV1EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Cb2R5UGFyc2VyLnRzeD8yODA2Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgUG9ydGFibGVUZXh0IH0gZnJvbSBcIkBwb3J0YWJsZXRleHQvcmVhY3RcIjtcbmltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgdXNlQ2xpcGJvYXJkIGZyb20gXCJyZWFjdC11c2UtY2xpcGJvYXJkXCI7XG5pbXBvcnQgUmVmcmFjdG9yIGZyb20gXCJyZWFjdC1yZWZyYWN0b3JcIjtcbmltcG9ydCB0cyBmcm9tIFwicmVmcmFjdG9yL2xhbmcvdHlwZXNjcmlwdFwiO1xuaW1wb3J0IGpzIGZyb20gXCJyZWZyYWN0b3IvbGFuZy9qYXZhc2NyaXB0XCI7XG5pbXBvcnQgcnVzdCBmcm9tIFwicmVmcmFjdG9yL2xhbmcvcnVzdFwiO1xuaW1wb3J0IGNzcyBmcm9tIFwicmVmcmFjdG9yL2xhbmcvY3NzXCI7XG5pbXBvcnQgaHRtbCBmcm9tIFwicmVmcmFjdG9yL2xhbmcvbWFya3VwXCI7XG5cblJlZnJhY3Rvci5yZWdpc3Rlckxhbmd1YWdlKHRzKTtcblJlZnJhY3Rvci5yZWdpc3Rlckxhbmd1YWdlKGpzKTtcblJlZnJhY3Rvci5yZWdpc3Rlckxhbmd1YWdlKHJ1c3QpO1xuUmVmcmFjdG9yLnJlZ2lzdGVyTGFuZ3VhZ2UoY3NzKTtcblJlZnJhY3Rvci5yZWdpc3Rlckxhbmd1YWdlKGh0bWwpO1xuXG5leHBvcnQgY29uc3QgQm9keVBhcnNlciA9ICh7XG4gICAgZGF0YSxcbiAgICBjbGFzc05hbWUgPSBcIlwiLFxufToge1xuICAgIGRhdGE6IGFueVtdO1xuICAgIGNsYXNzTmFtZT86IHN0cmluZztcbn0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChjbGFzc05hbWUsIFwicHJvc2VcIil9PlxuICAgICAgICAgICAgPFBvcnRhYmxlVGV4dFxuICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhfVxuICAgICAgICAgICAgICAgIGNvbXBvbmVudHM9e3tcbiAgICAgICAgICAgICAgICAgICAgYmxvY2s6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbDogKHsgY2hpbGRyZW4gfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xzeChjbGFzc05hbWUpfT57Y2hpbGRyZW59PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbWFya3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbms6ICh7IHRleHQsIHZhbHVlOiB7IGhyZWYsIHVybCB9IH06IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2hyZWYgfHwgdXJsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUgfHwgXCJ0ZXh0LXByaW1hcnlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1bmRlcmxpbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlY3Rpb246ICh7IHRleHQsIHZhbHVlOiB7IGlkIH0gfTogYW55KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gaWQ9e2lkfT57dGV4dH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0eXBlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogKHsgdmFsdWUgfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IFtpc0NvcGllZCwgc2V0Q29waWVkXSA9IHVzZUNsaXBib2FyZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUuY29kZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17c2V0Q29waWVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHJpZ2h0LTQgdG9wLTRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpc0NvcGllZCA/IFwiQ29waWVkXCIgOiBcIkNvcHlcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlZnJhY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlPXt2YWx1ZS5sYW5ndWFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWUuY29kZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXJzPXt2YWx1ZS5oaWdobGlnaHRlZExpbmVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuIl0sIm5hbWVzIjpbIlBvcnRhYmxlVGV4dCIsImNsc3giLCJMaW5rIiwidXNlQ2xpcGJvYXJkIiwiUmVmcmFjdG9yIiwidHMiLCJqcyIsInJ1c3QiLCJjc3MiLCJodG1sIiwicmVnaXN0ZXJMYW5ndWFnZSIsIkJvZHlQYXJzZXIiLCJkYXRhIiwiY2xhc3NOYW1lIiwiZGl2IiwidmFsdWUiLCJjb21wb25lbnRzIiwiYmxvY2siLCJub3JtYWwiLCJjaGlsZHJlbiIsInAiLCJtYXJrcyIsImxpbmsiLCJ0ZXh0IiwiaHJlZiIsInVybCIsImEiLCJzZWN0aW9uIiwiaWQiLCJzcGFuIiwidHlwZXMiLCJjb2RlIiwiaXNDb3BpZWQiLCJzZXRDb3BpZWQiLCJidXR0b24iLCJvbkNsaWNrIiwibGFuZ3VhZ2UiLCJtYXJrZXJzIiwiaGlnaGxpZ2h0ZWRMaW5lcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/BodyParser.tsx\n"));

/***/ })

});