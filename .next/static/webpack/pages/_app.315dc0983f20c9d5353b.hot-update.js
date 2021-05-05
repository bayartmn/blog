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

next_router__WEBPACK_IMPORTED_MODULE_11___default.a.onRouteChangeComplete = function (url) {
  nprogress__WEBPACK_IMPORTED_MODULE_12___default.a.done();
};

next_router__WEBPACK_IMPORTED_MODULE_11___default.a.onRouteChangeError = function (url) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJSb3V0ZXIiLCJvblJvdXRlQ2hhbmdlU3RhcnQiLCJ1cmwiLCJjb25zb2xlIiwibG9nIiwiTnByb2dyZXNzIiwic3RhcnQiLCJvblJvdXRlQ2hhbmdlQ29tcGxldGUiLCJkb25lIiwib25Sb3V0ZUNoYW5nZUVycm9yIiwiZmV0Y2hlciIsImZldGNoIiwicmVzIiwib2siLCJlcnJvciIsIkVycm9yIiwianNvbiIsImluZm8iLCJzdGF0dXMiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInJlZnJlc2hJbnRlcnZhbCIsIm9uRXJyb3IiLCJrZXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUFBLG1EQUFNLENBQUNDLGtCQUFQLEdBQTRCLFVBQUNDLEdBQUQsRUFBUztBQUNuQ0MsU0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVo7QUFDQUcsbURBQVMsQ0FBQ0MsS0FBVjtBQUNELENBSEQ7O0FBS0FOLG1EQUFNLENBQUNPLHFCQUFQLEdBQStCLFVBQUNMLEdBQUQsRUFBUztBQUN0Q0csbURBQVMsQ0FBQ0csSUFBVjtBQUNELENBRkQ7O0FBSUFSLG1EQUFNLENBQUNTLGtCQUFQLEdBQTRCLFVBQUNQLEdBQUQsRUFBUztBQUNuQ0csbURBQVMsQ0FBQ0csSUFBVjtBQUNELENBRkQ7O0FBSUEsSUFBTUUsT0FBTztBQUFBLHNQQUFHLGlCQUFPUixHQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ0lTLEtBQUssQ0FBQ1QsR0FBRCxDQURUOztBQUFBO0FBQ1JVLGVBRFE7O0FBQUEsZ0JBS1RBLEdBQUcsQ0FBQ0MsRUFMSztBQUFBO0FBQUE7QUFBQTs7QUFNTkMsaUJBTk0sR0FNRSxJQUFJQyxLQUFKLENBQVUsNENBQVYsQ0FORixFQU9aOztBQVBZO0FBQUEsbUJBUU9ILEdBQUcsQ0FBQ0ksSUFBSixFQVJQOztBQUFBO0FBUVpGLGlCQUFLLENBQUNHLElBUk07QUFTWkgsaUJBQUssQ0FBQ0ksTUFBTixHQUFlTixHQUFHLENBQUNNLE1BQW5CO0FBVFksa0JBVU5KLEtBVk07O0FBQUE7QUFBQSw2Q0FhUEYsR0FBRyxDQUFDSSxJQUFKLEVBYk87O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBUE4sT0FBTztBQUFBO0FBQUE7QUFBQSxHQUFiOztBQWdCQSxTQUFTUyxLQUFULFFBQXlDO0FBQUEsTUFBeEJDLFNBQXdCLFNBQXhCQSxTQUF3QjtBQUFBLE1BQWJDLFNBQWEsU0FBYkEsU0FBYTtBQUN2QyxzQkFDRSxxRUFBQyw2Q0FBRDtBQUNFLFNBQUssRUFBRTtBQUNMQyxxQkFBZSxFQUFFLEtBRFo7QUFFTFosYUFBTyxFQUFQQSxPQUZLO0FBR0xhLGFBQU8sRUFBRSxpQkFBQ1QsS0FBRCxFQUFRVSxHQUFSLEVBQWdCO0FBQ3ZCLFlBQUlWLEtBQUssQ0FBQ0ksTUFBTixLQUFpQixHQUFqQixJQUF3QkosS0FBSyxDQUFDSSxNQUFOLEtBQWlCLEdBQTdDLEVBQWtELENBQ2hEO0FBQ0E7QUFDQTtBQUNEO0FBQ0Y7QUFUSSxLQURUO0FBQUEsMkJBYUUscUVBQUMsb0VBQUQ7QUFBQSw4QkFDRSxxRUFBQyxTQUFELG9CQUFlRyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFtQkQ7O0tBcEJRRixLO0FBc0JNQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjMxNWRjMDk4M2YyMGM5ZDUzNTNiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJzdHlsZXMvaW5kZXguc2Nzc1wiO1xyXG5pbXBvcnQgXCJib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIjtcclxuaW1wb3J0IFwicmVhY3QtdG9nZ2xlL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgXCJoaWdobGlnaHQuanMvc3R5bGVzL2FnYXRlLmNzc1wiO1xyXG5pbXBvcnQgXCJucHJvZ3Jlc3MvbnByb2dyZXNzLmNzc1wiO1xyXG5pbXBvcnQgeyBTV1JDb25maWcgfSBmcm9tIFwic3dyXCI7XHJcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tIFwiY29udGV4dC90aGVtZS1jb250ZXh0XCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBOcHJvZ3Jlc3MgZnJvbSBcIm5wcm9ncmVzc1wiO1xyXG5cclxuUm91dGVyLm9uUm91dGVDaGFuZ2VTdGFydCA9ICh1cmwpID0+IHtcclxuICBjb25zb2xlLmxvZyh1cmwpO1xyXG4gIE5wcm9ncmVzcy5zdGFydCgpO1xyXG59O1xyXG5cclxuUm91dGVyLm9uUm91dGVDaGFuZ2VDb21wbGV0ZSA9ICh1cmwpID0+IHtcclxuICBOcHJvZ3Jlc3MuZG9uZSgpO1xyXG59O1xyXG5cclxuUm91dGVyLm9uUm91dGVDaGFuZ2VFcnJvciA9ICh1cmwpID0+IHtcclxuICBOcHJvZ3Jlc3MuZG9uZSgpO1xyXG59O1xyXG5cclxuY29uc3QgZmV0Y2hlciA9IGFzeW5jICh1cmwpID0+IHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG5cclxuICAvLyBJZiB0aGUgc3RhdHVzIGNvZGUgaXMgbm90IGluIHRoZSByYW5nZSAyMDAtMjk5LFxyXG4gIC8vIHdlIHN0aWxsIHRyeSB0byBwYXJzZSBhbmQgdGhyb3cgaXQuXHJcbiAgaWYgKCFyZXMub2spIHtcclxuICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKFwiQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgZmV0Y2hpbmcgdGhlIGRhdGEuXCIpO1xyXG4gICAgLy8gQXR0YWNoIGV4dHJhIGluZm8gdG8gdGhlIGVycm9yIG9iamVjdC5cclxuICAgIGVycm9yLmluZm8gPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgZXJyb3Iuc3RhdHVzID0gcmVzLnN0YXR1cztcclxuICAgIHRocm93IGVycm9yO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPFNXUkNvbmZpZ1xyXG4gICAgICB2YWx1ZT17e1xyXG4gICAgICAgIHJlZnJlc2hJbnRlcnZhbDogNjAwMDAsXHJcbiAgICAgICAgZmV0Y2hlcixcclxuICAgICAgICBvbkVycm9yOiAoZXJyb3IsIGtleSkgPT4ge1xyXG4gICAgICAgICAgaWYgKGVycm9yLnN0YXR1cyAhPT0gNDAzICYmIGVycm9yLnN0YXR1cyAhPT0gNDA0KSB7XHJcbiAgICAgICAgICAgIC8vIFdlIGNhbiBzZW5kIHRoZSBlcnJvciB0byBTZW50cnksXHJcbiAgICAgICAgICAgIC8vIG9yIHNob3cgYSBub3RpZmljYXRpb24gVUkuXHJcbiAgICAgICAgICAgIC8vIGFsZXJ0KFwi0JDQu9C00LDQsCDQs9Cw0YDQu9Cw0LA6IFwiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8VGhlbWVQcm92aWRlcj5cclxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+O1xyXG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgICA8L1NXUkNvbmZpZz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==