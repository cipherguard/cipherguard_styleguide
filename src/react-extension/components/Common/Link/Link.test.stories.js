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

export default {
  title: 'Foundations/Link',
  component: "Link"
};


const Template = () =>
  <div style={{display: "flex", flexWrap: "wrap"}}>
    <div style={{width: "25%"}}>
      <a>admin@cipherguard.com</a>
    </div>
    <div style={{width: "25%"}}>
      <a className="disabled">admin@cipherguard.com</a>
    </div>
    <div style={{width: "25%"}}>
      <button type="button" className="link">admin@cipherguard.com</button>
    </div>
    <div style={{width: "25%"}}>
      <button type="button" className="link" disabled>admin@cipherguard.com</button>
    </div>
  </div>
  ;

export const Default = Template.bind({});
