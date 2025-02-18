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
import EntityV2Collection from "./entityV2Collection";
import {TestEntity} from "./entity.test.data";

export class TestEntityV2Collection extends EntityV2Collection {
  get entityClass() {
    return TestEntity;
  }

  /**
   * Get the collection schema
   * @returns {object}
   */
  static getSchema() {
    return {
      "type": "array",
      "items": TestEntity.getSchema(),
    };
  }

  /**
   * Validate the collection build rules.
   * @param {Entity} item The entity to validate the build rules for.
   * @throws {EntityValidationError} If an item already exists with the same id.
   */
  validateBuildRules(item) {
    this.assertNotExist("id", item._props.id);
  }
}
