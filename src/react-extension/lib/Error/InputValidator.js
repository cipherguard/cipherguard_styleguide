/**
 * Cipherguard ~ Open source password manager for teams
 * Copyright (c) 2022 Cipherguard SA (https://www.cipherguard.com)
 *
 * Licensed under GNU Affero General Public License version 3 of the or any later version.
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright     Copyright (c) 2022 Cipherguard SA (https://www.cipherguard.com)
 * @license       https://opensource.org/licenses/AGPL-3.0 AGPL License
 * @link          https://www.khulnasoft.com KhulnaSoft(tm)
 * @since         3.9.0
 */

export function maxSizeValidation(value, maxLength, translate) {
  /*
   * The parser can't find the translation for warningMessage variable
   * To fix that we can use it in comment
   * this.translate("this is the maximum size for this field, make sure your data was not truncated")
   */
  const sizeExceeded = value.length >= maxLength;
  const warningMessage =  translate("this is the maximum size for this field, make sure your data was not truncated");
  return sizeExceeded ? warningMessage : "";
}
