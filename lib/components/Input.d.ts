/**
 * @author Michael Breitung
 * @copyright Michael Breitung Photography (www.mibreit-photo.com)
 */
import IInputValidator from '../interfaces/IInputValidator';
export default abstract class Input implements IInputValidator {
    protected _input: HTMLInputElement;
    private _error;
    constructor(input: HTMLInputElement);
    validate(): boolean;
    protected abstract _validateImpl(): boolean;
    protected _showLastError(): void;
    protected _hideLastError(): void;
    protected _setLastError(error: string): void;
}
