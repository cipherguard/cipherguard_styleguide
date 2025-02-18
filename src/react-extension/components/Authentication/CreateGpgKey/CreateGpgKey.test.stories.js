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
 * @since         3.0.0
 */
import React from "react";
import {MemoryRouter, Route} from "react-router-dom";
import CreateGpgKey, {CreateGpgKeyVariation} from "./CreateGpgKey";
import {defaultProps} from "./CreateGpgKey.test.data";

export default {
  title: 'Components/Authentication/CreateGpgKey',
  component: CreateGpgKey
};

const Template = args =>
  <div id="container" className="container page login">
    <div className="content">
      <div className="login-form">
        <MemoryRouter initialEntries={['/']}>
          <Route component={routerProps => <CreateGpgKey {...args} {...routerProps}/>}/>
        </MemoryRouter>
      </div>
    </div>
  </div>;

const defaultParameters = {
  css: "ext_authentication"
};

export const Setup = Template.bind({});
Setup.args = defaultProps({displayAs: CreateGpgKeyVariation.SETUP});
Setup.parameters = defaultParameters;

export const GenerateAccountRecoveryGpgKey = Template.bind({});
GenerateAccountRecoveryGpgKey.args = defaultProps({displayAs: CreateGpgKeyVariation.GENERATE_ACCOUNT_RECOVERY_GPG_KEY});
GenerateAccountRecoveryGpgKey.parameters = defaultParameters;
