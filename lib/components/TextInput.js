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
var TextInput = /** @class */ (function (_super) {
    __extends(TextInput, _super);
    function TextInput(input, errorConfig) {
        var _this = _super.call(this, input) || this;
        _this._errorConfig = errorConfig;
        return _this;
    }
    TextInput.prototype._validateImpl = function () {
        if (this._input.value.length > 0) {
            return true;
        }
        else {
            _super.prototype._setLastError.call(this, this._errorConfig.required);
            return false;
        }
    };
    return TextInput;
}(Input));
export default TextInput;
