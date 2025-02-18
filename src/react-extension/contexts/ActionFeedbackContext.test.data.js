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
 * Returns the default action feedback context context for the unit test
 * @param {object} [data] An override action feedback context context properties
 * @returns {object}
 */

export function defaultActionFeedbackContext(data = {}) {
  const defaultContext = {
    displaySuccess: jest.fn(),
    displayError: jest.fn(),
    remove: jest.fn(),
  };
  return Object.assign(defaultContext, data);
}
