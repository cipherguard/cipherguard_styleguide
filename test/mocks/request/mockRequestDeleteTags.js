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

import {DateTime} from "luxon";

export default (eventObject, storage) => {
  return new Promise(async (resolve) => {
    const {resources} = await storage.local.get(["resources"]);
    resources.forEach( (resource, resourceIndex) => {
      if(resource.tags) {
        const tagIndex = resource.tags.findIndex(tag => tag.id === eventObject);
        if (tagIndex !== -1) {
          resource.tags.splice(tagIndex,1);
          resource.modified = DateTime.now().toISO();
          resource.modified_by = "f848277c-5398-58f8-a82a-72397af2d450";
          resources[resourceIndex] = resource;
        }
      }
    });
    await storage.local.set({resources});
    resolve(true);
  });
};
