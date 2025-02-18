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
import {defaultProps} from "./EnterNewPassphrase.test.data";
import EnterNewPassphrase from "./EnterNewPassphrase";

export default {
  title: 'Components/UserSetting/EnterNewPassphrase',
  component: EnterNewPassphrase
};

const Template = args =>
  <MemoryRouter initialEntries={['/']}>
    <div className="page">
      <div className="panel">
        <Route component={routerProps => <EnterNewPassphrase {...args} {...routerProps}/>}></Route>
      </div>
    </div>
  </MemoryRouter>;

export const Initial = Template.bind({});
Initial.args = defaultProps();


