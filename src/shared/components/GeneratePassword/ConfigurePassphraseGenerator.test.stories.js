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

import {MemoryRouter, Route} from "react-router-dom";
import React from "react";
import ConfigurePassphraseGenerator from "./ConfigurePassphraseGenerator";
import {defaultProps} from "./ConfigurePassphraseGenerator.test.data";

export default {
  title: 'Components/ResourcePassword/ConfigurePassphraseGenerator',
  component: ConfigurePassphraseGenerator
};

const Template = args =>
  <MemoryRouter initialEntries={['/']}>
    <Route component={routerProps => <ConfigurePassphraseGenerator {...args} {...routerProps}/>}></Route>
  </MemoryRouter>;

export const Initial = Template.bind({});
Initial.args = defaultProps();
