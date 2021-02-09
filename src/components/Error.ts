/**
 * @author Michael Breitung
 * @copyright Michael Breitung Photography (www.mibreit-photo.com)
 */

import { createElement, addCssClass, appendChildElement, removeElement } from 'mibreit-dom-tools';

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
      addCssClass(this._errorElement, 'error');
    }
    this._errorElement.innerText = this._lastError;
    appendChildElement(this._errorElement, this._element.parentElement);
  }

  hideError() {
    if (this._errorElement) {
      removeElement(this._errorElement);
    }
  }

  setLastError(error: string) {
    this._lastError = error;
  }

  clearLastError() {
    this._lastError = null;
  }
}
