/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/background.js":
/*!***********************************!*\
  !*** ./src/modules/background.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_sunny_weather_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/sunny-weather.jpg */ \"./src/images/sunny-weather.jpg\");\n/* harmony import */ var _images_cloudy_weather_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/cloudy-weather.jpg */ \"./src/images/cloudy-weather.jpg\");\n/* harmony import */ var _images_rainy_weather_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/rainy-weather.jpg */ \"./src/images/rainy-weather.jpg\");\n/* harmony import */ var _images_foggy_weather_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/foggy-weather.jpg */ \"./src/images/foggy-weather.jpg\");\n/* harmony import */ var _images_snowy_weather_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/snowy-weather.jpg */ \"./src/images/snowy-weather.jpg\");\n/* harmony import */ var _images_default_weather_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/default-weather.jpg */ \"./src/images/default-weather.jpg\");\n\n\n\n\n\n\n\n\nconst Background = (() => {\n  const determineBackgroundImage = weather => {\n    let image;\n    let linkAuthor;\n    let authorName;\n    let linkPhoto;\n    if (/sunny|clear/gi.test(weather)) {\n      image = _images_sunny_weather_jpg__WEBPACK_IMPORTED_MODULE_0__;\n      linkAuthor = \"https://unsplash.com/@khyta\";\n      authorName = \"Khyta\";\n      linkPhoto = \"https://unsplash.com/photos/ZEDjKAuS8u0\";\n    } else if (/cloud|overcast/gi.test(weather)) {\n      image = _images_cloudy_weather_jpg__WEBPACK_IMPORTED_MODULE_1__;\n      linkAuthor = \"https://unsplash.com/@v2306\";\n      authorName = \"Valery Rabchenyuk\";\n      linkPhoto = \"https://unsplash.com/photos/j5rN_3wBy3E\";\n    } else if (/rain|shower|drizzle/gi.test(weather)) {\n      image = _images_rainy_weather_jpg__WEBPACK_IMPORTED_MODULE_2__;\n      linkAuthor = \"https://unsplash.com/@noahsilliman\";\n      authorName = \"Noah Silliman\";\n      linkPhoto = \"https://unsplash.com/photos/i2J9jnvaAbU\";\n    } else if (/fog|mist/gi.test(weather)) {\n      image = _images_foggy_weather_jpg__WEBPACK_IMPORTED_MODULE_3__;\n      linkAuthor = \"https://unsplash.com/@ericmuhr\";\n      authorName = \"Eric Muhr\";\n      linkPhoto = \"https://unsplash.com/photos/Fs-bcmsV-hA\";\n    } else if (/snow|blizzard|sleet/gi.test(weather)) {\n      image = _images_snowy_weather_jpg__WEBPACK_IMPORTED_MODULE_4__;\n      linkAuthor = \"https://unsplash.com/@aditya1702\";\n      authorName = \"Aditya Vyas\";\n      linkPhoto = \"https://unsplash.com/photos/PzhmEp_aDU4\";\n    } else {\n      image = _images_default_weather_jpg__WEBPACK_IMPORTED_MODULE_5__;\n      linkAuthor = \"https://unsplash.com/@noaa\";\n      authorName = \"NOAA\";\n      linkPhoto = \"https://unsplash.com/photos/99F4mC79j1I\";\n    }\n    return {\n      image,\n      linkAuthor,\n      authorName,\n      linkPhoto\n    };\n  };\n  const setBackground = imageObject => {\n    const prevAuthorCredits = document.querySelector(\".authorCredits\");\n    if (prevAuthorCredits) prevAuthorCredits.remove();\n    document.body.style.backgroundImage = `url(${imageObject.image})`;\n    document.body.style.backgroundRepeat = \"no-repeat\";\n    document.body.style.backgroundPosition = \"center\";\n    const linkAuthorElement = document.createElement(\"a\");\n    linkAuthorElement.href = imageObject.linkAuthor;\n    linkAuthorElement.textContent = imageObject.authorName;\n    linkAuthorElement.target = \"_blank\";\n    const linkPhotoElement = document.createElement(\"a\");\n    linkPhotoElement.href = imageObject.linkPhoto;\n    linkPhotoElement.textContent = \"Unsplash\";\n    linkPhotoElement.target = \"_blank\";\n    const authorCredits = document.createElement(\"p\");\n    authorCredits.classList.add(\"authorCredits\");\n    authorCredits.appendChild(linkAuthorElement);\n    authorCredits.appendChild(linkPhotoElement);\n    linkAuthorElement.before(\"Photo by\");\n    linkAuthorElement.after(\" on\");\n    const credits = document.querySelector(\".credits\");\n    credits.appendChild(authorCredits);\n  };\n  return {\n    determineBackgroundImage,\n    setBackground\n  };\n})();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Background);\n\n//# sourceURL=webpack://weather-app/./src/modules/background.js?");

/***/ }),

/***/ "./src/modules/dom.js":
/*!****************************!*\
  !*** ./src/modules/dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _weatherapi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherapi */ \"./src/modules/weatherapi.js\");\n\n\n\nconst Dom = (() => {\n  const cityName = document.querySelector(\".cityName\");\n  const country = document.querySelector(\".country\");\n  const localtime = document.querySelector(\".localtime\");\n  const temperature = document.querySelector(\".temperature\");\n  const weather = document.querySelector(\".weather\");\n  const feelsLike = document.querySelector(\".feelsLike\");\n  const humidity = document.querySelector(\".humidity\");\n  const wind = document.querySelector(\".wind\");\n  const searchBtn = document.querySelector(\"#searchBtn\");\n  const fillFetchedData = (data, tempInCelsius, distanceInKm) => {\n    cityName.textContent = data.location.name;\n    country.textContent = data.location.country;\n    localtime.textContent = data.location.localtime;\n    temperature.textContent = `Temperature: ${tempInCelsius ? `${data.current.temp_c} C` : `${data.current.temp_f} F`}`;\n    weather.textContent = data.current.condition.text;\n    feelsLike.textContent = `Feels like: ${tempInCelsius ? `${data.current.feelslike_c} C` : `${data.current.feelslike_f} F`}`;\n    humidity.textContent = `Humidity: ${data.current.humidity} %`;\n    wind.textContent = `Wind: ${distanceInKm ? `${data.current.wind_kph} km/h` : `${data.current.wind_mph} m/h`}`;\n  };\n  const assignCallbackToSearch = () => {\n    searchBtn.addEventListener(\"click\", async event => {\n      event.preventDefault();\n      const city = document.getElementById(\"searchCity\").value;\n      try {\n        const data = await _weatherapi__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fetchData(city);\n        const useCelsius = document.getElementById(\"degrees\").checked;\n        const useKm = document.getElementById(\"distance\").checked;\n        fillFetchedData(data, useCelsius, useKm);\n      } catch (error) {\n        console.log(\"Encountered an error. Most likely means that the API couldn't\\n find the city\");\n        console.error(error);\n      }\n    });\n  };\n  return {\n    fillFetchedData,\n    assignCallbackToSearch\n  };\n})();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dom);\n\n//# sourceURL=webpack://weather-app/./src/modules/dom.js?");

/***/ }),

/***/ "./src/modules/weatherapi.js":
/*!***********************************!*\
  !*** ./src/modules/weatherapi.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nconst WeatherApi = (() => {\n  const fetchData = async city => {\n    if (!city) return \"No city was provided\";\n    try {\n      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=bb18fd6402d04c85a3a234856232408&q=${city}`, {\n        mode: \"cors\"\n      });\n      return await response.json();\n    } catch (error) {\n      return error;\n    }\n  };\n  return {\n    fetchData\n  };\n})();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WeatherApi);\n\n//# sourceURL=webpack://weather-app/./src/modules/weatherapi.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_weatherapi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/weatherapi */ \"./src/modules/weatherapi.js\");\n/* harmony import */ var _modules_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/dom */ \"./src/modules/dom.js\");\n/* harmony import */ var _modules_background__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/background */ \"./src/modules/background.js\");\n\n\n\n\n\ntry {\n  const data = await _modules_weatherapi__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fetchData(\"Washington\");\n  _modules_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].fillFetchedData(data, true, true);\n} catch (error) {\n  console.log(\"Encountered an error. Most likely means that the API couldn't\\n find the city\");\n  console.error(error);\n}\n_modules_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].assignCallbackToSearch();\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://weather-app/./src/script.js?");

/***/ }),

/***/ "./src/images/cloudy-weather.jpg":
/*!***************************************!*\
  !*** ./src/images/cloudy-weather.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c7849c974ed24736d4ad.jpg\";\n\n//# sourceURL=webpack://weather-app/./src/images/cloudy-weather.jpg?");

/***/ }),

/***/ "./src/images/default-weather.jpg":
/*!****************************************!*\
  !*** ./src/images/default-weather.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a2179039e1604b13f1ab.jpg\";\n\n//# sourceURL=webpack://weather-app/./src/images/default-weather.jpg?");

/***/ }),

/***/ "./src/images/foggy-weather.jpg":
/*!**************************************!*\
  !*** ./src/images/foggy-weather.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1118b785af924d471c7a.jpg\";\n\n//# sourceURL=webpack://weather-app/./src/images/foggy-weather.jpg?");

/***/ }),

/***/ "./src/images/rainy-weather.jpg":
/*!**************************************!*\
  !*** ./src/images/rainy-weather.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"29b0b4a2cbdb320ed3b4.jpg\";\n\n//# sourceURL=webpack://weather-app/./src/images/rainy-weather.jpg?");

/***/ }),

/***/ "./src/images/snowy-weather.jpg":
/*!**************************************!*\
  !*** ./src/images/snowy-weather.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3d7ca6c6f81cca1230c4.jpg\";\n\n//# sourceURL=webpack://weather-app/./src/images/snowy-weather.jpg?");

/***/ }),

/***/ "./src/images/sunny-weather.jpg":
/*!**************************************!*\
  !*** ./src/images/sunny-weather.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"adf003d4859111122657.jpg\";\n\n//# sourceURL=webpack://weather-app/./src/images/sunny-weather.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.js");
/******/ 	
/******/ })()
;