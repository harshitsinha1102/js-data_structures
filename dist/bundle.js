var DsLib =
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_LinkedListNode__ = __webpack_require__(1);


class LinkedList {
	constructor() {
		this.start = null;
		this.last = null;
		this.length = 0;
	}

	addItem(itemValue) {
		// List is empty
		let newNode = new __WEBPACK_IMPORTED_MODULE_0__common_LinkedListNode__["a" /* LinkedListNode */]();
		newNode.data = itemValue;
		newNode.next = null;

		if (this.start == null) {
			this.start = newNode;
		} else {
			this.last.next = newNode;
		}
		this.last = newNode;
		this.length++;
	}

	map(callback) {
		let currentNode = this.start;
		let index = 0;
		while (currentNode !== null) {
			if (callback.length == 2) {
				callback(index, currentNode.data);
			} else {
				callback(currentNode.data);
			}
			currentNode = currentNode.next;
			index++;
		}
	}
}
/* harmony export (immutable) */ __webpack_exports__["LinkedList"] = LinkedList;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DsNode__ = __webpack_require__(2);


class LinkedListNode extends __WEBPACK_IMPORTED_MODULE_0__DsNode__["a" /* Node */] {
    constructor() {
        super();
        this.next = null;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = LinkedListNode;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Node {
    constructor() {
        this.data = null;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Node;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map