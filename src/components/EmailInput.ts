/**
 * @author Michael Breitung
 * @copyright Michael Breitung Photography (www.mibreit-photo.com)
 */

import Input from './Input';
import { TEmailErrorConfig } from '../types/TErrorConfig';
import ValidationRegex from './validationRegex';

export default class EmailInput extends Input {
  private _errorConfig: TEmailErrorConfig;

  constructor(input: HTMLInputElement, errorConfig: TEmailErrorConfig) {
    super(input);
    this._errorConfig = errorConfig;
  }

  validate(): boolean {
    console.log("EmailInput#validate");
    if (this._input.value.length === 0) {
      super._setLastError(this._errorConfig.required);
      super._showLastError();
      return false;
    } else if (!ValidationRegex.email.test(this._input.value)) {
      super._setLastError(this._errorConfig.invalid);
      super._showLastError();
      return false;
    } else {
      super._clearLastError();
      super._hideLastError();
      return true;
    }
  }
}
