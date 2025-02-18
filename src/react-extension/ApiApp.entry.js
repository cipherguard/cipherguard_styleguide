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
 */
import React from "react";
import ReactDOM from "react-dom";
import ApiApp from "./ApiApp";

/**
 * Entry point - Cipherguard application served by the API.
 * This entry point will be used to compile the production code see webpack-api.config.js
 */
const appDomElement = document.createElement("div");
document.body.appendChild(appDomElement);
ReactDOM.render(<ApiApp/>, appDomElement);
