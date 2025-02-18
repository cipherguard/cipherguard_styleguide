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
 * @since         4.5.3
 */

import React from "react";
import DisplayHttpError from "./DisplayHttpError";

export default {
  title: 'Components/Common/Error/DisplayHttpError',
  component: DisplayHttpError
};

const Template = args =>
  <DisplayHttpError {...args}/>;

export const Error404 = Template.bind({});
Error404.args = {
  errorCode: 404
};

export const Error403 = Template.bind({});
Error403.args = {
  errorCode: 403
};
