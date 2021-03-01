webpackHotUpdate_N_E("pages/[book]/[movie]",{

/***/ "./pages/[book]/[movie]/index.tsx":
/*!****************************************!*\
  !*** ./pages/[book]/[movie]/index.tsx ***!
  \****************************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _components_TabBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/TabBar */ \"./components/TabBar.tsx\");\n\n\nvar _jsxFileName = \"/Users/horiuchi/work/bijutune/webfront/pages/[book]/[movie]/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])({\n  root: {\n    flexGrow: 1\n  },\n  image: {\n    width: 300,\n    height: 160,\n    backgroundSize: 'contain'\n  }\n});\n\nvar Movie = function Movie(_ref) {\n  _s();\n\n  var movie = _ref.movie;\n  var classes = useStyles();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: classes.root,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_TabBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      index: 0\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Paper, {\n      elevation: 0,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Typography, {\n        variant: \"h3\",\n        gutterBottom: true,\n        children: book.name\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Grid, {\n        container: true,\n        spacing: 2,\n        children: book.movies.map(function (m) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Grid, {\n            item: true,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MovieCard, {\n              bookIndex: book.index,\n              movie: m\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 49,\n              columnNumber: 15\n            }, _this)\n          }, m.name, false, {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 40,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Movie, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c = Movie;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Movie);\n\nvar _c;\n\n$RefreshReg$(_c, \"Movie\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW2Jvb2tdL1ttb3ZpZV0vaW5kZXgudHN4PzlhMmIiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInJvb3QiLCJmbGV4R3JvdyIsImltYWdlIiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kU2l6ZSIsIk1vdmllIiwibW92aWUiLCJjbGFzc2VzIiwiYm9vayIsIm5hbWUiLCJtb3ZpZXMiLCJtYXAiLCJtIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNBO0FBRUE7QUFPQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUM7QUFDM0JDLE1BQUksRUFBRTtBQUNKQyxZQUFRLEVBQUU7QUFETixHQURxQjtBQUkzQkMsT0FBSyxFQUFFO0FBQ0xDLFNBQUssRUFBRSxHQURGO0FBRUxDLFVBQU0sRUFBRSxHQUZIO0FBR0xDLGtCQUFjLEVBQUU7QUFIWDtBQUpvQixDQUFELENBQTVCOztBQTBCQSxJQUFNQyxLQUEyQixHQUFHLFNBQTlCQSxLQUE4QixPQUFlO0FBQUE7O0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZO0FBQ2pELE1BQU1DLE9BQU8sR0FBR1YsU0FBUyxFQUF6QjtBQUNBLHNCQUNFO0FBQUssYUFBUyxFQUFFVSxPQUFPLENBQUNSLElBQXhCO0FBQUEsNEJBQ0UscUVBQUMsMERBQUQ7QUFBUSxXQUFLLEVBQUU7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRSxxRUFBQyxLQUFEO0FBQU8sZUFBUyxFQUFFLENBQWxCO0FBQUEsOEJBQ0UscUVBQUMsVUFBRDtBQUFZLGVBQU8sRUFBQyxJQUFwQjtBQUF5QixvQkFBWSxNQUFyQztBQUFBLGtCQUNHUyxJQUFJLENBQUNDO0FBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBSUUscUVBQUMsSUFBRDtBQUFNLGlCQUFTLE1BQWY7QUFBZ0IsZUFBTyxFQUFFLENBQXpCO0FBQUEsa0JBQ0dELElBQUksQ0FBQ0UsTUFBTCxDQUFZQyxHQUFaLENBQWdCLFVBQUFDLENBQUM7QUFBQSw4QkFDaEIscUVBQUMsSUFBRDtBQUFNLGdCQUFJLE1BQVY7QUFBQSxtQ0FDRSxxRUFBQyxTQUFEO0FBQVcsdUJBQVMsRUFBRUosSUFBSSxDQUFDSyxLQUEzQjtBQUFrQyxtQkFBSyxFQUFFRDtBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsYUFBZ0JBLENBQUMsQ0FBQ0gsSUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEZ0I7QUFBQSxTQUFqQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWlCRCxDQW5CRDs7R0FBTUosSztVQUNZUixTOzs7S0FEWlEsSzs7QUFxQlNBLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvW2Jvb2tdL1ttb3ZpZV0vaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCB7IEdldFN0YXRpY1BhdGhzLCBHZXRTdGF0aWNQcm9wcyB9IGZyb20gJ25leHQnO1xuaW1wb3J0IFRhYkJhciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL1RhYkJhcic7XG5pbXBvcnQgeyBnZXRBbGxQYXRoLCBNb3ZpZURhdGEgfSBmcm9tICcuLi8uLi8uLi9hcGkvcGF0aHMnO1xuXG5pbnRlcmZhY2UgTW92aWVQcm9wcyB7XG4gIG1vdmllOiBNb3ZpZURhdGE7XG59XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xuICByb290OiB7XG4gICAgZmxleEdyb3c6IDEsXG4gIH0sXG4gIGltYWdlOiB7XG4gICAgd2lkdGg6IDMwMCxcbiAgICBoZWlnaHQ6IDE2MCxcbiAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvbnRhaW4nLFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRoczogR2V0U3RhdGljUGF0aHMgPSBhc3luYyAoXykgPT4ge1xuICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0QWxsUGF0aCgpO1xuICBjb25zdCBwYXRocyA9IGRhdGEuZmxhdE1hcChib29rID0+IGJvb2subW92aWVzLm1hcChtb3ZpZSA9PiBgLyR7Ym9vay5pbmRleH0vJHttb3ZpZS5pbmRleH1gKSk7XG4gIHJldHVybiB7IHBhdGhzLCBmYWxsYmFjazogZmFsc2UgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xuICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0QWxsUGF0aCgpO1xuICBjb25zdCBib29rSW5kZXggPSBwYXJzZUludChwYXJhbXMhLmJvb2shLnRvU3RyaW5nKCksIDEwKTtcbiAgY29uc3QgbW92aWVJbmRleCA9IHBhcnNlSW50KHBhcmFtcyEubW92aWUhLnRvU3RyaW5nKCksIDEwKTtcbiAgcmV0dXJuIHsgcHJvcHM6IHsgbW92aWU6IGRhdGFbYm9va0luZGV4XS5tb3ZpZXNbbW92aWVJbmRleF0gfSB9O1xuXG59O1xuXG5cbmNvbnN0IE1vdmllOiBSZWFjdC5GQzxNb3ZpZVByb3BzPiA9ICh7IG1vdmllIH0pID0+IHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgPFRhYkJhciBpbmRleD17MH0gLz5cbiAgICAgIDxQYXBlciBlbGV2YXRpb249ezB9PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDNcIiBndXR0ZXJCb3R0b20+XG4gICAgICAgICAge2Jvb2submFtZX1cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XG4gICAgICAgICAge2Jvb2subW92aWVzLm1hcChtID0+IChcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0ga2V5PXttLm5hbWV9PlxuICAgICAgICAgICAgICA8TW92aWVDYXJkIGJvb2tJbmRleD17Ym9vay5pbmRleH0gbW92aWU9e219IC8+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvUGFwZXI+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNb3ZpZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[book]/[movie]/index.tsx\n");

/***/ })

})