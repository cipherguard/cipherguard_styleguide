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

import React from "react";
import {MemoryRouter, Route} from "react-router-dom";
import MockTranslationProvider from "../../../test/mock/components/Internationalisation/MockTranslationProvider";
import DisplayExpiredAccountRecovery from "./DisplayExpiredAccountRecovery";

export default {
  title: 'Components/User/DisplayExpiredAccountRecovery',
  component: DisplayExpiredAccountRecovery
};

const Template = args =>
  <MockTranslationProvider>
    <MemoryRouter initialEntries={['/']}>
      <Route component={routerProps => <DisplayExpiredAccountRecovery {...args} {...routerProps}/>}></Route>
    </MemoryRouter>
  </MockTranslationProvider>;

export const Initial = Template.bind({});
