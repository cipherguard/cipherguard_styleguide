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
 * @since         3.8.0
 */

import Duo from "./Duo";


describe("Duo model", () => {
  const randomClientId = "random-client-id";
  const randomHostname = "random-hostname";
  const randomClientSecret  = "random-client-secret";

  describe("Duo::constructor", () => {
    it("should init with hostName, integrationKey, salt and secretKey", () => {
      const duoParam = {
        duoHostname: randomHostname,
        duoClientId: randomClientId,
        duoClientSecret: randomClientSecret,
      };
      const duo = new Duo(duoParam);

      expect.assertions(3);

      expect(duo.apiHostName).toEqual(duoParam.duoHostname);
      expect(duo.clientId).toEqual(duoParam.duoClientId);
      expect(duo.clientSecret).toEqual(duoParam.duoClientSecret);
    });
  });
});

