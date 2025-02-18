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
 * @since         4.7.0
 */

export const passphraseIsInDictionnary = (data = {}) => ({
  inDictionary: true,
  isPwnedServiceAvailable: true,
  ...data,
});

export const passphraseIsNotInDictionnary = (data = {}) => ({
  inDictionary: false,
  isPwnedServiceAvailable: true,
  ...data,
});

export const pownedServiceUnavailable = (data = {}) => ({
  inDictionary: false,
  isPwnedServiceAvailable: false,
  ...data,
});
