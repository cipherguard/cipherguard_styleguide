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
 * @since         4.4.0
 */

/**
 * Default props
 * @returns {{resource: {id: string, name: string}}}
 */
export function defaultProps(data = {}) {
  const defaultData = {
    totp: {
      secret_key: "2F2SA73OFJERVNBL",
      period: 60,
      digits: 7,
      algorithm: "SHA256"
    },
    onClose: jest.fn(),
    onSubmit: jest.fn(),
    onCancel: jest.fn(),
    onOpenUploadQrCode: jest.fn()
  };

  return Object.assign(defaultData, data);
}
