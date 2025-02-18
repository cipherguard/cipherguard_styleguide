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
 * @since         3.2.0
 */

import AppContext from "../../context/AppContext/AppContext";
import {MemoryRouter, Route} from "react-router-dom";
import React from "react";
import ConfigurePasswordGenerator from "./ConfigurePasswordGenerator";
import {defaultProps} from "./ConfigurePasswordGenerator.test.data";

export default {
  title: 'Components/ResourcePassword/ConfigurePasswordGenerator',
  component: ConfigurePasswordGenerator
};

const Template = args =>
  <AppContext.Provider>
    <MemoryRouter initialEntries={['/']}>
      <Route component={routerProps => <ConfigurePasswordGenerator {...args} {...routerProps}/>}>
      </Route>
    </MemoryRouter>
  </AppContext.Provider>;

export const Initial = Template.bind({});
Initial.args = defaultProps();
