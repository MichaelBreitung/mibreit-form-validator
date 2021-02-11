/**
 * @author Michael Breitung
 * @copyright Michael Breitung Photography (www.mibreit-photo.com)
 */
import Error from './Error';
var Input = /** @class */ (function () {
    function Input(input) {
        this._error = null;
        this._input = input;
    }
    Input.prototype.validate = function () {
        var valid = this._validateImpl();
        if (valid) {
            this._hideLastError();
        }
        else {
            this._showLastError();
        }
        return valid;
    };
    Input.prototype._showLastError = function () {
        if (this._error != null) {
            this._error.showError();
        }
    };
    Input.prototype._hideLastError = function () {
        if (this._error != null) {
            this._error.hideError();
        }
    };
    Input.prototype._setLastError = function (error) {
        if (this._error == null) {
            this._error = new Error(this._input);
        }
        this._error.setLastError(error);
    };
    return Input;
}());
export default Input;
