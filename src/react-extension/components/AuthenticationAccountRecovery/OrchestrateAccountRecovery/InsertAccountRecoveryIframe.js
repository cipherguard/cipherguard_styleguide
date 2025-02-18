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

class InsertAccountRecoveryIframe extends Component {
  constructor(props) {
    super(props);
    this.createRefs();
  }

  /**
   * ComponentDidMount
   * Invoked immediately after component is inserted into the tree
   * @return {void}
   */
  componentDidMount() {
    this.loadIframe();
  }

  /**
   * Create the iframe reference
   */
  createRefs() {
    this.iframeRef = React.createRef();
  }

  /**
   * Load the react app iframe
   * @returns {void}
   */
  async loadIframe() {
    const portId = await this.props.port.request("cipherguard.port.generate-id", "AccountRecovery");
    this.iframeRef.current.contentWindow.location = `${this.props.browserExtensionUrl}webAccessibleResources/cipherguard-iframe-account-recovery.html?cipherguard=${portId}`;
  }

  /**
   * Render the component
   * @return {JSX}
   */
  render() {
    return (
      <iframe id="cipherguard-iframe-account-recovery" ref={this.iframeRef} className="full-screen"/>
    );
  }
}

InsertAccountRecoveryIframe.propTypes = {
  browserExtensionUrl: PropTypes.string, // The browser extension url
  port: PropTypes.object, // The communication port
};

export default InsertAccountRecoveryIframe;
