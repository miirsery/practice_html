/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/block.js":
/*!*****************************!*\
  !*** ./src/blocks/block.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _choose_choose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./choose/choose */ \"./src/blocks/choose/choose.js\");\n/* harmony import */ var _choose_choose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_choose_choose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _gifts_gifts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gifts/gifts */ \"./src/blocks/gifts/gifts.js\");\n/* harmony import */ var _gifts_gifts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_gifts_gifts__WEBPACK_IMPORTED_MODULE_1__);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2Jsb2NrLmpzP2JiNWIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6Ii4vc3JjL2Jsb2Nrcy9ibG9jay5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9jaG9vc2UvY2hvb3NlJ1xyXG5pbXBvcnQgJy4vZ2lmdHMvZ2lmdHMnIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/blocks/block.js\n");

/***/ }),

/***/ "./src/blocks/choose/choose.js":
/*!*************************************!*\
  !*** ./src/blocks/choose/choose.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3NyYy9ibG9ja3MvY2hvb3NlL2Nob29zZS5qcy5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/blocks/choose/choose.js\n");

/***/ }),

/***/ "./src/blocks/gifts/gifts.js":
/*!***********************************!*\
  !*** ./src/blocks/gifts/gifts.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("document.addEventListener('DOMContentLoaded', function () {\n  var tabs = document.querySelector('.tabs');\n  var tabsBtn = document.querySelectorAll('.tabs__btn');\n  var tabsContent = document.querySelectorAll('.tabs__block');\n\n  if (tabs) {\n    tabs.addEventListener('click', function (e) {\n      if (e.target.classList.contains('tabs__btn')) {\n        var tabsPath = e.target.dataset.tabsPath;\n        tabsBtn.forEach(function (el) {\n          el.classList.remove('tabs__btn--active');\n        });\n        document.querySelector(\"[data-tabs-path=\\\"\".concat(tabsPath, \"\\\"]\")).classList.add('tabs__btn--active');\n        tabsHandler(tabsPath);\n      }\n    });\n  }\n\n  var tabsHandler = function tabsHandler(path) {\n    tabsContent.forEach(function (el) {\n      el.classList.remove('tabs__block--active');\n    });\n    document.querySelector(\"[data-tabs-target=\\\"\".concat(path, \"\\\"]\")).classList.add('tabs__block--active');\n  };\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2dpZnRzL2dpZnRzLmpzPzI3ZDYiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwidGFicyIsInF1ZXJ5U2VsZWN0b3IiLCJ0YWJzQnRuIiwicXVlcnlTZWxlY3RvckFsbCIsInRhYnNDb250ZW50IiwiZSIsInRhcmdldCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwidGFic1BhdGgiLCJkYXRhc2V0IiwiZm9yRWFjaCIsImVsIiwicmVtb3ZlIiwiYWRkIiwidGFic0hhbmRsZXIiLCJwYXRoIl0sIm1hcHBpbmdzIjoiQUFBQUEsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBTTtBQUNoRCxNQUFNQyxJQUFJLEdBQUdGLFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixPQUF2QixDQUFiO0FBQ0EsTUFBTUMsT0FBTyxHQUFHSixRQUFRLENBQUNLLGdCQUFULENBQTBCLFlBQTFCLENBQWhCO0FBQ0EsTUFBTUMsV0FBVyxHQUFHTixRQUFRLENBQUNLLGdCQUFULENBQTBCLGNBQTFCLENBQXBCOztBQUNBLE1BQUlILElBQUosRUFBVTtBQUNOQSxRQUFJLENBQUNELGdCQUFMLENBQXNCLE9BQXRCLEVBQStCLFVBQUNNLENBQUQsRUFBTztBQUNsQyxVQUFJQSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsU0FBVCxDQUFtQkMsUUFBbkIsQ0FBNEIsV0FBNUIsQ0FBSixFQUE4QztBQUMxQyxZQUFNQyxRQUFRLEdBQUdKLENBQUMsQ0FBQ0MsTUFBRixDQUFTSSxPQUFULENBQWlCRCxRQUFsQztBQUNBUCxlQUFPLENBQUNTLE9BQVIsQ0FBZ0IsVUFBQUMsRUFBRSxFQUFJO0FBQUNBLFlBQUUsQ0FBQ0wsU0FBSCxDQUFhTSxNQUFiLENBQW9CLG1CQUFwQjtBQUF5QyxTQUFoRTtBQUNBZixnQkFBUSxDQUFDRyxhQUFULDZCQUEyQ1EsUUFBM0MsVUFBeURGLFNBQXpELENBQW1FTyxHQUFuRSxDQUF1RSxtQkFBdkU7QUFDQUMsbUJBQVcsQ0FBQ04sUUFBRCxDQUFYO0FBQ0g7QUFDSixLQVBEO0FBUUg7O0FBQ0QsTUFBTU0sV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsSUFBRCxFQUFVO0FBQzFCWixlQUFXLENBQUNPLE9BQVosQ0FBb0IsVUFBQUMsRUFBRSxFQUFJO0FBQ3RCQSxRQUFFLENBQUNMLFNBQUgsQ0FBYU0sTUFBYixDQUFvQixxQkFBcEI7QUFDSCxLQUZEO0FBR0FmLFlBQVEsQ0FBQ0csYUFBVCwrQkFBNkNlLElBQTdDLFVBQXVEVCxTQUF2RCxDQUFpRU8sR0FBakUsQ0FBcUUscUJBQXJFO0FBQ0gsR0FMRDtBQU1ILENBcEJEIiwiZmlsZSI6Ii4vc3JjL2Jsb2Nrcy9naWZ0cy9naWZ0cy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgY29uc3QgdGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWJzJylcbiAgICBjb25zdCB0YWJzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYnNfX2J0bicpXG4gICAgY29uc3QgdGFic0NvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFic19fYmxvY2snKTtcbiAgICBpZiAodGFicykge1xuICAgICAgICB0YWJzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3RhYnNfX2J0bicpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFic1BhdGggPSBlLnRhcmdldC5kYXRhc2V0LnRhYnNQYXRoO1xuICAgICAgICAgICAgICAgIHRhYnNCdG4uZm9yRWFjaChlbCA9PiB7ZWwuY2xhc3NMaXN0LnJlbW92ZSgndGFic19fYnRuLS1hY3RpdmUnKX0pO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXRhYnMtcGF0aD1cIiR7dGFic1BhdGh9XCJdYCkuY2xhc3NMaXN0LmFkZCgndGFic19fYnRuLS1hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB0YWJzSGFuZGxlcih0YWJzUGF0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuICAgIGNvbnN0IHRhYnNIYW5kbGVyID0gKHBhdGgpID0+IHtcbiAgICAgICAgdGFic0NvbnRlbnQuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCd0YWJzX19ibG9jay0tYWN0aXZlJylcbiAgICAgICAgfSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXRhYnMtdGFyZ2V0PVwiJHtwYXRofVwiXWApLmNsYXNzTGlzdC5hZGQoJ3RhYnNfX2Jsb2NrLS1hY3RpdmUnKTtcbiAgICB9O1xufSlcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/blocks/gifts/gifts.js\n");

/***/ }),

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _blocks_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blocks/block */ \"./src/blocks/block.js\");\n// import 'swiper/swiper.min.css'\n// import Swiper, { Navigation, Pagination } from 'swiper';\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tYWluLmpzPzI5NjMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0EiLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9tYWluLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0ICdzd2lwZXIvc3dpcGVyLm1pbi5jc3MnXG4vLyBpbXBvcnQgU3dpcGVyLCB7IE5hdmlnYXRpb24sIFBhZ2luYXRpb24gfSBmcm9tICdzd2lwZXInO1xuXG5pbXBvcnQgJy4uL2Jsb2Nrcy9ibG9jaydcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/main.js\n");

/***/ })

/******/ });