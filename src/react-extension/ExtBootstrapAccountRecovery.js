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

import React, {Component} from "react";
import PropTypes from "prop-types";
import InsertAccountRecoveryIframe
  from "./components/AuthenticationAccountRecovery/OrchestrateAccountRecovery/InsertAccountRecoveryIframe";
import InsertFileIframe from "./components/InsertFileIframe";

/**
 * The bootstrap of the account recovery application served by the browser extension.
 * This application is inserted in the page served by the API and inject the iframe that will contain the recover application.
 */
class ExtBootstrapAccountRecovery extends Component {
  /**
   * Whenever the component is mounted
   */
  componentDidMount() {
    this.removeSkeleton();
    this.handleRemoveIframeRequested();
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
   * Remove skeleton preloaded in html if any
   */
  removeSkeleton() {
    const skeleton = document.getElementById("temporary-skeleton");
    if (skeleton) {
      skeleton.remove();
    }
  }

  /**
   * Whenever the background page request the recover iframe to be removed.
   */
  handleRemoveIframeRequested() {
    this.props.port.on("cipherguard.account-recovery-bootstrap.remove-iframe", this.removeAccountRecoveryIframe.bind(this));
  }

  /**
   * Remove the iframe
   */
  removeAccountRecoveryIframe() {
    const iframe = document.getElementById("cipherguard-iframe-account-recovery");
    if (iframe) {
      iframe.remove();
    }
  }

  render() {
    if (!this.isCipherguardApp()) {
      return null;
    }

    return (
      <>
        <InsertAccountRecoveryIframe port={this.props.port} browserExtensionUrl={this.props.browserExtensionUrl}/>
        <InsertFileIframe port={this.props.port} browserExtensionUrl={this.props.browserExtensionUrl}/>
      </>
    );
  }
}
ExtBootstrapAccountRecovery.propTypes = {
  browserExtensionUrl: PropTypes.string, // The browser extension url
  port: PropTypes.object, // The communication port
};

export default ExtBootstrapAccountRecovery;
