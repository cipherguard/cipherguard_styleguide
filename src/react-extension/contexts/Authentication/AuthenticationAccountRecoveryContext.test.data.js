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

import MockPort from "../../test/mock/MockPort";
import {defaultAppContext} from "../ExtAppContext.test.data";

/**
 * Default app context for authentication account recovery context.
 * @param {Object} appContext The context properties override
 * @return {Object}
 */
export function defaultAuthenticationAccountRecoveryAppContext(appContext = {}) {
  const port = new MockPort();
  port.addRequestListener("cipherguard.account-recovery.continue", jest.fn());
  port.addRequestListener("cipherguard.account-recovery.get-account", jest.fn());
  port.addRequestListener("cipherguard.account-recovery.verify-passphrase", jest.fn());
  port.addRequestListener("cipherguard.account-recovery.recover-account", jest.fn());
  port.addRequestListener("cipherguard.account-recovery.sign-in", jest.fn());
  port.addRequestListener("cipherguard.account-recovery.request-help-credentials-lost", jest.fn());
  port.addRequestListener("cipherguard.account-recovery.download-recovery-kit", jest.fn());

  const defaultAuthenticationRecover = {
    port: port,
    onRefreshLocaleRequested: jest.fn(),
  };
  return Object.assign(defaultAppContext(defaultAuthenticationRecover), appContext);
}

/**
 * Default props.
 * @param {Object} props The props to override
 * @returns {object}
 */
export function defaultProps(props = {}) {
  const defaultProps = {
    context: defaultAuthenticationAccountRecoveryAppContext(props?.context),
  };
  delete props.context;
  return Object.assign(defaultProps, props);
}
