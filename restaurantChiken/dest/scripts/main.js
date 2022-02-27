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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _faq_faq__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./faq/faq */ \"./src/blocks/faq/faq.js\");\n/* harmony import */ var _faq_faq__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_faq_faq__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _order_order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order/order */ \"./src/blocks/order/order.js\");\n/* harmony import */ var _order_order__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_order_order__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _empty_cart_empty_cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./empty-cart/empty-cart */ \"./src/blocks/empty-cart/empty-cart.js\");\n/* harmony import */ var _empty_cart_empty_cart__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_empty_cart_empty_cart__WEBPACK_IMPORTED_MODULE_2__);\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2Jsb2NrLmpzP2JiNWIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBIiwiZmlsZSI6Ii4vc3JjL2Jsb2Nrcy9ibG9jay5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9mYXEvZmFxJ1xyXG5pbXBvcnQgJy4vb3JkZXIvb3JkZXInXHJcbmltcG9ydCAnLi9lbXB0eS1jYXJ0L2VtcHR5LWNhcnQnXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/blocks/block.js\n");

/***/ }),

/***/ "./src/blocks/empty-cart/empty-cart.js":
/*!*********************************************!*\
  !*** ./src/blocks/empty-cart/empty-cart.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("document.addEventListener('DOMContentLoaded', function () {\n  var emptyCart = document.querySelector('.empty-cart');\n  var headerCart = document.querySelector('.header__cart');\n  emptyCart.querySelector('.empty-cart__close').addEventListener('click', function () {\n    emptyCart.classList.remove('active');\n  });\n  headerCart.addEventListener('click', function (e) {\n    e.preventDefault();\n    emptyCart.classList.add('active');\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2VtcHR5LWNhcnQvZW1wdHktY2FydC5qcz81ZmVmIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImVtcHR5Q2FydCIsInF1ZXJ5U2VsZWN0b3IiLCJoZWFkZXJDYXJ0IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiZSIsInByZXZlbnREZWZhdWx0IiwiYWRkIl0sIm1hcHBpbmdzIjoiQUFBQUEsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBTTtBQUNoRCxNQUFNQyxTQUFTLEdBQUdGLFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixhQUF2QixDQUFsQjtBQUNBLE1BQU1DLFVBQVUsR0FBR0osUUFBUSxDQUFDRyxhQUFULENBQXVCLGVBQXZCLENBQW5CO0FBQ0FELFdBQVMsQ0FBQ0MsYUFBVixDQUF3QixvQkFBeEIsRUFBOENGLGdCQUE5QyxDQUErRCxPQUEvRCxFQUF3RSxZQUFZO0FBQ2hGQyxhQUFTLENBQUNHLFNBQVYsQ0FBb0JDLE1BQXBCLENBQTJCLFFBQTNCO0FBQ0gsR0FGRDtBQUdBRixZQUFVLENBQUNILGdCQUFYLENBQTRCLE9BQTVCLEVBQXFDLFVBQUNNLENBQUQsRUFBTztBQUN4Q0EsS0FBQyxDQUFDQyxjQUFGO0FBQ0FOLGFBQVMsQ0FBQ0csU0FBVixDQUFvQkksR0FBcEIsQ0FBd0IsUUFBeEI7QUFDSCxHQUhEO0FBSUgsQ0FWRCIsImZpbGUiOiIuL3NyYy9ibG9ja3MvZW1wdHktY2FydC9lbXB0eS1jYXJ0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICAgIGNvbnN0IGVtcHR5Q2FydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbXB0eS1jYXJ0JylcclxuICAgIGNvbnN0IGhlYWRlckNhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19jYXJ0JylcclxuICAgIGVtcHR5Q2FydC5xdWVyeVNlbGVjdG9yKCcuZW1wdHktY2FydF9fY2xvc2UnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBlbXB0eUNhcnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICAgIH0pXHJcbiAgICBoZWFkZXJDYXJ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBlbXB0eUNhcnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuICAgIH0pXHJcbn0pXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/blocks/empty-cart/empty-cart.js\n");

/***/ }),

/***/ "./src/blocks/faq/faq.js":
/*!*******************************!*\
  !*** ./src/blocks/faq/faq.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("if (window.location.toString().indexOf('faqPage.html') > 0) {\n  var toggleAsk = function toggleAsk(ask) {\n    var answer = ask.parentNode.querySelector('.faq__item-content');\n    var arrow = ask.querySelector('.faq__item-arrow');\n    console.log(arrow);\n\n    if (answer.classList.contains('active')) {\n      var animate = answer.animate([{\n        opacity: 1\n      }, {\n        opacity: 0\n      }], {\n        duration: 500\n      });\n      animate.addEventListener('finish', function () {\n        answer.classList.remove('active');\n        arrow.style.transform = 'rotate(0deg)';\n      });\n    } else {\n      answer.classList.add('active');\n      arrow.style.transform = 'rotate(180deg)';\n    }\n  };\n\n  var faqLeft = document.querySelector('.faq__left');\n  console.log('work');\n  faqLeft.addEventListener('click', function (e) {\n    if (e.target.classList.contains('faq__item-title')) {\n      toggleAsk(e.target);\n    }\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2ZhcS9mYXEuanM/OWE2MiJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJsb2NhdGlvbiIsInRvU3RyaW5nIiwiaW5kZXhPZiIsInRvZ2dsZUFzayIsImFzayIsImFuc3dlciIsInBhcmVudE5vZGUiLCJxdWVyeVNlbGVjdG9yIiwiYXJyb3ciLCJjb25zb2xlIiwibG9nIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJhbmltYXRlIiwib3BhY2l0eSIsImR1cmF0aW9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZSIsInN0eWxlIiwidHJhbnNmb3JtIiwiYWRkIiwiZmFxTGVmdCIsImRvY3VtZW50IiwiZSIsInRhcmdldCJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSUEsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxRQUFoQixHQUEyQkMsT0FBM0IsQ0FBbUMsY0FBbkMsSUFBcUQsQ0FBekQsRUFBNEQ7QUFBQSxNQVMvQ0MsU0FUK0MsR0FTeEQsU0FBU0EsU0FBVCxDQUFtQkMsR0FBbkIsRUFBd0I7QUFDcEIsUUFBSUMsTUFBTSxHQUFHRCxHQUFHLENBQUNFLFVBQUosQ0FBZUMsYUFBZixDQUE2QixvQkFBN0IsQ0FBYjtBQUNBLFFBQUlDLEtBQUssR0FBR0osR0FBRyxDQUFDRyxhQUFKLENBQWtCLGtCQUFsQixDQUFaO0FBQ0FFLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaOztBQUNBLFFBQUlILE1BQU0sQ0FBQ00sU0FBUCxDQUFpQkMsUUFBakIsQ0FBMEIsUUFBMUIsQ0FBSixFQUF5QztBQUNyQyxVQUFJQyxPQUFPLEdBQUdSLE1BQU0sQ0FBQ1EsT0FBUCxDQUFlLENBQ3pCO0FBQUNDLGVBQU8sRUFBRTtBQUFWLE9BRHlCLEVBRXpCO0FBQUNBLGVBQU8sRUFBRTtBQUFWLE9BRnlCLENBQWYsRUFHWDtBQUFDQyxnQkFBUSxFQUFFO0FBQVgsT0FIVyxDQUFkO0FBS0FGLGFBQU8sQ0FBQ0csZ0JBQVIsQ0FBeUIsUUFBekIsRUFBbUMsWUFBWTtBQUMzQ1gsY0FBTSxDQUFDTSxTQUFQLENBQWlCTSxNQUFqQixDQUF3QixRQUF4QjtBQUNBVCxhQUFLLENBQUNVLEtBQU4sQ0FBWUMsU0FBWixHQUF3QixjQUF4QjtBQUNILE9BSEQ7QUFJSCxLQVZELE1BVU87QUFDSGQsWUFBTSxDQUFDTSxTQUFQLENBQWlCUyxHQUFqQixDQUFxQixRQUFyQjtBQUNBWixXQUFLLENBQUNVLEtBQU4sQ0FBWUMsU0FBWixHQUF3QixnQkFBeEI7QUFDSDtBQUNKLEdBM0J1RDs7QUFDeEQsTUFBTUUsT0FBTyxHQUFHQyxRQUFRLENBQUNmLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBaEI7QUFDQUUsU0FBTyxDQUFDQyxHQUFSLENBQVksTUFBWjtBQUNBVyxTQUFPLENBQUNMLGdCQUFSLENBQXlCLE9BQXpCLEVBQWtDLFVBQVVPLENBQVYsRUFBYTtBQUMzQyxRQUFJQSxDQUFDLENBQUNDLE1BQUYsQ0FBU2IsU0FBVCxDQUFtQkMsUUFBbkIsQ0FBNEIsaUJBQTVCLENBQUosRUFBb0Q7QUFDaERULGVBQVMsQ0FBQ29CLENBQUMsQ0FBQ0MsTUFBSCxDQUFUO0FBQ0g7QUFDSixHQUpEO0FBMkJIIiwiZmlsZSI6Ii4vc3JjL2Jsb2Nrcy9mYXEvZmFxLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaWYgKHdpbmRvdy5sb2NhdGlvbi50b1N0cmluZygpLmluZGV4T2YoJ2ZhcVBhZ2UuaHRtbCcpID4gMCkge1xyXG4gICAgY29uc3QgZmFxTGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYXFfX2xlZnQnKVxyXG4gICAgY29uc29sZS5sb2coJ3dvcmsnKVxyXG4gICAgZmFxTGVmdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZmFxX19pdGVtLXRpdGxlJykpIHtcclxuICAgICAgICAgICAgdG9nZ2xlQXNrKGUudGFyZ2V0KVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgZnVuY3Rpb24gdG9nZ2xlQXNrKGFzaykge1xyXG4gICAgICAgIGxldCBhbnN3ZXIgPSBhc2sucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCcuZmFxX19pdGVtLWNvbnRlbnQnKVxyXG4gICAgICAgIGxldCBhcnJvdyA9IGFzay5xdWVyeVNlbGVjdG9yKCcuZmFxX19pdGVtLWFycm93JylcclxuICAgICAgICBjb25zb2xlLmxvZyhhcnJvdylcclxuICAgICAgICBpZiAoYW5zd2VyLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcclxuICAgICAgICAgICAgbGV0IGFuaW1hdGUgPSBhbnN3ZXIuYW5pbWF0ZShbXHJcbiAgICAgICAgICAgICAgICB7b3BhY2l0eTogMX0sXHJcbiAgICAgICAgICAgICAgICB7b3BhY2l0eTogMH0sXHJcbiAgICAgICAgICAgIF0sIHtkdXJhdGlvbjogNTAwfSlcclxuXHJcbiAgICAgICAgICAgIGFuaW1hdGUuYWRkRXZlbnRMaXN0ZW5lcignZmluaXNoJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgYW5zd2VyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgICAgICAgICAgICAgICBhcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDBkZWcpJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFuc3dlci5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG4gICAgICAgICAgICBhcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDE4MGRlZyknXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/blocks/faq/faq.js\n");

/***/ }),

/***/ "./src/blocks/order/order.js":
/*!***********************************!*\
  !*** ./src/blocks/order/order.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("if (window.location.toString().indexOf('orderPage.html') > 0) {\n  var getTime = function getTime() {\n    var now = new Date().getHours();\n    if (now >= 21 || now < 8) notDelivery.classList.add('active');else notDelivery.classList.remove('active');\n    console.log(now);\n  };\n\n  var onTabClick = function onTabClick(item) {\n    item.addEventListener('click', function (e) {\n      e.preventDefault();\n      var currentBtn = item;\n      var tabId = currentBtn.getAttribute('data-tab');\n      var currentTab = document.querySelector(tabId);\n      if (tabId === '#tab_1') deliveryTime.classList.add('active');\n      if (tabId === '#tab_2') deliveryTime.classList.remove('active');\n\n      if (!currentBtn.classList.contains('active')) {\n        deliveryButtons.forEach(function (item) {\n          item.classList.remove('active');\n        });\n        deliveryItems.forEach(function (item) {\n          item.classList.remove('active');\n        });\n        currentBtn.classList.add('active');\n        currentTab.classList.add('active');\n      }\n    });\n  };\n\n  var deliveryButtons = document.querySelectorAll('.order__delivery-button');\n  var deliveryItems = document.querySelectorAll('.order__delivery');\n  var deliveryTime = document.querySelector('.order__delivery-time');\n  var notDelivery = document.querySelector('.not-delivery');\n  deliveryButtons.forEach(onTabClick);\n  getTime();\n  document.querySelector('.order__delivery-button').click();\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL29yZGVyL29yZGVyLmpzP2U1M2QiXSwibmFtZXMiOlsid2luZG93IiwibG9jYXRpb24iLCJ0b1N0cmluZyIsImluZGV4T2YiLCJnZXRUaW1lIiwibm93IiwiRGF0ZSIsImdldEhvdXJzIiwibm90RGVsaXZlcnkiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJjb25zb2xlIiwibG9nIiwib25UYWJDbGljayIsIml0ZW0iLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY3VycmVudEJ0biIsInRhYklkIiwiZ2V0QXR0cmlidXRlIiwiY3VycmVudFRhYiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImRlbGl2ZXJ5VGltZSIsImNvbnRhaW5zIiwiZGVsaXZlcnlCdXR0b25zIiwiZm9yRWFjaCIsImRlbGl2ZXJ5SXRlbXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2xpY2siXSwibWFwcGluZ3MiOiJBQUFBLElBQUlBLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsUUFBaEIsR0FBMkJDLE9BQTNCLENBQW1DLGdCQUFuQyxJQUF1RCxDQUEzRCxFQUE4RDtBQUFBLE1BU2pEQyxPQVRpRCxHQVMxRCxTQUFTQSxPQUFULEdBQW1CO0FBQ2YsUUFBSUMsR0FBRyxHQUFHLElBQUlDLElBQUosR0FBV0MsUUFBWCxFQUFWO0FBQ0EsUUFBSUYsR0FBRyxJQUFJLEVBQVAsSUFBYUEsR0FBRyxHQUFHLENBQXZCLEVBQTBCRyxXQUFXLENBQUNDLFNBQVosQ0FBc0JDLEdBQXRCLENBQTBCLFFBQTFCLEVBQTFCLEtBQ0tGLFdBQVcsQ0FBQ0MsU0FBWixDQUFzQkUsTUFBdEIsQ0FBNkIsUUFBN0I7QUFDTEMsV0FBTyxDQUFDQyxHQUFSLENBQVlSLEdBQVo7QUFDSCxHQWR5RDs7QUFBQSxNQWtCakRTLFVBbEJpRCxHQWtCMUQsU0FBU0EsVUFBVCxDQUFvQkMsSUFBcEIsRUFBMEI7QUFDdEJBLFFBQUksQ0FBQ0MsZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0IsVUFBQ0MsQ0FBRCxFQUFPO0FBQ2xDQSxPQUFDLENBQUNDLGNBQUY7QUFDQSxVQUFJQyxVQUFVLEdBQUdKLElBQWpCO0FBQ0EsVUFBSUssS0FBSyxHQUFHRCxVQUFVLENBQUNFLFlBQVgsQ0FBd0IsVUFBeEIsQ0FBWjtBQUNBLFVBQUlDLFVBQVUsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCSixLQUF2QixDQUFqQjtBQUNBLFVBQUlBLEtBQUssS0FBSyxRQUFkLEVBQXdCSyxZQUFZLENBQUNoQixTQUFiLENBQXVCQyxHQUF2QixDQUEyQixRQUEzQjtBQUN4QixVQUFJVSxLQUFLLEtBQUssUUFBZCxFQUF3QkssWUFBWSxDQUFDaEIsU0FBYixDQUF1QkUsTUFBdkIsQ0FBOEIsUUFBOUI7O0FBRXhCLFVBQUksQ0FBQ1EsVUFBVSxDQUFDVixTQUFYLENBQXFCaUIsUUFBckIsQ0FBOEIsUUFBOUIsQ0FBTCxFQUE4QztBQUMxQ0MsdUJBQWUsQ0FBQ0MsT0FBaEIsQ0FBd0IsVUFBQWIsSUFBSSxFQUFJO0FBQzVCQSxjQUFJLENBQUNOLFNBQUwsQ0FBZUUsTUFBZixDQUFzQixRQUF0QjtBQUNILFNBRkQ7QUFHQWtCLHFCQUFhLENBQUNELE9BQWQsQ0FBc0IsVUFBQWIsSUFBSSxFQUFJO0FBQzFCQSxjQUFJLENBQUNOLFNBQUwsQ0FBZUUsTUFBZixDQUFzQixRQUF0QjtBQUNILFNBRkQ7QUFJQVEsa0JBQVUsQ0FBQ1YsU0FBWCxDQUFxQkMsR0FBckIsQ0FBeUIsUUFBekI7QUFDQVksa0JBQVUsQ0FBQ2IsU0FBWCxDQUFxQkMsR0FBckIsQ0FBeUIsUUFBekI7QUFDSDtBQUNKLEtBbkJEO0FBb0JILEdBdkN5RDs7QUFFMUQsTUFBTWlCLGVBQWUsR0FBR0osUUFBUSxDQUFDTyxnQkFBVCxDQUEwQix5QkFBMUIsQ0FBeEI7QUFDQSxNQUFNRCxhQUFhLEdBQUdOLFFBQVEsQ0FBQ08sZ0JBQVQsQ0FBMEIsa0JBQTFCLENBQXRCO0FBQ0EsTUFBTUwsWUFBWSxHQUFHRixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsdUJBQXZCLENBQXJCO0FBQ0EsTUFBTWhCLFdBQVcsR0FBR2UsUUFBUSxDQUFDQyxhQUFULENBQXVCLGVBQXZCLENBQXBCO0FBRUFHLGlCQUFlLENBQUNDLE9BQWhCLENBQXdCZCxVQUF4QjtBQVNBVixTQUFPO0FBeUJQbUIsVUFBUSxDQUFDQyxhQUFULENBQXVCLHlCQUF2QixFQUFrRE8sS0FBbEQ7QUFHSCIsImZpbGUiOiIuL3NyYy9ibG9ja3Mvb3JkZXIvb3JkZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpZiAod2luZG93LmxvY2F0aW9uLnRvU3RyaW5nKCkuaW5kZXhPZignb3JkZXJQYWdlLmh0bWwnKSA+IDApIHtcclxuXHJcbiAgICBjb25zdCBkZWxpdmVyeUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcub3JkZXJfX2RlbGl2ZXJ5LWJ1dHRvbicpXHJcbiAgICBjb25zdCBkZWxpdmVyeUl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm9yZGVyX19kZWxpdmVyeScpXHJcbiAgICBjb25zdCBkZWxpdmVyeVRpbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3JkZXJfX2RlbGl2ZXJ5LXRpbWUnKVxyXG4gICAgY29uc3Qgbm90RGVsaXZlcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90LWRlbGl2ZXJ5JylcclxuXHJcbiAgICBkZWxpdmVyeUJ1dHRvbnMuZm9yRWFjaChvblRhYkNsaWNrKVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFRpbWUoKSB7XHJcbiAgICAgICAgbGV0IG5vdyA9IG5ldyBEYXRlKCkuZ2V0SG91cnMoKVxyXG4gICAgICAgIGlmIChub3cgPj0gMjEgfHwgbm93IDwgOCkgbm90RGVsaXZlcnkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuICAgICAgICBlbHNlIG5vdERlbGl2ZXJ5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgICAgICAgY29uc29sZS5sb2cobm93KVxyXG4gICAgfVxyXG5cclxuICAgIGdldFRpbWUoKVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uVGFiQ2xpY2soaXRlbSkge1xyXG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRCdG4gPSBpdGVtXHJcbiAgICAgICAgICAgIGxldCB0YWJJZCA9IGN1cnJlbnRCdG4uZ2V0QXR0cmlidXRlKCdkYXRhLXRhYicpXHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50VGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YWJJZClcclxuICAgICAgICAgICAgaWYgKHRhYklkID09PSAnI3RhYl8xJykgZGVsaXZlcnlUaW1lLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcbiAgICAgICAgICAgIGlmICh0YWJJZCA9PT0gJyN0YWJfMicpIGRlbGl2ZXJ5VGltZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG5cclxuICAgICAgICAgICAgaWYgKCFjdXJyZW50QnRuLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcclxuICAgICAgICAgICAgICAgIGRlbGl2ZXJ5QnV0dG9ucy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBkZWxpdmVyeUl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50QnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50VGFiLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcmRlcl9fZGVsaXZlcnktYnV0dG9uJykuY2xpY2soKVxyXG5cclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/blocks/order/order.js\n");

/***/ }),

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _blocks_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blocks/block */ \"./src/blocks/block.js\");\n // const scrollGradient = document.querySelector('.scroll-gradient')\n// window.addEventListener('scroll', () => {\n//     console.log(pageYOffset)\n//     if (pageYOffset >= 500) scrollGradient.style.display = 'none'\n//     else  scrollGradient.style.display = 'block'\n// })//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tYWluLmpzPzI5NjMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtDQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3NyYy9zY3JpcHRzL21haW4uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL2Jsb2Nrcy9ibG9jaydcclxuXHJcbi8vIGNvbnN0IHNjcm9sbEdyYWRpZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjcm9sbC1ncmFkaWVudCcpXHJcbi8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XHJcbi8vICAgICBjb25zb2xlLmxvZyhwYWdlWU9mZnNldClcclxuLy8gICAgIGlmIChwYWdlWU9mZnNldCA+PSA1MDApIHNjcm9sbEdyYWRpZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuLy8gICAgIGVsc2UgIHNjcm9sbEdyYWRpZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXHJcbi8vIH0pIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/main.js\n");

/***/ })

/******/ });