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
 * @since         4.7.0
 */
import {defaultApiClientOptions} from '../../../lib/apiClient/apiClientOptions.test.data';
import {enableFetchMocks} from "jest-fetch-mock";
import AuthLogoutService from "./AuthLogoutService";
import {mockApiResponse, mockApiResponseError} from "../../../../../test/mocks/mockApiResponse";
import CipherguardApiFetchError from "../../../lib/Error/CipherguardApiFetchError";

beforeEach(async() => {
  enableFetchMocks();
  jest.clearAllMocks();
});

describe("AuthLogoutService", () => {
  describe("AuthLogoutService::exec", () => {
    it("Should call the API on logout endpoint with a POST request", async() => {
      expect.assertions(1);

      const apiClientOptions = defaultApiClientOptions();
      const service = new AuthLogoutService(apiClientOptions);

      fetch.doMockOnceIf(/auth\/logout\.json\?api-version=v2/, async req => {
        expect(req.method).toStrictEqual("POST");
        return mockApiResponse({});
      });

      await service.logout();
    });

    it("Should call the API on logout endpoint with a POST request then a GET request if the POST endpoint is not found", async() => {
      expect.assertions(2);

      const apiClientOptions = defaultApiClientOptions();
      const service = new AuthLogoutService(apiClientOptions);

      fetch.doMockOnceIf(/auth\/logout\.json\?api-version=v2/, async req => {
        expect(req.method).toStrictEqual("POST");
        return mockApiResponseError(404, "Use the legacy endpoint instead");
      });

      fetch.doMockOnceIf(/auth\/logout\.json\?api-version=v2/, async req => {
        expect(req.method).toStrictEqual("GET");
        return mockApiResponse({});
      });

      await service.logout();
    });

    it("Should throw an exception if the POST logout endpoint does not exists and the GET endpoint sends an error", async() => {
      expect.assertions(3);

      const apiClientOptions = defaultApiClientOptions();
      const service = new AuthLogoutService(apiClientOptions);

      fetch.doMockOnceIf(/auth\/logout\.json\?api-version=v2/, async req => {
        expect(req.method).toStrictEqual("POST");
        return mockApiResponseError(404, "Use the legacy endpoint instead");
      });

      fetch.doMockOnceIf(/auth\/logout\.json\?api-version=v2/, async req => {
        expect(req.method).toStrictEqual("GET");
        return mockApiResponseError(500, "Something went wrong");
      });

      try {
        await service.logout();
      } catch (e) {
        const expectedError = new CipherguardApiFetchError('An unexpected error happened during the legacy logout process');
        expect(e).toStrictEqual(expectedError);
      }
    });
  });
});
