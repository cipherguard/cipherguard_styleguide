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
import SearchBar from "./SearchBar";
import {defaultProps} from "./SearchBar.test.data";

export default {
  title: 'Foundations/Search',
  component: "SearchBar"
};


const Template = () =>
  <div style={{display: "flex", flexWrap: "wrap"}}>
    <span style={{width: "100%"}}>Search</span>
    <div style={{width: "49%", marginRight: "1%"}}>
      <SearchBar {...defaultProps()} />
    </div>
    <div style={{width: "49%", marginRight: "1%"}}>
      <SearchBar {...defaultProps({disabled: true})} />
    </div>
  </div>;

export const Default = Template.bind({});
