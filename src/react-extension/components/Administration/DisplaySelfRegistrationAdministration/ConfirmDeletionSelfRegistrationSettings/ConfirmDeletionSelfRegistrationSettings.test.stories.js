/**
 *import { PropTypes } from 'prop-types';
 *import defaultProps from '../DisplaySelfRegistrationAdministration.test.data';
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
 * @since         3.8.3
 */

import React from "react";
import {MemoryRouter, Route} from "react-router-dom";
import {defaultProps} from "../ConfirmSaveSelfRegistrationSettings/ConfirmSaveSelfRegistrationSettings.test.data";
import ConfirmDeletionSelfRegistrationSettings from "./ConfirmDeletionSelfRegistrationSettings";


export default {
  title: 'Components/Administration/ConfirmDeletionSelfRegistrationSettings',
  component: ConfirmDeletionSelfRegistrationSettings
};

const Template = args =>
  <MemoryRouter initialEntries={['/']}>
    <Route component={routerProps => <ConfirmDeletionSelfRegistrationSettings  {...args} {...routerProps}/>}></Route>
  </MemoryRouter>;

export const Default = Template.bind({});
Default.args = defaultProps();
