/**
 * @author Michael Breitung
 * @copyright Michael Breitung Photography (www.mibreit-photo.com)
 */

import FormValidator from '../components/FromValidator';
import IFormValidator from '../interfaces/IFormValidator';

export default function (): IFormValidator {
  return new FormValidator();
}
