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
 * @since         4.3.0
 */

import {ImportAccountKitWorkflowStates} from "../../../contexts/Desktop/ImportAccountKitContext";


export const defaultProps = (data = {}) => {
  const defaultData = {
    context: {
      port: {
        request: jest.fn(),
      },
    },
    importAccountKitContext: {
      navigate: jest.fn(),
      state: ImportAccountKitWorkflowStates.GET_STARTED
    }
  };

  return Object.assign(defaultData, data);
};

