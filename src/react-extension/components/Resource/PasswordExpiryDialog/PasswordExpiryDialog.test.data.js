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
 * @since         4.5.0
 */

import {defaultResourceDto} from "../../../../shared/models/entity/resource/resourceEntity.test.data";
import {defaultAppContext} from "../../../contexts/ExtAppContext.test.data";
import {defaultPasswordExpirySettingsContext} from "../../../contexts/PasswordExpirySettingsContext.test.data";

export const defaultProps = (data = {}) => ({
  context: defaultAppContext(),
  onClose: jest.fn(),
  passwordExpiryContext: defaultPasswordExpirySettingsContext(),
  actionFeedbackContext: {
    displaySuccess: jest.fn(),
  },
  resources: [
    defaultResourceDto(),
    defaultResourceDto(),
  ],
  ...data,
});
