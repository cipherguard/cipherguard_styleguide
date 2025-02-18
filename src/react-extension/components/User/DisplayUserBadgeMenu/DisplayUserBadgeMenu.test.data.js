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

import {defaultUserRbacContext} from "../../../../shared/context/Rbac/RbacContext.test.data";

/**
 * Default props
 * @returns {any}
 */
export function defaultProps(props) {
  const defaultProps = {
    baseUrl: (new URL(window.location.href)).origin,
    user: {
      "username": "carol@cipherguard.com",
      "profile": {
        "first_name": "Carol",
        "last_name": "Shaw"
      }
    },
    mfaContext: {
      checkMfaChoiceRequired: jest.fn(),
      isMfaChoiceRequired: jest.fn()
    },
    accountRecoveryContext: {
      isAccountRecoveryChoiceRequired: jest.fn()
    },
    context: {
      onLogoutRequested: () => {
      },
      siteSettings: {
        canIUse: () => true
      }
    },
    rbacContext: defaultUserRbacContext()
  };
  return Object.assign(defaultProps, props || {});
}
