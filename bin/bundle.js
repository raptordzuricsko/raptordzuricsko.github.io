/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

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

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = "SHAWN"

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(3);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(5)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./node_modules/css-loader/index.js!./style.css", function() {
			var newContent = require("!!./node_modules/css-loader/index.js!./style.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = "data:image/gif;base64,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"

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "body{\n    background:pink;\n    text-align:center;\n    font-size:32px;\n}", ""]);

// exports


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 5 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);


var img = document.createElement('img');
img.src = __webpack_require__(2);
document.body.appendChild(img);
var img2 = img.cloneNode(true);
document.body.appendChild(img2);
document.write(__webpack_require__(0));
document.body.appendChild(img.cloneNode(true))
document.body.appendChild(img.cloneNode(true))

var sinkspeed=3;
var MAX_COUNT=10;
var leftRight = 0;
var hearts = new Array();

function randommaker(range) {
	var rand = Math.floor(range*Math.random());
    return rand;
}

function descend(hearts){
	for(var j = 0; j < MAX_COUNT; j++){
		if(hearts[j]){
			hearts[j].ud += sinkspeed;
			hearts[j].image.style['top'] = hearts[j].ud;
			if (j % 2 == 0){
				hearts[j].lr += sinkspeed;
				hearts[j].image.style['left'] = hearts[j].lr;
			} else {
				hearts[j].lr -= sinkspeed;
				hearts[j].image.style['left'] = hearts[j].lr;
			}
		}
	}

	setTimeout(descend, 200, hearts);
}

for(var i = 0; i < MAX_COUNT; i++){
	// document.body.appendChild(img.cloneNode(true));
	// lftrght = Math.random()*15;
	image = img.cloneNode(true);
	lftrght = randommaker(window.innerWidth);
	image.style['position'] = 'absolute';
	image.style['left'] = lftrght + 'px'
	document.body.appendChild(image);
	hearts.push({'image' : image, 'lr': lftrght, 'ud': 0});
}
descend(hearts);


/***/ })
/******/ ]);