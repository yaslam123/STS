"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/layouts/Layouts.js":
/*!********************************!*\
  !*** ./src/layouts/Layouts.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_common_utilits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/src/common/utilits */ \"./src/common/utilits.js\");\n/* harmony import */ var _footers_Index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footers/Index */ \"./src/layouts/footers/Index.js\");\n/* harmony import */ var _headers_Index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./headers/Index */ \"./src/layouts/headers/Index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Layouts = (param)=>{\n    let { children, header, footer, noHeader, noFooter, transparent, headerTop, extarClass } = param;\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        (0,_src_common_utilits__WEBPACK_IMPORTED_MODULE_2__.milButtonClick)();\n        (0,_src_common_utilits__WEBPACK_IMPORTED_MODULE_2__.milButtonClick2)();\n        (0,_src_common_utilits__WEBPACK_IMPORTED_MODULE_2__.accordion)();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mil-wrapper\",\n        children: [\n            !noHeader && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headers_Index__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                header: header,\n                transparent: transparent,\n                headerTop: headerTop,\n                extarClass: extarClass\n            }, void 0, false, {\n                fileName: \"E:\\\\Taban\\\\STS\\\\src\\\\layouts\\\\Layouts.js\",\n                lineNumber: 29,\n                columnNumber: 9\n            }, undefined),\n            children,\n            !noFooter && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_footers_Index__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                footer: footer\n            }, void 0, false, {\n                fileName: \"E:\\\\Taban\\\\STS\\\\src\\\\layouts\\\\Layouts.js\",\n                lineNumber: 37,\n                columnNumber: 21\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\Taban\\\\STS\\\\src\\\\layouts\\\\Layouts.js\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Layouts, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Layouts;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layouts);\nvar _c;\n$RefreshReg$(_c, \"Layouts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGF5b3V0cy9MYXlvdXRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBa0M7QUFLSjtBQUNPO0FBQ0E7QUFFckMsTUFBTU0sVUFBVTtRQUFDLEVBQ2ZDLFFBQVEsRUFDUkMsTUFBTSxFQUNOQyxNQUFNLEVBQ05DLFFBQVEsRUFDUkMsUUFBUSxFQUNSQyxXQUFXLEVBQ1hDLFNBQVMsRUFDVEMsVUFBVSxFQUNYOztJQUNDZCxnREFBU0EsQ0FBQztRQUNSRSxtRUFBY0E7UUFDZEMsb0VBQWVBO1FBQ2ZGLDhEQUFTQTtJQUNYLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDYztRQUFJQyxXQUFVOztZQUNaLENBQUNOLDBCQUNBLDhEQUFDTCxzREFBTUE7Z0JBQ0xHLFFBQVFBO2dCQUNSSSxhQUFhQTtnQkFDYkMsV0FBV0E7Z0JBQ1hDLFlBQVlBOzs7Ozs7WUFHZlA7WUFDQSxDQUFDSSwwQkFBWSw4REFBQ1Asc0RBQU1BO2dCQUFDSyxRQUFRQTs7Ozs7Ozs7Ozs7O0FBR3BDO0dBOUJNSDtLQUFBQTtBQStCTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvbGF5b3V0cy9MYXlvdXRzLmpzPzZiOGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgYWNjb3JkaW9uLFxyXG4gIG1pbEJ1dHRvbkNsaWNrLFxyXG4gIG1pbEJ1dHRvbkNsaWNrMixcclxufSBmcm9tIFwiQC9zcmMvY29tbW9uL3V0aWxpdHNcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9mb290ZXJzL0luZGV4XCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vaGVhZGVycy9JbmRleFwiO1xyXG5cclxuY29uc3QgTGF5b3V0cyA9ICh7XHJcbiAgY2hpbGRyZW4sXHJcbiAgaGVhZGVyLFxyXG4gIGZvb3RlcixcclxuICBub0hlYWRlcixcclxuICBub0Zvb3RlcixcclxuICB0cmFuc3BhcmVudCxcclxuICBoZWFkZXJUb3AsXHJcbiAgZXh0YXJDbGFzcyxcclxufSkgPT4ge1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBtaWxCdXR0b25DbGljaygpO1xyXG4gICAgbWlsQnV0dG9uQ2xpY2syKCk7XHJcbiAgICBhY2NvcmRpb24oKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbC13cmFwcGVyXCI+XHJcbiAgICAgIHshbm9IZWFkZXIgJiYgKFxyXG4gICAgICAgIDxIZWFkZXJcclxuICAgICAgICAgIGhlYWRlcj17aGVhZGVyfVxyXG4gICAgICAgICAgdHJhbnNwYXJlbnQ9e3RyYW5zcGFyZW50fVxyXG4gICAgICAgICAgaGVhZGVyVG9wPXtoZWFkZXJUb3B9XHJcbiAgICAgICAgICBleHRhckNsYXNzPXtleHRhckNsYXNzfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgeyFub0Zvb3RlciAmJiA8Rm9vdGVyIGZvb3Rlcj17Zm9vdGVyfSAvPn1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IExheW91dHM7XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJhY2NvcmRpb24iLCJtaWxCdXR0b25DbGljayIsIm1pbEJ1dHRvbkNsaWNrMiIsIkZvb3RlciIsIkhlYWRlciIsIkxheW91dHMiLCJjaGlsZHJlbiIsImhlYWRlciIsImZvb3RlciIsIm5vSGVhZGVyIiwibm9Gb290ZXIiLCJ0cmFuc3BhcmVudCIsImhlYWRlclRvcCIsImV4dGFyQ2xhc3MiLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/layouts/Layouts.js\n"));

/***/ })

});