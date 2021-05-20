/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "build/" + ({"compiler":"compiler"}[chunkId]||chunkId) + "." + {"compiler":"aae9f3b1"}[chunkId] + ".js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"chunk-vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/DomScreenshot.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/DomScreenshot.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! file-saver */ \"./node_modules/file-saver/dist/FileSaver.min.js\");\n/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_0__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\nconst loadJs = __webpack_require__(/*! load-script */ \"./node_modules/load-script/index.js\")\nconst typeMapping = {\n  jpg: { fn: 'toJpeg', suffix: 'jpg' },\n  png: { fn: 'toPng', suffix: 'png' },\n  blob: { fn: 'toBlob', suffix: 'png' }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'DomScreenshot',\n  props: {\n    /**\n     * 截图前的钩子\n     */\n    beforeShot: {\n      type: Function,\n      default: null\n    },\n    /**\n     * 启用isSave保存图片时的文件命名\n     */\n    saveName: {\n      type: String,\n      default: '生成图片'\n    },\n    /**\n     * 图片缩放倍数\n     */\n    scale: {\n      type: Number,\n      default: 2\n    },\n    /**\n     * distType为jpg时输出的图片质量\n     */\n    quality: {\n      type: Number,\n      default: 0.9\n    },\n    /**\n     * 截图后是否直接保存图片，移动端可调用shot().then进行处理（如微信、ios）\n     */\n    isSave: {\n      type: Boolean,\n      default: false\n    },\n    /**\n     * 输出类型，有jpg/png/blob\n     */\n    distType: {\n      type: String,\n      default: 'jpg'\n    },\n    /**\n     * 请求图片时添加时间戳参数，禁用缓存。使用时可解决html2canvas不加载图片的问题，启用该参数会先请求图片转换为blob再进行截图，因此执行时间增加\n     */\n    cacheBust: {\n      type: Boolean,\n      default: false\n    },\n    /**\n     * 截图容器的背景色\n     */\n    bgColor: {\n      type: [String, null],\n      default: null\n    },\n    /**\n     * dom-to-image和html2canvas的其他参数，相同选项会被暴露出来的参数覆盖\n     */\n    options: {\n      type: Object,\n      default: () => ({})\n    },\n    /**\n     * 默认使用dom-to-image，在ios及ie下使用html2canvas\n     * 由于图片跨域问题，部分浏览器在默认处理下可能无法截图，请使用该参数自行控制\n     */\n    useHtml2canvas: {\n      type: Boolean,\n      default: undefined\n    },\n    cdns: {\n      type: Object,\n      default: () => ({\n        domtoimage: '//cdn.bootcdn.net/ajax/libs/dom-to-image/2.6.0/dom-to-image.js',\n        html2canvas: '//html2canvas.hertzen.com/dist/html2canvas.min.js'\n      })\n    }\n  },\n  data () {\n    return {\n      useAnother: false\n    }\n  },\n  mounted () {\n    if (this.useHtml2canvas === void 0) {\n      this.useAnother =\n        /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) ||\n        navigator.userAgent.toLowerCase().includes('msie') ||\n        navigator.userAgent.toLowerCase().includes('trident')\n    } else {\n      this.useAnother = this.useHtml2canvas\n    }\n  },\n  methods: {\n    getOption (el) {\n      if (this.useAnother) {\n        const offset = this.getOffset(el)\n        return {\n          allowTaint: true,\n          useCORS: true,\n          x: offset.left,\n          y: offset.top,\n          width: offset.width,\n          height: offset.height,\n          ...this.options,\n          scale: this.scale,\n          backgroundColor: this.bgColor\n        }\n      } else {\n        return {\n          width: el.offsetWidth * this.scale,\n          height: el.offsetHeight * this.scale,\n          style: {\n            transform: `scale(${this.scale})`,\n            transformOrigin: '0 0',\n            width: `${el.offsetWidth}px`,\n            height: `${el.offsetHeight}px`\n          },\n          imagePlaceholder:\n            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABkCAYAAADDhn8LAAACpUlEQVR4Xu3VsRHDMAwEQbH/BtmN3YDl4NJf5Qiw4I3Ovffz+AgQ+ClwBOJlEHgXEIjXQeCPgEA8DwIC8QYINAF/kOZmakRAICOHtmYTEEhzMzUiIJCRQ1uzCQikuZkaERDIyKGt2QQE0txMjQgIZOTQ1mwCAmlupkYEBDJyaGs2AYE0N1MjAgIZObQ1m4BAmpupEQGBjBzamk1AIM3N1IiAQEYObc0mIJDmZmpEQCAjh7ZmExBIczM1IiCQkUNbswkIpLmZGhEQyMihrdkEBNLcTI0ICGTk0NZsAgJpbqZGBAQycmhrNgGBNDdTIwICGTm0NZuAQJqbqREBgYwc2ppNQCDNzdSIgEBGDm3NJiCQ5mZqREAgI4e2ZhMQSHMzNSIgkJFDW7MJCKS5mRoREMjIoa3ZBATS3EyNCAhk5NDWbAICaW6mRgQEMnJoazYBgTQ3UyMCAhk5tDWbgECam6kRAYGMHNqaTUAgzc3UiIBARg5tzSYgkOZmakRAICOHtmYTEEhzMzUiIJCRQ1uzCQikuZkaERDIyKGt2QQE0txMjQgIZOTQ1mwCAmlupkYEBDJyaGs2AYE0N1MjAgIZObQ1m4BAmpupEQGBjBzamk1AIM3N1IiAQEYObc0mIJDmZmpEQCAjh7ZmExBIczM1IiCQkUNbswkIpLmZGhEQyMihrdkEBNLcTI0ICGTk0NZsAgJpbqZGBAQycmhrNgGBNDdTIwICGTm0NZuAQJqbqREBgYwc2ppNQCDNzdSIgEBGDm3NJiCQ5mZqREAgI4e2ZhMQSHMzNSIgkJFDW7MJCKS5mRoREMjIoa3ZBATS3EyNCAhk5NDWbAICaW6mRgQEMnJoazYBgTQ3UyMCAhk5tDWbgECam6kRAYGMHNqaTUAgzc3UiMAXqPVhMNxoJT0AAAAASUVORK5CYII=',\n          ...this.options,\n          scale: this.scale,\n          quality: this.quality,\n          cacheBust: this.cacheBust,\n          bgcolor: this.bgColor\n        }\n      }\n    },\n    getOffset (el) {\n      let top = el.offsetTop\n      let left = el.offsetLeft\n      let parent = el.offsetParent\n      while (parent) {\n        top += parent.offsetTop\n        left += parent.offsetLeft\n        parent = parent.offsetParent\n      }\n      return {\n        top,\n        left,\n        width: el.offsetWidth,\n        height: el.offsetHeight\n      }\n    },\n    /**\n     * 截图\n     * @return {promise}\n     * @public\n     */\n    shot () {\n      const doShot = this.ignoreMultiClick(this.dealHandle)\n      if (!this.beforeShot) {\n        return doShot()\n      }\n      const before = this.beforeShot()\n      if (before && before.then) {\n        before.then(() => {\n          return doShot()\n        })\n      } else if (before !== false) {\n        return doShot()\n      }\n    },\n    async conmonHandle () {\n      console.log('domtoimage')\n      const el = this.$refs.targetDom\n      const name = this.getFileName()\n      const func = typeMapping[this.distType].fn\n      if (!window.domtoimage) {\n        // https://cdn.bootcdn.net/ajax/libs/dom-to-image/2.6.0/dom-to-image.js\n        await this.loadScript(this.cdns.domtoimage)\n        // const domtoimage = (await import(/* webpackChunkName: \"dom-to-image\" */ 'dom-to-image')).default\n        // window.domtoimage = domtoimage\n      }\n      return window.domtoimage[func](el, this.getOption(el))\n        .then(data => {\n          this.saveFile(data, name)\n          return data\n        })\n        .catch(err => {\n          return err\n        })\n    },\n    async anotherHandle () {\n      console.log('html2canvas')\n      const el = this.$refs.targetDom\n      const name = this.getFileName()\n      if (!window.html2canvas) {\n        await this.loadScript(this.cdns.html2canvas)\n        // http://html2canvas.hertzen.com/dist/html2canvas.min.js\n        // const html2canvas = (await import(/* webpackChunkName: \"html2canvas\" */ 'html2canvas')).default\n        // window.html2canvas = html2canvas\n      }\n\n      if (this.cacheBust) {\n        const imgArr = el.querySelectorAll('img')\n        if (imgArr.length) {\n          for (let i = 0; i < imgArr.length; i++) {\n            const dom = imgArr[i]\n            const src = dom.src\n            if (src.includes(';base64,') || !src) {\n              continue\n            }\n            const blob = await this.imageLoadBlob(src)\n            if (blob) {\n              dom.src = blob\n            }\n          }\n        }\n      }\n\n      return window\n        .html2canvas(el, this.getOption(el))\n        .then(canvas => {\n          const data = this.canvasToData(canvas, this.distType)\n          this.saveFile(data, name)\n          return data\n        })\n        .catch(err => {\n          return err\n        })\n    },\n    loadScript (src, option = {}) {\n      return new Promise((resolve, reject) => {\n        loadJs(src, option, function (err, script) {\n          if (err) {\n            reject(err)\n          } else {\n            resolve()\n          }\n        })\n      })\n    },\n    imageLoadBlob (src) {\n      const url = src + (/\\?/.test(src) ? '&' : '?') + new Date().getTime()\n      return new Promise(resolve => {\n        const request = new XMLHttpRequest()\n\n        request.onreadystatechange = () => {\n          if (request.readyState !== 4) return\n\n          if (request.status !== 200) {\n            // eslint-disable-next-line no-console\n            console.error(`cannot fetch resource: ${src}`)\n            resolve(src)\n            return\n          }\n\n          const encoder = new FileReader()\n          encoder.onloadend = () => {\n            const content = encoder.result.split(/,/)[1]\n            const extension = this.parseExtension(url).toLowerCase()\n            const type = this.mimes()[extension] || ''\n            resolve('data:' + type + ';base64,' + content)\n          }\n          encoder.readAsDataURL(request.response)\n        }\n        request.ontimeout = () => {\n          resolve(src)\n          // eslint-disable-next-line no-console\n          console.error(`fetch resource timeout: ${src}`)\n        }\n        request.responseType = 'blob'\n        request.timeout = 10000\n        request.open('GET', url, true)\n        request.send()\n      })\n    },\n    parseExtension (url) {\n      // eslint-disable-next-line no-useless-escape\n      const match = /\\.([^\\.\\/]*?)$/g.exec(url)\n      if (match) return match[1]\n      else return ''\n    },\n    mimes () {\n      const WOFF = 'application/font-woff'\n      const JPEG = 'image/jpeg'\n      return {\n        woff: WOFF,\n        woff2: WOFF,\n        ttf: 'application/font-truetype',\n        eot: 'application/vnd.ms-fontobject',\n        png: 'image/png',\n        jpg: JPEG,\n        jpeg: JPEG,\n        gif: 'image/gif',\n        tiff: 'image/tiff',\n        svg: 'image/svg+xml'\n      }\n    },\n    dealHandle () {\n      if (this.useAnother) return this.anotherHandle()\n      return this.conmonHandle()\n    },\n    ignoreMultiClick (func, manual = false) {\n      let lock = false\n      return function (...args) {\n        if (lock) return\n        lock = true\n        const done = () => (lock = false)\n        if (manual) return func.call(this, ...args, done)\n        const promise = func.call(this, ...args)\n        Promise.resolve(promise).finally(done)\n        return promise\n      }\n    },\n    /**\n     * blob转file\n     * @param {blob} theBlob blob对象，\n     * @param {string} fileName 文件名\n     * @return {blob}\n     * @public\n     */\n    blobToFile (theBlob, fileName) {\n      theBlob.lastModifiedDate = new Date()\n      theBlob.name = fileName\n      return theBlob\n    },\n    getFileName () {\n      return this.saveName + '.' + typeMapping[this.distType].suffix\n    },\n    saveFile (data, fileName) {\n      this.isSave && Object(file_saver__WEBPACK_IMPORTED_MODULE_0__[\"saveAs\"])(data, fileName)\n    },\n    canvasToData (canvas, type) {\n      if (type === 'jpg') {\n        return canvas.toDataURL('image/jpeg', this.quality)\n      } else if (type === 'png') {\n        return canvas.toDataURL()\n      } else {\n        if (canvas.toBlob) {\n          return new Promise(resolve => {\n            canvas.toBlob(resolve)\n          })\n        }\n        const binaryString = window.atob(canvas.toDataURL().split(',')[1])\n        const length = binaryString.length\n        const binaryArray = new Uint8Array(length)\n        for (let i = 0; i < length; i++) {\n          binaryArray[i] = binaryString.charCodeAt(i)\n        }\n        return new Blob([binaryArray], {\n          type: 'image/png'\n        })\n      }\n    }\n  }\n});\n\n\n//# sourceURL=webpack:///./src/components/DomScreenshot.vue?./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"54a7141e-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/DomScreenshot.vue?vue&type=template&id=41094b04&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"54a7141e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/DomScreenshot.vue?vue&type=template&id=41094b04& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',_vm._g(_vm._b({ref:\"targetDom\",staticClass:\"dom-screenshot\"},'div',_vm.$attrs,false),_vm.$listeners),[_vm._t(\"default\",[_vm._v(\" Hellow Word! \")])],2)}\nvar staticRenderFns = []\n\n\n\n//# sourceURL=webpack:///./src/components/DomScreenshot.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%2254a7141e-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-styleguidist/lib/loaders/docs-loader.js!./node_modules/vue-cli-plugin-styleguidist/empty-object-loader.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/DomScreenshot.vue?vue&type=custom&index=0&blockType=docs":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-styleguidist/lib/loaders/docs-loader.js!./node_modules/vue-cli-plugin-styleguidist/empty-object-loader.js!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/DomScreenshot.vue?vue&type=custom&index=0&blockType=docs ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (Component) {\n\t\tComponent.options.__docs = \"module.exports = {}\"\n\t  });\n\n//# sourceURL=webpack:///./src/components/DomScreenshot.vue?./node_modules/vue-styleguidist/lib/loaders/docs-loader.js!./node_modules/vue-cli-plugin-styleguidist/empty-object-loader.js!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-styleguidist/lib/loaders/examples-loader.js?customLangs=vue|js|jsx!./src/components/DomScreenshot.vue":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/vue-styleguidist/lib/loaders/examples-loader.js?customLangs=vue|js|jsx!./src/components/DomScreenshot.vue ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nif (false) {}\nvar requireMap = {};\nvar requireInRuntimeBase = __webpack_require__(/*! ./node_modules/vue-styleguidist/lib/loaders/utils/client/requireInRuntime */ \"./node_modules/vue-styleguidist/lib/loaders/utils/client/requireInRuntime.js\");\nvar requireInRuntime = requireInRuntimeBase.bind(null, requireMap);\nvar evalInContextBase = __webpack_require__(/*! ./node_modules/vue-styleguidist/lib/loaders/utils/client/evalInContext */ \"./node_modules/vue-styleguidist/lib/loaders/utils/client/evalInContext.js\");\nvar evalInContext = evalInContextBase.bind(null, \n\t\"\", \n\tnull, null)\nmodule.exports = [\n    {\n        'type': 'markdown',\n        'content': '## Examples\\n\\n基本用法:'\n    },\n    {\n        'type': 'code',\n        'content': '<template>\\n  <div>\\n    <p>截图容器\\uFF1A</p>\\n    <dom-screenshot\\n      class=\"screenshot-con\"\\n      :options=\"shotOptions\"\\n      :beforeShot=\"onBeforeShot\"\\n      dist-type=\"png\"\\n      ref=\"shotDom\"\\n    >\\n      <img src=\"https://raw.githubusercontent.com/Sweet-KK/dom-screenshot/main/docs/favicon.ico\">\\n    </dom-screenshot>\\n\\n    <p><button @click=\"onClick\">点击</button>输出图片\\uFF1A</p>\\n    <img style=\"width:100%;\" :src=\"src\">\\n  </div>\\n</template>\\n\\n<script>\\nexport default {\\n  data () {\\n    return {\\n      shotOptions: {},\\n      src: \\'\\'\\n    }\\n  },\\n  methods: {\\n    onClick() {\\n      this.$refs.shotDom.shot()\\n        .then(data => {\\n          window.console.log(data)\\n          this.src = data\\n        })\\n        .catch(err => {\\n          window.console.log(err)\\n        })\\n    },\\n    onBeforeShot () {\\n      window.console.log(\\'截图前的钩子\\')\\n    }\\n  }\\n}\\n</script>\\n<style scoped>\\n.screenshot-con {\\n  margin: 0;\\n  border: 1px solid #000;\\n  box-sizing: border-box;\\n}\\n</style>',\n        'settings': {},\n        'evalInContext': evalInContext.bind(null, requireInRuntime.bind(null, null)),\n        'compiled': {\n            'script': '\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n;return {template: \"\\\\n  <div>\\\\n    <p>截图容器\\uFF1A</p>\\\\n    <dom-screenshot\\\\n      class=\\\\\"screenshot-con\\\\\"\\\\n      :options=\\\\\"shotOptions\\\\\"\\\\n      :beforeShot=\\\\\"onBeforeShot\\\\\"\\\\n      dist-type=\\\\\"png\\\\\"\\\\n      ref=\\\\\"shotDom\\\\\"\\\\n    >\\\\n      <img src=\\\\\"https://raw.githubusercontent.com/Sweet-KK/dom-screenshot/main/docs/favicon.ico\\\\\">\\\\n    </dom-screenshot>\\\\n\\\\n    <p><button @click=\\\\\"onClick\\\\\">点击</button>输出图片\\uFF1A</p>\\\\n    <img style=\\\\\"width:100%;\\\\\" :src=\\\\\"src\\\\\">\\\\n  </div>\\\\n\", \\n  data: function data () {\\n    return {\\n      shotOptions: {},\\n      src: \\'\\'\\n    }\\n  },\\n  methods: {\\n    onClick: function onClick() {\\n      var this$1 = this;\\n\\n      this.$refs.shotDom.shot()\\n        .then(function (data) {\\n          window.console.log(data)\\n          this$1.src = data\\n        })\\n        .catch(function (err) {\\n          window.console.log(err)\\n        })\\n    },\\n    onBeforeShot: function onBeforeShot () {\\n      window.console.log(\\'截图前的钩子\\')\\n    }\\n  }\\n};\\n',\n            'style': '.screenshot-con {\\n  margin: 0;\\n  border: 1px solid #000;\\n  box-sizing: border-box;\\n}'\n        }\n    }\n]\n\n//# sourceURL=webpack:///./src/components/DomScreenshot.vue?./node_modules/vue-styleguidist/lib/loaders/examples-loader.js?customLangs=vue%7Cjs%7Cjsx");

/***/ }),

/***/ "./node_modules/vue-styleguidist/lib/loaders/vuedoc-loader.js!./src/components/DomScreenshot.vue":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/vue-styleguidist/lib/loaders/vuedoc-loader.js!./src/components/DomScreenshot.vue ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n\t\tif (false) {}\n\n\t\tmodule.exports = {\n    'displayName': 'DomScreenshot',\n    'exportName': 'default',\n    'docsBlocks': ['## Examples\\n\\n基本用法:\\n\\n```vue\\n<template>\\n  <div>\\n    <p>截图容器\\uFF1A</p>\\n    <dom-screenshot\\n      class=\"screenshot-con\"\\n      :options=\"shotOptions\"\\n      :beforeShot=\"onBeforeShot\"\\n      dist-type=\"png\"\\n      ref=\"shotDom\"\\n    >\\n      <img src=\"https://raw.githubusercontent.com/Sweet-KK/dom-screenshot/main/docs/favicon.ico\">\\n    </dom-screenshot>\\n\\n    <p><button @click=\"onClick\">点击</button>输出图片\\uFF1A</p>\\n    <img style=\"width:100%;\" :src=\"src\">\\n  </div>\\n</template>\\n\\n<script>\\nexport default {\\n  data () {\\n    return {\\n      shotOptions: {},\\n      src: \\'\\'\\n    }\\n  },\\n  methods: {\\n    onClick() {\\n      this.$refs.shotDom.shot()\\n        .then(data => {\\n          window.console.log(data)\\n          this.src = data\\n        })\\n        .catch(err => {\\n          window.console.log(err)\\n        })\\n    },\\n    onBeforeShot () {\\n      window.console.log(\\'截图前的钩子\\')\\n    }\\n  }\\n}\\n</script>\\n<style scoped>\\n.screenshot-con {\\n  margin: 0;\\n  border: 1px solid #000;\\n  box-sizing: border-box;\\n}\\n</style>\\n```'],\n    'description': '',\n    'tags': {},\n    'props': [\n        {\n            'name': 'beforeShot',\n            'description': '截图前的钩子',\n            'type': { 'name': 'func' },\n            'defaultValue': {\n                'func': false,\n                'value': 'null'\n            }\n        },\n        {\n            'name': 'bgColor',\n            'description': '截图容器的背景色',\n            'type': { 'name': 'string|null' },\n            'defaultValue': {\n                'func': false,\n                'value': 'null'\n            }\n        },\n        {\n            'name': 'cacheBust',\n            'description': '请求图片时添加时间戳参数\\uFF0C禁用缓存\\u3002使用时可解决html2canvas不加载图片的问题\\uFF0C启用该参数会先请求图片转换为blob再进行截图\\uFF0C因此执行时间增加',\n            'type': { 'name': 'boolean' },\n            'defaultValue': {\n                'func': false,\n                'value': 'false'\n            }\n        },\n        {\n            'name': 'cdns',\n            'type': { 'name': 'object' },\n            'defaultValue': {\n                'func': false,\n                'value': '{\\n  domtoimage: \\'//cdn.bootcdn.net/ajax/libs/dom-to-image/2.6.0/dom-to-image.js\\',\\n  html2canvas: \\'//html2canvas.hertzen.com/dist/html2canvas.min.js\\'\\n}'\n            }\n        },\n        {\n            'name': 'distType',\n            'description': '输出类型\\uFF0C有jpg/png/blob',\n            'type': { 'name': 'string' },\n            'defaultValue': {\n                'func': false,\n                'value': '\\'jpg\\''\n            }\n        },\n        {\n            'name': 'isSave',\n            'description': '截图后是否直接保存图片\\uFF0C移动端可调用shot().then进行处理\\uFF08如微信\\u3001ios\\uFF09',\n            'type': { 'name': 'boolean' },\n            'defaultValue': {\n                'func': false,\n                'value': 'false'\n            }\n        },\n        {\n            'name': 'options',\n            'description': 'dom-to-image和html2canvas的其他参数\\uFF0C相同选项会被暴露出来的参数覆盖',\n            'type': { 'name': 'object' },\n            'defaultValue': {\n                'func': false,\n                'value': '{}'\n            }\n        },\n        {\n            'name': 'quality',\n            'description': 'distType为jpg时输出的图片质量',\n            'type': { 'name': 'number' },\n            'defaultValue': {\n                'func': false,\n                'value': '0.9'\n            }\n        },\n        {\n            'name': 'saveName',\n            'description': '启用isSave保存图片时的文件命名',\n            'type': { 'name': 'string' },\n            'defaultValue': {\n                'func': false,\n                'value': '\\'生成图片\\''\n            }\n        },\n        {\n            'name': 'scale',\n            'description': '图片缩放倍数',\n            'type': { 'name': 'number' },\n            'defaultValue': {\n                'func': false,\n                'value': '2'\n            }\n        },\n        {\n            'name': 'useHtml2canvas',\n            'description': '默认使用dom-to-image\\uFF0C在ios及ie下使用html2canvas\\n由于图片跨域问题\\uFF0C部分浏览器在默认处理下可能无法截图\\uFF0C请使用该参数自行控制',\n            'type': { 'name': 'boolean' },\n            'defaultValue': {\n                'func': false,\n                'value': 'undefined'\n            }\n        }\n    ],\n    'events': void 0,\n    'methods': [\n        {\n            'name': 'shot',\n            'description': '截图',\n            'tags': {\n                'return': [{\n                        'description': '{promise}',\n                        'title': 'return'\n                    }],\n                'access': [{\n                        'description': 'public',\n                        'title': 'access'\n                    }]\n            }\n        },\n        {\n            'name': 'blobToFile',\n            'description': 'blob转file',\n            'params': [\n                {\n                    'name': 'theBlob',\n                    'type': { 'name': 'blob' },\n                    'description': 'blob对象\\uFF0C'\n                },\n                {\n                    'name': 'fileName',\n                    'type': { 'name': 'string' },\n                    'description': '文件名'\n                }\n            ],\n            'tags': {\n                'params': [\n                    {\n                        'title': 'param',\n                        'type': { 'name': 'blob' },\n                        'name': 'theBlob',\n                        'description': 'blob对象\\uFF0C'\n                    },\n                    {\n                        'title': 'param',\n                        'type': { 'name': 'string' },\n                        'name': 'fileName',\n                        'description': '文件名'\n                    }\n                ],\n                'return': [{\n                        'description': '{blob}',\n                        'title': 'return'\n                    }],\n                'access': [{\n                        'description': 'public',\n                        'title': 'access'\n                    }]\n            }\n        }\n    ],\n    'slots': {\n        'default': {\n            'name': 'default',\n            'description': '需要生成截图的内容'\n        }\n    },\n    'example': __webpack_require__(/*! !./node_modules/vue-styleguidist/lib/loaders/examples-loader.js?customLangs=vue|js|jsx!./src/components/DomScreenshot.vue */ \"./node_modules/vue-styleguidist/lib/loaders/examples-loader.js?customLangs=vue|js|jsx!./src/components/DomScreenshot.vue\"),\n    'examples': null\n}\n\t\n\n//# sourceURL=webpack:///./src/components/DomScreenshot.vue?./node_modules/vue-styleguidist/lib/loaders/vuedoc-loader.js");

/***/ }),

/***/ "./src/components/DomScreenshot.vue":
/*!******************************************!*\
  !*** ./src/components/DomScreenshot.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _DomScreenshot_vue_vue_type_template_id_41094b04___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DomScreenshot.vue?vue&type=template&id=41094b04& */ \"./src/components/DomScreenshot.vue?vue&type=template&id=41094b04&\");\n/* harmony import */ var _DomScreenshot_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DomScreenshot.vue?vue&type=script&lang=js& */ \"./src/components/DomScreenshot.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n/* harmony import */ var _DomScreenshot_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DomScreenshot.vue?vue&type=custom&index=0&blockType=docs */ \"./src/components/DomScreenshot.vue?vue&type=custom&index=0&blockType=docs\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _DomScreenshot_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _DomScreenshot_vue_vue_type_template_id_41094b04___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _DomScreenshot_vue_vue_type_template_id_41094b04___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* custom blocks */\n\nif (typeof _DomScreenshot_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_3__[\"default\"] === 'function') Object(_DomScreenshot_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(component)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/DomScreenshot.vue?");

/***/ }),

/***/ "./src/components/DomScreenshot.vue?vue&type=custom&index=0&blockType=docs":
/*!*********************************************************************************!*\
  !*** ./src/components/DomScreenshot.vue?vue&type=custom&index=0&blockType=docs ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_styleguidist_lib_loaders_docs_loader_js_node_modules_vue_cli_plugin_styleguidist_empty_object_loader_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DomScreenshot_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-styleguidist/lib/loaders/docs-loader.js!../../node_modules/vue-cli-plugin-styleguidist/empty-object-loader.js!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./DomScreenshot.vue?vue&type=custom&index=0&blockType=docs */ \"./node_modules/vue-styleguidist/lib/loaders/docs-loader.js!./node_modules/vue-cli-plugin-styleguidist/empty-object-loader.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/DomScreenshot.vue?vue&type=custom&index=0&blockType=docs\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_styleguidist_lib_loaders_docs_loader_js_node_modules_vue_cli_plugin_styleguidist_empty_object_loader_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DomScreenshot_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/DomScreenshot.vue?");

/***/ }),

/***/ "./src/components/DomScreenshot.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./src/components/DomScreenshot.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DomScreenshot_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./DomScreenshot.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/DomScreenshot.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DomScreenshot_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/DomScreenshot.vue?");

/***/ }),

/***/ "./src/components/DomScreenshot.vue?vue&type=template&id=41094b04&":
/*!*************************************************************************!*\
  !*** ./src/components/DomScreenshot.vue?vue&type=template&id=41094b04& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_54a7141e_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DomScreenshot_vue_vue_type_template_id_41094b04___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"54a7141e-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./DomScreenshot.vue?vue&type=template&id=41094b04& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"54a7141e-vue-loader-template\\\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/DomScreenshot.vue?vue&type=template&id=41094b04&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_54a7141e_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DomScreenshot_vue_vue_type_template_id_41094b04___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_54a7141e_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DomScreenshot_vue_vue_type_template_id_41094b04___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/DomScreenshot.vue?");

/***/ }),

/***/ 0:
/*!**************************************************************!*\
  !*** multi ./node_modules/vue-styleguidist/lib/client/index ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /Users/jin10/Desktop/mine/github/dom-screenshot/node_modules/vue-styleguidist/lib/client/index */\"./node_modules/vue-styleguidist/lib/client/index.js\");\n\n\n//# sourceURL=webpack:///multi_./node_modules/vue-styleguidist/lib/client/index?");

/***/ })

/******/ });