/**
 * @author Michael Breitung
 * @copyright Michael Breitung Photography (www.mibreit-photo.com)
 */
import Input from './Input';
import { TTextErrorConfig } from '../types/TErrorConfig';
export default class CheckboxInput extends Input {
    private _errorConfig;
    constructor(input: HTMLInputElement, errorConfig: TTextErrorConfig);
    protected _validateImpl(): boolean;
}
