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
 * @since         3.10.0
 */

import {MfaPolicyEnumerationTypes} from "./MfaPolicyEnumeration";

/**
 * Model related to the mfa policy dto for API during the transfert
 */
class MfaPolicyDto {
  /**
   * Constructor
   * @param {MfaPolicyViewModel} settings
   */
  constructor(settings = {rememberMeForAMonth: false}) {
    this.policy = settings.policy || MfaPolicyEnumerationTypes.OPTIN;
    this.remember_me_for_a_month = settings.rememberMeForAMonth;
  }
}

export default MfaPolicyDto;

