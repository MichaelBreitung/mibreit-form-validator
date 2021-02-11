/**
 * @author Michael Breitung
 * @copyright Michael Breitung Photography (www.mibreit-photo.com)
 */
import { createElement, addCssClass, removeCssClass, appendChildElement, removeElement } from 'mibreit-dom-tools';
var ERROR_CLASS = 'error';
var Error = /** @class */ (function () {
    function Error(input) {
        this._errorElement = null;
        this._lastError = null;
        this._element = input;
    }
    Error.prototype.showError = function () {
        if (this._errorElement === null) {
            this._errorElement = createElement('span');
            addCssClass(this._errorElement, ERROR_CLASS);
        }
        addCssClass(this._element, ERROR_CLASS);
        this._errorElement.innerText = this._lastError;
        appendChildElement(this._errorElement, this._element.parentElement);
    };
    Error.prototype.hideError = function () {
        if (this._errorElement) {
            removeElement(this._errorElement);
        }
        removeCssClass(this._element, ERROR_CLASS);
    };
    Error.prototype.setLastError = function (error) {
        this._lastError = error;
    };
    Error.prototype.clearLastError = function () {
        this._lastError = null;
    };
    return Error;
}());
export default Error;
