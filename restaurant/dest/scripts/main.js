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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header */ \"./src/blocks/header/header.js\");\n/* harmony import */ var _header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_header_header__WEBPACK_IMPORTED_MODULE_0__);\n// import './main-view/main-slider/main-slider.js'\n// import './base/header/header'\n// import './base/order-status/order-status'\n// import './actions/request-api'\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2Jsb2NrLmpzP2JiNWIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zcmMvYmxvY2tzL2Jsb2NrLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0ICcuL21haW4tdmlldy9tYWluLXNsaWRlci9tYWluLXNsaWRlci5qcydcclxuLy8gaW1wb3J0ICcuL2Jhc2UvaGVhZGVyL2hlYWRlcidcclxuLy8gaW1wb3J0ICcuL2Jhc2Uvb3JkZXItc3RhdHVzL29yZGVyLXN0YXR1cydcclxuLy8gaW1wb3J0ICcuL2FjdGlvbnMvcmVxdWVzdC1hcGknXHJcbmltcG9ydCAnLi9oZWFkZXIvaGVhZGVyJyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/blocks/block.js\n");

/***/ }),

/***/ "./src/blocks/header/header.js":
/*!*************************************!*\
  !*** ./src/blocks/header/header.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("document.addEventListener('DOMContentLoaded', function (e) {\n  var burgerBtn = document.querySelector('.header__btn');\n  var burgerMenu = document.querySelector('.burger__nav');\n  burgerBtn.addEventListener('click', openBurger);\n\n  function openBurger(event) {\n    console.log(event.target);\n    burgerMenu.classList.toggle('active');\n  }\n\n  function resize() {\n    window.innerWidth > 1023 ? burgerMenu.classList.remove('active') : '';\n  }\n\n  window.onresize = resize;\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2hlYWRlci9oZWFkZXIuanM/Y2UyMyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiYnVyZ2VyQnRuIiwicXVlcnlTZWxlY3RvciIsImJ1cmdlck1lbnUiLCJvcGVuQnVyZ2VyIiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwicmVzaXplIiwid2luZG93IiwiaW5uZXJXaWR0aCIsInJlbW92ZSIsIm9ucmVzaXplIl0sIm1hcHBpbmdzIjoiQUFBQUEsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsVUFBVUMsQ0FBVixFQUFhO0FBQ3ZELE1BQU1DLFNBQVMsR0FBR0gsUUFBUSxDQUFDSSxhQUFULENBQXVCLGNBQXZCLENBQWxCO0FBQ0EsTUFBTUMsVUFBVSxHQUFHTCxRQUFRLENBQUNJLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBbkI7QUFDQUQsV0FBUyxDQUFDRixnQkFBVixDQUEyQixPQUEzQixFQUFvQ0ssVUFBcEM7O0FBRUEsV0FBU0EsVUFBVCxDQUFvQkMsS0FBcEIsRUFBMkI7QUFDM0JDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFLLENBQUNHLE1BQWxCO0FBQ0FMLGNBQVUsQ0FBQ00sU0FBWCxDQUFxQkMsTUFBckIsQ0FBNEIsUUFBNUI7QUFDSDs7QUFHRCxXQUFTQyxNQUFULEdBQWtCO0FBQ2JDLFVBQU0sQ0FBQ0MsVUFBUCxHQUFvQixJQUFyQixHQUE2QlYsVUFBVSxDQUFDTSxTQUFYLENBQXFCSyxNQUFyQixDQUE0QixRQUE1QixDQUE3QixHQUFxRSxFQUFyRTtBQUNIOztBQUVERixRQUFNLENBQUNHLFFBQVAsR0FBa0JKLE1BQWxCO0FBQ0MsQ0FoQkQiLCJmaWxlIjoiLi9zcmMvYmxvY2tzL2hlYWRlci9oZWFkZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIGNvbnN0IGJ1cmdlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2J0bicpXHJcbiAgICBjb25zdCBidXJnZXJNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1cmdlcl9fbmF2JylcclxuICAgIGJ1cmdlckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5CdXJnZXIpXHJcblxyXG4gICAgZnVuY3Rpb24gb3BlbkJ1cmdlcihldmVudCkge1xyXG4gICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0KVxyXG4gICAgYnVyZ2VyTWVudS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gcmVzaXplKCkge1xyXG4gICAgKHdpbmRvdy5pbm5lcldpZHRoID4gMTAyMykgPyBidXJnZXJNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpIDogJydcclxufVxyXG5cclxud2luZG93Lm9ucmVzaXplID0gcmVzaXplXHJcbn0pXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/blocks/header/header.js\n");

/***/ }),

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _blocks_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blocks/block */ \"./src/blocks/block.js\");\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tYWluLmpzPzI5NjMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSIsImZpbGUiOiIuL3NyYy9zY3JpcHRzL21haW4uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL2Jsb2Nrcy9ibG9jayciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/main.js\n");

/***/ })

/******/ });