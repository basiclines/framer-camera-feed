(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("framer"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["framer", "react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("framer"), require("react")) : factory(root["Framer"], root["React"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_framer__, __WEBPACK_EXTERNAL_MODULE_react__) {
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
/******/ 		try { modules[moduleId].call(module.exports, module, module.exports, __webpack_require__); } catch (error) { module.exports = { error } }
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
/******/ 	// asset url
/******/ 	var __module_i = eval("typeof module !== 'undefined' ? module.i : ''");
/******/ 	var __framer_package = (/(node_modules[/].*)[/](build|dist).index.js/.exec(__module_i) || [])[1]
/******/ 	function __asset_url__(src) { return __WEBPACK_EXTERNAL_MODULE_framer__.serverURL(__framer_package, src) };
/******/ 	installedModules['framer/resource'] = { i: 'framer/resource', l: true, exports: { url: __asset_url__ } };
/******/
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./package.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./code sync recursive \\.(t|j)s(x?)|\\.css$":
/*!***************************************!*\
  !*** ./code sync \.(t|j)s(x?)|\.css$ ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Camera_Feed.tsx": "./code/Camera_Feed.tsx",
	"./canvas.tsx": "./code/canvas.tsx"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./code sync recursive \\.(t|j)s(x?)|\\.css$";

/***/ }),

/***/ "./code/Camera_Feed.tsx":
/*!******************************!*\
  !*** ./code/Camera_Feed.tsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FtZXJhX0ZlZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL0NhbWVyYV9GZWVkLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUErQjtBQUMvQixtQ0FBOEQ7QUFFOUQsTUFBTSxZQUFZLEdBQXdCO0lBQ3RDLEtBQUssRUFBRSxNQUFNO0lBQ2IsTUFBTSxFQUFFLE1BQU07SUFDZCxPQUFPLEVBQUUsTUFBTTtJQUNmLFVBQVUsRUFBRSxRQUFRO0lBQ3BCLGNBQWMsRUFBRSxRQUFRO0lBQ3hCLFFBQVEsRUFBRSxRQUFRO0NBQ3JCLENBQUE7QUFPRCxNQUFhLFdBQVksU0FBUSxLQUFLLENBQUMsU0FBZ0I7SUFpQm5EO1FBQ0ksS0FBSyxFQUFFLENBQUE7O1FBQ1AsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUE7S0FDakM7SUFFRCxpQkFBaUI7O1FBQ2QsSUFBSSxTQUFTLENBQUMsWUFBWTtZQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQTtLQUNqRDtJQUVELFlBQVk7O1FBQ1IsOEZBQThGO1FBQzlGLFNBQVMsQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDO1lBQ2hDLEtBQUssRUFBRTtnQkFDSCxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVO2dCQUNqQyxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO2dCQUN0QixNQUFNLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO2FBQzFCO1NBQ0osQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFOztZQUNmLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUE7WUFDckMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUE7U0FDNUIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFTLEdBQUc7O1lBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7U0FDbkIsQ0FBQyxDQUFDO0tBQ047SUFFRCxNQUFNOztRQUNGLE9BQU8sQ0FDSCxvQkFBQyxjQUFLLElBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLEtBQUssRUFBRSxZQUFZO1lBQ3pELCtCQUFPLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxHQUFVLENBQzVCLENBQ1gsQ0FBQTtLQUNKOztBQTlDTSx3QkFBWSxHQUFHO0lBQ2xCLFVBQVUsRUFBRSxTQUFTO0lBQ3JCLFVBQVUsRUFBRSxhQUFhO0NBQzVCLENBQUE7QUFFTSw0QkFBZ0IsR0FBNEI7SUFDL0MsVUFBVSxFQUFFLEVBQUUsSUFBSSxFQUFFLG9CQUFXLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUU7SUFDNUQsVUFBVSxFQUFFO1FBQ1IsSUFBSSxFQUFFLG9CQUFXLENBQUMsSUFBSTtRQUN0QixPQUFPLEVBQUUsQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDO1FBQ2hDLFlBQVksRUFBRSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUM7UUFDL0IsS0FBSyxFQUFFLFFBQVE7S0FDbEI7Q0FDSixDQUFBO0FBZkwsa0NBaURDO0FBQ0QifQ==

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const wrapperStyle = {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
};
class Camera_Feed extends React.Component {
    constructor() {
        super();
        window["__checkBudget__"]();
        this.video = React.createRef();
    }
    componentDidMount() {
        window["__checkBudget__"]();
        if (navigator.mediaDevices)
            this.enableCamera();
    }
    enableCamera() {
        window["__checkBudget__"]();
        // https://stackoverflow.com/questions/27420581/get-maximum-video-resolution-with-getusermedia
        navigator.mediaDevices.getUserMedia({
            video: {
                facingMode: this.props.facingMode,
                width: { ideal: 4096 },
                height: { ideal: 2160 }
            }
        }).then((stream) => {
            window["__checkBudget__"]();
            this.video.current.srcObject = stream;
            this.video.current.play();
        }).catch(function (err) {
            window["__checkBudget__"]();
            console.log(err);
        });
    }
    render() {
        window["__checkBudget__"]();
        return (React.createElement(framer_1.Frame, { background: this.props.background, style: wrapperStyle },
            React.createElement("video", { ref: this.video })));
    }
}
Camera_Feed.defaultProps = {
    background: "#000000",
    facingMode: "environment",
};
Camera_Feed.propertyControls = {
    background: { type: framer_1.ControlType.Color, title: "background" },
    facingMode: {
        type: framer_1.ControlType.Enum,
        options: ["environment", "user"],
        optionTitles: ["Front", "Back"],
        title: "Camera",
    },
};
exports.Camera_Feed = Camera_Feed;
exports.__info__ = [{ name: "Camera_Feed", children: false, type: "component" }];


/***/ }),

/***/ "./code/canvas.tsx":
/*!*************************!*\
  !*** ./code/canvas.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// WARNING: this file is auto generated, any changes will be lost
const framer_1 = __webpack_require__(/*! framer */ "framer");
const canvas = framer_1.CanvasStore.shared({"children":[]});


/***/ }),

/***/ "./package.js":
/*!********************!*\
  !*** ./package.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// The template for the dynamic webpack entry. Be aware of the variables

const packageJson = __webpack_require__(/*! ./package.json */ "./package.json")

const package = {
    packageJson,
    sourceModules: {},
    dependencies: {},
}

// This is a special webpack thing that watches the whole directory
// https://github.com/webpack/docs/wiki/context
const ctx = __webpack_require__("./code sync recursive \\.(t|j)s(x?)|\\.css$")

ctx.keys().forEach(key => {
    package.sourceModules[key] = () => ctx(key)
})

// The packages are passed in through a template
const packages = {}

                packages["framer"] = () => {
                    var package = {}
                    try {
                        package = __webpack_require__(/*! framer */ "framer")
                    } catch (e) {
                        console.log(e)
                    }
                    package.__framer__ = package.__framer__ || {}
                    package.__framer__.packageJson = {"name":"framer","version":"0.7.11","main":"build/framer.js","types":"build/framer.d.ts","author":"Framer","license":"MIT","devDependencies":{"@types/chalk":"^2.2.0","@types/draft-js":"0.10.19","@types/enzyme":"^3.1.10","@types/hsluv":"https://github.com/framer/typed_hsluv#bump","@types/jest":"^23.0.0","@types/jest-diff":"^20.0.0","@types/node":"^9.6.0","@types/react":"16.3.12","@types/react-dom":"^16.0.5","cache-loader":"^1.2.2","chalk":"^2.4.1","convert-tsconfig-paths-to-webpack-aliases":"^0.9.2","css.escape":"^1.5.1","dts-bundle":"^0.7.3","enzyme":"^3.3.0","enzyme-adapter-react-16":"^1.1.1","fork-ts-checker-webpack-plugin":"^0.4.1","hoist-non-react-statics":"^2.5.0","jest":"^23.1.0","jest-diff":"^22.0.3","jest-junit":"^3.4.1","progress-bar-webpack-plugin":"^1.11.0","raf":"^3.4.0","react":"^16.3.2","react-dev-utils":"^5.0.1","react-dom":"^16.3.2","ts-jest":"^22.4.5","ts-loader":"^4.1.0","tslint":"^5.10.0","tslint-microsoft-contrib":"^5.0.3","typescript":"^3.0.1","watch":"^1.0.2","webpack":"^4.4.1","webpack-cli":"^2.0.13","webpack-dev-server":"^3.1.4","xcssmatrix":"^0.2.2"},"peerDependencies":{"react":"^16.3.2","react-dom":"^16.3.2"},"dependencies":{"draft-js":"0.10.4","eventemitter3":"^3.1.0","hsluv":"^0.0.3","immutable":"^3.8.2"},"framer":{"components":[{"name":"Scroll","children":true,"properties":[{"key":"direction","title":"Direction","kind":"enum","options":["horizontal","vertical","both"]}]},{"name":"Page","children":true},{"name":"Stack"},{"name":"FramerAppleWatch38","type":"device"},{"name":"FramerAppleWatch42","type":"device"},{"name":"FramerSonySmartWatch","type":"device"},{"name":"FramerAppleIPhoneSE","type":"device"},{"name":"FramerAppleIPhone8","type":"device"},{"name":"FramerAppleIPhone8Plus","type":"device"},{"name":"FramerAppleIPhoneX","type":"device"},{"name":"FramerGoogleNexus4","type":"device"},{"name":"FramerGoogleNexus5X","type":"device"},{"name":"FramerGoogleNexus6","type":"device"},{"name":"FramerGooglePixel2","type":"device"},{"name":"FramerGooglePixel2XL","type":"device"},{"name":"FramerHTCOneA9","type":"device"},{"name":"FramerMicrosoftLumia950","type":"device"},{"name":"FramerSamsungNote5","type":"device"},{"name":"FramerSamsungGalaxyS8","type":"device"},{"name":"FramerAppleIPadAir","type":"device"},{"name":"FramerAppleIPadMini","type":"device"},{"name":"FramerAppleIPadPro","type":"device"},{"name":"FramerGoogleNexusTablet","type":"device"},{"name":"FramerMicrosoftSurfacePro3","type":"device"},{"name":"FramerMicrosoftSurfacePro4","type":"device"},{"name":"FramerAppleIMac","type":"device"},{"name":"FramerAppleThunderboltDisplay","type":"device"},{"name":"FramerAppleMacBook","type":"device"},{"name":"FramerAppleMacBookAir","type":"device"},{"name":"FramerAppleMacBookPro","type":"device"},{"name":"FramerDellXPS","type":"device"},{"name":"FramerMicrosoftSurfaceBook","type":"device"},{"name":"FramerSonyW850C","type":"device"}]},"scripts":{"coverage":"jest --config jest.json --coverage","test":"jest --config jest.json","watch":"jest --config jest.json --watch"}}
                    return package
                }

package.dependencies = packages

exports.__framer__ = package


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: main, license, devDependencies, peerDependencies, framer, author, name, version, keywords, dependencies, default */
/***/ (function(module) {

module.exports = {"main":"dist/index.js","license":"MIT","devDependencies":{"@types/react":"^16.0.31","framer":"^0.7.11"},"peerDependencies":{"framer":"^0.7.11","react":"^16.3.0","react-dom":"^16.3.0"},"framer":{"id":"db161cbe-5d6b-467d-b3b6-3ae6841e0ef3","displayName":"Camera Feed"},"author":"basiclines","name":"@framer/basiclines.camera-feed","version":"1.8.0","keywords":["interactive","camera","feed","stream","device","record","video"],"dependencies":{}};

/***/ }),

/***/ "framer":
/*!******************************************************************************************!*\
  !*** external {"root":"Framer","commonjs2":"framer","commonjs":"framer","amd":"framer"} ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_framer__;

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ });
});