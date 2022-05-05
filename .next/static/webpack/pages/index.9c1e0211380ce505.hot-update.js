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

/***/ "./components/Feed.jsx":
/*!*****************************!*\
  !*** ./components/Feed.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var E_tail_tale_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var E_tail_tale_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(E_tail_tale_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Stories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Stories */ \"./components/Stories.jsx\");\n/* harmony import */ var _Posts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Posts */ \"./components/Posts.jsx\");\n/* harmony import */ var _MiniProfile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MiniProfile */ \"./components/MiniProfile.jsx\");\n/* harmony import */ var _Suggestions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Suggestions */ \"./components/Suggestions.jsx\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n\n\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction Feed() {\n    _s();\n    //getting session obj\n    var ref2 = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_7__.useSession)(), session = ref2.data;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), following = ref1[0], setFollowing = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var ref;\n        if (session) (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_9__.onSnapshot)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_9__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_8__.db, 'users', session === null || session === void 0 ? void 0 : (ref = session.user) === null || ref === void 0 ? void 0 : ref.uid, 'following'), function(snapshot) {\n            return setFollowing(snapshot.docs);\n        }), [\n            _firebase__WEBPACK_IMPORTED_MODULE_8__.db\n        ];\n    });\n    //adding user to db\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (session) {\n            addUser();\n            setHomeFeed();\n        }\n    }, []);\n    function addUser() {\n        return _addUser.apply(this, arguments);\n    }\n    function _addUser() {\n        _addUser = _asyncToGenerator(E_tail_tale_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return E_tail_tale_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_9__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_9__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_8__.db, 'users', session.user.uid), {\n                            username: session.user.username,\n                            fullname: session.user.name,\n                            profileImg: session.user.image,\n                            lastLogin: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_9__.serverTimestamp)()\n                        });\n                    case 2:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _addUser.apply(this, arguments);\n    }\n    function setHomeFeed() {\n        return _setHomeFeed.apply(this, arguments);\n    }\n    function _setHomeFeed() {\n        _setHomeFeed = _asyncToGenerator(E_tail_tale_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return E_tail_tale_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        following.map(function(obj) {\n                            return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_9__.onSnapshot)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_9__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_8__.db, 'users', obj.id, 'posts'), function(snapshot) {\n                                snapshot.docs.map(function(obj2) {\n                                    var ref;\n                                    (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_9__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_9__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_8__.db, 'users', session === null || session === void 0 ? void 0 : (ref = session.user) === null || ref === void 0 ? void 0 : ref.uid, 'homeFeed'), obj2);\n                                });\n                            });\n                        });\n                    case 1:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _setHomeFeed.apply(this, arguments);\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n        className: \"grid grid-cols-1 md:grid-cols-2 md:max-w-3xl \\n    xl:grid-cols-3 xl:max-w-6xl mx-auto \".concat(!session && \"!grid-cols-1 !max-w-3xl\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"section\", {\n                className: \"col-span-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Posts__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"E:\\\\tail-tale\\\\components\\\\Feed.jsx\",\n                    lineNumber: 52,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\tail-tale\\\\components\\\\Feed.jsx\",\n                lineNumber: 50,\n                columnNumber: 13\n            }, this),\n            session && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"section\", {\n                className: \"hidden xl:inline-grid md:col-span-1\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"fixed\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_MiniProfile__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                            fileName: \"E:\\\\tail-tale\\\\components\\\\Feed.jsx\",\n                            lineNumber: 57,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Suggestions__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                            fileName: \"E:\\\\tail-tale\\\\components\\\\Feed.jsx\",\n                            lineNumber: 58,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\tail-tale\\\\components\\\\Feed.jsx\",\n                    lineNumber: 56,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\tail-tale\\\\components\\\\Feed.jsx\",\n                lineNumber: 55,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\tail-tale\\\\components\\\\Feed.jsx\",\n        lineNumber: 48,\n        columnNumber: 9\n    }, this));\n}\n_s(Feed, \"3EVaQk+wIcodEW3Jbprb1SUHnVk=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_7__.useSession\n    ];\n});\n_c = Feed;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Feed);\nvar _c;\n$RefreshReg$(_c, \"Feed\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVLLEdBQUcsRUFBRSxDQUFVLFlBQUdjLElBQUk7Z0NBQ2pFLENBQUM7NEJBQ0wsQ0FBQzs7Ozs7OztRQUdiLENBQUM7ZUFWY1YsWUFBVzs7SUFXMUIsTUFBTSw2RUFDRFcsQ0FBSTtRQUFDQyxTQUFTLEVBQUcsQ0FDYyx5RkFBd0MsUUFBckNyQixPQUFPLElBQUksQ0FBeUI7O3dGQUNsRXNCLENBQU87Z0JBQUNELFNBQVMsRUFBQyxDQUFZO3NHQUUxQnRDLDhDQUFLOzs7Ozs7Ozs7O1lBRVRpQixPQUFPLGdGQUNIc0IsQ0FBTztnQkFBQ0QsU0FBUyxFQUFDLENBQXFDO3NHQUNuREUsQ0FBRztvQkFBQ0YsU0FBUyxFQUFDLENBQU87O29HQUNqQnJDLG9EQUFXOzs7OztvR0FDWEMsb0RBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPcEMsQ0FBQztHQXZEUWMsSUFBSTs7UUFFaUJiLHVEQUFVOzs7S0FGL0JhLElBQUk7QUF5RGIsK0RBQWVBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GZWVkLmpzeD84OTEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTdG9yaWVzIGZyb20gJy4vU3RvcmllcydcclxuaW1wb3J0IFBvc3RzIGZyb20gJy4vUG9zdHMnXHJcbmltcG9ydCBNaW5pUHJvZmlsZSBmcm9tICcuL01pbmlQcm9maWxlJ1xyXG5pbXBvcnQgU3VnZ2VzdGlvbnMgZnJvbSAnLi9TdWdnZXN0aW9ucydcclxuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCdcclxuaW1wb3J0IHsgZGIgfSBmcm9tICcuLi9maXJlYmFzZSdcclxuaW1wb3J0IHsgYWRkRG9jLCBjb2xsZWN0aW9uLCBkZWxldGVEb2MsIGRvYywgZ2V0RG9jLCBvblNuYXBzaG90LCBvcmRlckJ5LCBxdWVyeSwgc2VydmVyVGltZXN0YW1wLCBzZXREb2MsIHdoZXJlIH0gZnJvbSAnZmlyZWJhc2UvZmlyZXN0b3JlJ1xyXG5cclxuZnVuY3Rpb24gRmVlZCgpIHtcclxuICAgIC8vZ2V0dGluZyBzZXNzaW9uIG9ialxyXG4gICAgY29uc3QgeyBkYXRhOiBzZXNzaW9uIH0gPSB1c2VTZXNzaW9uKCk7XHJcblxyXG4gICAgY29uc3QgW2ZvbGxvd2luZywgc2V0Rm9sbG93aW5nXSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoc2Vzc2lvbikgb25TbmFwc2hvdChjb2xsZWN0aW9uKGRiLCAndXNlcnMnLCBzZXNzaW9uPy51c2VyPy51aWQsICdmb2xsb3dpbmcnKSxcclxuICAgICAgICAgICAgKHNuYXBzaG90KSA9PiBzZXRGb2xsb3dpbmcoc25hcHNob3QuZG9jcylcclxuICAgICAgICApLCBbZGJdXHJcbiAgICB9KVxyXG5cclxuICAgIC8vYWRkaW5nIHVzZXIgdG8gZGJcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHNlc3Npb24pIHtcclxuICAgICAgICAgICAgYWRkVXNlcigpXHJcbiAgICAgICAgICAgIHNldEhvbWVGZWVkKClcclxuICAgICAgICB9XHJcbiAgICB9LFtdKVxyXG4gICAgYXN5bmMgZnVuY3Rpb24gYWRkVXNlcigpIHtcclxuICAgICAgICBhd2FpdCBzZXREb2MoZG9jKGRiLCAndXNlcnMnLCBzZXNzaW9uLnVzZXIudWlkKSwge1xyXG4gICAgICAgICAgICB1c2VybmFtZTogc2Vzc2lvbi51c2VyLnVzZXJuYW1lLFxyXG4gICAgICAgICAgICBmdWxsbmFtZTogc2Vzc2lvbi51c2VyLm5hbWUsXHJcbiAgICAgICAgICAgIHByb2ZpbGVJbWc6IHNlc3Npb24udXNlci5pbWFnZSxcclxuICAgICAgICAgICAgbGFzdExvZ2luOiBzZXJ2ZXJUaW1lc3RhbXAoKSxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgYXN5bmMgZnVuY3Rpb24gc2V0SG9tZUZlZWQoKSB7XHJcbiAgICAgICAgZm9sbG93aW5nLm1hcChvYmogPT4gKFxyXG4gICAgICAgICAgICBvblNuYXBzaG90KGNvbGxlY3Rpb24oZGIsICd1c2VycycsIG9iai5pZCwgJ3Bvc3RzJyksXHJcbiAgICAgICAgICAgICAgICAoc25hcHNob3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzbmFwc2hvdC5kb2NzLm1hcChvYmoyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0RG9jKGRvYyhkYiwgJ3VzZXJzJywgc2Vzc2lvbj8udXNlcj8udWlkLCAnaG9tZUZlZWQnKSwgb2JqMilcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKSlcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtgZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBtZDptYXgtdy0zeGwgXHJcbiAgICB4bDpncmlkLWNvbHMtMyB4bDptYXgtdy02eGwgbXgtYXV0byAkeyFzZXNzaW9uICYmIFwiIWdyaWQtY29scy0xICFtYXgtdy0zeGxcIn1gfT5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdjb2wtc3Bhbi0yJz5cclxuICAgICAgICAgICAgICAgIHsvKiA8U3RvcmllcyAvPiAqL31cclxuICAgICAgICAgICAgICAgIDxQb3N0cyAvPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIHtzZXNzaW9uICYmIChcclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0naGlkZGVuIHhsOmlubGluZS1ncmlkIG1kOmNvbC1zcGFuLTEnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaXhlZCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNaW5pUHJvZmlsZSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3VnZ2VzdGlvbnMgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGZWVkIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJTdG9yaWVzIiwiUG9zdHMiLCJNaW5pUHJvZmlsZSIsIlN1Z2dlc3Rpb25zIiwidXNlU2Vzc2lvbiIsImRiIiwiYWRkRG9jIiwiY29sbGVjdGlvbiIsImRlbGV0ZURvYyIsImRvYyIsImdldERvYyIsIm9uU25hcHNob3QiLCJvcmRlckJ5IiwicXVlcnkiLCJzZXJ2ZXJUaW1lc3RhbXAiLCJzZXREb2MiLCJ3aGVyZSIsIkZlZWQiLCJzZXNzaW9uIiwiZGF0YSIsImZvbGxvd2luZyIsInNldEZvbGxvd2luZyIsInVzZXIiLCJ1aWQiLCJzbmFwc2hvdCIsImRvY3MiLCJhZGRVc2VyIiwic2V0SG9tZUZlZWQiLCJ1c2VybmFtZSIsImZ1bGxuYW1lIiwibmFtZSIsInByb2ZpbGVJbWciLCJpbWFnZSIsImxhc3RMb2dpbiIsIm1hcCIsIm9iaiIsImlkIiwib2JqMiIsIm1haW4iLCJjbGFzc05hbWUiLCJzZWN0aW9uIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Feed.jsx\n");

/***/ })

});