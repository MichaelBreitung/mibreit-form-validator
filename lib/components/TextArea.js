/**
 * @author Michael Breitung
 * @copyright Michael Breitung Photography (www.mibreit-photo.com)
 */
import Error from './Error';
var TextArea = /** @class */ (function () {
    function TextArea(input, errorConfig) {
        this._input = input;
        this._errorConfig = errorConfig;
    }
    TextArea.prototype.validate = function () {
        if (this._input.value.length === 0) {
            this._showError();
            return false;
        }
        else {
            this._hideError();
            return true;
        }
    };
    TextArea.prototype._showError = function () {
        if (this._error == null) {
            this._error = new Error(this._input);
        }
        this._error.setLastError(this._errorConfig.required);
        this._error.showError();
    };
    TextArea.prototype._hideError = function () {
        if (this._error != null) {
            this._error.hideError();
        }
    };
    return TextArea;
}());
export default TextArea;
