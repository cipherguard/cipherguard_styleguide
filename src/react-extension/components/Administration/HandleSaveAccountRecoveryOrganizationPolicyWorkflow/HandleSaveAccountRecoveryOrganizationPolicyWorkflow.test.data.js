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
 * @since         3.6.0
 */

import {defaultAdminAccountRecoveryContext} from "../../../contexts/AdminAccountRecoveryContext.test.data";
import {defaultDialogContext} from "../../../contexts/DialogContext.test.data";

/**
 * Default props
 * @param {Object} props The override
 * @returns {object}
 */
export function defaultProps(props = {}) {
  const _props = {
    adminAccountRecoveryContext: defaultAdminAccountRecoveryContext(props?.adminAccountRecoveryContext),
    dialogContext: defaultDialogContext(props?.dialogContext),
  };
  delete props?.adminAccountRecoveryContext; // Treated in the default
  delete props?.dialogContext; // Treated in the default
  return Object.assign(_props, props);
}

/**
 * Has policy changes props
 * @param {Object} props The override
 * @returns {object}
 */
export function hasPolicyChangesProps(props = {}) {
  const _props = {
    adminAccountRecoveryContext: {
      policyChanges: {
        policy: "opt-in"
      }
    }
  };
  return defaultProps(Object.assign(_props, props));
}
