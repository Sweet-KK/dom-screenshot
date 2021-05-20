(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["dom-screenshot"] = factory();
	else
		root["dom-screenshot"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "21a6":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(a,b){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}})(this,function(){"use strict";function b(a,b){return"undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(a,b,c){var d=new XMLHttpRequest;d.open("GET",a),d.responseType="blob",d.onload=function(){g(d.response,b,c)},d.onerror=function(){console.error("could not download file")},d.send()}function d(a){var b=new XMLHttpRequest;b.open("HEAD",a,!1);try{b.send()}catch(a){}return 200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,a=f.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),g=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i)})}}:function(b,d,e,g){if(g=g||open("","_blank"),g&&(g.document.title=g.document.body.innerText="downloading..."),"string"==typeof b)return c(b,d,e);var h="application/octet-stream"===b.type,i=/constructor/i.test(f.HTMLElement)||f.safari,j=/CriOS\/[\d]+/.test(navigator.userAgent);if((j||h&&i||a)&&"undefined"!=typeof FileReader){var k=new FileReader;k.onloadend=function(){var a=k.result;a=j?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),g?g.location.href=a:location=a,g=null},k.readAsDataURL(b)}else{var l=f.URL||f.webkitURL,m=l.createObjectURL(b);g?g.location=m:location.href=m,g=null,setTimeout(function(){l.revokeObjectURL(m)},4E4)}});f.saveAs=g.saveAs=g, true&&(module.exports=g)});

//# sourceMappingURL=FileSaver.min.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "32e6":
/***/ (function(module, exports) {


module.exports = function load (src, opts, cb) {
  var head = document.head || document.getElementsByTagName('head')[0]
  var script = document.createElement('script')

  if (typeof opts === 'function') {
    cb = opts
    opts = {}
  }

  opts = opts || {}
  cb = cb || function() {}

  script.type = opts.type || 'text/javascript'
  script.charset = opts.charset || 'utf8';
  script.async = 'async' in opts ? !!opts.async : true
  script.src = src

  if (opts.attrs) {
    setAttributes(script, opts.attrs)
  }

  if (opts.text) {
    script.text = '' + opts.text
  }

  var onend = 'onload' in script ? stdOnEnd : ieOnEnd
  onend(script, cb)

  // some good legacy browsers (firefox) fail the 'in' detection above
  // so as a fallback we always set onload
  // old IE will ignore this and new IE will set onload
  if (!script.onload) {
    stdOnEnd(script, cb);
  }

  head.appendChild(script)
}

function setAttributes(script, attrs) {
  for (var attr in attrs) {
    script.setAttribute(attr, attrs[attr]);
  }
}

function stdOnEnd (script, cb) {
  script.onload = function () {
    this.onerror = this.onload = null
    cb(null, script)
  }
  script.onerror = function () {
    // this.onload = null here is necessary
    // because even IE9 works not like others
    this.onerror = this.onload = null
    cb(new Error('Failed to load ' + this.src), script)
  }
}

function ieOnEnd (script, cb) {
  script.onreadystatechange = function () {
    if (this.readyState != 'complete' && this.readyState != 'loaded') return
    this.onreadystatechange = null
    cb(null, script) // there is no way to catch loading errors in IE8
  }
}


/***/ }),

/***/ "5555":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "70bb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_cli_plugin_styleguidist_empty_object_loader_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DomScreenshot_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5555");
/* harmony import */ var _node_modules_vue_cli_plugin_styleguidist_empty_object_loader_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DomScreenshot_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_cli_plugin_styleguidist_empty_object_loader_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DomScreenshot_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_cli_plugin_styleguidist_empty_object_loader_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DomScreenshot_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "b635":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _components_DomScreenshot_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e000");


_components_DomScreenshot_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].install = Vue => {
  Vue.component(_components_DomScreenshot_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].name, _components_DomScreenshot_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])
}

let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(_components_DomScreenshot_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])
}

/* harmony default export */ __webpack_exports__["a"] = (_components_DomScreenshot_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "e000":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3a5fb1b9-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/DomScreenshot.vue?vue&type=template&id=7d8bd2da&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',_vm._g(_vm._b({ref:"targetDom",staticClass:"dom-screenshot"},'div',_vm.$attrs,false),_vm.$listeners),[_vm._t("default",[_vm._v(" Hellow Word! ")])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/DomScreenshot.vue?vue&type=template&id=7d8bd2da&

// EXTERNAL MODULE: ./node_modules/file-saver/dist/FileSaver.min.js
var FileSaver_min = __webpack_require__("21a6");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/DomScreenshot.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//


const loadJs = __webpack_require__("32e6")
const typeMapping = {
  jpg: { fn: 'toJpeg', suffix: 'jpg' },
  png: { fn: 'toPng', suffix: 'png' },
  blob: { fn: 'toBlob', suffix: 'png' }
}
/* harmony default export */ var DomScreenshotvue_type_script_lang_js_ = ({
  name: 'DomScreenshot',
  props: {
    /**
     * 截图前的钩子
     */
    beforeShot: {
      type: Function,
      default: null
    },
    /**
     * 启用isSave保存图片时的文件命名
     */
    saveName: {
      type: String,
      default: '生成图片'
    },
    /**
     * 图片缩放倍数
     */
    scale: {
      type: Number,
      default: 2
    },
    /**
     * distType为jpg时输出的图片质量
     */
    quality: {
      type: Number,
      default: 0.9
    },
    /**
     * 截图后是否直接保存图片，移动端可调用shot().then进行处理（如微信、ios）
     */
    isSave: {
      type: Boolean,
      default: false
    },
    /**
     * 输出类型，有jpg/png/blob
     */
    distType: {
      type: String,
      default: 'jpg'
    },
    /**
     * 请求图片时添加时间戳参数，禁用缓存。使用时可解决html2canvas不加载图片的问题，启用该参数会先请求图片转换为blob再进行截图，因此执行时间增加
     */
    cacheBust: {
      type: Boolean,
      default: false
    },
    /**
     * 截图容器的背景色
     */
    bgColor: {
      type: [String, null],
      default: null
    },
    /**
     * dom-to-image和html2canvas的其他参数，相同选项会被暴露出来的参数覆盖
     */
    options: {
      type: Object,
      default: () => ({})
    },
    /**
     * 默认使用dom-to-image，在ios及ie下使用html2canvas
     * 由于图片跨域问题，部分浏览器在默认处理下可能无法截图，请使用该参数自行控制
     */
    useHtml2canvas: {
      type: Boolean,
      default: undefined
    },
    /**
     * 异步加载js优化首屏加载体积,可自定义cdn链接
     */
    cdns: {
      type: Object,
      default: () => ({
        domtoimage: '//cdn.bootcdn.net/ajax/libs/dom-to-image/2.6.0/dom-to-image.js',
        html2canvas: '//html2canvas.hertzen.com/dist/html2canvas.min.js'
      })
    }
  },
  data () {
    return {
      useAnother: false
    }
  },
  mounted () {
    if (this.useHtml2canvas === void 0) {
      this.useAnother =
        /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) ||
        navigator.userAgent.toLowerCase().includes('msie') ||
        navigator.userAgent.toLowerCase().includes('trident')
    } else {
      this.useAnother = this.useHtml2canvas
    }
  },
  methods: {
    getOption (el) {
      if (this.useAnother) {
        const offset = this.getOffset(el)
        return {
          allowTaint: true,
          useCORS: true,
          x: offset.left,
          y: offset.top,
          width: offset.width,
          height: offset.height,
          ...this.options,
          scale: this.scale,
          backgroundColor: this.bgColor
        }
      } else {
        return {
          width: el.offsetWidth * this.scale,
          height: el.offsetHeight * this.scale,
          style: {
            transform: `scale(${this.scale})`,
            transformOrigin: '0 0',
            width: `${el.offsetWidth}px`,
            height: `${el.offsetHeight}px`
          },
          imagePlaceholder:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABkCAYAAADDhn8LAAACpUlEQVR4Xu3VsRHDMAwEQbH/BtmN3YDl4NJf5Qiw4I3Ovffz+AgQ+ClwBOJlEHgXEIjXQeCPgEA8DwIC8QYINAF/kOZmakRAICOHtmYTEEhzMzUiIJCRQ1uzCQikuZkaERDIyKGt2QQE0txMjQgIZOTQ1mwCAmlupkYEBDJyaGs2AYE0N1MjAgIZObQ1m4BAmpupEQGBjBzamk1AIM3N1IiAQEYObc0mIJDmZmpEQCAjh7ZmExBIczM1IiCQkUNbswkIpLmZGhEQyMihrdkEBNLcTI0ICGTk0NZsAgJpbqZGBAQycmhrNgGBNDdTIwICGTm0NZuAQJqbqREBgYwc2ppNQCDNzdSIgEBGDm3NJiCQ5mZqREAgI4e2ZhMQSHMzNSIgkJFDW7MJCKS5mRoREMjIoa3ZBATS3EyNCAhk5NDWbAICaW6mRgQEMnJoazYBgTQ3UyMCAhk5tDWbgECam6kRAYGMHNqaTUAgzc3UiIBARg5tzSYgkOZmakRAICOHtmYTEEhzMzUiIJCRQ1uzCQikuZkaERDIyKGt2QQE0txMjQgIZOTQ1mwCAmlupkYEBDJyaGs2AYE0N1MjAgIZObQ1m4BAmpupEQGBjBzamk1AIM3N1IiAQEYObc0mIJDmZmpEQCAjh7ZmExBIczM1IiCQkUNbswkIpLmZGhEQyMihrdkEBNLcTI0ICGTk0NZsAgJpbqZGBAQycmhrNgGBNDdTIwICGTm0NZuAQJqbqREBgYwc2ppNQCDNzdSIgEBGDm3NJiCQ5mZqREAgI4e2ZhMQSHMzNSIgkJFDW7MJCKS5mRoREMjIoa3ZBATS3EyNCAhk5NDWbAICaW6mRgQEMnJoazYBgTQ3UyMCAhk5tDWbgECam6kRAYGMHNqaTUAgzc3UiMAXqPVhMNxoJT0AAAAASUVORK5CYII=',
          ...this.options,
          scale: this.scale,
          quality: this.quality,
          cacheBust: this.cacheBust,
          bgcolor: this.bgColor
        }
      }
    },
    getOffset (el) {
      let top = el.offsetTop
      let left = el.offsetLeft
      let parent = el.offsetParent
      while (parent) {
        top += parent.offsetTop
        left += parent.offsetLeft
        parent = parent.offsetParent
      }
      return {
        top,
        left,
        width: el.offsetWidth,
        height: el.offsetHeight
      }
    },
    /**
     * 截图
     * @return {promise}
     * @public
     */
    shot () {
      const doShot = this.ignoreMultiClick(this.dealHandle)
      if (!this.beforeShot) {
        return doShot()
      }
      const before = this.beforeShot()
      if (before && before.then) {
        before.then(() => {
          return doShot()
        })
      } else if (before !== false) {
        return doShot()
      }
    },
    async conmonHandle () {
      console.log('domtoimage')
      const el = this.$refs.targetDom
      const name = this.getFileName()
      const func = typeMapping[this.distType].fn
      if (!window.domtoimage) {
        await this.loadScript(this.cdns.domtoimage)
      }
      return window.domtoimage[func](el, this.getOption(el))
        .then(data => {
          this.saveFile(data, name)
          return data
        })
        .catch(err => {
          return err
        })
    },
    async anotherHandle () {
      console.log('html2canvas')
      const el = this.$refs.targetDom
      const name = this.getFileName()
      if (!window.html2canvas) {
        await this.loadScript(this.cdns.html2canvas)
      }

      if (this.cacheBust) {
        const imgArr = el.querySelectorAll('img')
        if (imgArr.length) {
          for (let i = 0; i < imgArr.length; i++) {
            const dom = imgArr[i]
            const src = dom.src
            if (src.includes(';base64,') || !src) {
              continue
            }
            const blob = await this.imageLoadBlob(src)
            if (blob) {
              dom.src = blob
            }
          }
        }
      }

      return window
        .html2canvas(el, this.getOption(el))
        .then(canvas => {
          const data = this.canvasToData(canvas, this.distType)
          this.saveFile(data, name)
          return data
        })
        .catch(err => {
          return err
        })
    },
    loadScript (src, option = {}) {
      return new Promise((resolve, reject) => {
        loadJs(src, option, function (err, script) {
          if (err) {
            reject(err)
          } else {
            resolve()
          }
        })
      })
    },
    imageLoadBlob (src) {
      const url = src + (/\?/.test(src) ? '&' : '?') + new Date().getTime()
      return new Promise(resolve => {
        const request = new XMLHttpRequest()

        request.onreadystatechange = () => {
          if (request.readyState !== 4) return

          if (request.status !== 200) {
            // eslint-disable-next-line no-console
            console.error(`cannot fetch resource: ${src}`)
            resolve(src)
            return
          }

          const encoder = new FileReader()
          encoder.onloadend = () => {
            const content = encoder.result.split(/,/)[1]
            const extension = this.parseExtension(url).toLowerCase()
            const type = this.mimes()[extension] || ''
            resolve('data:' + type + ';base64,' + content)
          }
          encoder.readAsDataURL(request.response)
        }
        request.ontimeout = () => {
          resolve(src)
          // eslint-disable-next-line no-console
          console.error(`fetch resource timeout: ${src}`)
        }
        request.responseType = 'blob'
        request.timeout = 10000
        request.open('GET', url, true)
        request.send()
      })
    },
    parseExtension (url) {
      // eslint-disable-next-line no-useless-escape
      const match = /\.([^\.\/]*?)$/g.exec(url)
      if (match) return match[1]
      else return ''
    },
    mimes () {
      const WOFF = 'application/font-woff'
      const JPEG = 'image/jpeg'
      return {
        woff: WOFF,
        woff2: WOFF,
        ttf: 'application/font-truetype',
        eot: 'application/vnd.ms-fontobject',
        png: 'image/png',
        jpg: JPEG,
        jpeg: JPEG,
        gif: 'image/gif',
        tiff: 'image/tiff',
        svg: 'image/svg+xml'
      }
    },
    dealHandle () {
      if (this.useAnother) return this.anotherHandle()
      return this.conmonHandle()
    },
    ignoreMultiClick (func, manual = false) {
      let lock = false
      return function (...args) {
        if (lock) return
        lock = true
        const done = () => (lock = false)
        if (manual) return func.call(this, ...args, done)
        const promise = func.call(this, ...args)
        Promise.resolve(promise).finally(done)
        return promise
      }
    },
    /**
     * blob转file
     * @param {blob} theBlob blob对象，
     * @param {string} fileName 文件名
     * @return {blob}
     * @public
     */
    blobToFile (theBlob, fileName) {
      theBlob.lastModifiedDate = new Date()
      theBlob.name = fileName
      return theBlob
    },
    getFileName () {
      return this.saveName + '.' + typeMapping[this.distType].suffix
    },
    saveFile (data, fileName) {
      this.isSave && Object(FileSaver_min["saveAs"])(data, fileName)
    },
    canvasToData (canvas, type) {
      if (type === 'jpg') {
        return canvas.toDataURL('image/jpeg', this.quality)
      } else if (type === 'png') {
        return canvas.toDataURL()
      } else {
        if (canvas.toBlob) {
          return new Promise(resolve => {
            canvas.toBlob(resolve)
          })
        }
        const binaryString = window.atob(canvas.toDataURL().split(',')[1])
        const length = binaryString.length
        const binaryArray = new Uint8Array(length)
        for (let i = 0; i < length; i++) {
          binaryArray[i] = binaryString.charCodeAt(i)
        }
        return new Blob([binaryArray], {
          type: 'image/png'
        })
      }
    }
  }
});

// CONCATENATED MODULE: ./src/components/DomScreenshot.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_DomScreenshotvue_type_script_lang_js_ = (DomScreenshotvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// EXTERNAL MODULE: ./src/components/DomScreenshot.vue?vue&type=custom&index=0&blockType=docs
var DomScreenshotvue_type_custom_index_0_blockType_docs = __webpack_require__("70bb");

// CONCATENATED MODULE: ./src/components/DomScreenshot.vue





/* normalize component */

var component = normalizeComponent(
  components_DomScreenshotvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof DomScreenshotvue_type_custom_index_0_blockType_docs["default"] === 'function') Object(DomScreenshotvue_type_custom_index_0_blockType_docs["default"])(component)

/* harmony default export */ var DomScreenshot = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./src/index.js
var src_0 = __webpack_require__("b635");

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src_0["a" /* default */]);



/***/ })

/******/ });
});
//# sourceMappingURL=dom-screenshot.umd.js.map