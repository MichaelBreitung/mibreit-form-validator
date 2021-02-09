/**
 * @author Michael Breitung
 * @copyright Michael Breitung Photography (www.mibreit-photo.com)
 */

import { TTextErrorConfig } from '../types/TErrorConfig';
import ValidationRegex from './validationRegex';
import IInputValidator from '../interfaces/IInputValidator';
import Error from './Error';

export default class TextArea implements IInputValidator {
  private _errorConfig: TTextErrorConfig;
  private _input: HTMLTextAreaElement;
  private _error: Error | null;

  constructor(input: HTMLTextAreaElement, errorConfig: TTextErrorConfig) {
    this._input = input;
    this._errorConfig = errorConfig;
  }
  validate(): boolean {
    if (this._input.value.length === 0) {
      this._showError();
      return false;
    } else {
      this._hideError();
      return true;
    }
  }

  private _showError() {
    if (this._error == null) {
      this._error = new Error(this._input);
    }
    this._error.setLastError(this._errorConfig.required);
    this._error.showError();
  }

  private _hideError() {
    if (this._error != null) {
      this._error.hideError();
    }
  }
}
