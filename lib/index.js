(function(e, a) { for(var i in a) e[i] = a[i]; if(a.__esModule) Object.defineProperty(e, "__esModule", { value: true }); }(exports,
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 942:
/***/ ((__unused_webpack_module, exports) => {

(function(e, a) { for(var i in a) e[i] = a[i]; if(a.__esModule) Object.defineProperty(e, "__esModule", { value: true }); }(exports,
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 607:
/***/ ((__unused_webpack_module, exports) => {


/**
 * @author Michael Breitung
 * @copyright Michael Breitung Photography (www.mibreit-photo.com)
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DomTools = exports.getKeyFromEvent = exports.getElements = exports.getElement = exports.disableDragging = exports.disableContextMenu = exports.addEventListener = exports.addResizeEventListener = exports.addScrollEventListener = exports.addKeyEventListener = exports.addClickEventListener = exports.removeAttribute = exports.setAttribute = exports.getAttribute = exports.hasAttribute = exports.overwriteCssStyles = exports.removeCssStyle = exports.addCssStyle = exports.getComputedCssStyle = exports.getCssStyle = exports.removeAllCssClasses = exports.overwriteCssClasses = exports.removeCssClass = exports.addCssClass = exports.getCssClasses = exports.getElementPosition = exports.isElementWithinWindow = exports.getElementDimension = exports.getParentElement = exports.unwrapElements = exports.wrapElements = exports.setInnerHtml = exports.getChildNodes = exports.prependBeforeChild = exports.appendChildElement = exports.prependChildElement = exports.removeElement = exports.createElement = exports.getRootFontSize = exports.documentReady = void 0;
function documentReady(callback) {
    window.addEventListener('load', callback);
}
exports.documentReady = documentReady;
function getRootFontSize() {
    return parseFloat(window.getComputedStyle(document.body).getPropertyValue('font-size'));
}
exports.getRootFontSize = getRootFontSize;
function createElement(tagName) {
    return document.createElement(tagName);
}
exports.createElement = createElement;
function removeElement(element) {
    element.remove();
}
exports.removeElement = removeElement;
function prependChildElement(element, parent) {
    parent.prepend(element);
}
exports.prependChildElement = prependChildElement;
function appendChildElement(element, parent) {
    parent.append(element);
}
exports.appendChildElement = appendChildElement;
function prependBeforeChild(element, child) {
    child.parentElement.insertBefore(element, child);
}
exports.prependBeforeChild = prependBeforeChild;
function getChildNodes(element) {
    var nodes = element.childNodes;
    var nodesArray = new Array();
    for (var i = 0; i < nodes.length; ++i) {
        nodesArray.push(nodes[i]);
    }
    return nodesArray;
}
exports.getChildNodes = getChildNodes;
function setInnerHtml(parent, inner) {
    parent.innerHTML = inner;
}
exports.setInnerHtml = setInnerHtml;
function wrapElements(elements, wrapper) {
    elements[0].parentNode.insertBefore(wrapper, elements[0]);
    elements.forEach(function (element) {
        wrapper.appendChild(element);
    });
}
exports.wrapElements = wrapElements;
function unwrapElements(wrapper) {
    var elements = wrapper.childNodes;
    elements.forEach(function (element) {
        wrapper.parentNode.insertBefore(element, wrapper);
    });
}
exports.unwrapElements = unwrapElements;
function getParentElement(element) {
    return element.parentElement;
}
exports.getParentElement = getParentElement;
function getElementDimension(element) {
    return {
        width: element.clientWidth,
        height: element.clientHeight,
    };
}
exports.getElementDimension = getElementDimension;
function isElementWithinWindow(element) {
    var elementRect = element.getBoundingClientRect();
    var windowHeight = window.innerHeight;
    return elementRect.top + elementRect.height > 0 && elementRect.top < windowHeight;
}
exports.isElementWithinWindow = isElementWithinWindow;
function getElementPosition(element) {
    var rect = element.getBoundingClientRect();
    var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { y: rect.top + scrollTop, x: rect.left + scrollLeft };
}
exports.getElementPosition = getElementPosition;
function getCssClasses(element) {
    return getAttribute(element, 'class');
}
exports.getCssClasses = getCssClasses;
function addCssClass(element, cssClass) {
    if (!element.classList.contains(cssClass)) {
        element.classList.add(cssClass);
    }
}
exports.addCssClass = addCssClass;
function removeCssClass(element, cssClass) {
    if (element.classList.contains(cssClass)) {
        element.classList.remove(cssClass);
    }
}
exports.removeCssClass = removeCssClass;
function overwriteCssClasses(element, cssClasses) {
    element.setAttribute('class', cssClasses);
}
exports.overwriteCssClasses = overwriteCssClasses;
function removeAllCssClasses(element) {
    if (element.hasAttribute('class')) {
        element.removeAttribute('class');
    }
}
exports.removeAllCssClasses = removeAllCssClasses;
function getCssStyle(element, styleName) {
    return element.style.getPropertyValue(styleName);
}
exports.getCssStyle = getCssStyle;
function getComputedCssStyle(element, styleName) {
    return window.getComputedStyle(element).getPropertyValue(styleName);
}
exports.getComputedCssStyle = getComputedCssStyle;
function addCssStyle(element, styleName, styleProperty) {
    element.style.setProperty(styleName, styleProperty);
}
exports.addCssStyle = addCssStyle;
function removeCssStyle(element, styleName) {
    element.style.removeProperty(styleName);
    if (element.style.length === 0) {
        element.removeAttribute('style');
    }
}
exports.removeCssStyle = removeCssStyle;
function overwriteCssStyles(element, styles) {
    if (styles !== null) {
        element.style.cssText = styles;
    }
    else {
        element.removeAttribute('style');
    }
}
exports.overwriteCssStyles = overwriteCssStyles;
function hasAttribute(element, attribute) {
    return element.hasAttribute(attribute);
}
exports.hasAttribute = hasAttribute;
function getAttribute(element, attribute) {
    if (!element.hasAttribute(attribute)) {
        return null;
    }
    else {
        return element.getAttribute(attribute);
    }
}
exports.getAttribute = getAttribute;
function setAttribute(element, attribute, value) {
    element.setAttribute(attribute, value);
}
exports.setAttribute = setAttribute;
function removeAttribute(element, attribute) {
    element.removeAttribute(attribute);
}
exports.removeAttribute = removeAttribute;
function addClickEventListener(element, callback) {
    element.addEventListener('click', callback);
}
exports.addClickEventListener = addClickEventListener;
function addKeyEventListener(callback) {
    document.addEventListener('keydown', callback);
}
exports.addKeyEventListener = addKeyEventListener;
function addScrollEventListener(callback) {
    document.addEventListener('scroll', callback);
}
exports.addScrollEventListener = addScrollEventListener;
function addResizeEventListener(callback) {
    window.addEventListener('resize', callback);
}
exports.addResizeEventListener = addResizeEventListener;
function addEventListener(element, event, callback) {
    element.addEventListener(event, callback);
}
exports.addEventListener = addEventListener;
function disableContextMenu(element) {
    element.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    });
}
exports.disableContextMenu = disableContextMenu;
function disableDragging(element) {
    element.addEventListener('dragstart', function (e) {
        e.preventDefault();
    });
}
exports.disableDragging = disableDragging;
function getElement(selector) {
    return document.querySelector(selector);
}
exports.getElement = getElement;
function getElements(selector) {
    return document.querySelectorAll(selector);
}
exports.getElements = getElements;
function getKeyFromEvent(event) {
    return event.key;
}
exports.getKeyFromEvent = getKeyFromEvent;
exports.DomTools = {
    documentReady: documentReady,
    getRootFontSize: getRootFontSize,
    createElement: createElement,
    removeElement: removeElement,
    prependChildElement: prependChildElement,
    appendChildElement: appendChildElement,
    prependBeforeChild: prependBeforeChild,
    getChildNodes: getChildNodes,
    setInnerHtml: setInnerHtml,
    wrapElements: wrapElements,
    unwrapElements: unwrapElements,
    getParentElement: getParentElement,
    getElementDimension: getElementDimension,
    getElementPosition: getElementPosition,
    isElementWithinWindow: isElementWithinWindow,
    getCssClasses: getCssClasses,
    addCssClass: addCssClass,
    removeCssClass: removeCssClass,
    removeAllCssClasses: removeAllCssClasses,
    overwriteCssClasses: overwriteCssClasses,
    getCssStyle: getCssStyle,
    getComputedCssStyle: getComputedCssStyle,
    addCssStyle: addCssStyle,
    removeCssStyle: removeCssStyle,
    overwriteCssStyles: overwriteCssStyles,
    hasAttribute: hasAttribute,
    getAttribute: getAttribute,
    setAttribute: setAttribute,
    removeAttribute: removeAttribute,
    addClickEventListener: addClickEventListener,
    addKeyEventListener: addKeyEventListener,
    addScrollEventListener: addScrollEventListener,
    addResizeEventListener: addResizeEventListener,
    addEventListener: addEventListener,
    disableContextMenu: disableContextMenu,
    disableDragging: disableDragging,
    getElement: getElement,
    getElements: getElements,
    getKeyFromEvent: getKeyFromEvent,
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_10012__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_10012__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_10012__(607);
/******/ })()

));

/***/ }),

/***/ 61:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/**
 * @author Michael Breitung
 * @copyright Michael Breitung Photography (www.mibreit-photo.com)
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var Input_1 = __webpack_require__(84);
var CheckboxInput = /** @class */ (function (_super) {
    __extends(CheckboxInput, _super);
    function CheckboxInput(input, errorConfig) {
        var _this = _super.call(this, input) || this;
        _this._errorConfig = errorConfig;
        return _this;
    }
    CheckboxInput.prototype._validateImpl = function () {
        console.log('CheckboxInput#validate');
        if (this._input.checked === false) {
            _super.prototype._setLastError.call(this, this._errorConfig.required);
            return false;
        }
        else {
            return true;
        }
    };
    return CheckboxInput;
}(Input_1.default));
exports.default = CheckboxInput;


/***/ }),

/***/ 243:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/**
 * @author Michael Breitung
 * @copyright Michael Breitung Photography (www.mibreit-photo.com)
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var Input_1 = __webpack_require__(84);
var validationRegex_1 = __webpack_require__(853);
var EmailInput = /** @class */ (function (_super) {
    __extends(EmailInput, _super);
    function EmailInput(input, errorConfig) {
        var _this = _super.call(this, input) || this;
        _this._errorConfig = errorConfig;
        return _this;
    }
    EmailInput.prototype._validateImpl = function () {
        console.log('EmailInput#validate');
        if (this._input.value.length === 0) {
            _super.prototype._setLastError.call(this, this._errorConfig.required);
            return false;
        }
        else if (!validationRegex_1.default.email.test(this._input.value)) {
            _super.prototype._setLastError.call(this, this._errorConfig.invalid);
            return false;
        }
        else {
            return true;
        }
    };
    return EmailInput;
}(Input_1.default));
exports.default = EmailInput;


/***/ }),

/***/ 237:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/**
 * @author Michael Breitung
 * @copyright Michael Breitung Photography (www.mibreit-photo.com)
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
var mibreit_dom_tools_1 = __webpack_require__(942);
var Error = /** @class */ (function () {
    function Error(input) {
        this._errorElement = null;
        this._lastError = null;
        this._element = input;
    }
    Error.prototype.showError = function () {
        if (this._errorElement === null) {
            this._errorElement = mibreit_dom_tools_1.createElement('span');
            mibreit_dom_tools_1.addCssClass(this._errorElement, 'error');
        }
        this._errorElement.innerText = this._lastError;
        mibreit_dom_tools_1.appendChildElement(this._errorElement, this._element.parentElement);
    };
    Error.prototype.hideError = function () {
        if (this._errorElement) {
            mibreit_dom_tools_1.removeElement(this._errorElement);
        }
    };
    Error.prototype.setLastError = function (error) {
        this._lastError = error;
    };
    Error.prototype.clearLastError = function () {
        this._lastError = null;
    };
    return Error;
}());
exports.default = Error;


/***/ }),

/***/ 988:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/**
 * @author Michael Breitung
 * @copyright Michael Breitung Photography (www.mibreit-photo.com)
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EInputType = void 0;
var EmailInput_1 = __webpack_require__(243);
var TextInput_1 = __webpack_require__(296);
var CheckboxInput_1 = __webpack_require__(61);
var TextArea_1 = __webpack_require__(577);
var EInputType;
(function (EInputType) {
    EInputType[EInputType["EMAIL"] = 0] = "EMAIL";
    EInputType[EInputType["TEXT"] = 1] = "TEXT";
    EInputType[EInputType["CHECKBOX"] = 2] = "CHECKBOX";
})(EInputType = exports.EInputType || (exports.EInputType = {}));
var FormValidator = /** @class */ (function () {
    function FormValidator() {
        this._validators = [];
    }
    FormValidator.prototype.addValidator = function (input, inputType, errorConfig) {
        if (input instanceof HTMLTextAreaElement) {
            if (inputType === EInputType.TEXT) {
                this._validators.push(new TextArea_1.default(input, errorConfig));
            }
            else {
                throw new Error('FormValidator#addValidator - Invalid TextArea configuration');
            }
        }
        else {
            if (inputType === EInputType.EMAIL && 'invalid' in errorConfig) {
                this._validators.push(new EmailInput_1.default(input, errorConfig));
            }
            else if (inputType === EInputType.TEXT) {
                this._validators.push(new TextInput_1.default(input, errorConfig));
            }
            else if (inputType === EInputType.CHECKBOX) {
                this._validators.push(new CheckboxInput_1.default(input, errorConfig));
            }
            else {
                throw new Error('FormValidator#addValidator - Invalid input configuration');
            }
        }
    };
    FormValidator.prototype.validate = function () {
        var valid = true;
        this._validators.forEach(function (validator) {
            if (!validator.validate()) {
                valid = false;
            }
        });
        return valid;
    };
    return FormValidator;
}());
exports.default = FormValidator;


/***/ }),

/***/ 84:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/**
 * @author Michael Breitung
 * @copyright Michael Breitung Photography (www.mibreit-photo.com)
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
var Error_1 = __webpack_require__(237);
var Input = /** @class */ (function () {
    function Input(input) {
        this._error = null;
        this._input = input;
    }
    Input.prototype.validate = function () {
        var valid = this._validateImpl();
        if (valid) {
            this._hideLastError();
        }
        else {
            this._showLastError();
        }
        return valid;
    };
    Input.prototype._showLastError = function () {
        if (this._error != null) {
            this._error.showError();
        }
    };
    Input.prototype._hideLastError = function () {
        if (this._error != null) {
            this._error.hideError();
        }
    };
    Input.prototype._setLastError = function (error) {
        if (this._error == null) {
            this._error = new Error_1.default(this._input);
        }
        this._error.setLastError(error);
    };
    return Input;
}());
exports.default = Input;


/***/ }),

/***/ 577:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/**
 * @author Michael Breitung
 * @copyright Michael Breitung Photography (www.mibreit-photo.com)
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
var Error_1 = __webpack_require__(237);
var TextArea = /** @class */ (function () {
    function TextArea(input, errorConfig) {
        this._input = input;
        this._errorConfig = errorConfig;
    }
    TextArea.prototype.validate = function () {
        if (this._input.value.length === 0) {
            this._showError();
            return false;
        }
        else {
            this._hideError();
            return true;
        }
    };
    TextArea.prototype._showError = function () {
        if (this._error == null) {
            this._error = new Error_1.default(this._input);
        }
        this._error.setLastError(this._errorConfig.required);
        this._error.showError();
    };
    TextArea.prototype._hideError = function () {
        if (this._error != null) {
            this._error.hideError();
        }
    };
    return TextArea;
}());
exports.default = TextArea;


/***/ }),

/***/ 296:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/**
 * @author Michael Breitung
 * @copyright Michael Breitung Photography (www.mibreit-photo.com)
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var Input_1 = __webpack_require__(84);
var TextInput = /** @class */ (function (_super) {
    __extends(TextInput, _super);
    function TextInput(input, errorConfig) {
        var _this = _super.call(this, input) || this;
        _this._errorConfig = errorConfig;
        return _this;
    }
    TextInput.prototype._validateImpl = function () {
        if (this._input.value.length > 0) {
            return true;
        }
        else {
            _super.prototype._setLastError.call(this, this._errorConfig.required);
            return false;
        }
    };
    return TextInput;
}(Input_1.default));
exports.default = TextInput;


/***/ }),

/***/ 853:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/**
 * @author Michael Breitung
 * @copyright Michael Breitung Photography (www.mibreit-photo.com)
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
var email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
exports.default = {
    email: email
};


/***/ }),

/***/ 33:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/**
 * @author Michael Breitung
 * @copyright Michael Breitung Photography (www.mibreit-photo.com)
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
var FromValidator_1 = __webpack_require__(988);
function default_1() {
    return new FromValidator_1.default();
}
exports.default = default_1;


/***/ }),

/***/ 607:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/**
 * @author Michael Breitung
 * @copyright Michael Breitung Photography (www.mibreit-photo.com)
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.addClickEventListener = exports.documentReady = exports.getElement = exports.EInputType = exports.createFormValidator = exports.ValidatoinRegex = void 0;
var validationRegex_1 = __webpack_require__(853);
Object.defineProperty(exports, "ValidatoinRegex", ({ enumerable: true, get: function () { return validationRegex_1.default; } }));
var createFormValidator_1 = __webpack_require__(33);
Object.defineProperty(exports, "createFormValidator", ({ enumerable: true, get: function () { return createFormValidator_1.default; } }));
var FromValidator_1 = __webpack_require__(988);
Object.defineProperty(exports, "EInputType", ({ enumerable: true, get: function () { return FromValidator_1.EInputType; } }));
var mibreit_dom_tools_1 = __webpack_require__(942);
Object.defineProperty(exports, "getElement", ({ enumerable: true, get: function () { return mibreit_dom_tools_1.getElement; } }));
Object.defineProperty(exports, "documentReady", ({ enumerable: true, get: function () { return mibreit_dom_tools_1.documentReady; } }));
Object.defineProperty(exports, "addClickEventListener", ({ enumerable: true, get: function () { return mibreit_dom_tools_1.addClickEventListener; } }));


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(607);
/******/ })()

));