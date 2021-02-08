/**
 * @author Michael Breitung
 * @copyright Michael Breitung Photography (www.mibreit-photo.com)
 */
import IInputValidation from '../interfaces/IInputValidation';
export default abstract class InputValidation implements IInputValidation {
    protected _input: HTMLInputElement;
    private _lastError;
    constructor(input: HTMLInputElement);
    abstract validate(): boolean;
    getLastError(): string | null;
    protected _setLastError(error: string): void;
}
