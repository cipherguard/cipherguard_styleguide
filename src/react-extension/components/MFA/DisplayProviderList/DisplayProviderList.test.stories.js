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
 * @since         4.4.0
 */

import React from "react";
import MockTranslationProvider from "../../../test/mock/components/Internationalisation/MockTranslationProvider";
import {defaultProps, propsWithMfaProviders, propsWithoutMfaProviders} from "./DisplayProviderList.test.data";
import {MfaContextProvider} from "../../../contexts/MFAContext";
import DisplayProviderList from "../DisplayProviderList/DisplayProviderList";

export default {
  title: 'Components/MFA/DisplayProviderList',
  component: DisplayProviderList
};

const Template = args =>
  <MfaContextProvider {...args}>
    <MockTranslationProvider>
      <div className="panel middle">
        <div className="grid grid-responsive-12">
          <DisplayProviderList {...args} />
        </div>
      </div>
    </MockTranslationProvider>;
  </MfaContextProvider>;

export const Default = Template.bind({});
Default.args = propsWithMfaProviders();

export const WithoutMfaProvidersAllowed = Template.bind({});
WithoutMfaProvidersAllowed.args = propsWithoutMfaProviders();

export const NotHttps = Template.bind({});
NotHttps.args = defaultProps();
