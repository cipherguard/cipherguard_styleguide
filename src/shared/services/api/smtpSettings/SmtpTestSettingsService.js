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

import {ApiClient} from "../../../lib/apiClient/apiClient";

const SMTP_TEST_SETTINGS_RESOURCE_NAME = "smtp/email";

/**
 * Model related to the SMTP settings
 */
class SmtpTestSettingsService {
  /**
   * Constructor
   *
   * @param {ApiClientOptions} apiClientOptions
   * @public
   */
  constructor(apiClientOptions) {
    apiClientOptions.setResourceName(SMTP_TEST_SETTINGS_RESOURCE_NAME);
    this.apiClient = new ApiClient(apiClientOptions);
  }

  /**
   * Call for sending a test email using Cipherguard API
   * @param {SendTestEmailDto} sendTestEmailDto
   * @return {Promise<void>}
   */
  async sendTestEmail(sendTestEmailDto) {
    const response = await this.apiClient.create(sendTestEmailDto);
    return response.body;
  }
}

export default SmtpTestSettingsService;
