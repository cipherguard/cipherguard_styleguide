/**
 * Cipherguard ~ Open source password manager for teams
 * Copyright (c) 2023 Cipherguard SA (https://www.cipherguard.com)
 *
 * Licensed under GNU Affero General Public License version 3 of the or any later version.
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright     Copyright (c) 2023 Cipherguard SA (https://www.cipherguard.com)
 * @license       https://opensource.org/licenses/AGPL-3.0 AGPL License
 * @link          https://www.khulnasoft.com KhulnaSoft(tm)
 * @since         4.1.0
 */
import Entity from "../abstract/entity";
import EntitySchema from "../abstract/entitySchema";

const ENTITY_NAME = 'Action';
const ACTION_NAME_LENGTH = 255;

class ActionEntity extends Entity {
  /**
   * @inheritDoc
   */
  constructor(dto, options = {}) {
    super(EntitySchema.validate(
      ActionEntity.ENTITY_NAME,
      dto,
      ActionEntity.getSchema()
    ), options);
  }

  /**
   * Get resource entity schema
   * @returns {Object} schema
   */
  static getSchema() {
    return {
      "type": "object",
      "required": [
        "id",
        "name"
      ],
      "properties": {
        "id": {
          "type": "string",
          "format": "uuid"
        },
        "name": {
          "type": "string",
          "maxLength": ACTION_NAME_LENGTH
        },
      }
    };
  }

  /*
   * ==================================================
   * Dynamic properties getters
   * ==================================================
   */

  /**
   * Get id
   * @returns {string} uuid
   */
  get id() {
    return this._props.id;
  }

  /**
   * Get name
   * @returns {string}
   */
  get name() {
    return this._props.name;
  }

  /*
   * ==================================================
   * Static properties getters
   * ==================================================
   */

  /**
   * ActionEntity.ENTITY_NAME
   * @returns {string}
   */
  static get ENTITY_NAME() {
    return ENTITY_NAME;
  }
}

export default ActionEntity;
