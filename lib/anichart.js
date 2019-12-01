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

// parameters extracted from https://easings.net/
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
  }, {
    key: "easeInSine",
    value: function easeInSine() {
      return [[[0.47], [0]], [[0.745], [0.715]]];
    }
  }, {
    key: "easeOutSine",
    value: function easeOutSine() {
      return [[[0.39], [0.575]], [[0.565], [1]]];
    }
  }, {
    key: "easeInOutSine",
    value: function easeInOutSine() {
      return [[[0.445], [0.05]], [[0.55], [0.95]]];
    }
  }, {
    key: "easeInQuad",
    value: function easeInQuad() {
      return [[[0.55], [0.085]], [[0.68], [0.53]]];
    }
  }, {
    key: "easeOutQuad",
    value: function easeOutQuad() {
      return [[[0.25], [0.46]], [[0.45], [0.94]]];
    }
  }, {
    key: "easeInOutQuad",
    value: function easeInOutQuad() {
      return [[[0.455], [0.03]], [[0.515], [0.955]]];
    }
  }, {
    key: "easeInCubic",
    value: function easeInCubic() {
      return [[[0.55], [0.055]], [[0.675], [0.19]]];
    }
  }, {
    key: "easeOutCubic",
    value: function easeOutCubic() {
      return [[[0.215], [0.61]], [[0.355], [1]]];
    }
  }, {
    key: "easeInOutCubic",
    value: function easeInOutCubic() {
      return [[[0.645], [0.045]], [[0.355], [1]]];
    }
  }, {
    key: "easeInQuart",
    value: function easeInQuart() {
      return [[[0.895], [0.03]], [[0.685], [0.22]]];
    }
  }, {
    key: "easeOutQuart",
    value: function easeOutQuart() {
      return [[[0.165], [0.84]], [[0.44], [1]]];
    }
  }, {
    key: "easeInOutQuart",
    value: function easeInOutQuart() {
      return [[[0.77], [0]], [[0.175], [1]]];
    }
  }, {
    key: "easeInQuint",
    value: function easeInQuint() {
      return [[[0.755], [0.05]], [[0.855], [0.06]]];
    }
  }, {
    key: "easeOutQuint",
    value: function easeOutQuint() {
      return [[[0.23], [1]], [[0.32], [1]]];
    }
  }, {
    key: "easeInOutQuint",
    value: function easeInOutQuint() {
      return [[[0.86], [0]], [[0.07], [1]]];
    }
  }, {
    key: "easeInExpo",
    value: function easeInExpo() {
      return [[[0.95], [0.05]], [[0.795], [0.035]]];
    }
  }, {
    key: "easeOutExpo",
    value: function easeOutExpo() {
      return [[[0.19], [1]], [[0.22], [1]]];
    }
  }, {
    key: "easeInOutExpo",
    value: function easeInOutExpo() {
      return [[[1], [0]], [[0], [1]]];
    }
  }, {
    key: "easeInCirc",
    value: function easeInCirc() {
      return [[[0.6], [0.04]], [[0.98], [0.335]]];
    }
  }, {
    key: "easeOutCirc",
    value: function easeOutCirc() {
      return [[[0.075], [0.82]], [[0.165], [1]]];
    }
  }, {
    key: "easeInOutCirc",
    value: function easeInOutCirc() {
      return [[[0.785], [0.135]], [[0.15], [0.86]]];
    }
  }, {
    key: "easeInBack",
    value: function easeInBack() {
      return [[[0.6], [-0.28]], [[0.735], [0.045]]];
    }
  }, {
    key: "easeOutBack",
    value: function easeOutBack() {
      return [[[0.175], [0.885]], [[0.32], [1.275]]];
    }
  }, {
    key: "easeInOutBack",
    value: function easeInOutBack() {
      return [[[0.68], [-0.55]], [[0.265], [1.55]]];
    }
  }]);

  return EasingFactory;
}();

exports.EasingFactory = EasingFactory;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lYXNpbmcudHMiXSwibmFtZXMiOlsiRWFzaW5nRmFjdG9yeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0lBSWFBLGE7Ozs7Ozs7Ozs2QkFDdUI7QUFDNUIsYUFBTyxDQUFDLENBQUMsQ0FBQyxDQUFELENBQUQsRUFBTSxDQUFDLENBQUQsQ0FBTixDQUFELEVBQWEsQ0FBQyxDQUFDLENBQUQsQ0FBRCxFQUFNLENBQUMsQ0FBRCxDQUFOLENBQWIsQ0FBUDtBQUNIOzs7aUNBRW1DO0FBQ2hDLGFBQU8sQ0FBQyxDQUFDLENBQUMsSUFBRCxDQUFELEVBQVMsQ0FBQyxDQUFELENBQVQsQ0FBRCxFQUFnQixDQUFDLENBQUMsS0FBRCxDQUFELEVBQVUsQ0FBQyxLQUFELENBQVYsQ0FBaEIsQ0FBUDtBQUNIOzs7a0NBRW9DO0FBQ2pDLGFBQU8sQ0FBQyxDQUFDLENBQUMsSUFBRCxDQUFELEVBQVMsQ0FBQyxLQUFELENBQVQsQ0FBRCxFQUFvQixDQUFDLENBQUMsS0FBRCxDQUFELEVBQVUsQ0FBQyxDQUFELENBQVYsQ0FBcEIsQ0FBUDtBQUNIOzs7b0NBRXNDO0FBQ25DLGFBQU8sQ0FBQyxDQUFDLENBQUMsS0FBRCxDQUFELEVBQVUsQ0FBQyxJQUFELENBQVYsQ0FBRCxFQUFvQixDQUFDLENBQUMsSUFBRCxDQUFELEVBQVMsQ0FBQyxJQUFELENBQVQsQ0FBcEIsQ0FBUDtBQUNIOzs7aUNBRW1DO0FBQ2hDLGFBQU8sQ0FBQyxDQUFDLENBQUMsSUFBRCxDQUFELEVBQVMsQ0FBQyxLQUFELENBQVQsQ0FBRCxFQUFvQixDQUFDLENBQUMsSUFBRCxDQUFELEVBQVMsQ0FBQyxJQUFELENBQVQsQ0FBcEIsQ0FBUDtBQUNIOzs7a0NBRW9DO0FBQ2pDLGFBQU8sQ0FBQyxDQUFDLENBQUMsSUFBRCxDQUFELEVBQVMsQ0FBQyxJQUFELENBQVQsQ0FBRCxFQUFtQixDQUFDLENBQUMsSUFBRCxDQUFELEVBQVMsQ0FBQyxJQUFELENBQVQsQ0FBbkIsQ0FBUDtB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QUFDLElBQUQsQ0FBRCxFQUFTLENBQUMsS0FBRCxDQUFULENBQWxCLENBQVA7QUFDSDs7O2tDQUVvQztBQUNqQyxhQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUQsQ0FBRCxFQUFVLENBQUMsSUFBRCxDQUFWLENBQUQsRUFBb0IsQ0FBQyxDQUFDLEtBQUQsQ0FBRCxFQUFVLENBQUMsQ0FBRCxDQUFWLENBQXBCLENBQVA7QUFDSDs7O29DQUVzQztBQUNuQyxhQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUQsQ0FBRCxFQUFVLENBQUMsS0FBRCxDQUFWLENBQUQsRUFBcUIsQ0FBQyxDQUFDLElBQUQsQ0FBRCxFQUFTLENBQUMsSUFBRCxDQUFULENBQXJCLENBQVA7QUFDSDs7O2lDQUVtQztBQUNoQyxhQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUQsQ0FBRCxFQUFRLENBQUMsQ0FBQyxJQUFGLENBQVIsQ0FBRCxFQUFtQixDQUFDLENBQUMsS0FBRCxDQUFELEVBQVUsQ0FBQyxLQUFELENBQVYsQ0FBbkIsQ0FBUDtBQUNIOzs7a0NBRW9DO0FBQ2pDLGFBQU8sQ0FBQyxDQUFDLENBQUMsS0FBRCxDQUFELEVBQVUsQ0FBQyxLQUFELENBQVYsQ0FBRCxFQUFxQixDQUFDLENBQUMsSUFBRCxDQUFELEVBQVMsQ0FBQyxLQUFELENBQVQsQ0FBckIsQ0FBUDtBQUNIOzs7b0NBRXNDO0FBQ25DLGFBQU8sQ0FBQyxDQUFDLENBQUMsSUFBRCxDQUFELEVBQVMsQ0FBQyxDQUFDLElBQUYsQ0FBVCxDQUFELEVBQW9CLENBQUMsQ0FBQyxLQUFELENBQUQsRUFBVSxDQUFDLElBQUQsQ0FBVixDQUFwQixDQUFQO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYXJhbWV0ZXJzIGV4dHJhY3RlZCBmcm9tIGh0dHBzOi8vZWFzaW5ncy5uZXQvXG5cbmV4cG9ydCB0eXBlIEVhc2luZ0Z1bmN0aW9uID0gbnVtYmVyW11bXVtdXG5cbmV4cG9ydCBjbGFzcyBFYXNpbmdGYWN0b3J5IHtcbiAgICBzdGF0aWMgbGluZWFyKCk6IEVhc2luZ0Z1bmN0aW9uIHtcbiAgICAgICAgcmV0dXJuIFtbWzFdLCBbMV1dLCBbWzBdLCBbMF1dXVxuICAgIH1cblxuICAgIHN0YXRpYyBlYXNlSW5TaW5lKCk6IEVhc2luZ0Z1bmN0aW9uIHtcbiAgICAgICAgcmV0dXJuIFtbWzAuNDddLCBbMF1dLCBbWzAuNzQ1XSwgWzAuNzE1XV1dXG4gICAgfVxuXG4gICAgc3RhdGljIGVhc2VPdXRTaW5lKCk6IEVhc2luZ0Z1bmN0aW9uIHtcbiAgICAgICAgcmV0dXJuIFtbWzAuMzldLCBbMC41NzVdXSwgW1swLjU2NV0sIFsxXV1dXG4gICAgfVxuXG4gICAgc3RhdGljIGVhc2VJbk91dFNpbmUoKTogRWFzaW5nRnVuY3Rpb24ge1xuICAgICAgICByZXR1cm4gW1tbMC40NDVdLCBbMC4wNV1dLCBbWzAuNTVdLCBbMC45NV1dXVxuICAgIH1cblxuICAgIHN0YXRpYyBlYXNlSW5RdWFkKCk6IEVhc2luZ0Z1bmN0aW9uIHtcbiAgICAgICAgcmV0dXJuIFtbWzAuNTVdLCBbMC4wODVdXSwgW1swLjY4XSwgWzAuNTNdXV1cbiAgICB9XG5cbiAgICBzdGF0aWMgZWFzZU91dFF1YWQoKTogRWFzaW5nRnVuY3Rpb24ge1xuICAgICAgICByZXR1cm4gW1tbMC4yNV0sIFswLjQ2XV0sIFtbMC40NV0sIFswLjk0XV1dXG4gICAgfVxuXG4gICAgc3RhdGljIGVhc2VJbk91dFF1YWQoKTogRWFzaW5nRnVuY3Rpb24ge1xuICAgICAgICByZXR1cm4gW1tbMC40NTVdLCBbMC4wM11dLCBbWzAuNTE1XSwgWzAuOTU1XV1dXG4gICAgfVxuXG4gICAgc3RhdGljIGVhc2VJbkN1YmljKCk6IEVhc2luZ0Z1bmN0aW9uIHtcbiAgICAgICAgcmV0dXJuIFtbWzAuNTVdLCBbMC4wNTVdXSwgW1swLjY3NV0sIFswLjE5XV1dXG4gICAgfVxuXG4gICAgc3RhdGljIGVhc2VPdXRDdWJpYygpOiBFYXNpbmdGdW5jdGlvbiB7XG4gICAgICAgIHJldHVybiBbW1swLjIxNV0sIFswLjYxXV0sIFtbMC4zNTVdLCBbMV1dXVxuICAgIH1cblxuICAgIHN0YXRpYyBlYXNlSW5PdXRDdWJpYygpOiBFYXNpbmdGdW5jdGlvbiB7XG4gICAgICAgIHJldHVybiBbW1swLjY0NV0sIFswLjA0NV1dLCBbWzAuMzU1XSwgWzFdXV1cbiAgICB9XG5cbiAgICBzdGF0aWMgZWFzZUluUXVhcnQoKTogRWFzaW5nRnVuY3Rpb24ge1xuICAgICAgICByZXR1cm4gW1tbMC44OTVdLCBbMC4wM11dLCBbWzAuNjg1XSwgWzAuMjJdXV1cbiAgICB9XG5cbiAgICBzdGF0aWMgZWFzZU91dFF1YXJ0KCk6IEVhc2luZ0Z1bmN0aW9uIHtcbiAgICAgICAgcmV0dXJuIFtbWzAuMTY1XSwgWzAuODRdXSwgW1swLjQ0XSwgWzFdXV1cbiAgICB9XG5cbiAgICBzdGF0aWMgZWFzZUluT3V0UXVhcnQoKTogRWFzaW5nRnVuY3Rpb24ge1xuICAgICAgICByZXR1cm4gW1tbMC43N10sIFswXV0sIFtbMC4xNzVdLCBbMV1dXVxuICAgIH1cblxuICAgIHN0YXRpYyBlYXNlSW5RdWludCgpOiBFYXNpbmdGdW5jdGlvbiB7XG4gICAgICAgIHJldHVybiBbW1swLjc1NV0sIFswLjA1XV0sIFtbMC44NTVdLCBbMC4wNl1dXVxuICAgIH1cblxuICAgIHN0YXRpYyBlYXNlT3V0UXVpbnQoKTogRWFzaW5nRnVuY3Rpb24ge1xuICAgICAgICByZXR1cm4gW1tbMC4yM10sIFsxXV0sIFtbMC4zMl0sIFsxXV1dXG4gICAgfVxuXG4gICAgc3RhdGljIGVhc2VJbk91dFF1aW50KCk6IEVhc2luZ0Z1bmN0aW9uIHtcbiAgICAgICAgcmV0dXJuIFtbWzAuODZdLCBbMF1dLCBbWzAuMDddLCBbMV1dXVxuICAgIH1cblxuICAgIHN0YXRpYyBlYXNlSW5FeHBvKCk6IEVhc2luZ0Z1bmN0aW9uIHtcbiAgICAgICAgcmV0dXJuIFtbWzAuOTVdLCBbMC4wNV1dLCBbWzAuNzk1XSwgWzAuMDM1XV1dXG4gICAgfVxuXG4gICAgc3RhdGljIGVhc2VPdXRFeHBvKCk6IEVhc2luZ0Z1bmN0aW9uIHtcbiAgICAgICAgcmV0dXJuIFtbWzAuMTldLCBbMV1dLCBbWzAuMjJdLCBbMV1dXVxuICAgIH1cblxuICAgIHN0YXRpYyBlYXNlSW5PdXRFeHBvKCk6IEVhc2luZ0Z1bmN0aW9uIHtcbiAgICAgICAgcmV0dXJuIFtbWzFdLCBbMF1dLCBbWzBdLCBbMV1dXVxuICAgIH1cblxuICAgIHN0YXRpYyBlYXNlSW5DaXJjKCk6IEVhc2luZ0Z1bmN0aW9uIHtcbiAgICAgICAgcmV0dXJuIFtbWzAuNl0sIFswLjA0XV0sIFtbMC45OF0sIFswLjMzNV1dXVxuICAgIH1cblxuICAgIHN0YXRpYyBlYXNlT3V0Q2lyYygpOiBFYXNpbmdGdW5jdGlvbiB7XG4gICAgICAgIHJldHVybiBbW1swLjA3NV0sIFswLjgyXV0sIFtbMC4xNjVdLCBbMV1dXVxuICAgIH1cblxuICAgIHN0YXRpYyBlYXNlSW5PdXRDaXJjKCk6IEVhc2luZ0Z1bmN0aW9uIHtcbiAgICAgICAgcmV0dXJuIFtbWzAuNzg1XSwgWzAuMTM1XV0sIFtbMC4xNV0sIFswLjg2XV1dXG4gICAgfVxuXG4gICAgc3RhdGljIGVhc2VJbkJhY2soKTogRWFzaW5nRnVuY3Rpb24ge1xuICAgICAgICByZXR1cm4gW1tbMC42XSwgWy0wLjI4XV0sIFtbMC43MzVdLCBbMC4wNDVdXV1cbiAgICB9XG5cbiAgICBzdGF0aWMgZWFzZU91dEJhY2soKTogRWFzaW5nRnVuY3Rpb24ge1xuICAgICAgICByZXR1cm4gW1tbMC4xNzVdLCBbMC44ODVdXSwgW1swLjMyXSwgWzEuMjc1XV1dXG4gICAgfVxuXG4gICAgc3RhdGljIGVhc2VJbk91dEJhY2soKTogRWFzaW5nRnVuY3Rpb24ge1xuICAgICAgICByZXR1cm4gW1tbMC42OF0sIFstMC41NV1dLCBbWzAuMjY1XSwgWzEuNTVdXV1cbiAgICB9XG59Il19

/***/ }),

/***/ "./node_modules/jsmovin/bin/helper.js":
/*!********************************************!*\
  !*** ./node_modules/jsmovin/bin/helper.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateBaseTransform = calculateBaseTransform;
exports.getBoundingBox = getBoundingBox;
exports.getLeafNodes = getLeafNodes;
exports.getBaselineHeight = getBaselineHeight;
exports.encodeLineCap = encodeLineCap;
exports.encodeLineJoin = encodeLineJoin;

function calculateBaseTransform(dom, root) {
  // https://github.com/dagrejs/dagre-d3/issues/202
  return root.getScreenCTM().inverse().multiply(dom.getScreenCTM());
}

function getBoundingBox(dom) {
  var svgRoot = dom;

  while (true) {
    if (svgRoot.parentElement instanceof SVGGraphicsElement) {
      svgRoot = svgRoot.parentElement;
    } else {
      break;
    }
  }

  var baseBox = calculateBaseTransform(dom, svgRoot);
  var refBBox = dom.getBBox();
  var coordinate = [baseBox.e + refBBox.x, baseBox.f + refBBox.y, refBBox.width + 1, refBBox.height + 1];
  return coordinate;
}

function getLeafNodes(master) {
  // https://stackoverflow.com/questions/22289391/how-to-create-an-array-of-leaf-nodes-of-an-html-dom-using-javascript
  var nodes = Array.prototype.slice.call(master.getElementsByTagName("*"), 0);
  var leafNodes = nodes.filter(function (elem) {
    if (elem.hasChildNodes()) {
      // see if any of the child nodes are elements
      for (var i = 0; i < elem.childNodes.length; i++) {
        if (elem.childNodes[i].nodeType == 1) {
          // there is a child element, so return false to not include
          // this parent element
          return false;
        }
      }
    }

    return true;
  });
  return leafNodes;
}

function getBaselineHeight(dom) {
  var canvas = document.createElement('canvas');
  var ctx = canvas.getContext('2d');
  var computedStyle = getComputedStyle(dom);
  var fontSettings = computedStyle.font;
  ctx.font = fontSettings;
  var textMetrix = ctx.measureText('ypfgj█');
  return textMetrix.actualBoundingBoxDescent || 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9oZWxwZXIudHMiXSwibmFtZXMiOlsiY2FsY3VsYXRlQmFzZVRyYW5zZm9ybSIsImRvbSIsInJvb3QiLCJnZXRTY3JlZW5DVE0iLCJpbnZlcnNlIiwibXVsdGlwbHkiLCJnZXRCb3VuZGluZ0JveCIsInN2Z1Jvb3QiLCJwYXJlbnRFbGVtZW50IiwiU1ZHR3JhcGhpY3NFbGVtZW50IiwiYmFzZUJveCIsInJlZkJCb3giLCJnZXRCQm94IiwiY29vcmRpbmF0ZSIsImUiLCJ4IiwiZiIsInkiLCJ3aWR0aCIsImhlaWdodCIsImdldExlYWZOb2RlcyIsIm1hc3RlciIsIm5vZGVzIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJzbGljZSIsImNhbGwiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImxlYWZOb2RlcyIsImZpbHRlciIsImVsZW0iLCJoYXNDaGlsZE5vZGVzIiwiaSIsImNoaWxkTm9kZXMiLCJsZW5ndGgiLCJub2RlVHlwZSIsImdldEJhc2VsaW5lSGVpZ2h0IiwiY2FudmFzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY3R4IiwiZ2V0Q29udGV4dCIsImNvbXB1dGVkU3R5bGUiLCJnZXRDb21wdXRlZFN0eWxlIiwiZm9udFNldHRpbmdzIiwiZm9udCIsInRleHRNZXRyaXgiLCJtZWFzdXJlVGV4dCIsImFjdHVhbEJvdW5kaW5nQm94RGVzY2VudCIsImVuY29kZUxpbmVDYXAiLCJ0eXBlIiwiZW5jb2RlTGluZUpvaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFPLFNBQVNBLHNCQUFULENBQWdDQyxHQUFoQyxFQUF5REMsSUFBekQsRUFBbUY7QUFDdEY7QUFFQSxTQUFPQSxJQUFJLENBQUNDLFlBQUwsR0FBcUJDLE9BQXJCLEdBQStCQyxRQUEvQixDQUF3Q0osR0FBRyxDQUFDRSxZQUFKLEVBQXhDLENBQVA7QUFDSDs7QUFFTSxTQUFTRyxjQUFULENBQXdCTCxHQUF4QixFQUFpRDtBQUNwRCxNQUFJTSxPQUEyQixHQUFHTixHQUFsQzs7QUFDQSxTQUFPLElBQVAsRUFBYTtBQUNULFFBQUlNLE9BQU8sQ0FBQ0MsYUFBUixZQUFpQ0Msa0JBQXJDLEVBQXlEO0FBQ3JERixNQUFBQSxPQUFPLEdBQUdBLE9BQU8sQ0FBQ0MsYUFBbEI7QUFDSCxLQUZELE1BRU87QUFDSDtBQUNIO0FBQ0o7O0FBQ0QsTUFBTUUsT0FBTyxHQUFHVixzQkFBc0IsQ0FBQ0MsR0FBRCxFQUFNTSxPQUFOLENBQXRDO0FBQ0EsTUFBTUksT0FBTyxHQUFHVixHQUFHLENBQUNXLE9BQUosRUFBaEI7QUFDQSxNQUFNQyxVQUE0QyxHQUFHLENBQUNILE9BQU8sQ0FBQ0ksQ0FBUixHQUFZSCxPQUFPLENBQUNJLENBQXJCLEVBQXdCTCxPQUFPLENBQUNNLENBQVIsR0FBWUwsT0FBTyxDQUFDTSxDQUE1QyxFQUErQ04sT0FBTyxDQUFDTyxLQUFSLEdBQWdCLENBQS9ELEVBQWtFUCxPQUFPLENBQUNRLE1BQVIsR0FBaUIsQ0FBbkYsQ0FBckQ7QUFDQSxTQUFPTixVQUFQO0FBQ0g7O0FBRU0sU0FBU08sWUFBVCxDQUFzQkMsTUFBdEIsRUFBa0Q7QUFDckQ7QUFFQSxNQUFJQyxLQUFLLEdBQUdDLEtBQUssQ0FBQ0MsU0FBTixDQUFnQkMsS0FBaEIsQ0FBc0JDLElBQXRCLENBQTJCTCxNQUFNLENBQUNNLG9CQUFQLENBQTRCLEdBQTVCLENBQTNCLEVBQTZELENBQTdELENBQVo7QUFDQSxNQUFJQyxTQUFTLEdBQUdOLEtBQUssQ0FBQ08sTUFBTixDQUFhLFVBQVVDLElBQVYsRUFBZ0I7QUFDekMsUUFBSUEsSUFBSSxDQUFDQyxhQUFMLEVBQUosRUFBMEI7QUFDdEI7QUFDQSxXQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdGLElBQUksQ0FBQ0csVUFBTCxDQUFnQkMsTUFBcEMsRUFBNENGLENBQUMsRUFBN0MsRUFBaUQ7QUFDN0MsWUFBSUYsSUFBSSxDQUFDRyxVQUFMLENBQWdCRCxDQUFoQixFQUFtQkcsUUFBbkIsSUFBK0IsQ0FBbkMsRUFBc0M7QUFDbEM7QUFDQTtBQUNBLGlCQUFPLEtBQVA7QUFDSDtBQUNKO0FBQ0o7O0FBQ0QsV0FBTyxJQUFQO0FBQ0gsR0FaZSxDQUFoQjtBQWFBLFNBQU9QLFNBQVA7QUFDSDs7QUFFTSxTQUFTUSxpQkFBVCxDQUEyQm5DLEdBQTNCLEVBQWdEO0FBQ25ELE1BQU1vQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUFmO0FBQ0EsTUFBTUMsR0FBRyxHQUFHSCxNQUFNLENBQUNJLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBWjtBQUNBLE1BQU1DLGFBQWEsR0FBR0MsZ0JBQWdCLENBQUMxQyxHQUFELENBQXRDO0FBQ0EsTUFBTTJDLFlBQVksR0FBR0YsYUFBYSxDQUFDRyxJQUFuQztBQUVBTCxFQUFBQSxHQUFHLENBQUNLLElBQUosR0FBV0QsWUFBWDtBQUNBLE1BQU1FLFVBQVUsR0FBR04sR0FBRyxDQUFDTyxXQUFKLENBQWdCLFFBQWhCLENBQW5CO0FBQ0EsU0FBT0QsVUFBVSxDQUFDRSx3QkFBWCxJQUF1QyxDQUE5QztBQUNIOztBQUVNLFNBQVNDLGFBQVQsQ0FBdUJDLElBQXZCLEVBQXFEO0FBQ3hELFVBQVFBLElBQVI7QUFDSSxTQUFLLFFBQUw7QUFDSSxhQUFPLENBQVA7O0FBQ0osU0FBSyxNQUFMO0FBQ0ksYUFBTyxDQUFQOztBQUNKO0FBQ0ksYUFBTyxDQUFQO0FBTlI7QUFRSDs7QUFFTSxTQUFTQyxjQUFULENBQXdCRCxJQUF4QixFQUFzRDtBQUN6RCxVQUFRQSxJQUFSO0FBQ0ksU0FBSyxPQUFMO0FBQ0ksYUFBTyxDQUFQOztBQUNKLFNBQUssT0FBTDtBQUNJLGFBQU8sQ0FBUDs7QUFDSjtBQUNJLGFBQU8sQ0FBUDtBQU5SO0FBUUgiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlQmFzZVRyYW5zZm9ybShkb206IFNWR0dyYXBoaWNzRWxlbWVudCwgcm9vdDogU1ZHR3JhcGhpY3NFbGVtZW50KSB7XG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2RhZ3JlanMvZGFncmUtZDMvaXNzdWVzLzIwMlxuXG4gICAgcmV0dXJuIHJvb3QuZ2V0U2NyZWVuQ1RNKCkhLmludmVyc2UoKS5tdWx0aXBseShkb20uZ2V0U2NyZWVuQ1RNKCkhKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Qm91bmRpbmdCb3goZG9tOiBTVkdHcmFwaGljc0VsZW1lbnQpIHtcbiAgICBsZXQgc3ZnUm9vdDogU1ZHR3JhcGhpY3NFbGVtZW50ID0gZG9tXG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgaWYgKHN2Z1Jvb3QucGFyZW50RWxlbWVudCBpbnN0YW5jZW9mIFNWR0dyYXBoaWNzRWxlbWVudCkge1xuICAgICAgICAgICAgc3ZnUm9vdCA9IHN2Z1Jvb3QucGFyZW50RWxlbWVudFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBiYXNlQm94ID0gY2FsY3VsYXRlQmFzZVRyYW5zZm9ybShkb20sIHN2Z1Jvb3QpXG4gICAgY29uc3QgcmVmQkJveCA9IGRvbS5nZXRCQm94KClcbiAgICBjb25zdCBjb29yZGluYXRlOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXSA9IFtiYXNlQm94LmUgKyByZWZCQm94LngsIGJhc2VCb3guZiArIHJlZkJCb3gueSwgcmVmQkJveC53aWR0aCArIDEsIHJlZkJCb3guaGVpZ2h0ICsgMV1cbiAgICByZXR1cm4gY29vcmRpbmF0ZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGVhZk5vZGVzKG1hc3RlcjogU1ZHR3JhcGhpY3NFbGVtZW50KSB7XG4gICAgLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjIyODkzOTEvaG93LXRvLWNyZWF0ZS1hbi1hcnJheS1vZi1sZWFmLW5vZGVzLW9mLWFuLWh0bWwtZG9tLXVzaW5nLWphdmFzY3JpcHRcblxuICAgIHZhciBub2RlcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKG1hc3Rlci5nZXRFbGVtZW50c0J5VGFnTmFtZShcIipcIiksIDApO1xuICAgIHZhciBsZWFmTm9kZXMgPSBub2Rlcy5maWx0ZXIoZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgaWYgKGVsZW0uaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICAgICAgICAvLyBzZWUgaWYgYW55IG9mIHRoZSBjaGlsZCBub2RlcyBhcmUgZWxlbWVudHNcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWxlbS5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW0uY2hpbGROb2Rlc1tpXS5ub2RlVHlwZSA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZXJlIGlzIGEgY2hpbGQgZWxlbWVudCwgc28gcmV0dXJuIGZhbHNlIHRvIG5vdCBpbmNsdWRlXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgcGFyZW50IGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgICByZXR1cm4gbGVhZk5vZGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QmFzZWxpbmVIZWlnaHQoZG9tOiBTVkdUZXh0RWxlbWVudCkge1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJykhXG4gICAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZG9tKVxuICAgIGNvbnN0IGZvbnRTZXR0aW5ncyA9IGNvbXB1dGVkU3R5bGUuZm9udFxuXG4gICAgY3R4LmZvbnQgPSBmb250U2V0dGluZ3NcbiAgICBjb25zdCB0ZXh0TWV0cml4ID0gY3R4Lm1lYXN1cmVUZXh0KCd5cGZnauKWiCcpXG4gICAgcmV0dXJuIHRleHRNZXRyaXguYWN0dWFsQm91bmRpbmdCb3hEZXNjZW50IHx8IDBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVuY29kZUxpbmVDYXAodHlwZT86IHN0cmluZyB8IG51bGwpOiBudW1iZXIge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdzcXVhcmUnOlxuICAgICAgICAgICAgcmV0dXJuIDNcbiAgICAgICAgY2FzZSAnYnV0dCc6XG4gICAgICAgICAgICByZXR1cm4gMVxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIDJcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbmNvZGVMaW5lSm9pbih0eXBlPzogc3RyaW5nIHwgbnVsbCk6IG51bWJlciB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ21pdGVyJzpcbiAgICAgICAgICAgIHJldHVybiAxXG4gICAgICAgIGNhc2UgJ2JldmVsJzpcbiAgICAgICAgICAgIHJldHVybiAzXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gMlxuICAgIH1cbn0iXX0=

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
Object.defineProperty(exports, "PathMaker", {
  enumerable: true,
  get: function get() {
    return _path.PathMaker;
  }
});
exports.MaskType = exports["default"] = void 0;

var _layer = __webpack_require__(/*! ./layer */ "./node_modules/jsmovin/bin/layer.js");

var _easing = __webpack_require__(/*! ./easing */ "./node_modules/jsmovin/bin/easing.js");

var _path = __webpack_require__(/*! ./path */ "./node_modules/jsmovin/bin/path.js");

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
     * add a simple graphical layer
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

      this.root.layers.splice(0, 0, layer.root);
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
      return maskLayer;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9qc21vdmluLnRzIl0sIm5hbWVzIjpbIkpTTW92aW4iLCJmcHMiLCJ3aWR0aCIsImhlaWdodCIsInJvb3QiLCJmciIsInciLCJoIiwiZGRkIiwibGF5ZXJzIiwiYXNzZXRzIiwiZm9udHMiLCJsaXN0IiwiaXAiLCJvcCIsImRvbU9yTGF5ZXIiLCJsYXllciIsIlNWR0dyYXBoaWNzRWxlbWVudCIsIkxheWVyRmFjdG9yeSIsImhpZXJhcmNoeSIsInNwbGljZSIsIm1hc2tPckRvbSIsImxheWVyUmVmT3JJbmRleCIsIm1hc2tUeXBlIiwiTWFza1R5cGUiLCJBbHBoYSIsImxheWVyUmVmIiwibGF5ZXJJbmRleCIsIkpTTW92aW5MYXllciIsImluZGV4T2YiLCJ0dCIsIkVycm9yIiwibWFza0xheWVyIiwibWF4VGltZSIsInJlZHVjZSIsInAiLCJ2IiwiZm9yRWFjaCIsInVuaWZvcm0iLCJKU09OIiwicGFyc2UiLCJ0b0pTT04iLCJzdHJpbmdpZnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUErSkE7O0FBQ0E7Ozs7Ozs7Ozs7SUE5SnFCQSxPOzs7QUFHakI7Ozs7O0FBS0EscUJBQXlFO0FBQUEsUUFBN0RDLEdBQTZELHVFQUEvQyxFQUErQztBQUFBLFFBQTNDQyxLQUEyQyx1RUFBM0IsR0FBMkI7QUFBQSxRQUF0QkMsTUFBc0IsdUVBQUwsR0FBSzs7QUFBQTs7QUFBQTs7QUFDckUsU0FBS0MsSUFBTCxHQUFZO0FBQ1JDLE1BQUFBLEVBQUUsRUFBRUosR0FESTtBQUVSSyxNQUFBQSxDQUFDLEVBQUVKLEtBRks7QUFHUkssTUFBQUEsQ0FBQyxFQUFFSixNQUhLO0FBSVJLLE1BQUFBLEdBQUcsRUFBRSxDQUpHO0FBS1JDLE1BQUFBLE1BQU0sRUFBRSxFQUxBO0FBTVJDLE1BQUFBLE1BQU0sRUFBRSxFQU5BO0FBT1JDLE1BQUFBLEtBQUssRUFBRTtBQUNIQyxRQUFBQSxJQUFJLEVBQUU7QUFESCxPQVBDO0FBVVJD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QVVLLE1BQVYsQ0FBa0J5QixNQUFsQixDQUF5QixVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxlQUFVRCxDQUFDLEdBQUdDLENBQUMsQ0FBQ3RCLEVBQU4sR0FBWXNCLENBQUMsQ0FBQ3RCLEVBQWQsR0FBb0JxQixDQUE5QjtBQUFBLE9BQXpCLEVBQTBELENBQTFELENBQWQ7QUFDQSxXQUFLL0IsSUFBTCxDQUFVVSxFQUFWLEdBQWVtQixPQUFmO0FBQ0EsV0FBSzdCLElBQUwsQ0FBVUssTUFBVixDQUFrQjRCLE9BQWxCLENBQTBCLFVBQUFyQixLQUFLO0FBQUEsZUFBSUEsS0FBSyxDQUFDRixFQUFOLEdBQVdtQixPQUFmO0FBQUEsT0FBL0I7QUFDSDtBQUVEOzs7Ozs7K0JBR1c7QUFDUCxXQUFLSyxPQUFMO0FBQ0EsYUFBT0MsSUFBSSxDQUFDQyxLQUFMLENBQVcsS0FBS0MsTUFBTCxFQUFYLENBQVA7QUFDSDtBQUVEOzs7Ozs7NkJBR1M7QUFDTCxXQUFLSCxPQUFMO0FBQ0EsYUFBT0MsSUFBSSxDQUFDRyxTQUFMLENBQWUsS0FBS3RDLElBQXBCLENBQVA7QUFDSDs7Ozs7OztJQU1Pb0IsUTs7O1dBQUFBLFE7QUFBQUEsRUFBQUEsUSxDQUFBQSxRO0FBQUFBLEVBQUFBLFEsQ0FBQUEsUTtBQUFBQSxFQUFBQSxRLENBQUFBLFE7QUFBQUEsRUFBQUEsUSxDQUFBQSxRO0dBQUFBLFEsd0JBQUFBLFEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBbmltYXRpb24sIFNoYXBlTGF5ZXIgfSBmcm9tIFwiLi9hbmltYXRpb25cIjtcbmltcG9ydCB7IEpTTW92aW5MYXllciwgTGF5ZXJGYWN0b3J5IH0gZnJvbSAnLi9sYXllcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSlNNb3ZpbiB7XG4gICAgcHJpdmF0ZSByb290OiBBbmltYXRpb247XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gZnBzIG51bWJlciBvZiBmcmFtZXMgcGVyIHNlY29uZFxuICAgICAqIEBwYXJhbSB3aWR0aCB3aWR0aCBvZiB2aWV3cG9ydCAocHgpXG4gICAgICogQHBhcmFtIGhlaWdodCBoZWlnaHQgb2Ygdmlld3BvcnQgKHB4KVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGZwczogbnVtYmVyID0gMzAsIHdpZHRoOiBudW1iZXIgPSA4MDAsIGhlaWdodDogbnVtYmVyID0gNjAwKSB7XG4gICAgICAgIHRoaXMucm9vdCA9IHtcbiAgICAgICAgICAgIGZyOiBmcHMsXG4gICAgICAgICAgICB3OiB3aWR0aCxcbiAgICAgICAgICAgIGg6IGhlaWdodCxcbiAgICAgICAgICAgIGRkZDogMCxcbiAgICAgICAgICAgIGxheWVyczogW10sXG4gICAgICAgICAgICBhc3NldHM6IFtdLFxuICAgICAgICAgICAgZm9udHM6IHtcbiAgICAgICAgICAgICAgICBsaXN0OiBbXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlwOiAwLFxuICAgICAgICAgICAgb3A6IDBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBmcHMgbnVtYmVyIG9mIGZyYW1lcyBwZXIgc2Vjb25kXG4gICAgICovXG4gICAgc2V0RnJhbWVSYXRlKGZwczogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMucm9vdC5mciA9IGZwc1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB3aWR0aCB3aWR0aCBvZiB2aWV3cG9ydCAocHgpXG4gICAgICogQHBhcmFtIGhlaWdodCBoZWlnaHQgb2Ygdmlld3BvcnQgKHB4KVxuICAgICAqL1xuICAgIHNldFZpZXdwb3J0KHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMucm9vdC53ID0gd2lkdGhcbiAgICAgICAgdGhpcy5yb290LmggPSBoZWlnaHRcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBhZGQgYSBzaW1wbGUgZ3JhcGhpY2FsIGxheWVyXG4gICAgICogQHBhcmFtIGRvbU9yTGF5ZXIgYSBTVkcgZWxlbWVudCBET00gb3IgSlNNb3ZpbkxheWVyIG5lZWRzIHRvIGJlIGluc2VydGVkXG4gICAgICovXG4gICAgYWRkTGF5ZXIoZG9tT3JMYXllcjogU1ZHR3JhcGhpY3NFbGVtZW50IHwgSlNNb3ZpbkxheWVyKTogSlNNb3ZpbkxheWVyIHtcbiAgICAgICAgbGV0IGxheWVyOiBKU01vdmluTGF5ZXI7XG4gICAgICAgIGlmIChkb21PckxheWVyIGluc3RhbmNlb2YgU1ZHR3JhcGhpY3NFbGVtZW50KSB7XG4gICAgICAgICAgICBsYXllciA9IExheWVyRmFjdG9yeS5oaWVyYXJjaHkoZG9tT3JMYXllciwgdGhpcy5yb290LmFzc2V0cyEsIHRoaXMucm9vdC5mb250cyEpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsYXllciA9IGRvbU9yTGF5ZXJcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJvb3QubGF5ZXJzIS5zcGxpY2UoMCwgMCwgbGF5ZXIucm9vdClcbiAgICAgICAgcmV0dXJuIGxheWVyXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIG1hc2tPckRvbSBhIFNWRyBlbGVtZW50IERPTSBvciBKU01vdmluTGF5ZXIgdG8gYmUgdGhlIG1hc2tcbiAgICAgKiBAcGFyYW0gbGF5ZXJSZWZPckluZGV4IGEgSlNNb3ZpbkxheWVyIG9yIGluZGV4IG9mIGxheWVyIHRvIGJlIHRoZSBtYXNrZWQgbGF5ZXJcbiAgICAgKiBAcGFyYW0gbWFza1R5cGUgd2hpY2ggdHlwZSBvZiBtYXNrIHRvIHVzZSwgdXNlIGBNYXNrVHlwZS4qYCB0byBzcGVjaWZ5XG4gICAgICovXG4gICAgYWRkTWFzayhtYXNrT3JEb206IEpTTW92aW5MYXllciB8IFNWR0dyYXBoaWNzRWxlbWVudCwgbGF5ZXJSZWZPckluZGV4OiBudW1iZXIgfCBKU01vdmluTGF5ZXIsIG1hc2tUeXBlOiBNYXNrVHlwZSA9IE1hc2tUeXBlLkFscGhhKSB7XG4gICAgICAgIGxldCBsYXllclJlZjogSlNNb3ZpbkxheWVyXG4gICAgICAgIGxldCBsYXllckluZGV4OiBudW1iZXJcbiAgICAgICAgaWYgKGxheWVyUmVmT3JJbmRleCBpbnN0YW5jZW9mIEpTTW92aW5MYXllcikge1xuICAgICAgICAgICAgbGF5ZXJSZWYgPSBsYXllclJlZk9ySW5kZXhcbiAgICAgICAgICAgIGxheWVySW5kZXggPSB0aGlzLnJvb3QubGF5ZXJzIS5pbmRleE9mKGxheWVyUmVmLnJvb3QpXG4gICAgICAgICAgICBsYXllclJlZi5yb290LnR0ID0gbWFza1R5cGVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxheWVySW5kZXggPSBsYXllclJlZk9ySW5kZXhcbiAgICAgICAgICAgIHRoaXMucm9vdC5sYXllcnMhW2xheWVySW5kZXhdLnR0ID0gbWFza1R5cGVcbiAgICAgICAgfVxuICAgICAgICBpZiAobGF5ZXJJbmRleCA8IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignR2l2ZW4gbGF5ZXIgaXMgbm90IGEgbWVtYmVyIG9mIHRoaXMgSlNNb3Zpbi4nKVxuICAgICAgICB9XG4gICAgICAgIGxldCBtYXNrTGF5ZXI6IEpTTW92aW5MYXllclxuICAgICAgICBpZiAobWFza09yRG9tIGluc3RhbmNlb2YgU1ZHR3JhcGhpY3NFbGVtZW50KSB7XG4gICAgICAgICAgICBtYXNrTGF5ZXIgPSBMYXllckZhY3RvcnkuaGllcmFyY2h5KG1hc2tPckRvbSwgdGhpcy5yb290LmFzc2V0cyEsIHRoaXMucm9vdC5mb250cyEpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtYXNrTGF5ZXIgPSBtYXNrT3JEb21cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJvb3QubGF5ZXJzIS5zcGxpY2UobGF5ZXJJbmRleCwgMCwgbWFza0xheWVyLnJvb3QpXG4gICAgICAgIHJldHVybiBtYXNrTGF5ZXJcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gbGF5ZXJSZWZPckluZGV4IGEgSlNNb3ZpbkxheWVyIG9yIGluZGV4IG9mIGxheWVyIHRvIHJlbW92ZVxuICAgICAqL1xuICAgIHJlbW92ZUxheWVyKGxheWVyUmVmT3JJbmRleDogbnVtYmVyIHwgSlNNb3ZpbkxheWVyKSB7XG4gICAgICAgIGxldCBsYXllclJlZjogSlNNb3ZpbkxheWVyXG4gICAgICAgIGxldCBsYXllckluZGV4OiBudW1iZXJcbiAgICAgICAgaWYgKGxheWVyUmVmT3JJbmRleCBpbnN0YW5jZW9mIEpTTW92aW5MYXllcikge1xuICAgICAgICAgICAgbGF5ZXJSZWYgPSBsYXllclJlZk9ySW5kZXhcbiAgICAgICAgICAgIGxheWVySW5kZXggPSB0aGlzLnJvb3QubGF5ZXJzIS5pbmRleE9mKGxheWVyUmVmLnJvb3QpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsYXllckluZGV4ID0gbGF5ZXJSZWZPckluZGV4XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yb290LmxheWVycyEuc3BsaWNlKGxheWVySW5kZXgsIDEpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIGxheWVyUmVmT3JJbmRleCBhIEpTTW92aW5MYXllciBvciBpbmRleCBvZiBtYXNrIG9yIG1hc2tlZCBsYXllciB0byByZW1vdmVcbiAgICAgKi9cbiAgICByZW1vdmVNYXNrKGxheWVyUmVmT3JJbmRleDogbnVtYmVyIHwgSlNNb3ZpbkxheWVyKSB7XG4gICAgICAgIGxldCBsYXllclJlZjogSlNNb3ZpbkxheWVyXG4gICAgICAgIGxldCBsYXllckluZGV4OiBudW1iZXJcbiAgICAgICAgaWYgKGxheWVyUmVmT3JJbmRleCBpbnN0YW5jZW9mIEpTTW92aW5MYXllcikge1xuICAgICAgICAgICAgbGF5ZXJSZWYgPSBsYXllclJlZk9ySW5kZXhcbiAgICAgICAgICAgIGxheWVySW5kZXggPSB0aGlzLnJvb3QubGF5ZXJzIS5pbmRleE9mKGxheWVyUmVmLnJvb3QpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsYXllckluZGV4ID0gbGF5ZXJSZWZPckluZGV4XG4gICAgICAgICAgICBsYXllclJlZiA9IG5ldyBKU01vdmluTGF5ZXIodGhpcy5yb290LmxheWVycyFbbGF5ZXJJbmRleF0gYXMgU2hhcGVMYXllcilcbiAgICAgICAgfVxuICAgICAgICBpZiAobGF5ZXJSZWYucm9vdC50dCkge1xuICAgICAgICAgICAgbGF5ZXJSZWYucm9vdC50dCA9IDBcbiAgICAgICAgICAgIHRoaXMucm9vdC5sYXllcnMhLnNwbGljZShsYXllckluZGV4IC0gMSwgMSlcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnJvb3QubGF5ZXJzIVtsYXllckluZGV4ICsgMV0udHQpIHtcbiAgICAgICAgICAgIHRoaXMucm9vdC5sYXllcnMhW2xheWVySW5kZXggKyAxXS50dCA9IDBcbiAgICAgICAgICAgIHRoaXMucm9vdC5sYXllcnMhLnNwbGljZShsYXllckluZGV4LCAxKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgaW5wdXQgbGF5ZXIgaXMgbm90IGEgbWFzayBvciBhIG1hc2tlZCBsYXllci4nKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogY2xlYXIgYWxsIGxheWVyc1xuICAgICAqL1xuICAgIGNsZWFyTGF5ZXJzKCkge1xuICAgICAgICB0aGlzLnJvb3QubGF5ZXJzID0gW11cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBtYWtlIGFsbCBsYXllcnMgZW5kIGF0IHNhbWUgdGltZVxuICAgICAqL1xuICAgIHVuaWZvcm0oKSB7XG4gICAgICAgIGxldCBtYXhUaW1lID0gdGhpcy5yb290LmxheWVycyEucmVkdWNlKChwLCB2KSA9PiBwIDwgdi5vcCEgPyB2Lm9wISA6IHAsIDApXG4gICAgICAgIHRoaXMucm9vdC5vcCA9IG1heFRpbWVcbiAgICAgICAgdGhpcy5yb290LmxheWVycyEuZm9yRWFjaChsYXllciA9PiBsYXllci5vcCA9IG1heFRpbWUpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogZXhwb3J0IExvdHRpZSBhcyBKYXZhU2NyaXB0IE9iamVjdCBcbiAgICAgKi9cbiAgICB0b09iamVjdCgpIHtcbiAgICAgICAgdGhpcy51bmlmb3JtKClcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UodGhpcy50b0pTT04oKSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBleHBvcnQgTG90dGllIGFzIEpTT04gdGV4dFxuICAgICAqL1xuICAgIHRvSlNPTigpIHtcbiAgICAgICAgdGhpcy51bmlmb3JtKClcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMucm9vdClcbiAgICB9XG59XG5cbmV4cG9ydCB7IExheWVyRmFjdG9yeSB9IGZyb20gJy4vbGF5ZXInXG5leHBvcnQgeyBFYXNpbmdGYWN0b3J5IH0gZnJvbSAnLi9lYXNpbmcnXG5leHBvcnQgeyBQYXRoTWFrZXIgfSBmcm9tICcuL3BhdGgnXG5leHBvcnQgZW51bSBNYXNrVHlwZSB7XG4gICAgQWxwaGEgPSAxLFxuICAgIEludmVydEFscGhhID0gMixcbiAgICBMdW1hID0gMyxcbiAgICBJbnZlcnRMdW1hID0gNFxufSJdfQ==

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

var _helper = __webpack_require__(/*! ./helper */ "./node_modules/jsmovin/bin/helper.js");

var _v = _interopRequireDefault(__webpack_require__(/*! uuid/v4 */ "./node_modules/uuid/v4.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

        case 'tm':
          return {
            s: {
              k: 0
            },
            e: {
              k: 100
            },
            o: {
              k: 0
            }
          };

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
      if (!transform[key] || !transform[key].a) {
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
      var wrap = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : true;
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
        readyToSet.s = wrap && !(value instanceof Array) ? [value] : value;
      }
    }
  }, {
    key: "findPropertyConfig",
    value: function findPropertyConfig(key) {
      return this.root.shapes[0].it.find(function (shape) {
        return shape.ty == key;
      });
    }
  }, {
    key: "findOrInsertPropertyConfig",
    value: function findOrInsertPropertyConfig(key) {
      var find = this.findPropertyConfig(key);
      if (find) return find;
      var hasTransform = this.findPropertyConfig('tr');

      var config = _objectSpread({
        ty: key
      }, this.getDefaultProperty(key));

      if (hasTransform) {
        var groupShapes = this.root.shapes[0].it;
        groupShapes.splice(groupShapes.length - 1, 0, config);
      } else {
        this.root.shapes[0].it.push(config);
      }

      return config;
    }
  }, {
    key: "commonPropertyMapping",
    value: function commonPropertyMapping(key) {
      var base, k, index;

      switch (key) {
        case 'scaleX':
          base = this.root.ks;
          k = 's';
          index = 0;
          break;

        case 'scaleY':
          base = this.root.ks;
          k = 's';
          index = 1;
          break;

        case 'anchorX':
          base = this.root.ks;
          k = 'a';
          index = 0;
          break;

        case 'anchorY':
          base = this.root.ks;
          k = 'a';
          index = 1;
          break;

        case 'x':
          base = this.root.ks;
          k = 'p';
          index = 0;
          break;

        case 'y':
          base = this.root.ks;
          k = 'p';
          index = 1;
          break;

        case 'rotate':
          base = this.root.ks;
          k = 'r';
          index = -1;
          break;

        case 'opacity':
          base = this.root.ks;
          k = 'o';
          index = -1;
          break;

        case 'trimStart':
          base = this.findOrInsertPropertyConfig('tm');
          k = 's';
          index = -1;
          break;

        case 'trimEnd':
          base = this.findOrInsertPropertyConfig('tm');
          k = 'e';
          index = -1;
          break;

        case 'trimOffset':
          base = this.findOrInsertPropertyConfig('tm');
          k = 'o';
          index = -1;
          break;

        case 'fillColor':
          base = this.findPropertyConfig('fl');
          k = 'c';
          index = -1;
          break;

        case 'strokeColor':
          base = this.findPropertyConfig('st');
          k = 'c';
          index = -1;
          break;

        case 'strokeWidth':
          base = this.findPropertyConfig('st');
          k = 'w';
          index = -1;
          break;

        case 'shape':
          base = this.findPropertyConfig('sh');
          k = 'ks';
          index = -1;
          break;

        case 'fillOpacity':
          base = this.findPropertyConfig('fl');
          k = 'o';
          index = -1;
          break;

        case 'strokeOpacity':
          base = this.findPropertyConfig('st');
          k = 'o';
          index = -1;
          break;
      }

      return [base, k, index];
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
      var base, k, index;

      var _this$commonPropertyM = this.commonPropertyMapping(key);

      var _this$commonPropertyM2 = _slicedToArray(_this$commonPropertyM, 3);

      base = _this$commonPropertyM2[0];
      k = _this$commonPropertyM2[1];
      index = _this$commonPropertyM2[2];

      if (!k || index === undefined) {
        switch (key) {
          case 'text':
            if (this.root.ty == 5) {
              var doc = this.root.t.d;
              doc.k = [doc.k[0]];
              doc.k[0].t = 0;
              doc.k[0].s.t = value;
            }

            break;

          default:
            console.error(key, value);
            throw new Error('Not a valid key.');
        }
      }

      if (base && k && index !== undefined) {
        this.convertToStaticProperty(base, k);
        if (index >= 0) base[k].k[index] = value;else base[k].k = value;
      }
    }
  }, {
    key: "setAnimatableProperty",
    value: function setAnimatableProperty(key, startFrame, endFrame, startValue, endValue, easing) {
      if (endFrame <= startFrame) {
        throw new Error('End frame should be larger than start frame.');
      }

      this.root.op = endFrame + 1;

      if (!easing) {
        easing = _easing.EasingFactory.linear();
      }

      var base,
          k,
          index,
          wrap = true;

      var _this$commonPropertyM3 = this.commonPropertyMapping(key);

      var _this$commonPropertyM4 = _slicedToArray(_this$commonPropertyM3, 3);

      base = _this$commonPropertyM4[0];
      k = _this$commonPropertyM4[1];
      index = _this$commonPropertyM4[2];

      if (!k || index === undefined) {
        switch (key) {
          case 'text':
            if (this.root.ty == 5) {
              base = this.root.t;
              var textProp = base.d.k[0].s;
              var tmpStartValue = JSON.parse(JSON.stringify(textProp));
              var tmpEndValue = JSON.parse(JSON.stringify(textProp));
              tmpStartValue.t = startValue;
              tmpEndValue.t = endValue;
              startValue = tmpStartValue;
              endValue = tmpEndValue;
              k = 'd';
              index = -1;
              wrap = false;
            }

            break;

          default:
            console.error(key, startFrame, endFrame, startValue, endValue, easing);
            throw new Error('Not a valid key.');
        }
      }

      if (base && k && index !== undefined) {
        this.convertToAnimatableProperty(base, k);
        this.addKeyframe(base, k, index, startFrame, startValue, easing, wrap);
        this.addKeyframe(base, k, index, endFrame, endValue, undefined, wrap);
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
    key: "boundingBox",
    value: function boundingBox(dom) {
      var boundingBox = (0, _helper.getBoundingBox)(dom).map(function (v, i) {
        return i < 2 ? v - 1 : v + 1;
      });
      return this.rect.apply(this, _toConsumableArray(boundingBox));
    }
  }, {
    key: "shape",
    value: function shape(dom) {
      var coordinate = (0, _helper.getBoundingBox)(dom);
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
        shapes: (0, _render.render)(dom)
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
      var _this = this;

      var coordinate = (0, _helper.getBoundingBox)(dom);
      var domType;

      if (dom instanceof SVGTextElement) {
        domType = 5;
      } else if (dom instanceof SVGImageElement) {
        domType = 2;
      } else if (dom instanceof SVGGElement) {
        domType = 0;
      } else {
        domType = 4;
      }

      var layer = {
        ty: domType,
        ddd: 0,
        sr: 1,
        ao: 0,
        ks: this.generateTransform(domType == 0 ? [0, 0, 0, 0] : coordinate),
        ip: 0,
        op: 1,
        st: 0,
        bm: 0
      };

      switch (domType) {
        case 0:
          var precompLayer = layer;
          var domLeaves = (0, _helper.getLeafNodes)(dom);
          var preCompAsset = [];
          var preCompRefId = (0, _v["default"])();
          domLeaves.forEach(function (d) {
            if (d instanceof SVGGraphicsElement && !(d instanceof SVGGElement)) {
              preCompAsset.unshift(_this.hierarchy(d, assetList, fontList));
            }
          });
          preCompAsset.forEach(function (layer) {
            layer.root.op = 9e9;
          });
          precompLayer.w = coordinate[0] + coordinate[2] + 1;
          precompLayer.h = coordinate[1] + coordinate[3] + 1;
          precompLayer.refId = preCompRefId;
          assetList.push({
            id: preCompRefId,
            layers: preCompAsset.map(function (layer) {
              return layer.root;
            })
          });
          break;

        case 2:
          var imageLayer = layer;

          var _renderImage = (0, _render.renderImage)(dom, assetList),
              _renderImage2 = _slicedToArray(_renderImage, 2),
              imageRefId = _renderImage2[0],
              imageAsset = _renderImage2[1];

          imageLayer.refId = imageRefId;
          if (!assetList.filter(function (a) {
            return a.id == imageRefId;
          }).length) assetList.push(imageAsset);
          break;

        case 4:
          var shapeLayer = layer;
          shapeLayer.shapes = (0, _render.render)(dom);
          break;

        case 5:
          var textLayer = layer; // move textLayer's anchor to left-top

          var baseLineHeight = (0, _helper.getBaselineHeight)(dom);
          textLayer.ks.a.k = [0, baseLineHeight - coordinate[3], 0];

          var _renderText = (0, _render.renderText)(dom, fontList),
              _renderText2 = _slicedToArray(_renderText, 2),
              textData = _renderText2[0],
              font = _renderText2[1];

          textLayer.t = textData;
          if (!fontList.list.filter(function (f) {
            return f.fName == font.fName;
          }).length) fontList.list.push(font);
          break;
      }

      var movinLayer = new JSMovinLayer(layer);
      return movinLayer;
    }
  }]);

  return LayerFactory;
}();

exports.LayerFactory = LayerFactory;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sYXllci50cyJdLCJuYW1lcyI6WyJKU01vdmluTGF5ZXIiLCJrZXkiLCJzIiwiayIsImUiLCJvIiwidHJhbnNmb3JtIiwiYSIsImdldERlZmF1bHRQcm9wZXJ0eSIsInN0YXRpY1ZhbHVlIiwiaWR4IiwidGltZSIsInZhbHVlIiwiZWFzaW5nIiwid3JhcCIsImV4aXN0S2V5ZnJhbWUiLCJmaWx0ZXIiLCJ4IiwidCIsInJlYWR5VG9TZXQiLCJsZW5ndGgiLCJwcmV2aW91c0tleWZyYW1lQ291bnQiLCJyZWR1Y2UiLCJwIiwic3BsaWNlIiwieSIsImkiLCJBcnJheSIsInJvb3QiLCJzaGFwZXMiLCJpdCIsImZpbmQiLCJzaGFwZSIsInR5IiwiZmluZFByb3BlcnR5Q29uZmlnIiwiaGFzVHJhbnNmb3JtIiwiY29uZmlnIiwiZ3JvdXBTaGFwZXMiLCJwdXNoIiwiYmFzZSIsImluZGV4Iiwia3MiLCJmaW5kT3JJbnNlcnRQcm9wZXJ0eUNvbmZpZyIsInJlZiIsIm9wIiwiY29tbW9uUHJvcGVydHlNYXBwaW5nIiwidW5kZWZpbmVkIiwiZG9jIiwiZCIsImNvbnNvbGUiLCJlcnJvciIsIkVycm9yIiwiY29udmVydFRvU3RhdGljUHJvcGVydHkiLCJzdGFydEZyYW1lIiwiZW5kRnJhbWUiLCJzdGFydFZhbHVlIiwiZW5kVmFsdWUiLCJFYXNpbmdGYWN0b3J5IiwibGluZWFyIiwidGV4dFByb3AiLCJ0bXBTdGFydFZhbHVlIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwidG1wRW5kVmFsdWUiLCJjb252ZXJ0VG9BbmltYXRhYmxlUHJvcGVydHkiLCJhZGRLZXlmcmFtZSIsIkxheWVyRmFjdG9yeSIsImNvb3JkaW5hdGUiLCJyIiwiZG9tIiwiYm91bmRpbmdCb3giLCJtYXAiLCJ2IiwicmVjdCIsImxheWVyIiwiZGRkIiwic3IiLCJhbyIsImdlbmVyYXRlVHJhbnNmb3JtIiwiaXAiLCJzdCIsImJtIiwibGVmdCIsInRvcCIsIndpZHRoIiwiaGVpZ2h0IiwiY3giLCJjeSIsInJ4IiwicnkiLCJhc3NldExpc3QiLCJmb250TGlzdCIsImRvbVR5cGUiLCJTVkdUZXh0RWxlbWVudCIsIlNWR0ltYWdlRWxlbWVudCIsIlNWR0dFbGVtZW50IiwicHJlY29tcExheWVyIiwiZG9tTGVhdmVzIiwicHJlQ29tcEFzc2V0IiwicHJlQ29tcFJlZklkIiwiZm9yRWFjaCIsIlNWR0dyYXBoaWNzRWxlbWVudCIsInVuc2hpZnQiLCJoaWVyYXJjaHkiLCJ3IiwiaCIsInJlZklkIiwiaWQiLCJsYXllcnMiLCJpbWFnZUxheWVyIiwiaW1hZ2VSZWZJZCIsImltYWdlQXNzZXQiLCJzaGFwZUxheWVyIiwidGV4dExheWVyIiwiYmFzZUxpbmVIZWlnaHQiLCJ0ZXh0RGF0YSIsImZvbnQiLCJsaXN0IiwiZiIsImZOYW1lIiwibW92aW5MYXllciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUlhQSxZOzs7Ozt1Q0FFa0JDLEcsRUFBYTtBQUNwQyxjQUFRQSxHQUFSO0FBQ0ksYUFBSyxHQUFMO0FBQ0EsYUFBSyxHQUFMO0FBQ0ksaUJBQU8sQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBUDs7QUFDSixhQUFLLEdBQUw7QUFDSSxpQkFBTyxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxDQUFQOztBQUNKLGFBQUssR0FBTDtBQUNJLGlCQUFPLEdBQVA7O0FBQ0osYUFBSyxHQUFMO0FBQ0ksaUJBQU8sQ0FBUDs7QUFDSixhQUFLLElBQUw7QUFDSSxpQkFBTztBQUNIQyxZQUFBQSxDQUFDLEVBQUU7QUFDQ0MsY0FBQUEsQ0FBQyxFQUFFO0FBREosYUFEQTtBQUlIQyxZQUFBQSxDQUFDLEVBQUU7QUFDQ0QsY0FBQUEsQ0FBQyxFQUFFO0FBREosYUFKQTtBQU9IRSxZQUFBQSxDQUFDLEVBQUU7QUFDQ0YsY0FBQUEsQ0FBQyxFQUFFO0FBREo7QUFQQSxXQUFQOztBQVdKO0FBQ0ks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O0FBTEosNEJBTzZCLHdCQUFXRSxHQUFYLEVBQWtDc0IsUUFBbEMsQ0FQN0I7QUFBQTtBQUFBLGNBT1d3QixRQVBYO0FBQUEsY0FPcUJDLElBUHJCOztBQVFJSCxVQUFBQSxTQUFTLENBQUNoRyxDQUFWLEdBQWNrRyxRQUFkO0FBQ0EsY0FBSSxDQUFDeEIsUUFBUSxDQUFDMEIsSUFBVCxDQUFldEcsTUFBZixDQUFzQixVQUFBdUcsQ0FBQztBQUFBLG1CQUFJQSxDQUFDLENBQUNDLEtBQUYsSUFBV0gsSUFBSSxDQUFDRyxLQUFwQjtBQUFBLFdBQXZCLEVBQWtEcEcsTUFBdkQsRUFDSXdFLFFBQVEsQ0FBQzBCLElBQVQsQ0FBZWhGLElBQWYsQ0FBb0IrRSxJQUFwQjtBQUNKO0FBNUNSOztBQThDQSxVQUFNSSxVQUFVLEdBQUcsSUFBSXpILFlBQUosQ0FBaUIyRSxLQUFqQixDQUFuQjtBQUNBLGFBQU84QyxVQUFQO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTaGFwZUxheWVyLCBUZXh0TGF5ZXIsIEltYWdlTGF5ZXIsIFRyYW5zZm9ybSwgQXNzZXRzLCBGb250cywgR3JvdXBTaGFwZSwgUHJlQ29tcExheWVyIH0gZnJvbSAnLi9hbmltYXRpb24nXG5pbXBvcnQgeyBFYXNpbmdGdW5jdGlvbiwgRWFzaW5nRmFjdG9yeSB9IGZyb20gJy4vZWFzaW5nJ1xuaW1wb3J0IHsgcmVuZGVyVGV4dCwgcmVuZGVyLCByZW5kZXJJbWFnZSwgcmVuZGVyUGxhaW5HbHlwaCB9IGZyb20gJy4vcmVuZGVyJztcbmltcG9ydCB7IGdldEJvdW5kaW5nQm94LCBnZXRMZWFmTm9kZXMsIGdldEJhc2VsaW5lSGVpZ2h0IH0gZnJvbSAnLi9oZWxwZXInXG5pbXBvcnQgdXVpZCBmcm9tICd1dWlkL3Y0JztcblxudHlwZSBTZXRhYmxlS2V5cyA9IFwic2NhbGVYXCIgfCBcInNjYWxlWVwiIHwgXCJhbmNob3JYXCIgfCBcImFuY2hvcllcIiB8IFwieFwiIHwgXCJ5XCIgfCBcInJvdGF0ZVwiIHwgXCJvcGFjaXR5XCIgfCAnc2hhcGUnIHwgJ2ZpbGxDb2xvcicgfCAndHJpbVN0YXJ0JyB8ICd0cmltRW5kJyB8ICd0cmltT2Zmc2V0JyB8ICdzdHJva2VDb2xvcicgfCAnc3Ryb2tlV2lkdGgnIHwgJ3RleHQnIHwgJ2ZpbGxPcGFjaXR5JyB8ICdzdHJva2VPcGFjaXR5J1xuXG5leHBvcnQgY2xhc3MgSlNNb3ZpbkxheWVyIHtcbiAgICBwdWJsaWMgcmVhZG9ubHkgcm9vdDogU2hhcGVMYXllciB8IFRleHRMYXllciB8IEltYWdlTGF5ZXIgfCBQcmVDb21wTGF5ZXI7XG4gICAgcHJpdmF0ZSBnZXREZWZhdWx0UHJvcGVydHkoa2V5OiBzdHJpbmcpIHtcbiAgICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgICAgIGNhc2UgJ2EnOlxuICAgICAgICAgICAgY2FzZSAncCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFswLCAwLCAwXVxuICAgICAgICAgICAgY2FzZSAncyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsxMDAsIDEwMCwgMTAwXVxuICAgICAgICAgICAgY2FzZSAnbyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDEwMFxuICAgICAgICAgICAgY2FzZSAncic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDBcbiAgICAgICAgICAgIGNhc2UgJ3RtJzpcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrOiAwXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGs6IDEwMFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrOiAwXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAwXG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBjb252ZXJ0VG9TdGF0aWNQcm9wZXJ0eSh0cmFuc2Zvcm06IGFueSwga2V5OiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKCF0cmFuc2Zvcm1ba2V5XSkge1xuICAgICAgICAgICAgdHJhbnNmb3JtW2tleV0gPSB7XG4gICAgICAgICAgICAgICAgYTogMCxcbiAgICAgICAgICAgICAgICBrOiB0aGlzLmdldERlZmF1bHRQcm9wZXJ0eShrZXkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRyYW5zZm9ybVtrZXldLmEgPT0gMSkge1xuICAgICAgICAgICAgY29uc3Qgc3RhdGljVmFsdWUgPSB0cmFuc2Zvcm1ba2V5XS5rWzBdLnNcbiAgICAgICAgICAgIHRyYW5zZm9ybVtrZXldID0ge1xuICAgICAgICAgICAgICAgIGE6IDAsXG4gICAgICAgICAgICAgICAgazogc3RhdGljVmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIGNvbnZlcnRUb0FuaW1hdGFibGVQcm9wZXJ0eSh0cmFuc2Zvcm06IGFueSwga2V5OiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKCF0cmFuc2Zvcm1ba2V5XSB8fCAhdHJhbnNmb3JtW2tleV0uYSkge1xuICAgICAgICAgICAgdHJhbnNmb3JtW2tleV0gPSB7XG4gICAgICAgICAgICAgICAgYTogMSxcbiAgICAgICAgICAgICAgICBrOiBbXVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgYWRkS2V5ZnJhbWUodHJhbnNmb3JtOiBhbnksIGtleTogc3RyaW5nLCBpZHg6IG51bWJlciA9IC0xLCB0aW1lOiBudW1iZXIsIHZhbHVlOiBBcnJheTxhbnk+LCBlYXNpbmc/OiBFYXNpbmdGdW5jdGlvbiwgd3JhcDogYm9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgY29uc3QgZXhpc3RLZXlmcmFtZSA9IHRyYW5zZm9ybVtrZXldLmsuZmlsdGVyKCh4OiBhbnkpID0+IHgudCA9PSB0aW1lKSBhcyBhbnlbXVxuICAgICAgICBsZXQgcmVhZHlUb1NldDtcbiAgICAgICAgaWYgKGV4aXN0S2V5ZnJhbWUubGVuZ3RoKSB7XG4gICAgICAgICAgICByZWFkeVRvU2V0ID0gZXhpc3RLZXlmcmFtZVswXVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVhZHlUb1NldCA9IHtcbiAgICAgICAgICAgICAgICB0OiB0aW1lLFxuICAgICAgICAgICAgICAgIHM6IHRoaXMuZ2V0RGVmYXVsdFByb3BlcnR5KGtleSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHByZXZpb3VzS2V5ZnJhbWVDb3VudCA9IHRyYW5zZm9ybVtrZXldLmsucmVkdWNlKChwOiBudW1iZXIsIHg6IGFueSkgPT4geC50IDwgdGltZSA/IHAgKyAxIDogcCwgMClcbiAgICAgICAgICAgIHRyYW5zZm9ybVtrZXldLmsuc3BsaWNlKHByZXZpb3VzS2V5ZnJhbWVDb3VudCwgMCwgcmVhZHlUb1NldClcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWFzaW5nKSB7XG4gICAgICAgICAgICByZWFkeVRvU2V0Lm8gPSB7XG4gICAgICAgICAgICAgICAgeDogZWFzaW5nWzBdWzBdLFxuICAgICAgICAgICAgICAgIHk6IGVhc2luZ1swXVsxXVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVhZHlUb1NldC5pID0ge1xuICAgICAgICAgICAgICAgIHg6IGVhc2luZ1sxXVswXSxcbiAgICAgICAgICAgICAgICB5OiBlYXNpbmdbMV1bMV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoaWR4ID49IDApIHtcbiAgICAgICAgICAgIHJlYWR5VG9TZXQuc1tpZHhdID0gdmFsdWVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlYWR5VG9TZXQucyA9IHdyYXAgJiYgISh2YWx1ZSBpbnN0YW5jZW9mIEFycmF5KSA/IFt2YWx1ZV0gOiB2YWx1ZVxuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgZmluZFByb3BlcnR5Q29uZmlnKGtleTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiAoKHRoaXMucm9vdCBhcyBTaGFwZUxheWVyKS5zaGFwZXMhWzBdIGFzIEdyb3VwU2hhcGUpLml0IS5maW5kKHNoYXBlID0+XG4gICAgICAgICAgICBzaGFwZS50eSA9PSBrZXlcbiAgICAgICAgKVxuICAgIH1cbiAgICBwcml2YXRlIGZpbmRPckluc2VydFByb3BlcnR5Q29uZmlnKGtleTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGZpbmQgPSB0aGlzLmZpbmRQcm9wZXJ0eUNvbmZpZyhrZXkpXG4gICAgICAgIGlmIChmaW5kKSByZXR1cm4gZmluZFxuICAgICAgICBjb25zdCBoYXNUcmFuc2Zvcm0gPSB0aGlzLmZpbmRQcm9wZXJ0eUNvbmZpZygndHInKVxuICAgICAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICAgICAgICB0eToga2V5LFxuICAgICAgICAgICAgLi4udGhpcy5nZXREZWZhdWx0UHJvcGVydHkoa2V5KSBhcyBvYmplY3RcbiAgICAgICAgfVxuICAgICAgICBpZiAoaGFzVHJhbnNmb3JtKSB7XG4gICAgICAgICAgICBjb25zdCBncm91cFNoYXBlcyA9ICgodGhpcy5yb290IGFzIFNoYXBlTGF5ZXIpLnNoYXBlcyFbMF0gYXMgR3JvdXBTaGFwZSkuaXQhXG4gICAgICAgICAgICBncm91cFNoYXBlcy5zcGxpY2UoZ3JvdXBTaGFwZXMubGVuZ3RoIC0gMSwgMCwgY29uZmlnKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgKCh0aGlzLnJvb3QgYXMgU2hhcGVMYXllcikuc2hhcGVzIVswXSBhcyBHcm91cFNoYXBlKS5pdCEucHVzaChjb25maWcpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbmZpZ1xuICAgIH1cbiAgICBwcml2YXRlIGNvbW1vblByb3BlcnR5TWFwcGluZyhrZXk6IFNldGFibGVLZXlzKTogW2FueSwgc3RyaW5nIHwgdW5kZWZpbmVkLCBudW1iZXIgfCB1bmRlZmluZWRdIHtcbiAgICAgICAgbGV0IGJhc2U6IGFueSwgazogc3RyaW5nIHwgdW5kZWZpbmVkLCBpbmRleDogbnVtYmVyIHwgdW5kZWZpbmVkXG4gICAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgICAgICBjYXNlICdzY2FsZVgnOlxuICAgICAgICAgICAgICAgIGJhc2UgPSB0aGlzLnJvb3Qua3NcbiAgICAgICAgICAgICAgICBrID0gJ3MnXG4gICAgICAgICAgICAgICAgaW5kZXggPSAwXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgJ3NjYWxlWSc6XG4gICAgICAgICAgICAgICAgYmFzZSA9IHRoaXMucm9vdC5rc1xuICAgICAgICAgICAgICAgIGsgPSAncydcbiAgICAgICAgICAgICAgICBpbmRleCA9IDFcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAnYW5jaG9yWCc6XG4gICAgICAgICAgICAgICAgYmFzZSA9IHRoaXMucm9vdC5rc1xuICAgICAgICAgICAgICAgIGsgPSAnYSdcbiAgICAgICAgICAgICAgICBpbmRleCA9IDBcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAnYW5jaG9yWSc6XG4gICAgICAgICAgICAgICAgYmFzZSA9IHRoaXMucm9vdC5rc1xuICAgICAgICAgICAgICAgIGsgPSAnYSdcbiAgICAgICAgICAgICAgICBpbmRleCA9IDFcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAneCc6XG4gICAgICAgICAgICAgICAgYmFzZSA9IHRoaXMucm9vdC5rc1xuICAgICAgICAgICAgICAgIGsgPSAncCdcbiAgICAgICAgICAgICAgICBpbmRleCA9IDBcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAneSc6XG4gICAgICAgICAgICAgICAgYmFzZSA9IHRoaXMucm9vdC5rc1xuICAgICAgICAgICAgICAgIGsgPSAncCdcbiAgICAgICAgICAgICAgICBpbmRleCA9IDFcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAncm90YXRlJzpcbiAgICAgICAgICAgICAgICBiYXNlID0gdGhpcy5yb290LmtzXG4gICAgICAgICAgICAgICAgayA9ICdyJ1xuICAgICAgICAgICAgICAgIGluZGV4ID0gLTFcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAnb3BhY2l0eSc6XG4gICAgICAgICAgICAgICAgYmFzZSA9IHRoaXMucm9vdC5rc1xuICAgICAgICAgICAgICAgIGsgPSAnbydcbiAgICAgICAgICAgICAgICBpbmRleCA9IC0xXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgJ3RyaW1TdGFydCc6XG4gICAgICAgICAgICAgICAgYmFzZSA9IHRoaXMuZmluZE9ySW5zZXJ0UHJvcGVydHlDb25maWcoJ3RtJylcbiAgICAgICAgICAgICAgICBrID0gJ3MnXG4gICAgICAgICAgICAgICAgaW5kZXggPSAtMVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlICd0cmltRW5kJzpcbiAgICAgICAgICAgICAgICBiYXNlID0gdGhpcy5maW5kT3JJbnNlcnRQcm9wZXJ0eUNvbmZpZygndG0nKVxuICAgICAgICAgICAgICAgIGsgPSAnZSdcbiAgICAgICAgICAgICAgICBpbmRleCA9IC0xXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgJ3RyaW1PZmZzZXQnOlxuICAgICAgICAgICAgICAgIGJhc2UgPSB0aGlzLmZpbmRPckluc2VydFByb3BlcnR5Q29uZmlnKCd0bScpXG4gICAgICAgICAgICAgICAgayA9ICdvJ1xuICAgICAgICAgICAgICAgIGluZGV4ID0gLTFcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAnZmlsbENvbG9yJzpcbiAgICAgICAgICAgICAgICBiYXNlID0gdGhpcy5maW5kUHJvcGVydHlDb25maWcoJ2ZsJylcbiAgICAgICAgICAgICAgICBrID0gJ2MnXG4gICAgICAgICAgICAgICAgaW5kZXggPSAtMVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlICdzdHJva2VDb2xvcic6XG4gICAgICAgICAgICAgICAgYmFzZSA9IHRoaXMuZmluZFByb3BlcnR5Q29uZmlnKCdzdCcpXG4gICAgICAgICAgICAgICAgayA9ICdjJ1xuICAgICAgICAgICAgICAgIGluZGV4ID0gLTFcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAnc3Ryb2tlV2lkdGgnOlxuICAgICAgICAgICAgICAgIGJhc2UgPSB0aGlzLmZpbmRQcm9wZXJ0eUNvbmZpZygnc3QnKVxuICAgICAgICAgICAgICAgIGsgPSAndydcbiAgICAgICAgICAgICAgICBpbmRleCA9IC0xXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgJ3NoYXBlJzpcbiAgICAgICAgICAgICAgICBiYXNlID0gdGhpcy5maW5kUHJvcGVydHlDb25maWcoJ3NoJylcbiAgICAgICAgICAgICAgICBrID0gJ2tzJ1xuICAgICAgICAgICAgICAgIGluZGV4ID0gLTFcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAnZmlsbE9wYWNpdHknOlxuICAgICAgICAgICAgICAgIGJhc2UgPSB0aGlzLmZpbmRQcm9wZXJ0eUNvbmZpZygnZmwnKVxuICAgICAgICAgICAgICAgIGsgPSAnbydcbiAgICAgICAgICAgICAgICBpbmRleCA9IC0xXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgJ3N0cm9rZU9wYWNpdHknOlxuICAgICAgICAgICAgICAgIGJhc2UgPSB0aGlzLmZpbmRQcm9wZXJ0eUNvbmZpZygnc3QnKVxuICAgICAgICAgICAgICAgIGsgPSAnbydcbiAgICAgICAgICAgICAgICBpbmRleCA9IC0xXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW2Jhc2UsIGssIGluZGV4XVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHJlZjogU2hhcGVMYXllciB8IFRleHRMYXllciB8IEltYWdlTGF5ZXIgfCBQcmVDb21wTGF5ZXIpIHtcbiAgICAgICAgdGhpcy5yb290ID0gcmVmXG4gICAgfVxuXG4gICAgc2V0U3RhdGljUHJvcGVydHkoa2V5OiBTZXRhYmxlS2V5cywgdmFsdWU6IGFueSkge1xuICAgICAgICB0aGlzLnJvb3Qub3AgPSAxXG4gICAgICAgIGxldCBiYXNlOiBhbnksIGs6IHN0cmluZyB8IHVuZGVmaW5lZCwgaW5kZXg6IG51bWJlciB8IHVuZGVmaW5lZFxuICAgICAgICBbYmFzZSwgaywgaW5kZXhdID0gdGhpcy5jb21tb25Qcm9wZXJ0eU1hcHBpbmcoa2V5KVxuICAgICAgICBpZiAoIWsgfHwgaW5kZXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgICAgICAgICBjYXNlICd0ZXh0JzpcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucm9vdC50eSA9PSA1KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkb2MgPSB0aGlzLnJvb3QudCEuZCFcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvYy5rID0gW2RvYy5rIVswXV1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRvYy5rWzBdLnQgPSAwXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2Mua1swXS5zIS50ID0gdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3Ioa2V5LCB2YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOb3QgYSB2YWxpZCBrZXkuJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoYmFzZSAmJiBrICYmIGluZGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuY29udmVydFRvU3RhdGljUHJvcGVydHkoYmFzZSwgaylcbiAgICAgICAgICAgIGlmIChpbmRleCA+PSAwKVxuICAgICAgICAgICAgICAgIGJhc2Vba10ua1tpbmRleF0gPSB2YWx1ZVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGJhc2Vba10uayA9IHZhbHVlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRBbmltYXRhYmxlUHJvcGVydHkoa2V5OiBTZXRhYmxlS2V5cywgc3RhcnRGcmFtZTogbnVtYmVyLCBlbmRGcmFtZTogbnVtYmVyLCBzdGFydFZhbHVlOiBhbnksIGVuZFZhbHVlOiBhbnksIGVhc2luZz86IEVhc2luZ0Z1bmN0aW9uKSB7XG4gICAgICAgIGlmIChlbmRGcmFtZSA8PSBzdGFydEZyYW1lKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0VuZCBmcmFtZSBzaG91bGQgYmUgbGFyZ2VyIHRoYW4gc3RhcnQgZnJhbWUuJylcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJvb3Qub3AgPSBlbmRGcmFtZSArIDFcbiAgICAgICAgaWYgKCFlYXNpbmcpIHtcbiAgICAgICAgICAgIGVhc2luZyA9IEVhc2luZ0ZhY3RvcnkubGluZWFyKClcbiAgICAgICAgfVxuICAgICAgICBsZXQgYmFzZTogYW55LCBrOiBzdHJpbmcgfCB1bmRlZmluZWQsIGluZGV4OiBudW1iZXIgfCB1bmRlZmluZWQsIHdyYXAgPSB0cnVlO1xuICAgICAgICBbYmFzZSwgaywgaW5kZXhdID0gdGhpcy5jb21tb25Qcm9wZXJ0eU1hcHBpbmcoa2V5KVxuICAgICAgICBpZiAoIWsgfHwgaW5kZXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgICAgICAgICBjYXNlICd0ZXh0JzpcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucm9vdC50eSA9PSA1KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlID0gdGhpcy5yb290LnRcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZXh0UHJvcCA9IGJhc2UuZC5rWzBdLnNcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0bXBTdGFydFZhbHVlID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0ZXh0UHJvcCkpXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdG1wRW5kVmFsdWUgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRleHRQcm9wKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRtcFN0YXJ0VmFsdWUudCA9IHN0YXJ0VmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgIHRtcEVuZFZhbHVlLnQgPSBlbmRWYWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRWYWx1ZSA9IHRtcFN0YXJ0VmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZFZhbHVlID0gdG1wRW5kVmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgIGsgPSAnZCdcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ID0gLTFcbiAgICAgICAgICAgICAgICAgICAgICAgIHdyYXAgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihrZXksIHN0YXJ0RnJhbWUsIGVuZEZyYW1lLCBzdGFydFZhbHVlLCBlbmRWYWx1ZSwgZWFzaW5nKVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdCBhIHZhbGlkIGtleS4nKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChiYXNlICYmIGsgJiYgaW5kZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5jb252ZXJ0VG9BbmltYXRhYmxlUHJvcGVydHkoYmFzZSwgaylcbiAgICAgICAgICAgIHRoaXMuYWRkS2V5ZnJhbWUoYmFzZSwgaywgaW5kZXgsIHN0YXJ0RnJhbWUsIHN0YXJ0VmFsdWUsIGVhc2luZywgd3JhcClcbiAgICAgICAgICAgIHRoaXMuYWRkS2V5ZnJhbWUoYmFzZSwgaywgaW5kZXgsIGVuZEZyYW1lLCBlbmRWYWx1ZSwgdW5kZWZpbmVkLCB3cmFwKVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTGF5ZXJGYWN0b3J5IHtcbiAgICBwcml2YXRlIHN0YXRpYyBnZW5lcmF0ZVRyYW5zZm9ybShjb29yZGluYXRlOiBudW1iZXJbXSk6IFRyYW5zZm9ybSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBvOiB7XG4gICAgICAgICAgICAgICAgYTogMCxcbiAgICAgICAgICAgICAgICBrOiAxMDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByOiB7XG4gICAgICAgICAgICAgICAgYTogMCxcbiAgICAgICAgICAgICAgICBrOiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcDoge1xuICAgICAgICAgICAgICAgIGE6IDAsXG4gICAgICAgICAgICAgICAgazogW1xuICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlWzBdLFxuICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlWzFdLFxuICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGE6IHtcbiAgICAgICAgICAgICAgICBhOiAwLFxuICAgICAgICAgICAgICAgIGs6IFtcbiAgICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzOiB7XG4gICAgICAgICAgICAgICAgYTogMCxcbiAgICAgICAgICAgICAgICBrOiBbXG4gICAgICAgICAgICAgICAgICAgIDEwMCxcbiAgICAgICAgICAgICAgICAgICAgMTAwLFxuICAgICAgICAgICAgICAgICAgICAxMDBcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgYm91bmRpbmdCb3goZG9tOiBTVkdHcmFwaGljc0VsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgYm91bmRpbmdCb3ggPSBnZXRCb3VuZGluZ0JveChkb20pLm1hcCgodiwgaSkgPT4gaSA8IDIgPyB2IC0gMSA6IHYgKyAxKSBhcyBbbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXVxuICAgICAgICByZXR1cm4gdGhpcy5yZWN0KC4uLmJvdW5kaW5nQm94KVxuICAgIH1cblxuICAgIHN0YXRpYyBzaGFwZShkb206IFNWR1BhdGhFbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IGNvb3JkaW5hdGUgPSBnZXRCb3VuZGluZ0JveChkb20pXG4gICAgICAgIGNvbnN0IGxheWVyOiBTaGFwZUxheWVyID0ge1xuICAgICAgICAgICAgdHk6IDQsXG4gICAgICAgICAgICBkZGQ6IDAsXG4gICAgICAgICAgICBzcjogMSxcbiAgICAgICAgICAgIGFvOiAwLFxuICAgICAgICAgICAga3M6IHRoaXMuZ2VuZXJhdGVUcmFuc2Zvcm0oY29vcmRpbmF0ZSksXG4gICAgICAgICAgICBpcDogMCxcbiAgICAgICAgICAgIG9wOiAxLFxuICAgICAgICAgICAgc3Q6IDAsXG4gICAgICAgICAgICBibTogMCxcbiAgICAgICAgICAgIHNoYXBlczogcmVuZGVyKGRvbSlcblxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgSlNNb3ZpbkxheWVyKGxheWVyKVxuICAgIH1cblxuICAgIHN0YXRpYyByZWN0KGxlZnQ6IG51bWJlciwgdG9wOiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IGxheWVyOiBTaGFwZUxheWVyID0ge1xuICAgICAgICAgICAgdHk6IDQsXG4gICAgICAgICAgICBkZGQ6IDAsXG4gICAgICAgICAgICBzcjogMSxcbiAgICAgICAgICAgIGFvOiAwLFxuICAgICAgICAgICAga3M6IHRoaXMuZ2VuZXJhdGVUcmFuc2Zvcm0oW2xlZnQsIHRvcCwgd2lkdGgsIGhlaWdodF0pLFxuICAgICAgICAgICAgaXA6IDAsXG4gICAgICAgICAgICBvcDogMSxcbiAgICAgICAgICAgIHN0OiAwLFxuICAgICAgICAgICAgYm06IDAsXG4gICAgICAgICAgICBzaGFwZXM6IFtcbiAgICAgICAgICAgICAgICByZW5kZXJQbGFpbkdseXBoKCdyZWN0JywgW3dpZHRoLCBoZWlnaHRdKVxuICAgICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgSlNNb3ZpbkxheWVyKGxheWVyKVxuICAgIH1cblxuICAgIHN0YXRpYyBlbGxpcHNlKGN4OiBudW1iZXIsIGN5OiBudW1iZXIsIHJ4OiBudW1iZXIsIHJ5OiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgbGF5ZXI6IFNoYXBlTGF5ZXIgPSB7XG4gICAgICAgICAgICB0eTogNCxcbiAgICAgICAgICAgIGRkZDogMCxcbiAgICAgICAgICAgIHNyOiAxLFxuICAgICAgICAgICAgYW86IDAsXG4gICAgICAgICAgICBrczogdGhpcy5nZW5lcmF0ZVRyYW5zZm9ybShbY3ggLSByeCwgY3kgLSByeSwgMiAqIHJ4LCAyICogcnldKSxcbiAgICAgICAgICAgIGlwOiAwLFxuICAgICAgICAgICAgb3A6IDEsXG4gICAgICAgICAgICBzdDogMCxcbiAgICAgICAgICAgIGJtOiAwLFxuICAgICAgICAgICAgc2hhcGVzOiBbXG4gICAgICAgICAgICAgICAgcmVuZGVyUGxhaW5HbHlwaCgnZWxsaXBzZScsIFtyeCwgcnldKVxuICAgICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgSlNNb3ZpbkxheWVyKGxheWVyKVxuICAgIH1cblxuICAgIHN0YXRpYyBoaWVyYXJjaHkoZG9tOiBTVkdHcmFwaGljc0VsZW1lbnQsIGFzc2V0TGlzdDogQXNzZXRzLCBmb250TGlzdDogRm9udHMpIHtcbiAgICAgICAgY29uc3QgY29vcmRpbmF0ZSA9IGdldEJvdW5kaW5nQm94KGRvbSlcbiAgICAgICAgbGV0IGRvbVR5cGU6IDIgfCA0IHwgNSB8IDA7XG4gICAgICAgIGlmIChkb20gaW5zdGFuY2VvZiBTVkdUZXh0RWxlbWVudCkge1xuICAgICAgICAgICAgZG9tVHlwZSA9IDVcbiAgICAgICAgfSBlbHNlIGlmIChkb20gaW5zdGFuY2VvZiBTVkdJbWFnZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIGRvbVR5cGUgPSAyXG4gICAgICAgIH0gZWxzZSBpZiAoZG9tIGluc3RhbmNlb2YgU1ZHR0VsZW1lbnQpIHtcbiAgICAgICAgICAgIGRvbVR5cGUgPSAwXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkb21UeXBlID0gNFxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGxheWVyOiBTaGFwZUxheWVyIHwgSW1hZ2VMYXllciB8IFRleHRMYXllciB8IFByZUNvbXBMYXllciA9IHtcbiAgICAgICAgICAgIHR5OiBkb21UeXBlLFxuICAgICAgICAgICAgZGRkOiAwLFxuICAgICAgICAgICAgc3I6IDEsXG4gICAgICAgICAgICBhbzogMCxcbiAgICAgICAgICAgIGtzOiB0aGlzLmdlbmVyYXRlVHJhbnNmb3JtKGRvbVR5cGUgPT0gMCA/IFswLCAwLCAwLCAwXSA6IGNvb3JkaW5hdGUpLFxuICAgICAgICAgICAgaXA6IDAsXG4gICAgICAgICAgICBvcDogMSxcbiAgICAgICAgICAgIHN0OiAwLFxuICAgICAgICAgICAgYm06IDBcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKGRvbVR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBjb25zdCBwcmVjb21wTGF5ZXIgPSBsYXllciBhcyBQcmVDb21wTGF5ZXJcbiAgICAgICAgICAgICAgICBjb25zdCBkb21MZWF2ZXMgPSBnZXRMZWFmTm9kZXMoZG9tKVxuICAgICAgICAgICAgICAgIGNvbnN0IHByZUNvbXBBc3NldDogSlNNb3ZpbkxheWVyW10gPSBbXVxuICAgICAgICAgICAgICAgIGNvbnN0IHByZUNvbXBSZWZJZCA9IHV1aWQoKVxuICAgICAgICAgICAgICAgIGRvbUxlYXZlcy5mb3JFYWNoKGQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZCBpbnN0YW5jZW9mIFNWR0dyYXBoaWNzRWxlbWVudCAmJiAhKGQgaW5zdGFuY2VvZiBTVkdHRWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZUNvbXBBc3NldC51bnNoaWZ0KHRoaXMuaGllcmFyY2h5KGQsIGFzc2V0TGlzdCwgZm9udExpc3QpKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBwcmVDb21wQXNzZXQuZm9yRWFjaChsYXllciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxheWVyLnJvb3Qub3AgPSA5ZTlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIHByZWNvbXBMYXllci53ID0gY29vcmRpbmF0ZVswXSArIGNvb3JkaW5hdGVbMl0gKyAxXG4gICAgICAgICAgICAgICAgcHJlY29tcExheWVyLmggPSBjb29yZGluYXRlWzFdICsgY29vcmRpbmF0ZVszXSArIDFcbiAgICAgICAgICAgICAgICBwcmVjb21wTGF5ZXIucmVmSWQgPSBwcmVDb21wUmVmSWRcbiAgICAgICAgICAgICAgICBhc3NldExpc3QucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBwcmVDb21wUmVmSWQsXG4gICAgICAgICAgICAgICAgICAgIGxheWVyczogcHJlQ29tcEFzc2V0Lm1hcChsYXllciA9PiBsYXllci5yb290KVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBjb25zdCBpbWFnZUxheWVyID0gbGF5ZXIgYXMgSW1hZ2VMYXllclxuICAgICAgICAgICAgICAgIGNvbnN0IFtpbWFnZVJlZklkLCBpbWFnZUFzc2V0XSA9IHJlbmRlckltYWdlKGRvbSBhcyBTVkdJbWFnZUVsZW1lbnQsIGFzc2V0TGlzdClcbiAgICAgICAgICAgICAgICBpbWFnZUxheWVyLnJlZklkID0gaW1hZ2VSZWZJZFxuICAgICAgICAgICAgICAgIGlmICghYXNzZXRMaXN0LmZpbHRlcihhID0+IGEuaWQgPT0gaW1hZ2VSZWZJZCkubGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICBhc3NldExpc3QucHVzaChpbWFnZUFzc2V0KVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgY29uc3Qgc2hhcGVMYXllciA9IGxheWVyIGFzIFNoYXBlTGF5ZXJcbiAgICAgICAgICAgICAgICBzaGFwZUxheWVyLnNoYXBlcyA9IHJlbmRlcihkb20pXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXh0TGF5ZXIgPSBsYXllciBhcyBUZXh0TGF5ZXJcblxuICAgICAgICAgICAgICAgIC8vIG1vdmUgdGV4dExheWVyJ3MgYW5jaG9yIHRvIGxlZnQtdG9wXG4gICAgICAgICAgICAgICAgY29uc3QgYmFzZUxpbmVIZWlnaHQgPSBnZXRCYXNlbGluZUhlaWdodChkb20gYXMgU1ZHVGV4dEVsZW1lbnQpXG4gICAgICAgICAgICAgICAgdGV4dExheWVyLmtzIS5hIS5rID0gWzAsIGJhc2VMaW5lSGVpZ2h0IC0gY29vcmRpbmF0ZVszXSwgMF1cblxuICAgICAgICAgICAgICAgIGNvbnN0IFt0ZXh0RGF0YSwgZm9udF0gPSByZW5kZXJUZXh0KGRvbSBhcyBTVkdUZXh0RWxlbWVudCwgZm9udExpc3QpXG4gICAgICAgICAgICAgICAgdGV4dExheWVyLnQgPSB0ZXh0RGF0YVxuICAgICAgICAgICAgICAgIGlmICghZm9udExpc3QubGlzdCEuZmlsdGVyKGYgPT4gZi5mTmFtZSA9PSBmb250LmZOYW1lKS5sZW5ndGgpXG4gICAgICAgICAgICAgICAgICAgIGZvbnRMaXN0Lmxpc3QhLnB1c2goZm9udClcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1vdmluTGF5ZXIgPSBuZXcgSlNNb3ZpbkxheWVyKGxheWVyKVxuICAgICAgICByZXR1cm4gbW92aW5MYXllclxuICAgIH1cbn0iXX0=

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

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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

    _defineProperty(this, "offsetX", Infinity);

    _defineProperty(this, "offsetY", Infinity);
  }

  _createClass(PathMaker, [{
    key: "updateXY",
    value: function updateXY(x, y) {
      this.currentX = x;
      this.currentY = y;
      this.offsetX = Math.min(this.offsetX, x);
      this.offsetY = Math.min(this.offsetY, y);
    }
  }, {
    key: "calculateBezierMinMax",
    value: function calculateBezierMinMax(p0, p1, p2, p3) {
      var a = 3 * (p3 - 3 * p2 + 3 * p1 - p0);
      var b = 2 * (3 * p2 - 6 * p1 + 3 * p0);
      var c = 3 * p1;
      var min = Infinity,
          max = -Infinity;

      if (b * b - 4 * a * c >= 0) {
        var sqrt = Math.sqrt(b * b - 4 * a * c);
        var roots = [1, -1].map(function (multi) {
          return (multi * sqrt - b) / 2 / a;
        });
        roots.forEach(function (root) {
          if (root > 0 && root < 1) {
            var value = Math.pow(1 - root, 3) * p0 + 3 * Math.pow(1 - root, 2) * root * p1 + 3 * (1 - root) * root * root * p2 + Math.pow(root, 3) * p3;
            min = Math.min(min, value);
            max = Math.max(max, value);
          }
        });
      }

      min = Math.min(min, p0, p3);
      max = Math.max(max, p0, p3);
      return [min, max];
    }
  }, {
    key: "moveTo",
    value: function moveTo(x, y) {
      this.path.c = false;
      this.path.i = [[0, 0]];
      this.path.o = [];
      this.path.v = [[x, y]];
      this.currentX = x;
      this.currentY = y;
      this.offsetX = x;
      this.offsetY = y;
    }
  }, {
    key: "lineTo",
    value: function lineTo(x, y) {
      this.path.i.push([0, 0]);
      this.path.o.push([0, 0]);
      this.path.v.push([x, y]);
      this.updateXY(x, y);
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
      this.offsetX = Math.min.apply(Math, [this.offsetX].concat(_toConsumableArray(this.calculateBezierMinMax(this.currentX, c1x, c2x, x))));
      this.offsetY = Math.min.apply(Math, [this.offsetY].concat(_toConsumableArray(this.calculateBezierMinMax(this.currentY, c1y, c2y, y))));
      this.updateXY(x, y);
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
      this.offsetX = Math.min.apply(Math, [this.offsetX].concat(_toConsumableArray(this.calculateBezierMinMax(this.currentX, cx, cx, x))));
      this.offsetY = Math.min.apply(Math, [this.offsetY].concat(_toConsumableArray(this.calculateBezierMinMax(this.currentY, cy, cy, y))));
      this.updateXY(x, y);
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
        this.offsetX = Math.min.apply(Math, [this.offsetX].concat(_toConsumableArray(this.calculateBezierMinMax(this.currentX, iovList[0], iovList[2], iovList[4]))));
        this.offsetY = Math.min.apply(Math, [this.offsetY].concat(_toConsumableArray(this.calculateBezierMinMax(this.currentY, iovList[1], iovList[3], iovList[5]))));
        this.updateXY(iovList[4], iovList[5]);
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
      var _this = this;

      while (this.path.o.length < this.path.i.length) {
        this.path.o.push([0, 0]);
      }

      this.path.v.forEach(function (value) {
        value[0] -= _this.offsetX;
        value[1] -= _this.offsetY;
      });
      this.offsetX = 0;
      this.offsetY = 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wYXRoLnRzIl0sIm5hbWVzIjpbIlBhdGhNYWtlciIsImMiLCJpIiwibyIsInYiLCJJbmZpbml0eSIsIngiLCJ5IiwiY3VycmVudFgiLCJjdXJyZW50WSIsIm9mZnNldFgiLCJNYXRoIiwibWluIiwib2Zmc2V0WSIsInAwIiwicDEiLCJwMiIsInAzIiwiYSIsImIiLCJtYXgiLCJzcXJ0Iiwicm9vdHMiLCJtYXAiLCJtdWx0aSIsImZvckVhY2giLCJyb290IiwidmFsdWUiLCJwb3ciLCJwYXRoIiwicHVzaCIsInVwZGF0ZVhZIiwibGluZVRvIiwiaG9yaXpvbnRhbFRvIiwidmVydGljYWxUbyIsImMxeCIsImMxeSIsImMyeCIsImMyeSIsImNhbGN1bGF0ZUJlemllck1pbk1heCIsImN1YmljQmV6aWVyQ3VydmVUbyIsImN4IiwiY3kiLCJxdWFkcmF0aWNCZXppZXJDdXJ2ZVRvIiwicngiLCJyeSIsInhBeGlzUm90YXRpb24iLCJsYXJnZUFyY0ZsYWciLCJzd2VlcEZsYWciLCJjU2VyaWVzIiwiYTJjIiwibGVuZ3RoIiwiaW92TGlzdCIsInNwbGljZSIsImFyY1RvIiwieDEiLCJ5MSIsImFuZ2xlIiwibGFyZ2VfYXJjX2ZsYWciLCJzd2VlcF9mbGFnIiwieDIiLCJ5MiIsInJlY3Vyc2l2ZSIsIl8xMjAiLCJQSSIsInJhZCIsInJlcyIsInh5Iiwicm90YXRlIiwiWCIsImNvcyIsInNpbiIsIlkiLCJoIiwicngyIiwicnkyIiwiayIsImFicyIsImYxIiwiYXNpbiIsImYyIiwiZGYiLCJmMm9sZCIsIngyb2xkIiwieTJvbGQiLCJjMSIsInMxIiwiYzIiLCJzMiIsInQiLCJ0YW4iLCJoeCIsImh5IiwibTEiLCJtMiIsIm0zIiwibTQiLCJjb25jYXQiLCJqb2luIiwic3BsaXQiLCJwYXJzZUZsb2F0IiwibmV3cmVzIiwiaWkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRWFBLFM7Ozs7OztrQ0FDYztBQUNuQkMsTUFBQUEsQ0FB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SUFBekIsR0FBZ0NDLEtBQWhDLENBQXNDLEdBQXRDLEVBQTJDNUUsR0FBM0MsQ0FBK0MsVUFBQWpCLENBQUM7QUFBQSxpQkFBSThGLFVBQVUsQ0FBQzlGLENBQUQsQ0FBZDtBQUFBLFNBQWhELENBQU47QUFDQSxZQUFJK0YsTUFBTSxHQUFHLEVBQWI7O0FBQ0EsYUFBSyxJQUFJbkcsQ0FBQyxHQUFHLENBQVIsRUFBV29HLEVBQUUsR0FBR3BDLEdBQUcsQ0FBQ2YsTUFBekIsRUFBaUNqRCxDQUFDLEdBQUdvRyxFQUFyQyxFQUF5Q3BHLENBQUMsRUFBMUMsRUFBOEM7QUFDMUNtRyxVQUFBQSxNQUFNLENBQUNuRyxDQUFELENBQU4sR0FBWUEsQ0FBQyxHQUFHLENBQUosR0FBUWtFLE1BQU0sQ0FBQ0YsR0FBRyxDQUFDaEUsQ0FBQyxHQUFHLENBQUwsQ0FBSixFQUFhZ0UsR0FBRyxDQUFDaEUsQ0FBRCxDQUFoQixFQUFxQitELEdBQXJCLENBQU4sQ0FBZ0MxRCxDQUF4QyxHQUE0QzZELE1BQU0sQ0FBQ0YsR0FBRyxDQUFDaEUsQ0FBRCxDQUFKLEVBQVNnRSxHQUFHLENBQUNoRSxDQUFDLEdBQUcsQ0FBTCxDQUFaLEVBQXFCK0QsR0FBckIsQ0FBTixDQUFnQzNELENBQXhGO0FBQ0g7O0FBQ0QsZUFBTytGLE1BQVA7QUFDSDtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGF0aERlZiB9IGZyb20gJy4vYW5pbWF0aW9uJ1xuXG5leHBvcnQgY2xhc3MgUGF0aE1ha2VyIHtcbiAgICBwdWJsaWMgcGF0aDogUGF0aERlZiA9IHtcbiAgICAgICAgYzogZmFsc2UsXG4gICAgICAgIGk6IFtdLFxuICAgICAgICBvOiBbXSxcbiAgICAgICAgdjogW11cbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBjdXJyZW50WDogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIGN1cnJlbnRZOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgb2Zmc2V0WDogbnVtYmVyID0gSW5maW5pdHk7XG4gICAgcHJpdmF0ZSBvZmZzZXRZOiBudW1iZXIgPSBJbmZpbml0eTtcblxuICAgIHByaXZhdGUgdXBkYXRlWFkoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50WCA9IHhcbiAgICAgICAgdGhpcy5jdXJyZW50WSA9IHlcbiAgICAgICAgdGhpcy5vZmZzZXRYID0gTWF0aC5taW4odGhpcy5vZmZzZXRYLCB4KVxuICAgICAgICB0aGlzLm9mZnNldFkgPSBNYXRoLm1pbih0aGlzLm9mZnNldFksIHkpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjYWxjdWxhdGVCZXppZXJNaW5NYXgocDA6IG51bWJlciwgcDE6IG51bWJlciwgcDI6IG51bWJlciwgcDM6IG51bWJlcik6IFtudW1iZXIsIG51bWJlcl0ge1xuICAgICAgICBjb25zdCBhID0gMyAqIChwMyAtIDMgKiBwMiArIDMgKiBwMSAtIHAwKVxuICAgICAgICBjb25zdCBiID0gMiAqICgzICogcDIgLSA2ICogcDEgKyAzICogcDApXG4gICAgICAgIGNvbnN0IGMgPSAzICogcDFcbiAgICAgICAgbGV0IG1pbiA9IEluZmluaXR5LCBtYXggPSAtSW5maW5pdHlcbiAgICAgICAgaWYgKGIgKiBiIC0gNCAqIGEgKiBjID49IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHNxcnQgPSBNYXRoLnNxcnQoYiAqIGIgLSA0ICogYSAqIGMpXG4gICAgICAgICAgICBjb25zdCByb290cyA9IFsxLCAtMV0ubWFwKG11bHRpID0+IChtdWx0aSAqIHNxcnQgLSBiKSAvIDIgLyBhKVxuICAgICAgICAgICAgcm9vdHMuZm9yRWFjaChyb290ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocm9vdCA+IDAgJiYgcm9vdCA8IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBNYXRoLnBvdygxIC0gcm9vdCwgMykgKiBwMCArIDMgKiBNYXRoLnBvdygxIC0gcm9vdCwgMikgKiByb290ICogcDEgKyAzICogKDEgLSByb290KSAqIHJvb3QgKiByb290ICogcDIgKyBNYXRoLnBvdyhyb290LCAzKSAqIHAzXG4gICAgICAgICAgICAgICAgICAgIG1pbiA9IE1hdGgubWluKG1pbiwgdmFsdWUpXG4gICAgICAgICAgICAgICAgICAgIG1heCA9IE1hdGgubWF4KG1heCwgdmFsdWUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBtaW4gPSBNYXRoLm1pbihtaW4sIHAwLCBwMylcbiAgICAgICAgbWF4ID0gTWF0aC5tYXgobWF4LCBwMCwgcDMpXG4gICAgICAgIHJldHVybiBbbWluLCBtYXhdXG4gICAgfVxuXG4gICAgcHVibGljIG1vdmVUbyh4OiBudW1iZXIsIHk6IG51bWJlcikge1xuICAgICAgICB0aGlzLnBhdGguYyA9IGZhbHNlXG4gICAgICAgIHRoaXMucGF0aC5pID0gW1swLCAwXV1cbiAgICAgICAgdGhpcy5wYXRoLm8gPSBbXVxuICAgICAgICB0aGlzLnBhdGgudiA9IFtbeCwgeV1dXG4gICAgICAgIHRoaXMuY3VycmVudFggPSB4XG4gICAgICAgIHRoaXMuY3VycmVudFkgPSB5XG4gICAgICAgIHRoaXMub2Zmc2V0WCA9IHhcbiAgICAgICAgdGhpcy5vZmZzZXRZID0geVxuICAgIH1cbiAgICBwdWJsaWMgbGluZVRvKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMucGF0aC5pIS5wdXNoKFswLCAwXSlcbiAgICAgICAgdGhpcy5wYXRoLm8hLnB1c2goWzAsIDBdKVxuICAgICAgICB0aGlzLnBhdGgudiEucHVzaChbeCwgeV0pXG4gICAgICAgIHRoaXMudXBkYXRlWFkoeCwgeSlcbiAgICB9XG4gICAgcHVibGljIGxpbmVUb1JlbGF0aXZlKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMubGluZVRvKHRoaXMuY3VycmVudFggKyB4LCB0aGlzLmN1cnJlbnRZICsgeSlcbiAgICB9XG4gICAgcHVibGljIGhvcml6b250YWxUbyh4OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5saW5lVG8oeCwgdGhpcy5jdXJyZW50WSlcbiAgICB9XG4gICAgcHVibGljIGhvcml6b250YWxUb1JlbGF0aXZlKHg6IG51bWJlcikge1xuICAgICAgICB0aGlzLmhvcml6b250YWxUbyh0aGlzLmN1cnJlbnRYICsgeClcbiAgICB9XG4gICAgcHVibGljIHZlcnRpY2FsVG8oeTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMubGluZVRvKHRoaXMuY3VycmVudFgsIHkpXG4gICAgfVxuICAgIHB1YmxpYyB2ZXJ0aWNhbFRvUmVsYXRpdmUoeTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMudmVydGljYWxUbyh0aGlzLmN1cnJlbnRZICsgeSlcbiAgICB9XG4gICAgcHVibGljIGN1YmljQmV6aWVyQ3VydmVUbyhcbiAgICAgICAgYzF4OiBudW1iZXIsXG4gICAgICAgIGMxeTogbnVtYmVyLFxuICAgICAgICBjMng6IG51bWJlcixcbiAgICAgICAgYzJ5OiBudW1iZXIsXG4gICAgICAgIHg6IG51bWJlcixcbiAgICAgICAgeTogbnVtYmVyXG4gICAgKSB7XG4gICAgICAgIHRoaXMucGF0aC5pIS5wdXNoKFtjMnggLSB4LCBjMnkgLSB5XSlcbiAgICAgICAgdGhpcy5wYXRoLm8hLnB1c2goW2MxeCAtIHRoaXMuY3VycmVudFgsIGMxeSAtIHRoaXMuY3VycmVudFldKVxuICAgICAgICB0aGlzLnBhdGgudiEucHVzaChbeCwgeV0pXG4gICAgICAgIHRoaXMub2Zmc2V0WCA9IE1hdGgubWluKHRoaXMub2Zmc2V0WCwgLi4udGhpcy5jYWxjdWxhdGVCZXppZXJNaW5NYXgodGhpcy5jdXJyZW50WCwgYzF4LCBjMngsIHgpKVxuICAgICAgICB0aGlzLm9mZnNldFkgPSBNYXRoLm1pbih0aGlzLm9mZnNldFksIC4uLnRoaXMuY2FsY3VsYXRlQmV6aWVyTWluTWF4KHRoaXMuY3VycmVudFksIGMxeSwgYzJ5LCB5KSlcbiAgICAgICAgdGhpcy51cGRhdGVYWSh4LCB5KVxuICAgIH1cbiAgICBwdWJsaWMgY3ViaWNCZXppZXJDdXJ2ZVRvUmVsYXRpdmUoXG4gICAgICAgIGMxeDogbnVtYmVyLFxuICAgICAgICBjMXk6IG51bWJlcixcbiAgICAgICAgYzJ4OiBudW1iZXIsXG4gICAgICAgIGMyeTogbnVtYmVyLFxuICAgICAgICB4OiBudW1iZXIsXG4gICAgICAgIHk6IG51bWJlclxuICAgICkge1xuICAgICAgICB0aGlzLmN1YmljQmV6aWVyQ3VydmVUbyh0aGlzLmN1cnJlbnRYICsgYzF4LCB0aGlzLmN1cnJlbnRZICsgYzF5LCB0aGlzLmN1cnJlbnRYICsgYzJ4LCB0aGlzLmN1cnJlbnRZICsgYzJ5LCB0aGlzLmN1cnJlbnRYICsgeCwgdGhpcy5jdXJyZW50WSArIHkpXG4gICAgfVxuICAgIHB1YmxpYyBxdWFkcmF0aWNCZXppZXJDdXJ2ZVRvKGN4OiBudW1iZXIsIGN5OiBudW1iZXIsIHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMucGF0aC5pIS5wdXNoKFtjeCAtIHgsIGN5IC0geV0pXG4gICAgICAgIHRoaXMucGF0aC5vIS5wdXNoKFtjeCAtIHRoaXMuY3VycmVudFgsIGN5IC0gdGhpcy5jdXJyZW50WV0pXG4gICAgICAgIHRoaXMucGF0aC52IS5wdXNoKFt4LCB5XSlcbiAgICAgICAgdGhpcy5vZmZzZXRYID0gTWF0aC5taW4odGhpcy5vZmZzZXRYLCAuLi50aGlzLmNhbGN1bGF0ZUJlemllck1pbk1heCh0aGlzLmN1cnJlbnRYLCBjeCwgY3gsIHgpKVxuICAgICAgICB0aGlzLm9mZnNldFkgPSBNYXRoLm1pbih0aGlzLm9mZnNldFksIC4uLnRoaXMuY2FsY3VsYXRlQmV6aWVyTWluTWF4KHRoaXMuY3VycmVudFksIGN5LCBjeSwgeSkpXG4gICAgICAgIHRoaXMudXBkYXRlWFkoeCwgeSlcbiAgICB9XG4gICAgcHVibGljIHF1YWRyYXRpY0JlemllckN1cnZlVG9SZWxhdGl2ZShjeDogbnVtYmVyLCBjeTogbnVtYmVyLCB4OiBudW1iZXIsIHk6IG51bWJlcikge1xuICAgICAgICB0aGlzLnF1YWRyYXRpY0JlemllckN1cnZlVG8odGhpcy5jdXJyZW50WCArIGN4LCB0aGlzLmN1cnJlbnRZICsgY3ksIHRoaXMuY3VycmVudFggKyB4LCB0aGlzLmN1cnJlbnRZICsgeSlcbiAgICB9XG4gICAgcHVibGljIGFyY1RvKFxuICAgICAgICByeDogbnVtYmVyLFxuICAgICAgICByeTogbnVtYmVyLFxuICAgICAgICB4QXhpc1JvdGF0aW9uOiBudW1iZXIsXG4gICAgICAgIGxhcmdlQXJjRmxhZzogbnVtYmVyLFxuICAgICAgICBzd2VlcEZsYWc6IG51bWJlcixcbiAgICAgICAgeDogbnVtYmVyLFxuICAgICAgICB5OiBudW1iZXJcbiAgICApIHtcbiAgICAgICAgY29uc3QgY1NlcmllcyA9IFBhdGhNYWtlci5hMmModGhpcy5jdXJyZW50WCwgdGhpcy5jdXJyZW50WSwgcngsIHJ5LCB4QXhpc1JvdGF0aW9uLCBsYXJnZUFyY0ZsYWcsIHN3ZWVwRmxhZywgeCwgeSkgYXMgbnVtYmVyW11cbiAgICAgICAgd2hpbGUgKGNTZXJpZXMubGVuZ3RoID49IDYpIHtcbiAgICAgICAgICAgIGNvbnN0IGlvdkxpc3QgPSBjU2VyaWVzLnNwbGljZSgwLCA2KVxuICAgICAgICAgICAgdGhpcy5wYXRoLmkhLnB1c2goW2lvdkxpc3RbMl0gLSBpb3ZMaXN0WzRdLCBpb3ZMaXN0WzNdIC0gaW92TGlzdFs1XV0pXG4gICAgICAgICAgICB0aGlzLnBhdGgubyEucHVzaChbaW92TGlzdFswXSAtIHRoaXMuY3VycmVudFgsIGlvdkxpc3RbMV0gLSB0aGlzLmN1cnJlbnRZXSlcbiAgICAgICAgICAgIHRoaXMucGF0aC52IS5wdXNoKFtpb3ZMaXN0WzRdLCBpb3ZMaXN0WzVdXSlcbiAgICAgICAgICAgIHRoaXMub2Zmc2V0WCA9IE1hdGgubWluKHRoaXMub2Zmc2V0WCwgLi4udGhpcy5jYWxjdWxhdGVCZXppZXJNaW5NYXgodGhpcy5jdXJyZW50WCwgaW92TGlzdFswXSwgaW92TGlzdFsyXSwgaW92TGlzdFs0XSkpXG4gICAgICAgICAgICB0aGlzLm9mZnNldFkgPSBNYXRoLm1pbih0aGlzLm9mZnNldFksIC4uLnRoaXMuY2FsY3VsYXRlQmV6aWVyTWluTWF4KHRoaXMuY3VycmVudFksIGlvdkxpc3RbMV0sIGlvdkxpc3RbM10sIGlvdkxpc3RbNV0pKVxuICAgICAgICAgICAgdGhpcy51cGRhdGVYWShpb3ZMaXN0WzRdLCBpb3ZMaXN0WzVdKVxuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBhcmNUb1JlbGF0aXZlKFxuICAgICAgICByeDogbnVtYmVyLFxuICAgICAgICByeTogbnVtYmVyLFxuICAgICAgICB4QXhpc1JvdGF0aW9uOiBudW1iZXIsXG4gICAgICAgIGxhcmdlQXJjRmxhZzogbnVtYmVyLFxuICAgICAgICBzd2VlcEZsYWc6IG51bWJlcixcbiAgICAgICAgeDogbnVtYmVyLFxuICAgICAgICB5OiBudW1iZXJcbiAgICApIHtcbiAgICAgICAgdGhpcy5hcmNUbyhyeCwgcnksIHhBeGlzUm90YXRpb24sIGxhcmdlQXJjRmxhZywgc3dlZXBGbGFnLCB0aGlzLmN1cnJlbnRYICsgeCwgdGhpcy5jdXJyZW50WSArIHkpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgYTJjKHgxOiBudW1iZXIsIHkxOiBudW1iZXIsIHJ4OiBudW1iZXIsIHJ5OiBudW1iZXIsIGFuZ2xlOiBudW1iZXIsIGxhcmdlX2FyY19mbGFnOiBudW1iZXIsIHN3ZWVwX2ZsYWc6IG51bWJlciwgeDI6IG51bWJlciwgeTI6IG51bWJlciwgcmVjdXJzaXZlPzogbnVtYmVyW10pOiBudW1iZXJbXSB8IG51bWJlcltdW10ge1xuICAgICAgICAvLyBmb3IgbW9yZSBpbmZvcm1hdGlvbiBvZiB3aGVyZSB0aGlzIE1hdGggY2FtZSBmcm9tIHZpc2l0OlxuICAgICAgICAvLyBodHRwOi8vd3d3LnczLm9yZy9UUi9TVkcxMS9pbXBsbm90ZS5odG1sI0FyY0ltcGxlbWVudGF0aW9uTm90ZXNcbiAgICAgICAgdmFyIF8xMjAgPSBNYXRoLlBJICogMTIwIC8gMTgwLFxuICAgICAgICAgICAgcmFkID0gTWF0aC5QSSAvIDE4MCAqICgrYW5nbGUgfHwgMCksXG4gICAgICAgICAgICByZXM6IG51bWJlcltdID0gW10sXG4gICAgICAgICAgICB4eSxcbiAgICAgICAgICAgIHJvdGF0ZSA9ICh4OiBudW1iZXIsIHk6IG51bWJlciwgcmFkOiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgWCA9IHggKiBNYXRoLmNvcyhyYWQpIC0geSAqIE1hdGguc2luKHJhZCksXG4gICAgICAgICAgICAgICAgICAgIFkgPSB4ICogTWF0aC5zaW4ocmFkKSArIHkgKiBNYXRoLmNvcyhyYWQpO1xuICAgICAgICAgICAgICAgIHJldHVybiB7IHg6IFgsIHk6IFkgfTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIGlmICghcnggfHwgIXJ5KSB7XG4gICAgICAgICAgICByZXR1cm4gW3gxLCB5MSwgeDIsIHkyLCB4MiwgeTJdO1xuICAgICAgICB9XG4gICAgICAgIGlmICghcmVjdXJzaXZlKSB7XG4gICAgICAgICAgICB4eSA9IHJvdGF0ZSh4MSwgeTEsIC1yYWQpO1xuICAgICAgICAgICAgeDEgPSB4eS54O1xuICAgICAgICAgICAgeTEgPSB4eS55O1xuICAgICAgICAgICAgeHkgPSByb3RhdGUoeDIsIHkyLCAtcmFkKTtcbiAgICAgICAgICAgIHgyID0geHkueDtcbiAgICAgICAgICAgIHkyID0geHkueTtcbiAgICAgICAgICAgIHZhciBjb3MgPSBNYXRoLmNvcyhNYXRoLlBJIC8gMTgwICogYW5nbGUpLFxuICAgICAgICAgICAgICAgIHNpbiA9IE1hdGguc2luKE1hdGguUEkgLyAxODAgKiBhbmdsZSksXG4gICAgICAgICAgICAgICAgeCA9ICh4MSAtIHgyKSAvIDIsXG4gICAgICAgICAgICAgICAgeSA9ICh5MSAtIHkyKSAvIDI7XG4gICAgICAgICAgICB2YXIgaCA9IHggKiB4IC8gKHJ4ICogcngpICsgeSAqIHkgLyAocnkgKiByeSk7XG4gICAgICAgICAgICBpZiAoaCA+IDEpIHtcbiAgICAgICAgICAgICAgICBoID0gTWF0aC5zcXJ0KGgpO1xuICAgICAgICAgICAgICAgIHJ4ID0gaCAqIHJ4O1xuICAgICAgICAgICAgICAgIHJ5ID0gaCAqIHJ5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHJ4MiA9IHJ4ICogcngsXG4gICAgICAgICAgICAgICAgcnkyID0gcnkgKiByeSxcbiAgICAgICAgICAgICAgICBrID0gKGxhcmdlX2FyY19mbGFnID09IHN3ZWVwX2ZsYWcgPyAtMSA6IDEpICpcbiAgICAgICAgICAgICAgICAgICAgTWF0aC5zcXJ0KE1hdGguYWJzKChyeDIgKiByeTIgLSByeDIgKiB5ICogeSAtIHJ5MiAqIHggKiB4KSAvIChyeDIgKiB5ICogeSArIHJ5MiAqIHggKiB4KSkpLFxuICAgICAgICAgICAgICAgIGN4ID0gayAqIHJ4ICogeSAvIHJ5ICsgKHgxICsgeDIpIC8gMixcbiAgICAgICAgICAgICAgICBjeSA9IGsgKiAtcnkgKiB4IC8gcnggKyAoeTEgKyB5MikgLyAyLFxuICAgICAgICAgICAgICAgIGYxID0gTWF0aC5hc2luKCh5MSAtIGN5KSAvIHJ5KSxcbiAgICAgICAgICAgICAgICBmMiA9IE1hdGguYXNpbigoeTIgLSBjeSkgLyByeSk7XG5cbiAgICAgICAgICAgIGYxID0geDEgPCBjeCA/IE1hdGguUEkgLSBmMSA6IGYxO1xuICAgICAgICAgICAgZjIgPSB4MiA8IGN4ID8gTWF0aC5QSSAtIGYyIDogZjI7XG4gICAgICAgICAgICBmMSA8IDAgJiYgKGYxID0gTWF0aC5QSSAqIDIgKyBmMSk7XG4gICAgICAgICAgICBmMiA8IDAgJiYgKGYyID0gTWF0aC5QSSAqIDIgKyBmMik7XG4gICAgICAgICAgICBpZiAoc3dlZXBfZmxhZyAmJiBmMSA+IGYyKSB7XG4gICAgICAgICAgICAgICAgZjEgPSBmMSAtIE1hdGguUEkgKiAyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFzd2VlcF9mbGFnICYmIGYyID4gZjEpIHtcbiAgICAgICAgICAgICAgICBmMiA9IGYyIC0gTWF0aC5QSSAqIDI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmMSA9IHJlY3Vyc2l2ZVswXTtcbiAgICAgICAgICAgIGYyID0gcmVjdXJzaXZlWzFdO1xuICAgICAgICAgICAgY3ggPSByZWN1cnNpdmVbMl07XG4gICAgICAgICAgICBjeSA9IHJlY3Vyc2l2ZVszXTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZGYgPSBmMiAtIGYxO1xuICAgICAgICBpZiAoTWF0aC5hYnMoZGYpID4gXzEyMCkge1xuICAgICAgICAgICAgdmFyIGYyb2xkID0gZjIsXG4gICAgICAgICAgICAgICAgeDJvbGQgPSB4MixcbiAgICAgICAgICAgICAgICB5Mm9sZCA9IHkyO1xuICAgICAgICAgICAgZjIgPSBmMSArIF8xMjAgKiAoc3dlZXBfZmxhZyAmJiBmMiA+IGYxID8gMSA6IC0xKTtcbiAgICAgICAgICAgIHgyID0gY3ggKyByeCAqIE1hdGguY29zKGYyKTtcbiAgICAgICAgICAgIHkyID0gY3kgKyByeSAqIE1hdGguc2luKGYyKTtcbiAgICAgICAgICAgIHJlcyA9IHRoaXMuYTJjKHgyLCB5MiwgcngsIHJ5LCBhbmdsZSwgMCwgc3dlZXBfZmxhZywgeDJvbGQsIHkyb2xkLCBbZjIsIGYyb2xkLCBjeCwgY3ldKSBhcyBudW1iZXJbXTtcbiAgICAgICAgfVxuICAgICAgICBkZiA9IGYyIC0gZjE7XG4gICAgICAgIHZhciBjMSA9IE1hdGguY29zKGYxKSxcbiAgICAgICAgICAgIHMxID0gTWF0aC5zaW4oZjEpLFxuICAgICAgICAgICAgYzIgPSBNYXRoLmNvcyhmMiksXG4gICAgICAgICAgICBzMiA9IE1hdGguc2luKGYyKSxcbiAgICAgICAgICAgIHQgPSBNYXRoLnRhbihkZiAvIDQpLFxuICAgICAgICAgICAgaHggPSA0IC8gMyAqIHJ4ICogdCxcbiAgICAgICAgICAgIGh5ID0gNCAvIDMgKiByeSAqIHQsXG4gICAgICAgICAgICBtMSA9IFt4MSwgeTFdLFxuICAgICAgICAgICAgbTIgPSBbeDEgKyBoeCAqIHMxLCB5MSAtIGh5ICogYzFdLFxuICAgICAgICAgICAgbTMgPSBbeDIgKyBoeCAqIHMyLCB5MiAtIGh5ICogYzJdLFxuICAgICAgICAgICAgbTQgPSBbeDIsIHkyXTtcbiAgICAgICAgbTJbMF0gPSAyICogbTFbMF0gLSBtMlswXTtcbiAgICAgICAgbTJbMV0gPSAyICogbTFbMV0gLSBtMlsxXTtcbiAgICAgICAgaWYgKHJlY3Vyc2l2ZSkge1xuICAgICAgICAgICAgcmV0dXJuIFttMiwgbTMsIG00XS5jb25jYXQocmVzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlcyA9IFttMiwgbTMsIG00XS5jb25jYXQocmVzKS5qb2luKCkuc3BsaXQoXCIsXCIpLm1hcCh4ID0+IHBhcnNlRmxvYXQoeCkpO1xuICAgICAgICAgICAgdmFyIG5ld3JlcyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGlpID0gcmVzLmxlbmd0aDsgaSA8IGlpOyBpKyspIHtcbiAgICAgICAgICAgICAgICBuZXdyZXNbaV0gPSBpICUgMiA/IHJvdGF0ZShyZXNbaSAtIDFdLCByZXNbaV0sIHJhZCkueSA6IHJvdGF0ZShyZXNbaV0sIHJlc1tpICsgMV0sIHJhZCkueDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuZXdyZXM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgY2xvc2VQYXRoKCkge1xuICAgICAgICB0aGlzLnBhdGguYyA9IHRydWVcbiAgICB9XG5cbiAgICBwdWJsaWMgdW5pZm9ybSgpIHtcbiAgICAgICAgd2hpbGUgKHRoaXMucGF0aC5vIS5sZW5ndGggPCB0aGlzLnBhdGguaSEubGVuZ3RoKVxuICAgICAgICAgICAgdGhpcy5wYXRoLm8hLnB1c2goWzAsIDBdKVxuICAgICAgICB0aGlzLnBhdGgudiEuZm9yRWFjaCh2YWx1ZSA9PiB7XG4gICAgICAgICAgICB2YWx1ZVswXSAtPSB0aGlzLm9mZnNldFhcbiAgICAgICAgICAgIHZhbHVlWzFdIC09IHRoaXMub2Zmc2V0WVxuICAgICAgICB9KVxuICAgICAgICB0aGlzLm9mZnNldFggPSAwXG4gICAgICAgIHRoaXMub2Zmc2V0WSA9IDBcbiAgICB9XG59Il19

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

var _helper = __webpack_require__(/*! ./helper */ "./node_modules/jsmovin/bin/helper.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function render(dom, baseDom) {
  if (dom instanceof SVGTextElement || dom instanceof SVGImageElement) {
    return [];
  } else if (dom instanceof SVGGElement) {
    return renderGroup(dom, baseDom);
  } else {
    return renderGlyph(dom, baseDom);
  }
}

function addVisualEncodings(items, styles, dom, baseDom) {
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
      lc: (0, _helper.encodeLineCap)(styles.strokeLinecap),
      lj: (0, _helper.encodeLineJoin)(styles.strokeLinejoin)
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

  var posX = 0,
      posY = 0;

  if (dom && baseDom) {
    var baseTransform = (0, _helper.calculateBaseTransform)(dom, baseDom);
    var baseBBox = baseDom.getBBox();
    var refBBox = dom.getBBox();
    posX = baseTransform.e + refBBox.x - baseBBox.x;
    posY = baseTransform.f + refBBox.y - baseBBox.y;
  }

  items.push({
    ty: "tr",
    p: {
      k: [posX, posY]
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
      k: parseFloat(styles.opacity || '1') * 100
    },
    sk: {
      k: 0
    },
    sa: {
      k: 0
    }
  });
}

function renderGlyph(dom, baseDom) {
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
    addVisualEncodings(group.it, styles, dom, baseDom);
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

  return [group];
}

function renderGroup(dom, baseDom) {
  var items = [];
  dom.childNodes.forEach(function (node) {
    if (node instanceof SVGGraphicsElement) {
      items = render(node, baseDom || dom).concat(items);
    }
  });
  return items;
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
      ty: 'st',
      c: {
        k: [1, 1, 1, 1]
      },
      w: {
        k: 1
      },
      o: {
        k: 100
      },
      lc: (0, _helper.encodeLineCap)('butt'),
      lj: (0, _helper.encodeLineJoin)('miter')
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

function renderText(dom, fontList) {
  var computedStyle = getComputedStyle(dom);
  var fontSize = parseFloat(computedStyle.fontSize),
      fontFamily = computedStyle.fontFamily.split(',')[0].trim(),
      fontStyle = computedStyle.fontStyle,
      fontWeight = computedStyle.fontWeight,
      fontColor = (computedStyle.color || 'rgb(0,0,0)').split('(')[1].split(')')[0].split(',').map(function (i) {
    return parseInt(i) / 255;
  });
  var fontName = (0, _v["default"])();

  if (fontList) {
    var fontExist = fontList.list.filter(function (font) {
      return font.fFamily == fontFamily && font.fStyle == fontStyle && font.fWeight == fontWeight;
    });
    if (fontExist.length) fontName = fontExist[0].fName;
  }

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
          ls: 0,
          fc: fontColor
        }
      }]
    },
    p: {},
    m: {
      a: {
        k: [0, 0]
      }
    },
    a: []
  };
  var fontDef = {
    fFamily: fontFamily,
    fWeight: "".concat(fontWeight),
    fStyle: fontStyle,
    fName: fontName
  };
  return [textData, fontDef];
}

function renderImage(dom, assetList) {
  var id = (0, _v["default"])();
  var domHeightVal = dom.height.baseVal;
  domHeightVal.convertToSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PX);
  var domWidthVal = dom.width.baseVal;
  domWidthVal.convertToSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PX);
  var canvas = document.createElement('canvas');
  var ctx = canvas.getContext('2d');
  canvas.width = domWidthVal.valueInSpecifiedUnits * 3;
  canvas.height = domHeightVal.valueInSpecifiedUnits * 3;
  ctx.drawImage(dom, 0, 0, canvas.width, canvas.height);
  var dataUrl = canvas.toDataURL();

  if (assetList) {
    var assetExist = assetList.filter(function (asset) {
      return asset.p == dataUrl;
    });
    if (assetExist.length) id = assetExist[0].id;
  }

  var asset = {
    h: domHeightVal.valueInSpecifiedUnits,
    w: domWidthVal.valueInSpecifiedUnits,
    id: id,
    p: dataUrl,
    e: 1
  };
  return [id, asset];
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZW5kZXIudHMiXSwibmFtZXMiOlsicmVuZGVyIiwiZG9tIiwiYmFzZURvbSIsIlNWR1RleHRFbGVtZW50IiwiU1ZHSW1hZ2VFbGVtZW50IiwiU1ZHR0VsZW1lbnQiLCJyZW5kZXJHcm91cCIsInJlbmRlckdseXBoIiwiYWRkVmlzdWFsRW5jb2RpbmdzIiwiaXRlbXMiLCJzdHlsZXMiLCJzdHJva2UiLCJwdXNoIiwidHkiLCJjIiwiayIsInNwbGl0Iiwic2xpY2UiLCJtYXAiLCJyYXciLCJwYXJzZUludCIsImNvbmNhdCIsIm8iLCJwYXJzZUZsb2F0Iiwic3Ryb2tlT3BhY2l0eSIsInciLCJzdHJva2VXaWR0aCIsImxjIiwic3Ryb2tlTGluZWNhcCIsImxqIiwic3Ryb2tlTGluZWpvaW4iLCJmaWxsIiwiZmlsbE9wYWNpdHkiLCJwb3NYIiwicG9zWSIsImJhc2VUcmFuc2Zvcm0iLCJiYXNlQkJveCIsImdldEJCb3giLCJyZWZCQm94IiwiZSIsIngiLCJmIiwieSIsInAiLCJhIiwicyIsInIiLCJvcGFjaXR5Iiwic2siLCJzYSIsImdyb3VwIiwiaXQiLCJibSIsImhkIiwicG9zdEFjdGlvbnMiLCJwYXRoTWFrZXIiLCJ1bmlmb3JtIiwia3MiLCJwYXRoIiwibm0iLCJpZCIsIndpbmRvdyIsImdldENvbXB1dGVkU3R5bGUiLCJTVkdDaXJjbGVFbGVtZW50Iiwic3ZnTGVuZ3RoIiwiYmFzZVZhbCIsImNvbnZlcnRUb1NwZWNpZmllZFVuaXRzIiwiU1ZHTGVuZ3RoIiwiU1ZHX0xFTkdUSFRZUEVfUFgiLCJ2YWx1ZUluU3BlY2lmaWVkVW5pdHMiLCJQYXRoTWFrZXIiLCJtb3ZlVG8iLCJhcmNUbyIsImNsb3NlUGF0aCIsIlNWR0VsbGlwc2VFbGVtZW50IiwibWFwS2V5Iiwia2V5IiwicngiLCJyeSIsIlNWR0xpbmVFbGVtZW50IiwieDEiLCJ4MiIsInkxIiwieTIiLCJvZmZzZXRYIiwiTWF0aCIsIm1pbiIsIm9mZnNldFkiLCJsaW5lVG8iLCJTVkdQYXRoRWxlbWVudCIsInBhdGhEYXRhIiwiZ2V0QXR0cmlidXRlIiwicGF0aERhdGFTZXJpZXMiLCJwYXRoRGF0YVdpdGhUeXBlIiwiZm9yRWFjaCIsInBhdGhEYXRhSXRlbSIsImNvZGUiLCJsaW5lVG9SZWxhdGl2ZSIsImhvcml6b250YWxUbyIsImhvcml6b250YWxUb1JlbGF0aXZlIiwidmVydGljYWxUbyIsInZlcnRpY2FsVG9SZWxhdGl2ZSIsImN1YmljQmV6aWVyQ3VydmVUbyIsImN1YmljQmV6aWVyQ3VydmVUb1JlbGF0aXZlIiwicXVhZHJhdGljQmV6aWVyQ3VydmVUbyIsInF1YWRyYXRpY0JlemllckN1cnZlVG9SZWxhdGl2ZSIsInhBeGlzUm90YXRpb24iLCJsYXJnZUFyYyIsInN3ZWVwIiwiYXJjVG9SZWxhdGl2ZSIsImNvbnNvbGUiLCJlcnJvciIsIkVycm9yIiwiU1ZHUG9seWdvbkVsZW1lbnQiLCJTVkdQb2x5bGluZUVsZW1lbnQiLCJwb2ludHMiLCJsZW5ndGgiLCJpdGVyYWJsZVBvaW50cyIsIkFycmF5IiwicHJvdG90eXBlIiwiY2FsbCIsInJlZHVjZSIsInYiLCJpIiwiU1ZHUmVjdEVsZW1lbnQiLCJ3aWR0aCIsImhlaWdodCIsImNoaWxkTm9kZXMiLCJub2RlIiwiU1ZHR3JhcGhpY3NFbGVtZW50IiwicmVuZGVyUGxhaW5HbHlwaCIsInR5cGUiLCJhcmdzIiwicmVuZGVyVGV4dCIsImZvbnRMaXN0IiwiY29tcHV0ZWRTdHlsZSIsImZvbnRTaXplIiwiZm9udEZhbWlseSIsInRyaW0iLCJmb250U3R5bGUiLCJmb250V2VpZ2h0IiwiZm9udENvbG9yIiwiY29sb3IiLCJmb250TmFtZSIsImZvbnRFeGlzdCIsImxpc3QiLCJmaWx0ZXIiLCJmb250IiwiZkZhbWlseSIsImZTdHlsZSIsImZXZWlnaHQiLCJmTmFtZSIsInRleHREYXRhIiwiZCIsInQiLCJpbm5lckhUTUwiLCJqIiwidHIiLCJscyIsImZjIiwibSIsImZvbnREZWYiLCJyZW5kZXJJbWFnZSIsImFzc2V0TGlzdCIsImRvbUhlaWdodFZhbCIsImRvbVdpZHRoVmFsIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY3R4IiwiZ2V0Q29udGV4dCIsImRyYXdJbWFnZSIsImRhdGFVcmwiLCJ0b0RhdGFVUkwiLCJhc3NldEV4aXN0IiwiYXNzZXQiLCJoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUdPLFNBQVNBLE1BQVQsQ0FBZ0JDLEdBQWhCLEVBQXlDQyxPQUF6QyxFQUFxRjtBQUN4RixNQUFJRCxHQUFHLFlBQVlFLGNBQWYsSUFBaUNGLEdBQUcsWUFBWUcsZUFBcEQsRUFBcUU7QUFDakUsV0FBTyxFQUFQO0FBQ0gsR0FGRCxNQUVPLElBQUlILEdBQUcsWUFBWUksV0FBbkIsRUFBZ0M7QUFDbkMsV0FBT0MsV0FBVyxDQUFDTCxHQUFELEVBQU1DLE9BQU4sQ0FBbEI7QUFDSCxHQUZNLE1BRUE7QUFDSCxXQUFPSyxXQUFXLENBQUNOLEdBQUQsRUFBTUMsT0FBTixDQUFsQjtBQUNIO0FBQ0o7O0FBSUQsU0FBU00sa0JBQVQsQ0FBNEJDLEtBQTVCLEVBQXNEQyxNQUF0RCxFQUFtRlQsR0FBbkYsRUFBNkdDLE9BQTdHLEVBQTJJO0FBQ3ZJLE1BQUlRLE1BQU0sQ0FBQ0MsTUFBUCxJQUFpQkQsTUFBTSxDQUFDQyxNQUFQLEtBQWtCLE1BQXZDLEVBQStDO0FBQzNDRixJQUFBQSxLQUFLLENBQUNHLElBQU4sQ0FBVztBQUNQQyxNQUFBQSxFQUFFLEVBQUUsSUFERztBQUVQQyxNQUFBQSxDQUFDLEVBQUU7QUFDQ0MsUUFBQUEsQ0FBQyxFQUFFTCxNQUFNLENBQUNDLE1BQVAsQ0FBZUssS0FBZixDQUFxQixHQUFyQixFQUEwQixDQUExQixFQUE2QkEsS0FBN0IsQ0FBbUMsR0FBbkMsRUFBd0MsQ0FBeEMsRUFBMkNBLEtBQTNDLENBQWlELEdBQWpELEVBQXNEQyxLQUF0RCxDQUE0RCxDQUE1RCxFQUErRCxDQUEvRCxFQUFrRUMsR0FBbEUsQ0FBc0UsVUFB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QixDQUF2QixFQUEwQnFLLE1BQU0sQ0FBQ3pDLEtBQWpDLEVBQXdDeUMsTUFBTSxDQUFDeEMsTUFBL0M7QUFFQSxNQUFNOEMsT0FBTyxHQUFHTixNQUFNLENBQUNPLFNBQVAsRUFBaEI7O0FBQ0EsTUFBSVYsU0FBSixFQUFlO0FBQ1gsUUFBTVcsVUFBVSxHQUFHWCxTQUFTLENBQUVqQixNQUFYLENBQWtCLFVBQUE2QixLQUFLO0FBQUEsYUFBSUEsS0FBSyxDQUFDcEksQ0FBTixJQUFXaUksT0FBZjtBQUFBLEtBQXZCLENBQW5CO0FBQ0EsUUFBSUUsVUFBVSxDQUFDMUQsTUFBZixFQUNJeEQsRUFBRSxHQUFHa0gsVUFBVSxDQUFDLENBQUQsQ0FBVixDQUFjbEgsRUFBbkI7QUFDUDs7QUFDRCxNQUFNbUgsS0FBSyxHQUFHO0FBQ1ZDLElBQUFBLENBQUMsRUFBRVosWUFBWSxDQUFDL0YscUJBRE47QUFFVjVDLElBQUFBLENBQUMsRUFBRTRJLFdBQVcsQ0FBQ2hHLHFCQUZMO0FBR1ZULElBQUFBLEVBQUUsRUFBRkEsRUFIVTtBQUlWakIsSUFBQUEsQ0FBQyxFQUFFaUksT0FKTztBQUtWckksSUFBQUEsQ0FBQyxFQUFFO0FBTE8sR0FBZDtBQU9BLFNBQU8sQ0FBQ3FCLEVBQUQsRUFBS21ILEtBQUwsQ0FBUDtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3JvdXBTaGFwZSwgVGV4dERhdGEsIFJlZmVyZW5jZUlELCBQYXRoU2hhcGUsIEZpbGxTaGFwZSwgU3Ryb2tlU2hhcGUsIFRyYW5zZm9ybVNoYXBlLCBJbWFnZUFzc2V0LCBGb250MSwgRm9udHMsIEFzc2V0cyB9IGZyb20gJy4vYW5pbWF0aW9uJ1xuaW1wb3J0IHsgUGF0aE1ha2VyIH0gZnJvbSAnLi9wYXRoJ1xuaW1wb3J0IHV1aWQgZnJvbSAndXVpZC92NCdcbmltcG9ydCB7IHBhcnNlU1ZHLCBNb3ZlVG9Db21tYW5kLCBMaW5lVG9Db21tYW5kLCBIb3Jpem9udGFsTGluZVRvQ29tbWFuZCwgVmVydGljYWxMaW5lVG9Db21tYW5kLCBDdXJ2ZVRvQ29tbWFuZCwgUXVhZHJhdGljQ3VydmVUb0NvbW1hbmQsIEVsbGlwdGljYWxBcmNDb21tYW5kIH0gZnJvbSAnc3ZnLXBhdGgtcGFyc2VyJ1xuaW1wb3J0IHsgY2FsY3VsYXRlQmFzZVRyYW5zZm9ybSwgZW5jb2RlTGluZUpvaW4sIGVuY29kZUxpbmVDYXAgfSBmcm9tICcuL2hlbHBlcidcblxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKGRvbTogU1ZHR3JhcGhpY3NFbGVtZW50LCBiYXNlRG9tPzogU1ZHR3JhcGhpY3NFbGVtZW50KTogR3JvdXBTaGFwZVtdIHtcbiAgICBpZiAoZG9tIGluc3RhbmNlb2YgU1ZHVGV4dEVsZW1lbnQgfHwgZG9tIGluc3RhbmNlb2YgU1ZHSW1hZ2VFbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBbXVxuICAgIH0gZWxzZSBpZiAoZG9tIGluc3RhbmNlb2YgU1ZHR0VsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHJlbmRlckdyb3VwKGRvbSwgYmFzZURvbSlcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVuZGVyR2x5cGgoZG9tLCBiYXNlRG9tKVxuICAgIH1cbn1cblxudHlwZSBWaXN1YWxHcm91cEl0ZW0gPSBQYXRoU2hhcGUgfCBGaWxsU2hhcGUgfCBTdHJva2VTaGFwZSB8IFRyYW5zZm9ybVNoYXBlXG5cbmZ1bmN0aW9uIGFkZFZpc3VhbEVuY29kaW5ncyhpdGVtczogVmlzdWFsR3JvdXBJdGVtW10sIHN0eWxlczogQ1NTU3R5bGVEZWNsYXJhdGlvbiwgZG9tPzogU1ZHR3JhcGhpY3NFbGVtZW50LCBiYXNlRG9tPzogU1ZHR3JhcGhpY3NFbGVtZW50KSB7XG4gICAgaWYgKHN0eWxlcy5zdHJva2UgJiYgc3R5bGVzLnN0cm9rZSAhPT0gJ25vbmUnKSB7XG4gICAgICAgIGl0ZW1zLnB1c2goe1xuICAgICAgICAgICAgdHk6ICdzdCcsXG4gICAgICAgICAgICBjOiB7XG4gICAgICAgICAgICAgICAgazogc3R5bGVzLnN0cm9rZSEuc3BsaXQoJygnKVsxXS5zcGxpdCgnKScpWzBdLnNwbGl0KCcsJykuc2xpY2UoMCwgMykubWFwKChyYXc6IHN0cmluZykgPT4gcGFyc2VJbnQocmF3KSAvIDI1NSkuY29uY2F0KDEpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbzoge1xuICAgICAgICAgICAgICAgIGs6IHBhcnNlRmxvYXQoc3R5bGVzLnN0cm9rZU9wYWNpdHkgfHwgJzEnKSAqIDEwMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHc6IHtcbiAgICAgICAgICAgICAgICBrOiBwYXJzZUZsb2F0KHN0eWxlcy5zdHJva2VXaWR0aCB8fCAnMScpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGM6IGVuY29kZUxpbmVDYXAoc3R5bGVzLnN0cm9rZUxpbmVjYXApLFxuICAgICAgICAgICAgbGo6IGVuY29kZUxpbmVKb2luKHN0eWxlcy5zdHJva2VMaW5lam9pbilcbiAgICAgICAgfSlcbiAgICB9XG4gICAgaWYgKHN0eWxlcy5maWxsICYmIHN0eWxlcy5maWxsICE9PSAnbm9uZScpIHtcbiAgICAgICAgaXRlbXMucHVzaCh7XG4gICAgICAgICAgICB0eTogJ2ZsJyxcbiAgICAgICAgICAgIGM6IHtcbiAgICAgICAgICAgICAgICBrOiBzdHlsZXMuZmlsbCEuc3BsaXQoJygnKVsxXS5zcGxpdCgnKScpWzBdLnNwbGl0KCcsJykuc2xpY2UoMCwgMykubWFwKChyYXc6IHN0cmluZykgPT4gcGFyc2VJbnQocmF3KSAvIDI1NSkuY29uY2F0KDEpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbzoge1xuICAgICAgICAgICAgICAgIGs6IHBhcnNlRmxvYXQoc3R5bGVzLmZpbGxPcGFjaXR5IHx8ICcxJykgKiAxMDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG4gICAgbGV0IHBvc1ggPSAwLCBwb3NZID0gMFxuICAgIGlmIChkb20gJiYgYmFzZURvbSkge1xuICAgICAgICBjb25zdCBiYXNlVHJhbnNmb3JtID0gY2FsY3VsYXRlQmFzZVRyYW5zZm9ybShkb20sIGJhc2VEb20pXG4gICAgICAgIGNvbnN0IGJhc2VCQm94ID0gYmFzZURvbS5nZXRCQm94KClcbiAgICAgICAgY29uc3QgcmVmQkJveCA9IGRvbS5nZXRCQm94KClcbiAgICAgICAgcG9zWCA9IGJhc2VUcmFuc2Zvcm0uZSArIHJlZkJCb3gueCAtIGJhc2VCQm94LnhcbiAgICAgICAgcG9zWSA9IGJhc2VUcmFuc2Zvcm0uZiArIHJlZkJCb3gueSAtIGJhc2VCQm94LnlcbiAgICB9XG4gICAgaXRlbXMucHVzaCh7XG4gICAgICAgIHR5OiBcInRyXCIsXG4gICAgICAgIHA6IHtcbiAgICAgICAgICAgIGs6IFtcbiAgICAgICAgICAgICAgICBwb3NYLFxuICAgICAgICAgICAgICAgIHBvc1lcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgYToge1xuICAgICAgICAgICAgazogW1xuICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBzOiB7XG4gICAgICAgICAgICBrOiBbXG4gICAgICAgICAgICAgICAgMTAwLFxuICAgICAgICAgICAgICAgIDEwMFxuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICByOiB7XG4gICAgICAgICAgICBrOiAwXG4gICAgICAgIH0sXG4gICAgICAgIG86IHtcbiAgICAgICAgICAgIGs6IHBhcnNlRmxvYXQoc3R5bGVzLm9wYWNpdHkgfHwgJzEnKSAqIDEwMFxuICAgICAgICB9LFxuICAgICAgICBzazoge1xuICAgICAgICAgICAgazogMFxuICAgICAgICB9LFxuICAgICAgICBzYToge1xuICAgICAgICAgICAgazogMFxuICAgICAgICB9XG4gICAgfSlcblxufVxuXG5mdW5jdGlvbiByZW5kZXJHbHlwaChkb206IFNWR0dyYXBoaWNzRWxlbWVudCwgYmFzZURvbT86IFNWR0dyYXBoaWNzRWxlbWVudCk6IEdyb3VwU2hhcGVbXSB7XG4gICAgY29uc3QgZ3JvdXA6IEdyb3VwU2hhcGUgPSB7XG4gICAgICAgIHR5OiBcImdyXCIsXG4gICAgICAgIGl0OiBbXSxcbiAgICAgICAgYm06IDAsXG4gICAgICAgIGhkOiBmYWxzZVxuICAgIH1cbiAgICBjb25zdCBwb3N0QWN0aW9ucyA9IChwYXRoTWFrZXI6IFBhdGhNYWtlcikgPT4ge1xuICAgICAgICBwYXRoTWFrZXIudW5pZm9ybSgpXG4gICAgICAgIGdyb3VwLml0IS5wdXNoKHtcbiAgICAgICAgICAgIHR5OiAnc2gnLFxuICAgICAgICAgICAga3M6IHtcbiAgICAgICAgICAgICAgICBrOiBwYXRoTWFrZXIucGF0aCxcbiAgICAgICAgICAgICAgICBhOiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbm06IGRvbS5pZCxcbiAgICAgICAgICAgIGhkOiBmYWxzZVxuICAgICAgICB9KVxuICAgICAgICBjb25zdCBzdHlsZXMgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkb20pXG4gICAgICAgIGFkZFZpc3VhbEVuY29kaW5ncyhncm91cC5pdCEgYXMgVmlzdWFsR3JvdXBJdGVtW10sIHN0eWxlcywgZG9tLCBiYXNlRG9tKVxuICAgIH1cbiAgICBpZiAoZG9tIGluc3RhbmNlb2YgU1ZHQ2lyY2xlRWxlbWVudCkge1xuICAgICAgICBjb25zdCBzdmdMZW5ndGggPSBkb20uci5iYXNlVmFsXG4gICAgICAgIHN2Z0xlbmd0aC5jb252ZXJ0VG9TcGVjaWZpZWRVbml0cyhTVkdMZW5ndGguU1ZHX0xFTkdUSFRZUEVfUFgpXG4gICAgICAgIGNvbnN0IHIgPSBzdmdMZW5ndGgudmFsdWVJblNwZWNpZmllZFVuaXRzXG4gICAgICAgIGNvbnN0IHBhdGhNYWtlciA9IG5ldyBQYXRoTWFrZXIoKVxuICAgICAgICBwYXRoTWFrZXIubW92ZVRvKHIsIDApXG4gICAgICAgIHBhdGhNYWtlci5hcmNUbyhyLCByLCAwLCAxLCAwLCByLCAyICogcilcbiAgICAgICAgcGF0aE1ha2VyLmFyY1RvKHIsIHIsIDAsIDEsIDAsIHIsIDApXG4gICAgICAgIHBhdGhNYWtlci5jbG9zZVBhdGgoKVxuICAgICAgICBwb3N0QWN0aW9ucyhwYXRoTWFrZXIpXG4gICAgfSBlbHNlIGlmIChkb20gaW5zdGFuY2VvZiBTVkdFbGxpcHNlRWxlbWVudCkge1xuICAgICAgICBjb25zdCBtYXBLZXk6ICgncngnIHwgJ3J5JylbXSA9IFsncngnLCAncnknXVxuICAgICAgICBjb25zdCBbcngsIHJ5XSA9IG1hcEtleS5tYXAoa2V5ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN2Z0xlbmd0aCA9IGRvbVtrZXldLmJhc2VWYWxcbiAgICAgICAgICAgIHN2Z0xlbmd0aC5jb252ZXJ0VG9TcGVjaWZpZWRVbml0cyhTVkdMZW5ndGguU1ZHX0xFTkdUSFRZUEVfUFgpXG4gICAgICAgICAgICByZXR1cm4gc3ZnTGVuZ3RoLnZhbHVlSW5TcGVjaWZpZWRVbml0c1xuICAgICAgICB9KVxuICAgICAgICBjb25zdCBwYXRoTWFrZXIgPSBuZXcgUGF0aE1ha2VyKClcbiAgICAgICAgcGF0aE1ha2VyLm1vdmVUbyhyeCwgMClcbiAgICAgICAgcGF0aE1ha2VyLmFyY1RvKHJ4LCByeSwgMCwgMSwgMCwgcngsIDIgKiByeSlcbiAgICAgICAgcGF0aE1ha2VyLmFyY1RvKHJ4LCByeSwgMCwgMSwgMCwgcngsIDApXG4gICAgICAgIHBhdGhNYWtlci5jbG9zZVBhdGgoKVxuICAgICAgICBwb3N0QWN0aW9ucyhwYXRoTWFrZXIpXG4gICAgfSBlbHNlIGlmIChkb20gaW5zdGFuY2VvZiBTVkdMaW5lRWxlbWVudCkge1xuICAgICAgICBjb25zdCBtYXBLZXk6ICgneDEnIHwgJ3gyJyB8ICd5MScgfCAneTInKVtdID0gWyd4MScsICd4MicsICd5MScsICd5MiddXG4gICAgICAgIGNvbnN0IFt4MSwgeDIsIHkxLCB5Ml0gPSBtYXBLZXkubWFwKGtleSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdmdMZW5ndGggPSBkb21ba2V5XS5iYXNlVmFsXG4gICAgICAgICAgICBzdmdMZW5ndGguY29udmVydFRvU3BlY2lmaWVkVW5pdHMoU1ZHTGVuZ3RoLlNWR19MRU5HVEhUWVBFX1BYKVxuICAgICAgICAgICAgcmV0dXJuIHN2Z0xlbmd0aC52YWx1ZUluU3BlY2lmaWVkVW5pdHNcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3Qgb2Zmc2V0WCA9IE1hdGgubWluKHgxLCB4MilcbiAgICAgICAgY29uc3Qgb2Zmc2V0WSA9IE1hdGgubWluKHkxLCB5MilcbiAgICAgICAgY29uc3QgcGF0aE1ha2VyID0gbmV3IFBhdGhNYWtlcigpXG4gICAgICAgIHBhdGhNYWtlci5tb3ZlVG8oeDEgLSBvZmZzZXRYLCB5MSAtIG9mZnNldFkpXG4gICAgICAgIHBhdGhNYWtlci5saW5lVG8oeDIgLSBvZmZzZXRYLCB5MiAtIG9mZnNldFkpXG4gICAgICAgIHBvc3RBY3Rpb25zKHBhdGhNYWtlcilcbiAgICB9IGVsc2UgaWYgKGRvbSBpbnN0YW5jZW9mIFNWR1BhdGhFbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IHBhdGhEYXRhID0gZG9tLmdldEF0dHJpYnV0ZSgnZCcpIHx8ICcnXG4gICAgICAgIGNvbnN0IHBhdGhEYXRhU2VyaWVzID0gcGFyc2VTVkcocGF0aERhdGEpXG4gICAgICAgIGNvbnN0IHBhdGhNYWtlciA9IG5ldyBQYXRoTWFrZXIoKVxuICAgICAgICBsZXQgcGF0aERhdGFXaXRoVHlwZTtcbiAgICAgICAgcGF0aERhdGFTZXJpZXMuZm9yRWFjaChwYXRoRGF0YUl0ZW0gPT4ge1xuICAgICAgICAgICAgc3dpdGNoIChwYXRoRGF0YUl0ZW0uY29kZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ00nOlxuICAgICAgICAgICAgICAgICAgICBwYXRoRGF0YVdpdGhUeXBlID0gcGF0aERhdGFJdGVtIGFzIE1vdmVUb0NvbW1hbmRcbiAgICAgICAgICAgICAgICAgICAgcGF0aE1ha2VyLm1vdmVUbyhwYXRoRGF0YVdpdGhUeXBlLngsIHBhdGhEYXRhV2l0aFR5cGUueSlcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlICdMJzpcbiAgICAgICAgICAgICAgICAgICAgcGF0aERhdGFXaXRoVHlwZSA9IHBhdGhEYXRhSXRlbSBhcyBMaW5lVG9Db21tYW5kXG4gICAgICAgICAgICAgICAgICAgIHBhdGhNYWtlci5saW5lVG8ocGF0aERhdGFXaXRoVHlwZS54LCBwYXRoRGF0YVdpdGhUeXBlLnkpXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSAnbCc6XG4gICAgICAgICAgICAgICAgICAgIHBhdGhEYXRhV2l0aFR5cGUgPSBwYXRoRGF0YUl0ZW0gYXMgTGluZVRvQ29tbWFuZFxuICAgICAgICAgICAgICAgICAgICBwYXRoTWFrZXIubGluZVRvUmVsYXRpdmUocGF0aERhdGFXaXRoVHlwZS54LCBwYXRoRGF0YVdpdGhUeXBlLnkpXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSAnSCc6XG4gICAgICAgICAgICAgICAgICAgIHBhdGhEYXRhV2l0aFR5cGUgPSBwYXRoRGF0YUl0ZW0gYXMgSG9yaXpvbnRhbExpbmVUb0NvbW1hbmRcbiAgICAgICAgICAgICAgICAgICAgcGF0aE1ha2VyLmhvcml6b250YWxUbyhwYXRoRGF0YVdpdGhUeXBlLngpXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSAnaCc6XG4gICAgICAgICAgICAgICAgICAgIHBhdGhEYXRhV2l0aFR5cGUgPSBwYXRoRGF0YUl0ZW0gYXMgSG9yaXpvbnRhbExpbmVUb0NvbW1hbmRcbiAgICAgICAgICAgICAgICAgICAgcGF0aE1ha2VyLmhvcml6b250YWxUb1JlbGF0aXZlKHBhdGhEYXRhV2l0aFR5cGUueClcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlICdWJzpcbiAgICAgICAgICAgICAgICAgICAgcGF0aERhdGFXaXRoVHlwZSA9IHBhdGhEYXRhSXRlbSBhcyBWZXJ0aWNhbExpbmVUb0NvbW1hbmRcbiAgICAgICAgICAgICAgICAgICAgcGF0aE1ha2VyLnZlcnRpY2FsVG8ocGF0aERhdGFXaXRoVHlwZS55KVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgJ3YnOlxuICAgICAgICAgICAgICAgICAgICBwYXRoRGF0YVdpdGhUeXBlID0gcGF0aERhdGFJdGVtIGFzIFZlcnRpY2FsTGluZVRvQ29tbWFuZFxuICAgICAgICAgICAgICAgICAgICBwYXRoTWFrZXIudmVydGljYWxUb1JlbGF0aXZlKHBhdGhEYXRhV2l0aFR5cGUueSlcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlICdDJzpcbiAgICAgICAgICAgICAgICAgICAgcGF0aERhdGFXaXRoVHlwZSA9IHBhdGhEYXRhSXRlbSBhcyBDdXJ2ZVRvQ29tbWFuZFxuICAgICAgICAgICAgICAgICAgICBwYXRoTWFrZXIuY3ViaWNCZXppZXJDdXJ2ZVRvKHBhdGhEYXRhV2l0aFR5cGUueDEsIHBhdGhEYXRhV2l0aFR5cGUueTEsIHBhdGhEYXRhV2l0aFR5cGUueDIsIHBhdGhEYXRhV2l0aFR5cGUueTIsIHBhdGhEYXRhV2l0aFR5cGUueCwgcGF0aERhdGFXaXRoVHlwZS55KVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgJ2MnOlxuICAgICAgICAgICAgICAgICAgICBwYXRoRGF0YVdpdGhUeXBlID0gcGF0aERhdGFJdGVtIGFzIEN1cnZlVG9Db21tYW5kXG4gICAgICAgICAgICAgICAgICAgIHBhdGhNYWtlci5jdWJpY0JlemllckN1cnZlVG9SZWxhdGl2ZShwYXRoRGF0YVdpdGhUeXBlLngxLCBwYXRoRGF0YVdpdGhUeXBlLnkxLCBwYXRoRGF0YVdpdGhUeXBlLngyLCBwYXRoRGF0YVdpdGhUeXBlLnkyLCBwYXRoRGF0YVdpdGhUeXBlLngsIHBhdGhEYXRhV2l0aFR5cGUueSlcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlICdRJzpcbiAgICAgICAgICAgICAgICAgICAgcGF0aERhdGFXaXRoVHlwZSA9IHBhdGhEYXRhSXRlbSBhcyBRdWFkcmF0aWNDdXJ2ZVRvQ29tbWFuZFxuICAgICAgICAgICAgICAgICAgICBwYXRoTWFrZXIucXVhZHJhdGljQmV6aWVyQ3VydmVUbyhwYXRoRGF0YVdpdGhUeXBlLngxLCBwYXRoRGF0YVdpdGhUeXBlLnkxLCBwYXRoRGF0YVdpdGhUeXBlLngsIHBhdGhEYXRhV2l0aFR5cGUueSlcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlICdxJzpcbiAgICAgICAgICAgICAgICAgICAgcGF0aERhdGFXaXRoVHlwZSA9IHBhdGhEYXRhSXRlbSBhcyBRdWFkcmF0aWNDdXJ2ZVRvQ29tbWFuZFxuICAgICAgICAgICAgICAgICAgICBwYXRoTWFrZXIucXVhZHJhdGljQmV6aWVyQ3VydmVUb1JlbGF0aXZlKHBhdGhEYXRhV2l0aFR5cGUueDEsIHBhdGhEYXRhV2l0aFR5cGUueTEsIHBhdGhEYXRhV2l0aFR5cGUueCwgcGF0aERhdGFXaXRoVHlwZS55KVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgJ0EnOlxuICAgICAgICAgICAgICAgICAgICBwYXRoRGF0YVdpdGhUeXBlID0gcGF0aERhdGFJdGVtIGFzIEVsbGlwdGljYWxBcmNDb21tYW5kXG4gICAgICAgICAgICAgICAgICAgIHBhdGhNYWtlci5hcmNUbyhwYXRoRGF0YVdpdGhUeXBlLnJ4LCBwYXRoRGF0YVdpdGhUeXBlLnJ5LCBwYXRoRGF0YVdpdGhUeXBlLnhBeGlzUm90YXRpb24sIH5+cGF0aERhdGFXaXRoVHlwZS5sYXJnZUFyYywgfn5wYXRoRGF0YVdpdGhUeXBlLnN3ZWVwLCBwYXRoRGF0YVdpdGhUeXBlLngsIHBhdGhEYXRhV2l0aFR5cGUueSlcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlICdhJzpcbiAgICAgICAgICAgICAgICAgICAgcGF0aERhdGFXaXRoVHlwZSA9IHBhdGhEYXRhSXRlbSBhcyBFbGxpcHRpY2FsQXJjQ29tbWFuZFxuICAgICAgICAgICAgICAgICAgICBwYXRoTWFrZXIuYXJjVG9SZWxhdGl2ZShwYXRoRGF0YVdpdGhUeXBlLnJ4LCBwYXRoRGF0YVdpdGhUeXBlLnJ5LCBwYXRoRGF0YVdpdGhUeXBlLnhBeGlzUm90YXRpb24sIH5+cGF0aERhdGFXaXRoVHlwZS5sYXJnZUFyYywgfn5wYXRoRGF0YVdpdGhUeXBlLnN3ZWVwLCBwYXRoRGF0YVdpdGhUeXBlLngsIHBhdGhEYXRhV2l0aFR5cGUueSlcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlICdaJzpcbiAgICAgICAgICAgICAgICBjYXNlICd6JzpcbiAgICAgICAgICAgICAgICAgICAgcGF0aE1ha2VyLmNsb3NlUGF0aCgpXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihwYXRoRGF0YUl0ZW0pXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gaW1wbGVtZW50YXRpb24gZm91bmQgZm9yIHRoaXMgcGF0aCBjb21tYW5kLicpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHBvc3RBY3Rpb25zKHBhdGhNYWtlcilcbiAgICB9IGVsc2UgaWYgKGRvbSBpbnN0YW5jZW9mIFNWR1BvbHlnb25FbGVtZW50IHx8IGRvbSBpbnN0YW5jZW9mIFNWR1BvbHlsaW5lRWxlbWVudCkge1xuICAgICAgICBjb25zdCBwb2ludHMgPSBkb20ucG9pbnRzXG4gICAgICAgIGlmIChwb2ludHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBpdGVyYWJsZVBvaW50czogRE9NUG9pbnRbXSA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHBvaW50cylcbiAgICAgICAgICAgIGNvbnN0IG9mZnNldFggPSBpdGVyYWJsZVBvaW50cy5yZWR1Y2UoKHAsIHYpID0+IE1hdGgubWluKHAsIHYueCksIDApXG4gICAgICAgICAgICBjb25zdCBvZmZzZXRZID0gaXRlcmFibGVQb2ludHMucmVkdWNlKChwLCB2KSA9PiBNYXRoLm1pbihwLCB2LnkpLCAwKVxuICAgICAgICAgICAgY29uc3QgcGF0aE1ha2VyID0gbmV3IFBhdGhNYWtlcigpXG4gICAgICAgICAgICBwYXRoTWFrZXIubW92ZVRvKHBvaW50c1swXS54IC0gb2Zmc2V0WCwgcG9pbnRzWzBdLnkgLSBvZmZzZXRZKVxuICAgICAgICAgICAgaXRlcmFibGVQb2ludHMuZm9yRWFjaCgodiwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpIDw9IDApIHJldHVyblxuICAgICAgICAgICAgICAgIHBhdGhNYWtlci5saW5lVG8odi54IC0gb2Zmc2V0WCwgdi55IC0gb2Zmc2V0WSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBpZiAoZG9tIGluc3RhbmNlb2YgU1ZHUG9seWdvbkVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBwYXRoTWFrZXIuY2xvc2VQYXRoKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBvc3RBY3Rpb25zKHBhdGhNYWtlcilcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZG9tIGluc3RhbmNlb2YgU1ZHUmVjdEVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgbWFwS2V5OiAoJ3dpZHRoJyB8ICdoZWlnaHQnKVtdID0gWyd3aWR0aCcsICdoZWlnaHQnXVxuICAgICAgICBjb25zdCBbd2lkdGgsIGhlaWdodF0gPSBtYXBLZXkubWFwKGtleSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdmdMZW5ndGggPSBkb21ba2V5XS5iYXNlVmFsXG4gICAgICAgICAgICBzdmdMZW5ndGguY29udmVydFRvU3BlY2lmaWVkVW5pdHMoU1ZHTGVuZ3RoLlNWR19MRU5HVEhUWVBFX1BYKVxuICAgICAgICAgICAgcmV0dXJuIHN2Z0xlbmd0aC52YWx1ZUluU3BlY2lmaWVkVW5pdHNcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QgcGF0aE1ha2VyID0gbmV3IFBhdGhNYWtlcigpXG4gICAgICAgIHBhdGhNYWtlci5tb3ZlVG8oMCwgMClcbiAgICAgICAgcGF0aE1ha2VyLmxpbmVUbyh3aWR0aCwgMClcbiAgICAgICAgcGF0aE1ha2VyLmxpbmVUbyh3aWR0aCwgaGVpZ2h0KVxuICAgICAgICBwYXRoTWFrZXIubGluZVRvKDAsIGhlaWdodClcbiAgICAgICAgcGF0aE1ha2VyLmNsb3NlUGF0aCgpXG4gICAgICAgIHBvc3RBY3Rpb25zKHBhdGhNYWtlcilcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKGRvbSlcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBpbXBsZW1lbnRhdGlvbiBmb3VuZCBmb3Igc3ZnIGdyYXBoaWNzIGVsZW1lbnQuJylcbiAgICB9XG4gICAgcmV0dXJuIFtncm91cF1cbn1cblxuZnVuY3Rpb24gcmVuZGVyR3JvdXAoZG9tOiBTVkdHRWxlbWVudCwgYmFzZURvbT86IFNWR0dyYXBoaWNzRWxlbWVudCk6IEdyb3VwU2hhcGVbXSB7XG4gICAgbGV0IGl0ZW1zOiBHcm91cFNoYXBlW10gPSBbXVxuICAgIGRvbS5jaGlsZE5vZGVzLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICAgIGlmIChub2RlIGluc3RhbmNlb2YgU1ZHR3JhcGhpY3NFbGVtZW50KSB7XG4gICAgICAgICAgICBpdGVtcyA9IHJlbmRlcihub2RlLCBiYXNlRG9tIHx8IGRvbSkuY29uY2F0KGl0ZW1zKVxuICAgICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gaXRlbXNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclBsYWluR2x5cGgodHlwZTogJ3JlY3QnIHwgJ2VsbGlwc2UnLCBhcmdzOiBudW1iZXJbXSk6IEdyb3VwU2hhcGUge1xuICAgIGNvbnN0IGdyb3VwOiBHcm91cFNoYXBlID0ge1xuICAgICAgICB0eTogXCJnclwiLFxuICAgICAgICBpdDogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5OiAnc2gnLFxuICAgICAgICAgICAgICAgIGtzOiB7XG4gICAgICAgICAgICAgICAgICAgIGs6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIGE6IDBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGhkOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eTogJ3N0JyxcbiAgICAgICAgICAgICAgICBjOiB7XG4gICAgICAgICAgICAgICAgICAgIGs6IFsxLCAxLCAxLCAxXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdzoge1xuICAgICAgICAgICAgICAgICAgICBrOiAxXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvOiB7XG4gICAgICAgICAgICAgICAgICAgIGs6IDEwMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbGM6IGVuY29kZUxpbmVDYXAoJ2J1dHQnKSxcbiAgICAgICAgICAgICAgICBsajogZW5jb2RlTGluZUpvaW4oJ21pdGVyJylcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHk6ICdmbCcsXG4gICAgICAgICAgICAgICAgYzoge1xuICAgICAgICAgICAgICAgICAgICBrOiBbMSwgMSwgMSwgMV1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG86IHtcbiAgICAgICAgICAgICAgICAgICAgazogMTAwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eTogJ3RyJyxcbiAgICAgICAgICAgICAgICBwOiB7XG4gICAgICAgICAgICAgICAgICAgIGs6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGE6IHtcbiAgICAgICAgICAgICAgICAgICAgazogW1xuICAgICAgICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgczoge1xuICAgICAgICAgICAgICAgICAgICBrOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAxMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAxMDBcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcjoge1xuICAgICAgICAgICAgICAgICAgICBrOiAwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvOiB7XG4gICAgICAgICAgICAgICAgICAgIGs6IDEwMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2s6IHtcbiAgICAgICAgICAgICAgICAgICAgazogMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2E6IHtcbiAgICAgICAgICAgICAgICAgICAgazogMFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgYm06IDAsXG4gICAgICAgIGhkOiBmYWxzZVxuICAgIH1cbiAgICBjb25zdCBwYXRoTWFrZXIgPSBuZXcgUGF0aE1ha2VyKClcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAncmVjdCc6XG4gICAgICAgICAgICBwYXRoTWFrZXIubW92ZVRvKDAsIDApXG4gICAgICAgICAgICBwYXRoTWFrZXIubGluZVRvKGFyZ3NbMF0sIDApXG4gICAgICAgICAgICBwYXRoTWFrZXIubGluZVRvKGFyZ3NbMF0sIGFyZ3NbMV0pXG4gICAgICAgICAgICBwYXRoTWFrZXIubGluZVRvKDAsIGFyZ3NbMV0pXG4gICAgICAgICAgICBwYXRoTWFrZXIuY2xvc2VQYXRoKClcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJ2VsbGlwc2UnOlxuICAgICAgICAgICAgcGF0aE1ha2VyLm1vdmVUbyhhcmdzWzBdLCAwKVxuICAgICAgICAgICAgcGF0aE1ha2VyLmFyY1RvKGFyZ3NbMF0sIGFyZ3NbMV0sIDAsIDEsIDAsIGFyZ3NbMF0sIDIgKiBhcmdzWzFdKVxuICAgICAgICAgICAgcGF0aE1ha2VyLmFyY1RvKGFyZ3NbMF0sIGFyZ3NbMV0sIDAsIDEsIDAsIGFyZ3NbMF0sIDApXG4gICAgICAgICAgICBwYXRoTWFrZXIuY2xvc2VQYXRoKClcbiAgICB9XG4gICAgcGF0aE1ha2VyLnVuaWZvcm0oKTtcbiAgICAoZ3JvdXAuaXQhWzBdIGFzIFBhdGhTaGFwZSkua3MhLmsgPSBwYXRoTWFrZXIucGF0aFxuICAgIHJldHVybiBncm91cFxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyVGV4dChkb206IFNWR1RleHRFbGVtZW50LCBmb250TGlzdD86IEZvbnRzKTogW1RleHREYXRhLCBGb250MV0ge1xuICAgIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGRvbSlcbiAgICBjb25zdCBmb250U2l6ZSA9IHBhcnNlRmxvYXQoY29tcHV0ZWRTdHlsZS5mb250U2l6ZSksXG4gICAgICAgIGZvbnRGYW1pbHkgPSBjb21wdXRlZFN0eWxlLmZvbnRGYW1pbHkuc3BsaXQoJywnKVswXS50cmltKCksXG4gICAgICAgIGZvbnRTdHlsZSA9IGNvbXB1dGVkU3R5bGUuZm9udFN0eWxlLFxuICAgICAgICBmb250V2VpZ2h0ID0gY29tcHV0ZWRTdHlsZS5mb250V2VpZ2h0LFxuICAgICAgICBmb250Q29sb3IgPSAoY29tcHV0ZWRTdHlsZS5jb2xvciB8fCAncmdiKDAsMCwwKScpLnNwbGl0KCcoJylbMV0uc3BsaXQoJyknKVswXS5zcGxpdCgnLCcpLm1hcChpID0+IHBhcnNlSW50KGkpIC8gMjU1KVxuICAgIGxldCBmb250TmFtZSA9IHV1aWQoKVxuICAgIGlmIChmb250TGlzdCkge1xuICAgICAgICBjb25zdCBmb250RXhpc3QgPSBmb250TGlzdC5saXN0IS5maWx0ZXIoZm9udCA9PiBmb250LmZGYW1pbHkgPT0gZm9udEZhbWlseSAmJiBmb250LmZTdHlsZSA9PSBmb250U3R5bGUgJiYgZm9udC5mV2VpZ2h0ID09IGZvbnRXZWlnaHQpXG4gICAgICAgIGlmIChmb250RXhpc3QubGVuZ3RoKVxuICAgICAgICAgICAgZm9udE5hbWUgPSBmb250RXhpc3RbMF0uZk5hbWUhXG4gICAgfVxuICAgIGNvbnN0IHRleHREYXRhOiBUZXh0RGF0YSA9IHtcbiAgICAgICAgZDoge1xuICAgICAgICAgICAgazogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdDogMCxcbiAgICAgICAgICAgICAgICAgICAgczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgczogZm9udFNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICBmOiBmb250TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHQ6IGRvbS5pbm5lckhUTUwsXG4gICAgICAgICAgICAgICAgICAgICAgICBqOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHI6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBsczogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZjOiBmb250Q29sb3JcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgcDoge30sXG4gICAgICAgIG06IHtcbiAgICAgICAgICAgIGE6IHtcbiAgICAgICAgICAgICAgICBrOiBbXG4gICAgICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGE6IFtdXG4gICAgfVxuICAgIGNvbnN0IGZvbnREZWY6IEZvbnQxID0ge1xuICAgICAgICBmRmFtaWx5OiBmb250RmFtaWx5LFxuICAgICAgICBmV2VpZ2h0OiBgJHtmb250V2VpZ2h0fWAsXG4gICAgICAgIGZTdHlsZTogZm9udFN0eWxlLFxuICAgICAgICBmTmFtZTogZm9udE5hbWVcbiAgICB9XG4gICAgcmV0dXJuIFt0ZXh0RGF0YSwgZm9udERlZl1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckltYWdlKGRvbTogU1ZHSW1hZ2VFbGVtZW50LCBhc3NldExpc3Q/OiBBc3NldHMpOiBbUmVmZXJlbmNlSUQsIEltYWdlQXNzZXRdIHtcbiAgICBsZXQgaWQgPSB1dWlkKClcbiAgICBjb25zdCBkb21IZWlnaHRWYWwgPSBkb20uaGVpZ2h0LmJhc2VWYWxcbiAgICBkb21IZWlnaHRWYWwuY29udmVydFRvU3BlY2lmaWVkVW5pdHMoU1ZHTGVuZ3RoLlNWR19MRU5HVEhUWVBFX1BYKVxuICAgIGNvbnN0IGRvbVdpZHRoVmFsID0gZG9tLndpZHRoLmJhc2VWYWxcbiAgICBkb21XaWR0aFZhbC5jb252ZXJ0VG9TcGVjaWZpZWRVbml0cyhTVkdMZW5ndGguU1ZHX0xFTkdUSFRZUEVfUFgpXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJylcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuXG4gICAgY2FudmFzLndpZHRoID0gZG9tV2lkdGhWYWwudmFsdWVJblNwZWNpZmllZFVuaXRzICogM1xuICAgIGNhbnZhcy5oZWlnaHQgPSBkb21IZWlnaHRWYWwudmFsdWVJblNwZWNpZmllZFVuaXRzICogM1xuICAgIGN0eCEuZHJhd0ltYWdlKGRvbSwgMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KVxuXG4gICAgY29uc3QgZGF0YVVybCA9IGNhbnZhcy50b0RhdGFVUkwoKVxuICAgIGlmIChhc3NldExpc3QpIHtcbiAgICAgICAgY29uc3QgYXNzZXRFeGlzdCA9IGFzc2V0TGlzdCEuZmlsdGVyKGFzc2V0ID0+IGFzc2V0LnAgPT0gZGF0YVVybClcbiAgICAgICAgaWYgKGFzc2V0RXhpc3QubGVuZ3RoKVxuICAgICAgICAgICAgaWQgPSBhc3NldEV4aXN0WzBdLmlkIVxuICAgIH1cbiAgICBjb25zdCBhc3NldCA9IHtcbiAgICAgICAgaDogZG9tSGVpZ2h0VmFsLnZhbHVlSW5TcGVjaWZpZWRVbml0cyxcbiAgICAgICAgdzogZG9tV2lkdGhWYWwudmFsdWVJblNwZWNpZmllZFVuaXRzLFxuICAgICAgICBpZCxcbiAgICAgICAgcDogZGF0YVVybCxcbiAgICAgICAgZTogMVxuICAgIH1cbiAgICByZXR1cm4gW2lkLCBhc3NldF1cbn0iXX0=

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

    _this.attribute = [];
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
      var _this2 = this;

      this.chartIdx = actionJson.chartIdx;
      this.type = actionJson.type; //action type

      this.animationType = actionJson.animationType; //animation type

      this.maskType = typeof actionJson.maskType === 'undefined' ? _jsmovin.MaskType.Alpha : actionJson.maskType;
      this.reference = actionJson.reference; //timingSpec reference

      this.offset = actionJson.offset; //timingSpec delay

      this.duration = actionJson.duration; //action duration

      this.easing = actionJson.easing; //attributes only take effect when type is custom

      if (typeof actionJson.attribute !== 'undefined') {
        actionJson.attribute.forEach(function (attr) {
          var tmpAttr = {
            attrName: attr.attrName,
            from: attr.from,
            to: attr.to
          };

          _this2.attribute.push(tmpAttr);
        });
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
          attribute: [{
            attrName: changedAttr,
            from: fromArr,
            to: toArr
          }]
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
          duration: typeof actionJson.duration === 'undefined' ? _TimingSpec2.default.FRAME_RATE : actionJson.duration,
          type: ActionSpec.actionTargets.mask
        }; // let tmpObj2;

        switch (actionJson.type) {
          case ActionSpec.actionTypes.appear:
            tmpObj.duration = 1000 / _TimingSpec2.default.FRAME_RATE;
            tmpObj.animationType = ActionSpec.targetAnimationType.fade;
            tmpObj.type = ActionSpec.actionTargets.mark;
            tmpObj.attribute = [{
              attrName: 'opacity',
              from: 1,
              to: 0
            }];
            break;

          case ActionSpec.actionTypes.fade:
            tmpObj.animationType = ActionSpec.targetAnimationType.fade;
            tmpObj.type = ActionSpec.actionTargets.mark;
            tmpObj.attribute = [{
              attrName: 'opacity',
              from: 0,
              to: 1
            }];
            break;

          case ActionSpec.actionTypes.fadeOut:
            tmpObj.animationType = ActionSpec.targetAnimationType.fade;
            tmpObj.type = ActionSpec.actionTargets.mark;
            tmpObj.attribute = [{
              attrName: 'opacity',
              from: 1,
              to: 0
            }];
            break;

          case ActionSpec.actionTypes.grow:
            tmpObj.type = ActionSpec.actionTargets.mark;
            tmpObj.animationType = ActionSpec.targetAnimationType.grow;
            tmpObj.attribute = [{
              attrName: 'trimEnd',
              from: 0,
              to: 1
            }];
            break;

          case ActionSpec.actionTypes.degrow:
            tmpObj.type = ActionSpec.actionTargets.mark;
            tmpObj.animationType = ActionSpec.targetAnimationType.grow;
            tmpObj.attribute = [{
              attrName: 'trimEnd',
              from: 1,
              to: 0
            }];
            break;

          case ActionSpec.actionTypes.wipeBottom:
            tmpObj.animationType = ActionSpec.targetAnimationType.wipe;
            tmpObj.maskType = _jsmovin.MaskType.InvertAlpha;
            tmpObj.attribute = [{
              attrName: 'scaleY',
              from: 1,
              to: 0
            }];
            break;

          case ActionSpec.actionTypes.wipeOutFromTop:
            tmpObj.animationType = ActionSpec.targetAnimationType.wipe;
            tmpObj.maskType = _jsmovin.MaskType.InvertAlpha;
            tmpObj.attribute = [{
              attrName: 'scaleY',
              from: 0,
              to: 1
            }];
            break;

          case ActionSpec.actionTypes.wipeTop:
            tmpObj.animationType = ActionSpec.targetAnimationType.wipe;
            tmpObj.maskType = _jsmovin.MaskType.Alpha;
            tmpObj.attribute = [{
              attrName: 'scaleY',
              from: 0,
              to: 1
            }];
            break;

          case ActionSpec.actionTypes.wipeOutFromBottom:
            tmpObj.animationType = ActionSpec.targetAnimationType.wipe;
            tmpObj.maskType = _jsmovin.MaskType.Alpha;
            tmpObj.attribute = [{
              attrName: 'scaleY',
              from: 1,
              to: 0
            }];
            break;

          case ActionSpec.actionTypes.wipeLeft:
            tmpObj.animationType = ActionSpec.targetAnimationType.wipe;
            tmpObj.maskType = _jsmovin.MaskType.Alpha;
            tmpObj.attribute = [{
              attrName: 'scaleX',
              from: 0,
              to: 1
            }];
            break;

          case ActionSpec.actionTypes.wipeOutFromRight:
            tmpObj.animationType = ActionSpec.targetAnimationType.wipe;
            tmpObj.maskType = _jsmovin.MaskType.Alpha;
            tmpObj.attribute = [{
              attrName: 'scaleX',
              from: 1,
              to: 0
            }];
            break;

          case ActionSpec.actionTypes.wipeRight:
            tmpObj.animationType = ActionSpec.targetAnimationType.wipe;
            tmpObj.maskType = _jsmovin.MaskType.InvertAlpha;
            tmpObj.attribute = [{
              attrName: 'scaleX',
              from: 1,
              to: 0
            }];
            break;

          case ActionSpec.actionTypes.wipeOutFromLeft:
            tmpObj.animationType = ActionSpec.targetAnimationType.wipe;
            tmpObj.maskType = _jsmovin.MaskType.InvertAlpha;
            tmpObj.attribute = [{
              attrName: 'scaleX',
              from: 0,
              to: 1
            }];
            break;

          case ActionSpec.actionTypes.circle:
            tmpObj.animationType = ActionSpec.targetAnimationType.circle;
            tmpObj.maskType = _jsmovin.MaskType.Alpha;
            tmpObj.attribute = [{
              attrName: 'scaleX',
              from: 0,
              to: 1
            }, {
              attrName: 'scaleY',
              from: 0,
              to: 1
            }];
            break;

          case ActionSpec.actionTypes.circleOut:
            tmpObj.animationType = ActionSpec.targetAnimationType.circle;
            tmpObj.maskType = _jsmovin.MaskType.Alpha;
            tmpObj.attribute = [{
              attrName: 'scaleX',
              from: 1,
              to: 0
            }, {
              attrName: 'scaleY',
              from: 1,
              to: 0
            }];
            break;

          case ActionSpec.actionTypes.wheel:
            tmpObj.animationType = ActionSpec.targetAnimationType.wheel;
            tmpObj.maskType = _jsmovin.MaskType.InvertAlpha;
            tmpObj.attribute = [{
              attrName: 'trimEnd',
              from: 1,
              to: 0
            }];
            break;

          case ActionSpec.actionTypes.wheelOut:
            tmpObj.animationType = ActionSpec.targetAnimationType.wheel;
            tmpObj.maskType = _jsmovin.MaskType.InvertAlpha;
            tmpObj.attribute = [{
              attrName: 'trimEnd',
              from: 0,
              to: 1
            }];
            break;
          // case ActionSpec.actionTypes.zoom:
          //     tmpObj.type = ActionSpec.actionTargets.mark;
          //     tmpObj.reference = TimingSpec.timingRef.previousStart;
          //     tmpObj.offset = 0;
          //     tmpObj.animationType = ActionSpec.targetAnimationType.wipe;
          //     tmpObj.attribute = {
          //         attrName: 'width',
          //         from: 0,
          //         to: 1
          //     };
          //     let tmpObj2 = {
          //         chartIdx: actionJson.chartIdx,
          //         easing: actionJson.easing,
          //         duration: typeof actionJson.duration === 'undefined' ? 300 : actionJson.duration,
          //         reference: actionJson.reference,//timingSpec offset reference
          //         offset: actionJson.offset,
          //         type: ActionSpec.actionTargets.mask,
          //         animationType: ActionSpec.targetAnimationType.wipe,
          //         attribute: {
          //             attrName: 'height',
          //             from: 1,
          //             to: 0
          //         }
          //     };
          //     actionJsonArr.push(tmpObj2);
          //     break;
          // case ActionSpec.actionTypes.custom:
          //     tmpObj.type = ActionSpec.actionTargets.mark;
          //     tmpObj.animationType = ActionSpec.targetAnimationType.custom;
          //     tmpObj.attribute = {};
          //     if (typeof actionJson.attribute !== 'undefined') {
          //         tmpObj.attribute = [{
          //             attrName: actionJson.attribute.attrName,
          //             from: actionJson.attribute.from,
          //             to: actionJson.attribute.to
          //         }]
          //     }
          //     break;
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

        case ActionSpec.easingType.easeInQuad:
          return _jsmovin.EasingFactory.easeInQuad();

        case ActionSpec.easingType.easeOutQuad:
          return _jsmovin.EasingFactory.easeOutQuad();

        case ActionSpec.easingType.easeInOutQuad:
          return _jsmovin.EasingFactory.easeInOutQuad();

        case ActionSpec.easingType.easeInCubic:
          return _jsmovin.EasingFactory.easeInCubic();

        case ActionSpec.easingType.easeOutCubic:
          return _jsmovin.EasingFactory.easeOutCubic();

        case ActionSpec.easingType.easeInOutCubic:
          return _jsmovin.EasingFactory.easeInOutCubic();
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

var _helper = __webpack_require__(/*! jsmovin/bin/helper */ "./node_modules/jsmovin/bin/helper.js");

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
          } //if the animation type is custom then judge if the attribute in the action about to add is a valid property of the target mark


          if (tmpActionSpec.animationType === _ActionSpec.default.targetAnimationType.custom) {
            if (_Util.Util.checkValidProp(that.domMarks.get(markId)['tagName'], tmpActionSpec.attribute[0].attrName)) {
              tmpObj.actionAttrs.push(tmpActionSpec);
            }
          } else {
            tmpObj.actionAttrs.push(tmpActionSpec);
          }
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
        } // //categorize the actions according to the attribute name in order to insert place holder actions
        // let maskActionByAttr = new Map(), markActionByAttr = new Map();
        // for (let i = 0, item; i < value.actionAttrs.length | (item = value.actionAttrs[i]); i++) {
        //     if (item.type === ActionSpec.actionTargets.mark) {
        //         if (typeof markActionByAttr.get(item.attribute.attrName) === 'undefined') {
        //             markActionByAttr.set(item.attribute.attrName, [item]);
        //         } else {
        //             markActionByAttr.get(item.attribute.attrName).push(item);
        //         }
        //     } else if (item.type === ActionSpec.actionTargets.mask) {
        //         if (typeof maskActionByAttr.get(item.attribute.attrName) === 'undefined') {
        //             maskActionByAttr.set(item.attribute.attrName, [item]);
        //         } else {
        //             maskActionByAttr.get(item.attribute.attrName).push(item);
        //         }
        //     } else {
        //         console.log('we have some action with no type !!!!!');
        //     }
        // }
        // //add extra action to fill the timeline for both mark and mask
        // maskActionByAttr.forEach(function (actionList, attrName) {
        //     //put an start action
        //     let tmpAction0 = new ActionSpec();
        //     tmpAction0.type = ActionSpec.actionTargets.mask;
        //     tmpAction0.chartIdx = actionList[0].chartIdx;
        //     tmpAction0.animationType = actionList[0].animationType;
        //     tmpAction0.startTime = 0;
        //     tmpAction0.duration = actionList[0].startTime;
        //     tmpAction0.attribute = [{
        //         'attrName': actionList[0].attribute.attrName,
        //         'from': actionList[0].attribute.from,
        //         'to': actionList[0].attribute.from
        //     }]
        //     value.actionAttrs.push(tmpAction0);
        //     for (let i = 0; i < actionList.length; i++) {
        //         let tmpAction = new ActionSpec();
        //         tmpAction.type = ActionSpec.actionTargets.mask;
        //         tmpAction.chartIdx = actionList[i].chartIdx;
        //         tmpAction.animationType = actionList[i].animationType;
        //         tmpAction.startTime = actionList[i].startTime + actionList[i].duration;
        //         if (i === actionList.length - 1) {
        //             tmpAction.duration = 'wholeEnd';
        //         } else {
        //             tmpAction.duration = actionList[i + 1].startTime - actionList[i].startTime - actionList[i].duration;
        //         }
        //         tmpAction.attribute = [{
        //             'attrName': actionList[i].attribute.attrName,
        //             'from': actionList[i].attribute.to,
        //             'to': actionList[i].attribute.to
        //         }]
        //         value.actionAttrs.push(tmpAction);
        //     }
        // })
        // markActionByAttr.forEach(function (actionList, attrName) {
        //     //put an start action
        //     let tmpAction0 = new ActionSpec();
        //     tmpAction0.type = ActionSpec.actionTargets.mark;
        //     tmpAction0.animationType = actionList[0].animationType;
        //     tmpAction0.startTime = 0;
        //     tmpAction0.duration = actionList[0].startTime;
        //     tmpAction0.attribute = [{
        //         'attrName': actionList[0].attribute.attrName,
        //         'from': actionList[0].attribute.from,
        //         'to': actionList[0].attribute.from
        //     }]
        //     value.actionAttrs.push(tmpAction0);
        //     for (let i = 0; i < actionList.length; i++) {
        //         let tmpAction = new ActionSpec();
        //         tmpAction.type = ActionSpec.actionTargets.mark;
        //         tmpAction.animationType = actionList[i].animationType;
        //         tmpAction.startTime = actionList[i].startTime + actionList[i].duration;
        //         if (i === actionList.length - 1) {
        //             tmpAction.duration = 'wholeEnd';
        //         } else {
        //             tmpAction.duration = actionList[i + 1].startTime - actionList[i].startTime - actionList[i].duration;
        //         }
        //         tmpAction.attribute = [{
        //             'attrName': actionList[i].attribute.attrName,
        //             'from': actionList[i].attribute.to,
        //             'to': actionList[i].attribute.to
        //         }]
        //         value.actionAttrs.push(tmpAction);
        //     }
        // })

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
    key: "translateToLottieChannel",
    value: function translateToLottieChannel(attrName) {
      switch (attrName) {
        case 'x':
        case 'cx':
          return ['x'];

        case 'y':
        case 'cy':
          return ['y'];

        case 'r':
          return ['scaleX', 'scaleY'];

        case 'width':
          return ['scaleX'];

        case 'height':
          return ['scaleY'];

        case 'd':
        case 'x1':
        case 'x2':
        case 'y1':
        case 'y2':
          return ['shape'];

        case 'textContent':
          return ['text'];

        case 'fill':
          return ['fillColor'];

        case 'stroke':
          return ['strokeColor'];
      }
    }
  }, {
    key: "mapToLottieSpec",
    value: function mapToLottieSpec() {
      this.allMarkAni.forEach(function (value, markId) {
        var _loop = function _loop(i) {
          var tmpActionSpec = value.actionAttrs[i];

          if (tmpActionSpec.duration > 0) {
            console.log('type: ', tmpActionSpec.type);
            var targetMark = document.getElementById(markId); //TODO: pass dom here

            if (tmpActionSpec.type === _ActionSpec.default.actionTargets.mark) {
              //TODO: consider 'custom'
              var startFrame = Math.ceil(tmpActionSpec.startTime / (1000 / _TimingSpec2.default.FRAME_RATE));
              var endFrame = Math.ceil((tmpActionSpec.startTime + tmpActionSpec.duration) / (1000 / _TimingSpec2.default.FRAME_RATE));
              tmpActionSpec.attribute.forEach(function (attr) {
                if (tmpActionSpec.animationType === _ActionSpec.default.targetAnimationType.custom) {
                  //translate visual channels to lottie channels
                  var lottieChannels = Animation.translateToLottieChannel(attr.attrName);

                  if (Array.isArray(attr.to)) {
                    //doing transition
                    var fromValue = 0,
                        toValue = 0;

                    for (var j = 0; j < attr.to.length; j++) {
                      if (attr.to[j][0] === markId) {
                        fromValue = attr.from[j][1];
                        toValue = attr.to[j][1];
                        break;
                      }
                    }

                    lottieChannels.forEach(function (lc) {
                      if (lc === 'shape') {
                        //transform the start d and end d to shape specification
                        var fromPosi = [0, 0],
                            toPosi = [0, 0];

                        var _Util$transDToLottieS = _Util.Util.transDToLottieSpec(fromValue);

                        var _Util$transDToLottieS2 = _slicedToArray(_Util$transDToLottieS, 2);

                        fromPosi = _Util$transDToLottieS2[0];
                        fromValue = _Util$transDToLottieS2[1];

                        var _Util$transDToLottieS3 = _Util.Util.transDToLottieSpec(toValue);

                        var _Util$transDToLottieS4 = _slicedToArray(_Util$transDToLottieS3, 2);

                        toPosi = _Util$transDToLottieS4[0];
                        toValue = _Util$transDToLottieS4[1];

                        _GlobalVar.globalVar.markLayers.get(markId).setAnimatableProperty('x', startFrame, endFrame, fromPosi[0], toPosi[0], _ActionSpec.default.transToLottieAction(tmpActionSpec.easing));

                        _GlobalVar.globalVar.markLayers.get(markId).setAnimatableProperty('y', startFrame, endFrame, fromPosi[1], toPosi[1], _ActionSpec.default.transToLottieAction(tmpActionSpec.easing));
                      } else if (lc === 'fillColor') {
                        fromValue = _Util.Util.toLotieRGBA(fromValue);
                        toValue = _Util.Util.toLotieRGBA(toValue);
                        console.log('color changing from: ', fromValue, toValue);
                      }

                      console.log(lc, startFrame, endFrame, fromValue, toValue, _ActionSpec.default.transToLottieAction(tmpActionSpec.easing));

                      _GlobalVar.globalVar.markLayers.get(markId).setAnimatableProperty(lc, startFrame, endFrame, fromValue, toValue, _ActionSpec.default.transToLottieAction(tmpActionSpec.easing));
                    });
                  } else {
                    lottieChannels.forEach(function (lc) {
                      //TODO: difference from and to strategy with positions and channels like opacity
                      _GlobalVar.globalVar.markLayers.get(markId).setAnimatableProperty(lc, startFrame, endFrame, attr.from * 100, attr.to * 100, _ActionSpec.default.transToLottieAction(tmpActionSpec.easing));
                    });
                  }
                } else {
                  //if not custom, then attrName is already lottie channels
                  _GlobalVar.globalVar.markLayers.get(markId).setAnimatableProperty(attr.attrName, startFrame, endFrame, attr.from * 100, attr.to * 100, _ActionSpec.default.transToLottieAction(tmpActionSpec.easing));
                }
              });
            } else if (tmpActionSpec.type === _ActionSpec.default.actionTargets.mask) {
              var maskLayer;
              var tmpBbox = (0, _helper.getBoundingBox)(targetMark);
              var r = Math.sqrt(Math.pow(tmpBbox[2] / 2, 2) + Math.pow(tmpBbox[3] / 2, 2));

              switch (tmpActionSpec.animationType) {
                //create rect mask
                case _ActionSpec.default.targetAnimationType.wipe:
                case _ActionSpec.default.targetAnimationType.move:
                case _ActionSpec.default.targetAnimationType.appear:
                  maskLayer = _jsmovin.LayerFactory.boundingBox(targetMark);
                  break;
                //create circle mask

                case _ActionSpec.default.targetAnimationType.circle:
                  maskLayer = _jsmovin.LayerFactory.ellipse(tmpBbox[0] + tmpBbox[2], tmpBbox[1] + tmpBbox[3], r, r);
                  maskLayer.setStaticProperty('anchorX', tmpBbox[2] / 2);
                  maskLayer.setStaticProperty('anchorY', tmpBbox[3] / 2);
                  break;
                //create circle mask with thick border

                case _ActionSpec.default.targetAnimationType.wheel:
                  r /= 2;
                  maskLayer = _jsmovin.LayerFactory.ellipse(tmpBbox[0] + tmpBbox[2], tmpBbox[1] + tmpBbox[3], r, r);
                  maskLayer.setStaticProperty('anchorX', tmpBbox[2] / 2);
                  maskLayer.setStaticProperty('anchorY', tmpBbox[3] / 2);
                  maskLayer.setStaticProperty('strokeWidth', 2 * r);
                  maskLayer.setStaticProperty('fillOpacity', 0);
                  break;
                //create path mask
              }

              var _startFrame = Math.ceil(tmpActionSpec.startTime / (1000 / _TimingSpec2.default.FRAME_RATE));

              var _endFrame = Math.ceil((tmpActionSpec.startTime + tmpActionSpec.duration) / (1000 / _TimingSpec2.default.FRAME_RATE));

              tmpActionSpec.attribute.forEach(function (attr) {
                maskLayer.setAnimatableProperty(attr.attrName, _startFrame, _endFrame, attr.from * 100, attr.to * 100, _ActionSpec.default.transToLottieAction(tmpActionSpec.easing));
              });

              _GlobalVar.globalVar.jsMovin.addMask(maskLayer, _GlobalVar.globalVar.markLayers.get(markId), tmpActionSpec.maskType); // console.log('in mask: ', tmpActionSpec.attribute);
              // let tmpBbox = getBoundingBox(document.getElementById(markId));
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
        };

        for (var i = 0; i < value.actionAttrs.length; i++) {
          _loop(i);
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
    } // static calRatio(percentage, easingType) {
    //     let ratio = 0;
    //     switch (easingType) {
    //         case ActionSpec.easingType.easeLinear:
    //             ratio = percentage;
    //             break;
    //         case ActionSpec.easingType.easeInQuad:
    //             ratio = this.easeFuncs.easeInQuad(percentage);
    //             break;
    //         case ActionSpec.easingType.easeOutQuad:
    //             ratio = this.easeFuncs.easeOutQuad(percentage);
    //             break;
    //         case ActionSpec.easingType.easeInOutQuad:
    //             ratio = this.easeFuncs.easeInOutQuad(percentage);
    //             break;
    //         case ActionSpec.easingType.easeInCubic:
    //             ratio = this.easeFuncs.easeInCubic(percentage);
    //             break;
    //         case ActionSpec.easingType.easeOutCubic:
    //             ratio = this.easeFuncs.easeOutCubic(percentage);
    //             break;
    //         case ActionSpec.easingType.easeInOutCubic:
    //             ratio = this.easeFuncs.easeInOutCubic(percentage);
    //             break;
    //         case ActionSpec.easingType.easeOutBounce:
    //             ratio = this.easeFuncs.easeOutBounce(percentage);
    //             break;
    //     }
    //     return ratio;
    // }

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

var Canis =
/*#__PURE__*/
function () {
  function Canis() {
    _classCallCheck(this, Canis);

    this.chartSpecs;
    this.facet;
    this._animations;
    this.chartWidth;
    this.chartHeight;
  }

  _createClass(Canis, [{
    key: "init",
    value: function init(spec) {
      var _this = this;

      this.chartSpecs = [];
      var canisObj = spec;
      canisObj.charts = _ChartSpec.default.chartPreProcessing(canisObj.charts); //deal with input charts

      for (var i = 0; i < canisObj.charts.length; i++) {
        var chartName = typeof canisObj.charts[i].id === 'undefined' ? 'chart' + i : canisObj.charts[i].id;
        var tmpChart = new _ChartSpec.default(chartName, canisObj.charts[i].source);
        this.chartSpecs.push(tmpChart);
      } //init facet


      if (canisObj.facet) {
        this.facet = new _FacetSpec.default(canisObj.facet.type, canisObj.facet.views);
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


      this.animations = canisObj.animations;

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
                tmpDomAttrObj['tagName'] = mark.tagName;

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


      var lottieJSON = _GlobalVar.globalVar.jsMovin.toJSON(); // console.log(lottieJSON);


      return JSON.parse(lottieJSON);
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

  return Canis;
}();

var _default = Canis;
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
          var viewBoxNums = svgContent.getAttribute('viewBox').split(' ');
          defaultWidth = parseFloat(viewBoxNums[2]);
          defaultHeight = parseFloat(viewBoxNums[3]);
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
            continue;
          }
        }
      }); //find different cmds if there is d in changedAttrs

      var diffCmds = new Map(); //key:cmd name, value: {cmdIdx, diffAttrIdxs}

      if (ChartSpec.changedAttrs.indexOf('d') >= 0) {
        diffCmds = _Util.Util.findDiffCmds(markStatus);
      }

      console.log('changed attributes: ', ChartSpec.changedAttrs); //add missing marks to each chart

      allMarks = Array.from(allMarks);
      ChartSpec.markDoms.clear();

      for (var i = 0; i < ChartSpec.charts.length; i++) {
        for (var _j3 = 0; _j3 < allMarks.length; _j3++) {
          if (ChartSpec.charts[i].querySelectorAll('#' + allMarks[_j3]).length === 0) {
            //chart i does not have mark j
            console.log('chart ' + i + ' doesnt have mark' + allMarks[_j3]);
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
        if (t.classList.contains('mark')) {
          _GlobalVar.globalVar.markLayers.set(t.getAttribute('id'), _GlobalVar.globalVar.jsMovin.addLayer(t));
        } else {
          // if(t.tagName === 'line')
          _GlobalVar.globalVar.jsMovin.addLayer(t);
        } // t.classList.contains('mark') ? globalVar.markLayers.set(t.getAttribute('id'), globalVar.jsMovin.addLayer(t)) : globalVar.jsMovin.addLayer(t);
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

var Canis = __webpack_require__(/*! ./Canis.js */ "./src/Canis.js");

var Renderer = __webpack_require__(/*! ./AniRenderer.js */ "./src/AniRenderer.js");

window.canis = {
  frameRate: TimingSpec.FRAME_RATE,
  duration: function duration() {
    return Animation.wholeEndTime;
  },
  loadSpec: function loadSpec(url, callback) {
    Canis.loadSpec(url, callback);
  },
  renderSpec: function renderSpec(spec) {
    var canisObj = new Canis();
    canisObj.init(spec);
    return canisObj.render();
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

var _jsmovin = __webpack_require__(/*! jsmovin */ "./node_modules/jsmovin/bin/jsmovin.js");

var _svgPathParser = __webpack_require__(/*! svg-path-parser */ "./node_modules/svg-path-parser/index.js");

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
    key: "toLotieRGBA",
    value: function toLotieRGBA(color) {
      return this.color2RGB(color).map(function (c) {
        return c / 255;
      });
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
    key: "splitPath",
    value: function splitPath(d) {
      var tmpPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      tmpPath.setAttributeNS(null, 'd', d);
      var tmpPathLen = tmpPath.getTotalLength();
      var stepNum = 300,
          pathStepLen = tmpPathLen / stepNum;
      var discritPath = '';

      for (var i = 0; i < stepNum; i++) {
        var tmpPnt = tmpPath.getPointAtLength(pathStepLen * i);
        i === 0 ? discritPath += 'M' + tmpPnt.x + ',' + tmpPnt.y : discritPath += 'L' + tmpPnt.x + ',' + tmpPnt.y;
      }

      discritPath += 'Z';
      return discritPath;
    }
  }, {
    key: "getPathOffset",
    value: function getPathOffset(d) {
      var pathData = d;
      var pathDataSeries = (0, _svgPathParser.parseSVG)(pathData);
      var pathMaker = new _jsmovin.PathMaker();
      var pathDataWithType;
      pathDataSeries.forEach(function (pathDataItem) {
        switch (pathDataItem.code) {
          case 'M':
            pathDataWithType = pathDataItem;
            pathMaker.moveTo(pathDataWithType.x, pathDataWithType.y);
            break;

          case 'L':
            pathDataWithType = pathDataItem;
            pathMaker.lineTo(pathDataWithType.x, pathDataWithType.y);
            break;

          case 'l':
            pathDataWithType = pathDataItem;
            pathMaker.lineToRelative(pathDataWithType.x, pathDataWithType.y);
            break;

          case 'H':
            pathDataWithType = pathDataItem;
            pathMaker.horizontalTo(pathDataWithType.x);
            break;

          case 'h':
            pathDataWithType = pathDataItem;
            pathMaker.horizontalToRelative(pathDataWithType.x);
            break;

          case 'V':
            pathDataWithType = pathDataItem;
            pathMaker.verticalTo(pathDataWithType.y);
            break;

          case 'v':
            pathDataWithType = pathDataItem;
            pathMaker.verticalToRelative(pathDataWithType.y);
            break;

          case 'C':
            pathDataWithType = pathDataItem;
            pathMaker.cubicBezierCurveTo(pathDataWithType.x1, pathDataWithType.y1, pathDataWithType.x2, pathDataWithType.y2, pathDataWithType.x, pathDataWithType.y);
            break;

          case 'c':
            pathDataWithType = pathDataItem;
            pathMaker.cubicBezierCurveToRelative(pathDataWithType.x1, pathDataWithType.y1, pathDataWithType.x2, pathDataWithType.y2, pathDataWithType.x, pathDataWithType.y);
            break;

          case 'Q':
            pathDataWithType = pathDataItem;
            pathMaker.quadraticBezierCurveTo(pathDataWithType.x1, pathDataWithType.y1, pathDataWithType.x, pathDataWithType.y);
            break;

          case 'q':
            pathDataWithType = pathDataItem;
            pathMaker.quadraticBezierCurveToRelative(pathDataWithType.x1, pathDataWithType.y1, pathDataWithType.x, pathDataWithType.y);
            break;

          case 'A':
            pathDataWithType = pathDataItem;
            pathMaker.arcTo(pathDataWithType.rx, pathDataWithType.ry, pathDataWithType.xAxisRotation, ~~pathDataWithType.largeArc, ~~pathDataWithType.sweep, pathDataWithType.x, pathDataWithType.y);
            break;

          case 'a':
            pathDataWithType = pathDataItem;
            pathMaker.arcToRelative(pathDataWithType.rx, pathDataWithType.ry, pathDataWithType.xAxisRotation, ~~pathDataWithType.largeArc, ~~pathDataWithType.sweep, pathDataWithType.x, pathDataWithType.y);
            break;

          case 'Z':
          case 'z':
            pathMaker.closePath();
            break;

          default:
            console.error(pathDataItem);
            throw new Error('No implementation found for this path command.');
        }
      });
      console.log('path marker offset: ', pathMaker.offsetX, pathMaker.offsetY);
      return [pathMaker.offsetX, pathMaker.offsetY];
    }
  }, {
    key: "transDToLottieSpec",
    value: function transDToLottieSpec(d) {
      var posiOffset = this.getPathOffset(d);
      d = this.splitPath(d);
      d = d.replace(/(?<=\d)\s(?=[mMlLhHvVcCsSqQtTaAzZ])/g, '').replace(/(?<=[mMlLhHvVcCsSqQtTaA])\s(?=(\d|[-+]))/g, '').replace(/\s/g, ',');
      var cmdRegExp = new RegExp(/[mMlLhHvVcCsSqQtTaAzZ][^mMlLhHvVcCsSqQtTaAzZ]*/g);
      var cmds = d.match(cmdRegExp);
      var pm = new _jsmovin.PathMaker();

      if (cmds) {
        cmds.forEach(function (cmdStr) {
          var cmdName = cmdStr.substring(0, 1),
              cmdValue = cmdStr.substring(1);

          switch (cmdName) {
            case 'M':
            case 'm':
              pm.moveTo.apply(pm, _toConsumableArray(cmdValue.split(',').map(function (n) {
                return parseFloat(n);
              })));
              break;

            case 'H':
              pm.horizontalTo(parseFloat(cmdValue));
              break;

            case 'h':
              pm.horizontalToRelative(parseFloat(cmdValue));
              break;

            case 'V':
              pm.verticalTo(parseFloat(cmdValue));
              break;

            case 'v':
              pm.verticalToRelative(parseFloat(cmdValue));
              break;

            case 'L':
              pm.lineTo.apply(pm, _toConsumableArray(cmdValue.split(',').map(function (n) {
                return parseFloat(n);
              })));
              break;

            case 'l':
              pm.lineToRelative.apply(pm, _toConsumableArray(cmdValue.split(',').map(function (n) {
                return parseFloat(n);
              })));
              break;

            case 'C':
              pm.cubicBezierCurveTo.apply(pm, _toConsumableArray(cmdValue.split(',').map(function (n) {
                return parseFloat(n);
              })));
              break;

            case 'c':
              pm.cubicBezierCurveToRelative.apply(pm, _toConsumableArray(cmdValue.split(',').map(function (n) {
                return parseFloat(n);
              })));
              break;

            case 'Q':
              pm.quadraticBezierCurveTo.apply(pm, _toConsumableArray(cmdValue.split(',').map(function (n) {
                return parseFloat(n);
              })));
              break;

            case 'q':
              pm.quadraticBezierCurveToRelative.apply(pm, _toConsumableArray(cmdValue.split(',').map(function (n) {
                return parseFloat(n);
              })));
              break;

            case 'A':
              pm.arcTo.apply(pm, _toConsumableArray(cmdValue.split(',').map(function (n) {
                return parseFloat(n);
              })));
              break;

            case 'a':
              pm.arcToRelative.apply(pm, _toConsumableArray(cmdValue.split(',').map(function (n) {
                return parseFloat(n);
              })));
              break;
          }
        });
        pm.uniform();
        return [posiOffset, pm.path];
      }

      return [posiOffset, {}];
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
     * check if the input prop is a valid property of the input tag
     * @param {*} tagName 
     * @param {*} propName 
     */

  }, {
    key: "checkValidProp",
    value: function checkValidProp(tagName, propName) {
      switch (tagName) {
        case 'circle':
          return ['cx', 'cy', 'r', 'stroke', 'stroke-width', 'fill'].includes(propName);

        case 'ellipse':
          return ['cx', 'cy', 'rx', 'ry', 'stroke', 'stroke-width', 'fill'].includes(propName);

        case 'image':
          return ['x', 'y', 'width', 'height', 'href', 'xlink:href', 'preserveAspectRatio'].includes(propName);

        case 'line':
          return ['x1', 'x2', 'y1', 'y2', 'stroke', 'stroke-width', 'fill'].includes(propName);

        case 'path':
          return ['d', 'stroke', 'stroke-width', 'fill'].includes(propName);

        case 'polygon':
        case 'polyline':
          return ['points', 'stroke', 'stroke-width', 'fill'].includes(propName);

        case 'rect':
          return ['x', 'y', 'width', 'height', 'rx', 'ry', 'stroke', 'stroke-width', 'fill'].includes(propName);

        case 'text':
          return ['x', 'y', 'dx', 'dy', 'stroke', 'stroke-width', 'textContent'].includes(propName);

        default:
          return false;
      }
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