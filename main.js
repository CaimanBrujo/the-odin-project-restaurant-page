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

/***/ "./src/assets/images/swamp-food-1.webp":
/*!*********************************************!*\
  !*** ./src/assets/images/swamp-food-1.webp ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4b5617dbbb5801bcdb21.webp\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/swamp-food-1.webp?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadContact)\n/* harmony export */ });\nfunction loadContact() {\n    const content = document.querySelector('#content');\n    content.innerHTML = '';\n\n    const contactSection = document.createElement('section');\n    contactSection.classList.add('section', 'contact-section');\n\n    const heading = document.createElement('h2');\n    heading.classList.add('section-title');\n    heading.textContent = 'Contact Us';\n\n    const contactInfo = document.createElement('div');\n    contactInfo.classList.add('contact-info');\n\n    const phone = document.createElement('p');\n    phone.classList.add('contact-phone');\n    phone.innerHTML = '<strong>Phone:</strong> +123 456 7890';\n\n    const address = document.createElement('p');\n    address.classList.add('contact-address');\n    address.innerHTML = '<strong>Address:</strong> Swamp Street 404, Nowhere, Earth';\n\n    contactInfo.appendChild(phone);\n    contactInfo.appendChild(address);\n\n    contactSection.appendChild(heading);\n    contactSection.appendChild(contactInfo);\n    content.appendChild(contactSection);\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadHome)\n/* harmony export */ });\n/* harmony import */ var _assets_images_swamp_food_1_webp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/images/swamp-food-1.webp */ \"./src/assets/images/swamp-food-1.webp\");\n\n\nfunction loadHome() {\n    const content = document.querySelector('#content');\n\n    const homeDiv = document.createElement('div');\n    homeDiv.classList.add('home');\n\n    const heading = document.createElement('h1');\n    heading.classList.add('home-title');\n    heading.textContent = 'Welcome to Swamp Kitchen';\n\n    const description = document.createElement('p');\n    description.classList.add('home-description');\n    description.textContent = 'The best swamp-based delicacies in the multiverse.';\n\n    const img = document.createElement('img');\n    img.classList.add('home-image');\n    img.src = _assets_images_swamp_food_1_webp__WEBPACK_IMPORTED_MODULE_0__;\n    img.alt = 'Delicious food';\n\n    homeDiv.appendChild(heading);\n    homeDiv.appendChild(description);\n    homeDiv.appendChild(img);\n\n    content.appendChild(homeDiv);\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\nfunction clearContent() {\n    const content = document.querySelector('#content');\n    content.innerHTML = '';\n}\n\nfunction setTabListeners() {\n    const homeBtn = document.querySelector('#home-btn');\n    const menuBtn = document.querySelector('#menu-btn');\n    const contactBtn = document.querySelector('#contact-btn');\n\n    homeBtn.addEventListener('click', () => {\n        clearContent();\n        (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    });\n\n    menuBtn.addEventListener('click', () => {\n        clearContent();\n        (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    });\n\n    contactBtn.addEventListener('click', () => {\n        clearContent();\n        (0,_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    });\n}\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    setTabListeners();\n});\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadMenu)\n/* harmony export */ });\nfunction loadMenu() {\n    const content = document.querySelector('#content');\n    content.innerHTML = '';\n\n    const menuSection = document.createElement('section');\n    menuSection.classList.add('section', 'menu-section');\n\n    const heading = document.createElement('h2');\n    heading.classList.add('section-title');\n    heading.textContent = 'Our Signature Dishes';\n\n    const menuList = document.createElement('ul');\n    menuList.classList.add('menu-list');\n\n    const items = [\n        { name: '🧀 Swamp Cheese Nuggets', desc: 'Crispy, gooey and slightly toxic.' },\n        { name: '🐸 Grilled Frog Legs', desc: 'Straight from the bog, charred to perfection.' },\n    ];\n\n    items.forEach(item => {\n        const listItem = document.createElement('li');\n        listItem.classList.add('menu-item');\n\n        const itemTitle = document.createElement('h3');\n        itemTitle.classList.add('menu-item-title');\n        itemTitle.textContent = item.name;\n\n        const itemDesc = document.createElement('p');\n        itemDesc.classList.add('menu-item-desc');\n        itemDesc.textContent = item.desc;\n\n        listItem.appendChild(itemTitle);\n        listItem.appendChild(itemDesc);\n        menuList.appendChild(listItem);\n    });\n\n    menuSection.appendChild(heading);\n    menuSection.appendChild(menuList);\n    content.appendChild(menuSection);\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;