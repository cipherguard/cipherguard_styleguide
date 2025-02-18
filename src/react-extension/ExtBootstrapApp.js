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
 * @since        3.0.0
 */
import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import PropTypes from "prop-types";
import InsertAppIframe from "./components/InsertAppIframe";
import InsertFileIframe from "./components/InsertFileIframe";
import UserSettings from "../shared/lib/Settings/UserSettings";
import HandleExtAppBootstrapRouteChangeRequested from "./components/Common/Route/HandleExtAppBootstrapRouteChangeRequested";

/**
 * The bootstrap of the cipherguard application served by the browser extension.
 * This application is inserted in the page served by the API and inject the iframe that will contain the cipherguard application.
 */
class ExtBootstrapApp extends Component {
  constructor(props) {
    super(props);
    this.state = this.getDefaultState(props);
  }

  /**
   * Component default state
   * @param props
   * @returns {object}
   */
  getDefaultState(props) {
    return {
      port: props.port,
      storage: props.storage,
      userSettings: null
    };
  }

  /**
   * ComponentDidMount
   * Invoked immediately after component is inserted into the tree
   * @return {void}
   */
  componentDidMount() {
    this.getUserSettings();
  }

  /**
   * It returns true if the page is detected as a cipherguard app.
   * For that purpose, it simply checks if <html> has a class 'cipherguard' set.
   * @returns {boolean}
   */
  isCipherguardApp() {
    const rootNode = document.getRootNode();
    const htmlTag = rootNode.lastChild;

    return htmlTag?.tagName === "HTML"
      && htmlTag.classList.contains('cipherguard');
  }

  /**
   * Get the list of user settings from local storage and set it in the state
   * Using UserSettings
   */
  async getUserSettings() {
    const storageData = await this.props.storage.local.get(["_cipherguard_data"]);
    const userSettings = new UserSettings(storageData._cipherguard_data.config);
    this.setState({userSettings});
  }

  /**
   * Is the component ready
   * @returns {boolean}
   */
  get isReady() {
    return this.state.userSettings !== null;
  }

  /**
   * Get the application pathname.
   * @returns {string}
   */
  get basename() {
    const trustedDomain = this.state.userSettings.getTrustedDomain();
    const urlTrustedDomain = new URL(trustedDomain);
    return urlTrustedDomain.pathname;
  }

  render() {
    if (!this.isCipherguardApp()) {
      return null;
    }

    return (
      <>
        {this.isReady &&
        <Router basename={this.basename}>
          <HandleExtAppBootstrapRouteChangeRequested port={this.props.port}/>
          <Switch>
            <Route exact path={[
              "/app/account-recovery/requests/review/:accountRecoveryRequestId",
              "/app/administration/subscription",
              "/app/administration/account-recovery",
              "/app/administration/sso",
              "/app/administration/password-policies",
              "/app/administration/user-passphrase-policies",
              "/app/administration/password-expiry",
              "/app/folders/view/:filterByFolderId",
              "/app/groups/view/:selectedGroupId",
              "/app/groups/edit/:selectedGroupId",
              "/app/passwords/view/:selectedResourceId",
              "/app/passwords/filter/:filterType",
              "/app/passwords",
              "/app/settings",
              "/app/settings/keys",
              "/app/settings/profile",
              "/app/settings/passphrase",
              "/app/settings/security-token",
              "/app/settings/mobile",
              "/app/settings/desktop",
              "/app/settings/account-recovery",
              "/app/settings/account-recovery/edit",
              "/app/settings/theme",
              "/app/users/view/:selectedUserId",
              "/app/users",
              "/app",
              "/",
            ]}>
              <InsertAppIframe port={this.props.port} browserExtensionUrl={this.props.browserExtensionUrl}/>
              <InsertFileIframe port={this.props.port} browserExtensionUrl={this.props.browserExtensionUrl}/>
            </Route>
          </Switch>
        </Router>
        }
      </>
    );
  }
}

ExtBootstrapApp.propTypes = {
  browserExtensionUrl: PropTypes.string, // The browser extension url
  port: PropTypes.object, // The browser extension communication port
  storage: PropTypes.object, // The extension local storage
};

export default ExtBootstrapApp;
