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
 * @since         4.9.0
 */
import React, {Component} from "react";

class TooltipMessageFingerprintLoading extends Component {
  /**
   * Render the component
   * @return {JSX}
   */
  render() {
    return (
      <div className="fingerprint skeleton">
        <div className="fingerprint-line">&nbsp;</div>
        <div className="fingerprint-line">&nbsp;</div>
        <div className="shimmer shimmer-tooltip"></div>
      </div>
    );
  }
}

export default TooltipMessageFingerprintLoading;
