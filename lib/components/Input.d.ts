/**
 * @author Michael Breitung
 * @copyright Michael Breitung Photography (www.mibreit-photo.com)
 */
import IInputValidator from '../interfaces/IInputValidator';
export default abstract class Input implements IInputValidator {
    protected _input: HTMLInputElement;
    private _errorElement;
    private _lastError;
    constructor(input: HTMLInputElement);
    abstract validate(): boolean;
    getLastError(): string | null;
    protected _showLastError(): void;
    protected _hideLastError(): void;
    protected _setLastError(error: string): void;
    protected _clearLastError(): void;
}
