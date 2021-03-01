webpackHotUpdate_N_E("pages/[book]/[movie]",{

/***/ "./pages/[book]/[movie]/index.tsx":
/*!****************************************!*\
  !*** ./pages/[book]/[movie]/index.tsx ***!
  \****************************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_Breadcrumbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Breadcrumbs */ \"./node_modules/@material-ui/core/esm/Breadcrumbs/index.js\");\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Card */ \"./node_modules/@material-ui/core/esm/Card/index.js\");\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CardContent */ \"./node_modules/@material-ui/core/esm/CardContent/index.js\");\n/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardMedia */ \"./node_modules/@material-ui/core/esm/CardMedia/index.js\");\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Grid */ \"./node_modules/@material-ui/core/esm/Grid/index.js\");\n/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Paper */ \"./node_modules/@material-ui/core/esm/Paper/index.js\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/esm/Typography/index.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _components_TabBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/TabBar */ \"./components/TabBar.tsx\");\n/* harmony import */ var _api_paths__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../api/paths */ \"./api/paths.ts\");\n\n\nvar _jsxFileName = \"/Users/horiuchi/work/bijutune/webfront/pages/[book]/[movie]/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$(),\n    _s3 = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__[\"makeStyles\"])({\n  root: {\n    flexGrow: 1\n  },\n  image: {\n    width: 300,\n    height: 160,\n    backgroundSize: 'contain'\n  }\n});\n\nvar MovieCard = function MovieCard(_ref) {\n  _s();\n\n  var url = _ref.url,\n      type = _ref.type,\n      image = _ref.image;\n  var classes = useStyles();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      className: classes.image,\n      component: \"video\",\n      src: url,\n      poster: image,\n      controls: true\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        gutterBottom: true,\n        variant: \"h5\",\n        component: \"h2\",\n        children: type\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 53,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(MovieCard, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c = MovieCard;\n\nvar YouTubeCard = function YouTubeCard(_ref2) {\n  _s2();\n\n  var url = _ref2.url,\n      type = _ref2.type;\n  var classes = useStyles();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      className: classes.image,\n      component: \"iframe\",\n      src: url,\n      frameBorder: \"0\",\n      allow: \"accelerometer; autoplay; encrypted-media; picture-in-picture\",\n      allowFullScreen: true\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        gutterBottom: true,\n        variant: \"h5\",\n        component: \"h2\",\n        children: type\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 73,\n    columnNumber: 5\n  }, _this);\n};\n\n_s2(YouTubeCard, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c2 = YouTubeCard;\n\nvar Movie = function Movie(_ref3) {\n  _s3();\n\n  var book = _ref3.book,\n      movie = _ref3.movie;\n  var classes = useStyles();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: classes.root,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_TabBar__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n      index: 0\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      elevation: 0,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_Breadcrumbs__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(NextLink, {\n          href: \"/\",\n          children: \"\\u3073\\u3058\\u3085\\u30C1\\u30E5\\u30FC\\u30F3\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 91,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(NextLink, {\n          href: \"/\".concat(book.index, \"/\"),\n          children: book.name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 92,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n          color: \"textPrimary\",\n          children: movie.name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 93,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        variant: \"h3\",\n        gutterBottom: true,\n        children: movie.name\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        container: true,\n        spacing: 2,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          item: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MovieCard, {\n            url: Object(_api_paths__WEBPACK_IMPORTED_MODULE_10__[\"getMovieUrl\"])(movie.main.path),\n            type: \"\\u3046\\u305F\",\n            image: movie.image\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 100,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 99,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          item: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MovieCard, {\n            url: Object(_api_paths__WEBPACK_IMPORTED_MODULE_10__[\"getMovieUrl\"])(movie.explanatory.path),\n            type: \"\\u89E3\\u8AAC\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 107,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 106,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          item: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MovieCard, {\n            url: Object(_api_paths__WEBPACK_IMPORTED_MODULE_10__[\"getMovieUrl\"])(movie.karaoke.path),\n            type: \"\\u30AB\\u30E9\\u30AA\\u30B1\",\n            image: movie.image\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 110,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 109,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          item: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(YouTubeCard, {\n            url: \"https://www.youtube.com/embed/\".concat(movie.youtubeId),\n            type: \"YouTube\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 117,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 116,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 98,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 87,\n    columnNumber: 5\n  }, _this);\n};\n\n_s3(Movie, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c3 = Movie;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Movie);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"MovieCard\");\n$RefreshReg$(_c2, \"YouTubeCard\");\n$RefreshReg$(_c3, \"Movie\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW2Jvb2tdL1ttb3ZpZV0vaW5kZXgudHN4PzlhMmIiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInJvb3QiLCJmbGV4R3JvdyIsImltYWdlIiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kU2l6ZSIsIk1vdmllQ2FyZCIsInVybCIsInR5cGUiLCJjbGFzc2VzIiwiWW91VHViZUNhcmQiLCJNb3ZpZSIsImJvb2siLCJtb3ZpZSIsImluZGV4IiwibmFtZSIsImdldE1vdmllVXJsIiwibWFpbiIsInBhdGgiLCJleHBsYW5hdG9yeSIsImthcmFva2UiLCJ5b3V0dWJlSWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQWFBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQztBQUMzQkMsTUFBSSxFQUFFO0FBQ0pDLFlBQVEsRUFBRTtBQUROLEdBRHFCO0FBSTNCQyxPQUFLLEVBQUU7QUFDTEMsU0FBSyxFQUFFLEdBREY7QUFFTEMsVUFBTSxFQUFFLEdBRkg7QUFHTEMsa0JBQWMsRUFBRTtBQUhYO0FBSm9CLENBQUQsQ0FBNUI7O0FBMEJBLElBQU1DLFNBQW1DLEdBQUcsU0FBdENBLFNBQXNDLE9BQTBCO0FBQUE7O0FBQUEsTUFBdkJDLEdBQXVCLFFBQXZCQSxHQUF1QjtBQUFBLE1BQWxCQyxJQUFrQixRQUFsQkEsSUFBa0I7QUFBQSxNQUFaTixLQUFZLFFBQVpBLEtBQVk7QUFDcEUsTUFBTU8sT0FBTyxHQUFHWCxTQUFTLEVBQXpCO0FBQ0Esc0JBQ0UscUVBQUMsOERBQUQ7QUFBQSw0QkFDRSxxRUFBQyxtRUFBRDtBQUNFLGVBQVMsRUFBRVcsT0FBTyxDQUFDUCxLQURyQjtBQUVFLGVBQVMsRUFBQyxPQUZaO0FBR0UsU0FBRyxFQUFFSyxHQUhQO0FBSUUsWUFBTSxFQUFFTCxLQUpWO0FB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LGlCQUFLLEVBQUVMLEtBQUssQ0FBQ1g7QUFIZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQVFFLHFFQUFDLDhEQUFEO0FBQU0sY0FBSSxNQUFWO0FBQUEsaUNBQ0UscUVBQUMsU0FBRDtBQUFXLGVBQUcsRUFBRWMsK0RBQVcsQ0FBQ0gsS0FBSyxDQUFDTSxXQUFOLENBQWtCRCxJQUFuQixDQUEzQjtBQUFxRCxnQkFBSSxFQUFDO0FBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVJGLGVBV0UscUVBQUMsOERBQUQ7QUFBTSxjQUFJLE1BQVY7QUFBQSxpQ0FDRSxxRUFBQyxTQUFEO0FBQ0UsZUFBRyxFQUFFRiwrREFBVyxDQUFDSCxLQUFLLENBQUNPLE9BQU4sQ0FBY0YsSUFBZixDQURsQjtBQUVFLGdCQUFJLEVBQUMsMEJBRlA7QUFHRSxpQkFBSyxFQUFFTCxLQUFLLENBQUNYO0FBSGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWEYsZUFrQkUscUVBQUMsOERBQUQ7QUFBTSxjQUFJLE1BQVY7QUFBQSxpQ0FDRSxxRUFBQyxXQUFEO0FBQ0UsZUFBRywwQ0FBbUNXLEtBQUssQ0FBQ1EsU0FBekMsQ0FETDtBQUVFLGdCQUFJLEVBQUM7QUFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFsQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF3Q0QsQ0ExQ0Q7O0lBQU1WLEs7VUFDWWIsUzs7O01BRFphLEs7O0FBNENTQSxvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL1tib29rXS9bbW92aWVdL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCcmVhZGNydW1icyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CcmVhZGNydW1icyc7XG5pbXBvcnQgQ2FyZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkJztcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudCc7XG5pbXBvcnQgQ2FyZE1lZGlhIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRNZWRpYSc7XG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHsgR2V0U3RhdGljUGF0aHMsIEdldFN0YXRpY1Byb3BzIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgVGFiQmFyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvVGFiQmFyJztcbmltcG9ydCB7IEJvb2tEYXRhLCBnZXRBbGxQYXRoLCBnZXRNb3ZpZVVybCwgTW92aWVHcm91cCB9IGZyb20gJy4uLy4uLy4uL2FwaS9wYXRocyc7XG5cbmludGVyZmFjZSBNb3ZpZVByb3BzIHtcbiAgYm9vazogQm9va0RhdGE7XG4gIG1vdmllOiBNb3ZpZUdyb3VwO1xufVxuXG5pbnRlcmZhY2UgTW92aWVDYXJkUHJvcHMge1xuICB1cmw6IHN0cmluZztcbiAgdHlwZTogc3RyaW5nO1xuICBpbWFnZT86IHN0cmluZztcbn1cblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XG4gIHJvb3Q6IHtcbiAgICBmbGV4R3JvdzogMSxcbiAgfSxcbiAgaW1hZ2U6IHtcbiAgICB3aWR0aDogMzAwLFxuICAgIGhlaWdodDogMTYwLFxuICAgIGJhY2tncm91bmRTaXplOiAnY29udGFpbicsXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzOiBHZXRTdGF0aWNQYXRocyA9IGFzeW5jIChfKSA9PiB7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRBbGxQYXRoKCk7XG4gIGNvbnN0IHBhdGhzID0gZGF0YS5mbGF0TWFwKChib29rKSA9PlxuICAgIGJvb2subW92aWVzLm1hcCgobW92aWUpID0+IGAvJHtib29rLmluZGV4fS8ke21vdmllLmluZGV4fWApXG4gICk7XG4gIHJldHVybiB7IHBhdGhzLCBmYWxsYmFjazogZmFsc2UgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xuICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0QWxsUGF0aCgpO1xuICBjb25zdCBib29rSW5kZXggPSBwYXJzZUludChwYXJhbXMhLmJvb2shLnRvU3RyaW5nKCksIDEwKTtcbiAgY29uc3QgbW92aWVJbmRleCA9IHBhcnNlSW50KHBhcmFtcyEubW92aWUhLnRvU3RyaW5nKCksIDEwKTtcbiAgcmV0dXJuIHsgcHJvcHM6IHsgYm9vazogZGF0YVtib29rSW5kZXhdLCBtb3ZpZTogZGF0YVtib29rSW5kZXhdLm1vdmllc1ttb3ZpZUluZGV4XSB9IH07XG59O1xuXG5jb25zdCBNb3ZpZUNhcmQ6IFJlYWN0LkZDPE1vdmllQ2FyZFByb3BzPiA9ICh7IHVybCwgdHlwZSwgaW1hZ2UgfSkgPT4ge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIHJldHVybiAoXG4gICAgPENhcmQ+XG4gICAgICA8Q2FyZE1lZGlhXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZX1cbiAgICAgICAgY29tcG9uZW50PVwidmlkZW9cIlxuICAgICAgICBzcmM9e3VybH1cbiAgICAgICAgcG9zdGVyPXtpbWFnZX1cbiAgICAgICAgY29udHJvbHNcbiAgICAgIC8+XG4gICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSB2YXJpYW50PVwiaDVcIiBjb21wb25lbnQ9XCJoMlwiPlxuICAgICAgICAgIHt0eXBlfVxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8L0NhcmRDb250ZW50PlxuICAgIDwvQ2FyZD5cbiAgKTtcbn07XG5cbmNvbnN0IFlvdVR1YmVDYXJkOiBSZWFjdC5GQzxNb3ZpZUNhcmRQcm9wcz4gPSAoeyB1cmwsIHR5cGUgfSkgPT4ge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIHJldHVybiAoXG4gICAgPENhcmQ+XG4gICAgICA8Q2FyZE1lZGlhIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZX0gY29tcG9uZW50PVwiaWZyYW1lXCIgc3JjPXt1cmx9IGZyYW1lQm9yZGVyPScwJyBhbGxvdz0nYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGVuY3J5cHRlZC1tZWRpYTsgcGljdHVyZS1pbi1waWN0dXJlJyBhbGxvd0Z1bGxTY3JlZW4gLz5cbiAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tIHZhcmlhbnQ9XCJoNVwiIGNvbXBvbmVudD1cImgyXCI+XG4gICAgICAgICAge3R5cGV9XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgPC9DYXJkPlxuICApO1xufTtcblxuY29uc3QgTW92aWU6IFJlYWN0LkZDPE1vdmllUHJvcHM+ID0gKHsgYm9vaywgbW92aWUgfSkgPT4ge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICA8VGFiQmFyIGluZGV4PXswfSAvPlxuICAgICAgPFBhcGVyIGVsZXZhdGlvbj17MH0+XG4gICAgICAgIDxCcmVhZGNydW1icz5cbiAgICAgICAgICA8TmV4dExpbmsgaHJlZj0nLyc+44Gz44GY44KF44OB44Ol44O844OzPC9OZXh0TGluaz5cbiAgICAgICAgICA8TmV4dExpbmsgaHJlZj17YC8ke2Jvb2suaW5kZXh9L2B9Pntib29rLm5hbWV9PC9OZXh0TGluaz5cbiAgICAgICAgICA8VHlwb2dyYXBoeSBjb2xvcj0ndGV4dFByaW1hcnknPnttb3ZpZS5uYW1lfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9CcmVhZGNydW1icz5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgzXCIgZ3V0dGVyQm90dG9tPlxuICAgICAgICAgIHttb3ZpZS5uYW1lfVxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cbiAgICAgICAgICA8R3JpZCBpdGVtPlxuICAgICAgICAgICAgPE1vdmllQ2FyZFxuICAgICAgICAgICAgICB1cmw9e2dldE1vdmllVXJsKG1vdmllLm1haW4ucGF0aCl9XG4gICAgICAgICAgICAgIHR5cGU9XCLjgYbjgZ9cIlxuICAgICAgICAgICAgICBpbWFnZT17bW92aWUuaW1hZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBpdGVtPlxuICAgICAgICAgICAgPE1vdmllQ2FyZCB1cmw9e2dldE1vdmllVXJsKG1vdmllLmV4cGxhbmF0b3J5LnBhdGgpfSB0eXBlPVwi6Kej6KqsXCIgLz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgaXRlbT5cbiAgICAgICAgICAgIDxNb3ZpZUNhcmRcbiAgICAgICAgICAgICAgdXJsPXtnZXRNb3ZpZVVybChtb3ZpZS5rYXJhb2tlLnBhdGgpfVxuICAgICAgICAgICAgICB0eXBlPVwi44Kr44Op44Kq44KxXCJcbiAgICAgICAgICAgICAgaW1hZ2U9e21vdmllLmltYWdlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgaXRlbT5cbiAgICAgICAgICAgIDxZb3VUdWJlQ2FyZFxuICAgICAgICAgICAgICB1cmw9e2BodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke21vdmllLnlvdXR1YmVJZH1gfVxuICAgICAgICAgICAgICB0eXBlPVwiWW91VHViZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9QYXBlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1vdmllO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[book]/[movie]/index.tsx\n");

/***/ })

})