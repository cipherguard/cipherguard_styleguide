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

/**
 * Returns the default app context for the unit test
 */

import {defaultAppContext} from "../../../contexts/ExtAppContext.test.data";

/**
 * Props with user group details
 */
export function defaultProps() {
  return {
    context: defaultAppContext(),
    onSubmit: jest.fn(),
    onClose: jest.fn(),
  };
}

