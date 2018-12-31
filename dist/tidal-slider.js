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
/******/ 	return __webpack_require__(__webpack_require__.s = 39);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(20);
} else {}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, isValidElement, REACT_ELEMENT_TYPE; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(29)();
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(28);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(5)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(26);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(5)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
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

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(23);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
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

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

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

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(38);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(5)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(31);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import styles from "./styles"

var cleanups = {
  // some useless stuff for us
  // that svgo doesn't remove
  title: /<title>.*<\/title>/gi,
  desc: /<desc>.*<\/desc>/gi,
  comment: /<!--.*-->/gi,
  defs: /<defs>.*<\/defs>/gi,

  // remove hardcoded dimensions
  width: / +width="\d+(\.\d+)?(px)?"/gi,
  height: / +height="\d+(\.\d+)?(px)?"/gi,

  // remove fill
  fill: / +fill="(none|#[0-9a-f]+)"/gi,

  // Sketch.app shit
  sketchMSShapeGroup: / +sketch:type="MSShapeGroup"/gi,
  sketchMSPage: / +sketch:type="MSPage"/gi,
  sketchMSLayerGroup: / +sketch:type="MSLayerGroup"/gi
};

// @styled(styles)

var SVGInline = function (_Component) {
  _inherits(SVGInline, _Component);

  function SVGInline() {
    _classCallCheck(this, SVGInline);

    return _possibleConstructorReturn(this, (SVGInline.__proto__ || Object.getPrototypeOf(SVGInline)).apply(this, arguments));
  }

  _createClass(SVGInline, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          className = _props.className,
          component = _props.component,
          svg = _props.svg,
          fill = _props.fill,
          width = _props.width,
          accessibilityLabel = _props.accessibilityLabel,
          accessibilityDesc = _props.accessibilityDesc,
          classSuffix = _props.classSuffix,
          cleanupExceptions = _props.cleanupExceptions,
          componentProps = _objectWithoutProperties(_props, ["className", "component", "svg", "fill", "width", "accessibilityLabel", "accessibilityDesc", "classSuffix", "cleanupExceptions"]);

      var _props2 = this.props,
          cleanup = _props2.cleanup,
          height = _props2.height;


      if (
      // simple way to enable entire cleanup
      cleanup === true ||
      // passing cleanupExceptions enable cleanup as well
      cleanup.length === 0 && cleanupExceptions.length > 0) {
        cleanup = Object.keys(cleanups);
      }
      cleanup = cleanup.filter(function (key) {
        return !(cleanupExceptions.indexOf(key) > -1);
      });

      if (width && height === undefined) {
        height = width;
      }

      // remove useless props for wrapper
      delete componentProps.cleanup;
      delete componentProps.height;

      var classes = (0, _classnames2.default)(_defineProperty({
        SVGInline: true,
        "SVGInline--cleaned": cleanup.length
      }, className, className));
      var svgClasses = classes.split(" ").join(classSuffix + " ") + classSuffix;
      var svgStr = SVGInline.cleanupSvg(svg, cleanup).replace(/<svg/, "<svg class=\"" + svgClasses + "\"" + (fill ? " fill=\"" + fill + "\"" : "") + (width || height ? ' style="' + (width ? "width: " + width + ";" : "") + (height ? "height: " + height + ";" : "") + '"' : ""));
      var match = void 0;
      if (accessibilityDesc) {
        match = /<svg(.|\n|\r\n)*?>/.exec(svgStr);
        var pos = match.index + match[0].length;
        svgStr = svgStr.substr(0, pos) + ("<desc>" + accessibilityDesc + "</desc>") + svgStr.substr(pos);
      }
      if (accessibilityLabel) {
        match = match || /<svg(.|\n|\r\n)*?>/.exec(svgStr);
        var _pos = match.index + match[0].length - 1;
        var id = "SVGInline-" + SVGInline.idCount++ + "-title";
        svgStr = svgStr.substr(0, _pos) + (" role=\"img\" aria-labelledby=\"" + id + "\"") + svgStr.substr(_pos, 1) + ("<title id=\"" + id + "\">" + accessibilityLabel + "</title>") + svgStr.substr(_pos + 1);
      }
      return _react2.default.createElement(component, _extends({}, componentProps, { // take most props
        className: classes,
        dangerouslySetInnerHTML: {
          __html: svgStr
        }
      }));
    }
  }]);

  return SVGInline;
}(_react.Component);

SVGInline.propTypes = {
  className: _propTypes2.default.string,
  classSuffix: _propTypes2.default.string,
  component: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
  svg: _propTypes2.default.string.isRequired,
  fill: _propTypes2.default.string,
  cleanup: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.array]),
  cleanupExceptions: _propTypes2.default.array,
  width: _propTypes2.default.string,
  height: _propTypes2.default.string,
  accessibilityLabel: _propTypes2.default.string,
  accessibilityDesc: _propTypes2.default.string
};

SVGInline.defaultProps = {
  component: "span",
  classSuffix: "-svg",
  cleanup: [],
  cleanupExceptions: []
};

SVGInline.idCount = 0;

SVGInline.cleanupSvg = function (svg) {
  var cleanup = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  return Object.keys(cleanups).filter(function (key) {
    return cleanup.indexOf(key) > -1;
  }).reduce(function (acc, key) {
    return acc.replace(cleanups[key], "");
  }, svg).trim();
};

exports.default = SVGInline;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 10 11\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M9.447 4.785L1.332.181C.592-.239-.004.097 0 .93l.042 9.139c.003.832.607 1.17 1.349.754l8.052-4.523c.741-.416.743-1.094.004-1.514z\"></path></svg>"

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (false) {}

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(22);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(5)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(24);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(5)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(25);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(5)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(27);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(5)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* global window */


var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {}

var result = Object(_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(root);
/* harmony default export */ __webpack_exports__["a"] = (result);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(36), __webpack_require__(37)(module)))

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 11 10\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5.467 1.767C5.911.727 6.925 0 8.105 0c1.59 0 2.734 1.343 2.877 2.944 0 0 .078.398-.093 1.113a4.91 4.91 0 0 1-1.517 2.5L5.467 10 1.628 6.558A4.909 4.909 0 0 1 .111 4.057C-.06 3.342.018 2.944.018 2.944.16 1.344 1.306 0 2.895 0c1.18 0 2.128.727 2.572 1.767z\" fill=\"#D75A4A\" fill-rule=\"evenodd\"></path></svg>"

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(32);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(5)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ReactIs$ForwardRef;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var ReactIs = __webpack_require__(33);
var React = __webpack_require__(0);
var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var TYPE_STATICS = _defineProperty({}, ReactIs.ForwardRef, (_ReactIs$ForwardRef = {}, _defineProperty(_ReactIs$ForwardRef, '$$typeof', true), _defineProperty(_ReactIs$ForwardRef, 'render', true), _ReactIs$ForwardRef));

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
        // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        var targetStatics = TYPE_STATICS[targetComponent['$$typeof']] || REACT_STATICS;
        var sourceStatics = TYPE_STATICS[sourceComponent['$$typeof']] || REACT_STATICS;

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try {
                    // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(35);
} else {}


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return symbolObservablePonyfill; });
function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.5.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var m=__webpack_require__(21),n="function"===typeof Symbol&&Symbol.for,p=n?Symbol.for("react.element"):60103,q=n?Symbol.for("react.portal"):60106,r=n?Symbol.for("react.fragment"):60107,t=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,v=n?Symbol.for("react.provider"):60109,w=n?Symbol.for("react.context"):60110,x=n?Symbol.for("react.async_mode"):60111,y=n?Symbol.for("react.forward_ref"):60112;n&&Symbol.for("react.placeholder");
var z="function"===typeof Symbol&&Symbol.iterator;function A(a,b,d,c,e,g,h,f){if(!a){a=void 0;if(void 0===b)a=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var k=[d,c,e,g,h,f],l=0;a=Error(b.replace(/%s/g,function(){return k[l++]}));a.name="Invariant Violation"}a.framesToPop=1;throw a;}}
function B(a){for(var b=arguments.length-1,d="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=0;c<b;c++)d+="&args[]="+encodeURIComponent(arguments[c+1]);A(!1,"Minified React error #"+a+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",d)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D={};
function E(a,b,d){this.props=a;this.context=b;this.refs=D;this.updater=d||C}E.prototype.isReactComponent={};E.prototype.setState=function(a,b){"object"!==typeof a&&"function"!==typeof a&&null!=a?B("85"):void 0;this.updater.enqueueSetState(this,a,b,"setState")};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function F(){}F.prototype=E.prototype;function G(a,b,d){this.props=a;this.context=b;this.refs=D;this.updater=d||C}var H=G.prototype=new F;
H.constructor=G;m(H,E.prototype);H.isPureReactComponent=!0;var I={current:null,currentDispatcher:null},J=Object.prototype.hasOwnProperty,K={key:!0,ref:!0,__self:!0,__source:!0};
function L(a,b,d){var c=void 0,e={},g=null,h=null;if(null!=b)for(c in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(g=""+b.key),b)J.call(b,c)&&!K.hasOwnProperty(c)&&(e[c]=b[c]);var f=arguments.length-2;if(1===f)e.children=d;else if(1<f){for(var k=Array(f),l=0;l<f;l++)k[l]=arguments[l+2];e.children=k}if(a&&a.defaultProps)for(c in f=a.defaultProps,f)void 0===e[c]&&(e[c]=f[c]);return{$$typeof:p,type:a,key:g,ref:h,props:e,_owner:I.current}}
function M(a,b){return{$$typeof:p,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function N(a){return"object"===typeof a&&null!==a&&a.$$typeof===p}function escape(a){var b={"=":"=0",":":"=2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var O=/\/+/g,P=[];function Q(a,b,d,c){if(P.length){var e=P.pop();e.result=a;e.keyPrefix=b;e.func=d;e.context=c;e.count=0;return e}return{result:a,keyPrefix:b,func:d,context:c,count:0}}
function R(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>P.length&&P.push(a)}
function S(a,b,d,c){var e=typeof a;if("undefined"===e||"boolean"===e)a=null;var g=!1;if(null===a)g=!0;else switch(e){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case p:case q:g=!0}}if(g)return d(c,a,""===b?"."+T(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var h=0;h<a.length;h++){e=a[h];var f=b+T(e,h);g+=S(e,f,d,c)}else if(null===a||"object"!==typeof a?f=null:(f=z&&a[z]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=f.call(a),h=
0;!(e=a.next()).done;)e=e.value,f=b+T(e,h++),g+=S(e,f,d,c);else"object"===e&&(d=""+a,B("31","[object Object]"===d?"object with keys {"+Object.keys(a).join(", ")+"}":d,""));return g}function U(a,b,d){return null==a?0:S(a,"",b,d)}function T(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function V(a,b){a.func.call(a.context,b,a.count++)}
function aa(a,b,d){var c=a.result,e=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?W(a,c,d,function(a){return a}):null!=a&&(N(a)&&(a=M(a,e+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(O,"$&/")+"/")+d)),c.push(a))}function W(a,b,d,c,e){var g="";null!=d&&(g=(""+d).replace(O,"$&/")+"/");b=Q(b,g,c,e);U(a,aa,b);R(b)}function ba(a,b){var d=I.currentDispatcher;null===d?B("277"):void 0;return d.readContext(a,b)}
var X={Children:{map:function(a,b,d){if(null==a)return a;var c=[];W(a,c,null,b,d);return c},forEach:function(a,b,d){if(null==a)return a;b=Q(null,null,b,d);U(a,V,b);R(b)},count:function(a){return U(a,function(){return null},null)},toArray:function(a){var b=[];W(a,b,null,function(a){return a});return b},only:function(a){N(a)?void 0:B("143");return a}},createRef:function(){return{current:null}},Component:E,PureComponent:G,createContext:function(a,b){void 0===b&&(b=null);a={$$typeof:w,_calculateChangedBits:b,
_currentValue:a,_currentValue2:a,Provider:null,Consumer:null,unstable_read:null};a.Provider={$$typeof:v,_context:a};a.Consumer=a;a.unstable_read=ba.bind(null,a);return a},forwardRef:function(a){return{$$typeof:y,render:a}},Fragment:r,StrictMode:t,unstable_AsyncMode:x,unstable_Profiler:u,createElement:L,cloneElement:function(a,b,d){null===a||void 0===a?B("267",a):void 0;var c=void 0,e=m({},a.props),g=a.key,h=a.ref,f=a._owner;if(null!=b){void 0!==b.ref&&(h=b.ref,f=I.current);void 0!==b.key&&(g=""+b.key);
var k=void 0;a.type&&a.type.defaultProps&&(k=a.type.defaultProps);for(c in b)J.call(b,c)&&!K.hasOwnProperty(c)&&(e[c]=void 0===b[c]&&void 0!==k?k[c]:b[c])}c=arguments.length-2;if(1===c)e.children=d;else if(1<c){k=Array(c);for(var l=0;l<c;l++)k[l]=arguments[l+2];e.children=k}return{$$typeof:p,type:a.type,key:g,ref:h,props:e,_owner:f}},createFactory:function(a){var b=L.bind(null,a);b.type=a;return b},isValidElement:N,version:"16.5.2",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:I,
assign:m}},Y={default:X},Z=Y&&X||Y;module.exports=Z.default||Z;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".image__99b6c3 {\n  width: 100%;\n  height: 100%;\n  transition: .3s ease-out opacity; }\n  .image--visible__8d1bc8 {\n    opacity: 1; }\n  .image--hidden__e3338d {\n    opacity: 0; }\n", ""]);

// exports
exports.locals = {
	"image": "image__99b6c3",
	"image--visible": "image--visible__8d1bc8",
	"image--hidden": "image--hidden__e3338d"
};

/***/ }),
/* 23 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".placeholder__1d0575 {\n  transition: .3s ease-out opacity;\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0; }\n  .placeholder--visible__572ad6 {\n    opacity: 1; }\n  .placeholder--hidden__dcc429 {\n    opacity: 0; }\n", ""]);

// exports
exports.locals = {
	"placeholder": "placeholder__1d0575",
	"placeholder--visible": "placeholder--visible__572ad6",
	"placeholder--hidden": "placeholder--hidden__dcc429"
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".lazy_image__770d78 {\n  position: relative;\n  min-height: 400px; }\n\n@media (max-width: 600px) {\n  .lazy_image__770d78 {\n    min-height: 285px; } }\n\n@media (max-width: 340px) {\n  .lazy_image__770d78 {\n    margin-bottom: -100px; }\n    .lazy_image__770d78::after {\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 0;\n      bottom: 0;\n      right: 0;\n      background: linear-gradient(to top, #222 15%, rgba(34, 34, 34, 0) 55%); } }\n", ""]);

// exports
exports.locals = {
	"lazy_image": "lazy_image__770d78"
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".album_cover__f0966f {\n  position: relative; }\n  .album_cover__f0966f::after, .album_cover__f0966f::before {\n    transition: .3s ease-in-out opacity;\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    z-index: 10; }\n  .album_cover__f0966f::after {\n    background-image: linear-gradient(to top, #40407a -1%, rgba(26, 26, 26, 0) 83%); }\n  .album_cover__f0966f::before {\n    opacity: 0;\n    background-color: rgba(0, 0, 0, 0.7); }\n  .album_cover__meta__9562f4 {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    top: 0;\n    padding: 25px;\n    z-index: 20;\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: flex-end; }\n    .album_cover__meta__9562f4 svg {\n      width: 14px;\n      height: 14px;\n      vertical-align: middle; }\n    .album_cover__meta--show-list__9e33a9 .album_cover__title__4414aa {\n      opacity: .8; }\n  .album_cover__meta-wrap__d0dd10 {\n    flex: 0 0 auto; }\n  .album_cover__meta_top__fef9ae {\n    margin-bottom: 14px; }\n  .album_cover__track_count__2adffc {\n    font-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", sans-serif;\n    font-weight: bold;\n    font-weight: bold;\n    font-size: 11px;\n    color: rgba(253, 253, 253, 0.9);\n    background-color: rgba(68, 189, 50, 0.8);\n    padding: 2px 5px;\n    border-radius: 2px;\n    overflow: hidden;\n    margin-left: 4px; }\n  .album_cover__timestamp__5753c7 {\n    font-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", sans-serif;\n    font-weight: bold;\n    font-size: 11px;\n    color: rgba(255, 255, 255, 0.9);\n    padding: 2px 5px 3px 5px;\n    background-color: rgba(53, 59, 72, 0.9);\n    border-radius: 2px;\n    overflow: hidden;\n    color: #fff;\n    margin-left: 5px;\n    font-size: 10px;\n    line-height: 5px;\n    vertical-align: middle; }\n  .album_cover__artists__3ba55d {\n    color: rgba(253, 253, 253, 0.78);\n    list-style-type: none;\n    padding: 0;\n    margin-top: 6px;\n    font-size: 15px;\n    display: block;\n    opacity: .6;\n    white-space: normal;\n    line-height: 20px;\n    margin-left: 0; }\n  .album_cover__title__4414aa {\n    color: rgba(253, 253, 253, 0.93);\n    white-space: normal;\n    line-height: 30px;\n    font-size: 25px;\n    transition: .3s ease-in-out opacity; }\n  .album_cover--dark-gradient__ddd150::after {\n    opacity: 0; }\n  .album_cover--dark-gradient__ddd150::before {\n    opacity: 1; }\n\n@media (max-width: 1000px) {\n  .album_cover__f0966f::after {\n    opacity: 0; }\n  .album_cover__f0966f::before {\n    opacity: 1; } }\n\n@media (max-width: 600px) {\n  .album_cover__title__4414aa {\n    font-size: 18px;\n    line-height: 24px; }\n  .album_cover__meta__9562f4 {\n    padding: 15px; } }\n\n@media (max-width: 340px) {\n  .album_cover__f0966f::before {\n    display: none; }\n  .album_cover__meta__9562f4 {\n    display: block;\n    position: relative; } }\n", ""]);

// exports
exports.locals = {
	"album_cover": "album_cover__f0966f",
	"album_cover__meta": "album_cover__meta__9562f4",
	"album_cover__meta--show-list": "album_cover__meta--show-list__9e33a9",
	"album_cover__title": "album_cover__title__4414aa",
	"album_cover__meta-wrap": "album_cover__meta-wrap__d0dd10",
	"album_cover__meta_top": "album_cover__meta_top__fef9ae",
	"album_cover__track_count": "album_cover__track_count__2adffc",
	"album_cover__timestamp": "album_cover__timestamp__5753c7",
	"album_cover__artists": "album_cover__artists__3ba55d",
	"album_cover--dark-gradient": "album_cover--dark-gradient__ddd150"
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".album-song-list__d734b9 {\n  flex: 0 1;\n  transition: .3s ease-in-out flex, .3s ease-in-out opacity;\n  opacity: 0;\n  overflow-x: hidden;\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  -webkit-overflow-scrolling: touch; }\n  .album-song-list--show__49841d {\n    opacity: 1;\n    flex: 1 0; }\n\n@media (max-width: 1000px) {\n  .album-song-list__d734b9 {\n    opacity: 1;\n    flex: 1 0; } }\n", ""]);

// exports
exports.locals = {
	"album-song-list": "album-song-list__d734b9",
	"album-song-list--show": "album-song-list--show__49841d"
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".song__a334b1 {\n  margin-top: 12px;\n  transition: .3s ease-in-out transform;\n  overflow: hidden; }\n  .song__a334b1:first-child {\n    margin-top: 20px; }\n  .song__a334b1:hover {\n    -webkit-transform: translateX(10px);\n            transform: translateX(10px); }\n    .song__a334b1:hover .song__play_icon__9abf6d svg {\n      opacity: 1; }\n  .song__link__affaf9 {\n    text-decoration: none; }\n  .song__play_icon__9abf6d {\n    display: inline-block; }\n    .song__play_icon__9abf6d svg {\n      fill: #fff;\n      opacity: .26;\n      vertical-align: inherit;\n      margin-right: 8px;\n      transition: .3s ease-in-out opacity; }\n  .song__heading__5ff85e {\n    color: #fff;\n    font-size: 16px;\n    text-decoration: none;\n    line-height: 19px; }\n  .song__meta__efdc7b {\n    color: rgba(255, 255, 255, 0.65);\n    font-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", sans-serif;\n    font-weight: normal;\n    font-size: 11px;\n    display: block;\n    margin-top: 4px;\n    margin-left: 22px;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n    padding-bottom: 12px; }\n  .song__meta_text__957e3c {\n    display: inline-block;\n    max-width: 210px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap; }\n  .song__explicit__e14975 {\n    padding: 1px 4px 2px 4px;\n    color: #fff;\n    background-color: #313131;\n    font-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", sans-serif;\n    font-weight: bold;\n    font-size: 8px;\n    vertical-align: text-top;\n    border-radius: 2px; }\n  .song__dot__14ef15 {\n    display: inline-block;\n    margin: 0 4px;\n    background-color: #fff;\n    opacity: .32;\n    border-radius: 100%;\n    width: 3px;\n    height: 3px;\n    vertical-align: super; }\n\n@media (max-width: 600px) {\n  .song__a334b1:first-child {\n    margin-top: 0px; }\n  .song__meta_text__957e3c {\n    max-width: 140px; }\n  .song__play_icon__9abf6d svg {\n    opacity: .6; } }\n", ""]);

// exports
exports.locals = {
	"song": "song__a334b1",
	"song__play_icon": "song__play_icon__9abf6d",
	"song__link": "song__link__affaf9",
	"song__heading": "song__heading__5ff85e",
	"song__meta": "song__meta__efdc7b",
	"song__meta_text": "song__meta_text__957e3c",
	"song__explicit": "song__explicit__e14975",
	"song__dot": "song__dot__14ef15"
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(30);

function emptyFunction() {}

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".album-item__442d87 {\n  display: inline-block;\n  vertical-align: middle;\n  width: 400px;\n  height: 400px;\n  overflow: hidden;\n  margin: 0 10px;\n  border-radius: 11px;\n  box-shadow: 0px 0px 17px -5px rgba(0, 0, 0, 0.5);\n  background-color: #2c3e50;\n  -webkit-mask-image: -webkit-radial-gradient(white, black); }\n\n@media (max-width: 600px) {\n  .album-item__442d87 {\n    width: 285px;\n    height: 285px; } }\n\n@media (max-width: 340px) {\n  .album-item__442d87 {\n    margin: 18px auto;\n    display: block;\n    height: auto;\n    background-color: #222; }\n    .album-item__442d87:nth-child(n + 5) {\n      display: none; } }\n", ""]);

// exports
exports.locals = {
	"album-item": "album-item__442d87"
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(34);
} else {}


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.5.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

Object.defineProperty(exports,"__esModule",{value:!0});
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.forward_ref"):60112,n=b?Symbol.for("react.placeholder"):60113;
function q(a){if("object"===typeof a&&null!==a){var p=a.$$typeof;switch(p){case c:switch(a=a.type,a){case l:case e:case g:case f:return a;default:switch(a=a&&a.$$typeof,a){case k:case m:case h:return a;default:return p}}case d:return p}}}exports.typeOf=q;exports.AsyncMode=l;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=m;exports.Fragment=e;exports.Profiler=g;exports.Portal=d;exports.StrictMode=f;
exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===e||a===l||a===g||a===f||a===n||"object"===typeof a&&null!==a&&("function"===typeof a.then||a.$$typeof===h||a.$$typeof===k||a.$$typeof===m)};exports.isAsyncMode=function(a){return q(a)===l};exports.isContextConsumer=function(a){return q(a)===k};exports.isContextProvider=function(a){return q(a)===h};exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===c};
exports.isForwardRef=function(a){return q(a)===m};exports.isFragment=function(a){return q(a)===e};exports.isProfiler=function(a){return q(a)===g};exports.isPortal=function(a){return q(a)===d};exports.isStrictMode=function(a){return q(a)===f};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.6.0
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

Object.defineProperty(exports,"__esModule",{value:!0});
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.concurrent_mode"):60111,m=b?Symbol.for("react.forward_ref"):60112,n=b?Symbol.for("react.suspense"):60113,q=b?Symbol.for("react.memo"):60115,r=b?Symbol.for("react.lazy"):
60116;function t(a){if("object"===typeof a&&null!==a){var p=a.$$typeof;switch(p){case c:switch(a=a.type,a){case l:case e:case g:case f:return a;default:switch(a=a&&a.$$typeof,a){case k:case m:case h:return a;default:return p}}case d:return p}}}function u(a){return t(a)===l}exports.typeOf=t;exports.AsyncMode=l;exports.ConcurrentMode=l;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=m;exports.Fragment=e;exports.Profiler=g;exports.Portal=d;
exports.StrictMode=f;exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===e||a===l||a===g||a===f||a===n||"object"===typeof a&&null!==a&&(a.$$typeof===r||a.$$typeof===q||a.$$typeof===h||a.$$typeof===k||a.$$typeof===m)};exports.isAsyncMode=function(a){return u(a)};exports.isConcurrentMode=u;exports.isContextConsumer=function(a){return t(a)===k};exports.isContextProvider=function(a){return t(a)===h};
exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return t(a)===m};exports.isFragment=function(a){return t(a)===e};exports.isProfiler=function(a){return t(a)===g};exports.isPortal=function(a){return t(a)===d};exports.isStrictMode=function(a){return t(a)===f};


/***/ }),
/* 36 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".slider__086560 {\n  padding: 40px 0;\n  margin: 10px 0;\n  overflow: hidden;\n  position: relative;\n  font-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", sans-serif;\n  font-weight: bold;\n  background-color: rgba(254, 202, 87, 0.6); }\n  .slider__086560::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    right: -1px;\n    bottom: 0;\n    left: auto;\n    width: calc( ( 100vw - 1280px ) / 2);\n    background: linear-gradient(to left, rgba(254, 202, 87, 0.9), rgba(254, 202, 87, 0));\n    z-index: 40; }\n  .slider__wrapper__e017ca {\n    max-width: 1280px;\n    padding: 0 40px;\n    margin: 0 auto;\n    position: relative; }\n  .slider__list__4c536f {\n    white-space: nowrap;\n    margin: 0;\n    padding: 0;\n    transition: .5s ease-in-out transform;\n    z-index: 20;\n    position: relative;\n    -webkit-overflow-scrolling: touch; }\n  .slider__button__e23c58 {\n    position: absolute;\n    -webkit-appearance: none;\n       -moz-appearance: none;\n            appearance: none;\n    background: rgba(0, 0, 0, 0.6);\n    border-radius: 100%;\n    width: 40px;\n    height: 40px;\n    outline: none;\n    border: none;\n    top: 50%;\n    z-index: 30;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    transition: .3s ease-out background, .3s ease-out opacity;\n    cursor: pointer; }\n    .slider__button__e23c58:hover {\n      background: rgba(0, 0, 0, 0.8); }\n    .slider__button__e23c58[disabled] {\n      cursor: not-allowed;\n      opacity: .5;\n      background: rgba(0, 0, 0, 0.2); }\n      .slider__button__e23c58[disabled]:hover {\n        background: rgba(0, 0, 0, 0.2); }\n    .slider__button__e23c58 svg {\n      fill: rgba(255, 255, 255, 0.7);\n      width: 15px;\n      height: 15px;\n      position: relative; }\n    .slider__button--previous__c15615 {\n      left: 0; }\n      .slider__button--previous__c15615 svg {\n        left: -3px;\n        top: 2px;\n        -webkit-transform: rotate(-180deg);\n                transform: rotate(-180deg); }\n    .slider__button--next__f05897 {\n      right: 0;\n      -webkit-transform: translateY(-50%);\n              transform: translateY(-50%);\n      z-index: 50; }\n      .slider__button--next__f05897 svg {\n        top: 2px; }\n\n@media (max-width: 1430px) {\n  .slider__086560::before {\n    display: none; } }\n\n@media (max-width: 1360px) {\n  .slider__wrapper__e017ca {\n    margin: 0 10px; } }\n\n@media (max-width: 1000px) {\n  .slider__button__e23c58 {\n    display: none; }\n  .slider__list__4c536f {\n    -webkit-transform: none !important;\n            transform: none !important;\n    overflow: scroll;\n    padding-left: 3rem; }\n  .slider__wrapper__e017ca {\n    padding: 0;\n    margin: 0; } }\n\n@media (max-width: 600px) {\n  .slider__list__4c536f {\n    padding: 0; } }\n\n@media (max-width: 340px) {\n  .slider__086560 {\n    padding-top: 5px;\n    margin-top: 0; }\n    .slider__list__4c536f {\n      white-space: normal; } }\n", ""]);

// exports
exports.locals = {
	"slider": "slider__086560",
	"slider__wrapper": "slider__wrapper__e017ca",
	"slider__list": "slider__list__4c536f",
	"slider__button": "slider__button__e23c58",
	"slider__button--previous": "slider__button--previous__c15615",
	"slider__button--next": "slider__button--next__f05897"
};

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/store/Action/TidalDataAction.js
var REQUEST_FETCH_STATUS = {
  NONE: 'NONE',
  PENDING: 'PENDING',
  FAIL: 'FAIL',
  SUCCESS: 'SUCCESS'
};
var TIDAL_DATA_ACTIONS = {
  FETCH_TIDAL_DATA: 'FETCH_TIDAL_DATA',
  // async action, this will be handled by sagas
  FETCH_TIDAL_DATA_SUCCESS: 'FETCH_TIDAL_DATA_SUCCESS',
  FETCH_TIDAL_DATA_FAIL: 'FETCH_TIDAL_DATA_FAIL'
};
function tidalDataSuccess(data) {
  return {
    type: TIDAL_DATA_ACTIONS.FETCH_TIDAL_DATA_SUCCESS,
    data: data
  };
}
function tidalDataFail() {
  return {
    type: TIDAL_DATA_ACTIONS.FETCH_TIDAL_DATA_FAIL
  };
}
function tidalDataFetch() {
  return {
    type: TIDAL_DATA_ACTIONS.FETCH_TIDAL_DATA
  };
}
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./src/component/Presentation/Image/Image.scss
var Image_Image = __webpack_require__(10);
var Image_default = /*#__PURE__*/__webpack_require__.n(Image_Image);

// CONCATENATED MODULE: ./src/component/Presentation/Image/Image.js


var Image_Image_Image = function Image(props) {
  return react_default.a.createElement("img", {
    alt: props.alt,
    src: props.url,
    onLoad: props.onLoad,
    onError: props.onError,
    className: "".concat(Image_default.a.image, " ").concat(Image_default.a[props.className])
  });
};
// EXTERNAL MODULE: ./src/component/Presentation/Placeholder/Placeholder.scss
var Placeholder_Placeholder = __webpack_require__(11);
var Placeholder_default = /*#__PURE__*/__webpack_require__.n(Placeholder_Placeholder);

// CONCATENATED MODULE: ./src/component/Presentation/Placeholder/Placeholder.js


var Placeholder_Placeholder_Placeholder = function Placeholder(props) {
  return react_default.a.createElement("div", {
    className: "".concat(Placeholder_default.a.placeholder, " ").concat(Placeholder_default.a[props.className])
  }, react_default.a.createElement("span", {
    className: "placeholder__icon"
  }));
};
// CONCATENATED MODULE: ./src/util/GlobalIntersectionObserver.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var IntersectionManager =
/*#__PURE__*/
function () {
  function IntersectionManager() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : IntersectionManager.INTERSECTION_CONFIG;

    _classCallCheck(this, IntersectionManager);

    _defineProperty(this, "elementMapping", new Map());

    _defineProperty(this, "instanceObserver", void 0);

    _defineProperty(this, "config", void 0);

    this.config = options;
    this.instanceObserver = new IntersectionObserver(this.onIntersections.bind(this), this.config);
  }

  _createClass(IntersectionManager, [{
    key: "isValidIntersection",
    value: function isValidIntersection(entry) {
      if (_typeof(IntersectionManager.INTERSECTION_CONFIG.threshold) === 'object') {
        console.warn('IntersectionManager: doesnt support definition of threshold as an array');
        return false;
      }

      if (IntersectionManager.INTERSECTION_CONFIG.threshold === null || typeof IntersectionManager.INTERSECTION_CONFIG.threshold === 'undefined') {
        console.warn('IntersectionManager: please supply a non null threshold');
        return false;
      }

      return entry.intersectionRatio >= IntersectionManager.INTERSECTION_CONFIG.threshold && entry.isIntersecting;
    }
  }, {
    key: "onIntersections",
    value: function onIntersections(entries) {
      var _this = this;

      entries.forEach(function (entry) {
        if (_this.isValidIntersection(entry)) {
          var mapCallback = _this.elementMapping.get(entry.target);

          if (!mapCallback) {
            console.warn('IntersectionManager: no callback found in map for element!');
            return;
          } // we invoke the callback and then make sure we remove this element from contention


          mapCallback();

          _this.instanceObserver.unobserve(entry.target);

          _this.elementMapping.delete(entry.target);
        }
      });
    }
  }, {
    key: "addElement",
    value: function addElement(element, callback) {
      if (this.elementMapping.has(element)) {
        console.warn('IntersectionManager: element already exists in the mapping cant re add !!');
        return;
      }

      this.elementMapping.set(element, callback);
      this.instanceObserver.observe(element);
    }
  }]);

  return IntersectionManager;
}();

_defineProperty(IntersectionManager, "INTERSECTION_CONFIG", {
  rootMargin: '0px 0px 0px 0px',
  threshold: 0.1
});

/* harmony default export */ var GlobalIntersectionObserver = (new IntersectionManager());
// CONCATENATED MODULE: ./src/component/Container/LazyComponent/LazyComponent.js
function LazyComponent_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { LazyComponent_typeof = function _typeof(obj) { return typeof obj; }; } else { LazyComponent_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return LazyComponent_typeof(obj); }

function LazyComponent_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function LazyComponent_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function LazyComponent_createClass(Constructor, protoProps, staticProps) { if (protoProps) LazyComponent_defineProperties(Constructor.prototype, protoProps); if (staticProps) LazyComponent_defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (LazyComponent_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var LazyComponent_LazyComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LazyComponent, _React$Component);

  function LazyComponent(props) {
    var _this;

    LazyComponent_classCallCheck(this, LazyComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LazyComponent).call(this, props));
    _this.state = {
      visible: false
    };
    return _this;
  }

  LazyComponent_createClass(LazyComponent, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react["createElement"]("div", {
        className: this.props.className,
        ref: function ref(el) {
          return _this2.onRef(el);
        }
      }, this.state.visible ? this.props.children : []);
    }
  }, {
    key: "onBecomesVisible",
    value: function onBecomesVisible() {
      if (this.state.visible) {
        return;
      }

      this.setState(function () {
        return {
          visible: true
        };
      });
    }
  }, {
    key: "onRef",
    value: function onRef(element) {
      if (!element) {
        return;
      }

      GlobalIntersectionObserver.addElement(element, this.onBecomesVisible.bind(this));
    }
  }]);

  return LazyComponent;
}(react["Component"]);
// EXTERNAL MODULE: ./src/component/Container/LazyImage/LazyImage.scss
var LazyImage_LazyImage = __webpack_require__(12);
var LazyImage_default = /*#__PURE__*/__webpack_require__.n(LazyImage_LazyImage);

// CONCATENATED MODULE: ./src/component/Container/LazyImage/LazyImage.js
function LazyImage_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { LazyImage_typeof = function _typeof(obj) { return typeof obj; }; } else { LazyImage_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return LazyImage_typeof(obj); }

function LazyImage_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function LazyImage_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function LazyImage_createClass(Constructor, protoProps, staticProps) { if (protoProps) LazyImage_defineProperties(Constructor.prototype, protoProps); if (staticProps) LazyImage_defineProperties(Constructor, staticProps); return Constructor; }

function LazyImage_possibleConstructorReturn(self, call) { if (call && (LazyImage_typeof(call) === "object" || typeof call === "function")) { return call; } return LazyImage_assertThisInitialized(self); }

function LazyImage_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function LazyImage_getPrototypeOf(o) { LazyImage_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return LazyImage_getPrototypeOf(o); }

function LazyImage_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) LazyImage_setPrototypeOf(subClass, superClass); }

function LazyImage_setPrototypeOf(o, p) { LazyImage_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return LazyImage_setPrototypeOf(o, p); }






var LazyImage_LazyImage_LazyImage =
/*#__PURE__*/
function (_React$Component) {
  LazyImage_inherits(LazyImage, _React$Component);

  function LazyImage(props) {
    var _this;

    LazyImage_classCallCheck(this, LazyImage);

    _this = LazyImage_possibleConstructorReturn(this, LazyImage_getPrototypeOf(LazyImage).call(this, props));
    _this.state = {
      imageLoaded: false
    };
    return _this;
  }

  LazyImage_createClass(LazyImage, [{
    key: "onLoad",
    value: function onLoad() {
      this.setState(function () {
        return {
          imageLoaded: true
        };
      });
    }
  }, {
    key: "onError",
    value: function onError() {
      this.setState(function () {
        return {
          imageLoaded: false
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react_default.a.createElement("div", {
        className: LazyImage_default.a.lazy_image
      }, react_default.a.createElement(LazyComponent_LazyComponent, {
        className: LazyImage_default.a.lazy_image__wrapper
      }, react_default.a.createElement(Placeholder_Placeholder_Placeholder, {
        className: this.state.imageLoaded ? 'placeholder--hidden' : 'placeholder--visible'
      }), react_default.a.createElement(Image_Image_Image, {
        url: this.props.url,
        alt: this.props.alt,
        onLoad: function onLoad() {
          return _this2.onLoad();
        },
        onError: function onError() {
          return _this2.onError();
        },
        className: this.state.imageLoaded ? 'image--visible' : 'image--hidden'
      })));
    }
  }]);

  return LazyImage;
}(react_default.a.Component);
// EXTERNAL MODULE: ./src/component/Presentation/AlbumCover/AlbumCover.scss
var AlbumCover_AlbumCover = __webpack_require__(3);
var AlbumCover_default = /*#__PURE__*/__webpack_require__.n(AlbumCover_AlbumCover);

// CONCATENATED MODULE: ./src/util/TimeAgo.js
var ONE_MIN = 60 * 1000;
var ONE_HOUR = ONE_MIN * 60;
var ONE_DAY = ONE_HOUR * 24;
var ONE_WEEK = ONE_DAY * 7;
var ONE_MONTH = ONE_WEEK * 4;
var ONE_YEAR = ONE_DAY * 365;
var TIME_DIVISIONS = [{
  value: ONE_YEAR,
  formatters: {
    singular: function singular() {
      return "a year ago";
    },
    plural: function plural(c) {
      return "".concat(c, " years ago");
    }
  }
}, {
  value: ONE_MONTH,
  formatters: {
    singular: function singular() {
      return "a month ago";
    },
    plural: function plural(c) {
      return "".concat(c, " months ago");
    }
  }
}, {
  value: ONE_WEEK,
  formatters: {
    singular: function singular() {
      return "a week ago";
    },
    plural: function plural(c) {
      return "".concat(c, " weeks ago");
    }
  }
}, {
  value: ONE_DAY,
  formatters: {
    singular: function singular() {
      return "a day ago";
    },
    plural: function plural(c) {
      return "".concat(c, " days ago");
    }
  }
}, {
  value: ONE_HOUR,
  formatters: {
    singular: function singular() {
      return "an hour ago";
    },
    plural: function plural(c) {
      return "".concat(c, " hours ago");
    }
  }
}, {
  value: ONE_MIN,
  formatters: {
    singular: function singular() {
      return "a min ago";
    },
    plural: function plural(c) {
      return "".concat(c, " mins ago");
    }
  }
}];
function timeAgo(referenceTime, targetTime) {
  if (referenceTime < targetTime) {
    console.warn('Time Ago: Reference time must be after target time');
    return '';
  }

  var timeDelta = referenceTime - targetTime;

  for (var _count = 0; _count < TIME_DIVISIONS.length; _count++) {
    var division = TIME_DIVISIONS[_count];

    if (timeDelta >= division.value) {
      var divCount = Math.floor(timeDelta / division.value);
      return divCount === 1 ? division.formatters.singular(divCount) : division.formatters.plural(divCount);
    }
  }

  return '';
}
// EXTERNAL MODULE: ./src/component/Presentation/AlbumSongList/AlbumSongList.scss
var AlbumSongList_AlbumSongList = __webpack_require__(13);
var AlbumSongList_default = /*#__PURE__*/__webpack_require__.n(AlbumSongList_AlbumSongList);

// EXTERNAL MODULE: ./src/component/Presentation/AlbumSongList/Song.scss
var Song = __webpack_require__(2);
var Song_default = /*#__PURE__*/__webpack_require__.n(Song);

// EXTERNAL MODULE: ./node_modules/react-svg-inline/lib/index.js
var lib = __webpack_require__(7);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// EXTERNAL MODULE: ./src/svg/play.svg
var play = __webpack_require__(8);
var play_default = /*#__PURE__*/__webpack_require__.n(play);

// CONCATENATED MODULE: ./src/util/DurationFormatter.js
var TIME_DIVISORS = [3600, 60, 1];
function durationFormatter(durationSecs) {
  if (durationSecs === 0) {
    return '00:00';
  }

  var secsTotal = durationSecs;
  var vals = [];
  TIME_DIVISORS.forEach(function (divisor, ix) {
    var division = Math.floor(secsTotal / divisor);
    var delta = divisor * division;
    var newVal = secsTotal - delta;
    secsTotal = newVal;

    if (ix === 0 && delta === 0) {
      return;
    }

    var divString = division.toString();
    vals.push(divString.length === 1 ? "0".concat(divString) : divString);
  });
  return vals.join(':');
}
// CONCATENATED MODULE: ./src/component/Presentation/AlbumSongList/AlbumSongList.js






var AlbumSongList_AlbumSongList_AlbumSongList = function AlbumSongList(props) {
  return react_default.a.createElement("ul", {
    className: "".concat(AlbumSongList_default.a['album-song-list'], " ").concat(AlbumSongList_default.a[props.className])
  }, props.songs.map(function (song) {
    return react_default.a.createElement("li", {
      key: song.id,
      className: Song_default.a.song
    }, react_default.a.createElement("a", {
      className: Song_default.a.song__link,
      href: song.url,
      target: "_blank",
      rel: "noopener noreferrer"
    }, react_default.a.createElement("div", {
      className: Song_default.a.song__header
    }, react_default.a.createElement("div", {
      className: Song_default.a.song__play_icon
    }, react_default.a.createElement(lib_default.a, {
      svg: play_default.a
    })), react_default.a.createElement("span", {
      className: Song_default.a.song__heading
    }, song.title)), react_default.a.createElement("div", {
      className: Song_default.a.song__meta
    }, react_default.a.createElement("span", {
      className: Song_default.a.song__meta_text
    }, song.artists.map(function (a) {
      return a.name;
    }).join(', ')), react_default.a.createElement("div", {
      className: Song_default.a.song__dot
    }), react_default.a.createElement("span", {
      className: Song_default.a.song__meta_text
    }, durationFormatter(song.duration)), song.explicit ? react_default.a.createElement("div", {
      className: Song_default.a.song__dot
    }) : '', song.explicit ? react_default.a.createElement("span", {
      className: Song_default.a.song__explicit
    }, "E") : '')));
  }));
};
// EXTERNAL MODULE: ./src/svg/heart.svg
var heart = __webpack_require__(15);
var heart_default = /*#__PURE__*/__webpack_require__.n(heart);

// CONCATENATED MODULE: ./src/component/Presentation/AlbumCover/AlbumCover.js







var AlbumCover_AlbumCover_AlbumCover = function AlbumCover(props) {
  var now = new Date().getTime();
  return react_default.a.createElement("div", {
    className: "".concat(AlbumCover_default.a.album_cover, " ").concat(props.listVisible ? AlbumCover_default.a['album_cover--dark-gradient'] : ''),
    onMouseEnter: function onMouseEnter() {
      return props.onMouseEnter();
    },
    onMouseLeave: function onMouseLeave() {
      return props.onMouseLeave();
    }
  }, react_default.a.createElement(LazyImage_LazyImage_LazyImage, {
    url: props.album.imageUrl,
    alt: "Album for ".concat(props.album.title)
  }), react_default.a.createElement("div", {
    className: "".concat(AlbumCover_default.a.album_cover__meta, " ").concat(props.listVisible ? AlbumCover_default.a['album_cover__meta--show-list'] : '')
  }, react_default.a.createElement("div", {
    className: AlbumCover_default.a.album_cover__meta_wrap
  }, react_default.a.createElement("div", {
    className: AlbumCover_default.a.album_cover__meta_top
  }, react_default.a.createElement(lib_default.a, {
    svg: heart_default.a
  }), react_default.a.createElement("span", {
    className: AlbumCover_default.a.album_cover__track_count
  }, props.album.songs.length === 1 ? '1 Track' : "".concat(props.album.songs.length, " Tracks")), react_default.a.createElement("span", {
    className: AlbumCover_default.a.album_cover__timestamp
  }, timeAgo(now, new Date(props.album.lastUpdated).getTime()))), react_default.a.createElement("span", {
    className: AlbumCover_default.a.album_cover__title
  }, props.album.title), react_default.a.createElement("ul", {
    className: AlbumCover_default.a.album_cover__artists
  }, props.album.artists.map(function (artist) {
    return react_default.a.createElement("li", {
      key: artist.id
    }, artist.name);
  }))), react_default.a.createElement(AlbumSongList_AlbumSongList_AlbumSongList, {
    songs: props.album.songs,
    className: props.listVisible ? 'album-song-list--show' : ''
  })));
};
// EXTERNAL MODULE: ./src/component/Container/AlbumItem/AlbumItem.scss
var AlbumItem_AlbumItem = __webpack_require__(16);
var AlbumItem_default = /*#__PURE__*/__webpack_require__.n(AlbumItem_AlbumItem);

// CONCATENATED MODULE: ./src/component/Container/AlbumItem/AlbumItem.js
function AlbumItem_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { AlbumItem_typeof = function _typeof(obj) { return typeof obj; }; } else { AlbumItem_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return AlbumItem_typeof(obj); }

function AlbumItem_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function AlbumItem_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function AlbumItem_createClass(Constructor, protoProps, staticProps) { if (protoProps) AlbumItem_defineProperties(Constructor.prototype, protoProps); if (staticProps) AlbumItem_defineProperties(Constructor, staticProps); return Constructor; }

function AlbumItem_possibleConstructorReturn(self, call) { if (call && (AlbumItem_typeof(call) === "object" || typeof call === "function")) { return call; } return AlbumItem_assertThisInitialized(self); }

function AlbumItem_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function AlbumItem_getPrototypeOf(o) { AlbumItem_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return AlbumItem_getPrototypeOf(o); }

function AlbumItem_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) AlbumItem_setPrototypeOf(subClass, superClass); }

function AlbumItem_setPrototypeOf(o, p) { AlbumItem_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return AlbumItem_setPrototypeOf(o, p); }




var AlbumItem_AlbumItem_AlbumItem =
/*#__PURE__*/
function (_React$Component) {
  AlbumItem_inherits(AlbumItem, _React$Component);

  function AlbumItem(props) {
    var _this;

    AlbumItem_classCallCheck(this, AlbumItem);

    _this = AlbumItem_possibleConstructorReturn(this, AlbumItem_getPrototypeOf(AlbumItem).call(this, props));
    _this.state = {
      listVisible: false
    };
    return _this;
  }

  AlbumItem_createClass(AlbumItem, [{
    key: "mouseEnteredAlbumCover",
    value: function mouseEnteredAlbumCover() {
      this.setState(function () {
        return {
          listVisible: true
        };
      });
    }
  }, {
    key: "mouseLeftAlbumCover",
    value: function mouseLeftAlbumCover() {
      this.setState(function () {
        return {
          listVisible: false
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react_default.a.createElement("div", {
        className: AlbumItem_default.a['album-item'],
        ref: this.props.setRef
      }, react_default.a.createElement(AlbumCover_AlbumCover_AlbumCover, {
        className: "",
        listVisible: this.state.listVisible,
        album: this.props.model,
        onMouseEnter: function onMouseEnter() {
          return _this2.mouseEnteredAlbumCover();
        },
        onMouseLeave: function onMouseLeave() {
          return _this2.mouseLeftAlbumCover();
        }
      }));
    }
  }]);

  return AlbumItem;
}(react_default.a.Component);
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/PropTypes.js

var subscriptionShape = prop_types_default.a.shape({
  trySubscribe: prop_types_default.a.func.isRequired,
  tryUnsubscribe: prop_types_default.a.func.isRequired,
  notifyNestedSubs: prop_types_default.a.func.isRequired,
  isSubscribed: prop_types_default.a.func.isRequired
});
var storeShape = prop_types_default.a.shape({
  subscribe: prop_types_default.a.func.isRequired,
  dispatch: prop_types_default.a.func.isRequired,
  getState: prop_types_default.a.func.isRequired
});
// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/warning.js
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */

}
// CONCATENATED MODULE: ./node_modules/react-redux/es/components/Provider.js





var didWarnAboutReceivingStore = false;

function warnAboutReceivingStore() {
  if (didWarnAboutReceivingStore) {
    return;
  }

  didWarnAboutReceivingStore = true;
  warning('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reduxjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
}

function createProvider(storeKey) {
  var _Provider$childContex;

  if (storeKey === void 0) {
    storeKey = 'store';
  }

  var subscriptionKey = storeKey + "Subscription";

  var Provider =
  /*#__PURE__*/
  function (_Component) {
    _inheritsLoose(Provider, _Component);

    var _proto = Provider.prototype;

    _proto.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[storeKey] = this[storeKey], _ref[subscriptionKey] = null, _ref;
    };

    function Provider(props, context) {
      var _this;

      _this = _Component.call(this, props, context) || this;
      _this[storeKey] = props.store;
      return _this;
    }

    _proto.render = function render() {
      return react["Children"].only(this.props.children);
    };

    return Provider;
  }(react["Component"]);

  if (false) {}

  Provider.propTypes = {
    store: storeShape.isRequired,
    children: prop_types_default.a.element.isRequired
  };
  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[storeKey] = storeShape.isRequired, _Provider$childContex[subscriptionKey] = subscriptionShape, _Provider$childContex);
  return Provider;
}
/* harmony default export */ var components_Provider = (createProvider());
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function assertThisInitialized_assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
// EXTERNAL MODULE: ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var hoist_non_react_statics_cjs = __webpack_require__(17);
var hoist_non_react_statics_cjs_default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics_cjs);

// EXTERNAL MODULE: ./node_modules/invariant/browser.js
var browser = __webpack_require__(9);
var browser_default = /*#__PURE__*/__webpack_require__.n(browser);

// EXTERNAL MODULE: ./node_modules/react-redux/node_modules/react-is/index.js
var react_is = __webpack_require__(18);

// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/Subscription.js
// encapsulates the subscription logic for connecting a component to the redux store, as
// well as nesting subscriptions of descendant components, so that we can ensure the
// ancestor components re-render before descendants
var CLEARED = null;
var nullListeners = {
  notify: function notify() {}
};

function createListenerCollection() {
  // the current/next pattern is copied from redux's createStore code.
  // TODO: refactor+expose that code to be reusable here?
  var current = [];
  var next = [];
  return {
    clear: function clear() {
      next = CLEARED;
      current = CLEARED;
    },
    notify: function notify() {
      var listeners = current = next;

      for (var i = 0; i < listeners.length; i++) {
        listeners[i]();
      }
    },
    get: function get() {
      return next;
    },
    subscribe: function subscribe(listener) {
      var isSubscribed = true;
      if (next === current) next = current.slice();
      next.push(listener);
      return function unsubscribe() {
        if (!isSubscribed || current === CLEARED) return;
        isSubscribed = false;
        if (next === current) next = current.slice();
        next.splice(next.indexOf(listener), 1);
      };
    }
  };
}

var Subscription =
/*#__PURE__*/
function () {
  function Subscription(store, parentSub, onStateChange) {
    this.store = store;
    this.parentSub = parentSub;
    this.onStateChange = onStateChange;
    this.unsubscribe = null;
    this.listeners = nullListeners;
  }

  var _proto = Subscription.prototype;

  _proto.addNestedSub = function addNestedSub(listener) {
    this.trySubscribe();
    return this.listeners.subscribe(listener);
  };

  _proto.notifyNestedSubs = function notifyNestedSubs() {
    this.listeners.notify();
  };

  _proto.isSubscribed = function isSubscribed() {
    return Boolean(this.unsubscribe);
  };

  _proto.trySubscribe = function trySubscribe() {
    if (!this.unsubscribe) {
      this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.onStateChange) : this.store.subscribe(this.onStateChange);
      this.listeners = createListenerCollection();
    }
  };

  _proto.tryUnsubscribe = function tryUnsubscribe() {
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
      this.listeners.clear();
      this.listeners = nullListeners;
    }
  };

  return Subscription;
}();


// CONCATENATED MODULE: ./node_modules/react-redux/es/components/connectAdvanced.js










var hotReloadingVersion = 0;
var dummyState = {};

function noop() {}

function makeSelectorStateful(sourceSelector, store) {
  // wrap the selector in an object that tracks its results between runs.
  var selector = {
    run: function runComponentSelector(props) {
      try {
        var nextProps = sourceSelector(store.getState(), props);

        if (nextProps !== selector.props || selector.error) {
          selector.shouldComponentUpdate = true;
          selector.props = nextProps;
          selector.error = null;
        }
      } catch (error) {
        selector.shouldComponentUpdate = true;
        selector.error = error;
      }
    }
  };
  return selector;
}

function connectAdvanced(
/*
  selectorFactory is a func that is responsible for returning the selector function used to
  compute new props from state, props, and dispatch. For example:
     export default connectAdvanced((dispatch, options) => (state, props) => ({
      thing: state.things[props.thingId],
      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
    }))(YourComponent)
   Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
   Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
  props. Do not use connectAdvanced directly without memoizing results between calls to your
  selector, otherwise the Connect component will re-render on every state or props change.
*/
selectorFactory, // options object:
_ref) {
  var _contextTypes, _childContextTypes;

  if (_ref === void 0) {
    _ref = {};
  }

  var _ref2 = _ref,
      _ref2$getDisplayName = _ref2.getDisplayName,
      getDisplayName = _ref2$getDisplayName === void 0 ? function (name) {
    return "ConnectAdvanced(" + name + ")";
  } : _ref2$getDisplayName,
      _ref2$methodName = _ref2.methodName,
      methodName = _ref2$methodName === void 0 ? 'connectAdvanced' : _ref2$methodName,
      _ref2$renderCountProp = _ref2.renderCountProp,
      renderCountProp = _ref2$renderCountProp === void 0 ? undefined : _ref2$renderCountProp,
      _ref2$shouldHandleSta = _ref2.shouldHandleStateChanges,
      shouldHandleStateChanges = _ref2$shouldHandleSta === void 0 ? true : _ref2$shouldHandleSta,
      _ref2$storeKey = _ref2.storeKey,
      storeKey = _ref2$storeKey === void 0 ? 'store' : _ref2$storeKey,
      _ref2$withRef = _ref2.withRef,
      withRef = _ref2$withRef === void 0 ? false : _ref2$withRef,
      connectOptions = _objectWithoutPropertiesLoose(_ref2, ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef"]);

  var subscriptionKey = storeKey + 'Subscription';
  var version = hotReloadingVersion++;
  var contextTypes = (_contextTypes = {}, _contextTypes[storeKey] = storeShape, _contextTypes[subscriptionKey] = subscriptionShape, _contextTypes);
  var childContextTypes = (_childContextTypes = {}, _childContextTypes[subscriptionKey] = subscriptionShape, _childContextTypes);
  return function wrapWithConnect(WrappedComponent) {
    browser_default()(Object(react_is["isValidElementType"])(WrappedComponent), "You must pass a component to the function returned by " + (methodName + ". Instead received " + JSON.stringify(WrappedComponent)));
    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
    var displayName = getDisplayName(wrappedComponentName);

    var selectorFactoryOptions = _extends({}, connectOptions, {
      getDisplayName: getDisplayName,
      methodName: methodName,
      renderCountProp: renderCountProp,
      shouldHandleStateChanges: shouldHandleStateChanges,
      storeKey: storeKey,
      withRef: withRef,
      displayName: displayName,
      wrappedComponentName: wrappedComponentName,
      WrappedComponent: WrappedComponent // TODO Actually fix our use of componentWillReceiveProps

      /* eslint-disable react/no-deprecated */

    });

    var Connect =
    /*#__PURE__*/
    function (_Component) {
      _inheritsLoose(Connect, _Component);

      function Connect(props, context) {
        var _this;

        _this = _Component.call(this, props, context) || this;
        _this.version = version;
        _this.state = {};
        _this.renderCount = 0;
        _this.store = props[storeKey] || context[storeKey];
        _this.propsMode = Boolean(props[storeKey]);
        _this.setWrappedInstance = _this.setWrappedInstance.bind(assertThisInitialized_assertThisInitialized(assertThisInitialized_assertThisInitialized(_this)));
        browser_default()(_this.store, "Could not find \"" + storeKey + "\" in either the context or props of " + ("\"" + displayName + "\". Either wrap the root component in a <Provider>, ") + ("or explicitly pass \"" + storeKey + "\" as a prop to \"" + displayName + "\"."));

        _this.initSelector();

        _this.initSubscription();

        return _this;
      }

      var _proto = Connect.prototype;

      _proto.getChildContext = function getChildContext() {
        var _ref3;

        // If this component received store from props, its subscription should be transparent
        // to any descendants receiving store+subscription from context; it passes along
        // subscription passed to it. Otherwise, it shadows the parent subscription, which allows
        // Connect to control ordering of notifications to flow top-down.
        var subscription = this.propsMode ? null : this.subscription;
        return _ref3 = {}, _ref3[subscriptionKey] = subscription || this.context[subscriptionKey], _ref3;
      };

      _proto.componentDidMount = function componentDidMount() {
        if (!shouldHandleStateChanges) return; // componentWillMount fires during server side rendering, but componentDidMount and
        // componentWillUnmount do not. Because of this, trySubscribe happens during ...didMount.
        // Otherwise, unsubscription would never take place during SSR, causing a memory leak.
        // To handle the case where a child component may have triggered a state change by
        // dispatching an action in its componentWillMount, we have to re-run the select and maybe
        // re-render.

        this.subscription.trySubscribe();
        this.selector.run(this.props);
        if (this.selector.shouldComponentUpdate) this.forceUpdate();
      };

      _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        this.selector.run(nextProps);
      };

      _proto.shouldComponentUpdate = function shouldComponentUpdate() {
        return this.selector.shouldComponentUpdate;
      };

      _proto.componentWillUnmount = function componentWillUnmount() {
        if (this.subscription) this.subscription.tryUnsubscribe();
        this.subscription = null;
        this.notifyNestedSubs = noop;
        this.store = null;
        this.selector.run = noop;
        this.selector.shouldComponentUpdate = false;
      };

      _proto.getWrappedInstance = function getWrappedInstance() {
        browser_default()(withRef, "To access the wrapped instance, you need to specify " + ("{ withRef: true } in the options argument of the " + methodName + "() call."));
        return this.wrappedInstance;
      };

      _proto.setWrappedInstance = function setWrappedInstance(ref) {
        this.wrappedInstance = ref;
      };

      _proto.initSelector = function initSelector() {
        var sourceSelector = selectorFactory(this.store.dispatch, selectorFactoryOptions);
        this.selector = makeSelectorStateful(sourceSelector, this.store);
        this.selector.run(this.props);
      };

      _proto.initSubscription = function initSubscription() {
        if (!shouldHandleStateChanges) return; // parentSub's source should match where store came from: props vs. context. A component
        // connected to the store via props shouldn't use subscription from context, or vice versa.

        var parentSub = (this.propsMode ? this.props : this.context)[subscriptionKey];
        this.subscription = new Subscription(this.store, parentSub, this.onStateChange.bind(this)); // `notifyNestedSubs` is duplicated to handle the case where the component is unmounted in
        // the middle of the notification loop, where `this.subscription` will then be null. An
        // extra null check every change can be avoided by copying the method onto `this` and then
        // replacing it with a no-op on unmount. This can probably be avoided if Subscription's
        // listeners logic is changed to not call listeners that have been unsubscribed in the
        // middle of the notification loop.

        this.notifyNestedSubs = this.subscription.notifyNestedSubs.bind(this.subscription);
      };

      _proto.onStateChange = function onStateChange() {
        this.selector.run(this.props);

        if (!this.selector.shouldComponentUpdate) {
          this.notifyNestedSubs();
        } else {
          this.componentDidUpdate = this.notifyNestedSubsOnComponentDidUpdate;
          this.setState(dummyState);
        }
      };

      _proto.notifyNestedSubsOnComponentDidUpdate = function notifyNestedSubsOnComponentDidUpdate() {
        // `componentDidUpdate` is conditionally implemented when `onStateChange` determines it
        // needs to notify nested subs. Once called, it unimplements itself until further state
        // changes occur. Doing it this way vs having a permanent `componentDidUpdate` that does
        // a boolean check every time avoids an extra method call most of the time, resulting
        // in some perf boost.
        this.componentDidUpdate = undefined;
        this.notifyNestedSubs();
      };

      _proto.isSubscribed = function isSubscribed() {
        return Boolean(this.subscription) && this.subscription.isSubscribed();
      };

      _proto.addExtraProps = function addExtraProps(props) {
        if (!withRef && !renderCountProp && !(this.propsMode && this.subscription)) return props; // make a shallow copy so that fields added don't leak to the original selector.
        // this is especially important for 'ref' since that's a reference back to the component
        // instance. a singleton memoized selector would then be holding a reference to the
        // instance, preventing the instance from being garbage collected, and that would be bad

        var withExtras = _extends({}, props);

        if (withRef) withExtras.ref = this.setWrappedInstance;
        if (renderCountProp) withExtras[renderCountProp] = this.renderCount++;
        if (this.propsMode && this.subscription) withExtras[subscriptionKey] = this.subscription;
        return withExtras;
      };

      _proto.render = function render() {
        var selector = this.selector;
        selector.shouldComponentUpdate = false;

        if (selector.error) {
          throw selector.error;
        } else {
          return Object(react["createElement"])(WrappedComponent, this.addExtraProps(selector.props));
        }
      };

      return Connect;
    }(react["Component"]);
    /* eslint-enable react/no-deprecated */


    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = displayName;
    Connect.childContextTypes = childContextTypes;
    Connect.contextTypes = contextTypes;
    Connect.propTypes = contextTypes;

    if (false) {}

    return hoist_non_react_statics_cjs_default()(Connect, WrappedComponent);
  };
}
// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/shallowEqual.js
var hasOwn = Object.prototype.hasOwnProperty;

function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function shallowEqual(objA, objB) {
  if (is(objA, objB)) return true;

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) return false;

  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwn.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}
// EXTERNAL MODULE: ./node_modules/symbol-observable/es/index.js
var es = __webpack_require__(14);

// CONCATENATED MODULE: ./node_modules/redux/es/redux.js


/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */

function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error('It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function');
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    if (isDispatching) {
      throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected the listener to be a function.');
    }

    if (isDispatching) {
      throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer;
    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */


  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[es["a" /* default */]] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[es["a" /* default */]] = observable, _ref2;
}

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function redux_warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty

}

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionDescription = actionType && "action \"" + String(actionType) + "\"" || 'an action';
  return "Given " + actionDescription + ", reducer \"" + key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.";
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return "The " + argumentName + " has unexpected type of \"" + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
    }

    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle " + ActionTypes.INIT + " or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */


function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (false) {}

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers);
  var unexpectedKeyCache;

  if (false) {}

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (false) { var warningMessage; }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass a single function as the first argument,
 * and get a function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */


function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error("bindActionCreators expected an object or a function, instead received " + (actionCreators === null ? 'null' : typeof actionCreators) + ". " + "Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
  }

  var keys = Object.keys(actionCreators);
  var boundActionCreators = {};

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }

  return boundActionCreators;
}

function redux_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      redux_defineProperty(target, key, source[key]);
    });
  }

  return target;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */

function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      var store = createStore.apply(void 0, arguments);

      var _dispatch = function dispatch() {
        throw new Error("Dispatching while constructing your middleware is not allowed. " + "Other middleware would not be applied to this dispatch.");
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return _objectSpread({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */

function isCrushed() {}

if (false) {}



// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/isPlainObject.js
/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject_isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}
// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/verifyPlainObject.js


function verifyPlainObject(value, displayName, methodName) {
  if (!isPlainObject_isPlainObject(value)) {
    warning(methodName + "() in " + displayName + " must return a plain object. Instead received " + value + ".");
  }
}
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/wrapMapToProps.js

function wrapMapToPropsConstant(getConstant) {
  return function initConstantSelector(dispatch, options) {
    var constant = getConstant(dispatch, options);

    function constantSelector() {
      return constant;
    }

    constantSelector.dependsOnOwnProps = false;
    return constantSelector;
  };
} // dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
// whether mapToProps needs to be invoked when props have changed.
// 
// A length of one signals that mapToProps does not depend on props from the parent component.
// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
// therefore not reporting its length accurately..

function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
} // Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
// this function wraps mapToProps in a proxy function which does several things:
// 
//  * Detects whether the mapToProps function being called depends on props, which
//    is used by selectorFactory to decide if it should reinvoke on props changes.
//    
//  * On first call, handles mapToProps if returns another function, and treats that
//    new function as the true mapToProps for subsequent calls.
//    
//  * On first call, verifies the first result is a plain object, in order to warn
//    the developer that their mapToProps function is not returning a valid result.
//    

function wrapMapToPropsFunc(mapToProps, methodName) {
  return function initProxySelector(dispatch, _ref) {
    var displayName = _ref.displayName;

    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
    }; // allow detectFactoryAndVerify to get ownProps


    proxy.dependsOnOwnProps = true;

    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
      proxy.mapToProps = mapToProps;
      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
      var props = proxy(stateOrDispatch, ownProps);

      if (typeof props === 'function') {
        proxy.mapToProps = props;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
        props = proxy(stateOrDispatch, ownProps);
      }

      if (false) {}
      return props;
    };

    return proxy;
  };
}
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/mapDispatchToProps.js


function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
  return typeof mapDispatchToProps === 'function' ? wrapMapToPropsFunc(mapDispatchToProps, 'mapDispatchToProps') : undefined;
}
function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
  return !mapDispatchToProps ? wrapMapToPropsConstant(function (dispatch) {
    return {
      dispatch: dispatch
    };
  }) : undefined;
}
function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? wrapMapToPropsConstant(function (dispatch) {
    return bindActionCreators(mapDispatchToProps, dispatch);
  }) : undefined;
}
/* harmony default export */ var connect_mapDispatchToProps = ([whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject]);
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/mapStateToProps.js

function whenMapStateToPropsIsFunction(mapStateToProps) {
  return typeof mapStateToProps === 'function' ? wrapMapToPropsFunc(mapStateToProps, 'mapStateToProps') : undefined;
}
function whenMapStateToPropsIsMissing(mapStateToProps) {
  return !mapStateToProps ? wrapMapToPropsConstant(function () {
    return {};
  }) : undefined;
}
/* harmony default export */ var connect_mapStateToProps = ([whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing]);
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/mergeProps.js


function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  return _extends({}, ownProps, stateProps, dispatchProps);
}
function wrapMergePropsFunc(mergeProps) {
  return function initMergePropsProxy(dispatch, _ref) {
    var displayName = _ref.displayName,
        pure = _ref.pure,
        areMergedPropsEqual = _ref.areMergedPropsEqual;
    var hasRunOnce = false;
    var mergedProps;
    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);

      if (hasRunOnce) {
        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
      } else {
        hasRunOnce = true;
        mergedProps = nextMergedProps;
        if (false) {}
      }

      return mergedProps;
    };
  };
}
function whenMergePropsIsFunction(mergeProps) {
  return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
}
function whenMergePropsIsOmitted(mergeProps) {
  return !mergeProps ? function () {
    return defaultMergeProps;
  } : undefined;
}
/* harmony default export */ var connect_mergeProps = ([whenMergePropsIsFunction, whenMergePropsIsOmitted]);
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/verifySubselectors.js


function verify(selector, methodName, displayName) {
  if (!selector) {
    throw new Error("Unexpected value for " + methodName + " in " + displayName + ".");
  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
    if (!selector.hasOwnProperty('dependsOnOwnProps')) {
      warning("The selector for " + methodName + " of " + displayName + " did not specify a value for dependsOnOwnProps.");
    }
  }
}

function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
  verify(mapStateToProps, 'mapStateToProps', displayName);
  verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
  verify(mergeProps, 'mergeProps', displayName);
}
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/selectorFactory.js


function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
  return function impureFinalPropsSelector(state, ownProps) {
    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
  };
}
function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
  var areStatesEqual = _ref.areStatesEqual,
      areOwnPropsEqual = _ref.areOwnPropsEqual,
      areStatePropsEqual = _ref.areStatePropsEqual;
  var hasRunAtLeastOnce = false;
  var state;
  var ownProps;
  var stateProps;
  var dispatchProps;
  var mergedProps;

  function handleFirstCall(firstState, firstOwnProps) {
    state = firstState;
    ownProps = firstOwnProps;
    stateProps = mapStateToProps(state, ownProps);
    dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    hasRunAtLeastOnce = true;
    return mergedProps;
  }

  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewState() {
    var nextStateProps = mapStateToProps(state, ownProps);
    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
    stateProps = nextStateProps;
    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleSubsequentCalls(nextState, nextOwnProps) {
    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
    var stateChanged = !areStatesEqual(nextState, state);
    state = nextState;
    ownProps = nextOwnProps;
    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
    if (propsChanged) return handleNewProps();
    if (stateChanged) return handleNewState();
    return mergedProps;
  }

  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
  };
} // TODO: Add more comments
// If pure is true, the selector returned by selectorFactory will memoize its results,
// allowing connectAdvanced's shouldComponentUpdate to return false if final
// props have not changed. If false, the selector will always return a new
// object and shouldComponentUpdate will always return true.

function finalPropsSelectorFactory(dispatch, _ref2) {
  var initMapStateToProps = _ref2.initMapStateToProps,
      initMapDispatchToProps = _ref2.initMapDispatchToProps,
      initMergeProps = _ref2.initMergeProps,
      options = _objectWithoutPropertiesLoose(_ref2, ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"]);

  var mapStateToProps = initMapStateToProps(dispatch, options);
  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
  var mergeProps = initMergeProps(dispatch, options);

  if (false) {}

  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;
  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/connect.js








/*
  connect is a facade over connectAdvanced. It turns its args into a compatible
  selectorFactory, which has the signature:

    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
  
  connect passes its args to connectAdvanced as options, which will in turn pass them to
  selectorFactory each time a Connect component instance is instantiated or hot reloaded.

  selectorFactory returns a final props selector from its mapStateToProps,
  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
  mergePropsFactories, and pure args.

  The resulting final props selector is called by the Connect component instance whenever
  it receives new props or store state.
 */

function match(arg, factories, name) {
  for (var i = factories.length - 1; i >= 0; i--) {
    var result = factories[i](arg);
    if (result) return result;
  }

  return function (dispatch, options) {
    throw new Error("Invalid value of type " + typeof arg + " for " + name + " argument when connecting component " + options.wrappedComponentName + ".");
  };
}

function strictEqual(a, b) {
  return a === b;
} // createConnect with default args builds the 'official' connect behavior. Calling it with
// different options opens up some testing and extensibility scenarios


function createConnect(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$connectHOC = _ref.connectHOC,
      connectHOC = _ref$connectHOC === void 0 ? connectAdvanced : _ref$connectHOC,
      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
      mapStateToPropsFactories = _ref$mapStateToPropsF === void 0 ? connect_mapStateToProps : _ref$mapStateToPropsF,
      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
      mapDispatchToPropsFactories = _ref$mapDispatchToPro === void 0 ? connect_mapDispatchToProps : _ref$mapDispatchToPro,
      _ref$mergePropsFactor = _ref.mergePropsFactories,
      mergePropsFactories = _ref$mergePropsFactor === void 0 ? connect_mergeProps : _ref$mergePropsFactor,
      _ref$selectorFactory = _ref.selectorFactory,
      selectorFactory = _ref$selectorFactory === void 0 ? finalPropsSelectorFactory : _ref$selectorFactory;

  return function connect(mapStateToProps, mapDispatchToProps, mergeProps, _ref2) {
    if (_ref2 === void 0) {
      _ref2 = {};
    }

    var _ref3 = _ref2,
        _ref3$pure = _ref3.pure,
        pure = _ref3$pure === void 0 ? true : _ref3$pure,
        _ref3$areStatesEqual = _ref3.areStatesEqual,
        areStatesEqual = _ref3$areStatesEqual === void 0 ? strictEqual : _ref3$areStatesEqual,
        _ref3$areOwnPropsEqua = _ref3.areOwnPropsEqual,
        areOwnPropsEqual = _ref3$areOwnPropsEqua === void 0 ? shallowEqual : _ref3$areOwnPropsEqua,
        _ref3$areStatePropsEq = _ref3.areStatePropsEqual,
        areStatePropsEqual = _ref3$areStatePropsEq === void 0 ? shallowEqual : _ref3$areStatePropsEq,
        _ref3$areMergedPropsE = _ref3.areMergedPropsEqual,
        areMergedPropsEqual = _ref3$areMergedPropsE === void 0 ? shallowEqual : _ref3$areMergedPropsE,
        extraOptions = _objectWithoutPropertiesLoose(_ref3, ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"]);

    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
    var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
    var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');
    return connectHOC(selectorFactory, _extends({
      // used in error messages
      methodName: 'connect',
      // used to compute Connect's displayName from the wrapped component's displayName.
      getDisplayName: function getDisplayName(name) {
        return "Connect(" + name + ")";
      },
      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
      shouldHandleStateChanges: Boolean(mapStateToProps),
      // passed through to selectorFactory
      initMapStateToProps: initMapStateToProps,
      initMapDispatchToProps: initMapDispatchToProps,
      initMergeProps: initMergeProps,
      pure: pure,
      areStatesEqual: areStatesEqual,
      areOwnPropsEqual: areOwnPropsEqual,
      areStatePropsEqual: areStatePropsEqual,
      areMergedPropsEqual: areMergedPropsEqual
    }, extraOptions));
  };
}
/* harmony default export */ var connect_connect = (createConnect());
// CONCATENATED MODULE: ./node_modules/react-redux/es/index.js




// CONCATENATED MODULE: ./src/component/Presentation/Button/Button.js

var Button_Button = function Button(props) {
  return react["createElement"]("button", {
    className: props.className,
    disabled: props.disabled,
    onClick: props.callback,
    type: "button"
  }, props.children);
};
// CONCATENATED MODULE: ./src/util/Debounce.js
function debounceFunction(callback) {
  var bounceMs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  var timeout;
  return function () {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(callback, bounceMs);
  };
}
// EXTERNAL MODULE: ./src/component/Container/SliderComponent/Slider.scss
var Slider = __webpack_require__(6);
var Slider_default = /*#__PURE__*/__webpack_require__.n(Slider);

// CONCATENATED MODULE: ./src/component/Container/SliderComponent/SliderComponent.js
function SliderComponent_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { SliderComponent_typeof = function _typeof(obj) { return typeof obj; }; } else { SliderComponent_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return SliderComponent_typeof(obj); }

function SliderComponent_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { SliderComponent_defineProperty(target, key, source[key]); }); } return target; }

function SliderComponent_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function SliderComponent_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function SliderComponent_createClass(Constructor, protoProps, staticProps) { if (protoProps) SliderComponent_defineProperties(Constructor.prototype, protoProps); if (staticProps) SliderComponent_defineProperties(Constructor, staticProps); return Constructor; }

function SliderComponent_possibleConstructorReturn(self, call) { if (call && (SliderComponent_typeof(call) === "object" || typeof call === "function")) { return call; } return SliderComponent_assertThisInitialized(self); }

function SliderComponent_getPrototypeOf(o) { SliderComponent_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return SliderComponent_getPrototypeOf(o); }

function SliderComponent_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) SliderComponent_setPrototypeOf(subClass, superClass); }

function SliderComponent_setPrototypeOf(o, p) { SliderComponent_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return SliderComponent_setPrototypeOf(o, p); }

function SliderComponent_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function SliderComponent_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var SliderComponent_createSliderComponent = function createSliderComponent(stateProperty, fetchAction, transformFunction, ItemComponent) {
  var SliderComponent =
  /*#__PURE__*/
  function (_React$Component) {
    SliderComponent_inherits(SliderComponent, _React$Component);

    function SliderComponent(props) {
      var _this;

      SliderComponent_classCallCheck(this, SliderComponent);

      _this = SliderComponent_possibleConstructorReturn(this, SliderComponent_getPrototypeOf(SliderComponent).call(this, props));

      SliderComponent_defineProperty(SliderComponent_assertThisInitialized(SliderComponent_assertThisInitialized(_this)), "elements", []);

      SliderComponent_defineProperty(SliderComponent_assertThisInitialized(SliderComponent_assertThisInitialized(_this)), "container", void 0);

      SliderComponent_defineProperty(SliderComponent_assertThisInitialized(SliderComponent_assertThisInitialized(_this)), "pages", [0]);

      _this.state = {
        sliderPosition: 0,
        currentPageIndex: 0,
        initialised: false
      };
      return _this;
    }

    SliderComponent_createClass(SliderComponent, [{
      key: "getFullElWidth",
      value: function getFullElWidth(element) {
        var style = getComputedStyle(element);
        return element.getBoundingClientRect().width + parseInt(style.marginLeft) + parseInt(style.marginRight);
      }
    }, {
      key: "evaluatePages",
      value: function evaluatePages() {
        var _this2 = this;

        if (!this.container) {
          return;
        }

        this.pages = [0];
        var containerWidth = this.container.getBoundingClientRect().width;
        var runningTotal = 0;
        this.elements.forEach(function (element) {
          var elWidth = _this2.getFullElWidth(element);

          if (runningTotal + elWidth >= containerWidth) {
            // This is the start of the next page
            _this2.pages.push(element.offsetLeft);

            runningTotal = elWidth;
          } else {
            runningTotal += elWidth;
          }
        });
        this.setState(function (state) {
          return SliderComponent_objectSpread({}, state, {
            sliderPosition: _this2.pages[state.currentPageIndex]
          });
        });
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        if (!this.props.fetchData) {
          return;
        }

        this.props.fetchData();
        window.addEventListener('resize', debounceFunction(this.evaluatePages.bind(this)));
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        if (!this.state.initialised) {
          this.evaluatePages();
          this.setState(function (state) {
            return SliderComponent_objectSpread({}, state, {
              initialised: true
            });
          });
        }
      }
    }, {
      key: "onNextClicked",
      value: function onNextClicked() {
        var _this3 = this;

        this.setState(function (state) {
          return {
            sliderPosition: _this3.pages[state.currentPageIndex + 1],
            currentPageIndex: state.currentPageIndex + 1
          };
        });
      }
    }, {
      key: "onPreviousClicked",
      value: function onPreviousClicked() {
        var _this4 = this;

        this.setState(function (state) {
          return {
            sliderPosition: _this4.pages[state.currentPageIndex - 1],
            currentPageIndex: state.currentPageIndex - 1
          };
        });
      }
    }, {
      key: "registerElement",
      value: function registerElement(index, element) {
        if (!element) {
          return;
        }

        this.elements[index] = element;
      }
    }, {
      key: "render",
      value: function render() {
        var _this5 = this;

        return react_default.a.createElement("div", {
          className: Slider_default.a.slider
        }, react_default.a.createElement("div", {
          className: Slider_default.a.slider__wrapper
        }, react_default.a.createElement("div", {
          className: Slider_default.a.slider__list,
          style: {
            transform: "translateX( -".concat(this.state.sliderPosition, "px )")
          },
          ref: function ref(element) {
            _this5.container = element;
          }
        }, (this.props.itemList || []).map(function (item, ix) {
          return react_default.a.createElement(ItemComponent, {
            setRef: function setRef(element) {
              return _this5.registerElement(ix, element);
            },
            key: item.id,
            model: item
          });
        })), react_default.a.createElement(Button_Button, {
          className: "".concat(Slider_default.a.slider__button, " ").concat(Slider_default.a['slider__button--next']),
          disabled: this.state.currentPageIndex === this.pages.length - 1,
          text: "Next",
          callback: function callback() {
            return _this5.onNextClicked();
          }
        }, react_default.a.createElement(lib_default.a, {
          svg: play_default.a
        })), react_default.a.createElement(Button_Button, {
          className: "".concat(Slider_default.a.slider__button, " ").concat(Slider_default.a['slider__button--previous']),
          disabled: this.state.currentPageIndex === 0,
          text: "Previous",
          callback: function callback() {
            return _this5.onPreviousClicked();
          }
        }, react_default.a.createElement(lib_default.a, {
          svg: play_default.a
        }))));
      }
    }]);

    return SliderComponent;
  }(react_default.a.Component);

  var mapStateToProps = function mapStateToProps(state) {
    return {
      itemList: transformFunction(state[stateProperty])
    };
  };

  var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
      fetchData: function fetchData() {
        dispatch(fetchAction());
      }
    };
  };

  return connect_connect(mapStateToProps, mapDispatchToProps)(SliderComponent);
};
// CONCATENATED MODULE: ./src/component/Container/SliderComponent/TidalSlider.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TidalSlider", function() { return TidalSlider; });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function TidalSlider_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { TidalSlider_defineProperty(target, key, source[key]); }); } return target; }

function TidalSlider_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var getTidalImageUrl = function getTidalImageUrl(imageHash) {
  var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 640;
  var uuidPath = imageHash.split('-').join('/');
  return "https://resources.tidal.com/images/".concat(uuidPath, "/").concat(size.toString(), "x").concat(size.toString(), ".jpg");
};

var getTidalLink = function getTidalLink(id) {
  return "https://tidal.com/track/".concat(id);
};

var sanitizeTidalDate = function sanitizeTidalDate(dateString) {
  // get around parsing diffs in safari chrome and ffx
  return dateString.replace(/-/g, '/').replace('T', ' ').replace(/\.[0-9]+\+/, ' +');
};

var getAlbumModel = function getAlbumModel(tidalInfo) {
  return {
    lastUpdated: sanitizeTidalDate(tidalInfo.created),
    id: tidalInfo.album.id.toString(),
    title: tidalInfo.album.title,
    imageUrl: getTidalImageUrl(tidalInfo.album.cover),
    songs: [],
    artists: [getArtistModel(tidalInfo.artist)],
    url: getTidalLink(tidalInfo.id)
  };
};

var getSongModel = function getSongModel(tidalInfo) {
  return {
    id: tidalInfo.id.toString(),
    title: tidalInfo.title,
    artists: tidalInfo.artists.map(function (artist) {
      return getArtistModel(artist);
    }),
    url: getTidalLink(tidalInfo.id),
    explicit: tidalInfo.explicit,
    duration: tidalInfo.duration
  };
};

var getArtistModel = function getArtistModel(artist) {
  return {
    id: artist.id.toString(),
    name: artist.name
  };
};

var getAlbumList = function getAlbumList(tidalData) {
  if (!tidalData.items) {
    return [];
  }

  var albumMap = tidalData.items.reduce(function (mapping, wrapper) {
    var tidalItem = TidalSlider_objectSpread({}, wrapper.item, {
      created: wrapper.created
    });

    if (!mapping.has(tidalItem.album.id)) {
      // we are iterating in descending order, so the first time we encounter an album
      // is the last time it was updated
      mapping.set(tidalItem.album.id, getAlbumModel(tidalItem));
    }

    var val = mapping.get(tidalItem.album.id);

    if (val) {
      val.songs.push(getSongModel(tidalItem));
    }

    return mapping;
  }, new Map());
  return _toConsumableArray(albumMap.values());
};

var transform = function transform(data) {
  if (!data.items) {
    return [];
  }

  return getAlbumList(data);
};

var TidalSlider = SliderComponent_createSliderComponent('tidalData', tidalDataFetch, transform, AlbumItem_AlbumItem_AlbumItem);

/***/ })
/******/ ]);
//# sourceMappingURL=tidal-slider.js.map