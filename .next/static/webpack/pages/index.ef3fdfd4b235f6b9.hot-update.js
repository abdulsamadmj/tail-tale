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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Stories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Stories */ \"./components/Stories.jsx\");\n/* harmony import */ var _Posts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Posts */ \"./components/Posts.jsx\");\n/* harmony import */ var _MiniProfile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MiniProfile */ \"./components/MiniProfile.jsx\");\n/* harmony import */ var _Suggestions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Suggestions */ \"./components/Suggestions.jsx\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Feed() {\n    _s();\n    //getting session obj\n    var ref = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_6__.useSession)(), session = ref.data;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), following = ref1[0], setFollowing = ref1[1];\n    // useEffect(() => {\n    //     if (session) onSnapshot(collection(db, 'users', session?.user?.uid, 'following'),\n    //         (snapshot) => setFollowing(snapshot.docs)\n    //     ), [db]\n    // })\n    //adding user to db\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (session) {\n            addUser();\n            setHomeFeed();\n        }\n    }, []);\n    // async function addUser() {\n    //     await setDoc(doc(db, 'users', session.user.uid), {\n    //         username: session.user.username,\n    //         fullname: session.user.name,\n    //         profileImg: session.user.image,\n    //         lastLogin: serverTimestamp(),\n    //     })\n    // }\n    // async function setHomeFeed() {\n    //     following.map(obj => (\n    //         onSnapshot(collection(db, 'users', obj.id, 'posts'),\n    //             (snapshot) => {\n    //                 snapshot.docs.map(obj2 => {\n    //                     setDoc(doc(db, 'users', session?.user?.uid, 'homeFeed'), obj2)\n    //                 })\n    //             }\n    //         )\n    //     ))\n    // }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"grid grid-cols-1 md:grid-cols-2 md:max-w-3xl \\n    xl:grid-cols-3 xl:max-w-6xl mx-auto \".concat(!session && \"!grid-cols-1 !max-w-3xl\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"col-span-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Posts__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"E:\\\\tail-tale\\\\components\\\\Feed.jsx\",\n                    lineNumber: 52,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\tail-tale\\\\components\\\\Feed.jsx\",\n                lineNumber: 50,\n                columnNumber: 13\n            }, this),\n            session && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"hidden xl:inline-grid md:col-span-1\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"fixed\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MiniProfile__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                            fileName: \"E:\\\\tail-tale\\\\components\\\\Feed.jsx\",\n                            lineNumber: 57,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Suggestions__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                            fileName: \"E:\\\\tail-tale\\\\components\\\\Feed.jsx\",\n                            lineNumber: 58,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\tail-tale\\\\components\\\\Feed.jsx\",\n                    lineNumber: 56,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\tail-tale\\\\components\\\\Feed.jsx\",\n                lineNumber: 55,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\tail-tale\\\\components\\\\Feed.jsx\",\n        lineNumber: 48,\n        columnNumber: 9\n    }, this));\n}\n_s(Feed, \"MIWyglJCNUAt4ihuO2PuzsNSzHI=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_6__.useSession\n    ];\n});\n_c = Feed;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Feed);\nvar _c;\n$RefreshReg$(_c, \"Feed\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZlZWQuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWtEO0FBQ25CO0FBQ0o7QUFDWTtBQUNBO0FBQ0s7QUFDWjtBQUMyRzs7U0FFbElvQixJQUFJLEdBQUcsQ0FBQzs7SUFDYixFQUFxQjtJQUNyQixHQUFLLENBQXFCYixHQUFZLEdBQVpBLDJEQUFVLElBQXRCYyxPQUFPLEdBQUtkLEdBQVksQ0FBOUJlLElBQUk7SUFFWixHQUFLLENBQTZCcEIsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxHQUF0Q3FCLFNBQVMsR0FBa0JyQixJQUFZLEtBQTVCc0IsWUFBWSxHQUFJdEIsSUFBWTtJQUM5QyxFQUFvQjtJQUNwQixFQUF3RjtJQUN4RixFQUFvRDtJQUNwRCxFQUFjO0lBQ2QsRUFBSztJQUVMLEVBQW1CO0lBQ25CRCxnREFBUyxDQUFDLFFBQVEsR0FBRixDQUFDO1FBQ2IsRUFBRSxFQUFFb0IsT0FBTyxFQUFFLENBQUM7WUFDVkksT0FBTztZQUNQQyxXQUFXO1FBQ2YsQ0FBQztJQUNMLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDSixFQUE2QjtJQUM3QixFQUF5RDtJQUN6RCxFQUEyQztJQUMzQyxFQUF1QztJQUN2QyxFQUEwQztJQUMxQyxFQUF3QztJQUN4QyxFQUFTO0lBQ1QsRUFBSTtJQUNKLEVBQWlDO0lBQ2pDLEVBQTZCO0lBQzdCLEVBQStEO0lBQy9ELEVBQThCO0lBQzlCLEVBQThDO0lBQzlDLEVBQXFGO0lBQ3JGLEVBQXFCO0lBQ3JCLEVBQWdCO0lBQ2hCLEVBQVk7SUFDWixFQUFTO0lBQ1QsRUFBSTtJQUNKLE1BQU0sNkVBQ0RDLENBQUk7UUFBQ0MsU0FBUyxFQUFHLENBQ2MseUZBQXdDLFFBQXJDUCxPQUFPLElBQUksQ0FBeUI7O3dGQUNsRVEsQ0FBTztnQkFBQ0QsU0FBUyxFQUFDLENBQVk7c0dBRTFCeEIsOENBQUs7Ozs7Ozs7Ozs7WUFFVGlCLE9BQU8sZ0ZBQ0hRLENBQU87Z0JBQUNELFNBQVMsRUFBQyxDQUFxQztzR0FDbkRFLENBQUc7b0JBQUNGLFNBQVMsRUFBQyxDQUFPOztvR0FDakJ2QixvREFBVzs7Ozs7b0dBQ1hDLG9EQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3BDLENBQUM7R0F2RFFjLElBQUk7O1FBRWlCYix1REFBVTs7O0tBRi9CYSxJQUFJO0FBeURiLCtEQUFlQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRmVlZC5qc3g/ODkxMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgU3RvcmllcyBmcm9tICcuL1N0b3JpZXMnXHJcbmltcG9ydCBQb3N0cyBmcm9tICcuL1Bvc3RzJ1xyXG5pbXBvcnQgTWluaVByb2ZpbGUgZnJvbSAnLi9NaW5pUHJvZmlsZSdcclxuaW1wb3J0IFN1Z2dlc3Rpb25zIGZyb20gJy4vU3VnZ2VzdGlvbnMnXHJcbmltcG9ydCB7IHVzZVNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnXHJcbmltcG9ydCB7IGRiIH0gZnJvbSAnLi4vZmlyZWJhc2UnXHJcbmltcG9ydCB7IGFkZERvYywgY29sbGVjdGlvbiwgZGVsZXRlRG9jLCBkb2MsIGdldERvYywgb25TbmFwc2hvdCwgb3JkZXJCeSwgcXVlcnksIHNlcnZlclRpbWVzdGFtcCwgc2V0RG9jLCB3aGVyZSB9IGZyb20gJ2ZpcmViYXNlL2ZpcmVzdG9yZSdcclxuXHJcbmZ1bmN0aW9uIEZlZWQoKSB7XHJcbiAgICAvL2dldHRpbmcgc2Vzc2lvbiBvYmpcclxuICAgIGNvbnN0IHsgZGF0YTogc2Vzc2lvbiB9ID0gdXNlU2Vzc2lvbigpO1xyXG5cclxuICAgIGNvbnN0IFtmb2xsb3dpbmcsIHNldEZvbGxvd2luZ10gPSB1c2VTdGF0ZShbXSlcclxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyAgICAgaWYgKHNlc3Npb24pIG9uU25hcHNob3QoY29sbGVjdGlvbihkYiwgJ3VzZXJzJywgc2Vzc2lvbj8udXNlcj8udWlkLCAnZm9sbG93aW5nJyksXHJcbiAgICAvLyAgICAgICAgIChzbmFwc2hvdCkgPT4gc2V0Rm9sbG93aW5nKHNuYXBzaG90LmRvY3MpXHJcbiAgICAvLyAgICAgKSwgW2RiXVxyXG4gICAgLy8gfSlcclxuXHJcbiAgICAvL2FkZGluZyB1c2VyIHRvIGRiXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChzZXNzaW9uKSB7XHJcbiAgICAgICAgICAgIGFkZFVzZXIoKVxyXG4gICAgICAgICAgICBzZXRIb21lRmVlZCgpXHJcbiAgICAgICAgfVxyXG4gICAgfSxbXSlcclxuICAgIC8vIGFzeW5jIGZ1bmN0aW9uIGFkZFVzZXIoKSB7XHJcbiAgICAvLyAgICAgYXdhaXQgc2V0RG9jKGRvYyhkYiwgJ3VzZXJzJywgc2Vzc2lvbi51c2VyLnVpZCksIHtcclxuICAgIC8vICAgICAgICAgdXNlcm5hbWU6IHNlc3Npb24udXNlci51c2VybmFtZSxcclxuICAgIC8vICAgICAgICAgZnVsbG5hbWU6IHNlc3Npb24udXNlci5uYW1lLFxyXG4gICAgLy8gICAgICAgICBwcm9maWxlSW1nOiBzZXNzaW9uLnVzZXIuaW1hZ2UsXHJcbiAgICAvLyAgICAgICAgIGxhc3RMb2dpbjogc2VydmVyVGltZXN0YW1wKCksXHJcbiAgICAvLyAgICAgfSlcclxuICAgIC8vIH1cclxuICAgIC8vIGFzeW5jIGZ1bmN0aW9uIHNldEhvbWVGZWVkKCkge1xyXG4gICAgLy8gICAgIGZvbGxvd2luZy5tYXAob2JqID0+IChcclxuICAgIC8vICAgICAgICAgb25TbmFwc2hvdChjb2xsZWN0aW9uKGRiLCAndXNlcnMnLCBvYmouaWQsICdwb3N0cycpLFxyXG4gICAgLy8gICAgICAgICAgICAgKHNuYXBzaG90KSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgc25hcHNob3QuZG9jcy5tYXAob2JqMiA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHNldERvYyhkb2MoZGIsICd1c2VycycsIHNlc3Npb24/LnVzZXI/LnVpZCwgJ2hvbWVGZWVkJyksIG9iajIpXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgfSlcclxuICAgIC8vICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgKVxyXG4gICAgLy8gICAgICkpXHJcbiAgICAvLyB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT17YGdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgbWQ6bWF4LXctM3hsIFxyXG4gICAgeGw6Z3JpZC1jb2xzLTMgeGw6bWF4LXctNnhsIG14LWF1dG8gJHshc2Vzc2lvbiAmJiBcIiFncmlkLWNvbHMtMSAhbWF4LXctM3hsXCJ9YH0+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nY29sLXNwYW4tMic+XHJcbiAgICAgICAgICAgICAgICB7LyogPFN0b3JpZXMgLz4gKi99XHJcbiAgICAgICAgICAgICAgICA8UG9zdHMgLz5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICB7c2Vzc2lvbiAmJiAoXHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2hpZGRlbiB4bDppbmxpbmUtZ3JpZCBtZDpjb2wtc3Bhbi0xJz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZml4ZWQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWluaVByb2ZpbGUgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN1Z2dlc3Rpb25zIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmVlZCJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiU3RvcmllcyIsIlBvc3RzIiwiTWluaVByb2ZpbGUiLCJTdWdnZXN0aW9ucyIsInVzZVNlc3Npb24iLCJkYiIsImFkZERvYyIsImNvbGxlY3Rpb24iLCJkZWxldGVEb2MiLCJkb2MiLCJnZXREb2MiLCJvblNuYXBzaG90Iiwib3JkZXJCeSIsInF1ZXJ5Iiwic2VydmVyVGltZXN0YW1wIiwic2V0RG9jIiwid2hlcmUiLCJGZWVkIiwic2Vzc2lvbiIsImRhdGEiLCJmb2xsb3dpbmciLCJzZXRGb2xsb3dpbmciLCJhZGRVc2VyIiwic2V0SG9tZUZlZWQiLCJtYWluIiwiY2xhc3NOYW1lIiwic2VjdGlvbiIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Feed.jsx\n");

/***/ })

});