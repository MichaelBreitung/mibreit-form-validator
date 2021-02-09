/**
 * @author Michael Breitung
 * @copyright Michael Breitung Photography (www.mibreit-photo.com)
 */
import IFormValidator from '../interfaces/IFormValidator';
import { TErrorConfig } from '../types/TErrorConfig';
export declare enum EInputType {
    EMAIL = 0,
    TEXT = 1,
    CHECKBOX = 2
}
export default class FormValidator implements IFormValidator {
    private _validators;
    addValidator(input: HTMLInputElement | HTMLTextAreaElement, inputType: EInputType, errorConfig: TErrorConfig): void;
    validate(): boolean;
}
