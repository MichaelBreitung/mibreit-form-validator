/**
 * @author Michael Breitung
 * @copyright Michael Breitung Photography (www.mibreit-photo.com)
 */

import Input from './Input';
import { TTextErrorConfig } from '../types/TErrorConfig';

export default class CheckboxInput extends Input {
  private _errorConfig: TTextErrorConfig;

  constructor(input: HTMLInputElement, errorConfig: TTextErrorConfig) {
    super(input);
    this._errorConfig = errorConfig;
  }

  protected _validateImpl(): boolean {
    console.log('CheckboxInput#validate');
    if (this._input.checked === false) {
      super._setLastError(this._errorConfig.required);
      return false;
    } else {
      return true;
    }
  }
}
