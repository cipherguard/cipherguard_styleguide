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
 * @since         4.3.0
 */

import {v4 as uuid} from "uuid";

export const defaultUserPassphrasePoliciesDto = (data = {}) => {
  const defaultData = {
    entropy_minimum: 50,
    external_dictionary_check: true
  };
  return Object.assign(defaultData, data);
};

export const userPassphrasePoliciesDtoFromApi = (data = {}) => {
  const defaultData = defaultUserPassphrasePoliciesDto({
    id: uuid(),
    created: "2023-08-06T10:05:46+00:00",
    created_by: uuid(),
    modified: "2023-08-06T10:05:46+00:00",
    modified_by: uuid()
  });

  return Object.assign(defaultData, data);
};
