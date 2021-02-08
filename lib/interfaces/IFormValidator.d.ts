/**
 * @author Michael Breitung
 * @copyright Michael Breitung Photography (www.mibreit-photo.com)
 */
import { EInputType } from '../components/FromValidator';
import { TTextErrorConfig, TEmailErrorConfig } from '../types/TErrorConfig';
export default interface IFormValidator {
    addValidator(input: HTMLInputElement, inputType: EInputType, errorConfig: TTextErrorConfig | TEmailErrorConfig): void;
    validate(): boolean;
}
