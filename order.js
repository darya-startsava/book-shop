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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/order.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/order.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  background-color: #fefde9;\\n  color: #4e4423;\\n}\\n\\nbutton {\\n  cursor: pointer;\\n}\\n\\na {\\n  cursor: pointer;\\n  color: inherit;\\n  text-decoration: none;\\n}\\n\\n.button {\\n  background-color: #8eb2ac;\\n  border-radius: 10px;\\n  border: 2px solid #ba883d;\\n  padding: 5px;\\n}\\n\\n.body_wrapper {\\n  width: 1400px;\\n  margin: auto;\\n}\\n\\n.body_content {\\n  margin: 0 auto;\\n  display: flex;\\n  flex-direction: column;\\n}\\n.body_content .form_wrapper {\\n  margin: 0 auto;\\n  display: flex;\\n  flex-direction: column;\\n  row-gap: 15px;\\n}\\n.body_content .form_wrapper .complete_order_button {\\n  width: 100px;\\n}\\n.body_content .form_wrapper input[type=text] {\\n  border-radius: 5px;\\n}\\n.body_content .form_wrapper .error {\\n  border: 2px solid red;\\n}\\n.body_content .form_wrapper .error_message {\\n  color: red;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://book-shop/./src/order.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://book-shop/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://book-shop/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/order.scss":
/*!************************!*\
  !*** ./src/order.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_order_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./order.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/order.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_order_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_order_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_order_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_order_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://book-shop/./src/order.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://book-shop/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://book-shop/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://book-shop/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://book-shop/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://book-shop/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://book-shop/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/js/listeners.js":
/*!*****************************!*\
  !*** ./src/js/listeners.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addToBag\": () => (/* binding */ addToBag),\n/* harmony export */   \"checkboxesGiftValidation\": () => (/* binding */ checkboxesGiftValidation),\n/* harmony export */   \"closePopup\": () => (/* binding */ closePopup),\n/* harmony export */   \"inputDateValidation\": () => (/* binding */ inputDateValidation),\n/* harmony export */   \"inputFlatValidation\": () => (/* binding */ inputFlatValidation),\n/* harmony export */   \"inputHouseValidation\": () => (/* binding */ inputHouseValidation),\n/* harmony export */   \"inputStreetValidation\": () => (/* binding */ inputStreetValidation),\n/* harmony export */   \"inputStringValidation\": () => (/* binding */ inputStringValidation),\n/* harmony export */   \"showMoreAboutBook\": () => (/* binding */ showMoreAboutBook)\n/* harmony export */ });\nfunction closePopup() {\r\n  document.getElementById('overlay').classList.remove('show');\r\n}\r\n\r\nfunction showMoreAboutBook(description) {\r\n  document.getElementById('overlay').classList.add('show');\r\n  document.getElementById('popupText').innerHTML = description;\r\n}\r\n\r\nfunction addToBag(book) {\r\n  const { author, title, price } = book;\r\n  const bagBookItem = document.createElement('div');\r\n  bagBookItem.classList.add('bag_book_item');\r\n  const bagBookAuthor = document.createElement('h4');\r\n  const bagBookTitle = document.createElement('h4');\r\n  const bagBookpriceP = document.createElement('p');\r\n  const buttonRemoveBook = document.createElement('button');\r\n  buttonRemoveBook.classList.add('button_remove_book');\r\n  buttonRemoveBook.addEventListener('click', (e) => removeBook(e));\r\n  buttonRemoveBook.innerHTML = 'x';\r\n  bagBookAuthor.innerHTML = author;\r\n  bagBookTitle.innerHTML = title;\r\n  bagBookpriceP.innerHTML = `Price: ${price}`;\r\n  bagBookItem.append(bagBookAuthor, bagBookTitle, bagBookpriceP, buttonRemoveBook);\r\n  document.getElementById('bag_books_wrapper').append(bagBookItem);\r\n  document.getElementById('bag_total_price').innerHTML =\r\n    +document.getElementById('bag_total_price').innerHTML + price;\r\n}\r\n\r\nfunction removeBook(e) {\r\n  const bookElement = e.target.closest('.bag_book_item');\r\n  const price = bookElement.querySelector('p').innerHTML.slice(6);\r\n  document.getElementById('bag_total_price').innerHTML =\r\n    +document.getElementById('bag_total_price').innerHTML - +price;\r\n  bookElement.remove();\r\n}\r\n\r\nlet isValidName = false;\r\nlet isValidSurname = false;\r\nlet isValidDeliveryDate = false;\r\nlet isValidStreet = false;\r\nlet isValidHouse = false;\r\nlet isValidFlat = false;\r\nlet isValidGift = true;\r\nconst buttonCompleteOrder = document.getElementById('complete_order_button');\r\n\r\nfunction checkIsValidForm() {\r\n  if (\r\n    isValidName &&\r\n    isValidSurname &&\r\n    isValidDeliveryDate &&\r\n    isValidStreet &&\r\n    isValidHouse &&\r\n    isValidFlat &&\r\n    isValidGift\r\n  ) {\r\n    buttonCompleteOrder.disabled = false;\r\n  } else {\r\n    buttonCompleteOrder.disabled = true;\r\n  }\r\n}\r\n\r\nfunction inputStringValidation(length) {\r\n  let type = 'name';\r\n  if (length === 5) {\r\n    type = 'surname';\r\n  }\r\n\r\n  const message = document.getElementById(`input_${type}_message`);\r\n  const errorMessage = `The field is invalid. Please enter at least ${length} letter symbols without space`;\r\n  const value = document.getElementById(`input_${type}`).value;\r\n  if (!value) {\r\n    message.innerHTML = errorMessage;\r\n  } else if (value?.length < length) {\r\n    message.innerHTML = errorMessage;\r\n  } else if (value?.match(/[a-z]/gi).length !== value.length) {\r\n    message.innerHTML = errorMessage;\r\n  } else {\r\n    message.innerHTML = '';\r\n  }\r\n  if (message.innerHTML) {\r\n    type === 'name' ? (isValidName = false) : (isValidSurname = false);\r\n    document.getElementById(`input_${type}`).classList.add('error');\r\n  } else {\r\n    type === 'name' ? (isValidName = true) : (isValidSurname = true);\r\n    document.getElementById(`input_${type}`).classList.remove('error');\r\n  }\r\n  checkIsValidForm();\r\n}\r\nfunction inputDateValidation() {\r\n  let isCorrect = true;\r\n  const errorMessage =\r\n    'The field is invalid. Please enter a day not earlier than next day';\r\n  const value = document\r\n    .getElementById('input_date')\r\n    .value.split('-')\r\n    .map((i) => Number(i));\r\n  const message = document.getElementById('input_date_message');\r\n  const currentDate = [\r\n    new Date().getFullYear(),\r\n    new Date().getMonth() + 1,\r\n    new Date().getDate(),\r\n  ];\r\n  if (\r\n    value[0] === currentDate[0] &&\r\n    value[1] === currentDate[1] &&\r\n    value[2] <= currentDate[2]\r\n  ) {\r\n    isCorrect = false;\r\n  }\r\n  message.innerHTML = isCorrect ? '' : errorMessage;\r\n  isValidDeliveryDate = isCorrect ? true : false;\r\n  isCorrect\r\n    ? document.getElementById('input_date').classList.remove('error')\r\n    : document.getElementById('input_date').classList.add('error');\r\n  checkIsValidForm();\r\n}\r\n\r\nfunction inputStreetValidation() {\r\n  const message = document.getElementById('input_street_message');\r\n  const errorMessage =\r\n    'The field is invalid. Please enter at least 5 letter or digit symbols';\r\n  const value = document.getElementById('input_street').value;\r\n  if (value.length < 5) {\r\n    message.innerHTML = errorMessage;\r\n  } else if (value.match(/[a-z0-9]/gi).length !== value.length) {\r\n    message.innerHTML = errorMessage;\r\n  } else {\r\n    message.innerHTML = '';\r\n  }\r\n  isValidStreet = message.innerHTML ? false : true;\r\n  isValidStreet\r\n    ? document.getElementById('input_street').classList.remove('error')\r\n    : document.getElementById('input_street').classList.add('error');\r\n  checkIsValidForm();\r\n}\r\n\r\nfunction inputHouseValidation() {\r\n  const message = document.getElementById('input_house_message');\r\n  const errorMessage = 'The field is invalid. Please enter only positive numbers';\r\n  const value = document.getElementById('input_house').value;\r\n  if (!value) {\r\n    message.innerHTML = errorMessage;\r\n  } else if (!isNaN(Number(value) && Number(value) > 0)) {\r\n    message.innerHTML = '';\r\n  } else message.innerHTML = errorMessage;\r\n  isValidHouse = message.innerHTML ? false : true;\r\n  isValidHouse\r\n    ? document.getElementById('input_house').classList.remove('error')\r\n    : document.getElementById('input_house').classList.add('error');\r\n  checkIsValidForm();\r\n}\r\n\r\nfunction inputFlatValidation() {\r\n  const message = document.getElementById('input_flat_message');\r\n  const errorMessage = 'The field is invalid. Please enter only positive numbers';\r\n  const value = document.getElementById('input_flat').value;\r\n  if (!value) {\r\n    message.innerHTML = errorMessage;\r\n  } else if (\r\n    value?.match(/[0-9-]/g)?.length === value?.length &&\r\n    value?.[0] !== '-'\r\n  ) {\r\n    message.innerHTML = '';\r\n  } else message.innerHTML = errorMessage;\r\n  isValidFlat = message.innerHTML ? false : true;\r\n  isValidFlat\r\n    ? document.getElementById('input_flat').classList.remove('error')\r\n    : document.getElementById('input_flat').classList.add('error');\r\n  checkIsValidForm();\r\n}\r\n\r\nfunction checkboxesGiftValidation() {\r\n  const message = document.getElementById('checkboxes_gift_message');\r\n  const errorMessage = 'Please choose no more than 2 gifts';\r\n  const chosen = document.querySelectorAll('input[name=gift]:checked');\r\n  if (chosen?.length > 2) {\r\n    message.innerHTML = errorMessage;\r\n  } else message.innerHTML = '';\r\n  isValidGift = message.innerHTML ? false : true;\r\n  checkIsValidForm();\r\n}\r\n\n\n//# sourceURL=webpack://book-shop/./src/js/listeners.js?");

/***/ }),

/***/ "./src/js/order.js":
/*!*************************!*\
  !*** ./src/js/order.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _order_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../order.scss */ \"./src/order.scss\");\n/* harmony import */ var _listeners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listeners */ \"./src/js/listeners.js\");\n\r\n\r\n\r\nconst inputName = document.getElementById('input_name');\r\ninputName.addEventListener('change', () => (0,_listeners__WEBPACK_IMPORTED_MODULE_1__.inputStringValidation)(4));\r\nconst inputSurname = document.getElementById('input_surname');\r\ninputSurname.addEventListener('change', () => (0,_listeners__WEBPACK_IMPORTED_MODULE_1__.inputStringValidation)(5));\r\nconst inputDate = document.getElementById('input_date');\r\ninputDate.addEventListener('change', () => (0,_listeners__WEBPACK_IMPORTED_MODULE_1__.inputDateValidation)());\r\nconst inputStreet = document.getElementById('input_street');\r\ninputStreet.addEventListener('change', () => (0,_listeners__WEBPACK_IMPORTED_MODULE_1__.inputStreetValidation)());\r\nconst inputHouse = document.getElementById('input_house');\r\ninputHouse.addEventListener('change', () => (0,_listeners__WEBPACK_IMPORTED_MODULE_1__.inputHouseValidation)());\r\nconst inputFlat = document.getElementById('input_flat');\r\ninputFlat.addEventListener('change', () => (0,_listeners__WEBPACK_IMPORTED_MODULE_1__.inputFlatValidation)());\r\nconst checkboxesGift = document.querySelectorAll('input[name=gift]');\r\ncheckboxesGift.forEach((i) =>\r\n  i.addEventListener('change', () => (0,_listeners__WEBPACK_IMPORTED_MODULE_1__.checkboxesGiftValidation)())\r\n);\r\n\n\n//# sourceURL=webpack://book-shop/./src/js/order.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/order.js");
/******/ 	
/******/ })()
;