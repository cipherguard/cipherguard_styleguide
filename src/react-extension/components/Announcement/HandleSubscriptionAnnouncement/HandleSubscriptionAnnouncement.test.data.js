/**
 * Cipherguard ~ Open source password manager for teams
 * Copyright (c) 2021 Cipherguard SA (https://www.cipherguard.com)
 *
 * Licensed under GNU Affero General Public License version 3 of the or any later version.
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright     Copyright (c) 2021 Cipherguard SA (https://www.cipherguard.com)
 * @license       https://opensource.org/licenses/AGPL-3.0 AGPL License
 * @link          https://www.khulnasoft.com KhulnaSoft(tm)
 * @since         3.2.0
 */
import {DateTime} from "luxon";
import MockPort from "../../../test/mock/MockPort";

/**
 * Default props
 * @returns {*}
 */
export function defaultProps() {
  return {
    context: {
      port: new MockPort(),
      onGetSubscriptionKeyRequested: jest.fn()
    },
    announcementContext: {
      announcements: [],
      show: jest.fn(),
      close: jest.fn(),
    }
  };
}

export const mockSubscriptionGoingToExpired = {
  "customer_id": "1n6BPvHRWfizhmARz",
  "subscription_id": "1n6BPvHRWfizhmARz",
  "users": 5,
  "email": "ada@cipherguard.com",
  "created": "2020-12-01",
  "expiry": DateTime.now().minus({days: 10}).toISO(),
  "data": "data"
};
