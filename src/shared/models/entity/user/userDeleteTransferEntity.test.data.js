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
 * @since         4.9.3
 */

import {defaultPermissionTransferDto} from "../permission/permissionTransferEntity.test.data";
import {defaultUserTransferDto} from "../group/groupTransfer.test.data";

/**
 * Build default user delete transfer dto.
 * @param {object} data The data to override the default dto.
 * @returns {object}
 */
export const defaultUserDeleteTransferDto = (data = {}) => ({
  owners: [
    defaultPermissionTransferDto(data)
  ],
  managers: [
    defaultUserTransferDto(data)
  ]
});
