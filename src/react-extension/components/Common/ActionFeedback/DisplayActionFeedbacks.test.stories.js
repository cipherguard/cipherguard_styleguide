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
import {propsWithOneErrorMessage, propsWithOneSuccessMessage} from "./DisplayActionFeedbacks.test.data";
import DisplayActionFeedbacks from "./DisplayActionFeedbacks";

export default {
  title: 'Components/Common/ActionFeedback',
  component: "DisplayActionFeedbacks"
};


const Template = args => <DisplayActionFeedbacks {...args}/>;

export const Success = Template.bind({});
Success.args = propsWithOneSuccessMessage;

export const Error = Template.bind({});
Error.args = propsWithOneErrorMessage;
