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
 * @link          https=//www.cipherguard.com Cipherguard(tm)
 * @since         3.8.0
 */
import SubscriptionDto from './SubscriptionDto';
import {mockSubscription, mockSubscriptionModel} from '../../../react-extension/components/Administration/DisplaySubscriptionKey/DisplaySubscriptionKey.test.data';

/**
 * Test model related to the subscription dto
 */
describe("SubscriptionDto model", () => {
  describe("SubscriptionDto::constructor", () => {
    it("should init dto with model", () => {
      expect.assertions(1);
      const dto = new SubscriptionDto(mockSubscriptionModel);
      expect(dto).toEqual(mockSubscription);
    });
  });
});



