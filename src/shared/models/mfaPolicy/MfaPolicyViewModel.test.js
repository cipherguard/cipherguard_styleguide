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
 * @since         3.10.0
 */
import {MfaPolicyEnumerationTypes} from "./MfaPolicyEnumeration";
import MfaPolicyViewModel from "./MfaPolicyViewModel";

describe("MfaPolicyViewModel", () => {
  it("should create an instance with provided values", () => {
    const settings = {
      policy: MfaPolicyEnumerationTypes.MANDATORY,
      remember_me_for_a_month: false,
    };
    const viewModel = new MfaPolicyViewModel(settings);
    expect(viewModel.policy).toBe(MfaPolicyEnumerationTypes.MANDATORY);
    expect(viewModel.rememberMeForAMonth).toBe(false);
  });
});
