/**
 * @author Michael Breitung
 * @copyright Michael Breitung Photography (www.mibreit-photo.com)
 */

import Input from './Input';
import { TTextErrorConfig } from '../types/TErrorConfig';

export default class TextInput extends Input {
  private _errorConfig: TTextErrorConfig;

  constructor(input: HTMLInputElement, errorConfig: TTextErrorConfig) {
    super(input);
    this._errorConfig = errorConfig;
  }

  protected _validateImpl(): boolean {
    if (this._input.value.length > 0) {
      return true;
    } else {
      super._setLastError(this._errorConfig.required);
      return false;
    }
  }
}
