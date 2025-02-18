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

import {v4 as uuidv4} from 'uuid';
import {defaultAvatarDto} from "../avatar/avatarEntity.test.data";

/**
 * Minimal profile dto.
 * @param {object} data The data to override
 * @returns {object}
 */
export const minimalProfileDto = (data = {}) => ({
  "first_name": "Ada",
  "last_name": "Lovelace",
  ...data
});

/**
 * Default profile dto.
 * @param {object} data The data to override
 * @returns {object}
 */
export const defaultProfileDto = (data = {}) => ({
  "id": uuidv4(),
  "user_id": uuidv4(),
  "first_name": "Ada",
  "last_name": "Lovelace",
  "created": "2020-04-20T11:32:17+00:00",
  "modified": "2020-04-20T11:32:17+00:00",
  "avatar": defaultAvatarDto(),
  ...data
});
