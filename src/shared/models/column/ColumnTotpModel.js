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
 * @since         4.2.0
 */

import ColumnModel, {ColumnFields, ColumnModelTypes} from "./ColumnModel";

/**
 * Model related to the column totp use only with the UI
 */
class ColumnTotpModel extends ColumnModel {
  /**
   * Constructor
   * @param {Object} columnDto
   */
  constructor(columnDto = {}) {
    columnDto.id = ColumnModelTypes.TOTP;
    columnDto.field = ColumnFields.TOTP;
    columnDto.width = columnDto.width || 145;
    columnDto.defaultWidth = 145;
    columnDto.resizable = true;
    columnDto.draggable = true;
    columnDto.sortable = false;
    columnDto.getValue = value => value;
    super(columnDto);
  }
}

export default ColumnTotpModel;

