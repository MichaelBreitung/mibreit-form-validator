/**
 * @author Michael Breitung
 * @copyright Michael Breitung Photography (www.mibreit-photo.com)
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import Input from './Input';
import ValidationRegex from './validationRegex';
var EmailInput = /** @class */ (function (_super) {
    __extends(EmailInput, _super);
    function EmailInput(input, errorConfig) {
        var _this = _super.call(this, input) || this;
        _this._errorConfig = errorConfig;
        return _this;
    }
    EmailInput.prototype._validateImpl = function () {
        console.log('EmailInput#validate');
        if (this._input.value.length === 0) {
            _super.prototype._setLastError.call(this, this._errorConfig.required);
            return false;
        }
        else if (!ValidationRegex.email.test(this._input.value)) {
            _super.prototype._setLastError.call(this, this._errorConfig.invalid);
            return false;
        }
        else {
            return true;
        }
    };
    return EmailInput;
}(Input));
export default EmailInput;
