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
 * @since         4.3.0
 */

import React from "react";
import GetStartedDesktop from "./GetStartedDesktop";


export default {
  title: 'Components/Desktop/GetStartedDesktop',
  component: GetStartedDesktop
};

const Template = () =>
  <div id="container" className="container page login">
    <div className="content">
      <div className="login-form"><GetStartedDesktop />
      </div>
    </div>
  </div>;

const defaultParameters = {
  css: "ext_authentication"
};
export const Default = Template.bind({});
Default.parameters = defaultParameters;
