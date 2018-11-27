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
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./flight.ts":
/*!*******************!*\
  !*** ./flight.ts ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar ScheduledFlight = /** @class */ (function () {\r\n    function ScheduledFlight() {\r\n    }\r\n    ScheduledFlight.prototype.calcPrice = function () {\r\n        return this.distance / 3;\r\n    };\r\n    Object.defineProperty(ScheduledFlight.prototype, \"unixDate\", {\r\n        get: function () {\r\n            return new Date(this.date).getTime();\r\n        },\r\n        set: function (time) {\r\n            var date = new Date(time);\r\n            this.date = date.toISOString();\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    return ScheduledFlight;\r\n}());\r\nexports.ScheduledFlight = ScheduledFlight;\r\nvar FlightManager = /** @class */ (function () {\r\n    function FlightManager(cache) {\r\n        this._cache = cache;\r\n    }\r\n    FlightManager.prototype.search = function (from, to) {\r\n        var result = new Array();\r\n        for (var _i = 0, _a = this._cache; _i < _a.length; _i++) {\r\n            var f = _a[_i];\r\n            if (f.from === from && f.to === to) {\r\n                result.push(f);\r\n            }\r\n        }\r\n        return result;\r\n    };\r\n    FlightManager.prototype.search2 = function (from, to) {\r\n        return this._cache.filter(function (f) {\r\n            return f.from === from && f.to === to;\r\n        });\r\n    };\r\n    FlightManager.prototype.search3 = function (from, to) {\r\n        var _this = this;\r\n        return this._cache.filter(function (f) { return _this.fitlerFn(f, from, to); });\r\n    };\r\n    FlightManager.prototype.fitlerFn = function (f, from, to) {\r\n        var result = f.from === from && f.to === to;\r\n        return result;\r\n    };\r\n    FlightManager.prototype.searchFromWeb = function (from, to, success, failed) {\r\n        var xmlHttp = new XMLHttpRequest();\r\n        xmlHttp.onreadystatechange = function () {\r\n            console.log(xmlHttp.readyState, xmlHttp.status);\r\n            if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {\r\n                console.log(xmlHttp.responseText);\r\n                success(JSON.parse(xmlHttp.responseText));\r\n            }\r\n            else if (xmlHttp.readyState === 4 && xmlHttp.status >= 400) {\r\n                console.error(xmlHttp.responseText);\r\n                failed(xmlHttp.responseText);\r\n            }\r\n        };\r\n        var url = \"http://www.angular.at/api/flight?from=\" + encodeURIComponent(from) + \"&to=\" + encodeURIComponent(to);\r\n        xmlHttp.open('GET', url);\r\n        xmlHttp.send();\r\n    };\r\n    return FlightManager;\r\n}());\r\nexports.FlightManager = FlightManager;\r\nconsole.log(Math.random());\r\nvar maxInt = Number.MAX_SAFE_INTEGER;\r\nconsole.log(maxInt === maxInt - 1, maxInt);\r\nmaxInt++;\r\nconsole.log(maxInt === maxInt + 1, maxInt);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9mbGlnaHQudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mbGlnaHQudHM/MGRmMSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgU2NoZWR1bGVkRmxpZ2h0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gU2NoZWR1bGVkRmxpZ2h0KCkge1xyXG4gICAgfVxyXG4gICAgU2NoZWR1bGVkRmxpZ2h0LnByb3RvdHlwZS5jYWxjUHJpY2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlzdGFuY2UgLyAzO1xyXG4gICAgfTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTY2hlZHVsZWRGbGlnaHQucHJvdG90eXBlLCBcInVuaXhEYXRlXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHRoaXMuZGF0ZSkuZ2V0VGltZSgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodGltZSkge1xyXG4gICAgICAgICAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKHRpbWUpO1xyXG4gICAgICAgICAgICB0aGlzLmRhdGUgPSBkYXRlLnRvSVNPU3RyaW5nKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gU2NoZWR1bGVkRmxpZ2h0O1xyXG59KCkpO1xyXG5leHBvcnRzLlNjaGVkdWxlZEZsaWdodCA9IFNjaGVkdWxlZEZsaWdodDtcclxudmFyIEZsaWdodE1hbmFnZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBGbGlnaHRNYW5hZ2VyKGNhY2hlKSB7XHJcbiAgICAgICAgdGhpcy5fY2FjaGUgPSBjYWNoZTtcclxuICAgIH1cclxuICAgIEZsaWdodE1hbmFnZXIucHJvdG90eXBlLnNlYXJjaCA9IGZ1bmN0aW9uIChmcm9tLCB0bykge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gdGhpcy5fY2FjaGU7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBmID0gX2FbX2ldO1xyXG4gICAgICAgICAgICBpZiAoZi5mcm9tID09PSBmcm9tICYmIGYudG8gPT09IHRvKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChmKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfTtcclxuICAgIEZsaWdodE1hbmFnZXIucHJvdG90eXBlLnNlYXJjaDIgPSBmdW5jdGlvbiAoZnJvbSwgdG8pIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY2FjaGUuZmlsdGVyKGZ1bmN0aW9uIChmKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmLmZyb20gPT09IGZyb20gJiYgZi50byA9PT0gdG87XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgRmxpZ2h0TWFuYWdlci5wcm90b3R5cGUuc2VhcmNoMyA9IGZ1bmN0aW9uIChmcm9tLCB0bykge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhY2hlLmZpbHRlcihmdW5jdGlvbiAoZikgeyByZXR1cm4gX3RoaXMuZml0bGVyRm4oZiwgZnJvbSwgdG8pOyB9KTtcclxuICAgIH07XHJcbiAgICBGbGlnaHRNYW5hZ2VyLnByb3RvdHlwZS5maXRsZXJGbiA9IGZ1bmN0aW9uIChmLCBmcm9tLCB0bykge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSBmLmZyb20gPT09IGZyb20gJiYgZi50byA9PT0gdG87XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH07XHJcbiAgICBGbGlnaHRNYW5hZ2VyLnByb3RvdHlwZS5zZWFyY2hGcm9tV2ViID0gZnVuY3Rpb24gKGZyb20sIHRvLCBzdWNjZXNzLCBmYWlsZWQpIHtcclxuICAgICAgICB2YXIgeG1sSHR0cCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIHhtbEh0dHAub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh4bWxIdHRwLnJlYWR5U3RhdGUsIHhtbEh0dHAuc3RhdHVzKTtcclxuICAgICAgICAgICAgaWYgKHhtbEh0dHAucmVhZHlTdGF0ZSA9PT0gNCAmJiB4bWxIdHRwLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh4bWxIdHRwLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzKEpTT04ucGFyc2UoeG1sSHR0cC5yZXNwb25zZVRleHQpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh4bWxIdHRwLnJlYWR5U3RhdGUgPT09IDQgJiYgeG1sSHR0cC5zdGF0dXMgPj0gNDAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHhtbEh0dHAucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICAgIGZhaWxlZCh4bWxIdHRwLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciB1cmwgPSBcImh0dHA6Ly93d3cuYW5ndWxhci5hdC9hcGkvZmxpZ2h0P2Zyb209XCIgKyBlbmNvZGVVUklDb21wb25lbnQoZnJvbSkgKyBcIiZ0bz1cIiArIGVuY29kZVVSSUNvbXBvbmVudCh0byk7XHJcbiAgICAgICAgeG1sSHR0cC5vcGVuKCdHRVQnLCB1cmwpO1xyXG4gICAgICAgIHhtbEh0dHAuc2VuZCgpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBGbGlnaHRNYW5hZ2VyO1xyXG59KCkpO1xyXG5leHBvcnRzLkZsaWdodE1hbmFnZXIgPSBGbGlnaHRNYW5hZ2VyO1xyXG5jb25zb2xlLmxvZyhNYXRoLnJhbmRvbSgpKTtcclxudmFyIG1heEludCA9IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSO1xyXG5jb25zb2xlLmxvZyhtYXhJbnQgPT09IG1heEludCAtIDEsIG1heEludCk7XHJcbm1heEludCsrO1xyXG5jb25zb2xlLmxvZyhtYXhJbnQgPT09IG1heEludCArIDEsIG1heEludCk7XHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./flight.ts\n");

/***/ }),

/***/ "./main.ts":
/*!*****************!*\
  !*** ./main.ts ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar person_1 = __webpack_require__(/*! ./person */ \"./person.ts\");\r\nvar flight_1 = __webpack_require__(/*! ./flight */ \"./flight.ts\");\r\nvar peter = new person_1.Person();\r\npeter.firstname = 'Peter';\r\npeter.lastname = 'Pan';\r\npeter.age = 13;\r\n/**\r\n * TypeScript Compiler Error, but valid JavaScript.\r\n */\r\n// peter.age = 'very old!';\r\nconsole.log(peter);\r\nvar person1 = new person_1.Passenger();\r\nperson1.firstname = 'Markus';\r\nperson1.lastname = 'Traveller';\r\nvar person2 = new person_1.Pilot();\r\nperson2.firstname = 'Mary';\r\nperson2.lastname = 'Superstar';\r\nvar personCache = [];\r\nperson2.licenseNumer = '326378238';\r\npersonCache.push(person1);\r\npersonCache.push(person2);\r\nconsole.log(personCache);\r\nconsole.log(personCache[1] instanceof person_1.Pilot);\r\nvar personPilotPassenger;\r\nvar pilotPassenger = __assign({}, person1, { lastname: 'Huber', licenseNumer: '', passengerStatus: '' });\r\nconsole.log(pilotPassenger);\r\nvar flights = [\r\n    {\r\n        id: 17,\r\n        from: 'Graz',\r\n        to: 'Hamburg',\r\n        date: '2017-02-27'\r\n    },\r\n    {\r\n        id: 18,\r\n        from: 'Graz',\r\n        to: 'Hamburg',\r\n        date: '2017-02-27'\r\n    },\r\n    {\r\n        id: 19,\r\n        from: 'Graz',\r\n        to: 'Mallorca',\r\n        date: '2017-02-27'\r\n    },\r\n    {\r\n        id: 20,\r\n        from: 'Graz',\r\n        to: 'Hamburg',\r\n        date: '2017-02-27'\r\n    }\r\n];\r\nvar fm = new flight_1.FlightManager(flights);\r\nconsole.log(fm.search('Graz', 'Hamburg'));\r\nconsole.log(fm.searchFromWeb('Graz', 'Hamburg', \r\n//flights => console.log('Number of Flights', flights.length),\r\nfunction (flights) { return flights.forEach(function (flight) { return console.log(flight.id); }); }, \r\n/* (\r\n    (flights) => {\r\n        flights.forEach(\r\n            (flight) => {\r\n                console.log(flight.id)\r\n            }\r\n        )\r\n    }\r\n), */\r\nfunction (err) { return console.log(err); }));\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tYWluLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbWFpbi50cz85ZTkzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXHJcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHBlcnNvbl8xID0gcmVxdWlyZShcIi4vcGVyc29uXCIpO1xyXG52YXIgZmxpZ2h0XzEgPSByZXF1aXJlKFwiLi9mbGlnaHRcIik7XHJcbnZhciBwZXRlciA9IG5ldyBwZXJzb25fMS5QZXJzb24oKTtcclxucGV0ZXIuZmlyc3RuYW1lID0gJ1BldGVyJztcclxucGV0ZXIubGFzdG5hbWUgPSAnUGFuJztcclxucGV0ZXIuYWdlID0gMTM7XHJcbi8qKlxyXG4gKiBUeXBlU2NyaXB0IENvbXBpbGVyIEVycm9yLCBidXQgdmFsaWQgSmF2YVNjcmlwdC5cclxuICovXHJcbi8vIHBldGVyLmFnZSA9ICd2ZXJ5IG9sZCEnO1xyXG5jb25zb2xlLmxvZyhwZXRlcik7XHJcbnZhciBwZXJzb24xID0gbmV3IHBlcnNvbl8xLlBhc3NlbmdlcigpO1xyXG5wZXJzb24xLmZpcnN0bmFtZSA9ICdNYXJrdXMnO1xyXG5wZXJzb24xLmxhc3RuYW1lID0gJ1RyYXZlbGxlcic7XHJcbnZhciBwZXJzb24yID0gbmV3IHBlcnNvbl8xLlBpbG90KCk7XHJcbnBlcnNvbjIuZmlyc3RuYW1lID0gJ01hcnknO1xyXG5wZXJzb24yLmxhc3RuYW1lID0gJ1N1cGVyc3Rhcic7XHJcbnZhciBwZXJzb25DYWNoZSA9IFtdO1xyXG5wZXJzb24yLmxpY2Vuc2VOdW1lciA9ICczMjYzNzgyMzgnO1xyXG5wZXJzb25DYWNoZS5wdXNoKHBlcnNvbjEpO1xyXG5wZXJzb25DYWNoZS5wdXNoKHBlcnNvbjIpO1xyXG5jb25zb2xlLmxvZyhwZXJzb25DYWNoZSk7XHJcbmNvbnNvbGUubG9nKHBlcnNvbkNhY2hlWzFdIGluc3RhbmNlb2YgcGVyc29uXzEuUGlsb3QpO1xyXG52YXIgcGVyc29uUGlsb3RQYXNzZW5nZXI7XHJcbnZhciBwaWxvdFBhc3NlbmdlciA9IF9fYXNzaWduKHt9LCBwZXJzb24xLCB7IGxhc3RuYW1lOiAnSHViZXInLCBsaWNlbnNlTnVtZXI6ICcnLCBwYXNzZW5nZXJTdGF0dXM6ICcnIH0pO1xyXG5jb25zb2xlLmxvZyhwaWxvdFBhc3Nlbmdlcik7XHJcbnZhciBmbGlnaHRzID0gW1xyXG4gICAge1xyXG4gICAgICAgIGlkOiAxNyxcclxuICAgICAgICBmcm9tOiAnR3JheicsXHJcbiAgICAgICAgdG86ICdIYW1idXJnJyxcclxuICAgICAgICBkYXRlOiAnMjAxNy0wMi0yNydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDE4LFxyXG4gICAgICAgIGZyb206ICdHcmF6JyxcclxuICAgICAgICB0bzogJ0hhbWJ1cmcnLFxyXG4gICAgICAgIGRhdGU6ICcyMDE3LTAyLTI3J1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogMTksXHJcbiAgICAgICAgZnJvbTogJ0dyYXonLFxyXG4gICAgICAgIHRvOiAnTWFsbG9yY2EnLFxyXG4gICAgICAgIGRhdGU6ICcyMDE3LTAyLTI3J1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogMjAsXHJcbiAgICAgICAgZnJvbTogJ0dyYXonLFxyXG4gICAgICAgIHRvOiAnSGFtYnVyZycsXHJcbiAgICAgICAgZGF0ZTogJzIwMTctMDItMjcnXHJcbiAgICB9XHJcbl07XHJcbnZhciBmbSA9IG5ldyBmbGlnaHRfMS5GbGlnaHRNYW5hZ2VyKGZsaWdodHMpO1xyXG5jb25zb2xlLmxvZyhmbS5zZWFyY2goJ0dyYXonLCAnSGFtYnVyZycpKTtcclxuY29uc29sZS5sb2coZm0uc2VhcmNoRnJvbVdlYignR3JheicsICdIYW1idXJnJywgXHJcbi8vZmxpZ2h0cyA9PiBjb25zb2xlLmxvZygnTnVtYmVyIG9mIEZsaWdodHMnLCBmbGlnaHRzLmxlbmd0aCksXHJcbmZ1bmN0aW9uIChmbGlnaHRzKSB7IHJldHVybiBmbGlnaHRzLmZvckVhY2goZnVuY3Rpb24gKGZsaWdodCkgeyByZXR1cm4gY29uc29sZS5sb2coZmxpZ2h0LmlkKTsgfSk7IH0sIFxyXG4vKiAoXHJcbiAgICAoZmxpZ2h0cykgPT4ge1xyXG4gICAgICAgIGZsaWdodHMuZm9yRWFjaChcclxuICAgICAgICAgICAgKGZsaWdodCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZmxpZ2h0LmlkKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4pLCAqL1xyXG5mdW5jdGlvbiAoZXJyKSB7IHJldHVybiBjb25zb2xlLmxvZyhlcnIpOyB9KSk7XHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./main.ts\n");

/***/ }),

/***/ "./person.ts":
/*!*******************!*\
  !*** ./person.ts ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    }\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Person = /** @class */ (function () {\r\n    function Person() {\r\n    }\r\n    return Person;\r\n}());\r\nexports.Person = Person;\r\nvar Passenger = /** @class */ (function (_super) {\r\n    __extends(Passenger, _super);\r\n    function Passenger() {\r\n        return _super !== null && _super.apply(this, arguments) || this;\r\n    }\r\n    return Passenger;\r\n}(Person));\r\nexports.Passenger = Passenger;\r\nvar Pilot = /** @class */ (function (_super) {\r\n    __extends(Pilot, _super);\r\n    function Pilot() {\r\n        return _super !== null && _super.apply(this, arguments) || this;\r\n    }\r\n    return Pilot;\r\n}(Person));\r\nexports.Pilot = Pilot;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wZXJzb24udHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wZXJzb24udHM/NmMxZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH1cclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgUGVyc29uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUGVyc29uKCkge1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFBlcnNvbjtcclxufSgpKTtcclxuZXhwb3J0cy5QZXJzb24gPSBQZXJzb247XHJcbnZhciBQYXNzZW5nZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoUGFzc2VuZ2VyLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gUGFzc2VuZ2VyKCkge1xyXG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgIH1cclxuICAgIHJldHVybiBQYXNzZW5nZXI7XHJcbn0oUGVyc29uKSk7XHJcbmV4cG9ydHMuUGFzc2VuZ2VyID0gUGFzc2VuZ2VyO1xyXG52YXIgUGlsb3QgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoUGlsb3QsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBQaWxvdCgpIHtcclxuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUGlsb3Q7XHJcbn0oUGVyc29uKSk7XHJcbmV4cG9ydHMuUGlsb3QgPSBQaWxvdDtcclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./person.ts\n");

/***/ })

/******/ });