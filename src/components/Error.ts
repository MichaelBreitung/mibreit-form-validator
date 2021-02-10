/**
 * @author Michael Breitung
 * @copyright Michael Breitung Photography (www.mibreit-photo.com)
 */

import { createElement, addCssClass, removeCssClass, appendChildElement, removeElement } from 'mibreit-dom-tools';

const ERROR_CLASS = 'error';

export default class Error {
  protected _element: HTMLElement;
  private _errorElement: HTMLElement | null = null;
  private _lastError: string | null = null;

  constructor(input: HTMLElement) {
    this._element = input;
  }

  showError() {
    if (this._errorElement === null) {
      this._errorElement = createElement('span');
      addCssClass(this._errorElement, ERROR_CLASS);
    }
    addCssClass(this._element, ERROR_CLASS);
    this._errorElement.innerText = this._lastError;
    appendChildElement(this._errorElement, this._element.parentElement);
  }

  hideError() {
    if (this._errorElement) {
      removeElement(this._errorElement);
    }
    removeCssClass(this._element, ERROR_CLASS);
  }

  setLastError(error: string) {
    this._lastError = error;
  }

  clearLastError() {
    this._lastError = null;
  }
}
