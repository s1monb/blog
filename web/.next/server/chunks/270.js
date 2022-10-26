"use strict";
exports.id = 270;
exports.ids = [270];
exports.modules = {

/***/ 1387:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ config)
/* harmony export */ });
const config = {
    /**
     * Find your project ID and dataset in `sanity.json` in your studio project.
     * These are considered “public”, but you can use environment variables
     * if you want differ between local dev and production.
     *
     * https://nextjs.org/docs/basic-features/environment-variables
     **/ dataset: "production" || 0,
    projectId: "03q3njk2" || 0,
    apiVersion: "2022-10-10",
    /**
     * Set useCdn to `false` if your application require the freshest possible
     * data always (potentially slightly slower and a bit more expensive).
     * Authenticated request (like preview) will always bypass the CDN
     **/ useCdn: "production" === "production",
    token: process.env.SANITY_API_TOKEN
};


/***/ }),

/***/ 4270:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i3": () => (/* binding */ sanityClient)
/* harmony export */ });
/* unused harmony exports previewClient, getClient */
/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5858);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1387);


// Set up the client for fetching data in the getProps page functions
const sanityClient = (0,next_sanity__WEBPACK_IMPORTED_MODULE_1__/* .createClient */ .eI)({
    ..._config__WEBPACK_IMPORTED_MODULE_0__/* .config */ .v
});
// Set up a preview client with serverless authentication for drafts
const previewClient = (0,next_sanity__WEBPACK_IMPORTED_MODULE_1__/* .createClient */ .eI)({
    ..._config__WEBPACK_IMPORTED_MODULE_0__/* .config */ .v,
    useCdn: false
});
// Helper function for easily switching between normal client and preview client
const getClient = (usePreview)=>usePreview ? previewClient : sanityClient;


/***/ })

};
;