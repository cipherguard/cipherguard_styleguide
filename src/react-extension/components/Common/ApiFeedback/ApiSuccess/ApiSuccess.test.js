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
 * @since         3.10.0
 */
import ApiSuccessPage from "./ApiSuccess.test.page";

beforeEach(() => {
  jest.resetModules();
});

describe("ApiSuccess", () => {
  it('Should display the given message from the content of the page', async() => {
    expect.assertions(2);
    const props = {
      message: "You successfully authenticated."
    };
    const page = new ApiSuccessPage(props);

    expect(page.exists()).toBeTruthy();
    expect(page.message.textContent).toStrictEqual(props.message);
  });
});
