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
 * @since         3.3.0
 */

/**
 * Bootstrap the legacy auth login page.
 * The workflows have changed and a user visiting the legacy api login page with an unconfigured browser extension
 * should not be requested to download the extension.
 * @deprecated to be removed with v4
 */
function legacyAuthLogin() {
  if (!isLegacyApi()) { return; }

  const baseElements = document.getElementsByTagName('base');
  if (!baseElements || !baseElements.length) { return; }
  const baseUrl = baseElements[0].attributes.href.value.replace(/\/*$/g, ''); // Remove last slash

  // Plugin check warning instead of error
  const pluginCheckElements = document.getElementsByClassName("plugin-check");
  if (!pluginCheckElements || !pluginCheckElements.length) { return; }
  pluginCheckElements[0].classList.remove("error");
  pluginCheckElements[0].classList.add("warning");

  // Plugin check feedback
  const pluginCheckMessageElements = document.querySelectorAll(".plugin-check .message");
  if (!pluginCheckMessageElements || !pluginCheckMessageElements.length) { return; }
  pluginCheckMessageElements[0].textContent = "The plugin is installed but not configured. Please contact your domain administrator to request an invitation, or ";

  // Plugin check recover feedback link
  const pluginCheckRecoverLinkElement = document.createElement('a');
  const pluginCheckRecoverLinkTextElement = document.createTextNode("recover your account if you already have one!");
  pluginCheckRecoverLinkElement.appendChild(pluginCheckRecoverLinkTextElement);
  pluginCheckRecoverLinkElement.href = `${baseUrl}/users/recover`;
  pluginCheckRecoverLinkElement.rel = "noopener,noreferrer";
  pluginCheckMessageElements[0].appendChild(pluginCheckRecoverLinkElement);

  // Download plugin big icon to it's fine rocket icon!
  const downloadPluginElements = document.querySelectorAll(".fa-download.huge");
  if (!downloadPluginElements || !downloadPluginElements.length) { return; }
  downloadPluginElements[0].classList.remove("fa-download");
  downloadPluginElements[0].classList.add("fa-rocket");

  // Remove download CTA plugin
  const downloadPluginButtonElements = document.querySelectorAll(".button.primary");
  if (!downloadPluginButtonElements || !downloadPluginButtonElements.length) { return; }
  downloadPluginButtonElements[0].remove();

  // It's fine feedback!
  const usersLoginFormFeedbackElements = document.querySelectorAll(".users.login.form .feedback");
  if (!usersLoginFormFeedbackElements || !usersLoginFormFeedbackElements.length) { return; }
  const usersLoginFormFeedbackElement = document.createElement('p');
  const usersLoginFormFeedbackTextElement = document.createTextNode("You need an account to login.");
  usersLoginFormFeedbackElement.appendChild(usersLoginFormFeedbackTextElement);
  usersLoginFormFeedbackElements[0].appendChild(usersLoginFormFeedbackElement);
}

function isLegacyApi() {
  const legacyElements = document.querySelectorAll("html.cipherguard .js_main-login-section");
  return legacyElements && legacyElements.length !== 0;
}

export const AuthLogin = {legacyAuthLogin};
