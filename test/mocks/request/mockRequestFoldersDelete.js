/**
 * Cipherguard ~ Open source password manager for teams
 * Copyright (c) 2020 Cipherguard SA (https://www.cipherguard.com)
 *
 * Licensed under GNU Affero General Public License version 3 of the or any later version.
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright     Copyright (c) 2020 Cipherguard SA (https://www.cipherguard.com)
 * @license       https://opensource.org/licenses/AGPL-3.0 AGPL License
 * @link          https://www.khulnasoft.com KhulnaSoft(tm)
 * @since         3.0.0
 */

export default (folderId, cascade, storage) => {
  return new Promise(async (resolve) => {
    const {folders} = await storage.local.get(["folders"]);
    const folderIndex = folders.findIndex(item => item.id === folderId);
    delete folders[folderIndex];
    await storage.local.set({folders});
    resolve();
  });
};
