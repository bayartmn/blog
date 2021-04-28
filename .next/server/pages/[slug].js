module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/[slug].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/higlight-code.js":
/*!*************************************!*\
  !*** ./components/higlight-code.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js */ "highlight.js");
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highlight_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "D:\\projects\\blog\\components\\higlight-code.js";


/* harmony default export */ __webpack_exports__["default"] = (({
  children,
  language
}) => {
  const codeRef = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["createRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    highlight_js__WEBPACK_IMPORTED_MODULE_1___default.a.highlightBlock(codeRef.current);
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("pre", {
    className: language,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("code", {
      ref: codeRef,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined);
});

/***/ }),

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_my_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/my-navbar */ "./components/my-navbar.js");

var _jsxFileName = "D:\\projects\\blog\\components\\layout.js";


/* harmony default export */ __webpack_exports__["default"] = (({
  children
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_my_navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "blog-detail-page",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: `page-wrapper`,
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
      className: "page-footer",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "#",
          children: "\u043D\u04AF\u04AF\u0440"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, undefined), " | ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "#",
          children: "\u0441\u0443\u0440\u0433\u0430\u043B\u0442"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, undefined), " | ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "#",
          children: "\u0444\u044D\u0439\u0441\u0431\u04AF\u04AF\u043A"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined);
});

/***/ }),

/***/ "./components/my-navbar.js":
/*!*********************************!*\
  !*** ./components/my-navbar.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\projects\\blog\\components\\my-navbar.js";

/* harmony default export */ __webpack_exports__["default"] = (() => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"], {
    className: "fj-navbar fj-nav-base",
    bg: "transparent",
    expand: "lg",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Brand, {
      className: "fj-navbar-brand",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        href: "#",
        children: "Nextjs \u0411\u041B\u041E\u0413"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Toggle, {
      "aria-controls": "basic-navbar-nav"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Collapse, {
      id: "basic-navbar-nav",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
        className: "ml-auto",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"].Link, {
          className: "fj-navbar-item fj-navbar-link",
          href: "/",
          children: "\u041D\u04AE\u04AE\u0420"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined);
});

/***/ }),

/***/ "./components/post-header.js":
/*!***********************************!*\
  !*** ./components/post-header.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lib_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lib/api */ "./lib/api.js");

var _jsxFileName = "D:\\projects\\blog\\components\\post-header.js";


/* harmony default export */ __webpack_exports__["default"] = (({
  post
}) => {
  moment__WEBPACK_IMPORTED_MODULE_1___default.a.locale("mn");
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "blog-detail-header",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "lead mb-0",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: post.publisher.picture,
        className: "rounded-circle mr-3",
        height: "50px",
        width: "50px"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, undefined), post.publisher.title, ", ", moment__WEBPACK_IMPORTED_MODULE_1___default()(post.date).format("lll")]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      className: "font-weight-bold blog-detail-header-title mb-0",
      children: post.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      className: "blog-detail-header-subtitle mb-3",
      children: post.subtitle
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      className: "img-fluid rounded",
      src: Object(lib_api__WEBPACK_IMPORTED_MODULE_2__["urlFor"])(post.cover_image).height(800).url(),
      alt: post.cover_image.alt
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "code-filename",
      style: {
        textAlign: "center"
      },
      children: post.cover_image.alt
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined);
});

/***/ }),

/***/ "./lib/api.js":
/*!********************!*\
  !*** ./lib/api.js ***!
  \********************/
/*! exports provided: urlFor, getAllPosts, getPostBySlug */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlFor", function() { return urlFor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllPosts", function() { return getAllPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostBySlug", function() { return getPostBySlug; });
/* harmony import */ var lib_sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lib/sanity */ "./lib/sanity.js");
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sanity/image-url */ "@sanity/image-url");
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_1__);


const builder = _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default()(lib_sanity__WEBPACK_IMPORTED_MODULE_0__["default"]);
const urlFor = source => {
  return builder.image(source);
};
const getAllPosts = async () => {
  const posts = await lib_sanity__WEBPACK_IMPORTED_MODULE_0__["default"].fetch(`*[_type=="post"]{_createdAt, title, subtitle, date, 'image': cover_image.asset->url, 'slug':slug.current, 'publisher':publisher->{title, 'picture': picture.asset->url }}`);
  return posts;
};
const getPostBySlug = async slug => {
  const post = await lib_sanity__WEBPACK_IMPORTED_MODULE_0__["default"].fetch(`*[_type=="post" && slug.current==$slug]{_createdAt, title, subtitle, date, content[]{...,'asset': asset->} , cover_image, 'slug':slug.current, 'publisher':publisher->{title, 'picture': picture.asset->url,  }}`, {
    slug
  });
  return post;
};

/***/ }),

/***/ "./lib/sanity.js":
/*!***********************!*\
  !*** ./lib/sanity.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const sanityClient = __webpack_require__(/*! @sanity/client */ "@sanity/client");

const client = sanityClient({
  projectId: "mwmhwq8c",
  dataset: "production",
  useCdn: process.NODE_ENV === "production"
});
/* harmony default export */ __webpack_exports__["default"] = (client);

/***/ }),

/***/ "./pages/[slug].js":
/*!*************************!*\
  !*** ./pages/[slug].js ***!
  \*************************/
/*! exports provided: default, getStaticProps, getStaticPaths */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return getStaticPaths; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/layout */ "./components/layout.js");
/* harmony import */ var lib_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lib/api */ "./lib/api.js");
/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sanity/block-content-to-react */ "@sanity/block-content-to-react");
/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_higlight_code__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/higlight-code */ "./components/higlight-code.js");
/* harmony import */ var components_post_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/post-header */ "./components/post-header.js");

var _jsxFileName = "D:\\projects\\blog\\pages\\[slug].js";







const serializers = {
  types: {
    code: props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_higlight_code__WEBPACK_IMPORTED_MODULE_5__["default"], {
      language: props.node.language,
      children: [props.node.code, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "code-filename",
        children: props.node.filename
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined),
    image: props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: `blog-image blog-image-${props.node.position}`,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: Object(lib_api__WEBPACK_IMPORTED_MODULE_3__["urlFor"])(props.node).height(400).url()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "code-filename",
        style: {
          textAlign: "center"
        },
        children: props.node.alt
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined)
  }
};
/* harmony default export */ __webpack_exports__["default"] = (({
  post
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: "12",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("pre", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_post_header__WEBPACK_IMPORTED_MODULE_6__["default"], {
          post: post
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_4___default.a, {
          blocks: post.content,
          serializers: serializers,
          imageOptions: {
            w: 320,
            h: 240,
            fit: "max"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }, undefined);
});
const getStaticProps = async ({
  params
}) => {
  const post = await Object(lib_api__WEBPACK_IMPORTED_MODULE_3__["getPostBySlug"])(params.slug);
  return {
    props: {
      post: post[0]
    }
  };
};
const getStaticPaths = async () => {
  const posts = await Object(lib_api__WEBPACK_IMPORTED_MODULE_3__["getAllPosts"])();
  return {
    paths: posts.map(post => ({
      params: {
        slug: post.slug
      }
    })),
    fallback: false
  };
};

/***/ }),

/***/ "@sanity/block-content-to-react":
/*!*************************************************!*\
  !*** external "@sanity/block-content-to-react" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@sanity/block-content-to-react");

/***/ }),

/***/ "@sanity/client":
/*!*********************************!*\
  !*** external "@sanity/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@sanity/client");

/***/ }),

/***/ "@sanity/image-url":
/*!************************************!*\
  !*** external "@sanity/image-url" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@sanity/image-url");

/***/ }),

/***/ "highlight.js":
/*!*******************************!*\
  !*** external "highlight.js" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("highlight.js");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9oaWdsaWdodC1jb2RlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXktbmF2YmFyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcG9zdC1oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvc2FuaXR5LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL1tzbHVnXS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2FuaXR5L2Jsb2NrLWNvbnRlbnQtdG8tcmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2FuaXR5L2NsaWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBzYW5pdHkvaW1hZ2UtdXJsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaGlnaGxpZ2h0LmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9tZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJjaGlsZHJlbiIsImxhbmd1YWdlIiwiY29kZVJlZiIsImNyZWF0ZVJlZiIsInVzZUVmZmVjdCIsImhsanMiLCJoaWdobGlnaHRCbG9jayIsImN1cnJlbnQiLCJwb3N0IiwibW9tZW50IiwibG9jYWxlIiwicHVibGlzaGVyIiwicGljdHVyZSIsInRpdGxlIiwiZGF0ZSIsImZvcm1hdCIsInN1YnRpdGxlIiwidXJsRm9yIiwiY292ZXJfaW1hZ2UiLCJoZWlnaHQiLCJ1cmwiLCJhbHQiLCJ0ZXh0QWxpZ24iLCJidWlsZGVyIiwiaW1hZ2VVcmxCdWlsZGVyIiwiY2xpZW50Iiwic291cmNlIiwiaW1hZ2UiLCJnZXRBbGxQb3N0cyIsInBvc3RzIiwiZmV0Y2giLCJnZXRQb3N0QnlTbHVnIiwic2x1ZyIsInNhbml0eUNsaWVudCIsInJlcXVpcmUiLCJwcm9qZWN0SWQiLCJwcm9jZXNzIiwiZGF0YXNldCIsInVzZUNkbiIsIk5PREVfRU5WIiwic2VyaWFsaXplcnMiLCJ0eXBlcyIsImNvZGUiLCJwcm9wcyIsIm5vZGUiLCJmaWxlbmFtZSIsInBvc2l0aW9uIiwiY29udGVudCIsInciLCJoIiwiZml0IiwiZ2V0U3RhdGljUHJvcHMiLCJwYXJhbXMiLCJnZXRTdGF0aWNQYXRocyIsInBhdGhzIiwibWFwIiwiZmFsbGJhY2siXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUVlLGdFQUFDO0FBQUVBLFVBQUY7QUFB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RUM7QUFBRixDQUFQLEtBQXNCO0FBQ2xELFFBQU01QyxJQUFJLEdBQUcsTUFBTXVCLDZEQUFhLENBQUNxQixNQUFNLENBQUNwQixJQUFSLENBQWhDO0FBQ0EsU0FBTztBQUNMVyxTQUFLLEVBQUU7QUFDTG5DLFVBQUksRUFBRUEsSUFBSSxDQUFDLENBQUQ7QUFETDtBQURGLEdBQVA7QUFLRCxDQVBNO0FBU0EsTUFBTTZDLGNBQWMsR0FBRyxZQUFZO0FBQ3hDLFFBQU14QixLQUFLLEdBQUcsTUFBTUQsMkRBQVcsRUFBL0I7QUFDQSxTQUFPO0FBQ0wwQixTQUFLLEVBQUV6QixLQUFLLENBQUMwQixHQUFOLENBQVcvQyxJQUFELEtBQVc7QUFDMUI0QyxZQUFNLEVBQUU7QUFDTnBCLFlBQUksRUFBRXhCLElBQUksQ0FBQ3dCO0FBREw7QUFEa0IsS0FBWCxDQUFWLENBREY7QUFNTHdCLFlBQVEsRUFBRTtBQU5MLEdBQVA7QUFRRCxDQVZNLEM7Ozs7Ozs7Ozs7O0FDdkRQLDJEOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL1tzbHVnXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvW3NsdWddLmpzXCIpO1xuIiwiaW1wb3J0IGhsanMgZnJvbSBcImhpZ2hsaWdodC5qc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVSZWYsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHsgY2hpbGRyZW4sIGxhbmd1YWdlIH0pID0+IHtcclxuICBjb25zdCBjb2RlUmVmID0gY3JlYXRlUmVmKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBobGpzLmhpZ2hsaWdodEJsb2NrKGNvZGVSZWYuY3VycmVudCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHByZSBjbGFzc05hbWU9e2xhbmd1YWdlfT5cclxuICAgICAgPGNvZGUgcmVmPXtjb2RlUmVmfT57Y2hpbGRyZW59PC9jb2RlPlxyXG4gICAgPC9wcmU+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIENvbCB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IE15TmF2YmFyIGZyb20gXCJjb21wb25lbnRzL215LW5hdmJhclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgICA8TXlOYXZiYXIgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nLWRldGFpbC1wYWdlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BwYWdlLXdyYXBwZXJgfT57Y2hpbGRyZW59PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJwYWdlLWZvb3RlclwiPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8YSBocmVmPVwiI1wiPtC90q/Sr9GAPC9hPlxyXG4gICAgICAgICAge1wiIHwgXCJ9XHJcbiAgICAgICAgICA8YSBocmVmPVwiI1wiPtGB0YPRgNCz0LDQu9GCPC9hPlxyXG4gICAgICAgICAge1wiIHwgXCJ9XHJcbiAgICAgICAgICA8YSBocmVmPVwiI1wiPtGE0Y3QudGB0LHSr9Kv0Lo8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9vdGVyPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IHsgTmF2YmFyLCBOYXYgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxOYXZiYXIgY2xhc3NOYW1lPVwiZmotbmF2YmFyIGZqLW5hdi1iYXNlXCIgYmc9XCJ0cmFuc3BhcmVudFwiIGV4cGFuZD1cImxnXCI+XHJcbiAgICAgIDxOYXZiYXIuQnJhbmQgY2xhc3NOYW1lPVwiZmotbmF2YmFyLWJyYW5kXCI+XHJcbiAgICAgICAgPGEgaHJlZj1cIiNcIj5OZXh0anMg0JHQm9Ce0JM8L2E+XHJcbiAgICAgIDwvTmF2YmFyLkJyYW5kPlxyXG4gICAgICA8TmF2YmFyLlRvZ2dsZSBhcmlhLWNvbnRyb2xzPVwiYmFzaWMtbmF2YmFyLW5hdlwiIC8+XHJcbiAgICAgIDxOYXZiYXIuQ29sbGFwc2UgaWQ9XCJiYXNpYy1uYXZiYXItbmF2XCI+XHJcbiAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJtbC1hdXRvXCI+XHJcbiAgICAgICAgICA8TmF2LkxpbmsgY2xhc3NOYW1lPVwiZmotbmF2YmFyLWl0ZW0gZmotbmF2YmFyLWxpbmtcIiBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICDQndKu0q7QoFxyXG4gICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICA8L05hdj5cclxuICAgICAgPC9OYXZiYXIuQ29sbGFwc2U+XHJcbiAgICA8L05hdmJhcj5cclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcclxuaW1wb3J0IHsgdXJsRm9yIH0gZnJvbSBcImxpYi9hcGlcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICh7IHBvc3QgfSkgPT4ge1xyXG4gIG1vbWVudC5sb2NhbGUoXCJtblwiKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJibG9nLWRldGFpbC1oZWFkZXJcIj5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwibGVhZCBtYi0wXCI+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgc3JjPXtwb3N0LnB1Ymxpc2hlci5waWN0dXJlfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1jaXJjbGUgbXItM1wiXHJcbiAgICAgICAgICBoZWlnaHQ9XCI1MHB4XCJcclxuICAgICAgICAgIHdpZHRoPVwiNTBweFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICB7cG9zdC5wdWJsaXNoZXIudGl0bGV9LCB7bW9tZW50KHBvc3QuZGF0ZSkuZm9ybWF0KFwibGxsXCIpfVxyXG4gICAgICA8L3A+XHJcblxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZCBibG9nLWRldGFpbC1oZWFkZXItdGl0bGUgbWItMFwiPlxyXG4gICAgICAgIHtwb3N0LnRpdGxlfVxyXG4gICAgICA8L2gxPlxyXG5cclxuICAgICAgPGgyIGNsYXNzTmFtZT1cImJsb2ctZGV0YWlsLWhlYWRlci1zdWJ0aXRsZSBtYi0zXCI+e3Bvc3Quc3VidGl0bGV9PC9oMj5cclxuXHJcbiAgICAgIDxpbWdcclxuICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWQgcm91bmRlZFwiXHJcbiAgICAgICAgc3JjPXt1cmxGb3IocG9zdC5jb3Zlcl9pbWFnZSkuaGVpZ2h0KDgwMCkudXJsKCl9XHJcbiAgICAgICAgYWx0PXtwb3N0LmNvdmVyX2ltYWdlLmFsdH1cclxuICAgICAgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2RlLWZpbGVuYW1lXCIgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgIHtwb3N0LmNvdmVyX2ltYWdlLmFsdH1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgY2xpZW50IGZyb20gXCJsaWIvc2FuaXR5XCI7XHJcbmltcG9ydCBpbWFnZVVybEJ1aWxkZXIgZnJvbSBcIkBzYW5pdHkvaW1hZ2UtdXJsXCI7XHJcblxyXG5jb25zdCBidWlsZGVyID0gaW1hZ2VVcmxCdWlsZGVyKGNsaWVudCk7XHJcblxyXG5leHBvcnQgY29uc3QgdXJsRm9yID0gKHNvdXJjZSkgPT4ge1xyXG4gIHJldHVybiBidWlsZGVyLmltYWdlKHNvdXJjZSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0QWxsUG9zdHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcG9zdHMgPSBhd2FpdCBjbGllbnQuZmV0Y2goXHJcbiAgICBgKltfdHlwZT09XCJwb3N0XCJde19jcmVhdGVkQXQsIHRpdGxlLCBzdWJ0aXRsZSwgZGF0ZSwgJ2ltYWdlJzogY292ZXJfaW1hZ2UuYXNzZXQtPnVybCwgJ3NsdWcnOnNsdWcuY3VycmVudCwgJ3B1Ymxpc2hlcic6cHVibGlzaGVyLT57dGl0bGUsICdwaWN0dXJlJzogcGljdHVyZS5hc3NldC0+dXJsIH19YFxyXG4gICk7XHJcbiAgcmV0dXJuIHBvc3RzO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFBvc3RCeVNsdWcgPSBhc3luYyAoc2x1ZykgPT4ge1xyXG4gIGNvbnN0IHBvc3QgPSBhd2FpdCBjbGllbnQuZmV0Y2goXHJcbiAgICBgKltfdHlwZT09XCJwb3N0XCIgJiYgc2x1Zy5jdXJyZW50PT0kc2x1Z117X2NyZWF0ZWRBdCwgdGl0bGUsIHN1YnRpdGxlLCBkYXRlLCBjb250ZW50W117Li4uLCdhc3NldCc6IGFzc2V0LT59ICwgY292ZXJfaW1hZ2UsICdzbHVnJzpzbHVnLmN1cnJlbnQsICdwdWJsaXNoZXInOnB1Ymxpc2hlci0+e3RpdGxlLCAncGljdHVyZSc6IHBpY3R1cmUuYXNzZXQtPnVybCwgIH19YCxcclxuICAgIHsgc2x1ZyB9XHJcbiAgKTtcclxuICByZXR1cm4gcG9zdDtcclxufTtcclxuIiwiY29uc3Qgc2FuaXR5Q2xpZW50ID0gcmVxdWlyZShcIkBzYW5pdHkvY2xpZW50XCIpO1xyXG5cclxuY29uc3QgY2xpZW50ID0gc2FuaXR5Q2xpZW50KHtcclxuICBwcm9qZWN0SWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NBTklUWV9QUk9KRUNUX0lELFxyXG4gIGRhdGFzZXQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NBTklUWV9EQVRBU0VULFxyXG4gIHVzZUNkbjogcHJvY2Vzcy5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xpZW50O1xyXG4iLCJpbXBvcnQgeyBSb3csIENvbCB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiY29tcG9uZW50cy9sYXlvdXRcIjtcclxuaW1wb3J0IHsgZ2V0UG9zdEJ5U2x1ZywgZ2V0QWxsUG9zdHMgfSBmcm9tIFwibGliL2FwaVwiO1xyXG5pbXBvcnQgQmxvY2tDb250ZW50IGZyb20gXCJAc2FuaXR5L2Jsb2NrLWNvbnRlbnQtdG8tcmVhY3RcIjtcclxuaW1wb3J0IEhpZ2xpZ2h0Q29kZSBmcm9tIFwiY29tcG9uZW50cy9oaWdsaWdodC1jb2RlXCI7XHJcbmltcG9ydCB7IHVybEZvciB9IGZyb20gXCJsaWIvYXBpXCI7XHJcbmltcG9ydCBQb3N0SGVhZGVyIGZyb20gXCJjb21wb25lbnRzL3Bvc3QtaGVhZGVyXCI7XHJcblxyXG5jb25zdCBzZXJpYWxpemVycyA9IHtcclxuICB0eXBlczoge1xyXG4gICAgY29kZTogKHByb3BzKSA9PiAoXHJcbiAgICAgIDxIaWdsaWdodENvZGUgbGFuZ3VhZ2U9e3Byb3BzLm5vZGUubGFuZ3VhZ2V9PlxyXG4gICAgICAgIHtwcm9wcy5ub2RlLmNvZGV9XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2RlLWZpbGVuYW1lXCI+e3Byb3BzLm5vZGUuZmlsZW5hbWV9PC9kaXY+XHJcbiAgICAgIDwvSGlnbGlnaHRDb2RlPlxyXG4gICAgKSxcclxuICAgIGltYWdlOiAocHJvcHMpID0+IChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2BibG9nLWltYWdlIGJsb2ctaW1hZ2UtJHtwcm9wcy5ub2RlLnBvc2l0aW9ufWB9PlxyXG4gICAgICAgIDxpbWcgc3JjPXt1cmxGb3IocHJvcHMubm9kZSkuaGVpZ2h0KDQwMCkudXJsKCl9IC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2RlLWZpbGVuYW1lXCIgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAge3Byb3BzLm5vZGUuYWx0fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICksXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICh7IHBvc3QgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8Um93PlxyXG4gICAgICAgIDxDb2wgbWQ9XCIxMlwiPlxyXG4gICAgICAgICAgPHByZT57LypKU09OLnN0cmluZ2lmeShwb3N0LCBudWxsLCAyKSovfTwvcHJlPlxyXG4gICAgICAgICAgPFBvc3RIZWFkZXIgcG9zdD17cG9zdH0gLz5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPEJsb2NrQ29udGVudFxyXG4gICAgICAgICAgICBibG9ja3M9e3Bvc3QuY29udGVudH1cclxuICAgICAgICAgICAgc2VyaWFsaXplcnM9e3NlcmlhbGl6ZXJzfVxyXG4gICAgICAgICAgICBpbWFnZU9wdGlvbnM9e3sgdzogMzIwLCBoOiAyNDAsIGZpdDogXCJtYXhcIiB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgPC9Sb3c+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcclxuICBjb25zdCBwb3N0ID0gYXdhaXQgZ2V0UG9zdEJ5U2x1ZyhwYXJhbXMuc2x1Zyk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHBvc3Q6IHBvc3RbMF0sXHJcbiAgICB9LFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcG9zdHMgPSBhd2FpdCBnZXRBbGxQb3N0cygpO1xyXG4gIHJldHVybiB7XHJcbiAgICBwYXRoczogcG9zdHMubWFwKChwb3N0KSA9PiAoe1xyXG4gICAgICBwYXJhbXM6IHtcclxuICAgICAgICBzbHVnOiBwb3N0LnNsdWcsXHJcbiAgICAgIH0sXHJcbiAgICB9KSksXHJcbiAgICBmYWxsYmFjazogZmFsc2UsXHJcbiAgfTtcclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNhbml0eS9ibG9jay1jb250ZW50LXRvLXJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzYW5pdHkvY2xpZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzYW5pdHkvaW1hZ2UtdXJsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImhpZ2hsaWdodC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9