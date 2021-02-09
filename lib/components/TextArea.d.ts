/**
 * @author Michael Breitung
 * @copyright Michael Breitung Photography (www.mibreit-photo.com)
 */
import { TTextErrorConfig } from '../types/TErrorConfig';
import IInputValidator from '../interfaces/IInputValidator';
export default class TextArea implements IInputValidator {
    private _errorConfig;
    private _input;
    private _error;
    constructor(input: HTMLTextAreaElement, errorConfig: TTextErrorConfig);
    validate(): boolean;
    private _showError;
    private _hideError;
}
