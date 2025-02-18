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

import {MemoryRouter, Route} from "react-router-dom";
import React from "react";
import ProvideAccountRecoveryOrganizationKey from "./ProvideAccountRecoveryOrganizationKey";
import userSettingsFixture from "../../../test/fixture/Settings/userSettings";
import UserSettings from "../../../../shared/lib/Settings/UserSettings";

export default {
  title: 'Components/Administration/ProvideAccountRecoveryOrganizationKey',
  component: ProvideAccountRecoveryOrganizationKey
};


const Template = args =>
  <MemoryRouter initialEntries={['/']}>
    <Route component={routerProps => <ProvideAccountRecoveryOrganizationKey {...args} {...routerProps}/>}></Route>
  </MemoryRouter>;

export const Initial = Template.bind({});
Initial.args = {
  context: {
    userSettings: new UserSettings(userSettingsFixture),
  },
  onClose: () => {}
};



