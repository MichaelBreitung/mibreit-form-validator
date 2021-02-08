/**
 * @author Michael Breitung
 * @copyright Michael Breitung Photography (www.mibreit-photo.com)
 */
export default interface IInputValidation {
    validate(): boolean;
    getLastError(): string | null;
}
