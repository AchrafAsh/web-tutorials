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
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: Cannot find module '@babel/core'\nRequire stack:\n- /home/achraf/Documents/Coding/tuto/ssr-react/node_modules/babel-loader/lib/index.js\n- /home/achraf/Documents/Coding/tuto/ssr-react/node_modules/loader-runner/lib/loadLoader.js\n- /home/achraf/Documents/Coding/tuto/ssr-react/node_modules/loader-runner/lib/LoaderRunner.js\n- /home/achraf/Documents/Coding/tuto/ssr-react/node_modules/webpack/lib/NormalModule.js\n- /home/achraf/Documents/Coding/tuto/ssr-react/node_modules/webpack/lib/NormalModuleFactory.js\n- /home/achraf/Documents/Coding/tuto/ssr-react/node_modules/webpack/lib/Compiler.js\n- /home/achraf/Documents/Coding/tuto/ssr-react/node_modules/webpack/lib/webpack.js\n- /home/achraf/Documents/Coding/tuto/ssr-react/node_modules/webpack/bin/webpack.js\n babel-loader@8 requires Babel 7.x (the package '@babel/core'). If you'd like to use Babel 6.x ('babel-core'), you should install 'babel-loader@7'.\n    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:797:15)\n    at Function.Module._load (internal/modules/cjs/loader.js:690:27)\n    at Module.require (internal/modules/cjs/loader.js:852:19)\n    at require (internal/modules/cjs/helpers.js:74:18)\n    at Object.<anonymous> (/home/achraf/Documents/Coding/tuto/ssr-react/node_modules/babel-loader/lib/index.js:10:11)\n    at Module._compile (internal/modules/cjs/loader.js:959:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:995:10)\n    at Module.load (internal/modules/cjs/loader.js:815:32)\n    at Function.Module._load (internal/modules/cjs/loader.js:727:14)\n    at Module.require (internal/modules/cjs/loader.js:852:19)\n    at require (internal/modules/cjs/helpers.js:74:18)\n    at loadLoader (/home/achraf/Documents/Coding/tuto/ssr-react/node_modules/loader-runner/lib/loadLoader.js:18:17)\n    at iteratePitchingLoaders (/home/achraf/Documents/Coding/tuto/ssr-react/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at runLoaders (/home/achraf/Documents/Coding/tuto/ssr-react/node_modules/loader-runner/lib/LoaderRunner.js:365:2)\n    at NormalModule.doBuild (/home/achraf/Documents/Coding/tuto/ssr-react/node_modules/webpack/lib/NormalModule.js:181:3)\n    at NormalModule.build (/home/achraf/Documents/Coding/tuto/ssr-react/node_modules/webpack/lib/NormalModule.js:274:15)\n    at Compilation.buildModule (/home/achraf/Documents/Coding/tuto/ssr-react/node_modules/webpack/lib/Compilation.js:149:10)\n    at /home/achraf/Documents/Coding/tuto/ssr-react/node_modules/webpack/lib/Compilation.js:447:10\n    at /home/achraf/Documents/Coding/tuto/ssr-react/node_modules/webpack/lib/NormalModuleFactory.js:241:5\n    at /home/achraf/Documents/Coding/tuto/ssr-react/node_modules/webpack/lib/NormalModuleFactory.js:94:13\n    at /home/achraf/Documents/Coding/tuto/ssr-react/node_modules/tapable/lib/Tapable.js:268:11\n    at NormalModuleFactory.<anonymous> (/home/achraf/Documents/Coding/tuto/ssr-react/node_modules/webpack/lib/CompatibilityPlugin.js:52:5)\n    at NormalModuleFactory.applyPluginsAsyncWaterfall (/home/achraf/Documents/Coding/tuto/ssr-react/node_modules/tapable/lib/Tapable.js:272:13)\n    at /home/achraf/Documents/Coding/tuto/ssr-react/node_modules/webpack/lib/NormalModuleFactory.js:69:10\n    at /home/achraf/Documents/Coding/tuto/ssr-react/node_modules/webpack/lib/NormalModuleFactory.js:194:7\n    at processTicksAndRejections (internal/process/task_queues.js:75:11)");

/***/ })
/******/ ]);