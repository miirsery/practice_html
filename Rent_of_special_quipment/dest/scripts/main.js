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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modals_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modals/modal */ \"./src/blocks/modals/modal.js\");\n/* harmony import */ var _modals_modal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modals_modal__WEBPACK_IMPORTED_MODULE_0__);\n// import './main-view/main-slider/main-slider.js'\n// import './base/header/header'\n// import './base/order-status/order-status'\n// import './actions/request-api'\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2Jsb2NrLmpzP2JiNWIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zcmMvYmxvY2tzL2Jsb2NrLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0ICcuL21haW4tdmlldy9tYWluLXNsaWRlci9tYWluLXNsaWRlci5qcydcclxuLy8gaW1wb3J0ICcuL2Jhc2UvaGVhZGVyL2hlYWRlcidcclxuLy8gaW1wb3J0ICcuL2Jhc2Uvb3JkZXItc3RhdHVzL29yZGVyLXN0YXR1cydcclxuLy8gaW1wb3J0ICcuL2FjdGlvbnMvcmVxdWVzdC1hcGknXHJcbmltcG9ydCAnLi9tb2RhbHMvbW9kYWwnIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/blocks/block.js\n");

/***/ }),

/***/ "./src/blocks/modals/modal.js":
/*!************************************!*\
  !*** ./src/blocks/modals/modal.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var modal = document.querySelector('.modal');\nvar modals = document.querySelectorAll('.modal');\nvar callModal = document.querySelectorAll('.call__modal');\nvar close = document.querySelectorAll('.modal__top-button');\ncallModal.forEach(toggleModal);\n\nfunction toggleModal(item) {\n  item.addEventListener('click', function (event) {\n    event.preventDefault();\n    var currentBtn = item;\n    var modalId = currentBtn.getAttribute('data-id');\n    var currentModal = document.querySelector(modalId);\n    currentModal.querySelector('.modal__top-button').addEventListener('click', function (e) {\n      currentModal.classList.remove('active');\n      currentBtn.classList.remove('active');\n    });\n\n    if (!currentBtn.classList.contains('active')) {\n      callModal.forEach(function (item) {\n        item.classList.remove('active');\n      });\n      modals.forEach(function (item) {\n        item.classList.remove('active');\n      });\n      currentBtn.classList.add('active');\n      currentModal.classList.add('active');\n    }\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL21vZGFscy9tb2RhbC5qcz85ZjE3Il0sIm5hbWVzIjpbIm1vZGFsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibW9kYWxzIiwicXVlcnlTZWxlY3RvckFsbCIsImNhbGxNb2RhbCIsImNsb3NlIiwiZm9yRWFjaCIsInRvZ2dsZU1vZGFsIiwiaXRlbSIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY3VycmVudEJ0biIsIm1vZGFsSWQiLCJnZXRBdHRyaWJ1dGUiLCJjdXJyZW50TW9kYWwiLCJlIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiY29udGFpbnMiLCJhZGQiXSwibWFwcGluZ3MiOiJBQUFBLElBQU1BLEtBQUssR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQWQ7QUFDQSxJQUFNQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0csZ0JBQVQsQ0FBMEIsUUFBMUIsQ0FBZjtBQUNBLElBQU1DLFNBQVMsR0FBR0osUUFBUSxDQUFDRyxnQkFBVCxDQUEwQixjQUExQixDQUFsQjtBQUNBLElBQU1FLEtBQUssR0FBR0wsUUFBUSxDQUFDRyxnQkFBVCxDQUEwQixvQkFBMUIsQ0FBZDtBQUVBQyxTQUFTLENBQUNFLE9BQVYsQ0FBa0JDLFdBQWxCOztBQUVBLFNBQVNBLFdBQVQsQ0FBcUJDLElBQXJCLEVBQTJCO0FBQ3ZCQSxNQUFJLENBQUNDLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCLFVBQUFDLEtBQUssRUFBSTtBQUNwQ0EsU0FBSyxDQUFDQyxjQUFOO0FBQ0EsUUFBSUMsVUFBVSxHQUFHSixJQUFqQjtBQUNBLFFBQUlLLE9BQU8sR0FBR0QsVUFBVSxDQUFDRSxZQUFYLENBQXdCLFNBQXhCLENBQWQ7QUFDQSxRQUFJQyxZQUFZLEdBQUdmLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QlksT0FBdkIsQ0FBbkI7QUFDQUUsZ0JBQVksQ0FBQ2QsYUFBYixDQUEyQixvQkFBM0IsRUFDS1EsZ0JBREwsQ0FDc0IsT0FEdEIsRUFDK0IsVUFBQU8sQ0FBQyxFQUFJO0FBQzVCRCxrQkFBWSxDQUFDRSxTQUFiLENBQXVCQyxNQUF2QixDQUE4QixRQUE5QjtBQUNBTixnQkFBVSxDQUFDSyxTQUFYLENBQXFCQyxNQUFyQixDQUE0QixRQUE1QjtBQUNILEtBSkw7O0FBTUEsUUFBSSxDQUFDTixVQUFVLENBQUNLLFNBQVgsQ0FBcUJFLFFBQXJCLENBQThCLFFBQTlCLENBQUwsRUFBOEM7QUFDMUNmLGVBQVMsQ0FBQ0UsT0FBVixDQUFrQixVQUFBRSxJQUFJLEVBQUk7QUFDdEJBLFlBQUksQ0FBQ1MsU0FBTCxDQUFlQyxNQUFmLENBQXNCLFFBQXRCO0FBQ0gsT0FGRDtBQUdBaEIsWUFBTSxDQUFDSSxPQUFQLENBQWUsVUFBQUUsSUFBSSxFQUFJO0FBQ25CQSxZQUFJLENBQUNTLFNBQUwsQ0FBZUMsTUFBZixDQUFzQixRQUF0QjtBQUNILE9BRkQ7QUFHQU4sZ0JBQVUsQ0FBQ0ssU0FBWCxDQUFxQkcsR0FBckIsQ0FBeUIsUUFBekI7QUFDQUwsa0JBQVksQ0FBQ0UsU0FBYixDQUF1QkcsR0FBdkIsQ0FBMkIsUUFBM0I7QUFDSDtBQUNKLEdBckJEO0FBc0JIIiwiZmlsZSI6Ii4vc3JjL2Jsb2Nrcy9tb2RhbHMvbW9kYWwuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpXHJcbmNvbnN0IG1vZGFscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbCcpXHJcbmNvbnN0IGNhbGxNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYWxsX19tb2RhbCcpXHJcbmNvbnN0IGNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsX190b3AtYnV0dG9uJylcclxuXHJcbmNhbGxNb2RhbC5mb3JFYWNoKHRvZ2dsZU1vZGFsKVxyXG5cclxuZnVuY3Rpb24gdG9nZ2xlTW9kYWwoaXRlbSkge1xyXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgbGV0IGN1cnJlbnRCdG4gPSBpdGVtXHJcbiAgICAgICAgbGV0IG1vZGFsSWQgPSBjdXJyZW50QnRuLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpXHJcbiAgICAgICAgbGV0IGN1cnJlbnRNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobW9kYWxJZClcclxuICAgICAgICBjdXJyZW50TW9kYWwucXVlcnlTZWxlY3RvcignLm1vZGFsX190b3AtYnV0dG9uJylcclxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50TW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRCdG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgaWYgKCFjdXJyZW50QnRuLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcclxuICAgICAgICAgICAgY2FsbE1vZGFsLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIG1vZGFscy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBjdXJyZW50QnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcbiAgICAgICAgICAgIGN1cnJlbnRNb2RhbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/blocks/modals/modal.js\n");

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