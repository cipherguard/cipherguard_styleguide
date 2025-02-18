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
 * @since         4.6.1
 */
import {MemoryRouter, Route} from "react-router-dom";
import React from "react";
import ConfirmCreateEdit, {
  ConfirmEditCreateOperationVariations,
  ConfirmEditCreateRuleVariations
} from "./ConfirmCreateEdit";
import {defaultResourceDto} from "../../../../shared/models/entity/resource/resourceEntity.test.data";

export default {
  title: 'Components/Resource/ConfirmCreateEdit',
  component: ConfirmCreateEdit
};

const Template = () => args =>
  <MemoryRouter initialEntries={['/']}>
    <Route component={routerProps => <ConfirmCreateEdit {...args} {...routerProps}/>}></Route>
  </MemoryRouter>;

export const CreateConfirmPwnedPassword = Template().bind({});
CreateConfirmPwnedPassword.args = {
  operation: ConfirmEditCreateOperationVariations.CREATE,
  rule: ConfirmEditCreateRuleVariations.IN_DICTIONARY,
  resourceName: defaultResourceDto().name
};

export const CreateConfirmMinimumEntropyPassword = Template().bind({});
CreateConfirmMinimumEntropyPassword.args = {
  operation: ConfirmEditCreateOperationVariations.CREATE,
  rule: ConfirmEditCreateRuleVariations.MINIMUM_ENTROPY,
  resourceName: defaultResourceDto().name
};

export const EditConfirmPwnedPassword = Template().bind({});
EditConfirmPwnedPassword.args = {
  operation: ConfirmEditCreateOperationVariations.EDIT,
  rule: ConfirmEditCreateRuleVariations.IN_DICTIONARY,
  resourceName: defaultResourceDto().name
};

export const EditConfirmMinimumEntropyPassword = Template().bind({});
EditConfirmMinimumEntropyPassword.args = {
  operation: ConfirmEditCreateOperationVariations.EDIT,
  rule: ConfirmEditCreateRuleVariations.MINIMUM_ENTROPY,
  resourceName: defaultResourceDto().name
};
