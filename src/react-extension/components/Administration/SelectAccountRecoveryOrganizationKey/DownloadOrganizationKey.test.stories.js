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
import DownloadOrganizationKey from "./DownloadOrganizationKey";
import AppContext from "../../../../shared/context/AppContext/AppContext";
import UserSettings from "../../../../shared/lib/Settings/UserSettings";
import userSettingsFixture from "../../../test/fixture/Settings/userSettings";

export default {
  title: 'Components/Administration/DownloadOrganizationKey',
  component: DownloadOrganizationKey
};

const context = {
  userSettings: new UserSettings(userSettingsFixture),
};

const Template = args =>
  <AppContext.Provider value={context}>
    <MemoryRouter initialEntries={['/']}>
      <div className="panel main">
        <div className="panel middle">
          <div className="grid grid-responsive-12">
            <Route component={routerProps => <DownloadOrganizationKey {...args} {...routerProps} />}></Route>
          </div>
        </div>
      </div>
    </MemoryRouter>
  </AppContext.Provider>;

export const Default = Template.bind({});
Default.args = {
  onClose: () => { console.log("onClose call"); },
  handleDownloadAgain: () => { console.log("handleDownloadAgain call"); }
};
