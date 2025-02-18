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

import React from "react";
import {defaultProps} from "./EditStandaloneTotp.test.data";
import EditStandaloneTotp from "./EditStandaloneTotp";
import MockPort from "../../../test/mock/MockPort";
import {defaultTotpViewModelDto} from "../../../../shared/models/totp/TotpDto.test.data";
import {defaultUserAppContext} from "../../../contexts/ExtAppContext.test.data";

export default {
  title: 'Components/Resource/EditStandaloneTotp',
  component: EditStandaloneTotp,
};

const port = new MockPort();
port.addRequestListener("cipherguard.secret.find-by-resource-id", () => ({totp: defaultTotpViewModelDto()}));

const Template = args  =>
  <EditStandaloneTotp {...args}/>;

export const Initial = Template.bind({});
Initial.args = defaultProps({context: defaultUserAppContext({port})});
