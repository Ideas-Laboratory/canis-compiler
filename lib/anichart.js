(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("anichart", [], factory);
	else if(typeof exports === 'object')
		exports["anichart"] = factory();
	else
		root["anichart"] = factory();
})(window, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/jsmovin/bin/easing.js":
/*!********************************************!*\
  !*** ./node_modules/jsmovin/bin/easing.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EasingFactory = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var EasingFactory =
/*#__PURE__*/
function () {
  function EasingFactory() {
    _classCallCheck(this, EasingFactory);
  }

  _createClass(EasingFactory, null, [{
    key: "linear",
    value: function linear() {
      return [[[1], [1]], [[0], [0]]];
    }
  }]);

  return EasingFactory;
}();

exports.EasingFactory = EasingFactory;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lYXNpbmcudHMiXSwibmFtZXMiOlsiRWFzaW5nRmFjdG9yeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztJQUVhQSxhOzs7Ozs7Ozs7NkJBQ3VCO0FBQzVCLGFBQU8sQ0FBQyxDQUFDLENBQUMsQ0FBRCxDQUFELEVBQU0sQ0FBQyxDQUFELENBQU4sQ0FBRCxFQUFhLENBQUMsQ0FBQyxDQUFELENBQUQsRUFBTSxDQUFDLENBQUQsQ0FBTixDQUFiLENBQVA7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB0eXBlIEVhc2luZ0Z1bmN0aW9uID0gbnVtYmVyW11bXVtdXG5cbmV4cG9ydCBjbGFzcyBFYXNpbmdGYWN0b3J5IHtcbiAgICBzdGF0aWMgbGluZWFyKCk6IEVhc2luZ0Z1bmN0aW9uIHtcbiAgICAgICAgcmV0dXJuIFtbWzFdLCBbMV1dLCBbWzBdLCBbMF1dXVxuICAgIH1cbn0iXX0=

/***/ }),

/***/ "./node_modules/jsmovin/bin/jsmovin.js":
/*!*********************************************!*\
  !*** ./node_modules/jsmovin/bin/jsmovin.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "LayerFactory", {
  enumerable: true,
  get: function get() {
    return _layer.LayerFactory;
  }
});
Object.defineProperty(exports, "EasingFactory", {
  enumerable: true,
  get: function get() {
    return _easing.EasingFactory;
  }
});
exports.MaskType = exports["default"] = void 0;

var _layer = __webpack_require__(/*! ./layer */ "./node_modules/jsmovin/bin/layer.js");

var _easing = __webpack_require__(/*! ./easing */ "./node_modules/jsmovin/bin/easing.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var JSMovin =
/*#__PURE__*/
function () {
  /**
   * @param fps number of frames per second
   * @param width width of viewport (px)
   * @param height height of viewport (px)
   */
  function JSMovin() {
    var fps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 30;
    var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 800;
    var height = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 600;

    _classCallCheck(this, JSMovin);

    _defineProperty(this, "root", void 0);

    this.root = {
      fr: fps,
      w: width,
      h: height,
      ddd: 0,
      layers: [],
      assets: [],
      fonts: {
        list: []
      },
      ip: 0,
      op: 0
    };
  }
  /**
   * @param fps number of frames per second
   */


  _createClass(JSMovin, [{
    key: "setFrameRate",
    value: function setFrameRate(fps) {
      this.root.fr = fps;
    }
    /**
     * @param width width of viewport (px)
     * @param height height of viewport (px)
     */

  }, {
    key: "setViewport",
    value: function setViewport(width, height) {
      this.root.w = width;
      this.root.h = height;
    }
    /**
     * @param domOrLayer a SVG element DOM or JSMovinLayer needs to be inserted
     */

  }, {
    key: "addLayer",
    value: function addLayer(domOrLayer) {
      var layer;

      if (domOrLayer instanceof SVGGraphicsElement) {
        layer = _layer.LayerFactory.hierarchy(domOrLayer, this.root.assets, this.root.fonts);
      } else {
        layer = domOrLayer;
      }

      this.root.layers.push(layer.root);
      return layer;
    }
    /**
     * @param maskOrDom a SVG element DOM or JSMovinLayer to be the mask
     * @param layerRefOrIndex a JSMovinLayer or index of layer to be the masked layer
     * @param maskType which type of mask to use, use `MaskType.*` to specify
     */

  }, {
    key: "addMask",
    value: function addMask(maskOrDom, layerRefOrIndex) {
      var maskType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : MaskType.Alpha;
      var layerRef;
      var layerIndex;

      if (layerRefOrIndex instanceof _layer.JSMovinLayer) {
        layerRef = layerRefOrIndex;
        layerIndex = this.root.layers.indexOf(layerRef.root);
        layerRef.root.tt = maskType;
      } else {
        layerIndex = layerRefOrIndex;
        this.root.layers[layerIndex].tt = maskType;
      }

      if (layerIndex < 0) {
        throw new Error('Given layer is not a member of this JSMovin.');
      }

      var maskLayer;

      if (maskOrDom instanceof SVGGraphicsElement) {
        maskLayer = _layer.LayerFactory.hierarchy(maskOrDom, this.root.assets, this.root.fonts);
      } else {
        maskLayer = maskOrDom;
      }

      this.root.layers.splice(layerIndex, 0, maskLayer.root);
    }
    /**
     * @param layerRefOrIndex a JSMovinLayer or index of layer to remove
     */

  }, {
    key: "removeLayer",
    value: function removeLayer(layerRefOrIndex) {
      var layerRef;
      var layerIndex;

      if (layerRefOrIndex instanceof _layer.JSMovinLayer) {
        layerRef = layerRefOrIndex;
        layerIndex = this.root.layers.indexOf(layerRef.root);
      } else {
        layerIndex = layerRefOrIndex;
      }

      this.root.layers.splice(layerIndex, 1);
    }
    /**
     * @param layerRefOrIndex a JSMovinLayer or index of mask or masked layer to remove
     */

  }, {
    key: "removeMask",
    value: function removeMask(layerRefOrIndex) {
      var layerRef;
      var layerIndex;

      if (layerRefOrIndex instanceof _layer.JSMovinLayer) {
        layerRef = layerRefOrIndex;
        layerIndex = this.root.layers.indexOf(layerRef.root);
      } else {
        layerIndex = layerRefOrIndex;
        layerRef = new _layer.JSMovinLayer(this.root.layers[layerIndex]);
      }

      if (layerRef.root.tt) {
        layerRef.root.tt = 0;
        this.root.layers.splice(layerIndex - 1, 1);
      } else if (this.root.layers[layerIndex + 1].tt) {
        this.root.layers[layerIndex + 1].tt = 0;
        this.root.layers.splice(layerIndex, 1);
      } else {
        throw new Error('The input layer is not a mask or a masked layer.');
      }
    }
    /**
     * clear all layers
     */

  }, {
    key: "clearLayers",
    value: function clearLayers() {
      this.root.layers = [];
    }
    /**
     * make all layers end at same time
     */

  }, {
    key: "uniform",
    value: function uniform() {
      var maxTime = this.root.layers.reduce(function (p, v) {
        return p < v.op ? v.op : p;
      }, 0);
      this.root.op = maxTime;
      this.root.layers.forEach(function (layer) {
        return layer.op = maxTime;
      });
    }
    /**
     * export Lottie as JavaScript Object 
     */

  }, {
    key: "toObject",
    value: function toObject() {
      this.uniform();
      return JSON.parse(this.toJSON());
    }
    /**
     * export Lottie as JSON text
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      this.uniform();
      return JSON.stringify(this.root);
    }
  }]);

  return JSMovin;
}();

exports["default"] = JSMovin;
var MaskType;
exports.MaskType = MaskType;

(function (MaskType) {
  MaskType[MaskType["Alpha"] = 1] = "Alpha";
  MaskType[MaskType["InvertAlpha"] = 2] = "InvertAlpha";
  MaskType[MaskType["Luma"] = 3] = "Luma";
  MaskType[MaskType["InvertLuma"] = 4] = "InvertLuma";
})(MaskType || (exports.MaskType = MaskType = {}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9qc21vdmluLnRzIl0sIm5hbWVzIjpbIkpTTW92aW4iLCJmcHMiLCJ3aWR0aCIsImhlaWdodCIsInJvb3QiLCJmciIsInciLCJoIiwiZGRkIiwibGF5ZXJzIiwiYXNzZXRzIiwiZm9udHMiLCJsaXN0IiwiaXAiLCJvcCIsImRvbU9yTGF5ZXIiLCJsYXllciIsIlNWR0dyYXBoaWNzRWxlbWVudCIsIkxheWVyRmFjdG9yeSIsImhpZXJhcmNoeSIsInB1c2giLCJtYXNrT3JEb20iLCJsYXllclJlZk9ySW5kZXgiLCJtYXNrVHlwZSIsIk1hc2tUeXBlIiwiQWxwaGEiLCJsYXllclJlZiIsImxheWVySW5kZXgiLCJKU01vdmluTGF5ZXIiLCJpbmRleE9mIiwidHQiLCJFcnJvciIsIm1hc2tMYXllciIsInNwbGljZSIsIm1heFRpbWUiLCJyZWR1Y2UiLCJwIiwidiIsImZvckVhY2giLCJ1bmlmb3JtIiwiSlNPTiIsInBhcnNlIiwidG9KU09OIiwic3RyaW5naWZ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBNkpBOzs7Ozs7Ozs7O0lBM0pxQkEsTzs7O0FBR2pCOzs7OztBQUtBLHFCQUF5RTtBQUFBLFFBQTdEQyxHQUE2RCx1RUFBL0MsRUFBK0M7QUFBQSxRQUEzQ0MsS0FBMkMsdUVBQTNCLEdBQTJCO0FBQUEsUUFBdEJDLE1BQXNCLHVFQUFMLEdBQUs7O0FBQUE7O0FBQUE7O0FBQ3JFLFNBQUtDLElBQUwsR0FBWTtBQUNSQyxNQUFBQSxFQUFFLEVBQUVKLEdBREk7QUFFUkssTUFBQUEsQ0FBQyxFQUFFSixLQUZLO0FBR1JLLE1BQUFBLENBQUMsRUFBRUosTUFISztBQUlSSyxNQUFBQSxHQUFHLEVBQUUsQ0FKRztBQUtSQyxNQUFBQSxNQUFNLEVBQUUsRUFMQTtBQU1SQyxNQUFBQSxNQUFNLEVBQUUsRUFOQTtBQU9SQyxNQUFBQSxLQUFLLEVBQUU7QUFDSEMsUUFBQUEsSUFBSSxFQUFFO0FBREgsT0FQQztBQVVSQyxNQUFB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QUlDLENBQUo7QUFBQSxlQUFVRCxDQUFDLEdBQUdDLENBQUMsQ0FBQ3ZCLEVBQU4sR0FBWXVCLENBQUMsQ0FBQ3ZCLEVBQWQsR0FBb0JzQixDQUE5QjtBQUFBLE9BQXpCLEVBQTBELENBQTFELENBQWQ7QUFDQSxXQUFLaEMsSUFBTCxDQUFVVSxFQUFWLEdBQWVvQixPQUFmO0FBQ0EsV0FBSzlCLElBQUwsQ0FBVUssTUFBVixDQUFrQjZCLE9BQWxCLENBQTBCLFVBQUF0QixLQUFLO0FBQUEsZUFBSUEsS0FBSyxDQUFDRixFQUFOLEdBQVdvQixPQUFmO0FBQUEsT0FBL0I7QUFDSDtBQUVEOzs7Ozs7K0JBR1c7QUFDUCxXQUFLSyxPQUFMO0FBQ0EsYUFBT0MsSUFBSSxDQUFDQyxLQUFMLENBQVcsS0FBS0MsTUFBTCxFQUFYLENBQVA7QUFDSDtBQUVEOzs7Ozs7NkJBR1M7QUFDTCxXQUFLSCxPQUFMO0FBQ0EsYUFBT0MsSUFBSSxDQUFDRyxTQUFMLENBQWUsS0FBS3ZDLElBQXBCLENBQVA7QUFDSDs7Ozs7OztJQUtPb0IsUTs7O1dBQUFBLFE7QUFBQUEsRUFBQUEsUSxDQUFBQSxRO0FBQUFBLEVBQUFBLFEsQ0FBQUEsUTtBQUFBQSxFQUFBQSxRLENBQUFBLFE7QUFBQUEsRUFBQUEsUSxDQUFBQSxRO0dBQUFBLFEsd0JBQUFBLFEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBbmltYXRpb24sIFNoYXBlTGF5ZXIsIEltYWdlTGF5ZXIsIFRleHRMYXllciwgVHJhbnNmb3JtIH0gZnJvbSBcIi4vYW5pbWF0aW9uXCI7XG5pbXBvcnQgeyBKU01vdmluTGF5ZXIsIExheWVyRmFjdG9yeSB9IGZyb20gJy4vbGF5ZXInXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEpTTW92aW4ge1xuICAgIHByaXZhdGUgcm9vdDogQW5pbWF0aW9uO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIGZwcyBudW1iZXIgb2YgZnJhbWVzIHBlciBzZWNvbmRcbiAgICAgKiBAcGFyYW0gd2lkdGggd2lkdGggb2Ygdmlld3BvcnQgKHB4KVxuICAgICAqIEBwYXJhbSBoZWlnaHQgaGVpZ2h0IG9mIHZpZXdwb3J0IChweClcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihmcHM6IG51bWJlciA9IDMwLCB3aWR0aDogbnVtYmVyID0gODAwLCBoZWlnaHQ6IG51bWJlciA9IDYwMCkge1xuICAgICAgICB0aGlzLnJvb3QgPSB7XG4gICAgICAgICAgICBmcjogZnBzLFxuICAgICAgICAgICAgdzogd2lkdGgsXG4gICAgICAgICAgICBoOiBoZWlnaHQsXG4gICAgICAgICAgICBkZGQ6IDAsXG4gICAgICAgICAgICBsYXllcnM6IFtdLFxuICAgICAgICAgICAgYXNzZXRzOiBbXSxcbiAgICAgICAgICAgIGZvbnRzOiB7XG4gICAgICAgICAgICAgICAgbGlzdDogW11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpcDogMCxcbiAgICAgICAgICAgIG9wOiAwXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gZnBzIG51bWJlciBvZiBmcmFtZXMgcGVyIHNlY29uZFxuICAgICAqL1xuICAgIHNldEZyYW1lUmF0ZShmcHM6IG51bWJlcikge1xuICAgICAgICB0aGlzLnJvb3QuZnIgPSBmcHNcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gd2lkdGggd2lkdGggb2Ygdmlld3BvcnQgKHB4KVxuICAgICAqIEBwYXJhbSBoZWlnaHQgaGVpZ2h0IG9mIHZpZXdwb3J0IChweClcbiAgICAgKi9cbiAgICBzZXRWaWV3cG9ydCh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xuICAgICAgICB0aGlzLnJvb3QudyA9IHdpZHRoXG4gICAgICAgIHRoaXMucm9vdC5oID0gaGVpZ2h0XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIGRvbU9yTGF5ZXIgYSBTVkcgZWxlbWVudCBET00gb3IgSlNNb3ZpbkxheWVyIG5lZWRzIHRvIGJlIGluc2VydGVkXG4gICAgICovXG4gICAgYWRkTGF5ZXIoZG9tT3JMYXllcjogU1ZHR3JhcGhpY3NFbGVtZW50IHwgSlNNb3ZpbkxheWVyKTogSlNNb3ZpbkxheWVyIHtcbiAgICAgICAgbGV0IGxheWVyOiBKU01vdmluTGF5ZXI7XG4gICAgICAgIGlmIChkb21PckxheWVyIGluc3RhbmNlb2YgU1ZHR3JhcGhpY3NFbGVtZW50KSB7XG4gICAgICAgICAgICBsYXllciA9IExheWVyRmFjdG9yeS5oaWVyYXJjaHkoZG9tT3JMYXllciwgdGhpcy5yb290LmFzc2V0cyEsIHRoaXMucm9vdC5mb250cyEpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsYXllciA9IGRvbU9yTGF5ZXJcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJvb3QubGF5ZXJzIS5wdXNoKGxheWVyLnJvb3QpXG4gICAgICAgIHJldHVybiBsYXllclxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBtYXNrT3JEb20gYSBTVkcgZWxlbWVudCBET00gb3IgSlNNb3ZpbkxheWVyIHRvIGJlIHRoZSBtYXNrXG4gICAgICogQHBhcmFtIGxheWVyUmVmT3JJbmRleCBhIEpTTW92aW5MYXllciBvciBpbmRleCBvZiBsYXllciB0byBiZSB0aGUgbWFza2VkIGxheWVyXG4gICAgICogQHBhcmFtIG1hc2tUeXBlIHdoaWNoIHR5cGUgb2YgbWFzayB0byB1c2UsIHVzZSBgTWFza1R5cGUuKmAgdG8gc3BlY2lmeVxuICAgICAqL1xuICAgIGFkZE1hc2sobWFza09yRG9tOiBKU01vdmluTGF5ZXIgfCBTVkdHcmFwaGljc0VsZW1lbnQsIGxheWVyUmVmT3JJbmRleDogbnVtYmVyIHwgSlNNb3ZpbkxheWVyLCBtYXNrVHlwZTogTWFza1R5cGUgPSBNYXNrVHlwZS5BbHBoYSkge1xuICAgICAgICBsZXQgbGF5ZXJSZWY6IEpTTW92aW5MYXllclxuICAgICAgICBsZXQgbGF5ZXJJbmRleDogbnVtYmVyXG4gICAgICAgIGlmIChsYXllclJlZk9ySW5kZXggaW5zdGFuY2VvZiBKU01vdmluTGF5ZXIpIHtcbiAgICAgICAgICAgIGxheWVyUmVmID0gbGF5ZXJSZWZPckluZGV4XG4gICAgICAgICAgICBsYXllckluZGV4ID0gdGhpcy5yb290LmxheWVycyEuaW5kZXhPZihsYXllclJlZi5yb290KVxuICAgICAgICAgICAgbGF5ZXJSZWYucm9vdC50dCA9IG1hc2tUeXBlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsYXllckluZGV4ID0gbGF5ZXJSZWZPckluZGV4XG4gICAgICAgICAgICB0aGlzLnJvb3QubGF5ZXJzIVtsYXllckluZGV4XS50dCA9IG1hc2tUeXBlXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxheWVySW5kZXggPCAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0dpdmVuIGxheWVyIGlzIG5vdCBhIG1lbWJlciBvZiB0aGlzIEpTTW92aW4uJylcbiAgICAgICAgfVxuICAgICAgICBsZXQgbWFza0xheWVyOiBKU01vdmluTGF5ZXJcbiAgICAgICAgaWYgKG1hc2tPckRvbSBpbnN0YW5jZW9mIFNWR0dyYXBoaWNzRWxlbWVudCkge1xuICAgICAgICAgICAgbWFza0xheWVyID0gTGF5ZXJGYWN0b3J5LmhpZXJhcmNoeShtYXNrT3JEb20sIHRoaXMucm9vdC5hc3NldHMhLCB0aGlzLnJvb3QuZm9udHMhKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWFza0xheWVyID0gbWFza09yRG9tXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yb290LmxheWVycyEuc3BsaWNlKGxheWVySW5kZXgsIDAsIG1hc2tMYXllci5yb290KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBsYXllclJlZk9ySW5kZXggYSBKU01vdmluTGF5ZXIgb3IgaW5kZXggb2YgbGF5ZXIgdG8gcmVtb3ZlXG4gICAgICovXG4gICAgcmVtb3ZlTGF5ZXIobGF5ZXJSZWZPckluZGV4OiBudW1iZXIgfCBKU01vdmluTGF5ZXIpIHtcbiAgICAgICAgbGV0IGxheWVyUmVmOiBKU01vdmluTGF5ZXJcbiAgICAgICAgbGV0IGxheWVySW5kZXg6IG51bWJlclxuICAgICAgICBpZiAobGF5ZXJSZWZPckluZGV4IGluc3RhbmNlb2YgSlNNb3ZpbkxheWVyKSB7XG4gICAgICAgICAgICBsYXllclJlZiA9IGxheWVyUmVmT3JJbmRleFxuICAgICAgICAgICAgbGF5ZXJJbmRleCA9IHRoaXMucm9vdC5sYXllcnMhLmluZGV4T2YobGF5ZXJSZWYucm9vdClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxheWVySW5kZXggPSBsYXllclJlZk9ySW5kZXhcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJvb3QubGF5ZXJzIS5zcGxpY2UobGF5ZXJJbmRleCwgMSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gbGF5ZXJSZWZPckluZGV4IGEgSlNNb3ZpbkxheWVyIG9yIGluZGV4IG9mIG1hc2sgb3IgbWFza2VkIGxheWVyIHRvIHJlbW92ZVxuICAgICAqL1xuICAgIHJlbW92ZU1hc2sobGF5ZXJSZWZPckluZGV4OiBudW1iZXIgfCBKU01vdmluTGF5ZXIpIHtcbiAgICAgICAgbGV0IGxheWVyUmVmOiBKU01vdmluTGF5ZXJcbiAgICAgICAgbGV0IGxheWVySW5kZXg6IG51bWJlclxuICAgICAgICBpZiAobGF5ZXJSZWZPckluZGV4IGluc3RhbmNlb2YgSlNNb3ZpbkxheWVyKSB7XG4gICAgICAgICAgICBsYXllclJlZiA9IGxheWVyUmVmT3JJbmRleFxuICAgICAgICAgICAgbGF5ZXJJbmRleCA9IHRoaXMucm9vdC5sYXllcnMhLmluZGV4T2YobGF5ZXJSZWYucm9vdClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxheWVySW5kZXggPSBsYXllclJlZk9ySW5kZXhcbiAgICAgICAgICAgIGxheWVyUmVmID0gbmV3IEpTTW92aW5MYXllcih0aGlzLnJvb3QubGF5ZXJzIVtsYXllckluZGV4XSBhcyBTaGFwZUxheWVyKVxuICAgICAgICB9XG4gICAgICAgIGlmIChsYXllclJlZi5yb290LnR0KSB7XG4gICAgICAgICAgICBsYXllclJlZi5yb290LnR0ID0gMFxuICAgICAgICAgICAgdGhpcy5yb290LmxheWVycyEuc3BsaWNlKGxheWVySW5kZXggLSAxLCAxKVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucm9vdC5sYXllcnMhW2xheWVySW5kZXggKyAxXS50dCkge1xuICAgICAgICAgICAgdGhpcy5yb290LmxheWVycyFbbGF5ZXJJbmRleCArIDFdLnR0ID0gMFxuICAgICAgICAgICAgdGhpcy5yb290LmxheWVycyEuc3BsaWNlKGxheWVySW5kZXgsIDEpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBpbnB1dCBsYXllciBpcyBub3QgYSBtYXNrIG9yIGEgbWFza2VkIGxheWVyLicpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBjbGVhciBhbGwgbGF5ZXJzXG4gICAgICovXG4gICAgY2xlYXJMYXllcnMoKSB7XG4gICAgICAgIHRoaXMucm9vdC5sYXllcnMgPSBbXVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIG1ha2UgYWxsIGxheWVycyBlbmQgYXQgc2FtZSB0aW1lXG4gICAgICovXG4gICAgdW5pZm9ybSgpIHtcbiAgICAgICAgbGV0IG1heFRpbWUgPSB0aGlzLnJvb3QubGF5ZXJzIS5yZWR1Y2UoKHAsIHYpID0+IHAgPCB2Lm9wISA/IHYub3AhIDogcCwgMClcbiAgICAgICAgdGhpcy5yb290Lm9wID0gbWF4VGltZVxuICAgICAgICB0aGlzLnJvb3QubGF5ZXJzIS5mb3JFYWNoKGxheWVyID0+IGxheWVyLm9wID0gbWF4VGltZSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBleHBvcnQgTG90dGllIGFzIEphdmFTY3JpcHQgT2JqZWN0IFxuICAgICAqL1xuICAgIHRvT2JqZWN0KCkge1xuICAgICAgICB0aGlzLnVuaWZvcm0oKVxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZSh0aGlzLnRvSlNPTigpKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGV4cG9ydCBMb3R0aWUgYXMgSlNPTiB0ZXh0XG4gICAgICovXG4gICAgdG9KU09OKCkge1xuICAgICAgICB0aGlzLnVuaWZvcm0oKVxuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy5yb290KVxuICAgIH1cbn1cblxuZXhwb3J0IHsgTGF5ZXJGYWN0b3J5IH0gZnJvbSAnLi9sYXllcidcbmV4cG9ydCB7IEVhc2luZ0ZhY3RvcnkgfSBmcm9tICcuL2Vhc2luZydcbmV4cG9ydCBlbnVtIE1hc2tUeXBlIHtcbiAgICBBbHBoYSA9IDEsXG4gICAgSW52ZXJ0QWxwaGEgPSAyLFxuICAgIEx1bWEgPSAzLFxuICAgIEludmVydEx1bWEgPSA0XG59Il19

/***/ }),

/***/ "./node_modules/jsmovin/bin/layer.js":
/*!*******************************************!*\
  !*** ./node_modules/jsmovin/bin/layer.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LayerFactory = exports.JSMovinLayer = void 0;

var _easing = __webpack_require__(/*! ./easing */ "./node_modules/jsmovin/bin/easing.js");

var _render = __webpack_require__(/*! ./render */ "./node_modules/jsmovin/bin/render.js");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var JSMovinLayer =
/*#__PURE__*/
function () {
  _createClass(JSMovinLayer, [{
    key: "getDefaultProperty",
    value: function getDefaultProperty(key) {
      switch (key) {
        case 'a':
        case 'p':
          return [0, 0, 0];

        case 's':
          return [100, 100, 100];

        case 'o':
          return 100;

        case 'r':
          return 0;

        default:
          return 0;
      }
    }
  }, {
    key: "convertToStaticProperty",
    value: function convertToStaticProperty(transform, key) {
      if (!transform[key]) {
        transform[key] = {
          a: 0,
          k: this.getDefaultProperty(key)
        };
      }

      if (transform[key].a == 1) {
        var staticValue = transform[key].k[0].s;
        transform[key] = {
          a: 0,
          k: staticValue
        };
      }
    }
  }, {
    key: "convertToAnimatableProperty",
    value: function convertToAnimatableProperty(transform, key) {
      if (!transform[key] || transform[key].a == 0) {
        transform[key] = {
          a: 1,
          k: []
        };
      }
    }
  }, {
    key: "addKeyframe",
    value: function addKeyframe(transform, key) {
      var idx = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;
      var time = arguments.length > 3 ? arguments[3] : undefined;
      var value = arguments.length > 4 ? arguments[4] : undefined;
      var easing = arguments.length > 5 ? arguments[5] : undefined;
      var existKeyframe = transform[key].k.filter(function (x) {
        return x.t == time;
      });
      var readyToSet;

      if (existKeyframe.length) {
        readyToSet = existKeyframe[0];
      } else {
        readyToSet = {
          t: time,
          s: this.getDefaultProperty(key)
        };
        var previousKeyframeCount = transform[key].k.reduce(function (p, x) {
          return x.t < time ? p + 1 : p;
        }, 0);
        transform[key].k.splice(previousKeyframeCount, 0, readyToSet);
      }

      if (easing) {
        readyToSet.o = {
          x: easing[0][0],
          y: easing[0][1]
        };
        readyToSet.i = {
          x: easing[1][0],
          y: easing[1][1]
        };
      }

      if (idx >= 0) {
        readyToSet.s[idx] = value;
      } else {
        readyToSet.s = [value];
      }
    }
  }]);

  function JSMovinLayer(ref) {
    _classCallCheck(this, JSMovinLayer);

    _defineProperty(this, "root", void 0);

    this.root = ref;
  }

  _createClass(JSMovinLayer, [{
    key: "setStaticProperty",
    value: function setStaticProperty(key, value) {
      this.root.op = 1;

      switch (key) {
        case 'scaleX':
          this.convertToStaticProperty(this.root.ks, 's');
          this.root.ks.s.k[0] = value;
          break;

        case 'scaleY':
          this.convertToStaticProperty(this.root.ks, 's');
          this.root.ks.s.k[1] = value;
          break;

        case 'anchorX':
          this.convertToStaticProperty(this.root.ks, 'a');
          this.root.ks.a.k[0] = value;
          break;

        case 'anchorY':
          this.convertToStaticProperty(this.root.ks, 'a');
          this.root.ks.a.k[1] = value;
          break;

        case 'x':
          this.convertToStaticProperty(this.root.ks, 'p');
          this.root.ks.p.k[0] = value;
          break;

        case 'y':
          this.convertToStaticProperty(this.root.ks, 'p');
          this.root.ks.p.k[1] = value;
          break;
        // case 'skew':
        //     this.convertToStaticProperty(this.root.ks!, 's')
        //     break
        // case 'skewAxis':
        //     this.convertToStaticProperty(this.root.ks!, 's')
        //     break

        case 'rotate':
          this.convertToStaticProperty(this.root.ks, 'r');
          this.root.ks.r.k = value;
          break;

        case 'opacity':
          this.convertToStaticProperty(this.root.ks, 'o');
          this.root.ks.o.k = value;
          break;

        default:
          console.error(key, value);
          throw new Error('Not a valid key.');
      }
    }
  }, {
    key: "setAnimatableProperty",
    value: function setAnimatableProperty(key, startFrame, endFrame, startValue, endValue, easing) {
      if (endFrame <= startFrame) {
        throw new Error('End frame should be larger than start frame.');
      }

      this.root.op = endFrame;

      if (!easing) {
        easing = _easing.EasingFactory.linear();
      }

      switch (key) {
        case 'scaleX':
          this.convertToAnimatableProperty(this.root.ks, 's');
          this.addKeyframe(this.root.ks, 's', 0, startFrame, startValue, easing);
          this.addKeyframe(this.root.ks, 's', 0, endFrame, endValue);
          break;

        case 'scaleY':
          this.convertToAnimatableProperty(this.root.ks, 's');
          this.addKeyframe(this.root.ks, 's', 1, startFrame, startValue, easing);
          this.addKeyframe(this.root.ks, 's', 1, endFrame, endValue);
          break;

        case 'anchorX':
          this.convertToAnimatableProperty(this.root.ks, 'a');
          this.addKeyframe(this.root.ks, 'a', 0, startFrame, startValue, easing);
          this.addKeyframe(this.root.ks, 'a', 0, endFrame, endValue);
          break;

        case 'anchorY':
          this.convertToAnimatableProperty(this.root.ks, 'a');
          this.addKeyframe(this.root.ks, 'a', 1, startFrame, startValue, easing);
          this.addKeyframe(this.root.ks, 'a', 1, endFrame, endValue);
          break;

        case 'x':
          this.convertToAnimatableProperty(this.root.ks, 'p');
          this.addKeyframe(this.root.ks, 'p', 0, startFrame, startValue, easing);
          this.addKeyframe(this.root.ks, 'p', 0, endFrame, endValue);
          break;

        case 'y':
          this.convertToAnimatableProperty(this.root.ks, 'p');
          this.addKeyframe(this.root.ks, 'p', 1, startFrame, startValue, easing);
          this.addKeyframe(this.root.ks, 'p', 1, endFrame, endValue);
          break;
        // case 'skew':
        //     this.convertToAnimatableProperty(this.root.ks!, 's')
        //     break
        // case 'skewAxis':
        //     this.convertToAnimatableProperty(this.root.ks!, 's')
        //     break

        case 'rotate':
          this.convertToAnimatableProperty(this.root.ks, 'r');
          this.addKeyframe(this.root.ks, 'r', -1, startFrame, startValue, easing);
          this.addKeyframe(this.root.ks, 'r', -1, endFrame, endValue);
          break;

        case 'opacity':
          this.convertToAnimatableProperty(this.root.ks, 'o');
          this.addKeyframe(this.root.ks, 'o', -1, startFrame, startValue, easing);
          this.addKeyframe(this.root.ks, 'o', -1, endFrame, endValue);
          break;

        default:
          console.error(key, startFrame, endFrame, startValue, endValue, easing);
          throw new Error('Not a valid key.');
      }
    }
  }]);

  return JSMovinLayer;
}();

exports.JSMovinLayer = JSMovinLayer;

var LayerFactory =
/*#__PURE__*/
function () {
  function LayerFactory() {
    _classCallCheck(this, LayerFactory);
  }

  _createClass(LayerFactory, null, [{
    key: "generateTransform",
    value: function generateTransform(coordinate) {
      return {
        o: {
          a: 0,
          k: 100
        },
        r: {
          a: 0,
          k: 0
        },
        p: {
          a: 0,
          k: [coordinate[0], coordinate[1], 0]
        },
        a: {
          a: 0,
          k: [0, 0, 0]
        },
        s: {
          a: 0,
          k: [100, 100, 100]
        }
      };
    }
  }, {
    key: "getBoundingBox",
    value: function getBoundingBox(dom) {
      var svgRoot = dom;

      while (true) {
        if (svgRoot.parentElement instanceof SVGGraphicsElement) {
          svgRoot = svgRoot.parentElement;
        } else {
          break;
        }
      }

      var rootBBox = svgRoot.getBoundingClientRect();
      var refBBox = dom.getBoundingClientRect();
      var coordinate = [refBBox.left - rootBBox.left, refBBox.top - rootBBox.top, refBBox.width + 1, refBBox.height + 1];
      return coordinate;
    }
  }, {
    key: "boundingBox",
    value: function boundingBox(dom) {
      var coordinate = this.getBoundingBox(dom);
      return this.rect.apply(this, _toConsumableArray(coordinate));
    }
  }, {
    key: "shape",
    value: function shape(dom) {
      var coordinate = this.getBoundingBox(dom);
      var layer = {
        ty: 4,
        ddd: 0,
        sr: 1,
        ao: 0,
        ks: this.generateTransform(coordinate),
        ip: 0,
        op: 1,
        st: 0,
        bm: 0,
        shapes: [(0, _render.render)(dom)]
      };
      return new JSMovinLayer(layer);
    }
  }, {
    key: "rect",
    value: function rect(left, top, width, height) {
      var layer = {
        ty: 4,
        ddd: 0,
        sr: 1,
        ao: 0,
        ks: this.generateTransform([left, top, width, height]),
        ip: 0,
        op: 1,
        st: 0,
        bm: 0,
        shapes: [(0, _render.renderPlainGlyph)('rect', [width, height])]
      };
      return new JSMovinLayer(layer);
    }
  }, {
    key: "ellipse",
    value: function ellipse(cx, cy, rx, ry) {
      var layer = {
        ty: 4,
        ddd: 0,
        sr: 1,
        ao: 0,
        ks: this.generateTransform([cx - rx, cy - ry, 2 * rx, 2 * ry]),
        ip: 0,
        op: 1,
        st: 0,
        bm: 0,
        shapes: [(0, _render.renderPlainGlyph)('ellipse', [rx, ry])]
      };
      return new JSMovinLayer(layer);
    }
  }, {
    key: "hierarchy",
    value: function hierarchy(dom, assetList, fontList) {
      var coordinate = this.getBoundingBox(dom);
      var domType;

      if (dom instanceof SVGTextElement) {
        domType = 5;
      } else if (dom instanceof SVGImageElement) {
        domType = 2;
      } else {
        domType = 4;
      }

      var layer = {
        ty: domType,
        ddd: 0,
        sr: 1,
        ao: 0,
        ks: this.generateTransform(coordinate),
        ip: 0,
        op: 1,
        st: 0,
        bm: 0
      };

      switch (domType) {
        case 2:
          if (assetList) {
            var imageLayer = layer;

            var _renderImage = (0, _render.renderImage)(dom),
                _renderImage2 = _slicedToArray(_renderImage, 2),
                refId = _renderImage2[0],
                asset = _renderImage2[1];

            imageLayer.refId = refId;
            assetList.push(asset);
          }

          break;

        case 4:
          var shapeLayer = layer;
          shapeLayer.shapes = [];
          shapeLayer.shapes.push((0, _render.render)(dom));
          break;

        case 5:
          var textLayer = layer;

          var _renderText = (0, _render.renderText)(dom),
              _renderText2 = _slicedToArray(_renderText, 2),
              textData = _renderText2[0],
              font = _renderText2[1];

          textLayer.t = textData;
          fontList.list.push(font);
          break;
      }

      var movinLayer = new JSMovinLayer(layer);
      return movinLayer;
    }
  }]);

  return LayerFactory;
}();

exports.LayerFactory = LayerFactory;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sYXllci50cyJdLCJuYW1lcyI6WyJKU01vdmluTGF5ZXIiLCJrZXkiLCJ0cmFuc2Zvcm0iLCJhIiwiayIsImdldERlZmF1bHRQcm9wZXJ0eSIsInN0YXRpY1ZhbHVlIiwicyIsImlkeCIsInRpbWUiLCJ2YWx1ZSIsImVhc2luZyIsImV4aXN0S2V5ZnJhbWUiLCJmaWx0ZXIiLCJ4IiwidCIsInJlYWR5VG9TZXQiLCJsZW5ndGgiLCJwcmV2aW91c0tleWZyYW1lQ291bnQiLCJyZWR1Y2UiLCJwIiwic3BsaWNlIiwibyIsInkiLCJpIiwicmVmIiwicm9vdCIsIm9wIiwiY29udmVydFRvU3RhdGljUHJvcGVydHkiLCJrcyIsInIiLCJjb25zb2xlIiwiZXJyb3IiLCJFcnJvciIsInN0YXJ0RnJhbWUiLCJlbmRGcmFtZSIsInN0YXJ0VmFsdWUiLCJlbmRWYWx1ZSIsIkVhc2luZ0ZhY3RvcnkiLCJsaW5lYXIiLCJjb252ZXJ0VG9BbmltYXRhYmxlUHJvcGVydHkiLCJhZGRLZXlmcmFtZSIsIkxheWVyRmFjdG9yeSIsImNvb3JkaW5hdGUiLCJkb20iLCJzdmdSb290IiwicGFyZW50RWxlbWVudCIsIlNWR0dyYXBoaWNzRWxlbWVudCIsInJvb3RCQm94IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicmVmQkJveCIsImxlZnQiLCJ0b3AiLCJ3aWR0aCIsImhlaWdodCIsImdldEJvdW5kaW5nQm94IiwicmVjdCIsImxheWVyIiwidHkiLCJkZGQiLCJzciIsImFvIiwiZ2VuZXJhdGVUcmFuc2Zvcm0iLCJpcCIsInN0IiwiYm0iLCJzaGFwZXMiLCJjeCIsImN5IiwicngiLCJyeSIsImFzc2V0TGlzdCIsImZvbnRMaXN0IiwiZG9tVHlwZSIsIlNWR1RleHRFbGVtZW50IiwiU1ZHSW1hZ2VFbGVtZW50IiwiaW1hZ2VMYXllciIsInJlZklkIiwiYXNzZXQiLCJwdXNoIiwic2hhcGVMYXllciIsInRleHRMYXllciIsInRleHREYXRhIiwiZm9udCIsImxpc3QiLCJt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QU4yQztBQU8vQ3BDLFFBQUFBLEVBQUUsRUFBRSxDQVAyQztBQVEvQ3FDLFFBQUFBLEVBQUUsRUFBRSxDQVIyQztBQVMvQ0MsUUFBQUEsRUFBRSxFQUFFO0FBVDJDLE9BQW5EOztBQVdBLGNBQVFRLE9BQVI7QUFDSSxhQUFLLENBQUw7QUFDSSxjQUFJRixTQUFKLEVBQWU7QUFDWCxnQkFBTUssVUFBVSxHQUFHbkIsS0FBbkI7O0FBRFcsK0JBRVkseUJBQVliLEdBQVosQ0FGWjtBQUFBO0FBQUEsZ0JBRUppQyxLQUZJO0FBQUEsZ0JBRUdDLEtBRkg7O0FBR1hGLFlBQUFBLFVBQVUsQ0FBQ0MsS0FBWCxHQUFtQkEsS0FBbkI7QUFDQU4sWUFBQUEsU0FBUyxDQUFDUSxJQUFWLENBQWVELEtBQWY7QUFDSDs7QUFDRDs7QUFDSixhQUFLLENBQUw7QUFDSSxjQUFNRSxVQUFVLEdBQUd2QixLQUFuQjtBQUNBdUIsVUFBQUEsVUFBVSxDQUFDZCxNQUFYLEdBQW9CLEVBQXBCO0FBQ0FjLFVBQUFBLFVBQVUsQ0FBQ2QsTUFBWCxDQUFrQmEsSUFBbEIsQ0FBdUIsb0JBQU9uQyxHQUFQLENBQXZCO0FBQ0E7O0FBQ0osYUFBSyxDQUFMO0FBQ0ksY0FBTXFDLFNBQVMsR0FBR3hCLEtBQWxCOztBQURKLDRCQUU2Qix3QkFBV2IsR0FBWCxDQUY3QjtBQUFBO0FBQUEsY0FFV3NDLFFBRlg7QUFBQSxjQUVxQkMsSUFGckI7O0FBR0lGLFVBQUFBLFNBQVMsQ0FBQ2xFLENBQVYsR0FBY21FLFFBQWQ7QUFDQVYsVUFBQUEsUUFBUSxDQUFDWSxJQUFULENBQWVMLElBQWYsQ0FBb0JJLElBQXBCO0FBQ0E7QUFuQlI7O0FBc0JBLFVBQU1FLFVBQVUsR0FBRyxJQUFJckYsWUFBSixDQUFpQnlELEtBQWpCLENBQW5CO0FBQ0EsYUFBTzRCLFVBQVA7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNoYXBlTGF5ZXIsIFRleHRMYXllciwgSW1hZ2VMYXllciwgVHJhbnNmb3JtLCBBc3NldHMsIEZvbnRzIH0gZnJvbSAnLi9hbmltYXRpb24nXG5pbXBvcnQgeyBFYXNpbmdGdW5jdGlvbiwgRWFzaW5nRmFjdG9yeSB9IGZyb20gJy4vZWFzaW5nJ1xuaW1wb3J0IHsgcmVuZGVyVGV4dCwgcmVuZGVyLCByZW5kZXJJbWFnZSwgcmVuZGVyUGxhaW5HbHlwaCB9IGZyb20gJy4vcmVuZGVyJztcblxudHlwZSBTZXRhYmxlS2V5cyA9IFwic2NhbGVYXCIgfCBcInNjYWxlWVwiIHwgXCJhbmNob3JYXCIgfCBcImFuY2hvcllcIiB8IFwieFwiIHwgXCJ5XCIgfCBcInJvdGF0ZVwiIHwgXCJvcGFjaXR5XCIgfCAnc2hhcGUnIHwgJ2ZpbGxDb2xvcicgfCAndHJpbScgfCAnc3Ryb2tlQ29sb3InIHwgJ3N0cm9rZVdpZHRoJ1xuXG5leHBvcnQgY2xhc3MgSlNNb3ZpbkxheWVyIHtcbiAgICBwdWJsaWMgcmVhZG9ubHkgcm9vdDogU2hhcGVMYXllciB8IFRleHRMYXllciB8IEltYWdlTGF5ZXI7XG4gICAgcHJpdmF0ZSBnZXREZWZhdWx0UHJvcGVydHkoa2V5OiBzdHJpbmcpIHtcbiAgICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgICAgIGNhc2UgJ2EnOlxuICAgICAgICAgICAgY2FzZSAncCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFswLCAwLCAwXVxuICAgICAgICAgICAgY2FzZSAncyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsxMDAsIDEwMCwgMTAwXVxuICAgICAgICAgICAgY2FzZSAnbyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDEwMFxuICAgICAgICAgICAgY2FzZSAncic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDBcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gMFxuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgY29udmVydFRvU3RhdGljUHJvcGVydHkodHJhbnNmb3JtOiBUcmFuc2Zvcm0sIGtleTogc3RyaW5nKSB7XG4gICAgICAgIGlmICghdHJhbnNmb3JtW2tleV0pIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybVtrZXldID0ge1xuICAgICAgICAgICAgICAgIGE6IDAsXG4gICAgICAgICAgICAgICAgazogdGhpcy5nZXREZWZhdWx0UHJvcGVydHkoa2V5KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0cmFuc2Zvcm1ba2V5XS5hID09IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXRpY1ZhbHVlID0gdHJhbnNmb3JtW2tleV0ua1swXS5zXG4gICAgICAgICAgICB0cmFuc2Zvcm1ba2V5XSA9IHtcbiAgICAgICAgICAgICAgICBhOiAwLFxuICAgICAgICAgICAgICAgIGs6IHN0YXRpY1ZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBjb252ZXJ0VG9BbmltYXRhYmxlUHJvcGVydHkodHJhbnNmb3JtOiBUcmFuc2Zvcm0sIGtleTogc3RyaW5nKSB7XG4gICAgICAgIGlmICghdHJhbnNmb3JtW2tleV0gfHwgdHJhbnNmb3JtW2tleV0uYSA9PSAwKSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm1ba2V5XSA9IHtcbiAgICAgICAgICAgICAgICBhOiAxLFxuICAgICAgICAgICAgICAgIGs6IFtdXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBhZGRLZXlmcmFtZSh0cmFuc2Zvcm06IFRyYW5zZm9ybSwga2V5OiBzdHJpbmcsIGlkeDogbnVtYmVyID0gLTEsIHRpbWU6IG51bWJlciwgdmFsdWU6IEFycmF5PGFueT4sIGVhc2luZz86IEVhc2luZ0Z1bmN0aW9uKSB7XG4gICAgICAgIGNvbnN0IGV4aXN0S2V5ZnJhbWUgPSB0cmFuc2Zvcm1ba2V5XS5rLmZpbHRlcigoeDogYW55KSA9PiB4LnQgPT0gdGltZSkgYXMgYW55W11cbiAgICAgICAgbGV0IHJlYWR5VG9TZXQ7XG4gICAgICAgIGlmIChleGlzdEtleWZyYW1lLmxlbmd0aCkge1xuICAgICAgICAgICAgcmVhZHlUb1NldCA9IGV4aXN0S2V5ZnJhbWVbMF1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlYWR5VG9TZXQgPSB7XG4gICAgICAgICAgICAgICAgdDogdGltZSxcbiAgICAgICAgICAgICAgICBzOiB0aGlzLmdldERlZmF1bHRQcm9wZXJ0eShrZXkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwcmV2aW91c0tleWZyYW1lQ291bnQgPSB0cmFuc2Zvcm1ba2V5XS5rLnJlZHVjZSgocDogbnVtYmVyLCB4OiBhbnkpID0+IHgudCA8IHRpbWUgPyBwICsgMSA6IHAsIDApXG4gICAgICAgICAgICB0cmFuc2Zvcm1ba2V5XS5rLnNwbGljZShwcmV2aW91c0tleWZyYW1lQ291bnQsIDAsIHJlYWR5VG9TZXQpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVhc2luZykge1xuICAgICAgICAgICAgcmVhZHlUb1NldC5vID0ge1xuICAgICAgICAgICAgICAgIHg6IGVhc2luZ1swXVswXSxcbiAgICAgICAgICAgICAgICB5OiBlYXNpbmdbMF1bMV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlYWR5VG9TZXQuaSA9IHtcbiAgICAgICAgICAgICAgICB4OiBlYXNpbmdbMV1bMF0sXG4gICAgICAgICAgICAgICAgeTogZWFzaW5nWzFdWzFdXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlkeCA+PSAwKSB7XG4gICAgICAgICAgICByZWFkeVRvU2V0LnNbaWR4XSA9IHZhbHVlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWFkeVRvU2V0LnMgPSBbdmFsdWVdXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihyZWY6IFNoYXBlTGF5ZXIgfCBUZXh0TGF5ZXIgfCBJbWFnZUxheWVyKSB7XG4gICAgICAgIHRoaXMucm9vdCA9IHJlZlxuICAgIH1cblxuICAgIHNldFN0YXRpY1Byb3BlcnR5KGtleTogU2V0YWJsZUtleXMsIHZhbHVlOiBhbnkpIHtcbiAgICAgICAgdGhpcy5yb290Lm9wID0gMVxuICAgICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICAgICAgY2FzZSAnc2NhbGVYJzpcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnZlcnRUb1N0YXRpY1Byb3BlcnR5KHRoaXMucm9vdC5rcyEsICdzJylcbiAgICAgICAgICAgICAgICB0aGlzLnJvb3Qua3MhLnMhLmshWzBdID0gdmFsdWVcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAnc2NhbGVZJzpcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnZlcnRUb1N0YXRpY1Byb3BlcnR5KHRoaXMucm9vdC5rcyEsICdzJylcbiAgICAgICAgICAgICAgICB0aGlzLnJvb3Qua3MhLnMhLmshWzFdID0gdmFsdWVcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAnYW5jaG9yWCc6XG4gICAgICAgICAgICAgICAgdGhpcy5jb252ZXJ0VG9TdGF0aWNQcm9wZXJ0eSh0aGlzLnJvb3Qua3MhLCAnYScpXG4gICAgICAgICAgICAgICAgdGhpcy5yb290LmtzIS5hIS5rIVswXSA9IHZhbHVlXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgJ2FuY2hvclknOlxuICAgICAgICAgICAgICAgIHRoaXMuY29udmVydFRvU3RhdGljUHJvcGVydHkodGhpcy5yb290LmtzISwgJ2EnKVxuICAgICAgICAgICAgICAgIHRoaXMucm9vdC5rcyEuYSEuayFbMV0gPSB2YWx1ZVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlICd4JzpcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnZlcnRUb1N0YXRpY1Byb3BlcnR5KHRoaXMucm9vdC5rcyEsICdwJylcbiAgICAgICAgICAgICAgICB0aGlzLnJvb3Qua3MhLnAhLmshWzBdID0gdmFsdWVcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAneSc6XG4gICAgICAgICAgICAgICAgdGhpcy5jb252ZXJ0VG9TdGF0aWNQcm9wZXJ0eSh0aGlzLnJvb3Qua3MhLCAncCcpXG4gICAgICAgICAgICAgICAgdGhpcy5yb290LmtzIS5wIS5rIVsxXSA9IHZhbHVlXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIC8vIGNhc2UgJ3NrZXcnOlxuICAgICAgICAgICAgLy8gICAgIHRoaXMuY29udmVydFRvU3RhdGljUHJvcGVydHkodGhpcy5yb290LmtzISwgJ3MnKVxuICAgICAgICAgICAgLy8gICAgIGJyZWFrXG4gICAgICAgICAgICAvLyBjYXNlICdza2V3QXhpcyc6XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5jb252ZXJ0VG9TdGF0aWNQcm9wZXJ0eSh0aGlzLnJvb3Qua3MhLCAncycpXG4gICAgICAgICAgICAvLyAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgJ3JvdGF0ZSc6XG4gICAgICAgICAgICAgICAgdGhpcy5jb252ZXJ0VG9TdGF0aWNQcm9wZXJ0eSh0aGlzLnJvb3Qua3MhLCAncicpXG4gICAgICAgICAgICAgICAgdGhpcy5yb290LmtzIS5yIS5rID0gdmFsdWVcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAnb3BhY2l0eSc6XG4gICAgICAgICAgICAgICAgdGhpcy5jb252ZXJ0VG9TdGF0aWNQcm9wZXJ0eSh0aGlzLnJvb3Qua3MhLCAnbycpXG4gICAgICAgICAgICAgICAgdGhpcy5yb290LmtzIS5vIS5rID0gdmFsdWVcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGtleSwgdmFsdWUpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOb3QgYSB2YWxpZCBrZXkuJylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldEFuaW1hdGFibGVQcm9wZXJ0eShrZXk6IFNldGFibGVLZXlzLCBzdGFydEZyYW1lOiBudW1iZXIsIGVuZEZyYW1lOiBudW1iZXIsIHN0YXJ0VmFsdWU6IGFueSwgZW5kVmFsdWU6IGFueSwgZWFzaW5nPzogRWFzaW5nRnVuY3Rpb24pIHtcbiAgICAgICAgaWYgKGVuZEZyYW1lIDw9IHN0YXJ0RnJhbWUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRW5kIGZyYW1lIHNob3VsZCBiZSBsYXJnZXIgdGhhbiBzdGFydCBmcmFtZS4nKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucm9vdC5vcCA9IGVuZEZyYW1lXG4gICAgICAgIGlmICghZWFzaW5nKSB7XG4gICAgICAgICAgICBlYXNpbmcgPSBFYXNpbmdGYWN0b3J5LmxpbmVhcigpXG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgICAgIGNhc2UgJ3NjYWxlWCc6XG4gICAgICAgICAgICAgICAgdGhpcy5jb252ZXJ0VG9BbmltYXRhYmxlUHJvcGVydHkodGhpcy5yb290LmtzISwgJ3MnKVxuICAgICAgICAgICAgICAgIHRoaXMuYWRkS2V5ZnJhbWUodGhpcy5yb290LmtzISwgJ3MnLCAwLCBzdGFydEZyYW1lLCBzdGFydFZhbHVlLCBlYXNpbmcpXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRLZXlmcmFtZSh0aGlzLnJvb3Qua3MhLCAncycsIDAsIGVuZEZyYW1lLCBlbmRWYWx1ZSlcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAnc2NhbGVZJzpcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnZlcnRUb0FuaW1hdGFibGVQcm9wZXJ0eSh0aGlzLnJvb3Qua3MhLCAncycpXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRLZXlmcmFtZSh0aGlzLnJvb3Qua3MhLCAncycsIDEsIHN0YXJ0RnJhbWUsIHN0YXJ0VmFsdWUsIGVhc2luZylcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEtleWZyYW1lKHRoaXMucm9vdC5rcyEsICdzJywgMSwgZW5kRnJhbWUsIGVuZFZhbHVlKVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlICdhbmNob3JYJzpcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnZlcnRUb0FuaW1hdGFibGVQcm9wZXJ0eSh0aGlzLnJvb3Qua3MhLCAnYScpXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRLZXlmcmFtZSh0aGlzLnJvb3Qua3MhLCAnYScsIDAsIHN0YXJ0RnJhbWUsIHN0YXJ0VmFsdWUsIGVhc2luZylcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEtleWZyYW1lKHRoaXMucm9vdC5rcyEsICdhJywgMCwgZW5kRnJhbWUsIGVuZFZhbHVlKVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlICdhbmNob3JZJzpcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnZlcnRUb0FuaW1hdGFibGVQcm9wZXJ0eSh0aGlzLnJvb3Qua3MhLCAnYScpXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRLZXlmcmFtZSh0aGlzLnJvb3Qua3MhLCAnYScsIDEsIHN0YXJ0RnJhbWUsIHN0YXJ0VmFsdWUsIGVhc2luZylcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEtleWZyYW1lKHRoaXMucm9vdC5rcyEsICdhJywgMSwgZW5kRnJhbWUsIGVuZFZhbHVlKVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlICd4JzpcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnZlcnRUb0FuaW1hdGFibGVQcm9wZXJ0eSh0aGlzLnJvb3Qua3MhLCAncCcpXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRLZXlmcmFtZSh0aGlzLnJvb3Qua3MhLCAncCcsIDAsIHN0YXJ0RnJhbWUsIHN0YXJ0VmFsdWUsIGVhc2luZylcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEtleWZyYW1lKHRoaXMucm9vdC5rcyEsICdwJywgMCwgZW5kRnJhbWUsIGVuZFZhbHVlKVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlICd5JzpcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnZlcnRUb0FuaW1hdGFibGVQcm9wZXJ0eSh0aGlzLnJvb3Qua3MhLCAncCcpXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRLZXlmcmFtZSh0aGlzLnJvb3Qua3MhLCAncCcsIDEsIHN0YXJ0RnJhbWUsIHN0YXJ0VmFsdWUsIGVhc2luZylcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEtleWZyYW1lKHRoaXMucm9vdC5rcyEsICdwJywgMSwgZW5kRnJhbWUsIGVuZFZhbHVlKVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAvLyBjYXNlICdza2V3JzpcbiAgICAgICAgICAgIC8vICAgICB0aGlzLmNvbnZlcnRUb0FuaW1hdGFibGVQcm9wZXJ0eSh0aGlzLnJvb3Qua3MhLCAncycpXG4gICAgICAgICAgICAvLyAgICAgYnJlYWtcbiAgICAgICAgICAgIC8vIGNhc2UgJ3NrZXdBeGlzJzpcbiAgICAgICAgICAgIC8vICAgICB0aGlzLmNvbnZlcnRUb0FuaW1hdGFibGVQcm9wZXJ0eSh0aGlzLnJvb3Qua3MhLCAncycpXG4gICAgICAgICAgICAvLyAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgJ3JvdGF0ZSc6XG4gICAgICAgICAgICAgICAgdGhpcy5jb252ZXJ0VG9BbmltYXRhYmxlUHJvcGVydHkodGhpcy5yb290LmtzISwgJ3InKVxuICAgICAgICAgICAgICAgIHRoaXMuYWRkS2V5ZnJhbWUodGhpcy5yb290LmtzISwgJ3InLCAtMSwgc3RhcnRGcmFtZSwgc3RhcnRWYWx1ZSwgZWFzaW5nKVxuICAgICAgICAgICAgICAgIHRoaXMuYWRkS2V5ZnJhbWUodGhpcy5yb290LmtzISwgJ3InLCAtMSwgZW5kRnJhbWUsIGVuZFZhbHVlKVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlICdvcGFjaXR5JzpcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnZlcnRUb0FuaW1hdGFibGVQcm9wZXJ0eSh0aGlzLnJvb3Qua3MhLCAnbycpXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRLZXlmcmFtZSh0aGlzLnJvb3Qua3MhLCAnbycsIC0xLCBzdGFydEZyYW1lLCBzdGFydFZhbHVlLCBlYXNpbmcpXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRLZXlmcmFtZSh0aGlzLnJvb3Qua3MhLCAnbycsIC0xLCBlbmRGcmFtZSwgZW5kVmFsdWUpXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihrZXksIHN0YXJ0RnJhbWUsIGVuZEZyYW1lLCBzdGFydFZhbHVlLCBlbmRWYWx1ZSwgZWFzaW5nKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm90IGEgdmFsaWQga2V5LicpXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMYXllckZhY3Rvcnkge1xuICAgIHByaXZhdGUgc3RhdGljIGdlbmVyYXRlVHJhbnNmb3JtKGNvb3JkaW5hdGU6IG51bWJlcltdKTogVHJhbnNmb3JtIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG86IHtcbiAgICAgICAgICAgICAgICBhOiAwLFxuICAgICAgICAgICAgICAgIGs6IDEwMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHI6IHtcbiAgICAgICAgICAgICAgICBhOiAwLFxuICAgICAgICAgICAgICAgIGs6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwOiB7XG4gICAgICAgICAgICAgICAgYTogMCxcbiAgICAgICAgICAgICAgICBrOiBbXG4gICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVbMF0sXG4gICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVbMV0sXG4gICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYToge1xuICAgICAgICAgICAgICAgIGE6IDAsXG4gICAgICAgICAgICAgICAgazogW1xuICAgICAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHM6IHtcbiAgICAgICAgICAgICAgICBhOiAwLFxuICAgICAgICAgICAgICAgIGs6IFtcbiAgICAgICAgICAgICAgICAgICAgMTAwLFxuICAgICAgICAgICAgICAgICAgICAxMDAsXG4gICAgICAgICAgICAgICAgICAgIDEwMFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGdldEJvdW5kaW5nQm94KGRvbTogU1ZHR3JhcGhpY3NFbGVtZW50KSB7XG4gICAgICAgIGxldCBzdmdSb290OiBTVkdFbGVtZW50ID0gZG9tXG4gICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICBpZiAoc3ZnUm9vdC5wYXJlbnRFbGVtZW50IGluc3RhbmNlb2YgU1ZHR3JhcGhpY3NFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgc3ZnUm9vdCA9IHN2Z1Jvb3QucGFyZW50RWxlbWVudFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJvb3RCQm94ID0gc3ZnUm9vdC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICBjb25zdCByZWZCQm94ID0gZG9tLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgIGNvbnN0IGNvb3JkaW5hdGU6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXJdID0gW3JlZkJCb3gubGVmdCAtIHJvb3RCQm94LmxlZnQsIHJlZkJCb3gudG9wIC0gcm9vdEJCb3gudG9wLCByZWZCQm94LndpZHRoICsgMSwgcmVmQkJveC5oZWlnaHQgKyAxXVxuICAgICAgICByZXR1cm4gY29vcmRpbmF0ZVxuICAgIH1cblxuICAgIHN0YXRpYyBib3VuZGluZ0JveChkb206IFNWR0dyYXBoaWNzRWxlbWVudCkge1xuICAgICAgICBjb25zdCBjb29yZGluYXRlID0gdGhpcy5nZXRCb3VuZGluZ0JveChkb20pXG4gICAgICAgIHJldHVybiB0aGlzLnJlY3QoLi4uY29vcmRpbmF0ZSlcbiAgICB9XG5cbiAgICBzdGF0aWMgc2hhcGUoZG9tOiBTVkdQYXRoRWxlbWVudCkge1xuICAgICAgICBjb25zdCBjb29yZGluYXRlID0gdGhpcy5nZXRCb3VuZGluZ0JveChkb20pXG4gICAgICAgIGNvbnN0IGxheWVyOiBTaGFwZUxheWVyID0ge1xuICAgICAgICAgICAgdHk6IDQsXG4gICAgICAgICAgICBkZGQ6IDAsXG4gICAgICAgICAgICBzcjogMSxcbiAgICAgICAgICAgIGFvOiAwLFxuICAgICAgICAgICAga3M6IHRoaXMuZ2VuZXJhdGVUcmFuc2Zvcm0oY29vcmRpbmF0ZSksXG4gICAgICAgICAgICBpcDogMCxcbiAgICAgICAgICAgIG9wOiAxLFxuICAgICAgICAgICAgc3Q6IDAsXG4gICAgICAgICAgICBibTogMCxcbiAgICAgICAgICAgIHNoYXBlczogW1xuICAgICAgICAgICAgICAgIHJlbmRlcihkb20pXG4gICAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBKU01vdmluTGF5ZXIobGF5ZXIpXG4gICAgfVxuXG4gICAgc3RhdGljIHJlY3QobGVmdDogbnVtYmVyLCB0b3A6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgbGF5ZXI6IFNoYXBlTGF5ZXIgPSB7XG4gICAgICAgICAgICB0eTogNCxcbiAgICAgICAgICAgIGRkZDogMCxcbiAgICAgICAgICAgIHNyOiAxLFxuICAgICAgICAgICAgYW86IDAsXG4gICAgICAgICAgICBrczogdGhpcy5nZW5lcmF0ZVRyYW5zZm9ybShbbGVmdCwgdG9wLCB3aWR0aCwgaGVpZ2h0XSksXG4gICAgICAgICAgICBpcDogMCxcbiAgICAgICAgICAgIG9wOiAxLFxuICAgICAgICAgICAgc3Q6IDAsXG4gICAgICAgICAgICBibTogMCxcbiAgICAgICAgICAgIHNoYXBlczogW1xuICAgICAgICAgICAgICAgIHJlbmRlclBsYWluR2x5cGgoJ3JlY3QnLCBbd2lkdGgsIGhlaWdodF0pXG4gICAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBKU01vdmluTGF5ZXIobGF5ZXIpXG4gICAgfVxuXG4gICAgc3RhdGljIGVsbGlwc2UoY3g6IG51bWJlciwgY3k6IG51bWJlciwgcng6IG51bWJlciwgcnk6IG51bWJlcikge1xuICAgICAgICBjb25zdCBsYXllcjogU2hhcGVMYXllciA9IHtcbiAgICAgICAgICAgIHR5OiA0LFxuICAgICAgICAgICAgZGRkOiAwLFxuICAgICAgICAgICAgc3I6IDEsXG4gICAgICAgICAgICBhbzogMCxcbiAgICAgICAgICAgIGtzOiB0aGlzLmdlbmVyYXRlVHJhbnNmb3JtKFtjeCAtIHJ4LCBjeSAtIHJ5LCAyICogcngsIDIgKiByeV0pLFxuICAgICAgICAgICAgaXA6IDAsXG4gICAgICAgICAgICBvcDogMSxcbiAgICAgICAgICAgIHN0OiAwLFxuICAgICAgICAgICAgYm06IDAsXG4gICAgICAgICAgICBzaGFwZXM6IFtcbiAgICAgICAgICAgICAgICByZW5kZXJQbGFpbkdseXBoKCdlbGxpcHNlJywgW3J4LCByeV0pXG4gICAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBKU01vdmluTGF5ZXIobGF5ZXIpXG4gICAgfVxuXG4gICAgc3RhdGljIGhpZXJhcmNoeShkb206IFNWR0dyYXBoaWNzRWxlbWVudCwgYXNzZXRMaXN0OiBBc3NldHMsIGZvbnRMaXN0OiBGb250cykge1xuICAgICAgICBjb25zdCBjb29yZGluYXRlID0gdGhpcy5nZXRCb3VuZGluZ0JveChkb20pXG4gICAgICAgIGxldCBkb21UeXBlOiAyIHwgNCB8IDU7XG4gICAgICAgIGlmIChkb20gaW5zdGFuY2VvZiBTVkdUZXh0RWxlbWVudCkge1xuICAgICAgICAgICAgZG9tVHlwZSA9IDVcbiAgICAgICAgfSBlbHNlIGlmIChkb20gaW5zdGFuY2VvZiBTVkdJbWFnZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIGRvbVR5cGUgPSAyXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkb21UeXBlID0gNFxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGxheWVyOiBTaGFwZUxheWVyIHwgSW1hZ2VMYXllciB8IFRleHRMYXllciA9IHtcbiAgICAgICAgICAgIHR5OiBkb21UeXBlLFxuICAgICAgICAgICAgZGRkOiAwLFxuICAgICAgICAgICAgc3I6IDEsXG4gICAgICAgICAgICBhbzogMCxcbiAgICAgICAgICAgIGtzOiB0aGlzLmdlbmVyYXRlVHJhbnNmb3JtKGNvb3JkaW5hdGUpLFxuICAgICAgICAgICAgaXA6IDAsXG4gICAgICAgICAgICBvcDogMSxcbiAgICAgICAgICAgIHN0OiAwLFxuICAgICAgICAgICAgYm06IDBcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKGRvbVR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBpZiAoYXNzZXRMaXN0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlTGF5ZXIgPSBsYXllciBhcyBJbWFnZUxheWVyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IFtyZWZJZCwgYXNzZXRdID0gcmVuZGVySW1hZ2UoZG9tIGFzIFNWR0ltYWdlRWxlbWVudClcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VMYXllci5yZWZJZCA9IHJlZklkXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0TGlzdC5wdXNoKGFzc2V0KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIGNvbnN0IHNoYXBlTGF5ZXIgPSBsYXllciBhcyBTaGFwZUxheWVyXG4gICAgICAgICAgICAgICAgc2hhcGVMYXllci5zaGFwZXMgPSBbXVxuICAgICAgICAgICAgICAgIHNoYXBlTGF5ZXIuc2hhcGVzLnB1c2gocmVuZGVyKGRvbSkpXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXh0TGF5ZXIgPSBsYXllciBhcyBUZXh0TGF5ZXJcbiAgICAgICAgICAgICAgICBjb25zdCBbdGV4dERhdGEsIGZvbnRdID0gcmVuZGVyVGV4dChkb20gYXMgU1ZHVGV4dEVsZW1lbnQpXG4gICAgICAgICAgICAgICAgdGV4dExheWVyLnQgPSB0ZXh0RGF0YVxuICAgICAgICAgICAgICAgIGZvbnRMaXN0Lmxpc3QhLnB1c2goZm9udClcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbW92aW5MYXllciA9IG5ldyBKU01vdmluTGF5ZXIobGF5ZXIpXG4gICAgICAgIHJldHVybiBtb3ZpbkxheWVyXG4gICAgfVxufSJdfQ==

/***/ }),

/***/ "./node_modules/jsmovin/bin/path.js":
/*!******************************************!*\
  !*** ./node_modules/jsmovin/bin/path.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PathMaker = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PathMaker =
/*#__PURE__*/
function () {
  function PathMaker() {
    _classCallCheck(this, PathMaker);

    _defineProperty(this, "path", {
      c: false,
      i: [],
      o: [],
      v: []
    });

    _defineProperty(this, "currentX", 0);

    _defineProperty(this, "currentY", 0);
  }

  _createClass(PathMaker, [{
    key: "moveTo",
    value: function moveTo(x, y) {
      this.path.c = false;
      this.path.i = [[0, 0]];
      this.path.o = [];
      this.path.v = [[x, y]];
      this.currentX = x;
      this.currentY = y;
    }
  }, {
    key: "lineTo",
    value: function lineTo(x, y) {
      this.path.i.push([0, 0]);
      this.path.o.push([0, 0]);
      this.path.v.push([x, y]);
      this.currentX = x;
      this.currentY = y;
    }
  }, {
    key: "lineToRelative",
    value: function lineToRelative(x, y) {
      this.lineTo(this.currentX + x, this.currentY + y);
    }
  }, {
    key: "horizontalTo",
    value: function horizontalTo(x) {
      this.lineTo(x, this.currentY);
    }
  }, {
    key: "horizontalToRelative",
    value: function horizontalToRelative(x) {
      this.horizontalTo(this.currentX + x);
    }
  }, {
    key: "verticalTo",
    value: function verticalTo(y) {
      this.lineTo(this.currentX, y);
    }
  }, {
    key: "verticalToRelative",
    value: function verticalToRelative(y) {
      this.verticalTo(this.currentY + y);
    }
  }, {
    key: "cubicBezierCurveTo",
    value: function cubicBezierCurveTo(c1x, c1y, c2x, c2y, x, y) {
      this.path.i.push([c2x - x, c2y - y]);
      this.path.o.push([c1x - this.currentX, c1y - this.currentY]);
      this.path.v.push([x, y]);
      this.currentX = x;
      this.currentY = y;
    }
  }, {
    key: "cubicBezierCurveToRelative",
    value: function cubicBezierCurveToRelative(c1x, c1y, c2x, c2y, x, y) {
      this.cubicBezierCurveTo(this.currentX + c1x, this.currentY + c1y, this.currentX + c2x, this.currentY + c2y, this.currentX + x, this.currentY + y);
    }
  }, {
    key: "quadraticBezierCurveTo",
    value: function quadraticBezierCurveTo(cx, cy, x, y) {
      this.path.i.push([cx - x, cy - y]);
      this.path.o.push([cx - this.currentX, cy - this.currentY]);
      this.path.v.push([x, y]);
      this.currentX = x;
      this.currentY = y;
    }
  }, {
    key: "quadraticBezierCurveToRelative",
    value: function quadraticBezierCurveToRelative(cx, cy, x, y) {
      this.quadraticBezierCurveTo(this.currentX + cx, this.currentY + cy, this.currentX + x, this.currentY + y);
    }
  }, {
    key: "arcTo",
    value: function arcTo(rx, ry, xAxisRotation, largeArcFlag, sweepFlag, x, y) {
      var cSeries = PathMaker.a2c(this.currentX, this.currentY, rx, ry, xAxisRotation, largeArcFlag, sweepFlag, x, y);

      while (cSeries.length >= 6) {
        var iovList = cSeries.splice(0, 6);
        this.path.i.push([iovList[2] - iovList[4], iovList[3] - iovList[5]]);
        this.path.o.push([iovList[0] - this.currentX, iovList[1] - this.currentY]);
        this.path.v.push([iovList[4], iovList[5]]);
        this.currentX = iovList[4];
        this.currentY = iovList[5];
      }
    }
  }, {
    key: "arcToRelative",
    value: function arcToRelative(rx, ry, xAxisRotation, largeArcFlag, sweepFlag, x, y) {
      this.arcTo(rx, ry, xAxisRotation, largeArcFlag, sweepFlag, this.currentX + x, this.currentY + y);
    }
  }, {
    key: "closePath",
    value: function closePath() {
      this.path.c = true;
    }
  }, {
    key: "uniform",
    value: function uniform() {
      while (this.path.o.length < this.path.i.length) {
        this.path.o.push([0, 0]);
      }
    }
  }], [{
    key: "a2c",
    value: function a2c(x1, y1, rx, ry, angle, large_arc_flag, sweep_flag, x2, y2, recursive) {
      // for more information of where this Math came from visit:
      // http://www.w3.org/TR/SVG11/implnote.html#ArcImplementationNotes
      var _120 = Math.PI * 120 / 180,
          rad = Math.PI / 180 * (+angle || 0),
          res = [],
          xy,
          rotate = function rotate(x, y, rad) {
        var X = x * Math.cos(rad) - y * Math.sin(rad),
            Y = x * Math.sin(rad) + y * Math.cos(rad);
        return {
          x: X,
          y: Y
        };
      };

      if (!rx || !ry) {
        return [x1, y1, x2, y2, x2, y2];
      }

      if (!recursive) {
        xy = rotate(x1, y1, -rad);
        x1 = xy.x;
        y1 = xy.y;
        xy = rotate(x2, y2, -rad);
        x2 = xy.x;
        y2 = xy.y;
        var cos = Math.cos(Math.PI / 180 * angle),
            sin = Math.sin(Math.PI / 180 * angle),
            x = (x1 - x2) / 2,
            y = (y1 - y2) / 2;
        var h = x * x / (rx * rx) + y * y / (ry * ry);

        if (h > 1) {
          h = Math.sqrt(h);
          rx = h * rx;
          ry = h * ry;
        }

        var rx2 = rx * rx,
            ry2 = ry * ry,
            k = (large_arc_flag == sweep_flag ? -1 : 1) * Math.sqrt(Math.abs((rx2 * ry2 - rx2 * y * y - ry2 * x * x) / (rx2 * y * y + ry2 * x * x))),
            cx = k * rx * y / ry + (x1 + x2) / 2,
            cy = k * -ry * x / rx + (y1 + y2) / 2,
            f1 = Math.asin((y1 - cy) / ry),
            f2 = Math.asin((y2 - cy) / ry);
        f1 = x1 < cx ? Math.PI - f1 : f1;
        f2 = x2 < cx ? Math.PI - f2 : f2;
        f1 < 0 && (f1 = Math.PI * 2 + f1);
        f2 < 0 && (f2 = Math.PI * 2 + f2);

        if (sweep_flag && f1 > f2) {
          f1 = f1 - Math.PI * 2;
        }

        if (!sweep_flag && f2 > f1) {
          f2 = f2 - Math.PI * 2;
        }
      } else {
        f1 = recursive[0];
        f2 = recursive[1];
        cx = recursive[2];
        cy = recursive[3];
      }

      var df = f2 - f1;

      if (Math.abs(df) > _120) {
        var f2old = f2,
            x2old = x2,
            y2old = y2;
        f2 = f1 + _120 * (sweep_flag && f2 > f1 ? 1 : -1);
        x2 = cx + rx * Math.cos(f2);
        y2 = cy + ry * Math.sin(f2);
        res = this.a2c(x2, y2, rx, ry, angle, 0, sweep_flag, x2old, y2old, [f2, f2old, cx, cy]);
      }

      df = f2 - f1;
      var c1 = Math.cos(f1),
          s1 = Math.sin(f1),
          c2 = Math.cos(f2),
          s2 = Math.sin(f2),
          t = Math.tan(df / 4),
          hx = 4 / 3 * rx * t,
          hy = 4 / 3 * ry * t,
          m1 = [x1, y1],
          m2 = [x1 + hx * s1, y1 - hy * c1],
          m3 = [x2 + hx * s2, y2 - hy * c2],
          m4 = [x2, y2];
      m2[0] = 2 * m1[0] - m2[0];
      m2[1] = 2 * m1[1] - m2[1];

      if (recursive) {
        return [m2, m3, m4].concat(res);
      } else {
        res = [m2, m3, m4].concat(res).join().split(",").map(function (x) {
          return parseFloat(x);
        });
        var newres = [];

        for (var i = 0, ii = res.length; i < ii; i++) {
          newres[i] = i % 2 ? rotate(res[i - 1], res[i], rad).y : rotate(res[i], res[i + 1], rad).x;
        }

        return newres;
      }
    }
  }]);

  return PathMaker;
}();

exports.PathMaker = PathMaker;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wYXRoLnRzIl0sIm5hbWVzIjpbIlBhdGhNYWtlciIsImMiLCJpIiwibyIsInYiLCJ4IiwieSIsInBhdGgiLCJjdXJyZW50WCIsImN1cnJlbnRZIiwicHVzaCIsImxpbmVUbyIsImhvcml6b250YWxUbyIsInZlcnRpY2FsVG8iLCJjMXgiLCJjMXkiLCJjMngiLCJjMnkiLCJjdWJpY0JlemllckN1cnZlVG8iLCJjeCIsImN5IiwicXVhZHJhdGljQmV6aWVyQ3VydmVUbyIsInJ4IiwicnkiLCJ4QXhpc1JvdGF0aW9uIiwibGFyZ2VBcmNGbGFnIiwic3dlZXBGbGFnIiwiY1NlcmllcyIsImEyYyIsImxlbmd0aCIsImlvdkxpc3QiLCJzcGxpY2UiLCJhcmNUbyIsIngxIiwieTEiLCJhbmdsZSIsImxhcmdlX2FyY19mbGFnIiwic3dlZXBfZmxhZyIsIngyIiwieTIiLCJyZWN1cnNpdmUiLCJfMTIwIiwiTWF0aCIsIlBJIiwicmFkIiwicmVzIiwieHkiLCJyb3RhdGUiLCJYIiwiY29zIiwic2luIiwiWSIsImgiLCJzcXJ0IiwicngyIiwicnkyIiwiayIsImFicyIsImYxIiwiYXNpbiIsImYyIiwiZGYiLCJmMm9sZCIsIngyb2xkIiwieTJvbGQiLCJjMSIsInMxIiwiYzIiLCJzMiIsInQiLCJ0YW4iLCJoeCIsImh5IiwibTEiLCJtMiIsIm0zIiwibTQiLCJjb25jYXQiLCJqb2luIiwic3BsaXQiLCJtYXAiLCJwYXJzZUZsb2F0IiwibmV3cmVzIiwiaWkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztJQUVhQSxTOzs7Ozs7a0NBQ2M7QUFDbkJDLE1BQUFBLENBQUMsRUFBRSxLQURnQjtBQUVuQkMsTUFBQUEsQ0FBQyxFQUFFLEVBRmdCO0FBR25CQyxNQUFBQSxDQUFDLEVBQUUsRUFIZ0I7QUFJbkJDLE1BQUFBLENBQUMsRUFBRTtBQUpnQixLOztzQ0FPRyxDOztzQ0FDQSxDOzs7OzsyQkFFWkMsQyxFQUFXQyxDLEVBQVc7QUFDaEMsV0FBS0MsSUFB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QUFTMkMsR0FBRyxDQUFDM0MsQ0FBQyxHQUFHLENBQUwsQ0FBWixFQUFxQjBDLEdBQXJCLENBQU4sQ0FBZ0N2QyxDQUF4RjtBQUNIOztBQUNELGVBQU82RSxNQUFQO0FBQ0g7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhdGhEZWYgfSBmcm9tICcuL2FuaW1hdGlvbidcblxuZXhwb3J0IGNsYXNzIFBhdGhNYWtlciB7XG4gICAgcHVibGljIHBhdGg6IFBhdGhEZWYgPSB7XG4gICAgICAgIGM6IGZhbHNlLFxuICAgICAgICBpOiBbXSxcbiAgICAgICAgbzogW10sXG4gICAgICAgIHY6IFtdXG4gICAgfTtcblxuICAgIHB1YmxpYyBjdXJyZW50WDogbnVtYmVyID0gMDtcbiAgICBwdWJsaWMgY3VycmVudFk6IG51bWJlciA9IDA7XG5cbiAgICBwdWJsaWMgbW92ZVRvKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMucGF0aC5jID0gZmFsc2VcbiAgICAgICAgdGhpcy5wYXRoLmkgPSBbWzAsIDBdXVxuICAgICAgICB0aGlzLnBhdGgubyA9IFtdXG4gICAgICAgIHRoaXMucGF0aC52ID0gW1t4LCB5XV1cbiAgICAgICAgdGhpcy5jdXJyZW50WCA9IHhcbiAgICAgICAgdGhpcy5jdXJyZW50WSA9IHlcbiAgICB9XG4gICAgcHVibGljIGxpbmVUbyh4OiBudW1iZXIsIHk6IG51bWJlcikge1xuICAgICAgICB0aGlzLnBhdGguaSEucHVzaChbMCwgMF0pXG4gICAgICAgIHRoaXMucGF0aC5vIS5wdXNoKFswLCAwXSlcbiAgICAgICAgdGhpcy5wYXRoLnYhLnB1c2goW3gsIHldKVxuICAgICAgICB0aGlzLmN1cnJlbnRYID0geFxuICAgICAgICB0aGlzLmN1cnJlbnRZID0geVxuICAgIH1cbiAgICBwdWJsaWMgbGluZVRvUmVsYXRpdmUoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5saW5lVG8odGhpcy5jdXJyZW50WCArIHgsIHRoaXMuY3VycmVudFkgKyB5KVxuICAgIH1cbiAgICBwdWJsaWMgaG9yaXpvbnRhbFRvKHg6IG51bWJlcikge1xuICAgICAgICB0aGlzLmxpbmVUbyh4LCB0aGlzLmN1cnJlbnRZKVxuICAgIH1cbiAgICBwdWJsaWMgaG9yaXpvbnRhbFRvUmVsYXRpdmUoeDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuaG9yaXpvbnRhbFRvKHRoaXMuY3VycmVudFggKyB4KVxuICAgIH1cbiAgICBwdWJsaWMgdmVydGljYWxUbyh5OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5saW5lVG8odGhpcy5jdXJyZW50WCwgeSlcbiAgICB9XG4gICAgcHVibGljIHZlcnRpY2FsVG9SZWxhdGl2ZSh5OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy52ZXJ0aWNhbFRvKHRoaXMuY3VycmVudFkgKyB5KVxuICAgIH1cbiAgICBwdWJsaWMgY3ViaWNCZXppZXJDdXJ2ZVRvKFxuICAgICAgICBjMXg6IG51bWJlcixcbiAgICAgICAgYzF5OiBudW1iZXIsXG4gICAgICAgIGMyeDogbnVtYmVyLFxuICAgICAgICBjMnk6IG51bWJlcixcbiAgICAgICAgeDogbnVtYmVyLFxuICAgICAgICB5OiBudW1iZXJcbiAgICApIHtcbiAgICAgICAgdGhpcy5wYXRoLmkhLnB1c2goW2MyeCAtIHgsIGMyeSAtIHldKVxuICAgICAgICB0aGlzLnBhdGgubyEucHVzaChbYzF4IC0gdGhpcy5jdXJyZW50WCwgYzF5IC0gdGhpcy5jdXJyZW50WV0pXG4gICAgICAgIHRoaXMucGF0aC52IS5wdXNoKFt4LCB5XSlcbiAgICAgICAgdGhpcy5jdXJyZW50WCA9IHhcbiAgICAgICAgdGhpcy5jdXJyZW50WSA9IHlcbiAgICB9XG4gICAgcHVibGljIGN1YmljQmV6aWVyQ3VydmVUb1JlbGF0aXZlKFxuICAgICAgICBjMXg6IG51bWJlcixcbiAgICAgICAgYzF5OiBudW1iZXIsXG4gICAgICAgIGMyeDogbnVtYmVyLFxuICAgICAgICBjMnk6IG51bWJlcixcbiAgICAgICAgeDogbnVtYmVyLFxuICAgICAgICB5OiBudW1iZXJcbiAgICApIHtcbiAgICAgICAgdGhpcy5jdWJpY0JlemllckN1cnZlVG8odGhpcy5jdXJyZW50WCArIGMxeCwgdGhpcy5jdXJyZW50WSArIGMxeSwgdGhpcy5jdXJyZW50WCArIGMyeCwgdGhpcy5jdXJyZW50WSArIGMyeSwgdGhpcy5jdXJyZW50WCArIHgsIHRoaXMuY3VycmVudFkgKyB5KVxuICAgIH1cbiAgICBwdWJsaWMgcXVhZHJhdGljQmV6aWVyQ3VydmVUbyhjeDogbnVtYmVyLCBjeTogbnVtYmVyLCB4OiBudW1iZXIsIHk6IG51bWJlcikge1xuICAgICAgICB0aGlzLnBhdGguaSEucHVzaChbY3ggLSB4LCBjeSAtIHldKVxuICAgICAgICB0aGlzLnBhdGgubyEucHVzaChbY3ggLSB0aGlzLmN1cnJlbnRYLCBjeSAtIHRoaXMuY3VycmVudFldKVxuICAgICAgICB0aGlzLnBhdGgudiEucHVzaChbeCwgeV0pXG4gICAgICAgIHRoaXMuY3VycmVudFggPSB4XG4gICAgICAgIHRoaXMuY3VycmVudFkgPSB5XG4gICAgfVxuICAgIHB1YmxpYyBxdWFkcmF0aWNCZXppZXJDdXJ2ZVRvUmVsYXRpdmUoY3g6IG51bWJlciwgY3k6IG51bWJlciwgeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5xdWFkcmF0aWNCZXppZXJDdXJ2ZVRvKHRoaXMuY3VycmVudFggKyBjeCwgdGhpcy5jdXJyZW50WSArIGN5LCB0aGlzLmN1cnJlbnRYICsgeCwgdGhpcy5jdXJyZW50WSArIHkpXG4gICAgfVxuICAgIHB1YmxpYyBhcmNUbyhcbiAgICAgICAgcng6IG51bWJlcixcbiAgICAgICAgcnk6IG51bWJlcixcbiAgICAgICAgeEF4aXNSb3RhdGlvbjogbnVtYmVyLFxuICAgICAgICBsYXJnZUFyY0ZsYWc6IG51bWJlcixcbiAgICAgICAgc3dlZXBGbGFnOiBudW1iZXIsXG4gICAgICAgIHg6IG51bWJlcixcbiAgICAgICAgeTogbnVtYmVyXG4gICAgKSB7XG4gICAgICAgIGNvbnN0IGNTZXJpZXMgPSBQYXRoTWFrZXIuYTJjKHRoaXMuY3VycmVudFgsIHRoaXMuY3VycmVudFksIHJ4LCByeSwgeEF4aXNSb3RhdGlvbiwgbGFyZ2VBcmNGbGFnLCBzd2VlcEZsYWcsIHgsIHkpIGFzIG51bWJlcltdXG4gICAgICAgIHdoaWxlIChjU2VyaWVzLmxlbmd0aCA+PSA2KSB7XG4gICAgICAgICAgICBjb25zdCBpb3ZMaXN0ID0gY1Nlcmllcy5zcGxpY2UoMCwgNilcbiAgICAgICAgICAgIHRoaXMucGF0aC5pIS5wdXNoKFtpb3ZMaXN0WzJdIC0gaW92TGlzdFs0XSwgaW92TGlzdFszXSAtIGlvdkxpc3RbNV1dKVxuICAgICAgICAgICAgdGhpcy5wYXRoLm8hLnB1c2goW2lvdkxpc3RbMF0gLSB0aGlzLmN1cnJlbnRYLCBpb3ZMaXN0WzFdIC0gdGhpcy5jdXJyZW50WV0pXG4gICAgICAgICAgICB0aGlzLnBhdGgudiEucHVzaChbaW92TGlzdFs0XSwgaW92TGlzdFs1XV0pXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRYID0gaW92TGlzdFs0XVxuICAgICAgICAgICAgdGhpcy5jdXJyZW50WSA9IGlvdkxpc3RbNV1cbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgYXJjVG9SZWxhdGl2ZShcbiAgICAgICAgcng6IG51bWJlcixcbiAgICAgICAgcnk6IG51bWJlcixcbiAgICAgICAgeEF4aXNSb3RhdGlvbjogbnVtYmVyLFxuICAgICAgICBsYXJnZUFyY0ZsYWc6IG51bWJlcixcbiAgICAgICAgc3dlZXBGbGFnOiBudW1iZXIsXG4gICAgICAgIHg6IG51bWJlcixcbiAgICAgICAgeTogbnVtYmVyXG4gICAgKSB7XG4gICAgICAgIHRoaXMuYXJjVG8ocngsIHJ5LCB4QXhpc1JvdGF0aW9uLCBsYXJnZUFyY0ZsYWcsIHN3ZWVwRmxhZywgdGhpcy5jdXJyZW50WCArIHgsIHRoaXMuY3VycmVudFkgKyB5KVxuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGEyYyh4MTogbnVtYmVyLCB5MTogbnVtYmVyLCByeDogbnVtYmVyLCByeTogbnVtYmVyLCBhbmdsZTogbnVtYmVyLCBsYXJnZV9hcmNfZmxhZzogbnVtYmVyLCBzd2VlcF9mbGFnOiBudW1iZXIsIHgyOiBudW1iZXIsIHkyOiBudW1iZXIsIHJlY3Vyc2l2ZT86IG51bWJlcltdKTogbnVtYmVyW10gfCBudW1iZXJbXVtdIHtcbiAgICAgICAgLy8gZm9yIG1vcmUgaW5mb3JtYXRpb24gb2Ygd2hlcmUgdGhpcyBNYXRoIGNhbWUgZnJvbSB2aXNpdDpcbiAgICAgICAgLy8gaHR0cDovL3d3dy53My5vcmcvVFIvU1ZHMTEvaW1wbG5vdGUuaHRtbCNBcmNJbXBsZW1lbnRhdGlvbk5vdGVzXG4gICAgICAgIHZhciBfMTIwID0gTWF0aC5QSSAqIDEyMCAvIDE4MCxcbiAgICAgICAgICAgIHJhZCA9IE1hdGguUEkgLyAxODAgKiAoK2FuZ2xlIHx8IDApLFxuICAgICAgICAgICAgcmVzOiBudW1iZXJbXSA9IFtdLFxuICAgICAgICAgICAgeHksXG4gICAgICAgICAgICByb3RhdGUgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIsIHJhZDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIFggPSB4ICogTWF0aC5jb3MocmFkKSAtIHkgKiBNYXRoLnNpbihyYWQpLFxuICAgICAgICAgICAgICAgICAgICBZID0geCAqIE1hdGguc2luKHJhZCkgKyB5ICogTWF0aC5jb3MocmFkKTtcbiAgICAgICAgICAgICAgICByZXR1cm4geyB4OiBYLCB5OiBZIH07XG4gICAgICAgICAgICB9O1xuICAgICAgICBpZiAoIXJ4IHx8ICFyeSkge1xuICAgICAgICAgICAgcmV0dXJuIFt4MSwgeTEsIHgyLCB5MiwgeDIsIHkyXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXJlY3Vyc2l2ZSkge1xuICAgICAgICAgICAgeHkgPSByb3RhdGUoeDEsIHkxLCAtcmFkKTtcbiAgICAgICAgICAgIHgxID0geHkueDtcbiAgICAgICAgICAgIHkxID0geHkueTtcbiAgICAgICAgICAgIHh5ID0gcm90YXRlKHgyLCB5MiwgLXJhZCk7XG4gICAgICAgICAgICB4MiA9IHh5Lng7XG4gICAgICAgICAgICB5MiA9IHh5Lnk7XG4gICAgICAgICAgICB2YXIgY29zID0gTWF0aC5jb3MoTWF0aC5QSSAvIDE4MCAqIGFuZ2xlKSxcbiAgICAgICAgICAgICAgICBzaW4gPSBNYXRoLnNpbihNYXRoLlBJIC8gMTgwICogYW5nbGUpLFxuICAgICAgICAgICAgICAgIHggPSAoeDEgLSB4MikgLyAyLFxuICAgICAgICAgICAgICAgIHkgPSAoeTEgLSB5MikgLyAyO1xuICAgICAgICAgICAgdmFyIGggPSB4ICogeCAvIChyeCAqIHJ4KSArIHkgKiB5IC8gKHJ5ICogcnkpO1xuICAgICAgICAgICAgaWYgKGggPiAxKSB7XG4gICAgICAgICAgICAgICAgaCA9IE1hdGguc3FydChoKTtcbiAgICAgICAgICAgICAgICByeCA9IGggKiByeDtcbiAgICAgICAgICAgICAgICByeSA9IGggKiByeTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciByeDIgPSByeCAqIHJ4LFxuICAgICAgICAgICAgICAgIHJ5MiA9IHJ5ICogcnksXG4gICAgICAgICAgICAgICAgayA9IChsYXJnZV9hcmNfZmxhZyA9PSBzd2VlcF9mbGFnID8gLTEgOiAxKSAqXG4gICAgICAgICAgICAgICAgICAgIE1hdGguc3FydChNYXRoLmFicygocngyICogcnkyIC0gcngyICogeSAqIHkgLSByeTIgKiB4ICogeCkgLyAocngyICogeSAqIHkgKyByeTIgKiB4ICogeCkpKSxcbiAgICAgICAgICAgICAgICBjeCA9IGsgKiByeCAqIHkgLyByeSArICh4MSArIHgyKSAvIDIsXG4gICAgICAgICAgICAgICAgY3kgPSBrICogLXJ5ICogeCAvIHJ4ICsgKHkxICsgeTIpIC8gMixcbiAgICAgICAgICAgICAgICBmMSA9IE1hdGguYXNpbigoeTEgLSBjeSkgLyByeSksXG4gICAgICAgICAgICAgICAgZjIgPSBNYXRoLmFzaW4oKHkyIC0gY3kpIC8gcnkpO1xuXG4gICAgICAgICAgICBmMSA9IHgxIDwgY3ggPyBNYXRoLlBJIC0gZjEgOiBmMTtcbiAgICAgICAgICAgIGYyID0geDIgPCBjeCA/IE1hdGguUEkgLSBmMiA6IGYyO1xuICAgICAgICAgICAgZjEgPCAwICYmIChmMSA9IE1hdGguUEkgKiAyICsgZjEpO1xuICAgICAgICAgICAgZjIgPCAwICYmIChmMiA9IE1hdGguUEkgKiAyICsgZjIpO1xuICAgICAgICAgICAgaWYgKHN3ZWVwX2ZsYWcgJiYgZjEgPiBmMikge1xuICAgICAgICAgICAgICAgIGYxID0gZjEgLSBNYXRoLlBJICogMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghc3dlZXBfZmxhZyAmJiBmMiA+IGYxKSB7XG4gICAgICAgICAgICAgICAgZjIgPSBmMiAtIE1hdGguUEkgKiAyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZjEgPSByZWN1cnNpdmVbMF07XG4gICAgICAgICAgICBmMiA9IHJlY3Vyc2l2ZVsxXTtcbiAgICAgICAgICAgIGN4ID0gcmVjdXJzaXZlWzJdO1xuICAgICAgICAgICAgY3kgPSByZWN1cnNpdmVbM107XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGRmID0gZjIgLSBmMTtcbiAgICAgICAgaWYgKE1hdGguYWJzKGRmKSA+IF8xMjApIHtcbiAgICAgICAgICAgIHZhciBmMm9sZCA9IGYyLFxuICAgICAgICAgICAgICAgIHgyb2xkID0geDIsXG4gICAgICAgICAgICAgICAgeTJvbGQgPSB5MjtcbiAgICAgICAgICAgIGYyID0gZjEgKyBfMTIwICogKHN3ZWVwX2ZsYWcgJiYgZjIgPiBmMSA/IDEgOiAtMSk7XG4gICAgICAgICAgICB4MiA9IGN4ICsgcnggKiBNYXRoLmNvcyhmMik7XG4gICAgICAgICAgICB5MiA9IGN5ICsgcnkgKiBNYXRoLnNpbihmMik7XG4gICAgICAgICAgICByZXMgPSB0aGlzLmEyYyh4MiwgeTIsIHJ4LCByeSwgYW5nbGUsIDAsIHN3ZWVwX2ZsYWcsIHgyb2xkLCB5Mm9sZCwgW2YyLCBmMm9sZCwgY3gsIGN5XSkgYXMgbnVtYmVyW107XG4gICAgICAgIH1cbiAgICAgICAgZGYgPSBmMiAtIGYxO1xuICAgICAgICB2YXIgYzEgPSBNYXRoLmNvcyhmMSksXG4gICAgICAgICAgICBzMSA9IE1hdGguc2luKGYxKSxcbiAgICAgICAgICAgIGMyID0gTWF0aC5jb3MoZjIpLFxuICAgICAgICAgICAgczIgPSBNYXRoLnNpbihmMiksXG4gICAgICAgICAgICB0ID0gTWF0aC50YW4oZGYgLyA0KSxcbiAgICAgICAgICAgIGh4ID0gNCAvIDMgKiByeCAqIHQsXG4gICAgICAgICAgICBoeSA9IDQgLyAzICogcnkgKiB0LFxuICAgICAgICAgICAgbTEgPSBbeDEsIHkxXSxcbiAgICAgICAgICAgIG0yID0gW3gxICsgaHggKiBzMSwgeTEgLSBoeSAqIGMxXSxcbiAgICAgICAgICAgIG0zID0gW3gyICsgaHggKiBzMiwgeTIgLSBoeSAqIGMyXSxcbiAgICAgICAgICAgIG00ID0gW3gyLCB5Ml07XG4gICAgICAgIG0yWzBdID0gMiAqIG0xWzBdIC0gbTJbMF07XG4gICAgICAgIG0yWzFdID0gMiAqIG0xWzFdIC0gbTJbMV07XG4gICAgICAgIGlmIChyZWN1cnNpdmUpIHtcbiAgICAgICAgICAgIHJldHVybiBbbTIsIG0zLCBtNF0uY29uY2F0KHJlcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXMgPSBbbTIsIG0zLCBtNF0uY29uY2F0KHJlcykuam9pbigpLnNwbGl0KFwiLFwiKS5tYXAoeCA9PiBwYXJzZUZsb2F0KHgpKTtcbiAgICAgICAgICAgIHZhciBuZXdyZXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBpaSA9IHJlcy5sZW5ndGg7IGkgPCBpaTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbmV3cmVzW2ldID0gaSAlIDIgPyByb3RhdGUocmVzW2kgLSAxXSwgcmVzW2ldLCByYWQpLnkgOiByb3RhdGUocmVzW2ldLCByZXNbaSArIDFdLCByYWQpLng7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbmV3cmVzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGNsb3NlUGF0aCgpIHtcbiAgICAgICAgdGhpcy5wYXRoLmMgPSB0cnVlXG4gICAgfVxuXG4gICAgcHVibGljIHVuaWZvcm0oKSB7XG4gICAgICAgIHdoaWxlICh0aGlzLnBhdGgubyEubGVuZ3RoIDwgdGhpcy5wYXRoLmkhLmxlbmd0aClcbiAgICAgICAgICAgIHRoaXMucGF0aC5vIS5wdXNoKFswLCAwXSlcbiAgICB9XG59Il19

/***/ }),

/***/ "./node_modules/jsmovin/bin/render.js":
/*!********************************************!*\
  !*** ./node_modules/jsmovin/bin/render.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = render;
exports.renderPlainGlyph = renderPlainGlyph;
exports.renderText = renderText;
exports.renderImage = renderImage;

var _path = __webpack_require__(/*! ./path */ "./node_modules/jsmovin/bin/path.js");

var _v = _interopRequireDefault(__webpack_require__(/*! uuid/v4 */ "./node_modules/uuid/v4.js"));

var _svgPathParser = __webpack_require__(/*! svg-path-parser */ "./node_modules/svg-path-parser/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function render(dom) {
  if (dom instanceof SVGTextElement || dom instanceof SVGImageElement) {
    return {};
  } else if (dom instanceof SVGGElement) {
    return renderGroup(dom);
  } else {
    return renderGlyph(dom);
  }
}

function encodeLineCap(type) {
  switch (type) {
    case 'square':
      return 3;

    case 'butt':
      return 1;

    default:
      return 2;
  }
}

function encodeLineJoin(type) {
  switch (type) {
    case 'miter':
      return 1;

    case 'bevel':
      return 3;

    default:
      return 2;
  }
}

function addVisualEncodings(items, styles) {
  if (styles.stroke && styles.stroke !== 'none') {
    items.push({
      ty: 'st',
      c: {
        k: styles.stroke.split('(')[1].split(')')[0].split(',').slice(0, 3).map(function (raw) {
          return parseInt(raw) / 255;
        }).concat(1)
      },
      o: {
        k: parseFloat(styles.strokeOpacity || '1') * 100
      },
      w: {
        k: parseFloat(styles.strokeWidth || '1')
      },
      lc: encodeLineCap(styles.strokeLinecap),
      lj: encodeLineJoin(styles.strokeLinejoin)
    });
  }

  if (styles.fill && styles.fill !== 'none') {
    items.push({
      ty: 'fl',
      c: {
        k: styles.fill.split('(')[1].split(')')[0].split(',').slice(0, 3).map(function (raw) {
          return parseInt(raw) / 255;
        }).concat(1)
      },
      o: {
        k: parseFloat(styles.fillOpacity || '1') * 100
      }
    });
  }

  items.push({
    ty: "tr",
    p: {
      k: [0, 0]
    },
    a: {
      k: [0, 0]
    },
    s: {
      k: [100, 100]
    },
    r: {
      k: 0
    },
    o: {
      k: 100
    },
    sk: {
      k: 0
    },
    sa: {
      k: 0
    }
  });
}

function renderGlyph(dom) {
  var group = {
    ty: "gr",
    it: [],
    bm: 0,
    hd: false
  };

  var postActions = function postActions(pathMaker) {
    pathMaker.uniform();
    group.it.push({
      ty: 'sh',
      ks: {
        k: pathMaker.path,
        a: 0
      },
      nm: dom.id,
      hd: false
    });
    var styles = window.getComputedStyle(dom);
    addVisualEncodings(group.it, styles);
  };

  if (dom instanceof SVGCircleElement) {
    var svgLength = dom.r.baseVal;
    svgLength.convertToSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PX);
    var r = svgLength.valueInSpecifiedUnits;
    var pathMaker = new _path.PathMaker();
    pathMaker.moveTo(r, 0);
    pathMaker.arcTo(r, r, 0, 1, 0, r, 2 * r);
    pathMaker.arcTo(r, r, 0, 1, 0, r, 0);
    pathMaker.closePath();
    postActions(pathMaker);
  } else if (dom instanceof SVGEllipseElement) {
    var mapKey = ['rx', 'ry'];

    var _mapKey$map = mapKey.map(function (key) {
      var svgLength = dom[key].baseVal;
      svgLength.convertToSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PX);
      return svgLength.valueInSpecifiedUnits;
    }),
        _mapKey$map2 = _slicedToArray(_mapKey$map, 2),
        rx = _mapKey$map2[0],
        ry = _mapKey$map2[1];

    var _pathMaker = new _path.PathMaker();

    _pathMaker.moveTo(rx, 0);

    _pathMaker.arcTo(rx, ry, 0, 1, 0, rx, 2 * ry);

    _pathMaker.arcTo(rx, ry, 0, 1, 0, rx, 0);

    _pathMaker.closePath();

    postActions(_pathMaker);
  } else if (dom instanceof SVGLineElement) {
    var _mapKey = ['x1', 'x2', 'y1', 'y2'];

    var _mapKey$map3 = _mapKey.map(function (key) {
      var svgLength = dom[key].baseVal;
      svgLength.convertToSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PX);
      return svgLength.valueInSpecifiedUnits;
    }),
        _mapKey$map4 = _slicedToArray(_mapKey$map3, 4),
        x1 = _mapKey$map4[0],
        x2 = _mapKey$map4[1],
        y1 = _mapKey$map4[2],
        y2 = _mapKey$map4[3];

    var offsetX = Math.min(x1, x2);
    var offsetY = Math.min(y1, y2);

    var _pathMaker2 = new _path.PathMaker();

    _pathMaker2.moveTo(x1 - offsetX, y1 - offsetY);

    _pathMaker2.lineTo(x2 - offsetX, y2 - offsetY);

    postActions(_pathMaker2);
  } else if (dom instanceof SVGPathElement) {
    var pathData = dom.getAttribute('d') || '';
    var pathDataSeries = (0, _svgPathParser.parseSVG)(pathData);

    var _pathMaker3 = new _path.PathMaker();

    var pathDataWithType;
    pathDataSeries.forEach(function (pathDataItem) {
      switch (pathDataItem.code) {
        case 'M':
          pathDataWithType = pathDataItem;

          _pathMaker3.moveTo(pathDataWithType.x, pathDataWithType.y);

          break;

        case 'L':
          pathDataWithType = pathDataItem;

          _pathMaker3.lineTo(pathDataWithType.x, pathDataWithType.y);

          break;

        case 'l':
          pathDataWithType = pathDataItem;

          _pathMaker3.lineToRelative(pathDataWithType.x, pathDataWithType.y);

          break;

        case 'H':
          pathDataWithType = pathDataItem;

          _pathMaker3.horizontalTo(pathDataWithType.x);

          break;

        case 'h':
          pathDataWithType = pathDataItem;

          _pathMaker3.horizontalToRelative(pathDataWithType.x);

          break;

        case 'V':
          pathDataWithType = pathDataItem;

          _pathMaker3.verticalTo(pathDataWithType.y);

          break;

        case 'v':
          pathDataWithType = pathDataItem;

          _pathMaker3.verticalToRelative(pathDataWithType.y);

          break;

        case 'C':
          pathDataWithType = pathDataItem;

          _pathMaker3.cubicBezierCurveTo(pathDataWithType.x1, pathDataWithType.y1, pathDataWithType.x2, pathDataWithType.y2, pathDataWithType.x, pathDataWithType.y);

          break;

        case 'c':
          pathDataWithType = pathDataItem;

          _pathMaker3.cubicBezierCurveToRelative(pathDataWithType.x1, pathDataWithType.y1, pathDataWithType.x2, pathDataWithType.y2, pathDataWithType.x, pathDataWithType.y);

          break;

        case 'Q':
          pathDataWithType = pathDataItem;

          _pathMaker3.quadraticBezierCurveTo(pathDataWithType.x1, pathDataWithType.y1, pathDataWithType.x, pathDataWithType.y);

          break;

        case 'q':
          pathDataWithType = pathDataItem;

          _pathMaker3.quadraticBezierCurveToRelative(pathDataWithType.x1, pathDataWithType.y1, pathDataWithType.x, pathDataWithType.y);

          break;

        case 'A':
          pathDataWithType = pathDataItem;

          _pathMaker3.arcTo(pathDataWithType.rx, pathDataWithType.ry, pathDataWithType.xAxisRotation, ~~pathDataWithType.largeArc, ~~pathDataWithType.sweep, pathDataWithType.x, pathDataWithType.y);

          break;

        case 'a':
          pathDataWithType = pathDataItem;

          _pathMaker3.arcToRelative(pathDataWithType.rx, pathDataWithType.ry, pathDataWithType.xAxisRotation, ~~pathDataWithType.largeArc, ~~pathDataWithType.sweep, pathDataWithType.x, pathDataWithType.y);

          break;

        case 'Z':
        case 'z':
          _pathMaker3.closePath();

          break;

        default:
          console.error(pathDataItem);
          throw new Error('No implementation found for this path command.');
      }
    });
    postActions(_pathMaker3);
  } else if (dom instanceof SVGPolygonElement || dom instanceof SVGPolylineElement) {
    var points = dom.points;

    if (points.length) {
      var iterablePoints = Array.prototype.slice.call(points);

      var _offsetX = iterablePoints.reduce(function (p, v) {
        return Math.min(p, v.x);
      }, 0);

      var _offsetY = iterablePoints.reduce(function (p, v) {
        return Math.min(p, v.y);
      }, 0);

      var _pathMaker4 = new _path.PathMaker();

      _pathMaker4.moveTo(points[0].x - _offsetX, points[0].y - _offsetY);

      iterablePoints.forEach(function (v, i) {
        if (i <= 0) return;

        _pathMaker4.lineTo(v.x - _offsetX, v.y - _offsetY);
      });

      if (dom instanceof SVGPolygonElement) {
        _pathMaker4.closePath();
      }

      postActions(_pathMaker4);
    }
  } else if (dom instanceof SVGRectElement) {
    var _mapKey2 = ['width', 'height'];

    var _mapKey2$map = _mapKey2.map(function (key) {
      var svgLength = dom[key].baseVal;
      svgLength.convertToSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PX);
      return svgLength.valueInSpecifiedUnits;
    }),
        _mapKey2$map2 = _slicedToArray(_mapKey2$map, 2),
        width = _mapKey2$map2[0],
        height = _mapKey2$map2[1];

    var _pathMaker5 = new _path.PathMaker();

    _pathMaker5.moveTo(0, 0);

    _pathMaker5.lineTo(width, 0);

    _pathMaker5.lineTo(width, height);

    _pathMaker5.lineTo(0, height);

    _pathMaker5.closePath();

    postActions(_pathMaker5);
  } else {
    console.error(dom);
    throw new Error('No implementation found for svg graphics element.');
  }

  return group;
}

function renderGroup(dom) {
  var group = {
    ty: 'gr',
    it: [],
    nm: dom.id,
    bm: 0,
    hd: false
  };
  dom.childNodes.forEach(function (node) {
    if (node instanceof SVGGraphicsElement) {
      var child = render(node);

      if (child.ty) {
        group.it.push(child);
      }
    }
  });
  return group;
}

function renderPlainGlyph(type, args) {
  var group = {
    ty: "gr",
    it: [{
      ty: 'sh',
      ks: {
        k: null,
        a: 0
      },
      hd: false
    }, {
      ty: 'fl',
      c: {
        k: [1, 1, 1, 1]
      },
      o: {
        k: 100
      }
    }, {
      ty: 'tr',
      p: {
        k: [0, 0]
      },
      a: {
        k: [0, 0]
      },
      s: {
        k: [100, 100]
      },
      r: {
        k: 0
      },
      o: {
        k: 100
      },
      sk: {
        k: 0
      },
      sa: {
        k: 0
      }
    }],
    bm: 0,
    hd: false
  };
  var pathMaker = new _path.PathMaker();

  switch (type) {
    case 'rect':
      pathMaker.moveTo(0, 0);
      pathMaker.lineTo(args[0], 0);
      pathMaker.lineTo(args[0], args[1]);
      pathMaker.lineTo(0, args[1]);
      pathMaker.closePath();
      break;

    case 'ellipse':
      pathMaker.moveTo(args[0], 0);
      pathMaker.arcTo(args[0], args[1], 0, 1, 0, args[0], 2 * args[1]);
      pathMaker.arcTo(args[0], args[1], 0, 1, 0, args[0], 0);
      pathMaker.closePath();
  }

  pathMaker.uniform();
  group.it[0].ks.k = pathMaker.path;
  return group;
}

function renderText(dom) {
  var computedStyle = getComputedStyle(dom);
  var fontSize = parseFloat(computedStyle.fontSize),
      fontFamily = computedStyle.fontFamily.split(',')[0].trim(),
      fontStyle = computedStyle.fontStyle,
      fontName = "".concat(fontFamily, "-").concat(fontStyle),
      fontAscent = parseFloat(computedStyle.lineHeight || "".concat(fontSize)),
      fontColor = (computedStyle.color || 'rgb(0,0,0)').split('(')[1].split(')')[0].split(',').map(function (i) {
    return parseInt(i) / 255;
  });
  var textData = {
    d: {
      k: [{
        t: 0,
        s: {
          s: fontSize,
          f: fontName,
          t: dom.innerHTML,
          j: 0,
          tr: 0,
          lh: fontAscent,
          ls: 0,
          fc: fontColor
        }
      }]
    },
    p: {},
    m: {},
    a: []
  };
  var fontDef = {
    origin: 0,
    fPath: '',
    fClass: '',
    fFamily: fontFamily,
    fWeight: '',
    fStyle: fontStyle,
    fName: fontName,
    ascent: fontAscent
  };
  return [textData, fontDef];
}

function renderImage(dom) {
  var id = (0, _v["default"])();
  var domHeightVal = dom.height.baseVal;
  domHeightVal.convertToSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PX);
  var domWidthVal = dom.width.baseVal;
  domWidthVal.convertToSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PX);
  var canvas = document.createElement('canvas');
  var ctx = canvas.getContext('2d');
  canvas.width = domWidthVal.valueInSpecifiedUnits;
  canvas.height = domHeightVal.valueInSpecifiedUnits;
  ctx.drawImage(dom, 0, 0);
  var dataUrl = canvas.toDataURL();
  var asset = {
    h: domHeightVal.valueInSpecifiedUnits,
    w: domWidthVal.valueInSpecifiedUnits,
    id: (0, _v["default"])(),
    u: dataUrl,
    e: 1
  };
  return [id, asset];
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZW5kZXIudHMiXSwibmFtZXMiOlsicmVuZGVyIiwiZG9tIiwiU1ZHVGV4dEVsZW1lbnQiLCJTVkdJbWFnZUVsZW1lbnQiLCJTVkdHRWxlbWVudCIsInJlbmRlckdyb3VwIiwicmVuZGVyR2x5cGgiLCJlbmNvZGVMaW5lQ2FwIiwidHlwZSIsImVuY29kZUxpbmVKb2luIiwiYWRkVmlzdWFsRW5jb2RpbmdzIiwiaXRlbXMiLCJzdHlsZXMiLCJzdHJva2UiLCJwdXNoIiwidHkiLCJjIiwiayIsInNwbGl0Iiwic2xpY2UiLCJtYXAiLCJyYXciLCJwYXJzZUludCIsImNvbmNhdCIsIm8iLCJwYXJzZUZsb2F0Iiwic3Ryb2tlT3BhY2l0eSIsInciLCJzdHJva2VXaWR0aCIsImxjIiwic3Ryb2tlTGluZWNhcCIsImxqIiwic3Ryb2tlTGluZWpvaW4iLCJmaWxsIiwiZmlsbE9wYWNpdHkiLCJwIiwiYSIsInMiLCJyIiwic2siLCJzYSIsImdyb3VwIiwiaXQiLCJibSIsImhkIiwicG9zdEFjdGlvbnMiLCJwYXRoTWFrZXIiLCJ1bmlmb3JtIiwia3MiLCJwYXRoIiwibm0iLCJpZCIsIndpbmRvdyIsImdldENvbXB1dGVkU3R5bGUiLCJTVkdDaXJjbGVFbGVtZW50Iiwic3ZnTGVuZ3RoIiwiYmFzZVZhbCIsImNvbnZlcnRUb1NwZWNpZmllZFVuaXRzIiwiU1ZHTGVuZ3RoIiwiU1ZHX0xFTkdUSFRZUEVfUFgiLCJ2YWx1ZUluU3BlY2lmaWVkVW5pdHMiLCJQYXRoTWFrZXIiLCJtb3ZlVG8iLCJhcmNUbyIsImNsb3NlUGF0aCIsIlNWR0VsbGlwc2VFbGVtZW50IiwibWFwS2V5Iiwia2V5IiwicngiLCJyeSIsIlNWR0xpbmVFbGVtZW50IiwieDEiLCJ4MiIsInkxIiwieTIiLCJvZmZzZXRYIiwiTWF0aCIsIm1pbiIsIm9mZnNldFkiLCJsaW5lVG8iLCJTVkdQYXRoRWxlbWVudCIsInBhdGhEYXRhIiwiZ2V0QXR0cmlidXRlIiwicGF0aERhdGFTZXJpZXMiLCJwYXRoRGF0YVdpdGhUeXBlIiwiZm9yRWFjaCIsInBhdGhEYXRhSXRlbSIsImNvZGUiLCJ4IiwieSIsImxpbmVUb1JlbGF0aXZlIiwiaG9yaXpvbnRhbFRvIiwiaG9yaXpvbnRhbFRvUmVsYXRpdmUiLCJ2ZXJ0aWNhbFRvIiwidmVydGljYWxUb1JlbGF0aXZlIiwiY3ViaWNCZXppZXJDdXJ2ZVRvIiwiY3ViaWNCZXppZXJDdXJ2ZVRvUmVsYXRpdmUiLCJxdWFkcmF0aWNCZXppZXJDdXJ2ZVRvIiwicXVhZHJhdGljQmV6aWVyQ3VydmVUb1JlbGF0aXZlIiwieEF4aXNSb3RhdGlvbiIsImxhcmdlQXJjIiwic3dlZXAiLCJhcmNUb1JlbGF0aXZlIiwiY29uc29sZSIsImVycm9yIiwiRXJyb3IiLCJTVkdQb2x5Z29uRWxlbWVudCIsIlNWR1BvbHlsaW5lRWxlbWVudCIsInBvaW50cyIsImxlbmd0aCIsIml0ZXJhYmxlUG9pbnRzIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJjYWxsIiwicmVkdWNlIiwidiIsImkiLCJTVkdSZWN0RWxlbWVudCIsIndpZHRoIiwiaGVpZ2h0IiwiY2hpbGROb2RlcyIsIm5vZGUiLCJTVkdHcmFwaGljc0VsZW1lbnQiLCJjaGlsZCIsInJlbmRlclBsYWluR2x5cGgiLCJhcmdzIiwicmVuZGVyVGV4dCIsImNvbXB1dGVkU3R5bGUiLCJmb250U2l6ZSIsImZvbnRGYW1pbHkiLCJ0cmltIiwiZm9udFN0eWxlIiwiZm9udE5hbWUiLCJmb250QXNjZW50IiwibGluZUhlaWdodCIsImZvbnRDb2xvciIsImNvbG9yIiwidGV4dERhdGEiLCJkIiwidCIsImYiLCJpbm5lckhUTUwiLCJqIiwidHIiLCJsaCIsImxzIiwiZmMiLCJtIiwiZm9udERlZiIsIm9yaWdpbiIsImZQYXRoIiwiZkNsYXNzIiwiZkZhbWlseSIsImZXZWlnaHQiLCJmU3R5bGUiLCJmTmFtZSIsImFzY2VudCIsInJlbmRlckltYWdlIiwiZG9tSGVpZ2h0VmFsIiwiZG9tV2lkdGhWYWwiLCJjYW52YXMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjdHgiLCJnZXRDb250ZXh0IiwiZHJhd0ltYWdlIiwiZGF0YVVybCIsInRvRGF0YVVSTCIsImFzc2V0IiwiaCIsInUiLCJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUdPLFNBQVNBLE1BQVQsQ0FBZ0JDLEdBQWhCLEVBQXFEO0FBQ3hELE1BQUlBLEdBQUcsWUFBWUMsY0FBZixJQUFpQ0QsR0FBRyxZQUFZRSxlQUFwRCxFQUFxRTtBQUNqRSxXQUFPLEVBQVA7QUFDSCxHQUZELE1BRU8sSUFBSUYsR0FBRyxZQUFZRyxXQUFuQixFQUFnQztBQUNuQyxXQUFPQyxXQUFXLENBQUNKLEdBQUQsQ0FBbEI7QUFDSCxHQUZNLE1BRUE7QUFDSCxXQUFPSyxXQUFXLENBQUNMLEdBQUQsQ0FBbEI7QUFDSDtBQUNKOztBQUVELFNBQVNNLGFBQVQsQ0FBdUJDLElBQXZCLEVBQXFEO0FBQ2pELFVBQVFBLElBQVI7QUFDSSxTQUFLLFFBQUw7QUFDSSxhQUFPLENBQVA7O0FBQ0osU0FBSyxNQUFMO0FBQ0ksYUFBTyxDQUFQOztBQUNKO0FBQ0ksYUFBTyxDQUFQO0FBTlI7QUFRSDs7QUFFRCxTQUFTQyxjQUFULENBQXdCRCxJQUF4QixFQUFzRDtBQUNsRCxVQUFRQSxJQUFSO0FBQ0ksU0FBSyxPQUFMO0FBQ0ksYUFBTyxDQUFQOztBQUNKLFNBQUssT0FBTDtBQUNJLGFBQU8sQ0FBUDs7QUFDSjtBQUNJLGFBQU8sQ0FBUDtBQU5SO0FBUUg7O0FBSUQsU0FBU0Usa0JBQVQsQ0FBNEJDLEtBQTVCLEVBQXNEQyxNQUF0RCxFQUFtRjtBQUMvRSxNQUFJQSxNQUFNLENBQUNDLE1BQVAsSUFBaUJELE1BQU0sQ0FBQ0MsTUFBUCxLQUFrQixNQUF2QyxFQUErQztBQUMzQ0YsSUFBQUEsS0FBSyxDQUFDRyxJQUFOLENBQVc7QUFDUEMsTUFBQUEsRUFBRSxFQUFFLElBREc7QUFFUEMsTUFBQUEsQ0FBQyxFQUFFO0FBQ0NDLFFBQUFBLENBQUMsRUFBRUwsTUFB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QUFNLENBQUMxQyxLQUFQLEdBQWV5QyxXQUFXLENBQUNuRyxxQkFBM0I7QUFDQW9HLEVBQUFBLE1BQU0sQ0FBQ3pDLE1BQVAsR0FBZ0J1QyxZQUFZLENBQUNsRyxxQkFBN0I7QUFDQXVHLEVBQUFBLEdBQUcsQ0FBRUUsU0FBTCxDQUFlcEssR0FBZixFQUFvQixDQUFwQixFQUF1QixDQUF2QjtBQUVBLE1BQU1xSyxPQUFPLEdBQUdOLE1BQU0sQ0FBQ08sU0FBUCxFQUFoQjtBQUNBLE1BQU1DLEtBQUssR0FBRztBQUNWQyxJQUFBQSxDQUFDLEVBQUVYLFlBQVksQ0FBQ2xHLHFCQUROO0FBRVZqQyxJQUFBQSxDQUFDLEVBQUVvSSxXQUFXLENBQUNuRyxxQkFGTDtBQUdWVCxJQUFBQSxFQUFFLEVBQUUsb0JBSE07QUFJVnVILElBQUFBLENBQUMsRUFBRUosT0FKTztBQUtWSyxJQUFBQSxDQUFDLEVBQUU7QUFMTyxHQUFkO0FBT0EsU0FBTyxDQUFDeEgsRUFBRCxFQUFLcUgsS0FBTCxDQUFQO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHcm91cFNoYXBlLCBUZXh0RGF0YSwgUmVmZXJlbmNlSUQsIFBhdGhTaGFwZSwgRmlsbFNoYXBlLCBTdHJva2VTaGFwZSwgVHJhbnNmb3JtU2hhcGUsIEltYWdlQXNzZXQsIEZvbnQxIH0gZnJvbSAnLi9hbmltYXRpb24nXG5pbXBvcnQgeyBQYXRoTWFrZXIgfSBmcm9tICcuL3BhdGgnXG5pbXBvcnQgdXVpZCBmcm9tICd1dWlkL3Y0J1xuaW1wb3J0IHsgcGFyc2VTVkcsIE1vdmVUb0NvbW1hbmQsIExpbmVUb0NvbW1hbmQsIEhvcml6b250YWxMaW5lVG9Db21tYW5kLCBWZXJ0aWNhbExpbmVUb0NvbW1hbmQsIEN1cnZlVG9Db21tYW5kLCBRdWFkcmF0aWNDdXJ2ZVRvQ29tbWFuZCwgRWxsaXB0aWNhbEFyY0NvbW1hbmQgfSBmcm9tICdzdmctcGF0aC1wYXJzZXInXG5cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihkb206IFNWR0dyYXBoaWNzRWxlbWVudCk6IEdyb3VwU2hhcGUge1xuICAgIGlmIChkb20gaW5zdGFuY2VvZiBTVkdUZXh0RWxlbWVudCB8fCBkb20gaW5zdGFuY2VvZiBTVkdJbWFnZUVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHt9XG4gICAgfSBlbHNlIGlmIChkb20gaW5zdGFuY2VvZiBTVkdHRWxlbWVudCkge1xuICAgICAgICByZXR1cm4gcmVuZGVyR3JvdXAoZG9tKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZW5kZXJHbHlwaChkb20pXG4gICAgfVxufVxuXG5mdW5jdGlvbiBlbmNvZGVMaW5lQ2FwKHR5cGU/OiBzdHJpbmcgfCBudWxsKTogbnVtYmVyIHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnc3F1YXJlJzpcbiAgICAgICAgICAgIHJldHVybiAzXG4gICAgICAgIGNhc2UgJ2J1dHQnOlxuICAgICAgICAgICAgcmV0dXJuIDFcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiAyXG4gICAgfVxufVxuXG5mdW5jdGlvbiBlbmNvZGVMaW5lSm9pbih0eXBlPzogc3RyaW5nIHwgbnVsbCk6IG51bWJlciB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ21pdGVyJzpcbiAgICAgICAgICAgIHJldHVybiAxXG4gICAgICAgIGNhc2UgJ2JldmVsJzpcbiAgICAgICAgICAgIHJldHVybiAzXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gMlxuICAgIH1cbn1cblxudHlwZSBWaXN1YWxHcm91cEl0ZW0gPSBQYXRoU2hhcGUgfCBGaWxsU2hhcGUgfCBTdHJva2VTaGFwZSB8IFRyYW5zZm9ybVNoYXBlXG5cbmZ1bmN0aW9uIGFkZFZpc3VhbEVuY29kaW5ncyhpdGVtczogVmlzdWFsR3JvdXBJdGVtW10sIHN0eWxlczogQ1NTU3R5bGVEZWNsYXJhdGlvbikge1xuICAgIGlmIChzdHlsZXMuc3Ryb2tlICYmIHN0eWxlcy5zdHJva2UgIT09ICdub25lJykge1xuICAgICAgICBpdGVtcy5wdXNoKHtcbiAgICAgICAgICAgIHR5OiAnc3QnLFxuICAgICAgICAgICAgYzoge1xuICAgICAgICAgICAgICAgIGs6IHN0eWxlcy5zdHJva2UhLnNwbGl0KCcoJylbMV0uc3BsaXQoJyknKVswXS5zcGxpdCgnLCcpLnNsaWNlKDAsIDMpLm1hcCgocmF3OiBzdHJpbmcpID0+IHBhcnNlSW50KHJhdykgLyAyNTUpLmNvbmNhdCgxKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG86IHtcbiAgICAgICAgICAgICAgICBrOiBwYXJzZUZsb2F0KHN0eWxlcy5zdHJva2VPcGFjaXR5IHx8ICcxJykgKiAxMDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB3OiB7XG4gICAgICAgICAgICAgICAgazogcGFyc2VGbG9hdChzdHlsZXMuc3Ryb2tlV2lkdGggfHwgJzEnKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxjOiBlbmNvZGVMaW5lQ2FwKHN0eWxlcy5zdHJva2VMaW5lY2FwKSxcbiAgICAgICAgICAgIGxqOiBlbmNvZGVMaW5lSm9pbihzdHlsZXMuc3Ryb2tlTGluZWpvaW4pXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGlmIChzdHlsZXMuZmlsbCAmJiBzdHlsZXMuZmlsbCAhPT0gJ25vbmUnKSB7XG4gICAgICAgIGl0ZW1zLnB1c2goe1xuICAgICAgICAgICAgdHk6ICdmbCcsXG4gICAgICAgICAgICBjOiB7XG4gICAgICAgICAgICAgICAgazogc3R5bGVzLmZpbGwhLnNwbGl0KCcoJylbMV0uc3BsaXQoJyknKVswXS5zcGxpdCgnLCcpLnNsaWNlKDAsIDMpLm1hcCgocmF3OiBzdHJpbmcpID0+IHBhcnNlSW50KHJhdykgLyAyNTUpLmNvbmNhdCgxKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG86IHtcbiAgICAgICAgICAgICAgICBrOiBwYXJzZUZsb2F0KHN0eWxlcy5maWxsT3BhY2l0eSB8fCAnMScpICogMTAwXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuICAgIGl0ZW1zLnB1c2goe1xuICAgICAgICB0eTogXCJ0clwiLFxuICAgICAgICBwOiB7XG4gICAgICAgICAgICBrOiBbXG4gICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIGE6IHtcbiAgICAgICAgICAgIGs6IFtcbiAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgczoge1xuICAgICAgICAgICAgazogW1xuICAgICAgICAgICAgICAgIDEwMCxcbiAgICAgICAgICAgICAgICAxMDBcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgcjoge1xuICAgICAgICAgICAgazogMFxuICAgICAgICB9LFxuICAgICAgICBvOiB7XG4gICAgICAgICAgICBrOiAxMDBcbiAgICAgICAgfSxcbiAgICAgICAgc2s6IHtcbiAgICAgICAgICAgIGs6IDBcbiAgICAgICAgfSxcbiAgICAgICAgc2E6IHtcbiAgICAgICAgICAgIGs6IDBcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIHJlbmRlckdseXBoKGRvbTogU1ZHR3JhcGhpY3NFbGVtZW50KTogR3JvdXBTaGFwZSB7XG4gICAgY29uc3QgZ3JvdXA6IEdyb3VwU2hhcGUgPSB7XG4gICAgICAgIHR5OiBcImdyXCIsXG4gICAgICAgIGl0OiBbXSxcbiAgICAgICAgYm06IDAsXG4gICAgICAgIGhkOiBmYWxzZVxuICAgIH1cbiAgICBjb25zdCBwb3N0QWN0aW9ucyA9IChwYXRoTWFrZXI6IFBhdGhNYWtlcikgPT4ge1xuICAgICAgICBwYXRoTWFrZXIudW5pZm9ybSgpXG4gICAgICAgIGdyb3VwLml0IS5wdXNoKHtcbiAgICAgICAgICAgIHR5OiAnc2gnLFxuICAgICAgICAgICAga3M6IHtcbiAgICAgICAgICAgICAgICBrOiBwYXRoTWFrZXIucGF0aCxcbiAgICAgICAgICAgICAgICBhOiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbm06IGRvbS5pZCxcbiAgICAgICAgICAgIGhkOiBmYWxzZVxuICAgICAgICB9KVxuICAgICAgICBjb25zdCBzdHlsZXMgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkb20pXG4gICAgICAgIGFkZFZpc3VhbEVuY29kaW5ncyhncm91cC5pdCEgYXMgVmlzdWFsR3JvdXBJdGVtW10sIHN0eWxlcylcbiAgICB9XG4gICAgaWYgKGRvbSBpbnN0YW5jZW9mIFNWR0NpcmNsZUVsZW1lbnQpIHtcbiAgICAgICAgY29uc3Qgc3ZnTGVuZ3RoID0gZG9tLnIuYmFzZVZhbFxuICAgICAgICBzdmdMZW5ndGguY29udmVydFRvU3BlY2lmaWVkVW5pdHMoU1ZHTGVuZ3RoLlNWR19MRU5HVEhUWVBFX1BYKVxuICAgICAgICBjb25zdCByID0gc3ZnTGVuZ3RoLnZhbHVlSW5TcGVjaWZpZWRVbml0c1xuICAgICAgICBjb25zdCBwYXRoTWFrZXIgPSBuZXcgUGF0aE1ha2VyKClcbiAgICAgICAgcGF0aE1ha2VyLm1vdmVUbyhyLCAwKVxuICAgICAgICBwYXRoTWFrZXIuYXJjVG8ociwgciwgMCwgMSwgMCwgciwgMiAqIHIpXG4gICAgICAgIHBhdGhNYWtlci5hcmNUbyhyLCByLCAwLCAxLCAwLCByLCAwKVxuICAgICAgICBwYXRoTWFrZXIuY2xvc2VQYXRoKClcbiAgICAgICAgcG9zdEFjdGlvbnMocGF0aE1ha2VyKVxuICAgIH0gZWxzZSBpZiAoZG9tIGluc3RhbmNlb2YgU1ZHRWxsaXBzZUVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgbWFwS2V5OiAoJ3J4JyB8ICdyeScpW10gPSBbJ3J4JywgJ3J5J11cbiAgICAgICAgY29uc3QgW3J4LCByeV0gPSBtYXBLZXkubWFwKGtleSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdmdMZW5ndGggPSBkb21ba2V5XS5iYXNlVmFsXG4gICAgICAgICAgICBzdmdMZW5ndGguY29udmVydFRvU3BlY2lmaWVkVW5pdHMoU1ZHTGVuZ3RoLlNWR19MRU5HVEhUWVBFX1BYKVxuICAgICAgICAgICAgcmV0dXJuIHN2Z0xlbmd0aC52YWx1ZUluU3BlY2lmaWVkVW5pdHNcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QgcGF0aE1ha2VyID0gbmV3IFBhdGhNYWtlcigpXG4gICAgICAgIHBhdGhNYWtlci5tb3ZlVG8ocngsIDApXG4gICAgICAgIHBhdGhNYWtlci5hcmNUbyhyeCwgcnksIDAsIDEsIDAsIHJ4LCAyICogcnkpXG4gICAgICAgIHBhdGhNYWtlci5hcmNUbyhyeCwgcnksIDAsIDEsIDAsIHJ4LCAwKVxuICAgICAgICBwYXRoTWFrZXIuY2xvc2VQYXRoKClcbiAgICAgICAgcG9zdEFjdGlvbnMocGF0aE1ha2VyKVxuICAgIH0gZWxzZSBpZiAoZG9tIGluc3RhbmNlb2YgU1ZHTGluZUVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgbWFwS2V5OiAoJ3gxJyB8ICd4MicgfCAneTEnIHwgJ3kyJylbXSA9IFsneDEnLCAneDInLCAneTEnLCAneTInXVxuICAgICAgICBjb25zdCBbeDEsIHgyLCB5MSwgeTJdID0gbWFwS2V5Lm1hcChrZXkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3ZnTGVuZ3RoID0gZG9tW2tleV0uYmFzZVZhbFxuICAgICAgICAgICAgc3ZnTGVuZ3RoLmNvbnZlcnRUb1NwZWNpZmllZFVuaXRzKFNWR0xlbmd0aC5TVkdfTEVOR1RIVFlQRV9QWClcbiAgICAgICAgICAgIHJldHVybiBzdmdMZW5ndGgudmFsdWVJblNwZWNpZmllZFVuaXRzXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IG9mZnNldFggPSBNYXRoLm1pbih4MSwgeDIpXG4gICAgICAgIGNvbnN0IG9mZnNldFkgPSBNYXRoLm1pbih5MSwgeTIpXG4gICAgICAgIGNvbnN0IHBhdGhNYWtlciA9IG5ldyBQYXRoTWFrZXIoKVxuICAgICAgICBwYXRoTWFrZXIubW92ZVRvKHgxIC0gb2Zmc2V0WCwgeTEgLSBvZmZzZXRZKVxuICAgICAgICBwYXRoTWFrZXIubGluZVRvKHgyIC0gb2Zmc2V0WCwgeTIgLSBvZmZzZXRZKVxuICAgICAgICBwb3N0QWN0aW9ucyhwYXRoTWFrZXIpXG4gICAgfSBlbHNlIGlmIChkb20gaW5zdGFuY2VvZiBTVkdQYXRoRWxlbWVudCkge1xuICAgICAgICBjb25zdCBwYXRoRGF0YSA9IGRvbS5nZXRBdHRyaWJ1dGUoJ2QnKSB8fCAnJ1xuICAgICAgICBjb25zdCBwYXRoRGF0YVNlcmllcyA9IHBhcnNlU1ZHKHBhdGhEYXRhKVxuICAgICAgICBjb25zdCBwYXRoTWFrZXIgPSBuZXcgUGF0aE1ha2VyKClcbiAgICAgICAgbGV0IHBhdGhEYXRhV2l0aFR5cGU7XG4gICAgICAgIHBhdGhEYXRhU2VyaWVzLmZvckVhY2gocGF0aERhdGFJdGVtID0+IHtcbiAgICAgICAgICAgIHN3aXRjaCAocGF0aERhdGFJdGVtLmNvZGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdNJzpcbiAgICAgICAgICAgICAgICAgICAgcGF0aERhdGFXaXRoVHlwZSA9IHBhdGhEYXRhSXRlbSBhcyBNb3ZlVG9Db21tYW5kXG4gICAgICAgICAgICAgICAgICAgIHBhdGhNYWtlci5tb3ZlVG8ocGF0aERhdGFXaXRoVHlwZS54LCBwYXRoRGF0YVdpdGhUeXBlLnkpXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSAnTCc6XG4gICAgICAgICAgICAgICAgICAgIHBhdGhEYXRhV2l0aFR5cGUgPSBwYXRoRGF0YUl0ZW0gYXMgTGluZVRvQ29tbWFuZFxuICAgICAgICAgICAgICAgICAgICBwYXRoTWFrZXIubGluZVRvKHBhdGhEYXRhV2l0aFR5cGUueCwgcGF0aERhdGFXaXRoVHlwZS55KVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgJ2wnOlxuICAgICAgICAgICAgICAgICAgICBwYXRoRGF0YVdpdGhUeXBlID0gcGF0aERhdGFJdGVtIGFzIExpbmVUb0NvbW1hbmRcbiAgICAgICAgICAgICAgICAgICAgcGF0aE1ha2VyLmxpbmVUb1JlbGF0aXZlKHBhdGhEYXRhV2l0aFR5cGUueCwgcGF0aERhdGFXaXRoVHlwZS55KVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgJ0gnOlxuICAgICAgICAgICAgICAgICAgICBwYXRoRGF0YVdpdGhUeXBlID0gcGF0aERhdGFJdGVtIGFzIEhvcml6b250YWxMaW5lVG9Db21tYW5kXG4gICAgICAgICAgICAgICAgICAgIHBhdGhNYWtlci5ob3Jpem9udGFsVG8ocGF0aERhdGFXaXRoVHlwZS54KVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgJ2gnOlxuICAgICAgICAgICAgICAgICAgICBwYXRoRGF0YVdpdGhUeXBlID0gcGF0aERhdGFJdGVtIGFzIEhvcml6b250YWxMaW5lVG9Db21tYW5kXG4gICAgICAgICAgICAgICAgICAgIHBhdGhNYWtlci5ob3Jpem9udGFsVG9SZWxhdGl2ZShwYXRoRGF0YVdpdGhUeXBlLngpXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSAnVic6XG4gICAgICAgICAgICAgICAgICAgIHBhdGhEYXRhV2l0aFR5cGUgPSBwYXRoRGF0YUl0ZW0gYXMgVmVydGljYWxMaW5lVG9Db21tYW5kXG4gICAgICAgICAgICAgICAgICAgIHBhdGhNYWtlci52ZXJ0aWNhbFRvKHBhdGhEYXRhV2l0aFR5cGUueSlcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlICd2JzpcbiAgICAgICAgICAgICAgICAgICAgcGF0aERhdGFXaXRoVHlwZSA9IHBhdGhEYXRhSXRlbSBhcyBWZXJ0aWNhbExpbmVUb0NvbW1hbmRcbiAgICAgICAgICAgICAgICAgICAgcGF0aE1ha2VyLnZlcnRpY2FsVG9SZWxhdGl2ZShwYXRoRGF0YVdpdGhUeXBlLnkpXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSAnQyc6XG4gICAgICAgICAgICAgICAgICAgIHBhdGhEYXRhV2l0aFR5cGUgPSBwYXRoRGF0YUl0ZW0gYXMgQ3VydmVUb0NvbW1hbmRcbiAgICAgICAgICAgICAgICAgICAgcGF0aE1ha2VyLmN1YmljQmV6aWVyQ3VydmVUbyhwYXRoRGF0YVdpdGhUeXBlLngxLCBwYXRoRGF0YVdpdGhUeXBlLnkxLCBwYXRoRGF0YVdpdGhUeXBlLngyLCBwYXRoRGF0YVdpdGhUeXBlLnkyLCBwYXRoRGF0YVdpdGhUeXBlLngsIHBhdGhEYXRhV2l0aFR5cGUueSlcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlICdjJzpcbiAgICAgICAgICAgICAgICAgICAgcGF0aERhdGFXaXRoVHlwZSA9IHBhdGhEYXRhSXRlbSBhcyBDdXJ2ZVRvQ29tbWFuZFxuICAgICAgICAgICAgICAgICAgICBwYXRoTWFrZXIuY3ViaWNCZXppZXJDdXJ2ZVRvUmVsYXRpdmUocGF0aERhdGFXaXRoVHlwZS54MSwgcGF0aERhdGFXaXRoVHlwZS55MSwgcGF0aERhdGFXaXRoVHlwZS54MiwgcGF0aERhdGFXaXRoVHlwZS55MiwgcGF0aERhdGFXaXRoVHlwZS54LCBwYXRoRGF0YVdpdGhUeXBlLnkpXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSAnUSc6XG4gICAgICAgICAgICAgICAgICAgIHBhdGhEYXRhV2l0aFR5cGUgPSBwYXRoRGF0YUl0ZW0gYXMgUXVhZHJhdGljQ3VydmVUb0NvbW1hbmRcbiAgICAgICAgICAgICAgICAgICAgcGF0aE1ha2VyLnF1YWRyYXRpY0JlemllckN1cnZlVG8ocGF0aERhdGFXaXRoVHlwZS54MSwgcGF0aERhdGFXaXRoVHlwZS55MSwgcGF0aERhdGFXaXRoVHlwZS54LCBwYXRoRGF0YVdpdGhUeXBlLnkpXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSAncSc6XG4gICAgICAgICAgICAgICAgICAgIHBhdGhEYXRhV2l0aFR5cGUgPSBwYXRoRGF0YUl0ZW0gYXMgUXVhZHJhdGljQ3VydmVUb0NvbW1hbmRcbiAgICAgICAgICAgICAgICAgICAgcGF0aE1ha2VyLnF1YWRyYXRpY0JlemllckN1cnZlVG9SZWxhdGl2ZShwYXRoRGF0YVdpdGhUeXBlLngxLCBwYXRoRGF0YVdpdGhUeXBlLnkxLCBwYXRoRGF0YVdpdGhUeXBlLngsIHBhdGhEYXRhV2l0aFR5cGUueSlcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlICdBJzpcbiAgICAgICAgICAgICAgICAgICAgcGF0aERhdGFXaXRoVHlwZSA9IHBhdGhEYXRhSXRlbSBhcyBFbGxpcHRpY2FsQXJjQ29tbWFuZFxuICAgICAgICAgICAgICAgICAgICBwYXRoTWFrZXIuYXJjVG8ocGF0aERhdGFXaXRoVHlwZS5yeCwgcGF0aERhdGFXaXRoVHlwZS5yeSwgcGF0aERhdGFXaXRoVHlwZS54QXhpc1JvdGF0aW9uLCB+fnBhdGhEYXRhV2l0aFR5cGUubGFyZ2VBcmMsIH5+cGF0aERhdGFXaXRoVHlwZS5zd2VlcCwgcGF0aERhdGFXaXRoVHlwZS54LCBwYXRoRGF0YVdpdGhUeXBlLnkpXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSAnYSc6XG4gICAgICAgICAgICAgICAgICAgIHBhdGhEYXRhV2l0aFR5cGUgPSBwYXRoRGF0YUl0ZW0gYXMgRWxsaXB0aWNhbEFyY0NvbW1hbmRcbiAgICAgICAgICAgICAgICAgICAgcGF0aE1ha2VyLmFyY1RvUmVsYXRpdmUocGF0aERhdGFXaXRoVHlwZS5yeCwgcGF0aERhdGFXaXRoVHlwZS5yeSwgcGF0aERhdGFXaXRoVHlwZS54QXhpc1JvdGF0aW9uLCB+fnBhdGhEYXRhV2l0aFR5cGUubGFyZ2VBcmMsIH5+cGF0aERhdGFXaXRoVHlwZS5zd2VlcCwgcGF0aERhdGFXaXRoVHlwZS54LCBwYXRoRGF0YVdpdGhUeXBlLnkpXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSAnWic6XG4gICAgICAgICAgICAgICAgY2FzZSAneic6XG4gICAgICAgICAgICAgICAgICAgIHBhdGhNYWtlci5jbG9zZVBhdGgoKVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IocGF0aERhdGFJdGVtKVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGltcGxlbWVudGF0aW9uIGZvdW5kIGZvciB0aGlzIHBhdGggY29tbWFuZC4nKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBwb3N0QWN0aW9ucyhwYXRoTWFrZXIpXG4gICAgfSBlbHNlIGlmIChkb20gaW5zdGFuY2VvZiBTVkdQb2x5Z29uRWxlbWVudCB8fCBkb20gaW5zdGFuY2VvZiBTVkdQb2x5bGluZUVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgcG9pbnRzID0gZG9tLnBvaW50c1xuICAgICAgICBpZiAocG9pbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgaXRlcmFibGVQb2ludHM6IERPTVBvaW50W10gPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChwb2ludHMpXG4gICAgICAgICAgICBjb25zdCBvZmZzZXRYID0gaXRlcmFibGVQb2ludHMucmVkdWNlKChwLCB2KSA9PiBNYXRoLm1pbihwLCB2LngpLCAwKVxuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0WSA9IGl0ZXJhYmxlUG9pbnRzLnJlZHVjZSgocCwgdikgPT4gTWF0aC5taW4ocCwgdi55KSwgMClcbiAgICAgICAgICAgIGNvbnN0IHBhdGhNYWtlciA9IG5ldyBQYXRoTWFrZXIoKVxuICAgICAgICAgICAgcGF0aE1ha2VyLm1vdmVUbyhwb2ludHNbMF0ueCAtIG9mZnNldFgsIHBvaW50c1swXS55IC0gb2Zmc2V0WSlcbiAgICAgICAgICAgIGl0ZXJhYmxlUG9pbnRzLmZvckVhY2goKHYsIGkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaSA8PSAwKSByZXR1cm5cbiAgICAgICAgICAgICAgICBwYXRoTWFrZXIubGluZVRvKHYueCAtIG9mZnNldFgsIHYueSAtIG9mZnNldFkpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgaWYgKGRvbSBpbnN0YW5jZW9mIFNWR1BvbHlnb25FbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgcGF0aE1ha2VyLmNsb3NlUGF0aCgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwb3N0QWN0aW9ucyhwYXRoTWFrZXIpXG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGRvbSBpbnN0YW5jZW9mIFNWR1JlY3RFbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IG1hcEtleTogKCd3aWR0aCcgfCAnaGVpZ2h0JylbXSA9IFsnd2lkdGgnLCAnaGVpZ2h0J11cbiAgICAgICAgY29uc3QgW3dpZHRoLCBoZWlnaHRdID0gbWFwS2V5Lm1hcChrZXkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3ZnTGVuZ3RoID0gZG9tW2tleV0uYmFzZVZhbFxuICAgICAgICAgICAgc3ZnTGVuZ3RoLmNvbnZlcnRUb1NwZWNpZmllZFVuaXRzKFNWR0xlbmd0aC5TVkdfTEVOR1RIVFlQRV9QWClcbiAgICAgICAgICAgIHJldHVybiBzdmdMZW5ndGgudmFsdWVJblNwZWNpZmllZFVuaXRzXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IHBhdGhNYWtlciA9IG5ldyBQYXRoTWFrZXIoKVxuICAgICAgICBwYXRoTWFrZXIubW92ZVRvKDAsIDApXG4gICAgICAgIHBhdGhNYWtlci5saW5lVG8od2lkdGgsIDApXG4gICAgICAgIHBhdGhNYWtlci5saW5lVG8od2lkdGgsIGhlaWdodClcbiAgICAgICAgcGF0aE1ha2VyLmxpbmVUbygwLCBoZWlnaHQpXG4gICAgICAgIHBhdGhNYWtlci5jbG9zZVBhdGgoKVxuICAgICAgICBwb3N0QWN0aW9ucyhwYXRoTWFrZXIpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihkb20pXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gaW1wbGVtZW50YXRpb24gZm91bmQgZm9yIHN2ZyBncmFwaGljcyBlbGVtZW50LicpXG4gICAgfVxuICAgIHJldHVybiBncm91cFxufVxuXG5mdW5jdGlvbiByZW5kZXJHcm91cChkb206IFNWR0dFbGVtZW50KTogR3JvdXBTaGFwZSB7XG4gICAgbGV0IGdyb3VwOiBHcm91cFNoYXBlID0ge1xuICAgICAgICB0eTogJ2dyJyxcbiAgICAgICAgaXQ6IFtdLFxuICAgICAgICBubTogZG9tLmlkLFxuICAgICAgICBibTogMCxcbiAgICAgICAgaGQ6IGZhbHNlXG4gICAgfVxuICAgIGRvbS5jaGlsZE5vZGVzLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICAgIGlmIChub2RlIGluc3RhbmNlb2YgU1ZHR3JhcGhpY3NFbGVtZW50KSB7XG4gICAgICAgICAgICBsZXQgY2hpbGQgPSByZW5kZXIobm9kZSlcbiAgICAgICAgICAgIGlmIChjaGlsZC50eSkge1xuICAgICAgICAgICAgICAgIGdyb3VwLml0IS5wdXNoKGNoaWxkKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gZ3JvdXBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclBsYWluR2x5cGgodHlwZTogJ3JlY3QnIHwgJ2VsbGlwc2UnLCBhcmdzOiBudW1iZXJbXSk6IEdyb3VwU2hhcGUge1xuICAgIGNvbnN0IGdyb3VwOiBHcm91cFNoYXBlID0ge1xuICAgICAgICB0eTogXCJnclwiLFxuICAgICAgICBpdDogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5OiAnc2gnLFxuICAgICAgICAgICAgICAgIGtzOiB7XG4gICAgICAgICAgICAgICAgICAgIGs6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIGE6IDBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGhkOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eTogJ2ZsJyxcbiAgICAgICAgICAgICAgICBjOiB7XG4gICAgICAgICAgICAgICAgICAgIGs6IFsxLCAxLCAxLCAxXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbzoge1xuICAgICAgICAgICAgICAgICAgICBrOiAxMDBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5OiAndHInLFxuICAgICAgICAgICAgICAgIHA6IHtcbiAgICAgICAgICAgICAgICAgICAgazogW1xuICAgICAgICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYToge1xuICAgICAgICAgICAgICAgICAgICBrOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzOiB7XG4gICAgICAgICAgICAgICAgICAgIGs6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDEwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIDEwMFxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICByOiB7XG4gICAgICAgICAgICAgICAgICAgIGs6IDBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG86IHtcbiAgICAgICAgICAgICAgICAgICAgazogMTAwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzazoge1xuICAgICAgICAgICAgICAgICAgICBrOiAwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzYToge1xuICAgICAgICAgICAgICAgICAgICBrOiAwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBibTogMCxcbiAgICAgICAgaGQ6IGZhbHNlXG4gICAgfVxuICAgIGNvbnN0IHBhdGhNYWtlciA9IG5ldyBQYXRoTWFrZXIoKVxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdyZWN0JzpcbiAgICAgICAgICAgIHBhdGhNYWtlci5tb3ZlVG8oMCwgMClcbiAgICAgICAgICAgIHBhdGhNYWtlci5saW5lVG8oYXJnc1swXSwgMClcbiAgICAgICAgICAgIHBhdGhNYWtlci5saW5lVG8oYXJnc1swXSwgYXJnc1sxXSlcbiAgICAgICAgICAgIHBhdGhNYWtlci5saW5lVG8oMCwgYXJnc1sxXSlcbiAgICAgICAgICAgIHBhdGhNYWtlci5jbG9zZVBhdGgoKVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAnZWxsaXBzZSc6XG4gICAgICAgICAgICBwYXRoTWFrZXIubW92ZVRvKGFyZ3NbMF0sIDApXG4gICAgICAgICAgICBwYXRoTWFrZXIuYXJjVG8oYXJnc1swXSwgYXJnc1sxXSwgMCwgMSwgMCwgYXJnc1swXSwgMiAqIGFyZ3NbMV0pXG4gICAgICAgICAgICBwYXRoTWFrZXIuYXJjVG8oYXJnc1swXSwgYXJnc1sxXSwgMCwgMSwgMCwgYXJnc1swXSwgMClcbiAgICAgICAgICAgIHBhdGhNYWtlci5jbG9zZVBhdGgoKVxuICAgIH1cbiAgICBwYXRoTWFrZXIudW5pZm9ybSgpO1xuICAgIChncm91cC5pdCFbMF0gYXMgUGF0aFNoYXBlKS5rcyEuayA9IHBhdGhNYWtlci5wYXRoXG4gICAgcmV0dXJuIGdyb3VwXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJUZXh0KGRvbTogU1ZHVGV4dEVsZW1lbnQpOiBbVGV4dERhdGEsIEZvbnQxXSB7XG4gICAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZG9tKVxuICAgIGNvbnN0IGZvbnRTaXplID0gcGFyc2VGbG9hdChjb21wdXRlZFN0eWxlLmZvbnRTaXplKSxcbiAgICAgICAgZm9udEZhbWlseSA9IGNvbXB1dGVkU3R5bGUuZm9udEZhbWlseS5zcGxpdCgnLCcpWzBdLnRyaW0oKSxcbiAgICAgICAgZm9udFN0eWxlID0gY29tcHV0ZWRTdHlsZS5mb250U3R5bGUsXG4gICAgICAgIGZvbnROYW1lID0gYCR7Zm9udEZhbWlseX0tJHtmb250U3R5bGV9YCxcbiAgICAgICAgZm9udEFzY2VudCA9IHBhcnNlRmxvYXQoY29tcHV0ZWRTdHlsZS5saW5lSGVpZ2h0IHx8IGAke2ZvbnRTaXplfWApLFxuICAgICAgICBmb250Q29sb3IgPSAoY29tcHV0ZWRTdHlsZS5jb2xvciB8fCAncmdiKDAsMCwwKScpLnNwbGl0KCcoJylbMV0uc3BsaXQoJyknKVswXS5zcGxpdCgnLCcpLm1hcChpID0+IHBhcnNlSW50KGkpIC8gMjU1KVxuICAgIGNvbnN0IHRleHREYXRhOiBUZXh0RGF0YSA9IHtcbiAgICAgICAgZDoge1xuICAgICAgICAgICAgazogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdDogMCxcbiAgICAgICAgICAgICAgICAgICAgczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgczogZm9udFNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICBmOiBmb250TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHQ6IGRvbS5pbm5lckhUTUwsXG4gICAgICAgICAgICAgICAgICAgICAgICBqOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHI6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBsaDogZm9udEFzY2VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxzOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmM6IGZvbnRDb2xvclxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBwOiB7fSxcbiAgICAgICAgbToge30sXG4gICAgICAgIGE6IFtdXG4gICAgfVxuICAgIGNvbnN0IGZvbnREZWY6IEZvbnQxID0ge1xuICAgICAgICBvcmlnaW46IDAsXG4gICAgICAgIGZQYXRoOiAnJyxcbiAgICAgICAgZkNsYXNzOiAnJyxcbiAgICAgICAgZkZhbWlseTogZm9udEZhbWlseSxcbiAgICAgICAgZldlaWdodDogJycsXG4gICAgICAgIGZTdHlsZTogZm9udFN0eWxlLFxuICAgICAgICBmTmFtZTogZm9udE5hbWUsXG4gICAgICAgIGFzY2VudDogZm9udEFzY2VudFxuICAgIH1cbiAgICByZXR1cm4gW3RleHREYXRhLCBmb250RGVmXVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVySW1hZ2UoZG9tOiBTVkdJbWFnZUVsZW1lbnQpOiBbUmVmZXJlbmNlSUQsIEltYWdlQXNzZXRdIHtcbiAgICBjb25zdCBpZCA9IHV1aWQoKVxuICAgIGNvbnN0IGRvbUhlaWdodFZhbCA9IGRvbS5oZWlnaHQuYmFzZVZhbFxuICAgIGRvbUhlaWdodFZhbC5jb252ZXJ0VG9TcGVjaWZpZWRVbml0cyhTVkdMZW5ndGguU1ZHX0xFTkdUSFRZUEVfUFgpXG4gICAgY29uc3QgZG9tV2lkdGhWYWwgPSBkb20ud2lkdGguYmFzZVZhbFxuICAgIGRvbVdpZHRoVmFsLmNvbnZlcnRUb1NwZWNpZmllZFVuaXRzKFNWR0xlbmd0aC5TVkdfTEVOR1RIVFlQRV9QWClcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKVxuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG5cbiAgICBjYW52YXMud2lkdGggPSBkb21XaWR0aFZhbC52YWx1ZUluU3BlY2lmaWVkVW5pdHNcbiAgICBjYW52YXMuaGVpZ2h0ID0gZG9tSGVpZ2h0VmFsLnZhbHVlSW5TcGVjaWZpZWRVbml0c1xuICAgIGN0eCEuZHJhd0ltYWdlKGRvbSwgMCwgMClcblxuICAgIGNvbnN0IGRhdGFVcmwgPSBjYW52YXMudG9EYXRhVVJMKClcbiAgICBjb25zdCBhc3NldCA9IHtcbiAgICAgICAgaDogZG9tSGVpZ2h0VmFsLnZhbHVlSW5TcGVjaWZpZWRVbml0cyxcbiAgICAgICAgdzogZG9tV2lkdGhWYWwudmFsdWVJblNwZWNpZmllZFVuaXRzLFxuICAgICAgICBpZDogdXVpZCgpLFxuICAgICAgICB1OiBkYXRhVXJsLFxuICAgICAgICBlOiAxXG4gICAgfVxuICAgIHJldHVybiBbaWQsIGFzc2V0XVxufSJdfQ==

/***/ }),

/***/ "./node_modules/svg-path-parser/index.js":
/*!***********************************************!*\
  !*** ./node_modules/svg-path-parser/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// v1.0 exported just the parser function. To maintain backwards compatibility,
// we export additional named features as properties of that function.
var parserFunction = __webpack_require__(/*! ./parser.js */ "./node_modules/svg-path-parser/parser.js").parse;
parserFunction.parseSVG = parserFunction;
parserFunction.makeAbsolute = makeSVGPathCommandsAbsolute;
module.exports = parserFunction;

function makeSVGPathCommandsAbsolute(commands) {
	var subpathStart, prevCmd={x:0,y:0};
	var attr = {x:'x0',y:'y0',x1:'x0',y1:'y0',x2:'x0',y2:'y0'};
	commands.forEach(function(cmd) {
		if (cmd.command==='moveto') subpathStart=cmd;
		cmd.x0=prevCmd.x; cmd.y0=prevCmd.y;
		for (var a in attr) if (a in cmd) cmd[a] += cmd.relative ? cmd[attr[a]] : 0;
		if (!('x' in cmd)) cmd.x = prevCmd.x; // V
		if (!('y' in cmd)) cmd.y = prevCmd.y; // X
		cmd.relative = false;
		cmd.code = cmd.code.toUpperCase();
		if (cmd.command=='closepath') {
			cmd.x = subpathStart.x;
			cmd.y = subpathStart.y;
		}
		prevCmd = cmd;
	});
	return commands;
}


/***/ }),

/***/ "./node_modules/svg-path-parser/parser.js":
/*!************************************************!*\
  !*** ./node_modules/svg-path-parser/parser.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Generated by PEG.js 0.10.0.
 *
 * http://pegjs.org/
 */



function peg$subclass(child, parent) {
  function ctor() { this.constructor = child; }
  ctor.prototype = parent.prototype;
  child.prototype = new ctor();
}

function peg$SyntaxError(message, expected, found, location) {
  this.message  = message;
  this.expected = expected;
  this.found    = found;
  this.location = location;
  this.name     = "SyntaxError";

  if (typeof Error.captureStackTrace === "function") {
    Error.captureStackTrace(this, peg$SyntaxError);
  }
}

peg$subclass(peg$SyntaxError, Error);

peg$SyntaxError.buildMessage = function(expected, found) {
  var DESCRIBE_EXPECTATION_FNS = {
        literal: function(expectation) {
          return "\"" + literalEscape(expectation.text) + "\"";
        },

        "class": function(expectation) {
          var escapedParts = "",
              i;

          for (i = 0; i < expectation.parts.length; i++) {
            escapedParts += expectation.parts[i] instanceof Array
              ? classEscape(expectation.parts[i][0]) + "-" + classEscape(expectation.parts[i][1])
              : classEscape(expectation.parts[i]);
          }

          return "[" + (expectation.inverted ? "^" : "") + escapedParts + "]";
        },

        any: function(expectation) {
          return "any character";
        },

        end: function(expectation) {
          return "end of input";
        },

        other: function(expectation) {
          return expectation.description;
        }
      };

  function hex(ch) {
    return ch.charCodeAt(0).toString(16).toUpperCase();
  }

  function literalEscape(s) {
    return s
      .replace(/\\/g, '\\\\')
      .replace(/"/g,  '\\"')
      .replace(/\0/g, '\\0')
      .replace(/\t/g, '\\t')
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '\\r')
      .replace(/[\x00-\x0F]/g,          function(ch) { return '\\x0' + hex(ch); })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return '\\x'  + hex(ch); });
  }

  function classEscape(s) {
    return s
      .replace(/\\/g, '\\\\')
      .replace(/\]/g, '\\]')
      .replace(/\^/g, '\\^')
      .replace(/-/g,  '\\-')
      .replace(/\0/g, '\\0')
      .replace(/\t/g, '\\t')
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '\\r')
      .replace(/[\x00-\x0F]/g,          function(ch) { return '\\x0' + hex(ch); })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return '\\x'  + hex(ch); });
  }

  function describeExpectation(expectation) {
    return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);
  }

  function describeExpected(expected) {
    var descriptions = new Array(expected.length),
        i, j;

    for (i = 0; i < expected.length; i++) {
      descriptions[i] = describeExpectation(expected[i]);
    }

    descriptions.sort();

    if (descriptions.length > 0) {
      for (i = 1, j = 1; i < descriptions.length; i++) {
        if (descriptions[i - 1] !== descriptions[i]) {
          descriptions[j] = descriptions[i];
          j++;
        }
      }
      descriptions.length = j;
    }

    switch (descriptions.length) {
      case 1:
        return descriptions[0];

      case 2:
        return descriptions[0] + " or " + descriptions[1];

      default:
        return descriptions.slice(0, -1).join(", ")
          + ", or "
          + descriptions[descriptions.length - 1];
    }
  }

  function describeFound(found) {
    return found ? "\"" + literalEscape(found) + "\"" : "end of input";
  }

  return "Expected " + describeExpected(expected) + " but " + describeFound(found) + " found.";
};

function peg$parse(input, options) {
  options = options !== void 0 ? options : {};

  var peg$FAILED = {},

      peg$startRuleFunctions = { svg_path: peg$parsesvg_path },
      peg$startRuleFunction  = peg$parsesvg_path,

      peg$c0 = function(data) {
          if (!data) return [];
          for (var cmds=[],i=0;i<data.length;i++) cmds=cmds.concat.apply(cmds,data[i]);
          var first=cmds[0];
          if (first && first.code=='m'){ // Per spec, first moveto is never relative
            delete first.relative;
            first.code = 'M';
          }
          return cmds;
        },
      peg$c1 = function(first, more) { return merge(first,more) },
      peg$c2 = /^[Mm]/,
      peg$c3 = peg$classExpectation(["M", "m"], false, false),
      peg$c4 = function(c, first, more) {
          var move = commands(c,[first]);
          if (more) move = move.concat(commands(c=='M' ? 'L' : 'l',more[1]));
          return move;
        },
      peg$c5 = /^[Zz]/,
      peg$c6 = peg$classExpectation(["Z", "z"], false, false),
      peg$c7 = function() { return commands('Z') },
      peg$c8 = /^[Ll]/,
      peg$c9 = peg$classExpectation(["L", "l"], false, false),
      peg$c10 = function(c, args) { return commands(c,args) },
      peg$c11 = /^[Hh]/,
      peg$c12 = peg$classExpectation(["H", "h"], false, false),
      peg$c13 = function(c, args) { return commands(c,args.map(function(x){ return {x:x}})) },
      peg$c14 = /^[Vv]/,
      peg$c15 = peg$classExpectation(["V", "v"], false, false),
      peg$c16 = function(c, args) { return commands(c,args.map(function(y){ return {y:y}})) },
      peg$c17 = /^[Cc]/,
      peg$c18 = peg$classExpectation(["C", "c"], false, false),
      peg$c19 = function(a, b, c) { return { x1:a.x, y1:a.y, x2:b.x, y2:b.y, x:c.x, y:c.y } },
      peg$c20 = /^[Ss]/,
      peg$c21 = peg$classExpectation(["S", "s"], false, false),
      peg$c22 = function(b, c) { return { x2:b.x, y2:b.y, x:c.x, y:c.y } },
      peg$c23 = /^[Qq]/,
      peg$c24 = peg$classExpectation(["Q", "q"], false, false),
      peg$c25 = function(a, b) { return { x1:a.x, y1:a.y, x:b.x, y:b.y } },
      peg$c26 = /^[Tt]/,
      peg$c27 = peg$classExpectation(["T", "t"], false, false),
      peg$c28 = /^[Aa]/,
      peg$c29 = peg$classExpectation(["A", "a"], false, false),
      peg$c30 = function(rx, ry, xrot, large, sweep, xy) { return { rx:rx, ry:ry, xAxisRotation:xrot, largeArc:large, sweep:sweep, x:xy.x, y:xy.y } },
      peg$c31 = function(x, y) { return { x:x, y:y } },
      peg$c32 = function(n) { return n*1 },
      peg$c33 = function(parts) { return parts.join('')*1 },
      peg$c34 = /^[01]/,
      peg$c35 = peg$classExpectation(["0", "1"], false, false),
      peg$c36 = function(bit) { return bit=='1' },
      peg$c37 = function() { return '' },
      peg$c38 = ",",
      peg$c39 = peg$literalExpectation(",", false),
      peg$c40 = function(parts) { return parts.join('') },
      peg$c41 = ".",
      peg$c42 = peg$literalExpectation(".", false),
      peg$c43 = /^[eE]/,
      peg$c44 = peg$classExpectation(["e", "E"], false, false),
      peg$c45 = /^[+\-]/,
      peg$c46 = peg$classExpectation(["+", "-"], false, false),
      peg$c47 = /^[0-9]/,
      peg$c48 = peg$classExpectation([["0", "9"]], false, false),
      peg$c49 = function(digits) { return digits.join('') },
      peg$c50 = /^[ \t\n\r]/,
      peg$c51 = peg$classExpectation([" ", "\t", "\n", "\r"], false, false),

      peg$currPos          = 0,
      peg$savedPos         = 0,
      peg$posDetailsCache  = [{ line: 1, column: 1 }],
      peg$maxFailPos       = 0,
      peg$maxFailExpected  = [],
      peg$silentFails      = 0,

      peg$result;

  if ("startRule" in options) {
    if (!(options.startRule in peg$startRuleFunctions)) {
      throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
    }

    peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
  }

  function text() {
    return input.substring(peg$savedPos, peg$currPos);
  }

  function location() {
    return peg$computeLocation(peg$savedPos, peg$currPos);
  }

  function expected(description, location) {
    location = location !== void 0 ? location : peg$computeLocation(peg$savedPos, peg$currPos)

    throw peg$buildStructuredError(
      [peg$otherExpectation(description)],
      input.substring(peg$savedPos, peg$currPos),
      location
    );
  }

  function error(message, location) {
    location = location !== void 0 ? location : peg$computeLocation(peg$savedPos, peg$currPos)

    throw peg$buildSimpleError(message, location);
  }

  function peg$literalExpectation(text, ignoreCase) {
    return { type: "literal", text: text, ignoreCase: ignoreCase };
  }

  function peg$classExpectation(parts, inverted, ignoreCase) {
    return { type: "class", parts: parts, inverted: inverted, ignoreCase: ignoreCase };
  }

  function peg$anyExpectation() {
    return { type: "any" };
  }

  function peg$endExpectation() {
    return { type: "end" };
  }

  function peg$otherExpectation(description) {
    return { type: "other", description: description };
  }

  function peg$computePosDetails(pos) {
    var details = peg$posDetailsCache[pos], p;

    if (details) {
      return details;
    } else {
      p = pos - 1;
      while (!peg$posDetailsCache[p]) {
        p--;
      }

      details = peg$posDetailsCache[p];
      details = {
        line:   details.line,
        column: details.column
      };

      while (p < pos) {
        if (input.charCodeAt(p) === 10) {
          details.line++;
          details.column = 1;
        } else {
          details.column++;
        }

        p++;
      }

      peg$posDetailsCache[pos] = details;
      return details;
    }
  }

  function peg$computeLocation(startPos, endPos) {
    var startPosDetails = peg$computePosDetails(startPos),
        endPosDetails   = peg$computePosDetails(endPos);

    return {
      start: {
        offset: startPos,
        line:   startPosDetails.line,
        column: startPosDetails.column
      },
      end: {
        offset: endPos,
        line:   endPosDetails.line,
        column: endPosDetails.column
      }
    };
  }

  function peg$fail(expected) {
    if (peg$currPos < peg$maxFailPos) { return; }

    if (peg$currPos > peg$maxFailPos) {
      peg$maxFailPos = peg$currPos;
      peg$maxFailExpected = [];
    }

    peg$maxFailExpected.push(expected);
  }

  function peg$buildSimpleError(message, location) {
    return new peg$SyntaxError(message, null, null, location);
  }

  function peg$buildStructuredError(expected, found, location) {
    return new peg$SyntaxError(
      peg$SyntaxError.buildMessage(expected, found),
      expected,
      found,
      location
    );
  }

  function peg$parsesvg_path() {
    var s0, s1, s2, s3, s4;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parsewsp();
    while (s2 !== peg$FAILED) {
      s1.push(s2);
      s2 = peg$parsewsp();
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parsemoveTo_drawTo_commandGroups();
      if (s2 === peg$FAILED) {
        s2 = null;
      }
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$parsewsp();
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          s4 = peg$parsewsp();
        }
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c0(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsemoveTo_drawTo_commandGroups() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    s1 = peg$parsemoveTo_drawTo_commandGroup();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$currPos;
      s4 = [];
      s5 = peg$parsewsp();
      while (s5 !== peg$FAILED) {
        s4.push(s5);
        s5 = peg$parsewsp();
      }
      if (s4 !== peg$FAILED) {
        s5 = peg$parsemoveTo_drawTo_commandGroup();
        if (s5 !== peg$FAILED) {
          s4 = [s4, s5];
          s3 = s4;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$currPos;
        s4 = [];
        s5 = peg$parsewsp();
        while (s5 !== peg$FAILED) {
          s4.push(s5);
          s5 = peg$parsewsp();
        }
        if (s4 !== peg$FAILED) {
          s5 = peg$parsemoveTo_drawTo_commandGroup();
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c1(s1, s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsemoveTo_drawTo_commandGroup() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    s1 = peg$parsemoveto();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$currPos;
      s4 = [];
      s5 = peg$parsewsp();
      while (s5 !== peg$FAILED) {
        s4.push(s5);
        s5 = peg$parsewsp();
      }
      if (s4 !== peg$FAILED) {
        s5 = peg$parsedrawto_command();
        if (s5 !== peg$FAILED) {
          s4 = [s4, s5];
          s3 = s4;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$currPos;
        s4 = [];
        s5 = peg$parsewsp();
        while (s5 !== peg$FAILED) {
          s4.push(s5);
          s5 = peg$parsewsp();
        }
        if (s4 !== peg$FAILED) {
          s5 = peg$parsedrawto_command();
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c1(s1, s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsedrawto_command() {
    var s0;

    s0 = peg$parseclosepath();
    if (s0 === peg$FAILED) {
      s0 = peg$parselineto();
      if (s0 === peg$FAILED) {
        s0 = peg$parsehorizontal_lineto();
        if (s0 === peg$FAILED) {
          s0 = peg$parsevertical_lineto();
          if (s0 === peg$FAILED) {
            s0 = peg$parsecurveto();
            if (s0 === peg$FAILED) {
              s0 = peg$parsesmooth_curveto();
              if (s0 === peg$FAILED) {
                s0 = peg$parsequadratic_bezier_curveto();
                if (s0 === peg$FAILED) {
                  s0 = peg$parsesmooth_quadratic_bezier_curveto();
                  if (s0 === peg$FAILED) {
                    s0 = peg$parseelliptical_arc();
                  }
                }
              }
            }
          }
        }
      }
    }

    return s0;
  }

  function peg$parsemoveto() {
    var s0, s1, s2, s3, s4, s5, s6;

    s0 = peg$currPos;
    if (peg$c2.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c3); }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parsewsp();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parsewsp();
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parsecoordinate_pair();
        if (s3 !== peg$FAILED) {
          s4 = peg$currPos;
          s5 = peg$parsecomma_wsp();
          if (s5 === peg$FAILED) {
            s5 = null;
          }
          if (s5 !== peg$FAILED) {
            s6 = peg$parselineto_argument_sequence();
            if (s6 !== peg$FAILED) {
              s5 = [s5, s6];
              s4 = s5;
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
          if (s4 === peg$FAILED) {
            s4 = null;
          }
          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c4(s1, s3, s4);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseclosepath() {
    var s0, s1;

    s0 = peg$currPos;
    if (peg$c5.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c6); }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c7();
    }
    s0 = s1;

    return s0;
  }

  function peg$parselineto() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    if (peg$c8.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c9); }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parsewsp();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parsewsp();
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parselineto_argument_sequence();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c10(s1, s3);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parselineto_argument_sequence() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    s1 = peg$parsecoordinate_pair();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$currPos;
      s4 = peg$parsecomma_wsp();
      if (s4 === peg$FAILED) {
        s4 = null;
      }
      if (s4 !== peg$FAILED) {
        s5 = peg$parsecoordinate_pair();
        if (s5 !== peg$FAILED) {
          s4 = [s4, s5];
          s3 = s4;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$currPos;
        s4 = peg$parsecomma_wsp();
        if (s4 === peg$FAILED) {
          s4 = null;
        }
        if (s4 !== peg$FAILED) {
          s5 = peg$parsecoordinate_pair();
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c1(s1, s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsehorizontal_lineto() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    if (peg$c11.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c12); }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parsewsp();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parsewsp();
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parsecoordinate_sequence();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c13(s1, s3);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsecoordinate_sequence() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    s1 = peg$parsenumber();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$currPos;
      s4 = peg$parsecomma_wsp();
      if (s4 === peg$FAILED) {
        s4 = null;
      }
      if (s4 !== peg$FAILED) {
        s5 = peg$parsenumber();
        if (s5 !== peg$FAILED) {
          s4 = [s4, s5];
          s3 = s4;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$currPos;
        s4 = peg$parsecomma_wsp();
        if (s4 === peg$FAILED) {
          s4 = null;
        }
        if (s4 !== peg$FAILED) {
          s5 = peg$parsenumber();
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c1(s1, s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsevertical_lineto() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    if (peg$c14.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c15); }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parsewsp();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parsewsp();
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parsecoordinate_sequence();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c16(s1, s3);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsecurveto() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    if (peg$c17.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c18); }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parsewsp();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parsewsp();
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parsecurveto_argument_sequence();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c10(s1, s3);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsecurveto_argument_sequence() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    s1 = peg$parsecurveto_argument();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$currPos;
      s4 = peg$parsecomma_wsp();
      if (s4 === peg$FAILED) {
        s4 = null;
      }
      if (s4 !== peg$FAILED) {
        s5 = peg$parsecurveto_argument();
        if (s5 !== peg$FAILED) {
          s4 = [s4, s5];
          s3 = s4;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$currPos;
        s4 = peg$parsecomma_wsp();
        if (s4 === peg$FAILED) {
          s4 = null;
        }
        if (s4 !== peg$FAILED) {
          s5 = peg$parsecurveto_argument();
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c1(s1, s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsecurveto_argument() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    s1 = peg$parsecoordinate_pair();
    if (s1 !== peg$FAILED) {
      s2 = peg$parsecomma_wsp();
      if (s2 === peg$FAILED) {
        s2 = null;
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parsecoordinate_pair();
        if (s3 !== peg$FAILED) {
          s4 = peg$parsecomma_wsp();
          if (s4 === peg$FAILED) {
            s4 = null;
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parsecoordinate_pair();
            if (s5 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c19(s1, s3, s5);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsesmooth_curveto() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    if (peg$c20.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c21); }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parsewsp();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parsewsp();
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parsesmooth_curveto_argument_sequence();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c10(s1, s3);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsesmooth_curveto_argument_sequence() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    s1 = peg$parsesmooth_curveto_argument();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$currPos;
      s4 = peg$parsecomma_wsp();
      if (s4 === peg$FAILED) {
        s4 = null;
      }
      if (s4 !== peg$FAILED) {
        s5 = peg$parsesmooth_curveto_argument();
        if (s5 !== peg$FAILED) {
          s4 = [s4, s5];
          s3 = s4;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$currPos;
        s4 = peg$parsecomma_wsp();
        if (s4 === peg$FAILED) {
          s4 = null;
        }
        if (s4 !== peg$FAILED) {
          s5 = peg$parsesmooth_curveto_argument();
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c1(s1, s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsesmooth_curveto_argument() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    s1 = peg$parsecoordinate_pair();
    if (s1 !== peg$FAILED) {
      s2 = peg$parsecomma_wsp();
      if (s2 === peg$FAILED) {
        s2 = null;
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parsecoordinate_pair();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c22(s1, s3);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsequadratic_bezier_curveto() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    if (peg$c23.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c24); }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parsewsp();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parsewsp();
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parsequadratic_bezier_curveto_argument_sequence();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c10(s1, s3);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsequadratic_bezier_curveto_argument_sequence() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    s1 = peg$parsequadratic_bezier_curveto_argument();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$currPos;
      s4 = peg$parsecomma_wsp();
      if (s4 === peg$FAILED) {
        s4 = null;
      }
      if (s4 !== peg$FAILED) {
        s5 = peg$parsequadratic_bezier_curveto_argument();
        if (s5 !== peg$FAILED) {
          s4 = [s4, s5];
          s3 = s4;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$currPos;
        s4 = peg$parsecomma_wsp();
        if (s4 === peg$FAILED) {
          s4 = null;
        }
        if (s4 !== peg$FAILED) {
          s5 = peg$parsequadratic_bezier_curveto_argument();
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c1(s1, s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsequadratic_bezier_curveto_argument() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    s1 = peg$parsecoordinate_pair();
    if (s1 !== peg$FAILED) {
      s2 = peg$parsecomma_wsp();
      if (s2 === peg$FAILED) {
        s2 = null;
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parsecoordinate_pair();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c25(s1, s3);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsesmooth_quadratic_bezier_curveto() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    if (peg$c26.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c27); }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parsewsp();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parsewsp();
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parsesmooth_quadratic_bezier_curveto_argument_sequence();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c10(s1, s3);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsesmooth_quadratic_bezier_curveto_argument_sequence() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    s1 = peg$parsecoordinate_pair();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$currPos;
      s4 = peg$parsecomma_wsp();
      if (s4 === peg$FAILED) {
        s4 = null;
      }
      if (s4 !== peg$FAILED) {
        s5 = peg$parsecoordinate_pair();
        if (s5 !== peg$FAILED) {
          s4 = [s4, s5];
          s3 = s4;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$currPos;
        s4 = peg$parsecomma_wsp();
        if (s4 === peg$FAILED) {
          s4 = null;
        }
        if (s4 !== peg$FAILED) {
          s5 = peg$parsecoordinate_pair();
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c1(s1, s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseelliptical_arc() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    if (peg$c28.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c29); }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parsewsp();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parsewsp();
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parseelliptical_arc_argument_sequence();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c10(s1, s3);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseelliptical_arc_argument_sequence() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    s1 = peg$parseelliptical_arc_argument();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$currPos;
      s4 = peg$parsecomma_wsp();
      if (s4 === peg$FAILED) {
        s4 = null;
      }
      if (s4 !== peg$FAILED) {
        s5 = peg$parseelliptical_arc_argument();
        if (s5 !== peg$FAILED) {
          s4 = [s4, s5];
          s3 = s4;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$currPos;
        s4 = peg$parsecomma_wsp();
        if (s4 === peg$FAILED) {
          s4 = null;
        }
        if (s4 !== peg$FAILED) {
          s5 = peg$parseelliptical_arc_argument();
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c1(s1, s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseelliptical_arc_argument() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11;

    s0 = peg$currPos;
    s1 = peg$parsenonnegative_number();
    if (s1 !== peg$FAILED) {
      s2 = peg$parsecomma_wsp();
      if (s2 === peg$FAILED) {
        s2 = null;
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parsenonnegative_number();
        if (s3 !== peg$FAILED) {
          s4 = peg$parsecomma_wsp();
          if (s4 === peg$FAILED) {
            s4 = null;
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parsenumber();
            if (s5 !== peg$FAILED) {
              s6 = peg$parsecomma_wsp();
              if (s6 !== peg$FAILED) {
                s7 = peg$parseflag();
                if (s7 !== peg$FAILED) {
                  s8 = peg$parsecomma_wsp();
                  if (s8 === peg$FAILED) {
                    s8 = null;
                  }
                  if (s8 !== peg$FAILED) {
                    s9 = peg$parseflag();
                    if (s9 !== peg$FAILED) {
                      s10 = peg$parsecomma_wsp();
                      if (s10 === peg$FAILED) {
                        s10 = null;
                      }
                      if (s10 !== peg$FAILED) {
                        s11 = peg$parsecoordinate_pair();
                        if (s11 !== peg$FAILED) {
                          peg$savedPos = s0;
                          s1 = peg$c30(s1, s3, s5, s7, s9, s11);
                          s0 = s1;
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsecoordinate_pair() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    s1 = peg$parsenumber();
    if (s1 !== peg$FAILED) {
      s2 = peg$parsecomma_wsp();
      if (s2 === peg$FAILED) {
        s2 = null;
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parsenumber();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c31(s1, s3);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsenonnegative_number() {
    var s0, s1;

    s0 = peg$currPos;
    s1 = peg$parsefloating_point_constant();
    if (s1 === peg$FAILED) {
      s1 = peg$parsedigit_sequence();
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c32(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parsenumber() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    s1 = peg$currPos;
    s2 = peg$parsesign();
    if (s2 === peg$FAILED) {
      s2 = null;
    }
    if (s2 !== peg$FAILED) {
      s3 = peg$parsefloating_point_constant();
      if (s3 !== peg$FAILED) {
        s2 = [s2, s3];
        s1 = s2;
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }
    if (s1 === peg$FAILED) {
      s1 = peg$currPos;
      s2 = peg$parsesign();
      if (s2 === peg$FAILED) {
        s2 = null;
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parsedigit_sequence();
        if (s3 !== peg$FAILED) {
          s2 = [s2, s3];
          s1 = s2;
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c33(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parseflag() {
    var s0, s1;

    s0 = peg$currPos;
    if (peg$c34.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c35); }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c36(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parsecomma_wsp() {
    var s0, s1, s2, s3, s4;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parsewsp();
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parsewsp();
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parsecomma();
      if (s2 === peg$FAILED) {
        s2 = null;
      }
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$parsewsp();
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          s4 = peg$parsewsp();
        }
        if (s3 !== peg$FAILED) {
          s1 = [s1, s2, s3];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$currPos;
      s2 = peg$parsecomma();
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$parsewsp();
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          s4 = peg$parsewsp();
        }
        if (s3 !== peg$FAILED) {
          s2 = [s2, s3];
          s1 = s2;
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c37();
      }
      s0 = s1;
    }

    return s0;
  }

  function peg$parsecomma() {
    var s0;

    if (input.charCodeAt(peg$currPos) === 44) {
      s0 = peg$c38;
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c39); }
    }

    return s0;
  }

  function peg$parsefloating_point_constant() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    s1 = peg$currPos;
    s2 = peg$parsefractional_constant();
    if (s2 !== peg$FAILED) {
      s3 = peg$parseexponent();
      if (s3 === peg$FAILED) {
        s3 = null;
      }
      if (s3 !== peg$FAILED) {
        s2 = [s2, s3];
        s1 = s2;
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }
    if (s1 === peg$FAILED) {
      s1 = peg$currPos;
      s2 = peg$parsedigit_sequence();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseexponent();
        if (s3 !== peg$FAILED) {
          s2 = [s2, s3];
          s1 = s2;
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c40(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parsefractional_constant() {
    var s0, s1, s2, s3, s4;

    s0 = peg$currPos;
    s1 = peg$currPos;
    s2 = peg$parsedigit_sequence();
    if (s2 === peg$FAILED) {
      s2 = null;
    }
    if (s2 !== peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 46) {
        s3 = peg$c41;
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c42); }
      }
      if (s3 !== peg$FAILED) {
        s4 = peg$parsedigit_sequence();
        if (s4 !== peg$FAILED) {
          s2 = [s2, s3, s4];
          s1 = s2;
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }
    if (s1 === peg$FAILED) {
      s1 = peg$currPos;
      s2 = peg$parsedigit_sequence();
      if (s2 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 46) {
          s3 = peg$c41;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c42); }
        }
        if (s3 !== peg$FAILED) {
          s2 = [s2, s3];
          s1 = s2;
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c40(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parseexponent() {
    var s0, s1, s2, s3, s4;

    s0 = peg$currPos;
    s1 = peg$currPos;
    if (peg$c43.test(input.charAt(peg$currPos))) {
      s2 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c44); }
    }
    if (s2 !== peg$FAILED) {
      s3 = peg$parsesign();
      if (s3 === peg$FAILED) {
        s3 = null;
      }
      if (s3 !== peg$FAILED) {
        s4 = peg$parsedigit_sequence();
        if (s4 !== peg$FAILED) {
          s2 = [s2, s3, s4];
          s1 = s2;
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c40(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parsesign() {
    var s0;

    if (peg$c45.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c46); }
    }

    return s0;
  }

  function peg$parsedigit_sequence() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = [];
    if (peg$c47.test(input.charAt(peg$currPos))) {
      s2 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c48); }
    }
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        if (peg$c47.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c48); }
        }
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c49(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parsewsp() {
    var s0, s1;

    s0 = peg$currPos;
    if (peg$c50.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c51); }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c37();
    }
    s0 = s1;

    return s0;
  }


    function merge(first,more){
      if (!more) return [first];
      for (var a=[first],i=0,l=more.length;i<l;i++) a[i+1]=more[i][1];
      return a;
    }

    var cmds = {m:'moveto',l:'lineto',h:'horizontal lineto',v:'vertical lineto',c:'curveto',s:'smooth curveto',q:'quadratic curveto',t:'smooth quadratic curveto',a:'elliptical arc',z:'closepath'};
    for (var code in cmds) cmds[code.toUpperCase()]=cmds[code];
    function commands(code,args){
      if (!args) args=[{}];
      for (var i=args.length;i--;){
        var cmd={code:code,command:cmds[code]};
        if (code==code.toLowerCase()) cmd.relative=true;
        for (var k in args[i]) cmd[k]=args[i][k];
        args[i] = cmd;
      }
      return args;
    }


  peg$result = peg$startRuleFunction();

  if (peg$result !== peg$FAILED && peg$currPos === input.length) {
    return peg$result;
  } else {
    if (peg$result !== peg$FAILED && peg$currPos < input.length) {
      peg$fail(peg$endExpectation());
    }

    throw peg$buildStructuredError(
      peg$maxFailExpected,
      peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null,
      peg$maxFailPos < input.length
        ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1)
        : peg$computeLocation(peg$maxFailPos, peg$maxFailPos)
    );
  }
}

module.exports = {
  SyntaxError: peg$SyntaxError,
  parse:       peg$parse
};


/***/ }),

/***/ "./node_modules/uuid/lib/bytesToUuid.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/bytesToUuid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([bth[buf[i++]], bth[buf[i++]], 
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]]]).join('');
}

module.exports = bytesToUuid;


/***/ }),

/***/ "./node_modules/uuid/lib/rng-browser.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/rng-browser.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),

/***/ "./node_modules/uuid/v4.js":
/*!*********************************!*\
  !*** ./node_modules/uuid/v4.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ "./node_modules/uuid/lib/rng-browser.js");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "./node_modules/uuid/lib/bytesToUuid.js");

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),

/***/ "./src/ActionSpec.js":
/*!***************************!*\
  !*** ./src/ActionSpec.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _TimingSpec2 = _interopRequireDefault(__webpack_require__(/*! ./TimingSpec.js */ "./src/TimingSpec.js"));

var _GlobalVar = __webpack_require__(/*! ./util/GlobalVar.js */ "./src/util/GlobalVar.js");

var _jsmovin = __webpack_require__(/*! jsmovin */ "./node_modules/jsmovin/bin/jsmovin.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ActionSpec =
/*#__PURE__*/
function (_TimingSpec) {
  _inherits(ActionSpec, _TimingSpec);

  function ActionSpec() {
    var _this;

    _classCallCheck(this, ActionSpec);

    _this = _possibleConstructorReturn(this, (ActionSpec.__proto__ || Object.getPrototypeOf(ActionSpec)).call(this));
    _this.chartIdx = 0;
    _this._type = ActionSpec.actionTypes.appear;
    _this.animationType = ''; //not set by the user

    _this._easing = ActionSpec.easingType.easeLinear;
    _this._duration = 0;
    _this.startTime; //not set by the user

    _this.attribute =
    /*#__PURE__*/
    function () {
      function _class() {
        _classCallCheck(this, _class);

        this.attrName;
        this.from;
        this.to;
      }

      return _class;
    }();

    return _this;
  }
  /***** getters and setters *****/


  _createClass(ActionSpec, [{
    key: "initAction",

    /***** end getters and setters *****/

    /**
     * init action using json obj
     * @param {JSON obj} actionJson
     */
    value: function initAction(actionJson) {
      this.chartIdx = actionJson.chartIdx;
      this.type = actionJson.type; //action type

      this.animationType = actionJson.animationType; //animation type

      this.reference = actionJson.reference; //timingSpec reference

      this.offset = actionJson.offset; //timingSpec delay

      this.duration = actionJson.duration; //action duration

      this.easing = actionJson.easing; //attributes only take effect when type is custom

      if (typeof actionJson.attribute !== 'undefined') {
        this.attribute.attrName = actionJson.attribute.attrName;
        this.attribute.from = actionJson.attribute.from;
        this.attribute.to = actionJson.attribute.to;
      }
    }
    /**
     * translate template animations to 'custom' type with the transition on some visual attributes
     */

  }, {
    key: "type",
    set: function set(tp) {
      if (typeof tp !== 'undefined') {
        if (Object.keys(ActionSpec.actionTypes).includes(tp)) {
          this._type = tp;
        } else {
          alert('the \'type\' of action is not defined. ');
        }
      }
    },
    get: function get() {
      return this._type;
    }
  }, {
    key: "easing",
    set: function set(es) {
      if (typeof es !== 'undefined') {
        if (Object.keys(ActionSpec.easingType).includes(es)) {
          this._easing = es;
        } else {
          alert('the \'easing\' of action is not defined. ');
        }
      }
    },
    get: function get() {
      return this._easing;
    }
  }, {
    key: "duration",
    set: function set(drtn) {
      if (typeof drtn !== 'undefined') {
        if (typeof drtn === 'number') {
          this._duration = Math.floor(drtn / (1000 / _TimingSpec2.default.FRAME_RATE)) * (1000 / _TimingSpec2.default.FRAME_RATE);
        } else {
          this._duration = drtn;
        }
      }
    },
    get: function get() {
      return this._duration;
    }
  }], [{
    key: "transToVisualAttrAction",
    value: function transToVisualAttrAction(actionJson, chartIdx, changedAttrs, dataTrans) {
      var actionJsonArr = []; //generate pre-render actions

      var _loop = function _loop(i) {
        var changedAttr = changedAttrs[i];
        var fromArr = [],
            toArr = [];
        dataTrans.forEach(function (transArr, markId) {
          if (chartIdx + 1 < transArr.length) {
            if (changedAttr === 'd' || changedAttr === 'textContent' || changedAttr === 'fill' || changedAttr === 'stroke') {
              var tmpFromItem = [markId, !transArr[chartIdx][changedAttr] ? changedAttr === 'd' ? 'm0,0' : transArr[chartIdx][changedAttr] : transArr[chartIdx][changedAttr]],
                  tmpToItem = [markId, !transArr[chartIdx + 1][changedAttr] ? changedAttr === 'd' ? 'm0,0' : transArr[chartIdx + 1][changedAttr] : transArr[chartIdx + 1][changedAttr]];

              if (changedAttr === 'd') {
                var tmpFromPath = document.createElementNS('http://www.w3.org/2000/svg', 'path'),
                    tmpToPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                tmpFromPath.setAttributeNS(null, 'd', !transArr[chartIdx][changedAttr] ? 'm0,0' : transArr[chartIdx][changedAttr]);
                tmpToPath.setAttributeNS(null, 'd', !transArr[chartIdx + 1][changedAttr] ? 'm0,0' : transArr[chartIdx + 1][changedAttr]);
                var tmpFromPathLen = tmpFromPath.getTotalLength(),
                    tmpToPathLen = tmpToPath.getTotalLength();
                var stepNum = 300,
                    fromPathStepLen = tmpFromPathLen / stepNum,
                    toPathStepLen = tmpToPathLen / stepNum;
                var fromDiscritPath = [],
                    toDiscritPath = [];

                for (var _i = 0; _i < stepNum; _i++) {
                  var tmpFromPnt = tmpFromPath.getPointAtLength(fromPathStepLen * _i),
                      tmpToPnt = tmpToPath.getPointAtLength(toPathStepLen * _i);
                  fromDiscritPath.push([tmpFromPnt.x, tmpFromPnt.y]);
                  toDiscritPath.push([tmpToPnt.x, tmpToPnt.y]);
                }

                tmpFromItem.push(fromDiscritPath);
                tmpToItem.push(toDiscritPath);
              }

              fromArr.push(tmpFromItem);
              toArr.push(tmpToItem);
            } else {
              fromArr.push([markId, parseFloat(transArr[chartIdx][changedAttr])]);
              toArr.push([markId, parseFloat(transArr[chartIdx + 1][changedAttr])]);
            }
          }
        });
        var preObj = {
          chartIdx: actionJson.chartIdx,
          reference: _TimingSpec2.default.timingRef.previousStart,
          offset: 0,
          duration: actionJson.type === ActionSpec.actionTypes.transition ? actionJson.duration : 0,
          type: ActionSpec.actionTargets.mark,
          animationType: ActionSpec.targetAnimationType.custom,
          attribute: {
            attrName: changedAttr,
            from: fromArr,
            to: toArr
          }
        };
        actionJsonArr.push(preObj);
      };

      for (var i = 0; i < changedAttrs.length; i++) {
        _loop(i);
      }

      if (actionJson.type !== ActionSpec.actionTypes.transition) {
        var tmpObj = {
          chartIdx: actionJson.chartIdx,
          reference: actionJson.reference,
          //timingSpec offset reference
          offset: actionJson.offset,
          easing: actionJson.easing,
          duration: typeof actionJson.duration === 'undefined' ? 300 : actionJson.duration,
          type: ActionSpec.actionTargets.mask
        };

        switch (actionJson.type) {
          case ActionSpec.actionTypes.fade:
            tmpObj.animationType = ActionSpec.targetAnimationType.fade;
            tmpObj.type = ActionSpec.actionTargets.mark;
            tmpObj.attribute = {
              attrName: 'opacity',
              from: 1,
              to: 0
            };
            break;

          case ActionSpec.actionTypes.fadeOut:
            tmpObj.animationType = ActionSpec.targetAnimationType.fade;
            tmpObj.type = ActionSpec.actionTargets.mark;
            tmpObj.attribute = {
              attrName: 'opacity',
              from: 0,
              to: 1
            };
            break;

          case ActionSpec.actionTypes.wipeBottom:
            tmpObj.animationType = ActionSpec.targetAnimationType.wipe;
            tmpObj.attribute = {
              attrName: 'scaleY',
              from: 0,
              to: 1
            };
            break;

          case ActionSpec.actionTypes.wipeOutFromTop:
            tmpObj.animationType = ActionSpec.targetAnimationType.wipe;
            tmpObj.attribute = {
              attrName: 'scaleY',
              from: 0,
              to: 1
            };
            break;

          case ActionSpec.actionTypes.wipeTop:
            tmpObj.animationType = ActionSpec.targetAnimationType.move;
            tmpObj.attribute = {
              attrName: 'y',
              from: 0,
              to: 1
            };
            break;

          case ActionSpec.actionTypes.wipeOutFromBottom:
            tmpObj.animationType = ActionSpec.targetAnimationType.move;
            tmpObj.attribute = {
              attrName: 'y',
              from: 1,
              to: 0
            };
            break;

          case ActionSpec.actionTypes.wipeLeft:
            tmpObj.animationType = ActionSpec.targetAnimationType.move;
            tmpObj.attribute = {
              attrName: 'x',
              from: 0,
              to: 1
            };
            break;

          case ActionSpec.actionTypes.wipeOutFromRight:
            tmpObj.animationType = ActionSpec.targetAnimationType.move;
            tmpObj.attribute = {
              attrName: 'x',
              from: 1,
              to: 0
            };
            break;

          case ActionSpec.actionTypes.wipeRight:
            tmpObj.animationType = ActionSpec.targetAnimationType.wipe;
            tmpObj.attribute = {
              attrName: 'width',
              from: 1,
              to: 0
            };
            break;

          case ActionSpec.actionTypes.wipeOutFromLeft:
            tmpObj.animationType = ActionSpec.targetAnimationType.wipe;
            tmpObj.attribute = {
              attrName: 'width',
              from: 0,
              to: 1
            };
            break;

          case ActionSpec.actionTypes.wheel:
            tmpObj.animationType = ActionSpec.targetAnimationType.wheel;
            tmpObj.attribute = {
              attrName: 'startAngle',
              from: 0,
              to: 1
            };
            break;

          case ActionSpec.actionTypes.wheelOut:
            tmpObj.animationType = ActionSpec.targetAnimationType.wheel;
            tmpObj.attribute = {
              attrName: 'startAngle',
              from: 1,
              to: 0
            };
            break;

          case ActionSpec.actionTypes.circle:
            tmpObj.animationType = ActionSpec.targetAnimationType.circle;
            tmpObj.attribute = {
              attrName: 'innerRadius',
              from: 0,
              to: 1
            };
            break;

          case ActionSpec.actionTypes.circleOut:
            tmpObj.animationType = ActionSpec.targetAnimationType.circle;
            tmpObj.attribute = {
              attrName: 'innerRadius',
              from: 1,
              to: 0
            };
            break;

          case ActionSpec.actionTypes.grow:
            tmpObj.type = ActionSpec.actionTargets.mark;
            tmpObj.animationType = ActionSpec.targetAnimationType.grow;
            tmpObj.attribute = {
              attrName: 'stroke-dashoffset',
              from: 1,
              to: 0
            };
            break;

          case ActionSpec.actionTypes.degrow:
            tmpObj.type = ActionSpec.actionTargets.mark;
            tmpObj.animationType = ActionSpec.targetAnimationType.grow;
            tmpObj.attribute = {
              attrName: 'stroke-dashoffset',
              from: 0,
              to: 1
            };
            break;

          case ActionSpec.actionTypes.appear:
            tmpObj.duration = 1000 / _TimingSpec2.default.FRAME_RATE;
            tmpObj.animationType = ActionSpec.targetAnimationType.fade;
            tmpObj.attribute = {
              attrName: 'opacity',
              from: 1,
              to: 0
            };
            break;

          case ActionSpec.actionTypes.zoom:
            tmpObj.type = ActionSpec.actionTargets.mark;
            tmpObj.reference = _TimingSpec2.default.timingRef.previousStart;
            tmpObj.offset = 0;
            tmpObj.animationType = ActionSpec.targetAnimationType.wipe;
            tmpObj.attribute = {
              attrName: 'width',
              from: 0,
              to: 1
            };
            var tmpObj2 = {
              chartIdx: actionJson.chartIdx,
              easing: actionJson.easing,
              duration: typeof actionJson.duration === 'undefined' ? 300 : actionJson.duration,
              reference: actionJson.reference,
              //timingSpec offset reference
              offset: actionJson.offset,
              type: ActionSpec.actionTargets.mask,
              animationType: ActionSpec.targetAnimationType.wipe,
              attribute: {
                attrName: 'height',
                from: 1,
                to: 0
              }
            };
            actionJsonArr.push(tmpObj2);
            break;

          case ActionSpec.actionTypes.custom:
            tmpObj.type = ActionSpec.actionTargets.mark;
            tmpObj.animationType = ActionSpec.targetAnimationType.custom;
            tmpObj.attribute = {};

            if (typeof actionJson.attribute !== 'undefined') {
              tmpObj.attribute = {
                attrName: actionJson.attribute.attrName,
                from: actionJson.attribute.from,
                to: actionJson.attribute.to
              };
            }

            break;
        }

        actionJsonArr.push(tmpObj);
      }

      return actionJsonArr;
    }
    /**
     * calculate the total duration of all the actions
     * @param {Array<ActionSpec>} actionArr 
     * @param {Map} durationAttrValues: key: data attr name, value Map{key: markId, value: attr value}
     */

  }, {
    key: "calActionDuration",
    value: function calActionDuration(actionArr, durationAttrValues, domMarks) {
      var wholeStart = 0,
          wholeEnd = -100000; //start time of the earliest action and end time of the lastst action

      var lastStart = 0,
          lastEnd = 0;
      var durationWithAttr = false;

      var _loop2 = function _loop2(i) {
        var tmpStartMap = void 0,
            tmpEndMap = new Map();
        tmpStartMap = actionArr[i].calOffsetTime(lastStart, lastEnd, 0, domMarks); //change to retunr value of Map
        //ignore the influence of the animation for the boundary of the mask

        if (i > 0) {
          if (actionArr[i - 1].animationType === ActionSpec.targetAnimationType.mistake) {
            tmpStartMap.forEach(function (tmpStart, markId) {
              tmpStartMap.set(markId, tmpStart - actionArr[i - 1].offset);
            });
          }
        }

        var minTmpStart = 1000000,
            maxTmpEnd = -100000;
        actionArr[i].offsetStart = new Map();
        tmpStartMap.forEach(function (tmpStart, markId) {
          var tmpEnd = 0;

          if (_typeof(actionArr[i].duration) === 'object') {
            durationWithAttr = true;
            tmpEnd = tmpStart;
          } else if (typeof actionArr[i].duration === 'number') {
            tmpEnd = tmpStart + actionArr[i].duration;
          }

          tmpEndMap.set(markId, tmpEnd);
          actionArr[i].offsetStart.set(markId, tmpStart);

          if (tmpStart < minTmpStart) {
            minTmpStart = tmpStart;
          }

          if (tmpEnd > maxTmpEnd) {
            maxTmpEnd = tmpEnd;
          }

          if (tmpStart < wholeStart) {
            wholeStart = tmpStart;
          }

          if (tmpEnd > wholeEnd) {
            wholeEnd = tmpEnd;
          }
        });
        lastStart = minTmpStart;
        lastEnd = maxTmpEnd;
      };

      for (var i = 0; i < actionArr.length; i++) {
        _loop2(i);
      }

      var tmpResultDuration = wholeEnd - wholeStart;
      var resultDurations = new Map(); //key: markId, value: duraiton of this mark

      var minValueEachAttr = new Map();

      if (durationWithAttr) {
        //add duration with the attribute values
        //find the min value for each attr
        durationAttrValues.forEach(function (attrs, markId) {
          attrs.forEach(function (attrValue, attrName) {
            if (typeof minValueEachAttr.get(attrName) === 'undefined' || attrValue[0] < minValueEachAttr.get(attrName)) {
              minValueEachAttr.set(attrName, attrValue[0]);
            }
          });
        });
        durationAttrValues.forEach(function (attrs, markId) {
          var tmpExtraDuration = 0;
          attrs.forEach(function (attrValue, attrName) {
            var minAttrValue = minValueEachAttr.get(attrName);
            tmpExtraDuration += attrValue[1] * attrValue[0] / minAttrValue;
          });
          resultDurations.set(markId, tmpResultDuration + tmpExtraDuration);
        });
      } else {
        //directly set the duration of each mark with tmpResultDuration
        durationAttrValues.forEach(function (value, markId) {
          resultDurations.set(markId, tmpResultDuration);
        });
      }

      return [resultDurations, minValueEachAttr, actionArr];
    }
  }, {
    key: "transToLottieAction",
    value: function transToLottieAction(easingName) {
      switch (easingName) {
        case ActionSpec.easingType.easeLinear:
          return _jsmovin.EasingFactory.linear();
        // easeInQuad: 'easeInQuad',
        // easeOutQuad: 'easeOutQuad',
        // easeInOutQuad: 'easeInOutQuad',
        // easeInCubic: 'easeInCubic',
        // easeOutCubic: 'easeOutCubic',
        // easeInOutCubic: 'easeInOutCubic',
        // easeOutBounce: 'easeOutBounce'  
      }
    }
  }]);

  return ActionSpec;
}(_TimingSpec2.default);

ActionSpec.actionTypes = {
  fade: 'fade',
  wipeBottom: 'wipe bottom',
  wipeTop: 'wipe top',
  wipeLeft: 'wipe left',
  wipeRight: 'wipe right',
  wheel: 'wheel',
  appear: 'appear',
  circle: 'circle',
  grow: 'grow',
  custom: 'custom',
  fadeOut: 'fade out',
  wipeOutFromLeft: 'wipe out from left',
  wipeOutFromTop: 'wipe out from top',
  wipeOutFromRight: 'wipe out from right',
  wipeOutFromBottom: 'wipe out from bottom',
  wheelOut: 'wheel out',
  circleOut: 'circle out',
  degrow: 'degrow',
  transition: 'magic move',
  zoom: 'zoom',
  mark: 'mask',
  mask: 'mark'
};
ActionSpec.actionTargets = {
  mark: 'mark',
  mask: 'mask'
};
ActionSpec.targetAnimationType = {
  fade: 'fade',
  wipe: 'wipe',
  move: 'move',
  wheel: 'wheel',
  circle: 'circle',
  appear: 'appear',
  grow: 'grow',
  custom: 'custom',
  mistake: 'mistake'
};
ActionSpec.easingType = {
  easeLinear: 'easeLinear',
  easeInQuad: 'easeInQuad',
  easeOutQuad: 'easeOutQuad',
  easeInOutQuad: 'easeInOutQuad',
  easeInCubic: 'easeInCubic',
  easeOutCubic: 'easeOutCubic',
  easeInOutCubic: 'easeInOutCubic',
  easeOutBounce: 'easeOutBounce'
};
var _default = ActionSpec;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/AniRenderer.js":
/*!****************************!*\
  !*** ./src/AniRenderer.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _TimingSpec = _interopRequireDefault(__webpack_require__(/*! ./TimingSpec.js */ "./src/TimingSpec.js"));

var _AnimationSpec = _interopRequireDefault(__webpack_require__(/*! ./AnimationSpec.js */ "./src/AnimationSpec.js"));

var _Util = __webpack_require__(/*! ./util/Util.js */ "./src/util/Util.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Renderer =
/*#__PURE__*/
function () {
  function Renderer() {
    _classCallCheck(this, Renderer);
  }
  /**
   * get the corresponding frame of current time from Animation.frames
   * and update the dom attrs according to the recorded attrs status in that frame
   * @param {number} : time in ms
   */


  _createClass(Renderer, null, [{
    key: "renderFrame",
    value: function renderFrame(ctime) {
      var frame = _AnimationSpec.default.renderFrame(ctime);

      if (typeof frame === 'undefined') {
        return false;
      }

      var _loop = function _loop(i, markStatus) {
        markStatus[1].forEach(function (singleStatus, attrName) {
          var aniId = '';

          if (singleStatus.type === 'mark') {
            aniId = 'ani' + markStatus[0];

            switch (singleStatus.attrName) {
              case 'textContent':
                if (_Util.Util.checkHTML(singleStatus.value)) {
                  var tmpDom = _Util.Util.strToDomNode(singleStatus.value);

                  document.getElementById(aniId).appendChild(tmpDom);
                } else {
                  document.getElementById(aniId).innerHTML = singleStatus.value;
                  document.getElementById(aniId).textContent = singleStatus.value;
                }

                break;

              case 'stroke-dashoffset':
                document.getElementById(aniId).setAttributeNS(null, 'stroke-dasharray', document.getElementById(aniId).getTotalLength());
                document.getElementById(aniId).setAttributeNS(null, singleStatus.attrName, singleStatus.value);
                break;

              case 'x':
              case 'y':
                document.getElementById(aniId).setAttributeNS(null, singleStatus.attrName, singleStatus.value);

                if (document.getElementById('animaskCover' + markStatus[0])) {
                  if (singleStatus.attrName === 'y' && document.getElementById(markStatus[0]).tagName === 'text') {
                    document.getElementById('animaskCover' + markStatus[0]).setAttributeNS(null, singleStatus.attrName, singleStatus.value - parseFloat(document.getElementById('animaskBg' + markStatus[0]).getAttributeNS(null, 'height')));
                  } else {
                    document.getElementById('animaskCover' + markStatus[0]).setAttributeNS(null, singleStatus.attrName, singleStatus.value);
                  }
                }

                document.getElementById(aniId).setAttributeNS(null, singleStatus.attrName, singleStatus.value);
                break;

              default:
                document.getElementById(aniId).setAttributeNS(null, singleStatus.attrName, singleStatus.value);
            } //change animaskBgmark with the mark


            var aniMarkBgId = 'animaskBg' + markStatus[0],
                currentAniMarkBBox = document.getElementById(aniId).getBBox();
            document.getElementById(aniMarkBgId).setAttributeNS(null, 'x', currentAniMarkBBox.x - 1);
            document.getElementById(aniMarkBgId).setAttributeNS(null, 'y', currentAniMarkBBox.y - 1);
            document.getElementById(aniMarkBgId).setAttributeNS(null, 'width', currentAniMarkBBox.width + 2);
            document.getElementById(aniMarkBgId).setAttributeNS(null, 'height', currentAniMarkBBox.height + 2);
          } else if (singleStatus.type === 'mask') {
            aniId = 'animask' + markStatus[0];
            /*
             *1st. check whether the mask is added 
             *2nd. check whether the mask is the right shape
             *3rd. set the attributes of the mask
             */

            var testAniMCover = document.querySelectorAll('#' + aniId + ' [id^="animaskCover"]');

            switch (singleStatus.animationType) {
              case 'fade':
              case 'move':
              case 'wipe':
              case 'custom':
                if (testAniMCover.length > 0) {
                  //already has a mask cover
                  var aniMCover = document.getElementById('animaskCover' + markStatus[0]);

                  if (aniMCover.getAttribute('maskType') !== 'rect') {
                    //current cover is not the right shape
                    aniMCover.parentNode.removeChild(aniMCover);
                    var rect = Renderer.generateMaskCover(Renderer.coverTypes.rect, markStatus[0], singleStatus.attrName, singleStatus.value);
                    document.getElementById(aniId).appendChild(rect);
                  } else {
                    document.getElementById('animaskCover' + markStatus[0]).setAttributeNS(null, singleStatus.attrName, singleStatus.value);
                  }
                } else {
                  //don't have a mask cover yet
                  var _rect = Renderer.generateMaskCover(Renderer.coverTypes.rect, markStatus[0], singleStatus.attrName, singleStatus.value);

                  document.getElementById(aniId).appendChild(_rect);
                }

                break;

              case 'circle':
              case 'wheel':
                var d = _Util.Util.arc(singleStatus.value.cx, singleStatus.value.cy, singleStatus.value.innerRadius, singleStatus.value.outterRadius - 6, singleStatus.value.startAngle, singleStatus.value.endAngle);

                if (testAniMCover.length > 0) {
                  //already has a mask cover
                  var _aniMCover = document.getElementById('animaskCover' + markStatus[0]);

                  if (_aniMCover.getAttribute('maskType') !== 'wedge') {
                    //current cover is not the right shape
                    _aniMCover.parentNode.removeChild(_aniMCover);

                    var wedge = Renderer.generateMaskCover(Renderer.coverTypes.path, markStatus[0], 'd', d);
                    document.getElementById(aniId).appendChild(wedge);
                  } else {
                    document.getElementById('animaskCover' + markStatus[0]).setAttributeNS(null, 'd', d);
                  }
                } else {
                  //don't have a mask cover yet
                  var _wedge = Renderer.generateMaskCover(Renderer.coverTypes.path, markStatus[0], 'd', d);

                  document.getElementById(aniId).appendChild(_wedge);
                }

                break;

              case 'mistake':
                if (testAniMCover.length > 0) {
                  //already has a mask cover
                  document.getElementById('animaskCover' + markStatus[0]).setAttributeNS(null, singleStatus.attrName, singleStatus.value);
                }

                break;
            }
          } else {
            console.log('this status has no type');
          }
        });
      };

      for (var i = 0, markStatus; i < frame.length | (markStatus = frame[i]); i++) {
        _loop(i, markStatus);
      }

      return true;
    }
  }, {
    key: "generateMaskCover",
    value: function generateMaskCover(coverType, markId, updateAttrName, updateAttrValue) {
      var maskCover;

      switch (coverType) {
        case Renderer.coverTypes.rect:
          maskCover = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
          maskCover.setAttributeNS(null, 'maskType', 'rect');
          maskCover.setAttributeNS(null, 'x', document.getElementById('animaskBg' + markId).getAttribute('x'));
          maskCover.setAttributeNS(null, 'y', document.getElementById('animaskBg' + markId).getAttribute('y'));
          maskCover.setAttributeNS(null, 'width', document.getElementById('animaskBg' + markId).getAttribute('width'));
          maskCover.setAttributeNS(null, 'height', document.getElementById('animaskBg' + markId).getAttribute('height'));
          break;

        case Renderer.coverTypes.path:
          maskCover = document.createElementNS('http://www.w3.org/2000/svg', 'path');
          maskCover.setAttributeNS(null, 'maskType', 'wedge');

          if (document.getElementById(markId).getAttribute('transform')) {
            maskCover.setAttributeNS(null, 'tranform', document.getElementById(markId).getAttribute('transform'));
          }

          break;
      }

      maskCover.setAttributeNS(null, 'id', 'animaskCover' + markId);
      maskCover.setAttributeNS(null, 'fill', '#000');
      maskCover.setAttributeNS(null, 'stroke', '#000');
      maskCover.setAttributeNS(null, 'stroke-width', 4);
      if (updateAttrName !== 'stroke') maskCover.setAttributeNS(null, updateAttrName, updateAttrValue);
      return maskCover;
    }
  }, {
    key: "resetCover",
    value: function resetCover() {
      var animaskCovers = document.querySelectorAll('[id^="animaskCover"]');

      if (animaskCovers.length > 0) {
        [].forEach.call(animaskCovers, function (mc) {
          mc.parentNode.removeChild(mc);
        });
      }
    }
  }, {
    key: "play",
    value: function play() {
      var _this = this;

      var time = 0;
      var animationInterval = setInterval(function () {
        //render this frame
        time = parseInt(time / (1000 / _TimingSpec.default.FRAME_RATE)) * (1000 / _TimingSpec.default.FRAME_RATE);

        var locatedFrame = _this.renderFrame(time);

        time += 1000 / _TimingSpec.default.FRAME_RATE;

        if (time > _AnimationSpec.default.wholeEndTime || !locatedFrame) {
          clearInterval(animationInterval);
          animationInterval = 'undefined';
          time = 0;
        }
      }, 1000 / _TimingSpec.default.FRAME_RATE);
    }
  }]);

  return Renderer;
}();

Renderer.coverTypes = {
  rect: Symbol(),
  path: Symbol()
};
var _default = Renderer;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/AnimationSpec.js":
/*!******************************!*\
  !*** ./src/AnimationSpec.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ChartSpec = _interopRequireDefault(__webpack_require__(/*! ./ChartSpec.js */ "./src/ChartSpec.js"));

var _ActionSpec = _interopRequireDefault(__webpack_require__(/*! ./ActionSpec.js */ "./src/ActionSpec.js"));

var _GroupingSpec = _interopRequireDefault(__webpack_require__(/*! ./GroupingSpec.js */ "./src/GroupingSpec.js"));

var _TimingSpec2 = _interopRequireDefault(__webpack_require__(/*! ./TimingSpec.js */ "./src/TimingSpec.js"));

var _Util = __webpack_require__(/*! ./util/Util.js */ "./src/util/Util.js");

var _GlobalVar = __webpack_require__(/*! ./util/GlobalVar.js */ "./src/util/GlobalVar.js");

var _jsmovin = __webpack_require__(/*! jsmovin */ "./node_modules/jsmovin/bin/jsmovin.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Animation =
/*#__PURE__*/
function (_TimingSpec) {
  _inherits(Animation, _TimingSpec);

  function Animation() {
    var _this;

    _classCallCheck(this, Animation);

    _this = _possibleConstructorReturn(this, (Animation.__proto__ || Object.getPrototypeOf(Animation)).call(this));
    _this.chartIdx;
    _this.selection;
    _this.grouping = new _GroupingSpec.default();
    _this.actions = []; //save all dom attrs of the marks selected in this animation

    _this.domMarks = new Map(); //key: markId, value: dom attrs

    _this.animationStartTime = 1000000;
    _this.animationEndTime = 0;
    return _this;
  }
  /**
   * translate from json object to Animation object
   * @param {JSON obj} animationJson 
   */


  _createClass(Animation, [{
    key: "translate",
    value: function translate(animationJson, usedChangedAttrs) {
      if (this.checkFormat(animationJson)) {
        this.chartIdx = animationJson.chartIdx;
        this.selection = animationJson.selection; //init selection

        this.reference = animationJson.reference;
        this.offset = animationJson.offset;

        if (typeof animationJson.grouping !== 'undefined') {
          //init grouping
          this.grouping.initGrouping(animationJson.grouping);
        } //translate action specs in the animation Json


        if (typeof animationJson.actions !== 'undefined') {
          //init actions
          for (var i = 0, actionJson; i < animationJson.actions.length | (actionJson = animationJson.actions[i]); i++) {
            actionJson.chartIdx = animationJson.chartIdx;

            var visAttrActionJsonArr = _ActionSpec.default.transToVisualAttrAction(actionJson, animationJson.chartIdx, usedChangedAttrs, _ChartSpec.default.dataTrans); //translate templates to no-templates


            for (var j = 0, visAttrActionJson; j < visAttrActionJsonArr.length | (visAttrActionJson = visAttrActionJsonArr[j]); j++) {
              var tmpAction = new _ActionSpec.default();
              tmpAction.initAction(visAttrActionJson);
              this.actions.push(tmpAction);
            }
          }
        }
      }
    }
    /**
     * check if the input json format is illegal
     * @param {JSON obj} animationJson 
     */

  }, {
    key: "checkFormat",
    value: function checkFormat(animationJson) {
      var keys = Object.keys(animationJson);

      if (keys.includes('selection')) {
        return true;
      }

      alert('illegal format, no \'selection\' is defined ');
      return false;
    }
    /**
     * calculate timing for each mark;
     * @param {Array} markIds : array of mark ids
     * @param {Animation} lastAnimation : last animation in order to calculate time
     */

  }, {
    key: "calAniTime",
    value: function calAniTime(markIds, lastAnimation) {
      var that = this; //check whether the durations of the actions are set with the data variables

      var durationAttrValues = new Map();

      for (var i = 0, markId; i < markIds.length | (markId = markIds[i]); i++) {
        var tmpAttrValues = new Map();

        for (var j = 0, action; j < this.actions.length | (action = this.actions[j]); j++) {
          if (_typeof(action.duration) === 'object') {
            var datum = this.domMarks.get(markId)['data-datum'];
            var value = parseFloat(datum[action.duration.field]);
            var minDuration = typeof action.duration.minDuration == 'undefined' ? 300 : action.duration.minDuration;
            tmpAttrValues.set(action.duration.field, [value, minDuration]);
          }
        }

        durationAttrValues.set(markId, tmpAttrValues);
      } //calculate the duration of all actions


      var _ActionSpec$calAction = _ActionSpec.default.calActionDuration(this.actions, durationAttrValues, this.domMarks),
          _ActionSpec$calAction2 = _slicedToArray(_ActionSpec$calAction, 3),
          actionsDurations = _ActionSpec$calAction2[0],
          minValueEachAttr = _ActionSpec$calAction2[1],
          processedActions = _ActionSpec$calAction2[2]; //order the marks according to "sort"


      var marksInOrder = this.grouping.arrangeOrder(markIds, this.domMarks);
      var markAni = new Map(); //the time specs and action specs of each mark, for now using Map, check later to see whether it is worthy to change to Array

      var groupByMap = new Map(); //record the result of groupBy. key:markId, value:group reference

      for (var _i2 = 0, _markId; _i2 < marksInOrder.length | (_markId = marksInOrder[_i2]); _i2++) {
        //record visual status of all marks
        var tmpObj = {};

        for (var _j = 0, vAttr; _j < Animation.visualAttrs.length | (vAttr = Animation.visualAttrs[_j]); _j++) {
          if (typeof this.domMarks.get(_markId)[vAttr] === 'undefined') {
            switch (vAttr) {
              case 'opacity':
                //give default opacity 1
                tmpObj[vAttr] = 1;
                break;

              case 'width':
                //use the width of the bounding box 
                tmpObj[vAttr] = this.domMarks.get(_markId)['bbWidth'];
                break;

              case 'height':
                //use the height of the bounding box 
                tmpObj[vAttr] = this.domMarks.get(_markId)['bbHeight'];
                break;

              case 'x':
                //use the position x of the bounding box 
                tmpObj[vAttr] = this.domMarks.get(_markId)['bbX'];
                break;

              case 'y':
                //use the position y of the bounding box 
                tmpObj[vAttr] = this.domMarks.get(_markId)['bbY'];
                break;

              case 'cx':
                //use the center of the bounding box 
                tmpObj[vAttr] = this.domMarks.get(_markId)['bbX'] + this.domMarks.get(_markId)['bbWidth'] / 2;
                break;

              case 'cy':
                //use the center of the bounding box 
                tmpObj[vAttr] = this.domMarks.get(_markId)['bbY'] + this.domMarks.get(_markId)['bbHeight'] / 2;
                break;

              case 'innerRadius':
                //give default inner radius 0
                tmpObj[vAttr] = 0;
                break;

              case 'outterRadius':
                //use half of the diagonal line of the bounding box
                tmpObj[vAttr] = Math.sqrt(Math.pow(this.domMarks.get(_markId)['bbWidth'] / 2, 2) + Math.pow(this.domMarks.get(_markId)['bbHeight'] / 2, 2));
                break;

              case 'startAngle':
                tmpObj[vAttr] = 0;
                break;

              case 'endAngle':
                tmpObj[vAttr] = Math.PI * 2;
                break;
            }
          } else {
            tmpObj[vAttr] = this.domMarks.get(_markId)[vAttr];
          }

          if (tmpObj[vAttr] !== '') {
            if (typeof Animation.minStatus.get(vAttr) === 'undefined') {
              Animation.minStatus.set(vAttr, tmpObj[vAttr]);
            } else {
              if (parseFloat(Animation.minStatus.get(vAttr)) > parseFloat(tmpObj[vAttr])) {
                Animation.minStatus.set(vAttr, tmpObj[vAttr]);
              }
            }
          }
        }

        if (typeof Animation.finalStatus.get(_markId) === 'undefined') {
          Animation.finalStatus.set(_markId, []);
        }

        Animation.finalStatus.get(_markId).push(tmpObj);
        markAni.set(_markId, {
          'startTime': 0,
          //start time of this mark 
          'totalDuration': actionsDurations.get(_markId),
          //total duration of all the actions of this mark
          'actionAttrs': [] //action attributes of this mark

        });
        groupByMap.set(_markId, 'allMarks');
      }

      this.grouping.calTimeInGrouping(markAni, this.domMarks); //update time according to the time spec of animation

      var tmpAllStart = 10000;
      markAni.forEach(function (value, markId) {
        if (value.startTime < tmpAllStart) {
          tmpAllStart = value.startTime;
        }
      });
      var timeDiff = typeof lastAnimation === 'undefined' ? this.calOffsetTime(0, 0, tmpAllStart, this.domMarks) : this.calOffsetTime(lastAnimation.animationStartTime, lastAnimation.animationEndTime, tmpAllStart, this.domMarks);
      markAni.forEach(function (value, markId) {
        var tmpObj = {
          'startTime': value.startTime + timeDiff.get(markId),
          'totalDuration': value.totalDuration,
          'actionAttrs': []
        };

        if (tmpObj.startTime < that.animationStartTime) {
          that.animationStartTime = tmpObj.startTime;
        }

        if (tmpObj.startTime + tmpObj.totalDuration > that.animationEndTime) {
          that.animationEndTime = tmpObj.startTime + tmpObj.totalDuration;
        }

        for (var _i3 = 0, a; _i3 < processedActions.length | (a = processedActions[_i3]); _i3++) {
          var tmpActionSpec = new _ActionSpec.default();
          var keys = Object.keys(a);

          for (var _j2 = 0, attr; _j2 < keys.length | (attr = keys[_j2]); _j2++) {
            tmpActionSpec[attr] = a[attr];

            if (attr === '_duration' && _typeof(a[attr]) === 'object') {
              var _datum = that.domMarks.get(markId)['data-datum'];
              var minAttrValue = minValueEachAttr.get(a[attr].field);
              tmpActionSpec[attr] = a[attr].minDuration * parseFloat(_datum[a[attr].field]) / minAttrValue;
            } else if (attr === 'offsetStart') {
              tmpActionSpec[attr] = a[attr].get(markId);
            }
          }

          tmpObj.actionAttrs.push(tmpActionSpec);
        }

        markAni.set(markId, tmpObj);
      });
      markAni.forEach(function (value, markId) {
        //update the start time of actions 
        for (var _i4 = 0; _i4 < value.actionAttrs.length; _i4++) {
          value.actionAttrs[_i4].startTime = value.startTime + value.actionAttrs[_i4].offsetStart; //absolute start time
        }

        if (typeof Animation.allMarkAni.get(markId) === 'undefined') {
          Animation.allMarkAni.set(markId, value);
        } else {
          //merge animation specs for the same mark
          var currentStartTime = Animation.allMarkAni.get(markId).startTime;
          var currentEndTime = currentStartTime + Animation.allMarkAni.get(markId).totalDuration;
          Animation.allMarkAni.get(markId).startTime = currentStartTime < value.startTime ? currentStartTime : value.startTime;
          var tmpEndTime = value.startTime + value.totalDuration;
          currentEndTime = currentEndTime > tmpEndTime ? currentEndTime : tmpEndTime;
          Animation.allMarkAni.get(markId).totalDuration = currentEndTime - Animation.allMarkAni.get(markId).startTime;
          Animation.allMarkAni.get(markId).actionAttrs = [].concat(_toConsumableArray(Animation.allMarkAni.get(markId).actionAttrs), _toConsumableArray(value.actionAttrs));
        }
      });
    }
    /**
     * calculate timing for each action then render animation by slicing the action specs into frames
     */

  }], [{
    key: "renderAnimation",
    value: function renderAnimation() {
      var that = this;
      this.allMarkAni.forEach(function (value, markId) {
        //record the end time of the entire animation, and record the init status of each mark
        if (that.wholeEndTime < value.startTime + value.totalDuration) {
          that.wholeEndTime = value.startTime + value.totalDuration;
        } //categorize the actions according to the attribute name in order to insert place holder actions


        var maskActionByAttr = new Map(),
            markActionByAttr = new Map();

        for (var i = 0, item; i < value.actionAttrs.length | (item = value.actionAttrs[i]); i++) {
          if (item.type === _ActionSpec.default.actionTargets.mark) {
            if (typeof markActionByAttr.get(item.attribute.attrName) === 'undefined') {
              markActionByAttr.set(item.attribute.attrName, [item]);
            } else {
              markActionByAttr.get(item.attribute.attrName).push(item);
            }
          } else if (item.type === _ActionSpec.default.actionTargets.mask) {
            if (typeof maskActionByAttr.get(item.attribute.attrName) === 'undefined') {
              maskActionByAttr.set(item.attribute.attrName, [item]);
            } else {
              maskActionByAttr.get(item.attribute.attrName).push(item);
            }
          } else {
            console.log('we have some action with no type !!!!!');
          }
        } //add extra action to fill the timeline for both mark and mask


        maskActionByAttr.forEach(function (actionList, attrName) {
          //put an start action
          var tmpAction0 = new _ActionSpec.default();
          tmpAction0.type = _ActionSpec.default.actionTargets.mask;
          tmpAction0.chartIdx = actionList[0].chartIdx;
          tmpAction0.animationType = actionList[0].animationType;
          tmpAction0.startTime = 0;
          tmpAction0.duration = actionList[0].startTime;
          tmpAction0.attribute = {
            'attrName': actionList[0].attribute.attrName,
            'from': actionList[0].attribute.from,
            'to': actionList[0].attribute.from
          };
          value.actionAttrs.push(tmpAction0);

          for (var _i5 = 0; _i5 < actionList.length; _i5++) {
            var tmpAction = new _ActionSpec.default();
            tmpAction.type = _ActionSpec.default.actionTargets.mask;
            tmpAction.chartIdx = actionList[_i5].chartIdx;
            tmpAction.animationType = actionList[_i5].animationType;
            tmpAction.startTime = actionList[_i5].startTime + actionList[_i5].duration;

            if (_i5 === actionList.length - 1) {
              tmpAction.duration = 'wholeEnd';
            } else {
              tmpAction.duration = actionList[_i5 + 1].startTime - actionList[_i5].startTime - actionList[_i5].duration;
            }

            tmpAction.attribute = {
              'attrName': actionList[_i5].attribute.attrName,
              'from': actionList[_i5].attribute.to,
              'to': actionList[_i5].attribute.to
            };
            value.actionAttrs.push(tmpAction);
          }
        });
        markActionByAttr.forEach(function (actionList, attrName) {
          //put an start action
          var tmpAction0 = new _ActionSpec.default();
          tmpAction0.type = _ActionSpec.default.actionTargets.mark;
          tmpAction0.animationType = actionList[0].animationType;
          tmpAction0.startTime = 0;
          tmpAction0.duration = actionList[0].startTime;
          tmpAction0.attribute = {
            'attrName': actionList[0].attribute.attrName,
            'from': actionList[0].attribute.from,
            'to': actionList[0].attribute.from
          };
          value.actionAttrs.push(tmpAction0);

          for (var _i6 = 0; _i6 < actionList.length; _i6++) {
            var tmpAction = new _ActionSpec.default();
            tmpAction.type = _ActionSpec.default.actionTargets.mark;
            tmpAction.animationType = actionList[_i6].animationType;
            tmpAction.startTime = actionList[_i6].startTime + actionList[_i6].duration;

            if (_i6 === actionList.length - 1) {
              tmpAction.duration = 'wholeEnd';
            } else {
              tmpAction.duration = actionList[_i6 + 1].startTime - actionList[_i6].startTime - actionList[_i6].duration;
            }

            tmpAction.attribute = {
              'attrName': actionList[_i6].attribute.attrName,
              'from': actionList[_i6].attribute.to,
              'to': actionList[_i6].attribute.to
            };
            value.actionAttrs.push(tmpAction);
          }
        });
      });
      console.log('The duration of the generated animation is: ' + this.wholeEndTime + 'ms'); //replace the 'wholeEnd' place holder in duration

      this.allMarkAni.forEach(function (value, a) {
        for (var i = 0, item; i < value.actionAttrs.length | (item = value.actionAttrs[i]); i++) {
          if (item.duration === 'wholeEnd') {
            item.duration = that.wholeEndTime - item.startTime;
          }
        }
      });
      console.log('all mark ani: ', this.allMarkAni);
    }
  }, {
    key: "mapToLottieSpec",
    value: function mapToLottieSpec() {
      this.allMarkAni.forEach(function (value, markId) {
        for (var i = 0; i < value.actionAttrs.length; i++) {
          var tmpActionSpec = value.actionAttrs[i];

          if (tmpActionSpec.duration > 0) {
            console.log('type: ', tmpActionSpec.type);

            if (tmpActionSpec.type === _ActionSpec.default.actionTargets.mark) {
              var startFrame = Math.ceil(tmpActionSpec.startTime / (1000 / _TimingSpec2.default.FRAME_RATE));
              var endFrame = Math.ceil((tmpActionSpec.startTime + tmpActionSpec.duration) / (1000 / _TimingSpec2.default.FRAME_RATE));

              _GlobalVar.globalVar.markLayers.get(markId).setAnimatableProperty(tmpActionSpec.attribute.attrName, startFrame, endFrame, tmpActionSpec.attribute.from * 100, tmpActionSpec.attribute.to * 100, _ActionSpec.default.transToLottieAction(tmpActionSpec.easing));
            } else if (tmpActionSpec.type === _ActionSpec.default.actionTargets.mask) {
              var targetMark = document.getElementById(markId); //TODO: pass dom here

              var maskLayer = _jsmovin.LayerFactory.boundingBox(targetMark);

              var _startFrame = Math.ceil(tmpActionSpec.startTime / (1000 / _TimingSpec2.default.FRAME_RATE));

              var _endFrame = Math.ceil((tmpActionSpec.startTime + tmpActionSpec.duration) / (1000 / _TimingSpec2.default.FRAME_RATE));

              maskLayer.setAnimatableProperty(tmpActionSpec.attribute.attrName, _startFrame, _endFrame, tmpActionSpec.attribute.from * 100, tmpActionSpec.attribute.to * 100, _ActionSpec.default.transToLottieAction(tmpActionSpec.easing));

              _GlobalVar.globalVar.jsMovin.addMask(maskLayer, _GlobalVar.globalVar.markLayers.get(markId)); // console.log('in mask: ', tmpActionSpec.attribute);
              // let tmpBbox = LayerFactory.getBoundingBox(document.getElementById(markId));
              // let markStr = `<svg xmlns="http://www.w3.org/2000/svg" width="2000" height="2000">
              //     <rect x="${tmpBbox[0]}" y="${tmpBbox[1]}" width="${tmpBbox[2]}" height="${tmpBbox[3]}"></rect>
              // </svg>`;
              // let parser = new DOMParser();
              // let svgMask = parser.parseFromString(markStr, "image/svg+xml").lastChild.children[0];
              // const maskLayer = LayerFactory.hierarchy(svgMask);
              // let startFrame = Math.ceil(tmpActionSpec.startTime / (1000 / TimingSpec.FRAME_RATE));
              // let endFrame = Math.ceil((tmpActionSpec.startTime + tmpActionSpec.duration) / (1000 / TimingSpec.FRAME_RATE));
              // maskLayer.setAnimatableProperty(
              //     tmpActionSpec.attribute.attrName,
              //     startFrame,
              //     endFrame,
              //     tmpActionSpec.attribute.from * 100,
              //     tmpActionSpec.attribute.to * 100,
              //     tmpActionSpec.easing
              // );
              // globalVar.jsMovin.addMask(maskLayer, globalVar.markLayers.get(markId));

            } else {
              console.error('unkonwn actions target: ', tmpActionSpec.type);
            }
          }
        }
      });
    }
  }, {
    key: "renderFrame",
    value: function renderFrame(timePoint) {
      var frame = []; //store the visual status of each mark at this time

      this.allMarkAni.forEach(function (value, markId) {
        var currentStatus = new Map();

        for (var i = 0, a; i < value.actionAttrs.length | (a = value.actionAttrs[i]); i++) {
          if (a.attribute.from === a.attribute.to && a.duration === 0) {
            //nothing happends in this actionspec, skip it
            continue;
          }

          var resultValue = Animation.calAttrValue(a, markId, timePoint),
              lastValue = timePoint >= 0 ? Animation.calAttrValue(a, markId, timePoint - 1) : '';

          if (resultValue !== lastValue) {
            if (a.startTime <= timePoint && a.startTime + a.duration >= timePoint) {
              //during this action
              currentStatus.set(a.attribute.attrName, {
                'type': a.type,
                'animationType': a.animationType,
                'endTime': a.startTime + a.duration,
                'attrName': a.attribute.attrName,
                'value': resultValue
              });
            } else if (a.startTime + a.duration < timePoint) {
              if (typeof currentStatus.get(a.attribute.attrName) !== 'undefined') {
                if (currentStatus.get(a.attribute.attrName).endTime < a.startTime + a.duration) {
                  currentStatus.set(a.attribute.attrName, {
                    'type': a.type,
                    'animationType': a.animationType,
                    'endTime': a.startTime + a.duration,
                    'attrName': a.attribute.attrName,
                    'value': resultValue
                  });
                }
              }
            }
          }
        }

        if (currentStatus.size > 0) {
          frame.push([markId, currentStatus]);
        }
      });
      return frame;
    }
  }, {
    key: "calAttrValue",
    value: function calAttrValue(a, markId, timePoint) {
      var resultValue,
          chartIdx = a.chartIdx;

      if (a.startTime <= timePoint && a.startTime + a.duration >= timePoint) {
        //during this action
        var percentage = parseFloat(timePoint - a.startTime) / parseFloat(a.duration);
        var ratio = this.calRatio(percentage, a.easing);

        switch (a.attribute.attrName) {
          case 'fill':
          case 'stroke':
            if (a.type === _ActionSpec.default.actionTargets.mark) {
              if (Array.isArray(a.attribute.to)) {
                var fromColor;
                var toColor;

                for (var j = 0; j < a.attribute.to.length; j++) {
                  if (a.attribute.to[j][0] === markId && typeof a.attribute.to[j][1] === 'string') {
                    fromColor = a.attribute.from[j][1];
                    toColor = a.attribute.to[j][1];
                    break;
                  }
                }

                var fromRGB = _Util.Util.color2RGB(fromColor),
                    toRGB = _Util.Util.color2RGB(toColor);

                var valueR = parseInt((toRGB[0] - fromRGB[0]) * ratio) + fromRGB[0];
                var valueG = parseInt((toRGB[1] - fromRGB[1]) * ratio) + fromRGB[1];
                var valueB = parseInt((toRGB[2] - fromRGB[2]) * ratio) + fromRGB[2];
                resultValue = 'rgb(' + valueR + ',' + valueG + ',' + valueB + ')';
              }
            }

            break;

          case 'textContent':
            if (a.type === _ActionSpec.default.actionTargets.mark) {
              if (Array.isArray(a.attribute.to)) {
                var _startValue = 0;

                for (var _j3 = 0; _j3 < a.attribute.to.length; _j3++) {
                  if (a.attribute.to[_j3][0] === markId && (!isNaN(a.attribute.to[_j3][1]) || typeof a.attribute.to[_j3][1] === 'string')) {
                    _startValue = a.attribute.to[_j3][1];
                    break;
                  }
                }

                resultValue = _startValue;
              }
            }

            break;

          case 'width':
          case 'height':
          case 'r':
            if (a.type === _ActionSpec.default.actionTargets.mark) {
              if (Array.isArray(a.attribute.to)) {
                var _startValue2 = 0;
                var _finalValue = 0;

                for (var _j4 = 0; _j4 < a.attribute.to.length; _j4++) {
                  if (a.attribute.to[_j4][0] === markId && !isNaN(a.attribute.from[_j4][1]) && !isNaN(a.attribute.to[_j4][1])) {
                    _startValue2 = a.attribute.from[_j4][1];
                    _finalValue = a.attribute.to[_j4][1];
                    break;
                  }
                }

                resultValue = _startValue2 + (_finalValue - _startValue2) * ratio;
              } else {
                var _startValue3 = 0;

                var _finalValue2 = parseFloat(this.finalStatus.get(markId)[chartIdx][a.attribute.attrName]);

                resultValue = _startValue3 - (parseFloat(a.attribute.to - a.attribute.from) * ratio + a.attribute.from) * (_startValue3 - _finalValue2);
              }
            } else {
              var _startValue4 = parseFloat(this.minStatus.get(a.attribute.attrName));

              var _finalValue3 = parseFloat(this.finalStatus.get(markId)[chartIdx][a.attribute.attrName]);

              if (_startValue4 < 0) {
                resultValue = _startValue4 + (parseFloat(a.attribute.to - a.attribute.from) * ratio + a.attribute.from) * (_finalValue3 - _startValue4);
              } else {
                resultValue = (parseFloat(a.attribute.to - a.attribute.from) * ratio + a.attribute.from) * _finalValue3;
              }
            }

            break;

          case 'y':
          case 'y1':
          case 'y2':
          case 'cy':
            if (a.type === _ActionSpec.default.actionTargets.mark) {
              if (Array.isArray(a.attribute.to)) {
                var _startValue5 = 0;
                var _finalValue4 = 0;

                for (var _j5 = 0; _j5 < a.attribute.to.length; _j5++) {
                  if (a.attribute.to[_j5][0] === markId && !isNaN(a.attribute.from[_j5][1]) && !isNaN(a.attribute.to[_j5][1])) {
                    _startValue5 = a.attribute.from[_j5][1];
                    _finalValue4 = a.attribute.to[_j5][1];
                    break;
                  }
                }

                resultValue = _startValue5 + (_finalValue4 - _startValue5) * ratio;
              } else {
                var _startValue6 = this.startY;

                var _finalValue5 = parseFloat(this.finalStatus.get(markId)[chartIdx][a.attribute.attrName]);

                resultValue = _startValue6 - (parseFloat(a.attribute.to - a.attribute.from) * ratio + a.attribute.from) * (_startValue6 - _finalValue5);
              }
            } else if (a.type === _ActionSpec.default.actionTargets.mask) {
              resultValue = parseFloat(this.finalStatus.get(markId)[chartIdx][a.attribute.attrName]) - 1 + (parseFloat(a.attribute.to - a.attribute.from) * ratio + a.attribute.from) * (parseFloat(this.finalStatus.get(markId)[chartIdx]['height']) + 2);
            }

            break;

          case 'x':
          case 'x1':
          case 'x2':
          case 'cx':
            if (a.type === _ActionSpec.default.actionTargets.mark) {
              if (Array.isArray(a.attribute.to)) {
                //changing from one status to the other
                var _startValue7 = 0;
                var _finalValue6 = 0;

                for (var _j6 = 0; _j6 < a.attribute.to.length; _j6++) {
                  if (a.attribute.to[_j6][0] === markId && !isNaN(a.attribute.from[_j6][1]) && !isNaN(a.attribute.to[_j6][1])) {
                    _startValue7 = a.attribute.from[_j6][1];
                    _finalValue6 = a.attribute.to[_j6][1];
                    break;
                  }
                }

                resultValue = _startValue7 + (_finalValue6 - _startValue7) * ratio;
              } else {
                //marks entering charts
                var _startValue8 = this.startX;

                var _finalValue7 = parseFloat(this.finalStatus.get(markId)[chartIdx][a.attribute.attrName]);

                resultValue = _startValue8 + (parseFloat(a.attribute.to - a.attribute.from) * ratio + a.attribute.from) * (_finalValue7 - _startValue8);
              }
            } else if (a.type === _ActionSpec.default.actionTargets.mask) {
              resultValue = parseFloat(this.finalStatus.get(markId)[chartIdx][a.attribute.attrName]) - 1 + (parseFloat(a.attribute.to - a.attribute.from) * ratio + a.attribute.from) * (parseFloat(this.finalStatus.get(markId)[chartIdx]['width']) + 2);
            }

            break;

          case 'startAngle':
            var startAngle = parseFloat(this.finalStatus.get(markId)[chartIdx].startAngle);
            var endAngle = parseFloat(this.finalStatus.get(markId)[chartIdx].endAngle);

            var _startAngle = startAngle < 0 ? startAngle + 2 * Math.PI : startAngle;

            var _endAngle = endAngle < 0 || _startAngle > endAngle ? endAngle + 2 * Math.PI : endAngle;

            var tmpAngle;

            if (_endAngle > _startAngle) {
              tmpAngle = _startAngle + (parseFloat(a.attribute.to - a.attribute.from) * ratio + a.attribute.from) * (_endAngle - _startAngle);
            } else {
              tmpAngle = _startAngle + (parseFloat(a.attribute.to - a.attribute.from) * ratio + a.attribute.from) * (Math.PI * 2 - _startAngle + _endAngle);
            }

            resultValue = {
              'cx': parseFloat(this.finalStatus.get(markId)[chartIdx]['cx']),
              'cy': parseFloat(this.finalStatus.get(markId)[chartIdx]['cy']),
              'innerRadius': parseFloat(this.finalStatus.get(markId)[chartIdx]['innerRadius']),
              'outterRadius': parseFloat(this.finalStatus.get(markId)[chartIdx]['outterRadius']) + 2,
              'startAngle': tmpAngle,
              'endAngle': parseFloat(this.finalStatus.get(markId)[chartIdx]['endAngle'])
            };
            break;

          case 'innerRadius':
            var startRadius = parseFloat(this.finalStatus.get(markId)[chartIdx]['innerRadius']);
            var endRadius = parseFloat(this.finalStatus.get(markId)[chartIdx]['outterRadius']);
            var tmpRadius = (parseFloat(a.attribute.to - a.attribute.from) * ratio + a.attribute.from) * (endRadius - startRadius);

            if (tmpRadius < 0) {
              resultValue = {
                'cx': parseFloat(this.finalStatus.get(markId)[chartIdx]['cx']),
                'cy': parseFloat(this.finalStatus.get(markId)[chartIdx]['cy']),
                'innerRadius': parseFloat(this.finalStatus.get(markId)[chartIdx]['innerRadius']) + 2,
                'outterRadius': parseFloat(this.finalStatus.get(markId)[chartIdx]['outterRadius']) - tmpRadius + 2,
                'startAngle': parseFloat(this.finalStatus.get(markId)[chartIdx]['startAngle']),
                'endAngle': parseFloat(this.finalStatus.get(markId)[chartIdx]['endAngle'])
              };
            } else {
              resultValue = {
                'cx': parseFloat(this.finalStatus.get(markId)[chartIdx]['cx']),
                'cy': parseFloat(this.finalStatus.get(markId)[chartIdx]['cy']),
                'innerRadius': parseFloat(this.finalStatus.get(markId)[chartIdx]['innerRadius']) + tmpRadius + 2,
                'outterRadius': parseFloat(this.finalStatus.get(markId)[chartIdx]['outterRadius']) + 2,
                'startAngle': parseFloat(this.finalStatus.get(markId)[chartIdx]['startAngle']),
                'endAngle': parseFloat(this.finalStatus.get(markId)[chartIdx]['endAngle'])
              };
            }

            break;

          case 'stroke-dashoffset':
            var startDashOffset = 0;
            var finalDashOffset = parseFloat(this.finalStatus.get(markId)[chartIdx]['stroke-dasharray']);
            resultValue = startDashOffset - (parseFloat(a.attribute.to - a.attribute.from) * ratio + a.attribute.from) * (startDashOffset - finalDashOffset);
            break;

          case 'd':
            if (a.type === _ActionSpec.default.actionTargets.mark) {
              if (Array.isArray(a.attribute.to)) {
                //changing from one status to the other
                var _startValue9 = '',
                    _finalValue8 = '',
                    startDiscretVal = '',
                    finalDiscretVal = '';

                for (var _j7 = 0; _j7 < a.attribute.to.length; _j7++) {
                  if (a.attribute.to[_j7][0] === markId && a.attribute.from[_j7][1] && a.attribute.to[_j7][1]) {
                    _startValue9 = a.attribute.from[_j7][1];
                    _finalValue8 = a.attribute.to[_j7][1];
                    startDiscretVal = a.attribute.from[_j7][2];
                    finalDiscretVal = a.attribute.to[_j7][2];
                    break;
                  }
                }

                resultValue = _Util.Util.calTransD(_startValue9, _finalValue8, ratio, startDiscretVal, finalDiscretVal);
              }
            }

            break;

          default:
            //numeric attribute values
            var startValue = parseFloat(this.minStatus.get(a.attribute.attrName));
            var finalValue = parseFloat(this.finalStatus.get(markId)[chartIdx][a.attribute.attrName]);

            if (startValue < 0) {
              resultValue = startValue + (parseFloat(a.attribute.to - a.attribute.from) * ratio + a.attribute.from) * (finalValue - startValue);
            } else {
              resultValue = (parseFloat(a.attribute.to - a.attribute.from) * ratio + a.attribute.from) * finalValue;
            }

        }
      } else if (a.startTime + a.duration < timePoint) {
        //past actions
        switch (a.attribute.attrName) {
          case 'fill':
          case 'stroke':
            if (a.type === _ActionSpec.default.actionTargets.mark) {
              if (Array.isArray(a.attribute.to)) {
                for (var _j8 = 0; _j8 < a.attribute.to.length; _j8++) {
                  if (a.attribute.to[_j8][0] === markId && typeof a.attribute.to[_j8][1] === 'string') {
                    resultValue = a.attribute.to[_j8][1];
                    break;
                  }
                }
              } else {
                resultValue = this.finalStatus.get(markId)[chartIdx][a.attribute.attrName];
              }
            }

            break;

          case 'textContent':
            if (a.type === _ActionSpec.default.actionTargets.mark) {
              if (Array.isArray(a.attribute.to)) {
                var _startValue10 = 0;

                for (var _j9 = 0; _j9 < a.attribute.to.length; _j9++) {
                  if (a.attribute.to[_j9][0] === markId && (!isNaN(a.attribute.to[_j9][1]) || typeof a.attribute.to[_j9][1] === 'string')) {
                    _startValue10 = a.attribute.to[_j9][1];
                    break;
                  }
                }

                resultValue = _startValue10;
              }
            }

            break;

          case 'width':
          case 'height':
          case 'r':
            if (a.type === _ActionSpec.default.actionTargets.mark) {
              if (Array.isArray(a.attribute.to)) {
                //changing from one status to the other
                var _finalValue9 = 0;

                for (var _j10 = 0; _j10 < a.attribute.to.length; _j10++) {
                  if (a.attribute.to[_j10][0] === markId) {
                    _finalValue9 = a.attribute.to[_j10][1];
                    break;
                  }
                }

                resultValue = _finalValue9;
              } else {
                resultValue = parseFloat(this.finalStatus.get(markId)[chartIdx][a.attribute.attrName]);
              }
            } else {
              resultValue = parseFloat(this.finalStatus.get(markId)[chartIdx][a.attribute.attrName]);
            }

            break;

          case 'y':
          case 'y1':
          case 'y2':
          case 'cy':
            if (a.type === _ActionSpec.default.actionTargets.mark) {
              if (Array.isArray(a.attribute.to)) {
                //changing from one status to the other
                var _finalValue10 = 0;

                for (var _j11 = 0; _j11 < a.attribute.to.length; _j11++) {
                  if (a.attribute.to[_j11][0] === markId) {
                    _finalValue10 = a.attribute.to[_j11][1];
                    break;
                  }
                }

                resultValue = _finalValue10;
              } else {
                resultValue = parseFloat(this.finalStatus.get(markId)[chartIdx][a.attribute.attrName]);
              }
            } else if (a.type === _ActionSpec.default.actionTargets.mask) {
              resultValue = parseFloat(this.finalStatus.get(markId)[chartIdx][a.attribute.attrName]) + parseFloat(this.finalStatus.get(markId)[chartIdx]['height']);
            }

            break;

          case 'x':
          case 'x1':
          case 'x2':
          case 'cx':
            if (a.type === _ActionSpec.default.actionTargets.mark) {
              if (Array.isArray(a.attribute.to)) {
                //changing from one status to the other
                var _finalValue11 = 0;

                for (var _j12 = 0; _j12 < a.attribute.to.length; _j12++) {
                  if (a.attribute.to[_j12][0] === markId) {
                    _finalValue11 = a.attribute.to[_j12][1];
                    break;
                  }
                }

                resultValue = _finalValue11;
              } else {
                resultValue = parseFloat(this.finalStatus.get(markId)[chartIdx][a.attribute.attrName]);
              }
            } else if (a.type === _ActionSpec.default.actionTargets.mask) {
              resultValue = parseFloat(this.finalStatus.get(markId)[chartIdx][a.attribute.attrName]) + parseFloat(this.finalStatus.get(markId)[chartIdx]['height']);
            }

            break;

          case 'startAngle':
          case 'innerRadius':
            resultValue = {
              'cx': parseFloat(this.finalStatus.get(markId)[chartIdx]['cx']),
              'cy': parseFloat(this.finalStatus.get(markId)[chartIdx]['cy']),
              'innerRadius': parseFloat(this.finalStatus.get(markId)[chartIdx]['innerRadius']),
              'outterRadius': parseFloat(this.finalStatus.get(markId)[chartIdx]['outterRadius']),
              'startAngle': parseFloat(this.finalStatus.get(markId)[chartIdx]['startAngle']),
              'endAngle': parseFloat(this.finalStatus.get(markId)[chartIdx]['endAngle'])
            };
            break;

          default:
            //numeric attribute values
            if (typeof this.finalStatus.get(markId)[chartIdx] !== 'undefined') {
              resultValue = parseFloat(this.finalStatus.get(markId)[chartIdx][a.attribute.attrName]);
            }

        }
      }

      return resultValue;
    }
  }, {
    key: "calRatio",
    value: function calRatio(percentage, easingType) {
      var ratio = 0;

      switch (easingType) {
        case _ActionSpec.default.easingType.easeLinear:
          ratio = percentage;
          break;

        case _ActionSpec.default.easingType.easeInQuad:
          ratio = this.easeFuncs.easeInQuad(percentage);
          break;

        case _ActionSpec.default.easingType.easeOutQuad:
          ratio = this.easeFuncs.easeOutQuad(percentage);
          break;

        case _ActionSpec.default.easingType.easeInOutQuad:
          ratio = this.easeFuncs.easeInOutQuad(percentage);
          break;

        case _ActionSpec.default.easingType.easeInCubic:
          ratio = this.easeFuncs.easeInCubic(percentage);
          break;

        case _ActionSpec.default.easingType.easeOutCubic:
          ratio = this.easeFuncs.easeOutCubic(percentage);
          break;

        case _ActionSpec.default.easingType.easeInOutCubic:
          ratio = this.easeFuncs.easeInOutCubic(percentage);
          break;

        case _ActionSpec.default.easingType.easeOutBounce:
          ratio = this.easeFuncs.easeOutBounce(percentage);
          break;
      }

      return ratio;
    }
  }, {
    key: "resetAll",
    value: function resetAll() {
      this.wholeEndTime = 0;
      this.allMarkAni.clear();
      this.minStatus.clear();
      this.finalStatus.clear();
      this.frames.clear();
    }
  }]);

  return Animation;
}(_TimingSpec2.default);

Animation.visualAttrs = ['x', 'y', 'cx', 'cy', 'innerRadius', 'outterRadius', 'startAngle', 'endAngle', 'width', 'height', 'opacity', 'fill', 'stroke', 'content', 'stroke-dasharray', 'stroke-dashoffset'];
Animation.startY = 0; //start coord of Y

Animation.startX = 0; //start coord of X

Animation.endX = 0; //end coord of X

Animation.wholeEndTime = 0;
Animation.minStatus = new Map(); //record the min value of each attribute.

Animation.finalStatus = new Map(); //record the final visual status of each mark, eg: key:mark1, value: {opacity: 1, height: 226}

Animation.allMarkAni = new Map();
Animation.frames = new Map(); //output frames

Animation.easeFuncs = {
  easeInQuad: function easeInQuad(p) {
    return p * p;
  },
  easeOutQuad: function easeOutQuad(p) {
    return -p * (p - 2);
  },
  easeInOutQuad: function easeInOutQuad(p) {
    if (p / 2 < 1) return 1 / 2 * p * p;
    return -(--p * (p - 2) - 1) / 2;
  },
  easeInCubic: function easeInCubic(p) {
    return p * p * p;
  },
  easeOutCubic: function easeOutCubic(p) {
    return (p = p - 1) * p * p + 1;
  },
  easeInOutCubic: function easeInOutCubic(p) {
    if ((p /= 0.5) < 1) return p * p * p / 2;
    return ((p -= 2) * p * p + 2) / 2;
  },
  easeOutBounce: function easeOutBounce(p) {
    var ratio = 0;

    if (p < 1 / 2.75) {
      ratio = 7.5625 * p * p;
    } else if (p < 2 / 2.75) {
      ratio = 7.5625 * (p -= 1.5 / 2.75) * p + 0.75;
    } else if (p < 2.5 / 2.75) {
      ratio = 7.5625 * (p -= 2.25 / 2.75) * p + 0.9375;
    } else {
      ratio = 7.5625 * (p -= 2.625 / 2.75) * p + 0.984375;
    }

    return ratio;
  }
};
var _default = Animation;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/Canis.js":
/*!**********************!*\
  !*** ./src/Canis.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ChartSpec = _interopRequireDefault(__webpack_require__(/*! ./ChartSpec.js */ "./src/ChartSpec.js"));

var _FacetSpec = _interopRequireDefault(__webpack_require__(/*! ./FacetSpec.js */ "./src/FacetSpec.js"));

var _TimingSpec = _interopRequireDefault(__webpack_require__(/*! ./TimingSpec.js */ "./src/TimingSpec.js"));

var _AnimationSpec = _interopRequireDefault(__webpack_require__(/*! ./AnimationSpec.js */ "./src/AnimationSpec.js"));

var _Util = __webpack_require__(/*! ./util/Util.js */ "./src/util/Util.js");

var _GlobalVar = __webpack_require__(/*! ./util/GlobalVar.js */ "./src/util/GlobalVar.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AniChart =
/*#__PURE__*/
function () {
  function AniChart() {
    _classCallCheck(this, AniChart);

    this.chartSpecs;
    this.facet;
    this._animations;
    this.chartWidth;
    this.chartHeight;
  }

  _createClass(AniChart, [{
    key: "init",
    value: function init(spec) {
      var _this = this;

      this.chartSpecs = [];
      var aniChartObj = spec;
      aniChartObj.charts = _ChartSpec.default.chartPreProcessing(aniChartObj.charts); //deal with input charts

      for (var i = 0; i < aniChartObj.charts.length; i++) {
        var chartName = typeof aniChartObj.charts[i].id === 'undefined' ? 'chart' + i : aniChartObj.charts[i].id;
        var tmpChart = new _ChartSpec.default(chartName, aniChartObj.charts[i].source);
        this.chartSpecs.push(tmpChart);
      } //init facet


      if (aniChartObj.facet) {
        this.facet = new _FacetSpec.default(aniChartObj.facet.type, aniChartObj.facet.views);
      }

      _ChartSpec.default.loadCharts(this.chartSpecs, this.facet);

      _GlobalVar.globalVar.jsMovin.clearLayers(); //set viewport for jsmovin


      _GlobalVar.globalVar.jsMovin.setViewport(_ChartSpec.default.viewport.chartWidth, _ChartSpec.default.viewport.chartHeight);

      var svgChart = _ChartSpec.default.removeTransAndMerge();

      document.getElementById('chartContainer').innerHTML = '';
      document.getElementById('chartContainer').appendChild(svgChart);

      _ChartSpec.default.addLottieMarkLayers(svgChart); // let bBoxes = ChartSpec.getBBoxes();
      // let animateChart = ChartSpec.processAnimateChart(document.getElementById('chartContainer').innerHTML, bBoxes);
      // document.getElementById('videoContainer').innerHTML = '';
      // document.getElementById('videoContainer').appendChild(animateChart);
      //set framerate for jsmovin


      _GlobalVar.globalVar.jsMovin.setFrameRate(_TimingSpec.default.FRAME_RATE); //deal with animations


      this.animations = aniChartObj.animations;

      if (Array.isArray(this.animations)) {
        var lastAnimation;

        var _loop = function _loop(aniIdx) {
          var animationJson = _this.animations[aniIdx]; //use the selection in animation to select marks and record dom attrs

          var tmpContainer = document.createElement('div');
          document.body.appendChild(tmpContainer);
          tmpContainer.innerHTML = _ChartSpec.default.charts[animationJson.chartIdx].outerHTML;
          var marks = tmpContainer.querySelectorAll(animationJson.selection);
          var usedChangedAttrs = [];

          for (var _i = 0; _i < _ChartSpec.default.changedAttrs.length; _i++) {
            usedChangedAttrs.push(_ChartSpec.default.changedAttrs[_i]);
          }

          var animation = new _AnimationSpec.default();
          animation.translate(animationJson, usedChangedAttrs); //translate from json obj to Animation obj

          var markIds = []; //record all ids of selected marks

          if (marks.length > 0) {
            [].forEach.call(marks, function (mark) {
              if (mark.classList.contains('mark')) {
                var markId = mark.getAttribute('id');
                markIds.push(markId); //process path

                if (mark.tagName === 'path') {
                  //consider the linkage shape later
                  var markJSON = _Util.Util.toJSON(mark);

                  var transformedAttrs = _Util.Util.discretizePath(markJSON);

                  if (transformedAttrs) {
                    if (transformedAttrs.type === 'lines') {
                      for (var _i2 = 0; _i2 < transformedAttrs.data.length; _i2++) {
                        markJSON.attr['x' + (1 + 2 * _i2)] = transformedAttrs.data[_i2][0][0];
                        markJSON.attr['y' + (1 + 2 * _i2)] = transformedAttrs.data[_i2][0][1];
                        markJSON.attr['x' + (2 + 2 * _i2)] = transformedAttrs.data[_i2][1][0];
                        markJSON.attr['y' + (2 + 2 * _i2)] = transformedAttrs.data[_i2][1][1];
                      }
                    } else {
                      var tfAttrsDataKeys = Object.keys(transformedAttrs.data);

                      for (var _i3 = 0; _i3 < tfAttrsDataKeys.length; _i3++) {
                        var tAttr = tfAttrsDataKeys[_i3];

                        if (tAttr === 'radius') {
                          if (transformedAttrs.data[tAttr].length > 1) {
                            markJSON.attr.innerRadius = transformedAttrs.data[tAttr][0].rx + 1;
                            markJSON.attr.outterRadius = transformedAttrs.data[tAttr][1].rx - 1;
                          } else {
                            markJSON.attr.innerRadius = 0;
                            markJSON.attr.outterRadius = transformedAttrs.data[tAttr][0].rx - 1;
                          }
                        } else {
                          markJSON.attr[tAttr] = transformedAttrs.data[tAttr];
                        }
                      }
                    }

                    mark = _Util.Util.toDOM(markJSON);
                  }
                }

                var tmpDomAttrObj = {};
                var attrArr = [].concat(_toConsumableArray(mark.attributes));

                for (var _i4 = 0; _i4 < attrArr.length; _i4++) {
                  var attrName = attrArr[_i4];
                  tmpDomAttrObj[attrName.name] = mark.getAttribute(attrName.name);
                }

                var markDom = document.getElementById(markId);
                tmpDomAttrObj['bbWidth'] = markDom.getBBox().width;
                tmpDomAttrObj['bbHeight'] = markDom.getBBox().height;
                tmpDomAttrObj['bbX'] = markDom.getBBox().x;
                tmpDomAttrObj['bbY'] = markDom.getBBox().y;
                tmpDomAttrObj['content'] = mark.textContent;
                tmpDomAttrObj['id'] = markId;
                var dataDatumAttrValue = JSON.parse(mark.getAttribute('data-datum'));

                if (Array.isArray(dataDatumAttrValue)) {
                  dataDatumAttrValue = dataDatumAttrValue[0];
                }

                tmpDomAttrObj['data-datum'] = dataDatumAttrValue;

                if (mark.tagName === 'path' || mark.tagName === 'line') {
                  tmpDomAttrObj['stroke-dasharray'] = document.getElementById(markId).getTotalLength();
                  tmpDomAttrObj['stroke-dashoffset'] = document.getElementById(markId).getTotalLength();
                }

                animation.domMarks.set(markId, tmpDomAttrObj);
              }
            });
          }

          animation.calAniTime(markIds, lastAnimation);
          lastAnimation = animation;
          document.body.removeChild(tmpContainer);
        };

        for (var aniIdx = 0; aniIdx < this.animations.length; aniIdx++) {
          _loop(aniIdx);
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      _AnimationSpec.default.renderAnimation(); //map animation keyframes to lottie spec


      _AnimationSpec.default.mapToLottieSpec(); //export lottie JSON


      var lottieJSON = _GlobalVar.globalVar.jsMovin.toJSON();

      console.log(lottieJSON);
    }
  }, {
    key: "animations",
    set: function set(aniJson) {
      var idxAniJson = aniJson.map(function (tmpAni) {
        tmpAni.chartIdx = 0;
        return tmpAni;
      });
      var chartNum = 0; //number of charts

      if (this.facet) {
        chartNum = this.facet.views[0].frames.length;
      } else {
        chartNum = this.chartSpecs.length;
      }

      if (chartNum > 1) {
        var _loop2 = function _loop2(i) {
          var tmpAniJson = _Util.Util.deepClone(aniJson);

          tmpAniJson[0].reference = _TimingSpec.default.timingRef.previousEnd;
          var tmpIdxAniJson = tmpAniJson.map(function (tmpAni) {
            tmpAni.chartIdx = i;
            return tmpAni;
          });
          idxAniJson.push.apply(idxAniJson, _toConsumableArray(tmpIdxAniJson));
        };

        //more than 1 input chart
        for (var i = 1; i < chartNum - 1; i++) {
          _loop2(i);
        }
      }

      this._animations = idxAniJson;
    },
    get: function get() {
      return this._animations;
    }
  }], [{
    key: "loadSpec",
    value: function loadSpec(url, callback) {
      var xhr = new XMLHttpRequest(),
          okStatus = document.location.protocol === "file:" ? 0 : 200;
      xhr.open('GET', url, false);
      xhr.overrideMimeType("text/html;charset=utf-8");
      xhr.send(null);

      if (xhr.status === okStatus) {
        var spec = xhr.responseText;
        callback(JSON.parse(spec));
      } else if (xhr.status === 404) {
        console.log('can not find ' + url + ' ! Please check the url.');
      }
    }
  }]);

  return AniChart;
}();

var _default = AniChart;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/ChartSpec.js":
/*!**************************!*\
  !*** ./src/ChartSpec.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Util = __webpack_require__(/*! ./util/Util */ "./src/util/Util.js");

var _FacetSpec = _interopRequireDefault(__webpack_require__(/*! ./FacetSpec */ "./src/FacetSpec.js"));

var _GlobalVar = __webpack_require__(/*! ./util/GlobalVar.js */ "./src/util/GlobalVar.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ChartSpec =
/*#__PURE__*/
function () {
  function ChartSpec(id, source) {
    _classCallCheck(this, ChartSpec);

    this.id = id;
    this.source = source;
  }

  _createClass(ChartSpec, null, [{
    key: "chartPreProcessing",
    value: function chartPreProcessing(chartSpecs) {
      var inputSpecs = [];

      for (var i = 0; i < chartSpecs.length; i++) {
        var inputSpec = chartSpecs[i];

        if (typeof inputSpec.start !== 'undefined' && typeof inputSpec.end !== 'undefined') {
          var startIdx = parseInt(inputSpec.start),
              endIdx = parseInt(inputSpec.end);

          if (endIdx < startIdx) {
            console.log('wrong start and end file index ');
            continue;
          } else {
            var tmpBlocks = inputSpec.source.split('/');
            var chartName = typeof inputSpec.id === 'undefined' ? tmpBlocks[tmpBlocks.length - 1] : inputSpec.id;

            for (var j = startIdx; j <= endIdx; j++) {
              inputSpecs.push({
                "id": chartName + j,
                "source": inputSpec.source + j + '.dsvg'
              });
            }
          }
        } else {
          inputSpecs.push(inputSpec);
        }
      }

      return inputSpecs;
    }
  }, {
    key: "loadCharts",
    value: function loadCharts(chartSpecs, facet) {
      var nameCharts = new Map();
      ChartSpec.charts = [];
      var nullCharts = [];
      var defaultWidth = 0;
      var defaultHeight = 0;

      for (var i = 0; i < chartSpecs.length; i++) {
        var xhr = new XMLHttpRequest(),
            okStatus = document.location.protocol === "file:" ? 0 : 200,
            svgContent = void 0;
        xhr.open('GET', chartSpecs[i].source, false);
        xhr.overrideMimeType("text/html;charset=utf-8");
        xhr.send(null);

        if (xhr.status === okStatus) {
          var tmpDiv = document.createElement('div');
          tmpDiv.innerHTML = xhr.responseText;
          svgContent = tmpDiv.children[0];
          defaultWidth = parseFloat(svgContent.getAttribute('width'));
          defaultHeight = parseFloat(svgContent.getAttribute('height'));
          ChartSpec.charts.push(svgContent);
          nameCharts.set(chartSpecs[i].id, ChartSpec.charts.length - 1);
        } else if (xhr.status === 404) {
          nullCharts.unshift(i);
          console.log('can not find ' + chartSpecs[i].source + ' ! Please check the url.');
        }
      } //remove the empty charts 


      for (var _i = 0; _i < nullCharts.length; _i++) {
        chartSpecs.slice(nullCharts[_i], 1);
      } //generate chart facets


      typeof facet !== 'undefined' ? ChartSpec.facetViews(nameCharts, facet) : this.viewport.setViewport(defaultWidth, defaultHeight);
    }
  }, {
    key: "removeTransAndMerge",
    value: function removeTransAndMerge() {
      for (var i = 0; i < ChartSpec.charts.length; i++) {
        ChartSpec.charts[i].setAttribute('trans', '0,0');
        ChartSpec.removeTransitions(ChartSpec.charts[i].children[0]);
      }

      var resultChart = ChartSpec.mergeCharts();
      return resultChart;
    }
  }, {
    key: "facetViews",
    value: function facetViews(nameCharts, facet) {
      if (facet.views.length > 0) {
        var chartsToCombine = [];

        for (var i = 0; i < facet.views[0].frames.length; i++) {
          var tmpRecorder = [];

          for (var j = 0; j < facet.views.length; j++) {
            var chartName = facet.views[j].frames[i];

            if (typeof nameCharts.get(chartName) !== 'undefined') {
              tmpRecorder.push(ChartSpec.charts[nameCharts.get(chartName)].cloneNode(true));
            } else {
              console.log('chart name ' + chartName + ' is undefined !');
            }
          }

          if (tmpRecorder.length === facet.views.length) {
            chartsToCombine.push(tmpRecorder);
          }
        }

        ChartSpec.combineCharts(facet.type, facet.views.length, chartsToCombine);
      }
    }
  }, {
    key: "combineCharts",
    value: function combineCharts(facetType, facetNum, chartsToCombine) {
      var resultCharts = [],
          chartMargin = 20,
          oriWidth = 0,
          oriHeight = 0;

      for (var i = 0; i < chartsToCombine.length; i++) {
        var tmpCharts = chartsToCombine[i];
        oriWidth = parseFloat(tmpCharts[0].getAttribute('width'));
        oriHeight = parseFloat(tmpCharts[0].getAttribute('height'));
        var viewBoxNums = tmpCharts[0].getAttribute('viewBox').split(' ');
        var viewBoxW = parseFloat(viewBoxNums[2]);
        var viewBoxH = parseFloat(viewBoxNums[3]);

        var chartTransForm = _Util.Util.getTransformAttrs(tmpCharts[0].children[0]);

        tmpCharts[0].children[0].setAttribute('transform', 'translate(' + chartTransForm.transNums[0] + ',' + chartTransForm.transNums[1] + ') ' + 'scale(' + chartTransForm.scaleNum / facetNum + ')');

        switch (facetType) {
          case _FacetSpec.default.facetType.row:
            oriHeight += chartMargin * tmpCharts.length;
            tmpCharts[0].setAttribute('height', oriHeight);
            tmpCharts[0].setAttribute('viewBox', '0 0 ' + viewBoxW + ' ' + (viewBoxH + chartMargin * tmpCharts.length));
            break;

          case _FacetSpec.default.facetType.col:
            oriWidth += chartMargin * tmpCharts.length;
            tmpCharts[0].setAttribute('width', oriWidth);
            tmpCharts[0].setAttribute('viewBox', '0 0 ' + (viewBoxW + chartMargin * tmpCharts.length) + ' ' + viewBoxH);
            break;
        }

        var _loop = function _loop(j) {
          var tmpChart = tmpCharts[j];
          var tmpMarks = tmpChart.querySelectorAll('.mark');
          [].forEach.call(tmpMarks, function (m) {
            var idNum = parseInt(m.getAttribute('id').substring(4));
            m.setAttribute('id', 'mark' + (idNum + j * 100000));
            m.classList.add('facet' + j);
          });

          if (j > 0) {
            //put the marks in the following charts to the 1st chart
            var chartContentG = tmpChart.children[0];
            var chartChildren = chartContentG.children;

            for (var m = 0; m < chartChildren.length; m++) {
              var tmpDom = chartChildren[m];

              var transformAttrs = _Util.Util.getTransformAttrs(tmpDom);

              switch (facetType) {
                case _FacetSpec.default.facetType.row:
                  tmpDom.setAttribute('transform', 'translate(' + transformAttrs.transNums[0] + ',' + (transformAttrs.transNums[1] + (viewBoxH + chartMargin) * j) + ') ' + 'scale(' + transformAttrs.scaleNum + ')');
                  break;

                case _FacetSpec.default.facetType.col:
                  tmpDom.setAttribute('transform', 'translate(' + (transformAttrs.transNums[0] + (viewBoxW + chartMargin) * j) + ',' + transformAttrs.transNums[1] + ') ' + 'scale(' + transformAttrs.scaleNum + ')');
                  break;
              }

              tmpCharts[0].children[0].appendChild(tmpDom);
            }
          }
        };

        for (var j = 0; j < tmpCharts.length; j++) {
          _loop(j);
        }

        resultCharts.push(tmpCharts[0]);
      }

      ChartSpec.charts = resultCharts;
      this.viewport.setViewport(oriWidth, oriHeight);
    }
  }, {
    key: "mergeCharts",
    value: function mergeCharts() {
      var allMarks = new Set();
      var markStatus = new Map();
      var markTempletes = new Map();
      var attrNames = ['x', 'y', 'cx', 'cy', 'x1', 'y1', 'x2', 'y2', 'd', 'r', 'width', 'height', 'textContent', 'fill', 'stroke'];
      var nullStatus = {};

      for (var j = 0; j < attrNames.length; j++) {
        nullStatus[attrNames[j]] = null;
      }

      var _loop2 = function _loop2(i) {
        var tmpChart = ChartSpec.charts[i];
        var marks = tmpChart.querySelectorAll('.mark');

        if (marks.length > 0) {
          [].forEach.call(marks, function (m) {
            var markId = m.getAttribute('id'); // globalVar.markLayers.set(markId, globalVar.jsMovin.addLayer(m));

            allMarks.add(markId);
            var statusObj = {}; //status of one mark in chart i

            for (var _j5 = 0; _j5 < attrNames.length; _j5++) {
              if (attrNames[_j5] === 'textContent') {
                statusObj[attrNames[_j5]] = m.innerHTML;
              } else {
                statusObj[attrNames[_j5]] = m.getAttribute(attrNames[_j5]);
              }
            }

            if (typeof markStatus.get(markId) === 'undefined') {
              markStatus.set(markId, new Array(ChartSpec.charts.length).fill(nullStatus));
            }

            markStatus.get(markId)[i] = statusObj;
            markTempletes.set(markId, m.outerHTML);
          });
        }
      };

      for (var i = 0; i < ChartSpec.charts.length; i++) {
        _loop2(i);
      } //find the changed attributes


      ChartSpec.changedAttrs = [];

      var attrNamesCopy = _Util.Util.deepClone(attrNames);

      markStatus.forEach(function (statusArr, markId) {
        for (var i = 0; i < attrNamesCopy.length; i++) {
          var flag = true;
          var compareStatus = void 0;

          for (var _j = 0; _j < statusArr.length; _j++) {
            if (typeof statusArr[_j] !== 'undefined') {
              compareStatus = statusArr[_j];
              break;
            }
          }

          for (var _j2 = 0; _j2 < statusArr.length; _j2++) {
            if (typeof statusArr[_j2] !== 'undefined') {
              if (statusArr[_j2][attrNamesCopy[i]] !== compareStatus[attrNamesCopy[i]]) {
                ChartSpec.changedAttrs.push(attrNamesCopy[i]);
                flag = false;
                break;
              }
            }
          }

          if (!flag) {
            attrNamesCopy.splice(i, 1);
            break;
          }
        }
      }); //find different cmds if there is d in changedAttrs

      var diffCmds = new Map(); //key:cmd name, value: {cmdIdx, diffAttrIdxs}

      if (ChartSpec.changedAttrs.indexOf('d') >= 0) {
        diffCmds = _Util.Util.findDiffCmds(markStatus);
      } //add missing marks to each chart


      allMarks = Array.from(allMarks);
      ChartSpec.markDoms.clear();

      for (var i = 0; i < ChartSpec.charts.length; i++) {
        for (var _j3 = 0; _j3 < allMarks.length; _j3++) {
          if (ChartSpec.charts[i].querySelectorAll('#' + allMarks[_j3]).length === 0) {
            //chart i does not have mark j
            var markStr = markTempletes.get(allMarks[_j3]);
            var tmpDiv = document.createElement('div');
            tmpDiv.innerHTML = markStr;
            var mark = tmpDiv.children[0];
            var statusObj = {}; //set the changed attributes to the init state

            for (var a = 0; a < ChartSpec.changedAttrs.length; a++) {
              if (ChartSpec.changedAttrs[a] === 'y' && ChartSpec.changedAttrs.indexOf('height') >= 0) {
                var markY = !mark.getAttribute('y') ? 0 : parseFloat(mark.getAttribute('y'));
                var markHeight = !mark.getAttribute('height') ? 0 : parseFloat(mark.getAttribute('height'));
                var targetValue = markY + markHeight;
                mark.setAttribute('y', targetValue);
                statusObj.y = targetValue;
              } else if (ChartSpec.changedAttrs[a] === 'd') {
                var resultD = void 0;

                if (mark.getAttribute('d')) {
                  resultD = _Util.Util.setPathDValue(mark.getAttribute('d'), true, 0, 0, diffCmds);
                }

                mark.setAttribute('d', resultD);
                statusObj.d = resultD;
              } else if (ChartSpec.changedAttrs[a] === 'textContent') {
                mark.innerHTML = '';
                statusObj.textContent = '';
              } else if (ChartSpec.changedAttrs[a] === 'fill' || ChartSpec.changedAttrs[a] === 'stroke') {
                if (typeof mark.getAttribute(ChartSpec.changedAttrs[a]) === 'undefined') {
                  mark.setAttribute(ChartSpec.changedAttrs[a], '#FFFFFF');
                }

                statusObj[ChartSpec.changedAttrs[a]] = mark.getAttribute(ChartSpec.changedAttrs[a]);
              } else {
                if (['x', 'y', 'cx', 'cy', 'x1', 'y1', 'x2', 'y2'].includes(ChartSpec.changedAttrs[a])) {
                  if (ChartSpec.changedAttrs[a] === 'x2') {
                    mark.setAttribute('x2', parseFloat(mark.getAttribute('x1')));
                    statusObj['x2'] = parseFloat(mark.getAttribute('x1'));
                  } else if (ChartSpec.changedAttrs[a] === 'y2') {
                    mark.setAttribute('y2', parseFloat(mark.getAttribute('y1')));
                    statusObj['y2'] = parseFloat(mark.getAttribute('y1'));
                  } else {
                    statusObj[ChartSpec.changedAttrs[a]] = parseFloat(mark.getAttribute(ChartSpec.changedAttrs[a]));
                  }
                } else {
                  mark.setAttribute(ChartSpec.changedAttrs[a], 0);
                  statusObj[ChartSpec.changedAttrs[a]] = 0;
                }
              }
            }

            markStr = '<svg xmlns="http://www.w3.org/2000/svg" width="500" height="500">' + mark.outerHTML + '</svg>';
            var parser = new DOMParser();
            var svgMark = parser.parseFromString(markStr, "image/svg+xml").lastChild.children[0];
            ChartSpec.charts[i].querySelector('#chartContent').appendChild(svgMark);
            markStatus.get(allMarks[_j3])[i] = statusObj;
          }
        }
      } //set data-trans of chart 0


      ChartSpec.dataTrans = new Map();

      for (var _j4 = 0; _j4 < allMarks.length; _j4++) {
        var statusArr = markStatus.get(allMarks[_j4]);
        var dataTransArr = [];

        for (var si = 0; si < statusArr.length; si++) {
          var tmpStatus = {};

          for (var _a = 0; _a < ChartSpec.changedAttrs.length; _a++) {
            tmpStatus[ChartSpec.changedAttrs[_a]] = statusArr[si][ChartSpec.changedAttrs[_a]];
          }

          dataTransArr.push(tmpStatus); //mark status in charts
        } //copy the status of the 1st chart as the init status


        ChartSpec.dataTrans.set(allMarks[_j4], dataTransArr);
        var markDom = ChartSpec.charts[0].querySelector('#' + allMarks[_j4]);
        markDom.setAttribute('data-transition', JSON.stringify({
          "dataTrans": dataTransArr
        }, null, '\t'));
      }

      return ChartSpec.charts[0];
    }
  }, {
    key: "getBBoxes",
    value: function getBBoxes() {
      var svg = document.getElementById('chartContainer').children[0];
      var marks = svg.querySelectorAll('[id^="mark"]');
      var bBoxes = new Map();

      if (marks.length > 0) {
        [].forEach.call(marks, function (m) {
          var markId = m.getAttribute('id'); // globalVar.markLayers.set(markId, globalVar.jsMovin.addLayer(m));

          var bBox;

          if (m.tagName === 'text') {
            bBox = m.getBBox();
            bBox.width += 10;
          } else {
            bBox = m.getBBox();
          }

          bBoxes.set(markId, bBox);
        });
      }

      return bBoxes;
    }
  }, {
    key: "removeTransitions",
    value: function removeTransitions(t) {
      var tr = t.getAttribute('transform');
      var parentTrans = t.parentNode.getAttribute('trans').split(',');

      if (tr) {
        tr = tr.replace(/translate|scale|rotate|\s/g, function (m) {
          return m === ' ' ? '' : '@' + m;
        });
        tr = tr.replace(/(^@*)|(@*$)/g, '').split('@');
        var scaleStr = '',
            transStr = '';

        for (var i = 0; i < tr.length; i++) {
          if (tr[i].indexOf('translate') >= 0) {
            transStr = tr[i];
          } else if (tr[i].indexOf('scale') >= 0) {
            scaleStr = tr[i];
          }
        }

        var transPosiStr = transStr.replace(/translate\(| |\)/g, '').split(',');
        t.setAttribute('transform', scaleStr);

        if (t.tagName === 'g') {
          t.setAttribute('trans', parseFloat(transPosiStr[0]) + parseFloat(parentTrans[0]) + ',' + (parseFloat(transPosiStr[1]) + parseFloat(parentTrans[1])));
        } else {
          _Util.Util.transShape(t, parseFloat(transPosiStr[0]) + parseFloat(parentTrans[0]), parseFloat(transPosiStr[1]) + parseFloat(parentTrans[1]));
        }
      } else {
        if (t.tagName === 'g') {
          t.setAttribute('trans', parentTrans.join(','));
        } else {
          _Util.Util.transShape(t, parseFloat(parentTrans[0]), parseFloat(parentTrans[1]));
        }
      }

      if (t.children.length > 0) {
        for (var _i2 = 0; _i2 < t.children.length; _i2++) {
          ChartSpec.removeTransitions(t.children[_i2]);
        }
      }
    }
  }, {
    key: "addLottieMarkLayers",
    value: function addLottieMarkLayers(t) {
      if (t.tagName !== 'g' && t.tagName !== 'svg') {
        console.log(t.tagName);

        if (t.classList.contains('mark')) {
          _GlobalVar.globalVar.markLayers.set(t.getAttribute('id'), _GlobalVar.globalVar.jsMovin.addLayer(t));
        } else {} // if(t.tagName === 'line')
        // globalVar.jsMovin.addLayer(t)
        // t.classList.contains('mark') ? globalVar.markLayers.set(t.getAttribute('id'), globalVar.jsMovin.addLayer(t)) : globalVar.jsMovin.addLayer(t);
        // globalVar.markLayers.set(t.getAttribute('id'), globalVar.jsMovin.addLayer(t));

      }

      if (t.children.length > 0) {
        for (var i = 0; i < t.children.length; i++) {
          ChartSpec.addLottieMarkLayers(t.children[i]);
        }
      }
    } // static getMarkBBox(svg) {
    //     let markBoundingRects = new Map();
    //     let marks = svg.querySelectorAll('[id^="mark"]');
    //     if (marks.length > 0) {
    //         [].forEach.call(marks, function (m) {
    //             if (m.tagName !== 'text') {
    //                 markBoundingRects.set(m.getAttribute('id'), m.getBBox());
    //             } else {//text tag, the bounding box coords is the bottom left corner
    //                 let bBox = m.getBBox();
    //                 bBox.y -= bBox.height;
    //                 bBox.width += 10;
    //                 markBoundingRects.set(m.getAttribute('id'), bBox);
    //             }
    //         });
    //     }
    //     return markBoundingRects;
    // }
    // static processAnimateChart(chartStr, bBoxes) {
    //     let tmpDiv = document.createElement('div');
    //     tmpDiv.innerHTML = chartStr;
    //     let aniSvg = tmpDiv.children[0];
    //     aniSvg.setAttribute('id', 'visAnimation');
    //     aniSvg.querySelector('#chartContent').setAttribute('id', 'aniChartContent');
    //     let aniMarks = aniSvg.querySelectorAll('[id^="mark"]');
    //     if (aniMarks.length > 0) {
    //         [].forEach.call(aniMarks, function (am) {
    //             let markId = am.getAttribute('id');
    //             let idIndex = markId.substring(4);
    //             am.setAttribute('id', 'ani' + markId);
    //             //create corresponding mask
    //             let mask = document.createElementNS('http://www.w3.org/2000/svg', 'mask');
    //             mask.setAttributeNS(null, 'id', 'animaskmark' + idIndex);
    //             let rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    //             rect.setAttributeNS(null, 'id', 'animaskBgmark' + idIndex);
    //             rect.setAttributeNS(null, 'x', bBoxes.get(markId).x - 1);
    //             rect.setAttributeNS(null, 'y', bBoxes.get(markId).y - 1);
    //             rect.setAttributeNS(null, 'width', bBoxes.get(markId).width + 2);
    //             rect.setAttributeNS(null, 'height', bBoxes.get(markId).height + 2);
    //             rect.setAttributeNS(null, 'fill', '#fff');
    //             mask.appendChild(rect);
    //             let rect2 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    //             rect2.setAttributeNS(null, 'x', -10000);
    //             rect2.setAttributeNS(null, 'y', -10000);
    //             rect2.setAttributeNS(null, 'width', 20000);
    //             rect2.setAttributeNS(null, 'height', 20000);
    //             rect2.setAttributeNS(null, 'fill', '#fff');
    //             mask.appendChild(rect2);
    //             aniSvg.appendChild(mask);
    //             am.setAttribute('mask', 'url(#animaskmark' + idIndex + ')');
    //         });
    //     }
    //     return aniSvg;
    // }

  }]);

  return ChartSpec;
}();

ChartSpec.charts = [];
ChartSpec.changedAttrs = [];
ChartSpec.viewport = new _Util.Viewport();
ChartSpec.dataTrans = new Map();
ChartSpec.markDoms = new Map();
var _default = ChartSpec;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/FacetSpec.js":
/*!**************************!*\
  !*** ./src/FacetSpec.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var FacetSpec =
/*#__PURE__*/
function () {
  function FacetSpec(type, views) {
    _classCallCheck(this, FacetSpec);

    this._type;
    this._views;
    this.views = views;
    this.type = type;
  }

  _createClass(FacetSpec, [{
    key: "type",
    set: function set(type) {
      if (typeof type !== 'undefined') {
        if (Object.keys(FacetSpec.facetType).includes(type)) {
          this._type = type;
        } else {
          console.log('the facet type has to be one of "row" or "column", setting to default value "column".');
          this._type = FacetSpec.facetType.col;
        }
      }
    },
    get: function get() {
      return this._type;
    }
  }, {
    key: "views",
    set: function set(views) {
      if (typeof views !== 'undefined') {
        //translate "range" to "frames"
        var frameViews = views.map(function (view) {
          if (typeof view.range !== 'undefined') {
            //check range 
            var regend = new RegExp("\\d+$");
            var rangeStartName = view.range[0].replace(regend, ''),
                rangeEndName = view.range[1].replace(regend, ''),
                rangeStart = view.range[0].match(regend),
                rangeEnd = view.range[1].match(regend);

            if (rangeStartName === rangeEndName) {
              view.frames = [];

              for (var i = rangeStart; i <= rangeEnd; i++) {
                view.frames.push(rangeStartName + i);
              }
            } else {
              view.frames = [view.range[0], view.range[1]];
              console.log('range start and end mismatch');
            }
          }

          return view;
        }); //find the max number of charts in views

        var maxLen = 0;

        for (var i = 0; i < frameViews.length; i++) {
          if (frameViews[i].frames.length > maxLen) {
            maxLen = frameViews[i].frames.length;
          }
        }

        for (var _i = 0; _i < frameViews.length; _i++) {
          if (frameViews[_i].frames.length < maxLen) {
            var lastItem = frameViews[_i].frames[frameViews[_i].frames.length - 1];
            var numDiff = maxLen - frameViews[_i].frames.length;

            while (numDiff > 0) {
              frameViews[_i].frames.push(lastItem);

              numDiff--;
            }
          }
        }

        this._views = frameViews;
      }
    },
    get: function get() {
      return this._views;
    }
  }]);

  return FacetSpec;
}();

FacetSpec.facetType = {
  row: 'row',
  col: 'column'
};
var _default = FacetSpec;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/GroupingSpec.js":
/*!*****************************!*\
  !*** ./src/GroupingSpec.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _TimingSpec2 = _interopRequireDefault(__webpack_require__(/*! ./TimingSpec.js */ "./src/TimingSpec.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var GroupingSpec =
/*#__PURE__*/
function (_TimingSpec) {
  _inherits(GroupingSpec, _TimingSpec);

  function GroupingSpec() {
    var _this;

    _classCallCheck(this, GroupingSpec);

    _this = _possibleConstructorReturn(this, (GroupingSpec.__proto__ || Object.getPrototypeOf(GroupingSpec)).call(this));
    _this._groupBy = 'id'; //optional

    _this._reference = _TimingSpec2.default.timingRef.previousStart;
    _this._delay = 0;

    _this.sort =
    /*#__PURE__*/
    function () {
      //optional
      function _class() {
        _classCallCheck(this, _class);

        this.field;
        this.order;
        this.expr;
      }

      return _class;
    }();

    _this.grouping; //optional, another GroupingSpec object indicating more groupings

    return _this;
  }
  /***** getters and setters *****/


  _createClass(GroupingSpec, [{
    key: "initGrouping",

    /***** end getters and setters *****/

    /**
     * init nested grouping and actions using json obj
     * @param {JSON obj} groupingJson 
     */
    value: function initGrouping(groupingJson) {
      this.groupBy = groupingJson.groupBy;
      this.reference = groupingJson.reference;
      this.delay = groupingJson.delay;

      if (typeof groupingJson.sort !== 'undefined') {
        this.sort.field = groupingJson.sort.field;
        this.sort.order = groupingJson.sort.order;
        this.sort.expr = groupingJson.sort.expr;
      }

      if (typeof groupingJson.grouping !== 'undefined') {
        this.grouping = new GroupingSpec();
        this.grouping.initGrouping(groupingJson.grouping);
      } else if (typeof groupingJson.grouping === 'undefined' && groupingJson.groupBy !== 'id') {
        //didnot goruping to id, add extra grouping by id
        this.grouping = new GroupingSpec();
        this.grouping.groupBy = 'id';
      }
    }
  }, {
    key: "arrangeOrder",
    value: function arrangeOrder(markIds, domMarks) {
      var root = {};
      root.groupRef = 'root';
      root.children = [];
      root.marks = markIds;
      this.generateTree(root, domMarks);
      var orderedMarks = this.getMarkOrder(root);
      return orderedMarks;
    }
  }, {
    key: "generateTree",
    value: function generateTree(t, domMarks) {
      var groupByRef = this.groupBy;
      var nodesThisLevel = new Map();

      for (var i = 0, markId; i < t.marks.length | (markId = t.marks[i]); i++) {
        var datum = domMarks.get(markId)['data-datum']; //datum stored in the tag

        var refValue = void 0;

        if (typeof domMarks.get(markId)[groupByRef] !== 'undefined') {
          refValue = domMarks.get(markId)[groupByRef];
        } else if (typeof domMarks.get(markId)[groupByRef] === 'undefined' && typeof datum[groupByRef] !== 'undefined') {
          refValue = datum[groupByRef];
        } else {
          console.log('error: grouping by an unknown attribute');
          return;
        }

        if (typeof nodesThisLevel.get(refValue) !== 'undefined') {
          nodesThisLevel.get(refValue).marks.push(markId);
        } else {
          var tmpObj = {};
          tmpObj.groupRef = groupByRef;
          tmpObj.refValue = refValue;
          tmpObj.children = [];
          tmpObj.marks = [markId];
          nodesThisLevel.set(refValue, tmpObj);
        }
      } //order nodes of this level according to the 'sort' spec


      switch (_typeof(this.sort.order)) {
        case 'object':
          //Array
          for (var _i = 0, _refValue; _i < this.sort.order.length | (_refValue = this.sort.order[_i]); _i++) {
            if (typeof nodesThisLevel.get(_refValue) !== 'undefined') {
              t.children.push(nodesThisLevel.get(_refValue));
            }
          }

          break;

        case 'string':
          //'ascending' | 'descending'
          //check whether have come to the lowest level
          var hasSingleMark = true;
          nodesThisLevel.forEach(function (value, ref) {
            if (value.marks.length > 1) {
              hasSingleMark = false;
            }
          }); //only take effect when a specific field is specified and are on the lowest level

          if (typeof this.sort.field !== 'undefined' && hasSingleMark) {
            var orderRef = this.sort.field;
            var nodesThisLevelArr = [].concat(_toConsumableArray(nodesThisLevel));
            var orderType = this.sort.order;
            nodesThisLevelArr.sort(function (a, b) {
              var markId1 = a[1].marks[0];
              var markId2 = b[1].marks[0];
              var orderRefValue1 = '',
                  orderRefValue2 = '';
              var datum1 = domMarks.get(markId1)['data-datum'];
              var datum2 = domMarks.get(markId2)['data-datum'];

              if (typeof domMarks.get(markId1)[orderRef] !== 'undefined' && domMarks.get(markId2)[orderRef] !== 'undefined') {
                orderRefValue1 = domMarks.get(markId1)[orderRef];
                orderRefValue2 = domMarks.get(markId2)[orderRef];
              } else if (typeof domMarks.get(markId1)[orderRef] === 'undefined' && typeof datum1[orderRef] !== 'undefined' && typeof domMarks.get(markId2)[orderRef] === 'undefined' && typeof datum2[orderRef] !== 'undefined') {
                orderRefValue1 = datum1[orderRef];
                orderRefValue2 = datum2[orderRef];
              }

              if (!isNaN(parseFloat(orderRefValue1))) {
                orderRefValue1 = parseFloat(orderRefValue1);
              }

              if (!isNaN(parseFloat(orderRefValue2))) {
                orderRefValue2 = parseFloat(orderRefValue2);
              }

              if (orderType === GroupingSpec.orderTypes.ascending) {
                if (orderRefValue1 >= orderRefValue2) {
                  return 1;
                } else {
                  return -1;
                }
              } else if (orderType === GroupingSpec.orderTypes.descending) {
                if (orderRefValue2 >= orderRefValue1) {
                  return 1;
                } else {
                  return -1;
                }
              } else if (orderType === GroupingSpec.orderTypes.random) {
                return Math.random() >= 0.5 ? 1 : -1;
              }
            });

            for (var _i2 = 0, tmpNode; _i2 < nodesThisLevelArr.length | (tmpNode = nodesThisLevelArr[_i2]); _i2++) {
              t.children.push(tmpNode[1]);
            }
          } else {
            var _nodesThisLevelArr = [].concat(_toConsumableArray(nodesThisLevel));

            if (this.sort.order === GroupingSpec.orderTypes.ascending) {
              _nodesThisLevelArr.sort(function (a, b) {
                if (a[0] >= b[0]) {
                  return 1;
                } else {
                  return -1;
                }
              });
            } else if (this.sort.order === GroupingSpec.orderTypes.descending) {
              _nodesThisLevelArr.sort(function (a, b) {
                if (b[0] >= a[0]) {
                  return 1;
                } else {
                  return -1;
                }
              });
            } else if (this.sort.order === GroupingSpec.orderTypes.random) {
              _nodesThisLevelArr.sort(function (a, b) {
                return Math.random() >= 0.5 ? 1 : -1;
              });
            }

            for (var _i3 = 0, _tmpNode; _i3 < _nodesThisLevelArr.length | (_tmpNode = _nodesThisLevelArr[_i3]); _i3++) {
              t.children.push(_tmpNode[1]);
            }
          }

          break;

        default:
          nodesThisLevel.forEach(function (tmpNode, ref) {
            t.children.push(tmpNode);
          });
      }

      if (typeof this.grouping !== 'undefined') {
        for (var _i4 = 0, _tmpNode2; _i4 < t.children.length | (_tmpNode2 = t.children[_i4]); _i4++) {
          this.grouping.generateTree(_tmpNode2, domMarks);
        }
      }
    }
    /**
     * get the animation order of marks
     * @param {Object} t
     * @param {Array} arr 
     */

  }, {
    key: "getMarkOrder",
    value: function getMarkOrder(t) {
      var orderedMarks = [];

      if (t != null) {
        var queue = [];
        queue.unshift(t);

        while (queue.length != 0) {
          var item = queue.shift();
          var children = item.children;

          if (children.length <= 0) {
            orderedMarks = [].concat(_toConsumableArray(orderedMarks), _toConsumableArray(item.marks));
          } else {
            for (var i = 0; i < children.length; i++) {
              queue.push(children[i]);
            }
          }
        }
      }

      return orderedMarks;
    }
    /**
     * from bottom up, calculate the time specs of marks recursively
     * @param {GroupingSpec} groupingSpec 
     * @param {Map} markAni : key:markId, value:time & action specs of the corresponding mark
     * @param {Map} groupByM : key:markId, value:group reference
     */

  }, {
    key: "calTimeInGrouping",
    value: function calTimeInGrouping(markAni, domMarks) {
      var groupByRef = this.groupBy;
      var groupByMap = new Map(); //record the result of groupBy in this level. key:markId, value:group reference

      markAni.forEach(function (ani, markId) {
        var datum = domMarks.get(markId)['data-datum']; //datum stored in the tag

        if (typeof domMarks.get(markId)[groupByRef] !== 'undefined') {
          groupByMap.set(markId, domMarks.get(markId)[groupByRef]);
        } else if (typeof domMarks.get(markId)[groupByRef] === 'undefined' && typeof datum[groupByRef] !== 'undefined') {
          groupByMap.set(markId, datum[groupByRef]);
        } else {
          console.log('error: grouping by an unknown attribute');
        }
      });

      if (typeof this.grouping !== 'undefined') {
        this.grouping.calTimeInGrouping(markAni, domMarks); //update time with upper grouping specs

        var groupByArr = [].concat(_toConsumableArray(groupByMap));
        var currentGroupRef = '';
        var firstItemLastGroup, lastItemLastGroup;
        var currentGroup = new Array(); //record marks belong to current group

        var lastGroup = new Map();

        for (var i = 0; i < groupByArr.length; i++) {
          var markId = groupByArr[i][0];
          var groupRef = groupByArr[i][1];

          if (groupRef !== currentGroupRef) {
            //come to the end of one group
            this.updateGroupingTime(firstItemLastGroup, lastItemLastGroup, lastGroup, currentGroup, markAni);
            firstItemLastGroup = currentGroup[0];
            lastItemLastGroup = currentGroup[currentGroup.length - 1];
            lastGroup = currentGroup;
            currentGroup = [];
            currentGroupRef = groupRef;
          }

          currentGroup.push(markId);
        } //deal with the last group


        this.updateGroupingTime(firstItemLastGroup, lastItemLastGroup, lastGroup, currentGroup, markAni);
      } else {
        //has come to the lowest level
        var markAniArr = [].concat(_toConsumableArray(markAni.entries()));
        markAniArr[0][1].startTime = 0;

        for (var _i5 = 1; _i5 < markAniArr.length; _i5++) {
          var tmpStart = void 0,
              previousStartTime = markAniArr[_i5 - 1][1].startTime,
              previousEndTime = previousStartTime + markAniArr[_i5 - 1][1].totalDuration;

          switch (this.reference) {
            case _TimingSpec2.default.timingRef.previousStart:
              tmpStart = previousStartTime + this.delay;
              break;

            case _TimingSpec2.default.timingRef.previousEnd:
              tmpStart = previousEndTime + this.delay;
              break;

            case _TimingSpec2.default.timingRef.absolute:
              tmpStart = this.delay;
              break;

            default:
              tmpStart = previousStartTime + this.delay;
          }

          markAniArr[_i5][1].startTime = tmpStart;
          markAni.set(markAniArr[_i5][0], markAniArr[_i5][1]);
        }
      }
    }
  }, {
    key: "updateGroupingTime",
    value: function updateGroupingTime(firstItemLastGroup, lastItemLastGroup, lastGroup, currentGroup, markAni) {
      var maxDuration = -10000,
          maxDurationItemLastGroup;

      for (var i = 0, itemLastGroup; i < lastGroup.length | (itemLastGroup = lastGroup[i]); i++) {
        if (markAni.get(itemLastGroup).startTime + markAni.get(itemLastGroup).totalDuration > maxDuration) {
          maxDuration = markAni.get(itemLastGroup).startTime + markAni.get(itemLastGroup).totalDuration;
          maxDurationItemLastGroup = itemLastGroup;
        }
      } //update time acording to delay from the second group


      if (typeof firstItemLastGroup !== 'undefined' && typeof maxDurationItemLastGroup !== 'undefined') {
        var timeDiff = 0;

        switch (this.reference) {
          case _TimingSpec2.default.timingRef.previousStart:
            timeDiff = markAni.get(firstItemLastGroup).startTime - markAni.get(currentGroup[0]).startTime + this.delay;
            break;

          case _TimingSpec2.default.timingRef.previousEnd:
            timeDiff = markAni.get(maxDurationItemLastGroup).startTime + markAni.get(maxDurationItemLastGroup).totalDuration - markAni.get(currentGroup[0]).startTime + this.delay;
            break;

          case _TimingSpec2.default.timingRef.absolute:
            timeDiff = this.delay - markAni.get(currentGroup[0]).startTime;
            break;
        }

        for (var _i6 = 0, markId; _i6 < currentGroup.length | (markId = currentGroup[_i6]); _i6++) {
          markAni.get(markId).startTime += timeDiff;
        }
      }
    }
  }, {
    key: "groupBy",
    set: function set(gb) {
      if (typeof gb !== 'undefined') this._groupBy = gb;
    },
    get: function get() {
      return this._groupBy;
    }
  }, {
    key: "reference",
    set: function set(ref) {
      if (typeof ref !== 'undefined') {
        var tmpRefStr = _TimingSpec2.default.transRef(ref);

        if (Object.keys(_TimingSpec2.default.timingRef).includes(tmpRefStr)) {
          this._reference = ref;
        } else {
          alert('the \'reference\' of TimingSpec has to be one of \'previousStart\', \'previousEnd\' or \'absolute\'. ');
        }
      }
    },
    get: function get() {
      return this._reference;
    }
  }, {
    key: "delay",
    set: function set(dly) {
      if (typeof dly !== 'undefined') {
        if (dly >= 1000 / _TimingSpec2.default.FRAME_RATE || dly === 0) {
          this._delay = dly;
        } else {
          this._delay = 1000 / _TimingSpec2.default.FRAME_RATE;
        }
      }
    },
    get: function get() {
      return this._delay;
    }
  }]);

  return GroupingSpec;
}(_TimingSpec2.default);

GroupingSpec.orderTypes = {
  ascending: 'ascending',
  descending: 'descending',
  random: 'random'
};
var _default = GroupingSpec;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/TimingSpec.js":
/*!***************************!*\
  !*** ./src/TimingSpec.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TimingSpec =
/*#__PURE__*/
function () {
  function TimingSpec() {
    _classCallCheck(this, TimingSpec);

    this._offset = 0; //default offfset is 0

    this._reference = TimingSpec.timingRef.previousStart; //default offset reference is 'previous_start'
  }
  /***** getters and setters *****/


  _createClass(TimingSpec, [{
    key: "calOffsetTime",

    /***** end getters and setters *****/

    /**
     * add offset start time
     * @param {number} lastStart : start time of the last item
     * @param {number} lastEnd : end time of the last item
     * @param {number} allItemsStart : start time of all the items 
     * @param {Map} domMarks : key: markId, value: attrs
     */
    value: function calOffsetTime(lastStart, lastEnd) {
      var allItemsStart = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var domMarks = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : new Map();

      if (domMarks.size === 0) {
        //computing action offset time, return a number
        var itemStart = 0;

        switch (this.reference) {
          case TimingSpec.timingRef.previousStart:
            itemStart = lastStart + this.offset - allItemsStart;
            break;

          case TimingSpec.timingRef.previousEnd:
            itemStart = lastEnd + this.offset - allItemsStart;
            break;

          case TimingSpec.timingRef.absolute:
            itemStart = this.offset + allItemsStart;
            break;

          default:
            itemStart = lastStart + this.offset - allItemsStart;
        }

        return itemStart;
      } else {
        //computing animation offset time, return a map
        var that = this;
        var itemsStart = new Map(); //if the offset is an object, find the min value of the field in offset

        var minAttrValue = 1000000;

        if (_typeof(this.offset) === 'object') {
          domMarks.forEach(function (attrs, markId) {
            if (minAttrValue > parseFloat(attrs['data-datum'][that.offset.field])) {
              minAttrValue = parseFloat(attrs['data-datum'][that.offset.field]);
            }
          });
        }

        domMarks.forEach(function (attrs, markId) {
          var offsetValue = 0; //judge the type of offset: number or object

          if (typeof that.offset === 'number') {
            offsetValue = that.offset;
          } else if (_typeof(that.offset) === 'object') {
            offsetValue = that.offset.minOffset * parseFloat(attrs['data-datum'][that.offset.field]) / minAttrValue;
          } else {
            offsetValue = 0;
          }

          switch (that.reference) {
            case TimingSpec.timingRef.previousStart:
              itemsStart.set(markId, lastStart + offsetValue - allItemsStart);
              break;

            case TimingSpec.timingRef.previousEnd:
              itemsStart.set(markId, lastEnd + offsetValue - allItemsStart);
              break;

            case TimingSpec.timingRef.absolute:
              itemsStart.set(markId, offsetValue + allItemsStart);
              break;

            default:
              itemsStart.set(markId, lastStart + offsetValue - allItemsStart);
          }
        });
        return itemsStart;
      }
    }
  }, {
    key: "reference",
    set: function set(offsetRef) {
      if (typeof offsetRef !== 'undefined') {
        var tmpOffsetRefStr = TimingSpec.transRef(offsetRef);

        if (Object.keys(TimingSpec.timingRef).includes(tmpOffsetRefStr)) {
          this._reference = offsetRef;
        } else {
          alert('the \'reference\' of TimingSpec has to be one of \'previousStart\', \'previousEnd\' or \'absolute\'. ');
        }
      }
    },
    get: function get() {
      return this._reference;
    }
  }, {
    key: "offset",
    set: function set(ofst) {
      if (typeof ofst !== 'undefined') {
        if (typeof ofst === 'number') {
          this._offset = Math.floor(ofst / (1000 / TimingSpec.FRAME_RATE)) * (1000 / TimingSpec.FRAME_RATE);
        } else if (_typeof(ofst) === 'object') {
          this._offset = ofst;
        }
      }
    },
    get: function get() {
      return this._offset;
    }
  }], [{
    key: "transRef",
    value: function transRef(refStr) {
      switch (refStr) {
        case this.timingRef.previousStart:
          return 'previousStart';

        case this.timingRef.previousEnd:
          return 'previousEnd';

        case this.timingRef.absolute:
          return 'absolute';
      }
    }
  }]);

  return TimingSpec;
}();

TimingSpec.FRAME_RATE = 20;
TimingSpec.timingRef = {
  previousStart: 'start with previous',
  previousEnd: 'start after previous',
  absolute: 'absolute'
};
var _default = TimingSpec;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var TimingSpec = __webpack_require__(/*! ./TimingSpec.js */ "./src/TimingSpec.js");

var Animation = __webpack_require__(/*! ./AnimationSpec.js */ "./src/AnimationSpec.js");

var AniChart = __webpack_require__(/*! ./Canis.js */ "./src/Canis.js");

var Renderer = __webpack_require__(/*! ./AniRenderer.js */ "./src/AniRenderer.js");

window.aniChart = {
  frameRate: TimingSpec.FRAME_RATE,
  duration: function duration() {
    return Animation.wholeEndTime;
  },
  loadSpec: function loadSpec(url, callback) {
    AniChart.loadSpec(url, callback);
  },
  renderSpec: function renderSpec(spec) {
    var aniChartObj = new AniChart();
    aniChartObj.init(spec);
    aniChartObj.render();
  },
  play: function play() {
    Renderer.play();
  },
  renderFrame: function renderFrame(time) {
    //render frame of a specific timepoint
    return Renderer.renderFrame(time);
  },
  reset: function reset() {
    Renderer.resetCover();
    Animation.resetAll();
  },
  test: function test(spec) {
    console.log('this is a test! ', spec);
  }
};

/***/ }),

/***/ "./src/util/GlobalVar.js":
/*!*******************************!*\
  !*** ./src/util/GlobalVar.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.globalVar = void 0;

var _jsmovin = _interopRequireDefault(__webpack_require__(/*! jsmovin */ "./node_modules/jsmovin/bin/jsmovin.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import JSMovin from './jsmovin/jsmovin.bundle.js';
// import JSMovin from './jsmovin/jsmovin.js';
var globalVar = {
  jsMovin: new _jsmovin.default(),
  markLayers: new Map()
};
exports.globalVar = globalVar;

/***/ }),

/***/ "./src/util/Util.js":
/*!**************************!*\
  !*** ./src/util/Util.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Viewport = exports.Util = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Util =
/*#__PURE__*/
function () {
  function Util() {
    _classCallCheck(this, Util);
  }

  _createClass(Util, null, [{
    key: "deepClone",
    value: function deepClone(obj) {
      if (!obj || true == obj) //this also handles boolean as true and false
        return obj;

      var objType = _typeof(obj);

      if ("number" == objType || "string" == objType) // add your immutables here
        return obj;
      var result = Array.isArray(obj) ? [] : {};

      if (obj instanceof Map) {
        result = new Map();

        for (var i = 0; i < obj.keys().length; i++) {
          var _key = obj.keys()[i];
          result.set(_key, Util.deepClone(obj.get(_key)));
        }
      }

      for (var key in obj) {
        if (obj.hasOwnProperty(key)) result[key] = Util.deepClone(obj[key]);
      }

      return result;
    }
  }, {
    key: "formatTime",
    value: function formatTime(time) {
      var currentTimeS = parseInt(time / 1000);
      var currentTimeMS = parseInt(time % 1000 / 10);
      var currentTimeSStr = currentTimeS < 10 ? '0' + currentTimeS : '' + currentTimeS;
      var currentTimeMSStr = currentTimeMS < 10 ? '0' + currentTimeMS : '' + currentTimeMS;
      return currentTimeSStr + ':' + currentTimeMSStr;
    }
  }, {
    key: "color2RGB",
    value: function color2RGB(color) {
      if (color) {
        color = color.toLowerCase();

        if (Array.from(this.colorNames.keys()).includes(color)) {
          color = this.colorNames.get(color);
        }

        color = color.replace(/\s/g, '');

        if (color.indexOf('rgb') >= 0) {
          var tmpStr = color.substr(color.indexOf('(') + 1);
          tmpStr = tmpStr.substring(0, tmpStr.indexOf(')'));
          var rgb = tmpStr.split(',');

          if (rgb.length === 3) {
            rgb[3] = 255;
          }

          return [parseInt(rgb[0]), parseInt(rgb[1]), parseInt(rgb[2]), parseInt(rgb[3])];
        } else if (color.indexOf('#') >= 0) {
          return this.HEX2RGB(color);
        }
      }

      return "none";
    }
  }, {
    key: "HEX2RGB",
    value: function HEX2RGB(hex) {
      if (hex.charAt(0) === '#') {
        hex = hex.substr(1);
      }

      if (hex.length < 2 || hex.length > 6) {
        return false;
      }

      var values = hex.split(''),
          r,
          g,
          b,
          a = 255;

      if (hex.length === 2) {
        r = parseInt(values[0].toString() + values[1].toString(), 16);
        g = r;
        b = r;
      } else if (hex.length === 3) {
        r = parseInt(values[0].toString() + values[0].toString(), 16);
        g = parseInt(values[1].toString() + values[1].toString(), 16);
        b = parseInt(values[2].toString() + values[2].toString(), 16);
      } else if (hex.length === 6) {
        r = parseInt(values[0].toString() + values[1].toString(), 16);
        g = parseInt(values[2].toString() + values[3].toString(), 16);
        b = parseInt(values[4].toString() + values[5].toString(), 16);
      } else {
        return false;
      }

      return [r, g, b, a];
    }
  }, {
    key: "toJSON",
    value: function toJSON(node) {
      node = node || this;
      var obj = {
        nodeType: node.nodeType
      };

      if (node.tagName) {
        obj.tagName = node.tagName.toLowerCase();
      } else if (node.nodeName) {
        obj.nodeName = node.nodeName;
      }

      if (node.nodeValue) {
        obj.nodeValue = node.nodeValue;
      }

      var attrs = node.attributes;

      if (attrs) {
        obj.attr = {};

        for (var i = 0, attr; i < attrs.length | (attr = attrs[i]); i++) {
          obj.attr[attr.nodeName] = attr.nodeValue;
        }
      }

      return obj;
    }
  }, {
    key: "toDOM",
    value: function toDOM(obj) {
      if (typeof obj == 'string') {
        obj = JSON.parse(obj);
      }

      var node,
          nodeType = obj.nodeType;

      switch (nodeType) {
        case 1:
          //ELEMENT_NODE
          node = document.createElementNS('http://www.w3.org/2000/svg', obj.tagName);
          var attributes = obj.attr || {};

          for (var i = 0, attr; i < Object.keys(attributes).length | (attr = Object.keys(attributes)[i]); i++) {
            var attrValue = _typeof(attributes[attr]) === 'object' ? JSON.stringify(attributes[attr], null, 0) : attributes[attr];
            node.setAttributeNS(null, attr, attrValue);
          }

          break;

        case 3:
          //TEXT_NODE
          node = document.createTextNode(obj.nodeValue);
          break;

        case 8:
          //COMMENT_NODE
          node = document.createComment(obj.nodeValue);
          break;

        case 9:
          //DOCUMENT_NODE
          node = document.implementation.createDocument();
          break;

        case 10:
          //DOCUMENT_TYPE_NODE
          node = document.implementation.createDocumentType(obj.nodeName);
          break;

        case 11:
          //DOCUMENT_FRAGMENT_NODE
          node = document.createDocumentFragment();
          break;

        default:
          return node;
      }

      return node;
    }
    /**
     * @param {*} obj A parsed svg json object.
     */

  }, {
    key: "discretizePath",
    value: function discretizePath(obj) {
      // normalize attributes
      if (obj.tagName !== 'path') return null;
      var attr = obj.attr || {};
      if (!attr.d) return null;
      return Util.discretizeD(attr.d, attr.fill);
    }
  }, {
    key: "discretizeD",
    value: function discretizeD(d, fillColor) {
      var resultGroup = [],
          reg = /[MmLlHhVvZzCcSsQqTtAa][^MmLlHhVvZzCcSsQqTtAa]*/gi,
          group = undefined;

      while (group = reg.exec(d)) {
        var offset = resultGroup.reduce(function (p, c) {
          return p + c.length;
        }, 0);
        resultGroup.push(d.slice(offset, group.index));
        resultGroup.push(group[0]);
      }

      var result = resultGroup.map(function (x) {
        var command = x.slice(0, 1);
        var parameters = x.slice(1).split(/[ ,]/).filter(function (n) {
          return n.trim();
        }).map(function (n) {
          return parseFloat(n);
        });
        return command ? {
          command: command,
          parameters: parameters
        } : null;
      }).filter(function (x) {
        return x;
      }); // polyline style path

      if (result.every(function (x) {
        return 'MmLlHhVv'.includes(x.command);
      }) && !Util.convertColor(fillColor)) {
        var lines = [];
        var prev = null;
        var valid = true;
        result.forEach(function (x) {
          if (!valid) return;

          if (x.command === 'M') {
            prev = x.parameters.slice(-2);
            return;
          }

          if (!prev) return valid = false;

          if (x.command === 'm') {
            prev = prev.map(function (v, i) {
              return v + x.parameters[i];
            });
            return;
          }

          var firstPoint = prev,
              secondPoint = x.command === x.command.toLowerCase() ? prev.slice() : [0, 0];

          switch (x.command.toLowerCase()) {
            case 'l':
              secondPoint = secondPoint.map(function (v, i) {
                return v + x.parameters[i];
              });
              break;

            case 'h':
              secondPoint[0] += x.parameters[0];
              secondPoint[1] = firstPoint[1];
              break;

            case 'v':
              secondPoint[1] += x.parameters[0];
              secondPoint[0] = firstPoint[0];
              break;
          }

          if (secondPoint) {
            lines.push([firstPoint, secondPoint]);
            prev = secondPoint;
          } else {
            valid = false;
          }
        });
        if (valid) return {
          type: 'lines',
          data: lines
        };
      } // pie style path


      if (result.every(function (x) {
        return 'MmLlAaZz'.includes(x.command);
      }) && result.filter(function (x) {
        return x.command.toLowerCase() === 'a';
      }).length) {
        var circles = [];
        var _prev = null;
        var _valid = true;
        result.forEach(function (x) {
          if (!_valid) return;

          if (x.command.toLowerCase() === 'm') {
            _prev = x.parameters.slice(-2);
            return;
          }

          if (!_prev) return _valid = false;
          if (x.command.toLowerCase() === 'z') return;
          var firstPoint = _prev,
              secondPoint = x.command.toLowerCase() === x.command ? _prev.slice() : [0, 0];

          if (x.command.toLowerCase() !== 'a') {
            return _prev = secondPoint.map(function (v, i) {
              return v + x.parameters[i];
            });
          }

          secondPoint = secondPoint.map(function (v, i) {
            return v + x.parameters[i + 5];
          });
          circles.push({ ...Util.svgArcToCenterParam.apply(null, firstPoint.concat(x.parameters.slice(0, 5)).concat(secondPoint)),
            rx: x.parameters[0],
            ry: x.parameters[1],
            rotate: x.parameters[2]
          });
          _prev = secondPoint;
        });
        if (circles.length <= 0 || !circles.every(function (x) {
          return ['cx', 'cy'].reduce(function (p, c) {
            return p + Math.abs(x[c] - circles[0][c]);
          }, 0) < 1e-1;
        })) _valid = false;

        if (_valid) {
          var c = circles.reduce(function (p, c) {
            if (!p) return c;
            if (c.rx + c.ry > p.rx + p.ry) return c;
            return p;
          }, null);
          var attrResult = {
            type: 'pies',
            data: {
              cx: c.cx,
              cy: c.cy,
              startAngle: c.startAngle,
              endAngle: c.endAngle,
              radius: circles.map(function (x) {
                return {
                  rx: x.rx,
                  ry: x.ry,
                  rotate: x.rotate
                };
              })
            }
          };
          return attrResult;
        }
      } // other unhandled style path


      return null;
    }
  }, {
    key: "radian",
    value: function radian(ux, uy, vx, vy) {
      var dot = ux * vx + uy * vy;
      var mod = Math.sqrt((ux * ux + uy * uy) * (vx * vx + vy * vy));
      var rad = Math.acos(dot / mod);

      if (ux * vy - uy * vx < 0.0) {
        rad = -rad;
      }

      return rad;
    }
  }, {
    key: "svgArcToCenterParam",
    value: function svgArcToCenterParam(x1, y1, rx, ry, phi, fA, fS, x2, y2) {
      var cx, cy, startAngle, deltaAngle, endAngle;
      var PIx2 = Math.PI * 2.0;

      if (rx < 0) {
        rx = -rx;
      }

      if (ry < 0) {
        ry = -ry;
      }

      if (rx == 0.0 || ry == 0.0) {
        // invalid arguments
        throw Error('rx and ry can not be 0');
      }

      var s_phi = Math.sin(phi);
      var c_phi = Math.cos(phi);
      var hd_x = (x1 - x2) / 2.0; // half diff of x

      var hd_y = (y1 - y2) / 2.0; // half diff of y

      var hs_x = (x1 + x2) / 2.0; // half sum of x

      var hs_y = (y1 + y2) / 2.0; // half sum of y
      // F6.5.1

      var x1_ = c_phi * hd_x + s_phi * hd_y;
      var y1_ = c_phi * hd_y - s_phi * hd_x; // F.6.6 Correction of out-of-range radii
      //   Step 3: Ensure radii are large enough

      var lambda = x1_ * x1_ / (rx * rx) + y1_ * y1_ / (ry * ry);

      if (lambda > 1) {
        rx = rx * Math.sqrt(lambda);
        ry = ry * Math.sqrt(lambda);
      }

      var rxry = rx * ry;
      var rxy1_ = rx * y1_;
      var ryx1_ = ry * x1_;
      var sum_of_sq = rxy1_ * rxy1_ + ryx1_ * ryx1_; // sum of square

      if (!sum_of_sq) {
        throw Error('start point can not be same as end point');
      }

      var coe = Math.sqrt(Math.abs((rxry * rxry - sum_of_sq) / sum_of_sq));

      if (fA == fS) {
        coe = -coe;
      } // F6.5.2


      var cx_ = coe * rxy1_ / ry;
      var cy_ = -coe * ryx1_ / rx; // F6.5.3

      cx = c_phi * cx_ - s_phi * cy_ + hs_x;
      cy = s_phi * cx_ + c_phi * cy_ + hs_y;
      var xcr1 = (x1_ - cx_) / rx;
      var xcr2 = (x1_ + cx_) / rx;
      var ycr1 = (y1_ - cy_) / ry;
      var ycr2 = (y1_ + cy_) / ry; // F6.5.5

      startAngle = Util.radian(1.0, 0.0, xcr1, ycr1); // F6.5.6

      deltaAngle = Util.radian(xcr1, ycr1, -xcr2, -ycr2);

      while (deltaAngle > PIx2) {
        deltaAngle -= PIx2;
      }

      while (deltaAngle < 0.0) {
        deltaAngle += PIx2;
      }

      if (fS == false || fS == 0) {
        deltaAngle -= PIx2;
      }

      endAngle = startAngle + deltaAngle;

      while (endAngle > PIx2) {
        endAngle -= PIx2;
      }

      while (endAngle < 0.0) {
        endAngle += PIx2;
      }

      var outputObj = {
        /* cx, cy, startAngle, deltaAngle */
        cx: cx,
        cy: cy,
        startAngle: startAngle,
        deltaAngle: deltaAngle,
        endAngle: endAngle,
        clockwise: fS == true || fS == 1
      };
      return outputObj;
    }
  }, {
    key: "convertColor",
    value: function convertColor(str, fMode, tMode) {
      if (typeof str !== 'string') return str;
      if (str === 'none') return null;
      str = str.trim();
      var mr = null;

      if (tMode === undefined) {
        tMode = fMode;

        if (str.startsWith('#')) {
          fMode = 'hex';
        } else if (str.startsWith('rgb')) {
          fMode = 'rgb';
        }
      } // assume user input is valid


      switch (fMode) {
        case 'rgb':
          mr = str.split('(')[1].split(',').map(function (x) {
            return parseFloat(x);
          });
          break;

        case 'hex':
          mr = str.slice(1).match(/.{1,2}/g).map(function (x) {
            return parseInt(x, 16);
          });

        default:
          return str;
      }

      mr = mr.slice(0, 3);

      switch (tMode) {
        case 'hex':
          return '#' + mr.map(function (x) {
            return x.toString(16).padStart(2, '0');
          }).join('');

        case 'rgb':
          return "rgb(".concat(mr.join(','), ")");

        default:
          return str;
      }
    }
  }, {
    key: "polarToCartesian",
    value: function polarToCartesian(centerX, centerY, radius, angleInRadians) {
      return {
        x: Math.round((centerX + radius * Math.cos(angleInRadians)) * 100) / 100,
        y: Math.round((centerY + radius * Math.sin(angleInRadians)) * 100) / 100
      };
    }
  }, {
    key: "arc",
    value: function arc(x, y, innerRadius, outterRadius, startAngle, endAngle) {
      startAngle = startAngle < 0 ? startAngle + 2 * Math.PI : startAngle;
      endAngle = endAngle < 0 || startAngle > endAngle ? endAngle + 2 * Math.PI : endAngle; //to generate cover, make the cover a little bigger

      innerRadius = innerRadius === 0 ? 0 : innerRadius - 1;
      outterRadius += 1;
      var largeArcFlag = endAngle - startAngle <= Math.PI ? 0 : 1;
      var start1 = Util.polarToCartesian(x, y, outterRadius, endAngle);
      var end1 = Util.polarToCartesian(x, y, outterRadius, startAngle);
      var start2 = Util.polarToCartesian(x, y, innerRadius, endAngle);
      var end2 = Util.polarToCartesian(x, y, innerRadius, startAngle);
      var isRing = false;

      if (start1.x === end1.x && start1.y === end1.y) {
        //this is a ring
        end1.y -= 1;
        end2.y -= 1;
        isRing = true;
      }

      var d;

      if (!isRing) {
        d = ["M" + start1.x, start1.y, "A" + outterRadius, outterRadius, 0, largeArcFlag, 0, end1.x, end1.y, "L" + end2.x, end2.y, "A" + innerRadius, innerRadius, 0, largeArcFlag, 1, start2.x, start2.y, "L" + start1.x, start1.y + "Z"].join(",");
      } else {
        d = ["M" + start1.x, start1.y, "A" + outterRadius, outterRadius, 0, largeArcFlag, 1, end1.x, end1.y, "M" + end2.x, end2.y, "A" + innerRadius, innerRadius, 0, largeArcFlag, 0, start2.x, start2.y + "Z"].join(",");
      }

      return d;
    }
  }, {
    key: "domNodeToString",

    /**
     * turn a dom node to string
     * @param {DOM} domNode 
     */
    value: function domNodeToString(domNode) {
      var element = document.createElement("div");
      element.appendChild(domNode);
      return element.innerHTML;
    }
    /**
     * turn a string to dom node
     * @param {string} str 
     */

  }, {
    key: "strToDomNode",
    value: function strToDomNode(str) {
      var tmpDiv = document.createElement('div');
      tmpDiv.innerHTML = str.trim();
      var dom = tmpDiv.firstChild;
      return dom;
    }
  }, {
    key: "transShape",
    value: function transShape(t, tx, ty) {
      if (t.tagName !== 'path') {
        var hasPosi = false;

        if (t.getAttribute('x') || t.getAttribute('y')) {
          hasPosi = true;
          t.setAttribute('x', t.getAttribute('x') ? parseFloat(t.getAttribute('x')) + tx : tx);
          t.setAttribute('y', t.getAttribute('y') ? parseFloat(t.getAttribute('y')) + ty : ty);
        }

        if (t.getAttribute('x1') || t.getAttribute('y1') || t.getAttribute('x2') || t.getAttribute('y2')) {
          hasPosi = true;
          t.setAttribute('x1', t.getAttribute('x1') ? parseFloat(t.getAttribute('x1')) + tx : tx);
          t.setAttribute('x2', t.getAttribute('x2') ? parseFloat(t.getAttribute('x2')) + tx : tx);
          t.setAttribute('y1', t.getAttribute('y1') ? parseFloat(t.getAttribute('y1')) + ty : ty);
          t.setAttribute('y2', t.getAttribute('y2') ? parseFloat(t.getAttribute('y2')) + ty : ty);
        }

        if (t.getAttribute('cx') || t.getAttribute('cy')) {
          hasPosi = true;
          t.setAttribute('cx', t.getAttribute('cx') ? parseFloat(t.getAttribute('cx')) + tx : tx);
          t.setAttribute('cy', t.getAttribute('cy') ? parseFloat(t.getAttribute('cy')) + ty : ty);
        }

        if (!hasPosi) {
          if (t.tagName === 'circle') {
            t.setAttribute('cx', tx);
            t.setAttribute('cy', ty);
          } else {
            t.setAttribute('x', tx);
            t.setAttribute('y', ty);
          }
        }
      } else {
        if (t.getAttribute('d')) {
          var resultCmd = Util.setPathDValue(t.getAttribute('d'), false, tx, ty);
          t.setAttribute('d', resultCmd);
        }
      }
    }
  }, {
    key: "setPathDValue",
    value: function setPathDValue(d, reset) {
      var tx = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var ty = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var diffCmds = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : new Map();
      d = d.replace(/(?<=\d)\s(?=[mMlLhHvVcCsSqQtTaAzZ])/g, '').replace(/(?<=[mMlLhHvVcCsSqQtTaA])\s(?=(\d|[-+]))/g, '').replace(/\s/g, ',');
      var cmdRegExp = new RegExp(/[mMlLhHvVcCsSqQtTaAzZ][^mMlLhHvVcCsSqQtTaAzZ]*/g);
      var resultCmd = '';
      var cmds = d.match(cmdRegExp);

      if (cmds) {
        //get the position of the first move cmd if there is one
        var firstCmdName = cmds[0].substring(0, 1);
        var resetX = '0',
            resetY = '0';

        if (firstCmdName === 'm' || firstCmdName === 'M') {
          var firstCmdValues = cmds[0].substring(1).split(',');
          resetX = firstCmdValues[0];
          resetY = firstCmdValues[1];
        }

        for (var i = 0; i < cmds.length; i++) {
          var cmdName = cmds[i].substring(0, 1);
          var cmdValue = cmds[i].substring(1);
          resultCmd += cmdName;

          switch (cmdName) {
            case 'H':
              resultCmd = this.calNumTrans(resultCmd, diffCmds, i, cmdName, cmdValue, reset, resetX, tx);
              break;

            case 'h':
              resultCmd = this.calNumTrans(resultCmd, diffCmds, i, cmdName, cmdValue, reset, '0', 0);
              break;

            case 'V':
              resultCmd = this.calNumTrans(resultCmd, diffCmds, i, cmdName, cmdValue, reset, resetY, ty);
              break;

            case 'v':
              resultCmd = this.calNumTrans(resultCmd, diffCmds, i, cmdName, cmdValue, reset, '0', 0);
              break;

            case 'M':
            case 'L':
            case 'T':
            case 'C':
            case 'S':
            case 'Q':
              var nums = cmdValue.split(',');

              for (var ni = 0; ni < nums.length; ni++) {
                if (ni % 2 === 0) {
                  //x
                  resultCmd = this.calNumTrans(resultCmd, diffCmds, i, cmdName, nums[ni], reset, resetX, tx);
                } else {
                  //y
                  resultCmd = this.calNumTrans(resultCmd, diffCmds, i, cmdName, nums[ni], reset, resetY, ty);
                }

                if (ni !== nums.length - 1) {
                  resultCmd += ',';
                }
              }

              break;

            case 'm':
            case 'l':
            case 't':
            case 'c':
            case 's':
            case 'q':
              var nums2 = cmdValue.split(',');

              for (var _ni = 0; _ni < nums2.length; _ni++) {
                resultCmd = this.calNumTrans(resultCmd, diffCmds, i, cmdName, nums2[_ni], reset, '0', 0);

                if (_ni !== nums2.length - 1 && nums2[_ni] !== '') {
                  resultCmd += ',';
                }
              }

              break;

            case 'A':
              var anums = cmdValue.split(',');

              for (var _ni2 = 0; _ni2 < anums.length; _ni2++) {
                if (_ni2 === anums.length - 2) {
                  //x
                  resultCmd = this.calNumTrans(resultCmd, diffCmds, i, cmdName, anums[_ni2], reset, parseFloat(resetX) + 1, tx);
                  resultCmd += ',';
                } else if (_ni2 === anums.length - 1) {
                  //y
                  resultCmd = this.calNumTrans(resultCmd, diffCmds, i, cmdName, anums[_ni2], reset, parseFloat(resetY) + 1, ty);
                } else {
                  resultCmd += anums[_ni2] + ',';
                }
              }

              break;

            case 'a':
              var anums2 = cmdValue.split(',');

              for (var _ni3 = 0; _ni3 < anums2.length; _ni3++) {
                if (_ni3 === anums2.length - 2) {
                  //x
                  resultCmd = this.calNumTrans(resultCmd, diffCmds, i, cmdName, anums2[_ni3], reset, '1', 0);
                  resultCmd += ',';
                } else if (_ni3 === anums2.length - 1) {
                  //y
                  resultCmd = this.calNumTrans(resultCmd, diffCmds, i, cmdName, anums2[_ni3], reset, '1', 0);
                } else {
                  resultCmd += anums2[_ni3] + ',';
                }
              }

              break;

            case 'z':
            case 'Z':
              break;
          }
        }

        if (d.charAt(d.length - 1) === 'z' || d.charAt(d.length - 1) === 'Z') {
          resultCmd += 'Z';
        }
      }

      return resultCmd;
    }
  }, {
    key: "calNumTrans",
    value: function calNumTrans(resultCmd, diffCmds, currentCmdIdx, cmdName, cmdValue, reset, resetVal, tVal) {
      cmdName = cmdName.toLowerCase();

      if (reset) {
        if (typeof diffCmds.get(cmdName) !== 'undefined') {
          var diffCmdIdxs = diffCmds.get(cmdName);
          var flag = false;

          for (var j = 0; j < diffCmdIdxs.length; j++) {
            if (diffCmdIdxs[j].cmdIdx === currentCmdIdx) {
              resultCmd += resetVal;
              flag = true;
              break;
            }
          }

          if (!flag) {
            resultCmd += cmdValue;
          }
        } else {
          resultCmd += cmdValue;
        }
      } else {
        if (cmdValue.length > 0) {
          resultCmd += parseFloat(cmdValue) + tVal;
        }
      }

      return resultCmd;
    }
    /**
     * doing transition with path
     * @param {*} startD 
     * @param {*} endD 
     * @param {*} ratio 
     */

  }, {
    key: "calTransD",
    value: function calTransD(startD, endD, ratio, startDisD, endDisD) {
      startD = startD.replace(/(?<=\d)\s(?=[mMlLhHvVcCsSqQtTaAzZ])/g, '').replace(/(?<=[mMlLhHvVcCsSqQtTaA])\s(?=(\d|[-+]))/g, '').replace(/\s/g, ',');
      endD = endD.replace(/(?<=\d)\s(?=[mMlLhHvVcCsSqQtTaAzZ])/g, '').replace(/(?<=[mMlLhHvVcCsSqQtTaA])\s(?=(\d|[-+]))/g, '').replace(/\s/g, ',');
      var resultCmd = '';

      if (ratio === 0) {
        resultCmd = startD;
      } else if (ratio === 1) {
        resultCmd = endD;
      } else {
        for (var i = 0, len = startDisD.length; i < len; i++) {
          resultCmd += (i === 0 ? 'M' : 'L') + ((endDisD[i][0] - startDisD[i][0]) * ratio + startDisD[i][0]) + ',' + ((endDisD[i][1] - startDisD[i][1]) * ratio + startDisD[i][1]);
        }
      }

      if (startD.charAt(startD.length - 1) === 'z' || startD.charAt(startD.length - 1) === 'Z') {
        resultCmd += 'Z';
      }

      return resultCmd;
    }
    /** startAngle should smaller than endAngle
     * @param {number} fromStartAngle start state of start angle
     * @param {number} fromEndAngle start state of end angle
     * @param {number} toStartAngle end state of start angle
     * @param {number} toEndAngle end state of end angle
     * @param {number} ratio 0-1 float number
     * @param {Function<number,number,number>} interpolateFn customize interpolate function, input is (start, end, ratio), default is linear
     * @returns {Array<number>} [startAngle, endAngle] of given ratio
     */

  }, {
    key: "arcTransition",
    value: function arcTransition(fromStartAngle, fromEndAngle, toStartAngle, toEndAngle, ratio, interpolateFn) {
      var validAngle = function validAngle(s, e) {
        return e < s ? function () {
          throw 'startAngle should smaller than endAngle';
        }() : null;
      };

      validAngle(fromStartAngle, fromEndAngle);
      validAngle(toStartAngle, toEndAngle);

      var minimalAngle = function minimalAngle(s, e) {
        return e - Math.PI * 2 * Math.floor((e - s) / Math.PI / 2);
      }; // uniform angle domain within 2*PI


      fromEndAngle = minimalAngle(fromStartAngle, fromEndAngle);
      toStartAngle = minimalAngle(fromStartAngle, toStartAngle);
      toEndAngle = minimalAngle(toStartAngle, toEndAngle); // find the cloest domain

      toStartAngle -= Math.abs(toStartAngle - fromStartAngle) + Math.abs(toEndAngle - fromEndAngle) < 2 * Math.PI ? 0 : Math.PI * 2;
      toEndAngle = minimalAngle(toStartAngle, toEndAngle);

      var interpolate = interpolateFn || function (s, e, r) {
        return r * (e - s) + s;
      };

      return [interpolate(fromStartAngle, toStartAngle, ratio), interpolate(fromEndAngle, toEndAngle, ratio)];
    }
  }, {
    key: "findDiffCmds",
    value: function findDiffCmds(markStatus) {
      var result = new Map();
      markStatus.forEach(function (statusArr, markId) {
        var tmpDRecorder = [];

        for (var i = 0; i < statusArr.length; i++) {
          if (typeof statusArr[i] !== 'undefined') {
            tmpDRecorder.push(!statusArr[i].d ? 'm0,0' : statusArr[i].d);
          }
        }

        if (tmpDRecorder.length > 0) {
          Util.compareD(tmpDRecorder, result);
        }
      });
      return result;
    }
  }, {
    key: "compareD",
    value: function compareD(dArr, result) {
      var cmdRegExp = new RegExp(/[mlhvcsqta][^mlhvcsqtaz]*/g);
      var firstD = dArr[0];
      firstD = firstD.toLowerCase();
      firstD = firstD.replace(/(?<=\d)\s(?=[mlhvcsqtaz])/g, '').replace(/(?<=[mlhvcsqta])\s(?=(\d|[-+]))/g, '').replace(/\s/g, ',');
      var firstDCmds = firstD.match(cmdRegExp);

      for (var i = 1; i < dArr.length; i++) {
        var tmpD = dArr[i];
        tmpD = tmpD.toLowerCase();
        tmpD = tmpD.replace(/(?<=\d)\s(?=[mlhvcsqtaz])/g, '').replace(/(?<=[mlhvcsqta])\s(?=(\d|[-+]))/g, '').replace(/\s/g, ',');
        var tmpDCmds = tmpD.match(cmdRegExp);

        for (var j = 0; j < firstDCmds.length; j++) {
          if (typeof tmpDCmds[j] === 'undefined') {
            var cmdName = firstDCmds[j].substring(0, 1);

            if (typeof result.get(cmdName) === 'undefined') {
              result.set(cmdName, []);
            }

            var obj = {};
            obj.cmdIdx = j;
            obj.diffAttrIdxs = [];
            var firstDCmdValue = firstDCmds[j].substring(1);
            var firstDCmdValues = firstDCmdValue.split(',');

            for (var m = 0; m < firstDCmdValues.length; m++) {
              obj.diffAttrIdxs.push(m);
            }

            result.get(cmdName).push(obj);
          } else {
            var _cmdName = tmpDCmds[j].substring(0, 1);

            var tmpDCmdValue = tmpDCmds[j].substring(1);

            var _firstDCmdValue = firstDCmds[j].substring(1);

            if (tmpDCmdValue !== _firstDCmdValue) {
              if (typeof result.get(_cmdName) === 'undefined') {
                result.set(_cmdName, []);
              }

              var _obj = {};
              _obj.cmdIdx = j;
              _obj.diffAttrIdxs = [];
              var tmpDCmdValues = tmpDCmdValue.split(',');

              var _firstDCmdValues = _firstDCmdValue.split(',');

              for (var _m = 0; _m < tmpDCmdValues.length; _m++) {
                if (Math.floor(parseFloat(tmpDCmdValues[_m]) * 1000) !== Math.floor(parseFloat(_firstDCmdValues[_m]) * 1000)) {
                  _obj.diffAttrIdxs.push(_m);
                }
              } //check whether have already added this cmd


              var hasFlag = false;

              for (var _m2 = 0; _m2 < result.get(_cmdName).length; _m2++) {
                if (result.get(_cmdName)[_m2].cmdIdx === _obj.cmdIdx) {
                  hasFlag = true;
                  result.get(_cmdName)[_m2].diffAttrIdxs = [].concat(_toConsumableArray(new Set([].concat(_toConsumableArray(result.get(_cmdName)[_m2].diffAttrIdxs), _toConsumableArray(_obj.diffAttrIdxs)))));
                  break;
                }
              }

              if (!hasFlag) {
                result.get(_cmdName).push(_obj);
              }
            }
          }
        }
      }
    }
  }, {
    key: "getTransformAttrs",
    value: function getTransformAttrs(dom) {
      var tr = dom.getAttribute('transform');

      if (tr) {
        tr = tr.replace(/translate|scale|rotate|\s/g, function (m) {
          return m === ' ' ? '' : '@' + m;
        });
        tr = tr.replace(/(^@*)|(@*$)/g, '').split('@');
        var scaleStr = '',
            transStr = '';

        for (var i = 0; i < tr.length; i++) {
          if (tr[i].indexOf('translate') >= 0) {
            transStr = tr[i];
          } else if (tr[i].indexOf('scale') >= 0) {
            scaleStr = tr[i];
          }
        }

        var transPosiStr = ['0', '0'],
            scaleNumStr = '1';

        if (transStr !== '') {
          transPosiStr = transStr.replace(/translate\(| |\)/g, '').split(',');
        }

        if (scaleStr !== '') {
          scaleNumStr = scaleStr.replace(/scale\(| |\)/g, '');
        }

        return {
          transNums: [parseFloat(transPosiStr[0]), parseFloat(transPosiStr[1])],
          scaleNum: parseFloat(scaleNumStr)
        };
      }

      return {
        transNums: [0.0, 0.0],
        scaleNum: 1.0
      };
    }
    /**
     * check if a string contains html tag
     */

  }, {
    key: "checkHTML",
    value: function checkHTML(str) {
      var reg = /<[^>]+>/g;
      return reg.test(str);
    }
  }]);

  return Util;
}();

exports.Util = Util;
Util.colorNames = new Map([['aliceblue', '#f0f8ff'], ['antiquewhite', '#faebd7'], ['aqua', '#00ffff'], ['aquamarine', '#7fffd4'], ['azure', '#f0ffff'], ['beige', '#f5f5dc'], ['bisque', '#ffe4c4'], ['black', '#000000'], ['blanchedalmond', '#ffebcd'], ['blue', '#0000ff'], ['blueviolet', '#8a2be2'], ['brown', '#a52a2a'], ['burlywood', '#deb887'], ['cadetblue', '#5f9ea0'], ['chartreuse', '#7fff00'], ['chocolate', '#d2691e'], ['coral', '#ff7f50'], ['cornflowerblue', '#6495ed'], ['cornsilk', '#fff8dc'], ['crimson', '#dc143c'], ['cyan', '#00ffff'], ['darkblue', '#00008b'], ['darkcyan', '#008b8b'], ['darkgoldenrod', '#b8860b'], ['darkgray', '#a9a9a9'], ['darkgrey', '#a9a9a9'], ['darkgreen', '#006400'], ['darkkhaki', '#bdb76b'], ['darkmagenta', '#8b008b'], ['darkolivegreen', '#556b2f'], ['darkorange', '#ff8c00'], ['darkorchid', '#9932cc'], ['darkred', '#8b0000'], ['darksalmon', '#e9967a'], ['darkseagreen', '#8fbc8f'], ['darkslateblue', '#483d8b'], ['darkslategray', '#2f4f4f'], ['darkslategrey', '#2f4f4f'], ['darkturquoise', '#00ced1'], ['darkviolet', '#9400d3'], ['deeppink', '#ff1493'], ['deepskyblue', '#00bfff'], ['dimgray', '#696969'], ['dimgrey', '#696969'], ['dodgerblue', '#1e90ff'], ['firebrick', '#b22222'], ['floralwhite', '#fffaf0'], ['forestgreen', '#228b22'], ['fuchsia', '#ff00ff'], ['gainsboro', '#dcdcdc'], ['ghostwhite', '#f8f8ff'], ['gold', '#ffd700'], ['goldenrod', '#daa520'], ['gray', '#808080'], ['grey', '#808080'], ['green', '#008000'], ['greenyellow', '#adff2f'], ['honeydew', '#f0fff0'], ['hotpink', '#ff69b4'], ['indianred ', '#cd5c5c'], ['indigo  ', '#4b0082'], ['ivory', '#fffff0'], ['khaki', '#f0e68c'], ['lavender', '#e6e6fa'], ['lavenderblush', '#fff0f5'], ['lawngreen', '#7cfc00'], ['lemonchiffon', '#fffacd'], ['lightblue', '#add8e6'], ['lightcoral', '#f08080'], ['lightcyan', '#e0ffff'], ['lightgoldenrodyellow', '#fafad2'], ['lightgray', '#d3d3d3'], ['lightgrey', '#d3d3d3'], ['lightgreen', '#90ee90'], ['lightpink', '#ffb6c1'], ['lightsalmon', '#ffa07a'], ['lightseagreen', '#20b2aa'], ['lightskyblue', '#87cefa'], ['lightslategray', '#778899'], ['lightslategrey', '#778899'], ['lightsteelblue', '#b0c4de'], ['lightyellow', '#ffffe0'], ['lime', '#00ff00'], ['limegreen', '#32cd32'], ['linen', '#faf0e6'], ['magenta', '#ff00ff'], ['maroon', '#800000'], ['mediumaquamarine', '#66cdaa'], ['mediumblue', '#0000cd'], ['mediumorchid', '#ba55d3'], ['mediumpurple', '#9370db'], ['mediumseagreen', '#3cb371'], ['mediumslateblue', '#7b68ee'], ['mediumspringgreen', '#00fa9a'], ['mediumturquoise', '#48d1cc'], ['mediumvioletred', '#c71585'], ['midnightblue', '#191970'], ['mintcream', '#f5fffa'], ['mistyrose', '#ffe4e1'], ['moccasin', '#ffe4b5'], ['navajowhite', '#ffdead'], ['navy', '#000080'], ['oldlace', '#fdf5e6'], ['olive', '#808000'], ['olivedrab', '#6b8e23'], ['orange', '#ffa500'], ['orangered', '#ff4500'], ['orchid', '#da70d6'], ['palegoldenrod', '#eee8aa'], ['palegreen', '#98fb98'], ['paleturquoise', '#afeeee'], ['palevioletred', '#db7093'], ['papayawhip', '#ffefd5'], ['peachpuff', '#ffdab9'], ['peru', '#cd853f'], ['pink', '#ffc0cb'], ['plum', '#dda0dd'], ['powderblue', '#b0e0e6'], ['purple', '#800080'], ['rebeccapurple', '#663399'], ['red', '#ff0000'], ['rosybrown', '#bc8f8f'], ['royalblue', '#4169e1'], ['saddlebrown', '#8b4513'], ['salmon', '#fa8072'], ['sandybrown', '#f4a460'], ['seagreen', '#2e8b57'], ['seashell', '#fff5ee'], ['sienna', '#a0522d'], ['silver', '#c0c0c0'], ['skyblue', '#87ceeb'], ['slateblue', '#6a5acd'], ['slategray', '#708090'], ['slategrey', '#708090'], ['snow', '#fffafa'], ['springgreen', '#00ff7f'], ['steelblue', '#4682b4'], ['tan', '#d2b48c'], ['teal', '#008080'], ['thistle', '#d8bfd8'], ['tomato', '#ff6347'], ['turquoise', '#40e0d0'], ['violet', '#ee82ee'], ['wheat', '#f5deb3'], ['white', '#ffffff'], ['whitesmoke', '#f5f5f5'], ['yellow', '#ffff00'], ['yellowgreen', '#9acd32']]);

var Viewport =
/*#__PURE__*/
function () {
  function Viewport() {
    _classCallCheck(this, Viewport);

    this.chartWidth = 0;
    this.chartHeight = 0;
  }

  _createClass(Viewport, [{
    key: "setViewport",
    value: function setViewport(w, h) {
      this.chartWidth = w;
      this.chartHeight = h;
    }
  }]);

  return Viewport;
}();

exports.Viewport = Viewport;

/***/ })

/******/ });
});
//# sourceMappingURL=anichart.js.map