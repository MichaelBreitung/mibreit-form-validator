/**
 * @author Michael Breitung
 * @copyright Michael Breitung Photography (www.mibreit-photo.com)
 */
import Input from './Input';
import { TEmailErrorConfig } from '../types/TErrorConfig';
export default class EmailInput extends Input {
    private _errorConfig;
    constructor(input: HTMLInputElement, errorConfig: TEmailErrorConfig);
    protected _validateImpl(): boolean;
}
