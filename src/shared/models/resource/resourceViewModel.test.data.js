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
 * @since         4.9.4
 */

import {defaultTotpViewModelDto} from "../totp/TotpDto.test.data";
import {v4 as uuid} from "uuid";

export const minimalResourceViewModelDto = (data = {}) => ({
  name: "Resource view model name",
  password: "Here a password",
  resource_type_id: uuid(),
  ...data
});

export const defaultResourceViewModelDto = (data = {}) => minimalResourceViewModelDto({
  uri: "https://www.cipherguard.com",
  username: "ada@cipherguard.com",
  description: "This is a description",
  ...data,
});

export const defaultResourcePasswordDescriptionTotpViewModelDto = (data = {}) => defaultResourceViewModelDto({
  totp: defaultTotpViewModelDto(),
  ...data
});
