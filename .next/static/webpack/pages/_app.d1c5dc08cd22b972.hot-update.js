"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Modal */ \"./components/Modal.jsx\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n/* harmony import */ var _components_MobileFooter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/MobileFooter */ \"./components/MobileFooter.jsx\");\n\n\n\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _objectWithoutProperties(source, excluded) {\n    if (source == null) return {};\n    var target = _objectWithoutPropertiesLoose(source, excluded);\n    var key, i;\n    if (Object.getOwnPropertySymbols) {\n        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);\n        for(i = 0; i < sourceSymbolKeys.length; i++){\n            key = sourceSymbolKeys[i];\n            if (excluded.indexOf(key) >= 0) continue;\n            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;\n            target[key] = source[key];\n        }\n    }\n    return target;\n}\nfunction _objectWithoutPropertiesLoose(source, excluded) {\n    if (source == null) return {};\n    var target = {};\n    var sourceKeys = Object.keys(source);\n    var key, i;\n    for(i = 0; i < sourceKeys.length; i++){\n        key = sourceKeys[i];\n        if (excluded.indexOf(key) >= 0) continue;\n        target[key] = source[key];\n    }\n    return target;\n}\nfunction MyApp(_param) {\n    var Component = _param.Component, session = _param.pageProps.session, pageProps = _objectWithoutProperties(_param.pageProps, [\n        \"session\"\n    ]);\n    //console clear\n    // console.log = console.warn = console.error = () => { };\n    // // Look ma, no error!\n    // console.error('Something bad happened.');\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_2__.SessionProvider, {\n        session: session,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recoil__WEBPACK_IMPORTED_MODULE_3__.RecoilRoot, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                            children: \"Tail-Tale\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\tail-tale\\\\pages\\\\_app.tsx\",\n                            lineNumber: 20,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"icon\",\n                            href: \"/app_icon.png\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\tail-tale\\\\pages\\\\_app.tsx\",\n                            lineNumber: 21,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\tail-tale\\\\pages\\\\_app.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                    fileName: \"E:\\\\tail-tale\\\\pages\\\\_app.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n                    fileName: \"E:\\\\tail-tale\\\\pages\\\\_app.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Modal__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"E:\\\\tail-tale\\\\pages\\\\_app.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MobileFooter__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                    fileName: \"E:\\\\tail-tale\\\\pages\\\\_app.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\tail-tale\\\\pages\\\\_app.tsx\",\n            lineNumber: 18,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\tail-tale\\\\pages\\\\_app.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this));\n}\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUE4QjtBQUVtQjtBQUNkO0FBQ1A7QUFDVztBQUNFO0FBQ1k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBRTVDTSxLQUFLLENBQUMsTUFBNkQsRUFBRSxDQUFDO1FBQTlEQyxTQUFTLEdBQVgsTUFBNkQsQ0FBM0RBLFNBQVMsRUFBZUMsT0FBTyxHQUFqQyxNQUE2RCxDQUFoREMsU0FBUyxDQUFJRCxPQUFPLEVBQUtDLFNBQVMsNEJBQS9DLE1BQTZELENBQWhEQSxTQUFTO1FBQUlELENBQU87O0lBQzlDLEVBQWU7SUFDZixFQUEwRDtJQUUxRCxFQUF3QjtJQUN4QixFQUE0QztJQUM1QyxNQUFNLDZFQUNIUiw0REFBZTtRQUFDUSxPQUFPLEVBQUVBLE9BQU87OEZBQzlCUCw4Q0FBVTs7NEZBQ1JDLGtEQUFJOztvR0FDRlEsQ0FBSztzQ0FBQyxDQUFTOzs7Ozs7b0dBQ2ZDLENBQUk7NEJBQUNDLEdBQUcsRUFBQyxDQUFNOzRCQUFDQyxJQUFJLEVBQUMsQ0FBZTs7Ozs7Ozs7Ozs7OzRGQUV0Q1QsMERBQU07Ozs7OzRGQUVORyxTQUFTLG9CQUFLRSxTQUFTOzs7Ozs0RkFDdkJOLHlEQUFLOzs7Ozs0RkFDTEUsZ0VBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJckIsQ0FBQztLQXJCUUMsS0FBSztBQXVCZCwrREFBZUEsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJ1xuaW1wb3J0IHsgU2Vzc2lvblByb3ZpZGVyIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiXG5pbXBvcnQgeyBSZWNvaWxSb290IH0gZnJvbSAncmVjb2lsJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IE1vZGFsIGZyb20gJy4uL2NvbXBvbmVudHMvTW9kYWwnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJ1xuaW1wb3J0IE1vYmlsZUZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL01vYmlsZUZvb3RlcidcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wczogeyBzZXNzaW9uLCAuLi5wYWdlUHJvcHMgfSB9OiBBcHBQcm9wcykge1xuICAvL2NvbnNvbGUgY2xlYXJcbiAgLy8gY29uc29sZS5sb2cgPSBjb25zb2xlLndhcm4gPSBjb25zb2xlLmVycm9yID0gKCkgPT4geyB9O1xuXG4gIC8vIC8vIExvb2sgbWEsIG5vIGVycm9yIVxuICAvLyBjb25zb2xlLmVycm9yKCdTb21ldGhpbmcgYmFkIGhhcHBlbmVkLicpO1xuICByZXR1cm4gKFxuICAgIDxTZXNzaW9uUHJvdmlkZXIgc2Vzc2lvbj17c2Vzc2lvbn0+XG4gICAgICA8UmVjb2lsUm9vdD5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPlRhaWwtVGFsZTwvdGl0bGU+XG4gICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvYXBwX2ljb24ucG5nXCIgLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8SGVhZGVyIC8+XG5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICA8TW9kYWwgLz5cbiAgICAgICAgPE1vYmlsZUZvb3RlciAvPlxuICAgICAgPC9SZWNvaWxSb290PlxuICAgIDwvU2Vzc2lvblByb3ZpZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iXSwibmFtZXMiOlsiU2Vzc2lvblByb3ZpZGVyIiwiUmVjb2lsUm9vdCIsIkhlYWQiLCJNb2RhbCIsIkhlYWRlciIsIk1vYmlsZUZvb3RlciIsIk15QXBwIiwiQ29tcG9uZW50Iiwic2Vzc2lvbiIsInBhZ2VQcm9wcyIsInRpdGxlIiwibGluayIsInJlbCIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ })

});