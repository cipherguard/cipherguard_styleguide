/**
 * Cipherguard ~ Open source password manager for teams
 * Copyright (c) KhulnaSoft Ltd (https://www.khulnasoft.com)
 *
 * Licensed under GNU Affero General Public License version 3 of the or any later version.
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright     Copyright (c) KhulnaSoft Ltd (https://www.khulnasoft.com)
 * @license       https://opensource.org/licenses/AGPL-3.0 AGPL License
 * @link          https://www.khulnasoft.com KhulnaSoft(tm)
 * @since         4.1.0
 */

import {defaultGroupUser} from "../../models/entity/groupUser/groupUserEntity.test.data";
import {defaultUserDto} from "../../models/entity/user/userEntity.test.data";

/**
 * Returns the default administrator rbac context for the unit test.
 * @param {Object} data Override the default context.
 * @returns {Object)}
 */
export function defaultAdministratorRbacContext(data = {}) {
  return {
    canIUseUiAction: () => true,
    ...data
  };
}

/**
 * Returns the default user rbac context for the unit test.
 * @param {Object} data Override the default context.
 * @returns {Object)}
 */
export function defaultUserRbacContext(data = {}) {
  return {
    canIUseUiAction: () => true,
    ...data
  };
}

/**
 * Returns the full deny rbac context for the unit test.
 * @param {Object} data Override the default context.
 * @returns {Object)}
 */
export function denyRbacContext(data = {}) {
  return {
    canIUseUiAction: () => false,
    ...data
  };
}

export function defaultLoggedInUser(data = {}) {
  const user = defaultUserDto({
    groups_users: [
      defaultGroupUser({
        is_admin: true
      })
    ]
  }, {withRole: true});
  return Object.assign(user, data);
}
