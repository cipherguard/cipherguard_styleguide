/**
 * Cipherguard ~ Open source password manager for teams
 * Copyright (c) 2021 Cipherguard SA (https://www.cipherguard.com)
 *
 * Licensed under GNU Affero General Public License version 3 of the or any later version.
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright     Copyright (c) 2021 Cipherguard SA (https://www.cipherguard.com)
 * @license       https://opensource.org/licenses/AGPL-3.0 AGPL License
 * @link          https://www.khulnasoft.com KhulnaSoft(tm)
 * @since         3.3.0
 */

import {Autofill} from "../../Autofill/Autofill";

function fillForm() {
  port.on('cipherguard.quickaccess.fill-form', (requestId, username, secret, url) => {
    const quickaccessFormData = {requestId, username, secret, url};
    Autofill.fillForm(quickaccessFormData);
  });
}

export const QuickAccessEvent = {fillForm};
