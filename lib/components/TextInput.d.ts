/**
 * @author Michael Breitung
 * @copyright Michael Breitung Photography (www.mibreit-photo.com)
 */
import Input from './Input';
import { TTextErrorConfig } from '../types/TErrorConfig';
export default class TextInput extends Input {
    private _errorConfig;
    constructor(input: HTMLInputElement, errorConfig: TTextErrorConfig);
    validate(): boolean;
}
