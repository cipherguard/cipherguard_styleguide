/**
 * Cipherguard ~ Open source password manager for teams
 * Copyright (c) 2020 Cipherguard SA (https://www.cipherguard.com)
 *
 * Licensed under GNU Affero General Public License version 3 of the or any later version.
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright     Copyright (c) 2020 Cipherguard SA (https://www.cipherguard.com)
 * @license       https://opensource.org/licenses/AGPL-3.0 AGPL License
 * @link          https://www.khulnasoft.com KhulnaSoft(tm)
 * @since         3.9.0
 */
import ExtAuthenticationLogin from "./ExtAuthenticationLogin";
import MockPort from "./test/mock/MockPort";
import siteSettingsFixture from "./test/fixture/Settings/siteSettings";
import mockStorage from "../../test/mocks/mockStorage";

export default {
  title: 'Components/ExtAuthenticationLogin/ExtAuthenticationLogin',
  component: ExtAuthenticationLogin,
  parameters: {
    css: "ext_authentication"
  }
};

function getMockedPort() {
  const mockedPort = new MockPort();
  mockedPort.addRequestListener("cipherguard.organization-settings.get", () => siteSettingsFixture);
  mockedPort.addRequestListener("cipherguard.locale.get", () => ({
    locale: 'en-UK',
    label: 'English'
  }));
  return mockedPort;
}

export const Initial = {
  args: {
    port: getMockedPort(),
    storage: mockStorage()
  },
};

const mockedPortWithSso = getMockedPort();
const ssoLocalConfiguredProvider = "azure";
mockedPortWithSso.addRequestListener("cipherguard.sso.get-local-configured-provider", () => ssoLocalConfiguredProvider);

export const WithSsoKitAvailable = {
  args: {
    port: mockedPortWithSso,
    storage: mockStorage()
  },
};
