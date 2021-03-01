webpackHotUpdate_N_E("pages/[book]",{

/***/ "./pages/[book]/index.tsx":
/*!********************************!*\
  !*** ./pages/[book]/index.tsx ***!
  \********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Card */ \"./node_modules/@material-ui/core/esm/Card/index.js\");\n/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/CardActionArea */ \"./node_modules/@material-ui/core/esm/CardActionArea/index.js\");\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CardContent */ \"./node_modules/@material-ui/core/esm/CardContent/index.js\");\n/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardMedia */ \"./node_modules/@material-ui/core/esm/CardMedia/index.js\");\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Grid */ \"./node_modules/@material-ui/core/esm/Grid/index.js\");\n/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Paper */ \"./node_modules/@material-ui/core/esm/Paper/index.js\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/esm/Typography/index.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _components_TabBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/TabBar */ \"./components/TabBar.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/dist/client/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_11__);\n\n\nvar _jsxFileName = \"/Users/horiuchi/work/bijutune/webfront/pages/[book]/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__[\"makeStyles\"])({\n  root: {\n    flexGrow: 1\n  },\n  image: {\n    height: 200,\n    backgroundSize: 'contain'\n  }\n});\n\nvar MovieCard = function MovieCard(_ref) {\n  _s();\n\n  var bookIndex = _ref.bookIndex,\n      movie = _ref.movie;\n  var classes = useStyles();\n  var router = Object(next_dist_client_router__WEBPACK_IMPORTED_MODULE_11__[\"useRouter\"])();\n  var handleClick = Object(react__WEBPACK_IMPORTED_MODULE_10__[\"useCallback\"])(function () {\n    router.push(\"/\".concat(bookIndex, \"/\").concat(movie.index, \"/\"));\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      onClick: handleClick,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        className: classes.image,\n        image: movie.image\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n          gutterBottom: true,\n          variant: \"h5\",\n          component: \"h2\",\n          children: movie.name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 53,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(MovieCard, \"YbRkMnAPKkB/CRM/JzKAFW97rS4=\", false, function () {\n  return [useStyles, next_dist_client_router__WEBPACK_IMPORTED_MODULE_11__[\"useRouter\"]];\n});\n\n_c = MovieCard;\n\nvar Book = function Book(_ref2) {\n  _s2();\n\n  var book = _ref2.book;\n  var classes = useStyles();\n  console.log(book);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: classes.root,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_TabBar__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n      index: 0\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      elevation: 0,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        variant: \"h3\",\n        gutterBottom: true,\n        children: book.name\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        container: true,\n        spacing: 2,\n        children: book.movies.map(function (m) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            item: true,\n            children: m.name\n          }, m.name, false, {\n            fileName: _jsxFileName,\n            lineNumber: 78,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 70,\n    columnNumber: 5\n  }, _this);\n};\n\n_s2(Book, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c2 = Book;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Book);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"MovieCard\");\n$RefreshReg$(_c2, \"Book\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW2Jvb2tdL2luZGV4LnRzeD8yMWNiIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJyb290IiwiZmxleEdyb3ciLCJpbWFnZSIsImhlaWdodCIsImJhY2tncm91bmRTaXplIiwiTW92aWVDYXJkIiwiYm9va0luZGV4IiwibW92aWUiLCJjbGFzc2VzIiwicm91dGVyIiwidXNlUm91dGVyIiwiaGFuZGxlQ2xpY2siLCJ1c2VDYWxsYmFjayIsInB1c2giLCJpbmRleCIsIm5hbWUiLCJCb29rIiwiYm9vayIsImNvbnNvbGUiLCJsb2ciLCJtb3ZpZXMiLCJtYXAiLCJtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBV0EsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDO0FBQzNCQyxNQUFJLEVBQUU7QUFDSkMsWUFBUSxFQUFFO0FBRE4sR0FEcUI7QUFJM0JDLE9BQUssRUFBRTtBQUNMQyxVQUFNLEVBQUUsR0FESDtBQUVMQyxrQkFBYyxFQUFFO0FBRlg7QUFKb0IsQ0FBRCxDQUE1Qjs7QUFzQkEsSUFBTUMsU0FBbUMsR0FBRyxTQUF0Q0EsU0FBc0MsT0FBMEI7QUFBQTs7QUFBQSxNQUF2QkMsU0FBdUIsUUFBdkJBLFNBQXVCO0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZO0FBQ3BFLE1BQU1DLE9BQU8sR0FBR1YsU0FBUyxFQUF6QjtBQUNBLE1BQU1XLE1BQU0sR0FBR0MsMEVBQVMsRUFBeEI7QUFDQSxNQUFNQyxXQUFXLEdBQUdDLDBEQUFXLENBQUMsWUFBTTtBQUNwQ0gsVUFBTSxDQUFDSSxJQUFQLFlBQWdCUCxTQUFoQixjQUE2QkMsS0FBSyxDQUFDTyxLQUFuQztBQUNELEdBRjhCLEVBRTVCLEVBRjRCLENBQS9CO0FBR0Esc0JBQ0UscUVBQUMsOERBQUQ7QUFBQSwyQkFDRSxxRUFBQyx3RUFBRDtBQUFnQixhQUFPLEVBQUVILFdBQXpCO0FBQUEsOEJBQ0UscUVBQUMsbUVBQUQ7QUFBVyxpQkFBUyxFQUFFSCxPQUFPLENBQUNOLEtBQTlCO0FBQXFDLGFBQUssRUFBRUssS0FBSyxDQUFDTDtBQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRSxxRUFBQyxxRUFBRDtBQUFBLCtCQUNFLHFFQUFDLG9FQUFEO0FBQVksc0JBQVksTUFBeEI7QUFBeUIsaUJBQU8sRUFBQyxJQUFqQztBQUFzQyxtQkFBUyxFQUFDLElBQWhEO0FBQUEsb0JBQ0dLLEtBQUssQ0FBQ1E7QUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVlELENBbEJEOztHQUFNVixTO1VBQ1lQLFMsRUFDRFksa0U7OztLQUZYTCxTOztBQW9CTixJQUFNVyxJQUF5QixHQUFHLFNBQTVCQSxJQUE0QixRQUFjO0FBQUE7O0FBQUEsTUFBWEMsSUFBVyxTQUFYQSxJQUFXO0FBQzlDLE1BQU1ULE9BQU8sR0FBR1YsU0FBUyxFQUF6QjtBQUNBb0IsU0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQVo7QUFDQSxzQkFDRTtBQUFLLGFBQVMsRUFBRVQsT0FBTyxDQUFDUixJQUF4QjtBQUFBLDRCQUNFLHFFQUFDLDBEQUFEO0FBQVEsV0FBSyxFQUFFO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUUscUVBQUMsK0RBQUQ7QUFBTyxlQUFTLEVBQUUsQ0FBbEI7QUFBQSw4QkFDRSxxRUFBQyxvRUFBRDtBQUFZLGVBQU8sRUFBQyxJQUFwQjtBQUF5QixvQkFBWSxNQUFyQztBQUFBLGtCQUNHaUIsSUFBSSxDQUFDRjtBQURSO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUlFLHFFQUFDLDhEQUFEO0FBQU0saUJBQVMsTUFBZjtBQUFnQixlQUFPLEVBQUUsQ0FBekI7QUFBQSxrQkFDR0UsSUFBSSxDQUFDRyxNQUFMLENBQVlDLEdBQVosQ0FBZ0IsVUFBQUMsQ0FBQztBQUFBLDhCQUNoQixxRUFBQyw4REFBRDtBQUFNLGdCQUFJLE1BQVY7QUFBQSxzQkFBeUJBLENBQUMsQ0FBQ1A7QUFBM0IsYUFBZ0JPLENBQUMsQ0FBQ1AsSUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEZ0I7QUFBQSxTQUFqQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWVELENBbEJEOztJQUFNQyxJO1VBQ1lsQixTOzs7TUFEWmtCLEk7O0FBb0JTQSxtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL1tib29rXS9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FyZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkJztcbmltcG9ydCBDYXJkQWN0aW9uQXJlYSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQWN0aW9uQXJlYSc7XG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnQnO1xuaW1wb3J0IENhcmRNZWRpYSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkTWVkaWEnO1xuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCB7IEdldFN0YXRpY1BhdGhzLCBHZXRTdGF0aWNQcm9wcyB9IGZyb20gJ25leHQnO1xuaW1wb3J0IHsgQm9va0RhdGEsIGdldEFsbFBhdGgsIE1vdmllR3JvdXAgfSBmcm9tICcuLi8uLi9hcGkvcGF0aHMnO1xuaW1wb3J0IFRhYkJhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL1RhYkJhcic7XG5pbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvZGlzdC9jbGllbnQvcm91dGVyJztcblxuaW50ZXJmYWNlIEJvb2tQcm9wcyB7XG4gIGJvb2s6IEJvb2tEYXRhO1xufVxuXG5pbnRlcmZhY2UgTW92aWVDYXJkUHJvcHMge1xuICBib29rSW5kZXg6IG51bWJlcjtcbiAgbW92aWU6IE1vdmllR3JvdXA7XG59XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xuICByb290OiB7XG4gICAgZmxleEdyb3c6IDEsXG4gIH0sXG4gIGltYWdlOiB7XG4gICAgaGVpZ2h0OiAyMDAsXG4gICAgYmFja2dyb3VuZFNpemU6ICdjb250YWluJyxcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHM6IEdldFN0YXRpY1BhdGhzID0gYXN5bmMgKF8pID0+IHtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGdldEFsbFBhdGgoKTtcbiAgY29uc3QgcGF0aHMgPSBkYXRhLm1hcCgoXywgaSkgPT4gYC8ke2l9L2ApO1xuICByZXR1cm4geyBwYXRocywgZmFsbGJhY2s6IGZhbHNlIH07XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGdldEFsbFBhdGgoKTtcbiAgY29uc3QgaW5kZXggPSBwYXJzZUludChwYXJhbXMhLmJvb2shLnRvU3RyaW5nKCksIDEwKTtcbiAgcmV0dXJuIHsgcHJvcHM6IHsgYm9vazogZGF0YVtpbmRleF0gfSB9O1xufTtcblxuY29uc3QgTW92aWVDYXJkOiBSZWFjdC5GQzxNb3ZpZUNhcmRQcm9wcz4gPSAoeyBib29rSW5kZXgsIG1vdmllIH0pID0+IHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgcm91dGVyLnB1c2goYC8ke2Jvb2tJbmRleH0vJHttb3ZpZS5pbmRleH0vYCk7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8Q2FyZD5cbiAgICAgIDxDYXJkQWN0aW9uQXJlYSBvbkNsaWNrPXtoYW5kbGVDbGlja30+XG4gICAgICAgIDxDYXJkTWVkaWEgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlfSBpbWFnZT17bW92aWUuaW1hZ2V9IC8+XG4gICAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgICA8VHlwb2dyYXBoeSBndXR0ZXJCb3R0b20gdmFyaWFudD1cImg1XCIgY29tcG9uZW50PVwiaDJcIj5cbiAgICAgICAgICAgIHttb3ZpZS5uYW1lfVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgIDwvQ2FyZEFjdGlvbkFyZWE+XG4gICAgPC9DYXJkPlxuICApO1xufTtcblxuY29uc3QgQm9vazogUmVhY3QuRkM8Qm9va1Byb3BzPiA9ICh7IGJvb2sgfSkgPT4ge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnNvbGUubG9nKGJvb2spO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgPFRhYkJhciBpbmRleD17MH0gLz5cbiAgICAgIDxQYXBlciBlbGV2YXRpb249ezB9PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDNcIiBndXR0ZXJCb3R0b20+XG4gICAgICAgICAge2Jvb2submFtZX1cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XG4gICAgICAgICAge2Jvb2subW92aWVzLm1hcChtID0+IChcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0ga2V5PXttLm5hbWV9PnttLm5hbWV9PC9HcmlkPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L1BhcGVyPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQm9vaztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[book]/index.tsx\n");

/***/ })

})