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

import React from "react";
import {MemoryRouter, Route} from "react-router-dom";
import EnterUsernameForm from "./EnterUsernameForm";

export default {
  title: 'Components/Authentication/EnterUsernameForm',
  component: EnterUsernameForm
};

const Template = args =>
  <div id="container" className="container page login">
    <div className="content">
      <div className="login-form">
        <MemoryRouter initialEntries={['/']}>
          <Route component={routerProps => <EnterUsernameForm {...args} {...routerProps}/>}/>
        </MemoryRouter>
      </div>
    </div>
  </div>;

export const Initial = Template.bind({});
Initial.parameters = {
  css: "ext_authentication"
};

export const WithSsoRecoverEnabled = Template.bind({});
WithSsoRecoverEnabled.parameters = {
  css: "ext_authentication"
};

WithSsoRecoverEnabled.args = {
  isSsoRecoverEnabled: true
};
