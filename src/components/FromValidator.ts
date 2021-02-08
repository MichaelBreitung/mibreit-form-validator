/**
 * @author Michael Breitung
 * @copyright Michael Breitung Photography (www.mibreit-photo.com)
 */

import IInputValidator from '../interfaces/IInputValidator';
import IFormValidator from '../interfaces/IFormValidator';
import { TErrorConfig, TEmailErrorConfig, TTextErrorConfig } from '../types/TErrorConfig';
import EmailInput from './EmailInput';
import TextInput from './TextInput';
import CheckboxInput from './CheckboxInput';

export enum EInputType {
  EMAIL,
  TEXT,
  CHECKBOX,
}

export default class FormValidator implements IFormValidator {
  private _validators: Array<IInputValidator> = [];

  addValidator(input: HTMLInputElement, inputType: EInputType, errorConfig: TErrorConfig) {
    if (inputType === EInputType.EMAIL && 'invalid' in errorConfig) {
      this._validators.push(new EmailInput(input, errorConfig as TEmailErrorConfig));
    } else if (inputType === EInputType.TEXT) {
      this._validators.push(new TextInput(input, errorConfig as TTextErrorConfig));
    } else if (inputType === EInputType.CHECKBOX) {
      this._validators.push(new CheckboxInput(input, errorConfig as TTextErrorConfig));
    }
  }

  validate(): boolean {
    let valid = true;
    this._validators.forEach((validator) => {
      if (!validator.validate()) {
        valid = false;
      }
    });
    return valid;
  }
}
