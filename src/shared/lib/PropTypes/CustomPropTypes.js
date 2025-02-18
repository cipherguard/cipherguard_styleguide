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
 * Custom Proptypes
 */
class CustomPropTypes {
  /**
   * Validate all prop type
   * @param types
   * @returns {function(...[*]): Error}
   */
  allPropTypes = (...types) => (...args) => {
    const errors = types.map(type => type(...args)).filter(Boolean);

    // No errors
    if (errors.length === 0) {
      return;
    }

    // Collect the messages and join them together
    const message = errors.map(e => e.message).join('\n');
    return new Error(message);
  };
}

export default new CustomPropTypes();
