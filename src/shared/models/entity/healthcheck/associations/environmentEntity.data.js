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
 * @since         4.3.0
 */

export const defaultEnvironmentData = (data = {}) => {
  const defaultData = {
    phpVersion: true,
    nextMinPhpVersion: true,
    info: {
      phpVersion: "8.1.7",
      ...data.info,
    },
    pcre: true,
    mbstring: true,
    gnupg: true,
    intl: true,
    image: true,
    tmpWritable: true,
    logWritable: true,
    ...data,
  };
  return Object.assign(defaultData, data);
};
