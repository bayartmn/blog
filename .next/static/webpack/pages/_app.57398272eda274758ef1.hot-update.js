webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_projects_blog_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var D_projects_blog_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_projects_blog_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(D_projects_blog_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var D_projects_blog_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var styles_index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styles/index.scss */ "./styles/index.scss");
/* harmony import */ var styles_index_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styles_index_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_toggle_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toggle/style.css */ "./node_modules/react-toggle/style.css");
/* harmony import */ var react_toggle_style_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toggle_style_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var highlight_js_styles_agate_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! highlight.js/styles/agate.css */ "./node_modules/highlight.js/styles/agate.css");
/* harmony import */ var highlight_js_styles_agate_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(highlight_js_styles_agate_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! nprogress/nprogress.css */ "./node_modules/nprogress/nprogress.css");
/* harmony import */ var nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var context_theme_context__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! context/theme-context */ "./context/theme-context.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_12__);




var _jsxFileName = "D:\\projects\\blog\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(D_projects_blog_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











next_router__WEBPACK_IMPORTED_MODULE_11___default.a.onRouteChangeStart = function (url) {
  console.log(url);
  nprogress__WEBPACK_IMPORTED_MODULE_12___default.a.start();
};

next_router__WEBPACK_IMPORTED_MODULE_11___default.a.onRouteChangeError = function (url) {
  nprogress__WEBPACK_IMPORTED_MODULE_12___default.a.done();
};

next_router__WEBPACK_IMPORTED_MODULE_11___default.a.onRouteChangeCompleted = function (url) {
  nprogress__WEBPACK_IMPORTED_MODULE_12___default.a.done();
};

var fetcher = /*#__PURE__*/function () {
  var _ref = Object(D_projects_blog_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/D_projects_blog_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(url) {
    var res, error;
    return D_projects_blog_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch(url);

          case 2:
            res = _context.sent;

            if (res.ok) {
              _context.next = 10;
              break;
            }

            error = new Error("An error occurred while fetching the data."); // Attach extra info to the error object.

            _context.next = 7;
            return res.json();

          case 7:
            error.info = _context.sent;
            error.status = res.status;
            throw error;

          case 10:
            return _context.abrupt("return", res.json());

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function fetcher(_x) {
    return _ref.apply(this, arguments);
  };
}();

function MyApp(_ref2) {
  var Component = _ref2.Component,
      pageProps = _ref2.pageProps;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(swr__WEBPACK_IMPORTED_MODULE_9__["SWRConfig"], {
    value: {
      refreshInterval: 60000,
      fetcher: fetcher,
      onError: function onError(error, key) {
        if (error.status !== 403 && error.status !== 404) {// We can send the error to Sentry,
          // or show a notification UI.
          // alert("Алдаа гарлаа: ");
        }
      }
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(context_theme_context__WEBPACK_IMPORTED_MODULE_10__["ThemeProvider"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, this), ";"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 5
  }, this);
}

_c = MyApp;
/* harmony default export */ __webpack_exports__["default"] = (MyApp);

var _c;

$RefreshReg$(_c, "MyApp");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJSb3V0ZXIiLCJvblJvdXRlQ2hhbmdlU3RhcnQiLCJ1cmwiLCJjb25zb2xlIiwibG9nIiwiTnByb2dyZXNzIiwic3RhcnQiLCJvblJvdXRlQ2hhbmdlRXJyb3IiLCJkb25lIiwib25Sb3V0ZUNoYW5nZUNvbXBsZXRlZCIsImZldGNoZXIiLCJmZXRjaCIsInJlcyIsIm9rIiwiZXJyb3IiLCJFcnJvciIsImpzb24iLCJpbmZvIiwic3RhdHVzIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJyZWZyZXNoSW50ZXJ2YWwiLCJvbkVycm9yIiwia2V5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBQSxtREFBTSxDQUFDQyxrQkFBUCxHQUE0QixVQUFDQyxHQUFELEVBQVM7QUFDbkNDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0FBQ0FHLG1EQUFTLENBQUNDLEtBQVY7QUFDRCxDQUhEOztBQUtBTixtREFBTSxDQUFDTyxrQkFBUCxHQUE0QixVQUFDTCxHQUFELEVBQVM7QUFDbkNHLG1EQUFTLENBQUNHLElBQVY7QUFDRCxDQUZEOztBQUlBUixtREFBTSxDQUFDUyxzQkFBUCxHQUFnQyxVQUFDUCxHQUFELEVBQVM7QUFDdkNHLG1EQUFTLENBQUNHLElBQVY7QUFDRCxDQUZEOztBQUlBLElBQU1FLE9BQU87QUFBQSxzUEFBRyxpQkFBT1IsR0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNJUyxLQUFLLENBQUNULEdBQUQsQ0FEVDs7QUFBQTtBQUNSVSxlQURROztBQUFBLGdCQUtUQSxHQUFHLENBQUNDLEVBTEs7QUFBQTtBQUFBO0FBQUE7O0FBTU5DLGlCQU5NLEdBTUUsSUFBSUMsS0FBSixDQUFVLDRDQUFWLENBTkYsRUFPWjs7QUFQWTtBQUFBLG1CQVFPSCxHQUFHLENBQUNJLElBQUosRUFSUDs7QUFBQTtBQVFaRixpQkFBSyxDQUFDRyxJQVJNO0FBU1pILGlCQUFLLENBQUNJLE1BQU4sR0FBZU4sR0FBRyxDQUFDTSxNQUFuQjtBQVRZLGtCQVVOSixLQVZNOztBQUFBO0FBQUEsNkNBYVBGLEdBQUcsQ0FBQ0ksSUFBSixFQWJPOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQVBOLE9BQU87QUFBQTtBQUFBO0FBQUEsR0FBYjs7QUFnQkEsU0FBU1MsS0FBVCxRQUF5QztBQUFBLE1BQXhCQyxTQUF3QixTQUF4QkEsU0FBd0I7QUFBQSxNQUFiQyxTQUFhLFNBQWJBLFNBQWE7QUFDdkMsc0JBQ0UscUVBQUMsNkNBQUQ7QUFDRSxTQUFLLEVBQUU7QUFDTEMscUJBQWUsRUFBRSxLQURaO0FBRUxaLGFBQU8sRUFBUEEsT0FGSztBQUdMYSxhQUFPLEVBQUUsaUJBQUNULEtBQUQsRUFBUVUsR0FBUixFQUFnQjtBQUN2QixZQUFJVixLQUFLLENBQUNJLE1BQU4sS0FBaUIsR0FBakIsSUFBd0JKLEtBQUssQ0FBQ0ksTUFBTixLQUFpQixHQUE3QyxFQUFrRCxDQUNoRDtBQUNBO0FBQ0E7QUFDRDtBQUNGO0FBVEksS0FEVDtBQUFBLDJCQWFFLHFFQUFDLG9FQUFEO0FBQUEsOEJBQ0UscUVBQUMsU0FBRCxvQkFBZUcsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBbUJEOztLQXBCUUYsSztBQXNCTUEsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC41NzM5ODI3MmVkYTI3NDc1OGVmMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwic3R5bGVzL2luZGV4LnNjc3NcIjtcclxuaW1wb3J0IFwiYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCI7XHJcbmltcG9ydCBcInJlYWN0LXRvZ2dsZS9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IFwiaGlnaGxpZ2h0LmpzL3N0eWxlcy9hZ2F0ZS5jc3NcIjtcclxuaW1wb3J0IFwibnByb2dyZXNzL25wcm9ncmVzcy5jc3NcIjtcclxuaW1wb3J0IHsgU1dSQ29uZmlnIH0gZnJvbSBcInN3clwiO1xyXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSBcImNvbnRleHQvdGhlbWUtY29udGV4dFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgTnByb2dyZXNzIGZyb20gXCJucHJvZ3Jlc3NcIjtcclxuXHJcblJvdXRlci5vblJvdXRlQ2hhbmdlU3RhcnQgPSAodXJsKSA9PiB7XHJcbiAgY29uc29sZS5sb2codXJsKTtcclxuICBOcHJvZ3Jlc3Muc3RhcnQoKTtcclxufTtcclxuXHJcblJvdXRlci5vblJvdXRlQ2hhbmdlRXJyb3IgPSAodXJsKSA9PiB7XHJcbiAgTnByb2dyZXNzLmRvbmUoKTtcclxufTtcclxuXHJcblJvdXRlci5vblJvdXRlQ2hhbmdlQ29tcGxldGVkID0gKHVybCkgPT4ge1xyXG4gIE5wcm9ncmVzcy5kb25lKCk7XHJcbn07XHJcblxyXG5jb25zdCBmZXRjaGVyID0gYXN5bmMgKHVybCkgPT4ge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCk7XHJcblxyXG4gIC8vIElmIHRoZSBzdGF0dXMgY29kZSBpcyBub3QgaW4gdGhlIHJhbmdlIDIwMC0yOTksXHJcbiAgLy8gd2Ugc3RpbGwgdHJ5IHRvIHBhcnNlIGFuZCB0aHJvdyBpdC5cclxuICBpZiAoIXJlcy5vaykge1xyXG4gICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoXCJBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBmZXRjaGluZyB0aGUgZGF0YS5cIik7XHJcbiAgICAvLyBBdHRhY2ggZXh0cmEgaW5mbyB0byB0aGUgZXJyb3Igb2JqZWN0LlxyXG4gICAgZXJyb3IuaW5mbyA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICBlcnJvci5zdGF0dXMgPSByZXMuc3RhdHVzO1xyXG4gICAgdGhyb3cgZXJyb3I7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcmVzLmpzb24oKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8U1dSQ29uZmlnXHJcbiAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgcmVmcmVzaEludGVydmFsOiA2MDAwMCxcclxuICAgICAgICBmZXRjaGVyLFxyXG4gICAgICAgIG9uRXJyb3I6IChlcnJvciwga2V5KSA9PiB7XHJcbiAgICAgICAgICBpZiAoZXJyb3Iuc3RhdHVzICE9PSA0MDMgJiYgZXJyb3Iuc3RhdHVzICE9PSA0MDQpIHtcclxuICAgICAgICAgICAgLy8gV2UgY2FuIHNlbmQgdGhlIGVycm9yIHRvIFNlbnRyeSxcclxuICAgICAgICAgICAgLy8gb3Igc2hvdyBhIG5vdGlmaWNhdGlvbiBVSS5cclxuICAgICAgICAgICAgLy8gYWxlcnQoXCLQkNC70LTQsNCwINCz0LDRgNC70LDQsDogXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxUaGVtZVByb3ZpZGVyPlxyXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz47XHJcbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cclxuICAgIDwvU1dSQ29uZmlnPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9