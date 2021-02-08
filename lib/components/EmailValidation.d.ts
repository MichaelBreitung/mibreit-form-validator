/**
 * @author Michael Breitung
 * @copyright Michael Breitung Photography (www.mibreit-photo.com)
 */
import InputValidation from './InputValidation';
import { TEmailErrorConfig } from '../types/TErrorConfig';
export default abstract class EmailValidation extends InputValidation {
    private _errorConfig;
    constructor(input: HTMLInputElement, errorConfig: TEmailErrorConfig);
    validate(): boolean;
}
