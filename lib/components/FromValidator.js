/**
 * @author Michael Breitung
 * @copyright Michael Breitung Photography (www.mibreit-photo.com)
 */
import EmailInput from './EmailInput';
import TextInput from './TextInput';
import CheckboxInput from './CheckboxInput';
import TextArea from './TextArea';
export var EInputType;
(function (EInputType) {
    EInputType[EInputType["EMAIL"] = 0] = "EMAIL";
    EInputType[EInputType["TEXT"] = 1] = "TEXT";
    EInputType[EInputType["CHECKBOX"] = 2] = "CHECKBOX";
})(EInputType || (EInputType = {}));
var FormValidator = /** @class */ (function () {
    function FormValidator() {
        this._validators = [];
    }
    FormValidator.prototype.addValidator = function (input, inputType, errorConfig) {
        if (input instanceof HTMLTextAreaElement) {
            if (inputType === EInputType.TEXT) {
                this._validators.push(new TextArea(input, errorConfig));
            }
            else {
                throw new Error('FormValidator#addValidator - Invalid TextArea configuration');
            }
        }
        else {
            if (inputType === EInputType.EMAIL && 'invalid' in errorConfig) {
                this._validators.push(new EmailInput(input, errorConfig));
            }
            else if (inputType === EInputType.TEXT) {
                this._validators.push(new TextInput(input, errorConfig));
            }
            else if (inputType === EInputType.CHECKBOX) {
                this._validators.push(new CheckboxInput(input, errorConfig));
            }
            else {
                throw new Error('FormValidator#addValidator - Invalid input configuration');
            }
        }
    };
    FormValidator.prototype.validate = function () {
        var valid = true;
        this._validators.forEach(function (validator) {
            if (!validator.validate()) {
                valid = false;
            }
        });
        return valid;
    };
    return FormValidator;
}());
export default FormValidator;
