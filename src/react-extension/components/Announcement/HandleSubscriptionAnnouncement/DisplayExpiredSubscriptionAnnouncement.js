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
 * @since         3.2.0
 */
import React from "react";
import PropTypes from "prop-types";
import AnnouncementWrapper
  from "../AnnouncementWrapper/AnnouncementWrapper";
import {withNavigationContext} from "../../../contexts/NavigationContext";
import {Trans, withTranslation} from "react-i18next";
import {withAnnouncement} from "../../../contexts/AnnouncementContext";

/**
 * This component allows to display the subscription announcement
 */
class DisplayExpiredSubscriptionAnnouncement extends React.Component {
  /**
   * Render the component
   * @returns {JSX}
   */
  render() {
    return (
      <AnnouncementWrapper className="subscription" onClose={this.props.onClose} canClose={false}>
        <p>
          <Trans>Warning:</Trans>&nbsp;
          <Trans>your subscription requires your attention. The stability of the application is at risk.</Trans>
          <button className="link" type="button" onClick={this.props.navigationContext.onGoToAdministrationSubscriptionRequested}>
            <Trans>Manage Subscription</Trans>
          </button>
        </p>
      </AnnouncementWrapper>
    );
  }
}

DisplayExpiredSubscriptionAnnouncement.propTypes = {
  navigationContext: PropTypes.any, // The application navigation context
  onClose: PropTypes.func, // The close function
  i18n: PropTypes.any
};

export default withNavigationContext(withAnnouncement(withTranslation("common")(DisplayExpiredSubscriptionAnnouncement)));
