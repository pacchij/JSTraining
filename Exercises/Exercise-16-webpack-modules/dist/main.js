var ui =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: getArithmetic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getArithmetic\", function() { return getArithmetic; });\n/* harmony import */ var _mathlibrary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mathlibrary */ \"./src/mathlibrary.js\");\n\r\n\r\nfunction getArithmetic() {\r\n  var num1 = document.getElementById('num1');\r\n  var num2 = document.getElementById('num2');\r\n\r\n  var result = document.getElementById('error');\r\n  num1 = Number(num1.value); //explicit number conversion\r\n  num2 = Number(num2.value); //explicit number conversion\r\n  if (!_mathlibrary__WEBPACK_IMPORTED_MODULE_0__[\"default\"].validate(num1, num2)) {\r\n    result.innerHTML = \"Invalid numbers\";\r\n    return;\r\n  }\r\n  \r\n  document.getElementById('sumResult').innerHTML = _mathlibrary__WEBPACK_IMPORTED_MODULE_0__[\"default\"].add(num1, num2); //implicit conversion to string here\r\n  document.getElementById('mulResult').innerHTML = _mathlibrary__WEBPACK_IMPORTED_MODULE_0__[\"default\"].multiplication(num1, num2);\r\n  document.getElementById('subResult').innerHTML = _mathlibrary__WEBPACK_IMPORTED_MODULE_0__[\"default\"].subtraction(num1, num2);\r\n  document.getElementById('divResult').innerHTML = _mathlibrary__WEBPACK_IMPORTED_MODULE_0__[\"default\"].division(num1, num2); //implicit conversion to string here\r\n}\r\n\n\n//# sourceURL=webpack://ui/./src/index.js?");

/***/ }),

/***/ "./src/mathlibrary.js":
/*!****************************!*\
  !*** ./src/mathlibrary.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\nclass MathLibrary {\r\n  constructor() {\r\n\r\n  }\r\n  validate(num1, num2) {\r\n    //if (typeof num1 != 'number' || typeof num2 != 'number')\r\n    if(isNaN(num1) || isNaN(num2)) {\r\n      return false;\r\n    }\r\n    return true;\r\n  }\r\n  add(num1, num2) {\r\n    return num1+num2; //return number\r\n  }\r\n  multiplication(num1, num2) {\r\n    return String(num1*num2); //converts to string and returns\r\n  }\r\n  subtraction(num1, num2) {\r\n    var sub = num1-num2;\r\n    return sub.toString(); //converts to string and returns\r\n  }\r\n  division(num1, num2) {\r\n    if (num2 == 0) return 0;\r\n    return num1/num2; //return number\r\n  }\r\n}\r\n\r\nconst mathLibrary = new MathLibrary()\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (mathLibrary);\n\n//# sourceURL=webpack://ui/./src/mathlibrary.js?");

/***/ })

/******/ });