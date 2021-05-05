module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/posts.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/api.js":
/*!********************!*\
  !*** ./lib/api.js ***!
  \********************/
/*! exports provided: urlFor, getPaginetedPosts, getAllPosts, getPostBySlug, listenPostUpdate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlFor", function() { return urlFor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPaginetedPosts", function() { return getPaginetedPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllPosts", function() { return getAllPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostBySlug", function() { return getPostBySlug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listenPostUpdate", function() { return listenPostUpdate; });
/* harmony import */ var lib_sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lib/sanity */ "./lib/sanity.js");
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sanity/image-url */ "@sanity/image-url");
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_1__);


const builder = _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default()(lib_sanity__WEBPACK_IMPORTED_MODULE_0__["default"]);
const urlFor = source => {
  return builder.image(source);
};
const getPaginetedPosts = async (page, limit = 3) => {
  const posts = await lib_sanity__WEBPACK_IMPORTED_MODULE_0__["default"].fetch(`*[_type=="post"]{_createdAt, title, subtitle, date, 'image': cover_image.asset->url, 'slug':slug.current, 'publisher':publisher->{title, 'picture': picture.asset->url }} | order(date desc) [${page * limit}...${(page + 1) * limit}]`);
  return posts;
};
const getAllPosts = async () => {
  const posts = await lib_sanity__WEBPACK_IMPORTED_MODULE_0__["default"].fetch(`*[_type=="post"]{_createdAt, title, subtitle, date, 'image': cover_image.asset->url, 'slug':slug.current, 'publisher':publisher->{title, 'picture': picture.asset->url }} | order(date desc)`);
  return posts;
};
const getPostBySlug = async (slug, preview = false) => {
  let myclient = preview ? lib_sanity__WEBPACK_IMPORTED_MODULE_0__["previewClient"] : lib_sanity__WEBPACK_IMPORTED_MODULE_0__["default"];
  const post = await lib_sanity__WEBPACK_IMPORTED_MODULE_0__["default"].fetch(`*[_type=="post" && slug.current==$slug]{_createdAt, title, subtitle, date, content[]{...,'asset': asset->} , cover_image, 'slug':slug.current, 'publisher':publisher->{title, 'picture': picture.asset->url,  }}`, {
    slug
  });
  return post;
};
const listenPostUpdate = async (slug, fn) => {
  return lib_sanity__WEBPACK_IMPORTED_MODULE_0__["previewClient"].listen(`*[_type=="post" && slug.current==$slug]{_createdAt, title, subtitle, date, content[]{...,'asset': asset->} , cover_image, 'slug':slug.current, 'publisher':publisher->{title, 'picture': picture.asset->url,  }}`, {
    slug
  }).subscribe(fn);
};

/***/ }),

/***/ "./lib/sanity.js":
/*!***********************!*\
  !*** ./lib/sanity.js ***!
  \***********************/
/*! exports provided: previewClient, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "previewClient", function() { return previewClient; });
const sanityClient = __webpack_require__(/*! @sanity/client */ "@sanity/client");

const client = sanityClient({
  projectId: "mwmhwq8c",
  dataset: "production",
  useCdn: process.NODE_ENV === "production"
});
const previewClient = sanityClient({
  projectId: "mwmhwq8c",
  dataset: "production",
  useCdn: false,
  token: "skjhxsaEJZcGIjIZw1iKTEF2qPrX8JaL7BRZix5x4qTze3RaadJuhEuOACzvvpXE6oWoATfRr3x9SihhHilQ6i2g8CpTfbMdye26CjBTUAbkbakWpsL59WoP9HTJawDHnDHckRgb4CdswY9sEw6Y3ulrizJSXTHv9GvFU3VTVofNnm1EFjkH"
});
/* harmony default export */ __webpack_exports__["default"] = (client);

/***/ }),

/***/ "./pages/api/posts.js":
/*!****************************!*\
  !*** ./pages/api/posts.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lib_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lib/api */ "./lib/api.js");
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  const page = parseInt(req.query.page, 10);
  const limit = parseInt(req.query.limit, 10);
  console.log("===========" + Math.random(), page, limit);
  const posts = await Object(lib_api__WEBPACK_IMPORTED_MODULE_0__["getPaginetedPosts"])(page, limit);
  res.status(200).json(posts);
});

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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvc2FuaXR5LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2FwaS9wb3N0cy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2FuaXR5L2NsaWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBzYW5pdHkvaW1hZ2UtdXJsXCIiXSwibmFtZXMiOlsiYnVpbGRlciIsImltYWdlVXJsQnVpbGRlciIsImNsaWVudCIsInVybEZvciIsInNvdXJjZSIsImltYWdlIiwiZ2V0UGFnaW5ldGVkUG9zdHMiLCJwYWdlIiwibGltaXQiLCJwb3N0cyIsImZldGNoIiwiZ2V0QWxsUG9zdHMiLCJnZXRQb3N0QnlTbHVnIiwic2x1ZyIsInByZXZpZXciLCJteWNsaWVudCIsInByZXZpZXdDbGllbnQiLCJwb3N0IiwibGlzdGVuUG9zdFVwZGF0ZSIsImZuIiwibGlzdGVuIiwic3Vic2NyaWJlIiwic2FuaXR5Q2xpZW50IiwicmVxdWlyZSIsInByb2plY3RJZCIsInByb2Nlc3MiLCJkYXRhc2V0IiwidXNlQ2RuIiwiTk9ERV9FTlYiLCJ0b2tlbiIsInJlcSIsInJlcyIsInBhcnNlSW50IiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwiTWF0aCIsInJhbmRvbSIsInN0YXR1cyIsImpzb24iXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qs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LENBQUNDLE1BQUwsRUFBNUIsRUFBMkM5QixJQUEzQyxFQUFpREMsS0FBakQ7QUFDQSxRQUFNQyxLQUFLLEdBQUcsTUFBTUgsaUVBQWlCLENBQUNDLElBQUQsRUFBT0MsS0FBUCxDQUFyQztBQUNBdUIsS0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI5QixLQUFyQjtBQUNELENBTkQsRTs7Ozs7Ozs7Ozs7QUNIQSwyQzs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9hcGkvcG9zdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2FwaS9wb3N0cy5qc1wiKTtcbiIsImltcG9ydCBjbGllbnQsIHsgcHJldmlld0NsaWVudCB9IGZyb20gXCJsaWIvc2FuaXR5XCI7XHJcbmltcG9ydCBpbWFnZVVybEJ1aWxkZXIgZnJvbSBcIkBzYW5pdHkvaW1hZ2UtdXJsXCI7XHJcblxyXG5jb25zdCBidWlsZGVyID0gaW1hZ2VVcmxCdWlsZGVyKGNsaWVudCk7XHJcblxyXG5leHBvcnQgY29uc3QgdXJsRm9yID0gKHNvdXJjZSkgPT4ge1xyXG4gIHJldHVybiBidWlsZGVyLmltYWdlKHNvdXJjZSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UGFnaW5ldGVkUG9zdHMgPSBhc3luYyAocGFnZSwgbGltaXQgPSAzKSA9PiB7XHJcbiAgY29uc3QgcG9zdHMgPSBhd2FpdCBjbGllbnQuZmV0Y2goXHJcbiAgICBgKltfdHlwZT09XCJwb3N0XCJde19jcmVhdGVkQXQsIHRpdGxlLCBzdWJ0aXRsZSwgZGF0ZSwgJ2ltYWdlJzogY292ZXJfaW1hZ2UuYXNzZXQtPnVybCwgJ3NsdWcnOnNsdWcuY3VycmVudCwgJ3B1Ymxpc2hlcic6cHVibGlzaGVyLT57dGl0bGUsICdwaWN0dXJlJzogcGljdHVyZS5hc3NldC0+dXJsIH19IHwgb3JkZXIoZGF0ZSBkZXNjKSBbJHtcclxuICAgICAgcGFnZSAqIGxpbWl0XHJcbiAgICB9Li4uJHsocGFnZSArIDEpICogbGltaXR9XWBcclxuICApO1xyXG4gIHJldHVybiBwb3N0cztcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRBbGxQb3N0cyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBwb3N0cyA9IGF3YWl0IGNsaWVudC5mZXRjaChcclxuICAgIGAqW190eXBlPT1cInBvc3RcIl17X2NyZWF0ZWRBdCwgdGl0bGUsIHN1YnRpdGxlLCBkYXRlLCAnaW1hZ2UnOiBjb3Zlcl9pbWFnZS5hc3NldC0+dXJsLCAnc2x1Zyc6c2x1Zy5jdXJyZW50LCAncHVibGlzaGVyJzpwdWJsaXNoZXItPnt0aXRsZSwgJ3BpY3R1cmUnOiBwaWN0dXJlLmFzc2V0LT51cmwgfX0gfCBvcmRlcihkYXRlIGRlc2MpYFxyXG4gICk7XHJcbiAgcmV0dXJuIHBvc3RzO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFBvc3RCeVNsdWcgPSBhc3luYyAoc2x1ZywgcHJldmlldyA9IGZhbHNlKSA9PiB7XHJcbiAgbGV0IG15Y2xpZW50ID0gcHJldmlldyA/IHByZXZpZXdDbGllbnQgOiBjbGllbnQ7XHJcbiAgY29uc3QgcG9zdCA9IGF3YWl0IGNsaWVudC5mZXRjaChcclxuICAgIGAqW190eXBlPT1cInBvc3RcIiAmJiBzbHVnLmN1cnJlbnQ9PSRzbHVnXXtfY3JlYXRlZEF0LCB0aXRsZSwgc3VidGl0bGUsIGRhdGUsIGNvbnRlbnRbXXsuLi4sJ2Fzc2V0JzogYXNzZXQtPn0gLCBjb3Zlcl9pbWFnZSwgJ3NsdWcnOnNsdWcuY3VycmVudCwgJ3B1Ymxpc2hlcic6cHVibGlzaGVyLT57dGl0bGUsICdwaWN0dXJlJzogcGljdHVyZS5hc3NldC0+dXJsLCAgfX1gLFxyXG4gICAgeyBzbHVnIH1cclxuICApO1xyXG4gIHJldHVybiBwb3N0O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxpc3RlblBvc3RVcGRhdGUgPSBhc3luYyAoc2x1ZywgZm4pID0+IHtcclxuICByZXR1cm4gcHJldmlld0NsaWVudFxyXG4gICAgLmxpc3RlbihcclxuICAgICAgYCpbX3R5cGU9PVwicG9zdFwiICYmIHNsdWcuY3VycmVudD09JHNsdWdde19jcmVhdGVkQXQsIHRpdGxlLCBzdWJ0aXRsZSwgZGF0ZSwgY29udGVudFtdey4uLiwnYXNzZXQnOiBhc3NldC0+fSAsIGNvdmVyX2ltYWdlLCAnc2x1Zyc6c2x1Zy5jdXJyZW50LCAncHVibGlzaGVyJzpwdWJsaXNoZXItPnt0aXRsZSwgJ3BpY3R1cmUnOiBwaWN0dXJlLmFzc2V0LT51cmwsICB9fWAsXHJcbiAgICAgIHsgc2x1ZyB9XHJcbiAgICApXHJcbiAgICAuc3Vic2NyaWJlKGZuKTtcclxufTtcclxuIiwiY29uc3Qgc2FuaXR5Q2xpZW50ID0gcmVxdWlyZShcIkBzYW5pdHkvY2xpZW50XCIpO1xyXG5cclxuY29uc3QgY2xpZW50ID0gc2FuaXR5Q2xpZW50KHtcclxuICBwcm9qZWN0SWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NBTklUWV9QUk9KRUNUX0lELFxyXG4gIGRhdGFzZXQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NBTklUWV9EQVRBU0VULFxyXG4gIHVzZUNkbjogcHJvY2Vzcy5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHByZXZpZXdDbGllbnQgPSBzYW5pdHlDbGllbnQoe1xyXG4gIHByb2plY3RJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU0FOSVRZX1BST0pFQ1RfSUQsXHJcbiAgZGF0YXNldDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU0FOSVRZX0RBVEFTRVQsXHJcbiAgdXNlQ2RuOiBmYWxzZSxcclxuICB0b2tlbjpcclxuICAgIFwic2tqaHhzYUVKWmNHSWpJWncxaUtURUYycVByWDhKYUw3QlJaaXg1eDRxVHplM1JhYWRKdWhFdU9BQ3p2dnBYRTZvV29BVGZScjN4OVNpaGhIaWxRNmkyZzhDcFRmYk1keWUyNkNqQlRVQWJrYmFrV3BzTDU5V29QOUhUSmF3REhuREhja1JnYjRDZHN3WTlzRXc2WTN1bHJpekpTWFRIdjlHdkZVM1ZUVm9mTm5tMUVGamtIXCIsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xpZW50O1xyXG4iLCIvLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxyXG5pbXBvcnQgeyBnZXRQYWdpbmV0ZWRQb3N0cyB9IGZyb20gXCJsaWIvYXBpXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICBjb25zdCBwYWdlID0gcGFyc2VJbnQocmVxLnF1ZXJ5LnBhZ2UsIDEwKTtcclxuICBjb25zdCBsaW1pdCA9IHBhcnNlSW50KHJlcS5xdWVyeS5saW1pdCwgMTApO1xyXG4gIGNvbnNvbGUubG9nKFwiPT09PT09PT09PT1cIiArIE1hdGgucmFuZG9tKCksIHBhZ2UsIGxpbWl0KTtcclxuICBjb25zdCBwb3N0cyA9IGF3YWl0IGdldFBhZ2luZXRlZFBvc3RzKHBhZ2UsIGxpbWl0KTtcclxuICByZXMuc3RhdHVzKDIwMCkuanNvbihwb3N0cyk7XHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzYW5pdHkvY2xpZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzYW5pdHkvaW1hZ2UtdXJsXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=