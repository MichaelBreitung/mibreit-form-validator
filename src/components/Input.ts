/**
 * @author Michael Breitung
 * @copyright Michael Breitung Photography (www.mibreit-photo.com)
 */

import IInputValidator from '../interfaces/IInputValidator';
import Error from './Error';

export default abstract class Input implements IInputValidator {
  protected _input: HTMLInputElement;
  private _error: Error | null = null;

  constructor(input: HTMLInputElement) {
    this._input = input;
  }

  validate(): boolean {
    const valid = this._validateImpl();
    if (valid) {
      this._hideLastError();
    } else {
      this._showLastError();
    }
    return valid;
  }

  protected abstract _validateImpl(): boolean;

  protected _showLastError() {
    if (this._error != null) {
      this._error.showError();
    }
  }

  protected _hideLastError() {
    if (this._error != null) {
      this._error.hideError();
    }
  }

  protected _setLastError(error: string) {
    if (this._error == null) {
      this._error = new Error(this._input);
    }
    this._error.setLastError(error);
  }
}
