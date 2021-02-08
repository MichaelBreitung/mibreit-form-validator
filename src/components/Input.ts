/**
 * @author Michael Breitung
 * @copyright Michael Breitung Photography (www.mibreit-photo.com)
 */

import { DomTools } from 'mibreit-dom-tools';
import IInputValidator from '../interfaces/IInputValidator';

export default abstract class Input implements IInputValidator {
  protected _input: HTMLInputElement;
  private _errorElement: HTMLElement | null = null;
  private _lastError: string | null = null;

  constructor(input: HTMLInputElement) {
    this._input = input;
  }

  validate(): boolean {
    const valid = this._validateImpl();
    if (valid) {
      this._clearLastError();
      this._hideLastError();      
    } else {
      this._showLastError();
    }
    return valid;
  }
  
  getLastError(): string | null {
    return this._lastError;
  }

  protected abstract _validateImpl(): boolean;

  protected _showLastError() {
    if (this._errorElement === null) {
      this._errorElement = DomTools.createElement('span');
      DomTools.addCssClass(this._errorElement, 'error');
    }
    this._errorElement.innerText = this._lastError;
    DomTools.appendChildElement(this._errorElement, this._input.parentElement);
  }

  protected _hideLastError() {
    if (this._errorElement) {
      DomTools.removeElement(this._errorElement);
    }
  }

  protected _setLastError(error: string) {
    this._lastError = error;
  }

  protected _clearLastError() {
    this._lastError = null;
  }
}
