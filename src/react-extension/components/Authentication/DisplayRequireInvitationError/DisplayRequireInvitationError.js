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
 * @since         3.0.0
 */
import React, {Component} from "react";
import {withAppContext} from "../../../../shared/context/AppContext/AppContext";
import PropTypes from "prop-types";
import {Trans, withTranslation} from "react-i18next";

class DisplayRequireInvitationError extends Component {
  /**
   * Render the component
   * @returns {JSX}
   */
  render() {
    return (
      <div className="setup-error">
        <h1><Trans>Access to this service requires an invitation.</Trans></h1>
        <p><Trans>This email is not associated with any approved users on this domain.</Trans> <Trans>Please contact your administrator to request an invitation link.</Trans></p>
        <div className="form-actions">
          <a href={`${this.props.context.trustedDomain}/users/recover`}
            className="button primary big full-width"
            role="button"
            rel="noopener noreferrer">
            <Trans>Try with another email</Trans>
          </a>
        </div>
      </div>
    );
  }
}

DisplayRequireInvitationError.propTypes = {
  context: PropTypes.any, // The application context
};
export default withAppContext(withTranslation("common")(DisplayRequireInvitationError));
