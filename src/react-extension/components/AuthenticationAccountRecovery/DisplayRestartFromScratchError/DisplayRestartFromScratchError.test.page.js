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
 * @since         3.6.0
 */

import {render} from "@testing-library/react";
import React from "react";
import DisplayRestartFromScratchError from "./DisplayRestartFromScratchError";
import MockTranslationProvider from "../../../test/mock/components/Internationalisation/MockTranslationProvider";

/**
 * The DisplayRestartFromScratchErrorPage component represented as a page
 */
export default class DisplayRestartFromScratchErrorPage {
  /**
   * Default constructor
   */
  constructor() {
    this._page = render(
      <MockTranslationProvider>
        <DisplayRestartFromScratchError/>
      </MockTranslationProvider>
    );
  }

  /**
   * Returns the title
   */
  get title() {
    return this._page.container.querySelector('.setup-error h1').textContent;
  }

  /**
   * Returns the message
   */
  get message() {
    return this._page.container.querySelector('.setup-error p').textContent;
  }

  /**
   * Restart from scratch link
   */
  get linkToRestartFromScratch() {
    return this._page.container.querySelector('.setup-error .form-actions .button.primary.big').textContent;
  }

  /**
   * Returns true if the page object exists in the container
   */
  exists() {
    return this.title !== null;
  }
}
