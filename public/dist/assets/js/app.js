/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 115);
/******/ })
/************************************************************************/
/******/ ({

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(39);


/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: SyntaxError: /home/mazen/git-rekt-se/package.json: Error while parsing JSON - Unexpected token < in JSON at position 1378\n    at JSON.parse (<anonymous>)\n    at ConfigChainBuilder.addConfig (/home/mazen/git-rekt-se/node_modules/babel-core/lib/transformation/file/options/build-config-chain.js:150:65)\n    at ConfigChainBuilder.findConfigs (/home/mazen/git-rekt-se/node_modules/babel-core/lib/transformation/file/options/build-config-chain.js:102:30)\n    at buildConfigChain (/home/mazen/git-rekt-se/node_modules/babel-core/lib/transformation/file/options/build-config-chain.js:61:13)\n    at OptionManager.init (/home/mazen/git-rekt-se/node_modules/babel-core/lib/transformation/file/options/option-manager.js:354:58)\n    at File.initOptions (/home/mazen/git-rekt-se/node_modules/babel-core/lib/transformation/file/index.js:212:65)\n    at new File (/home/mazen/git-rekt-se/node_modules/babel-core/lib/transformation/file/index.js:135:24)\n    at Pipeline.transform (/home/mazen/git-rekt-se/node_modules/babel-core/lib/transformation/pipeline.js:46:16)\n    at transpile (/home/mazen/git-rekt-se/node_modules/babel-loader/lib/index.js:46:20)\n    at /home/mazen/git-rekt-se/node_modules/babel-loader/lib/fs-cache.js:79:18\n    at ReadFileContext.callback (/home/mazen/git-rekt-se/node_modules/babel-loader/lib/fs-cache.js:15:14)\n    at FSReqWrap.readFileAfterOpen [as oncomplete] (fs.js:335:13)");

/***/ })

/******/ });