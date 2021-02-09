/**
 * @author Michael Breitung
 * @copyright Michael Breitung Photography (www.mibreit-photo.com)
 */
export default class Error {
    protected _element: HTMLElement;
    private _errorElement;
    private _lastError;
    constructor(input: HTMLElement);
    showError(): void;
    hideError(): void;
    setLastError(error: string): void;
    clearLastError(): void;
}
